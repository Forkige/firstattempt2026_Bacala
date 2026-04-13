// Reusable Card component
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export default function Card({
  children,
  className = '',
  onClick,
  hoverable = false
}: CardProps) {
  const hoverClass = hoverable ? 'hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer' : '';
  
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 ${hoverClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
