import mdx from './carousel.mdx';

export default {
  component: 'pax-carousel',
  title: 'Components/Carousel',
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

const Template = () => {
  return `<pax-carousel>            <pax-carousel-item>
                <img src="http://placehold.it/1024x400" alt="Slide 1"/>
            </pax-carousel-item>
</pax-carousel>`;
};

export const Carousel = Template.bind({});

