import mdx from './label.mdx';

export default {
  component: 'pax-label',
  title: 'Components/Label',
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

const Template = () => {
  return `<pax-label></pax-label>`;
};

export const Label = Template.bind({});

