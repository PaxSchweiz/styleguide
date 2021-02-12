import mdx from './select.mdx';

export default {
  component: 'pax-select',
  title: 'Components/Select',
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

const Template = () => {
  return `
<pax-select>
  <pax-select-option value="1">Option 1</pax-select-option>
  <pax-select-option value="2" selected>Option 2</pax-select-option>
  <pax-select-option value="3">Option 3</pax-select-option>
</pax-select>
`;
};

export const Select = Template.bind({});

