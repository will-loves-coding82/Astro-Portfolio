// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    // Reference an array of related posts from the `blog` collection by `slug`
    relatedPosts: z.array(reference('blog'))
  })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };