import{r as t,c as s,h as e,H as i,g as o}from"./p-192d9b7e.js";import{r as c}from"./p-9c337e81.js";const a=class{constructor(e){t(this,e),this.selectFocus=s(this,"selectFocus",7),this.selectBlur=s(this,"selectBlur",7),this.selectChange=s(this,"selectChange",7),this.paxStyle=s(this,"paxStyle",7),this.hasFocus=!1,this.options=[],this.selectedOption=null,this.pickerHidden=!0,this.disabled=!1,this.readonly=!1,this.invalid=!1,this.handleFocus=()=>{this.hasFocus=!0,this.emitStyle(),this.emitFocus()},this.handleBlur=()=>{this.hasFocus=!1,this.pickerHidden&&(this.emitStyle(),this.emitBlur())},this.handleClick=()=>{this.readonly||(this.pickerHidden?this.openPicker():(this.hidePicker(),this.nativeInput.blur()))},this.handleKeyDown=t=>{"Tab"===t.key&&(this.hidePicker(),this.emitStyle())},this.handleOptionClick=t=>{if(t.disabled)return!1;this.selectedOption&&(this.selectedOption.selected=!1),this.selectedOption=t,this.selectedOption.selected=!0,this.value=this.getValue(),this.hidePicker(),this.emitChange(),this.emitBlur(),this.emitStyle()},this.onOutsideClick=t=>{this.el.contains(t.target)||(this.hidePicker(),this.emitStyle())}}emitFocus(){this.selectFocus.emit()}emitBlur(){this.selectBlur.emit()}emitChange(){this.initialValue!==this.value&&(this.initialValue=this.value,this.selectChange.emit({value:null!==this.value?this.getValue():null}))}emitStyle(){this.paxStyle.emit({select:!0,"has-value":this.hasValue(),"has-focus":this.hasFocus,"is-disabled":this.disabled,"is-readonly":this.readonly,"is-invalid":this.invalid})}async focusInput(){this.nativeInput.focus(),this.readonly&&this.nativeInput.select(),this.disabled||this.readonly||this.openPicker()}connectedCallback(){this.renderOptions(),this.selectedOption&&(this.value=this.getValue()),this.initialValue=this.value,this.el.ownerDocument.addEventListener("mousedown",this.onOutsideClick,!1),this.emitStyle()}disconnectedCallback(){this.el.ownerDocument.removeEventListener("mousedown",this.onOutsideClick,!1)}renderOptions(){this.options=[];const t=this.getOptions();for(let s=0;s<t.length;s++){let e={text:t[s].textContent,value:t[s].value,selected:t[s].selected,disabled:t[s].disabled,abbreviation:t[s].abbreviation};this.options=[...this.options,e],e.selected&&(this.selectedOption=e)}}getOptions(){return Array.from(this.el.querySelectorAll("pax-select-option"))}getValue(){var t;return((null===(t=this.selectedOption)||void 0===t?void 0:t.value)||"").toString()}hasValue(){return this.getValue().length>0}openPicker(){this.pickerHidden=!1}hidePicker(){this.pickerHidden=!0}render(){const t=this.selectedOption?this.selectedOption.text:"",s=e("pax-list",null,this.options.map((t=>e("pax-item",{class:{selected:!!t.selected||null,disabled:!!t.disabled||null},onClick:()=>this.handleOptionClick(t)},t.text,t.abbreviation?e("span",{slot:"end"},t.abbreviation):null))));return this.name&&c(!0,this.el,this.name,this.getValue(),this.disabled),e(i,{role:"combobox","aria-disabled":this.disabled?"true":null,class:{"picker-open":!this.pickerHidden,"has-value":this.hasValue(),"has-focus":this.hasFocus}},e("input",{type:"text",onFocus:this.handleFocus,onBlur:this.handleBlur,onClick:this.handleClick,onKeyDown:this.handleKeyDown,disabled:this.disabled,readonly:!this.disabled,value:t,ref:t=>this.nativeInput=t}),e("svg",{class:"select-icon",width:"17",height:"9.175",viewBox:"0 0 17 9.175"},e("path",{d:"M8.978,8.979,16.8,1.155A.677.677,0,1,0,15.845.2L8.5,7.542,1.157.2A.679.679,0,0,0,0,.675a.667.667,0,0,0,.2.477L8.023,8.974a.673.673,0,0,0,.955.006Z"})),void 0!==this.error&&this.error.length>0?e("div",{class:"error-message"},this.error):null,e("div",{class:"picker",hidden:this.pickerHidden},s))}get el(){return o(this)}};a.style=".sc-pax-select-h{box-sizing:border-box !important;display:block;position:relative;background-color:var(--color-white)}input.sc-pax-select{box-sizing:border-box;display:block;width:100%;height:40px;padding:9px 40px 8px 0;border:none;border-bottom:1px solid var(--color-gris77);margin:0;background-color:var(--color-white);font-size:var(--font-input-size);font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-regular);line-height:var(--font-input-line-height);color:var(--color-noir);outline:none;text-overflow:ellipsis;cursor:pointer;position:relative;z-index:var(--z-index-item-input)}.select-icon.sc-pax-select{position:absolute;top:15px;right:0;transition:transform var(--transition-duration) var(--transition-timing-function)}.select-icon.sc-pax-select path.sc-pax-select{fill:var(--color-gris77)}.picker-open.sc-pax-select-h .select-icon.sc-pax-select{transform:rotate(180deg)}.picker-open.sc-pax-select-h .select-icon.sc-pax-select path.sc-pax-select{fill:var(--color-vert)}.picker.sc-pax-select{width:100%;background-color:var(--color-white);box-shadow:var(--box-shadow);padding:0;position:absolute;top:40px;right:0;z-index:4}.picker.sc-pax-select pax-list.sc-pax-select{border-top:none}.picker.sc-pax-select pax-item.sc-pax-select{padding-top:0;padding-bottom:0;font-size:14px;line-height:1.5em;cursor:pointer;flex-wrap:nowrap}.picker.sc-pax-select pax-item.sc-pax-select:hover,.picker.sc-pax-select pax-item.sc-pax-select:focus{color:var(--color-gris77);background-color:var(--color-claire)}.picker.sc-pax-select pax-item.selected.sc-pax-select{color:var(--color-white);background-color:var(--color-vert)}.picker.sc-pax-select pax-item.disabled.sc-pax-select{color:var(--color-gris45);cursor:default;background-color:transparent}.error-message.sc-pax-select{margin-top:0.1em;font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-regular);font-size:13px;color:var(--color-rouge)}[disabled].sc-pax-select-h input.sc-pax-select{border-bottom-color:var(--color-noir);color:var(--color-gris45);cursor:default}[disabled].sc-pax-select-h .select-icon.sc-pax-select path.sc-pax-select{fill:var(--color-gris45)}[readonly].sc-pax-select-h input.sc-pax-select{border-bottom-color:var(--color-gris);color:var(--color-gris);cursor:text}[readonly].sc-pax-select-h .select-icon.sc-pax-select path.sc-pax-select{fill:var(--color-gris)}.sc-pax-select-h:not([readonly]).has-value input.sc-pax-select{border-bottom-color:var(--color-noir)}.sc-pax-select-h:not([readonly]):not([disabled]).has-value .select-icon.sc-pax-select path.sc-pax-select{fill:var(--color-noir)}[invalid].sc-pax-select-h:not([readonly]):not([disabled]) input.sc-pax-select:not(:focus){padding-bottom:7px;border-bottom-color:var(--color-rouge);border-bottom-width:2px}.sc-pax-select-h:not([readonly]):not([disabled]).has-focus input.sc-pax-select{padding-bottom:7px;border-bottom-color:var(--color-vert);border-bottom-width:2px}.sc-pax-select-h:not([readonly]):not([disabled]).has-focus .select-icon.sc-pax-select path.sc-pax-select{fill:var(--color-vert)}pax-item.sc-pax-select-h input.sc-pax-select,pax-item .sc-pax-select-h input.sc-pax-select{background-color:transparent}pax-item.sc-pax-select-h:not(.item-is-disabled):not(.item-is-invalid).item-has-focus input.sc-pax-select,pax-item:not(.item-is-disabled):not(.item-is-invalid).item-has-focus .sc-pax-select-h input.sc-pax-select,pax-item.sc-pax-select-h:not(.item-is-disabled):not(.item-is-invalid):hover input.sc-pax-select,pax-item:not(.item-is-disabled):not(.item-is-invalid):hover .sc-pax-select-h input.sc-pax-select{border-bottom-color:var(--color-vert)}";export{a as pax_select}