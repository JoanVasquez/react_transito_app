import React, { useCallback } from 'react';
import type { QuestionOption } from '@/models/quizModels';

interface SelectInputProps {
  value?: string;
  options: QuestionOption[];
  onChange: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  value,
  options,
  onChange,
}) => {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  }, [onChange]);

  return (
    <div className="w-full">
      <select
        value={value}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        <option value="">Seleccione una opción...</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(SelectInput);
