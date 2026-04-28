import type { ContentSection } from './types';

export const processContent: ContentSection = {
  id: 'process',
  title: 'Process 🔄',
  content: '',
  subsections: [
    {
      title: 'Development Methodology',
      content: `Iterative development focusing first on core websocket stability, followed by feature integrations (AI, Code Execution), and finalized with rigorous security hardening.`
    },
    {
      title: 'Solution Alignment',
      content: `• **Automated background daemon** (\`setInterval\`) implemented to prune unattended rooms after 30 minutes of inactivity, preserving server RAM on free-tier deployments.
• **Refactored AI and Execution workflow** to a backend proxy pattern to guarantee enterprise-grade security for API keys.`
    }
  ]
};