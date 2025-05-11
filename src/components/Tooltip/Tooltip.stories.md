import Switch from './Switch.vue';
import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
      description: 'Taille du switch'
    },
    checked: { control: 'boolean', description: 'État activé/désactivé' },
    disabled: { control: 'boolean', description: 'Désactive le switch' }
  },
  args: {
    size: 'md',
    checked: false,
    disabled: false
  }
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      const checked = ref(args.checked);
      const disabled = ref(args.disabled);
      return { args, checked, disabled };
    },
    template: `
      <Switch v-bind="args" v-model:checked="checked" v-model:disabled="disabled" />
      <div style="margin-top: 1rem; font-size: 0.9rem;">
        État : <b>{{ checked ? 'activé' : 'désactivé' }}</b>
      </div>
    `
  })
};

export const Small: Story = {
  args: {
    size: 'sm'
  }
};

export const Checked: Story = {
  args: {
    checked: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
