import React, { memo } from 'react';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <p
      role="alert"
      aria-live="polite"
      className="text-red-600 text-sm mt-2 break-words"
    >
      {message}
    </p>
  );
};

export default memo(ErrorMessage);
