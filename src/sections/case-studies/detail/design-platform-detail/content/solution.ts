import type { ContentSection } from './types';

export const solutionContent: ContentSection = {
  id: 'solution',
  title: 'Solution ✨',
  content: '',
  subsections: [
    {
      title: 'High-Level Approach',
      content: `Built a cyberpunk-themed, voice-first AI platform featuring multiple distinct personas (Lisa, Atlas, Nova). The system uses WebSockets to stream audio and text in real-time, drastically reducing perceived latency.`
    },
    {
      title: 'Core Features',
      content: `• 🗣️ **Multi-Persona AI:** Switch between distinct personalities with tailored system prompts and voices.
• 🧠 **Dynamic Knowledge Base:** TF-IDF-powered memory system that automatically saves and retrieves relevant facts.
• 🌐 **Real-Time Web Search:** Wikipedia integration for pulling live factual data.
• 🎙️ **Smart Voice Activity Detection (VAD):** Automatically detects when the user stops speaking to trigger processing.
• 🌀 **Interactive 3D Visualizer:** A Fibonacci sphere that reacts mathematically to the AI's voice volume using the Web Audio API.`
    },
    {
      title: 'Architecture Overview',
      content: `• **Bi-Directional Streaming:** Audio blobs are captured on the frontend, sent via WebSockets, transcribed by Groq, processed by an LLM, and streamed back as Base64 Edge TTS audio.
• **Dynamic Failover System:** The backend automatically fetches a list of available free LLMs from OpenRouter. If the primary model fails, it seamlessly reroutes the prompt to a backup model.`
    },
    {
      title: 'Future Roadmap',
      content: `• **Local LLM Integration:** Enabling fully offline private conversations using Ollama.
• **Vision Capabilities:** Allowing the assistant to "see" via the camera for object recognition.
• **Multi-Modal Output:** Generating images and diagrams on-the-fly during voice chats.`
    }
  ]
};