import {Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Prop, Watch} from '@stencil/core';
import {StyleEventDetail} from '../../interface';
import {RadioGroupChangeEventInterface} from "./radio-group.interface";
import {renderHiddenInput} from "../../utils/helpers";

@Component({
  tag: 'pax-radio-group'
})
export class RadioGroup implements ComponentInterface {

  @Element() el!: HTMLElement;


  // PROPERTIES ----------------------------------------------------------------


  /**
   * The name of the hidden input, which is submitted with the form data.
   * @type {string}
   */
  @Prop() name: string;

  /**
   * The value of the hidden input, which is submitted with the form data.
   * @type {string}
   */
  @Prop({ mutable: true }) value?: string;

  @Watch('value')
  valueChanged(value: string | undefined) {
    this.radioGroupChange.emit({ value });
  }

  // EVENTS---------------------------------------------------------------------


  /**
   * Gets emitted when the value has changed.
   */
  @Event() radioGroupChange!: EventEmitter<RadioGroupChangeEventInterface>;

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
    this.paxStyle.emit({
      'radio-group': true
    });
  }

  private handleClick = (evt: MouseEvent) => {
    const selectedRadio = evt.target && (evt.target as HTMLElement).closest('pax-radio');
    if (selectedRadio) {
      const currentValue = this.value;
      const newValue = selectedRadio.value;
      if (newValue !== currentValue) {
        this.value = newValue;
      }
    }
  }


  // MARKUP --------------------------------------------------------------------


  /**
   * Returns the markup for the radio group component.
   *
   * Note that the nested pax-radios are not a real radio inputs (`<input type="radio"/>`),
   * but rather a button that looks like a radio.
   * An hidden input element (that is submitted with the form data) is added by the radio group component here.
   */
  render() {

    if (this.name) {
      renderHiddenInput(true, this.el, this.name, (this.value ? this.value : ''), false);
    }

    return (
      <Host
        role="radiogroup"
        onClick={this.handleClick}
      >
      </Host>
    )
  }

}
