(self.webpackChunkdxcomponent=self.webpackChunkdxcomponent||[]).push([[79695387],{1957:(e,n,t)=>{window?.__webpack_nonce__&&(t.nc=window.__webpack_nonce__)},2020:(e,n,t)=>{var i={};function a(e){return Promise.resolve().then(()=>{if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t(i[e])})}a.keys=()=>Object.keys(i),a.id=2020,e.exports=a},3113:(e,n,t)=>{"use strict";t.d(n,{A:()=>u,G:()=>c});var i=t(4848),a=t(1594),r=t(8267),o=t(1357),s=t(9549),d=t(9187),l=t(7321);const c=r.Ay.label(({theme:e,labelHidden:n})=>{const{"foreground-color":t}=e.components.label,i=(0,d.A)(()=>n?o.Ic:(0,o.B3)((0,l.W0)(e.base.palette["primary-background"]),e.base.transparency["transparent-3"])),a=(0,l.Vr)(e.base["font-size"],e.base["font-scale"]);return n?o.Ic:r.AH`
          max-width: max-content;
          font-size: ${a[e.components.label["font-size"]]};
          font-weight: ${e.components.label["font-weight"]};
          color: ${"auto"===t?i:t};
        `});c.defaultProps=s.qn;const u=(0,a.forwardRef)(function({children:e,labelHidden:n=!1,htmlFor:t,...a},r){return(0,i.jsx)(c,{ref:r,labelHidden:n,htmlFor:""===t?void 0:t,...a,children:e})})},4651:(e,n,t)=>{"use strict";t.d(n,{A:()=>l});var i=t(1594),a=t(4680);const r=(e,n)=>{let t;return function(...i){window.clearTimeout(t),t=window.setTimeout(()=>{t=void 0,e.apply(this,i)},n)}},o=t(127).A?(()=>{const e=document.createElement("div");e.style.width="1ch",e.style.position="fixed",document.body.append(e);const n=e.offsetWidth;return e.remove(),n})():1;var s=t(3456);const d=a.A&&window.getComputedStyle(document.documentElement).fontSize||"16px",l=(e,{breakpointRef:n,defaultValue:t=!1,themeProp:l="breakpoints"}={})=>{const{base:{breakpoints:c,"content-width":u}}=(0,s.A)(),p="content-width"===l?u[e]:c[e],[m,h]=(0,i.useState)(a.A?window.matchMedia(`(min-width: ${p})`).matches:!!t),f=o,v=(0,i.useCallback)(e=>{h(e.matches)},[]);return(0,i.useLayoutEffect)(()=>{if(n&&n.current){const e=r(e=>{if(!n.current?.checkVisibility())return;const t=e.some(({target:e,contentRect:t})=>{if(e!==n.current)return;const i="breakpoints"===l?parseFloat(d):f;return t.width>=parseFloat(p)*i});h(t)},100),t=new ResizeObserver(e);return t.observe(n.current),()=>{t.disconnect()}}if(a.A){const e=window.matchMedia(`(min-width: ${p})`),n="addEventListener"in e,t=r(()=>{h(window.innerWidth>=parseInt(p,10))},100);return n?(e.addEventListener("change",v),h(e.matches)):(window.addEventListener("resize",t),h(window.innerWidth>=parseInt(p,10))),()=>{n?e.removeEventListener("change",v):window.removeEventListener("resize",t)}}},[n?.current]),m}},6935:e=>{function n(e){return Promise.resolve().then(()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}n.keys=()=>[],n.resolve=n,n.id=6935,e.exports=n},8558:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var i=t(7521),a=t(9252),r=t(6878),o=t(1093),s=(t(1957),t(8267));const d=s.Ay.div(()=>s.AH`
    margin: 0px 0;
  `);var l=t(4848);const c=(0,o.A)(function(e){const{getPConnect:n,value:t=0,displayMode:o,label:s,hideLabel:c=!1,testId:u}=e,p=n(),m=p.getActionsApi(),h=p.getStateProps().value,f=Number(t)||0;return"DISPLAY_ONLY"===o?(0,l.jsx)(d,{children:(0,l.jsx)(i.A,{variant:"h2",children:f})}):(0,l.jsx)(d,{children:(0,l.jsx)(a.Ay,{variant:"inline","data-testid":u,fields:[{id:"counter",name:c?"":s,value:(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[(0,l.jsx)(r.Ay,{variant:"secondary",onClick:()=>{f>0&&m.updateFieldValue(h,f-1)},disabled:f<=0,children:"-"}),(0,l.jsx)(i.A,{variant:"h2",children:f}),(0,l.jsx)(r.Ay,{variant:"primary",onClick:()=>{m.updateFieldValue(h,f+1)},children:"+"})]})}]})})})},9061:(e,n,t)=>{"use strict";t.d(n,{A:()=>d});var i=t(4848),a=t(8267),r=t(9586),o=t(7491);const s=a.Ay.span`
  display: inline-block;
  position: relative;
`,d=()=>{const e=(0,r.A)();return(0,i.jsxs)(s,{children:[(0,i.jsx)("span",{"aria-hidden":!0,children:"––"}),(0,i.jsx)(o.A,{children:e("no_value")})]})}},9252:(e,n,t)=>{"use strict";t.d(n,{Ay:()=>P});var i=t(4848),a=t(1594),r=t(8267),o=t(6883),s=t(3113),d=t(8579),l=t(4853),c=t(4651),u=t(3456),p=t(9549),m=t(9586),h=t(4680),f=t(6878),v=t(3700);const x=e=>{const{status:n,dimension:t,transitionSpeed:i,transitionTimingFunction:a,min:r,max:o,nullWhenCollapsed:s,el:d}=e,l={};let c=o;return d&&!o&&(c=((e,n)=>e?"height"===n?`${e.scrollHeight}px`:`${e.scrollWidth}px`:"")(d,t)),"expanded"!==n&&"collapsed"!==n||((o||r)&&(l[t]="expanded"===n?c:r||0,l["overflow"+("width"===t?"X":"Y")]="hidden"),"collapsed"!==n||s||r||(l[t]=0,l.overflow="hidden",l.visibility="hidden")),"expanding"!==n&&"collapsing"!==n||(l[t]="expanding"===n?c:r||0,l.overflow="hidden",l.transitionProperty=t,l.transitionDuration=`max(${i}, 0.01ms)`,l.transitionTimingFunction=a),l},w=(0,a.forwardRef)(function(e,n){const{base:{animation:t}}=(0,u.A)(),{children:r,dimension:o="height",collapsed:s=!1,onBeforeExpand:d,onAfterExpand:c,onBeforeCollapse:p,onAfterCollapse:m,transitionSpeed:h=t.speed,min:f,max:w,nullWhenCollapsed:b=!1,as:g="div",...A}=e,[y,k]=(0,a.useState)(s?"collapsed":"expanded"),j=(0,a.useState)(),$=j[1];let C=j[0];const E=(0,v.A)(y),_=(0,l.A)(n),F=(0,a.useCallback)(e=>{e.target===_.current&&e.propertyName===o&&k("expanding"===y?"expanded":"collapsed")},[_.current,y]);return(0,a.useLayoutEffect)(()=>{const e=s,n=!s,i=["expanded","expanding"].includes(y),a=["collapsed","collapsing"].includes(y);n&&a?(d?.(),k("expanding")):e&&i&&(p?.(),k("collapsing")),"expanded"===y&&"expanded"!==E?c?.():"collapsed"===y&&"collapsed"!==E&&m?.(),$(x({dimension:o,min:f,max:w,transitionSpeed:h,nullWhenCollapsed:b,status:y,el:_.current,transitionTimingFunction:t.timing.ease}))},[s,y,f,w]),y!==E&&["expanded","collapsed"].includes(E)&&(C=x({dimension:o,min:f,max:w,transitionSpeed:h,nullWhenCollapsed:b,status:"expanding"===y?"collapsing":"expanding",el:_.current,transitionTimingFunction:t.timing.ease})),"collapsed"===y&&b&&!f?null:(0,i.jsx)(g,{ref:_,onTransitionEnd:F,...A,inert:"collapsed"!==y||b||f?void 0:"",style:C,children:r})}),b=(0,r.Ay)(f.Ay)``,g=({children:e,lines:n})=>{const[t,r]=(0,a.useState)(!0),[o,s]=(0,a.useState)(!1),d=(0,a.useRef)(null),l=(0,m.A)(),c=(0,a.useMemo)(()=>{if(!h.A)return 1/0;const e=1.25*Number.parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"),10);return n*e},[]);return(0,a.useLayoutEffect)(()=>{if(!d.current)return;const e=new ResizeObserver(e=>{const n=e.some(({target:e,contentRect:n})=>{if(e===d.current)return n.height>c});s(n)});return e.observe(d.current),()=>{e.disconnect()}},[d.current,c]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w,{collapsed:t,min:o?`${c}px`:"max-content",children:(0,i.jsx)("div",{ref:d,children:e})}),o&&(0,i.jsx)(b,{variant:"link",onClick:()=>r(e=>!e),children:l(t?"show_more":"show_less")})]})};var A=t(4869),y=t(9061),k=t(8044);const j=(0,k.A)("field-value-list",[]),$=(0,k.A)("field-value-item",["name","value"]),C=r.Ay.dt`
  word-break: break-word;
`,E=r.Ay.dd`
  word-break: break-word;
`,_=r.Ay.div``,F=r.Ay.dl(({variant:e,theme:n})=>{const{components:{"field-value-list":{inline:{detached:t}}}}=n;return r.AH`
    width: 100%;

    ${"value-comparison"===e&&r.AH`
      dt {
        width: 100%;
      }
      dd {
        text-align: end;
        padding-inline-start: calc(2 * ${n.base.spacing});
      }
      ${s.G} {
        max-width: unset;
      }
      dd:not(:last-of-type),
      dt:not(:last-of-type) {
        border-bottom: 0.0625rem solid ${n.base.palette["border-line"]};
        padding-bottom: calc(0.5 * ${n.base.spacing});
      }
    `}

    ${t&&"inline"===e&&r.AH`
      dt {
        width: 100%;
        padding-inline-end: calc(${n.base.spacing});
      }
      ${s.G} {
        max-width: unset;
      }
      dd:not(:last-of-type),
      dt:not(:last-of-type),
      dd:has(+ ${_}),
      dt:has(+ dd + ${_}),
      ${_}:has(+ dt + dd),
      ${_}:not(:last-of-type) {
        border-bottom: 0.0625rem dashed ${n.base.palette["border-line"]};
        padding-bottom: calc(0.5 * ${n.base.spacing});
      }
    `}
  `});F.defaultProps=p.qn;const S=(0,A.A)(({testId:e,name:n,value:t,variant:a="inline",truncate:r=!0})=>{const o=(0,d.A)(e,$),l="string"==typeof t&&r?(0,i.jsx)(g,{lines:3,children:t}):t,c=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.G,{"data-testid":o.name,as:C,role:"none",children:n}),(0,i.jsx)(E,{"data-testid":o.value,role:"none",children:t?l:(0,i.jsx)(y.A,{})})]});return"stacked"===a?(0,i.jsx)(_,{"data-testid":o.root,children:c}):(0,i.jsx)(i.Fragment,{children:c})},$),L=(0,a.forwardRef)(function({testId:e,fields:n,variant:t="inline",...a},r){const s=(0,d.A)(e,j),p=(0,l.A)(r),m=(0,c.A)("xs",{breakpointRef:p,themeProp:"content-width"}),{components:{"field-value-list":{inline:{detached:h}}}}=(0,u.A)();return(0,i.jsx)(o.A,{"data-testid":s.root,...a,ref:p,container:{cols:["inline","value-comparison"].includes(t)&&m?"16ch minmax(0, 1fr)":"minmax(0, 1fr)",colGap:h||"value-comparison"===t?0:2,rowGap:h||"value-comparison"===t?.5:1},as:F,role:"none",variant:m?t:"stacked",children:n.map(({id:e,name:n,value:a,truncate:r=!0,variant:o})=>{const s={name:n,variant:"stacked"!==(o??t)&&m?"inline":"stacked"};return"string"==typeof a?(0,i.jsx)(S,{...s,value:a,truncate:r},e??n):(0,i.jsx)(S,{...s,value:a},e??n)})})}),P=(0,A.A)(L,j)}}]);
//# sourceMappingURL=PP8Pega_PegaNpm_RegistrationForm_Pega_PegaNpm_CounterApp.69b87981.js.map