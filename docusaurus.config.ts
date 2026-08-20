import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Teleinformatyka Wikipedia',
  tagline: 'Kompleksowa encyklopedia teleinformatyki / Comprehensive Teleinformatics Encyclopedia',
  favicon: 'img/favicon.ico',

  url: 'https://bartoszosiej.github.io',
  baseUrl: '/teleinformatyka-wikipedia/',

  organizationName: 'BartoszOsiej',
  projectName: 'teleinformatyka-wikipedia',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
    localeConfigs: {
      en: { htmlLang: 'en-US', label: 'English' },
      pl: { htmlLang: 'pl-PL', label: 'Polski' },
    },
  },

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/BartoszOsiej/teleinformatyka-wikipedia/tree/master/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: '📡 Teleinformatyka',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: '📖 Docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/BartoszOsiej/teleinformatyka-wikipedia',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Networking', to: '/networking/osi-model' },
            { label: 'Telecom', to: '/telecom/voip-sip' },
            { label: 'Fiber Optics', to: '/fiber-optics/fundamentals' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Security', to: '/security/firewalls' },
            { label: 'Certifications', to: '/certifications/cisco' },
            { label: 'GitHub', href: 'https://github.com/BartoszOsiej/teleinformatyka-wikipedia' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bartosz Osiej.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'python', 'rust'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
