# Synergy Healthcare website

React/Vite public clinic website. Read the [repository guide](../README.md) for scope, setup, and limitations.

From this directory:

```bash
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

Use a Node.js release compatible with Vite 8. The manifest declares React 19 and Tailwind CSS 4; it does not declare Three.js or GSAP.

The contact form opens a prefilled WhatsApp message. The visitor must send it, and the clinic must confirm an appointment separately. This website is not the internal clinical-record application.

Commands were checked against package.json but not executed during this documentation pass. See [project status](../docs/PROJECT_STATUS.md).
