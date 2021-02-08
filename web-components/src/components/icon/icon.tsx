import {Component, ComponentInterface, h, Host} from '@stencil/core';

@Component({
  tag: 'pax-icon',
  styleUrl: 'icon.css',
  shadow: true
})
export class Icon implements ComponentInterface {

  render() {
    return (
      <Host role="img">
        <svg width="18" height="22" viewBox="0 0 18 22.5">
          <g transform="translate(0.75 0.75)">
            <g transform="translate(-0.75 -0.75)">
              <path d="M.75,21.75V.75H12.337L17.25,6.223V21.75Z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
              <path d="M12.337.75V6.383H17.25" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
              <line x2="10.313" transform="translate(3.92 10.829)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
              <line x2="10.313" transform="translate(3.92 14.329)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
              <line x2="10.313" transform="translate(3.92 17.829)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
            </g>
          </g>
        </svg>
      </Host>
    );
  }
}
