import * as yup from 'yup';

export const formValidationSchema = yup.object({
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
  password: yup
    .string()
    .required()
    .min(8, 'Minimum 8 characters')
    .max(30, 'Max 30 characters'),
});
