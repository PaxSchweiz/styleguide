import {Component, h, Host} from '@stencil/core';

@Component({
  tag: 'pax-grid',
  styleUrl: 'grid.css',
  shadow: true
})

export class Grid {
  render() {
    return (
      <Host>
        <slot/>
      </Host>
    )
  }
}
