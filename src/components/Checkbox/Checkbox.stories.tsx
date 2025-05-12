import Checkbox from './Checkbox.vue';
import BaseIcon from '../BaseIcon/BaseIcon.vue';
import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' }
  },
  args: {
    text: 'Accept conditions'
  }
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false);
      const handleClick = () => {
        checked.value = !checked.value;
      };
      return { args, checked, handleClick };
    },
    template: `
      <Checkbox v-bind="args" @click="handleClick" />
    `
  })
};

export const WithCustomText: Story = {
  args: {
    text: 'Subscribe to newsletter'
  }
};
