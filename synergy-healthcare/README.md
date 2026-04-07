# Synergy Health Care & Research Center

A modern, responsive, and interactive web application for Synergy Health Care & Research Center, located in Ghaziabad. This platform provides essential information about the facility, including a dynamic 3D hero section, contact information, and an interactive appointment booking system integrated with WhatsApp.

## Features

- **Interactive 3D Hero Section:** Engaging landing experience powered by Three.js and GSAP animations.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
- **Appointment Booking:** Seamless integration with WhatsApp for easy appointment scheduling.
- **Location Integration:** Embedded Google Maps for easy navigation to the center.
- **Modern Tech Stack:** Built with React, Vite, and styled with custom CSS for maximum performance and visual quality.

## Technologies Used

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **3D Graphics:** [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Animations:** [GSAP](https://gsap.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Styling:** Vanilla CSS

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

## Installation & Setup Process

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd synergy-healthcare
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Or using Yarn:
   ```bash
   yarn
   ```

3. **Start the development server:**
   Using npm:
   ```bash
   npm run dev
   ```
   Or using Yarn:
   ```bash
   yarn dev
   ```

   The application will be available at `http://localhost:5173/` by default.

## Building for Production

To create a production-ready build of the application:

1. **Run the build script:**
   Using npm:
   ```bash
   npm run build
   ```
   Or using Yarn:
   ```bash
   yarn build
   ```

2. **Preview the built application locally:**
   Using npm:
   ```bash
   npm run preview
   ```
   Or using Yarn:
   ```bash
   yarn preview
   ```

The production assets will be generated in the `dist` folder, ready to be deployed to any static web hosting service (e.g., Vercel, Netlify, GitHub Pages).

## Project Structure

```
synergy-healthcare/
├── public/               # Static assets like 3D models and favicon
├── src/                  
│   ├── components/       # Reusable React components
│   ├── assets/           # Images, fonts, and other local assets
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point for React
│   └── index.css         # Global styles and design system tokens
├── index.html            # Main HTML template
├── package.json          # Project metadata and dependencies
└── vite.config.js        # Vite configuration file
```
