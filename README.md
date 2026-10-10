# SPRAVBYT s.r.o. — Homepage

Redesigned homepage for **SPRAVBYT s.r.o.**, a residential property management company based in Banská Bystrica, Slovakia.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui primitives

## Local development

```bash
npm install
npm run dev -- --port 43123
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint

## Content notes

- Visitor-facing copy is in Slovak.
- Subpages that are not yet rebuilt link to verified URLs on [spravbyt.sk](https://spravbyt.sk/).
- **Oznamy** has no verified destination (`/oznamy/` returns 404) and is marked as pending in navigation.
- Portfolio statistics conflict across the existing company pages and are stored in `src/lib/content.ts` for client verification — they are not shown as trust metrics on the homepage.
- The office photograph was not supplied for v1; hero/about media use a replaceable architectural composition in `src/components/architectural-visual.tsx`.
- The supplied logo is a light-on-dark asset and is placed on charcoal header/footer surfaces only.
