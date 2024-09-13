import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'secondary';
  icon?: React.ReactNode;
  className?: string; // Adicione esta linha
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', icon }) => {
    const baseClasses = 'px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center';
    const variantClasses = {
      primary: 'bg-pink-600 text-white hover:bg-pink-700 focus:ring-pink-500',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-pink-500',
      secondary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;

