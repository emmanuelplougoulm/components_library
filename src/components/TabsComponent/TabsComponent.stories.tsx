import TabsComponent from './TabsComponent.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const defaultTabs = [
  { title: 'Landing', content: 'Welcome to the landing page' },
  { title: 'Profile', content: 'Profile infos' },
  { title: 'Settings', content: 'Update settings' }
];

const meta: Meta<typeof TabsComponent> = {
  title: 'UI/TabsComponent',
  component: TabsComponent,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'object' }
  },
  args: {
    tabs: defaultTabs
  }
};

export default meta;

type Story = StoryObj<typeof TabsComponent>;

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
      { title: 'Presentation', content: 'Custom presentation' },
      { title: 'Code', content: '``````' },
      { title: 'Contact', content: 'Contact us' }
    ]
  }
};
