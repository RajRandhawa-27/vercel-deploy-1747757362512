// Personal Data
export interface PersonalDataType {
  required: boolean
  name: string
  title: string
  tagline: string
  profileImage?: string
  resumeUrl?: string
}

// About Data
export interface AboutDataType {
  required: boolean
  description: string
  skills?: {
    name: string
    level: number
  }[]
  interests?: string[]
}

// Experience Data
export interface ExperienceDataType {
  required: boolean
  jobs?: {
    title: string
    company: string
    period: string
    description: string
  }[]
  education?: {
    degree: string
    institution: string
    period: string
    description: string
  }[]
  certifications?: {
    name: string
    issuer: string
    year: string
  }[]
}

// Projects Data
export interface ProjectsDataType {
  required: boolean
  featured?: boolean
  projects?: {
    title: string
    description: string
    image?: string
    technologies?: string[]
    category: string
    demoUrl?: string
    sourceUrl?: string
    featured?: boolean
  }[]
}

// Contact Data
export interface ContactDataType {
  required: boolean
  email?: string
  phone?: string
  location?: string
  socialLinks?: {
    github?: string
    linkedin?: string
    twitter?: string
    dribbble?: string
  }
  formEnabled?: boolean
}

// Blog Data
export interface BlogDataType {
  required: boolean
  posts?: {
    title: string
    excerpt: string
    image?: string
    category?: string
    date: string
    url: string
  }[]
}

// Testimonials Data
export interface TestimonialsDataType {
  required: boolean
  items?: {
    name: string
    position: string
    text: string
    rating: number
  }[]
}
