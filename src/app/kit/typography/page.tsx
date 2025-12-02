'use client';

import DocsLayout from '@/components/kit/layouts/DocsLayout';
import React from 'react';
import Typography from '@/components/Typography';

const TypographyPage: React.FC = () => {
  return (
    <DocsLayout
      activeId="typography"
      title="Typography"
      description="A comprehensive typography system based on Poppins font family with multiple variants and weights."
    >
      {/* Headings Section */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h4" weight="bold" style={{ marginBottom: '24px' }}>
          Headings
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '24px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            border: '1px solid #e5e5e5',
          }}
        >
          <Typography variant="h1">
            H1 - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="h2">
            H2 - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="h3">
            H3 - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="h4">
            H4 - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="h5">
            H5 - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="h6">
            H6 - The quick brown fox jumps over the lazy dog
          </Typography>
        </div>
      </section>

      {/* Body Text Section */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h4" weight="bold" style={{ marginBottom: '24px' }}>
          Body Text
        </Typography>

        {/* Body Large */}
        <div style={{ marginBottom: '32px' }}>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Large
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              padding: '24px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
            }}
          >
            <Typography variant="bodyLarge" weight="bold">
              Bold - The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography variant="bodyLarge" italic>
              Italic - The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography variant="bodyLarge">
              Regular - The quick brown fox jumps over the lazy dog
            </Typography>
          </div>
        </div>

        {/* Body Medium */}
        <div style={{ marginBottom: '32px' }}>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Medium
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              padding: '24px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
            }}
          >
            <Typography variant="bodyMedium" weight="bold">
              Bold - The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography variant="bodyMedium" italic>
              Italic - The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography variant="bodyMedium">
              Regular - The quick brown fox jumps over the lazy dog
            </Typography>
          </div>
        </div>

        {/* Body Small */}
        <div>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Small
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              padding: '24px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
            }}
          >
            <Typography variant="bodySmall" weight="bold">
              Bold - The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography variant="bodySmall" italic>
              Italic - The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography variant="bodySmall">
              Regular - The quick brown fox jumps over the lazy dog
            </Typography>
          </div>
        </div>
      </section>

      {/* Caption & Pixie Section */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h4" weight="bold" style={{ marginBottom: '24px' }}>
          Small Text
        </Typography>

        {/* Caption */}
        <div style={{ marginBottom: '32px' }}>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Caption
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              padding: '24px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
            }}
          >
            <Typography variant="caption" weight="bold">
              Bold - The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography variant="caption" italic>
              Italic - The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography variant="caption">
              Regular - The quick brown fox jumps over the lazy dog
            </Typography>
          </div>
        </div>

        {/* Pixie */}
        <div>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Pixie
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              padding: '24px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
            }}
          >
            <Typography variant="pixie" weight="bold">
              Bold - The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography variant="pixie" italic>
              Italic - The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography variant="pixie">
              Regular - The quick brown fox jumps over the lazy dog
            </Typography>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section>
        <Typography variant="h4" weight="bold" style={{ marginBottom: '24px' }}>
          Usage
        </Typography>

        {/* Import */}
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
              <span style={{ color: '#4ec9b0' }}>Typography</span>{' '}
              <span style={{ color: '#c586c0' }}>from</span>{' '}
              <span style={{ color: '#ce9178' }}>
                '@/components/Typography'
              </span>
              ;
            </code>
          </div>
        </div>

        {/* Basic Usage */}
        <div style={{ marginBottom: '32px' }}>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Basic Usage
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
              lineHeight: '1.6',
            }}
          >
            <code>
              <span style={{ color: '#808080' }}>{'// Headings'}</span>
              <br />
              <span style={{ color: '#4ec9b0' }}>{'<Typography'}</span>{' '}
              <span style={{ color: '#9cdcfe' }}>variant</span>=
              <span style={{ color: '#ce9178' }}>"h1"</span>
              <span style={{ color: '#4ec9b0' }}>{'>'}</span>
              Heading Text
              <span style={{ color: '#4ec9b0' }}>{'</Typography>'}</span>
              <br />
              <br />
              <span style={{ color: '#808080' }}>
                {'// Body text with weight'}
              </span>
              <br />
              <span style={{ color: '#4ec9b0' }}>{'<Typography'}</span>{' '}
              <span style={{ color: '#9cdcfe' }}>variant</span>=
              <span style={{ color: '#ce9178' }}>"bodyMedium"</span>{' '}
              <span style={{ color: '#9cdcfe' }}>weight</span>=
              <span style={{ color: '#ce9178' }}>"bold"</span>
              <span style={{ color: '#4ec9b0' }}>{'>'}</span>
              <br />
              {'  '}Bold body text
              <br />
              <span style={{ color: '#4ec9b0' }}>{'</Typography>'}</span>
              <br />
              <br />
              <span style={{ color: '#808080' }}>{'// Italic text'}</span>
              <br />
              <span style={{ color: '#4ec9b0' }}>{'<Typography'}</span>{' '}
              <span style={{ color: '#9cdcfe' }}>variant</span>=
              <span style={{ color: '#ce9178' }}>"bodyMedium"</span>{' '}
              <span style={{ color: '#9cdcfe' }}>italic</span>
              <span style={{ color: '#4ec9b0' }}>{'>'}</span>
              <br />
              {'  '}Italic body text
              <br />
              <span style={{ color: '#4ec9b0' }}>{'</Typography>'}</span>
            </code>
          </div>
        </div>

        {/* Props Table */}
        <div style={{ marginBottom: '32px' }}>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Props
          </Typography>
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
              overflow: 'hidden',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f8f8' }}>
                  <th
                    style={{
                      padding: '12px 16px',
                      textAlign: 'left',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" weight="bold">
                      Prop
                    </Typography>
                  </th>
                  <th
                    style={{
                      padding: '12px 16px',
                      textAlign: 'left',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" weight="bold">
                      Type
                    </Typography>
                  </th>
                  <th
                    style={{
                      padding: '12px 16px',
                      textAlign: 'left',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" weight="bold">
                      Default
                    </Typography>
                  </th>
                  <th
                    style={{
                      padding: '12px 16px',
                      textAlign: 'left',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" weight="bold">
                      Description
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography
                      variant="bodySmall"
                      component="code"
                      style={{
                        backgroundColor: '#f5f5f5',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      variant
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      TypographyVariant
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography
                      variant="bodySmall"
                      component="code"
                      style={{
                        backgroundColor: '#f5f5f5',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      bodyMedium
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Typography style variant (h1-h6, bodyLarge, bodyMedium,
                      bodySmall, caption, pixie)
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography
                      variant="bodySmall"
                      component="code"
                      style={{
                        backgroundColor: '#f5f5f5',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      weight
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      bold | regular
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography
                      variant="bodySmall"
                      component="code"
                      style={{
                        backgroundColor: '#f5f5f5',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      regular
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Font weight (headings only support bold)
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography
                      variant="bodySmall"
                      component="code"
                      style={{
                        backgroundColor: '#f5f5f5',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      italic
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      boolean
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography
                      variant="bodySmall"
                      component="code"
                      style={{
                        backgroundColor: '#f5f5f5',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      false
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Apply italic font style
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography
                      variant="bodySmall"
                      component="code"
                      style={{
                        backgroundColor: '#f5f5f5',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      color
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      string
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography
                      variant="bodySmall"
                      component="code"
                      style={{
                        backgroundColor: '#f5f5f5',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      #262626
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Text color (any valid CSS color)
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography
                      variant="bodySmall"
                      component="code"
                      style={{
                        backgroundColor: '#f5f5f5',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      align
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      left | center | right | justify
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography
                      variant="bodySmall"
                      component="code"
                      style={{
                        backgroundColor: '#f5f5f5',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      left
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Text alignment
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px' }}>
                    <Typography
                      variant="bodySmall"
                      component="code"
                      style={{
                        backgroundColor: '#f5f5f5',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      component
                    </Typography>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <Typography variant="bodySmall" color="#666">
                      ElementType
                    </Typography>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <Typography
                      variant="bodySmall"
                      component="code"
                      style={{
                        backgroundColor: '#f5f5f5',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      auto
                    </Typography>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <Typography variant="bodySmall" color="#666">
                      Custom HTML element (overrides default element mapping)
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Advanced Examples */}
        <div>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Advanced Examples
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
              lineHeight: '1.6',
            }}
          >
            <code>
              <span style={{ color: '#808080' }}>{'// Custom color'}</span>
              <br />
              <span style={{ color: '#4ec9b0' }}>{'<Typography'}</span>{' '}
              <span style={{ color: '#9cdcfe' }}>variant</span>=
              <span style={{ color: '#ce9178' }}>"bodyMedium"</span>{' '}
              <span style={{ color: '#9cdcfe' }}>color</span>=
              <span style={{ color: '#ce9178' }}>"#666"</span>
              <span style={{ color: '#4ec9b0' }}>{'>'}</span>
              <br />
              {'  '}Gray text
              <br />
              <span style={{ color: '#4ec9b0' }}>{'</Typography>'}</span>
              <br />
              <br />
              <span style={{ color: '#808080' }}>{'// Center aligned'}</span>
              <br />
              <span style={{ color: '#4ec9b0' }}>{'<Typography'}</span>{' '}
              <span style={{ color: '#9cdcfe' }}>variant</span>=
              <span style={{ color: '#ce9178' }}>"h3"</span>{' '}
              <span style={{ color: '#9cdcfe' }}>align</span>=
              <span style={{ color: '#ce9178' }}>"center"</span>
              <span style={{ color: '#4ec9b0' }}>{'>'}</span>
              <br />
              {'  '}Centered Title
              <br />
              <span style={{ color: '#4ec9b0' }}>{'</Typography>'}</span>
              <br />
              <br />
              <span style={{ color: '#808080' }}>
                {'// Custom HTML element'}
              </span>
              <br />
              <span style={{ color: '#4ec9b0' }}>{'<Typography'}</span>{' '}
              <span style={{ color: '#9cdcfe' }}>variant</span>=
              <span style={{ color: '#ce9178' }}>"bodyMedium"</span>{' '}
              <span style={{ color: '#9cdcfe' }}>component</span>=
              <span style={{ color: '#ce9178' }}>"div"</span>
              <span style={{ color: '#4ec9b0' }}>{'>'}</span>
              <br />
              {'  '}Renders as div instead of p
              <br />
              <span style={{ color: '#4ec9b0' }}>{'</Typography>'}</span>
              <br />
              <br />
              <span style={{ color: '#808080' }}>
                {'// With custom styles'}
              </span>
              <br />
              <span style={{ color: '#4ec9b0' }}>{'<Typography'}</span>{' '}
              <span style={{ color: '#9cdcfe' }}>variant</span>=
              <span style={{ color: '#ce9178' }}>"bodyMedium"</span>{' '}
              <span style={{ color: '#9cdcfe' }}>style</span>=
              <span style={{ color: '#4ec9b0' }}>{'{{ '}</span>
              <span style={{ color: '#9cdcfe' }}>marginBottom</span>:{' '}
              <span style={{ color: '#ce9178' }}>'16px'</span>
              <span style={{ color: '#4ec9b0' }}>{' }}'}</span>
              <span style={{ color: '#4ec9b0' }}>{'>'}</span>
              <br />
              {'  '}Text with margin
              <br />
              <span style={{ color: '#4ec9b0' }}>{'</Typography>'}</span>
            </code>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
};

export default TypographyPage;
