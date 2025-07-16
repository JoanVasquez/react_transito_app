import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import QuizPage from '@/pages/QuizPage';
import ResultPage from '@/pages/ResultPage';
import AboutPage from '@/pages/AboutPage';

const App: React.FC = () => {
  return (
    <Router basename="/react_transito_app/">
      <AppLayout>
        <Routes>
          <Route path="/" element={<QuizPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/resultado" element={<ResultPage />} />
          <Route path="/acerca-de" element={<AboutPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
