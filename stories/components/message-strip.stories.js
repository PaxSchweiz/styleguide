import mdx from './message-strip.mdx';

export default {
  component: 'pax-message-strip',
  title: 'Components/Message Strip',
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

const Template = () => {
  return `
<pax-message-strip>
Meldung
</pax-message-strip>
`;
};

export const MessageStrip = Template.bind({});

