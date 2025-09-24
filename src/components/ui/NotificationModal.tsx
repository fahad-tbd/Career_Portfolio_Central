'use client';

import React, { useEffect } from 'react';
import Modal from './Modal';
import Button from './Button';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: 'success' | 'info' | 'warning' | 'error';
  title?: string;
  message: string;
  autoClose?: boolean;
  autoCloseDelay?: number;
  showActionButton?: boolean;
  actionButtonText?: string;
  onActionClick?: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  type = 'info',
  title,
  message,
  autoClose = true,
  autoCloseDelay = 4000,
  showActionButton = false,
  actionButtonText = 'OK',
  onActionClick,
}) => {
  // Auto close functionality
  useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [isOpen, autoClose, autoCloseDelay, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      case 'warning':
        return (
          <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
        );
      case 'error':
        return (
          <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        );
      default: // info
        return (
          <div className="flex-shrink-0 w-10 h-10 bg-brand-teal bg-opacity-10 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
    }
  };

  const getTitle = () => {
    if (title) return title;
    
    switch (type) {
      case 'success':
        return 'Success!';
      case 'warning':
        return 'Attention';
      case 'error':
        return 'Error';
      default:
        return 'Information';
    }
  };

  const handleActionClick = () => {
    if (onActionClick) {
      onActionClick();
    }
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      closeOnOverlay={!showActionButton}
      showCloseButton={!autoClose}
    >
      <div className="flex items-start space-x-4">
        {getIcon()}
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-brand-gray-900 mb-2">
            {getTitle()}
          </h3>
          <p className="text-brand-gray-600 leading-relaxed">
            {message}
          </p>
          
          {showActionButton && (
            <div className="mt-6 flex justify-end">
              <Button
                variant="primary"
                size="sm"
                onClick={handleActionClick}
              >
                {actionButtonText}
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {autoClose && (
        <div className="mt-4">
          <div className="w-full bg-brand-gray-200 rounded-full h-1">
            <div 
              className="bg-brand-teal h-1 rounded-full transition-all duration-100 ease-linear"
              style={{
                animation: `shrink ${autoCloseDelay}ms linear forwards`
              }}
            />
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </Modal>
  );
};

export default NotificationModal;
