export interface Resource {
  id: number;
  name: string;
  type: string;
  category: string;
  address: string;
  contact?: string;
  email?: string;
  website?: string;
  description?: string;
  rating?: number;
  status?: 'Open' | 'Closed' | 'Open 24/7';
  hours?: string;
  services?: string[];
  isUserSubmitted?: boolean;
  submittedAt?: string;
  approved?: boolean;
}

export const resources: Resource[] = [
  {
    id: 1,
    name: "Apex Superspeciality Hospitals – Borivali West",
    type: "Multi-specialty Hospital (Super-speciality)",
    category: "Hospitals & Clinics",
    address: "Beside Punjab & Sind Bank, Lokmanya Tilak Road, Babhai Naka, Borivali West, Mumbai 400092",
    description: "Offers a wide range of specialty services, including emergency care and routine diagnostics.",
    status: "Open",
    hours: "24/7 emergency services (general OPD hours vary)",
    services: ["Multi-speciality consultations", "Emergency care", "Diagnostics", "Inpatient care"]
  }
];

export const categories = [
  "Hospitals & Clinics",
  "Shops & Essentials", 
  "Parks & Public Amenities",
  "Residential Buildings & Societies",
  "Transport Hubs"
];