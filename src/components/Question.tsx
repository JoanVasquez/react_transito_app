import { motion } from 'framer-motion';
import React, { memo } from 'react';
import type { Question } from '@/models/quizModels';

import RadioGroup from './inputs/RadioGroup';
import SelectInput from './inputs/SelectInput';
import CheckboxGroup from './inputs/CheckboxGroup';
import TextInput from './inputs/TextInput';
import ErrorMessage from './ErrorMessage';

interface QuestionProps {
  question: Question;
  answer: string | string[] | undefined;
  onAnswer: (value: string | string[]) => void;
  error?: string;
}

const Question: React.FC<QuestionProps> = ({
  question,
  answer,
  onAnswer,
  error,
}) => {
  const renderInput = () => {
    switch (question.type) {
      case 'radio':
        return (
          <RadioGroup
            name={question.id}
            options={question.options}
            selectedValue={answer as string}
            onChange={onAnswer}
          />
        );
      case 'select':
        return (
          <SelectInput
            value={answer as string}
            options={question.options}
            onChange={onAnswer}
          />
        );
      case 'checkbox':
        return (
          <CheckboxGroup
            name={question.id}
            options={question.options}
            selectedValues={(answer as string[]) || []}
            onChange={onAnswer}
          />
        );
      case 'text':
        return (
          <TextInput
            value={(answer as string) || ''}
            placeholder="Escribe tu respuesta..."
            onChange={onAnswer}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4 }}
      className="mb-8 px-2 sm:px-4"
    >
      <p className="font-semibold text-lg sm:text-xl mb-4 text-gray-800 text-center sm:text-left">
        {question.text}
      </p>

      {renderInput()}
      <ErrorMessage message={error} />
    </motion.div>
  );
};

export default memo(Question);
