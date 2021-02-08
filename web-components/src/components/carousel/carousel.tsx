import {Component, Host, h} from '@stencil/core';

import {Swiper} from "../../../node_modules/swiper/js/swiper.esm";

@Component({
  tag: 'pax-carousel',
  styleUrl: 'carousel.css'
})
export class Carousel {

  private carouselId: string = `pax-carousel-${carouselIds++}`;
  private swiperInstance: Swiper;
  private swiperContainerElement?: HTMLDivElement;
  private swiperOptions = {
    navigation: {
      nextEl: '.swiper-button-next-' + this.carouselId,
      prevEl: '.swiper-button-prev-' + this.carouselId,
    }
  }


  // LIFECYCLE -----------------------------------------------------------------


  componentDidRender() {
    this.swiperInstance = new Swiper(this.swiperContainerElement, this.swiperOptions);
  }


  // INTERNAL ------------------------------------------------------------------


  private handlePrevClick = () => {
    this.swiperInstance.slidePrev();
  }

  private handleNextClick = () => {
    this.swiperInstance.slideNext();
  }


  // MARKUP --------------------------------------------------------------------


  render() {
    let arrowPrev = (
      <svg viewBox="0 0 16 29.644">
        <path d="M.342 15.655L13.986 29.3a1.18 1.18 0 001.669-1.67L2.849 14.824 15.656 2.018A1.184 1.184 0 0014.824 0a1.163 1.163 0 00-.832.349L.352 13.99a1.174 1.174 0 00-.01 1.666z"/>
      </svg>
    );

    let arrowNext = (
      <svg viewBox="0 0 16 29.644">
        <path d="M15.658 13.989L7.717 6.044l-5.7-5.7a1.182 1.182 0 00-1.672 1.67L13.151 14.82.344 27.626a1.184 1.184 0 00.832 2.018 1.163 1.163 0 00.832-.349l13.64-13.641a1.174 1.174 0 00.01-1.666z"/>
      </svg>
    );

    return (
      <Host>
        <div ref={element => this.swiperContainerElement = element as HTMLDivElement} class="swiper-container" id={this.carouselId}>
          <div class="swiper-wrapper">
            <slot></slot>
          </div>
        </div>
        <div
          class={{
            [`swiper-button-prev`]: true,
            [`swiper-button-prev-${this.carouselId}`]: true
          }}
          onClick={this.handlePrevClick}
        >
          {arrowPrev}
        </div>
        <div
          class={{
            [`swiper-button-next`]: true,
            [`swiper-button-next-${this.carouselId}`]: true
          }}
          onClick={this.handleNextClick}
        >
          {arrowNext}
        </div>
      </Host>
    );
  }
}

let carouselIds: number = 0;
