// .storybook/main.js or .storybook/main.ts
const path = require("path");
module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@lib": path.resolve(__dirname, "../src/lib"),
    };
    return config;
  },
};
