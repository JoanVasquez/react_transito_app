import type { Question, Answer, QuizResult, QuizResultLevel } from '@/models/quizModels';

const messages: Record<QuizResultLevel, string[]> = {
  excelente: [
    "¡Excelente! Eres un verdadero ejemplo de responsabilidad y respeto en las vías. Continúa aplicando estos conocimientos y contribuyendo a una movilidad más segura en tu comunidad.",
    "¡Perfecto! Demuestras una gran conciencia vial y un compromiso con las normas de tránsito. Tu actitud es fundamental para prevenir accidentes y promover una cultura vial positiva.",
    "¡Muy bien! Has alcanzado un nivel sobresaliente en conocimientos de tránsito. Mantén esta actitud y no dejes de actualizarte en temas de seguridad vial."
  ],
  bueno: [
    "Buen trabajo. Tu desempeño es bueno, pero todavía hay algunos aspectos en los que podrías mejorar. Te animamos a seguir aprendiendo y reforzando tu conocimiento de las normas viales.",
    "Tu conciencia vial es aceptable y muestra una buena base. Sin embargo, prestar atención a los detalles y mantenerte actualizado hará que seas un conductor o peatón aún más responsable.",
    "Vas por buen camino. Aun así, es importante que repases ciertas normas y recomendaciones. La educación vial continua es clave para mejorar tu seguridad y la de los demás."
  ],
  advertencia: [
    "¡Atención! Tu nivel de conocimiento sobre normas viales es bajo y eso puede representar un riesgo. Te recomendamos tomar medidas inmediatas para aprender y aplicar las reglas de tránsito.",
    "Cuidado. Has obtenido un resultado preocupante. Es fundamental que refuerces tus conocimientos y mejores tus hábitos en la vía para proteger tu vida y la de los demás.",
    "Tu evaluación indica deficiencias importantes en seguridad vial. Considera formarte con material educativo o cursos especializados. Cada mejora que hagas puede prevenir un accidente."
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
