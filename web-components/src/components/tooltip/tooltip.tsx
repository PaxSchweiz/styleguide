import {Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Prop, State} from '@stencil/core';

@Component({
  tag: 'pax-tooltip',
  styleUrl: 'tooltip.css',
  shadow: true
})
export class Tooltip implements ComponentInterface {

  private tooltipBodyEl: HTMLDivElement;
  private tooltipArrowEl: SVGElement;


  @Element() el!: HTMLElement;

  // STATE ---------------------------------------------------------------------


  @State() isOpen: boolean = false;
  @State() arrowPosition: 'bottomLeft' | 'bottom' | 'topLeft' | 'top' = 'topLeft';


  // PROPERTIES ----------------------------------------------------------------


  /**
   * If set, the tooltip displays a close button.
   */
  @Prop() closable: boolean = false;


  // EVENTS --------------------------------------------------------------------


  /**
   * Gets emitted before the dialog component is opened.
   */
  @Event() beforeOpen: EventEmitter<void>;

  /**
   * Gets emitted after the dialog component is opened.
   */
  @Event() afterOpen: EventEmitter<void>;

  /**
   * Gets emitted before the dialog component is closed.
   */
  @Event() beforeClose: EventEmitter<void>;

  /**
   * Gets emitted after the dialog component is closed.
   */
  @Event() afterClose: EventEmitter<void>;


  // LIFECYCLE -----------------------------------------------------------------


  /**
   * Gets called every time the component is connected to the DOM.
   */
  connectedCallback() {
    this.el.ownerDocument.addEventListener('mousedown', this.onOutsideClick, false);
  }

  /**
   * Gets called just after the components update, but never during the first render.
   */
  componentDidUpdate() {
    if (this.isOpen) {
      this.afterOpen.emit();
    } else {
      this.afterClose.emit();
    }
  }

  /**
   * Gets called every time the component is disconnected from the DOM.
   */
  disconnectedCallback() {
    this.el.ownerDocument.removeEventListener('mousedown', this.onOutsideClick, false);
  }


  // INTERNAL ------------------------------------------------------------------


  private handleTooltipIconClick = () => {
    this.open();
  }

  private handleCloseButtonClick = (e) => {
    this.close();
    e.preventDefault();
    e.stopPropagation();
  }

  private onOutsideClick = (e) => {
    if (this.el.contains(e.target)) return;
    else {
      this.close();
    }
  };

  private open = () => {
    let originY = 'top';
    let originX = 'left';

    const contentEl: HTMLDivElement = this.tooltipBodyEl;
    const contentDimensions: DOMRect = contentEl.getBoundingClientRect();
    const contentWidth: number = contentDimensions.width;
    const contentHeight: number = contentDimensions.height;

    const arrowEl: SVGElement = this.tooltipArrowEl;
    const arrowDimensions: DOMRect = arrowEl.getBoundingClientRect();
    const arrowHeight: number = arrowDimensions.height - 15; // magic number to compensate for svg shadow filter

    const bodyWidth: number = (contentEl.ownerDocument as any).defaultView.innerWidth;
    const bodyHeight: number = (contentEl.ownerDocument as any).defaultView.innerHeight;

    const targetDimensions = this.el.getBoundingClientRect();
    const targetTop: number = targetDimensions.top;
    const targetLeft: number = targetDimensions.left;
    const targetWidth: number = targetDimensions.width;
    const targetHeight: number = targetDimensions.height;

    const tooltipCSS: {top: any, left: any} = {
      top: targetHeight + arrowHeight,
      left: targetWidth / 2
    }

    if (contentWidth + targetLeft + targetWidth > bodyWidth) {
      // we are on the right side of the screen
      tooltipCSS.left = bodyWidth - (contentWidth + targetWidth + targetLeft);
      originX = 'right';
    }

    if (targetTop - (targetHeight + contentHeight) < bodyHeight && targetTop - contentHeight > 0) {
      // we have enough room to diplay the tooltip above the icon
      tooltipCSS.top = 0 - (contentHeight + arrowHeight);
      originY = 'bottom';
    }

    contentEl.style.top = tooltipCSS.top + 'px';
    contentEl.style.left = tooltipCSS.left + 'px';
    contentEl.style.transformOrigin = originY + ' ' + originX;

    if (originY === 'top' && originX === 'right') {
      this.arrowPosition = 'top';
    } else if (originY === 'bottom' && originX === 'left') {
      this.arrowPosition = 'bottomLeft';
    } else if (originY === 'bottom' && originX === 'right') {
      this.arrowPosition = 'bottom';
    } else {
      this.arrowPosition = 'topLeft';
    }

    this.beforeOpen.emit();
    this.isOpen = true;
  }

  private close() {
    this.beforeClose.emit();
    this.isOpen = false;
  }


  // MARKUP --------------------------------------------------------------------


