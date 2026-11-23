export interface CompanyInfo {
  name: string;
  legalName: string;
  positioning: string;
  tagline: string;
  registeredAddress: string;
  registrationNumber: string;
  contactEmail: string;
  verificationNotice: string;
  pillars: {
    title: string;
    description: string;
    badge: string;
  }[];
}
