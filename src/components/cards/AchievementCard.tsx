import React from 'react';
import { Trophy, Calendar, User } from 'lucide-react';
import type { AchievementItem } from '../../types';
import { PlaceholderBadge } from '../common/PlaceholderBadge';

interface AchievementCardProps {
  achievement: AchievementItem;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 flex-shrink-0">
            <Trophy className="w-5 h-5" />
          </div>
          {achievement.isPlaceholder && (
            <PlaceholderBadge label="Template Card" />
          )}
        </div>

        <h3 className="font-heading font-bold text-base text-[#171717] mb-1">
          {achievement.achievementTitle}
        </h3>

        <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
          <span className="flex items-center gap-1 font-medium text-neutral-700">
            <User className="w-3.5 h-3.5 text-[#D62828]" />
            {achievement.studentName}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 font-mono text-[11px]">
            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
            {achievement.academicYear}
          </span>
        </div>

        <p className="text-xs text-neutral-600 leading-relaxed font-body">
          {achievement.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-neutral-100 text-[10px] text-neutral-400 font-mono">
        Verification pending official publication
      </div>
    </div>
  );
};
