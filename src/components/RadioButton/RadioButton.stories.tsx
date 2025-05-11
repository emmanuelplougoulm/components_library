// Radio.stories.ts
import RadioButton from './RadioButton.vue';
import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

// Exemple d’icône SVG inline pour les slots
const DemoIcon = {
  template: `<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="#4f46e5"/></svg>`
};

const meta: Meta<typeof RadioButton> = {
  title: 'UI/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'xxl']
    },
    label: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    },
    selected: {
      control: 'boolean'
    }
  },
  args: {
    size: 'md',
    label: 'Option',
    disabled: false,
    selected: false
  }
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  render: (args) => ({
    components: { RadioButton },
    setup() {
      // Pour la liaison v-model:selected
      const selected = ref(args.selected);
      return { args, selected };
    },
    template: `
      <RadioButton v-bind="args" v-model:selected="selected" />
      <div style="margin-top:1rem;">
        <strong>Selected:</strong> {{ selected ? 'Oui' : 'Non' }}
      </div>
    `
  })
};

export const WithIcons: Story = {
  render: (args) => ({
    components: { RadioButton, DemoIcon },
    setup() {
      const selected = ref(args.selected);
      return { args, selected };
    },
    template: `
      <RadioButton v-bind="args" v-model:selected="selected">
        <template #iconLeft><DemoIcon /></template>
        <template #iconRight><DemoIcon /></template>
      </Radio>
    `
  }),
  args: {
    label: 'Avec icônes'
  }
};

export const IconOnly: Story = {
  render: (args) => ({
    components: { RadioButton, DemoIcon },
    setup() {
      const selected = ref(args.selected);
      return { args, selected };
    },
    template: `
      <Radio v-bind="args" v-model:selected="selected">
        <template #iconOnly><DemoIcon /></template>
      </Radio>
    `
  }),
  args: {
    label: '',
    size: 'lg'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Désactivé'
  }
};
