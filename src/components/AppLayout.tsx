import React, { memo } from 'react';
import ThemeSelector from './ThemeSelector';
import Menu from './Menu';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Top Navigation */}
      <header className="flex justify-between items-center px-4 py-3 bg-white shadow-md">
        <Menu />
        <ThemeSelector />
      </header>

      {/* Page Content */}
      <main className="flex-1 p-4 w-full max-w-7xl mx-auto">
        {children}
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 py-4">
        © {year} Proyecto educativo — UAPA
      </footer>
      
    </div>
  );
};

export default memo(AppLayout);
