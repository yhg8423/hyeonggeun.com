import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.string(),
    tags: z.string(),
    category: z.string().optional(),
    thumbnail: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    type: z.string(),
    status: z.string(),
    path: z.string().optional(),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    type: z.string(),
    path: z.string().optional(),
  }),
});

const info = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    email: z.string(),
    facebook: z.string(),
    twitter: z.string(),
    instagram: z.string(),
    git: z.string(),
    linkedin: z.string(),
    cv: z.string(),
    cv_developer: z.string(),
    google_scholar: z.string(),
    path: z.string().optional(),
  }),
});

export const collections = { blog, projects, publications, info };
