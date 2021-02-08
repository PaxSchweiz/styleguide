import {Component, h, Prop} from '@stencil/core';

@Component({
    tag: 'pax-headline',
    styleUrl: 'headline.css',
    shadow: true
})
export class Headline {

  /**
   * The headline level of the native element.
   * @type {number}
   */
  @Prop() level: number = 2;

    render() {
        if (this.level === 1) {
            return (<h1><slot/></h1>)
        } else if (this.level === 2) {
            return (<h2><slot/></h2>)
        } else if (this.level === 3) {
            return (<h3><slot/></h3>)
        } else if (this.level === 4) {
            return (<h4><slot/></h4>)
        } else if (this.level === 5) {
            return (<h5><slot/></h5>)
        } else if (this.level === 6) {
            return (<h6><slot/></h6>)
        }
    }
}
