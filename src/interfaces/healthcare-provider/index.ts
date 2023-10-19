import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HealthcareProviderInterface {
  id?: string;
  provider_name: string;
  provider_type?: string;
  contact_number?: string;
  address?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface HealthcareProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  provider_name?: string;
  provider_type?: string;
  contact_number?: string;
  address?: string;
  user_id?: string;
}
