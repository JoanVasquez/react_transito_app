export type QuestionOption = {
  value: string;
  label: string;
};

export type QuestionType = 'radio' | 'select' | 'checkbox' | 'text';

export type Question = {
  id: string;
  text: string;
  type: QuestionType;
  options: QuestionOption[];
  weight: number;
  correctAnswers: string[];  // ✅ respuestas correctas
};


export type Answer = {
  questionId: string;
  value: string | string[];  // Soporta respuestas múltiples (checkbox)
};

export type QuizResultLevel = 'excelente' | 'bueno' | 'advertencia';

export type QuizResult = {
  score: number;
  message: string;
  level: QuizResultLevel;
};
