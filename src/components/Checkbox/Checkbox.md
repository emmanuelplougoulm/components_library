import Checkbox from './Checkbox.vue';
// import BaseIcon from '../BaseIcon/BaseIcon.vue';
import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Checkbox> = {
  title: 'Design system/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', description: 'Texte affiché à droite de la case' }
  },
  args: {
    text: 'Accepter les conditions'
  }
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      // Permet de contrôler l'état depuis Storybook
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

export const Checked: Story = {
  render: (args) => ({
    components: { Checkbox, BaseIcon },
    setup() {
      const checked = ref(true);
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
    text: 'Je veux recevoir la newsletter'
  }
};
