import type { ContentSection } from './types';

export const challengeContent: ContentSection = {
  id: 'challenge',
  title: 'Challenge 🎯',
  content: '',
  subsections: [
    {
      title: 'User Experience Needs',
      content: `• Traditional AI assistants feel robotic and lack personality. Users needed an immersive, responsive companion that feels alive.
• Text-based interfaces are slow for multi-tasking; a hands-free, voice-first approach was required.`
    },
    {
      title: 'Technical Constraints',
      content: `• **Ultra-Low Latency:** Voice conversations require instant responses. Stacking STT, LLM generation, and TTS usually introduces heavy delays.
• **Context Awareness:** The AI needed to remember user details over time without bloating the LLM prompt window.
• **Browser Security:** Browsers aggressively block microphone access over non-HTTPS connections, complicating local development and deployment.
• **Model Availability:** Free-tier AI APIs frequently hit rate limits, requiring a robust fallback system to prevent downtime.`
    }
  ]
};