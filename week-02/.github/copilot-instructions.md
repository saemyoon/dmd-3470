# DMD-3470 Week-02 Project Instructions

## Architecture Overview
This is a static website project based on HTML5 Boilerplate, using Webpack for bundling and asset management. The site consists of:
- **HTML**: `index.html` as the main template
- **JavaScript**: `js/app.js` as the entry point (currently empty)
- **CSS**: `css/style.css` with HTML5 Boilerplate base styles
- **Assets**: Images in `img/`, third-party scripts in `js/vendor/`
- **PWA Support**: Manifest, icons, and service worker files

Webpack configurations:
- `webpack.common.js`: Shared entry/output settings
- `webpack.config.dev.js`: Development server with hot reload
- `webpack.config.prod.js`: Production build with asset copying

## Development Workflow
- **Start dev server**: `npm start` (opens browser, live reload enabled)
- **Build for production**: `npm run build` (outputs to `dist/` directory)
- **No tests configured**: Update `package.json` scripts as needed

## Code Patterns
- Add custom JavaScript logic in `js/app.js` (Webpack entry point)
- Extend styles in `css/style.css` (preserves boilerplate defaults)
- Place images in `img/` (auto-copied in production builds)
- Vendor scripts in `js/vendor/` (also auto-copied)
- Update HTML meta tags in `index.html` for SEO/PWA

## Key Files
- `index.html`: Main page template with boilerplate structure
- `site.webmanifest`: PWA manifest (update icons, theme color)
- `robots.txt`, `404.html`: SEO and error handling
- `package.json`: Dependencies and build scripts

## Conventions
- Use Webpack's asset copying for static files (no manual dist management)
- HTML5 Boilerplate CSS provides cross-browser resets and defaults
- Development server serves from root, production builds to `dist/`
- No linting or formatting tools configured yet

Focus on adding content to `index.html`, `js/app.js`, and `css/style.css` while leveraging the existing build pipeline.