import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { FeatureCard } from '../components/cards/FeatureCard';
import { WHY_CHOOSE_US_DATA } from '../data/whyChooseUs';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-[#F8F8F8] border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Educational Distinctives"
          title="Why Choose"
          highlight="SK Academic and Excellence?"
          description="A structured framework dedicated to conceptual understanding, individualized mentoring, and student confidence."
        />

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {/* Educational Framework Note */}
        <div className="mt-12 text-center text-xs text-neutral-500 font-mono">
          Proposed Educational Pillars • Finalized upon complete academy operations rollout
        </div>
      </div>
    </section>
  );
};

