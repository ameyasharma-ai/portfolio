import type { ContentSection } from './types';

export const processContent: ContentSection = {
  id: 'process',
  title: 'Process 🔄',
  content: '',
  subsections: [
    {
      title: 'Development Methodology',
      content: `• Focus on Latency: The architecture was designed from day one to minimize the gap between the user speaking and the AI responding.`
    },
    {
      title: 'Technical Evolution',
      content: `• **Transition to Cloud:** Moved from heavy local PyTorch dependencies (VRAM intensive) to lightning-fast cloud APIs (Groq + OpenRouter) to allow deployment on free-tier cloud providers.
• **State Management:** Overhauled the React frontend to handle complex, asynchronous audio queues, ensuring TTS chunks play sequentially without overlapping.`
    }
  ]
};