'use client';

import Card from '@/components/Card';
import { Chip } from '@/components/Chip';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { StyledFilledInput } from '@/components/input/Input.styled';
import { StyledLabel } from '@/components/input/InputLabel.styled';
import { ModalCalendar } from '@/components/ModalCalendar';
import Typography from '@/components/Typography';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { CheckIcon } from 'lucide-react';

export default function IncomePage() {
  return (
    <StyledFlex
      direction={'column'}
      height={'100%'}
      align={'start'}
      justify={'start'}
      gap={10}
    >
      <StyledFlex width={'100%'} justify={'space-between'} align="center">
        <Typography
          variant={'bodyMedium'}
          weight="bold"
          color={lightPalette.text.primary}
        >
          Catat Pemasukan
        </Typography>
        <ModalCalendar />
      </StyledFlex>

      <Typography variant={'caption'} weight={'regular'}>
        Wah, hari ini ramai ya? Ayo catat pendapatanmu supaya tidak lupa!
      </Typography>

      <Card type="outlined" className="w-full">
        <Chip type="badge" label="Gula Batu" />
        <StyledFlex justify="space-between" gap={10} className="mt-2">
          <div className="w-full max-w-xs space-y-2">
            <StyledLabel htmlFor="income-description">Deskripsi</StyledLabel>
            <StyledFilledInput
              id="income-description"
              placeholder="Kasih rinciannya ya!"
            />
          </div>
          <div className="w-full max-w-xs space-y-2">
            <StyledLabel htmlFor="income-amount">
              Total Pendapatanmu
            </StyledLabel>
            <StyledFlex gap={10} align="center">
              <StyledFilledInput id="income-amount" placeholder="Rp" />
              <div
                className="flex items-center justify-center w-6 h-6 rounded-full p-1"
                style={{ backgroundColor: lightPalette.primary.light }}
              >
                <CheckIcon size={24} color={lightPalette.text.inverse} />
              </div>
            </StyledFlex>
          </div>
        </StyledFlex>
      </Card>

      <Typography variant={'bodyMedium'} weight={'regular'}>
        Riwayat
      </Typography>

      <Card type="outlined" className="w-full">
        <StyledFlex justify="space-between">
          <StyledFlex direction="column" gap={4} justify="space-between">
            <Typography
              variant="bodySmall"
              weight="bold"
              color={lightPalette.text.primary}
            >
              Penjualan Harian
            </Typography>
          </StyledFlex>
          <StyledFlex
            direction="column"
            gap={4}
            justify="space-between"
            align="end"
          >
            <Typography
              variant="bodyLarge"
              weight="regular"
              color={lightPalette.success.main}
            >
              Rp 500.000
            </Typography>
            <Typography
              variant="pixie"
              weight="regular"
              color={lightPalette.text.secondary}
            >
              4 Desember 2025
            </Typography>
          </StyledFlex>
        </StyledFlex>
      </Card>
    </StyledFlex>
  );
}
