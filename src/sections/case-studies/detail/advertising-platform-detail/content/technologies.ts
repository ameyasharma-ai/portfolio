import type { ContentSection } from './types';

export const technologiesContent: ContentSection = {
  id: 'technologies',
  title: 'Technologies Used 🛠️',
  content: '',
  subsections: [
    {
      title: 'Frontend & Framework',
      content: `• **Vite** - Lightning-fast build tool
• **TypeScript** - Type-safe development
• **React 18** - Modern UI components
• **TailwindCSS** - Utility-first styling
• **CodeMirror 6** - Highly customizable code editor
• **TLDraw** - Infinite canvas whiteboard`
    },
    {
      title: 'Backend & Real-Time',
      content: `• **Node.js & Express** - Lightweight backend server
• **Socket.IO** - Low-latency bidirectional communication`
    },
    {
      title: 'Integrations',
      content: `• **Judge0 API** - Multi-language code execution engine
• **OpenRouter API** - Intelligent AI Copilot generation`
    },
    {
      title: 'Infrastructure',
      content: `• **Vercel** - Frontend deployment
• **Render** - Backend deployment and WebSocket broker`
    }
  ]
};