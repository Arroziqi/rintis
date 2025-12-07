'use client';

import Card from '@/components/Card';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Typography from '@/components/Typography';
import { lightPalette } from '@/core/theme/styleGuide/color';

interface BalanceCardProps {
  balance: number;
}

export function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <Card type="fill" color="#B29CFF" className="mt-5">
      <StyledFlex direction="column" gap={5}>
        <Typography variant={'caption'} color={lightPalette.text.inverse}>
          Kamu punya,
        </Typography>
        <Typography variant={'h5'} color={lightPalette.text.inverse}>
          Rp {balance.toLocaleString('id-ID')}
        </Typography>
      </StyledFlex>
    </Card>
  );
}
