import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from 'vite-plugin-sitemap';

// Define your routes for the sitemap
const dynamicRoutes = [
  '/',
  '/case-studies/design-platform',
  '/case-studies/advertising-platform',
  '/privacy-policy'
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://www.stavrossymeonidis.dev',
      dynamicRoutes,
      exclude: ['/admin', '/private'],
      // Remove the incorrect properties and use the correct ones
      readable: true,
      generateRobotsTxt: true,
      robots: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin/', '/api/', '/private/'],
          crawlDelay: 10,
          cleanParam: 'utm_source&utm_medium&utm_campaign'
        }
      ],
      // If you need to set lastmod for each route, use this format:
      outDir: 'dist'
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Generate source maps for better SEO debugging
    sourcemap: true,
    // Optimize for production
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'animation-vendor': ['framer-motion', 'gsap'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'physics-vendor': ['@react-three/rapier', 'matter-js'],
          'spline-vendor': ['@splinetool/react-spline', '@splinetool/runtime']
        }
      }
    }
  }
});