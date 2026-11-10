import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FAQItem } from '../../types';
import { PlaceholderBadge } from '../common/PlaceholderBadge';

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'border-[#D62828]/40 bg-red-50/10 shadow-xs'
                : 'border-neutral-200 bg-white hover:border-neutral-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828]"
            >
              <div className="flex items-start gap-3.5 flex-1">
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                    isOpen
                      ? 'bg-[#D62828] text-white'
                      : 'bg-neutral-100 text-neutral-600'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    {item.category && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                    )}
                    {item.isPlaceholderNote && (
                      <PlaceholderBadge label="Pending Policy" />
                    )}
                  </div>
                  <h3
                    className={`text-base sm:text-lg font-bold font-heading transition-colors ${
                      isOpen ? 'text-[#D62828]' : 'text-[#171717]'
                    }`}
                  >
                    {item.question}
                  </h3>
                </div>
              </div>

              <div
                className={`p-1.5 rounded-full transition-transform duration-200 flex-shrink-0 ${
                  isOpen ? 'rotate-180 text-[#D62828] bg-red-50' : 'text-neutral-400'
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed font-body border-t border-neutral-100/60"
              >
                <p>{item.answer}</p>
                {item.isPlaceholderNote && (
                  <div className="mt-3 p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/60 text-xs text-amber-800 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>
                      Academy parameter: <code className="font-mono font-semibold">{item.isPlaceholderNote}</code>. Will be confirmed upon batch schedule release.
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
