import React, { memo, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu: React.FC = () => {
  const { pathname } = useLocation();

  const menuItems = useMemo(() => [
    { label: 'Cuestionario', to: '/quiz', icon: '📝' },
    { label: 'Resultado', to: '/resultado', icon: '📊' },
    { label: 'Acerca de', to: '/acerca-de', icon: 'ℹ️' },
  ], []);

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 w-full px-4">
      {menuItems.map(({ to, label, icon }) => {
        const isActive = pathname === to;
        return (
          <Link
            key={to}
            to={to}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition w-full sm:w-auto ${
              isActive
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow'
                : 'text-gray-600 hover:bg-gray-100 hover:text-black'
            }`}
          >
            <span className="text-base">{icon}</span>
            <span className="whitespace-nowrap">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default memo(Menu);
