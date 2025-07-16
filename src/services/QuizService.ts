import quiz_questions from '../utils/quiz_questions';
import type { Question, Answer, QuizResult } from '@/models/quizModels';
import { calculateResult } from '@/utils/calculate_result';

class QuizService {
  private questions: Question[];

  constructor() {
    this.questions = quiz_questions as Question[];
  }

  public getQuestions(): Question[] {
    return this.questions;
  }

  public calculateResult(answers: Answer[]): QuizResult {
    return calculateResult(this.questions, answers);
  }

  public saveResult(userName: string, result: QuizResult): void {
    localStorage.removeItem(`quiz_${userName}`);
    localStorage.removeItem('userName');
    localStorage.setItem(`quiz_${userName}`, JSON.stringify(result));
    localStorage.setItem('userName', userName);
  }

  public loadResult(userName: string): QuizResult | null {
    const data = localStorage.getItem(`quiz_${userName}`);
    console.log(data)
    return data ? (JSON.parse(data) as QuizResult) : null;
  }

  public loadLastUserName(): string | null {
    return localStorage.getItem('userName');
  }
}

export const quizService = new QuizService();
