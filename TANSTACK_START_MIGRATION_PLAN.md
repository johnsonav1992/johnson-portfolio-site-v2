# Migration Plan: Next.js 16.1 → TanStack Start

## Overview

This document outlines a detailed migration plan from the current Next.js 16.1 implementation to **TanStack Start**, a modern full-stack React framework built on TanStack Router.

**Current State:** Next.js 16.1.0 (App Router)  
**Target State:** TanStack Start (latest stable)

---

## What is TanStack Start?

TanStack Start is a full-stack React framework that builds on TanStack Router, providing:
- **Type-safe routing** with automatic route generation
- **File-based routing** similar to Next.js/Remix
- **Server functions** for API endpoints and server-side logic
- **Built on Vite** for fast HMR and builds
- **Full-stack type safety** from server to client
- **Framework agnostic** - works with React, Vue, Solid, etc.

---

## Migration Phases

### Phase 1: Project Setup & Configuration

#### 1.1 Install TanStack Start Dependencies

```bash
# Remove Next.js dependencies
npm uninstall next @mui/material-nextjs eslint-config-next

# Install TanStack Start core
npm install @tanstack/start @tanstack/react-router

# Install build tools
npm install -D @tanstack/router-devtools @tanstack/router-vite-plugin
npm install -D vite @vitejs/plugin-react vinxi
```

#### 1.2 Create Configuration Files

**`app.config.ts`** - TanStack Start configuration:
```typescript
import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  server: {
    preset: 'netlify', // or 'node', 'vercel', etc.
  },
  vite: {
    plugins: [],
  },
})
```

**`vite.config.ts`** - Vite configuration:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({
      routesDirectory: './app/routes',
      generatedRouteTree: './app/routeTree.gen.ts',
    }),
  ],
  resolve: {
    alias: {
      '~': '/app',
    },
  },
})
```

**`tsconfig.json`** - Update for TanStack:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "paths": {
      "~/*": ["./app/*"]
    }
  },
  "include": ["app/**/*", "vite.config.ts"]
}
```

#### 1.3 Update Package Scripts

```json
{
  "scripts": {
    "dev": "vinxi dev",
    "build": "vinxi build",
    "start": "vinxi start",
    "typecheck": "tsc --noEmit"
  }
}
```

---

### Phase 2: Routing Structure Migration

#### 2.1 File Structure Comparison

**Current (Next.js):**
```
app/
├── layout.tsx              → Root layout
├── page.tsx               → Index route
├── about/page.tsx         → /about route
├── work/
│   ├── page.tsx          → /work route
│   └── [name]/page.tsx   → /work/$name route
├── skills/page.tsx        → /skills route
└── contact/page.tsx       → /contact route
```

**Target (TanStack Start):**
```
app/
├── routes/
│   ├── __root.tsx        → Root layout
│   ├── index.tsx         → Index route
│   ├── about.tsx         → /about route
│   ├── work/
│   │   ├── index.tsx     → /work route
│   │   └── $name.tsx     → /work/$name route
│   ├── skills.tsx        → /skills route
│   └── contact.tsx       → /contact route
├── routeTree.gen.ts      → Auto-generated route tree
└── router.tsx            → Router instance
```

#### 2.2 Root Layout Migration

**From `app/layout.tsx`:**
```tsx
import type { Metadata } from 'next';
import Header from './components/Header/Header';
// ...

export const metadata: Metadata = { /* ... */ };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>...</head>
      <body>
        <ThemeRegistry>
          <ContextProvider>
            <Header />
            {children}
            <Footer />
          </ContextProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
```

**To `app/routes/__root.tsx`:**
```tsx
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';
import ThemeRegistry from '~/ThemeRegistry';
import ContextProvider from '~/context/context';

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { title: 'Alex Johnson - Web Developer' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Full-stack web developer portfolio' },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap',
      },
    ],
  }),
});

function RootComponent() {
  return (
    <>
      <ThemeRegistry>
        <ContextProvider>
          <Header />
          <Outlet />
          <Footer />
        </ContextProvider>
      </ThemeRegistry>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
```

#### 2.3 Route File Migrations

**Index Route** - `app/routes/index.tsx`:
```tsx
import { createFileRoute } from '@tanstack/react-router';
import { Grid, Button, Typography, useMediaQuery } from '@mui/material';
import Link from '~/components/Link'; // Custom Link wrapper
import headshot from '~/assets/headshot-transparent-bg.png';
import theme from '~/theme/theme';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
  // ... rest of component logic
}
```

**About Route** - `app/routes/about.tsx`:
```tsx
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  // ... component logic
}
```

**Dynamic Work Route** - `app/routes/work/$name.tsx`:
```tsx
import { createFileRoute } from '@tanstack/react-router';
import { notFound } from '@tanstack/react-router';
import { smallProjects, largeProjects } from '~/data/work';

export const Route = createFileRoute('/work/$name')({
  component: ProjectDetailPage,
  loader: ({ params }) => {
    const project = [...smallProjects, ...largeProjects].find(
      p => p.route === params.name
    );
    
    if (!project) {
      throw notFound();
    }
    
    return { project };
  },
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  // ... render project details
}
```

