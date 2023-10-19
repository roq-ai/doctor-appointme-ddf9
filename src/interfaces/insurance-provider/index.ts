import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InsuranceProviderInterface {
  id?: string;
  provider_name: string;
  contact_number?: string;
  address?: string;
  policy_details?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface InsuranceProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  provider_name?: string;
  contact_number?: string;
  address?: string;
  policy_details?: string;
  user_id?: string;
}
