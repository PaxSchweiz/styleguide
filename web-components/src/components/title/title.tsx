import {Component, h, Prop} from '@stencil/core';

@Component({
    tag: 'pax-title',
    styleUrl: 'title.css',
    shadow: true
})
export class Title {

  /**
   * The headline level of the native element.
   * @type {number}
   */
  @Prop() level: number = 1;

    render() {
        if (this.level === 1) {
            return (<h1><slot/></h1>)
        } else if (this.level === 2) {
            return (<h2><slot/></h2>)
        }
    }
}