---

### Phase 3: API Routes & Server Functions

#### 3.1 Contact Form API Migration

**From Next.js API Route** (`app/api/contact/route.ts`):
```tsx
import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '~/email/sendEmail';

export async function POST(request: NextRequest) {
  const data = await request.json();
  const result = await sendEmail(
    data.name,
    data.email,
    data.message
  );
  return NextResponse.json(result);
}
```

**To TanStack Server Function** (`app/routes/contact.tsx`):
```tsx
import { createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start';
import { sendEmail } from '~/email/sendEmail';

// Server function - runs only on the server
const submitContactForm = createServerFn('POST', async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const result = await sendEmail(data.name, data.email, data.message);
  return result;
});

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

function ContactPage() {
  const handleSubmit = async (values: ContactInput) => {
    try {
      // Call server function directly - type-safe!
      const result = await submitContactForm(values);
      setAlert(result);
      setSnackbarOpen(true);
    } catch (error) {
      setAlert({
        type: 'error',
        message: 'Error sending message',
      });
    }
  };
  
  // ... rest of component
}
```

---

### Phase 4: Navigation & Link Migration

#### 4.1 Link Component Wrapper

Create `app/components/Link.tsx`:
```tsx
import { Link as TanStackLink, LinkProps } from '@tanstack/react-router';
import { forwardRef } from 'react';

// Wrapper to make TanStack Link compatible with MUI components
const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  return <TanStackLink ref={ref} {...props} />;
});

export default Link;
```

#### 4.2 Navigation Hook Updates

**From Next.js:**
```tsx
import { useRouter, usePathname } from 'next/navigation';

const router = useRouter();
const pathname = usePathname();

router.push('/work');
```

**To TanStack Router:**
```tsx
import { useNavigate, useRouter } from '@tanstack/react-router';

const navigate = useNavigate();
const router = useRouter();
const pathname = router.state.location.pathname;

navigate({ to: '/work' });
```

#### 4.3 Update Context Provider

**From:**
```tsx
import { usePathname } from 'next/navigation';

const pathname = usePathname();
```

**To:**
```tsx
import { useRouter } from '@tanstack/react-router';

const router = useRouter();
const pathname = router.state.location.pathname;
```

---

### Phase 5: MUI/Emotion Integration

#### 5.1 Update Theme Registry

TanStack Start uses Vite, so Emotion integration is simpler:

**`app/ThemeRegistry.tsx`:**
```tsx
'use client'; // No longer needed in TanStack Start

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from './theme/theme';

const cache = createCache({
  key: 'css',
  prepend: true,
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
```

**Note:** Remove `@mui/material-nextjs` package - no longer needed.

---

### Phase 6: Component Updates

#### 6.1 Remove 'use client' Directives

TanStack Start doesn't use the client/server component model like Next.js. Remove all `'use client'` directives from components.

#### 6.2 Update NavBar Component

**From:**
```tsx
import Link from 'next/link';

<Tab component={Link} href={tab.link} />
```

**To:**
```tsx
import { Link } from '@tanstack/react-router';

<Tab component={Link} to={tab.link} />
```

#### 6.3 Update Header Component

**From:**
```tsx
import { useRouter } from 'next/navigation';

const router = useRouter();
router.push('/');
```

**To:**
```tsx
import { useNavigate } from '@tanstack/react-router';

const navigate = useNavigate();
navigate({ to: '/' });
```

---

### Phase 7: Build & Deployment Configuration

#### 7.1 Update Netlify Configuration

**`netlify.toml`:**
```toml
[build]
  command = "npm run build"
  publish = ".output/public"
  
[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/.netlify/functions/server"
  status = 200
```

#### 7.2 Environment Variables

Same as before - TanStack Start uses standard `.env` files:
```env
GMAIL_EMAIL=your-email@gmail.com
GMAIL_PASS=your-app-password
```

---

### Phase 8: Testing & Validation

#### 8.1 Development Testing

```bash
# Start dev server
npm run dev

# Test all routes:
# - http://localhost:3000/
# - http://localhost:3000/about
# - http://localhost:3000/work
# - http://localhost:3000/work/battleship
# - http://localhost:3000/skills
# - http://localhost:3000/contact
```

#### 8.2 Production Build

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

---

## Key Differences: Next.js vs TanStack Start

| Feature | Next.js 16.1 | TanStack Start |
|---------|-------------|----------------|
| **Routing** | App Router (file-based) | TanStack Router (file-based) |
| **Build Tool** | Turbopack | Vite |
| **Data Fetching** | Server Components | Loaders & Server Functions |
| **API Routes** | `app/api/` directory | Server Functions in routes |
| **Navigation** | `next/link`, `useRouter` | `@tanstack/react-router` |
| **Type Safety** | Partial | Full-stack type safety |
| **Client/Server** | Explicit `'use client'` | Unified model |
| **Dev Performance** | Very fast (Turbopack) | Extremely fast (Vite) |
| **Bundle Size** | Larger framework | Smaller, modular |

