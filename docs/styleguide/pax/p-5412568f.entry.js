import{r,h as o,H as a}from"./p-192d9b7e.js";import{c as s}from"./p-fc8a8eaa.js";import{c as e}from"./p-9c337e81.js";const t=class{constructor(o){r(this,o),this.value=0}render(){const r=e(0,this.value,1);return o(a,{role:"progressbar","aria-valuemin":"0","aria-valuemax":"1",class:Object.assign(Object.assign({},s(this.color)),{"progress-bar-inline":this.inline,"progress-bar-compact":this.compact})},o("div",{class:"bar"},o("div",{class:"progress-bar",style:{transform:`scaleX(${this.value})`}})),o("div",{class:"legend"},o("div",{class:"label"},o("slot",null)),o("div",{class:"value"},o("slot",{name:"value-label"},100*r,"%"))))}};t.style=":host{box-sizing:border-box !important;display:block;width:100%;margin:1rem 0}:host(:first-child){margin-top:0}:host(:last-child){margin-bottom:0}.bar{width:100%;height:12px;position:relative;overflow:hidden;background-color:var(--color-gris15)}.progress-bar{width:100%;height:100%;box-sizing:border-box;position:absolute;top:0;right:0;bottom:0;left:0;transform-origin:left top;background-color:var(--color-vert)}.legend{display:flex;justify-content:space-between;flex-shrink:0;margin-top:0.4rem}.label{font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-regular);color:var(--color-gris77);overflow:hidden}::slotted(pax-label){white-space:normal}.value{min-width:2.5rem;margin-left:1rem;font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-semibold);color:var(--color-noir);text-align:right}:host(.pax-color--success) .progress-bar{background-color:var(--color-vert)}:host(.pax-color--warning) .progress-bar{background-color:var(--color-orange)}:host(.pax-color--danger) .progress-bar{background-color:var(--color-rouge)}:host(.pax-color--dark) .progress-bar{background-color:var(--color-prune)}:host(.pax-color--light) .progress-bar{background-color:var(--color-white)}:host(.progress-bar-inline){display:flex;align-items:center}:host(.progress-bar-inline) ::slotted(*){margin-left:1rem}:host(.progress-bar-inline) .legend{margin-top:0}:host(.progress-bar-compact) .bar{height:5px}:host(.progress-bar-compact.progress-bar-inline:not(:first-child)){margin-top:0.5rem}:host(.progress-bar-compact.progress-bar-inline:not(:last-child)){margin-bottom:0.5rem}:host(.progress-bar-compact.progress-bar-inline) .value{min-width:1.5rem;font-size:0.9em}:host(.progress-bar-compact.progress-bar-inline) ::slotted(pax-label){font-size:0.9em}";export{t as pax_progress_bar}