import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <h2>
        <button
          type="button"
          className="flex justify-between items-center w-full py-6 text-left text-lg font-medium text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span>{question}</span>
          <ChevronDown
            className={`h-6 w-6 text-fuchsia-600 transition-transform ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </button>
      </h2>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-6 pr-12">
          <p className="text-base text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};


