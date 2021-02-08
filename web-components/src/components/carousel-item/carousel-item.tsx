import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pax-carousel-item',
  styleUrl: 'carousel-item.css',
  shadow: true
})
export class CarouselItem {

  render() {
    return (
      <Host class="swiper-slide">
        <slot></slot>
      </Host>
    );
  }
}
