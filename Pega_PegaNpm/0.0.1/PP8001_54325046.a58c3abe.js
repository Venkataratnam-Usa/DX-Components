"use strict";(self.webpackChunkdxcomponent=self.webpackChunkdxcomponent||[]).push([[54325046],{2:(e,t,n)=>{n.d(t,{A:()=>se});var r={};n.r(r),n.d(r,{Component:()=>V,name:()=>T,set:()=>N,viewBox:()=>W});var i=n(4848),o=n(1594),a=n(8267),s=n(6878),l=n(150),d=n(331),c=n(9549),u=(n(8347),n(4680));const h={update:()=>{},dismiss:()=>{},activate:()=>{},minimize:()=>{},maximize:()=>{},dock:()=>{},unmount:()=>{}},p={alert:!1,dismissible:!0,minimizable:!1,maximizable:!1,dockable:!1,defaultMinimized:!1,unmountWhenMinimized:!0,state:"open",top:!1,initialized:!1,...h},m=(0,o.createContext)(p),f=(0,o.createContext)({create:()=>h,ModalContext:m,initialized:!1}),g=()=>{const{ModalContext:e}=(()=>{const e=u.A?window.cosmos.modalManagerContext??f:f;return(0,o.useContext)(e)})();return(0,o.useContext)(e)};var b=n(3351),x=n(4853),A=n(4651),$=n(9586),w=n(9839);let y;const v=()=>y||(y=w.A?navigator.userAgent.match(/(Windows|Macintosh)/)?.[0]||"Other":"",y),k=()=>{const[e,t]=(0,o.useState)(v);return(0,o.useEffect)(()=>{e||t(v())},[]),{windows:"Windows"===e,macintosh:"Macintosh"===e,name:e}};var j=n(8579),C=n(9187);const H=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;var z=n(127),R=n(4869),E=n(7321);(0,o.createContext)({drawerOpen:!1,openDrawer:()=>{},closeDrawer:()=>{}});const _=(0,o.createContext)({navOpen:!1,drawerOpen:!1,setDrawerOpen:()=>{},navState:"closed",collapsedHoverMenus:!1,focusedImperatively:{get current(){return!1}},headerEl:null,previewTriggerRef:{get current(){return null},set current(e){}},searchContainerEl:null,setSearchContainerEl:()=>{},mobileNavOpen:!1,previewActive:!1,setPreviewActive:()=>{}});var I=n(7491),S=n(8866);const P={Command:"⌘",Alt:"⌥",Option:"⌥",Control:"⌃",Return:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{"aria-hidden":!0,children:"↵"}),(0,i.jsx)(I.A,{children:"Return"})]}),Enter:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{"aria-hidden":!0,children:"↵"}),(0,i.jsx)(I.A,{children:"Enter"})]}),Delete:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{"aria-hidden":!0,children:"Del"}),(0,i.jsx)(I.A,{children:"Delete"})]}),CommandOrControl:"⌘"},q={Control:"Ctrl",Alt:"Alt",Option:"Alt",Meta:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{"aria-hidden":!0,children:"⊞"}),(0,i.jsx)(I.A,{children:"Windows"})]}),Command:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{"aria-hidden":!0,children:"⊞"}),(0,i.jsx)(I.A,{children:"Windows"})]}),Backspace:"Backspace",CommandOrControl:"Ctrl"},O={"Page up":(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{"aria-hidden":!0,children:"Pg up"}),(0,i.jsx)(I.A,{children:"Page up"})]}),"Page down":(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{"aria-hidden":!0,children:"Pg dn"}),(0,i.jsx)(I.A,{children:"Page down"})]}),Ins:"Insert",Shift:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{"aria-hidden":!0,children:"⇧"}),(0,i.jsx)(I.A,{children:"Shift"})]})},F=a.Ay.kbd(({theme:{base:e,components:{text:{primary:t},badges:{keyboard:n}}}})=>a.AH`
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
    `);F.defaultProps=c.qn;const L=(0,R.A)((0,o.forwardRef)(function({testId:e,keyName:t,...n},r){const{windows:o}=k(),a=(0,j.A)(e,S.gF);return(0,i.jsx)(F,{"data-testid":a.root,...n,ref:r,children:o&&q[t]||P[t]||O[t]||t})}),S.gF);var M=n(7501),D=n(6765);const N="budicon",T="open",V=()=>(0,i.jsx)("path",{d:"M21 12h-.959V5.676L11.116 14.6l-.718-.718 8.925-8.925H13V4h8v8Zm-2 2h-1v5.5c0 .335-.165.5-.5.5H5.485c-.335 0-.526-.165-.526-.5V7.484c0-.335.191-.526.526-.526H11V6H5.485c-.431 0-.766.144-1.054.431A1.408 1.408 0 0 0 4 7.485V19.5c0 .431.144.712.431 1 .288.288.623.5 1.054.5H17.5c.431 0 .712-.212 1-.5.288-.288.5-.569.5-1V14Z"}),W="0 0 25 25";var G=n(3901);const B=(0,n(8044).A)("link",["preview-popover","preview","new-tab"]),Z=a.Ay.div(({theme:e,preview:t})=>a.AH`
    background-color: ${e.components.tooltip["background-color"]};
    z-index: ${e.base["z-index"].tooltip};

    ${t&&a.AH`
      padding: calc(${e.base.spacing} / 4);
    `}
  `);Z.defaultProps=c.qn;const U=(0,a.Ay)(d.A)(({theme:e})=>{const t=(0,C.A)(()=>(0,E.W0)(e.components.tooltip["background-color"])),n=(0,E.Vr)(e.base["font-size"],e.base["font-scale"]);return a.AH`
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
  `});U.defaultProps=c.qn;const K=a.Ay.div``,X=(0,a.Ay)(U)(({theme:e})=>a.AH`
    padding: calc(${e.base.spacing} / 2);

    & + & {
      padding-inline-start: calc(${e.base.spacing} - ${e.base.spacing} / 4);
      padding-inline-end: calc(${e.base.spacing} / 4);
    }

    &:hover,
    &:active {
      text-decoration: none;
      ${K} span {
        text-decoration: underline;
      }
      ${K} ${F} span {
        text-decoration: none;
      }
    }

    ${K} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    ${F} {
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
  `);X.defaultProps=c.qn;const Y=(0,a.Ay)(s.Ay)`
  &:has(> img) {
    display: inline-block;

    ${D.vE} {
      vertical-align: top;
    }
  }
`;Y.defaultProps=c.qn,(0,D.pU)(r);const J=(0,o.forwardRef)(function({testId:e,href:t,variant:n="link",icon:r=!1,previewable:a=!1,onPreview:s,target:d,children:c,...u},h){const p=H.test(t)?void 0:t,{initialized:m}=g(),f=(0,G.gP)(),w=!(!f||!f[0]),{previewTriggerRef:y}=(0,o.useContext)(_),v=(0,b.A)(),C=(0,x.A)(h),[R,E]=(0,o.useState)(!1),[S,P]=(0,o.useState)("short"),[q,O]=(0,o.useState)(!1),F=(0,o.useRef)(null),N=(0,A.A)("sm"),T=(0,$.A)(),{macintosh:V}=k(),W=(0,o.useRef)(!1),J=(0,j.A)(e,B),Q=(0,o.useRef)({x:0,y:0}),ee=(0,o.useRef)({x:0,y:0}),te=(0,o.useRef)({get contextElement(){return C.current??void 0},getBoundingClientRect:()=>({width:0,height:0,top:ee.current.y,bottom:ee.current.y,left:ee.current.x,right:ee.current.x,x:ee.current.x,y:ee.current.y,toJSON(){return JSON.stringify(this)}})}),ne=a&&!m&&!w;let re;try{if(p){const e=new URL(p,document.location.href);re=!!z.A&&/^https?:$/.test(e.protocol)&&document.location.origin!==e.origin}else re=!1}catch{re=!1}const ie=re?"_blank":d,oe=()=>{N&&!q&&E(!0)},ae=()=>{E(!1)},se=()=>{O(!1)},le=()=>{y.current=C.current,void 0!==p&&s?.({href:p})};return(0,o.useEffect)(()=>{"none"!==S||R||q||P("short")},[S,R,q]),(0,o.useEffect)(()=>{const e=({key:e})=>{"Escape"===e&&(R||q)&&(P("none"),E(!1),O(!1))};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[R,q]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(Y,{"data-testid":J.root,href:p,variant:n,ref:C,target:ie,...u,"aria-describedby":ne?`${v}-preview-instructions`:void 0,onMouseEnter:a?e=>{Q.current={x:e.clientX,y:e.clientY},oe()}:void 0,onMouseLeave:ae,onMouseMove:e=>{Q.current={x:e.clientX,y:e.clientY}},onFocus:a?()=>{!N||R||W.current||O(!0)}:void 0,onBlur:()=>{W.current=!1,se()},onKeyUp:e=>{e.getModifierState("Alt")&&"KeyP"===e.code&&le()},onContextMenu:()=>{W.current=!0,P("none"),se(),ae()},children:[c,"_blank"===ie&&(0,i.jsx)(I.A,{children:T("opens_in_a_new_tab")}),!r&&"_blank"===ie&&(0,i.jsx)(D.Ay,{name:"open"})]}),ne&&(0,i.jsxs)(l.A,{"data-testid":J.previewPopover,show:q,placement:"top",groupId:"tooltip",showDelay:"short",hideDelay:S,target:C.current,as:Z,arrow:!0,preview:!0,portal:!0,onHide:se,onClick:e=>{e.stopPropagation()},children:[(0,i.jsx)(X,{"data-testid":J.preview,preview:!0,type:"button",ref:F,onClick:le,tabIndex:"-1",children:(0,i.jsxs)(K,{children:[(0,i.jsx)("span",{children:T("preview")}),(0,i.jsxs)(M.A,{container:{inline:!0,justify:"end"},children:[(0,i.jsx)(L,{keyName:"Alt"}),(0,i.jsx)(L,{keyName:"P"})]})]})}),(0,i.jsx)(X,{"data-testid":J.newTab,forwardedAs:"a",href:p,target:"_blank",rel:"noreferrer",tabIndex:"-1",children:(0,i.jsxs)(K,{children:[(0,i.jsx)("span",{children:T("link_open_in_tab_text")}),(0,i.jsxs)(M.A,{container:{inline:!0,justify:"end"},children:[(0,i.jsx)(L,{keyName:"CommandOrControl"}),(0,i.jsx)(L,{keyName:"Enter"})]})]})})]}),(0,i.jsxs)(l.A,{"data-testid":J.previewPopover,show:R,placement:"top",groupId:"tooltip",showDelay:"short",hideDelay:S,target:te.current,onMouseEnter:oe,onMouseLeave:ae,as:Z,arrow:!0,portal:!0,onClick:e=>{e.stopPropagation()},onShow:()=>{const e=C.current?.getClientRects()??[],{x:t,y:n}=Q.current,r=Array.from(e).find(e=>n<e.bottom&&t<e.right);r&&(ee.current={x:t,y:r.top})},children:[ne&&(0,i.jsx)(U,{"data-testid":J.preview,preview:!0,type:"button",ref:F,onClick:le,tabIndex:"-1",children:T("preview")}),(0,i.jsx)(U,{"data-testid":J.newTab,forwardedAs:"a",href:p,target:"_blank",rel:"noreferrer",tabIndex:"-1",children:T("link_open_in_tab_text")})]}),ne&&(0,i.jsx)("span",{id:`${v}-preview-instructions`,hidden:!0,children:T("preview_link_instruction",[V?"option":"alt"])})]})}),Q=(0,R.A)(J,B);var ee=n(7583);const te=a.Ay.img`
  max-width: 100%;
`,ne=(0,o.forwardRef)(function(e,t){const{alt:n,...r}=e;return(0,i.jsx)(te,{...r,alt:n,ref:t})});var re=n(2697);const ie=a.Ay.div(({theme:e})=>a.AH`
    height: ${e.base["content-width"].xs};
    width: ${e.base["content-width"].xs};
    border: 0.0625rem solid ${e.base.palette["border-line"]};
    border-radius: calc(${e.base["border-radius"]} / 2);
    text-align: center;
  `);ie.defaultProps=c.qn;const oe=(0,o.forwardRef)(function({value:e,label:t=e,...n},r){const[a,s]=(0,o.useState)(""),l=(0,$.A)(),d=(0,o.useRef)(!1);return(0,o.useEffect)(()=>(d.current=!0,()=>{d.current=!1}),[]),(0,o.useEffect)(()=>{ee.dY(e).then(e=>{d.current&&s(e)}).catch(()=>{s("")})},[e]),a?(0,i.jsx)(ne,{...n,ref:r,src:a,alt:t}):(0,i.jsx)(M.A,{...n,ref:r,container:{direction:"column",alignItems:"center",justify:"center",gap:1,pad:2},as:ie,children:(0,i.jsx)(re.A,{message:l("qr_code_not_available")})})});var ae=n(9061);const se=(0,o.forwardRef)(function({value:e,displayText:t,variant:n="link",...r},o){const a=e?t||e.split("//").map(e=>e.replace(/:/giu,"$&").replace(/[/~.,\\-_?#%]/giu,"$&").replace(/[=&]/giu,"$&")).join("//").split("").reduce((e,t)=>(e.push(t,(0,i.jsx)("wbr",{},e.length)),e),[]):(0,i.jsx)(ae.A,{});return"text"!==n&&e?"qrcode"===n?(0,i.jsx)(oe,{ref:o,...r,value:e,label:t}):(0,i.jsx)(Q,{ref:o,...r,href:e,children:a}):(0,i.jsx)("span",{ref:o,...r,children:a})})},789:(e,t,n)=>{n.d(t,{A:()=>qe});var r={};n.r(r),n.d(r,{Component:()=>E,name:()=>R,set:()=>z,viewBox:()=>_});var i={};n.r(i),n.d(i,{Component:()=>se,name:()=>ae,set:()=>oe,viewBox:()=>le});var o=n(4848),a=n(1594),s=n(8267),l=n(1357),d=n(9549),c=n(7501),u=n(9586),h=n(4853),p=n(6878),m=n(6765),f=n(6224);const g=(0,a.forwardRef)(function({"data-testid":e,items:t,menuAt:n=2,scrollAt:r,iconOnly:i=!0,menuButtonProps:s,contextualLabel:l,compact:d=!1,disabled:c=!1,tabIndex:g},b){const x=(0,u.A)(),A=(0,h.A)(b);return t&&0!==t.length?t.length>=n?(0,o.jsx)(f.A,{...e?{"data-testid":e}:{},ref:A,text:x("actions"),"aria-label":l&&x("actions_for",[l]),iconOnly:!0,icon:"more",variant:"simple",compact:d,onClick:s?.onClick,onKeyDown:s?.onKeyDown,disabled:c,tabIndex:g,menu:{scrollAt:r,items:t.map(({text:e,onClick:t,...n})=>({...n,primary:e,onClick:t?(e,n)=>{t(e,n,A.current??void 0)}:void 0}))}}):(0,o.jsx)(o.Fragment,{children:t.map(({id:t,icon:n,text:r,onClick:s,...u})=>(0,a.createElement)(p.Ay,{...e?{"data-testid":e}:{},key:t,variant:n&&i?"simple":void 0,onClick:e=>s?.(t,e),label:n?r:void 0,icon:!!n&&i,compact:d,"aria-label":l?`${r} - ${l}`:r,disabled:c,...u},n&&i?(0,o.jsx)(m.Ay,{name:n}):r))}):null});var b=n(3351),x=n(8579),A=n(2884),$=n(3113),w=n(7321),y=n(7491),v=n(9187),k=n(7666),j=n(9576),C=n(4869),H=n(9238);const z="budicon",R="diamond-minus",E=()=>(0,o.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M23.219 13.178a.96.96 0 0 0 0-1.356L13.179 1.78a.96.96 0 0 0-1.357 0L1.78 11.821a.96.96 0 0 0 0 1.357l10.04 10.041a.96.96 0 0 0 1.357 0l10.041-10.04ZM18 11.5H7v2h11v-2Z"}),_="0 0 25 25";var I=n(8072),S=n(9418),P=n(8889);const q=/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|about|blob):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i;var O=n(8044);const F=(0,O.A)("html",[]),L=(0,S.A)(),M=s.AH`
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
`,D=s.Ay.div(({theme:e})=>s.AH`
    width: 100%;
    overflow-x: auto;
    overflow-wrap: break-word;
    contain: paint;
    ${(e=>{const{base:{"font-size":t,"font-scale":n,palette:r},components:{text:i}}=e,o=(0,w.Vr)(t,n);return`\n    ${M}\n    table {\n      ${(e=>s.AH`
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
`)(e)}\n    }\n    img {\n      max-width: 100%;\n      height: auto;\n      border-radius: 0.25rem;\n    }\n    a {\n      color: ${r.interactive};\n    }\n    pre {\n      white-space: break-spaces;\n    }\n    p {\n      min-height: ${o[i.primary["font-size"]]};\n    }\n    h1 {\n      font-size: ${o[i.h1["font-size"]]};\n      font-weight: ${i.h1["font-weight"]};\n      min-height: ${o[i.h1["font-size"]]};\n    }\n    h2 {\n      font-size: ${o[i.h2["font-size"]]};\n      font-weight: ${i.h2["font-weight"]};\n      min-height: ${o[i.h2["font-size"]]};\n    }\n    h3 {\n      font-size: ${o[i.h3["font-size"]]};\n      font-weight: ${i.h3["font-weight"]};\n      min-height: ${o[i.h3["font-size"]]};\n    }\n    h4 {\n      font-size: ${o[i.h4["font-size"]]};\n      font-weight: ${i.h4["font-weight"]};\n      min-height: ${o[i.h4["font-size"]]};\n    }\n    h5 {\n      font-size: ${o[i.h5["font-size"]]};\n      font-weight: ${i.h5["font-weight"]};\n      min-height: ${o[i.h5["font-size"]]};\n    }\n    h6 {\n      font-size: ${o[i.h6["font-size"]]};\n      font-weight: ${i.h6["font-weight"]};\n      min-height: ${o[i.h6["font-size"]]};\n    }\n  `})(e)}

    ${P.l} ul {
      ul {
        padding-inline-start: 0;
      }
      ol {
        padding-inline-start: 0;
      }
    }

    ${P.l} li {
      margin: 0;
    }
  `);if(D.defaultProps=d.qn,L.isSupported){const e=new WeakSet;L.addHook("beforeSanitizeAttributes",t=>{(t instanceof HTMLElement||t instanceof SVGElement)&&(t.removeAttribute("class"),"A"===t.tagName&&t.hasAttribute("href")&&"_blank"===t.getAttribute("target")&&e.add(t))}),L.addHook("afterSanitizeAttributes",t=>{if("A"===t.tagName&&t.hasAttribute("href")){const n=t.getAttribute("href");let r;try{r=new URL(n,window.location.href)}catch(e){return}window.location.origin!==r.origin?(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener")):e.has(t)&&(t.setAttribute("target","_blank"),e.delete(t))}})}const N=(0,a.forwardRef)(function({testId:e,content:t,customTags:n,...r},i){const[s,l]=(0,a.useState)(!1),d=(0,a.useMemo)(()=>s&&L.isSupported?L.sanitize(t,{FORBID_TAGS:["style","font"],CUSTOM_ELEMENT_HANDLING:{tagNameCheck:n?e=>n.includes(e):void 0},ALLOWED_URI_REGEXP:q}):"",[t,n,s]),c=(0,x.A)(e,F);return(0,a.useEffect)(()=>{l(!0)},[]),(0,o.jsx)(D,{"data-testid":c.root,...r,dangerouslySetInnerHTML:{__html:d},ref:i})}),T=(0,C.A)(N,F);var V=n(5190),W=n(7784),G=n(7521),B=n(9466),Z=n(9721),U=n(9749),K=n(150);const X=s.Ay.div``,Y=s.Ay.div``,J=s.Ay.div(({theme:e})=>s.AH`
    position: relative;
    @media (height >= 31.25rem) {
      overflow-y: auto;
      min-height: 4rem;
    }
    padding: calc(2 * ${e.base.spacing});

    /* Small amount of block padding accounts for focus ring clipping within overflow auto. */
    ${Y} + & {
      padding-block-start: calc(0.5 * ${e.base.spacing});
    }

    &:not(:last-child) {
      padding-block-end: calc(0.5 * ${e.base.spacing});
    }
  `);J.defaultProps=d.qn,s.Ay.div``;const Q=(0,s.Ay)(K.A)(({theme:e})=>s.AH`
    display: flex;
    flex-direction: column;
    min-width: min(${e.base["content-width"].sm}, calc(100vw - 2rem));
    max-width: min(${e.base["content-width"].lg}, calc(100vw - 2rem));
    max-height: calc(100vh - 2rem);

    @media (height < 31.25rem) {
      overflow-y: auto;
    }

    &[aria-busy='true'] {
      ${J} {
        overflow: hidden;
      }
    }
  `);Q.defaultProps=d.qn;var ee=n(574);const te=(0,a.forwardRef)(function({arrow:e=!0,target:t,portal:n,strategy:r,placement:i,children:a,progress:s,focusTrap:l=!0,...d},c){const u=(0,h.A)(c);return(0,ee.A)(l?u:null,!1),(0,o.jsx)(Q,{...d,role:"dialog",arrow:e,"aria-modal":!1,"aria-busy":!!s,ref:u,target:t,portal:n,strategy:r,placement:i,children:a})}),ne=(0,s.Ay)(p.Ay)``,re=(0,s.Ay)(te)(({theme:e})=>s.AH`
    /* When a header is not rendered(e.g. progress state) the button must positioned atop. */
    ${J} > ${ne} {
      position: relative;
      z-index: calc(${e.base["z-index"].backdrop} + 1);
      align-self: end;
    }
  `);re.defaultProps=d.qn;const ie=(0,a.forwardRef)(function({target:e,heading:t,children:n,progress:r,onDismiss:i,...s},l){const d=(0,u.A)(),p=(0,b.A)(),f=(0,h.A)(l),g=(0,a.useRef)(null),x=(0,a.useRef)(null);(0,V.A)(e=>{i?.(),e.stopPropagation()},f,[i]),(0,W.A)("mousedown",[e,f],()=>{i?.()}),(0,a.useLayoutEffect)(()=>{const e=(0,U.A)();return()=>{e instanceof HTMLElement&&e.isConnected&&e.focus()}},[]),(0,a.useEffect)(()=>{r||(()=>{if(r)return;const e=(0,k.A)(f),t=e.find(e=>g.current?.contains(e))??x.current??e[0];t?.focus()})()},[r]),(0,a.useEffect)(()=>{const t=()=>{setTimeout(()=>{i?.()},0)};return e.addEventListener("click",t),()=>{e.removeEventListener("click",t)}},[]);const A=t?(0,o.jsx)(G.A,{id:p,variant:"h2",children:"string"==typeof t?t:t.primary}):null,$=(0,o.jsx)(B.A,{visible:!!r,focusOnVisible:!0,placement:"local",message:"string"==typeof r?r:void 0}),w=(0,o.jsx)(ne,{icon:!0,variant:"simple",onClick:()=>{i()},label:d("close"),ref:x,children:(0,o.jsx)(m.Ay,{name:"times"})});return(0,o.jsxs)(re,{...s,..."string"==typeof t?{"aria-labelledby":p}:{"aria-label":t?.primary},arrow:!0,target:e,progress:r,ref:f,children:[t&&A&&(0,o.jsxs)(c.A,{container:{alignItems:"center",justify:"between",pad:2,gap:1},item:{shrink:0},as:Y,children:["string"==typeof t?A:(0,o.jsx)(Z.Ay,{primary:A,secondary:t.secondary?(0,o.jsx)(G.A,{variant:"secondary",children:t.secondary}):void 0,visual:t.visual}),w]}),(!t||n||r)&&(0,o.jsxs)(c.A,{container:{direction:"column"},item:{grow:1},as:J,ref:g,children:[!t&&w,n&&(0,o.jsx)(X,{inert:r?"":void 0,children:n}),$]})]})}),oe="budicon",ae="information",se=()=>(0,o.jsx)("path",{d:"M4.37 20.63C2.122 18.386 1 15.69 1 12.5c0-3.19 1.123-5.885 3.37-8.13C6.614 2.122 9.31 1 12.5 1c3.19 0 5.885 1.123 8.13 3.37C22.878 6.614 24 9.31 24 12.5c0 3.19-1.123 5.885-3.37 8.13C18.386 22.878 15.69 24 12.5 24c-3.19 0-5.885-1.123-8.13-3.37Zm-2.49-8.182c0 2.15.582 4.12 1.791 5.866 1.164 1.79 2.73 3.09 4.701 3.94 1.971.851 4.03 1.03 6.134.627s3.895-1.388 5.418-2.91c1.478-1.478 2.463-3.314 2.91-5.418.404-2.105.224-4.12-.626-6.09-.806-1.97-2.104-3.537-3.85-4.745-1.792-1.21-3.761-1.791-5.91-1.791-2.911 0-5.373 1.03-7.433 3.045-2.06 2.06-3.09 4.567-3.134 7.477ZM13.65 5.14c.843 0 1.61.69 1.61 1.61 0 .92-.69 1.61-1.61 1.61-.843 0-1.61-.69-1.61-1.61 0-.92.69-1.61 1.61-1.61ZM12.1 19.4c-1.263 0-2.175-1.04-1.824-2.274l1.5-4.36c.14-.51.359-1.437-.132-1.437-.328 0-.728.164-1.201.491.35-1.09 1.333-1.62 2.456-1.62 1.264 0 2.176 1.04 1.825 2.274l-1.5 4.36c-.14.51-.17 1.338.322 1.338.328 0 .665-.13 1.011-.392-.35 1.09-1.333 1.62-2.456 1.62Z"}),le="0 0 25 25";(0,m.pU)(i);const de=s.Ay.div``,ce=(0,a.forwardRef)(function(e,t){const n=(0,u.A)(),{heading:r=n("additional_info"),contextualLabel:i,children:s,dialogHandle:l,...d}=e,[f,g]=(0,a.useState)(null),b=(0,a.useRef)(null),x=(0,h.A)(l);return(0,a.useImperativeHandle)(x,()=>({open:()=>{g(b.current)},close:()=>{g(null)}})),(0,o.jsxs)(c.A,{container:!0,as:de,ref:t,...d,children:[(0,o.jsx)(p.Ay,{variant:"simple",label:n("additional_info"),compact:!0,icon:!0,ref:b,onClick:()=>{x.current?.open()},"aria-label":`${n("additional_info")} - ${i??r}`,children:(0,o.jsx)(m.Ay,{name:"information"})}),f&&(0,o.jsx)(ie,{heading:r,target:f,onDismiss:()=>{x.current?.close()},children:"string"==typeof s?(0,o.jsx)(T,{content:s}):s})]})}),ue=s.Ay.div(({theme:{base:{"border-radius":e,"font-size":t,"font-scale":n,animation:{speed:r,timing:i},palette:o},components:{"form-field":a,"form-control":{"foreground-color":d,"background-color":c,"border-color":u,"border-radius":h,"border-width":p,":hover":{"border-color":m},":focus":{"border-color":f,"box-shadow":g},":disabled":{"border-color":b,"background-color":x},":read-only":{"border-color":A,"background-color":$}}}},status:y,hasSuggestion:v})=>{const k=(0,w.Vr)(t,n),j=y&&a[y]?a[y]["status-color"]:u,C=v&&y?(0,l.jh)(.1,a[y]["status-color"],o["primary-background"]):c;return s.AH`
      color: ${d};
      background-color: ${C};
      border-radius: calc(${e} * ${h});
      border-color: ${j};
      border-width: ${p};
      border-style: solid;
      transition-property: color, background-color, border-color;
      transition-duration: ${r};
      transition-timing-function: ${i.ease};
      &,
      & > select {
        outline: none;
      }

      &:disabled,
      &[disabled] {
        background-color: ${x};
        border-color: ${b};
        cursor: not-allowed;
      }

      &:focus:not([disabled]) {
        border-color: ${f};
        box-shadow: ${g};
        ${v&&s.AH`
          background-color: ${c};
        `}
      }

      &:focus-within:not([disabled]) {
        ${v&&s.AH`
          background-color: ${c};
        `}
      }

      &:hover:not([readonly]):not([disabled]):not(:focus, :focus-within) {
        ${!y&&s.AH`
          border-color: ${m};
        `}
        ${v&&s.AH`
          background-color: ${c};
          box-shadow: 0 0 0 0.125rem ${(0,l.B3)(j,.2)};
        `}
      }

      ${v&&s.AH`
        border-end-end-radius: 0;
      `}

      &[readonly] {
        background-color: ${$};
        border-color: ${A};
      }

      @media (pointer: coarse) {
        /* stylelint-disable-next-line unit-allowed-list */
        font-size: max(${k.s}, 16px);
      }
    `});ue.defaultProps=d.qn,(0,a.forwardRef)(function(e,t){return(0,o.jsx)(ue,{ref:t,...e})});var he=n(7940),pe=n(1269);const me=["label","info","additional-info","suggestion-accept","suggestion-reject"],fe=(0,O.A)("form-field",me),ge=(0,O.A)("radio-check",["control",...me]),be=s.Ay.div(e=>{const{theme:{base:{spacing:t},components:{"form-field":n,"radio-check":{size:r,"touch-size":i,"background-color":o,"border-color":a,"border-width":l}}},status:d}=e;let c=a;return"error"!==d&&"warning"!==d||(c=n[d]["status-color"]),s.AH`
      display: flex;
      flex-shrink: 0;
      position: relative;
      width: ${r};
      height: ${r};
      margin-inline-end: calc(0.5 * ${t});
      border: ${l} solid ${c};
      background-color: ${o};

      @media (pointer: coarse) {
        width: ${i};
        height: ${i};
      }

      &::after {
        content: '';
        display: none;
      }
    `});be.defaultProps=d.qn;const xe=s.Ay.input(e=>{const{disabled:t,theme:{base:{"border-radius":n},components:{"form-control":{":focus":{"box-shadow":r,"border-color":i},":read-only":{"background-color":o}},"radio-check":{size:a,":checked":{"background-color":d,"border-color":c}},checkbox:{"border-radius":u},"radio-button":{"border-radius":h}}}}=e,p=e.readOnly?o:d,m=(0,v.A)(()=>(0,w.W0)(p)),f=`+ ${$.G} ${be}`,{ltr:g}=(0,he.A)();return s.AH`
    ${l.Ic}
    margin: 0;

    /* Sets rect size for JAWS focus outline */
    width: ${a};
    height: ${a};

    ${!t&&s.AH`
      &:focus ${f} {
        box-shadow: ${r};
        border-color: ${i};
      }
    `}
    &:checked
      ${f},
      &:checked:disabled
      ${f},
      &[type='checkbox']:indeterminate
      ${f},
      &[type='checkbox']:indeterminate:disabled
      ${f} {
      border-color: ${e.readOnly?"inherit":c};
      background-color: ${p};

      &::after {
        display: block;
      }
    }

    &[type='radio'] ${f}, &[type='radio'] ${f}::after {
      border-radius: ${h};
    }

    &[type='radio'] ${f}::after {
      content: '';
      position: absolute;
      inset: 0;
      margin: auto;
      width: calc(${a} * 0.3);
      height: calc(${a} * 0.3);
      border-radius: ${h};
      border: calc(${a} * 0.2) solid ${m};
    }

    &[type='checkbox'] ${f} {
      border-radius: min(calc(${n} * ${u}), 0.25rem);
    }

    &[type='checkbox']:not(:indeterminate) ${f} {
      &::after {
        width: 40%;
        height: 75%;
        ${g?s.AH`
              transform: rotate(45deg) translate(50%, -30%);
            `:s.AH`
              transform: rotate(45deg) translate(-50%, 30%);
            `}
        border-right: 0.15em solid ${m};
        border-bottom: 0.15em solid ${m};
      }
    }

    &[type='checkbox']:indeterminate ${f} {
      display: flex;

      &::after {
        width: 90%;
        height: 0.15em;
        margin: auto;
        background-color: ${m};
      }
    }
  `});xe.defaultProps=d.qn;const Ae=s.Ay.div(e=>{const{disabled:t,readOnly:n,theme:{base:r,components:{"radio-check":{label:{color:i,"font-weight":o}},"form-control":{":hover":{"border-color":a}}}}}=e,l=(0,w.Vr)(r["font-size"],r["font-scale"]);return s.AH`
      > ${$.G} {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: ${o};
        word-break: break-word;
        font-size: ${l.s};
        color: ${i};
        margin: 0;
        min-height: ${r["hit-area"]["mouse-min"]};

        @media (pointer: coarse) {
          min-height: ${r["hit-area"]["finger-min"]};
        }
      }

      > ${ke} {
        margin: 0;
        padding-inline-start: calc(${r.spacing} / 4);
      }

      ${!(t||n)&&s.AH`
        &:not(:focus-within) > ${$.G}:hover ${be} {
          border-color: ${a};
        }
      `}
    `});Ae.defaultProps=d.qn;const $e=s.Ay.label(({disabled:e,readOnly:t,status:n,theme:{base:{palette:r,shadow:i,spacing:o},components:{card:a,"form-field":l,"radio-check":{label:d},"form-control":{":hover":{"border-color":c}}}}})=>{const u="error"===n?l.error["status-color"]:r["border-line"];return s.AH`
      min-width: min-content;
      cursor: pointer;
      background-color: ${a.background};
      border-radius: ${a["border-radius"]};
      border: 0.0625rem solid ${u};
      padding: ${o};

      ${e&&s.AH`
        cursor: not-allowed;
      `}
      ${!(e||t)&&s.AH`
        :hover:not(:focus-within) {
          border-color: ${c};

          ${$.G} ${be} {
            border-color: ${c};
          }
        }

        :focus-within {
          box-shadow: ${i.focus};
          border-color: transparent;
        }
      `}
        > ${$.G} {
        display: flex;
        align-items: center;
        color: ${d.color};
        font-weight: ${d["font-weight"]};
        margin: 0;
      }

      > ${ke} {
        margin: 0;
        padding-inline-start: calc(${o} / 4);
      }
    `});$e.defaultProps=d.qn;const we=(0,a.forwardRef)(function(e,t){const n=(0,b.A)(),r=(0,u.A)(),{testId:i,type:s,id:l=n,label:d,required:c=!1,disabled:p=!1,readOnly:m=!1,indeterminate:f=!1,checked:g,defaultChecked:A,variant:$="simple",onClick:w,onKeyDown:y,onChange:v,status:k,info:C,additionalInfo:H,ariaDescribedby:z,className:R,...E}=e,_=(0,x.A)(i,ge),I="radio"===s,S="card"===$,P=(0,h.A)(t),q=(0,b.A)();return(0,a.useEffect)(()=>{!I&&P.current&&(P.current.indeterminate=!!f)},[P,f,I]),(0,o.jsx)(Ee,{testId:_,as:S?$e:Ae,label:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(be,{status:k,isRadio:I,as:ue,required:c,disabled:p,readOnly:m,onMouseDown:e=>e.preventDefault()}),d,m&&(0,o.jsx)(pe.A,{id:q,children:r("read_only")})]}),labelAs:S?"div":void 0,id:l,required:c,disabled:p,readOnly:m,status:k,info:C,isRadioCheck:!0,inline:!0,labelAfter:!0,additionalInfo:H,children:(0,o.jsx)(xe,{"data-testid":_.control,...E,className:(0,j.A)("radio-check",R,{variant:$,type:s}),id:l,type:s,required:c,checked:g,defaultChecked:A,"aria-describedby":m?`${z} ${q}`:z,disabled:p,readOnly:m,onChange:v,onClick:e=>{m&&e.preventDefault(),w?.(e)},onKeyDown:e=>{"checkbox"===s&&m&&" "===e.key&&e.preventDefault(),"radio"===s&&m&&e.key.includes("Arrow")&&e.preventDefault(),y?.(e)},ref:P})})});(0,C.A)(we,ge),(0,m.pU)(H,r,I);const ye=(0,s.Ay)(m.Ay)(({theme:e,status:t})=>s.AH`
    height: 1em;
    width: 1em;
    color: ${(0,v.A)(()=>(0,w.ho)(e.components["form-field"][t]["status-color"],e.base.palette["primary-background"]),()=>e.components["form-field"][t]["status-color"])};
    vertical-align: baseline;
  `);ye.defaultProps=d.qn;const ve=(0,s.Ay)(p.Ay)(({theme:e})=>s.AH`
    margin-block-start: calc(${e.base.spacing} / 2);
    align-self: start;
  `);ve.defaultProps=d.qn;const ke=s.Ay.div(({status:e,theme:{base:{"font-size":t,"font-scale":n,spacing:r,palette:i},components:{"form-field":o}}})=>{const{xxs:a}=(0,w.Vr)(t,n);return s.AH`
      max-width: max-content;
      font-size: ${a};
      word-break: break-word;

      &:not(:empty) {
        margin-block-start: calc(0.25 * ${r});
      }

      ${e&&o[e]&&s.AH`
        color: ${(0,v.A)(()=>(0,w.ho)(o[e]["status-color"],i["primary-background"]),()=>o[e]["status-color"])};
      `}
    `});ke.defaultProps=d.qn;const je=s.Ay.div``,Ce=s.Ay.div(e=>{const{labelAsLegend:t,isRadioCheck:n,showAdditionalInfo:r,disabled:i,required:o,theme:{base:{palette:{urgent:a},"disabled-opacity":l,spacing:d,"hit-area":{"compact-min":c}}}}=e;return s.AH`
    ${i&&s.AH`
      opacity: ${l};
      -webkit-user-select: none;
      user-select: none;
    `}
    position: relative;
    border: 0;

    &:has(${xe}:only-of-type) {
      ${ke} {
        min-width: 100%;
      }
    }

    > ${$.G}, > ${je} {
      &:not(:empty) {
        margin-bottom: calc(0.25 * ${d});
        min-height: ${c};
      }
    }

    > ${$.G}, > ${je} > ${$.G} {
      ${o&&s.AH`
        &::after {
          content: ${'"\\00a0*" / ""'};
          color: ${a};
        }
      `}

      ${i&&s.AH`
        cursor: not-allowed;
      `}
    }

    ${t&&s.AH`
      > legend {
        display: inline-flex;
        align-items: flex-end;
      }
    `}

    ${t&&r&&s.AH`
      display: block;

      > legend {
        float: inline-start;
      }

      > ${de} {
        ${!n&&s.AH`
          float: inline-end;
        `}
        + * {
          clear: both;
        }
      }
    `}
  `});Ce.defaultProps=d.qn;const He=(0,s.Ay)(p.Ay)(({theme:{base:{"font-size":e,"font-scale":t,"border-radius":n,spacing:r,palette:i},components:{"form-control":{"border-radius":o,"border-width":a},"form-field":d}}})=>{const{xxs:c}=(0,w.Vr)(e,t),u=(0,v.A)(()=>(0,w.ho)(d.pending["status-color"],i["primary-background"]),()=>d.pending["status-color"]),h=(0,w.ZV)(u),p=(0,v.A)(()=>(0,w.W0)(u)),m=p?(0,l.B3)(p,.4):p;return s.AH`
    background-color: ${u};
    color: ${p};
    font-size: ${c};
    min-width: calc(3 * ${r});
    min-height: calc(3 * ${r});
    padding: 0 ${r};
    border-radius: 0;
    border: none;

    &:first-child {
      border-inline-end: ${a} solid ${m};
      border-end-start-radius: calc(${n} * ${o});
      margin-inline-start: calc(2 * ${r});
    }

    &:last-child {
      border-end-end-radius: calc(${n} * ${o});
      margin-inline-start: 0;
    }

    &:hover {
      color: ${h.foreground};
      background-color: ${h.background};
    }

    @media (pointer: coarse) {
      min-height: 2rem;
    }
  `});He.defaultProps=d.qn;const ze={error:"warn-solid",warning:"diamond-minus",success:"check"},Re=(0,a.forwardRef)(function(e,t){const n=(0,b.A)(),{testId:r,children:i,id:s=n,as:l="div",label:d,labelAs:p="label",labelFor:m=s,labelId:f,labelHidden:w=!1,labelAfter:v=!1,info:C,status:H,isRadioCheck:z,charLimitDisplay:R,required:E=!1,disabled:_=!1,readOnly:I=!1,inline:S=!1,onClear:P,actions:q,container:O,additionalInfo:F,onResolveSuggestion:L,"aria-describedby":M,className:D,...N}=e,T=(0,x.A)(r,fe),V=(0,u.A)(),{announceAssertive:W}=(0,A.A)(),G="legend"===p,B="pending"===H&&!!L,Z=(0,h.A)(t),U=(0,a.useRef)(null),[K,X]=(0,a.useState)(null),Y=!!F&&!_&&!w,J=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)($.A,{"data-testid":T.label,id:f,as:p,htmlFor:"label"===p?m:void 0,labelHidden:w,onClick:e=>{I&&e.preventDefault()},inline:S,ref:U,children:d}),Y&&K&&(0,o.jsx)(ce,{"data-testid":T.additionalInfo,heading:F.heading,contextualLabel:K,children:F.content})]}),Q=z||G||w?J:(0,o.jsx)(c.A,{as:je,container:{justify:"between",alignItems:"end"},item:{alignSelf:"stretch"},children:J});let ee;if((0,a.useEffect)(()=>{X(U.current?.textContent??null)},[d]),(0,a.useEffect)(()=>{if("error"===H||"warning"===H){let e=`${V(H)} ${C}`;U.current?.textContent&&(e=`${U.current?.textContent} ${e}`),W({message:e,type:H})}},[H,C]),G||a.Children.count(i)>1)ee=i;else{const e=a.Children.only(i).props["aria-describedby"];ee=(0,a.cloneElement)(i,{"aria-describedby":[e,C?`${s}-info`:void 0].join(" ").trim()||void 0})}q&&(ee=(0,o.jsxs)(c.A,{container:{alignItems:"center",gap:.5},children:[ee,(0,o.jsx)(g,{items:q,menuAt:3})]}));let te=(0,o.jsxs)(c.A,{id:`${s}-info`,"data-testid":T.info,status:H,as:ke,container:{alignItems:"center",gap:.5},children:[H&&"pending"!==H&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.A,{item:{alignSelf:"start"},as:ye,status:H,name:ze[H]}),(0,o.jsx)(y.A,{children:`${V(H)} `})]}),C]});if(R&&(te=(0,o.jsxs)(c.A,{container:{justify:te?"between":"end",gap:1},children:[te,(0,o.jsx)(c.A,{item:{shrink:0},children:R})]})),B){const e=(0,k.A)(Z);te=(0,o.jsxs)(c.A,{container:{alignItems:"start",justify:"between"},children:[(0,o.jsxs)(ke,{"data-testid":T.info,status:H,id:`${s}-info`,children:[V("suggestion_info"),(0,o.jsx)(y.A,{"aria-live":"polite",children:V("suggestion_assist")})]}),(0,o.jsxs)(c.A,{container:{wrap:"nowrap"},children:[(0,o.jsx)(He,{"data-testid":T.suggestionReject,onClick:()=>{L(!1),e[0]?.focus()},"aria-label":`${V("no")}, ${V("reject_suggestion_button_a11y")}${K?` - ${K}`:""}`,children:V("no")}),(0,o.jsx)(He,{"data-testid":T.suggestionAccept,onClick:()=>{L(!0),e[0]?.focus()},"aria-label":`${V("yes")}, ${V("accept_suggestion_button_a11y")}${K?` - ${K}`:""}`,children:V("yes")})]})]})}const ne=[];return M&&ne.push(M),G&&C&&ne.push(`${s}-info`),(0,o.jsxs)(c.A,{"data-testid":T.root,...N,container:{direction:S?"row":"column",alignItems:S?"center":void 0,wrap:z?"wrap":void 0,...O},as:Ce,labelAsLegend:G,isRadioCheck:z,showAdditionalInfo:Y,id:`${s}-field`,forwardedAs:l,required:E,disabled:_,readOnly:I,onKeyDown:B?e=>{"Enter"===e.key&&(e.target.closest("button")||(e.preventDefault(),L?.(!0)))}:void 0,"aria-describedby":ne.length?ne.join(" "):void 0,ref:Z,className:(0,j.A)("form-field",D,{status:H}),children:[(G||!v)&&Q,ee,!G&&v&&Q,!I&&te,z&&P&&(0,o.jsx)(ve,{variant:"link",onClick:()=>{P()},children:V("clear_selection")})]})}),Ee=(0,C.A)(Re,fe);var _e=n(3974);s.Ay.div`
  gap: 1rem;

  /* Let flex items be aligned to the baseline of their first child */
  align-items: baseline;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${ue} {
    position: relative;
  }

  > :first-child {
    > ${ue}:after {
      content: '-';
      position: absolute;
      width: 1rem;
      inset-inline-end: -1rem;
      text-align: center;
    }
  }

  > ${ue}:first-child:after {
    content: '-';
    position: absolute;
    width: 1rem;
    inset-inline-end: -1rem;
    text-align: center;
  }
`.defaultProps=d.qn;const Ie=s.Ay.input(({theme:{base:e,components:t}})=>s.AH`
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
  `);Ie.defaultProps=d.qn;const Se=Ie,Pe=(0,O.A)("input",["control",...me]),qe=(0,C.A)((0,a.forwardRef)(function(e,t){const n=(0,b.A)(),{testId:r,id:i=n,value:a,defaultValue:s,required:l=!1,disabled:d=!1,readOnly:c=!1,label:u,additionalInfo:h,labelHidden:p,info:m,status:f,actions:g,onResolveSuggestion:A,className:$,...w}=e,y=(0,x.A)(r,Pe),v={};(0,_e.A)(e,"value")?v.value=a??"":(0,_e.A)(e,"defaultValue")&&(v.defaultValue=s??"");const k=(0,o.jsx)(ue,{"data-testid":y.control,ref:t,id:i,required:l,disabled:d,readOnly:c,status:f,hasSuggestion:!!A&&"pending"===f,...v,autoComplete:"_off",...w,as:Se,className:(0,j.A)("input",$)});return u?(0,o.jsx)(Ee,{testId:y,additionalInfo:h,label:u,labelHidden:p,id:i,info:m,readOnly:c,status:f,required:l,disabled:d,actions:g,onResolveSuggestion:A,children:k}):k}),Pe)},1847:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(4848),i=n(1594),o=n(6878),a=n(9061);const s=(0,i.forwardRef)(function({value:e,displayText:t,variant:n="link",...i},s){const l=e?t||e:(0,r.jsx)(a.A,{});return"text"!==n&&e?(0,r.jsx)(o.ah,{...i,variant:"link",ref:s,href:`mailto:${e}`,children:l}):(0,r.jsx)("span",{ref:s,...i,children:l})})},3113:(e,t,n)=>{n.d(t,{A:()=>u,G:()=>c});var r=n(4848),i=n(1594),o=n(8267),a=n(1357),s=n(9549),l=n(9187),d=n(7321);const c=o.Ay.label(({theme:e,labelHidden:t})=>{const{"foreground-color":n}=e.components.label,r=(0,l.A)(()=>t?a.Ic:(0,a.B3)((0,d.W0)(e.base.palette["primary-background"]),e.base.transparency["transparent-3"])),i=(0,d.Vr)(e.base["font-size"],e.base["font-scale"]);return t?a.Ic:o.AH`
          max-width: max-content;
          font-size: ${i[e.components.label["font-size"]]};
          font-weight: ${e.components.label["font-weight"]};
          color: ${"auto"===n?r:n};
        `});c.defaultProps=s.qn;const u=(0,i.forwardRef)(function({children:e,labelHidden:t=!1,htmlFor:n,...i},o){return(0,r.jsx)(c,{ref:o,labelHidden:t,htmlFor:""===n?void 0:n,...i,children:e})})},4651:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(1594),i=n(4680);const o=(e,t)=>{let n;return function(...r){window.clearTimeout(n),n=window.setTimeout(()=>{n=void 0,e.apply(this,r)},t)}},a=n(127).A?(()=>{const e=document.createElement("div");e.style.width="1ch",e.style.position="fixed",document.body.append(e);const t=e.offsetWidth;return e.remove(),t})():1;var s=n(3456);const l=i.A&&window.getComputedStyle(document.documentElement).fontSize||"16px",d=(e,{breakpointRef:t,defaultValue:n=!1,themeProp:d="breakpoints"}={})=>{const{base:{breakpoints:c,"content-width":u}}=(0,s.A)(),h="content-width"===d?u[e]:c[e],[p,m]=(0,r.useState)(i.A?window.matchMedia(`(min-width: ${h})`).matches:!!n),f=a,g=(0,r.useCallback)(e=>{m(e.matches)},[]);return(0,r.useLayoutEffect)(()=>{if(t&&t.current){const e=o(e=>{if(!t.current?.checkVisibility())return;const n=e.some(({target:e,contentRect:n})=>{if(e!==t.current)return;const r="breakpoints"===d?parseFloat(l):f;return n.width>=parseFloat(h)*r});m(n)},100),n=new ResizeObserver(e);return n.observe(t.current),()=>{n.disconnect()}}if(i.A){const e=window.matchMedia(`(min-width: ${h})`),t="addEventListener"in e,n=o(()=>{m(window.innerWidth>=parseInt(h,10))},100);return t?(e.addEventListener("change",g),m(e.matches)):(window.addEventListener("resize",n),m(window.innerWidth>=parseInt(h,10))),()=>{t?e.removeEventListener("change",g):window.removeEventListener("resize",n)}}},[t?.current]),p}},7708:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(4848),i=n(1594),o=n(6878),a=n(9061),s=n(1638);const l=(0,i.forwardRef)(function({value:e,displayText:t,variant:n="link",formattingOptions:{showCountryCode:i=!0}={},...l},d){const c=e?t||((e,{nationalFormat:t}={})=>t?(0,s.l)(e)?.formatNational():(0,s.l)(e)?.formatInternational())(e||"",{nationalFormat:!i})||e:(0,r.jsx)(a.A,{});return"text"!==n&&e?(0,r.jsx)(o.ah,{...l,variant:"link",ref:d,href:`tel:${e}`,children:c}):(0,r.jsx)("span",{ref:d,...l,children:c})})},9061:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(4848),i=n(8267),o=n(9586),a=n(7491);const s=i.Ay.span`
  display: inline-block;
  position: relative;
`,l=()=>{const e=(0,o.A)();return(0,r.jsxs)(s,{children:[(0,r.jsx)("span",{"aria-hidden":!0,children:"––"}),(0,r.jsx)(a.A,{children:e("no_value")})]})}},9252:(e,t,n)=>{n.d(t,{Ay:()=>I});var r=n(4848),i=n(1594),o=n(8267),a=n(6883),s=n(3113),l=n(8579),d=n(4853),c=n(4651),u=n(3456),h=n(9549),p=n(9586),m=n(4680),f=n(6878),g=n(3700);const b=e=>{const{status:t,dimension:n,transitionSpeed:r,transitionTimingFunction:i,min:o,max:a,nullWhenCollapsed:s,el:l}=e,d={};let c=a;return l&&!a&&(c=((e,t)=>e?"height"===t?`${e.scrollHeight}px`:`${e.scrollWidth}px`:"")(l,n)),"expanded"!==t&&"collapsed"!==t||((a||o)&&(d[n]="expanded"===t?c:o||0,d["overflow"+("width"===n?"X":"Y")]="hidden"),"collapsed"!==t||s||o||(d[n]=0,d.overflow="hidden",d.visibility="hidden")),"expanding"!==t&&"collapsing"!==t||(d[n]="expanding"===t?c:o||0,d.overflow="hidden",d.transitionProperty=n,d.transitionDuration=`max(${r}, 0.01ms)`,d.transitionTimingFunction=i),d},x=(0,i.forwardRef)(function(e,t){const{base:{animation:n}}=(0,u.A)(),{children:o,dimension:a="height",collapsed:s=!1,onBeforeExpand:l,onAfterExpand:c,onBeforeCollapse:h,onAfterCollapse:p,transitionSpeed:m=n.speed,min:f,max:x,nullWhenCollapsed:A=!1,as:$="div",...w}=e,[y,v]=(0,i.useState)(s?"collapsed":"expanded"),k=(0,i.useState)(),j=k[1];let C=k[0];const H=(0,g.A)(y),z=(0,d.A)(t),R=(0,i.useCallback)(e=>{e.target===z.current&&e.propertyName===a&&v("expanding"===y?"expanded":"collapsed")},[z.current,y]);return(0,i.useLayoutEffect)(()=>{const e=s,t=!s,r=["expanded","expanding"].includes(y),i=["collapsed","collapsing"].includes(y);t&&i?(l?.(),v("expanding")):e&&r&&(h?.(),v("collapsing")),"expanded"===y&&"expanded"!==H?c?.():"collapsed"===y&&"collapsed"!==H&&p?.(),j(b({dimension:a,min:f,max:x,transitionSpeed:m,nullWhenCollapsed:A,status:y,el:z.current,transitionTimingFunction:n.timing.ease}))},[s,y,f,x]),y!==H&&["expanded","collapsed"].includes(H)&&(C=b({dimension:a,min:f,max:x,transitionSpeed:m,nullWhenCollapsed:A,status:"expanding"===y?"collapsing":"expanding",el:z.current,transitionTimingFunction:n.timing.ease})),"collapsed"===y&&A&&!f?null:(0,r.jsx)($,{ref:z,onTransitionEnd:R,...w,inert:"collapsed"!==y||A||f?void 0:"",style:C,children:o})}),A=(0,o.Ay)(f.Ay)``,$=({children:e,lines:t})=>{const[n,o]=(0,i.useState)(!0),[a,s]=(0,i.useState)(!1),l=(0,i.useRef)(null),d=(0,p.A)(),c=(0,i.useMemo)(()=>{if(!m.A)return 1/0;const e=1.25*Number.parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"),10);return t*e},[]);return(0,i.useLayoutEffect)(()=>{if(!l.current)return;const e=new ResizeObserver(e=>{const t=e.some(({target:e,contentRect:t})=>{if(e===l.current)return t.height>c});s(t)});return e.observe(l.current),()=>{e.disconnect()}},[l.current,c]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{collapsed:n,min:a?`${c}px`:"max-content",children:(0,r.jsx)("div",{ref:l,children:e})}),a&&(0,r.jsx)(A,{variant:"link",onClick:()=>o(e=>!e),children:d(n?"show_more":"show_less")})]})};var w=n(4869),y=n(9061),v=n(8044);const k=(0,v.A)("field-value-list",[]),j=(0,v.A)("field-value-item",["name","value"]),C=o.Ay.dt`
  word-break: break-word;
`,H=o.Ay.dd`
  word-break: break-word;
`,z=o.Ay.div``,R=o.Ay.dl(({variant:e,theme:t})=>{const{components:{"field-value-list":{inline:{detached:n}}}}=t;return o.AH`
    width: 100%;

    ${"value-comparison"===e&&o.AH`
      dt {
        width: 100%;
      }
      dd {
        text-align: end;
        padding-inline-start: calc(2 * ${t.base.spacing});
      }
      ${s.G} {
        max-width: unset;
      }
      dd:not(:last-of-type),
      dt:not(:last-of-type) {
        border-bottom: 0.0625rem solid ${t.base.palette["border-line"]};
        padding-bottom: calc(0.5 * ${t.base.spacing});
      }
    `}

    ${n&&"inline"===e&&o.AH`
      dt {
        width: 100%;
        padding-inline-end: calc(${t.base.spacing});
      }
      ${s.G} {
        max-width: unset;
      }
      dd:not(:last-of-type),
      dt:not(:last-of-type),
      dd:has(+ ${z}),
      dt:has(+ dd + ${z}),
      ${z}:has(+ dt + dd),
      ${z}:not(:last-of-type) {
        border-bottom: 0.0625rem dashed ${t.base.palette["border-line"]};
        padding-bottom: calc(0.5 * ${t.base.spacing});
      }
    `}
  `});R.defaultProps=h.qn;const E=(0,w.A)(({testId:e,name:t,value:n,variant:i="inline",truncate:o=!0})=>{const a=(0,l.A)(e,j),d="string"==typeof n&&o?(0,r.jsx)($,{lines:3,children:n}):n,c=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.G,{"data-testid":a.name,as:C,role:"none",children:t}),(0,r.jsx)(H,{"data-testid":a.value,role:"none",children:n?d:(0,r.jsx)(y.A,{})})]});return"stacked"===i?(0,r.jsx)(z,{"data-testid":a.root,children:c}):(0,r.jsx)(r.Fragment,{children:c})},j),_=(0,i.forwardRef)(function({testId:e,fields:t,variant:n="inline",...i},o){const s=(0,l.A)(e,k),h=(0,d.A)(o),p=(0,c.A)("xs",{breakpointRef:h,themeProp:"content-width"}),{components:{"field-value-list":{inline:{detached:m}}}}=(0,u.A)();return(0,r.jsx)(a.A,{"data-testid":s.root,...i,ref:h,container:{cols:["inline","value-comparison"].includes(n)&&p?"16ch minmax(0, 1fr)":"minmax(0, 1fr)",colGap:m||"value-comparison"===n?0:2,rowGap:m||"value-comparison"===n?.5:1},as:R,role:"none",variant:p?n:"stacked",children:t.map(({id:e,name:t,value:i,truncate:o=!0,variant:a})=>{const s={name:t,variant:"stacked"!==(a??n)&&p?"inline":"stacked"};return"string"==typeof i?(0,r.jsx)(E,{...s,value:i,truncate:o},e??t):(0,r.jsx)(E,{...s,value:i},e??t)})})}),I=(0,w.A)(_,k)}}]);
//# sourceMappingURL=PP8001_54325046.a58c3abe.js.map