---

## Advantages of TanStack Start

### ✅ Pros

1. **Full-Stack Type Safety:** Automatic type inference from server to client
2. **Faster Development:** Vite HMR is instant (< 50ms updates)
3. **Smaller Bundle Size:** More modular, only include what you need
4. **Better DX:** Built-in devtools, better error messages
5. **Framework Agnostic:** Can use with React, Vue, Solid, etc.
6. **Type-Safe Routing:** Automatic route type generation
7. **Simpler Mental Model:** No client/server component split
8. **Server Functions:** Direct function calls instead of API routes

### ⚠️ Cons

1. **Newer Framework:** Smaller community, fewer examples
2. **Less Mature:** May have more bugs than Next.js
3. **Documentation:** Still being improved
4. **Ecosystem:** Fewer plugins and integrations
5. **Deployment:** Requires adapter for different platforms

---

## Migration Effort Estimate

| Phase | Effort | Complexity |
|-------|--------|------------|
| 1. Project Setup | 2-3 hours | Low |
| 2. Routing Structure | 3-4 hours | Medium |
| 3. API Routes | 1-2 hours | Low |
| 4. Navigation | 2-3 hours | Medium |
| 5. MUI Integration | 1-2 hours | Low |
| 6. Component Updates | 2-3 hours | Low |
| 7. Build/Deploy | 1-2 hours | Medium |
| 8. Testing | 2-3 hours | Medium |
| **Total** | **14-22 hours** | **Medium** |

---

## Step-by-Step Migration Checklist

### Setup Phase
- [ ] Create new branch: `tanstack-start-migration`
- [ ] Install TanStack Start dependencies
- [ ] Create `app.config.ts`
- [ ] Create `vite.config.ts`
- [ ] Update `tsconfig.json`
- [ ] Update package.json scripts
- [ ] Remove Next.js dependencies

### Routing Phase
- [ ] Create `app/routes/__root.tsx`
- [ ] Migrate `app/layout.tsx` → `__root.tsx`
- [ ] Migrate `app/page.tsx` → `routes/index.tsx`
- [ ] Migrate `app/about/page.tsx` → `routes/about.tsx`
- [ ] Migrate `app/work/page.tsx` → `routes/work/index.tsx`
- [ ] Migrate `app/work/[name]/page.tsx` → `routes/work/$name.tsx`
- [ ] Migrate `app/skills/page.tsx` → `routes/skills.tsx`
- [ ] Migrate `app/contact/page.tsx` → `routes/contact.tsx`

### API & Data Phase
- [ ] Convert contact API route to server function
- [ ] Add loader to dynamic work route
- [ ] Test server function type safety

### Component Phase
- [ ] Remove all `'use client'` directives
- [ ] Update all `import Link from 'next/link'`
- [ ] Update all `useRouter()` calls
- [ ] Update all `usePathname()` calls
- [ ] Update NavBar Link usage
- [ ] Update Header navigation
- [ ] Update WorkItemComponent links

### Styling Phase
- [ ] Update ThemeRegistry (remove Next.js specific code)
- [ ] Test MUI SSR rendering
- [ ] Verify no FOUC (Flash of Unstyled Content)

### Build & Deploy Phase
- [ ] Update netlify.toml
- [ ] Test local build
- [ ] Configure environment variables
- [ ] Test production build

### Testing Phase
- [ ] Test all routes in dev mode
- [ ] Test navigation between pages
- [ ] Test contact form submission
- [ ] Test dynamic routes
- [ ] Test responsive design
- [ ] Verify all images load
- [ ] Test production build

---

## Recommended Migration Strategy

### Option 1: Progressive Migration (Recommended)
1. Set up TanStack Start in parallel
2. Migrate routes one at a time
3. Test each route before moving to next
4. Keep Next.js version running until complete
5. Switch over when fully tested

### Option 2: Big Bang Migration
1. Set up entire TanStack Start structure
2. Migrate all routes simultaneously
3. Fix issues as they arise
4. Deploy when everything works

**Recommendation:** Use Option 1 for lower risk

---

## Resources & Documentation

- **TanStack Start Docs:** https://tanstack.com/start
- **TanStack Router Docs:** https://tanstack.com/router
- **Vite Docs:** https://vitejs.dev
- **Migration Examples:** https://github.com/TanStack/router/tree/main/examples

---

## Conclusion

Migrating from Next.js 16.1 to TanStack Start offers significant advantages in terms of type safety, development speed, and bundle size. The migration is relatively straightforward due to similar file-based routing patterns.

**Estimated Timeline:** 2-3 days for complete migration and testing
**Risk Level:** Medium (new framework, but good documentation)
**Recommendation:** Consider for greenfield projects or if full-stack type safety is critical

---

*Document Version: 1.0*  
*Last Updated: 2026-01-10*  
*Author: GitHub Copilot*
