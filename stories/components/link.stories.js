import mdx from './link.mdx';

export default {
  component: 'pax-link',
  title: 'Components/Link',
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

const Template = () => {
  return `<pax-link href="https://www.pax.ch">Meine Adresse</pax-link>`;
};

export const link = Template.bind({});

