import {Component, Element, forceUpdate, h, Host, Listen, Prop} from '@stencil/core';
import {Color, CssClassMap, StyleEventDetail} from '../../interface';
import {createColorClass} from '../../utils/theme';
import {hostContext, hostContextHasClass} from "../../utils/helpers";

@Component({
  tag: 'pax-item',
  styleUrl: 'item.css',
  shadow: true
})
export class Item {

  private itemStyles = new Map<string, CssClassMap>();

  @Element() el!: HTMLElement;


  // PROPERTIES ----------------------------------------------------------------


  /**
   * The color to use from the pax color palette.
   * Options are: `'success'`, `'warning'`, `'danger'`, `'dark'`
   */
  @Prop() color?: Color;


  // INTERNAL ------------------------------------------------------------------


  @Listen('paxStyle')
  itemStyle(evt: CustomEvent<StyleEventDetail>) {
    evt.stopPropagation();

    const tagName = (evt.target as HTMLElement).tagName;
    const updatedStyles = evt.detail;
    const newStyles = {} as any;
    const childStyles = this.itemStyles.get(tagName) || {};

    let hasStyleChanges: boolean = false;

    Object.keys(updatedStyles).forEach(key => {
      if (updatedStyles[key]) {
        const textFieldKey = `item-${key}`;
        if (!childStyles[textFieldKey]) {
          hasStyleChanges = true;
        }
        newStyles[textFieldKey] = true;
      }
    });

    if (!hasStyleChanges && Object.keys(newStyles).length !== Object.keys(childStyles).length) {
      hasStyleChanges = true;
    }

    if (hasStyleChanges) {
      this.itemStyles.set(tagName, newStyles);
      forceUpdate(this);
    }
  }


  // MARKUP --------------------------------------------------------------------


  render() {
    const childStyles = {};

    this.itemStyles.forEach(value => {
      Object.assign(childStyles, value);
    });

    return (
      <Host
        class={{
          'in-list': hostContext('pax-list', this.el),
          'list-has-lines': hostContextHasClass('pax-list', 'list-lines', this.el),
          'in-select': hostContext('pax-select', this.el),
          'in-pagination': hostContext('pax-pagination', this.el),
          ...childStyles,
          ...createColorClass(this.color)
        }}
      >
        <div class="item__native">
          <slot name="start"/>
          <div class="item__inner">
            <div class="input__wrapper">
              <slot/>
            </div>
            <slot name="end"/>
          </div>
        </div>
      </Host>
    )
  }

}