  render() {

    const tooltipIcon = (
      <svg width="16" height="16" viewBox="0 0 16 16">
        <path class="tooltip-icon-bg" d="M8,16H8A8.024,8.024,0,0,1,0,8H0A8.024,8.024,0,0,1,8,0H8a8.024,8.024,0,0,1,8,8h0A8.024,8.024,0,0,1,8,16Z"/>
        <path d="M6.879,9.778l-.015-.393a3.332,3.332,0,0,1,.891-2.372,2.783,2.783,0,0,0,.876-1.571c0-.529-.347-.876-1.1-.907a2.854,2.854,0,0,0-1.5.453L5.52,3.341a5.183,5.183,0,0,1,2.523-.62c1.994,0,2.9,1.1,2.9,2.357A3.757,3.757,0,0,1,9.66,7.617a2.6,2.6,0,0,0-.771,1.888v.272Z"/>
        <path d="M6.569,12.566a1.309,1.309,0,0,1,1.345-1.375,1.313,1.313,0,0,1,1.36,1.375,1.313,1.313,0,0,1-1.36,1.375A1.309,1.309,0,0,1,6.569,12.566Z"/>
      </svg>
    );

    const closeButton = (
      <button class="close-icon" onClick={this.handleCloseButtonClick}>
        <svg width="10.121" height="10.121" viewBox="0 0 10.121 10.121">
          <g transform="translate(1.061 1.061)">
            <path d="M0,0V11.314" transform="translate(8 8) rotate(135)"/>
            <path d="M0,0V11.314" transform="translate(8 0) rotate(45)"/>
          </g>
        </svg>
      </button>
    );

    let arrow: SVGElement;

    const arrowBottomLeft = (
      <svg width="31" height="29" viewBox="0 0 31 29"
           class="arrow-icon"
           ref={(el: SVGElement) => this.tooltipArrowEl = el}
      >
        <defs>
          <filter id="a" x="0" y="0" width="31" height="29" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feFlood flood-color="#393953" flood-opacity="0.4"/>
            <feComposite operator="in" in2="b"/>
            <feComposite in="SourceGraphic"/>
          </filter>
        </defs>
        <g transform="translate(-244 -367)">
          <g transform="matrix(1, 0, 0, 1, 244, 367)" filter="url(#a)">
            <path class="arrow-down-border" d="M9993,2125v-11h13Z" transform="translate(-9984 -2107)" fill="#393953"/>
          </g>
          <path class="arrow-down-bg" d="M9993,2127v-16h15v6h-3Z" transform="translate(-9740 -1743)" fill="#eff3f6"/>
        </g>
      </svg>
    );

    const arrowBottom = (
      <svg width="44" height="30.002" viewBox="0 0 44 30.002"
           class="arrow-icon"
           ref={(el: SVGElement) => this.tooltipArrowEl = el}
      >
        <defs>
          <filter id="a" x="0" y="0" width="44" height="30.002" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feFlood flood-color="#393953" flood-opacity="0.4"/>
            <feComposite operator="in" in2="b"/>
            <feComposite in="SourceGraphic"/>
          </filter>
        </defs>
        <g transform="translate(-274 -365.998)">
          <g transform="matrix(1, 0, 0, 1, 274, 366)" filter="url(#a)">
            <path class="arrow-down-border" d="M9993,2125l-13-12h26Z" transform="translate(-9971 -2106)"/>
          </g>
          <path class="arrow-down-bg" d="M9993,2127l-12-11h-3v-6h30v6h-3Z" transform="translate(-9697 -1743)"/>
        </g>
      </svg>
    );

    const arrowTopLeft = (
      <svg width="31" height="29" viewBox="0 0 31 29"
           class="arrow-icon"
           ref={(el: SVGElement) => this.tooltipArrowEl = el}
      >
        <defs>
          <filter id="a" x="0" y="0" width="31" height="29" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feFlood flood-color="#393953" flood-opacity="0.4"/>
            <feComposite operator="in" in2="b"/>
            <feComposite in="SourceGraphic"/>
          </filter>
        </defs>
        <g transform="translate(9 7)">
          <g transform="matrix(1, 0, 0, 1, -9, -7)" filter="url(#a)">
            <path class="arrow-down-border" d="M9993,2114v11h13Z" transform="translate(-9984 -2107)"/>
          </g>
          <path class="arrow-down-bg" d="M9993,2111v16h15v-6h-3Z" transform="translate(-9993 -2110)"/>
        </g>
      </svg>
    );

    const arrowTop = (
      <svg width="44" height="30.002" viewBox="0 0 44 30.002"
           class="arrow-icon"
           ref={(el: SVGElement) => this.tooltipArrowEl = el}
      >
        <defs>
          <filter id="a" x="0" y="0" width="44" height="30.002" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feFlood flood-color="#393953" flood-opacity="0.4"/>
            <feComposite operator="in" in2="b"/>
            <feComposite in="SourceGraphic"/>
          </filter>
        </defs>
        <g transform="translate(7 7)">
          <g transform="matrix(1, 0, 0, 1, -7, -7)" filter="url(#a)">
            <path class="arrow-down-border" d="M9993,2113l-13,12h26Z" transform="translate(-9971 -2106)"/>
          </g>
          <path class="arrow-down-bg" d="M9993,2110l-12,11h-3v6h30v-6h-3Z" transform="translate(-9978 -2109)"/>
        </g>
      </svg>
    );

    if (this.arrowPosition === 'bottomLeft') {
      arrow = arrowBottomLeft;
    } else if (this.arrowPosition === 'bottom') {
      arrow = arrowBottom;
    } else if (this.arrowPosition === 'topLeft') {
      arrow = arrowTopLeft;
    } else if (this.arrowPosition === 'top') {
      arrow = arrowTop;
    }

    return (
      <Host
        open={this.isOpen}
        onClick={this.handleTooltipIconClick}
      >
        <button class="tooltip-icon">
          {tooltipIcon}
        </button>
        <div
          ref={(el: HTMLDivElement) => this.tooltipBodyEl = el}
          class={{
            'tooltip': true,
            'tooltip-closable': this.closable,
            'tooltip-bottom-left': this.arrowPosition === 'bottomLeft',
            'tooltip-bottom': this.arrowPosition === 'bottom',
            'tooltip-top-left': this.arrowPosition === 'topLeft',
            'tooltip-top': this.arrowPosition === 'top'
          }}
        >
          <div class="tooltip-body">
            <slot/>
          </div>
          {this.closable ? closeButton : null}
        </div>
        {arrow}
      </Host>
    )
  }
}
