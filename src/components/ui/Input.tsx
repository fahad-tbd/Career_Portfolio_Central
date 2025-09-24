import React from 'react';
import { cn } from '@/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  fullWidth = false,
  startIcon,
  endIcon,
  className,
  id,
  ...props
}) => {
  const autoId = React.useId();
  const inputId = id || `input-${autoId}`;
  
  return (
    <div className={cn('flex flex-col space-y-2', fullWidth && 'w-full')}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-brand-gray-700"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        {startIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="text-brand-gray-500">{startIcon}</div>
          </div>
        )}
        
        <input
          id={inputId}
          className={cn(
            'block w-full px-3 py-2 border border-brand-gray-300 rounded-lg shadow-sm placeholder-brand-gray-400',
            'focus:ring-2 focus:ring-blue-500 focus:border-brand-navy',
            'transition-colors duration-200',
            'disabled:bg-brand-gray-100 disabled:cursor-not-allowed',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            startIcon && 'pl-10',
            endIcon && 'pr-10',
            className
          )}
          {...props}
        />
        
        {endIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <div className="text-brand-gray-500">{endIcon}</div>
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="text-sm text-brand-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
