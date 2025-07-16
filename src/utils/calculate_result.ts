import type { Question, Answer, QuizResult, QuizResultLevel } from '@/models/quizModels';

const messages: Record<QuizResultLevel, string[]> = {
  excelente: [
    "¡Excelente! Eres un ejemplo en las vías, sigue así.",
    "¡Perfecto! Demuestras una gran conciencia y responsabilidad vial.",
    "¡Muy bien! Mantén esa actitud positiva al conducir."
  ],
  bueno: [
    "Bien hecho, pero aún puedes mejorar en algunos aspectos.",
    "Tu conciencia vial es aceptable, sigue informándote y mejorando.",
    "Buen trabajo, aunque todavía hay detalles que deberías reforzar."
  ],
  advertencia: [
    "Cuidado, necesitas mejorar tus hábitos en las vías.",
    "Es importante que refuerces tus conocimientos sobre normas de tránsito.",
    "Tu nivel es preocupante, busca asesoría y capacítate cuanto antes."
  ],
};

function getRandomMessage(level: QuizResultLevel): string {
  const options = messages[level];
  return options[Math.floor(Math.random() * options.length)];
}

export function calculateResult(questions: Question[], answers: Answer[]): QuizResult {
  let totalWeight = 0;
  let score = 0;

  for (const question of questions) {
    const answer = answers.find(a => a.questionId === question.id);

    totalWeight += question.weight;

    if (answer) {
      const value = answer.value;

      if (typeof value === 'string') {
        if (question.correctAnswers.includes(value)) {
          score += question.weight;
        }
      } else if (Array.isArray(value)) {
        if (value.some(v => question.correctAnswers.includes(v))) {
          score += question.weight;
        }
      }
    }
  }

  const finalScore = (score / totalWeight) * 100;

  const level: QuizResultLevel =
    finalScore >= 80 ? 'excelente' :
    finalScore >= 50 ? 'bueno' : 'advertencia';

  const message = getRandomMessage(level);

  return { score: finalScore, message, level };
}
