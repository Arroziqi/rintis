'use client';

import { useEffect, useState, useRef } from 'react';
import Card from '@/components/Card';
import { MultipleLineChart } from '@/components/chart/MultipleLineChart';
import { Chip } from '@/components/Chip';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { StyledLabel } from '@/components/input/InputLabel.styled';
import Typography from '@/components/Typography';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { getUserInfoAction } from '@/lib/feature/user/user.action';
import {
  Brain,
  EllipsisVertical,
  PlusIcon,
  TrendingDown,
  TrendingUp,
  Loader2,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  Trash,
  XIcon,
} from 'lucide-react';
import { UserInfo } from '@/types/UserInfoTypes';
import { getBalanceAction } from '@/lib/feature/balance/balance.action';
import { redirect } from 'next/navigation';
import { fetchDailyInsight } from '@/lib/feature/insight/insight.data';
import { DailyInsight } from '@/types/DailyInsightTypes';
import { fetchChartData } from '@/lib/feature/chartData/chart.data';
import ChartData from '@/types/ChartTypes';
import { fetchItemList } from '@/lib/feature/itemList/itemList.data';
import ItemList from '@/types/ItemListTypes';
import { StyledPrimaryButton } from '@/components/button/primary/PrimaryButton.styled';
import { StyledFilledInput } from '@/components/input/Input.styled';
import { submitCheckedItemsAction } from '@/lib/feature/itemList/itemList.action';
import { deleteSelectedItemsAction } from '@/lib/feature/itemList/itemList.action';
import { addNewItemAction } from '@/lib/feature/itemList/itemList.action';

