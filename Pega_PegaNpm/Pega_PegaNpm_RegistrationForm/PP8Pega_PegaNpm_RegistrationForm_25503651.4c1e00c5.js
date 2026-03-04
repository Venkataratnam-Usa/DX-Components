"use strict";(self.webpackChunkdxcomponent=self.webpackChunkdxcomponent||[]).push([[25503651],{331:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(4848),o=n(1594),a=n(8267),s=n(9549),i=n(4853);const l=a.Ay.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  color: inherit;

  & + & {
    margin-inline-start: ${e=>e.theme.base.spacing};
  }
`;l.defaultProps=s.qn;const c=(0,o.forwardRef)(function({type:e="button",disabled:t=!1,href:n,...a},s){const c=(0,o.useRef)(),d=(0,i.A)(s);(0,o.useEffect)(()=>()=>{c.current=void 0},[]);const u=e=>{a.onMouseDown?.(e),e.persist(),c.current=e},m=e=>{const t=c.current&&!c.current.defaultPrevented;return c.current=void 0,t&&d.current!==document.activeElement&&d.current?.focus(),a.onMouseUp?.(e)};return n?(0,r.jsx)(l,{as:"a",ref:d,href:n,disabled:t,...a,onMouseDown:u,onMouseDownCapture:m}):(0,r.jsx)(l,{ref:d,type:e,disabled:t,...a,onMouseDown:u,onMouseUp:m})})},574:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(1594),o=n(9749),a=n(7666),s=n(393);const i=(e,t=!0,n=[],i=!0)=>{const l=(0,r.useCallback)(t=>{if(e?.current&&"Tab"===t.key){const n=(0,a.A)(e),{0:r,[n.length-1]:s}=n,l=(0,o.A)();if((l===e.current||!e.current.contains(l)||e.current.contains(l)&&!n.includes(l))&&i)if(t.preventDefault(),l){const n=(0,a.A)(e,{includeActiveEl:!0}),o=n.findIndex(e=>e===l);-1!==o?t.shiftKey?n[(o-1+n.length)%n.length].focus():n[(o+1)%n.length].focus():t.shiftKey?s?.focus():r?.focus()}else t.shiftKey?s?.focus():r?.focus();else t.shiftKey&&l===r?(t.preventDefault(),s?.focus()):t.shiftKey||l!==s||(t.preventDefault(),r?.focus())}},n);(0,s.A)("keydown",l,{target:t?void 0:e})}},1269:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(4848),o=n(1594),a=n(5206),s=n(8267),i=n(9463);const l=s.Ay.span`
  display: none;
`,c=(0,o.forwardRef)(function(e,t){const{portalTarget:n}=(0,i.A)();return n?(0,a.createPortal)((0,r.jsx)(l,{...e,ref:t}),n):null})},1564:(e,t,n)=>{n.d(t,{A:()=>g,B:()=>p});var r=n(4848),o=n(1594),a=n(8267),s=n(1357),i=n(9549),l=n(9187),c=n(4869),d=n(7321),u=n(8579),m=n(8866);const p=a.Ay.span(({theme:e,variant:t,children:n})=>{const{foreground:r,background:o}=e.components.badges.count[t],i=(0,l.A)(()=>(0,s.B3)(r,.1)),c=(0,d.Vr)(e.base["font-size"],e.base["font-scale"]);return a.AH`
    display: inline-block;
    block-size: 1rem;
    flex-shrink: 0;
    border-radius: calc(9999 * ${e.base["border-radius"]});
    color: ${r};
    background-color: ${o};
    box-shadow: inset 0 0 0 0.0625rem ${i};
    font-size: ${c.xxs};
    font-weight: ${e.base["font-weight"].bold};
    line-height: 1rem;
    text-align: center;
    white-space: nowrap;

    ${1===n.length?a.AH`
          aspect-ratio: 1 / 1;
        `:a.AH`
          padding-inline: ${e.base.spacing};
        `}
  `});p.defaultProps=i.qn;const f=e=>e<1e3?"":1e3<=e&&e<1e6?"K":1e6<=e&&e<1e9?"M":1e9<=e&&e<1e12?"B":1e12<=e&&e<1e15?"T":"",h=e=>{const t=Math.abs(e);return t<1e3?`${e}`:`${e<0?"-":""}${(e=>{for(let t=3;t<15;t+=3){if(e<10**(t+1))return`${`${e}`.slice(0,1)}.${`${e}`.slice(1,2)}${f(e)}`;if(e<10**(t+2))return`${`${e}`.slice(0,2)}${f(e)}`;if(e<10**(t+3))return`${`${e}`.slice(0,3)}${f(e)}`}return"999T+"})(t)}`},g=(0,c.A)((0,o.forwardRef)(function({testId:e,variant:t="default",children:n,...o},a){const s=(0,u.A)(e,m.EF);return Number.isInteger(n)?(0,r.jsx)(p,{"data-testid":s.root,variant:t,...o,ref:a,children:h(n)}):null}),m.EF)},2697:(e,t,n)=>{n.d(t,{q:()=>j,A:()=>S});var r={};n.r(r),n.d(r,{Component:()=>p,name:()=>m,set:()=>u,viewBox:()=>f});var o={};n.r(o),n.d(o,{Component:()=>A,name:()=>g,set:()=>h,viewBox:()=>v});var a=n(4848),s=n(1594),i=n(8267),l=n(1357),c=n(7501),d=n(6765);const u="budicon",m="galaxy",p=()=>(0,a.jsx)("path",{d:"M17.66 3.3 16.5 6.5l-3.3 1.16c-.22.088-.264.562 0 .67l3.3 1.17 1.16 3.3c.1.3.543.3.67 0l1.17-3.3c1.981-.7 3.081-1.09 3.3-1.17.328-.119.205-.598 0-.67L19.5 6.5l-1.17-3.2c-.187-.415-.522-.377-.67 0ZM15.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"}),f="0 0 25 25",h="streamline",g="folder-empty",A=()=>(0,a.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M15.188 7.313v-2.25a1.125 1.125 0 0 0-1.126-1.125H6.189V2.813a1.125 1.125 0 0 0-1.125-1.125H1.688A1.125 1.125 0 0 0 .563 2.813v12.224a1.275 1.275 0 0 0 2.502.329l1.763-7.243a1.125 1.125 0 0 1 1.081-.81h10.404A1.125 1.125 0 0 1 17.4 8.726l-1.65 6.75a1.125 1.125 0 0 1-1.087.835H1.835"}),v="0 0 18 18";var b=n(7521),y=n(9187),x=n(4869),w=n(3456),$=n(9586),k=n(8579),E=n(9549);const I=(0,n(8044).A)("empty-state",["message","icon"]);(0,d.pU)(r),(0,d.pU)(o);const j=i.Ay.div(({theme:e})=>{const t=(0,y.A)(()=>(0,l.B3)(e.base.palette["foreground-color"],e.base.transparency["transparent-2"]));return i.AH`
    height: 100%;

    ${d.vE} {
      font-size: 1.5rem;
      height: 1.5rem;
      width: 1.5rem;
      color: ${t};
    }
  `});j.defaultProps=E.qn;const C=(0,s.forwardRef)(function(e,t){const{base:{"icon-set":n}}=(0,w.A)(),r=(0,$.A)(),{testId:o,message:s=r("no_items"),...i}=e,l=(0,k.A)(o,I);return(0,a.jsxs)(c.A,{"data-testid":l.root,...i,as:j,ref:t,container:{direction:"column",alignItems:"center",justify:"center",gap:1},children:[(0,a.jsx)(d.Ay,{"data-testid":l.icon,name:"streamline"===n?"folder-empty":"galaxy"}),(0,a.jsx)(b.A,{"data-testid":l.message,variant:"secondary",children:s})]})}),S=(0,x.A)(C,I)},3901:(e,t,n)=>{n.d(t,{gP:()=>x});var r=n(4848),o=n(1594),a=n(8267),s=n(5206),i=n(9549),l=n(9463),c=n(574),d=n(2365),u=n(6629);var m=n(8579),p=n(2477),f=n(4853),h=n(6416),g=n(1649),A=n(4869);const v=(0,n(8044).A)("fullscreen",[]),b=a.Ay.div(({theme:e,fullscreen:t})=>a.AH`
      ${t&&a.AH`
        --content-height-in-view: 100vh;
        position: fixed;
        z-index: ${e.base["z-index"].backdrop};
        inset: 0;
      `}
    `);b.defaultProps=i.qn;const y=(0,o.createContext)(void 0),x=()=>(0,o.useContext)(y),w=({parentJSX:e,parentElRef:t})=>{const{portalTarget:n}=(0,l.A)();(0,c.A)(t);const{disableScroll:a,enableScroll:i}=((e=":root")=>{const t=(0,o.useRef)(0),n=(0,o.useRef)(null),{styleSheetTarget:r}=(0,l.A)(),a=(0,o.useCallback)(()=>{n.current?.remove(),n.current=null},[]),s=(0,o.useCallback)(()=>{if(n.current)return;const o=document.querySelector(e);if(!o)return;const[a,s]=(0,d.A)(o);(a||s)&&(n.current=document.createElement("style"),n.current.nonce=window.__webpack_nonce__,n.current.textContent=`\n      ${e} {\n        ${s?`padding-inline-end: ${t.current}px !important`:""};\n        ${a?`padding-block-end: ${t.current}px !important`:""};\n        overflow: hidden !important;\n      }\n    `,(r??document.head).append(n.current))},[e]);return(0,o.useLayoutEffect)(()=>(t.current=(0,u.A)(),a),[a]),{enableScroll:a,disableScroll:s}})();return(0,o.useEffect)(()=>(a(),i),[]),n?(0,s.createPortal)((0,r.jsx)(g.A,{portalTarget:t.current??void 0,children:e}),n):null};(0,A.A)((0,o.forwardRef)(function({children:e,testId:t,...n},a){const s=(0,m.A)(t,v),[i,l]=(0,p.A)(),c=(0,f.A)(l,a),[d,u]=(0,p.A)(),[g,A]=(0,o.useState)(void 0),x=(0,o.useMemo)(()=>[g,()=>{A(e=>!e)}],[g]),$=(0,h.A)(d,!!g),k=(0,r.jsx)(b,{"data-testid":s.root,"data-fullscreen-enabled":!!g||void 0,...n,ref:c,fullscreen:!!g,"data-popover-id":$,children:e});return(0,r.jsx)(y.Provider,{value:x,children:g&&i?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{ref:u,style:{display:"none"}}),(0,r.jsx)(w,{parentJSX:k,parentElRef:c})]}):k})}),v)},3974:(e,t,n)=>{n.d(t,{A:()=>r});const r=(e,t)=>Object.hasOwn(e,t)},5190:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(1594),o=n(393);const a=(e,t=document,n=[])=>{const a=(0,r.useCallback)(t=>{"Escape"===t.key&&e(t)},[e,...n]);(0,o.A)("keydown",a,{target:t})}},6224:(e,t,n)=>{n.d(t,{A:()=>yt});var r={};n.r(r),n.d(r,{Component:()=>W,name:()=>J,set:()=>G,viewBox:()=>Y});var o={};n.r(o),n.d(o,{Component:()=>te,name:()=>ee,set:()=>Q,viewBox:()=>ne});var a={};n.r(a),n.d(a,{Component:()=>Ve,name:()=>Ne,set:()=>Ze,viewBox:()=>Oe});var s={};n.r(s),n.d(s,{Component:()=>Ge,name:()=>Xe,set:()=>Ke,viewBox:()=>Je});var i={};n.r(i),n.d(i,{Component:()=>pt,name:()=>mt,set:()=>ut,viewBox:()=>ft});var l=n(4848),c=n(1594),d=n(8267),u=n(9549),m=n(3351),p=n(8579),f=n(4853),h=n(712),g=n(5582),A=n(8268),v=n(9463);var b=n(5190),y=n(7940),x=n(6878),w=n(8889),$=n(150),k=n(9586),E=n(4685),I=n(7666),j=n(9749);const C=["button","a","input","li","legend"];var S=n(3700);const H=e=>e.charAt(0).toUpperCase()+e.slice(1);var R=n(4869),D=n(7491),M=n(6765),L=n(2884);const F=(e,t,n,r,o)=>{(0,c.useEffect)(()=>{let a=null;if(t>0){const n=e?.current??o?.current?.getRootNode()??document;if(!(0,A.A)(n,HTMLElement,SVGElement,Document,ShadowRoot))return;const s=n.querySelectorAll(r);s.length>t&&(a=s[t])}if(a){const t=new IntersectionObserver(e=>{e[0].isIntersecting&&n()},{root:e.current??null});return t.observe(a),()=>{t.disconnect()}}},[n,t])};var P=n(2558),T=n(9466),q=n(2697);const _=(0,c.createContext)({mode:"action",variant:"drill-down",itemLayout:"stacked",scrollAt:7,loading:!1,componentId:(0,E.A)(),pushFlyoutId:()=>null,flyOutActiveIdStack:[],focusControl:null,updateActiveDescendants:()=>null,setFocusDescendant:()=>null,setFocusReturnEl:()=>null,getScopedItemId:()=>"",updateParentDescendantStack:()=>null});var z=n(7521),B=n(7501),U=n(8044);const Z=(0,U.A)("meta-list",[]),N=d.Ay.ul(({wrapItems:e})=>d.AH`
    list-style: none;
    overflow: hidden;

    /* Negative margin to account for overflow clipping of focus indicator */
    padding: 0.3rem;
    margin: -0.3rem;

    ${!e&&d.AH`
      white-space: nowrap;
    `}
  `),V=d.Ay.li(({wrapItems:e})=>d.AH`
    min-width: 0;
    display: inline-block;

    ${e?d.AH`
          overflow-wrap: break-word;
        `:d.AH`
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        `}

    &[role='separator'] {
      -webkit-user-select: none;
      user-select: none;
    }
  `),O=(0,c.forwardRef)(function({testId:e,items:t,wrapItems:n=!0,...r},o){const a=(0,p.A)(e,Z),s=t.length<=1?"none":void 0;return(0,l.jsx)(B.A,{"data-testid":a.root,...r,as:N,role:s,container:{colGap:.5,alignItems:"center",wrap:n?"wrap":"nowrap"},wrapItems:n,ref:o,children:t.flatMap((e,t,r)=>e?[(0,l.jsx)(z.A,{as:V,variant:"secondary",role:s,wrapItems:n,children:e},`${t+0}`)].concat(t!==r.length-1?[(0,l.jsx)(z.A,{as:V,"aria-hidden":!0,variant:"secondary",children:"•"},`${t+0}-sep`)]:[]):[])})}),K=(0,R.A)(O,Z);var X=n(9721);const G="budicon",J="caret-left",W=()=>(0,l.jsx)("path",{d:"M17.25 21H14.5L8 12.5 14.5 4h2.75l-6.5 8.5z"}),Y="0 0 25 25",Q="budicon",ee="caret-right",te=()=>(0,l.jsx)("path",{d:"M8 4h2.75l6.5 8.5-6.5 8.5H8l6.5-8.5z"}),ne="0 0 25 25";var re=n(8072),oe=n(1564),ae=n(331);var se=n(2477),ie=n(5387);const le=d.Ay.mark(({theme:e})=>d.AH`
    color: ${e.base.colors.black};
    background-color: ${e.components.mark["background-color"]};
    font-weight: ${e.components.mark["font-weight"]};
  `);le.defaultProps=u.qn;const ce=e=>(0,l.jsx)(le,{...e});var de=n(3974);const ue={isItem:e=>(0,de.A)(e,"primary"),getItem(e,t){let n;return e.some(e=>this.isItem(e)&&e.id===t?(n=e,!0):!!e.items&&(n=this.getItem(e.items,t),!!n)),n},getPath(e,t){let n=[];return e.some(e=>{if(e.id===t)return n=[e],!0;if(e.items){const r=this.getPath(e.items,t);return r.length&&(n=r.concat(e)),!!n.length}return!1}),n},setItem(e,t,n){return e.map(e=>e.id===t?{...n}:e.items?{...e,items:this.setItem(e.items,t,n)}:e)},mapItem(e,t,n){return e.map((e,r,o)=>{let a=e;return e.items&&(a={...a,items:this.mapItem(e.items,t,n)}),this.isItem(a)&&e.id===t&&(a=n(a,r,o)),a})},mapTree(e,t){return e.map((e,n,r)=>{let o=e;return e.items&&(o={...o,items:this.mapTree(e.items,t)}),this.isItem(o)?t(o,n,r):o})},flatten(e,t=[],n={parentFirst:!1}){let r=[],o=[];return e.forEach(e=>{if(this.isItem(e)&&r.push(t.length>0?{...e,ancestors:t}:e),e.items){const a=this.flatten(e.items,[...t,e],n);n.parentFirst?o=[...o,...a]:r=[...r,...a]}}),n.parentFirst?[...r,...o]:r},toggleSelected(e,t,n,r){return this.mapTree(e,e=>{if(this.isItem(e)){if(e.id===t)return{...e,selected:void 0!==r?r:!e.selected};if("single-select"===n)return{...e,selected:!1}}return e})},selectItem(e,t,n){return this.toggleSelected(e,t,n,!0)},deselectItem(e,t,n){return this.toggleSelected(e,t,n,!1)},getSelected(e){return e.reduce((e,t)=>(this.isItem(t)&&t.selected&&(e=[...e,t]),t.items&&(e=[...e,...this.getSelected(t.items)]),e),[])},prependTo(e,t,n){return n?this.mapItem(e,n,e=>({...e,items:[...t,...e.items??[]]})):[...t,...e]},appendTo(e,t,n){return n?this.mapItem(e,n,e=>({...e,items:[...e.items??[],...t]})):[...e,...t]},getNextItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(e,t,r)=>(n=r[t+1],e)),n},getPrevItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(e,t,r)=>(n=r[t-1],e)),n},getParentItem(e,t){if(!t)return;const[,n]=this.getPath(e,t);return n}};var me=n(1357),pe=n(6883),fe=n(9187),he=n(7321);const ge=d.AH`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Ae=((0,d.Ay)(x.Ay)`
  align-self: center;
`,(0,d.Ay)(M.Ay)``),ve=d.Ay.li(({theme:{base:e,components:t},isParentItem:n,itemLayout:r,mode:o="action","aria-selected":a=!1,selectableParent:s=!1})=>{const i=(0,fe.A)(()=>(0,me.jh)(.85,e.palette["primary-background"],e.palette.interactive)),l=(0,fe.A)(()=>(0,me.jh)(.95,e.palette["primary-background"],e.palette.interactive)),c=(0,fe.A)(()=>(0,me.B3)(t["radio-check"][":checked"]["background-color"],e.transparency["transparent-5"])),u=t["radio-check"][":checked"]["background-color"],m=(0,fe.A)(()=>(0,he.W0)(u));return d.AH`
      min-height: ${e["hit-area"]["mouse-min"]};
      padding-block: calc(0.75 * ${e.spacing});
      padding-inline: ${e.spacing};
      cursor: pointer;

      ${"inline"===r&&d.AH`
        justify-content: flex-start;

        ${X.J0} {
          /* Sets grid columns based on SummaryItem content combinations */

          &:has(${X.Ik}):has(${X.oF}):has(${X.Af}) {
            grid-template-areas: 'visual primary secondary actions';
            grid-template-columns: auto auto 1fr auto;
          }

          &:has(${X.Ik}):has(${X.oF}):not(:has(${X.Af})) {
            grid-template-areas: 'visual primary secondary';
            grid-template-columns: auto auto 1fr;
          }

          &:has(${X.Ik}):not(:has(${X.oF})):has(${X.Af}) {
            grid-template-areas: 'visual primary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:has(${X.Ik}):not(:has(${X.oF})):not(
              :has(${X.Af})
            ) {
            grid-template-areas: 'visual primary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${X.Ik})):has(${X.oF}):has(${X.Af}) {
            grid-template-areas: 'primary secondary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:not(:has(${X.Ik})):has(${X.oF}):not(
              :has(${X.Af})
            ) {
            grid-template-areas: 'primary secondary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${X.Ik})):not(:has(${X.oF})):has(
              ${X.Af}
            ) {
            grid-template-areas: 'primary actions';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${X.Ik})):not(:has(${X.oF})):not(
              :has(${X.Af})
            ) {
            grid-template-areas: 'primary';
            grid-template-columns: 1fr;
            flex-grow: 0;
          }

          & > ${X.ox} {
            ${ge};
          }

          & > ${X.oF} {
            ${ge};

            ul {
              li {
                ${ge};
              }
              justify-content: end;
            }
          }

          & > ${X.Af} > ${B.D} {
            justify-content: end;
          }
        }
      `}

      @media (pointer: coarse) {
        min-height: ${e["hit-area"]["finger-min"]};
      }

      &:focus-within {
        background-color: ${i};
      }

      &:hover {
        ${Ae} {
          visibility: visible;
          ${"single-select"===o&&d.AH`
            color: ${a?u:c};
          `}
          ${"multi-select"===o&&d.AH`
            ${!a&&d.AH`
              border-color: ${t["form-control"][":hover"]["border-color"]};
            `}
          `}
        }
      }

      &:hover:not([aria-disabled='true']) {
        background-color: ${l};
      }

      a:first-of-type {
        display: block;
        width: 100%;
        text-decoration: none;
        color: inherit;
      }

      ${n&&!s&&("multi-select"===o||"single-select"===o)&&d.AH`
        padding-inline-start: calc(1.125rem + 2 * ${e.spacing});
      `}

      ${pe.e} {
        flex-grow: 1;
      }

      ${Ae} {
        margin-inline-start: 0;
        ${"single-select"===o&&d.AH`
          ${a?d.AH`
                color: ${u};
              `:d.AH`
                visibility: hidden;
              `}
        `}
        ${"multi-select"===o&&d.AH`
          ${a?d.AH`
                color: ${m};
                background-color: ${u};
                border: 0.0625rem solid ${t["radio-check"][":checked"]["border-color"]};
              `:d.AH`
                color: transparent;
                border: 0.0625rem solid ${t["radio-check"]["border-color"]};
              `}
          border-radius: min(
            calc(${e["border-radius"]} * ${t.checkbox["border-radius"]}),
            0.25rem
          );
        `}
      }

      &[aria-disabled='true'] {
        background-color: ${t["form-control"][":disabled"]["background-color"]};
        opacity: ${e["disabled-opacity"]};
      }
    `});ve.defaultProps=u.qn;const be=d.Ay.div`
  ${M.vE} {
    width: 1em;
    height: 1em;
  }

  & > ${z.D} {
    ${ge};
  }
`,ye=(d.Ay.p`
  ${me.Ic}
`,d.Ay.li(({theme:e})=>d.AH`
    height: 0.0625rem;
    background-color: ${e.base.palette["border-line"]};
    margin: ${e.base.spacing} 0;
  `));ye.defaultProps=u.qn;const xe=d.Ay.div(({theme:e})=>d.AH`
    min-height: ${e.base["hit-area"]["mouse-min"]};
    font-weight: ${e.base["font-weight"]["semi-bold"]};
    background-color: ${e.base.palette["secondary-background"]};

    @media (pointer: coarse) {
      min-height: ${e.base["hit-area"]["finger-min"]};
    }
  `);xe.defaultProps=u.qn;const we=d.Ay.legend(({theme:{base:e}})=>{const t=(0,fe.A)(()=>(0,me.jh)(.95,e.palette["primary-background"],e.palette.interactive)),n=(0,fe.A)(()=>(0,me.jh)(.85,e.palette["primary-background"],e.palette.interactive));return d.AH`
    cursor: pointer;
    width: 100%;
    background-color: ${e.palette["primary-background"]};

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &:focus-within {
      box-shadow: ${e.shadow["focus-inset"]};
      background-color: ${n};
    }

    &:hover:not([aria-disabled='true']):not([data-current='true']) {
      background-color: ${t};
    }
    color: ${e.palette["foreground-color"]};
    padding: calc(0.5 * ${e.spacing}) ${e.spacing};
    text-align: start;
    border-radius: inherit;

    > ${pe.e} {
      grid-column-gap: ${e.spacing};
    }

    ${M.vE} {
      /* Fixes vertical align issue increasing box size beyond square */
      display: block;
    }
  `});we.defaultProps=u.qn;const $e=d.Ay.ul(({theme:e})=>d.AH`
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    height: 100%;
    border-radius: inherit;

    ${q.q} {
      padding: ${e.base.spacing};
      height: auto;
    }

    li:not(:first-child):not([role='presentation']) > ${xe} {
      margin-block-start: ${e.base.spacing};
    }
  `);$e.defaultProps=u.qn;const ke=d.Ay.fieldset(({theme:e})=>d.AH`
    background-color: ${e.base.palette["primary-background"]};
    border: 0;
    border-radius: inherit;
  `);ke.defaultProps=u.qn;const Ee=(0,d.Ay)(ke)`
  min-width: 10rem;
`,Ie=d.Ay.li`
  display: block;
  position: relative;
  height: 2.8rem;
`,je=d.Ay.div(({theme:e})=>d.AH`
    position: relative;
    overflow: hidden;
    transition: height ${e.base.animation.speed} ${e.base.animation.timing.ease};

    & > fieldset:first-child {
      position: relative;
    }

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  `);je.defaultProps=u.qn;const Ce=d.Ay.div(({theme:e})=>{const t=`0.0625rem solid ${e.base.palette["border-line"]}`;return d.AH`
    display: flex;
    flex-direction: column;

    &,
    ${je} {
      max-height: inherit;
    }

    &:focus {
      box-shadow: ${e.base.shadow.focus};
      outline: none;
    }

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &[data-active-scope='true'] [data-current='true'] {
      box-shadow: ${e.base.shadow["focus-inset"]};
    }

    ${D.U}:first-child {
      + ${je}, + header {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    > header,
    > footer {
      padding: ${e.base.spacing};
    }

    > header {
      border-bottom: ${t};
    }

    > footer {
      border-top: ${t};
    }
  `});Ce.defaultProps=u.qn;const Se=(0,U.A)("menu",["create-new"]),He=(0,U.A)("menu-item",[]);(0,M.pU)(r,o,re);const Re=({expandHandler:e})=>{const{end:t}=(0,y.A)(),n=(0,l.jsx)(M.Ay,{name:`caret-${t}`});return e?(0,l.jsx)(x.Ay,{as:"span",icon:!0,variant:"simple","aria-hidden":!0,onClick:e,children:n}):n},De=({ancestors:e=[]})=>{const t=e.length>2,n=t?[e[0],e[e.length-1]]:e,{end:r}=(0,y.A)();return(0,l.jsx)(B.A,{container:{gap:.5,alignItems:"center"},as:be,title:e.map(e=>ue.isItem(e)?e.primary:e.label).join(" > "),children:n.map((e,n,o)=>{const a=ue.isItem(e)?e.primary:e.label;return(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(z.A,{variant:"secondary",children:a}),n<o.length-1&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(z.A,{variant:"secondary",children:(0,l.jsx)(M.Ay,{name:`caret-${r}`})}),t&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(z.A,{variant:"secondary",children:"…"}),(0,l.jsx)(z.A,{variant:"secondary",children:(0,l.jsx)(M.Ay,{name:`caret-${r}`})})]})]})]},e.id)})})},Me=(0,R.A)(({testId:e,id:t,primary:n,secondary:r,ancestors:o,visual:a,count:s,items:i,selected:d,partial:u,href:m,tooltip:f,onClick:h,onExpand:g,disabled:A,role:v="menuitem",...b})=>{const y=(0,k.A)(),{mode:x,onItemClick:w,itemLayout:$,accent:E,variant:I,setFocusDescendant:j,getScopedItemId:C,arrowNavigationUnsupported:S}=(0,c.useContext)(_),H=(0,p.A)(e,He),R="single-select"===x||"multi-select"===x,D=i&&"boolean"==typeof d,M=(0,c.useMemo)(()=>C(t),[t,C]),L=`${t}-count`,F=`${t}-secondary`,P=(0,c.useCallback)(e=>{if(e.detail>0){const t=e.target,n=t.getAttribute("role")===v?t:t.closest(`li[role="${v}"]`);n&&j(n)}h?.(t,e),w?.(t,e)},[h,w,t]),T=(0,c.useCallback)(e=>{g?.(t,e),e.stopPropagation()},[g,t]);let q;if(E&&!i){const e="function"==typeof E?E(n):E;q=((e,t,n)=>{const r=[];if(t.global||t.sticky){let o,a=0;for(;o=t.exec(e);)r.push(e.slice(a,o.index),n(o[0])),a=o.index+o[0].length;r.push(e.slice(a))}else{const o=t.exec(e);o?r.push(e.slice(0,o.index),n(o[0]),e.slice(o.index+o[0].length)):r.push(e)}return r.flatMap((e,t)=>e?(0,l.jsx)(c.Fragment,{children:e},t):[])})(n,e,e=>(0,l.jsx)(ce,{children:e}))}const U=o?(0,l.jsx)(De,{ancestors:o}):r&&(0,l.jsx)(K,{items:r,id:F}),[Z,N]=(0,se.A)(),V=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(X.Ay,{ref:N,primary:q||(i?n:(0,l.jsx)(z.A,{children:n})),secondary:U,layout:$,visual:a,actions:i||s?(0,l.jsxs)(B.A,{container:{gap:1,alignItems:"center",justify:"center"},children:[void 0!==s&&(0,l.jsx)(oe.A,{id:L,"aria-label":y("menu_item_count",[s]),children:s}),i&&(0,l.jsx)(Re,{expandHandler:D?T:void 0})]}):void 0,container:{colGap:1}}),f&&(0,l.jsx)(ie.A,{target:Z,hideDelay:"none",showDelay:"short",children:f})]}),O=(0,c.useMemo)(()=>{const e=y("menu_collapsed",[n]);return i?y(S?"menu_item_shift_space_expand_collapse":"menu_item_expand_arrow",[e]):n},[d,n,i]),G=(0,c.useMemo)(()=>{let e;return r?(e=F,void 0!==s&&s>=0&&(e=`${e} ${L}`)):e=void 0!==s&&s>=0?L:"",e},[i,r,L,F]);return(0,l.jsxs)(B.A,{"data-testid":H.root,...b,container:{alignItems:"center",justify:"between",gap:1},id:M,as:ve,"aria-label":O,"aria-describedby":G,role:v,"aria-disabled":A,"data-expand":!!i,itemLayout:$,tabIndex:-1,disabled:A,onMouseDown:e=>{e.preventDefault()},onClick:e=>{if(!A)return i&&"boolean"!=typeof d?T(e):P(e)},onMouseEnter:"flyout"===I?T:void 0,href:m,mode:x,isParentItem:!!i,"aria-selected":!!d,selectableParent:D,children:[R&&(!i||D)&&(0,l.jsx)(Ae,{name:"check"}),m&&!R?(0,l.jsx)(ae.A,{href:m,tabIndex:"-1",children:V}):V]})},He),Le=(e,t,n,r)=>{const o=!!e.firstElementChild?.matches("legend"),a=e.querySelectorAll([':scope > ul > li:not([role="separator"]):not([role="presentation"])',':scope > ul > li[role="presentation"] > div:first-child',':scope > ul > li > ul[role="group"] > li:not([role="separator"])'].join(", "))[Math.max(Math.min(r-(o?2:1),n-1),0)];let s;if(a){const t=e.getBoundingClientRect().top,o=a.getBoundingClientRect(),i=e.querySelector(":scope > ul")?.scrollTop??0;let l=o.bottom;n>r&&(l=(o.top+o.bottom)/2),s=l-t+i}t.style.height=s?`${s}px`:""},Fe=({id:e,label:t,items:n,itemRole:r})=>{const{componentId:o}=(0,c.useContext)(_),a=`${o}-${e}`;return(0,l.jsxs)("li",{role:"presentation",children:[(0,l.jsx)(B.A,{container:{alignItems:"center",pad:[.5,1]},as:xe,id:a,children:t}),(0,l.jsx)("ul",{role:"group","aria-labelledby":a,children:n.length>0&&n.map(e=>(0,c.createElement)(Me,{...e,key:e.id,role:r??"menuitem"}))})]})},Pe=e=>Array.isArray(e.items),Te=(0,c.forwardRef)(function({items:e,parent:t,menuRole:n},r){const o=(0,k.A)(),a=(0,f.A)(r),s=(0,c.useRef)(null),i=(0,c.useRef)(null),d=(0,c.useRef)(null),[u,m]=(0,c.useState)(),{componentId:p,loadMore:h,loading:g,scrollAt:A,emptyText:v,onItemExpand:b,pushFlyoutId:y,flyOutActiveIdStack:x,updateActiveDescendants:w,updateParentDescendantStack:E}=(0,c.useContext)(_),{announcePolite:I}=(0,L.A)();F(s,e.length-1,()=>{h?.(t?.item?.id)},":scope > li"),(0,P.A)(()=>{if(u){const t=e.find(e=>e.id===u.id);t&&Pe(t)?m(t):m(void 0)}},[u,e]),(0,c.useEffect)(()=>{e.some(e=>x.includes(e.id))||(d.current=null,m(void 0))},[x]),(0,c.useEffect)(()=>{0!==e.length||g||I({message:v??o("no_items")})},[e.length,g]);const j=(0,c.useMemo)(()=>e.length?e.map(e=>ue.isItem(e)?(0,c.createElement)(Me,{...e,key:e.id,"aria-haspopup":!!e.items,"aria-expanded":e.items?e.id===u?.id:void 0,role:"listbox"===n?"option":"menuitem",onExpand:(t,n)=>{e.items?(d.current=n.currentTarget,m(Pe(e)?e:void 0),e?.onExpand?.(t,n),b?.(t,n),y(e.id||p),w(),E&&E(d.current.closest("li"))):(d.current=null,m(void 0))}}):(0,c.createElement)(Fe,{...e,key:e.id,itemRole:"listbox"===n?"option":"menuitem"})):g?null:(0,l.jsx)(q.A,{message:v,forwardedAs:"li"}),[e,g,v,u,x]),C=(0,l.jsxs)($e,{ref:s,role:n,children:[j,g&&!u&&(0,l.jsx)(Ie,{children:(0,l.jsx)(T.A,{placement:"local"})})]});(0,c.useLayoutEffect)(()=>{m(void 0),a.current&&(i.current=a.current.parentElement,Le(a.current,a.current,e.length,A))},[e]);const S=(0,c.useCallback)(()=>{u&&m(void 0)},[u]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Ee,{ref:a,onScroll:S,"data-flyout-menu-parent-id":p,"data-flyout-menu-id":t?.item.id||p,children:C}),u&&a.current&&(0,l.jsx)($.A,{target:d.current,show:!0,strategy:"fixed",placement:"right-start",portal:!1,children:(0,l.jsx)(Te,{items:u.items,parent:{el:a.current,item:u,siblingItems:e,setExpandedItem:m,returnFocusRef:d},menuRole:n})})]})}),qe=Te;var _e=n(7784),ze=n(1862);const Be=e=>{const t=e.current?.getRootNode();if((0,A.A)(t,Document)||(0,A.A)(t,ShadowRoot))for(const n of t.childNodes)if(n.contains(e.current)&&(0,A.A)(n,HTMLElement))return n},Ue="calc(100vw - 20rem)",Ze="budicon",Ne="drag",Ve=()=>(0,l.jsx)("path",{d:"M9.5 5.136V3.5h1.708v1.636H9.5Zm0 4.111V7.611h1.708v1.636H9.5Zm0 4.071v-1.636h1.708v1.636H9.5Zm0 4.11v-1.635h1.708v1.636H9.5Zm0 4.072v-1.636h1.708V21.5H9.5Zm4.292-16.364V3.5H15.5v1.636h-1.708Zm0 4.111V7.611H15.5v1.636h-1.708Zm0 4.071v-1.636H15.5v1.636h-1.708Zm0 4.11v-1.635H15.5v1.636h-1.708Zm0 4.072v-1.636H15.5V21.5h-1.708Z"}),Oe="0 0 25 25",Ke="budicon",Xe="arrow-micro-up-down",Ge=()=>(0,l.jsx)("path",{d:"m12.402 5 4.597 6H8l4.402-6Zm.195 15L8 14h9l-4.403 6Z"}),Je="0 0 25 25";(0,M.pU)(a),(0,M.pU)(s);const We=(0,d.Ay)(x.Ay)(({rotateIcon:e})=>d.AH`
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    &:not(:focus) {
      ${me.Ic};
    }

    ${e&&d.AH`
      ${M.vE} {
        transform: rotate(90deg);
      }
    `}
  `),Ye=d.Ay.div(({theme:e})=>d.AH`
    position: absolute;
    inset-inline-start: 0;
    inset-block: 0;
    inline-size: 0.125rem;
    background-color: transparent;
    transition: background-color ${e.base.animation.speed} ${e.base.animation.timing.ease};
    cursor: ew-resize;
    z-index: ${e.base["z-index"].max};

    ::before {
      content: '';
      position: absolute;
      inset: 0;
      width: calc(${e.base["hit-area"].compact} * 0.75);
    }

    &:hover {
      background-color: ${e.base.palette.interactive};
    }

    ${x.OV} {
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: calc(-2 * ${e.base.spacing});
      translate: 0 -50%;
      box-shadow: ${e.base.shadow.focus};
    }
  `);Ye.defaultProps=u.qn;const Qe=(0,c.forwardRef)(function({onMouseDown:e,onKeyDown:t},n){const r=(0,f.A)(n),o=(0,k.A)(),[a,s]=(0,c.useState)(!1),[i,d]=(0,c.useState)(!1);(0,b.A)(()=>{s(!1),d(!1)});const u=t=>{const n=Be(r);n&&(n.style.setProperty("user-select","none"),s(!0),e?.(t))};return(0,l.jsx)(Ye,{onMouseDown:u,onMouseUp:()=>{const e=Be(r);e&&(e.style.removeProperty("user-select"),s(!1))},ref:r,children:(0,l.jsx)(We,{tabIndex:0,icon:!0,label:a||i?void 0:o("resize"),"aria-label":o(a||i?"drag_handle_cancel_description":"drag_handle_activate_description"),onMouseDown:u,onKeyDown:e=>{"Space"===e.code&&(e.preventDefault(),d(!i)),t?.(e,i)},onBlur:()=>{d(!1)},rotateIcon:i,children:(0,l.jsx)(M.Ay,{name:i?"arrow-micro-up-down":"drag"})})})}),et=(0,me.ir)("21.875rem"),tt=d.Ay.div(e=>{const{state:t,shadow:n,position:r,placement:o,transitionSpeed:a,size:s,resizeable:i,theme:l}=e;let c="horizontal",u="X",m="top";"top"!==o&&"bottom"!==o||(c="vertical",u="Y",m="left");const p="open"===t||"opening"===t?0:"100%",f=a||l.base.animation.speed;return d.AH`
    z-index: ${l.base["z-index"].drawer};
    position: ${r};
    ${o}: 0;
    ${m}: 0;
    height: ${"vertical"===c?s:"100%"};
    width: ${"horizontal"===c?s:"100%"};
    transition-property: transform, box-shadow, opacity;
    transition-duration: max(${f}, 0.0001s);
    transition-timing-function: ${l.base.animation.timing.ease};
    transform: ${"open"===t?"none":`translate${u}(${"top"===o||"left"===o?"-":""}${p})`};

    ${n&&d.AH`
      box-shadow: ${l.base.shadow.high};
    `}

    ${i&&d.AH`
      width: ${"horizontal"===c?"var(--resize-drawer-width)":"100%"};
    `}
  `});tt.defaultProps=u.qn;const nt=(0,c.forwardRef)(function(e,t){const{open:n=!1,shadow:r=!1,position:o="absolute",children:a,placement:s="right",transitionSpeed:i,size:d="100%",resizeable:u=!1,onAfterOpen:m,onAfterClose:p,onBeforeOpen:h,onBeforeClose:g,onOuterClick:A,nullWhenClosed:v=!1,...b}=e,x=(0,f.A)(t),{ltr:w,rtl:$}=(0,y.A)(),[k,E]=(0,c.useState)(n?"open":"closed");let I=(0,S.A)(k);I||(I=k),(0,_e.A)("mousedown",[x],(0,c.useCallback)(()=>{n&&A?.()},[n,A])),(0,c.useEffect)(()=>{!n||"closed"!==k&&"closing"!==k?n||"open"!==k&&"opening"!==k?n&&"open"===k&&"open"!==I?m?.():n||"closed"!==k||"closed"===I||p?.():(g?.(),E("closing")):(h?.(),(0,ze.A)(x.current),E("opening"))},[n,k,I,h,g,m,p]);const j=(0,c.useCallback)(e=>{e.target===x.current&&"transform"===e.propertyName&&E(n?"open":"closed")},[n]),C=(0,c.useRef)();(0,c.useEffect)(()=>{if(!u||!x.current)return;const e=Be(x);e&&(e.style.getPropertyValue("--resize-drawer-width")||e.style.setProperty("--resize-drawer-width",d))},[x.current]);const H=(0,c.useCallback)(e=>{const t=Be(x),n=x.current?.getBoundingClientRect();if(!n||!t)return;C.current=e.clientX;const r=new AbortController;t.addEventListener("mousemove",e=>{if(!C.current||!n.width)return;const r=C.current,o="right"===s?r-e.clientX:e.clientX-r,a=Math.max(o+n.width,parseInt(et,10));t.style.setProperty("--resize-drawer-width",`clamp(${et}, ${a}px, ${Ue})`)},{passive:!0,signal:r.signal}),t.addEventListener("mouseup",()=>{r.abort()},{once:!0})},[s]),R=(0,c.useCallback)((e,t)=>{if(!t)return;const n=Be(x),r=.05*document.documentElement.clientWidth,o=x.current?.getBoundingClientRect();if(!o||!n)return;if("ArrowLeft"!==e.code&&"ArrowRight"!==e.code)return;e.preventDefault();const a=("ArrowLeft"===e.code?1:-1)*("right"===s?1:-1),i=Math.max(o.width+a*r,parseInt(et,10));n.style.setProperty("--resize-drawer-width",`clamp(${et}, ${i}px, ${Ue})`)},[s]),D=u&&"open"===k&&("left"===s&&$||"right"===s&&w);return"closed"===k&&!n&&v?null:(0,l.jsxs)(tt,{ref:x,position:o,shadow:r&&n,transitionSpeed:i,placement:s,size:d,resizeable:u,open:n,state:k,onTransitionEnd:j,...b,children:[a,D&&(0,l.jsx)(Qe,{onMouseDown:H,onKeyDown:R})]})});(0,M.pU)(r,o);const rt=({text:e,onClick:t})=>{const n=(0,k.A)(),{arrowNavigationUnsupported:r}=(0,c.useContext)(_),{start:o}=(0,y.A)(),a=(0,c.useCallback)(e=>{"Enter"!==e.key&&e.key!==`Arrow${H(o)}`||t()},[t,o]);return(0,l.jsx)(B.A,{container:{alignItems:"center"},as:we,onClick:t,onKeyDown:a,"data-collapse":"true","aria-expanded":!0,"aria-label":`${n("menu_expanded",[e||""])} ${n(r?"menu_item_collapse_shift_space":"menu_item_collapse_arrow")}`,children:(0,l.jsx)(X.Ay,{visual:(0,l.jsx)(M.Ay,{name:`caret-${o}`}),primary:e})})},ot=(e,t)=>{e.disabled=t;const n=e.querySelector("legend button");n&&(n.disabled=t)},at=(e,t)=>e.reduce((e,t)=>!ue.isItem(t)&&t.items?e+t.items.length+1:e+1,t?1:0),st=e=>e.flatMap(e=>ue.isItem(e)?e:[e,...e.items?e.items:[]]),it=(0,c.forwardRef)(function({items:e,parent:t,id:n,menuRole:r,...o},a){const s=(0,k.A)(),i=(0,c.useRef)(null),d=(0,f.A)(a),u=(0,c.useRef)(null),m=(0,c.useRef)(null),[p,h]=(0,c.useState)(!t),[g,A]=(0,c.useState)(),{scrollAt:v,"aria-label":b,loadMore:x,loading:w,emptyText:$,currentItemId:E,onItemExpand:I,focusControl:j,updateActiveDescendants:C,setFocusReturnEl:S,onItemCollapse:H,expandTo:R}=(0,c.useContext)(_),{end:D}=(0,y.A)(),{announcePolite:M}=(0,L.A)();F(u,e.length-1,()=>{w||x?.(t?.item?.id)},":scope > li"),(0,c.useLayoutEffect)(()=>{d.current&&!g&&(i.current=d.current.parentElement,Le(d.current,i.current,at(e,w),v))}),(0,c.useEffect)(()=>{t&&h(!0)},[]),(0,P.A)(()=>{if(g){const t=st(e).find(e=>e.id===g.id);t&&Pe(t)?A(t):A(void 0)}},[g,e]),(0,P.A)(()=>{if(E){const t=st(e).find(e=>e.items?.length&&void 0!==ue.getItem(e.items,E));t&&(A(Pe(t)?t:void 0),C({preventScroll:!0}))}},[E,e,t]),(0,c.useEffect)(()=>{if(R?.parentItemId){const t=st(e).find(e=>e.id===R.parentItemId);if(t)A(Pe(t)?t:void 0),C({preventScroll:!0}),R.onComplete();else{const t=st(e).find(e=>e.items?.length&&void 0!==ue.getItem(e.items,R.parentItemId));t?A(Pe(t)?t:void 0):R.onComplete()}}},[R,e,t]);const z=(0,c.useCallback)((t,n)=>{const r=ue.getItem(e,t);m.current=n.currentTarget,r&&Pe(r)?A(r):A(void 0),r?.onExpand?.(t,n),I?.(t,n),C({preventScroll:!0})},[e]);(0,c.useEffect)(()=>{0!==e.length||w||M({message:$??s("no_items")})},[e.length,w]);const B=(0,c.useMemo)(()=>e.length?e.map((t,n)=>ue.isItem(t)?(0,c.createElement)(Me,{...t,key:t.id,role:"listbox"===r?"option":"menuitem",onExpand:t.items?z:void 0}):(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(Fe,{...t,items:t.items.map(e=>e.items?{...e,onExpand:z}:e),itemRole:"listbox"===r?"option":"menuitem"}),e[n+1]&&ue.isItem(e[n+1])&&(0,l.jsx)(ye,{role:"separator"})]},t.id)):w?null:(0,l.jsx)(q.A,{message:$,forwardedAs:"li"}),[e,w,$]),U=(0,l.jsxs)($e,{id:g?void 0:n,ref:u,role:r,...o,children:[t&&(0,l.jsx)(rt,{text:t.item.primary,onClick:()=>{h(!1)}}),B,w&&!g&&(0,l.jsx)(Ie,{children:(0,l.jsx)(T.A,{placement:"local",liveConfig:{contextualLabel:b??s("menu")}})})]});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(nt,{"aria-hidden":!!g,as:ke,ref:d,open:p,style:{opacity:g?0:1},disabled:!!g,placement:D,onBeforeOpen:()=>{t&&(t.el.style.opacity="0"),d.current&&(d.current.style.opacity="1")},onAfterOpen:()=>{t&&ot(t.el,!0)},onBeforeClose:()=>{t&&i.current&&(ot(t.el,!1),t.el.style.opacity="1",Le(t.el,i.current,at(t.siblingItems),v)),d.current&&(d.current.style.opacity="0")},onAfterClose:()=>{if(t){j?.focus();const e=t.returnFocusRef.current;t.setExpandedItem(void 0),e&&S(e?.closest("li")),H?.(t.item.id),C()}},children:U}),g&&d.current&&(0,l.jsx)(it,{id:n,items:g.items,parent:{el:d.current,item:g,siblingItems:e,setExpandedItem:A,returnFocusRef:m},menuRole:r})]})}),lt=it,ct=(0,c.forwardRef)(function(e,t){const n=(0,m.A)(),{testId:r,id:o=n,items:a=[],itemLayout:s="stacked",onCreateNew:i,mode:d="action",accent:u,scrollAt:h=7,emptyText:g,onItemClick:v,onItemActive:b,onItemExpand:w,loadMore:$,onItemCollapse:R,loading:L=!1,currentItemId:F,header:P,footer:T,variant:q="drill-down",focusControlEl:z,arrowNavigationUnsupported:B,"aria-describedby":U,"aria-label":Z,role:N="menu",listId:V,pauseDescendantEvaluation:O,menuList:K,handleRef:X,...G}=e,J=(0,p.A)(r,Se),W=(0,k.A)(),{end:Y,start:Q}=(0,y.A)(),ee=(0,m.A)(),te=(0,f.A)(t),ne=(0,c.useRef)(0),[re,oe]=(0,c.useState)(0),[ae,se]=(0,c.useState)(null),[ie,le]=(0,c.useState)([o]),[ce,de]=(0,c.useState)(),[ue,me]=(0,c.useState)(!1),[pe,fe]=(0,c.useState)([]),[he,ge]=(0,c.useState)(),Ae=!z,ve=(0,c.useMemo)(()=>`fieldset[data-flyout-menu-id="${ie[ie.length-1]}"]`,[ie]),be=(0,c.useMemo)(()=>z||te.current,[z,te.current]);(0,c.useImperativeHandle)(X,()=>({expandTo:e=>{ge(e)}}),[]);const ye=(0,c.useCallback)(e=>{le([...ie,e])},[ie]);(0,c.useEffect)(()=>{le([...ie,o])},[o]);const xe=(0,c.useCallback)(e=>{fe([...pe,e])},[pe]),we=(0,c.useCallback)(e=>btoa(encodeURIComponent(e)),[o]),$e=(0,c.useCallback)(e=>decodeURIComponent(atob(e)),[o]),ke=(0,c.useCallback)(({preventScroll:e=!1}={})=>{me(e),oe(Math.random())},[]),Ee=(0,c.useMemo)(()=>({focusEl:be,scope:te.current,scopeSelector:"drill-down"===q?'fieldset[aria-hidden="false"]':ve,selector:`[role="${"menu"===N?"menuitem":"option"}"], legend`,focusDescendantEl:ae,clearFocusDescendant:()=>{se(null)},focusReturnEl:ce,clearFocusReturn:()=>{de(null)},currentDescendantId:F?we(F):void 0,preventInitialScroll:ue,clearPreventScroll:()=>{me(!1)},pauseDescendantEvaluation:O}),[be,te.current,ve,ce,ae,F,ue,O]),{activeDescendant:Ie,descendants:He}=(({focusEl:e,scope:t,scopeSelector:n,selector:r,orientation:o="vertical",focusDescendantEl:a,clearFocusDescendant:s,focusReturnEl:i,clearFocusReturn:l,currentDescendantId:d,onClick:u,preventInitialScroll:m,pauseDescendantEvaluation:p=!1,clearPreventScroll:f},h=[])=>{const[g,v]=(0,c.useState)(0),b=(0,c.useRef)(""),x=(0,c.useRef)(p),[w,$]=(0,c.useState)(null),[k,S]=(0,c.useState)(null),[H,R]=(0,c.useState)(),{rtl:D}=(0,y.A)(),M=(0,c.useCallback)(()=>{H?.forEach(e=>{e.setAttribute("data-current","false")})},[H]),L=(0,c.useCallback)(e=>{M(),R(e?Array.from(e).filter(e=>(0,A.A)(e,HTMLElement)):null)},[H]),F=(0,c.useCallback)(({clear:t}={clear:!1})=>{const n=[];if(H&&H.length&&H.forEach(e=>{e.id=e.id||(0,E.A)(),n.push(e.id)}),t){const t=e?.getAttribute("aria-owns")?.split(" "),r=t?.filter(e=>!n.includes(e));e?.setAttribute("aria-owns",r?.join(" ")||"")}else e?.setAttribute("aria-owns",n.join(" "))},[e,H]),P=(0,c.useCallback)(()=>{if(p)return;let e=t;if(e&&(0,A.A)(e,HTMLElement)){if(n&&(e=e.querySelector(n)),!e)return void L(null);if(r){const t=e.querySelectorAll(r);L(t)}else{const t=e.querySelectorAll(I.U);L(t)}}else L(null);null===k&&S(0)},[t,n,r,p,k]);return(0,c.useEffect)(()=>{x.current=p},[p]),(0,c.useEffect)(()=>{if(!t||!e)return;t.setAttribute("data-active-scope",(0,j.A)()===e?"true":"false");const n=()=>{t.setAttribute("data-active-scope","true")},r=()=>{t.setAttribute("data-active-scope","false")};return e.addEventListener("focus",n),e.addEventListener("blur",r),()=>{e.removeEventListener("focus",n),e.removeEventListener("blur",r)}},[t,e]),(0,c.useEffect)(()=>{p||P()},[p]),(0,c.useEffect)(()=>{const e=setTimeout(()=>{P(),x.current||S(0)},0);return()=>clearTimeout(e)},[...h]),(0,c.useEffect)(()=>{p?(M(),F({clear:!0})):(F(),v(Math.random()))},[p,e,H]),(0,c.useEffect)(()=>{const t=()=>{l?.(),f?.(),null!==k&&k+1<H.length?S(k+1):S(0)},n=()=>{l?.(),f?.(),S(null!==k&&k-1>-1?k-1:H.length-1)},r=e=>{H?.length&&(["ArrowDown","ArrowUp"].includes(e.key)&&"vertical"===o&&e.preventDefault(),["ArrowLeft","ArrowRight"].includes(e.key)&&"horizontal"===o&&e.preventDefault(),setTimeout(()=>{switch(e.key){case"ArrowDown":"vertical"===o&&t();break;case"ArrowUp":"vertical"===o&&n();break;case"ArrowRight":"horizontal"===o&&(D?n():t());break;case"ArrowLeft":"horizontal"===o&&(D?t():n());break;case"Enter":if(null!==k){if(u){u(H[k]);break}const e=H[k].nodeName.toLowerCase();C.includes(e)?H[k].click():H[k].querySelector(`${C.join(",")}`)?.click()}}},0))};return!p&&e&&H?.length&&!d&&e.addEventListener("keydown",r),()=>{e?.removeEventListener("keydown",r)}},[e,k,H,p]),(0,c.useEffect)(()=>{!p&&H&&d&&H.forEach((e,t)=>{e.id===d&&S(t)})},[d,H,p]),(0,c.useEffect)(()=>{if(x.current)return;const t=w||k,n=i?.id;let r;const o=a?.id;let c,d=!1;if(H&&H.length){if(H.forEach((e,t)=>{null===w&&e.id===o&&(c=t,d=!0,$(t)),e.id===n&&(r=t),e.setAttribute("data-current","false")}),r&&r!==k)return S(r),void l?.();if(d&&void 0!==c)return v(Math.random()),void S(c);if(null!==t&&H[t]){const n=H[t];if(n.setAttribute("data-current","true"),e?.setAttribute("aria-activedescendant",n.id),n.id!==b.current&&!m){const e=Element.prototype.scrollIntoViewIfNeeded??Element.prototype.scrollIntoView;e?.call(n,!1)}null!==w&&($(null),s?.()),b.current=n.id}}return()=>{e?.removeAttribute("aria-activedescendant")}},[H,k,a,e,g]),{activeDescendant:null!==k&&H?H[k]:void 0,descendants:H||null}})(Ee,[re]),Re=(0,S.A)(Ie);(({loading:e,descendants:t,previousActiveDescendant:n,activeDescendant:r,focusReturnEl:o,setFocusReturnEl:a,scrollEl:s})=>{(0,c.useEffect)(()=>{if(e&&t&&t.length&&r){const e=[...t].pop();let n;return(e?.id||void 0)===r.id?(s&&(s.scrollTop=s.scrollHeight-s.offsetHeight),o?.id!==r.id&&(n=setTimeout(()=>{a(e)},0))):o?.id!==r.id&&(n=setTimeout(()=>{a(r)},0)),()=>clearTimeout(n)}},[e,t,n,r,s,o])})({loading:L,descendants:He,previousActiveDescendant:Re,activeDescendant:Ie,focusReturnEl:ce,setFocusReturnEl:de,scrollEl:Ee.scope?.querySelector(Ee.scopeSelector)?.querySelector("ul")}),(0,c.useEffect)(()=>{const e=(e=null)=>{if(Ie){if("true"===Ie.dataset.expand&&"collapse"!==e)return void(Ie.querySelector('span[aria-hidden="true"]')??Ie).click();if("expand"!==e)if("flyout"===q&&ie.length>1&&pe.length>0){le([...ie].slice(0,-1));const e=pe.pop();void 0!==e&&de(e),ke()}else"true"===Ie.dataset.collapse&&Ie.click()}},t=t=>{switch(t.key){case`Arrow${H(Y)}`:if(B)break;e("expand");break;case`Arrow${H(Q)}`:if(B)break;e("collapse");break;case"Escape":if("flyout"===q&&ie.length>1&&pe.length>0){t.preventDefault(),t.stopPropagation(),le([...ie].slice(0,-1));const e=pe.pop();void 0!==e&&de(e),ke()}}B&&(" "===t.key||"Spacebar"===t.key)&&t.shiftKey&&(t.preventDefault(),e())};return Ie&&b?.($e(Ie.id)),be?.addEventListener("keydown",t),()=>be?.removeEventListener("keydown",t)},[be,Ie,ie]),(0,c.useEffect)(()=>{const e=setTimeout(()=>{if(a.length===ne.current){const e=He?.map(e=>e.id),t=Ee.scope?.querySelector(Ee.scopeSelector)?.querySelectorAll(Ee.selector);if(!t)return void ke();const n=Array.from(t);return n?.length!==e?.length?void ke():void(n.every((t,n)=>t.id===e[n])||ke())}ne.current=a.length,ke()},0);return()=>clearTimeout(e)},[a]);const De=(0,c.useMemo)(()=>({componentId:o,"aria-label":Z,mode:d,arrowNavigationUnsupported:B,onItemClick:(e,t)=>{Ae&&te.current?.focus(),v?.(e,t)},onItemActive:b,onItemExpand:w,onItemCollapse:R,itemLayout:s,accent:u,scrollAt:h,emptyText:g,radioName:ee,loadMore:$,loading:L,variant:q,focusControl:be,updateActiveDescendants:ke,setFocusReturnEl:de,setFocusDescendant:se,getScopedItemId:we,pushFlyoutId:ye,flyOutActiveIdStack:ie,updateParentDescendantStack:xe,expandTo:{parentItemId:he,onComplete:()=>{ge(void 0)}}}),[o,Z,d,B,v,b,w,R,s,u,h,g,ee,$,L,q,be,ke,de,se,we,ye,ie,xe,he]),Me=K??("drill-down"===q?(0,l.jsx)(lt,{items:a,id:V,menuRole:N,"aria-multiselectable":"multi-select"===d,"aria-labelledby":Z?`${o}-menuLabel`:void 0}):(0,l.jsx)(qe,{items:a,menuRole:N}));return(0,l.jsxs)(Ce,{"data-testid":J.root,id:o,"aria-describedby":Ae?`${o}-menuDescription`:void 0,...G,ref:te,tabIndex:Ae?0:void 0,children:[Ae&&(0,l.jsx)("span",{id:`${o}-menuDescription`,hidden:!0,children:`${W("menu_selection_instructions")} `&&U||""}),Z&&(0,l.jsx)(D.A,{id:`${o}-menuLabel`,children:Z}),P&&(0,l.jsx)("header",{"data-popover-scroll-el":!0,children:P}),(0,l.jsx)(je,{"data-popover-scroll-el":!0,children:(0,l.jsx)(_.Provider,{value:De,children:Me})}),(i||T)&&(0,l.jsx)("footer",{"data-popover-scroll-el":!0,children:i?(0,l.jsxs)(x.Ay,{"data-testid":J.createNew,variant:"link",onClick:i,children:[(0,l.jsx)(M.Ay,{name:"plus"})," ",W("create_new")]}):T})]})}),dt=(0,R.A)(ct,Se),ut="budicon",mt="arrow-micro-down",pt=()=>(0,l.jsx)("path",{d:"M8 9.5h9l-4.402 6-4.597-6H8Z"}),ft="0 0 25 25",ht=(0,U.A)("menu-button",[]);(0,M.pU)(i);const gt=d.Ay.button(({theme:{base:{spacing:e}}})=>d.AH`
      gap: ${e};
      flex-shrink: 0;
      white-space: nowrap;
      max-width: 100%;

      & + ${w.l} + ${x.OV} {
        margin-inline-start: ${e};
      }
    `);gt.defaultProps=u.qn;const At=d.Ay.span(({theme:e,padIcon:t})=>{const{base:{"hit-area":{"mouse-min":n,"finger-min":r}},components:{icon:{size:{s:o}}}}=e;return d.AH`
    max-width: 100%;

    ${t&&d.AH`
      padding-inline-start: calc((${n} - ${o}) / 2);

      @media (pointer: coarse) {
        padding-inline-start: calc(${r} - ${o} * 2);
      }
    `}

    ${z.D} {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    ${M.vE}:last-child:not(:first-child) {
      /* Offsets the flex gap to make the down arrow appear to trail the text. */
      margin-inline-start: -${e.base.spacing};
    }
  `}),vt=(0,d.Ay)($.A)`
  min-width: 20ch;
`,bt=(0,c.forwardRef)(function(e,t){const n=(0,m.A)(),{testId:r,id:o=n,text:a,menu:s,popover:i,onClick:d,icon:u,count:w,iconOnly:$=!1,showArrow:k=!1,...E}=e,I=(0,p.A)(r,ht),[j,C]=(0,c.useState)(!1),S=(0,f.A)(t),H=(0,f.A)(i?.ref),R=(0,f.A)(s?.ref);((e,t)=>{const[n,r]=(0,c.useState)(!1),o=(0,c.useRef)(null),{portalTarget:a}=(0,v.A)(),s=a?.ownerDocument?.defaultView||window,i=(0,c.useRef)();(0,c.useEffect)(()=>()=>{i.current?.abort()},[]);const l=(0,c.useCallback)(a=>{if(!n)return;const l=(0,A.A)(a,FocusEvent)?a.relatedTarget:null,c=(0,h.A)(e).flatMap(e=>[e,...(0,g.A)(e)]);if((0,A.A)(l,Node)){const e=c.find(e=>e?.contains(l));if(e)return void(o.current=e)}const d=new AbortController,u=e=>{c.some(t=>e.composedPath().some(e=>(0,A.A)(e,Node)&&t.contains(e)))||(r(!1),t?.(!1,o.current),o.current=null),d.abort()};s?.document?.addEventListener("focusin",u,{once:!0,signal:d.signal}),s?.document?.addEventListener("mouseup",u,{once:!0,signal:d.signal});const m=()=>{r(!1),t?.(!1,o.current),o.current=null,d.abort()};try{window.parent?.document.addEventListener("focusin",m,{once:!0,signal:d.signal}),window.parent?.document.addEventListener("mouseup",m,{once:!0,signal:d.signal})}catch{}i.current=d},[n,t,e]),d=(0,c.useCallback)(e=>{if(!n){r(!0);const n=e.currentTarget;t?.(!0,n),o.current=n}},[n,t]);(0,c.useEffect)(()=>{const t=(e=>(0,h.A)(e).flatMap(e=>[e,...(0,g.A)(e)]).filter(e=>(0,A.A)(e,HTMLElement)))(e);t.forEach(e=>{e?.contains(document.activeElement)&&d(new FocusEvent("focusin",{relatedTarget:document.activeElement}))})},[]),(0,c.useEffect)(()=>{const t=(0,h.A)(e);return t.forEach(e=>{e?.addEventListener("focusin",d),e?.addEventListener("popover:focusin",d),e?.addEventListener("focusout",l),e?.addEventListener("popover:focusout",l)}),()=>{t.forEach(e=>{e?.removeEventListener("focusin",d),e?.removeEventListener("popover:focusin",d),e?.removeEventListener("focusout",l),e?.removeEventListener("popover:focusout",l)})}},[e,d,l])})([H,S],(0,c.useCallback)(e=>{e||C(!1)},[])),(0,b.A)(e=>{j&&(C(!1),e.stopPropagation())},S),(0,b.A)(e=>{j&&(C(!1),e.stopPropagation(),S.current?.focus())},s?.focusControlEl);const{rtl:D}=(0,y.A)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x.Ay,{"data-testid":I.root,as:gt,"aria-label":a,...E,id:o,ref:S,"aria-expanded":j,"aria-haspopup":"menu","aria-controls":j?`${o}-popover`:void 0,label:$&&!j?a:void 0,onClick:e=>{const t=e.detail>0;j?t&&C(!1):C(!0),j&&!t||d?.(e)},icon:$,children:(0,l.jsxs)(B.A,{as:At,container:{alignItems:"center",gap:1},padIcon:$&&k,children:[u&&(0,l.jsx)(M.Ay,{name:u}),!$&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(z.A,{children:a}),"number"==typeof w&&(0,l.jsx)(oe.A,{children:w})]}),(!$||k)&&(0,l.jsx)(M.Ay,{name:"arrow-micro-down"})]})}),(0,l.jsx)(vt,{placement:D?"bottom-end":"bottom-start",hideOnTargetHidden:!0,...i,id:`${o}-popover`,show:!!s&&j,target:S.current,ref:H,children:s&&(0,l.jsx)(dt,{testId:I.root,...s,ref:R,items:s.items,onItemClick:(e,t)=>{"multi-select"!==s.mode&&C(!1),s.onItemClick?.(e,t)},focusControlEl:s.focusControlEl||S.current||void 0})})]})}),yt=(0,R.A)(bt,ht)},7666:(e,t,n)=>{n.d(t,{A:()=>i,U:()=>s});var r=n(3974),o=n(9749),a=n(4685);const s='a[href], button, input, textarea, select, details, video[controls], audio[controls], [tabindex]:not([tabindex="-1"])',i=(e,{includeActiveEl:t=!1}={})=>{const n=(0,a.A)();let i=n,l=null;const c=(0,r.A)(e,"current")?e.current:e;if(!c)return[];let d=s;t&&(l=(0,o.A)(),l&&(i=l.id||n,l.id=i,d=`${d}, [id="${i}"]`));const u=[...c.querySelectorAll(d)].filter(e=>e instanceof HTMLElement&&(e.id===i||!e.hasAttribute("disabled")&&"-1"!==e.getAttribute("tabindex")&&!e.closest("[inert]")));return l?.id===n&&l.removeAttribute("id"),u}},7784:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(1594),o=n(5582),a=n(8268),s=n(712),i=n(9463);const l=(e,t,n)=>{const{portalTarget:l}=(0,i.A)(),c=l?.ownerDocument?.defaultView||window,d=(0,r.useCallback)(e=>{const r=e.composedPath(),i=r[0];if(!(0,a.A)(i,Node))return;let l=0,c=1;for(;!(0,a.A)(r[l],Document);){const e=r[l],t=r[c];if(!e||!t)return;if((0,a.A)(t,DocumentFragment)||(0,a.A)(t,Document)){if(!(0,a.A)(e,Node)||!t.contains(e))return;l=c}else if((0,a.A)(e,DocumentFragment)){if(!(0,a.A)(t,Element)||t.shadowRoot!==e)return;l=c}c+=1}(0,s.A)(t).flatMap(e=>(0,a.A)(e,Element)||(0,a.A)(e,Document)||(0,a.A)(e,DocumentFragment)?[e,...(0,o.A)(e)]:[e]).every(e=>e!==i&&!e.contains(i))&&n(e)},[...t,n]);(0,r.useEffect)(()=>{const t=Array.isArray(e)?e:[e];return t.forEach(e=>c?.document?.addEventListener(e,d)),()=>{t.forEach(e=>c?.document?.removeEventListener(e,d))}},[e,d])}},7940:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(1594),o=n(9463);const a=()=>{const{direction:e}=(0,o.A)();return(0,r.useMemo)(()=>"ltr"===e?{start:"left",end:"right",ltr:!0,rtl:!1}:{start:"right",end:"left",ltr:!1,rtl:!0},[e])}},8072:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>s,name:()=>a,set:()=>o,viewBox:()=>i});var r=n(4848);const o="budicon",a="check",s=()=>(0,r.jsx)("path",{d:"m3.464 11.371 6.222 5.974L21.582 5 23 6.371 9.732 20 2 12.743l1.464-1.372Z"}),i="0 0 25 25"},8866:(e,t,n)=>{n.d(t,{EF:()=>o,gF:()=>a});var r=n(8044);(0,r.A)("alert",[]);const o=(0,r.A)("count",[]),a=(0,r.A)("keyboard",[]);(0,r.A)("selectable",["remove"]),(0,r.A)("status",[]),(0,r.A)("tag",[])},9238:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>s,name:()=>a,set:()=>o,viewBox:()=>i});var r=n(4848);const o="budicon",a="warn-solid",s=()=>(0,r.jsx)("path",{d:"M23.5 22.5h-22l11-20 11 20Zm-9.741-6.935V9.39a1.655 1.655 0 0 0-1.166-.447c-.42 0-.792.134-1.212.447v6.175a3.23 3.23 0 0 0 1.212.223c.466 0 .839-.09 1.166-.223Zm-1.212 4.787c.466 0 .886-.179 1.212-.492.326-.313.466-.671.466-1.074 0-.447-.14-.85-.466-1.163-.326-.313-.746-.447-1.212-.447-.42 0-.792.134-1.119.447a1.594 1.594 0 0 0-.512 1.163c0 .403.186.76.512 1.074.327.313.7.492 1.119.492Z"}),i="0 0 25 25"},9721:(e,t,n)=>{n.d(t,{ox:()=>p,oF:()=>f,J0:()=>g,Af:()=>h,Ik:()=>m,Ay:()=>y});var r=n(4848),o=n(1594),a=n(8267),s=n(6883),i=n(9549),l=n(405),c=n(8579),d=n(4869);const u=(0,n(8044).A)("summary-item",["primary","secondary","visual","actions"]),m=a.Ay.div`
  > ${l.pT}, img {
    display: block;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
  }
`;m.defaultProps=i.qn;const p=(0,a.Ay)(s.A)(({theme:e,isString:t,overflowStrategy:n})=>a.AH`
    ${"ellipsis"===n?a.AH`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `:a.AH`
          word-break: break-word;
        `}

    ${t&&a.AH`
      font-weight: ${e.base["font-weight"]["semi-bold"]};
    `}
  `);p.defaultProps=i.qn;const f=(0,a.Ay)(s.A)(({overflowStrategy:e})=>a.AH`
    ${"ellipsis"===e?a.AH`
          overflow: hidden;
          text-overflow: ellipsis;
        `:a.AH`
          word-break: break-word;
        `}
  `),h=a.Ay.div`
  white-space: nowrap;
`,g=a.Ay.div``,A=({visual:e,actions:t})=>`${e?"auto ":""}minmax(0, 1fr)${t?" auto":""}`,v=({secondary:e,layout:t,visual:n,actions:r})=>`"${n?"visual ":""}primary${e&&"inline"===t?" secondary":""}${r?" actions":""}"${e&&"stacked"===t?`\n"${n?"visual ":""}secondary${r?" actions":""}"`:""}`,b=(0,o.forwardRef)(function({testId:e,visual:t,primary:n,secondary:o,layout:a="stacked",actions:i,container:l,overflowStrategy:d="wrap",as:b,...y},x){const w=(0,c.A)(e,u);return(0,r.jsxs)(s.A,{"data-testid":w.root,...y,ref:x,container:{cols:A({visual:t,actions:i}),colGap:2,areas:v({secondary:o,layout:a,visual:t,actions:i}),...l},as:g,forwardedAs:b,children:[t&&(0,r.jsx)(s.A,{"data-testid":w.visual,as:m,item:{area:"visual",alignSelf:"center"},children:t}),(0,r.jsx)(p,{"data-testid":w.primary,item:{area:"primary",alignSelf:o&&"stacked"===a?"end":"center"},isString:"string"==typeof n,overflowStrategy:d,children:n}),o&&(0,r.jsx)(f,{"data-testid":w.secondary,item:{area:"secondary",alignSelf:"stacked"===a?"start":"center"},overflowStrategy:d,children:o}),i&&(0,r.jsx)(s.A,{"data-testid":w.actions,as:h,item:{area:"actions",alignSelf:"center"},children:i})]})}),y=(0,d.A)(b,u)}}]);
//# sourceMappingURL=PP8Pega_PegaNpm_RegistrationForm_25503651.4c1e00c5.js.map