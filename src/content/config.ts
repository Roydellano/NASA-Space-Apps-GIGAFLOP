import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    featuredImage: z.string().optional(),
    readTime: z.number(), // in minutes
    priority: z.enum(['high', 'medium', 'low']).default('medium'),
  }),
});

export const collections = {
  'news': newsCollection,
};
