import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
app.use(express.json());

// API route for secure proxying to Gemini
app.post('/api/chat', async (req: any, res: any) => {
  try {
    const { prompt, systemInstruction, customApiKey } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required.' });
    }

    // Use custom client key if provided, else fallback to environment variable
    const apiKey = (customApiKey && customApiKey.trim()) || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        error: 'A Gemini API kulcs nincs konfigurálva a szerveren. Kérjük, adja meg a saját API kulcsát a Klinikai AI Asszisztens felületén! / GEMINI_API_KEY is not configured on the server. Please enter your own API key in the Clinical AI Assistant interface.' 
      });
    }

    // Initialize the client with standard user agent header
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    // Use the modern SDK call with basic text task model: gemini-3.5-flash
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: systemInstruction ? { systemInstruction } : undefined,
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error('Error calling Gemini API:', error);
    res.status(500).json({ error: error.message || 'An error occurred during AI generation.' });
  }
});

const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
  // In development, start the Vite dev server as middleware
  createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  }).then((vite) => {
    app.use(vite.middlewares);

    const PORT = 3000;
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  });
} else {
  // In production container or standalone deployment
  const distPath = path.join(process.cwd(), 'dist');
  app.use(express.static(distPath));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });

  // Only listen if not running as a Vercel Serverless Function
  if (process.env.VERCEL !== '1') {
    const PORT = parseInt(process.env.PORT || '3000', 10);
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}

export default app;
