import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../../../packages/ui/src/components/ui/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    {
      name: "@storybook/addon-mcp",
      options: {
        endpoint: "/mcp",
        toolsets: {
          dev: true,
          docs: true,
          test: true,
        },
      },
    },
  ],
  framework: "@storybook/react-vite",
  features: {
    componentsManifest: true,
  },
};

export default config;
