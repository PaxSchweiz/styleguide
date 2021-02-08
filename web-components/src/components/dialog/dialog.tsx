import {Component, ComponentInterface, Event, EventEmitter, h, Host, Method, Prop, State} from '@stencil/core';

@Component({
  tag: 'pax-dialog',
  styleUrl: 'dialog.css',
  shadow: true
})
export class Dialog implements ComponentInterface {


  // STATE ---------------------------------------------------------------------


  @State() isOpen: boolean = false;


  // PROPERTIES ----------------------------------------------------------------


  /**
   * The text of the header.
   * @type {string}
   */
  @Prop() header: string = '';


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


  // METHODS -------------------------------------------------------------------


  /**
   * When called opens the dialog component.
   */
  @Method()
  async open() {
    this.beforeOpen.emit();
    this.isOpen = true;
  }

  /**
   * When called closes the dialog component.
   */
  @Method()
  async close() {
    this.beforeClose.emit();
    this.isOpen = false;
  }


  // LIFECYCLE -----------------------------------------------------------------


  /**
   * Gets called every time the component is connected to the DOM.
   */
  connectedCallback() {
    document.body.addEventListener('keydown', this.handleKeyDown)
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
    document.body.removeEventListener('keydown', this.handleKeyDown)
  }


  // INTERNAL ------------------------------------------------------------------


  private handleCloseButtonClick = () => {
    this.close();
  }

  private handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      this.close();
      evt.preventDefault();
    }
  }


  // MARKUP --------------------------------------------------------------------


  render() {
    return (
      <Host
        open={this.isOpen}
      >
        <div class="dialog-backdrop"/>
        <div class="dialog">
          <div class="dialog-header">
            <button
              class="close-icon"
              onClick={this.handleCloseButtonClick}
            >
              <svg width="21.121" height="21.121" viewBox="0 0 21.121 21.121">
                <g transform="translate(1.061 1.061)">
                  <path d="M0,0V26.87" transform="translate(19 19) rotate(135)"/>
                  <path d="M0,0V26.87" transform="translate(19 0) rotate(45)"/>
                </g>
              </svg>
            </button>
            {this.header
              ? <div class="header">{this.header}</div>
              : null
            }
          </div>
          <div class="dialog-body">
            <slot/>
          </div>
          <slot name="footer"/>
        </div>
      </Host>
    )
  }
}
