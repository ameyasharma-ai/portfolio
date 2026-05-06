import type { ContentSection } from './types';

export const challengeContent: ContentSection = {
  id: 'challenge',
  title: 'Challenge 🎯',
  content: '',
  subsections: [
    {
      title: 'Business Pain Points',
      content: `Remote engineering teams and coding interviewers lack a unified, friction-free space for both coding and architectural brainstorming, often requiring them to juggle multiple separate applications.`
    },
    {
      title: 'Technical Constraints',
      content: `• **⚡ Zero-latency requirement** - Keystrokes and cursor movements must synchronize instantly across multiple users.
• **🔒 Security & CORS** - Third-party API keys (AI, Code Execution) cannot be exposed to the frontend browser bundle.
• **🧹 Resource Management** - Backend must handle ephemeral multi-tenant rooms without leaking memory from abandoned sessions.`
    },
    {
      title: 'User Needs',
      content: `One-click room creation with secure password generation, live cursor tracking, in-browser code execution, and an immersive aesthetic.`
    },
    {
      title: 'Market Positioning',
      content: `Built to compete with enterprise tools like Replit and Miro by offering a lightweight, unified alternative for high-stakes technical interviews and collaborative prototyping.`
    }
  ]
};