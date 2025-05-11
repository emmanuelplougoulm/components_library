import BaseIcon from './BaseIcon.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof BaseIcon> = {
  title: 'Components/Icon',
  component: BaseIcon,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: { type: 'select' },
      options: ['home', 'search', 'user', 'settings', 'alert'],
      description: 'Nom de l’icône à afficher'
    }
  },
  args: {
    iconName: 'home'
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
      const icons = ['home', 'search', 'user', 'settings', 'alert'];
      return { args, icons };
    },
    template: `
      <div style="display: flex; gap: 1.5rem; align-items: center;">
        <div v-for="icon in icons" :key="icon" style="display: flex; flex-direction: column; align-items: center;">
          <Icon :iconName="icon" class="icon-demo" />
          <span style="font-size: 0.8rem; margin-top: 0.25rem;">{{ icon }}</span>
        </div>
      </div>
    `
  })
};
