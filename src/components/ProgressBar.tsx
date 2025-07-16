import React, { memo } from 'react';

interface ProgressBarProps {
  progress: number;
  currentIndex: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  currentIndex,
  totalQuestions,
}) => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="h-3 md:h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-3 md:h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs md:text-sm text-gray-600 mt-2 font-medium text-center">
        Pregunta {currentIndex + 1} de {totalQuestions}
      </p>
    </div>
  );
};

export default memo(ProgressBar);
