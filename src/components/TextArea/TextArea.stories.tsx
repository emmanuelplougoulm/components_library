import TextArea from './TextArea.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, watch } from 'vue';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    initialValue: { control: 'text' },
    errorMessage: {
      control: 'text',
      if: { arg: 'error' }
    }
  },
  args: {
    label: 'Description',
    placeholder: 'Écrivez votre texte ici...',
    errorMessage: 'Ce champ est obligatoire',
    disabled: false,
    error: false,
    initialValue: ''
  }
};

export default meta;

type Story = StoryObj<typeof TextArea>;

const Template: Story = {
  render: (args) => ({
    components: { TextArea },
    setup() {
      const text = ref(args.initialValue);
      watch(
        () => args.initialValue,
        (newVal) => {
          text.value = newVal;
        }
      );
      return { args, text };
    },
    template: `
      <TextArea 
        v-bind="args"
        v-model:text="text"
      />
    `
  })
};

export const Default: Story = {
  ...Template,
  args: {}
};

export const ErrorState: Story = {
  ...Template,
  args: {
    error: true
  }
};

export const Disabled: Story = {
  ...Template,
  args: {
    disabled: true
  }
};

export const CharacterLimitExceeded: Story = {
  ...Template,
  args: {
    initialValue: 'A'.repeat(501) // Déclenche la limite
  }
};
