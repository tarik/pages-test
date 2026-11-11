import { defineConfig } from 'astro-elucidate/config';

export default defineConfig({
  title: 'Pages Test',
  url: 'https://tarik.github.io/pages-test',
  description: '',
  nav: [
    { label: 'Research', href: '/' },
    { label: 'About', href: '/about/' },
  ],
  repository: 'https://github.com/tarik/pages-test',
  math: {
    macros: { '\\R': '\\mathbb{R}', '\\norm': '\\left\\lVert #1 \\right\\rVert' },
  },
});
