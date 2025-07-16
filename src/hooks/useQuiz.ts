import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  answerQuestion,
  calculateResult,
  resetQuiz,
  loadResultFromLocalStorage,
} from '@/store/quizSlice';
import type { Answer } from '@/models/quizModels';

export const useQuiz = () => {
  const dispatch = useAppDispatch();
  const { answers, result } = useAppSelector(state => state.quiz);

  const submitAnswer = (answer: Answer) => {
    dispatch(answerQuestion(answer));
  };

  const generateResult = () => {
    dispatch(calculateResult());
  };

  const reset = () => {
    dispatch(resetQuiz());
  };

  const loadResult  = (userName: string) => {
    dispatch(loadResultFromLocalStorage(userName));
  };

  return {
    answers,
    result,
    submitAnswer,
    generateResult,
    reset,
    loadResult ,
  };
};
