import mdx from './card.mdx';

export default {
  component: 'pax-card',
  title: 'Components/Card',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    header: {
      name: 'Header of card',
      control: {
        type: 'string'
      }
    },
    border: {
      name: 'Border of card',
      description: 'Define the border color of the card',
      control: {
        type: 'select',
        options:  ['success', 'warning', 'danger', 'dark', 'light', 'ghost']
      },
    }
  }
};

const Template = ({ header, border }) => {
  return `<pax-card border=${border} header=${header}>Pax Card</pax-card>`;
};

export const Card = Template.bind({});
