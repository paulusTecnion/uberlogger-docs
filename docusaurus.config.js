// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const { DOCUSAURUS_VERSION } = require("@docusaurus/utils");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Uberlogger docs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.uberlogger.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "paulusTecnion", // Usually your GitHub org/user name.
  projectName: "uberlogger-docs", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs/01-Manual",
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: "./sidebars.js",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "docs/02-API",
        routeBasePath: "api",
        sidebarPath: "./sidebars.js",
        // ... other options
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api", // plugin id
        docsPluginId: "classic", // id of plugin-content-docs or preset for rendering docs
        config: {
          uberlogger: {
            // the <id> referenced when running CLI commands
            specPath: "src/api-src/uberlogger.yaml", // path to OpenAPI spec, URLs supported
            outputDir: "docs/02-API/", // output directory for generated files
          },
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Uberlogger",

        logo: {
          alt: "Uberlogger",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/",
            position: "left",
            label: "Manual",
            activeBaseRegex: "/",
          },
          {
            to: "api",
            position: "left",
            label: "API",
            activeBaseRegex: "/api",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Uberlogger",
            items: [
              {
                label: "Home",
                href: "https://www.uberlogger.com/",
              },
              {
                label: "Support",
                href: "https://www.uberlogger.com/support",
              },
              {
                label: "About",
                href: "https://www.uberlogger.com/about",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Uberlogger. Built with Docusaurus.`,
      },

      prism: {
        theme: null,
        darkTheme: null,
      },
    }),
};

async function createConfig() {
  const lightTheme = (await import("./src/utils/prismLight.mjs")).default;
  const darkTheme = (await import("./src/utils/prismDark.mjs")).default;
  // @ts-expect-error: we know it exists, right
  config.themeConfig.prism.theme = lightTheme;
  // @ts-expect-error: we know it exists, right
  config.themeConfig.prism.darkTheme = darkTheme;
  return config;
}

module.exports = createConfig;
