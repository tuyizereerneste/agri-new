import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'font-poppins font-600 rounded-lg transition-all duration-300 hover:shadow-medium hover:-translate-y-1';

  const variants = {
    primary: 'bg-agri-cta text-white hover:bg-green-800',
    secondary: 'bg-agri-primary text-white hover:bg-green-700',
    outline: 'border-2 border-agri-primary text-agri-primary hover:bg-agri-accent hover:bg-opacity-20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
