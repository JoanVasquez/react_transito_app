import React, { useCallback } from 'react';
import type { QuestionOption } from '@/models/quizModels';

interface RadioGroupProps {
  name: string;
  options: QuestionOption[];
  selectedValue?: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  selectedValue,
  onChange,
}) => {
  const handleChange = useCallback((value: string) => {
    onChange(value);
  }, [onChange]);

  return (
    <div className="flex flex-col space-y-3">
      {options.map(option => {
        const id = `${name}_${option.value}`;

        return (
          <label
            key={option.value}
            htmlFor={id}
            className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition"
          >
            <input
              id={id}
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => handleChange(option.value)}
              className="w-5 h-5 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              {option.label}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default React.memo(RadioGroup);
