import mdx from './headline.mdx';

export default {
  component: 'pax-headline',
  title: 'Components/Headline',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    level: {
      name: 'Headline level',
      control: {
        type: 'select',
        options: ['1', '2', '3', '4', '5', '6']
      }
    }
  }
};

const Template = ({ level }) => {
  return `<pax-headline level=${level}>Pax Headline</pax-headline>`;
};

export const Headline = Template.bind({});
Headline.args = { level: '1' };

