# Synergy Healthcare — Public Website

A React/Vite website for clinic information, services, location, and contact requests.

**Scope:** public marketing and contact interface. Clinical records belong to the separate [desktop application](https://github.com/Nitsh-kumar/synergy_desktop_app).

## Current behavior

- Service, hero, contact, and location sections.
- A form validates name/phone fields and opens a prefilled WhatsApp message.
- The visitor must send the WhatsApp message. Opening WhatsApp does not confirm an appointment or guarantee a response time.
- Map and messaging links can involve external services.

## Local setup

Application files are inside `synergy-healthcare/`. Use a Node.js release compatible with the pinned Vite 8 toolchain.

```bash
git clone https://github.com/Nitsh-kumar/synergy_web.git
cd synergy_web/synergy-healthcare
npm ci
npm run dev
```

Use the local URL printed by Vite.

```bash
npm run lint
npm run build
npm run preview
```

Build assets are written to the application's `dist/` directory.

## Stack and source map

The manifest declares React 19, Vite 8, and Tailwind CSS 4. It does not declare Three.js, GSAP, or React Three Fiber; earlier documentation describing those as implemented was inaccurate.

- [synergy-healthcare/package.json](synergy-healthcare/package.json): scripts and dependencies.
- [synergy-healthcare/src/App.jsx](synergy-healthcare/src/App.jsx): page composition.
- [synergy-healthcare/src/components/ContactForm.jsx](synergy-healthcare/src/components/ContactForm.jsx): WhatsApp request form.
- [synergy-healthcare/src/components/MapEmbed.jsx](synergy-healthcare/src/components/MapEmbed.jsx): location embed.

## Before publishing

Confirm clinic-approved information and contact destinations. Test links and popup-blocking behavior, provide a manual contact fallback, and verify zoom/keyboard accessibility. Do not collect clinical histories through the public form.

Live hosting, asset rights, and contact response times have not been verified. See [project status](docs/PROJECT_STATUS.md).

## Validation

This documentation was checked against repository files on 13 October 2026. Builds, application runs, and test suites were not executed during this documentation pass. Commands below describe the intended local workflow, not a verified deployment.
