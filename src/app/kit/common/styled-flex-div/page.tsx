'use client';

import DocsLayout from '@/components/kit/layouts/DocsLayout';
import React from 'react';
import Typography from '@/components/Typography';
import CodeBlock from '@/components/kit/CodeBlock';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';

const StyledFlexPage: React.FC = () => {
  return (
    <DocsLayout
      activeId="styledflex"
      title="StyledFlex"
      description="A comprehensive flexbox container component with extensive customization options including responsive props, gap utilities, and flexbox properties."
    >
      {/* Overview Section */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h4" weight="bold" style={{ marginBottom: '24px' }}>
          Overview
        </Typography>
        <div
          style={{
            padding: '24px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            border: '1px solid #e5e5e5',
          }}
        >
          <Typography variant="bodyMedium" style={{ marginBottom: '16px' }}>
            StyledFlex is a powerful flexbox container component built with
            styled-components. It provides a comprehensive set of flexbox
            properties, spacing utilities, and styling capabilities through
            props.
          </Typography>
          <Typography variant="bodyMedium" style={{ marginBottom: '16px' }}>
            The component uses <strong>transient props</strong> (prefixed with
            $) to prevent React warnings about invalid DOM attributes.
          </Typography>
          <Typography variant="bodyMedium">
            All styling props are automatically converted to CSS and will not be
            passed to the DOM element.
          </Typography>
        </div>
      </section>

      {/* Basic Examples Section */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h4" weight="bold" style={{ marginBottom: '24px' }}>
          Basic Examples
        </Typography>

        {/* Example 1: Basic Flex Row */}
        <div style={{ marginBottom: '32px' }}>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Basic Row Layout
          </Typography>
          <div
            style={{
              padding: '24px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
            }}
          >
            <StyledFlex
              direction="row"
              gap={16}
              padding="16px"
              background="#f8f9fa"
              borderRadius="8px"
            >
              <div
                style={{
                  padding: '12px',
                  background: '#0070f3',
                  color: 'white',
                  borderRadius: '4px',
                }}
              >
                Item 1
              </div>
              <div
                style={{
                  padding: '12px',
                  background: '#0070f3',
                  color: 'white',
                  borderRadius: '4px',
                }}
              >
                Item 2
              </div>
              <div
                style={{
                  padding: '12px',
                  background: '#0070f3',
                  color: 'white',
                  borderRadius: '4px',
                }}
              >
                Item 3
              </div>
            </StyledFlex>
          </div>

          <CodeBlock language="tsx" style={{ marginTop: '16px' }}>
            {`<StyledFlex
  direction="row"
  gap={16}
  padding="16px"
  background="#f8f9fa"
  borderRadius="8px"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StyledFlex>`}
          </CodeBlock>
        </div>

        {/* Example 2: Column Layout */}
        <div style={{ marginBottom: '32px' }}>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Column Layout
          </Typography>
          <div
            style={{
              padding: '24px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
            }}
          >
            <StyledFlex
              direction="column"
              gap={12}
              padding="16px"
              background="#f8f9fa"
              borderRadius="8px"
            >
              <div
                style={{
                  padding: '12px',
                  background: '#10b981',
                  color: 'white',
                  borderRadius: '4px',
                }}
              >
                Item A
              </div>
              <div
                style={{
                  padding: '12px',
                  background: '#10b981',
                  color: 'white',
                  borderRadius: '4px',
                }}
              >
                Item B
              </div>
              <div
                style={{
                  padding: '12px',
                  background: '#10b981',
                  color: 'white',
                  borderRadius: '4px',
                }}
              >
                Item C
              </div>
            </StyledFlex>
          </div>

          <CodeBlock language="tsx" style={{ marginTop: '16px' }}>
            {`<StyledFlex
  direction="column"
  gap={12}
  padding="16px"
  background="#f8f9fa"
  borderRadius="8px"
>
  <div>Item A</div>
  <div>Item B</div>
  <div>Item C</div>
</StyledFlex>`}
          </CodeBlock>
        </div>

        {/* Example 3: Justify and Align */}
        <div style={{ marginBottom: '32px' }}>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Justify Content & Align Items
          </Typography>
          <div
            style={{
              padding: '24px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
            }}
          >
            <StyledFlex
              direction="row"
              justify="space-between"
              align="center"
              gap={16}
              padding="16px"
              background="#f8f9fa"
              borderRadius="8px"
              height="100px"
            >
              <div
                style={{
                  padding: '12px',
                  background: '#f59e0b',
                  color: 'white',
                  borderRadius: '4px',
                }}
              >
                Left
              </div>
              <div
                style={{
                  padding: '12px',
                  background: '#f59e0b',
                  color: 'white',
                  borderRadius: '4px',
                }}
              >
                Center
              </div>
              <div
                style={{
                  padding: '12px',
                  background: '#f59e0b',
                  color: 'white',
                  borderRadius: '4px',
                }}
              >
                Right
              </div>
            </StyledFlex>
          </div>

          <CodeBlock language="tsx" style={{ marginTop: '16px' }}>
            {`<StyledFlex
  direction="row"
  justify="space-between"
  align="center"
  gap={16}
  padding="16px"
  background="#f8f9fa"
  borderRadius="8px"
  height="100px"
>
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</StyledFlex>`}
          </CodeBlock>
        </div>

        {/* Example 4: Wrap Layout */}
        <div>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Wrap Layout
          </Typography>
          <div
            style={{
              padding: '24px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
            }}
          >
            <StyledFlex
              direction="row"
              wrap="wrap"
              gap={16}
              padding="16px"
              background="#f8f9fa"
              borderRadius="8px"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    padding: '12px',
                    background: '#8b5cf6',
                    color: 'white',
                    borderRadius: '4px',
                    flex: '1 0 200px',
                  }}
                >
                  Item {i + 1}
                </div>
              ))}
            </StyledFlex>
          </div>

          <CodeBlock language="tsx" style={{ marginTop: '16px' }}>
            {`<StyledFlex
  direction="row"
  wrap="wrap"
  gap={16}
  padding="16px"
  background="#f8f9fa"
  borderRadius="8px"
>
  {Array.from({ length: 8 }).map((_, i) => (
    <div key={i} style={{ flex: '1 0 200px' }}>
      Item {i + 1}
    </div>
  ))}
</StyledFlex>`}
          </CodeBlock>
        </div>
      </section>

      {/* Gap Utilities Section */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h4" weight="bold" style={{ marginBottom: '24px' }}>
          Gap Utilities
        </Typography>

        {/* Gap Examples */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Gap 8px */}
          <div>
            <Typography
              variant="h6"
              weight="bold"
              style={{ marginBottom: '12px' }}
            >
              Gap: 8px
            </Typography>
            <StyledFlex
              direction="row"
              gap={8}
              padding="16px"
              background="#f8f9fa"
              borderRadius="8px"
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    padding: '12px',
                    background: '#ef4444',
                    color: 'white',
                    borderRadius: '4px',
                  }}
                >
                  Box {i + 1}
                </div>
              ))}
            </StyledFlex>

            <CodeBlock language="tsx" style={{ marginTop: '12px' }}>
              {`<StyledFlex
  direction="row"
  gap={8}
  padding="16px"
  background="#f8f9fa"
  borderRadius="8px"
>
  {/* Children */}
</StyledFlex>`}
            </CodeBlock>
          </div>

          {/* Gap 24px */}
          <div>
            <Typography
              variant="h6"
              weight="bold"
              style={{ marginBottom: '12px' }}
            >
              Gap: 24px
            </Typography>
            <StyledFlex
              direction="row"
              gap={24}
              padding="16px"
              background="#f8f9fa"
              borderRadius="8px"
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    padding: '12px',
                    background: '#3b82f6',
                    color: 'white',
                    borderRadius: '4px',
                  }}
                >
                  Box {i + 1}
                </div>
              ))}
            </StyledFlex>

            <CodeBlock language="tsx" style={{ marginTop: '12px' }}>
              {`<StyledFlex
  direction="row"
  gap={24}
  padding="16px"
  background="#f8f9fa"
  borderRadius="8px"
>
  {/* Children */}
</StyledFlex>`}
            </CodeBlock>
          </div>

          {/* Row Gap & Column Gap */}
          <div>
            <Typography
              variant="h6"
              weight="bold"
              style={{ marginBottom: '12px' }}
            >
              Row Gap: 16px, Column Gap: 32px
            </Typography>
            <StyledFlex
              direction="row"
              wrap="wrap"
              rowGap={16}
              columnGap={32}
              padding="16px"
              background="#f8f9fa"
              borderRadius="8px"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    padding: '12px',
                    background: '#10b981',
                    color: 'white',
                    borderRadius: '4px',
                    width: '150px',
                  }}
                >
                  Item {i + 1}
                </div>
              ))}
            </StyledFlex>

            <CodeBlock language="tsx" style={{ marginTop: '12px' }}>
              {`<StyledFlex
  direction="row"
  wrap="wrap"
  rowGap={16}
  columnGap={32}
  padding="16px"
  background="#f8f9fa"
  borderRadius="8px"
>
  {/* Children with width: 150px */}
</StyledFlex>`}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* Advanced Examples Section */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h4" weight="bold" style={{ marginBottom: '24px' }}>
          Advanced Examples
        </Typography>

        {/* Card Layout */}
        <div style={{ marginBottom: '32px' }}>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Card Layout with Shadows
          </Typography>
          <StyledFlex
            direction="column"
            gap={20}
            padding="24px"
            background="white"
            borderRadius="12px"
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
            width="400px"
            onClick={() => alert('Card clicked!')}
            style={{ cursor: 'pointer' }}
          >
            <Typography variant="h5" weight="bold">
              Card Title
            </Typography>
            <Typography variant="bodyMedium" color="#666">
              This is an example of a card built using StyledFlex with shadows
              and proper spacing.
            </Typography>
            <StyledFlex
              direction="row"
              justify="flex-end"
              gap={12}
              marginTop="16px"
            >
              <button
                style={{
                  padding: '8px 16px',
                  background: '#f3f4f6',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  padding: '8px 16px',
                  background: '#0070f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Confirm
              </button>
            </StyledFlex>
          </StyledFlex>

          <CodeBlock language="tsx" style={{ marginTop: '16px' }}>
            {`<StyledFlex
  direction="column"
  gap={20}
  padding="24px"
  background="white"
  borderRadius="12px"
  boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
  width="400px"
  onClick={() => alert('Card clicked!')}
  style={{ cursor: 'pointer' }}
>
  <Typography variant="h5" weight="bold">Card Title</Typography>
  <Typography variant="bodyMedium" color="#666">
    Card content...
  </Typography>
  <StyledFlex
    direction="row"
    justify="flex-end"
    gap={12}
    marginTop="16px"
  >
    <button>Cancel</button>
    <button>Confirm</button>
  </StyledFlex>
</StyledFlex>`}
          </CodeBlock>
        </div>

        {/* Navigation Bar */}
        <div style={{ marginBottom: '32px' }}>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Navigation Bar
          </Typography>
          <StyledFlex
            direction="row"
            justify="space-between"
            align="center"
            padding="0 24px"
            height="64px"
            background="linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
            borderRadius="8px"
          >
            <Typography variant="h6" weight="bold" color="white">
              Brand
            </Typography>
            <StyledFlex direction="row" gap={24} align="center">
              <Typography
                variant="bodyMedium"
                color="white"
                style={{ cursor: 'pointer' }}
              >
                Home
              </Typography>
              <Typography
                variant="bodyMedium"
                color="white"
                style={{ cursor: 'pointer' }}
              >
                About
              </Typography>
              <Typography
                variant="bodyMedium"
                color="white"
                style={{ cursor: 'pointer' }}
              >
                Services
              </Typography>
              <Typography
                variant="bodyMedium"
                color="white"
                style={{ cursor: 'pointer' }}
              >
                Contact
              </Typography>
            </StyledFlex>
          </StyledFlex>

          <CodeBlock language="tsx" style={{ marginTop: '16px' }}>
            {`<StyledFlex
  direction="row"
  justify="space-between"
  align="center"
  padding="0 24px"
  height="64px"
  background="linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
  borderRadius="8px"
>
  <Typography variant="h6" weight="bold" color="white">Brand</Typography>
  <StyledFlex direction="row" gap={24} align="center">
    <Typography style={{ cursor: 'pointer' }}>Home</Typography>
    <Typography style={{ cursor: 'pointer' }}>About</Typography>
    <Typography style={{ cursor: 'pointer' }}>Services</Typography>
    <Typography style={{ cursor: 'pointer' }}>Contact</Typography>
  </StyledFlex>
</StyledFlex>`}
          </CodeBlock>
        </div>

        {/* Form Layout */}
        <div>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Form Layout
          </Typography>
          <StyledFlex
            direction="column"
            gap={16}
            padding="24px"
            background="#f9fafb"
            borderRadius="8px"
            width="400px"
          >
            <StyledFlex direction="column" gap={8}>
              <Typography variant="bodySmall" weight="bold">
                Email Address
              </Typography>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px',
                }}
              />
            </StyledFlex>
            <StyledFlex direction="column" gap={8}>
              <Typography variant="bodySmall" weight="bold">
                Password
              </Typography>
              <input
                type="password"
                placeholder="Enter your password"
                style={{
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px',
                }}
              />
            </StyledFlex>
            <StyledFlex direction="row" justify="space-between" align="center">
              <StyledFlex direction="row" gap={8} align="center">
                <input type="checkbox" id="remember" />
                <Typography variant="bodySmall">Remember me</Typography>
              </StyledFlex>
              <Typography
                variant="bodySmall"
                color="#0070f3"
                style={{ cursor: 'pointer' }}
              >
                Forgot password?
              </Typography>
            </StyledFlex>
            <button
              style={{
                padding: '12px',
                background: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Sign In
            </button>
          </StyledFlex>

          <CodeBlock language="tsx" style={{ marginTop: '16px' }}>
            {`<StyledFlex
  direction="column"
  gap={16}
  padding="24px"
  background="#f9fafb"
  borderRadius="8px"
  width="400px"
>
  <StyledFlex direction="column" gap={8}>
    <Typography variant="bodySmall" weight="bold">Email Address</Typography>
    <input type="email" placeholder="Enter your email" />
  </StyledFlex>
  <StyledFlex direction="column" gap={8}>
    <Typography variant="bodySmall" weight="bold">Password</Typography>
    <input type="password" placeholder="Enter your password" />
  </StyledFlex>
  <StyledFlex direction="row" justify="space-between" align="center">
    <StyledFlex direction="row" gap={8} align="center">
      <input type="checkbox" id="remember" />
      <Typography variant="bodySmall">Remember me</Typography>
    </StyledFlex>
    <Typography variant="bodySmall" color="#0070f3" style={{ cursor: 'pointer' }}>
      Forgot password?
    </Typography>
  </StyledFlex>
  <button>Sign In</button>
</StyledFlex>`}
          </CodeBlock>
        </div>
      </section>

      {/* Usage Section */}
      <section>
        <Typography variant="h4" weight="bold" style={{ marginBottom: '24px' }}>
          Usage & API Reference
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
          <CodeBlock language="tsx">
            {`import { StyledFlex } from '@/components/StyledFlex';`}
          </CodeBlock>
        </div>

        {/* Props Table */}
        <div style={{ marginBottom: '32px' }}>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Props Reference
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
                      width: '20%',
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
                      width: '25%',
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
                      width: '15%',
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
                      width: '40%',
                    }}
                  >
                    <Typography variant="bodySmall" weight="bold">
                      Description
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Layout Props */}
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
                      direction
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      'row' | 'column' | 'row-reverse' | 'column-reverse'
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
                      'row'
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Flex direction
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
                      justify
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      string (flex-start, center, flex-end, space-between,
                      space-around, space-evenly)
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
                      'flex-start'
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Justify content alignment
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
                      string (stretch, flex-start, center, flex-end, baseline)
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
                      'stretch'
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Align items
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
                      wrap
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      'nowrap' | 'wrap' | 'wrap-reverse'
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
                      'nowrap'
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Flex wrap behavior
                    </Typography>
                  </td>
                </tr>

                {/* Gap Props */}
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
                      gap
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      number | string
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      -
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Gap between items (number = px, string = any CSS unit)
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
                      rowGap
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      number | string
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      -
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Row gap between items
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
                      columnGap
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      number | string
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      -
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Column gap between items
                    </Typography>
                  </td>
                </tr>

                {/* Size Props */}
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
                      width
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
                    <Typography variant="bodySmall" color="#666">
                      -
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Container width (px, %, rem, etc.)
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
                      height
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
                    <Typography variant="bodySmall" color="#666">
                      -
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Container height
                    </Typography>
                  </td>
                </tr>

                {/* Spacing Props */}
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
                      padding
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
                    <Typography variant="bodySmall" color="#666">
                      -
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Padding (shorthand or individual)
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
                      margin
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
                    <Typography variant="bodySmall" color="#666">
                      -
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Margin (shorthand or individual)
                    </Typography>
                  </td>
                </tr>

                {/* Styling Props */}
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
                      background
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
                    <Typography variant="bodySmall" color="#666">
                      -
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Background color or gradient
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
                      borderRadius
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
                    <Typography variant="bodySmall" color="#666">
                      -
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Border radius
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
                      boxShadow
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
                    <Typography variant="bodySmall" color="#666">
                      -
                    </Typography>
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <Typography variant="bodySmall" color="#666">
                      Box shadow
                    </Typography>
                  </td>
                </tr>

                {/* Event Props */}
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
                      onClick
                    </Typography>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <Typography variant="bodySmall" color="#666">
                      () =&gt; void
                    </Typography>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <Typography variant="bodySmall" color="#666">
                      -
                    </Typography>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <Typography variant="bodySmall" color="#666">
                      Click event handler
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Complete Example */}
        <div>
          <Typography
            variant="h6"
            weight="bold"
            style={{ marginBottom: '16px' }}
          >
            Complete Example
          </Typography>
          <CodeBlock language="tsx">
            {`import { StyledFlex } from '@/components/StyledFlex';
import React from 'react';

const Component = () => {
  return (
    <StyledFlex
      // Layout
      direction="row"
      justify="space-between"
      align="center"
      wrap="wrap"
      
      // Spacing
      gap={16}
      rowGap={8}
      columnGap={24}
      
      // Sizing
      width="100%"
      height="auto"
      maxWidth="1200px"
      
      // Margin & Padding
      padding="24px"
      margin="0 auto"
      
      // Styling
      background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      borderRadius="12px"
      boxShadow="0 8px 32px rgba(102, 126, 234, 0.3)"
      border="2px solid #ffffff20"
      
      // Events
      onClick={() => console.log('Container clicked')}
      onMouseEnter={() => console.log('Mouse entered')}
      onMouseLeave={() => console.log('Mouse left')}
      
      // Additional
      className="custom-class"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
    </StyledFlex>
  );
};`}
          </CodeBlock>
        </div>
      </section>

      {/* Best Practices Section */}
      <section
        style={{
          marginTop: '48px',
          padding: '24px',
          background: '#f0f9ff',
          borderRadius: '8px',
        }}
      >
        <Typography
          variant="h5"
          weight="bold"
          style={{ marginBottom: '16px', color: '#0369a1' }}
        >
          Best Practices
        </Typography>
        <StyledFlex direction="column" gap={12}>
          <Typography variant="bodyMedium">
            <strong>1. Use transient props:</strong> All styling props are
            automatically handled as transient props, so no React warnings.
          </Typography>
          <Typography variant="bodyMedium">
            <strong>2. Combine with style prop:</strong> Use the{' '}
            <code>style</code> prop for dynamic styles and props for static
            styles.
          </Typography>
          <Typography variant="bodyMedium">
            <strong>3. Use gap instead of margins:</strong> Prefer{' '}
            <code>gap</code>, <code>rowGap</code>, and <code>columnGap</code>{' '}
            over margin on child elements.
          </Typography>
          <Typography variant="bodyMedium">
            <strong>4. Responsive design:</strong> Use inline styles or CSS
            classes for responsive behavior.
          </Typography>
          <Typography variant="bodyMedium">
            <strong>5. Type safety:</strong> All props are fully typed with
            TypeScript for better developer experience.
          </Typography>
        </StyledFlex>
      </section>
    </DocsLayout>
  );
};

export default StyledFlexPage;
