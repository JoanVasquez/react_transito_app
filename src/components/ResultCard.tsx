import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import type { QuizResult } from '@/models/quizModels';
import Button from './Button';

interface ResultCardProps {
  result: QuizResult;
  onReset: () => void;
}

const COLORS = ['#4CAF50', '#F44336'];

const ResultCard: React.FC<ResultCardProps> = ({ result, onReset }) => {
  const colorClass = useMemo(() => {
    switch (result.level) {
      case 'excelente':
        return 'bg-green-100 text-green-800 border border-green-300';
      case 'bueno':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-300';
      case 'advertencia':
      default:
        return 'bg-red-100 text-red-800 border border-red-300';
    }
  }, [result.level]);

  const resultIcon = useMemo(() => {
    switch (result.level) {
      case 'excelente':
      case 'bueno':
        return '🎉';
      case 'advertencia':
      default:
        return '⚠️';
    }
  }, [result.level]);

  const chartData = useMemo(() => [
    { name: 'Correctas', value: result.score },
    { name: 'Incorrectas', value: 100 - result.score },
  ], [result.score]);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-10 text-center"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 tracking-wide">
        {resultIcon} Resultado Final
      </h2>

      <div className={`p-4 sm:p-6 rounded-xl mb-6 font-semibold text-base sm:text-lg ${colorClass}`}>
        {result.message}
      </div>

      {/* Gráfico de resultado */}
      <div className="flex justify-center items-center mb-6">
        <div className="w-full max-w-xs">
          <PieChart width={250} height={250}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>

      <p className="text-lg sm:text-xl font-medium mb-6 text-gray-700">
        Tu puntuación fue:
        <span className="font-bold text-black"> {result.score.toFixed(2)}%</span>
      </p>

      <Button
        onClick={onReset}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-5 py-3 rounded-xl font-semibold shadow-lg transition hover:scale-105 w-full sm:w-auto"
      >
        🔄 Reiniciar cuestionario
      </Button>
    </motion.div>
  );
};

export default React.memo(ResultCard);
