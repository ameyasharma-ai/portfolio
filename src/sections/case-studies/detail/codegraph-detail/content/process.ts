import type { ContentSection } from './types';

export const processContent: ContentSection = {
  id: 'process',
  title: 'Process 🔄',
  content: '',
  subsections: [
    {
      title: 'Development Methodology',
      content: 'Rapid prototyping of the parsing engine followed by iterative UI polish and final integration of the Supabase-AI caching pipeline.'
    },
    {
      title: 'Solution Alignment',
      content: '• Integrated OpenRouter\'s Gemini 2.0 Flash model to balance high-speed response times with deep architectural understanding.\n• Optimized the React Flow viewport logic to handle over 200+ nodes smoothly on both desktop and mobile.'
    }
  ]
};
