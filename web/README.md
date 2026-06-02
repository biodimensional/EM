# BioDimensional — Next.js Website

Personal scientific portfolio and services site for **Eros Montin, PhD**.  
Stack: **Next.js 15 · TypeScript · Tailwind CSS · App Router**  
Deployed on **AWS Amplify**.

---

## Local Development

```bash
cd web
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
web/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   ├── publications/     # Publications page
│   ├── software/         # Software & repos page
│   ├── projects/         # Research projects page
│   ├── videos/           # Videos & demos page
│   ├── presentations/    # Slides & presentations page
│   ├── services/         # Services page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── work/             # Unified search page (/work?q=…)
│   ├── sitemap.ts        # Auto-generated sitemap
│   └── robots.ts         # robots.txt
├── components/           # Reusable React components
├── content/              # YAML content files (source of truth)
│   ├── publications.yaml
│   ├── repos.yaml
│   ├── projects.yaml
│   ├── videos.yaml
│   ├── presentations.yaml
│   └── services.yaml
├── lib/
│   ├── content.ts        # Content loaders (server-side)
│   └── types.ts          # TypeScript types
└── public/
    └── images/           # Static assets
```

---

## How to Add Content

### Add a Publication

Edit `content/publications.yaml` and add an entry:

```yaml
- id: 100
  title: "My New Paper"
  authors: "Montin E, Coauthor A"
  year: 2026
  journal: "Nature Methods"
  type: article          # article | conference | preprint | book-chapter
  tags: [mri, radiomics, machine-learning]
  doi: "10.1234/example"
  pubmed: "https://pubmed.ncbi.nlm.nih.gov/..."
  pdf: "https://link-to-pdf.com/paper.pdf"
  summary: "One-paragraph plain-language summary."
  featured: true
  thumbnail: "/images/dalle/mypaper.png"
```

### Add a Software Repository

Edit `content/repos.yaml`:

```yaml
- name: "MyTool"
  description: "Short description of the tool."
  github: "https://github.com/erosmontin/mytool"
  language: "Python"
  tags: [python, mri, open-source]
  related_publications: [100]
  featured: true
  thumbnail: "/images/default-image.png"
```

### Add a Video

Edit `content/videos.yaml`:

```yaml
- title: "Demo: MyTool in action"
  description: "Walk-through of the MyTool pipeline."
  year: 2026
  source: youtube          # youtube | vimeo | mp4
  url: "https://www.youtube.com/watch?v=VIDEO_ID"
  thumbnail: "/images/default-image.png"
  duration: "4:30"
  tags: [demo, mri, cloud]
  featured: true
```

The video embed only loads after the user clicks Play.

### Add a Google Slides Presentation

Edit `content/presentations.yaml`:

```yaml
- title: "ISMRM 2025 — MRI Simulation Pipeline"
  description: "Power pitch at ISMRM 2025."
  year: 2025
  event: "33rd ISMRM Scientific Meeting, Honolulu"
  source: google_slides
  embed_url: "https://docs.google.com/presentation/d/PRESENTATION_ID/embed"
  thumbnail: "/images/default-image.png"
  tags: [mri, simulation, ismrm]
  featured: true
```

To get the embed URL from Google Slides:
File → Share → Publish to web → Embed → copy the `src` from the `<iframe>`.

---

## Deployment (AWS Amplify)

1. Push the `nextjs` branch to GitHub.
2. In AWS Amplify Console → New App → Host web app → GitHub.
3. Select repository `erosmontin/EM` and branch `nextjs`.
4. Amplify will read `amplify.json` at repo root for build settings.
5. The build runs `npm ci && npm run build` inside the `web/` folder.

### Custom Domain

Set `biodimensional.com` as the custom domain in Amplify → Domain management.

---

## Design Tokens

Defined as CSS variables in `app/globals.css`:

| Variable | Value | Usage |
|---|---|---|
| `--navy` | `#0f1f3d` | Headings, primary text |
| `--blue-accent` | `#2563eb` | Links, CTAs |
| `--blue-light` | `#dbeafe` | Tags, subtle fills |
| `--muted` | `#6b7a99` | Secondary text |
| `--border` | `#e2e8f0` | Dividers, card borders |

