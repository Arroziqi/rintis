'use client';

import { Loader2 } from 'lucide-react';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Typography from '@/components/Typography';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { useDashboardData } from '@/hooks/useDashboardData';
import { useItemListManagement } from '@/hooks/useItemListManagement';
import { UserHeader } from '@/components/dashboard/UserHeader';
import { BalanceCard } from '@/components/dashboard/BalanceCard';
import { ItemListSection } from '@/components/dashboard/ItemListSection';
import { ActionCards } from '@/components/dashboard/ActionCards';
import { DailyInsightSection } from '@/components/dashboard/DailyInsightSection';
import { useEffect } from 'react';
import { localStorageFlowUtils } from '@/common/utils/localStorageFlow';
import toast from 'react-hot-toast';

export default function DashboardPage() {
  const {
    userInfo,
    userBalance,
    chartData,
    itemList,
    dailyInsight,
    isLoading,
    isDailyInsightLoading,
    refetchDailyInsight,
  } = useDashboardData();

  const {
    itemList: managedItemList,
    selectedItems,
    selectAll,
    showAddItemCard,
    newItemName,
    newItemPrice,
    editingItemId,
    isAddingItem,
    isSubmittingItems,
    isDeletingItems,
    setItemList: setManagedItemList,
    handleItemCheckboxChange,
    handleSelectAllChange,
    calculateTotalPrice,
    handleSubmitCheckedItems,
    handleDeleteSelectedItems,
    handleAddNewItem,
    handleEditItem,
    handleCloseAddItemCard,
    setShowAddItemCard,
    setNewItemName,
    setNewItemPrice,
  } = useItemListManagement({
    initialItemList: itemList,
  });

  // Sync itemList with managedItemList when itemList changes
  useEffect(() => {
    setManagedItemList(itemList);
  }, [itemList, setManagedItemList]);

  // to check whether the user has selected the business before logging in
  useEffect(() => {
    if (window.__FLOW_EXECUTED__) return;
    window.__FLOW_EXECUTED__ = true;

    const flow = localStorageFlowUtils.getFlow();
    if (!flow) return;

    const toastId = toast.loading('Memproses rekomendasi bisnismu...');

    fetch('/api/flow/execute', {
      method: 'POST',
      body: JSON.stringify(flow),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error();

        toast.success('Rekomendasi berhasil diproses!', { id: toastId });
        localStorageFlowUtils.clearFlow();

        setTimeout(() => {
          window.location.reload();
        }, 600);
      })
      .catch(() => {
        toast.error('Gagal memproses data. Coba lagi ya 🙏', { id: toastId });
      });
  }, []);

  const displayName = userInfo?.name || 'User';
  const displayUsername = userInfo?.username || 'username';

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
      <UserHeader name={displayName} username={displayUsername} />
      <BalanceCard balance={userBalance} />
      {managedItemList && managedItemList.length > 0 && (
        <ItemListSection
          itemList={managedItemList}
          selectedItems={selectedItems}
          selectAll={selectAll}
          showAddItemCard={showAddItemCard}
          newItemName={newItemName}
          newItemPrice={newItemPrice}
          editingItemId={editingItemId}
          isAddingItem={isAddingItem}
          isSubmittingItems={isSubmittingItems}
          isDeletingItems={isDeletingItems}
          onAddItemClick={() => setShowAddItemCard(!showAddItemCard)}
          onSelectAllChange={handleSelectAllChange}
          onItemCheckboxChange={handleItemCheckboxChange}
          onEditItem={handleEditItem}
          onCloseAddItemCard={handleCloseAddItemCard}
          onNewItemNameChange={setNewItemName}
          onNewItemPriceChange={setNewItemPrice}
          onAddNewItem={handleAddNewItem}
          onSubmitCheckedItems={handleSubmitCheckedItems}
          onDeleteSelectedItems={handleDeleteSelectedItems}
          calculateTotalPrice={calculateTotalPrice}
        />
      )}
      <ActionCards />
      <DailyInsightSection
        chartData={chartData}
        dailyInsight={dailyInsight}
        isDailyInsightLoading={isDailyInsightLoading}
        onRefreshInsight={refetchDailyInsight}
      />
    </>
  );
}
