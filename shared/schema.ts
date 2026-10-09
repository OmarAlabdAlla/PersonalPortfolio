import { z } from "zod";

// Portfolio data types based on Omar's CV
export const PersonalInfoSchema = z.object({
  name: z.string(),
  title: z.string(),
  phone: z.string(),
  email: z.string().email(),
  linkedin: z.string().url(),
  summary: z.string(),
  photo: z.string().optional(),
});

export const ExperienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  position: z.string(),
  duration: z.string(),
  responsibilities: z.array(z.string()),
  achievements: z.array(z.string()),
});

export const EducationSchema = z.object({
  id: z.string(),
  institution: z.string(),
  degree: z.string(),
  duration: z.string(),
  gpa: z.string().optional(),
  coursework: z.array(z.string()).optional(),
  description: z.string().optional(),
});

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  achievements: z.array(z.string()),
});

export const SkillSchema = z.object({
  category: z.string(),
  skills: z.array(z.string()),
});

export const LanguageSchema = z.object({
  language: z.string(),
  proficiency: z.string(),
});

export const ReferenceSchema = z.object({
  id: z.string(),
  name: z.string(),
  title: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

export const PortfolioDataSchema = z.object({
  personalInfo: PersonalInfoSchema,
  experience: z.array(ExperienceSchema),
  education: z.array(EducationSchema),
  projects: z.array(ProjectSchema),
  skills: z.array(SkillSchema),
  languages: z.array(LanguageSchema),
  references: z.array(ReferenceSchema),
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Education = z.infer<typeof EducationSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Skill = z.infer<typeof SkillSchema>;
export type Language = z.infer<typeof LanguageSchema>;
export type Reference = z.infer<typeof ReferenceSchema>;
export type PortfolioData = z.infer<typeof PortfolioDataSchema>;