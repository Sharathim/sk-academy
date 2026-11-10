import React from 'react';
import {
  Lightbulb,
  Users,
  UserCheck,
  FileCheck,
  HelpCircle,
  GraduationCap,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import type { FeatureItem } from '../../types';

interface FeatureCardProps {
  feature: FeatureItem;
}

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-5 h-5 text-[#D62828]" />,
  Users: <Users className="w-5 h-5 text-[#D62828]" />,
  UserCheck: <UserCheck className="w-5 h-5 text-[#D62828]" />,
  FileCheck: <FileCheck className="w-5 h-5 text-[#D62828]" />,
  HelpCircle: <HelpCircle className="w-5 h-5 text-[#D62828]" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-[#D62828]" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-[#D62828]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#D62828]" />,
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="group bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200/90 hover:border-[#D62828]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Icon & Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#D62828] group-hover:text-white transition-all">
            <span className="group-hover:text-white transition-colors">
              {iconMap[feature.iconName] || <Sparkles className="w-5 h-5 text-[#D62828]" />}
            </span>
          </div>
          <span className="text-[10px] font-mono text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded">
            Proposed Feature
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold font-heading text-[#171717] group-hover:text-[#D62828] transition-colors mb-2">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-600 leading-relaxed font-body">
          {feature.description}
        </p>
      </div>

      {/* Editable Tag */}
      <div className="mt-4 pt-3 border-t border-neutral-100 text-[11px] font-mono text-neutral-400">
        Tag: <span className="text-neutral-500">{feature.placeholderTag}</span>
      </div>
    </div>
  );
};
