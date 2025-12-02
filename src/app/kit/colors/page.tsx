'use client';

import DocsLayout from '@/components/kit/layouts/DocsLayout';
import React from 'react';
import Typography from '@/components/Typography';
import { lightPalette, darkPalette } from '@/core/theme/styleGuide/color';
import { useTheme } from '@/common/hooks/useTheme';

// --- Reusable color item component ---
const ColorBox = ({ label, value }: { label: string; value: string }) => {
  return (
    <div
      style={{
        width: '100%',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #e5e5e5',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          height: '72px',
          backgroundColor: value,
          borderBottom: '1px solid #e5e5e5',
        }}
      />
      <div style={{ padding: '12px 16px' }}>
        <Typography variant="bodyMedium" weight="bold">
          {label}
        </Typography>
        <Typography variant="bodySmall">{value}</Typography>
      </div>
    </div>
  );
};

// --- Reusable color group section ---
const ColorSection = ({
  title,
  data,
}: {
  title: string;
  data: Record<string, any>;
}) => {
  return (
    <section style={{ marginBottom: '48px' }}>
      <Typography variant="h4" weight="bold" style={{ marginBottom: '24px' }}>
        {title}
      </Typography>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '20px',
          padding: '24px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          border: '1px solid #e5e5e5',
        }}
      >
        {Object.entries(data).map(([key, value]) => {
          if (typeof value === 'string') {
            return <ColorBox key={key} label={key} value={value} />;
          }
          // nested palette (main / light / dark / contrastText)
          return Object.entries(value as Record<string, string>).map(
            ([nestedKey, nestedValue]) => (
              <ColorBox
                key={`${key}-${nestedKey}`}
                label={`${key}.${nestedKey}`}
                value={nestedValue}
              />
            )
          );
        })}
      </div>
    </section>
  );
};

const ColorsPage: React.FC = () => {
  const { mode } = useTheme();
  const palette = mode === 'light' ? lightPalette : darkPalette;

  return (
    <DocsLayout
      activeId="colors"
      title="Colors"
      description="A complete color palette system providing semantic, brand, and surface colors for both light and dark themes."
    >
      {/* Info Section */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="bodyLarge">
          The color system provides consistent visual language across the UI.
          Colors are grouped into categories such as primary, secondary,
          semantic, and surface. This documentation shows the active colors
          based on the current theme mode (<strong>{mode}</strong>).
        </Typography>
      </section>

      {/* Color Groups */}
      <ColorSection title="Primary" data={palette.primary} />
      <ColorSection title="Secondary" data={palette.secondary} />
      <ColorSection title="Background" data={palette.background} />
      <ColorSection title="Text" data={palette.text} />
      <ColorSection title="Accent" data={palette.accent} />
      <ColorSection title="Semantic: Success" data={palette.success} />
      <ColorSection title="Semantic: Warning" data={palette.warning} />
      <ColorSection title="Semantic: Error" data={palette.error} />
      <ColorSection title="Semantic: Info" data={palette.info} />
      <ColorSection title="Border" data={palette.border} />

      {/* Usage Section */}
      <section style={{ marginTop: '64px' }}>
        <Typography variant="h4" weight="bold" style={{ marginBottom: '24px' }}>
          Usage
        </Typography>

        {/* Import example */}
        <div style={{ marginBottom: '32px' }}>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Import
          </Typography>

          <div
            style={{
              padding: '20px',
              backgroundColor: '#1e1e1e',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '14px',
              color: '#d4d4d4',
              overflowX: 'auto',
            }}
          >
            <code>
              <span style={{ color: '#c586c0' }}>import</span>{' '}
              <span style={{ color: '#4ec9b0' }}>
                &#123; lightPalette, darkPalette &#125;
              </span>{' '}
              <span style={{ color: '#c586c0' }}>from</span>{' '}
              <span style={{ color: '#ce9178' }}>
                '@/core/theme/styleGuide/color'
              </span>
              ;
            </code>
          </div>
        </div>

        {/* CSS variable example */}
        <div style={{ marginBottom: '32px' }}>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            CSS Variables
          </Typography>

          <div
            style={{
              padding: '20px',
              backgroundColor: '#1e1e1e',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '14px',
              color: '#d4d4d4',
              overflowX: 'auto',
            }}
          >
            <code>
              <span style={{ color: '#808080' }}>
                {'/* Example usage inside CSS */'}
              </span>
              <br />
              <span style={{ color: '#9cdcfe' }}>background-color</span>:
              <span style={{ color: '#ce9178' }}>
                {' '}
                var(--color-primary-main)
              </span>
              ;
              <br />
              <span style={{ color: '#9cdcfe' }}>color</span>:
              <span style={{ color: '#ce9178' }}>
                {' '}
                var(--color-text-primary)
              </span>
              ;
            </code>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
};

export default ColorsPage;
