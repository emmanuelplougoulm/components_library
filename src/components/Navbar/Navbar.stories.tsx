import Navbar from './Navbar.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { type TLink, type TCtaButton } from '../../custom-types/types';

const links: TLink[] = [
  { label: 'Features', path: '/features', size: 'md', variant: 'link-gray' },
  { label: 'Pricing', path: '/pricing', size: 'md', variant: 'link-gray' },
  { label: 'Docs', path: '/docs', size: 'md', variant: 'link-gray' }
];

const ctaButtons: TCtaButton[] = [
  { label: 'Sign Up', path: '/signup', size: 'md', variant: 'primary' },
  { label: 'Sign In', path: '/signin', size: 'md', variant: 'secondary' }
];

const meta: Meta<typeof Navbar> = {
  title: 'UI/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    links: { control: 'object' },
    ctaButtons: { control: 'object' }
  },
  args: {
    links,
    ctaButtons
  }
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {}
};

export const CustomLinks: Story = {
  args: {
    links: [
      { label: 'Home', path: '/', size: 'md', variant: 'link-gray' },
      { label: 'Blog', path: '/blog', size: 'md', variant: 'link-gray' }
    ],
    ctaButtons: [{ label: 'Contact', path: '/contact', size: 'md', variant: 'primary' }]
  }
};
