import BaseIcon from './BaseIcon.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const iconModules = import.meta.glob('../../icons/*.svg');

const iconNames = Object.keys(iconModules)
  .map((path) => path.match(/\/([^/]+)\.svg$/)?.[1] ?? '')
  .filter(Boolean);

const meta: Meta<typeof BaseIcon> = {
  title: 'UI/BaseIcon',
  component: BaseIcon,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: { type: 'select' },
      options: iconNames
    }
  },
  args: {
    iconName: iconNames[1] || ''
  }
};

export default meta;

type Story = StoryObj<typeof BaseIcon>;

export const Default: Story = {
  args: {}
};

export const AllIcons: Story = {
  render: (args) => ({
    components: { BaseIcon },
    setup() {
      return { args, iconNames };
    },
    template: `
      <div style="display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap;">
        <div v-for="icon in iconNames" :key="icon" style="text-align: center;">
          <BaseIcon :iconName="icon" />
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">{{ icon }}</div>
        </div>
      </div>
    `
  })
};
