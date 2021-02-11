import mdx from './dialog.mdx';

export default {
  component: 'pax-dialog',
  title: 'Components/Dialog',
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

const Template = () => {
  return `<pax-dialog></pax-dialog>`;
};

export const Dialog = Template.bind({});

