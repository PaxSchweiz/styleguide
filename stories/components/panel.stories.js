import mdx from './panel.mdx';

export default {
  component: 'pax-panel',
  title: 'Components/Panel',
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

const Template = () => {
  return `
<pax-panel>
Meldung
</pax-panel>
`;
};

export const Panel = Template.bind({});

