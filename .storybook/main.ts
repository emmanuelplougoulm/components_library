import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  async viteFinal(config) {
    return {
      ...config,
      optimizeDeps: {
        include: [...(config.optimizeDeps?.include || []), 'vue', '@storybook/vue3'],
        exclude: [...(config.optimizeDeps?.exclude || []), 'vue-demi']
      }
    };
  }
};

export default config;
