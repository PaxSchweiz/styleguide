import {Component, Element, Event, EventEmitter, h, Host, Prop} from '@stencil/core';
import {StyleEventDetail} from '../../interface';
import {hostContext} from '../../utils/helpers';

@Component({
  tag: 'pax-label',
  styleUrl: 'label.css',
  scoped: true // because that way it can be used in a form without any hassle
})
export class Label {

  @Element() el!: HTMLElement;


  // PROPERTIES ----------------------------------------------------------------


  /**
   * The id of of the element that this label should be linked to.
   * @type {string}
   */
  @Prop() for?: string;

  /**
   * The position determines where and how the label behaves inside an item.
   */
  @Prop() position?: 'floating';

  /**
   * If set, the label component wraps other wise it gets clipped with '...'
   * when there is no space left.
   * @type {boolean}
   */
  @Prop() wrap?: boolean;

  /**
   * If set, the label component gets marked as required.
   * @type {boolean}
   */
  @Prop() required?: boolean;

  /**
   * The suffix that should be displayed when used in combination with an input component.
   * @type {string}
   */
  @Prop() suffix?: string = 'optional';


  // EVENTS --------------------------------------------------------------------


  /**
   * Gets emitted when the styles change.
   */
  @Event() paxStyle!: EventEmitter<StyleEventDetail>;


  // LIFECYCLE -----------------------------------------------------------------


  /**
   * Gets called every time the component is connected to the DOM.
   */
  connectedCallback() {
    this.emitStyle();
  }


  // INTERNAL ------------------------------------------------------------------


  private emitStyle() {
    const position = this.position;
    this.paxStyle.emit({
      'label': true,
      [`label-${position}`]: position !== undefined
    });
  }


  /**
   * When the label is clicked it tries to focus the input of the element with
   * the id that matches the value of the for property.
   */
  onClick() {
    if (this.for) {
      (async () => {
        await customElements.whenDefined('pax-input');
        await customElements.whenDefined('pax-textarea');
        await customElements.whenDefined('pax-select');
        await customElements.whenDefined('pax-datepicker');
        const el: HTMLPaxInputElement | HTMLPaxTextareaElement | HTMLPaxSelectElement | HTMLPaxDatepickerElement = document.getElementById(this.for) as HTMLPaxInputElement | HTMLPaxTextareaElement | HTMLPaxSelectElement | HTMLPaxDatepickerElement;
        if (el && (
          el.nodeName === 'PAX-INPUT' ||
          el.nodeName === 'PAX-TEXTAREA' ||
          el.nodeName === 'PAX-SELECT' ||
          el.nodeName === 'PAX-DATEPICKER'
        )) await el.focusInput();
      })();
    }
  }


  // MARKUP --------------------------------------------------------------------


  render() {
    const position = this.position;

    return (
      <Host
        onClick={() => this.onClick()}
        class={{
          'in-form': hostContext('form', this.el),
          [`label-${position}`]: position !== undefined,
          ['text-wrap']: this.wrap
        }}>
        <span class="label-text" data-suffix={this.required ? undefined : `(${this.suffix})`}><slot/></span>
        <slot name="end"/>
      </Host>
    );
  }
}
