import React from 'react';
import FormLayout from '@/components/FormLayout';

const QuizPage: React.FC = () => {
  return (
    <section aria-labelledby="quiz-section" className="flex justify-center items-center p-4">
      <FormLayout />
    </section>
  );
};

export default React.memo(QuizPage);
