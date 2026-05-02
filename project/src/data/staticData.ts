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
    id: 'dept-gynec',
    name: 'Gynecology & Obstetrics',
    slug: 'gynecology-obstetrics',
    description: "Women's health, pregnancy care, normal delivery, painless delivery, high-risk pregnancy management, and infertility treatment.",
    icon: 'Heart',
    display_order: 1,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-maternity',
    name: 'Maternity Care',
    slug: 'maternity-care',
    description: 'Safe motherhood services with modern labour room and postnatal care.',
    icon: 'Baby',
    display_order: 2,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-medicine',
    name: 'General Medicine',
    slug: 'general-medicine',
    description: 'Diagnosis and treatment for fever, infections, diabetes, hypertension, and other medical conditions.',
    icon: 'Stethoscope',
    display_order: 3,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-surgery',
    name: 'General Surgery',
    slug: 'general-surgery',
    description: 'Minor and major surgical procedures with modern operation theatre facilities.',
    icon: 'Scissors',
    display_order: 4,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-ortho',
    name: 'Orthopedics',
    slug: 'orthopedics',
    description: 'Bone, joint, fracture, arthritis, and trauma care.',
    icon: 'Bone',
    display_order: 5,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-paediatrics',
    name: 'Paediatrics',
    slug: 'paediatrics',
    description: 'Complete healthcare services for newborns, infants, children, and adolescents.',
    icon: 'User',
    display_order: 6,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-nicu',
    name: 'Advanced NICU',
    slug: 'advanced-nicu',
    description: 'Specialized intensive care for premature and critically ill newborn babies.',
    icon: 'Activity',
    display_order: 7,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-fertility',
    name: 'Fertility Care',
    slug: 'fertility-care',
    description: 'Consultation and advanced solutions for infertility and reproductive health.',
    icon: 'Leaf',
    display_order: 8,
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
    name: 'Dr. Dipti Arland',
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
    name: 'Dr. R Arland',
    slug: 'ranjit-arland',
    department_id: 'dept-surgery',
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
    patient_name: 'Vivek Kumar',
    department: 'Cardiology',
    rating: 5,
    comment: 'Excellent service from ASquare Hospital. The doctors are very professional and the staff is extremely helpful.',
    is_approved: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'test-2',
    patient_name: 'Ritesh Agrawal',
    department: 'Orthopedics',
    rating: 5,
    comment: 'After my knee replacement surgery, I was back on my feet much faster than I expected. The physiotherapy team is amazing.',
    is_approved: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'test-3',
    patient_name: 'Priyanka Saha',
    department: 'Neurology',
    rating: 4,
    comment: 'Very professional environment. The consultation was thorough and all my questions were answered patiently.',
    is_approved: true,
    created_at: new Date().toISOString()
  }
];
