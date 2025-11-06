// Vercel Serverless Function untuk Proxy Gemini API
// File: api/ask-emak.js
// 
// Setup:
// 1. Letakkan file ini di folder `api/` (create jika belum ada)
// 2. Set environment variable GEMINI_API_KEY di Vercel Dashboard
// 3. Update TanyaEmak.jsx untuk memanggil /api/ask-emak alih-alih langsung ke Gemini

export default async function handler(req, res) {
  // CORS headers untuk development (optional, hapus jika tidak perlu)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question } = req.body;
  
  // Validasi input
  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Question is required and must be a string' });
  }

  if (question.length > 500) {
    return res.status(400).json({ error: 'Question too long (max 500 characters)' });
  }

  // Ambil API key dari environment variable (aman, tidak terekspos ke client)
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error('GEMINI_API_KEY not set in environment');
    return res.status(503).json({ error: 'Service temporarily unavailable' });
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

  const systemPrompt = `
    Anda adalah "Emak", asisten AI dari Emak Laundry. Persona Anda: ramah, penuh perhatian, bijak, dan ahli dalam merawat pakaian.
    Aturan: Sapa ramah, jawab singkat (maks 3-4 kalimat), berikan 1-2 tips darurat jika soal noda, dan selalu arahkan ke Emak Laundry di akhir.
  `;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: question }] }],
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: 'AI service error', 
        details: response.status === 429 ? 'Rate limit exceeded' : 'Service unavailable' 
      });
    }

    const data = await response.json();
    
    // Extract answer dari response Gemini
    const candidate = data.candidates?.[0];
    if (candidate && candidate.content?.parts?.[0]?.text) {
      return res.status(200).json({ 
        answer: candidate.content.parts[0].text 
      });
    }

    return res.status(200).json({ 
      answer: 'Aduh, Nak. Emak bingung mau jawab apa. Coba tanya yang lain soal cucian, ya.' 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
