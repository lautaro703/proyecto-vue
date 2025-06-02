import * as yup from 'yup';

export const schemas = yup.object({
  nombre: yup.string().required(),
  email: yup.string().email().required(),
});