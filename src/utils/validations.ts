import * as yup from 'yup';

// Contact Form Validation Schema
export const contactFormSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  subject: yup
    .string()
    .required('Subject is required')
    .min(5, 'Subject must be at least 5 characters'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

// Login Form Validation Schema
export const loginFormSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

// Signup Form Validation Schema
export const signupFormSchema = yup.object({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  terms: yup
    .boolean()
    .required('You must accept the terms and conditions')
    .oneOf([true], 'You must accept the terms and conditions'),
});

// Career Counselling Booking Form Schema
export const counsellingBookingSchema = yup.object({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
  preferredDate: yup
    .date()
    .required('Preferred date is required')
    .min(new Date(), 'Date cannot be in the past'),
  preferredTime: yup
    .string()
    .required('Preferred time is required'),
  sessionType: yup
    .string()
    .required('Session type is required')
    .oneOf(['career-planning', 'resume-review', 'interview-prep', 'job-search-strategy'], 'Please select a valid session type'),
  message: yup
    .string()
    .optional()
    .max(500, 'Message cannot exceed 500 characters'),
});

// Job Application Form Validation Schema
export const jobApplicationSchema = yup.object({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
  resume: yup
    .mixed()
    .required('Resume is required'),
  coverLetter: yup
    .string()
    .required('Cover letter is required')
    .min(50, 'Cover letter must be at least 50 characters')
    .max(1000, 'Cover letter cannot exceed 1000 characters'),
  linkedin: yup
    .string()
    .optional()
    .nullable()
    .url('Please enter a valid LinkedIn URL'),
  portfolio: yup
    .string()
    .optional()
    .nullable()
    .url('Please enter a valid portfolio URL'),
  expectedSalary: yup
    .string()
    .optional()
    .nullable(),
  availableStartDate: yup
    .date()
    .required('Available start date is required')
    .min(new Date(), 'Start date cannot be in the past'),
  workAuthorization: yup
    .string()
    .required('Work authorization status is required')
    .oneOf(['citizen', 'permanent-resident', 'visa-holder', 'need-sponsorship'], 'Please select a valid work authorization status'),
});

export type ContactFormData = yup.InferType<typeof contactFormSchema>;
export type LoginFormData = yup.InferType<typeof loginFormSchema>;
export type SignupFormData = yup.InferType<typeof signupFormSchema>;
export type CounsellingBookingData = yup.InferType<typeof counsellingBookingSchema>;
export type JobApplicationData = yup.InferType<typeof jobApplicationSchema>;
