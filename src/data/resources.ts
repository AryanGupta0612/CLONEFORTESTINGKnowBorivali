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
}

export const resources: Resource[] = [
  // Hospitals & Clinics
  {
    id: 1,
    name: "Shree Sai Hospital",
    type: "Multi-specialty Hospital",
    category: "Hospitals & Clinics",
    address: "IC Colony, Borivali West, Mumbai - 400103",
    contact: "+91 22 2898 5678",
    email: "info@shreesaihospital.com",
    description: "Full-service hospital with emergency services, ICU, and specialized departments for comprehensive healthcare.",
    rating: 4.2,
    status: "Open 24/7",
    hours: "24 Hours",
    services: ["Emergency Services", "ICU", "Surgery", "Cardiology", "+5 more"]
  },
  {
    id: 2,
    name: "Dr. Mehta's Clinic",
    type: "General Physician",
    category: "Hospitals & Clinics",
    address: "Eksar Road, Borivali West, Mumbai - 400092",
    contact: "+91 22 2867 1234",
    email: "drmehta@clinic.com",
    description: "Family medicine and general health consultations with experienced physician.",
    rating: 4.6,
    status: "Open",
    hours: "9:00 AM - 8:00 PM",
    services: ["General Consultation", "Health Checkups", "Vaccinations"]
  },
  {
    id: 3,
    name: "Central Health Pharmacy",
    type: "Pharmacy",
    category: "Hospitals & Clinics",
    address: "SV Road, near Borivali Station, Mumbai - 400092",
    contact: "+91 22 2890 9876",
    description: "Full-service pharmacy with prescription medications, over-the-counter drugs, and health consultations.",
    rating: 4.8,
    status: "Closed",
    hours: "9:00 AM - 6:00 PM",
    services: ["Prescription Services", "Health Consultations", "Home Delivery", "+1 more"]
  },

  // Shops & Essentials
  {
    id: 4,
    name: "Big Bazaar Borivali",
    type: "Hypermarket",
    category: "Shops & Essentials",
    address: "Raghuleela Mall, SV Road, Kandivali West, Mumbai - 400067",
    contact: "+91 22 6112 3456",
    website: "www.bigbazaar.com",
    description: "One-stop shopping destination for groceries, clothing, electronics, and household items.",
    rating: 4.1,
    status: "Open",
    hours: "10:00 AM - 10:00 PM",
    services: ["Groceries", "Clothing", "Electronics", "Home Delivery"]
  },
  {
    id: 5,
    name: "D-Mart Borivali",
    type: "Supermarket",
    category: "Shops & Essentials",
    address: "Link Road, Borivali West, Mumbai - 400092",
    contact: "+91 22 2898 7654",
    description: "Daily essentials and groceries at affordable prices with wide product selection.",
    rating: 4.3,
    status: "Open",
    hours: "8:00 AM - 11:00 PM",
    services: ["Daily Essentials", "Fresh Produce", "Bulk Shopping"]
  },
  {
    id: 6,
    name: "Fresh Foods Market",
    type: "Grocery Store",
    category: "Shops & Essentials",
    address: "IC Colony Main Road, Borivali West, Mumbai - 400103",
    contact: "+91 22 2867 3456",
    description: "Local market specializing in fresh vegetables, fruits, and daily groceries.",
    rating: 4.5,
    status: "Open",
    hours: "6:00 AM - 9:00 PM",
    services: ["Fresh Vegetables", "Fruits", "Daily Groceries"]
  },

  // Parks & Public Amenities
  {
    id: 7,
    name: "Sanjay Gandhi National Park",
    type: "National Park",
    category: "Parks & Public Amenities",
    address: "Borivali East, Mumbai - 400066",
    contact: "+91 22 2886 0389",
    website: "www.sgnp.gov.in",
    description: "Large national park with wildlife, nature trails, boating, and recreational activities for families.",
    rating: 4.7,
    status: "Open",
    hours: "7:30 AM - 6:00 PM",
    services: ["Nature Trails", "Boating", "Wildlife Safari", "Picnic Areas"]
  },
  {
    id: 8,
    name: "Mandpeshwar Caves",
    type: "Historical Site",
    category: "Parks & Public Amenities",
    address: "Near Borivali Station, Borivali West, Mumbai - 400092",
    description: "Ancient rock-cut caves offering peaceful environment for meditation and historical exploration.",
    rating: 4.0,
    status: "Open",
    hours: "6:00 AM - 6:00 PM",
    services: ["Historical Tours", "Meditation", "Photography"]
  },
  {
    id: 9,
    name: "Borivali Sports Complex",
    type: "Sports Facility",
    category: "Parks & Public Amenities",
    address: "Poisar Gymkhana, Kandivali West, Mumbai - 400067",
    contact: "+91 22 2867 8901",
    description: "Comprehensive sports facility with cricket ground, swimming pool, and various indoor games.",
    rating: 4.4,
    status: "Open",
    hours: "6:00 AM - 10:00 PM",
    services: ["Cricket Ground", "Swimming Pool", "Gym", "Indoor Games"]
  },

  // Residential Buildings & Societies
  {
    id: 10,
    name: "Raheja Reflections",
    type: "Residential Complex",
    category: "Residential Buildings & Societies",
    address: "Film City Road, Malad East, Mumbai - 400097",
    contact: "+91 22 6112 5678",
    description: "Premium residential towers with modern amenities, security, and recreational facilities.",
    rating: 4.6,
    status: "Open",
    hours: "24 Hours",
    services: ["Security", "Gym", "Swimming Pool", "Garden"]
  },
  {
    id: 11,
    name: "Ekta Garden Society",
    type: "Housing Society",
    category: "Residential Buildings & Societies",
    address: "Eksar Road, Borivali West, Mumbai - 400092",
    contact: "+91 22 2898 4321",
    description: "Well-maintained housing society with garden, children's play area, and 24/7 security.",
    rating: 4.2,
    status: "Open",
    hours: "24 Hours",
    services: ["Garden", "Security", "Play Area", "Parking"]
  },
  {
    id: 12,
    name: "Shanti Nagar CHS",
    type: "Cooperative Housing Society",
    category: "Residential Buildings & Societies",
    address: "IC Colony, Borivali West, Mumbai - 400103",
    contact: "+91 22 2867 6789",
    description: "Affordable cooperative housing society with basic amenities and covered parking.",
    rating: 3.9,
    status: "Open",
    hours: "24 Hours",
    services: ["Basic Amenities", "Parking", "Security"]
  },

  // Transport Hubs
  {
    id: 13,
    name: "Borivali Railway Station",
    type: "Railway Station",
    category: "Transport Hubs",
    address: "SV Road, Borivali West, Mumbai - 400092",
    description: "Major suburban railway station on Western line connecting to all parts of Mumbai and suburbs.",
    rating: 4.0,
    status: "Open 24/7",
    hours: "24 Hours",
    services: ["Local Trains", "Express Trains", "Parking", "Food Court"]
  },
  {
    id: 14,
    name: "Borivali Bus Depot",
    type: "Bus Terminal",
    category: "Transport Hubs",
    address: "Link Road, Borivali West, Mumbai - 400092",
    contact: "+91 22 2898 1122",
    description: "BEST bus depot with extensive route network covering entire Mumbai metropolitan area.",
    rating: 3.8,
    status: "Open",
    hours: "5:00 AM - 12:00 AM",
    services: ["City Buses", "Express Routes", "AC Buses", "Prepaid Cards"]
  },
  {
    id: 15,
    name: "National Highway 8 Junction",
    type: "Highway Access",
    category: "Transport Hubs",
    address: "Western Express Highway, Borivali East, Mumbai - 400066",
    description: "Major highway junction providing connectivity to Gujarat, Rajasthan, and North India.",
    rating: 4.1,
    status: "Open 24/7",
    hours: "24 Hours",
    services: ["Highway Access", "Fuel Stations", "Rest Areas", "Toll Plaza"]
  }
];

export const categories = [
  "Hospitals & Clinics",
  "Shops & Essentials", 
  "Parks & Public Amenities",
  "Residential Buildings & Societies",
  "Transport Hubs"
];
