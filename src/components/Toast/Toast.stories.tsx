import Toast from './Toast.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Toast> = {
  title: 'UI/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info']
    },
    label: {
      control: 'text'
    }
  },
  args: {
    status: 'success',
    label: 'Successfull action!'
  }
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    status: 'success',
    label: 'Successfull action!'
  }
};

export const Error: Story = {
  args: {
    status: 'error',
    label: 'Something wrong occured'
  }
};

export const Warning: Story = {
  args: {
    status: 'warning',
    label: 'Watch out, double check your input'
  }
};

export const Info: Story = {
  args: {
    status: 'info',
    label: 'This is an information'
  }
};
