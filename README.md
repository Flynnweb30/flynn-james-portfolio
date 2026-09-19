# Flynn James — B2B Sales Portfolio

Multi-page portfolio for Flynn James, Senior B2B SDR and Appointment Setting Specialist.

## Stack
- Vite + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Local Development
```bash
npm install
npm run dev
Visit http://localhost:3000

Build
bash
npm run build
Outputs to dist/.

Deploy on Render
Push to GitHub

Create a new Static Site on Render

Build command: npm install && npm run build

Publish directory: dist

Add rewrite rule: /* → /index.html (Rewrite)

Or use the included render.yaml for automated setup.

SEO Features
Per-page metadata (title, description, canonical, OG, Twitter)

JSON-LD: Person, ProfessionalService, WebSite, ProfilePage, ItemList, ContactPage, FAQPage, BreadcrumbList, Service

Sitemap + robots.txt

Visible breadcrumbs

OptimizedImage component (lazy loading, alt text, CLS protection)

prefers-reduced-motion support

text

---

That's the complete project. Push all files to GitHub, then deploy on Render with these settings:

| Setting | Value |
|---|---|
| **Service Type** | Static Site |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |
| **Node Version** | 20.11.1 (via `NODE_VERSION` env var) |
| **Rewrite Rule** | `/*` → `/index.html` (Rewrite) |

The build will now resolve `./pages/*` correctly because the `src/pages/` folder exists with all seven page files.