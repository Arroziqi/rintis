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
    <div className={'max-w-sm p-5 mx-auto min-h-svh h-full w-full'}>
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
    </div>
  );
}

export default Layout;
