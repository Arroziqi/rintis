'use client';

import Card from '@/components/Card';
import { Chip } from '@/components/Chip';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { StyledFilledInput } from '@/components/input/Input.styled';
import { StyledLabel } from '@/components/input/InputLabel.styled';
import { ModalCalendar } from '@/components/ModalCalendar';
import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { CheckIcon, PlusIcon } from 'lucide-react';

export default function ExpensePage() {
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
          Catat Pengeluaran
        </Typography>
        <ModalCalendar />
      </StyledFlex>

      <Typography variant={'caption'} weight={'regular'}>
        Rekomendasi Item yang mungkin sering kamu beli untuk operasional
        penjualanmu:
      </Typography>

      <StyledFlex width={'100%'} gap={8} wrap="wrap">
        <Chip />
        <Chip />
      </StyledFlex>

      <StyledFlex width={'100%'} gap={8} align="center">
        <StyledFilledInput placeholder="Tambahkan item lainnya" />

        <Button
          className="flex items-center justify-center w-6 h-6 rounded-full"
          style={{ backgroundColor: lightPalette.primary.light }}
        >
          <PlusIcon size={24} color={lightPalette.text.inverse} />
        </Button>
      </StyledFlex>

      <Card type="outlined" className="w-full">
        <Chip type="badge" label="Gula Batu" />
        <StyledFlex justify="space-between" gap={10} className="mt-2">
          <div className="w-full max-w-xs space-y-2">
            <StyledLabel htmlFor="expense-qty">Qty</StyledLabel>
            <StyledFilledInput id="expense-qty" placeholder="Qty" />
          </div>
          <div className="w-full max-w-xs space-y-2">
            <StyledLabel htmlFor="expense-amount">Pengeluaran</StyledLabel>
            <StyledFlex gap={10} align="center">
              <StyledFilledInput id="expense-amount" placeholder="Rp" />
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
              Bubuk Teh
            </Typography>
            <Typography
              variant="caption"
              weight="regular"
              color={lightPalette.text.secondary}
            >
              Qty: 500 gram
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
              color={lightPalette.error.main}
            >
              - Rp 150.000
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
