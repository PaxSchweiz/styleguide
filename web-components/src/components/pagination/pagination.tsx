import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pax-pagination',
  styleUrl: 'pagination.css',
  shadow: true
})
export class Pagination {

  render() {
    return (
      <Host>
       <slot></slot>
      </Host>
    );
  }
}
