import {
  Component,
  ComponentInterface,
  h,
  Host,
  Prop
} from '@stencil/core';

@Component({
  tag: 'pax-select-option',
  styleUrl: 'select-option.css',
  shadow: true
})
export class SelectOption implements ComponentInterface {


  // PROPERTIES ----------------------------------------------------------------


  /**
   * The value of the select option, which is submitted with the form data.
   * @type {string}
   */
  @Prop() value: string;

  /**
   * Marks the select option, whose value is submitted with the form data.
   * @type {string}
   */
  @Prop() selected?: boolean = false;

  /**
   * If `true`, the user cannot interact with the select option.
   */
  @Prop() disabled?: boolean = false;

  /**
   * Add an additional abbreviation to a select option.
   */
  @Prop() abbreviation?: string;


  // MARKUP --------------------------------------------------------------------


  render() {
    return (
      <Host role="option"/>
    )
  }
}
