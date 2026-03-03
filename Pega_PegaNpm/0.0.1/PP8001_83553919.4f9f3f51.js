"use strict";(self.webpackChunkdxcomponent=self.webpackChunkdxcomponent||[]).push([[83553919],{331:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(4848),o=n(1594),i=n(8267),a=n(9549),s=n(4853);const l=i.Ay.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  color: inherit;

  & + & {
    margin-inline-start: ${e=>e.theme.base.spacing};
  }
`;l.defaultProps=a.qn;const c=(0,o.forwardRef)(function({type:e="button",disabled:t=!1,href:n,...i},a){const c=(0,o.useRef)(),d=(0,s.A)(a);(0,o.useEffect)(()=>()=>{c.current=void 0},[]);const u=e=>{i.onMouseDown?.(e),e.persist(),c.current=e},m=e=>{const t=c.current&&!c.current.defaultPrevented;return c.current=void 0,t&&d.current!==document.activeElement&&d.current?.focus(),i.onMouseUp?.(e)};return n?(0,r.jsx)(l,{as:"a",ref:d,href:n,disabled:t,...i,onMouseDown:u,onMouseDownCapture:m}):(0,r.jsx)(l,{ref:d,type:e,disabled:t,...i,onMouseDown:u,onMouseUp:m})})},574:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(1594),o=n(9749),i=n(7666),a=n(393);const s=(e,t=!0,n=[],s=!0)=>{const l=(0,r.useCallback)(t=>{if(e?.current&&"Tab"===t.key){const n=(0,i.A)(e),{0:r,[n.length-1]:a}=n,l=(0,o.A)();if((l===e.current||!e.current.contains(l)||e.current.contains(l)&&!n.includes(l))&&s)if(t.preventDefault(),l){const n=(0,i.A)(e,{includeActiveEl:!0}),o=n.findIndex(e=>e===l);-1!==o?t.shiftKey?n[(o-1+n.length)%n.length].focus():n[(o+1)%n.length].focus():t.shiftKey?a?.focus():r?.focus()}else t.shiftKey?a?.focus():r?.focus();else t.shiftKey&&l===r?(t.preventDefault(),a?.focus()):t.shiftKey||l!==a||(t.preventDefault(),r?.focus())}},n);(0,a.A)("keydown",l,{target:t?void 0:e})}},1847:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(4848),o=n(1594),i=n(6878),a=n(9061);const s=(0,o.forwardRef)(function({value:e,displayText:t,variant:n="link",...o},s){const l=e?t||e:(0,r.jsx)(a.A,{});return"text"!==n&&e?(0,r.jsx)(i.ah,{...o,variant:"link",ref:s,href:`mailto:${e}`,children:l}):(0,r.jsx)("span",{ref:s,...o,children:l})})},2697:(e,t,n)=>{n.d(t,{q:()=>I,A:()=>H});var r={};n.r(r),n.d(r,{Component:()=>p,name:()=>m,set:()=>u,viewBox:()=>h});var o={};n.r(o),n.d(o,{Component:()=>b,name:()=>g,set:()=>f,viewBox:()=>A});var i=n(4848),a=n(1594),s=n(8267),l=n(1357),c=n(7501),d=n(6765);const u="budicon",m="galaxy",p=()=>(0,i.jsx)("path",{d:"M17.66 3.3 16.5 6.5l-3.3 1.16c-.22.088-.264.562 0 .67l3.3 1.17 1.16 3.3c.1.3.543.3.67 0l1.17-3.3c1.981-.7 3.081-1.09 3.3-1.17.328-.119.205-.598 0-.67L19.5 6.5l-1.17-3.2c-.187-.415-.522-.377-.67 0ZM15.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"}),h="0 0 25 25",f="streamline",g="folder-empty",b=()=>(0,i.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M15.188 7.313v-2.25a1.125 1.125 0 0 0-1.126-1.125H6.189V2.813a1.125 1.125 0 0 0-1.125-1.125H1.688A1.125 1.125 0 0 0 .563 2.813v12.224a1.275 1.275 0 0 0 2.502.329l1.763-7.243a1.125 1.125 0 0 1 1.081-.81h10.404A1.125 1.125 0 0 1 17.4 8.726l-1.65 6.75a1.125 1.125 0 0 1-1.087.835H1.835"}),A="0 0 18 18";var v=n(7521),y=n(9187),$=n(4869),x=n(3456),w=n(9586),k=n(8579),j=n(9549);const E=(0,n(8044).A)("empty-state",["message","icon"]);(0,d.pU)(r),(0,d.pU)(o);const I=s.Ay.div(({theme:e})=>{const t=(0,y.A)(()=>(0,l.B3)(e.base.palette["foreground-color"],e.base.transparency["transparent-2"]));return s.AH`
    height: 100%;

    ${d.vE} {
      font-size: 1.5rem;
      height: 1.5rem;
      width: 1.5rem;
      color: ${t};
    }
  `});I.defaultProps=j.qn;const C=(0,a.forwardRef)(function(e,t){const{base:{"icon-set":n}}=(0,x.A)(),r=(0,w.A)(),{testId:o,message:a=r("no_items"),...s}=e,l=(0,k.A)(o,E);return(0,i.jsxs)(c.A,{"data-testid":l.root,...s,as:I,ref:t,container:{direction:"column",alignItems:"center",justify:"center",gap:1},children:[(0,i.jsx)(d.Ay,{"data-testid":l.icon,name:"streamline"===n?"folder-empty":"galaxy"}),(0,i.jsx)(v.A,{"data-testid":l.message,variant:"secondary",children:a})]})}),H=(0,$.A)(C,E)},3974:(e,t,n)=>{n.d(t,{A:()=>r});const r=(e,t)=>Object.hasOwn(e,t)},7268:(e,t,n)=>{n.d(t,{A:()=>Gn});var r={};n.r(r),n.d(r,{Component:()=>he,name:()=>pe,set:()=>me,viewBox:()=>fe});var o={};n.r(o),n.d(o,{Component:()=>Ae,name:()=>be,set:()=>ge,viewBox:()=>ve});var i={};n.r(i),n.d(i,{Component:()=>xe,name:()=>$e,set:()=>ye,viewBox:()=>we});var a={};n.r(a),n.d(a,{Component:()=>pt,name:()=>mt,set:()=>ut,viewBox:()=>ht});var s={};n.r(s),n.d(s,{Component:()=>bt,name:()=>gt,set:()=>ft,viewBox:()=>At});var l={};n.r(l),n.d(l,{Component:()=>Mt,name:()=>zt,set:()=>Pt,viewBox:()=>_t});var c={};n.r(c),n.d(c,{Component:()=>Gt,name:()=>Kt,set:()=>Zt,viewBox:()=>Wt});var d={};n.r(d),n.d(d,{Component:()=>Yt,name:()=>Jt,set:()=>Xt,viewBox:()=>Qt});var u={};n.r(u),n.d(u,{Component:()=>yn,name:()=>vn,set:()=>An,viewBox:()=>$n});var m=n(4848),p=n(1594),h=n(8267),f=n(1357),g=n(9549),b=n(7501),A=n(9586),v=n(4853),y=n(6878),$=n(6765),x=n(3351),w=n(8579),k=n(712),j=n(5582),E=n(8268),I=n(9463);var C=n(393);const H=(e,t=document,n=[])=>{const r=(0,p.useCallback)(t=>{"Escape"===t.key&&e(t)},[e,...n]);(0,C.A)("keydown",r,{target:t})},S=()=>{const{direction:e}=(0,I.A)();return(0,p.useMemo)(()=>"ltr"===e?{start:"left",end:"right",ltr:!0,rtl:!1}:{start:"right",end:"left",ltr:!1,rtl:!0},[e])};var R=n(8889),D=n(150),P=n(4685),z=n(7666),M=n(9749);const _=["button","a","input","li","legend"];var L=n(3700);const q=e=>e.charAt(0).toUpperCase()+e.slice(1);var F=n(4869),T=n(7491),O=n(2884);const N=(e,t,n,r,o)=>{(0,p.useEffect)(()=>{let i=null;if(t>0){const n=e?.current??o?.current?.getRootNode()??document;if(!(0,E.A)(n,HTMLElement,SVGElement,Document,ShadowRoot))return;const a=n.querySelectorAll(r);a.length>t&&(i=a[t])}if(i){const t=new IntersectionObserver(e=>{e[0].isIntersecting&&n()},{root:e.current??null});return t.observe(i),()=>{t.disconnect()}}},[n,t])};var V=n(2558),B=n(9466),U=n(2697);const Z=(0,p.createContext)({mode:"action",variant:"drill-down",itemLayout:"stacked",scrollAt:7,loading:!1,componentId:(0,P.A)(),pushFlyoutId:()=>null,flyOutActiveIdStack:[],focusControl:null,updateActiveDescendants:()=>null,setFocusDescendant:()=>null,setFocusReturnEl:()=>null,getScopedItemId:()=>"",updateParentDescendantStack:()=>null});var K=n(7521),G=n(8044);const W=(0,G.A)("meta-list",[]),X=h.Ay.ul(({wrapItems:e})=>h.AH`
    list-style: none;
    overflow: hidden;

    /* Negative margin to account for overflow clipping of focus indicator */
    padding: 0.3rem;
    margin: -0.3rem;

    ${!e&&h.AH`
      white-space: nowrap;
    `}
  `),J=h.Ay.li(({wrapItems:e})=>h.AH`
    min-width: 0;
    display: inline-block;

    ${e?h.AH`
          overflow-wrap: break-word;
        `:h.AH`
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        `}

    &[role='separator'] {
      -webkit-user-select: none;
      user-select: none;
    }
  `),Y=(0,p.forwardRef)(function({testId:e,items:t,wrapItems:n=!0,...r},o){const i=(0,w.A)(e,W),a=t.length<=1?"none":void 0;return(0,m.jsx)(b.A,{"data-testid":i.root,...r,as:X,role:a,container:{colGap:.5,alignItems:"center",wrap:n?"wrap":"nowrap"},wrapItems:n,ref:o,children:t.flatMap((e,t,r)=>e?[(0,m.jsx)(K.A,{as:J,variant:"secondary",role:a,wrapItems:n,children:e},`${t+0}`)].concat(t!==r.length-1?[(0,m.jsx)(K.A,{as:J,"aria-hidden":!0,variant:"secondary",children:"•"},`${t+0}-sep`)]:[]):[])})}),Q=(0,F.A)(Y,W);var ee=n(6883),te=n(405);const ne=(0,G.A)("summary-item",["primary","secondary","visual","actions"]),re=h.Ay.div`
  > ${te.pT}, img {
    display: block;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
  }
`;re.defaultProps=g.qn;const oe=(0,h.Ay)(ee.A)(({theme:e,isString:t,overflowStrategy:n})=>h.AH`
    ${"ellipsis"===n?h.AH`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `:h.AH`
          word-break: break-word;
        `}

    ${t&&h.AH`
      font-weight: ${e.base["font-weight"]["semi-bold"]};
    `}
  `);oe.defaultProps=g.qn;const ie=(0,h.Ay)(ee.A)(({overflowStrategy:e})=>h.AH`
    ${"ellipsis"===e?h.AH`
          overflow: hidden;
          text-overflow: ellipsis;
        `:h.AH`
          word-break: break-word;
        `}
  `),ae=h.Ay.div`
  white-space: nowrap;
`,se=h.Ay.div``,le=({visual:e,actions:t})=>`${e?"auto ":""}minmax(0, 1fr)${t?" auto":""}`,ce=({secondary:e,layout:t,visual:n,actions:r})=>`"${n?"visual ":""}primary${e&&"inline"===t?" secondary":""}${r?" actions":""}"${e&&"stacked"===t?`\n"${n?"visual ":""}secondary${r?" actions":""}"`:""}`,de=(0,p.forwardRef)(function({testId:e,visual:t,primary:n,secondary:r,layout:o="stacked",actions:i,container:a,overflowStrategy:s="wrap",as:l,...c},d){const u=(0,w.A)(e,ne);return(0,m.jsxs)(ee.A,{"data-testid":u.root,...c,ref:d,container:{cols:le({visual:t,actions:i}),colGap:2,areas:ce({secondary:r,layout:o,visual:t,actions:i}),...a},as:se,forwardedAs:l,children:[t&&(0,m.jsx)(ee.A,{"data-testid":u.visual,as:re,item:{area:"visual",alignSelf:"center"},children:t}),(0,m.jsx)(oe,{"data-testid":u.primary,item:{area:"primary",alignSelf:r&&"stacked"===o?"end":"center"},isString:"string"==typeof n,overflowStrategy:s,children:n}),r&&(0,m.jsx)(ie,{"data-testid":u.secondary,item:{area:"secondary",alignSelf:"stacked"===o?"start":"center"},overflowStrategy:s,children:r}),i&&(0,m.jsx)(ee.A,{"data-testid":u.actions,as:ae,item:{area:"actions",alignSelf:"center"},children:i})]})}),ue=(0,F.A)(de,ne),me="budicon",pe="caret-left",he=()=>(0,m.jsx)("path",{d:"M17.25 21H14.5L8 12.5 14.5 4h2.75l-6.5 8.5z"}),fe="0 0 25 25",ge="budicon",be="caret-right",Ae=()=>(0,m.jsx)("path",{d:"M8 4h2.75l6.5 8.5-6.5 8.5H8l6.5-8.5z"}),ve="0 0 25 25",ye="budicon",$e="check",xe=()=>(0,m.jsx)("path",{d:"m3.464 11.371 6.222 5.974L21.582 5 23 6.371 9.732 20 2 12.743l1.464-1.372Z"}),we="0 0 25 25";var ke=n(9187),je=n(7321),Ee=n(8866);const Ie=h.Ay.span(({theme:e,variant:t,children:n})=>{const{foreground:r,background:o}=e.components.badges.count[t],i=(0,ke.A)(()=>(0,f.B3)(r,.1)),a=(0,je.Vr)(e.base["font-size"],e.base["font-scale"]);return h.AH`
    display: inline-block;
    block-size: 1rem;
    flex-shrink: 0;
    border-radius: calc(9999 * ${e.base["border-radius"]});
    color: ${r};
    background-color: ${o};
    box-shadow: inset 0 0 0 0.0625rem ${i};
    font-size: ${a.xxs};
    font-weight: ${e.base["font-weight"].bold};
    line-height: 1rem;
    text-align: center;
    white-space: nowrap;

    ${1===n.length?h.AH`
          aspect-ratio: 1 / 1;
        `:h.AH`
          padding-inline: ${e.base.spacing};
        `}
  `});Ie.defaultProps=g.qn;const Ce=e=>e<1e3?"":1e3<=e&&e<1e6?"K":1e6<=e&&e<1e9?"M":1e9<=e&&e<1e12?"B":1e12<=e&&e<1e15?"T":"",He=e=>{const t=Math.abs(e);return t<1e3?`${e}`:`${e<0?"-":""}${(e=>{for(let t=3;t<15;t+=3){if(e<10**(t+1))return`${`${e}`.slice(0,1)}.${`${e}`.slice(1,2)}${Ce(e)}`;if(e<10**(t+2))return`${`${e}`.slice(0,2)}${Ce(e)}`;if(e<10**(t+3))return`${`${e}`.slice(0,3)}${Ce(e)}`}return"999T+"})(t)}`},Se=(0,F.A)((0,p.forwardRef)(function({testId:e,variant:t="default",children:n,...r},o){const i=(0,w.A)(e,Ee.EF);return Number.isInteger(n)?(0,m.jsx)(Ie,{"data-testid":i.root,variant:t,...r,ref:o,children:He(n)}):null}),Ee.EF);var Re=n(331);var De=n(2477),Pe=n(5387);const ze=h.Ay.mark(({theme:e})=>h.AH`
    color: ${e.base.colors.black};
    background-color: ${e.components.mark["background-color"]};
    font-weight: ${e.components.mark["font-weight"]};
  `);ze.defaultProps=g.qn;const Me=e=>(0,m.jsx)(ze,{...e});var _e=n(3974);const Le={isItem:e=>(0,_e.A)(e,"primary"),getItem(e,t){let n;return e.some(e=>this.isItem(e)&&e.id===t?(n=e,!0):!!e.items&&(n=this.getItem(e.items,t),!!n)),n},getPath(e,t){let n=[];return e.some(e=>{if(e.id===t)return n=[e],!0;if(e.items){const r=this.getPath(e.items,t);return r.length&&(n=r.concat(e)),!!n.length}return!1}),n},setItem(e,t,n){return e.map(e=>e.id===t?{...n}:e.items?{...e,items:this.setItem(e.items,t,n)}:e)},mapItem(e,t,n){return e.map((e,r,o)=>{let i=e;return e.items&&(i={...i,items:this.mapItem(e.items,t,n)}),this.isItem(i)&&e.id===t&&(i=n(i,r,o)),i})},mapTree(e,t){return e.map((e,n,r)=>{let o=e;return e.items&&(o={...o,items:this.mapTree(e.items,t)}),this.isItem(o)?t(o,n,r):o})},flatten(e,t=[],n={parentFirst:!1}){let r=[],o=[];return e.forEach(e=>{if(this.isItem(e)&&r.push(t.length>0?{...e,ancestors:t}:e),e.items){const i=this.flatten(e.items,[...t,e],n);n.parentFirst?o=[...o,...i]:r=[...r,...i]}}),n.parentFirst?[...r,...o]:r},toggleSelected(e,t,n,r){return this.mapTree(e,e=>{if(this.isItem(e)){if(e.id===t)return{...e,selected:void 0!==r?r:!e.selected};if("single-select"===n)return{...e,selected:!1}}return e})},selectItem(e,t,n){return this.toggleSelected(e,t,n,!0)},deselectItem(e,t,n){return this.toggleSelected(e,t,n,!1)},getSelected(e){return e.reduce((e,t)=>(this.isItem(t)&&t.selected&&(e=[...e,t]),t.items&&(e=[...e,...this.getSelected(t.items)]),e),[])},prependTo(e,t,n){return n?this.mapItem(e,n,e=>({...e,items:[...t,...e.items??[]]})):[...t,...e]},appendTo(e,t,n){return n?this.mapItem(e,n,e=>({...e,items:[...e.items??[],...t]})):[...e,...t]},getNextItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(e,t,r)=>(n=r[t+1],e)),n},getPrevItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(e,t,r)=>(n=r[t-1],e)),n},getParentItem(e,t){if(!t)return;const[,n]=this.getPath(e,t);return n}},qe=h.AH`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Fe=((0,h.Ay)(y.Ay)`
  align-self: center;
`,(0,h.Ay)($.Ay)``),Te=h.Ay.li(({theme:{base:e,components:t},isParentItem:n,itemLayout:r,mode:o="action","aria-selected":i=!1,selectableParent:a=!1})=>{const s=(0,ke.A)(()=>(0,f.jh)(.85,e.palette["primary-background"],e.palette.interactive)),l=(0,ke.A)(()=>(0,f.jh)(.95,e.palette["primary-background"],e.palette.interactive)),c=(0,ke.A)(()=>(0,f.B3)(t["radio-check"][":checked"]["background-color"],e.transparency["transparent-5"])),d=t["radio-check"][":checked"]["background-color"],u=(0,ke.A)(()=>(0,je.W0)(d));return h.AH`
      min-height: ${e["hit-area"]["mouse-min"]};
      padding-block: calc(0.75 * ${e.spacing});
      padding-inline: ${e.spacing};
      cursor: pointer;

      ${"inline"===r&&h.AH`
        justify-content: flex-start;

        ${se} {
          /* Sets grid columns based on SummaryItem content combinations */

          &:has(${re}):has(${ie}):has(${ae}) {
            grid-template-areas: 'visual primary secondary actions';
            grid-template-columns: auto auto 1fr auto;
          }

          &:has(${re}):has(${ie}):not(:has(${ae})) {
            grid-template-areas: 'visual primary secondary';
            grid-template-columns: auto auto 1fr;
          }

          &:has(${re}):not(:has(${ie})):has(${ae}) {
            grid-template-areas: 'visual primary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:has(${re}):not(:has(${ie})):not(
              :has(${ae})
            ) {
            grid-template-areas: 'visual primary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${re})):has(${ie}):has(${ae}) {
            grid-template-areas: 'primary secondary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:not(:has(${re})):has(${ie}):not(
              :has(${ae})
            ) {
            grid-template-areas: 'primary secondary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${re})):not(:has(${ie})):has(
              ${ae}
            ) {
            grid-template-areas: 'primary actions';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${re})):not(:has(${ie})):not(
              :has(${ae})
            ) {
            grid-template-areas: 'primary';
            grid-template-columns: 1fr;
            flex-grow: 0;
          }

          & > ${oe} {
            ${qe};
          }

          & > ${ie} {
            ${qe};

            ul {
              li {
                ${qe};
              }
              justify-content: end;
            }
          }

          & > ${ae} > ${b.D} {
            justify-content: end;
          }
        }
      `}

      @media (pointer: coarse) {
        min-height: ${e["hit-area"]["finger-min"]};
      }

      &:focus-within {
        background-color: ${s};
      }

      &:hover {
        ${Fe} {
          visibility: visible;
          ${"single-select"===o&&h.AH`
            color: ${i?d:c};
          `}
          ${"multi-select"===o&&h.AH`
            ${!i&&h.AH`
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

      ${n&&!a&&("multi-select"===o||"single-select"===o)&&h.AH`
        padding-inline-start: calc(1.125rem + 2 * ${e.spacing});
      `}

      ${ee.e} {
        flex-grow: 1;
      }

      ${Fe} {
        margin-inline-start: 0;
        ${"single-select"===o&&h.AH`
          ${i?h.AH`
                color: ${d};
              `:h.AH`
                visibility: hidden;
              `}
        `}
        ${"multi-select"===o&&h.AH`
          ${i?h.AH`
                color: ${u};
                background-color: ${d};
                border: 0.0625rem solid ${t["radio-check"][":checked"]["border-color"]};
              `:h.AH`
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
    `});Te.defaultProps=g.qn;const Oe=h.Ay.div`
  ${$.vE} {
    width: 1em;
    height: 1em;
  }

  & > ${K.D} {
    ${qe};
  }
`,Ne=(h.Ay.p`
  ${f.Ic}
`,h.Ay.li(({theme:e})=>h.AH`
    height: 0.0625rem;
    background-color: ${e.base.palette["border-line"]};
    margin: ${e.base.spacing} 0;
  `));Ne.defaultProps=g.qn;const Ve=h.Ay.div(({theme:e})=>h.AH`
    min-height: ${e.base["hit-area"]["mouse-min"]};
    font-weight: ${e.base["font-weight"]["semi-bold"]};
    background-color: ${e.base.palette["secondary-background"]};

    @media (pointer: coarse) {
      min-height: ${e.base["hit-area"]["finger-min"]};
    }
  `);Ve.defaultProps=g.qn;const Be=h.Ay.legend(({theme:{base:e}})=>{const t=(0,ke.A)(()=>(0,f.jh)(.95,e.palette["primary-background"],e.palette.interactive)),n=(0,ke.A)(()=>(0,f.jh)(.85,e.palette["primary-background"],e.palette.interactive));return h.AH`
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

    > ${ee.e} {
      grid-column-gap: ${e.spacing};
    }

    ${$.vE} {
      /* Fixes vertical align issue increasing box size beyond square */
      display: block;
    }
  `});Be.defaultProps=g.qn;const Ue=h.Ay.ul(({theme:e})=>h.AH`
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    height: 100%;
    border-radius: inherit;

    ${U.q} {
      padding: ${e.base.spacing};
      height: auto;
    }

    li:not(:first-child):not([role='presentation']) > ${Ve} {
      margin-block-start: ${e.base.spacing};
    }
  `);Ue.defaultProps=g.qn;const Ze=h.Ay.fieldset(({theme:e})=>h.AH`
    background-color: ${e.base.palette["primary-background"]};
    border: 0;
    border-radius: inherit;
  `);Ze.defaultProps=g.qn;const Ke=(0,h.Ay)(Ze)`
  min-width: 10rem;
`,Ge=h.Ay.li`
  display: block;
  position: relative;
  height: 2.8rem;
`,We=h.Ay.div(({theme:e})=>h.AH`
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
  `);We.defaultProps=g.qn;const Xe=h.Ay.div(({theme:e})=>{const t=`0.0625rem solid ${e.base.palette["border-line"]}`;return h.AH`
    display: flex;
    flex-direction: column;

    &,
    ${We} {
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

    ${T.U}:first-child {
      + ${We}, + header {
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
  `});Xe.defaultProps=g.qn;const Je=(0,G.A)("menu",["create-new"]),Ye=(0,G.A)("menu-item",[]);(0,$.pU)(r,o,i);const Qe=({expandHandler:e})=>{const{end:t}=S(),n=(0,m.jsx)($.Ay,{name:`caret-${t}`});return e?(0,m.jsx)(y.Ay,{as:"span",icon:!0,variant:"simple","aria-hidden":!0,onClick:e,children:n}):n},et=({ancestors:e=[]})=>{const t=e.length>2,n=t?[e[0],e[e.length-1]]:e,{end:r}=S();return(0,m.jsx)(b.A,{container:{gap:.5,alignItems:"center"},as:Oe,title:e.map(e=>Le.isItem(e)?e.primary:e.label).join(" > "),children:n.map((e,n,o)=>{const i=Le.isItem(e)?e.primary:e.label;return(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(K.A,{variant:"secondary",children:i}),n<o.length-1&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(K.A,{variant:"secondary",children:(0,m.jsx)($.Ay,{name:`caret-${r}`})}),t&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(K.A,{variant:"secondary",children:"…"}),(0,m.jsx)(K.A,{variant:"secondary",children:(0,m.jsx)($.Ay,{name:`caret-${r}`})})]})]})]},e.id)})})},tt=(0,F.A)(({testId:e,id:t,primary:n,secondary:r,ancestors:o,visual:i,count:a,items:s,selected:l,partial:c,href:d,tooltip:u,onClick:h,onExpand:f,disabled:g,role:v="menuitem",...y})=>{const $=(0,A.A)(),{mode:x,onItemClick:k,itemLayout:j,accent:E,variant:I,setFocusDescendant:C,getScopedItemId:H,arrowNavigationUnsupported:S}=(0,p.useContext)(Z),R=(0,w.A)(e,Ye),D="single-select"===x||"multi-select"===x,P=s&&"boolean"==typeof l,z=(0,p.useMemo)(()=>H(t),[t,H]),M=`${t}-count`,_=`${t}-secondary`,L=(0,p.useCallback)(e=>{if(e.detail>0){const t=e.target,n=t.getAttribute("role")===v?t:t.closest(`li[role="${v}"]`);n&&C(n)}h?.(t,e),k?.(t,e)},[h,k,t]),q=(0,p.useCallback)(e=>{f?.(t,e),e.stopPropagation()},[f,t]);let F;if(E&&!s){const e="function"==typeof E?E(n):E;F=((e,t,n)=>{const r=[];if(t.global||t.sticky){let o,i=0;for(;o=t.exec(e);)r.push(e.slice(i,o.index),n(o[0])),i=o.index+o[0].length;r.push(e.slice(i))}else{const o=t.exec(e);o?r.push(e.slice(0,o.index),n(o[0]),e.slice(o.index+o[0].length)):r.push(e)}return r.flatMap((e,t)=>e?(0,m.jsx)(p.Fragment,{children:e},t):[])})(n,e,e=>(0,m.jsx)(Me,{children:e}))}const T=o?(0,m.jsx)(et,{ancestors:o}):r&&(0,m.jsx)(Q,{items:r,id:_}),[O,N]=(0,De.A)(),V=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(ue,{ref:N,primary:F||(s?n:(0,m.jsx)(K.A,{children:n})),secondary:T,layout:j,visual:i,actions:s||a?(0,m.jsxs)(b.A,{container:{gap:1,alignItems:"center",justify:"center"},children:[void 0!==a&&(0,m.jsx)(Se,{id:M,"aria-label":$("menu_item_count",[a]),children:a}),s&&(0,m.jsx)(Qe,{expandHandler:P?q:void 0})]}):void 0,container:{colGap:1}}),u&&(0,m.jsx)(Pe.A,{target:O,hideDelay:"none",showDelay:"short",children:u})]}),B=(0,p.useMemo)(()=>{const e=$("menu_collapsed",[n]);return s?$(S?"menu_item_shift_space_expand_collapse":"menu_item_expand_arrow",[e]):n},[l,n,s]),U=(0,p.useMemo)(()=>{let e;return r?(e=_,void 0!==a&&a>=0&&(e=`${e} ${M}`)):e=void 0!==a&&a>=0?M:"",e},[s,r,M,_]);return(0,m.jsxs)(b.A,{"data-testid":R.root,...y,container:{alignItems:"center",justify:"between",gap:1},id:z,as:Te,"aria-label":B,"aria-describedby":U,role:v,"aria-disabled":g,"data-expand":!!s,itemLayout:j,tabIndex:-1,disabled:g,onMouseDown:e=>{e.preventDefault()},onClick:e=>{if(!g)return s&&"boolean"!=typeof l?q(e):L(e)},onMouseEnter:"flyout"===I?q:void 0,href:d,mode:x,isParentItem:!!s,"aria-selected":!!l,selectableParent:P,children:[D&&(!s||P)&&(0,m.jsx)(Fe,{name:"check"}),d&&!D?(0,m.jsx)(Re.A,{href:d,tabIndex:"-1",children:V}):V]})},Ye),nt=(e,t,n,r)=>{const o=!!e.firstElementChild?.matches("legend"),i=e.querySelectorAll([':scope > ul > li:not([role="separator"]):not([role="presentation"])',':scope > ul > li[role="presentation"] > div:first-child',':scope > ul > li > ul[role="group"] > li:not([role="separator"])'].join(", "))[Math.max(Math.min(r-(o?2:1),n-1),0)];let a;if(i){const t=e.getBoundingClientRect().top,o=i.getBoundingClientRect(),s=e.querySelector(":scope > ul")?.scrollTop??0;let l=o.bottom;n>r&&(l=(o.top+o.bottom)/2),a=l-t+s}t.style.height=a?`${a}px`:""},rt=({id:e,label:t,items:n,itemRole:r})=>{const{componentId:o}=(0,p.useContext)(Z),i=`${o}-${e}`;return(0,m.jsxs)("li",{role:"presentation",children:[(0,m.jsx)(b.A,{container:{alignItems:"center",pad:[.5,1]},as:Ve,id:i,children:t}),(0,m.jsx)("ul",{role:"group","aria-labelledby":i,children:n.length>0&&n.map(e=>(0,p.createElement)(tt,{...e,key:e.id,role:r??"menuitem"}))})]})},ot=e=>Array.isArray(e.items),it=(0,p.forwardRef)(function({items:e,parent:t,menuRole:n},r){const o=(0,A.A)(),i=(0,v.A)(r),a=(0,p.useRef)(null),s=(0,p.useRef)(null),l=(0,p.useRef)(null),[c,d]=(0,p.useState)(),{componentId:u,loadMore:h,loading:f,scrollAt:g,emptyText:b,onItemExpand:y,pushFlyoutId:$,flyOutActiveIdStack:x,updateActiveDescendants:w,updateParentDescendantStack:k}=(0,p.useContext)(Z),{announcePolite:j}=(0,O.A)();N(a,e.length-1,()=>{h?.(t?.item?.id)},":scope > li"),(0,V.A)(()=>{if(c){const t=e.find(e=>e.id===c.id);t&&ot(t)?d(t):d(void 0)}},[c,e]),(0,p.useEffect)(()=>{e.some(e=>x.includes(e.id))||(l.current=null,d(void 0))},[x]),(0,p.useEffect)(()=>{0!==e.length||f||j({message:b??o("no_items")})},[e.length,f]);const E=(0,p.useMemo)(()=>e.length?e.map(e=>Le.isItem(e)?(0,p.createElement)(tt,{...e,key:e.id,"aria-haspopup":!!e.items,"aria-expanded":e.items?e.id===c?.id:void 0,role:"listbox"===n?"option":"menuitem",onExpand:(t,n)=>{e.items?(l.current=n.currentTarget,d(ot(e)?e:void 0),e?.onExpand?.(t,n),y?.(t,n),$(e.id||u),w(),k&&k(l.current.closest("li"))):(l.current=null,d(void 0))}}):(0,p.createElement)(rt,{...e,key:e.id,itemRole:"listbox"===n?"option":"menuitem"})):f?null:(0,m.jsx)(U.A,{message:b,forwardedAs:"li"}),[e,f,b,c,x]),I=(0,m.jsxs)(Ue,{ref:a,role:n,children:[E,f&&!c&&(0,m.jsx)(Ge,{children:(0,m.jsx)(B.A,{placement:"local"})})]});(0,p.useLayoutEffect)(()=>{d(void 0),i.current&&(s.current=i.current.parentElement,nt(i.current,i.current,e.length,g))},[e]);const C=(0,p.useCallback)(()=>{c&&d(void 0)},[c]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Ke,{ref:i,onScroll:C,"data-flyout-menu-parent-id":u,"data-flyout-menu-id":t?.item.id||u,children:I}),c&&i.current&&(0,m.jsx)(D.A,{target:l.current,show:!0,strategy:"fixed",placement:"right-start",portal:!1,children:(0,m.jsx)(it,{items:c.items,parent:{el:i.current,item:c,siblingItems:e,setExpandedItem:d,returnFocusRef:l},menuRole:n})})]})}),at=it,st=(e,t,n)=>{const{portalTarget:r}=(0,I.A)(),o=r?.ownerDocument?.defaultView||window,i=(0,p.useCallback)(e=>{const r=e.composedPath(),o=r[0];if(!(0,E.A)(o,Node))return;let i=0,a=1;for(;!(0,E.A)(r[i],Document);){const e=r[i],t=r[a];if(!e||!t)return;if((0,E.A)(t,DocumentFragment)||(0,E.A)(t,Document)){if(!(0,E.A)(e,Node)||!t.contains(e))return;i=a}else if((0,E.A)(e,DocumentFragment)){if(!(0,E.A)(t,Element)||t.shadowRoot!==e)return;i=a}a+=1}(0,k.A)(t).flatMap(e=>(0,E.A)(e,Element)||(0,E.A)(e,Document)||(0,E.A)(e,DocumentFragment)?[e,...(0,j.A)(e)]:[e]).every(e=>e!==o&&!e.contains(o))&&n(e)},[...t,n]);(0,p.useEffect)(()=>{const t=Array.isArray(e)?e:[e];return t.forEach(e=>o?.document?.addEventListener(e,i)),()=>{t.forEach(e=>o?.document?.removeEventListener(e,i))}},[e,i])};var lt=n(1862);const ct=e=>{const t=e.current?.getRootNode();if((0,E.A)(t,Document)||(0,E.A)(t,ShadowRoot))for(const n of t.childNodes)if(n.contains(e.current)&&(0,E.A)(n,HTMLElement))return n},dt="calc(100vw - 20rem)",ut="budicon",mt="drag",pt=()=>(0,m.jsx)("path",{d:"M9.5 5.136V3.5h1.708v1.636H9.5Zm0 4.111V7.611h1.708v1.636H9.5Zm0 4.071v-1.636h1.708v1.636H9.5Zm0 4.11v-1.635h1.708v1.636H9.5Zm0 4.072v-1.636h1.708V21.5H9.5Zm4.292-16.364V3.5H15.5v1.636h-1.708Zm0 4.111V7.611H15.5v1.636h-1.708Zm0 4.071v-1.636H15.5v1.636h-1.708Zm0 4.11v-1.635H15.5v1.636h-1.708Zm0 4.072v-1.636H15.5V21.5h-1.708Z"}),ht="0 0 25 25",ft="budicon",gt="arrow-micro-up-down",bt=()=>(0,m.jsx)("path",{d:"m12.402 5 4.597 6H8l4.402-6Zm.195 15L8 14h9l-4.403 6Z"}),At="0 0 25 25";(0,$.pU)(a),(0,$.pU)(s);const vt=(0,h.Ay)(y.Ay)(({rotateIcon:e})=>h.AH`
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    &:not(:focus) {
      ${f.Ic};
    }

    ${e&&h.AH`
      ${$.vE} {
        transform: rotate(90deg);
      }
    `}
  `),yt=h.Ay.div(({theme:e})=>h.AH`
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

    ${y.OV} {
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: calc(-2 * ${e.base.spacing});
      translate: 0 -50%;
      box-shadow: ${e.base.shadow.focus};
    }
  `);yt.defaultProps=g.qn;const $t=(0,p.forwardRef)(function({onMouseDown:e,onKeyDown:t},n){const r=(0,v.A)(n),o=(0,A.A)(),[i,a]=(0,p.useState)(!1),[s,l]=(0,p.useState)(!1);H(()=>{a(!1),l(!1)});const c=t=>{const n=ct(r);n&&(n.style.setProperty("user-select","none"),a(!0),e?.(t))};return(0,m.jsx)(yt,{onMouseDown:c,onMouseUp:()=>{const e=ct(r);e&&(e.style.removeProperty("user-select"),a(!1))},ref:r,children:(0,m.jsx)(vt,{tabIndex:0,icon:!0,label:i||s?void 0:o("resize"),"aria-label":o(i||s?"drag_handle_cancel_description":"drag_handle_activate_description"),onMouseDown:c,onKeyDown:e=>{"Space"===e.code&&(e.preventDefault(),l(!s)),t?.(e,s)},onBlur:()=>{l(!1)},rotateIcon:s,children:(0,m.jsx)($.Ay,{name:s?"arrow-micro-up-down":"drag"})})})}),xt=(0,f.ir)("21.875rem"),wt=h.Ay.div(e=>{const{state:t,shadow:n,position:r,placement:o,transitionSpeed:i,size:a,resizeable:s,theme:l}=e;let c="horizontal",d="X",u="top";"top"!==o&&"bottom"!==o||(c="vertical",d="Y",u="left");const m="open"===t||"opening"===t?0:"100%",p=i||l.base.animation.speed;return h.AH`
    z-index: ${l.base["z-index"].drawer};
    position: ${r};
    ${o}: 0;
    ${u}: 0;
    height: ${"vertical"===c?a:"100%"};
    width: ${"horizontal"===c?a:"100%"};
    transition-property: transform, box-shadow, opacity;
    transition-duration: max(${p}, 0.0001s);
    transition-timing-function: ${l.base.animation.timing.ease};
    transform: ${"open"===t?"none":`translate${d}(${"top"===o||"left"===o?"-":""}${m})`};

    ${n&&h.AH`
      box-shadow: ${l.base.shadow.high};
    `}

    ${s&&h.AH`
      width: ${"horizontal"===c?"var(--resize-drawer-width)":"100%"};
    `}
  `});wt.defaultProps=g.qn;const kt=(0,p.forwardRef)(function(e,t){const{open:n=!1,shadow:r=!1,position:o="absolute",children:i,placement:a="right",transitionSpeed:s,size:l="100%",resizeable:c=!1,onAfterOpen:d,onAfterClose:u,onBeforeOpen:h,onBeforeClose:f,onOuterClick:g,nullWhenClosed:b=!1,...A}=e,y=(0,v.A)(t),{ltr:$,rtl:x}=S(),[w,k]=(0,p.useState)(n?"open":"closed");let j=(0,L.A)(w);j||(j=w),st("mousedown",[y],(0,p.useCallback)(()=>{n&&g?.()},[n,g])),(0,p.useEffect)(()=>{!n||"closed"!==w&&"closing"!==w?n||"open"!==w&&"opening"!==w?n&&"open"===w&&"open"!==j?d?.():n||"closed"!==w||"closed"===j||u?.():(f?.(),k("closing")):(h?.(),(0,lt.A)(y.current),k("opening"))},[n,w,j,h,f,d,u]);const E=(0,p.useCallback)(e=>{e.target===y.current&&"transform"===e.propertyName&&k(n?"open":"closed")},[n]),I=(0,p.useRef)();(0,p.useEffect)(()=>{if(!c||!y.current)return;const e=ct(y);e&&(e.style.getPropertyValue("--resize-drawer-width")||e.style.setProperty("--resize-drawer-width",l))},[y.current]);const C=(0,p.useCallback)(e=>{const t=ct(y),n=y.current?.getBoundingClientRect();if(!n||!t)return;I.current=e.clientX;const r=new AbortController;t.addEventListener("mousemove",e=>{if(!I.current||!n.width)return;const r=I.current,o="right"===a?r-e.clientX:e.clientX-r,i=Math.max(o+n.width,parseInt(xt,10));t.style.setProperty("--resize-drawer-width",`clamp(${xt}, ${i}px, ${dt})`)},{passive:!0,signal:r.signal}),t.addEventListener("mouseup",()=>{r.abort()},{once:!0})},[a]),H=(0,p.useCallback)((e,t)=>{if(!t)return;const n=ct(y),r=.05*document.documentElement.clientWidth,o=y.current?.getBoundingClientRect();if(!o||!n)return;if("ArrowLeft"!==e.code&&"ArrowRight"!==e.code)return;e.preventDefault();const i=("ArrowLeft"===e.code?1:-1)*("right"===a?1:-1),s=Math.max(o.width+i*r,parseInt(xt,10));n.style.setProperty("--resize-drawer-width",`clamp(${xt}, ${s}px, ${dt})`)},[a]),R=c&&"open"===w&&("left"===a&&x||"right"===a&&$);return"closed"===w&&!n&&b?null:(0,m.jsxs)(wt,{ref:y,position:o,shadow:r&&n,transitionSpeed:s,placement:a,size:l,resizeable:c,open:n,state:w,onTransitionEnd:E,...A,children:[i,R&&(0,m.jsx)($t,{onMouseDown:C,onKeyDown:H})]})});(0,$.pU)(r,o);const jt=({text:e,onClick:t})=>{const n=(0,A.A)(),{arrowNavigationUnsupported:r}=(0,p.useContext)(Z),{start:o}=S(),i=(0,p.useCallback)(e=>{"Enter"!==e.key&&e.key!==`Arrow${q(o)}`||t()},[t,o]);return(0,m.jsx)(b.A,{container:{alignItems:"center"},as:Be,onClick:t,onKeyDown:i,"data-collapse":"true","aria-expanded":!0,"aria-label":`${n("menu_expanded",[e||""])} ${n(r?"menu_item_collapse_shift_space":"menu_item_collapse_arrow")}`,children:(0,m.jsx)(ue,{visual:(0,m.jsx)($.Ay,{name:`caret-${o}`}),primary:e})})},Et=(e,t)=>{e.disabled=t;const n=e.querySelector("legend button");n&&(n.disabled=t)},It=(e,t)=>e.reduce((e,t)=>!Le.isItem(t)&&t.items?e+t.items.length+1:e+1,t?1:0),Ct=e=>e.flatMap(e=>Le.isItem(e)?e:[e,...e.items?e.items:[]]),Ht=(0,p.forwardRef)(function({items:e,parent:t,id:n,menuRole:r,...o},i){const a=(0,A.A)(),s=(0,p.useRef)(null),l=(0,v.A)(i),c=(0,p.useRef)(null),d=(0,p.useRef)(null),[u,h]=(0,p.useState)(!t),[f,g]=(0,p.useState)(),{scrollAt:b,"aria-label":y,loadMore:$,loading:x,emptyText:w,currentItemId:k,onItemExpand:j,focusControl:E,updateActiveDescendants:I,setFocusReturnEl:C,onItemCollapse:H,expandTo:R}=(0,p.useContext)(Z),{end:D}=S(),{announcePolite:P}=(0,O.A)();N(c,e.length-1,()=>{x||$?.(t?.item?.id)},":scope > li"),(0,p.useLayoutEffect)(()=>{l.current&&!f&&(s.current=l.current.parentElement,nt(l.current,s.current,It(e,x),b))}),(0,p.useEffect)(()=>{t&&h(!0)},[]),(0,V.A)(()=>{if(f){const t=Ct(e).find(e=>e.id===f.id);t&&ot(t)?g(t):g(void 0)}},[f,e]),(0,V.A)(()=>{if(k){const t=Ct(e).find(e=>e.items?.length&&void 0!==Le.getItem(e.items,k));t&&(g(ot(t)?t:void 0),I({preventScroll:!0}))}},[k,e,t]),(0,p.useEffect)(()=>{if(R?.parentItemId){const t=Ct(e).find(e=>e.id===R.parentItemId);if(t)g(ot(t)?t:void 0),I({preventScroll:!0}),R.onComplete();else{const t=Ct(e).find(e=>e.items?.length&&void 0!==Le.getItem(e.items,R.parentItemId));t?g(ot(t)?t:void 0):R.onComplete()}}},[R,e,t]);const z=(0,p.useCallback)((t,n)=>{const r=Le.getItem(e,t);d.current=n.currentTarget,r&&ot(r)?g(r):g(void 0),r?.onExpand?.(t,n),j?.(t,n),I({preventScroll:!0})},[e]);(0,p.useEffect)(()=>{0!==e.length||x||P({message:w??a("no_items")})},[e.length,x]);const M=(0,p.useMemo)(()=>e.length?e.map((t,n)=>Le.isItem(t)?(0,p.createElement)(tt,{...t,key:t.id,role:"listbox"===r?"option":"menuitem",onExpand:t.items?z:void 0}):(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(rt,{...t,items:t.items.map(e=>e.items?{...e,onExpand:z}:e),itemRole:"listbox"===r?"option":"menuitem"}),e[n+1]&&Le.isItem(e[n+1])&&(0,m.jsx)(Ne,{role:"separator"})]},t.id)):x?null:(0,m.jsx)(U.A,{message:w,forwardedAs:"li"}),[e,x,w]),_=(0,m.jsxs)(Ue,{id:f?void 0:n,ref:c,role:r,...o,children:[t&&(0,m.jsx)(jt,{text:t.item.primary,onClick:()=>{h(!1)}}),M,x&&!f&&(0,m.jsx)(Ge,{children:(0,m.jsx)(B.A,{placement:"local",liveConfig:{contextualLabel:y??a("menu")}})})]});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(kt,{"aria-hidden":!!f,as:Ze,ref:l,open:u,style:{opacity:f?0:1},disabled:!!f,placement:D,onBeforeOpen:()=>{t&&(t.el.style.opacity="0"),l.current&&(l.current.style.opacity="1")},onAfterOpen:()=>{t&&Et(t.el,!0)},onBeforeClose:()=>{t&&s.current&&(Et(t.el,!1),t.el.style.opacity="1",nt(t.el,s.current,It(t.siblingItems),b)),l.current&&(l.current.style.opacity="0")},onAfterClose:()=>{if(t){E?.focus();const e=t.returnFocusRef.current;t.setExpandedItem(void 0),e&&C(e?.closest("li")),H?.(t.item.id),I()}},children:_}),f&&l.current&&(0,m.jsx)(Ht,{id:n,items:f.items,parent:{el:l.current,item:f,siblingItems:e,setExpandedItem:g,returnFocusRef:d},menuRole:r})]})}),St=Ht,Rt=(0,p.forwardRef)(function(e,t){const n=(0,x.A)(),{testId:r,id:o=n,items:i=[],itemLayout:a="stacked",onCreateNew:s,mode:l="action",accent:c,scrollAt:d=7,emptyText:u,onItemClick:h,onItemActive:f,onItemExpand:g,loadMore:b,onItemCollapse:k,loading:j=!1,currentItemId:I,header:C,footer:H,variant:R="drill-down",focusControlEl:D,arrowNavigationUnsupported:F,"aria-describedby":O,"aria-label":N,role:V="menu",listId:B,pauseDescendantEvaluation:U,menuList:K,handleRef:G,...W}=e,X=(0,w.A)(r,Je),J=(0,A.A)(),{end:Y,start:Q}=S(),ee=(0,x.A)(),te=(0,v.A)(t),ne=(0,p.useRef)(0),[re,oe]=(0,p.useState)(0),[ie,ae]=(0,p.useState)(null),[se,le]=(0,p.useState)([o]),[ce,de]=(0,p.useState)(),[ue,me]=(0,p.useState)(!1),[pe,he]=(0,p.useState)([]),[fe,ge]=(0,p.useState)(),be=!D,Ae=(0,p.useMemo)(()=>`fieldset[data-flyout-menu-id="${se[se.length-1]}"]`,[se]),ve=(0,p.useMemo)(()=>D||te.current,[D,te.current]);(0,p.useImperativeHandle)(G,()=>({expandTo:e=>{ge(e)}}),[]);const ye=(0,p.useCallback)(e=>{le([...se,e])},[se]);(0,p.useEffect)(()=>{le([...se,o])},[o]);const $e=(0,p.useCallback)(e=>{he([...pe,e])},[pe]),xe=(0,p.useCallback)(e=>btoa(encodeURIComponent(e)),[o]),we=(0,p.useCallback)(e=>decodeURIComponent(atob(e)),[o]),ke=(0,p.useCallback)(({preventScroll:e=!1}={})=>{me(e),oe(Math.random())},[]),je=(0,p.useMemo)(()=>({focusEl:ve,scope:te.current,scopeSelector:"drill-down"===R?'fieldset[aria-hidden="false"]':Ae,selector:`[role="${"menu"===V?"menuitem":"option"}"], legend`,focusDescendantEl:ie,clearFocusDescendant:()=>{ae(null)},focusReturnEl:ce,clearFocusReturn:()=>{de(null)},currentDescendantId:I?xe(I):void 0,preventInitialScroll:ue,clearPreventScroll:()=>{me(!1)},pauseDescendantEvaluation:U}),[ve,te.current,Ae,ce,ie,I,ue,U]),{activeDescendant:Ee,descendants:Ie}=(({focusEl:e,scope:t,scopeSelector:n,selector:r,orientation:o="vertical",focusDescendantEl:i,clearFocusDescendant:a,focusReturnEl:s,clearFocusReturn:l,currentDescendantId:c,onClick:d,preventInitialScroll:u,pauseDescendantEvaluation:m=!1,clearPreventScroll:h},f=[])=>{const[g,b]=(0,p.useState)(0),A=(0,p.useRef)(""),v=(0,p.useRef)(m),[y,$]=(0,p.useState)(null),[x,w]=(0,p.useState)(null),[k,j]=(0,p.useState)(),{rtl:I}=S(),C=(0,p.useCallback)(()=>{k?.forEach(e=>{e.setAttribute("data-current","false")})},[k]),H=(0,p.useCallback)(e=>{C(),j(e?Array.from(e).filter(e=>(0,E.A)(e,HTMLElement)):null)},[k]),R=(0,p.useCallback)(({clear:t}={clear:!1})=>{const n=[];if(k&&k.length&&k.forEach(e=>{e.id=e.id||(0,P.A)(),n.push(e.id)}),t){const t=e?.getAttribute("aria-owns")?.split(" "),r=t?.filter(e=>!n.includes(e));e?.setAttribute("aria-owns",r?.join(" ")||"")}else e?.setAttribute("aria-owns",n.join(" "))},[e,k]),D=(0,p.useCallback)(()=>{if(m)return;let e=t;if(e&&(0,E.A)(e,HTMLElement)){if(n&&(e=e.querySelector(n)),!e)return void H(null);if(r){const t=e.querySelectorAll(r);H(t)}else{const t=e.querySelectorAll(z.U);H(t)}}else H(null);null===x&&w(0)},[t,n,r,m,x]);return(0,p.useEffect)(()=>{v.current=m},[m]),(0,p.useEffect)(()=>{if(!t||!e)return;t.setAttribute("data-active-scope",(0,M.A)()===e?"true":"false");const n=()=>{t.setAttribute("data-active-scope","true")},r=()=>{t.setAttribute("data-active-scope","false")};return e.addEventListener("focus",n),e.addEventListener("blur",r),()=>{e.removeEventListener("focus",n),e.removeEventListener("blur",r)}},[t,e]),(0,p.useEffect)(()=>{m||D()},[m]),(0,p.useEffect)(()=>{const e=setTimeout(()=>{D(),v.current||w(0)},0);return()=>clearTimeout(e)},[...f]),(0,p.useEffect)(()=>{m?(C(),R({clear:!0})):(R(),b(Math.random()))},[m,e,k]),(0,p.useEffect)(()=>{const t=()=>{l?.(),h?.(),null!==x&&x+1<k.length?w(x+1):w(0)},n=()=>{l?.(),h?.(),w(null!==x&&x-1>-1?x-1:k.length-1)},r=e=>{k?.length&&(["ArrowDown","ArrowUp"].includes(e.key)&&"vertical"===o&&e.preventDefault(),["ArrowLeft","ArrowRight"].includes(e.key)&&"horizontal"===o&&e.preventDefault(),setTimeout(()=>{switch(e.key){case"ArrowDown":"vertical"===o&&t();break;case"ArrowUp":"vertical"===o&&n();break;case"ArrowRight":"horizontal"===o&&(I?n():t());break;case"ArrowLeft":"horizontal"===o&&(I?t():n());break;case"Enter":if(null!==x){if(d){d(k[x]);break}const e=k[x].nodeName.toLowerCase();_.includes(e)?k[x].click():k[x].querySelector(`${_.join(",")}`)?.click()}}},0))};return!m&&e&&k?.length&&!c&&e.addEventListener("keydown",r),()=>{e?.removeEventListener("keydown",r)}},[e,x,k,m]),(0,p.useEffect)(()=>{!m&&k&&c&&k.forEach((e,t)=>{e.id===c&&w(t)})},[c,k,m]),(0,p.useEffect)(()=>{if(v.current)return;const t=y||x,n=s?.id;let r;const o=i?.id;let c,d=!1;if(k&&k.length){if(k.forEach((e,t)=>{null===y&&e.id===o&&(c=t,d=!0,$(t)),e.id===n&&(r=t),e.setAttribute("data-current","false")}),r&&r!==x)return w(r),void l?.();if(d&&void 0!==c)return b(Math.random()),void w(c);if(null!==t&&k[t]){const n=k[t];if(n.setAttribute("data-current","true"),e?.setAttribute("aria-activedescendant",n.id),n.id!==A.current&&!u){const e=Element.prototype.scrollIntoViewIfNeeded??Element.prototype.scrollIntoView;e?.call(n,!1)}null!==y&&($(null),a?.()),A.current=n.id}}return()=>{e?.removeAttribute("aria-activedescendant")}},[k,x,i,e,g]),{activeDescendant:null!==x&&k?k[x]:void 0,descendants:k||null}})(je,[re]),Ce=(0,L.A)(Ee);(({loading:e,descendants:t,previousActiveDescendant:n,activeDescendant:r,focusReturnEl:o,setFocusReturnEl:i,scrollEl:a})=>{(0,p.useEffect)(()=>{if(e&&t&&t.length&&r){const e=[...t].pop();let n;return(e?.id||void 0)===r.id?(a&&(a.scrollTop=a.scrollHeight-a.offsetHeight),o?.id!==r.id&&(n=setTimeout(()=>{i(e)},0))):o?.id!==r.id&&(n=setTimeout(()=>{i(r)},0)),()=>clearTimeout(n)}},[e,t,n,r,a,o])})({loading:j,descendants:Ie,previousActiveDescendant:Ce,activeDescendant:Ee,focusReturnEl:ce,setFocusReturnEl:de,scrollEl:je.scope?.querySelector(je.scopeSelector)?.querySelector("ul")}),(0,p.useEffect)(()=>{const e=(e=null)=>{if(Ee){if("true"===Ee.dataset.expand&&"collapse"!==e)return void(Ee.querySelector('span[aria-hidden="true"]')??Ee).click();if("expand"!==e)if("flyout"===R&&se.length>1&&pe.length>0){le([...se].slice(0,-1));const e=pe.pop();void 0!==e&&de(e),ke()}else"true"===Ee.dataset.collapse&&Ee.click()}},t=t=>{switch(t.key){case`Arrow${q(Y)}`:if(F)break;e("expand");break;case`Arrow${q(Q)}`:if(F)break;e("collapse");break;case"Escape":if("flyout"===R&&se.length>1&&pe.length>0){t.preventDefault(),t.stopPropagation(),le([...se].slice(0,-1));const e=pe.pop();void 0!==e&&de(e),ke()}}F&&(" "===t.key||"Spacebar"===t.key)&&t.shiftKey&&(t.preventDefault(),e())};return Ee&&f?.(we(Ee.id)),ve?.addEventListener("keydown",t),()=>ve?.removeEventListener("keydown",t)},[ve,Ee,se]),(0,p.useEffect)(()=>{const e=setTimeout(()=>{if(i.length===ne.current){const e=Ie?.map(e=>e.id),t=je.scope?.querySelector(je.scopeSelector)?.querySelectorAll(je.selector);if(!t)return void ke();const n=Array.from(t);return n?.length!==e?.length?void ke():void(n.every((t,n)=>t.id===e[n])||ke())}ne.current=i.length,ke()},0);return()=>clearTimeout(e)},[i]);const He=(0,p.useMemo)(()=>({componentId:o,"aria-label":N,mode:l,arrowNavigationUnsupported:F,onItemClick:(e,t)=>{be&&te.current?.focus(),h?.(e,t)},onItemActive:f,onItemExpand:g,onItemCollapse:k,itemLayout:a,accent:c,scrollAt:d,emptyText:u,radioName:ee,loadMore:b,loading:j,variant:R,focusControl:ve,updateActiveDescendants:ke,setFocusReturnEl:de,setFocusDescendant:ae,getScopedItemId:xe,pushFlyoutId:ye,flyOutActiveIdStack:se,updateParentDescendantStack:$e,expandTo:{parentItemId:fe,onComplete:()=>{ge(void 0)}}}),[o,N,l,F,h,f,g,k,a,c,d,u,ee,b,j,R,ve,ke,de,ae,xe,ye,se,$e,fe]),Se=K??("drill-down"===R?(0,m.jsx)(St,{items:i,id:B,menuRole:V,"aria-multiselectable":"multi-select"===l,"aria-labelledby":N?`${o}-menuLabel`:void 0}):(0,m.jsx)(at,{items:i,menuRole:V}));return(0,m.jsxs)(Xe,{"data-testid":X.root,id:o,"aria-describedby":be?`${o}-menuDescription`:void 0,...W,ref:te,tabIndex:be?0:void 0,children:[be&&(0,m.jsx)("span",{id:`${o}-menuDescription`,hidden:!0,children:`${J("menu_selection_instructions")} `&&O||""}),N&&(0,m.jsx)(T.A,{id:`${o}-menuLabel`,children:N}),C&&(0,m.jsx)("header",{"data-popover-scroll-el":!0,children:C}),(0,m.jsx)(We,{"data-popover-scroll-el":!0,children:(0,m.jsx)(Z.Provider,{value:He,children:Se})}),(s||H)&&(0,m.jsx)("footer",{"data-popover-scroll-el":!0,children:s?(0,m.jsxs)(y.Ay,{"data-testid":X.createNew,variant:"link",onClick:s,children:[(0,m.jsx)($.Ay,{name:"plus"})," ",J("create_new")]}):H})]})}),Dt=(0,F.A)(Rt,Je),Pt="budicon",zt="arrow-micro-down",Mt=()=>(0,m.jsx)("path",{d:"M8 9.5h9l-4.402 6-4.597-6H8Z"}),_t="0 0 25 25",Lt=(0,G.A)("menu-button",[]);(0,$.pU)(l);const qt=h.Ay.button(({theme:{base:{spacing:e}}})=>h.AH`
      gap: ${e};
      flex-shrink: 0;
      white-space: nowrap;
      max-width: 100%;

      & + ${R.l} + ${y.OV} {
        margin-inline-start: ${e};
      }
    `);qt.defaultProps=g.qn;const Ft=h.Ay.span(({theme:e,padIcon:t})=>{const{base:{"hit-area":{"mouse-min":n,"finger-min":r}},components:{icon:{size:{s:o}}}}=e;return h.AH`
    max-width: 100%;

    ${t&&h.AH`
      padding-inline-start: calc((${n} - ${o}) / 2);

      @media (pointer: coarse) {
        padding-inline-start: calc(${r} - ${o} * 2);
      }
    `}

    ${K.D} {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    ${$.vE}:last-child:not(:first-child) {
      /* Offsets the flex gap to make the down arrow appear to trail the text. */
      margin-inline-start: -${e.base.spacing};
    }
  `}),Tt=(0,h.Ay)(D.A)`
  min-width: 20ch;
`,Ot=(0,p.forwardRef)(function(e,t){const n=(0,x.A)(),{testId:r,id:o=n,text:i,menu:a,popover:s,onClick:l,icon:c,count:d,iconOnly:u=!1,showArrow:h=!1,...f}=e,g=(0,w.A)(r,Lt),[A,C]=(0,p.useState)(!1),R=(0,v.A)(t),D=(0,v.A)(s?.ref),P=(0,v.A)(a?.ref);((e,t)=>{const[n,r]=(0,p.useState)(!1),o=(0,p.useRef)(null),{portalTarget:i}=(0,I.A)(),a=i?.ownerDocument?.defaultView||window,s=(0,p.useRef)();(0,p.useEffect)(()=>()=>{s.current?.abort()},[]);const l=(0,p.useCallback)(i=>{if(!n)return;const l=(0,E.A)(i,FocusEvent)?i.relatedTarget:null,c=(0,k.A)(e).flatMap(e=>[e,...(0,j.A)(e)]);if((0,E.A)(l,Node)){const e=c.find(e=>e?.contains(l));if(e)return void(o.current=e)}const d=new AbortController,u=e=>{c.some(t=>e.composedPath().some(e=>(0,E.A)(e,Node)&&t.contains(e)))||(r(!1),t?.(!1,o.current),o.current=null),d.abort()};a?.document?.addEventListener("focusin",u,{once:!0,signal:d.signal}),a?.document?.addEventListener("mouseup",u,{once:!0,signal:d.signal});const m=()=>{r(!1),t?.(!1,o.current),o.current=null,d.abort()};try{window.parent?.document.addEventListener("focusin",m,{once:!0,signal:d.signal}),window.parent?.document.addEventListener("mouseup",m,{once:!0,signal:d.signal})}catch{}s.current=d},[n,t,e]),c=(0,p.useCallback)(e=>{if(!n){r(!0);const n=e.currentTarget;t?.(!0,n),o.current=n}},[n,t]);(0,p.useEffect)(()=>{const t=(e=>(0,k.A)(e).flatMap(e=>[e,...(0,j.A)(e)]).filter(e=>(0,E.A)(e,HTMLElement)))(e);t.forEach(e=>{e?.contains(document.activeElement)&&c(new FocusEvent("focusin",{relatedTarget:document.activeElement}))})},[]),(0,p.useEffect)(()=>{const t=(0,k.A)(e);return t.forEach(e=>{e?.addEventListener("focusin",c),e?.addEventListener("popover:focusin",c),e?.addEventListener("focusout",l),e?.addEventListener("popover:focusout",l)}),()=>{t.forEach(e=>{e?.removeEventListener("focusin",c),e?.removeEventListener("popover:focusin",c),e?.removeEventListener("focusout",l),e?.removeEventListener("popover:focusout",l)})}},[e,c,l])})([D,R],(0,p.useCallback)(e=>{e||C(!1)},[])),H(e=>{A&&(C(!1),e.stopPropagation())},R),H(e=>{A&&(C(!1),e.stopPropagation(),R.current?.focus())},a?.focusControlEl);const{rtl:z}=S();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y.Ay,{"data-testid":g.root,as:qt,"aria-label":i,...f,id:o,ref:R,"aria-expanded":A,"aria-haspopup":"menu","aria-controls":A?`${o}-popover`:void 0,label:u&&!A?i:void 0,onClick:e=>{const t=e.detail>0;A?t&&C(!1):C(!0),A&&!t||l?.(e)},icon:u,children:(0,m.jsxs)(b.A,{as:Ft,container:{alignItems:"center",gap:1},padIcon:u&&h,children:[c&&(0,m.jsx)($.Ay,{name:c}),!u&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(K.A,{children:i}),"number"==typeof d&&(0,m.jsx)(Se,{children:d})]}),(!u||h)&&(0,m.jsx)($.Ay,{name:"arrow-micro-down"})]})}),(0,m.jsx)(Tt,{placement:z?"bottom-end":"bottom-start",hideOnTargetHidden:!0,...s,id:`${o}-popover`,show:!!a&&A,target:R.current,ref:D,children:a&&(0,m.jsx)(Dt,{testId:g.root,...a,ref:P,items:a.items,onItemClick:(e,t)=>{"multi-select"!==a.mode&&C(!1),a.onItemClick?.(e,t)},focusControlEl:a.focusControlEl||R.current||void 0})})]})}),Nt=(0,F.A)(Ot,Lt),Vt=(0,p.forwardRef)(function({"data-testid":e,items:t,menuAt:n=2,scrollAt:r,iconOnly:o=!0,menuButtonProps:i,contextualLabel:a,compact:s=!1,disabled:l=!1,tabIndex:c},d){const u=(0,A.A)(),h=(0,v.A)(d);return t&&0!==t.length?t.length>=n?(0,m.jsx)(Nt,{...e?{"data-testid":e}:{},ref:h,text:u("actions"),"aria-label":a&&u("actions_for",[a]),iconOnly:!0,icon:"more",variant:"simple",compact:s,onClick:i?.onClick,onKeyDown:i?.onKeyDown,disabled:l,tabIndex:c,menu:{scrollAt:r,items:t.map(({text:e,onClick:t,...n})=>({...n,primary:e,onClick:t?(e,n)=>{t(e,n,h.current??void 0)}:void 0}))}}):(0,m.jsx)(m.Fragment,{children:t.map(({id:t,icon:n,text:r,onClick:i,...c})=>(0,p.createElement)(y.Ay,{...e?{"data-testid":e}:{},key:t,variant:n&&o?"simple":void 0,onClick:e=>i?.(t,e),label:n?r:void 0,icon:!!n&&o,compact:s,"aria-label":a?`${r} - ${a}`:r,disabled:l,...c},n&&o?(0,m.jsx)($.Ay,{name:n}):r))}):null});var Bt=n(3113),Ut=n(9576);const Zt="budicon",Kt="warn-solid",Gt=()=>(0,m.jsx)("path",{d:"M23.5 22.5h-22l11-20 11 20Zm-9.741-6.935V9.39a1.655 1.655 0 0 0-1.166-.447c-.42 0-.792.134-1.212.447v6.175a3.23 3.23 0 0 0 1.212.223c.466 0 .839-.09 1.166-.223Zm-1.212 4.787c.466 0 .886-.179 1.212-.492.326-.313.466-.671.466-1.074 0-.447-.14-.85-.466-1.163-.326-.313-.746-.447-1.212-.447-.42 0-.792.134-1.119.447a1.594 1.594 0 0 0-.512 1.163c0 .403.186.76.512 1.074.327.313.7.492 1.119.492Z"}),Wt="0 0 25 25",Xt="budicon",Jt="diamond-minus",Yt=()=>(0,m.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M23.219 13.178a.96.96 0 0 0 0-1.356L13.179 1.78a.96.96 0 0 0-1.357 0L1.78 11.821a.96.96 0 0 0 0 1.357l10.04 10.041a.96.96 0 0 0 1.357 0l10.041-10.04ZM18 11.5H7v2h11v-2Z"}),Qt="0 0 25 25";var en=n(9418);const tn=/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|about|blob):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,nn=(0,G.A)("html",[]),rn=(0,en.A)(),on=h.AH`
  ul,
  ol {
    padding-inline-start: 2.5rem;
  }

  li {
    margin: 0.5rem 0;
  }

  ul li {
    ul {
      margin-inline-start: 1rem;
      list-style-type: circle;
    }

    ul ul {
      margin-inline-start: 2rem;
      list-style-type: square;
    }

    ul ul ul {
      margin-inline-start: 3rem;
      list-style-type: disc;
    }
  }

  ol li {
    ol {
      margin-inline-start: 1rem;
      list-style-type: lower-alpha;
    }

    ol ol {
      margin-inline-start: 2rem;
      list-style-type: lower-roman;
    }

    ol ol ol {
      margin-inline-start: 3rem;
      list-style-type: decimal;
    }
  }
`,an=h.Ay.div(({theme:e})=>h.AH`
    width: 100%;
    overflow-x: auto;
    overflow-wrap: break-word;
    contain: paint;
    ${(e=>{const{base:{"font-size":t,"font-scale":n,palette:r},components:{text:o}}=e,i=(0,je.Vr)(t,n);return`\n    ${on}\n    table {\n      ${(e=>h.AH`
  border-collapse: collapse;

  td {
    border: 0.0625rem solid ${e.base.palette["border-line"]};
    min-width: 6.25rem;
  }

  tr:first-child {
    td:first-child {
      border-top-left-radius: 0.125rem;
    }

    td:last-child {
      border-top-right-radius: 0.125rem;
    }
  }

  tr:last-child {
    td:first-child {
      border-bottom-left-radius: 0.125rem;
    }

    td:last-child {
      border-bottom-right-radius: 0.125rem;
    }
  }
`)(e)}\n    }\n    img {\n      max-width: 100%;\n      height: auto;\n      border-radius: 0.25rem;\n    }\n    a {\n      color: ${r.interactive};\n    }\n    pre {\n      white-space: break-spaces;\n    }\n    p {\n      min-height: ${i[o.primary["font-size"]]};\n    }\n    h1 {\n      font-size: ${i[o.h1["font-size"]]};\n      font-weight: ${o.h1["font-weight"]};\n      min-height: ${i[o.h1["font-size"]]};\n    }\n    h2 {\n      font-size: ${i[o.h2["font-size"]]};\n      font-weight: ${o.h2["font-weight"]};\n      min-height: ${i[o.h2["font-size"]]};\n    }\n    h3 {\n      font-size: ${i[o.h3["font-size"]]};\n      font-weight: ${o.h3["font-weight"]};\n      min-height: ${i[o.h3["font-size"]]};\n    }\n    h4 {\n      font-size: ${i[o.h4["font-size"]]};\n      font-weight: ${o.h4["font-weight"]};\n      min-height: ${i[o.h4["font-size"]]};\n    }\n    h5 {\n      font-size: ${i[o.h5["font-size"]]};\n      font-weight: ${o.h5["font-weight"]};\n      min-height: ${i[o.h5["font-size"]]};\n    }\n    h6 {\n      font-size: ${i[o.h6["font-size"]]};\n      font-weight: ${o.h6["font-weight"]};\n      min-height: ${i[o.h6["font-size"]]};\n    }\n  `})(e)}

    ${R.l} ul {
      ul {
        padding-inline-start: 0;
      }
      ol {
        padding-inline-start: 0;
      }
    }

    ${R.l} li {
      margin: 0;
    }
  `);if(an.defaultProps=g.qn,rn.isSupported){const e=new WeakSet;rn.addHook("beforeSanitizeAttributes",t=>{(t instanceof HTMLElement||t instanceof SVGElement)&&(t.removeAttribute("class"),"A"===t.tagName&&t.hasAttribute("href")&&"_blank"===t.getAttribute("target")&&e.add(t))}),rn.addHook("afterSanitizeAttributes",t=>{if("A"===t.tagName&&t.hasAttribute("href")){const n=t.getAttribute("href");let r;try{r=new URL(n,window.location.href)}catch(e){return}window.location.origin!==r.origin?(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener")):e.has(t)&&(t.setAttribute("target","_blank"),e.delete(t))}})}const sn=(0,p.forwardRef)(function({testId:e,content:t,customTags:n,...r},o){const[i,a]=(0,p.useState)(!1),s=(0,p.useMemo)(()=>i&&rn.isSupported?rn.sanitize(t,{FORBID_TAGS:["style","font"],CUSTOM_ELEMENT_HANDLING:{tagNameCheck:n?e=>n.includes(e):void 0},ALLOWED_URI_REGEXP:tn}):"",[t,n,i]),l=(0,w.A)(e,nn);return(0,p.useEffect)(()=>{a(!0)},[]),(0,m.jsx)(an,{"data-testid":l.root,...r,dangerouslySetInnerHTML:{__html:s},ref:o})}),ln=(0,F.A)(sn,nn),cn=h.Ay.div``,dn=h.Ay.div``,un=h.Ay.div(({theme:e})=>h.AH`
    position: relative;
    @media (height >= 31.25rem) {
      overflow-y: auto;
      min-height: 4rem;
    }
    padding: calc(2 * ${e.base.spacing});

    /* Small amount of block padding accounts for focus ring clipping within overflow auto. */
    ${dn} + & {
      padding-block-start: calc(0.5 * ${e.base.spacing});
    }

    &:not(:last-child) {
      padding-block-end: calc(0.5 * ${e.base.spacing});
    }
  `);un.defaultProps=g.qn,h.Ay.div``;const mn=(0,h.Ay)(D.A)(({theme:e})=>h.AH`
    display: flex;
    flex-direction: column;
    min-width: min(${e.base["content-width"].sm}, calc(100vw - 2rem));
    max-width: min(${e.base["content-width"].lg}, calc(100vw - 2rem));
    max-height: calc(100vh - 2rem);

    @media (height < 31.25rem) {
      overflow-y: auto;
    }

    &[aria-busy='true'] {
      ${un} {
        overflow: hidden;
      }
    }
  `);mn.defaultProps=g.qn;var pn=n(574);const hn=(0,p.forwardRef)(function({arrow:e=!0,target:t,portal:n,strategy:r,placement:o,children:i,progress:a,focusTrap:s=!0,...l},c){const d=(0,v.A)(c);return(0,pn.A)(s?d:null,!1),(0,m.jsx)(mn,{...l,role:"dialog",arrow:e,"aria-modal":!1,"aria-busy":!!a,ref:d,target:t,portal:n,strategy:r,placement:o,children:i})}),fn=(0,h.Ay)(y.Ay)``,gn=(0,h.Ay)(hn)(({theme:e})=>h.AH`
    /* When a header is not rendered(e.g. progress state) the button must positioned atop. */
    ${un} > ${fn} {
      position: relative;
      z-index: calc(${e.base["z-index"].backdrop} + 1);
      align-self: end;
    }
  `);gn.defaultProps=g.qn;const bn=(0,p.forwardRef)(function({target:e,heading:t,children:n,progress:r,onDismiss:o,...i},a){const s=(0,A.A)(),l=(0,x.A)(),c=(0,v.A)(a),d=(0,p.useRef)(null),u=(0,p.useRef)(null);H(e=>{o?.(),e.stopPropagation()},c,[o]),st("mousedown",[e,c],()=>{o?.()}),(0,p.useLayoutEffect)(()=>{const e=(0,M.A)();return()=>{e instanceof HTMLElement&&e.isConnected&&e.focus()}},[]),(0,p.useEffect)(()=>{r||(()=>{if(r)return;const e=(0,z.A)(c),t=e.find(e=>d.current?.contains(e))??u.current??e[0];t?.focus()})()},[r]),(0,p.useEffect)(()=>{const t=()=>{setTimeout(()=>{o?.()},0)};return e.addEventListener("click",t),()=>{e.removeEventListener("click",t)}},[]);const h=t?(0,m.jsx)(K.A,{id:l,variant:"h2",children:"string"==typeof t?t:t.primary}):null,f=(0,m.jsx)(B.A,{visible:!!r,focusOnVisible:!0,placement:"local",message:"string"==typeof r?r:void 0}),g=(0,m.jsx)(fn,{icon:!0,variant:"simple",onClick:()=>{o()},label:s("close"),ref:u,children:(0,m.jsx)($.Ay,{name:"times"})});return(0,m.jsxs)(gn,{...i,..."string"==typeof t?{"aria-labelledby":l}:{"aria-label":t?.primary},arrow:!0,target:e,progress:r,ref:c,children:[t&&h&&(0,m.jsxs)(b.A,{container:{alignItems:"center",justify:"between",pad:2,gap:1},item:{shrink:0},as:dn,children:["string"==typeof t?h:(0,m.jsx)(ue,{primary:h,secondary:t.secondary?(0,m.jsx)(K.A,{variant:"secondary",children:t.secondary}):void 0,visual:t.visual}),g]}),(!t||n||r)&&(0,m.jsxs)(b.A,{container:{direction:"column"},item:{grow:1},as:un,ref:d,children:[!t&&g,n&&(0,m.jsx)(cn,{inert:r?"":void 0,children:n}),f]})]})}),An="budicon",vn="information",yn=()=>(0,m.jsx)("path",{d:"M4.37 20.63C2.122 18.386 1 15.69 1 12.5c0-3.19 1.123-5.885 3.37-8.13C6.614 2.122 9.31 1 12.5 1c3.19 0 5.885 1.123 8.13 3.37C22.878 6.614 24 9.31 24 12.5c0 3.19-1.123 5.885-3.37 8.13C18.386 22.878 15.69 24 12.5 24c-3.19 0-5.885-1.123-8.13-3.37Zm-2.49-8.182c0 2.15.582 4.12 1.791 5.866 1.164 1.79 2.73 3.09 4.701 3.94 1.971.851 4.03 1.03 6.134.627s3.895-1.388 5.418-2.91c1.478-1.478 2.463-3.314 2.91-5.418.404-2.105.224-4.12-.626-6.09-.806-1.97-2.104-3.537-3.85-4.745-1.792-1.21-3.761-1.791-5.91-1.791-2.911 0-5.373 1.03-7.433 3.045-2.06 2.06-3.09 4.567-3.134 7.477ZM13.65 5.14c.843 0 1.61.69 1.61 1.61 0 .92-.69 1.61-1.61 1.61-.843 0-1.61-.69-1.61-1.61 0-.92.69-1.61 1.61-1.61ZM12.1 19.4c-1.263 0-2.175-1.04-1.824-2.274l1.5-4.36c.14-.51.359-1.437-.132-1.437-.328 0-.728.164-1.201.491.35-1.09 1.333-1.62 2.456-1.62 1.264 0 2.176 1.04 1.825 2.274l-1.5 4.36c-.14.51-.17 1.338.322 1.338.328 0 .665-.13 1.011-.392-.35 1.09-1.333 1.62-2.456 1.62Z"}),$n="0 0 25 25";(0,$.pU)(u);const xn=h.Ay.div``,wn=(0,p.forwardRef)(function(e,t){const n=(0,A.A)(),{heading:r=n("additional_info"),contextualLabel:o,children:i,dialogHandle:a,...s}=e,[l,c]=(0,p.useState)(null),d=(0,p.useRef)(null),u=(0,v.A)(a);return(0,p.useImperativeHandle)(u,()=>({open:()=>{c(d.current)},close:()=>{c(null)}})),(0,m.jsxs)(b.A,{container:!0,as:xn,ref:t,...s,children:[(0,m.jsx)(y.Ay,{variant:"simple",label:n("additional_info"),compact:!0,icon:!0,ref:d,onClick:()=>{u.current?.open()},"aria-label":`${n("additional_info")} - ${o??r}`,children:(0,m.jsx)($.Ay,{name:"information"})}),l&&(0,m.jsx)(bn,{heading:r,target:l,onDismiss:()=>{u.current?.close()},children:"string"==typeof i?(0,m.jsx)(ln,{content:i}):i})]})}),kn=h.Ay.div(({theme:{base:{"border-radius":e,"font-size":t,"font-scale":n,animation:{speed:r,timing:o},palette:i},components:{"form-field":a,"form-control":{"foreground-color":s,"background-color":l,"border-color":c,"border-radius":d,"border-width":u,":hover":{"border-color":m},":focus":{"border-color":p,"box-shadow":g},":disabled":{"border-color":b,"background-color":A},":read-only":{"border-color":v,"background-color":y}}}},status:$,hasSuggestion:x})=>{const w=(0,je.Vr)(t,n),k=$&&a[$]?a[$]["status-color"]:c,j=x&&$?(0,f.jh)(.1,a[$]["status-color"],i["primary-background"]):l;return h.AH`
      color: ${s};
      background-color: ${j};
      border-radius: calc(${e} * ${d});
      border-color: ${k};
      border-width: ${u};
      border-style: solid;
      transition-property: color, background-color, border-color;
      transition-duration: ${r};
      transition-timing-function: ${o.ease};
      &,
      & > select {
        outline: none;
      }

      &:disabled,
      &[disabled] {
        background-color: ${A};
        border-color: ${b};
        cursor: not-allowed;
      }

      &:focus:not([disabled]) {
        border-color: ${p};
        box-shadow: ${g};
        ${x&&h.AH`
          background-color: ${l};
        `}
      }

      &:focus-within:not([disabled]) {
        ${x&&h.AH`
          background-color: ${l};
        `}
      }

      &:hover:not([readonly]):not([disabled]):not(:focus, :focus-within) {
        ${!$&&h.AH`
          border-color: ${m};
        `}
        ${x&&h.AH`
          background-color: ${l};
          box-shadow: 0 0 0 0.125rem ${(0,f.B3)(k,.2)};
        `}
      }

      ${x&&h.AH`
        border-end-end-radius: 0;
      `}

      &[readonly] {
        background-color: ${y};
        border-color: ${v};
      }

      @media (pointer: coarse) {
        /* stylelint-disable-next-line unit-allowed-list */
        font-size: max(${w.s}, 16px);
      }
    `});kn.defaultProps=g.qn,(0,p.forwardRef)(function(e,t){return(0,m.jsx)(kn,{ref:t,...e})});var jn=n(5206);const En=h.Ay.span`
  display: none;
`,In=(0,p.forwardRef)(function(e,t){const{portalTarget:n}=(0,I.A)();return n?(0,jn.createPortal)((0,m.jsx)(En,{...e,ref:t}),n):null}),Cn=["label","info","additional-info","suggestion-accept","suggestion-reject"],Hn=(0,G.A)("form-field",Cn),Sn=(0,G.A)("radio-check",["control",...Cn]),Rn=h.Ay.div(e=>{const{theme:{base:{spacing:t},components:{"form-field":n,"radio-check":{size:r,"touch-size":o,"background-color":i,"border-color":a,"border-width":s}}},status:l}=e;let c=a;return"error"!==l&&"warning"!==l||(c=n[l]["status-color"]),h.AH`
      display: flex;
      flex-shrink: 0;
      position: relative;
      width: ${r};
      height: ${r};
      margin-inline-end: calc(0.5 * ${t});
      border: ${s} solid ${c};
      background-color: ${i};

      @media (pointer: coarse) {
        width: ${o};
        height: ${o};
      }

      &::after {
        content: '';
        display: none;
      }
    `});Rn.defaultProps=g.qn;const Dn=h.Ay.input(e=>{const{disabled:t,theme:{base:{"border-radius":n},components:{"form-control":{":focus":{"box-shadow":r,"border-color":o},":read-only":{"background-color":i}},"radio-check":{size:a,":checked":{"background-color":s,"border-color":l}},checkbox:{"border-radius":c},"radio-button":{"border-radius":d}}}}=e,u=e.readOnly?i:s,m=(0,ke.A)(()=>(0,je.W0)(u)),p=`+ ${Bt.G} ${Rn}`,{ltr:g}=S();return h.AH`
    ${f.Ic}
    margin: 0;

    /* Sets rect size for JAWS focus outline */
    width: ${a};
    height: ${a};

    ${!t&&h.AH`
      &:focus ${p} {
        box-shadow: ${r};
        border-color: ${o};
      }
    `}
    &:checked
      ${p},
      &:checked:disabled
      ${p},
      &[type='checkbox']:indeterminate
      ${p},
      &[type='checkbox']:indeterminate:disabled
      ${p} {
      border-color: ${e.readOnly?"inherit":l};
      background-color: ${u};

      &::after {
        display: block;
      }
    }

    &[type='radio'] ${p}, &[type='radio'] ${p}::after {
      border-radius: ${d};
    }

    &[type='radio'] ${p}::after {
      content: '';
      position: absolute;
      inset: 0;
      margin: auto;
      width: calc(${a} * 0.3);
      height: calc(${a} * 0.3);
      border-radius: ${d};
      border: calc(${a} * 0.2) solid ${m};
    }

    &[type='checkbox'] ${p} {
      border-radius: min(calc(${n} * ${c}), 0.25rem);
    }

    &[type='checkbox']:not(:indeterminate) ${p} {
      &::after {
        width: 40%;
        height: 75%;
        ${g?h.AH`
              transform: rotate(45deg) translate(50%, -30%);
            `:h.AH`
              transform: rotate(45deg) translate(-50%, 30%);
            `}
        border-right: 0.15em solid ${m};
        border-bottom: 0.15em solid ${m};
      }
    }

    &[type='checkbox']:indeterminate ${p} {
      display: flex;

      &::after {
        width: 90%;
        height: 0.15em;
        margin: auto;
        background-color: ${m};
      }
    }
  `});Dn.defaultProps=g.qn;const Pn=h.Ay.div(e=>{const{disabled:t,readOnly:n,theme:{base:r,components:{"radio-check":{label:{color:o,"font-weight":i}},"form-control":{":hover":{"border-color":a}}}}}=e,s=(0,je.Vr)(r["font-size"],r["font-scale"]);return h.AH`
      > ${Bt.G} {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: ${i};
        word-break: break-word;
        font-size: ${s.s};
        color: ${o};
        margin: 0;
        min-height: ${r["hit-area"]["mouse-min"]};

        @media (pointer: coarse) {
          min-height: ${r["hit-area"]["finger-min"]};
        }
      }

      > ${qn} {
        margin: 0;
        padding-inline-start: calc(${r.spacing} / 4);
      }

      ${!(t||n)&&h.AH`
        &:not(:focus-within) > ${Bt.G}:hover ${Rn} {
          border-color: ${a};
        }
      `}
    `});Pn.defaultProps=g.qn;const zn=h.Ay.label(({disabled:e,readOnly:t,status:n,theme:{base:{palette:r,shadow:o,spacing:i},components:{card:a,"form-field":s,"radio-check":{label:l},"form-control":{":hover":{"border-color":c}}}}})=>{const d="error"===n?s.error["status-color"]:r["border-line"];return h.AH`
      min-width: min-content;
      cursor: pointer;
      background-color: ${a.background};
      border-radius: ${a["border-radius"]};
      border: 0.0625rem solid ${d};
      padding: ${i};

      ${e&&h.AH`
        cursor: not-allowed;
      `}
      ${!(e||t)&&h.AH`
        :hover:not(:focus-within) {
          border-color: ${c};

          ${Bt.G} ${Rn} {
            border-color: ${c};
          }
        }

        :focus-within {
          box-shadow: ${o.focus};
          border-color: transparent;
        }
      `}
        > ${Bt.G} {
        display: flex;
        align-items: center;
        color: ${l.color};
        font-weight: ${l["font-weight"]};
        margin: 0;
      }

      > ${qn} {
        margin: 0;
        padding-inline-start: calc(${i} / 4);
      }
    `});zn.defaultProps=g.qn;const Mn=(0,p.forwardRef)(function(e,t){const n=(0,x.A)(),r=(0,A.A)(),{testId:o,type:i,id:a=n,label:s,required:l=!1,disabled:c=!1,readOnly:d=!1,indeterminate:u=!1,checked:h,defaultChecked:f,variant:g="simple",onClick:b,onKeyDown:y,onChange:$,status:k,info:j,additionalInfo:E,ariaDescribedby:I,className:C,...H}=e,S=(0,w.A)(o,Sn),R="radio"===i,D="card"===g,P=(0,v.A)(t),z=(0,x.A)();return(0,p.useEffect)(()=>{!R&&P.current&&(P.current.indeterminate=!!u)},[P,u,R]),(0,m.jsx)(Bn,{testId:S,as:D?zn:Pn,label:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Rn,{status:k,isRadio:R,as:kn,required:l,disabled:c,readOnly:d,onMouseDown:e=>e.preventDefault()}),s,d&&(0,m.jsx)(In,{id:z,children:r("read_only")})]}),labelAs:D?"div":void 0,id:a,required:l,disabled:c,readOnly:d,status:k,info:j,isRadioCheck:!0,inline:!0,labelAfter:!0,additionalInfo:E,children:(0,m.jsx)(Dn,{"data-testid":S.control,...H,className:(0,Ut.A)("radio-check",C,{variant:g,type:i}),id:a,type:i,required:l,checked:h,defaultChecked:f,"aria-describedby":d?`${I} ${z}`:I,disabled:c,readOnly:d,onChange:$,onClick:e=>{d&&e.preventDefault(),b?.(e)},onKeyDown:e=>{"checkbox"===i&&d&&" "===e.key&&e.preventDefault(),"radio"===i&&d&&e.key.includes("Arrow")&&e.preventDefault(),y?.(e)},ref:P})})});(0,F.A)(Mn,Sn),(0,$.pU)(c,d,i);const _n=(0,h.Ay)($.Ay)(({theme:e,status:t})=>h.AH`
    height: 1em;
    width: 1em;
    color: ${(0,ke.A)(()=>(0,je.ho)(e.components["form-field"][t]["status-color"],e.base.palette["primary-background"]),()=>e.components["form-field"][t]["status-color"])};
    vertical-align: baseline;
  `);_n.defaultProps=g.qn;const Ln=(0,h.Ay)(y.Ay)(({theme:e})=>h.AH`
    margin-block-start: calc(${e.base.spacing} / 2);
    align-self: start;
  `);Ln.defaultProps=g.qn;const qn=h.Ay.div(({status:e,theme:{base:{"font-size":t,"font-scale":n,spacing:r,palette:o},components:{"form-field":i}}})=>{const{xxs:a}=(0,je.Vr)(t,n);return h.AH`
      max-width: max-content;
      font-size: ${a};
      word-break: break-word;

      &:not(:empty) {
        margin-block-start: calc(0.25 * ${r});
      }

      ${e&&i[e]&&h.AH`
        color: ${(0,ke.A)(()=>(0,je.ho)(i[e]["status-color"],o["primary-background"]),()=>i[e]["status-color"])};
      `}
    `});qn.defaultProps=g.qn;const Fn=h.Ay.div``,Tn=h.Ay.div(e=>{const{labelAsLegend:t,isRadioCheck:n,showAdditionalInfo:r,disabled:o,required:i,theme:{base:{palette:{urgent:a},"disabled-opacity":s,spacing:l,"hit-area":{"compact-min":c}}}}=e;return h.AH`
    ${o&&h.AH`
      opacity: ${s};
      -webkit-user-select: none;
      user-select: none;
    `}
    position: relative;
    border: 0;

    &:has(${Dn}:only-of-type) {
      ${qn} {
        min-width: 100%;
      }
    }

    > ${Bt.G}, > ${Fn} {
      &:not(:empty) {
        margin-bottom: calc(0.25 * ${l});
        min-height: ${c};
      }
    }

    > ${Bt.G}, > ${Fn} > ${Bt.G} {
      ${i&&h.AH`
        &::after {
          content: ${'"\\00a0*" / ""'};
          color: ${a};
        }
      `}

      ${o&&h.AH`
        cursor: not-allowed;
      `}
    }

    ${t&&h.AH`
      > legend {
        display: inline-flex;
        align-items: flex-end;
      }
    `}

    ${t&&r&&h.AH`
      display: block;

      > legend {
        float: inline-start;
      }

      > ${xn} {
        ${!n&&h.AH`
          float: inline-end;
        `}
        + * {
          clear: both;
        }
      }
    `}
  `});Tn.defaultProps=g.qn;const On=(0,h.Ay)(y.Ay)(({theme:{base:{"font-size":e,"font-scale":t,"border-radius":n,spacing:r,palette:o},components:{"form-control":{"border-radius":i,"border-width":a},"form-field":s}}})=>{const{xxs:l}=(0,je.Vr)(e,t),c=(0,ke.A)(()=>(0,je.ho)(s.pending["status-color"],o["primary-background"]),()=>s.pending["status-color"]),d=(0,je.ZV)(c),u=(0,ke.A)(()=>(0,je.W0)(c)),m=u?(0,f.B3)(u,.4):u;return h.AH`
    background-color: ${c};
    color: ${u};
    font-size: ${l};
    min-width: calc(3 * ${r});
    min-height: calc(3 * ${r});
    padding: 0 ${r};
    border-radius: 0;
    border: none;

    &:first-child {
      border-inline-end: ${a} solid ${m};
      border-end-start-radius: calc(${n} * ${i});
      margin-inline-start: calc(2 * ${r});
    }

    &:last-child {
      border-end-end-radius: calc(${n} * ${i});
      margin-inline-start: 0;
    }

    &:hover {
      color: ${d.foreground};
      background-color: ${d.background};
    }

    @media (pointer: coarse) {
      min-height: 2rem;
    }
  `});On.defaultProps=g.qn;const Nn={error:"warn-solid",warning:"diamond-minus",success:"check"},Vn=(0,p.forwardRef)(function(e,t){const n=(0,x.A)(),{testId:r,children:o,id:i=n,as:a="div",label:s,labelAs:l="label",labelFor:c=i,labelId:d,labelHidden:u=!1,labelAfter:h=!1,info:f,status:g,isRadioCheck:y,charLimitDisplay:$,required:k=!1,disabled:j=!1,readOnly:E=!1,inline:I=!1,onClear:C,actions:H,container:S,additionalInfo:R,onResolveSuggestion:D,"aria-describedby":P,className:M,..._}=e,L=(0,w.A)(r,Hn),q=(0,A.A)(),{announceAssertive:F}=(0,O.A)(),N="legend"===l,V="pending"===g&&!!D,B=(0,v.A)(t),U=(0,p.useRef)(null),[Z,K]=(0,p.useState)(null),G=!!R&&!j&&!u,W=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Bt.A,{"data-testid":L.label,id:d,as:l,htmlFor:"label"===l?c:void 0,labelHidden:u,onClick:e=>{E&&e.preventDefault()},inline:I,ref:U,children:s}),G&&Z&&(0,m.jsx)(wn,{"data-testid":L.additionalInfo,heading:R.heading,contextualLabel:Z,children:R.content})]}),X=y||N||u?W:(0,m.jsx)(b.A,{as:Fn,container:{justify:"between",alignItems:"end"},item:{alignSelf:"stretch"},children:W});let J;if((0,p.useEffect)(()=>{K(U.current?.textContent??null)},[s]),(0,p.useEffect)(()=>{if("error"===g||"warning"===g){let e=`${q(g)} ${f}`;U.current?.textContent&&(e=`${U.current?.textContent} ${e}`),F({message:e,type:g})}},[g,f]),N||p.Children.count(o)>1)J=o;else{const e=p.Children.only(o).props["aria-describedby"];J=(0,p.cloneElement)(o,{"aria-describedby":[e,f?`${i}-info`:void 0].join(" ").trim()||void 0})}H&&(J=(0,m.jsxs)(b.A,{container:{alignItems:"center",gap:.5},children:[J,(0,m.jsx)(Vt,{items:H,menuAt:3})]}));let Y=(0,m.jsxs)(b.A,{id:`${i}-info`,"data-testid":L.info,status:g,as:qn,container:{alignItems:"center",gap:.5},children:[g&&"pending"!==g&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b.A,{item:{alignSelf:"start"},as:_n,status:g,name:Nn[g]}),(0,m.jsx)(T.A,{children:`${q(g)} `})]}),f]});if($&&(Y=(0,m.jsxs)(b.A,{container:{justify:Y?"between":"end",gap:1},children:[Y,(0,m.jsx)(b.A,{item:{shrink:0},children:$})]})),V){const e=(0,z.A)(B);Y=(0,m.jsxs)(b.A,{container:{alignItems:"start",justify:"between"},children:[(0,m.jsxs)(qn,{"data-testid":L.info,status:g,id:`${i}-info`,children:[q("suggestion_info"),(0,m.jsx)(T.A,{"aria-live":"polite",children:q("suggestion_assist")})]}),(0,m.jsxs)(b.A,{container:{wrap:"nowrap"},children:[(0,m.jsx)(On,{"data-testid":L.suggestionReject,onClick:()=>{D(!1),e[0]?.focus()},"aria-label":`${q("no")}, ${q("reject_suggestion_button_a11y")}${Z?` - ${Z}`:""}`,children:q("no")}),(0,m.jsx)(On,{"data-testid":L.suggestionAccept,onClick:()=>{D(!0),e[0]?.focus()},"aria-label":`${q("yes")}, ${q("accept_suggestion_button_a11y")}${Z?` - ${Z}`:""}`,children:q("yes")})]})]})}const Q=[];return P&&Q.push(P),N&&f&&Q.push(`${i}-info`),(0,m.jsxs)(b.A,{"data-testid":L.root,..._,container:{direction:I?"row":"column",alignItems:I?"center":void 0,wrap:y?"wrap":void 0,...S},as:Tn,labelAsLegend:N,isRadioCheck:y,showAdditionalInfo:G,id:`${i}-field`,forwardedAs:a,required:k,disabled:j,readOnly:E,onKeyDown:V?e=>{"Enter"===e.key&&(e.target.closest("button")||(e.preventDefault(),D?.(!0)))}:void 0,"aria-describedby":Q.length?Q.join(" "):void 0,ref:B,className:(0,Ut.A)("form-field",M,{status:g}),children:[(N||!h)&&X,J,!N&&h&&X,!E&&Y,y&&C&&(0,m.jsx)(Ln,{variant:"link",onClick:()=>{C()},children:q("clear_selection")})]})}),Bn=(0,F.A)(Vn,Hn);h.Ay.div`
  gap: 1rem;

  /* Let flex items be aligned to the baseline of their first child */
  align-items: baseline;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${kn} {
    position: relative;
  }

  > :first-child {
    > ${kn}:after {
      content: '-';
      position: absolute;
      width: 1rem;
      inset-inline-end: -1rem;
      text-align: center;
    }
  }

  > ${kn}:first-child:after {
    content: '-';
    position: absolute;
    width: 1rem;
    inset-inline-end: -1rem;
    text-align: center;
  }
`.defaultProps=g.qn;const Un=h.Ay.input(({theme:{base:e,components:t}})=>h.AH`
    width: 100%;
    height: ${t.input.height};
    min-height: ${e["hit-area"]["mouse-min"]};
    padding-block: 0;
    padding-inline: ${t.input.padding};
    appearance: none;
    -webkit-appearance: none;
    text-align: inherit;

    @media (pointer: coarse) {
      min-height: ${e["hit-area"]["finger-min"]};
    }
  `);Un.defaultProps=g.qn;const Zn=Un,Kn=(0,G.A)("input",["control",...Cn]),Gn=(0,F.A)((0,p.forwardRef)(function(e,t){const n=(0,x.A)(),{testId:r,id:o=n,value:i,defaultValue:a,required:s=!1,disabled:l=!1,readOnly:c=!1,label:d,additionalInfo:u,labelHidden:p,info:h,status:f,actions:g,onResolveSuggestion:b,className:A,...v}=e,y=(0,w.A)(r,Kn),$={};(0,_e.A)(e,"value")?$.value=i??"":(0,_e.A)(e,"defaultValue")&&($.defaultValue=a??"");const k=(0,m.jsx)(kn,{"data-testid":y.control,ref:t,id:o,required:s,disabled:l,readOnly:c,status:f,hasSuggestion:!!b&&"pending"===f,...$,autoComplete:"_off",...v,as:Zn,className:(0,Ut.A)("input",A)});return d?(0,m.jsx)(Bn,{testId:y,additionalInfo:u,label:d,labelHidden:p,id:o,info:h,readOnly:c,status:f,required:s,disabled:l,actions:g,onResolveSuggestion:b,children:k}):k}),Kn)},7666:(e,t,n)=>{n.d(t,{A:()=>s,U:()=>a});var r=n(3974),o=n(9749),i=n(4685);const a='a[href], button, input, textarea, select, details, video[controls], audio[controls], [tabindex]:not([tabindex="-1"])',s=(e,{includeActiveEl:t=!1}={})=>{const n=(0,i.A)();let s=n,l=null;const c=(0,r.A)(e,"current")?e.current:e;if(!c)return[];let d=a;t&&(l=(0,o.A)(),l&&(s=l.id||n,l.id=s,d=`${d}, [id="${s}"]`));const u=[...c.querySelectorAll(d)].filter(e=>e instanceof HTMLElement&&(e.id===s||!e.hasAttribute("disabled")&&"-1"!==e.getAttribute("tabindex")&&!e.closest("[inert]")));return l?.id===n&&l.removeAttribute("id"),u}},7708:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(4848),o=n(1594),i=n(6878),a=n(9061),s=n(1638);const l=(0,o.forwardRef)(function({value:e,displayText:t,variant:n="link",formattingOptions:{showCountryCode:o=!0}={},...l},c){const d=e?t||((e,{nationalFormat:t}={})=>t?(0,s.l)(e)?.formatNational():(0,s.l)(e)?.formatInternational())(e||"",{nationalFormat:!o})||e:(0,r.jsx)(a.A,{});return"text"!==n&&e?(0,r.jsx)(i.ah,{...l,variant:"link",ref:c,href:`tel:${e}`,children:d}):(0,r.jsx)("span",{ref:c,...l,children:d})})},8147:(e,t,n)=>{n.d(t,{A:()=>ve});var r={};n.r(r),n.d(r,{Component:()=>V,name:()=>N,set:()=>O,viewBox:()=>B});var o=n(4848),i=n(1594),a=n(8267),s=n(6878),l=n(150),c=n(331),d=n(9549),u=(n(8347),n(4680));const m={update:()=>{},dismiss:()=>{},activate:()=>{},minimize:()=>{},maximize:()=>{},dock:()=>{},unmount:()=>{}},p={alert:!1,dismissible:!0,minimizable:!1,maximizable:!1,dockable:!1,defaultMinimized:!1,unmountWhenMinimized:!0,state:"open",top:!1,initialized:!1,...m},h=(0,i.createContext)(p),f=(0,i.createContext)({create:()=>m,ModalContext:h,initialized:!1}),g=()=>{const{ModalContext:e}=(()=>{const e=u.A?window.cosmos.modalManagerContext??f:f;return(0,i.useContext)(e)})();return(0,i.useContext)(e)};var b=n(3351),A=n(4853),v=n(4651),y=n(9586),$=n(9839);let x;const w=()=>x||(x=$.A?navigator.userAgent.match(/(Windows|Macintosh)/)?.[0]||"Other":"",x),k=()=>{const[e,t]=(0,i.useState)(w);return(0,i.useEffect)(()=>{e||t(w())},[]),{windows:"Windows"===e,macintosh:"Macintosh"===e,name:e}};var j=n(8579),E=n(9187);const I=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;var C=n(127),H=n(4869),S=n(7321);(0,i.createContext)({drawerOpen:!1,openDrawer:()=>{},closeDrawer:()=>{}});const R=(0,i.createContext)({navOpen:!1,drawerOpen:!1,setDrawerOpen:()=>{},navState:"closed",collapsedHoverMenus:!1,focusedImperatively:{get current(){return!1}},headerEl:null,previewTriggerRef:{get current(){return null},set current(e){}},searchContainerEl:null,setSearchContainerEl:()=>{},mobileNavOpen:!1,previewActive:!1,setPreviewActive:()=>{}});var D=n(7491),P=n(8866);const z={Command:"⌘",Alt:"⌥",Option:"⌥",Control:"⌃",Return:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"↵"}),(0,o.jsx)(D.A,{children:"Return"})]}),Enter:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"↵"}),(0,o.jsx)(D.A,{children:"Enter"})]}),Delete:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"Del"}),(0,o.jsx)(D.A,{children:"Delete"})]}),CommandOrControl:"⌘"},M={Control:"Ctrl",Alt:"Alt",Option:"Alt",Meta:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"⊞"}),(0,o.jsx)(D.A,{children:"Windows"})]}),Command:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"⊞"}),(0,o.jsx)(D.A,{children:"Windows"})]}),Backspace:"Backspace",CommandOrControl:"Ctrl"},_={"Page up":(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"Pg up"}),(0,o.jsx)(D.A,{children:"Page up"})]}),"Page down":(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"Pg dn"}),(0,o.jsx)(D.A,{children:"Page down"})]}),Ins:"Insert",Shift:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"⇧"}),(0,o.jsx)(D.A,{children:"Shift"})]})},L=a.Ay.kbd(({theme:{base:e,components:{text:{primary:t},badges:{keyboard:n}}}})=>a.AH`
      background-color: ${n["background-color"]};
      color: ${e.palette["foreground-color"]};
      display: inline-block;
      position: relative;
      font-family: ${e["font-family"]};
      font-weight: ${t["font-weight"]};
      overflow: hidden;
      white-space: nowrap;
      padding: 0.125rem;
      border: 0.0125rem solid ${n["border-color"]};
      border-radius: calc(${e["border-radius"]} / 4);
      text-transform: capitalize;
      text-align: center;
      min-width: 1.25rem;
      height: 1.25rem;
      text-overflow: ellipsis;
      line-height: 1rem;
      inset-block-start: calc(1.25rem / 4 - 0.125rem);
    `);L.defaultProps=d.qn;const q=(0,H.A)((0,i.forwardRef)(function({testId:e,keyName:t,...n},r){const{windows:i}=k(),a=(0,j.A)(e,P.gF);return(0,o.jsx)(L,{"data-testid":a.root,...n,ref:r,children:i&&M[t]||z[t]||_[t]||t})}),P.gF);var F=n(7501),T=n(6765);const O="budicon",N="open",V=()=>(0,o.jsx)("path",{d:"M21 12h-.959V5.676L11.116 14.6l-.718-.718 8.925-8.925H13V4h8v8Zm-2 2h-1v5.5c0 .335-.165.5-.5.5H5.485c-.335 0-.526-.165-.526-.5V7.484c0-.335.191-.526.526-.526H11V6H5.485c-.431 0-.766.144-1.054.431A1.408 1.408 0 0 0 4 7.485V19.5c0 .431.144.712.431 1 .288.288.623.5 1.054.5H17.5c.431 0 .712-.212 1-.5.288-.288.5-.569.5-1V14Z"}),B="0 0 25 25";var U=n(5206),Z=n(9463),K=n(574),G=n(2365),W=n(6629);var X=n(2477),J=n(6416),Y=n(1649),Q=n(8044);const ee=(0,Q.A)("fullscreen",[]),te=a.Ay.div(({theme:e,fullscreen:t})=>a.AH`
      ${t&&a.AH`
        --content-height-in-view: 100vh;
        position: fixed;
        z-index: ${e.base["z-index"].backdrop};
        inset: 0;
      `}
    `);te.defaultProps=d.qn;const ne=(0,i.createContext)(void 0),re=({parentJSX:e,parentElRef:t})=>{const{portalTarget:n}=(0,Z.A)();(0,K.A)(t);const{disableScroll:r,enableScroll:a}=((e=":root")=>{const t=(0,i.useRef)(0),n=(0,i.useRef)(null),{styleSheetTarget:r}=(0,Z.A)(),o=(0,i.useCallback)(()=>{n.current?.remove(),n.current=null},[]),a=(0,i.useCallback)(()=>{if(n.current)return;const o=document.querySelector(e);if(!o)return;const[i,a]=(0,G.A)(o);(i||a)&&(n.current=document.createElement("style"),n.current.nonce=window.__webpack_nonce__,n.current.textContent=`\n      ${e} {\n        ${a?`padding-inline-end: ${t.current}px !important`:""};\n        ${i?`padding-block-end: ${t.current}px !important`:""};\n        overflow: hidden !important;\n      }\n    `,(r??document.head).append(n.current))},[e]);return(0,i.useLayoutEffect)(()=>(t.current=(0,W.A)(),o),[o]),{enableScroll:o,disableScroll:a}})();return(0,i.useEffect)(()=>(r(),a),[]),n?(0,U.createPortal)((0,o.jsx)(Y.A,{portalTarget:t.current??void 0,children:e}),n):null},oe=((0,H.A)((0,i.forwardRef)(function({children:e,testId:t,...n},r){const a=(0,j.A)(t,ee),[s,l]=(0,X.A)(),c=(0,A.A)(l,r),[d,u]=(0,X.A)(),[m,p]=(0,i.useState)(void 0),h=(0,i.useMemo)(()=>[m,()=>{p(e=>!e)}],[m]),f=(0,J.A)(d,!!m),g=(0,o.jsx)(te,{"data-testid":a.root,"data-fullscreen-enabled":!!m||void 0,...n,ref:c,fullscreen:!!m,"data-popover-id":f,children:e});return(0,o.jsx)(ne.Provider,{value:h,children:m&&s?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{ref:u,style:{display:"none"}}),(0,o.jsx)(re,{parentJSX:g,parentElRef:c})]}):g})}),ee),(0,Q.A)("link",["preview-popover","preview","new-tab"])),ie=a.Ay.div(({theme:e,preview:t})=>a.AH`
    background-color: ${e.components.tooltip["background-color"]};
    z-index: ${e.base["z-index"].tooltip};

    ${t&&a.AH`
      padding: calc(${e.base.spacing} / 4);
    `}
  `);ie.defaultProps=d.qn;const ae=(0,a.Ay)(c.A)(({theme:e})=>{const t=(0,E.A)(()=>(0,S.W0)(e.components.tooltip["background-color"])),n=(0,S.Vr)(e.base["font-size"],e.base["font-scale"]);return a.AH`
    position: relative;
    display: inline-flex;
    align-items: center;
    z-index: 1;
    padding: 0 ${e.base.spacing};
    min-height: 1.5rem;
    line-height: 1;
    color: ${t};
    font-size: ${n.xs};
    text-decoration: none;

    /* FIXME: Button selector specificity... */
    & + & {
      margin: 0;
    }

    & + &::before {
      content: '';
      position: absolute;
      inset-inline-start: 0;
      inset-block: 0;
      width: 1px; /* stylelint-disable-line unit-allowed-list */
      background-color: ${t};
      opacity: ${e.base.transparency["transparent-3"]};
    }

    &:hover,
    &:active {
      text-decoration: underline;
    }

    &:focus {
      box-shadow:
        inset 0 0 0 0.0625rem ${e.base.palette.light},
        0 0 0.125rem 0.0625rem ${e.base.palette.interactive};
    }
  `});ae.defaultProps=d.qn;const se=a.Ay.div``,le=(0,a.Ay)(ae)(({theme:e})=>a.AH`
    padding: calc(${e.base.spacing} / 2);

    & + & {
      padding-inline-start: calc(${e.base.spacing} - ${e.base.spacing} / 4);
      padding-inline-end: calc(${e.base.spacing} / 4);
    }

    &:hover,
    &:active {
      text-decoration: none;
      ${se} span {
        text-decoration: underline;
      }
      ${se} ${L} span {
        text-decoration: none;
      }
    }

    ${se} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    ${L} {
      color: ${e.base.palette.light};
      background-color: ${e.base.colors.gray.dark};
      border-color: ${e.base.colors.gray.medium};
      inset-block-start: unset;
      margin-inline: calc(${e.base.spacing} / 4);

      &:first-of-type {
        margin-inline-start: calc(${e.base.spacing} / 2);
      }

      &:last-of-type {
        margin-inline-end: calc(${e.base.spacing} / 2);
      }
    }
  `);le.defaultProps=d.qn;const ce=(0,a.Ay)(s.Ay)`
  &:has(> img) {
    display: inline-block;

    ${T.vE} {
      vertical-align: top;
    }
  }
`;ce.defaultProps=d.qn,(0,T.pU)(r);const de=(0,i.forwardRef)(function({testId:e,href:t,variant:n="link",icon:r=!1,previewable:a=!1,onPreview:s,target:c,children:d,...u},m){const p=I.test(t)?void 0:t,{initialized:h}=g(),f=(0,i.useContext)(ne),$=!(!f||!f[0]),{previewTriggerRef:x}=(0,i.useContext)(R),w=(0,b.A)(),E=(0,A.A)(m),[H,S]=(0,i.useState)(!1),[P,z]=(0,i.useState)("short"),[M,_]=(0,i.useState)(!1),L=(0,i.useRef)(null),O=(0,v.A)("sm"),N=(0,y.A)(),{macintosh:V}=k(),B=(0,i.useRef)(!1),U=(0,j.A)(e,oe),Z=(0,i.useRef)({x:0,y:0}),K=(0,i.useRef)({x:0,y:0}),G=(0,i.useRef)({get contextElement(){return E.current??void 0},getBoundingClientRect:()=>({width:0,height:0,top:K.current.y,bottom:K.current.y,left:K.current.x,right:K.current.x,x:K.current.x,y:K.current.y,toJSON(){return JSON.stringify(this)}})}),W=a&&!h&&!$;let X;try{if(p){const e=new URL(p,document.location.href);X=!!C.A&&/^https?:$/.test(e.protocol)&&document.location.origin!==e.origin}else X=!1}catch{X=!1}const J=X?"_blank":c,Y=()=>{O&&!M&&S(!0)},Q=()=>{S(!1)},ee=()=>{_(!1)},te=()=>{x.current=E.current,void 0!==p&&s?.({href:p})};return(0,i.useEffect)(()=>{"none"!==P||H||M||z("short")},[P,H,M]),(0,i.useEffect)(()=>{const e=({key:e})=>{"Escape"===e&&(H||M)&&(z("none"),S(!1),_(!1))};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[H,M]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(ce,{"data-testid":U.root,href:p,variant:n,ref:E,target:J,...u,"aria-describedby":W?`${w}-preview-instructions`:void 0,onMouseEnter:a?e=>{Z.current={x:e.clientX,y:e.clientY},Y()}:void 0,onMouseLeave:Q,onMouseMove:e=>{Z.current={x:e.clientX,y:e.clientY}},onFocus:a?()=>{!O||H||B.current||_(!0)}:void 0,onBlur:()=>{B.current=!1,ee()},onKeyUp:e=>{e.getModifierState("Alt")&&"KeyP"===e.code&&te()},onContextMenu:()=>{B.current=!0,z("none"),ee(),Q()},children:[d,"_blank"===J&&(0,o.jsx)(D.A,{children:N("opens_in_a_new_tab")}),!r&&"_blank"===J&&(0,o.jsx)(T.Ay,{name:"open"})]}),W&&(0,o.jsxs)(l.A,{"data-testid":U.previewPopover,show:M,placement:"top",groupId:"tooltip",showDelay:"short",hideDelay:P,target:E.current,as:ie,arrow:!0,preview:!0,portal:!0,onHide:ee,onClick:e=>{e.stopPropagation()},children:[(0,o.jsx)(le,{"data-testid":U.preview,preview:!0,type:"button",ref:L,onClick:te,tabIndex:"-1",children:(0,o.jsxs)(se,{children:[(0,o.jsx)("span",{children:N("preview")}),(0,o.jsxs)(F.A,{container:{inline:!0,justify:"end"},children:[(0,o.jsx)(q,{keyName:"Alt"}),(0,o.jsx)(q,{keyName:"P"})]})]})}),(0,o.jsx)(le,{"data-testid":U.newTab,forwardedAs:"a",href:p,target:"_blank",rel:"noreferrer",tabIndex:"-1",children:(0,o.jsxs)(se,{children:[(0,o.jsx)("span",{children:N("link_open_in_tab_text")}),(0,o.jsxs)(F.A,{container:{inline:!0,justify:"end"},children:[(0,o.jsx)(q,{keyName:"CommandOrControl"}),(0,o.jsx)(q,{keyName:"Enter"})]})]})})]}),(0,o.jsxs)(l.A,{"data-testid":U.previewPopover,show:H,placement:"top",groupId:"tooltip",showDelay:"short",hideDelay:P,target:G.current,onMouseEnter:Y,onMouseLeave:Q,as:ie,arrow:!0,portal:!0,onClick:e=>{e.stopPropagation()},onShow:()=>{const e=E.current?.getClientRects()??[],{x:t,y:n}=Z.current,r=Array.from(e).find(e=>n<e.bottom&&t<e.right);r&&(K.current={x:t,y:r.top})},children:[W&&(0,o.jsx)(ae,{"data-testid":U.preview,preview:!0,type:"button",ref:L,onClick:te,tabIndex:"-1",children:N("preview")}),(0,o.jsx)(ae,{"data-testid":U.newTab,forwardedAs:"a",href:p,target:"_blank",rel:"noreferrer",tabIndex:"-1",children:N("link_open_in_tab_text")})]}),W&&(0,o.jsx)("span",{id:`${w}-preview-instructions`,hidden:!0,children:N("preview_link_instruction",[V?"option":"alt"])})]})}),ue=(0,H.A)(de,oe);var me=n(7583);const pe=a.Ay.img`
  max-width: 100%;
`,he=(0,i.forwardRef)(function(e,t){const{alt:n,...r}=e;return(0,o.jsx)(pe,{...r,alt:n,ref:t})});var fe=n(2697);const ge=a.Ay.div(({theme:e})=>a.AH`
    height: ${e.base["content-width"].xs};
    width: ${e.base["content-width"].xs};
    border: 0.0625rem solid ${e.base.palette["border-line"]};
    border-radius: calc(${e.base["border-radius"]} / 2);
    text-align: center;
  `);ge.defaultProps=d.qn;const be=(0,i.forwardRef)(function({value:e,label:t=e,...n},r){const[a,s]=(0,i.useState)(""),l=(0,y.A)(),c=(0,i.useRef)(!1);return(0,i.useEffect)(()=>(c.current=!0,()=>{c.current=!1}),[]),(0,i.useEffect)(()=>{me.dY(e).then(e=>{c.current&&s(e)}).catch(()=>{s("")})},[e]),a?(0,o.jsx)(he,{...n,ref:r,src:a,alt:t}):(0,o.jsx)(F.A,{...n,ref:r,container:{direction:"column",alignItems:"center",justify:"center",gap:1,pad:2},as:ge,children:(0,o.jsx)(fe.A,{message:l("qr_code_not_available")})})});var Ae=n(9061);const ve=(0,i.forwardRef)(function({value:e,displayText:t,variant:n="link",...r},i){const a=e?t||e.split("//").map(e=>e.replace(/:/giu,"$&").replace(/[/~.,\\-_?#%]/giu,"$&").replace(/[=&]/giu,"$&")).join("//").split("").reduce((e,t)=>(e.push(t,(0,o.jsx)("wbr",{},e.length)),e),[]):(0,o.jsx)(Ae.A,{});return"text"!==n&&e?"qrcode"===n?(0,o.jsx)(be,{ref:i,...r,value:e,label:t}):(0,o.jsx)(ue,{ref:i,...r,href:e,children:a}):(0,o.jsx)("span",{ref:i,...r,children:a})})},8866:(e,t,n)=>{n.d(t,{EF:()=>o,gF:()=>i});var r=n(8044);(0,r.A)("alert",[]);const o=(0,r.A)("count",[]),i=(0,r.A)("keyboard",[]);(0,r.A)("selectable",["remove"]),(0,r.A)("status",[]),(0,r.A)("tag",[])}}]);
//# sourceMappingURL=PP8001_83553919.4f9f3f51.js.map