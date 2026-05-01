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
  },
  {
    id: 'dept-gynec',
    name: 'Gynecology & Obstetrics',
    slug: 'gynecology-obstetrics',
    description: "Comprehensive women's health, maternity, and fertility services.",
    icon: 'Heart',
    display_order: 9,
    is_active: true,
    created_at: new Date().toISOString()
  }
];

export type DoctorExtended = Doctor & {
  bio_full?: string;
  designation?: string;
};

export const doctorsData: DoctorExtended[] = [
  {
    id: 'doc-1',
    name: 'Dr. Babita Ramani',
    slug: 'babita-ramani',
    department_id: 'dept-gynec',
    qualification: 'MD (O&G), FICOG, IVF Fellowship (KIEL, Germany)',
    experience_years: 15,
    specialization: ['Gynecology & Obstetrics', 'Laparoscopic Surgery', 'Fertility & IVF', 'Ultrasonology'],
    consultation_fee: 500,
    is_available: true,
    display_order: 1,
    created_at: new Date().toISOString(),
    image_url: '/src/assets/DR_B_Ramani.jpg',
    designation: 'Founder & Director',
    bio: 'Senior Obstetrician & Gynecologist with 15+ years of experience.',
    bio_full: 'Dr. Babita Ramani is the Founder & Director of A Square Hospital, Jharsuguda, and a renowned Senior Obstetrician & Gynecologist with over 15 years of dedicated medical service. She holds an MD in Obstetrics & Gynecology, FICOG, and has completed an IVF Fellowship from KIEL, Germany. She served as Ex-Senior Resident at VIMSAR, Burla. Dr. Ramani is a skilled Laparoscopic Surgeon, Ultrasonologist, and Fertility Expert known for compassionate, personalized women\'s healthcare. Beyond her practice, she is an active social worker involved in community welfare and women\'s health awareness.'
  },
  {
    id: 'doc-2',
    name: 'Dr. Diptimayee Arland',
    slug: 'diptimayee-arland',
    department_id: 'dept-gynec',
    qualification: 'MBBS, MS (O&G)',
    experience_years: 8,
    specialization: ['Obstetrics & Gynecology', 'High-Risk Pregnancy', 'Maternity Care', 'Women\'s Health'],
    consultation_fee: 400,
    is_available: true,
    display_order: 2,
    created_at: new Date().toISOString(),
    image_url: '/src/assets/DR_D_Arland.jpg',
    designation: 'Consultant Gynecologist',
    bio: 'Specialist in Obstetrics & Gynecology with expertise in high-risk pregnancy care.',
    bio_full: 'Dr. Diptimayee Arland is a qualified Obstetrician and Gynecologist with an MBBS and MS in O&G. With 8 years of clinical experience, she specializes in managing high-risk pregnancies, providing comprehensive antenatal care, and ensuring safe deliveries for mothers and newborns. She is known for her patient-friendly approach and dedication to women\'s health at every stage of life. Dr. Arland is committed to delivering compassionate and evidence-based care to every patient she treats.'
  },
  {
    id: 'doc-3',
    name: 'Dr. Ranjit Arland',
    slug: 'ranjit-arland',
    department_id: 'dept-6',
    qualification: 'MBBS, MS (General Surgery)',
    experience_years: 10,
    specialization: ['General Surgery', 'Laparoscopic Surgery', 'Emergency Surgery', 'Trauma Care'],
    consultation_fee: 400,
    is_available: true,
    display_order: 3,
    created_at: new Date().toISOString(),
    image_url: '/src/assets/DR_R_Arland.jpg',
    designation: 'Consultant Surgeon',
    bio: 'General & Laparoscopic Surgeon with 10+ years of surgical expertise.',
    bio_full: 'Dr. Ranjit Arland is a skilled General and Laparoscopic Surgeon with an MBBS and MS in General Surgery, bringing over 10 years of surgical expertise to A Square Hospital. He specializes in both elective and emergency surgical procedures, including laparoscopic cholecystectomy, hernia repair, appendectomy, and trauma management. Known for his precision, calm approach, and thorough post-operative care, Dr. Arland is dedicated to ensuring the safety and swift recovery of every patient under his care.'
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
