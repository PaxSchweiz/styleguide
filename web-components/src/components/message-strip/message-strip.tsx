import {Component, h, Host, Prop} from '@stencil/core';
import {Color} from '../../interface';
import {createColorClass} from '../../utils/theme';

@Component({
  tag: 'pax-message-strip',
  styleUrl: 'message-strip.css',
  shadow: true
})
export class MessageStrip {

  /**
   * The color to use from the pax color palette.
   * Options are: `'success'`, `'warning'`, `'danger'`, `'dark'`, `'light'`, `'ghost'`
   * @type {Color}
   */
  @Prop() color?: Color;

  /**
   * The icon to use.
   * Options are: `'info'`, `'success'`, `'warning'`, `'danger'`
   * @type {string}
   */
  @Prop() icon?: string;

  render() {
    let svg: string;

    if (this.icon === 'info') {
      svg = (
        <svg viewBox="0 0 30 30">
          <circle class="bg" cx="15" cy="15" r="15"/>
          <path class="icon" d="M15.026,23.494q-2.373,0-4.746,0c-.384,0-.392-.009-.393-.395,0-.644.009-1.289,0-1.933-.005-.252.075-.342.335-.339.908.013,1.816.005,2.724,0,.394,0,.4-.007.4-.387q0-2.8,0-5.6c0-.385-.011-.394-.4-.395-.908,0-1.816-.007-2.724,0-.251,0-.347-.073-.341-.333.015-.634.017-1.27,0-1.9-.009-.294.108-.357.378-.356q3.764.012,7.528,0c.285,0,.368.094.366.37-.009,1.865,0,3.73,0,5.6,0,.889.007,1.777,0,2.666,0,.25.074.35.335.339.429-.017.86.01,1.288-.009.278-.013.353.1.348.358-.012.654-.014,1.309,0,1.962.006.265-.076.355-.347.353C18.19,23.489,16.608,23.495,15.026,23.494Zm2.487-12.952a2.115,2.115,0,0,0-.027-3.522,3.164,3.164,0,0,0-3.422-.035,2.076,2.076,0,0,0-.373,3.277,2.642,2.642,0,0,0,1.848.779A3.175,3.175,0,0,0,17.513,10.542Z"/>
        </svg>
      );
    } else if (this.icon === 'success') {
      svg = (
        <svg viewBox="0 0 30 30">
          <circle class="bg" cx="15" cy="15" r="15"/>
          <path class="icon" d="M23.361,10,14.132,20.38a1.155,1.155,0,0,1-1.586.135L6.777,15.9a1.154,1.154,0,0,1,1.442-1.8l4.913,3.929,8.5-9.566A1.154,1.154,0,0,1,23.361,10Z"/>
        </svg>
      );
    } else if (this.icon === 'warning') {
      svg = (
        <svg viewBox="0 0 30 30">
          <g transform="translate(-700 -195)">
            <circle class="bg" cx="15" cy="15" r="15" transform="translate(700 195)"/>
            <path class="icon" transform="translate(705 200)" d="M 9.999996185302734 3.867598533630371 L 3.545007705688477 14.55172348022461 L 16.45499229431152 14.55172348022461 L 9.999996185302734 3.867598533630371 M 9.999996185302734 0.9338035583496094 C 10.33070755004883 0.9338035583496094 10.66141986846924 1.094762802124023 10.85591983795166 1.416683197021484 L 19.08341026306152 15.03460311889648 C 19.48607063293457 15.70107269287109 19.00614929199219 16.55172348022461 18.22748947143555 16.55172348022461 L 1.772510528564453 16.55172348022461 C 0.9938392639160156 16.55172348022461 0.5139293670654297 15.70107269287109 0.9165897369384766 15.03460311889648 L 9.14408016204834 1.416683197021484 C 9.33857536315918 1.094762802124023 9.669284820556641 0.9338035583496094 9.999996185302734 0.9338035583496094 Z"/>
            <path class="exclamation-line" d="M0,.965V3.806" transform="translate(715 206.384)"/>
            <path class="exclamation-dot" d="M1,0A1,1,0,1,1,0,1,1,1,0,0,1,1,0Z" transform="translate(714 211.906)"/>
          </g>
        </svg>
      );
    } else if (this.icon === 'danger') {
      svg = (
        <svg viewBox="0 0 30 30">
          <circle class="bg" cx="15" cy="15" r="15"/>
          <path class="icon" d="M16.592,15,21.92,9.672a1.128,1.128,0,0,0,0-1.592,1.149,1.149,0,0,0-1.59,0L15,13.409,9.672,8.08A1.126,1.126,0,1,0,8.08,9.672L13.41,15,8.079,20.329a1.131,1.131,0,0,0,0,1.594,1.152,1.152,0,0,0,1.592,0L15,16.592l5.331,5.33a1.125,1.125,0,0,0,1.589-1.594Z"/>
        </svg>
      );
    }

    return (
      <Host
        class={{
          ...createColorClass(this.color),
          'message-strip-icon--info': this.icon === 'info',
          'message-strip-icon--success': this.icon === 'success',
          'message-strip-icon--warning': this.icon === 'warning',
          'message-strip-icon--danger': this.icon === 'danger'
        }}
      >
        {this.icon
          ? <div class="message-strip-icon">{svg}</div>
          : null
        }
        <div class="message-strip-body">
          <slot/>
        </div>
      </Host>
    );
  }

}
