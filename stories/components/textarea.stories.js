import mdx from './textarea.mdx';

export default {
  component: 'pax-textarea',
  title: 'Components/Textarea',
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

const Template = () => {
  return `
<pax-textarea>
Meldung
</pax-textarea>
`;
};

export const Textarea = Template.bind({});

