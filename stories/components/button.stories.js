import mdx from './button.mdx';

export default {
  component: 'pax-button',
  title: 'Components/Button',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    fill: {
      name: 'Button style',
      control: {
        type: 'select',
        options: ['clear', 'outline']
      }
    },
    mode: {
      name: 'Button mode',
      description: 'Available options available to the Badge',
      control: {
        type: 'select',
        options: ['dark', 'light']
      },
    }
  }
};

const Template = ({ mode, fill }) => {
  return `<pax-button mode=${mode} fill=${fill}>Pax Button</pax-button>`;
};

export const Button = Template.bind({});
Button.parameters = {
  actions: {
    handles: ['click', 'contextmenu', { clearOnStoryChange: false }],
  },
};


