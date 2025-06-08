import React from 'react';
import { Link } from 'react-router-dom';

// Export this interface
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick
}) => {
  const buttonClass = `button button--${variant} button--${size}`;
  
  // If href is provided, render a Link from react-router-dom
  if (href) {
    return (
      <Link 
        to={href} 
        className={buttonClass}
      >
        {children}
      </Link>
    );
  }
  
  // Otherwise render a regular button
  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;