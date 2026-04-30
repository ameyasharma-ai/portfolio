import type { ContentSection } from './types';

export const solutionContent: ContentSection = {
  id: 'solution',
  title: 'Solution ✨',
  content: 'Built a secure, server-side orchestrated architecture that prioritizes speed through a robust caching layer while delivering a premium, interactive frontend experience.',
  subsections: [
    {
      title: 'Core Features',
      content: '• **Interactive Dependency Mapping** - Dynamic, zoomable graphs showing how files connect.\n• **AI Architect Insights** - Automated file-level summaries explaining the purpose of every module.\n• **Flow Tracing** - Instant visualization of import/export paths when clicking on a node.\n• **Sub-Second Caching** - Near-instant reloads for previously analyzed repositories via Supabase.\n• **Responsive Glassmorphism** - Premium, mobile-optimized dark-themed interface.'
    },
    {
      title: 'Architecture Overview',
      content: '• **Frontend Architecture**: Next.js Client Components optimized for interactive graph manipulation and touch gestures.\n• **Serverless Logic**: API Routes handling secure GitHub fetching and regex-based import parsing.\n• **Caching Layer**: Supabase acts as a persistent graph-store, drastically reducing redundant API calls and processing time.'
    }
  ]
};
