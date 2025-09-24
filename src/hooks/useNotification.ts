'use client';

import { useState, useCallback } from 'react';

interface NotificationConfig {
  type?: 'success' | 'info' | 'warning' | 'error';
  title?: string;
  message: string;
  autoClose?: boolean;
  autoCloseDelay?: number;
  showActionButton?: boolean;
  actionButtonText?: string;
  onActionClick?: () => void;
}

interface NotificationState {
  isOpen: boolean;
  config: NotificationConfig | null;
}

export const useNotification = () => {
  const [notification, setNotification] = useState<NotificationState>({
    isOpen: false,
    config: null,
  });

  const showNotification = useCallback((config: NotificationConfig) => {
    setNotification({
      isOpen: true,
      config,
    });
  }, []);

  const hideNotification = useCallback(() => {
    setNotification({
      isOpen: false,
      config: null,
    });
  }, []);

  // Predefined notification methods for common use cases
  const showSuccess = useCallback((message: string, title?: string) => {
    showNotification({
      type: 'success',
      title,
      message,
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  const showError = useCallback((message: string, title?: string) => {
    showNotification({
      type: 'error',
      title,
      message,
      autoClose: false,
      showActionButton: true,
      actionButtonText: 'OK',
    });
  }, [showNotification]);

  const showInfo = useCallback((message: string, title?: string) => {
    showNotification({
      type: 'info',
      title,
      message,
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  const showWarning = useCallback((message: string, title?: string) => {
    showNotification({
      type: 'warning',
      title,
      message,
      autoClose: false,
      showActionButton: true,
      actionButtonText: 'OK',
    });
  }, [showNotification]);

  // Specific methods for Career Portfolio Central forms
  const showLoginPrompt = useCallback(() => {
    showNotification({
      type: 'info',
      title: 'Account Required',
      message: 'Please login first to explore the article',
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  const showLoginPromptForMoreBlogs = useCallback(() => {
    showNotification({
      type: 'info',
      title: 'Account Required',
      message: 'Please login first to access all blogs',
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  const showSignupSuccess = useCallback(() => {
    showNotification({
      type: 'success',
      title: 'Thank You!',
      message: 'Thank you for your interest! We will get back soon',
      autoClose: true,
      autoCloseDelay: 5000,
    });
  }, [showNotification]);

  const showForgotPasswordSuccess = useCallback(() => {
    showNotification({
      type: 'info',
      title: 'Request Received',
      message: 'Thank you, your request has been taken. We\'ll get back soon',
      autoClose: true,
      autoCloseDelay: 5000,
    });
  }, [showNotification]);

  const showContactSuccess = useCallback(() => {
    showNotification({
      type: 'success',
      title: 'Message Sent!',
      message: 'Thank you for contacting us! We\'ll respond within 24 hours',
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  const showBookingSuccess = useCallback(() => {
    showNotification({
      type: 'success',
      title: 'Booking Confirmed!',
      message: 'Thank you for booking! We\'ll confirm your session soon',
      autoClose: true,
      autoCloseDelay: 5000,
    });
  }, [showNotification]);

  const showNewsletterSuccess = useCallback(() => {
    showNotification({
      type: 'success',
      title: 'Thank You!',
      message: 'Thank you for subscribing! You will receive updates soon',
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  const showJobApplicationSuccess = useCallback(() => {
    showNotification({
      type: 'success',
      title: 'Application Submitted!',
      message: 'Thank you for applying to this position. We will get back soon',
      autoClose: true,
      autoCloseDelay: 5000,
    });
  }, [showNotification]);

  const showJobSaveSuccess = useCallback(() => {
    showNotification({
      type: 'success',
      title: 'Job Saved!',
      message: 'Job has been saved to your profile successfully',
      autoClose: true,
      autoCloseDelay: 3000,
    });
  }, [showNotification]);

  const showLoginToLoadMore = useCallback(() => {
    showNotification({
      type: 'info',
      title: 'Account Required',
      message: 'Login to load more jobs',
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  const showLoginToAccessPortfolio = useCallback(() => {
    showNotification({
      type: 'info',
      title: 'Account Required',
      message: 'Login first to access portfolio',
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  const showLoginToApplyJob = useCallback(() => {
    showNotification({
      type: 'info',
      title: 'Account Required',
      message: 'Login first to apply job',
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  const showLoginToBookConsultation = useCallback(() => {
    showNotification({
      type: 'info',
      title: 'Account Required',
      message: 'Login first to book free consultation',
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  const showLoginToScheduleDemo = useCallback(() => {
    showNotification({
      type: 'info',
      title: 'Account Required',
      message: 'Login first to schedule your demo',
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  const showLoginToStartTrial = useCallback(() => {
    showNotification({
      type: 'info',
      title: 'Account Required',
      message: 'Login first to start demo',
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  const showLoginToGetStarted = useCallback(() => {
    showNotification({
      type: 'info',
      title: 'Account Required',
      message: 'Login first to get started',
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  const showLoginToViewTemplate = useCallback(() => {
    showNotification({
      type: 'info',
      title: 'Account Required',
      message: 'Login first to view template',
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  const showLoginToUseTemplate = useCallback(() => {
    showNotification({
      type: 'info',
      title: 'Account Required',
      message: 'Login first to use the template',
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  const showLoginToSaveJob = useCallback(() => {
    showNotification({
      type: 'info',
      title: 'Account Required',
      message: 'Login first to save job',
      autoClose: true,
      autoCloseDelay: 4000,
    });
  }, [showNotification]);

  return {
    notification,
    showNotification,
    hideNotification,
    showSuccess,
    showError,
    showInfo,
    showWarning,
    // Career Portfolio Central specific methods
    showLoginPrompt,
    showLoginPromptForMoreBlogs,
    showSignupSuccess,
    showForgotPasswordSuccess,
    showContactSuccess,
    showBookingSuccess,
    showNewsletterSuccess,
    showJobApplicationSuccess,
    showJobSaveSuccess,
    showLoginToLoadMore,
    showLoginToAccessPortfolio,
    showLoginToApplyJob,
    showLoginToBookConsultation,
    showLoginToScheduleDemo,
    showLoginToStartTrial,
    showLoginToGetStarted,
    showLoginToViewTemplate,
    showLoginToUseTemplate,
    showLoginToSaveJob,
  };
};
