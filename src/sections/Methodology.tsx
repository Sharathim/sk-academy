import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { METHODOLOGY_DATA } from '../data/methodology';
import { Check } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Instructional Process"
          title="Learning That Goes"
          highlight="Beyond Textbooks"
          description="A proposed four-step pedagogy engineered to take students from early conceptual comprehension to rigorous exam execution."
        />

        {/* Desktop 4-Step Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-0.5 bg-neutral-200 z-0">
            <div className="h-full bg-gradient-to-r from-[#D62828] via-[#A4161A] to-[#D62828] w-full opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {METHODOLOGY_DATA.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl border border-neutral-200/90 hover:border-[#D62828]/40 shadow-xs hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-2xl bg-neutral-900 text-white font-heading font-extrabold text-lg flex items-center justify-center shadow-xs group-hover:bg-[#D62828] transition-colors">
                      {step.stepNumber}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Step {idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold font-heading text-[#171717] group-hover:text-[#D62828] transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#D62828] mt-0.5 mb-3 font-heading">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed font-body mb-5">
                    {step.description}
                  </p>

                  {/* Action Points */}
                  <div className="pt-3 border-t border-neutral-100 space-y-2">
                    {step.actionPoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-[#D62828] mt-0.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 text-[10px] font-mono text-neutral-400">
                  Customizable Methodology
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pedagogical Principle */}
        <div className="mt-14 max-w-3xl mx-auto text-center p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
          <p className="text-sm text-neutral-700 font-medium font-body leading-relaxed">
            "Our pedagogy is centered on ensuring no student is left behind. When core fundamentals are mastered step-by-step, complex problems become approachable."
          </p>
        </div>
      </div>
    </section>
  );
};

