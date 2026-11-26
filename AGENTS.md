# AUREVIA INTERIORS

## Architecture

A single-page interior design portfolio using TanStack Start, React 19 and TypeScript, deployed through the Netlify Vite adapter. `src/routes/__root.tsx` owns the document, shared header/footer, fonts and sharing metadata. `src/routes/index.tsx` renders the six anchor-linked sections. TanStack generates `src/routeTree.gen.ts` during development or build; do not edit that generated file.

The site needs no custom server, authentication or database. Netlify Forms persists inquiries. Static, authored service and gallery content belongs in TypeScript modules. Do not add backend infrastructure for static content.

## Key directories

- `src/components/`: shared header, footer, inquiry form, portfolio gallery and not-found page.
- `src/lib/site.ts`: approved brand and page metadata.
- `src/lib/services.ts`: exactly the ten user-approved services.
- `src/lib/portfolio.ts`: typed gallery records, categories, provenance and Image CDN helpers.
- `src/styles.css`: custom responsive visual system, with minimal hover motion and reduced-motion support.
- `public/img/`: the original logo and local, real interior photography.
- `public/__forms.html`: hidden static Netlify Forms registration. All fields must match the React form.
- `.netlify/features/netlify-forms`: feature activation marker used at deployment.

## Brand and content rules

Preserve `public/img/aurevia-logo.png` byte for byte. It is the user's uploaded original logo. Never redraw, crop, recolor, filter, regenerate or replace it. Scale it proportionally with CSS. Do not build a replacement wordmark or icon. Keep it clear on the dark header and footer.

The tagline is “Design Beyond Imagination.” The philosophy is “Simple is the Luxury.” Keep the matte black, metallic gold and soft white palette. Use restrained Cormorant Garamond headings and Manrope body copy; avoid ornamental motion or excessive decoration.

All current photographs are explicitly **Design Inspiration**, not AUREVIA projects. Never invent clients, completed projects, company history, metrics, awards or business facts. Gallery records support `kind: 'project'` only for approved original work. When adding original projects, update gallery copy to match the collection without changing its layout. Image source URLs are provenance, not client/project URLs.

Use the supplied Bangladesh contact details. Phone links use `+8801986894752`; WhatsApp uses `https://wa.me/8801789851118`. Email is `Aureviainterior@gmail.com`. Do not infer Facebook/Instagram profile URLs from the display name; the supplied name appears as text.

## Interaction conventions

Use semantic sections/headings, accessible controls, visible keyboard focus and native required/email validation. The mobile menu exposes expanded state and closes on navigation or Escape. The image viewer uses a native modal dialog for focus containment and supports Escape, previous/next and arrow keys. Restore page scrolling and focus when it closes.

Preserve form data on errors, reject non-2xx and unprocessed registration HTML, use a 15-second timeout and prevent duplicate sends. Submit only to `/__forms.html`, because the SSR catch-all intercepts POSTs to `/`. Synchronize name, email, phone, service, message, subject, form-name and bot-field between the React form and static registration. Do not log customer information.

Serve photography through `imageUrl`/`imageSet` using Netlify Image CDN. Prioritize the hero and lazy-load below-fold images. Use descriptive alt text and maintain image dimensions. The original logo is served directly, without image transformations.

## Development

Use pnpm and a supported Node 22.13+ or Node 24 runtime. Local Netlify emulation uses `netlify dev --port 8889`. The build is `vite build`, published from `dist/client`. Follow the active run's restrictions on builds and validation; this creation run delegates those checks to the deployment pipeline. Never claim that a local HTTP 200 proves form delivery, and do not send live form submissions for tests.

`src/components/ContactForm.test.tsx` contains mocked regression coverage for form behavior. Template blog, résumé, example projects, content collections and developer identity have been removed. Do not reintroduce their demo data.
