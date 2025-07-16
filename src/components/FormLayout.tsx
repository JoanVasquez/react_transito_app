import React, { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { quizService } from "@/services/QuizService";
import { useQuiz } from "@/hooks/useQuiz";
import Question from "./Question";
import { useSnackbar } from "@/context/SnackbarContext";
import Button from "@/components/Button";
import TextInput from "@/components/inputs/TextInput";
import ProgressBar from "./ProgressBar";

const FormLayout: React.FC = () => {
  const { showMessage } = useSnackbar();
  const navigate = useNavigate();
  const questions = useMemo(() => quizService.getQuestions(), []);
  const totalQuestions = questions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userName, setUserName] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { answers, submitAnswer, generateResult, reset } = useQuiz();

  const currentQuestion = questions[currentIndex];
  const answerForCurrent = answers.find(
    (a) => a.questionId === currentQuestion.id
  )?.value;

  const validateCurrent = useCallback((): boolean => {
    const isCheckbox = currentQuestion.type === "checkbox";
    const empty = isCheckbox
      ? !(Array.isArray(answerForCurrent) && answerForCurrent.length > 0)
      : !answerForCurrent;

    if (empty) {
      setErrors({
        [currentQuestion.id]: isCheckbox
          ? "Debes seleccionar al menos una opción."
          : "Esta pregunta es obligatoria.",
      });
      showMessage("Por favor responde antes de continuar.", "warning");
      return false;
    }

    setErrors({});
    return true;
  }, [currentQuestion, answerForCurrent, showMessage]);

  const handleAnswer = useCallback(
    (value: string | string[]) => {
      submitAnswer({ questionId: currentQuestion.id, value });
    },
    [currentQuestion.id, submitAnswer]
  );

  const handleNext = useCallback(() => {
    if (!validateCurrent()) return;

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      generateResult();
      quizService.saveResult(userName, quizService.calculateResult(answers));
      navigate("/resultado");
    }
  }, [
    currentIndex,
    totalQuestions,
    validateCurrent,
    generateResult,
    userName,
    answers,
    navigate,
  ]);

  const handleBack = useCallback(() => {
    setErrors({});
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleReset = useCallback(() => {
    reset();
    setCurrentIndex(0);
    setErrors({});
    setUserName("");
    setHasStarted(false);
    showMessage("Cuestionario reiniciado.", "warning");
  }, [reset, showMessage]);

  const handleStart = useCallback(() => {
    if (!userName.trim()) {
      showMessage("Debes ingresar tu nombre antes de comenzar.", "warning");
      return;
    }
    showMessage(`¡Bienvenido, ${userName}!`, "success");
    setHasStarted(true);
  }, [userName, showMessage]);

  if (!hasStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-8 mt-20 text-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          🚦 Antes de comenzar
        </h2>
        <TextInput
          value={userName}
          placeholder="Ingresa tu nombre..."
          onChange={setUserName}
        />
        <Button
          variant="primary"
          onClick={handleStart}
          className="mt-3 hover:scale-105 transition-transform"
        >
          🚀 Comenzar cuestionario
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={currentQuestion.id}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8 mb-10"
    >
      <div className="mb-6">
        <ProgressBar
          progress={((currentIndex + 1) / totalQuestions) * 100}
          currentIndex={currentIndex}
          totalQuestions={totalQuestions}
        />
      </div>

      <Question
        question={currentQuestion}
        answer={answerForCurrent}
        onAnswer={handleAnswer}
        error={errors[currentQuestion.id]}
      />

      <div className="flex justify-between mt-8">
        <Button
          onClick={handleBack}
          variant="secondary"
          disabled={currentIndex === 0}
          className="hover:scale-105 transition-transform"
        >
          ◀ Atrás
        </Button>

        <Button
          onClick={handleNext}
          variant="primary"
          className="hover:scale-105 transition-transform"
        >
          {currentIndex === totalQuestions - 1 ? "Finalizar ▶" : "Siguiente ▶"}
        </Button>
      </div>
    </motion.div>
  );
};

export default React.memo(FormLayout);
