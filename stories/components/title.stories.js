import mdx from './title.mdx';

export default {
  component: 'pax-title',
  title: 'Components/Title',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    level: {
      name: 'Title level',
      control: {
        type: 'select',
        options: ['1', '2']
      }
    }
  }
};

const Template = ({ level }) => {
  return `<pax-title level=${level}>Pax Title</pax-title>`;
};

export const Title = Template.bind({});
Title.args = { level: '1' };

