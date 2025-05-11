import Input from './TextInput.vue';
import BaseIcon from '../BaseIcon/BaseIcon.vue';
import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Input> = {
  title: 'UI/TextInput',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Label du champ' },
    hint: { control: 'text', description: 'Texte d’aide ou d’erreur' },
    disabled: { control: 'boolean', description: 'Champ désactivé' },
    error: { control: 'boolean', description: 'Champ en erreur' },
    text: { control: 'text', description: 'Valeur du champ (v-model)' }
  },
  args: {
    label: 'Adresse email',
    hint: '',
    disabled: false,
    error: false,
    text: ''
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const text = ref(args.text);
      return { args, text };
    },
    template: `
      <Input v-bind="args" v-model:text="text" />
      <div style="margin-top: 1rem; font-size: 0.9rem;">
        Valeur : <b>{{ text }}</b>
      </div>
    `
  })
};

export const WithLeftIcon: Story = {
  render: (args) => ({
    components: { Input, BaseIcon },
    setup() {
      const text = ref(args.text);
      return { args, text };
    },
    template: `
      <Input v-bind="args" v-model:text="text">
        <template #iconLeft>
          <BaseIcon iconName="user" />
        </template>
      </Input>
    `
  })
};

export const WithRightIcon: Story = {
  render: (args) => ({
    components: { Input, BaseIcon },
    setup() {
      const text = ref(args.text);
      return { args, text };
    },
    template: `
      <Input v-bind="args" v-model:text="text">
        <template #iconRight>
          <BaseIcon iconName="mail" />
        </template>
      </Input>
    `
  })
};

export const ErrorState: Story = {
  args: {
    error: true,
    hint: 'Adresse email invalide'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    hint: 'Ce champ est désactivé'
  }
};
