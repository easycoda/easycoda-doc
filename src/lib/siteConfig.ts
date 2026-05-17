import type { SiteConfig } from '../types/config';

export const siteConfig: SiteConfig = {
  title: 'EasyCoda Documentation',
  description: 'EasyCoda - AI Agent powered application building platform.',
  baseUrl: 'https://docs.easycoda.com',
  ogImage: '/logo.png',
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  nav: [
    {
      label: 'nav.home',
      path: '/'
    },
    {
      label: 'nav.getting-started',
      children: [
        {
          label: 'Getting Started',
          path: '/getting-started/getting-started',
        },
        {
          label: 'Quick Operations',
          path: '/getting-started/operations',
        }
      ],
    },
    {
      label: 'nav.guide',
      children: [
        {
          label: 'Credit Usage',
          path: '/guides/credits',
        },
        {
          label: 'Projects',
          path: '/guides/projects',
        },
        {
          label: 'Agent Teams',
          path: '/guides/agent-teams',
        },
        {
          label: 'Workspaces',
          path: '/guides/workspaces',
        },
        {
          label: 'Sandbox',
          path: '/guides/dev-sandbox',
        },
      ],
    },
    {
      label: 'nav.easycoda',
      path: 'https://easycoda.com',
      external: true,
    },
  ],
  footer: {
    copyright: `© ${new Date().getFullYear()} EasyCoda. All rights reserved.`,
    links: [
      { text: 'EasyCoda', link: 'https://easycoda.com' },
      { text: 'GitHub', link: 'https://github.com/easycoda/easycoda-doc' },
    ],
  },
  socialLinks: [
    {
      icon: 'Github',
      link: 'https://github.com/easycoda/easycoda-doc',
      label: 'GitHub',
    },
    {
      icon: 'Twitter',
      link: 'https://twitter.com/@easy_coda',
      label: 'Twitter',
    },
  ],
};