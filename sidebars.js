/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "Manual" }],
  openApiSidebar: [
    {
      type: "category",
      label: "Uberlogger",
      link: {
        type: "generated-index",
        title: "Uberlogger API",
        description: "This is the Uberlogger API.",
        slug: "/api",
      },
      // @ts-ignore
      items: require("./docs/api/sidebar.js"),
    },
  ],

  // But you can create a sidebar manually

  // tutorialSidebar: [
  //   // {
  //   //   type: "doc",
  //   //   id: "Manual/manual",
  //   //   label: "Introduction",
  //   // },
  //   // {
  //   //   type: "doc",
  //   //   id: "Manual/Firmware-update/index",
  //   //   label: "Firmware update",
  //   // },
  //   {
  //     Introduction: ["Manual/manual"],
  //     Configuration: [
  //       "Manual/Configuration",
  //       "Manual/Configuration/Analog-channels",
  //     ],
  //   },
  // ],
};

module.exports = sidebars;