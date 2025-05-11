import Badge from './Badge.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Le texte du badge' },
    color: {
      control: { type: 'select' },
      options: ['neutral', 'success', 'error', 'warning', 'brand'],
      description: 'Couleur du badge'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Taille du badge'
    }
  },
  args: {
    label: 'Badge',
    color: 'neutral',
    size: 'md'
  }
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {}
};

export const Colors: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 1rem;">
        <Badge v-for="color in ['neutral', 'success', 'error', 'warning', 'brand']"
               :key="color"
               v-bind="args"
               :color="color"
               :label="color.charAt(0).toUpperCase() + color.slice(1)" />
      </div>
    `
  })
};

export const Sizes: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 1rem;">
        <Badge v-for="size in ['sm', 'md', 'lg']"
               :key="size"
               v-bind="args"
               :size="size"
               :label="size.toUpperCase()" />
      </div>
    `
  })
};
