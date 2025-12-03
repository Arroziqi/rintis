'use client';

import React from 'react';
import TopbarLandingPage from '@/components/topbar/topbarLandingPage/TopbarLandingPage';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={'max-w-sm p-5 mx-auto min-h-svh h-full'}>
      <TopbarLandingPage />
      {children}
    </div>
  );
}

export default Layout;
