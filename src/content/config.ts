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
    url: z.string().optional(),
    doi: z.string().optional(),
    authors: z.array(z.string()).optional(),
    organisms: z.array(z.string()).optional(),
    experimentType: z.string().optional(),
    consensusLevel: z.string().optional(),
    knowledgeGaps: z.array(z.string()).optional(),
    journal: z.string().optional(),
    // Made chartData fully optional and accepts any structure to handle malformed YAML gracefully
    chartData: z.any().optional(),
  }),
});

export const collections = {
  'news': newsCollection,
};
