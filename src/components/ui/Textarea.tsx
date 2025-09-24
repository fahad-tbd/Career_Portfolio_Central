import React from 'react';
import { cn } from '@/utils/cn';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  fullWidth = false,
  className,
  id,
  ...props
}) => {
  const autoId = React.useId();
  const textareaId = id || `textarea-${autoId}`;
  
  return (
    <div className={cn('flex flex-col space-y-2', fullWidth && 'w-full')}>
      {label && (
        <label
          htmlFor={textareaId}
          className="text-sm font-medium text-brand-gray-700"
        >
          {label}
        </label>
      )}
      
      <textarea
        id={textareaId}
        className={cn(
          'block w-full px-3 py-2 border border-brand-gray-300 rounded-lg shadow-sm placeholder-brand-gray-400',
          'focus:ring-2 focus:ring-blue-500 focus:border-brand-navy',
          'transition-colors duration-200 resize-vertical',
          'disabled:bg-brand-gray-100 disabled:cursor-not-allowed',
          error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
          className
        )}
        rows={4}
        {...props}
      />
      
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="text-sm text-brand-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Textarea;
