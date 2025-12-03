'use client';

import React from 'react';
import TopbarLandingPage from '@/components/topbar/topbarLandingPage/TopbarLandingPage';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import DocsLayout from '@/components/kit/layouts/DocsLayout';

function Page() {
  return (
    <DocsLayout
      activeId="kit"
      title="Rintis Kit"
      description="A comprehensive ui kit for developing Rintis App."
    >
      <StyledFlex direction="column" rowGap={20}>
        <TopbarLandingPage />
      </StyledFlex>
    </DocsLayout>
  );
}

export default Page;
