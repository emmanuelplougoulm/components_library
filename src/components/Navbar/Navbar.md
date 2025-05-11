import Navbar from './Navbar.vue';
import Button from '../Button/Button.vue';
// Les imports SVG sont gérés dans le composant, inutile de les importer ici
import type { Meta, StoryObj } from '@storybook/vue3';

const links = [
  { label: 'Features', path: '/features', size: 'md', variant: 'link-gray' },
  { label: 'Pricing', path: '/pricing', size: 'md', variant: 'link-gray' },
  { label: 'Docs', path: '/docs', size: 'md', variant: 'link-gray' }
];

const ctaButtons = [
  { label: 'Sign Up', path: '/signup', size: 'md', variant: 'primary' },
  { label: 'Sign In', path: '/signin', size: 'md', variant: 'secondary' }
];

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    links: { control: 'object', description: 'Liens de navigation' },
    ctaButtons: { control: 'object', description: 'Boutons call-to-action' }
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
