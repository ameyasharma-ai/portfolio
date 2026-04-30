import type { ContentSection } from './types';

export const technicalImplementationContent: ContentSection = {
  id: 'implementation',
  title: 'Technical Implementation ⚙️',
  content: '',
  subsections: [
    {
      title: 'Graph Reconstruction Engine',
      content: '• Implemented a recursive tree-traversal algorithm using the GitHub API to map entire repository structures.\n• Developed a lightweight, high-speed regex parser to extract ES Module imports without the overhead of a full AST.\n• Custom React Flow integration with memoized node types to prevent UI lag in large codebases.'
    },
    {
      title: 'Secure Proxy Architecture',
      content: '• Isolated all sensitive credentials (OPENROUTER_API_KEY, GITHUB_TOKEN) on the server.\n• Frontend communicates only with internal API routes, ensuring no API keys are ever exposed in the browser\'s "Inspect Element" tab.\n• Implemented Row-Level Security (RLS) on Supabase to protect cached architectural data.'
    },
    {
      title: 'Immersive UI/UX',
      content: '• State-of-the-art dark mode with backdrop-blur effects and custom HSL color palettes.\n• Dynamic viewport locking for mobile devices to ensure the graph canvas always remains interactive.\n• Optimized SEO metadata and native favicon integration for a professional product presence.'
    }
  ]
};
