import React, { memo } from 'react';
import { useTheme } from '@/context/ThemeContext';

const ThemeSelector: React.FC = () => {
  const { backgroundColor, setBackgroundColor } = useTheme();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-md mx-auto sm:mx-0 w-full sm:w-[55%] lg:w-[25%]">
      <label
        htmlFor="theme-color-picker"
        className="font-medium text-gray-700 text-sm sm:text-base w-full sm:w-auto text-center sm:text-left"
      >
        Color de fondo:
      </label>
      <input
        id="theme-color-picker"
        type="color"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
        className="w-14 h-14 sm:w-10 sm:h-10 border rounded-lg cursor-pointer transition"
        title="Selecciona un color"
      />
    </div>
  );
};

export default memo(ThemeSelector);
