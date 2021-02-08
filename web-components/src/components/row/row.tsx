import {Component, h, Host} from '@stencil/core';

@Component({
  tag: 'pax-row',
  styleUrl: 'row.css',
  shadow: true
})

export class Row {
  render() {
    return (
      <Host class="row">
        <slot/>
      </Host>
    )
  }
}
