import React, { memo } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'icon';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'focus:outline-none transition-all font-medium inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed';

  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg',
    secondary: 'bg-gray-300 text-gray-700 hover:bg-gray-400 px-4 py-2 rounded-lg',
    danger: 'bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg',
    outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg',
    icon: 'text-gray-500 hover:text-black p-2 rounded-full',
  };

  const styles = variants[variant];

  return (
    <button className={`${baseStyles} ${styles} ${className}`} {...props}>
      {icon && iconPosition === 'left' && (
        <span className="mr-2 flex items-center">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2 flex items-center">{icon}</span>
      )}
    </button>
  );
};

export default memo(Button);
