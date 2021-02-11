import mdx from './checkbox.mdx';

export default {
  component: 'pax-checkbox',
  title: 'Components/Checkbox',
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

const Template = () => {
  return `<pax-checkbox></pax-checkbox> <pax-checkbox icon="switch"></pax-checkbox>`;
};

export const Checkbox = Template.bind({});

