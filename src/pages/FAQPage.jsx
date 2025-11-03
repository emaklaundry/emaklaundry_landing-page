import React from 'react';
import { HelpCircle } from 'lucide-react';
import { AccordionItem } from '../components/AccordionItem.jsx';
import { TanyaEmak } from '../components/TanyaEmak.jsx';

export const FAQPage = ({ data }) => {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <HelpCircle className="h-12 w-12 text-fuchsia-600 mx-auto" />
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-gray-900">Tanya Jawab <span className="text-fuchsia-600">(FAQ)</span></h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-600">Pertanyaan yang paling sering diajukan untuk {data.nama}.</p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="divide-y divide-gray-200">
            {(data.faqData || []).map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
        <TanyaEmak />
      </div>
    </div>
  );
};


