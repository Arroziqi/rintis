# RINTIS - Design System & Component Library

## 📋 Overview
**RINTIS** is a modern design system and component library built with **Next.js 14**, **TypeScript**, and **Styled Components**. It provides a comprehensive set of reusable UI components with consistent styling, accessibility standards, and developer-friendly APIs.

## 🏗️ Project Architecture

### Directory Structure
```
src/
├── app/                          # Next.js 14 App Router
│   ├── (landing-page)/          # Marketing/landing pages
│   └── kit/                     # Design system documentation
│       ├── colors/              # Color system documentation
│       ├── common/              # Common components docs
│       │   └── styled-flex-div/ # StyledFlex documentation
│       ├── logo/                # Logo usage guidelines
│       ├── typography/          # Typography system
│       └── use-theme/          # Theme hook documentation
│
├── common/                      # Shared utilities & configurations
│   ├── hooks/                   # Custom React hooks
│   ├── provider/                # Context providers
│   ├── styles/                  # Global styles & CSS
│   ├── types/                   # TypeScript type definitions
│   └── utils/                   # Utility functions
│
├── components/                  # UI Components
│   ├── button/                  # Button components
│   │   ├── primary/            # Primary button variant
│   │   └── secondary/          # Secondary button variant
│   │
│   ├── common/                  # Common/utility components
│   │   └── styledFlexDiv/      # Flexible layout component
│   │
│   ├── kit/                     # Design system components
│   │   ├── layouts/            # Layout components (DocsLayout, etc.)
│   │   ├── logo/               # Logo component
│   │   └── sidebar/            # Navigation sidebar
│   │
│   └── topbar/                  # Top navigation components
│       └── topbarLandingPage/  # Landing page specific topbar
│
└── core/                       # Core system files
    ├── assets/                  # Static assets
    ├── config/                  # Application configuration
    ├── constants/               # App constants
    └── theme/                   # Theme configuration
        └── styleGuide/         # Design tokens & style guide
```

## 🎨 Design System Components

### 1. **StyledFlex Component** (`/src/components/common/styledFlexDiv/`)
A powerful flexbox container with extensive customization:
- **Flexbox Properties**: `direction`, `justify`, `align`, `wrap`
- **Spacing Utilities**: `gap`, `rowGap`, `columnGap`
- **Styling Props**: `background`, `borderRadius`, `boxShadow`
- **Size Control**: `width`, `height`, `padding`, `margin`
- **Responsive**: Built-in responsive design support
- **Type Safety**: Full TypeScript support with strict prop types

### 2. **Typography System** (`/src/app/kit/typography/`)
Comprehensive typography with:
- **Headings**: h1-h6 with consistent scaling
- **Body Text**: Large, Medium, Small variants
- **Small Text**: Caption and Pixie variants
- **Font Weights**: Regular and Bold
- **Italic Support**: Font style variations
- **Alignment**: Text alignment utilities

### 3. **Color System** (`/src/app/kit/colors/`)
Organized color palette with:
- Primary colors
- Secondary colors
- Neutral/gray scale
- Semantic colors (success, warning, error, info)
- Accessibility compliant contrast ratios

### 4. **Button Components** (`/src/components/button/`)
- **Primary Button**: Main call-to-action buttons
- **Secondary Button**: Alternative action buttons
- Features: Variants, sizes, loading states, icons

## 🛠️ Technology Stack

### Core Technologies
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Styled Components** - CSS-in-JS styling
- **React 18** - Latest React version

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Storybook** - Component documentation (planned)
- **Jest** - Unit testing (planned)

### Styling System
- **CSS-in-JS** with Styled Components
- **Design Tokens** in theme configuration
- **Responsive Design** utilities
- **Dark Mode** support (planned)

## 📚 Documentation Structure

### Component Documentation
Each component includes:
1. **Live Examples** - Interactive component previews
2. **Usage Examples** - Code snippets for common use cases
3. **API Reference** - Complete prop documentation
4. **Best Practices** - Guidelines for optimal usage
5. **Accessibility Notes** - ARIA attributes and keyboard support

### Documentation Pages
- `/kit/colors` - Color system documentation
- `/kit/typography` - Typography guidelines
- `/kit/common/styled-flex-div` - StyledFlex component docs
- `/kit/logo` - Logo usage and branding
- `/kit/use-theme` - Theme hook documentation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd rintis

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

### Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type checking
npm run type-check
```

## 🔧 Configuration

### Environment Variables
Create `.env.local` file:
```env
# Next.js configuration
NEXT_PUBLIC_APP_NAME=RINTIS
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Analytics (optional)
NEXT_PUBLIC_GA_ID=UA-XXXXXXXX-X
```

### Theme Configuration
The theme is configured in `/src/core/theme/styleGuide/`:
- Color tokens
- Typography scales
- Spacing system
- Breakpoints for responsive design

## 📱 Component Development Guidelines

### Creating New Components
1. **Directory Structure**: Place in `/src/components/[category]/[component-name]/`
2. **File Structure**:
    - `index.tsx` - Main component
    - `types.ts` - TypeScript interfaces
    - `styles.ts` - Styled components
    - `README.md` - Component documentation
    - `[ComponentName].test.tsx` - Test files

3. **Component Template**:
```typescript
// Use TypeScript for type safety
// Use styled-components for styling
// Include proper prop documentation
// Add accessibility attributes
// Support responsive design
```

### Code Quality Standards
- **TypeScript**: Strict mode enabled
- **Naming**: PascalCase for components, camelCase for functions
- **Imports**: Group and order imports properly
- **Exports**: Use named exports for components
- **Documentation**: JSDoc comments for public APIs

## 🧪 Testing Strategy

### Unit Tests
- Component rendering
- Props validation
- Event handlers
- State management

### Integration Tests
- Component interactions
- Theme provider
- Responsive behavior

### Accessibility Tests
- ARIA labels
- Keyboard navigation
- Screen reader compatibility

## 📈 Future Roadmap

### Phase 1 (Current)
- ✅ Core component library
- ✅ Design system documentation
- ✅ TypeScript integration
- ✅ Basic theming system

### Phase 2 (Next)
- 🔄 Dark mode support
- 🔄 Advanced theming (multi-brand)
- 🔄 Storybook integration
- 🔄 Component testing suite

### Phase 3 (Planned)
- 📅 Design token export
- 📅 Figma plugin for design sync
- 📅 NPM package distribution
- 📅 CI/CD pipeline

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make changes with tests
4. Update documentation
5. Submit pull request

### Code Review Guidelines
- All PRs require review
- Tests must pass
- Documentation must be updated
- Follow existing patterns

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Documentation**: Visit `/kit` pages in development server
- **Issues**: Use GitHub Issues for bug reports
- **Questions**: Check existing documentation first

---

**RINTIS** - Building consistent, accessible, and beautiful user interfaces.