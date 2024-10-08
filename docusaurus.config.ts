import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Rework',
  tagline: '一个 CSS 通用工具库 🔥',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://yincw.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/rework/',
  // baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yincw', // Usually your GitHub org/user name.
  projectName: 'yincw.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  // trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    // locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/yincw/rework/',
          // routeBasePath: '/', // 文档模式下，本地搜索无法使用
        },
        // blog: false, // 文档模式
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/yincw/rework/',
          blogSidebarTitle: '最近的帖子',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    '@docusaurus/theme-live-codeblock',
    ['@easyops-cn/docusaurus-search-local', ({
      hashed: true,
      language: ["zh", "en"],
    })],
  ],
  themeConfig: {
    navbar: {
      hideOnScroll: true, // 导航栏：向下滚动隐藏导航栏，向上滚动显示
      logo: {
        alt: 'logo',
        src: 'img/rework.svg',
      },
      title: 'Rework',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          to: '/docs',
          label: '文档页',
          position: 'left',
        },
        {to: '/blog', label: '博客页', position: 'left'},
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'dropdown',
          label: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com',
            },
          ],
          position: 'right',
        },
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        // },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        {
          href: 'https://github.com/yincw/rework',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true, // 侧边栏：是否显示 隐藏侧边栏菜单按钮
        autoCollapseCategories: true, // 侧边栏：是否 自动折叠菜单栏
      },
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} @yincw/rework, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      // magicComments: [
      //   {
      //     className: 'theme-code-block-highlighted-line',
      //     line: 'highlight-next-line',
      //     block: {start: 'highlight-start', end: 'highlight-end'},
      //   },
      //   {
      //     className: 'code-block-error-line',
      //     line: 'This will error',
      //   },
      // ]
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
