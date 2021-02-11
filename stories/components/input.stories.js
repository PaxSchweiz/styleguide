import mdx from './input.mdx';

export default {
  component: 'pax-input',
  title: 'Components/Input',
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

const Template = () => {
  return `<pax-input></pax-input>`;
};

export const Input = Template.bind({});

