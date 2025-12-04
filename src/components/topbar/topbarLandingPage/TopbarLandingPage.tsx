import React from 'react';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Logo from '@/components/Logo';
import PrimaryButton from '@/components/button/primary/PrimaryButton';

function TopbarLandingPage() {
  return (
    <StyledFlex align={'start'} justify={'space-between'}>
      <Logo size={'40'} />
      <PrimaryButton href={'/'}>Masuk</PrimaryButton>
    </StyledFlex>
  );
}

export default TopbarLandingPage;
