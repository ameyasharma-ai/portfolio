import type { ContentSection } from './types';

export const technicalImplementationContent: ContentSection = {
  id: 'technical-implementation',
  title: 'Technical Implementation ⚙️',
  content: '',
  subsections: [
    {
      title: 'Real-Time Synchronization Engine',
      content: `• **Decentralized P2P state map** managed by Socket.IO for keystrokes, cursors, and file system changes.
• **Optimized debounce mechanisms** for cursor tracking to reduce network payload overhead.
• **Instant broadcast** of every keystroke ensures all participants stay perfectly in sync.`
    },
    {
      title: 'Secure Proxy Architecture',
      content: `• **Migrated vulnerable client-side execution logic** to the Express backend.
• **Environment variables strictly isolated** on the server (\`JUDGE0_API_URL\`, \`OPENROUTER_API_KEY\`), completely bypassing browser CORS restrictions and preventing credential leakage.
• **Backend Proxy** acts as a secure intermediary for all sensitive API interactions.`
    },
    {
      title: 'Immersive UI/UX',
      content: `• **Premium "hacker-inspired" dark mode aesthetic** with glassmorphism and dynamic glowing orbs.
• **Custom syntax-highlighted themes** (Tokyo Night, Dracula, GitHub Dark) powered by CodeMirror 6.
• **State-of-the-art SEO** meta tags for rich social sharing and professional presentation.`
    },
    {
      title: 'Performance Tuning',
      content: `• **Asset Optimization:** Minimal bundle sizes through aggressive tree-shaking in Vite.
• **State Isolation:** Prevented unnecessary re-renders in the infinite canvas using memoized React components.
• **Buffer Management:** Implemented efficient WebSocket message batching for high-frequency cursor updates.`
    }
  ]
};