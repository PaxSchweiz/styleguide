import {
  Component,
  h,
  Host
} from '@stencil/core';

@Component({
  tag: 'pax-col',
  styleUrl: 'col.css',
  shadow: true
})
export class Col {

  render() {
    return (
      <Host>
        <slot/>
      </Host>
    );
  }
}
