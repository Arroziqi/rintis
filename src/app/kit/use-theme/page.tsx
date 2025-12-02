'use client';

import React from 'react';
import DocsLayout from '@/components/kit/layouts/DocsLayout';
import Typography from '@/components/Typography';
import { useTheme } from '@/common/hooks/useTheme';

const UseThemePage = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <DocsLayout
      activeId="use-theme"
      title="useTheme Hook"
      description="A custom hook to access and control the application's theme mode."
    >
      {/* Current Theme */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h4" weight="bold" style={{ marginBottom: '16px' }}>
          Current Theme Mode
        </Typography>

        <div
          style={{
            padding: '16px 20px',
            backgroundColor: 'var(--color-background-main)',
            border: '1px solid var(--color-outline-main)',
            borderRadius: '8px',
            color: 'var(--color-background-onMain)',
          }}
        >
          <Typography variant="bodyLarge">
            Mode: <strong>{mode}</strong>
          </Typography>

          <button
            onClick={toggleTheme}
            style={{
              marginTop: '16px',
              padding: '10px 16px',
              backgroundColor: 'var(--color-primary-main)',
              borderRadius: '6px',
              color: 'var(--color-primary-onMain)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Toggle Theme
          </button>
        </div>
      </section>

      {/* Import Section */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h4" weight="bold" style={{ marginBottom: '24px' }}>
          Import
        </Typography>
        <div
          style={{
            padding: '20px',
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            color: '#d4d4d4',
            fontFamily: 'monospace',
            fontSize: '14px',
          }}
        >
          <code>import {'{ useTheme }'} from '@/common/hooks/useTheme';</code>
        </div>
      </section>

      {/* Usage Example */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h4" weight="bold" style={{ marginBottom: '24px' }}>
          Basic Usage
        </Typography>

        <div
          style={{
            padding: '20px',
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            color: '#d4d4d4',
            fontFamily: 'monospace',
            fontSize: '14px',
            lineHeight: '1.6',
          }}
        >
          <code>
            {`const { mode, toggleTheme, theme, isDark, isLight } = useTheme();`}
            <br />
            <br />
            {'if (isDark) {'}
            <br />
            {'   console.log("Currently in dark mode");'}
            <br />
            {'}'}
            <br />
            <br />
            {'const primary = theme.palette.primary.main;'}
          </code>
        </div>
      </section>

      {/* Theme Object */}
      <section>
        <Typography variant="h4" weight="bold" style={{ marginBottom: '24px' }}>
          Theme Object
        </Typography>

        <div
          style={{
            padding: '20px',
            backgroundColor: '#fff',
            border: '1px solid #e5e5e5',
            borderRadius: '8px',
            fontSize: '14px',
          }}
        >
          <Typography variant="bodyMedium" style={{ marginBottom: '12px' }}>
            The theme object contains:
          </Typography>

          <ul>
            <li>
              <Typography variant="bodySmall">
                <strong>palette</strong> – all color tokens
              </Typography>
            </li>
            <li>
              <Typography variant="bodySmall">
                <strong>typographyConfig</strong> – headings, body, caption,
                pixie
              </Typography>
            </li>
            <li>
              <Typography variant="bodySmall">
                <strong>border</strong> – border radius & tokens
              </Typography>
            </li>
            <li>
              <Typography variant="bodySmall">
                <strong>boxShadow</strong>
              </Typography>
            </li>
            <li>
              <Typography variant="bodySmall">
                <strong>motion</strong>
              </Typography>
            </li>
          </ul>
        </div>
      </section>
    </DocsLayout>
  );
};

export default UseThemePage;
