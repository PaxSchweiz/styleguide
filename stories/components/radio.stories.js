import mdx from './radio.mdx';

export default {
  component: 'pax-radio',
  title: 'Components/Radio',
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

const Template = () => {
  return `
<pax-radio>
Meldung
</pax-radio>
`;
};

export const Radio = Template.bind({});

