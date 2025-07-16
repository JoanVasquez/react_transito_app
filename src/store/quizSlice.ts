import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Answer, QuizResult } from '@/models/quizModels';
import { quizService } from '@/services/QuizService';

interface QuizState {
  answers: Answer[];
  result: QuizResult | null;
}

const initialState: QuizState = {
  answers: [],
  result: null,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    answerQuestion(state, action: PayloadAction<Answer>) {
      const existing = state.answers.find(
        a => a.questionId === action.payload.questionId
      );
      if (existing) {
        existing.value = action.payload.value;
      } else {
        state.answers.push(action.payload);
      }
    },

    calculateResult(state) {
      const result = quizService.calculateResult(state.answers);
      state.result = result;
    },

    resetQuiz(state) {
      state.answers = [];
      state.result = null;
    },

    loadResultFromLocalStorage(state, action: PayloadAction<string>) {
      const savedResult = quizService.loadResult(action.payload);
      if (savedResult) {
        state.result = savedResult;
      }
    },
  },
});

export const {
  answerQuestion,
  calculateResult,
  resetQuiz,
  loadResultFromLocalStorage,
} = quizSlice.actions;

export default quizSlice.reducer;
