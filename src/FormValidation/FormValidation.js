import * as yup from 'yup';

export const PasswordResetSchema = yup
  .object({
    password: yup
      .string()
      .required('Password is mendatory')
      .min(8, 'Password must be at 8 characters long'),
    password_confirmation: yup
      .string()
      .required('Password is mendatory')
      .oneOf([yup.ref('password')], 'Passwords do not match'),
  })
  .required();

export const LeaveRequestSchema = yup
  .object({
    type: yup.string().required('select leave type'),
    start_date: yup.string().required('date required'),
    purpose: yup.string().required('please state your reason(s)'),
    // relieve_officer: yup.number().required('select reliever'),
  })
  .required();
