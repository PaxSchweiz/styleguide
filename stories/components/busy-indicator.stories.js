import mdx from './busy-indicator.mdx';

export default {
  component: 'pax-busy-indicator',
  title: 'Components/Busyindicator',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    color: {
      name: 'Color of badge',
      description: 'Available options available to the Badge',
      control: {
        type: 'select',
        options: [
          'success',
          'warning',
          'danger',
          'dark',
          'light',
          'ghost'
        ]
      }
    },
    hidden: {
      name: 'Button mode',
      description: 'Available options available to the Badge',
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template = ({ color, hidden }) => {
  return `<pax-busy-indicator color=${color} ${hidden}>Pax Button</pax-busy-indicator>`;
};

export const Busyindicator = Template.bind({});


