// @ts-check
import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind"
import collection_search from 'astro-collection-search';

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
 

// https://astro.build/config
export default defineConfig({
  // add to your existing integrations
  integrations: [pagefind(),collection_search(), mdx({
    syntaxHighlight: false,
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode, {
          theme: 'github-dark'
        }
      ]
    ]
  })],
  vite: {
    plugins: [tailwindcss()]

  },
});