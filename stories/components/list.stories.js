import mdx from './list.mdx';

export default {
  component: 'pax-list',
  title: 'Components/List',
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

const Template = () => {
  return `
<pax-list>
    <pax-item>Just my luck, no ice.</pax-item>
    <pax-item>Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? <b slot="end">Lorem ipsum</b></pax-item>
    <pax-item>I gave it a cold? I gave it a virus. A computer virus.<b slot="end">Lorem ipsum</b></pax-item>
</pax-list>
`;
};

export const List = Template.bind({});

