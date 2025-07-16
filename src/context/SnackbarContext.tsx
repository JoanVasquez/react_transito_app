import React, { createContext, useContext, useState } from 'react';
import Button from '@/components/Button';
import CloseIcon from '@/components/icons/CloseIcon';

type SnackbarType = 'success' | 'warning' | 'error' | 'info';

interface SnackbarContextProps {
  showMessage: (message: string, type?: SnackbarType) => void;
}

const SnackbarContext = createContext<SnackbarContextProps | undefined>(undefined);

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<string>('');
  const [type, setType] = useState<SnackbarType>('info');
  const [visible, setVisible] = useState<boolean>(false);

  const showMessage = (msg: string, msgType: SnackbarType = 'info') => {
    setMessage(msg);
    setType(msgType);
    setVisible(true);
    setTimeout(() => setVisible(false), 3500);
  };

  const closeSnackbar = () => setVisible(false);

  const getColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-800 border border-green-300';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-300';
      case 'error':
        return 'bg-red-100 text-red-800 border border-red-300';
      case 'info':
      default:
        return 'bg-blue-100 text-blue-800 border border-blue-300';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      case 'error':
        return '❌';
      case 'info':
      default:
        return 'ℹ️';
    }
  };

  return (
    <SnackbarContext.Provider value={{ showMessage }}>
      {children}

      {visible && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-md">
          <div
            className={`${getColor()} px-4 py-3 rounded-xl shadow-lg flex items-center space-x-3 transition-all duration-300 animate-fade-in`}
          >
            <span className="text-lg">{getIcon()}</span>
            <span className="font-medium flex-1">{message}</span>
            <Button
              onClick={closeSnackbar}
              variant="icon"
              aria-label="Cerrar notificación"
            >
              <CloseIcon />
            </Button>
          </div>
        </div>
      )}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = (): SnackbarContextProps => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar debe usarse dentro de SnackbarProvider');
  }
  return context;
};
