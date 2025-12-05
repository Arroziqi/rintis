'use client';

import React from 'react';
import Typography from '@/components/Typography';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { HasilData } from '@/app/(main)/(landing-page)/hasil/data/Hasil.data';
import SuggestionItem from '@/app/(main)/(landing-page)/hasil/components/SuggestionItem';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';

function HasilPage() {
  const data = HasilData;
  return (
    <StyledFlex
      direction={'column'}
      height={'100%'}
      gap={'15px'}
      paddingTop={'10px'}
    >
      <Typography variant={'h5'} color={lightPalette.primary.main}>
        Sip, mungkin kamu bisa pertimbangin ini
      </Typography>
      <Typography variant={'caption'} weight={'regular'}>
        Berdasarkan modal Rp 5.000.000 dan minat Kuliner kamu, kita
        merekomendasikan 3 peluang bisnis yang cocok
      </Typography>

      {data.map((item) => (
        <SuggestionItem data={item} key={item.businesName} />
      ))}
    </StyledFlex>
  );
}

export default HasilPage;
