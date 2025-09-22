# Portfolio (with lots of project demo images - Tailwind, static)

This is ideal for portfolios that has lots of demonstratable pojects with images. It also has an experince section like in a resume. Zero‑build, static portfolio powered by Tailwind via CDN. Open `index.html` directly or serve with any static server. This repo is open‑source and designed for easy customization.

## Features

- Tailwind via CDN (no build step)
- Projects section (alternating split layout) driven by local assets
- Lightbox with keyboard navigation (Esc, ← →)
- Clients marquee with local SVG logos
- Resume download CTA
- Demo page with multiple layout/UX options

## Quick start

- Replace placeholder text (name, bio, email) in `index.html`.
- Update your GitHub/LinkedIn URLs in header and footer.
- Add your resume at `assets/resume.pdf`.
- Optional: run a local server for nicer routing/history.

## Project structure

```
assets/
  images/
    p1/ ... p5/             # Project images (main + numbered screenshots)
  logos/                    # Client logos (SVG)
  resume.pdf                # Your resume (add this)
demo.html                   # Gallery of layout options
index.html                  # Main site
README.md                   # This file
```

## Customize

- Create `assets/resume.pdf` (the Resume CTA links here).
- Store your screenshots under `assets/images/p1..p5/`.
- Store client logos under `assets/logos/` and reference them in the Clients section.

## Projects data

The Projects section in `index.html` uses a small inline script to render five projects in an alternating split layout.

- Main image: first entry in each project's `images` array. Use `main.(png|jpg)` where possible.
- Thumbnails: subsequent entries in the `images` array.
- To change projects, edit the `projects` array in `renderProjectsAlternating()`.
- To add more projects, extend the array and ensure assets exist in `assets/images/`.

Keyboard/mouse UX:
- Click any image to open lightbox
- Esc closes; ← → navigates
- Click outside image closes

## Local preview

- Double-click `index.html` to open in a browser, or run a simple server:

```bash
python3 -m http.server 5173
```

Then visit `http://localhost:5173`.

## Deployment

### GitHub Pages

1. Commit and push to a public repo.
2. In GitHub → Settings → Pages: choose "Deploy from a branch" → `main` → root (`/`).
3. Site will be at `https://<user>.github.io/<repo>/`.

### Any static host

- Upload the folder contents as‑is. Ensure `assets/` is preserved.

## Contributing

PRs welcome. Please:
- Keep edits readable and minimal.
- Match code style (Tailwind utility classes; no build step).
- Avoid adding dependencies unless necessary.

## License

MIT. See `LICENSE` (add one if missing).

- Tailwind is included via CDN for simplicity. For production/optimization, consider a proper Tailwind build to purge unused classes.



