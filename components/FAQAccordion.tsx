'use client'

import { useState } from 'react'
import { FAQ } from '@/types'

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => {
        const isOpen = openItem === faq.id;
        const question = faq.metadata?.question || faq.title;
        const answer = faq.metadata?.answer;

        return (
          <div key={faq.id} className="border border-neutral-200 rounded-lg">
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
            >
              <span className="font-medium text-neutral-900 pr-4">
                {question}
              </span>
              <svg
                className={`w-5 h-5 text-neutral-500 transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && answer && (
              <div className="px-6 pb-4">
                <div 
                  className="text-neutral-700 prose-content"
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  )
}