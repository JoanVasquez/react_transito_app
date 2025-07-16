import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface ThemeContextProps {
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [backgroundColor, setBackgroundColorState] = useState<string>('#ffffff');

  useEffect(() => {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
      setBackgroundColorState(savedColor);
    }
  }, []);

  const setBackgroundColor = useCallback((color: string) => {
    setBackgroundColorState(color);
    localStorage.setItem('backgroundColor', color);
  }, []);

  return (
    <ThemeContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      <div
        style={{
          backgroundColor,
          minHeight: '100vh',
          transition: 'background-color 0.3s ease',
        }}
        className="flex flex-col min-h-screen"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
};
