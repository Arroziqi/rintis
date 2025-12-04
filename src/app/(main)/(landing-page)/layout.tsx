'use client';

import React from 'react';
import TopbarLandingPage from '@/components/topbar/topbarLandingPage/TopbarLandingPage';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopbarLandingPage />
      <StyledFlex
        direction={'column'}
        height={'calc(100% - 60px)'}
        align={'center'}
        justify={'center'}
        gap={10}
      >
        {children}
      </StyledFlex>
    </>
  );
}

export default Layout;
