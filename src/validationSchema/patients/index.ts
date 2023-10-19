import * as yup from 'yup';

export const patientValidationSchema = yup.object().shape({
  patient_name: yup.string().required(),
  gender: yup.string().nullable(),
  date_of_birth: yup.date().nullable(),
  contact_number: yup.string().nullable(),
  address: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
