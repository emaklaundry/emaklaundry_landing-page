import React, { useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';

export const TanyaEmak = () => {
  const [pertanyaan, setPertanyaan] = useState("");
  const [jawaban, setJawaban] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const cooldownRef = useRef(0);

  const contoh = [
    'Bagaimana cara hilangkan noda minyak di baju?',
    'Boleh nggak jaket kulit dicuci mesin?',
    'Cara aman mengatasi baju luntur?'
  ];

  const handleTanyaEmak = async () => {
    const now = Date.now();
    if (now - cooldownRef.current < 1500) return; // debounce/cooldown 1.5s
    cooldownRef.current = now;

    if (!pertanyaan.trim()) {
      setError("Silakan tulis pertanyaan Anda terlebih dahulu.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setJawaban("");

    const systemPrompt = `
      Anda adalah "Emak", asisten AI dari Emak Laundry. Persona Anda: ramah, penuh perhatian, bijak, dan ahli dalam merawat pakaian.
      Aturan: Sapa ramah, jawab singkat (maks 3-4 kalimat), berikan 1-2 tips darurat jika soal noda, dan selalu arahkan ke Emak Laundry di akhir.
    `;

    const userQuery = pertanyaan;
    const apiKey = import.meta.env?.VITE_GEMINI_API_KEY || "";
    if (!apiKey) {
      setError("Fitur Tanya Emak dimatikan sementara. Hubungi kami via WhatsApp ya.");
      setIsLoading(false);
      return;
    }
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    let response;
    let delay = 1000;
    for (let i = 0; i < 5; i++) {
      try {
        const fetchOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userQuery }] }],
            systemInstruction: {
              parts: [{ text: systemPrompt }]
            },
          })
        };
        response = await fetch(apiUrl, fetchOptions);
        if (response.ok) break;
        if (response.status === 429 || response.status >= 500) {
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2;
        } else {
          throw new Error(`API error! status: ${response.status}`);
        }
      } catch (err) {
        if (i === 4) {
          console.error("Error fetching Gemini API after retries:", err);
          setError("Aduh, maaf, Emak sedang pusing. Coba tanyakan lagi beberapa saat, ya.");
          setIsLoading(false);
          return;
        }
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }

    try {
      const result = await response.json();
      const candidate = result.candidates?.[0];
      if (candidate && candidate.content?.parts?.[0]?.text) {
        setJawaban(candidate.content.parts[0].text);
      } else {
        console.warn("API response OK but no content: ", result);
        setJawaban("Aduh, Nak. Emak bingung mau jawab apa. Coba tanya yang lain soal cucian, ya.");
      }
    } catch (err) {
      console.error("Error parsing API response:", err);
      setError("Aduh, Emak dapat balasan yang aneh. Coba lagi, ya.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16 pt-12 border-t border-gray-200">
      <div className="text-center max-w-3xl mx-auto">
        <Sparkles className="h-12 w-12 text-fuchsia-600 mx-auto" />
        <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Masih Bingung? <span className="text-fuchsia-600">Tanya Emak!</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Punya pertanyaan spesifik tentang noda, bahan, atau perawatan? Tanyakan langsung pada ahlinya.
        </p>
      </div>

      <div className="mt-12 max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <div className="flex flex-wrap gap-2 mb-4">
          {contoh.map((c) => (
            <button key={c} onClick={() => setPertanyaan(c)} className="text-xs sm:text-sm px-3 py-1 rounded-full bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200 hover:bg-fuchsia-100">
              {c}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          <label htmlFor="pertanyaan" className="block text-sm font-medium text-gray-700">
            Tulis pertanyaan Anda di sini (Contoh: "Bagaimana cara hilangkan noda luntur?"):
          </label>
          <textarea
            id="pertanyaan"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500"
            value={pertanyaan}
            onChange={(e) => setPertanyaan(e.target.value)}
            placeholder="Aduh, Mak, baju saya kena noda..."
          />
          <button
            onClick={handleTanyaEmak}
            disabled={isLoading || !import.meta.env?.VITE_GEMINI_API_KEY}
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 disabled:bg-gray-400"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Emak sedang berpikir...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Tanya Emak!
              </>
            )}
          </button>
        </div>
        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}
        {!import.meta.env?.VITE_GEMINI_API_KEY && !error && (
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-sm text-yellow-800">Fitur Tanya Emak membutuhkan konfigurasi API. Sementara ini nonaktif.</p>
          </div>
        )}
        {jawaban && (
          <div className="mt-6 p-6 bg-fuchsia-50 border border-fuchsia-200 rounded-lg">
            <h4 className="text-lg font-semibold text-fuchsia-800">Jawaban Emak:</h4>
            <p className="mt-2 text-gray-700 whitespace-pre-wrap">{jawaban}</p>
          </div>
        )}
      </div>
    </div>
  );
};


