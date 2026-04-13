// Reusable Progress Bar component
import React from 'react';

interface ProgressBarProps {
  current: number;
  goal: number;
  label?: string;
  showPercentage?: boolean;
}

export default function ProgressBar({
  current,
  goal,
  label,
  showPercentage = true
}: ProgressBarProps) {
  const percentage = Math.min((current / goal) * 100, 100);

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          {showPercentage && <span className="text-sm font-semibold text-blue-600">{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {!label && showPercentage && (
        <p className="text-xs text-gray-600 mt-1">
          ₱{current.toLocaleString()} of ₱{goal.toLocaleString()} goal
        </p>
      )}
    </div>
  );
}
