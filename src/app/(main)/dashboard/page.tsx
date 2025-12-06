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
} from 'lucide-react';
import { UserInfo } from '@/types/UserInfoTypes';
import { getBalanceAction } from '@/lib/feature/balance/balance.action';
import { redirect } from 'next/navigation';
import { fetchDailyInsight } from '@/lib/feature/insight/insight.data';
import { DailyInsight } from '@/types/DailyInsightTypes';
import { fetchChartData } from '@/lib/feature/chartData/chart.data';
import ChartData from '@/types/ChartTypes';

export default function DashboardPage() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [userBalance, setUserBalance] = useState<number>(0);
  const [chartData, setChartData] = useState<ChartData[] | null>(null);
  const [dailyInsight, setDailyInsight] = useState<DailyInsight[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDailyInsightLoading, setIsDailyInsightLoading] = useState(true);
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
    async function loadChartData() {
      try {
        const data = await fetchChartData();
        setChartData(data);
      } catch (error) {
        console.error('Failed to load chart data:', error);
      }
    }

    async function loadAllData() {
      try {
        await Promise.all([loadUserInfo(), loadUserBalance(), loadChartData()]);
      } finally {
        setIsLoading(false);
      }
    }

    if (!hasLoadedRef.current) {
      hasLoadedRef.current = true;
      loadAllData();
      generateDailyInsight();
    } else {
      setIsLoading(false);
    }
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

      <StyledFlex direction="column" gap={10} className="mt-5">
        <Typography variant={'caption'} color={lightPalette.text.primary}>
          Daftar item yang wajib untuk jualanmu
        </Typography>
        <StyledFlex justify="space-between">
          <Chip
            labelWeight="bold"
            type="badge"
            label="Tambah Item"
            iconLeft={<PlusIcon />}
          />
          <StyledFlex align="center" gap={5} className="mr-5">
            <StyledLabel htmlFor="select-all">Pilih Semua</StyledLabel>
            <Checkbox id="select-all" />
          </StyledFlex>
        </StyledFlex>
        <Card type="outlined">
          <StyledFlex align="center" justify="space-between">
            <StyledFlex align="center" gap={10}>
              <EllipsisVertical />
              <StyledFlex direction="column">
                <Typography
                  weight="bold"
                  variant={'caption'}
                  color={lightPalette.text.primary}
                >
                  Booth Portable / Meja
                </Typography>
                <Typography
                  variant={'caption'}
                  color={lightPalette.text.primary}
                >
                  Est. Harga: Rp 800.000
                </Typography>
              </StyledFlex>
            </StyledFlex>
            <Checkbox id="item" />
          </StyledFlex>
        </Card>
      </StyledFlex>

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
