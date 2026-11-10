import React from 'react';
import { Info } from 'lucide-react';

interface PlaceholderBadgeProps {
  label: string;
  tooltip?: string;
  className?: string;
}

export const PlaceholderBadge: React.FC<PlaceholderBadgeProps> = ({
  label,
  tooltip = 'Configurable placeholder — update in src/data/academyConfig.ts',
  className = '',
}) => {
  return (
    <span
      title={tooltip}
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-amber-50 text-amber-800 border border-amber-200/80 select-all cursor-help ${className}`}
    >
      <Info className="w-3 h-3 text-amber-600 flex-shrink-0" />
      <span>{label}</span>
    </span>
  );
};

