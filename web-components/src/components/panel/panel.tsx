import {Component, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'pax-panel',
  styleUrl: 'panel.css',
  shadow: true
})
export class Panel {

  /**
   * If `true`, the panel is expanded.
   * @type {boolean}
   */
  @Prop({mutable: true}) open: boolean = false;

  /**
   * Handles clicks on the panel header.
   * @return {boolean}
   */
  onHeaderClick(): boolean {
    return this.open = !this.open;
  }

  render() {
    return (
      <Host
        class={{
          'panel-opened': this.open
        }}
      >
        <div class="panel-header" onClick={() => this.onHeaderClick()}>
          <div class="panel-icon">
            <svg viewBox="0 0 7.33 13">
              <path d="M7.132,5.957a.477.477,0,0,0-.04-.048L1.4.22A.827.827,0,0,0,.233.266.834.834,0,0,0,.242,1.4L5.334,6.494.241,11.586a.827.827,0,1,0,1.169,1.17L7.086,7.079a.824.824,0,0,0,.045-1.122Z"/>
            </svg>
          </div>
          <slot name="header"/>
        </div>
        <div class="panel-body">
          <slot/>
        </div>
      </Host>
    )
  }
}
