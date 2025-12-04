'use client';

import React from 'react';
import TopbarLandingPage from '@/components/topbar/topbarLandingPage/TopbarLandingPage';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopbarLandingPage />
      {children}
    </>
  );
}

export default Layout;
