import{r as t,c as s,h as i,g as r,H as a}from"./p-192d9b7e.js";import{r as e}from"./p-9c337e81.js";const h=class{constructor(i){t(this,i),this.radioGroupChange=s(this,"radioGroupChange",7),this.paxStyle=s(this,"paxStyle",7),this.handleClick=t=>{const s=t.target&&t.target.closest("pax-radio");if(s){const t=s.value;t!==this.value&&(this.value=t)}}}valueChanged(t){this.radioGroupChange.emit({value:t})}connectedCallback(){this.emitStyle()}emitStyle(){this.paxStyle.emit({"radio-group":!0})}render(){return this.name&&e(!0,this.el,this.name,this.value?this.value:"",!1),i(a,{role:"radiogroup",onClick:this.handleClick})}get el(){return r(this)}static get watchers(){return{value:["valueChanged"]}}};export{h as pax_radio_group}