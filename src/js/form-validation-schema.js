import * as yup from 'yup';

// ----------------  BOOKING

export const bookingSchema = yup.object({
  username: yup
    .string()
    .required('Name is required')
    .min(3, 'Minimum 3 characters')
    .max(30, 'Max 30 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email, for example: user@gmail.com'),
  phoneNumber: yup
    .string()
    .required('Phone is required')
    .matches(/^\+?\d{10,14}$/, 'Phone format: +380XXXXXXXXX')
    .transform(value => value.replace(/\s|-/g, '')),
});

// ----------------  LOGIN

export const loginSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email, for example: user@gmail.com'),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Minimum 8 characters')
    .max(30, 'Max 30 characters'),
});

// ----------------  REGISTER

export const registerSchema = yup.object({
  username: yup
    .string()
    .required('Name is required')
    .min(3, 'Minimum 3 characters')
    .max(30, 'Max 30 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email, for example: user@gmail.com'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Minimum 8 characters')
    .max(30, 'Max 30 characters'),
});
