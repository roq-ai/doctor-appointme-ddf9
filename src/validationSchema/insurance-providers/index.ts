import * as yup from 'yup';

export const insuranceProviderValidationSchema = yup.object().shape({
  provider_name: yup.string().required(),
  contact_number: yup.string().nullable(),
  address: yup.string().nullable(),
  policy_details: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
