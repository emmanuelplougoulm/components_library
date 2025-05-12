import Dropdown from './Dropdown.vue';
import BaseIcon from '../BaseIcon/BaseIcon.vue';
import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const optionsWithIcons = [
  { name: 'Private', icon: 'lock' },
  { name: 'Unlisted', icon: 'mist' },
  { name: 'Public', icon: 'globe' }
];

const optionsNoIcons = [
  { name: 'Paris', icon: '' },
  { name: 'Berlin', icon: '' },
  { name: 'Tokyo', icon: '' }
];

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text'
    },
    hasIcon: { control: 'boolean' },
    modelValue: { control: 'text' },
    options: { control: 'object' }
  },
  args: {
    placeholder: 'Select an option',
    hasIcon: true,
    options: optionsWithIcons,
    modelValue: ''
  }
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => ({
    components: { Dropdown, BaseIcon },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `
      <Dropdown
        v-bind="args"
        v-model="value"
      />
    `
  })
};

export const WithIcons: Story = {
  args: {
    hasIcon: true,
    options: optionsWithIcons,
    placeholder: 'Select',
    modelValue: ''
  }
};

export const WithoutIcons: Story = {
  args: {
    hasIcon: false,
    options: optionsNoIcons,
    placeholder: 'Choose a city',
    modelValue: ''
  }
};

export const Preselected: Story = {
  args: {
    hasIcon: true,
    options: optionsWithIcons,
    modelValue: 'Private',
    placeholder: 'Select'
  }
};
