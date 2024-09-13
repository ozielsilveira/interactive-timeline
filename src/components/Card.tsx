import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div
    className={`bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl ${className}`}
  >
    {children}
  </div>
);

export default Card;
