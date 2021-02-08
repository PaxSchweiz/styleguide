import mdx from './badge.mdx';

export default {
  component: 'pax-badge',
  title: 'Components/Badge',
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
    }
  }
};

const Template = ({ color }) => {
  return `<pax-badge color=${color}>Pax Badge</pax-badge>`;
};
export const Badge = Template.bind({});
Badge.args = { color: 'success' };