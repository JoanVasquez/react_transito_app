import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ResultCard from '@/components/ResultCard';
import { useQuiz } from '@/hooks/useQuiz';

const ResultPage: React.FC = () => {
  const { result, reset, loadResult } = useQuiz();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lastUserName = localStorage.getItem('userName');
    if (!result && lastUserName) {
      loadResult(lastUserName);
    }
    setLoading(false);
  }, [result, loadResult]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-20 font-medium text-gray-600"
        role="status"
        aria-live="polite"
      >
        ⏳ Cargando tu resultado...
      </motion.div>
    );
  }

  if (!result) {
    return <Navigate to="/quiz" replace />;
  }

  return (
    <motion.section
      aria-labelledby="result-section"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="p-4"
    >
      <ResultCard result={result} onReset={reset} />
    </motion.section>
  );
};

export default React.memo(ResultPage);
