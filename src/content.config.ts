import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. Blog Collection
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
  })
});

// 2. Projects Collection
const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  // Astro's image() helper validates local images
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    link: z.string().url().optional(),

    // Flexible Thumbnail Options
    thumbnail: z.object({
      local: image().optional(), // Picture stored in the file tree
      url: z.string().url().optional(), // External URL
      youtubeId: z.string().optional(), // YouTube video ID for embeds
    }).optional(),
  })
});

// 3. Pages Collection (e.g., About Me)
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  })
});

// 4. Modules Collection
const modulesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/modules" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  })
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
  pages: pagesCollection,
  modules: modulesCollection
};
