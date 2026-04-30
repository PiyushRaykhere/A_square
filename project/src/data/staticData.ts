export type Department = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image_url?: string;
  treatments?: string[];
  equipment?: string[];
  display_order: number;
  is_active: boolean;
  created_at: string;
};

export type Doctor = {
  id: string;
  name: string;
  slug: string;
  department_id: string;
  qualification: string;
  experience_years: number;
  specialization: string[];
  bio?: string;
  image_url?: string;
  consultation_fee: number;
  is_available: boolean;
  display_order: number;
  created_at: string;
};

export type Testimonial = {
  id: string;
  patient_name: string;
  department?: string;
  rating: number;
  comment: string;
  is_approved: boolean;
  created_at: string;
};

export const departmentsData: Department[] = [
  {
    id: 'dept-1',
    name: 'Cardiology',
    slug: 'cardiology',
    description: 'Expert care for your heart with advanced diagnostics and treatments.',
    icon: 'Heart',
    display_order: 1,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-2',
    name: 'Orthopedics',
    slug: 'orthopedics',
    description: 'Comprehensive care for bones, joints, and musculoskeletal system.',
    icon: 'Bone',
    display_order: 2,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-3',
    name: 'Neurology',
    slug: 'neurology',
    description: 'Specialized treatment for disorders of the brain and nervous system.',
    icon: 'Brain',
    display_order: 3,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-4',
    name: 'Pediatrics',
    slug: 'pediatrics',
    description: 'Dedicated healthcare for infants, children, and adolescents.',
    icon: 'Baby',
    display_order: 4,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-5',
    name: 'Dental',
    slug: 'dental',
    description: 'Complete dental care from routine checkups to complex surgeries.',
    icon: 'Smile',
    display_order: 5,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-6',
    name: 'General Medicine',
    slug: 'general-medicine',
    description: 'Primary care and treatment for a wide range of medical conditions.',
    icon: 'Stethoscope',
    display_order: 6,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-7',
    name: 'ENT',
    slug: 'ent',
    description: 'Specialized care for ear, nose, and throat conditions.',
    icon: 'Ear',
    display_order: 7,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-8',
    name: 'Dermatology',
    slug: 'dermatology',
    description: 'Advanced treatments for skin, hair, and nail disorders.',
    icon: 'Sparkles',
    display_order: 8,
    is_active: true,
    created_at: new Date().toISOString()
  }
];

export const doctorsData: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Sarah Johnson',
    slug: 'sarah-johnson',
    department_id: 'dept-1',
    qualification: 'MD, DM (Cardiology)',
    experience_years: 15,
    specialization: ['Interventional Cardiology', 'Heart Failure'],
    consultation_fee: 1000,
    is_available: true,
    display_order: 1,
    created_at: new Date().toISOString(),
    image_url: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'doc-2',
    name: 'Dr. Michael Chen',
    slug: 'michael-chen',
    department_id: 'dept-3',
    qualification: 'MD, DM (Neurology)',
    experience_years: 12,
    specialization: ['Stroke Medicine', 'Epilepsy'],
    consultation_fee: 1200,
    is_available: true,
    display_order: 2,
    created_at: new Date().toISOString(),
    image_url: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'doc-3',
    name: 'Dr. Emily Williams',
    slug: 'emily-williams',
    department_id: 'dept-4',
    qualification: 'MD (Pediatrics)',
    experience_years: 10,
    specialization: ['Neonatology', 'Pediatric Intensive Care'],
    consultation_fee: 800,
    is_available: true,
    display_order: 3,
    created_at: new Date().toISOString(),
    image_url: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'doc-4',
    name: 'Dr. James Anderson',
    slug: 'james-anderson',
    department_id: 'dept-2',
    qualification: 'MS (Orthopedics)',
    experience_years: 18,
    specialization: ['Joint Replacement', 'Sports Medicine'],
    consultation_fee: 1500,
    is_available: true,
    display_order: 4,
    created_at: new Date().toISOString(),
    image_url: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'doc-5',
    name: 'Dr. Lisa Kumar',
    slug: 'lisa-kumar',
    department_id: 'dept-8',
    qualification: 'MD (Dermatology)',
    experience_years: 8,
    specialization: ['Cosmetic Dermatology', 'Dermatosurgery'],
    consultation_fee: 900,
    is_available: true,
    display_order: 5,
    created_at: new Date().toISOString(),
    image_url: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'doc-6',
    name: 'Dr. Robert Taylor',
    slug: 'robert-taylor',
    department_id: 'dept-6',
    qualification: 'MD (General Medicine)',
    experience_years: 20,
    specialization: ['Internal Medicine', 'Preventive Care'],
    consultation_fee: 700,
    is_available: true,
    display_order: 6,
    created_at: new Date().toISOString(),
    image_url: 'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    patient_name: 'John Smith',
    department: 'Cardiology',
    rating: 5,
    comment: 'The care I received here was exceptional. The doctors were very attentive and the staff made sure I was comfortable throughout my stay.',
    is_approved: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'test-2',
    patient_name: 'Mary Davis',
    department: 'Orthopedics',
    rating: 5,
    comment: 'After my knee replacement surgery, I was back on my feet much faster than I expected. The physiotherapy team is amazing.',
    is_approved: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'test-3',
    patient_name: 'Robert Wilson',
    department: 'Neurology',
    rating: 4,
    comment: 'Very professional environment. The consultation was thorough and all my questions were answered patiently.',
    is_approved: true,
    created_at: new Date().toISOString()
  }
];
