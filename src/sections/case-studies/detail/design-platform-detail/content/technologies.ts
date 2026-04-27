import type { ContentSection } from './types';

export const technologiesContent: ContentSection = {
  id: 'technologies',
  title: 'Technologies Used 🛠️',
  content: '',
  subsections: [
    {
      title: 'Frontend & Framework',
      content: `• React 19 - Modern UI components with advanced hooks and state management
• Vite - Lightning-fast frontend tooling and bundling
• Web Audio API - Deep audio processing for real-time visualizers and Voice Activity Detection (VAD)
• Web Speech API - Wake-word detection and local speech processing
• Lucide React - Sleek iconography`
    },
    {
      title: 'AI & Machine Learning',
      content: `• OpenRouter API - Dynamic LLM routing (GPT, Llama 3, Mistral) with auto-failover for high availability
• Groq Whisper API (whisper-large-v3-turbo) - Ultra-fast, high-accuracy speech-to-text transcription
• Scikit-learn (TF-IDF Vectorizer) - Cosine similarity-based retrieval for the local Knowledge Base
• Edge TTS - High-quality, low-latency neural text-to-speech synthesis`
    },
    {
      title: 'Backend & Architecture',
      content: `• Python & FastAPI - High-performance asynchronous backend server
• WebSockets - Bi-directional, real-time communication for streaming audio and text
• Wikipedia API - Real-time web scraping for answering factual queries`
    },
    {
      title: 'Deployment & Environment',
      content: `• Vercel - Next-generation frontend hosting
• Render - Cloud-hosted Python backend microservice`
    }
  ]
};