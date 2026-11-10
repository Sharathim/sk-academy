import React from 'react';
import { Quote, User, ShieldCheck } from 'lucide-react';
import type { TestimonialItem } from '../../types';
import { PlaceholderBadge } from '../common/PlaceholderBadge';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative">
      <Quote className="w-8 h-8 text-neutral-200 absolute top-5 right-5" />

      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-400 flex-shrink-0">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-sm text-[#171717]">
              {testimonial.authorName}
            </h3>
            <span className="text-xs text-neutral-500 font-medium">
              {testimonial.role}
            </span>
          </div>
        </div>

        <p className="text-sm text-neutral-600 leading-relaxed font-body italic mb-4">
          "{testimonial.feedback}"
        </p>
      </div>

      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
        {testimonial.isVerified ? (
          <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Review
          </span>
        ) : (
          <PlaceholderBadge label="Template Placeholder" />
        )}
      </div>
    </div>
  );
};
