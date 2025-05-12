import Toggle from './Toggle.vue';
import { ref, watch } from 'vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md']
    },
    checked: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
};

export default meta;

const Template = (args: any) => ({
  components: { Toggle },
  setup() {
    const checked = ref(args.checked);
    const disabled = ref(args.disabled);

    watch(
      () => args.checked,
      (val) => (checked.value = val)
    );
    watch(
      () => args.disabled,
      (val) => (disabled.value = val)
    );

    return { args, checked, disabled };
  },
  template: `
    <Toggle
      v-model:checked="checked"
      v-model:disabled="disabled"
      :size="args.size"
    />
  `
});

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  checked: false,
  disabled: false
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  checked: true,
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'md',
  checked: false,
  disabled: true
};
