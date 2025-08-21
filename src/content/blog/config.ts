// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    categories: z.string(),
    tags: z.array(z.string()),
    id: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
  }),
});

export const collections = { blog };
