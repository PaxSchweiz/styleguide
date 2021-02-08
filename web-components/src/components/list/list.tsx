import {Component, ComponentInterface, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'pax-list',
  styleUrl: 'list.css'
})
export class List implements ComponentInterface {

  /**
   * If set, the list component gets displayed with a padding.
   * @type {boolean}
   */
  @Prop() inset: boolean = false;

  /**
   * If set, the list component gets displayed with lines separating each row. Has no effect when `inline` is also set.
   * @type {boolean}
   */
  @Prop() lines: boolean = false;

  /**
   * If set, the list component will displayed in an inline layout.
   * @type {boolean}
   */
  @Prop() inline: boolean = false;

  render() {
    return (
      <Host
        class={{
          ['list-inset']: this.inset,
          ['list-lines']: this.lines && !this.inline,
          ['list-inline']: this.inline
        }}
      >
      </Host>
    );
  }

}