export default function DashboardPage() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [userBalance, setUserBalance] = useState<number>(0);
  const [chartData, setChartData] = useState<ChartData[] | null>(null);
  const [dailyInsight, setDailyInsight] = useState<DailyInsight[] | null>(null);
  const [itemList, setItemList] = useState<ItemList[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDailyInsightLoading, setIsDailyInsightLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [isSubmittingItems, setIsSubmittingItems] = useState(false);
  const [isDeletingItems, setIsDeletingItems] = useState(false);
  const [showAddItemCard, setShowAddItemCard] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const hasLoadedRef = useRef(false);

  const handleRefreshInsight = async () => {
    setIsDailyInsightLoading(true);
    try {
      const insight = await fetchDailyInsight();
      setDailyInsight(insight);
    } catch (error) {
      console.error('Failed to fetch daily insight:', error);
    } finally {
      setIsDailyInsightLoading(false);
    }
  };

  const handleItemCheckboxChange = (itemId: number, checked: boolean) => {
    const newSelectedItems = new Set(selectedItems);
    if (checked) {
      newSelectedItems.add(itemId);
    } else {
      newSelectedItems.delete(itemId);
    }
    setSelectedItems(newSelectedItems);

    // Update selectAll if all items are selected
    if (itemList) {
      setSelectAll(newSelectedItems.size === itemList.length);
    }
  };

  const handleSelectAllChange = (checked: boolean) => {
    setSelectAll(checked);
    if (checked && itemList) {
      const allItemIds = new Set(itemList.map((item) => item.id));
      setSelectedItems(allItemIds);
    } else {
      setSelectedItems(new Set());
    }
  };

  const calculateTotalPrice = () => {
    if (!itemList) return 0;
    return itemList
      .filter((item) => selectedItems.has(item.id))
      .reduce((sum, item) => sum + item.estimated_prices, 0);
  };

  const handleSubmitCheckedItems = async () => {
    if (selectedItems.size === 0) {
      console.warn('No items selected');
      return;
    }

    setIsSubmittingItems(true);
    try {
      const itemIds = Array.from(selectedItems);
      await submitCheckedItemsAction(itemIds);

      // Remove submitted items from the list
      if (itemList) {
        const updatedList = itemList.filter(
          (item) => !selectedItems.has(item.id)
        );
        setItemList(updatedList);
      }

      // Clear selections after successful submission
      setSelectedItems(new Set());
      setSelectAll(false);

      console.log('Items submitted successfully');
    } catch (error) {
      console.error('Failed to submit items:', error);
    } finally {
      setIsSubmittingItems(false);
    }
  };

  const handleDeleteSelectedItems = async () => {
    if (selectedItems.size === 0) {
      console.warn('No items selected');
      return;
    }

    setIsDeletingItems(true);
    try {
      const itemIds = Array.from(selectedItems).map((id) => Number(id));
      console.log('Deleting items:', itemIds);
      await deleteSelectedItemsAction(itemIds);

      // Remove deleted items from the list
      if (itemList) {
        const updatedList = itemList.filter(
          (item) => !selectedItems.has(item.id)
        );
        setItemList(updatedList);
      }

      // Clear selections after successful deletion
      setSelectedItems(new Set());
      setSelectAll(false);

      console.log('Items deleted successfully');
    } catch (error) {
      console.error('Failed to delete items:', error);
    } finally {
      setIsDeletingItems(false);
    }
  };

  const handleAddNewItem = async () => {
    if (!newItemName.trim() || !newItemPrice.trim()) {
      console.warn('Item name and price are required');
      return;
    }

    setIsAddingItem(true);
    try {
      await addNewItemAction(
        editingItemId || '',
        newItemName,
        parseInt(newItemPrice)
      );

      // Reset form
      setNewItemName('');
      setNewItemPrice('');
      setEditingItemId(null);
      setShowAddItemCard(false);

      // Reload item list
      const updatedList = await fetchItemList();
      setItemList(updatedList);

      console.log(
        editingItemId ? 'Item updated successfully' : 'Item added successfully'
      );
    } catch (error) {
      console.error('Failed to add/update item:', error);
    } finally {
      setIsAddingItem(false);
    }
  };

  const handleEditItem = (item: ItemList) => {
    setEditingItemId(item.id);
    setNewItemName(item.item_name);
    setNewItemPrice(item.estimated_prices.toString());
    setShowAddItemCard(true);
  };

  const handleCloseAddItemCard = () => {
    setShowAddItemCard(false);
    setNewItemName('');
    setNewItemPrice('');
    setEditingItemId(null);
  };

  useEffect(() => {
    async function loadUserInfo() {
      try {
        const data = await getUserInfoAction();
        setUserInfo(data);
      } catch (error) {
        console.error('Failed to load user info:', error);
      }
    }
    async function loadUserBalance() {
      try {
        const balance = await getBalanceAction();
        setUserBalance(balance || 0);
      } catch (error) {
        console.error('Failed to load user balance:', error);
      }
    }
    async function loadChartData() {
      try {
        const data = await fetchChartData();
        setChartData(data);
      } catch (error) {
        console.error('Failed to load chart data:', error);
      }
    }
    async function loadItemsRecommendation() {
      try {
        const data = await fetchItemList();
        setItemList(data);
      } catch (error) {
        console.error('Failed to load items recommendation:', error);
      }
    }
    async function loadAllData() {
      try {
        await Promise.all([
          loadUserInfo(),
          loadUserBalance(),
          loadChartData(),
          loadItemsRecommendation(),
        ]);
      } finally {
        setIsLoading(false);
      }
    }

    if (!hasLoadedRef.current) {
      hasLoadedRef.current = true;
      loadAllData();
    } else {
      setIsLoading(false);
    }
  }, []);

  // Separate effect for daily insight to load independently
  useEffect(() => {
    async function generateDailyInsight() {
      try {
        setIsDailyInsightLoading(true);
        const insight = await fetchDailyInsight();
        setDailyInsight(insight);
      } catch (error) {
        console.error('Failed to fetch daily insight:', error);
      } finally {
        setIsDailyInsightLoading(false);
      }
    }

    generateDailyInsight();
  }, []);

  const displayName = userInfo?.name || 'User';
  const displayUsername = userInfo?.username || 'username';

  console.log('Selected Items:', selectedItems);

  if (isLoading) {
    return (
      <StyledFlex
        direction="column"
        gap={20}
        justify="center"
        align="center"
        height="100%"
      >
        <Loader2
          size={48}
          className="animate-spin"
          color={lightPalette.primary.main}
        />
        <Typography variant={'bodyMedium'} color={lightPalette.text.primary}>
          Tunggu sebentar, memuat data...
        </Typography>
      </StyledFlex>
    );
  }

  return (
    <>
      <StyledFlex justify="space-between" align="center">
        <StyledFlex direction="column">
          <Typography variant={'h5'} color={lightPalette.primary.main}>
            Hallo, {displayName}
          </Typography>
          <Typography variant={'caption'} color={lightPalette.text.disabled}>
            Yuk, kita kelola keuanganmu hari ini!
          </Typography>
        </StyledFlex>
        <Avatar className="w-15 h-15">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt={displayUsername}
          />
          <AvatarFallback>{displayName.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </StyledFlex>

      <Card type="fill" color="#B29CFF" className="mt-5">
        <StyledFlex direction="column" gap={5}>
          <Typography variant={'caption'} color={lightPalette.text.inverse}>
            Kamu punya,
          </Typography>
          <Typography variant={'h5'} color={lightPalette.text.inverse}>
            Rp {userBalance.toLocaleString('id-ID')}
          </Typography>
        </StyledFlex>
      </Card>

      {itemList && (
        <StyledFlex direction="column" gap={10} className="mt-5">
          <Typography variant={'caption'} color={lightPalette.text.primary}>
            Daftar item yang wajib untuk jualanmu
          </Typography>
          <StyledFlex justify="space-between">
            <div
              onClick={() => setShowAddItemCard(!showAddItemCard)}
              className="cursor-pointer transition-all hover:scale-105 active:scale-95"
            >
              <Chip
                labelWeight="bold"
                type="badge"
                label="Tambah Item"
                iconLeft={<PlusIcon />}
              />
            </div>
            <StyledFlex align="center" gap={5} className="mr-5">
              <StyledLabel htmlFor="select-all">Pilih Semua</StyledLabel>
              <div
                style={{
                  transform: 'scale(1.5)',
                  transformOrigin: 'left center',
                }}
              >
                <Checkbox
                  id="select-all"
                  checked={selectAll}
                  onCheckedChange={handleSelectAllChange}
                />
              </div>
            </StyledFlex>
          </StyledFlex>

          {/* card tambah item / edit item */}
          {showAddItemCard && (
            <Card type="outlined">
              <StyledFlex
                justify="space-between"
                gap={10}
                className="w-full"
                direction="column"
              >
                <StyledFlex justify="space-between" align="center">
                  <Typography
                    variant={'bodyMedium'}
                    weight="bold"
                    color={lightPalette.primary.main}
                  >
                    {editingItemId ? 'Edit Item' : 'Tambah Item Baru'}
                  </Typography>
                  <button
                    onClick={handleCloseAddItemCard}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <XIcon size={20} />
                  </button>
                </StyledFlex>
                <StyledFlex
                  grow={1}
                  shrink={1}
                  basis="0%"
                  direction="column"
                  gap={5}
                >
                  <StyledLabel htmlFor="nama-item">Item</StyledLabel>
                  <StyledFilledInput
                    id="nama-item"
                    placeholder="Nama item"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    required
                  />
                </StyledFlex>
                <StyledFlex
                  grow={1}
                  shrink={1}
                  basis="0%"
                  direction="column"
                  gap={5}
                >
                  <StyledLabel htmlFor="est-harga">Harga</StyledLabel>
                  <StyledFilledInput
                    id="est-harga"
                    placeholder="Rp"
                    type="number"
                    value={newItemPrice}
                    onChange={(e) => setNewItemPrice(e.target.value)}
                    required
                  />
                </StyledFlex>
                <StyledPrimaryButton
                  onClick={handleAddNewItem}
                  disabled={
                    isAddingItem || !newItemName.trim() || !newItemPrice.trim()
                  }
                  className="w-full"
                >
                  <Typography
                    variant={'pixie'}
                    color={lightPalette.text.inverse}
                    weight="bold"
                  >
                    {isAddingItem ? (
                      <>
                        <Loader2
                          size={16}
                          className="inline mr-2 animate-spin"
                        />
                        {editingItemId ? 'Mengubah...' : 'Menambah...'}
                      </>
                    ) : editingItemId ? (
                      'Simpan Perubahan'
                    ) : (
                      'Tambah Item'
                    )}
                  </Typography>
                </StyledPrimaryButton>
              </StyledFlex>
            </Card>
          )}

          <div className="max-h-80 overflow-y-auto rounded-lg border border-gray-200">
            <StyledFlex direction="column" gap={10} className="p-2">
              {itemList.map((item) => {
                return (
                  <Card key={item.id} type="outlined">
                    <StyledFlex align="center" justify="space-between">
                      <StyledFlex align="center" gap={10}>
                        <button
                          onClick={() => handleEditItem(item)}
                          className="hover:opacity-70 transition-opacity cursor-pointer"
                        >
                          <EllipsisVertical />
                        </button>
                        <StyledFlex direction="column">
                          <Typography
                            weight="bold"
                            variant={'caption'}
                            color={lightPalette.text.primary}
                          >
                            {item.item_name}
                          </Typography>
                          <Typography
                            variant={'caption'}
                            color={lightPalette.text.primary}
                          >
                            Est. Harga: Rp{' '}
                            {item.estimated_prices.toLocaleString('id-ID')}
                          </Typography>
                        </StyledFlex>
                      </StyledFlex>
                      <div
                        style={{
                          transform: 'scale(1.5)',
                          transformOrigin: 'right center',
                        }}
                      >
                        <Checkbox
                          id={`item-${item.id}`}
                          checked={selectedItems.has(item.id)}
                          onCheckedChange={(checked) => {
                            if (checked !== 'indeterminate') {
                              handleItemCheckboxChange(item.id, checked);
                            }
                          }}
                        />
                      </div>
                    </StyledFlex>
                  </Card>
                );
              })}
            </StyledFlex>
          </div>
          <StyledFlex gap={10} align="center">
            <StyledPrimaryButton
              className="w-full"
              onClick={handleSubmitCheckedItems}
              disabled={selectedItems.size === 0 || isSubmittingItems}
            >
              <Typography
                variant={'pixie'}
                color={lightPalette.text.inverse}
                weight="bold"
              >
                {isSubmittingItems ? (
                  <>
                    <Loader2 size={16} className="inline mr-2 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    Check ({selectedItems.size}) item, Rp{' '}
                    {calculateTotalPrice().toLocaleString('id-ID')}
                  </>
                )}
              </Typography>
            </StyledPrimaryButton>
            {selectedItems.size > 0 && (
              <button
                onClick={handleDeleteSelectedItems}
                disabled={isDeletingItems}
                className="flex items-center justify-center hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDeletingItems ? (
                  <Loader2
                    size={35}
                    className="animate-spin"
                    color={lightPalette.error.main}
                  />
                ) : (
                  <Trash size={35} color={lightPalette.error.main} />
                )}
              </button>
            )}
          </StyledFlex>
        </StyledFlex>
      )}

      <StyledFlex justify="space-between" className="mt-5" gap={20}>
        <Card
          type="fill"
          color="#F0EEFA"
          className="w-full"
          onClick={() => {
            redirect('catat-pemasukan');
          }}
        >
          <StyledFlex
            gap={5}
            align="center"
            justify="space-evenly"
            height="100%"
          >
            <TrendingUp size={24} color={lightPalette.primary.main} />
            <Typography
              weight="bold"
              variant={'caption'}
              color={lightPalette.text.primary}
            >
              Catat <br /> Pemasukan
            </Typography>
          </StyledFlex>
        </Card>
        <Card
          type="fill"
          color="#F0EEFA"
          className="w-full"
          onClick={() => {
            redirect('/catat-pengeluaran');
          }}
        >
          <StyledFlex
            gap={5}
            align="center"
            justify="space-evenly"
            height="100%"
          >
            <TrendingDown size={24} color={lightPalette.primary.main} />
            <Typography
              weight="bold"
              variant={'caption'}
              color={lightPalette.text.primary}
            >
              Catat <br /> Pengeluaran
            </Typography>
          </StyledFlex>
        </Card>
      </StyledFlex>

      <Card type="outlined" className="w-full mt-5">
        {chartData && <MultipleLineChart data={chartData} />}
      </Card>

      <StyledFlex align="center" className="mt-5 mb-2" gap={10}>
        <Brain size={24} color={lightPalette.primary.main} />
        <Typography
          variant={'bodyMedium'}
          weight="bold"
          color={lightPalette.primary.main}
        >
          AI Daily Insight
        </Typography>
        <button
          onClick={handleRefreshInsight}
          disabled={isDailyInsightLoading}
          className="ml-auto flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          title="Refresh insight"
        >
          <RefreshCw
            size={20}
            color={lightPalette.primary.main}
            className={isDailyInsightLoading ? 'animate-spin' : ''}
          />
          <Typography variant={'caption'} color={lightPalette.primary.main}>
            Refresh
          </Typography>
        </button>
      </StyledFlex>

      <div className="overflow-x-auto flex space-x-4 mt-5">
        {isDailyInsightLoading ? (
          <>
            {[1, 2, 3].map((index) => (
              <div key={index} className="shrink-0 w-80">
                <Card type="fill" color="#F0EEFA">
                  <StyledFlex direction="column" gap={10}>
                    <StyledFlex justify="space-between" align="center">
                      <div className="h-6 bg-gray-300 rounded animate-pulse flex-1 mr-2"></div>
                      <div className="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
                    </StyledFlex>
                    <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
                  </StyledFlex>
                </Card>
              </div>
            ))}
          </>
        ) : dailyInsight && dailyInsight.length > 0 ? (
          dailyInsight.map((insight) => (
            <Card
              key={insight.id}
              type="fill"
              color="#F0EEFA"
              className="shrink-0 w-80"
            >
              <StyledFlex direction="column" gap={10}>
                <StyledFlex justify="space-between" align="start" gap={10}>
                  <Typography
                    variant={'bodyMedium'}
                    weight="bold"
                    color={lightPalette.primary.main}
                  >
                    {insight.headline}
                  </Typography>
                  <div>
                    {insight.type === 'GOOD' ? (
                      <ThumbsUp size={24} color={lightPalette.primary.main} />
                    ) : (
                      <ThumbsDown size={24} color={lightPalette.primary.main} />
                    )}
                  </div>
                </StyledFlex>
                <Typography
                  variant={'caption'}
                  weight="regular"
                  style={{ lineHeight: '1.2' }}
                >
                  {insight.explanation}
                </Typography>
                <Typography variant={'pixie'} weight="regular">
                  <b>Solusi: </b>
                  {insight.solution}
                </Typography>
              </StyledFlex>
            </Card>
          ))
        ) : null}
      </div>
    </>
  );
}
