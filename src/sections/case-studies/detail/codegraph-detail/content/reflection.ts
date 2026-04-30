import type { ContentSection } from './types';

export const reflectionContent: ContentSection = {
  id: 'reflection',
  title: 'Reflection 💭',
  content: '',
  subsections: [
    {
      title: 'Key Learning',
      content: 'Database-driven caching is the backbone of speed. By persisting analyzed graphs in Supabase, we transformed a 10-second analysis process into a sub-second interactive experience for returning users.'
    },
    {
      title: 'Project Success',
      content: '• Built a tool that provides instant clarity on complex repo architectures.\n• Achieved a "one-click" experience that abstracts away the complexity of GitHub\'s REST API.\n• Delivered a premium design that rivals enterprise-level developer tools.'
    },
    {
      title: 'Future Enhancements',
      content: '• **3D Visualization**: Transforming 2D React Flow maps into immersive 3D space.\n• **Commit History Integration**: Visualizing how the graph evolved over time.\n• **Multi-Agent AI**: Deeper repository-wide architectural audits using multiple LLMs.'
    }
  ]
};
