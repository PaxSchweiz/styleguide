import {Component, ComponentInterface, Element, h, Prop} from '@stencil/core';
import {hostContext} from "../../utils/helpers";

@Component({
  tag: 'pax-link',
  styleUrl: './link.css',
  shadow: true
})
export class Link implements ComponentInterface {


  @Element() el!: HTMLElement;


  // PROPERTIES ----------------------------------------------------------------


  /**
   * If set, the user cannot interact with the link component.
   * @type {boolean}
   */
  @Prop() disabled: boolean;

  /**
   * If set, the link component gets displayed emphasized.
   * @type {boolean}
   */
  @Prop() emphasized: boolean;

  /**
   * If set, the link component gets displayed muted.
   * @type {boolean}
   */
  @Prop() muted: boolean;

  /**
   * The `href` value of the native anchor element. This is only used when the
   * link component is not disabled.
   */
  @Prop() href: string;

  /**
   * The `target` value of the native anchor element. This is only used when the
   * link component has a a `href` value and is not disabled.
   */
  @Prop() target: string;


  // MARKUP --------------------------------------------------------------------


  render() {
    const TagType = this.href === undefined || this.disabled ? 'span' : 'a' as any;
    let svg: string;

    if (!this.disabled) {
      svg = (
        <svg class="icon-chevron" viewBox="0 0 5.88 9">
          <path d="M5.88,4.51,2.37,9H0L3.48,4.51,0,0H2.37Z"/>
        </svg>
      );
    }

    return (
      <TagType
        class={{
          'in-pagination': hostContext('pax-pagination', this.el),
          'in-tooltip': hostContext('pax-tooltip', this.el),
          'disabled': this.disabled,
          'emphasized': this.emphasized,
          'muted': this.muted
        }}
        href={this.href && !this.disabled ? this.href : undefined}
        target={this.href && this.target && !this.disabled ? this.target : undefined}
      >
        {svg}
        <span class="label"><slot/></span>
      </TagType>
    );
  }

}
