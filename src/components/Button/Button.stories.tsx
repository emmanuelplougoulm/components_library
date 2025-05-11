import Button from './Button.vue';
import BaseIcon from '../BaseIcon/BaseIcon.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const variants = [
  'primary',
  'secondary',
  'tertiary',
  'link-color',
  'link-gray',
  'destructive'
];

const sizes = ['md', 'lg', 'xl', 'xxl'];

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: variants },
    size: { control: 'select', options: sizes },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' }
  },
  args: {
    label: 'Bouton',
    variant: 'primary',
    size: 'md',
    disabled: false
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {}
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Variants: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args, variants };
    },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <Button
          v-for="variant in variants"
          :key="variant"
          v-bind="args"
          :variant="variant"
          :label="variant.charAt(0).toUpperCase() + variant.slice(1)"
        />
      </div>
    `
  })
};

export const Sizes: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args, sizes };
    },
    template: `
      <div style="display: flex; gap: 1rem;">
        <Button
          v-for="size in sizes"
          :key="size"
          v-bind="args"
          :size="size"
          :label="size.toUpperCase()"
        />
      </div>
    `
  })
};

/*TODO: fix le display de l'icone*/
// export const WithIcons: Story = {
//   render: (args) => ({
//     components: { Button, BaseIcon },
//     setup() {
//       return { args };
//     },
//     template: `
//       <div style="display: flex; flex-direction: column; gap: 1rem;">
//         <Button v-bind="args" label="Icone gauche">
//           <template #iconLeft>
//             <BaseIcon iconName="email" />
//           </template>
//         </Button>
//         <Button v-bind="args" label="Icone droite">
//           <template #iconRight>
//             <BaseIcon iconName="email" />
//           </template>
//         </Button>
//         <Button v-bind="args">
//           <template #iconOnly>
//             <BaseIcon iconName="email" />
//           </template>
//         </Button>
//       </div>
//     `
//   })
// };
