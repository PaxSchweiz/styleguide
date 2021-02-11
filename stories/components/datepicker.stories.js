import mdx from './datepicker.mdx';

export default {
  component: 'pax-datepicker',
  title: 'Components/Datepicker',
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

const Template = () => {
  return `<pax-datepicker></pax-datepicker>`;
};

export const Datepicker = Template.bind({});

