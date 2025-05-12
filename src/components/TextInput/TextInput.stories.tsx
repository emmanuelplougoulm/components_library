import TextInput from './TextInput.vue';
import BaseIcon from '../BaseIcon/BaseIcon.vue';
import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof TextInput> = {
  title: 'UI/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    text: { control: 'text' }
  },
  args: {
    label: 'Email address',
    hint: '',
    disabled: false,
    error: false,
    text: ''
  }
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: (args) => ({
    components: { TextInput },
    setup() {
      const text = ref(args.text);
      return { args, text };
    },
    template: `
      <TextInput v-bind="args" v-model:text="text" />
    `
  })
};

export const WithLeftIcon: Story = {
  render: (args) => ({
    components: { TextInput, BaseIcon },
    setup() {
      const text = ref(args.text);
      return { args, text };
    },
    template: `
      <TextInput v-bind="args" v-model:text="text">
        <template #iconLeft>
          <BaseIcon iconName="user" />
        </template>
      </TextInput>
    `
  })
};

export const WithRightIcon: Story = {
  render: (args) => ({
    components: { TextInput, BaseIcon },
    setup() {
      const text = ref(args.text);
      return { args, text };
    },
    template: `
      <TextInput v-bind="args" v-model:text="text">
        <template #iconRight>
          <BaseIcon iconName="mail" />
        </template>
      </TextInput>
    `
  })
};

export const ErrorState: Story = {
  args: {
    error: true,
    hint: 'Invalid email'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    hint: 'Deactivated field'
  }
};
