import type { ContentSection } from './types';

export const technicalImplementationContent: ContentSection = {
  id: 'technical-implementation',
  title: 'Technical Implementation ⚙️',
  content: '',
  subsections: [
    {
      title: '🧠 Knowledge Retrieval System',
      content: `*Memory & Context Management*
• Implemented a custom RAG (Retrieval-Augmented Generation) pipeline using Scikit-Learn.
• Text chunks are vectorized using \`TfidfVectorizer\`. User prompts are compared against the knowledge base using cosine similarity.
• Only chunks exceeding a strict confidence threshold (>0.1) are injected into the context window, preventing hallucination and prompt bloat.`
    },
    {
      title: '🎙️ Voice Processing Pipeline',
      content: `*Lightning-Fast Speech-to-Text & TTS*
• Audio is recorded via \`MediaRecorder\` in WebM format and pushed over WebSockets.
• Backend routes audio to Groq's Whisper API for near-instant transcription.
• AI responses are generated in a streaming fashion. As soon as a complete sentence is formed, it is dispatched to Edge TTS.
• Audio is sent back to the client as Base64 strings, decoded, and queued in a custom audio playback buffer ensuring seamless speech.`
    },
    {
      title: '🌀 3D Mathematical Visualizer',
      content: `*Audio-Reactive Canvas Rendering*
• Built a custom 3D rendering engine on a 2D HTML Canvas.
• Generates a Fibonacci sphere (Golden Spiral) with 800 data points.
• Uses the Web Audio API's \`AnalyserNode\` to extract frequency data from the incoming TTS audio.
• The volume average directly manipulates the sphere's rotation speed, radius, and depth-shading opacity, creating a mesmerizing, breathing visual effect.`
    },
    {
      title: '🛡️ Resilience & Auto-Failover',
      content: `*High Availability LLM Routing*
• The backend maintains a dynamic list of "elite" fast models.
• If an OpenRouter API call fails or times out, the system automatically catches the exception and iterates through up to 15 backup models.
• Ensures the assistant remains online even during heavy API network congestion.`
    }
  ]
};