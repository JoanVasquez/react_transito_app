import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import QuizPage from '@/pages/QuizPage';
import ResultPage from '@/pages/ResultPage';
import AboutPage from '@/pages/AboutPage';

const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/quiz" />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/resultado" element={<ResultPage />} />
          <Route path="/acerca-de" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/quiz" />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
