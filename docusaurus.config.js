// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AbandonAI',
  tagline: '"Abandon yourself to a life of pleasure."',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.abandon.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'AbandonAI', // Usually your GitHub org/user name.
  // projectName: 'abandonai-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-DWH7P05G35',
          anonymizeIP: true,
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AbandonAI',
        logo: {
          alt: 'AbandonAI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: "Product",
            type: "dropdown",
            items: [
              {
                label: "AbandonAI",
                to: "/abandonai"
              },
              {
                label: "ChatGPT",
                href: "https://chat.abandon.ai/"
              }
            ]
          },
          {
            label: "Resources",
            type: "dropdown",
            items: [
              {to: '/resources', label: 'Resources library'},
              {to: '/blog', label: 'Blog'},
            ]
          },
          {
            label: 'Support',
            position: 'left',
            items: [
              {
                to: "/docs",
                label: "Support hub",
              },
              {
                to: "/community",
                label: "Community",
              },
              {
                label: "Talk to support",
                href: "mailto:support@abandon.ai",
              }
            ]
          },
          {to: '/pricing', label: 'Pricing', position: 'left'},
          // {
          //   type: 'search',
          //   position: 'right',
          // },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //       'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
    },
  
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ]
};

module.exports = config;
