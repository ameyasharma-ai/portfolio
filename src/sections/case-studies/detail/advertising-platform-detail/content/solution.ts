import type { ContentSection } from './types';

export const solutionContent: ContentSection = {
  id: 'solution',
  title: 'Solution ✨',
  content: '',
  subsections: [
    {
      title: 'High-Level Approach',
      content: `Built a highly responsive websocket-based architecture prioritizing speed and minimal memory footprint, seamlessly combining a robust IDE experience with visual collaboration.`
    },
    {
      title: 'Core Features',
      content: `• **📝 Real-time, multi-file code editing** with collaborative syntax highlighting
• **🤖 AI-powered Copilot** for context-aware autocompletion and code generation
• **⚙️ Multi-language code execution sandbox** (JavaScript, TypeScript, Python, C++, Java)
• **🎨 Infinite collaborative whiteboard** for system architecture and sketching
• **🔐 Secure multi-tenant rooms** with auto-generated alphanumeric passwords`
    },
    {
      title: 'Architecture Overview',
      content: `**Frontend Architecture:** Frontend-heavy Vite React application optimized for ultra-fast rendering.

**Real-Time Backend:** Lightweight Express backend acting as a secure websocket message broker.

**Secure Proxy Architecture:** Backend Proxy Architecture ensures all Judge0 and OpenRouter API calls are securely routed through the server, completely sanitizing the client bundle.`
    },
    {
      title: 'Deployment Strategy',
      content: `Leveraged a multi-cloud approach with Vercel for the edge-ready frontend and Render for the persistent WebSocket broker, ensuring 99.9% uptime for global users.`
    }
  ]
};