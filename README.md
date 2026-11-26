# AUREVIA INTERIORS

A responsive interior design portfolio for AUREVIA INTERIORS, Dhaka. The visual identity uses matte black, metallic gold and soft white, with the philosophy **Simple is the Luxury**.

The site includes Home, About Us, all ten approved Services, a filterable Portfolio, a four-step Process and Contact. Telephone, email, WhatsApp, website and directions links use the supplied business details. Facebook and Instagram display the supplied business name; profile URLs have not been assumed.

## Technologies

- React 19, TypeScript and TanStack Start with file-based routing
- Vite and the Netlify TanStack Start adapter
- Custom responsive CSS, Tailwind CSS and Lucide icons
- Netlify Image CDN for responsive WebP photography
- Netlify Forms for inquiries, with honeypot spam protection
- Cormorant Garamond and Manrope typefaces, loaded with `font-display: swap`

## Local development

Use Node 22.13+ or Node 24, and pnpm.

```sh
pnpm install
netlify dev --port 8889
```

The Netlify CLI emulates the Image CDN. A plain Vite server does not serve Image CDN transformations. Netlify processes inquiry submissions on the deployed site; the form rejects unprocessed local registration HTML rather than reporting false success.

The deployment pipeline runs the configured Vite build and publishes `dist/client`. No application credentials or database are required.

## Content and original logo

- `src/routes/index.tsx`: the six site sections and approved contact information.
- `src/lib/services.ts`: the ten approved services and short descriptions.
- `src/lib/portfolio.ts`: gallery content, category tags, captions, image sources and CDN helpers.
- `src/styles.css`: palette, typography, layouts, breakpoints and interaction styles.
- `src/lib/site.ts`: brand and sharing metadata.
- `public/img/aurevia-logo.png`: the uploaded original, moved into the public assets directory without alteration. Preserve this exact file. Display it proportionally, with no crop, filter, redraw or generated replacement.

## Replacing gallery photography

The current images are **Design Inspiration**, not completed company work. All gallery cards, the image viewer and the section copy explicitly distinguish them from AUREVIA projects. No clients, project locations, completion dates or business achievements have been invented.

To publish an approved original project, add its photographs under `public/img/` and update the corresponding record in `src/lib/portfolio.ts`: `image`, `alt`, `title`, `description`, `source` and `categories`. Set `kind` to `project` only for verified AUREVIA work. The card and viewer label then read “AUREVIA Project” automatically. Retain `kind: 'inspiration'` for reference imagery. Update the section introduction and gallery note to reflect a mixed or fully original collection when publishing company projects. No gallery redesign is needed.

The categories are Residential, Living Room, Bedroom, Kitchen, Dining, Commercial and Other Interiors. Category tags can be combined. The gallery supports filtering, progressive image display, a modal image viewer, arrow-key browsing, Escape to close and focus restoration. Images load lazily except for the prioritized hero, with responsive CDN widths.

## Inquiry form

`src/components/ContactForm.tsx` submits URL-encoded data to the static `public/__forms.html` registration file. Keep form identity, honeypot and all field names synchronized. The form captures name, email, optional phone, optional service and the inquiry message. Pending submissions disable controls and block duplicates. Failed or timed-out submissions preserve entered data. Success appears only after an accepted response.

The Netlify Forms activation marker is included. Submissions are stored by Netlify Forms; no browser or local-file storage is used. Do not submit live customer inquiries for development testing.

Contact form regression coverage is in `src/components/ContactForm.test.tsx`. Build, browser and test commands were not run during site creation; deployment validation is handled by the platform.

## Photography

Real interior photographs were selected from Unsplash, downloaded as local assets and visually reviewed for relevance. Their usage is governed by the [Unsplash License](https://unsplash.com/license). The imagery is editorial inspiration only, with no claim that AUREVIA designed the pictured spaces.

| Asset                 | Original source                                              |
| --------------------- | ------------------------------------------------------------ |
| Hero living room      | https://images.unsplash.com/photo-1600210492486-724fe5c67fb0 |
| About interior        | https://images.unsplash.com/photo-1600210491892-03d54c0aaf87 |
| Considered living     | https://images.unsplash.com/photo-1600607687939-ce8a6c25118c |
| Bedroom               | https://images.unsplash.com/photo-1616594039964-ae9021a400a0 |
| Kitchen               | https://images.unsplash.com/photo-1556912172-45b7abe8b7e1    |
| Dining                | https://images.unsplash.com/photo-1617806118233-18e1de247200 |
| Commercial            | https://images.unsplash.com/photo-1517248135467-4c7edcad34c4 |
| Other interiors       | https://images.unsplash.com/photo-1600566752355-35792bedcfea |
| Warm minimalism       | https://images.unsplash.com/photo-1616486338812-3dadae4b4ace |
| Architectural balance | https://images.unsplash.com/photo-1600607687920-4e2a09cf159d |
