import Tooltip from './Tooltip.vue';

export default {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      defaultValue: 'Tooltip'
    },
    visible: {
      control: 'boolean',
      defaultValue: true
    },
    position: {
      control: { type: 'select' },
      options: [
        'none',
        'top-start',
        'top-center',
        'top-end',
        'right',
        'left',
        'bottom-start',
        'bottom-center',
        'bottom-end'
      ],
      defaultValue: 'top-center'
    }
  }
};

const Template = (args: any) => ({
  components: { Tooltip },
  setup() {
    return { args };
  },
  template: `
    <div style="margin: 80px; display: flex; flex-direction: column; align-items: center;">
      <Tooltip v-bind="args" />
    </div>
  `
});

export const Playground = Template.bind({});
Playground.args = {
  text: 'Tooltip !',
  visible: true,
  position: 'top-center'
};

export const AllPositions = () => ({
  components: { Tooltip },
  data() {
    return {
      positions: [
        'top-start',
        'top-center',
        'top-end',
        'right',
        'left',
        'bottom-start',
        'bottom-center',
        'bottom-end'
      ]
    };
  },
  template: `
    <div style="display: flex; flex-wrap: wrap; gap: 32px;">
      <div v-for="pos in positions" :key="pos" style="display: flex; flex-direction: column; align-items: center;">
        <span style="margin-bottom: 12px;">{{ pos }}</span>
        <Tooltip :text="pos" :visible="true" :position="pos" />
      </div>
    </div>
  `
});
