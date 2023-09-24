export interface Information {
  full_name: string;
  short_name: string;
  profession: string;
  short_description: string;
  description: string;
  email: string;
  city: string;
  country: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Education {
  institution: string;
  start_date: string;
  end_date?: string;
  goal: string;
  country: string;
  city: string;
}

export interface Course {
  name: string;
  institution: string;
  start_date: string;
  end_date?: string;
  certification_url?: string;
}

export interface WorkExperience {
  institution: string;
  country: string;
  city: string;
  start_date: string;
  end_date?: string;
  goals: string[];
  title: string;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  code_url?: string;
  thumbnails?: string;
  technologies: string[];
}
