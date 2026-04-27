import type { ContentSection } from './types';

export const reflectionContent: ContentSection = {
  id: 'reflection',
  title: 'Reflection 💭',
  content: '',
  subsections: [
    {
      title: 'Key Learnings',
      content: `• **Streaming is King:** Sending full responses to a TTS engine is too slow. Chunking LLM output by sentences and synthesizing them asynchronously is the only way to achieve human-like response times.
• **Browser Audio Contexts:** Handling the Web Audio API requires strict attention to user-interaction rules, as browsers block audio contexts from starting without direct user input.`
    },
    {
      title: 'Technical Achievements',
      content: `• Built a sophisticated, custom audio queuing and playback system in React.
• Implemented a highly optimized 3D canvas visualizer without relying on heavy libraries like Three.js.
• Created a robust backend capable of gracefully handling model rate limits and automatically repairing its own connection state.`
    }
  ]
};