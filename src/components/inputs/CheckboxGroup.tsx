import React, { useCallback } from 'react';
import type { QuestionOption } from '@/models/quizModels';

interface CheckboxGroupProps {
  name: string;
  options: QuestionOption[];
  selectedValues: string[];
  onChange: (selected: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  options,
  selectedValues,
  onChange,
}) => {
  const toggleValue = useCallback((value: string) => {
    const updated = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];

    onChange(updated);
  }, [selectedValues, onChange]);

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
              type="checkbox"
              name={name}
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={() => toggleValue(option.value)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
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

export default React.memo(CheckboxGroup);
