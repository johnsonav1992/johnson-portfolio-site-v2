# Alex Johnson Portfolio Site v2

A modern portfolio website built with Next.js 16.1, showcasing projects, skills, and professional information.

## 🚀 Tech Stack

- **Framework:** Next.js 16.1.0 (App Router with Turbopack)
- **Language:** TypeScript 5.1+
- **UI Library:** Material-UI (MUI) v5.11
- **Styling:** Emotion, tss-react
- **Forms:** Formik with Yup validation
- **Email:** Nodemailer
- **Analytics:** LogRocket
- **Deployment:** Netlify

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npm run typecheck

# Lint code
npm run lint
```

## 🏗️ Project Structure

```
app/
├── layout.tsx              # Root layout with theme and providers
├── page.tsx               # Home page
├── about/page.tsx         # About page
├── contact/page.tsx       # Contact form page
├── skills/page.tsx        # Skills showcase
├── work/
│   ├── page.tsx          # Work portfolio listing
│   └── [name]/page.tsx   # Dynamic project detail pages
├── api/
│   └── contact/route.ts  # Contact form API endpoint
├── components/           # Reusable components
├── context/             # React context providers
├── data/                # Static data (projects, skills)
├── email/               # Email utilities
├── theme/               # MUI theme configuration
└── types/               # TypeScript type definitions
```

## 🌟 Features

- **Server-Side Rendering (SSR)** with Next.js App Router
- **Static Site Generation (SSG)** for optimal performance
- **Dynamic Routes** for project detail pages
- **Responsive Design** with Material-UI
- **Contact Form** with server-side email sending
- **Type Safety** with TypeScript
- **Fast Refresh** with Turbopack for instant updates

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
GMAIL_EMAIL=your-email@gmail.com
GMAIL_PASS=your-app-password
```

### Next.js Configuration

The app uses Turbopack (Next.js 16.1 default) with Emotion compiler enabled for MUI styling.

## 📱 Pages

- **Home (/)** - Landing page with introduction
- **/about** - Professional background and bio
- **/skills** - Technical skills showcase
- **/work** - Portfolio of projects
- **/work/[name]** - Individual project details
- **/contact** - Contact form

## 🎨 Styling

- Material-UI components with custom theme
- Emotion CSS-in-JS
- tss-react for MUI v5 styling
- Responsive breakpoints for mobile/tablet/desktop
- Ubuntu font family

## 🚀 Deployment

The site is configured for Netlify deployment:

```bash
npm run build
```

The build output is in `.next/` directory.

## 📄 License

© 2026 - AJ Web Development

## 🔗 Links

- [GitHub](https://github.com/johnsonav1992)
- [LinkedIn](https://www.linkedin.com/in/johnsonav/)

