import mdx from './tooltip.mdx';

export default {
  component: 'pax-tooltip',
  title: 'Components/Tooltip',
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

const Template = () => {
  return `
<pax-tooltip>
Meldung
</pax-tooltip>
`;
};

export const Tooltip = Template.bind({});

