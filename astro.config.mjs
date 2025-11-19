// @ts-check
import { defineConfig } from 'astro/config';
import { plainTextPlugin } from "@barnabask/astro-minisearch";

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
 

// https://astro.build/config
export default defineConfig({
  // add to your existing integrations
  markdown: {
    // @ts-ignore
    rehypePlugins: [plainTextPlugin()],
  },
  integrations: [ mdx({
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