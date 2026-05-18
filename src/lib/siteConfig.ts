import type { SiteConfig } from '../types/config';

export const siteConfig: SiteConfig = {
  title: 'EasyCoda 文档',
  description: 'EasyCoda - 全球领先的 AI 智能体自主编程平台。',
  baseUrl: 'https://docs.easycoda.cn',
  ogImage: '/logo.png',
  locales: ['en', 'zh'],
  defaultLocale: 'zh',
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
      path: 'https://easycoda.cn',
      external: true,
    },
  ],
  footer: {
    copyright: `© ${new Date().getFullYear()} 北京跃云科技有限公司. 版权所有。`,
    links: [
      { text: 'EasyCoda', link: 'https://easycoda.cn' },
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
      icon: 'Home',
      link: 'https://easycoda.com',
      label: 'EasyCoda',
    },
  ],
};