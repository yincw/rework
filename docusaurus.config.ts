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
  // baseUrl: '/rework/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yincw', // Usually your GitHub org/user name.
  projectName: 'rework', // Usually your repo name.

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
          editUrl:
            'https://github.com/yincw/rework/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
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
      title: 'Rework',
      logo: {
        alt: 'logo',
        src: 'img/rework.svg',
      },
      items: [
        {
          sidebarId: 'tutorialSidebar',
          type: 'docSidebar',
          position: 'left',
          label: '文档',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'search',
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
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
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
      playgroundPosition: 'bottom',
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
