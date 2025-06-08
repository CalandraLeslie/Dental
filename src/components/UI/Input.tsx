import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({ type = 'text', placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border rounded p-2 ${className}`}
      style={{
        borderColor: 'rgb(41, 128, 185)',
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(44, 62, 80)',
      }}
    />
  );
};

export default Input;