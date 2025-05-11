import Toast from './Toast.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
      description: 'Type de toast'
    },
    label: {
      control: 'text',
      description: 'Message du toast'
    }
  },
  args: {
    status: 'success',
    label: 'Opération réussie !'
  }
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    status: 'success',
    label: 'Opération réussie !'
  }
};

export const Error: Story = {
  args: {
    status: 'error',
    label: 'Une erreur est survenue.'
  }
};

export const Warning: Story = {
  args: {
    status: 'warning',
    label: 'Attention, vérifiez votre saisie.'
  }
};

export const Info: Story = {
  args: {
    status: 'info',
    label: 'Voici une information.'
  }
};
