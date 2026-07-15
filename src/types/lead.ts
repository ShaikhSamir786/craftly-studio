export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface LeadRecord {
  id?: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  source: string;
  status: 'new' | 'contacted' | 'converted';
  createdAt: any; // Using "any" here as Firestore Timestamp or FieldValue can vary at runtime
}
