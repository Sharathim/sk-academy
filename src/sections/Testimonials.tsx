import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { TestimonialCard } from '../components/cards/TestimonialCard';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { MessageSquareQuote } from 'lucide-react';
import { Button } from '../components/common/Button';

export const Testimonials: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Community Voices"
          title="What Our Students &"
          highlight="Parents Say"
          description="Reflections and perspectives from the families who entrust their academic growth to our faculty."
        />

        {/* Authentic Feedback Policy Banner */}
        <div className="max-w-3xl mx-auto bg-neutral-50 rounded-3xl border border-neutral-200 p-8 sm:p-10 text-center">
          <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-600 mx-auto mb-4">
            <MessageSquareQuote className="w-7 h-7 text-[#D62828]" />
          </div>

          <h3 className="text-xl font-bold font-heading text-[#171717] mb-2">
            Verified Community Feedback Policy
          </h3>

          <p className="text-sm text-neutral-600 leading-relaxed font-body max-w-lg mx-auto mb-6">
            To preserve institutional trust, SK Academic and Excellence never posts simulated ratings or fabricated student reviews. Authentic parent and student reviews will be published here upon official collection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowPreview(!showPreview)}
            >
              {showPreview ? 'Hide Review Templates' : 'Preview Testimonial Format'}
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="#admissions"
            >
              Share Your Feedback / Enquire
            </Button>
          </div>
        </div>

        {/* Preview Cards */}
        {showPreview && (
          <div className="mt-12 animate-in fade-in duration-300">
            <div className="text-xs font-mono text-center text-neutral-500 mb-6">
              Testimonial Templates (Populate via src/data/testimonials.ts once collected):
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS_DATA.map((item) => (
                <TestimonialCard key={item.id} testimonial={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
