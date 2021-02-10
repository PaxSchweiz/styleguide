import{r as o,c as t,h as r,H as n,g as a}from"./p-192d9b7e.js";const e=class{constructor(r){o(this,r),this.buttonBlur=t(this,"buttonBlur",7),this.buttonFocus=t(this,"buttonFocus",7),this.handleFocus=()=>{this.buttonFocus.emit()},this.handleBlur=()=>{this.buttonBlur.emit()}}get hasIconOnly(){return!!this.hostElement.querySelector('pax-icon[slot="icon-only"]')}render(){return r(n,{"aria-disabled":this.disabled?"true":null,class:{"button-disabled":this.disabled,[`button-${this.fill}`]:!!this.fill||null,"button-icon":this.hasIconOnly,[`button-${this.mode}-mode`]:!!this.mode||null}},r("button",{class:"button-native",type:void 0!==this.type?this.type:null,onFocus:this.handleFocus,onBlur:this.handleBlur,disabled:!!this.disabled||null},r("slot",{name:"icon-only"}),r("slot",{name:"start"}),r("slot",null)))}get hostElement(){return a(this)}};e.style='.sc-pax-button-h{box-sizing:border-box !important;display:inline-block;width:auto;vertical-align:top;vertical-align:-webkit-baseline-middle;font-kerning:none;font-size:var(--font-base-size);user-select:none}.button-native.sc-pax-button{display:flex;width:100%;height:100%;background-color:var(--color-vert);border:1px solid var(--color-vert);padding:7px 19px;border-radius:0;margin:0;font-family:var(--font-family-myriad-pro);line-height:1.375em;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:inherit;white-space:nowrap;color:var(--color-white);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;outline:none;box-shadow:none;cursor:pointer;box-sizing:border-box;appearance:none;pointer-events:auto}.button-native.sc-pax-button::-moz-focus-inner{border:0}.button-native.sc-pax-button:focus{background-color:var(--color-vert-hover);border-color:var(--color-vert-hover)}.sc-pax-button-h:hover .button-native.sc-pax-button{background-color:var(--color-vert-hover);border-color:var(--color-vert-hover)}.button-outline.sc-pax-button-h .button-native.sc-pax-button{color:var(--color-gris77);background-color:transparent}.button-outline.sc-pax-button-h:hover .button-native.sc-pax-button{color:var(--color-vert-hover);border-color:var(--color-vert-hover)}.button-outline.sc-pax-button-h .button-native.sc-pax-button:focus{border-color:var(--color-vert);background-color:transparent;color:var(--color-vert)}.button-clear.sc-pax-button-h .button-native.sc-pax-button{color:var(--color-gris77);background-color:transparent;border-color:transparent}.button-clear.sc-pax-button-h:hover .button-native.sc-pax-button{color:var(--color-vert-hover)}.button-clear.sc-pax-button-h .button-native.sc-pax-button:focus{background-color:transparent;border-color:transparent;color:var(--color-vert)}.button-icon.sc-pax-button-h .button-native.sc-pax-button{padding-right:9px;padding-left:9px}.sc-pax-button-s>pax-icon{display:block;height:1.375rem;fill:none;stroke:currentColor;pointer-events:none}.sc-pax-button-s>pax-icon[slot="start"]{margin:0 0.5em 0 -0.3em;transform:scale(0.8)}.button-disabled.sc-pax-button-h .button-native.sc-pax-button{pointer-events:none;border-color:var(--color-gris10);background-color:var(--color-gris10);color:var(--color-gris45)}.button-outline.button-disabled.sc-pax-button-h .button-native.sc-pax-button{border-color:var(--color-gris10);color:var(--color-gris45)}.button-clear.button-disabled.sc-pax-button-h .button-native.sc-pax-button{background-color:transparent;border-color:transparent;color:var(--color-gris45)}.button-icon.button-disabled.sc-pax-button-h .button-icon.sc-pax-button svg.sc-pax-button{stroke:var(--color-gris45)}.button-light-mode.button-disabled.sc-pax-button-h .button-native.sc-pax-button{border-color:var(--color-white);background-color:var(--color-white);color:var(--color-gris45)}.button-light-mode.button-outline.button-disabled.sc-pax-button-h .button-native.sc-pax-button{border-color:var(--color-gris45);color:var(--color-gris45);background-color:transparent}.button-light-mode.button-clear.button-disabled.sc-pax-button-h .button-native.sc-pax-button{border-color:transparent;color:var(--color-gris45);background-color:transparent}.button-dark-mode.button-disabled.sc-pax-button-h .button-native.sc-pax-button{border-color:var(--color-white20);background-color:var(--color-white20);color:var(--color-gris45)}.button-dark-mode.button-outline.sc-pax-button-h .button-native.sc-pax-button{border-color:var(--color-white);color:var(--color-white);background-color:transparent}.button-dark-mode.button-outline.sc-pax-button-h:hover .button-native.sc-pax-button{border-color:var(--color-vert-hover);color:var(--color-vert-hover);background-color:transparent}.button-dark-mode.button-outline.button-disabled.sc-pax-button-h .button-native.sc-pax-button{border-color:var(--color-gris45);color:var(--color-gris45);background-color:transparent}.button-dark-mode.button-clear.sc-pax-button-h .button-native.sc-pax-button{color:var(--color-white)}.button-dark-mode.button-clear.sc-pax-button-h:hover .button-native.sc-pax-button{color:var(--color-vert-hover)}.button-dark-mode.button-clear.button-disabled.sc-pax-button-h .button-native.sc-pax-button{border-color:transparent;color:var(--color-gris45);background-color:transparent}';export{e as pax_button}