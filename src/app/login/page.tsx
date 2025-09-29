'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema, type LoginFormData } from '@/utils/validations';
import { useNotification } from '@/hooks/useNotification';
import { authUtils } from '@/utils/auth';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import PasswordInput from '@/components/ui/PasswordInput';
import NotificationModal from '@/components/ui/NotificationModal';
import Modal from '@/components/ui/Modal';

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const {
    notification,
    hideNotification,
    showLoginPrompt,
    showAccountUnderReview,
    showForgotPasswordSuccess,
  } = useNotification();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      
      // Check if the credentials match a registered user
      const isValidUser = authUtils.validateCredentials(data.email, data.password);
      
      if (isValidUser) {
        // User is registered and credentials match - show account under review message
        showAccountUnderReview();
      } else {
        // User is not registered or credentials don't match - show signup prompt
        showLoginPrompt();
      }
      
      reset();
    }, 1000);
  };

  const handleForgotPassword = () => {
    if (!forgotPasswordEmail || !/\S+@\S+\.\S+/.test(forgotPasswordEmail)) {
      return;
    }
    
    setShowForgotPassword(false);
    setForgotPasswordEmail('');
    showForgotPasswordSuccess();
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-light via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-brand-gray-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-brand-gray-600">
              Sign in to your Career Portfolio Central account
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white py-8 px-6 shadow-xl rounded-xl border border-brand-gray-200">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {/* Email Field */}
              <Input
                {...register('email')}
                type="email"
                label="Email Address"
                placeholder="Enter your email"
                error={errors.email?.message}
                fullWidth
                startIcon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                }
              />

              {/* Password Field */}
              <PasswordInput
                {...register('password')}
                label="Password"
                placeholder="Enter your password"
                error={errors.password?.message}
                fullWidth
                startIcon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                }
              />

              {/* Forgot Password Link */}
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-sm text-brand-navy hover:text-brand-teal transition-colors"
                >
                  Forgot your password?
                </button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={isLoading}
              >
                Sign In
              </Button>
            </form>

            {/* Signup Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-brand-gray-600">
                Don&apos;t have an account?{' '}
                <Link
                  href="/signup"
                  className="font-medium text-brand-navy hover:text-brand-teal transition-colors"
                >
                  Create your account
                </Link>
              </p>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <p className="text-xs text-brand-gray-500">
              By signing in, you agree to our{' '}
              <Link href="/terms" className="text-brand-navy hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-brand-navy hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <Modal
        isOpen={showForgotPassword}
        onClose={() => setShowForgotPassword(false)}
        title="Reset Password"
        size="sm"
      >
        <div className="space-y-4">
          <p className="text-brand-gray-600">
            Enter your email address and we&apos;ll send you a link to reset your password.
          </p>
          <Input
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            value={forgotPasswordEmail}
            onChange={(e) => setForgotPasswordEmail(e.target.value)}
            fullWidth
          />
          <div className="flex space-x-3 pt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowForgotPassword(false)}
              fullWidth
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleForgotPassword}
              fullWidth
            >
              Reset Password
            </Button>
          </div>
        </div>
      </Modal>

      {/* Notification Modal */}
      {notification.config && (
        <NotificationModal
          isOpen={notification.isOpen}
          onClose={hideNotification}
          {...notification.config}
        />
      )}
    </>
  );
};

export default LoginPage;
