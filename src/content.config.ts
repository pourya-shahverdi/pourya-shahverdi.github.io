import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    cardSummary: z.string(),
    order: z.number(),
    role: z.string(),
    year: z.string(),
    stack: z.array(z.string()),
    badge: z.string().optional(),
    venues: z.array(z.string()).default([]),
    github: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
    paper: z.object({ label: z.string(), href: z.string().url() }).optional(),
    demo: z.string().url().optional(),
  }),
});

export const collections = { projects };
