import * as yup from 'yup';

// ----------------  BOOKING

export const bookingSchema = yup.object({
  username: yup
    .string()
    .required('Name is required')
    .min(3, 'Minimum 3 characters')
    .max(30, 'Max 30 characters'),
  email: yup.string().required('Email is required').email('Invalid email'),
  phoneNumber: yup
    .string()
    .required('Phone is required')
    .matches(/^\+?\d{10,14}$/, 'Invalid phone number. +3801111111'),
});

// ----------------  LOGIN

export const loginSchema = yup.object({
  email: yup.string().required('Email is required').email('Invalid email'),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Minimum 8 characters'),
});

// ----------------  REGISTER

export const registerSchema = yup.object({
  username: yup
    .string()
    .required('Name is required')
    .min(3, 'Minimum 3 characters')
    .max(30, 'Max 30 characters'),
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Minimum 8 characters'),
});
