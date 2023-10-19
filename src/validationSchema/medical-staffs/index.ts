import * as yup from 'yup';

export const medicalStaffValidationSchema = yup.object().shape({
  staff_name: yup.string().required(),
  designation: yup.string().nullable(),
  specialization: yup.string().nullable(),
  contact_number: yup.string().nullable(),
  clinic_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
