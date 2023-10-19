interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Patient', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View clinic information',
    'View healthcare provider information',
    'View insurance provider information',
    'View patient information',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage clinics',
    'Manage healthcare providers',
    'Manage insurance providers',
    'Manage medical staff',
    'Manage patients',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/dc418ffc-cf5a-4930-a665-cfce1b8b2b17',
};
