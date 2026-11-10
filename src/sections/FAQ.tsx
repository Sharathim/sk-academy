import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { FAQAccordion } from '../components/interactive/FAQAccordion';
import { FAQ_DATA } from '../data/faq';
import { Button } from '../components/common/Button';

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F8F8F8] border-y border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Admissions & Curriculum FAQ"
          title="Frequently Asked"
          highlight="Questions"
          description="Find answers to common questions about our academic programmes, coaching approach, and enrolment procedures."
        />

        {/* Accessible Accordion Component */}
        <FAQAccordion items={FAQ_DATA} />

        {/* Bottom CTA for Unanswered Questions */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-neutral-200 shadow-2xs text-center">
          <h4 className="font-heading font-bold text-base text-[#171717] mb-1">
            Have a question that isn't answered here?
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 mb-4 font-body">
            Our administration is ready to provide detailed answers regarding batch availability and curriculum offerings.
          </p>
          <Button
            variant="primary"
            size="sm"
            href="#admissions"
          >
            Ask a Specific Question
          </Button>
        </div>
      </div>
    </section>
  );
};
