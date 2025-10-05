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
    chartData: z.object({
      type: z.string(),
      data: z.object({
        labels: z.array(z.string()),
        datasets: z.array(z.any()),
      }),
      options: z.any().optional(),
    }).optional(),
  }),
});

export const collections = {
  'news': newsCollection,
};
