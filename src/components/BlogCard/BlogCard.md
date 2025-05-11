import BlogCard from './BlogCard.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof BlogCard> = {
  title: 'Marketing/BlogCard',
  component: BlogCard,
  tags: ['autodocs'],
  argTypes: {
    badgeStatus: {
      control: { type: 'select' },
      options: ['neutral', 'success', 'error', 'warning', 'brand']
    },
    image: {
      control: { type: 'text' }
    },
    btnFn: {
      action: 'buttonClicked'
    }
  },
  args: {
    badgeStatus: 'neutral',
    badgeLabel: 'Category',
    image: 'https://picsum.photos/400/300',
    title: 'Blog Post Title',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    btnLabel: 'Read more'
  }
};

export default meta;

type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => ({
    components: { BlogCard },
    setup() {
      const variants = [
        { badgeStatus: 'neutral', title: 'Neutral Post' },
        { badgeStatus: 'success', title: 'Success Post' },
        { badgeStatus: 'error', title: 'Error Post' },
        { badgeStatus: 'warning', title: 'Warning Post' },
        { badgeStatus: 'brand', title: 'Brand Post' }
      ];

      return { variants };
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 2rem; padding: 2rem;">
        <BlogCard
          v-for="(variant, index) in variants"
          :key="index"
          :badgeStatus="variant.badgeStatus"
          badgeLabel="Category"
          :title="variant.title"
          image="https://picsum.photos/400/300"
          excerpt="This is a sample blog post excerpt that demonstrates different status variants."
          btnLabel="Read more"
        />
      </div>
    `
  })
};

export const WithLongContent: Story = {
  args: {
    title: 'Very Long Blog Post Title That Should Be Truncated With Ellipsis',
    excerpt:
      'This is a very long excerpt that should demonstrate how the component handles overflow text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
};
