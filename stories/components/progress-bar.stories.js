import mdx from './progress-bar.mdx';

export default {
  component: 'pax-panel',
  title: 'Components/Progress Bar',
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

const Template = () => {
  return `
<pax-progress-bar>
Meldung
</pax-progress-bar>
`;
};

export const ProgressBar = Template.bind({});

