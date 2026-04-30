import type { ContentSection } from './types';

export const challengeContent: ContentSection = {
  id: 'challenge',
  title: 'Challenge 🎯',
  content: 'Developers and architects often waste hours manually tracing imports and reading documentation to understand the structure of large or unfamiliar repositories, leading to slower onboarding and increased risk during refactoring.',
  subsections: [
    {
      title: 'Business Pain Points',
      content: 'Navigating complex codebases is a significant bottleneck in software development, often causing friction when new team members join or when large-scale architectural changes are required.'
    },
    {
      title: 'Technical Constraints',
      content: '• **Computational Overhead** - Parsing thousands of files and imports recursively can be slow and resource-heavy.\n• **API Security** - Sensitive tokens for GitHub and AI providers must be isolated from the client-side bundle.\n• **Scalability & Rate Limits** - Public GitHub APIs have strict limits that must be managed to ensure service availability.'
    },
    {
      title: 'User Needs',
      content: 'A fast, intuitive "one-click" visualization that provides both a bird\'s-eye view of architecture and deep, AI-driven context for individual files.'
    }
  ]
};
