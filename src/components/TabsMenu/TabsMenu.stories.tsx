import TabsMenu from './TabsMenu.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const defaultTabs = [
  { title: 'Landing', content: 'Landing page' },
  { title: 'Profile', content: 'Profile page' },
  { title: 'Settings', content: 'Settings page' }
];

const meta: Meta<typeof TabsMenu> = {
  title: 'UI/TabsMenu',
  component: TabsMenu,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'object' }
  },
  args: {
    tabs: defaultTabs
  }
};

export default meta;

type Story = StoryObj<typeof TabsMenu>;

export const Default: Story = {
  args: {}
};

export const WithManyTabs: Story = {
  args: {
    tabs: [
      { title: 'Tab 1', content: 'Tab 1 content' },
      { title: 'Tab 2', content: 'Tab 2 content' },
      { title: 'Tab 3', content: 'Tab 3 content' },
      { title: 'Tab 4', content: 'Tab 4 content' },
      { title: 'Tab 5', content: 'Tab 5 content' }
    ]
  }
};

export const CustomContent: Story = {
  args: {
    tabs: [
      { title: 'Présentation', content: 'Custom presentation' },
      { title: 'Code', content: 'Code example' },
      { title: 'Contact', content: 'Contact us' }
    ]
  }
};
