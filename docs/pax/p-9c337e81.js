const t=(t,a)=>null!==a.closest(t),a=(t,a,n)=>{const u=n.closest(t);return null!==u&&u.classList.contains(a)},n=(t,a,n,u,i)=>{if(t||(s=a).shadowRoot&&s.attachShadow){let t=a.querySelector("input.aux-input");t||(t=a.ownerDocument.createElement("input"),t.type="hidden",t.classList.add("aux-input"),a.appendChild(t)),t.disabled=i,t.name=n,t.value=u||""}var s},u=(t,a,n)=>Math.max(t,Math.min(a,n));export{a,u as c,t as h,n as r}