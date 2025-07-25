// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(), // <-- ဒီလို ရိုးရှင်းအောင် ပြင်ဆင်လိုက်ပါ
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  'blog': blogCollection,
};