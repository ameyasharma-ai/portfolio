import type { ContentSection } from './types';

export const reflectionContent: ContentSection = {
  id: 'reflection',
  title: 'Reflection 💭',
  content: '',
  subsections: [
    {
      title: 'Key Learning',
      content: `Secure architecture is paramount. Moving external API calls (Judge0, OpenRouter) to a backend proxy not only prevented potential credential leakage but also permanently resolved complex CORS issues associated with browser-based execution.`
    },
    {
      title: 'Project Success',
      content: `• **Delivered a production-ready application** that seamlessly blends coding and architectural drawing.
• **Achieved robust server performance** with unattended room auto-pruning.
• **Implemented a stunning, premium user interface** that wows users at first glance.`
    },
    {
      title: 'Future Enhancements',
      content: `• **🚀 Voice & Video Integration:** WebRTC-based communication within rooms.
• **📊 Git Integration:** Bi-directional syncing with GitHub repositories.
• **🤖 Advanced AI:** Multi-agent debugging and automated unit test generation.`
    },
    {
      title: 'Industry Impact',
      content: `Successfully demonstrated that complex, real-time developer tools can be built with minimal overhead using modern web standards and secure proxy architectures.`
    }
  ]
};