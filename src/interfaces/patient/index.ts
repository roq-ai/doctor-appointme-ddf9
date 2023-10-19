import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  patient_name: string;
  gender?: string;
  date_of_birth?: any;
  contact_number?: string;
  address?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_name?: string;
  gender?: string;
  contact_number?: string;
  address?: string;
  user_id?: string;
}
