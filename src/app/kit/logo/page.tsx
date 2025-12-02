'use client';

import React from 'react';
import DocsLayout from '@/components/kit/layouts/DocsLayout';
import Typography from '@/components/Typography';
import Logo, { LogoSize, SIZE_MAP } from '@/components/Logo';
import LogoDisplay from '@/components/kit/logo/LogoDisplay';

const LogoDocsPage = () => {
  return (
    <DocsLayout
      activeId="logo"
      title="Logo Component"
      description="Guidelines and usage for the Logo component in different variants and sizes."
    >
      {/* Overview */}
      <section className="mb-16">
        <Typography variant="h4" weight="bold" className="mb-4">
          Overview
        </Typography>
        <Typography variant="bodyMedium" className="mb-4">
          The <strong>Logo</strong> component provides consistent branding
          across the application. It supports two variants (default and
          grayscale) and five sizes based on the official brand guidelines.
        </Typography>
      </section>

      {/* Variants */}
      <section className="mb-16">
        <Typography variant="h4" weight="bold" className="mb-4">
          Variants
        </Typography>
        <Typography variant="bodySmall" className="mb-6">
          Two built-in variants are available for usage on light and dark
          backgrounds.
        </Typography>

        <div className="flex gap-10 items-center mt-6">
          <div className="flex flex-col items-center gap-2">
            <Logo variant="default" size="96" />
            <Typography variant="caption">Default</Typography>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Logo variant="grayscale" size="96" />
            <Typography variant="caption">Grayscale</Typography>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-16">
        <Typography variant="h4" weight="bold" className="mb-4">
          Sizes
        </Typography>
        <Typography variant="bodySmall" className="mb-6">
          The Logo component supports five predefined sizes that match the
          branding assets.
        </Typography>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-6">
          {Object.entries(SIZE_MAP).map(([key]) => (
            <div key={key} className="flex flex-col items-center gap-2">
              <Logo size={key as LogoSize} variant="default" />
              <Typography variant="caption">{key}</Typography>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Code */}
      <section className="mb-16">
        <Typography variant="h4" weight="bold" className="mb-4">
          Usage
        </Typography>

        <div className="p-4 mt-4 rounded-lg bg-[#1e1e1e] text-[#e1e1e1] text-sm font-mono leading-6">
          <pre>
            <code>
              {`import Logo from '@/components/Logo';

<Logo variant="default" size="96" />
<Logo variant="grayscale" size="48" />`}
            </code>
          </pre>
        </div>
      </section>

      {/* Showcase */}
      <section>
        <Typography variant="h4" weight="bold" className="mb-4">
          Showcase
        </Typography>

        <Typography variant="bodySmall" className="mb-6">
          Full preview of all logo variants and sizes.
        </Typography>

        <LogoDisplay />
      </section>
    </DocsLayout>
  );
};

export default LogoDocsPage;
