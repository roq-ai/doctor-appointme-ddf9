import * as yup from 'yup';

export const healthcareProviderValidationSchema = yup.object().shape({
  provider_name: yup.string().required(),
  provider_type: yup.string().nullable(),
  contact_number: yup.string().nullable(),
  address: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
