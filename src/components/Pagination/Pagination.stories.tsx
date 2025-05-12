import Pagination from './Pagination.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    iconOnly: { control: 'boolean' },
    itemsPerPage: {
      control: { type: 'number', min: 1, max: 20 }
    },
    items: {
      control: { type: 'object' }
    }
  },
  args: {
    iconOnly: false,
    items: Array.from({ length: 23 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` })),
    itemsPerPage: 5
  }
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {}
};

// export const IconOnly: Story = {
//   args: {
//     iconOnly: true
//   }
// };

export const ItemsPerPage: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <Pagination v-bind="args" :items-per-page="2" />
        <Pagination v-bind="args" :items-per-page="5" />
        <Pagination v-bind="args" :items-per-page="10" />
      </div>
    `
  })
};

export const ManyPages: Story = {
  args: {
    items: Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` })),
    itemsPerPage: 10
  }
};
