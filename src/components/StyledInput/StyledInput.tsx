import React, { FC } from 'react';
import './StyledInput.scss'; // Assuming you have a SCSS file for styling

interface InputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  className?: string;
}

const StyledInput: FC<InputProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  error,
  className = '',
}) => {
  return (
    <div className={`input-container ${className}`}>
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input ${error ? 'input-error' : ''}`}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default StyledInput;
