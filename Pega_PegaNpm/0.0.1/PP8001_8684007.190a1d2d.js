/*! For license information please see PP8001_8684007.190a1d2d.js.LICENSE.txt */
"use strict";(self.webpackChunkdxcomponent=self.webpackChunkdxcomponent||[]).push([[8684007],{127:(e,t,r)=>{r.d(t,{A:()=>a});const a="undefined"!=typeof document},150:(e,t,r)=>{r.d(t,{A:()=>x});var a=r(4848),o=r(1594),n=r(5206),i=r(832),s=r(9463),l=r(2477),c=r(4853),d=r(3351),u=r(2558),p=r(6416),_=r(393);const m=(e,t)=>{const r=e.getBoundingClientRect(),a=t.getBoundingClientRect();return{x:r.x-a.x,y:r.y-a.y}};var h=r(4680);const f=(0,o.createContext)({checkActive:()=>!0,setActive:()=>{},popovers:{}});var g=r(8889),b=r(127),y=r(6629),v=r(2365);Object.freeze({name:"sameWidth",enabled:!0,phase:"beforeWrite",fn({state:e}){e.styles.popper.width=`${e.rects.reference.width}px`},requires:["computeStyles"]});const $=b.A?(0,y.A)():0,w=(Object.freeze({name:"fitToContent",enabled:!0,phase:"beforeWrite",requires:["computeStyles","offset"],fn({state:e}){e.styles.popper.width="fit-content",e.elements.popper.style.maxWidth="60ch",e.elements.popper.style.minWidth=`${e.rects.reference.width}px`}}),Object.freeze({name:"placeAndContain",enabled:!0,phase:"beforeWrite",requires:["computeStyles","offset"],fn:({state:e})=>{const[t,r]=e.placement.split("-"),a={top:0,bottom:0,right:0,left:0},o=e.orderedModifiers.find(({name:e})=>"preventOverflow"===e)?.options?.padding;"number"==typeof o?(a.top=o,a.bottom=o,a.right=o,a.left=o):o&&(a.top=o.top??a.top,a.bottom=o.bottom??a.bottom,a.right=o.right??a.right,a.left=o.left??a.left);const n=document.documentElement.clientWidth,i=document.documentElement.clientHeight,s=e.rects.reference,l=s.x,c=l+s.width,d=s.y,u=d+s.height,p=(l+c)/2<n/2,_=(d+u)/2<i/2,m=e.modifiersData.offset?.[e.placement]?.x??0,h=e.modifiersData.offset?.[e.placement]?.y??0;let f=null,g=null;const b=[...e.elements.popper.children].flatMap(e=>{const t=e.querySelectorAll("[data-popover-scroll-el]");return t.length>0?[...t]:e}).reduce((t,r)=>r===e.elements.arrow?t:(0,v.A)(r)[0]?t+r.scrollHeight+$:t+r.scrollHeight,0),y=Math.max(e.elements.popper.scrollHeight,b),w=Math.max(e.elements.popper.scrollWidth,...Array.from(e.elements.popper.children).map(t=>t===e.elements.arrow?-1/0:(0,v.A)(t)[1]?t.scrollWidth+$:t.scrollWidth));let k=t;"bottom"===t?(g=i-u-h-a.bottom,u+h+y+a.bottom>i&&(k=_?"bottom":"top")):"top"===t?(g=d+h-a.top,d+h-y+a.top<0&&(k=_?"bottom":"top")):"left"===t?(f=l+m-a.left,l+m-w+a.left<0&&(k=p?"right":"left")):"right"===t&&(f=n-c-m-a.right,c+m+w+a.right>n&&(k=p?"right":"left")),"left"!==k&&"right"!==k||(g=i-a.top-a.bottom),e.elements.popper.style.maxHeight=`${g}px`,e.elements.popper.style.maxWidth=null!==f?`${f}px`:"",k=`${k}${r?`-${r}`:""}`,e.placement!==k&&(e.placement=k,e.reset=!0)}})),k={none:0,short:500,long:1e3},x=(0,o.forwardRef)(function({show:e=!0,portal:t=!0,target:r,placement:b="bottom",strategy:y="fixed",style:v,modifiers:$=[],arrow:x=!1,groupId:A,showDelay:C="none",hideDelay:S="none",hideOnTargetHidden:P=!1,children:E,onHide:T,onShow:j,...z},H){const{portalTarget:R}=(0,s.A)(),{checkActive:I,setActive:L,popovers:O}=(0,o.useContext)(f),[N,D]=(0,l.A)(),M=(0,c.A)(H,D),q=(0,o.useRef)(null),F=(0,o.useRef)(),U=(0,o.useRef)(null),[W,B]=(0,o.useState)(e),V=(0,o.useRef)(),G=(0,d.A)(),X=r instanceof Element?r:r?.contextElement,Y="boolean"==typeof t?R:t,Q=(0,o.useMemo)(()=>{const e=!!$.slice().reverse().find(e=>"flip"===e.name&&void 0!==e.enabled)?.enabled;return[{name:"computeStyles",options:{gpuAcceleration:!1}},{name:"offset",options:{offset:[0,x?5.5:2]}},{name:"hide",enabled:P},{name:"arrow",enabled:x,options:{element:q.current,padding:7}},{name:"preventOverflow",options:{tether:!$.find(e=>"sameWidth"===e.name||"fitToContent"),padding:16}},{...w,enabled:!e},...$]},[x,P,$]),J=(0,o.useMemo)(()=>{const e=[...Q].reverse().find(e=>"offset"===e.name&&!1!==e.enabled);return Array.isArray(e?.options?.offset)?e?.options?.offset[1]??0:0},[Q]),{styles:K,attributes:Z,forceUpdate:ee}=(0,i.E)(r,N,{placement:b,strategy:y,modifiers:Q});ee&&(F.current=ee);const[te]=(0,o.useState)(()=>new AbortController),[re]=(0,o.useState)(()=>new WeakSet),[ae]=(0,o.useState)(()=>new ResizeObserver(e=>{let t=!1;for(const{target:r}of e)re.has(r)?t||(t=!0,te.signal.aborted||F.current?.()):re.add(r)}));(0,o.useEffect)(()=>()=>{te.abort(),ae.disconnect()},[]),(0,o.useEffect)(()=>{if(N)return ae.observe(N),()=>{ae.unobserve(N)}},[N]),(0,o.useEffect)(()=>{if(X)return ae.observe(X),()=>{ae.unobserve(X)}},[X]),(0,o.useLayoutEffect)(()=>{U.current=X?m(X,document.documentElement):null},[X]),(0,o.useEffect)(()=>{if(!W||!X)return;let e;const t=()=>{if(X&&U.current){const r=m(X,document.documentElement);U.current.x!==r.x||U.current.y!==r.y?(U.current=r,F.current?.()):e=requestAnimationFrame(t)}};return e=requestAnimationFrame(t),()=>{cancelAnimationFrame(e)}},[W,X]),(0,o.useEffect)(()=>{A&&e&&L(G,A),h.A?(V.current&&clearTimeout(V.current),V.current=window.setTimeout(()=>{B(e),e&&F.current?.()},k[e?C:S])):(B(e),e&&F.current?.())},[e]),(0,o.useEffect)(()=>()=>clearTimeout(V.current),[]),(0,u.A)(()=>{W?j?.():T?.()},[W]),(0,o.useEffect)(()=>{A&&O[A]&&O[A]!==G&&B(!1)},[A?O[A]:void 0]);const oe=(0,p.A)(X,!!t),ne=(0,o.useCallback)(e=>{if(X&&t){const t=new Event(e.type.startsWith("popover:")?e.type:`popover:${e.type}`,{bubbles:!0,cancelable:!0});X.dispatchEvent(t)}},[X,t]);(0,_.A)("focusout",ne,{target:M}),(0,_.A)("popover:focusout",ne,{target:M}),(0,_.A)("focusin",ne,{target:M}),(0,_.A)("popover:focusin",ne,{target:M});const ie=(0,a.jsxs)(g.l,{...z,"data-popover-id":oe,portal:!(!t||!Y),offset:J,ref:M,style:{...v,...K.popper},...Z.popper,children:[x&&(0,a.jsx)(g.s,{ref:q,style:{...K.arrow}}),E]});return!r||!W||A&&!I(G,A)?null:t&&Y?(0,n.createPortal)(ie,Y):ie})},285:(e,t,r)=>{r.d(t,{e:()=>f,A:()=>g});var a=r(4848),o=r(1594),n=r(8267),i=r(9549),s=r(4869),l=r(1862),c=r(1649),d=r(7501),u=r(8579),p=r(2477),_=r(4853);const m=(0,r(8044).A)("backdrop",[]),h={slow:2,medium:1,fast:.5,none:0},f=(0,n.Ay)(d.A)(e=>{const{theme:{base:t}}=e,{opacity:r,alpha:a,variant:o,position:i}=e,s=`max(calc(${h[e.transitionSpeed]} * ${t.animation.speed}), 1ms)`;return n.AH`
      position: ${i};
      z-index: ${"fixed"===i?t["z-index"].backdrop:t["z-index"].popover+1};
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: inherit;
      opacity: ${r};
      transition-property: opacity;
      transition-timing-function: ${e.theme.base.animation.timing.ease};
      /* stylelint-disable declaration-block-no-duplicate-properties */
      transition-duration: 1ms;
      transition-duration: ${s};
      /* stylelint-enable declaration-block-no-duplicate-properties */

      ${"dark"===o&&n.AH`
        background: rgba(0, 0, 0, ${a});
      `}

      ${"light"===o&&n.AH`
        background: rgba(255, 255, 255, ${a});
      `}
    `});f.defaultProps=i.qn;const g=(0,s.A)((0,o.forwardRef)(function({testId:e,children:t,container:r,open:n=!1,variant:i="dark",transitionSpeed:s="medium",alpha:d=.6,position:h="fixed",onBeforeTransitionIn:g,onAfterTransitionIn:b,onBeforeTransitionOut:y,onAfterTransitionOut:v,...$},w){const k=(0,u.A)(e,m),[x,A]=(0,o.useState)("closed"),[C,S]=(0,p.A)(),P=(0,_.A)(w,S),E=(0,o.useCallback)(e=>{if("opacity"!==e.propertyName||e.target!==e.currentTarget)return;let t;"closing"===x?(t="closed",v?.()):(t="open",b?.()),A(t)},[x,v,b]);return(0,o.useEffect)(()=>{n?"closed"!==x&&"closing"!==x||(g?.(),(0,l.A)(),A("opening")):"open"!==x&&"opening"!==x||(y?.(),A("closing"))},[n]),(0,o.useEffect)(()=>{if(!P.current)return;const e=window.getComputedStyle(P.current).opacity;"closing"===x&&"0"===e&&(v?.(),A("closed")),"opening"===x&&"1"===e&&(b?.(),A("open"))},[x]),n||"closed"!==x?(0,a.jsx)(c.A,{portalTarget:C??void 0,children:(0,a.jsx)(f,{"data-testid":k.root,container:{justify:"center",alignItems:"center",...r},transitionSpeed:s,opacity:"opening"===x||"open"===x?1:0,alpha:d,variant:i,position:h,onTransitionEnd:E,ref:P,...$,children:t})}):null}),m)},393:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(1594),o=r(712);const n=function(e,t,{target:r=document,eventOptions:n,dependencies:i=[]}={}){(0,a.useEffect)(()=>{const[a]=(0,o.A)([r]);if(a)return a.addEventListener(e,t,n),()=>{a.removeEventListener(e,t,n)}},[e,r,t,n,...i])}},405:(e,t,r)=>{r.d(t,{D2:()=>d,QS:()=>_,pT:()=>p,r3:()=>f,wE:()=>m,z5:()=>h});var a=r(1357),o=r(8267),n=r(7321),i=r(9549),s=r(9187),l=r(285),c=r(7501);const d=(0,o.Ay)(l.A)(()=>o.AH`
    border-radius: inherit;
  `);d.defaultProps=i.qn;const u=o.Ay.div(({theme:e})=>o.AH`
    &:focus-visible {
      box-shadow: ${e.components.button["focus-shadow"]};
      outline: none;
      border-radius: calc(9999 * ${e.base["border-radius"]});
    }
  `);u.defaultProps=i.qn;const p=(0,o.Ay)(u)(({theme:e,placement:t,determinate:r})=>{const n="inline"===t?"1em":"2rem",i=(0,a.J1)(e.base.palette["foreground-color"])>.5?e.base.colors.gray["extra-dark"]:e.base.colors.gray.light;return o.AH`
    position: relative;

    svg {
      display: block;
      width: ${n};
      height: ${n};

      circle {
        fill: transparent;
        stroke: ${i};
        stroke-width: 2;
        r: 45%;
        cx: 50%;
        cy: 50%;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;

        &:nth-child(2) {
          stroke: ${e.components.progress["progress-color"]};
          transition: stroke-dashoffset calc(0.5 * ${e.base.animation.speed})
            ${e.base.animation.timing.ease};

          ${!r&&o.AH`
            @keyframes LoadingRing {
              0% {
                transform: rotate(0deg);
              }

              100% {
                transform: rotate(360deg);
              }
            }
            animation: LoadingRing calc(4 * ${e.base.animation.speed}) linear infinite;
          `}
        }
      }
    }

    ${"inline"===t&&o.AH`
      display: inline-flex;
      vertical-align: top;
    `}
  `});p.defaultProps=i.qn;const _=(0,o.Ay)(u)(({theme:e,placement:t,determinate:r})=>{const n=(0,a.J1)(e.base.palette["foreground-color"])>.5?e.base.colors.gray["extra-dark"]:e.base.colors.gray.light;return o.AH`
    background-color: ${n};
    border-radius: ${e.base["border-radius"]};
    ${"local"===t?o.AH`
          width: calc(100% - 4 * ${e.base.spacing});
        `:o.AH`
          width: 100%;
        `}
    height: 0.375rem;
    min-width: 2rem;
    max-width: min(calc(100vw - 4 * ${e.base.spacing}), ${e.base["content-width"].lg});
    overflow: hidden;

    ::before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      left: 0;
      border-radius: ${e.base["border-radius"]};
      background-color: ${e.components.progress["progress-color"]};
      ${r&&o.AH`
        transform: translateX(var(--progress, 0));
        transform-origin: 0 50%;
        transition: transform calc(0.5 * ${e.base.animation.speed})
          ${e.base.animation.timing.ease};
      `}

      ${!r&&o.AH`
        @keyframes LoadingBar {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(200%);
          }
        }
        animation: LoadingBar calc(8 * ${e.base.animation.speed}) linear infinite;
        width: 50%;
      `}
    }

    ${"inline"===t&&o.AH`
      width: 3rem;
      display: inline-block;
      position: relative;
    `}
  `});_.defaultProps=i.qn;const m=(0,o.Ay)(u)(({theme:e,placement:t})=>o.AH`
    line-height: 1;
    display: ${"inline"===t?"inline-flex":"block"};

    @keyframes LoadingEllipsis {
      0% {
        transform: scale(0);
        opacity: 0;
      }

      50% {
        transform: scale(1);
        opacity: 1;
      }

      100% {
        transform: scale(0);
        opacity: 0;
      }
    }

    > span {
      display: flex;
      justify-content: center;

      ${"inline"===t&&o.AH`
        display: inline-flex;
      `}
    }

    > span span {
      margin: 0 0.3125rem;
      background: ${e.components.progress["progress-color"]};
      border-radius: 50%;
      animation: LoadingEllipsis calc(4 * ${e.base.animation.speed}) infinite;

      ${"global"===t&&o.AH`
        width: 1.25rem;
        height: 1.25rem;
      `}

      ${("local"===t||"block"===t)&&o.AH`
        width: 0.625rem;
        height: 0.625rem;
      `}

      ${"inline"===t&&o.AH`
        width: 0.1875rem;
        height: 0.1875rem;
        margin: 0 0.1875rem;
        animation-duration: calc(4 * ${e.base.animation.speed});
      `}

      &:nth-child(2) {
        animation-delay: 0.1667s;
      }

      &:nth-child(3) {
        animation-delay: ${.3334}s;
      }
    }
  `);m.defaultProps=i.qn;const h=o.Ay.span(({theme:e})=>{const t=(0,s.A)(()=>(0,a.B3)((0,n.W0)(e.base.palette["primary-background"]),e.base.transparency["transparent-3"])),r=(0,n.Vr)(e.base["font-size"],e.base["font-scale"]);return o.AH`
    font-size: ${r[e.components.label["font-size"]]};
    font-weight: ${e.base["font-weight"]["semi-bold"]};
    color: ${t};
  `});h.defaultProps=i.qn;const f=(0,o.Ay)(c.A)(({theme:e,placement:t})=>o.AH`
    ${"inline"!==t&&o.AH`
      width: 100%;
    `}

    ${"block"===t&&o.AH`
      margin-block: calc(2 * ${e.base.spacing});
    `}
  `);f.defaultProps=i.qn},712:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(8268);const o=e=>e.flatMap(e=>{if(!e)return[];const t=(0,a.A)(e,EventTarget)?e:e.current;return t?[t]:[]})},1093:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(4848),o=r(1649);const n=e=>t=>(0,a.jsx)(o.A,{children:(0,a.jsx)(e,{...t})})},1649:(e,t,r)=>{r.d(t,{Q:()=>C,A:()=>j});var a=r(4848),o=r(1594),n=r(5206),i=r(8267),s=(r(8347),r(1357)),l=r(7321);const c=i.AH`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`,d=(0,i.DU)(({theme:e})=>{const{base:{"custom-scrollbar":t,palette:{"foreground-color":r},shadow:{focus:a},transparency:{"transparent-3":o}},components:{"form-control":{"background-color":n}}}=e;return i.AH`
    ${c}

    body {
      overscroll-behavior: none;
    }

    h1:focus-visible,
    h2:focus-visible,
    h3:focus-visible,
    h4:focus-visible,
    h5:focus-visible,
    h6:focus-visible {
      outline: transparent;
      box-shadow: ${a};
    }

    ::placeholder {
      color: ${(0,s.jh)(o,r,n)};
      opacity: unset;
    }

    ${t&&i.AH`
      * {
        scrollbar-width: thin;
      }
    `}

    ${(({base:{scale:e,"hit-area":t}})=>i.AH`
    :root,
    :host {
      height: 100%;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      font-size: calc(${e} * 1rem);
      --hit-area: ${t.compact};

      @media (pointer: coarse) {
        --hit-area: ${t.finger};
      }
    }
  `.join(""))(e)}

    ${(({base:{"font-size":e,"font-scale":t,"font-stretch":r,"letter-spacing":a,"font-family":o,palette:{"foreground-color":n,"app-background":s},"line-height":c},components:{text:d}})=>{const u=(0,l.Vr)(e,t);return i.AH`
    body,
    :host {
      min-height: 100%;
      margin: 0;
      padding: 0;
      font-size: ${u[d.primary["font-size"]]};
      font-family: ${o};
      color: ${n};
      line-height: ${c};
      font-stretch: ${r};
      letter-spacing: ${a};
    }

    body {
      background: ${s};
    }
  `.join("")})(e)}

    input,
    button,
    select,
    optgroup,
    textarea {
      margin: 0;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
  `});var u=r(9549),p=r(4860);const _={yes:"Yes",no:"No",always:"Always",never:"Never",true:"True",false:"False",none:"None",filters:"Filters",actions:"Actions",status:"Status",additional_info:"Additional info",search_placeholder_default:"Search…",select_placeholder_default:"Select…",description:"Description",all:"All",default:"default",app_default:"app default",sitewide:"Sitewide",opens_in_a_new_tab:"Opens in a new tab",details:"Details",content:"Content",tabs:"Tabs",pulse:"Pulse",history:"History",summary:"Summary",summary_panel:"Summary Panel",heading:"Heading",fields:"Fields",subheading:"Subheading",records:"records",utilities:"Utilities",search:"Search",menu:"menu",new:"New",info:"info",shortcuts:"Shortcuts",label:"Label",caption:"Caption",id:"ID",name:"Name",type:"Type",icon:"Icon",page:"Page",default_input:"Default input",default_input_value:"Default input value",default_input_property:"Default input property",value:"Value",field:"Field",field_group:"Field Group",insight:"Insight",view:"View",range_input:"range input",system:"System",response:"Response",rationale:"Rationale",duration:"Duration",tokens:"Tokens",keyboard_instructions:"Keyboard instructions",remove:"Remove",follow:"Follow",unfollow:"Unfollow",add:"Add",cancel:"Cancel",try_again:"Try again",update:"Update",submit:"Submit",apply:"Apply",select:"Select",edit:"Edit",preview:"Preview",decline:"Decline",delete:"Delete",close:"Close",activate:"Activate",expand:"Expand",collapse:"Collapse",accept:"Accept",clear:"Clear",use:"Use",undo:"Undo",redo:"Redo",filter:"Filter",sort:"Sort",group:"Group",go:"Go",configure:"Configure",dismiss:"Dismiss",due:"Due",drag:"Drag",resize:"Resize",reset:"Reset",refresh:"Refresh",copy:"Copy",view_all:"View all",view_less:"View less",show_more:"Show more",show_less:"Show less",show_all:"Show all",clear_all:"Clear all",clear_selection:"Clear selection",link_open_in_tab_text:"Open in tab",edit_details:"Edit details",add_emoji:"Add emoji",create_new:"Create new",submit_and_open:"Submit and open",add_condition:"Add condition",enter_fullscreen:"Enter fullscreen",exit_fullscreen:"Exit fullscreen",disable_word_wrap:"Disable word wrap",enable_word_wrap:"Enable word wrap",expand_search:"Expand search",open_noun:"Open {0}",close_noun:"Close {0}",view_all_noun:"View all {0}",view_less_noun:"View less {0}",expand_noun:"Expand {0}",add_noun:"Add {0}",collapse_noun:"Collapse {0}",checked_noun:"{0} checked",selected_noun:"{0} selected",unselected_noun:"{0} unselected",use_input_value:"Use {0}",preview_of_noun:"Preview of {0}",go_to_noun:"Go to {0}",insert_noun:"Insert {0}",delete_noun:"Delete {0}",remove_noun:"Remove {0}",loading_noun:"Loading {0}…",create_noun:"Create {0}",choose_noun:"Choose {0}",select_noun:"Select {0}",actions_for:"Actions - {0}",edited:"Edited {0}",deleted:"{0} deleted",done:"Done",uploading:"Uploading",loading:"Loading…",loaded:"Loaded",submitting:"Submitting…",no_items:"No items",unknown_error:"Unknown error",image_load_error:"Error loading image",selected:"Selected",selected_count:{zero:"{0} selected",one:"{0} selected",two:"{0} selected",few:"{0} selected",many:"{0} selected",other:"{0} selected"},completed:"Completed",current:"Current",previous:"Previous",not_started:"Not started",empty_value:"Empty value",no_value:"no value",delivered:"Delivered",sent:"Sent",active:"Active",read_only:"Read only",information:"Information",error:"Error",errors:{zero:"Errors",one:"Error",two:"Errors",few:"Errors",many:"Errors",other:"Errors"},warning:"Warning",success:"Success",pass:"Pass",fail:"Fail",did_not_ask:"Did not ask",created:"Created",results_for:"Results for {0}",opening_noun:"Opening {0}",characters_typed:"characters typed",processing:"Processing",copied_to_clipboard:"Copied to clipboard",failed_to_copy:"Failed to copy",day_placeholder:"DD",month_placeholder:"MM",year_placeholder:"YYYY",hour_placeholder:"hh",minute_placeholder:"mm",second_placeholder:"ss",meridiem_value_am:"AM",meridiem_value_pm:"PM",week_placeholder:"WW",seconds_text:"Seconds",minutes_text:"Minutes",hours_text:"Hours",days_text:"Days",time_text:"Time",time_format_info:"hh:mm:ss",date_quarter_q1:"Q1 {0}",date_quarter_q2:"Q2 {0}",date_quarter_q3:"Q3 {0}",date_quarter_q4:"Q4 {0}",time_unit:"Time Unit",attachments_count:{zero:"No attachments",one:"{0} attachment",two:"{0} attachments",few:"{0} attachments",many:"{0} attachments",other:"{0} attachments"},results_count:{zero:"No results",one:"{0} result",two:"{0} results",few:"{0} results",many:"{0} results",other:"{0} results"},recent_results_count:{zero:"No recent results",one:"{0} recent result",two:"{0} recent results",few:"{0} recent results",many:"{0} recent results",other:"{0} recent results"},new_emails_count:{zero:"No new emails",one:"{0} new email",two:"{0} new emails",few:"{0} new emails",many:"{0} new emails",other:"{0} new emails"},pagination_page_of:"Page {0} of {1}",pagination_next:"Next",pagination_prev:"Previous",range_from_datetime:"Since",range_to_datetime:"Until",range_from_numeric:"From",range_to_numeric:"To",x_of_y:"{0} of {1}",n_more:"{0} more",keypress_instruction:"Press {0} to {1}",preview_link_instruction:"Press {0} and p to open this link in a preview.",polite_announcements:"Polite Announcements",assertive_announcements:"Assertive Announcements",go_to_main_content:"Go to main content",main_content:"Main content",app_shell_create:"Create",app_shell_open_nav:"Open navigation menu",app_shell_main_navigation_label:"Main",shortcut_NextRegion:"Next region",shortcut_PrevRegion:"Previous region",app_shell_user_account:"Account",app_shell_pin:"Pin",app_shell_unpin:"Unpin",application_logo:"Application logo",combobox_open_close:"Arrow down to open, press escape to close.",combobox_search_instructions:"Start typing to search",combobox_open_list_button_a11y:"Open combobox list",combobox_close_list_button_a11y:"Close combobox list",multiselect_instructions:"Arrow {0} from start to review selected items",selected_items:"Selected items",composite_input_open_button_a11y:"Open configuration dialog",composite_input_close_button_a11y:"Close configuration dialog",menu_selection_instructions:"Press enter to select items.",menu_item_expand_arrow:"{0}. Arrow right to expand.",menu_item_collapse_arrow:"Arrow left to collapse.",menu_item_collapse_shift_space:"Press shift space to collapse.",menu_item_shift_space_expand_collapse:"{0}. Press shift space to expand and collapse.",menu_option_list:"Options list",menu_item_count:"Contains {0} items.",menu_collapsed:"{0} collapsed",menu_expanded:"{0} expanded.",modal_minimize:"Minimize modal",modal_maximize:"Maximize modal",modal_dock:"Dock modal",modal_close:"Close modal",minimize:"Minimize",maximize:"Maximize",dock:"Dock",step_num:"Step {0} of {1}",load_more:"Load more",selected_date_a11y:"Selected date:",open_calendar_button_a11y:"Open calendar",close_calendar_button_a11y:"Close calendar",open_time_button_a11y:"Open time picker",close_time_button_a11y:"Close time picker",set_current_date_and_time_a11y:"Set to now",set_current_date_a11y:"Set to today",clear_current_date_and_time:"Clear current date and time",clear_current_date:"Clear current date",clear_current_time:"Clear current time",picker_next_month:"Next month",picker_prev_month:"Previous month",picker_jump_to_month_and_year:"Jump to month and year selection",calendar_assist:"Use cursor keys to navigate dates",calendar:"Calendar",choose_date:"Choose date",choose_date_and_time:"Choose date and time",choose_week:"Choose week",set_current_week_ally:"Set to current week",auto_focus_next_input_description:"Automatically moves focus to next input when current input is completed.",year_input_description:"You may also enter a four-digit year manually.",boolean_display_true_label:"Yes",boolean_display_false_label:"No",step_changed_to_name:"Step changed to {0}",go_to_previous_step:"Go to previous step - {0}",measured_in:"measured in {0}",increase_value_by:"Increase value by {0}",decrease_value_by:"Decrease value by {0}",stepper_instructions:"To set the value use the up and down arrow keys or type the value",banner_dismiss_button_label_a11y:"Dismiss banner",file_upload_text_main:"Drop or {0}",file_upload_text_one:"choose a file",file_upload_text_multiple:"choose files",download_file:"Download {0}",preview_file:"Preview {0}",open_file_in_new_tab:"Open {0} in new tab",upload_failed:"{0} upload failed with {1}",uploading_file:"uploading {0}",number_of_items:{zero:"No items",one:"{0} item",two:"{0} items",few:"{0} items",many:"{0} items",other:"{0} items"},attach_files:"Attach files",attach_review:"Attach or review",files_uploaded:{zero:"No files uploaded",one:"{0} file uploaded successfully",two:"{0} files uploaded successfully",few:"{0} files uploaded successfully",many:"{0} files uploaded successfully",other:"{0} files uploaded successfully"},files_upload_failed:{zero:"No files failed to upload",one:"{0} file failed to upload",two:"{0} files failed to upload",few:"{0} files failed to upload",many:"{0} files failed to upload",other:"{0} files failed to upload"},download_all:"Download all",my_current_location_button_a11y:"Use my current location",location_input_placeholder:"Enter a location",location_not_found_text:"Location not found",exact_location:"Exact location",allow_location_permissions_text:"To get current location, allow location permissions for this app",location_info:"Location info",advanced_search:"Advanced search",recent_searches:"Recent searches",search_instructions:"Use arrow keys to move up and down the suggested results.",search_in:"Search in",search_in_noun:"Search in {0}",action_from_summarylist_heading:"{0} from {1}",selected_search_filter:"Filter search by: {0}",utilities_label:"Utilities",utilities_summary:"Utilities summary",expand_summary:"Expand summary",collapse_summary:"Collapse summary",expand_utilities_panel:"Expand utilities",collapse_utilities_panel:"Collapse utilities",primary_summary_fields:"Primary summary fields",summary_fields:"Summary fields",current_case:"Current case",case_type_icon:"{0} - icon",case_type:"Case type",case_tabs:"Tabs for current case",update_available:"Update available",close_preview:"Close preview",preview_error:"Unable to load preview",previewed_case:"Previewed case",case_preview_tabs:"Tabs for previewed case",agent_switcher:"{0}, agent switcher",message_pega_gen_ai_coach:"Your message",write_message:"Write a message",ai_disclaimer:"Verify AI-generated content for accuracy.",suggestions:"Suggestions",you:"You",agent:"Agent",chat_with_ai:"Chat with AI",agent_noun:"{0} agent",welcome_text:"How can I help you?",start_chat:"Start chat",starter_message:"Starter message",ask_coach:"Ask {0}",thinking:"Thinking",analyzing_data_sources:"Analyzing data sources",generating_response:"Generating response",double_checking_results:"Double checking results",finalizing_response:"Finalizing response",response_generated:"Response generated",good_response:"Good response",bad_response:"Bad response",share_feedback:"Share feedback",interaction_message:"Use the left and right arrow keys to navigate between interactive elements in the message",pega_genAI:"Pega GenAI",suggestions_in_message:"with {0} suggestions",you_asked:"You asked {0}",no_conversations_found:"No conversations found",conversation:"Conversation",back:"Back",add_attachment:"Add attachment",attachment_upload_in_progress:"Attachment upload in progress",attachment_added:"Attachment added",send_message:"Send message",accept_suggestion_button_a11y:"Accept AI suggestion",reject_suggestion_button_a11y:"Reject AI suggestion",suggestion_info:"Accept AI suggestion?",suggestion_assist:"Either press Enter to accept the AI suggestion or edit the value to reject it",country_code:"Country code",phone_number:"Phone number",select_country_code:"Select country code",enter_a_number:"Enter a number",skip_navigation_menu_label:"Skip navigation menu",tab_error_description:"Has errors",tab_error_tooltip:"{0} has errors",all_tabs:"All tabs",return_to_tab_list:"Return to tab list",non_previewable:"{0} file can't be previewed",content_load_error:"Error loading content",description_unavailable:"Description unavailable",shortcut_JumpToToast:"Jump to toast",shortcut_DismissToast:"Dismiss toast",configurable_layout_instructions:"Configurable layout. Use tab key to select an item. Use arrow keys to move it to a new position. Use arrow keys with shift to resize the item in the given direction.",page_number:"Page {0}",drag_handle_activate_description:"Press Space to activate dragging.",drag_handle_drop_description:"Press Space again to drop.",drag_handle_cancel_description:"Press Escape to cancel dragging.",drag_handle_vertical_description:"Use arrow keys to drag up or down.",drag_handle_horizontal_description:"Use arrow keys to drag left or right.",drag_handle_tab_description:"Use Tab and Shift Tab to drag to adjacent lists.",assignments:"Assignments",case:"Case",assignment:"Assignment",assignment_item_assignee:"Assignee:",assignment_item_urgency:"Urgency:",assignment_announcement_label:"Assignment:",case_announcement_label:"Case: {0}",assignments_go_announcement_label:"Go - {0}",assignments_sla:"Due {0}",key_navigation_instruction:"Use Enter key to navigate by Tab. Escape to navigate using arrow keys. Recommend using focus mode in screen reader for optimal experience.",article_list_label_a11y:"Article list",article_list_filter_label_a11y:"Article lists filter",article_list_header_submit_label:"Submit",clear_filters:"Clear filters",suggest_article:"Suggest article",suggested:"Suggested",followed:"Followed",buddy:"Buddy",disclaimer:"Disclaimer",references:"References",result_available:"Result available",ask:"Ask",error_message:"Unable to retrieve data at the moment. Please try again.",add_a_comment:"Add a comment",score:"Score {0}",relevance_score:"Relevance score {0}",ai_suggestions:"AI suggestions",auto_answered:"Auto answered",questions_detected:"Questions detected",past_answered_questions:"Past answered questions",not_relevant_questions:"Not relevant questions",back_to_ai_suggestions:"Back to AI suggestions",confidence:"Confidence",ask_buddy:"Ask buddy",ai_generated:"AI generated",no_articles_found:"No articles found",semantic_initial_message:"Search results will appear here",confirmation_options:"Confirmation options",search_filter:"Filters - search articles",article_label_a11y:"Article",article_related_links:"Related links",article_more_like_this:"More like this",article_thank_you_for_your_feedback:"Thank you for your feedback.",article_attachments:"Attachments",likes:"Likes",dislikes:"Dislikes",like:"Like",dislike:"Dislike",confirmation_whats_next:"What's next",confirmation_open_tasks:"Open tasks",search_results_clear_all_filters:"Clear all filters",search_results_clear_filter:"Clear {0} filter",search_results_active_filters:"Active filters",search_filter_update_message:"Modifying filters will update search results",add_stakeholders:"Add stakeholder",edit_stakeholder:"Edit stakeholder",view_stakeholders:"Stakeholders",stakeholders_role:"Role",stakeholders:{zero:"{0} stakeholders",one:"{0} stakeholder",two:"{0} stakeholders",few:"{0} stakeholders",many:"{0} stakeholders",other:"{0} stakeholders"},edit_tags:"Edit tags",tags:"Tags",view_profile:"View profile",timeline_toolbar_sort_descending:"Newest first",timeline_toolbar_sort_ascending:"Oldest first",timeline_toolbar_group_date:"By day",timeline_toolbar_group_monthyear:"By month",timeline_toolbar_group_quarteryear:"By quarter",timeline_toolbar_group_year:"By year",timeline_toolbar_group_none:"Off",app_announcement_dismiss_button_label_a11y:"Hide until next update",app_announcement_details_list_header:"Announcements",app_announcement_whats_new_button_label:"See what's new",stages_label:"Case stages",stages_see_full_lifecycle:"See full lifecycle",stages_case_lifecycle:"{0} lifecycle",stages_default_case_lifecycle:"Case lifecycle",stages_stage_label:"Stage {0}, {1}",stages_description:"Use horizontal arrow keys to navigate.",predictions:"Predictions",all_predictions:"All predictions",learn_more:"Learn more",tasks:"Tasks",tasks_added:{zero:"No tasks added",one:"{0} task added",two:"{0} tasks added",few:"{0} tasks added",many:"{0} tasks added",other:"{0} tasks added"},tasks_removed:{zero:"No tasks removed",one:"{0} task removed",two:"{0} tasks removed",few:"{0} tasks removed",many:"{0} tasks removed",other:"{0} tasks removed"},interaction_time_expired:"The time to accept the interaction has expired.",interaction_time_remaining:{zero:"The time to accept the interaction has expired.",one:"{0} second remaining to accept the interaction.",two:"{0} seconds remaining to accept the interaction.",few:"{0} seconds remaining to accept the interaction.",many:"{0} seconds remaining to accept the interaction.",other:"{0} seconds remaining to accept the interaction."},interaction_shortcut_goto_info:"Press {0} to review.",interaction_shortcut_dismiss_info:"Press {0} to dismiss.",shortcut_GoToIncomingInteraction:"Go to incoming interaction popup.",shortcut_DismissIncomingInteraction:"Dismiss incoming interaction popup.",rte_heading_style:"Heading style",rte_heading_style_normal:"Normal",rte_heading_style_heading_1:"Heading 1",rte_heading_style_heading_2:"Heading 2",rte_heading_style_heading_3:"Heading 3",rte_heading_style_heading_4:"Heading 4",rte_heading_style_unknown:"Unknown",rte_bold:"Bold",rte_italic:"Italic",rte_strike_through:"Strike-through",rte_cut:"Cut",rte_copy:"Copy",rte_paste:"Paste",rte_bulleted_list:"Bulleted list",rte_numbered_list:"Numbered list",rte_indent:"Indent",rte_unindent:"Unindent",rte_table:"Table",rte_link:"Link",rte_link_text:"Text",rte_link_url:"URL",rte_image:"Insert image",rte_invalid_html:"Invalid HTML",rte_insert_field:"Insert field",rte_invalid_url:"Invalid URL",rte_change_text_format:"Change text format to",rte_toggle_unordered_list:"Toggle unordered list",rte_indent_selection:"Indent selection",rte_unindent_selection:"Unindent selection",rte_toolbar_instructions:"Hit tab to enter the editor toolbar",rte_text_formatting_toolbar:"Text formatting toolbar",rte_image_description_info:"Provides an alternate (ALT) description for the visually impaired",rte_image_custom_size:"Custom size",rte_width_in_pixels:"Width (in pixels)",rte_height_in_pixels:"Height (in pixels)",rte_image_settings:"Image settings",rte_edit_image:"Edit image {0}",rte_delete_image:"Delete image {0}",rte_image_key_command:"Press enter to edit the image",expand_trail:"Expand trail",collapse_trail:"Collapse trail",copy_to:"Copy to",subject_label:"Subject: {0}",search_results:"Search results",get_next_email:"Get next email",feed_post_type:"Post type",feed_new_post:"Message",feed_new_post_submit:"Post",feed_new_comment:"New comment",feed_new_comment_submit:"Comment",feed_attach_files:"Attach files",feed_post_actions_menu:"More",feed_edit_post:"Edit post",feed_edit_comment:"Edit comment",feed_edit_posted:"Post edited",feed_edit_commented:"Comment edited",feed_context:"in {0}",feed_liked_by:"Liked by {0}",feed_likes:"Likes",feed_visibility:"Visibility",feed_private:"Private",feed_public:"Public",feed_visible_to:"Visible to",feed_users:"Users",feed_mode:"Mode",feed_like_label:"Like",feed_unlike_label:"Unlike",feed_post_likes:{zero:"No likes",one:"{0} like",two:"{0} likes",few:"{0} likes",many:"{0} likes",other:"{0} likes"},feed_comment_label:"Comment",feed_post_comments:{zero:"No comments",one:"{0} comment",two:"{0} comments",few:"{0} comments",many:"{0} comments",other:"{0} comments"},feed_attachments_added:{zero:"No attachments added",one:"{0} attachment added",two:"{0} attachments added",few:"{0} attachments added",many:"{0} attachments added",other:"{0} attachments added"},feed_attachments_removed:{zero:"No attachments removed",one:"{0} attachment removed",two:"{0} attachments removed",few:"{0} attachments removed",many:"{0} attachments removed",other:"{0} attachments removed"},feed_post_liked:"Post has been liked",feed_post_deliked:"Post has been deliked",feed_post_removed:"Post has been removed",feed_comment_added:"Comment added",feed_comment_removed:"Comment removed",showing_num_of_num:"Showing {0} of {1}",feed_new_post_added:{zero:"No posts added",one:"{0} post added",two:"{0} posts added",few:"{0} posts added",many:"{0} posts added",other:"{0} posts added"},new_item_added:{zero:"No items added",one:"{0} new item added",two:"{0} new items added",few:"{0} new items added",many:"{0} new items added",other:"{0} new items added"},loading_post:"Loading post",mention_type:"Mention a {0}",markdown_syntax:"Markdown syntax",markdown_instructions:"Add special characters around your text to apply formatting.",markdown_styles:"Style",markdown_images:"Images",markdown_links:"Links",markdown_lists:"Lists",markdown_headings:"Headings",markdown_code:"Code",markdown_code_block:"Code block",markdown_bold:"Bold",markdown_italic:"Italic",markdown_blockquote:"Blockquote",markdown_heading_level:"Heading {0}",markdown_ordered_list:"Ordered list",markdown_ordered_sublist:"Ordered sublist",markdown_unordered_list:"Unordered list",markdown_unordered_sublist:"Unordered sublist",markdown_link_text:"Link text",markdown_link_url:"Link url",markdown_alt_text:"Alt text",markdown_image_url:"Image url",scroll_to_latest_message:"Scroll to latest message",scroll_to_unread_messages:"Scroll to unread messages",suggested_replies_current_of_total:"Suggested reply {0} of {1}",suggested_replies:"Suggested replies",confidence_percentage:"{0}% confidence",next_suggested_reply:"Next suggested reply",prev_suggested_reply:"Previous suggested reply",dismiss_suggested_replies:"Dismiss suggested replies",message_sent:"Message sent",temporarilyUnavailable:"Temporarily unavailable",available:"Available",unavailable:"Unavailable",authenticated:"Authenticated",not_authenticated:"Not authenticated",context:"Context",context_data:"Context data",bot:"Bot",is_typing:"{0} is typing {1}",chat_message_at_timestamp:"{0} at {1}.",sender_replied_message:"{0} replied {1}",chat_attachments:"{0} with {1} attachments",chat_links:"{0} with {1} links",chat_message_status:"Message {0}",opened:"Opened",undeliverable:"Undeliverable",new_message:"New message",attachments:"attachments",attachments_x_of_y:"attachment {0} of {1}",edit_current_template:"Edit suggested reply {0} of {1}",send_current_template:"Send suggested reply {0} of {1}",expand_suggested_replies:"Expand suggested replies",collapse_suggested_replies:"Collapse suggested replies",replies_count:"{0} of {1}",no_suggestion:"No suggestions",suggestion:"Suggestion",suggested_reply_copied_to_input_field:"Suggested reply copied to input field",dialogue:"Dialogue",suggest_reply:"Suggest reply",join_conversation:"Join conversation",unique_entities:{zero:"No unique entities",one:"{0} unique entity",two:"{0} unique entities",few:"{0} unique entities",many:"{0} unique entities",other:"{0} unique entities"},more_count:"{0} more…",other_responses:"Other responses",empty_search:"Enter a search term",new_messages:"New messages",earlier_transcripts:"Earlier transcripts",send:"Send",compose_label:"Compose",save_as_draft:"Save as draft",enter_message:"Enter message",download:"Download",close_chat_utility:"Close chat utility",email_account:"Email account",subject:"Subject",to:"To",from:"From",cc:"Cc",bcc:"Bcc",date:"Date",reply:"Reply",reply_all:"Reply all",response_templates:"Response templates",forward:"Forward",email:"Email",email_message:"Email message",email_filters:"Email filters",unread_email_count:"{0} of {1} unread",priority:"Priority",inbox:"Inbox",insert:"Insert",email_add_attachment:"Add attachment",email_add_attachment_count:"Add attachment, the maximum number of attachments allowed is {0}.",email_disable_attachment:"Adding attachments are disabled, the maximum number of attachments allowed is {0}.",email_remove_attachment:"Remove attachment",loading_email:"Loading email",draft:{zero:"No drafts",one:"{0} draft",two:"{0} drafts",few:"{0} drafts",many:"{0} drafts",other:"{0} drafts"},undelivered:"Undelivered",drafts:"drafts",unread:"unread",mailing_details:"mailing details",call_panel_heading:"Pega call",call_panel_make_new_call:"Make new call",call_panel_agent_status:"Status",call_panel_pause_call_menu_item:"Pause call",call_panel_resume_call_menu_item:"Resume call",call_panel_mute_mic_menu_item:"Mute microphone",call_panel_unmute_mic_menu_item:"Unmute microphone",call_panel_call_on_hold:"On hold {0}",call_panel_consult_call_menu_item:"Consult",call_panel_transfer_call_menu_item:"Transfer",call_panel_menu_item_call_only:"Call only",call_panel_menu_item_call_with_interaction:"Call and interaction",call_panel_send_dtmf_menu_item:"Send DTMF",call_panel_conference_call_menu_item:"Conference",call_panel_hangup_call_menu_item:"Hang up",call_panel_disconnect_participant:"Disconnect participant",call_panel_contacts_add_to_favorites:"Add to favorites",call_panel_contacts_remove_from_favorites:"Remove from favorites",call_panel_contacts_call_button_label:"Call",call_panel_contacts_list_heading:"Contacts",call_panel_contacts_favorites_heading:"Favorites",call_panel_contacts_dial_pad_heading:"Dial pad",call_panel_new_call_heading:"New call",call_panel_interaction_transfer_heading:"Transfer initiated",call_panel_interaction_transfer_complete_button_label:"Complete transfer",call_panel_incoming_call:"Incoming call…",call_panel_answer_call:"Answer",call_panel_conference_heading:"Conference call",call_panel_conference_call_and_interactions_heading:"Conference by call and interaction",call_panel_consult_heading:"Consult by call",call_panel_consult_call_and_interactions_heading:"Consult by call and interaction",call_panel_transfer_heading:"Transfer call",call_panel_transfer_call_and_interactions_heading:"Transfer call and interaction",call_panel_conference_submit:"Conference",call_panel_transfer_submit:"Transfer",call_panel_consult_submit:"Consult",call_panel_handover_reason_label:"Reason",call_panel_handover_to_label:"To",call_panel_handover_comments_label:"Comments",call_panel_handover_call_option_label:"Call option",call_panel_handover_call_only_option:"Call only",call_panel_handover_call_and_interaction_option:"Call and interaction",call_panel_handover_interaction_label:"Interaction",call_panel_merge_call_menu_item:"Merge",call_panel_handoff_call_menu_item:"Hand off",call_panel_send_dtmf_heading:"Send DTMF",call_panel_expand:"Expand call control panel",call_panel_collapse:"Collapse call control panel",call_panel_nav_label:"Phone panel",dial_pad_keyboard:"Dial pad keyboard",dial_pad_phone_number_input_label:"Phone number input",dial_pad_call_button_label:"Call {0}",attestation_statement:"I attest that I have spoken this as written",script_adherence_error:"Dialog should be adhered to before submission",accept_all:"Accept all",select_multiple:"Select multiple",dismiss_case:"Dismiss case",task_manager_add_case:"Add case",task_manager_wrap_up:"Wrap up",task_manager_cases:"Cases",add_cases:"Add cases",open_cases:"Open cases",resolved_cases:"Resolved cases",no_picker_items:"No {0}",selected_picker_items:"Selected {0}",no_selected_picker_items:"No selected {0}",search_picker_items:"Search {0}",case_picker_close:"Close case picker",case_manager_overflow_menu:"All cases",continue_label:"Continue",continue_label_a11y:"Continue with {0}",review_label:"Review",review_label_a11y:"Review {0}",dismiss_label:"Dismiss",dismiss_label_a11y:"Dismiss {0}",task_manager_picker_add_label:{zero:"No items to add",one:"Add {0} new item",two:"Add {0} new items",few:"Add {0} new items",many:"Add {0} new items",other:"Add {0} new items"},show_detected_entities:"Show detected entities",nothing_detected_yet:"Nothing detected yet",ai_detected_entities:"AI detected entities",close_conversation:"Close conversation",shortcut_AddTask:"Open task picker",shortcut_WrapUp:"Wrap up interaction",close_interaction:"Close interaction",live_transcript:"Live transcript",open_live_transcript:"Open live transcript",close_live_transcript:"Close live transcript",download_live_transcript:"Download live transcript",transcripts:"Transcripts",verbatim:"Verbatim",dialog:"Dialog",download_transcript:"Download transcript",follow_up_tasks:"Follow-up tasks",add_follow_up_task:"Add follow-up task",agents_utterance:"Agent's commitment in context",detected_entities:"Detected entities",task_deleted:"Deleted",no_analytics_collected:"No analytics were collected during this interaction",feedback_not_available:"Feedback not available",due_on:"Due on {0}",interaction_summary:"Interaction summary",edit_interaction_summary:"Edit interaction summary",cancel_editing_interaction_summary:"Cancel editing interaction summary",save:"Save",save_interaction_summary:"Save interaction summary",reason_for_transfer:"Reason for transfer",reason_cannot_be_blank:"Reason for transfer cannot be blank",ai_suggested_summary:"AI suggested summary",summary_cannot_be_blank:"Summary cannot be blank",interaction_Summary_not_available:"Interaction summary not available",sentiment_positive:"Positive",sentiment_negative:"Negative",sentiment_neutral:"Neutral",no_recommendations:"No recommendations",items_added_to_previous_list:"Items added to previous list",items_added_to_current_list:"Items added to current list",condition_builder_advanced_condition_label:"Advanced condition",condition_builder_advanced_condition_placeholder:"Advanced condition",condition_builder_advanced_mode_button_label:"Advanced mode",condition_builder_basic_mode_button_label:"Basic mode",condition_builder_advanced_mode_button_aria_label:"Switch to advanced mode",condition_builder_basic_mode_button_aria_label:"Switch to basic mode",condition_builder_mode_switch:"Mode switched",condition_builder_advanced_condition_tooltip:"A logical expression representing an advanced condition. Use numbers like 1,2,3,… to represent different condition rows. Use {0} operators and parentheses to construct advanced conditions. Example: {1}",condition_builder_condition_select_info_default:"No selection",condition_builder_possible_values_label:"Values",condition_builder_possible_values_error:"Error retrieving values",condition_builder_multi_selection_placeholder:"Select values",condition_builder_single_selection_placeholder:"Select value",condition_builder_switch_banner_text:"Switching from advanced mode can reset all AND/OR/NOT operators. Do you want to continue?",condition_builder_confirm_button_label:"OK",condition_builder_empty_selection_error_text:"No selection",condition_builder_empty_value_text:"Empty value",condition_builder_compare_with:"Compare with {0}",condition_builder_compare_with_another_field:"Another field",condition_builder_compare_with_parameter:"Parameter",condition_builder_compare_with_relative_date:"Relative date",condition_builder_compare_with_text_value:"Text value",condition_builder_compare_with_numeric_value:"Numeric value",condition_builder_compare_with_date_value:"Date value",condition_builder_compare_with_time_value:"Time value",condition_builder_invalid_time_period:"Invalid time period",condition_builder_invalid_relative_date:"Invalid relative date",condition_builder_invalid_value:"Invalid value",condition_builder_invalid_values:"Invalid values",condition_builder_invalid_time:"Invalid time",condition_builder_invalid_date:"Invalid date",condition_builder_invalid_number:"Invalid number",condition_builder_invalid_date_range:"Invalid date range",condition_builder_invalid_time_range:"Invalid time range",condition_builder_invalid_number_range:"Invalid range",condition_builder_select_placeholder:"Select…",condition_builder_row:"Row {0}",condition_builder_hour_number_of_day:"{0} (hour of day)",condition_builder_rhs_with_time_only_input:"Rhs with Time only input",condition_builder_rhs_with_date_only_input:"Rhs with Date only input",condition_builder_rhs_with_date_time_input:"Rhs with Date Time input",condition_builder_rhs_with_csv_input:"Rhs with csv input",condition_builder_no_selection:"No selection",condition_builder_enter_csv_placeholder:"Enter comma separated values",condition_builder_day_number_of_month:{zero:"{0}th day of the month",one:"{0}st day of the month",two:"{0}nd day of the month",few:"{0}rd day of the month",many:"{0}th day of the month",other:"{0}th day of the month"},condition_builder_year:"Year(s)",condition_builder_quarter:"Quarter(s)",condition_builder_month:"Month(s)",condition_builder_week:"Week(s)",condition_builder_day:"Day(s)",condition_builder_hour:"Hour(s)",condition_builder_minute:"Minute(s)",condition_builder_second:"Second(s)",condition_builder_date_function_hour_of_day:"Hour of day",condition_builder_date_function_month_of_year:"Month of year",condition_builder_date_function_day_of_month:"Day of month",condition_builder_date_function_day_of_week:"Day of week",condition_builder_date_part:"Date part",condition_builder_current_second:"Current second",condition_builder_current_minute:"Current minute",condition_builder_current_hour:"Current hour",condition_builder_current_day:"Current day",condition_builder_current_week:"Current week",condition_builder_current_month:"Current month",condition_builder_current_quarter:"Current quarter",condition_builder_current_year:"Current year",condition_builder_last_X_seconds:{zero:"Current second",one:"Last second",two:"Last {0} seconds",few:"Last {0} seconds",many:"Last {0} seconds",other:"Last {0} seconds"},condition_builder_last_X_minutes:{zero:"Current minute",one:"Last minute",two:"Last {0} minutes",few:"Last {0} minutes",many:"Last {0} minutes",other:"Last {0} minutes"},condition_builder_last_X_hours:{zero:"Current hour",one:"Last hour",two:"Last {0} hours",few:"Last {0} hours",many:"Last {0} hours",other:"Last {0} hours"},condition_builder_last_X_days:{zero:"Current day",one:"Last day",two:"Last {0} days",few:"Last {0} days",many:"Last {0} days",other:"Last {0} days"},condition_builder_last_X_weeks:{zero:"Current week",one:"Last week",two:"Last {0} weeks",few:"Last {0} weeks",many:"Last {0} weeks",other:"Last {0} weeks"},condition_builder_last_X_months:{zero:"Current month",one:"Last month",two:"Last {0} months",few:"Last {0} months",many:"Last {0} months",other:"Last {0} months"},condition_builder_last_X_quarters:{zero:"Current quarter",one:"Last quarter",two:"Last {0} quarters",few:"Last {0} quarters",many:"Last {0} quarters",other:"Last {0} quarters"},condition_builder_last_X_years:{zero:"Current year",one:"Last year",two:"Last {0} years",few:"Last {0} years",many:"Last {0} years",other:"Last {0} years"},condition_builder_next_X_seconds:{zero:"Current second",one:"Next second",two:"Next {0} seconds",few:"Next {0} seconds",many:"Next {0} seconds",other:"Next {0} seconds"},condition_builder_next_X_minutes:{zero:"Current minute",one:"Next minute",two:"Next {0} minutes",few:"Next {0} minutes",many:"Next {0} minutes",other:"Next {0} minutes"},condition_builder_next_X_hours:{zero:"Current hour",one:"Next hour",two:"Next {0} hours",few:"Next {0} hours",many:"Next {0} hours",other:"Next {0} hours"},condition_builder_next_X_days:{zero:"Current day",one:"Next day",two:"Next {0} days",few:"Next {0} days",many:"Next {0} days",other:"Next {0} days"},condition_builder_next_X_weeks:{zero:"Current week",one:"Next week",two:"Next {0} weeks",few:"Next {0} weeks",many:"Next {0} weeks",other:"Next {0} weeks"},condition_builder_next_X_months:{zero:"Current month",one:"Next month",two:"Next {0} months",few:"Next {0} months",many:"Next {0} months",other:"Next {0} months"},condition_builder_next_X_quarters:{zero:"Current quarter",one:"Next quarter",two:"Next {0} quarters",few:"Next {0} quarters",many:"Next {0} quarters",other:"Next {0} quarters"},condition_builder_next_X_years:{zero:"Current year",one:"Next year",two:"Next {0} years",few:"Next {0} years",many:"Next {0} years",other:"Next {0} years"},condition_builder_previous_X_seconds:{zero:"Current second",one:"Previous second",two:"Previous {0} seconds",few:"Previous {0} seconds",many:"Previous {0} seconds",other:"Previous {0} seconds"},condition_builder_previous_X_minutes:{zero:"Current minute",one:"Previous minute",two:"Previous {0} minutes",few:"Previous {0} minutes",many:"Previous {0} minutes",other:"Previous {0} minutes"},condition_builder_previous_X_hours:{zero:"Current hour",one:"Previous hour",two:"Previous {0} hours",few:"Previous {0} hours",many:"Previous {0} hours",other:"Previous {0} hours"},condition_builder_previous_X_days:{zero:"Current day",one:"Previous day",two:"Previous {0} days",few:"Previous {0} days",many:"Previous {0} days",other:"Previous {0} days"},condition_builder_previous_X_weeks:{zero:"Current week",one:"Previous week",two:"Previous {0} weeks",few:"Previous {0} weeks",many:"Previous {0} weeks",other:"Previous {0} weeks"},condition_builder_previous_X_months:{zero:"Current month",one:"Previous month",two:"Previous {0} months",few:"Previous {0} months",many:"Previous {0} months",other:"Previous {0} months"},condition_builder_previous_X_quarters:{zero:"Current quarter",one:"Previous quarter",two:"Previous {0} quarters",few:"Previous {0} quarters",many:"Previous {0} quarters",other:"Previous {0} quarters"},condition_builder_previous_X_years:{zero:"Current year",one:"Previous year",two:"Previous {0} years",few:"Previous {0} years",many:"Previous {0} years",other:"Previous {0} years"},condition_builder_time_period_label:"Time period",condition_builder_time_period_last:"Last",condition_builder_time_period_current:"Current",condition_builder_time_period_previous:"Previous",condition_builder_time_period_next:"Next",condition_builder_value_label:"Value",condition_builder_field_label:"Field",condition_builder_comparator_label:"Conditional operator",condition_builder_comparator_is_true:"is true",condition_builder_comparator_is_false:"is false",condition_builder_comparator_is_equal_to:"is equal to",condition_builder_comparator_is_not_equal_to:"is not equal to",condition_builder_comparator_is_null:"is null",condition_builder_comparator_is_not_null:"is not null",condition_builder_comparator_is_in_list:"is in list",condition_builder_comparator_is_not_in_list:"is not in list",condition_builder_comparator_starts_with:"starts with",condition_builder_comparator_not_starts_with:"not starts with",condition_builder_comparator_ends_with:"ends with",condition_builder_comparator_not_ends_with:"not ends with",condition_builder_comparator_contains:"contains",condition_builder_comparator_not_contains:"not contains",condition_builder_comparator_between:"between",condition_builder_comparator_not_between:"not between",condition_builder_comparator_greater_than:"greater than",condition_builder_comparator_greater_than_or_equals:"greater than or equals",condition_builder_comparator_lower_than:"lower than",condition_builder_comparator_lower_than_or_equals:"lower than or equals",condition_builder_comparator_after:"after",condition_builder_comparator_on_or_after:"on or after",condition_builder_comparator_before:"before",condition_builder_comparator_on_or_before:"on or before",dev_mode:"Dev mode",expand_navigation:"Expand navigation",collapse_navigation:"Collapse navigation",switch_to:"Switch to…",collapse_search:"Collapse search",branch_with_no_changes:"{0} with no changes",branch_with_no_potential_conflicts:"{0} with no potential conflicts and {1} unmerged changes",branch_with_potential_conflicts:"{0} with potential conflicts",style:"Style",color:"Color",opacity:"Opacity",file_url:"File URL",size:"Size",position:"Position",repeat:"Repeat",image_preview:"Image preview",direction:"Direction",color_stops:"Color stops",add_stops:"Add stops",gradient_preview:"Gradient preview",location:"Location",delete_stop:"Delete stop",edit_background_picker_label:"Edit {0}",automatic:"Automatic",transparent:"Transparent",solid_color:"Solid color",image:"Image",linear_gradient:"Linear gradient",radial_gradient:"Radial gradient",conic_gradient:"Conic gradient",auto:"Auto",cover:"Cover",contain:"Contain",center:"Center",top:"Top",right:"Right",left:"Left",bottom:"Bottom",top_left:"Top left",top_right:"Top right",bottom_right:"Bottom right",bottom_left:"Bottom left",no_repeat:"No repeat",repeat_image:"Repeat",repeat_x:"Repeat x",repeat_y:"Repeat y",space:"Space",round:"Round",file_url_error:"Enter a valid URL",color_preview:"Color preview",parallel:"Parallel",stage:"Stage",process:"Process",alternate_stage:"Alternate stage",add_stage:"Add stage",add_process:"Add process",add_alternate_stage:"Add alternate stage",stage_name:"{0} stage",process_name:"{0} process",step_name:"{0} step",item_error:"{0} error",step_name_error:"{0} step has configuration error",stage_name_error:"{0} stage has configuration error",process_name_error:"{0} process has configuration error",wait_for_user_action:"{0} - wait for a user action",resolve_case:"{0} - resolve case",collect_info:"Collect info",decision:"Approve/Reject",send_email:"Send email",add_node:"Add node",search_nodes:"Search nodes",delete_step:"This step has multiple outcomes, are you sure want to delete this step?",delete_decision_step:"Select outcome that you want to retain. The remaining highlighted outcomes will be deleted",delete_step_title:"Delete step",delete_step_outcome:"Outcome to keep",delete_all_outcomes:"None (delete all outcomes)",delete_step_error:'This step can\'t be deleted as the outcome selected has a "Go to" step.',delete_referenced_step_error:'This step can\'t be deleted as it is referenced by a "Go to" step.',delete_connector_error:"Connector cannot be deleted unless Goto step is deleted from all branches",applies_to:"Applies to",path:"Path",current_context:"Current context: {0}",fieldref_open_close:"Arrow down to open, press escape to close.",fieldref_search_instructions:"Start typing to search",fieldref_open_list_button_a11y:"Open field reference list",fieldref_close_list_button_a11y:"Close field reference list",constant_description:"The value that is entered here will not change.",expression_description:"Set this value using advanced custom logic.",rule_description:"Set this value using a Rule.",constant_label:"Static ({0})",expression_label:"Custom Logic",rule_label:"Source from Library",field_reference_label:"Source from a field",field_reference_description:"Set this value by referencing a field.",value_type:"Value type",dynamicInput_format_Text:"Text","dynamicInput_format_Text (paragraph)":"Text (paragraph)",dynamicInput_format_Boolean:"Boolean",dynamicInput_format_Currency:"Currency",dynamicInput_format_Percentage:"Percentage",dynamicInput_format_Integer:"Integer",dynamicInput_format_Decimal:"Decimal",dynamicInput_format_Phone:"Phone",dynamicInput_format_DateTime:"DateTime",dynamicInput_format_Date:"Date",dynamicInput_format_Time:"Time",zoom_level:"Zoom level",close_configuration_panel:"Close configuration panel",clear_object_summary:"Clear {0} selection",create_in_new_tab:"Create new, opens in new tab",expression_editor:"Expression editor",output_parameters:"Output parameters",input_parameters:"Input parameters",expression_input:"Expression input",no_app_build:"There is no app build",build_app:"Build app",build_in_progress:"Building…",rebuild_app:"Rebuild app",download_app:"Download app",qr_code_not_available:"No QR code available yet",qr_code:"QR code",app_header_notifications_empty:"No notifications",app_header_notifications_loading:"Loading notifications",open_app_header_notifications:"Open notifications",open_app_header_drawer:"Open navigation menu",preview_frame:"Preview frame",open_in_new_window_text:"Open in new window",more_options:"More options",dev_tools:"dev tools",active_session_info:"Debugging for this session is active in another window",continue_debugging:"Continue debugging",delete_group:"Delete group",add_group:"Add group",add_sort:"Add sort",view_in_google_maps:"View in Google Maps",location_marker:"Location marker {0}",action_task:"Action task",task_object:"Task object",view_rule:"View rule",system_rule:"System rule",record_rule:"Record rule",portal_rule:"Portal rule",persona_rule:"Persona rule",permission_rule:"Permission rule",live_data_rule:"Live data rule",integration_system_rule:"Integration system rule",insight_rule:"Insight rule",field_rule:"Field rule",data_page_rule:"Data page rule",connector_rule:"Connector rule",configuration_rule:"Configuration rule",authenticate_rule:"Authenticate rule",when_logic:"When logic",validation_logic:"Validation logic",function_logic:"Function logic",decision_step_logic:"Decision step logic",case_wait:"Case wait object",case_stage:"Case stage object",case_sla:"Case SLA object",case_process:"Case process object",case_go_to:"Case go-to object",case_object:"Case object",set_automation:"Set automation",return_automation:"Return automation",for_each_automation:"For each automation",call_automation:"Call automation",append_automation:"Append automation",automation_object:"Automation object",ai_object:"AI object",additional_information:"Additional Information",field_picker_label:"Field",field_picker_placeholder:"Select Field...",editor_loading_message:"Loading editor...",custom_label:"Custom label",custom_caption:"Custom caption",add_label:"Add label",custom_add_label:"Custom add label",instruction_text_label:"Instruction text",paragraph_already_exists_error:"Paragraph rule with name {0} already exists",paragraph_create_modal_heading:"New Dynamic Text",paragraph_update_modal_heading:"Edit {0}",paragraph_name_label:"Name",paragraph_text_content_label:"Text",shared_rule:"This is a shared Rule.",creating_new_rule:"Creating new Rule...",updating_rule:"Updating Rule...",unsupported_rule_type_label:"Unsupported ruleType",unsupported_rule_type_description:"Unsupported rule type: '{0}'",create_new_record_failed:"Create new record failed",component_not_found_error:"The '{0}' component is missing. Check that it is added to the application.",component_not_found_error_with_type:"No components of type '{0}' were found.",component_not_found_error_with_subtype:"No components of subtype '{0}' were found.",component_not_found_error_with_type_and_subtype:"No components of type '{0}' and subtype '{1}' were found.",component_missing_error_status:"The '{0}' component is missing. Add it to the application or use the default component in the property panel.",field_does_not_exist_error:'Field "{0}" was not found. Check if it still exists and is marked as relevant.',configure_item:"Configure {0}: {1}",data_page_call_error:"Error occurred calling the data page. Data for {0} cannot be retrieved.",item_not_in_data_page:"{0} no longer exists in the data page.",sync_tabs_additional_info_enabling:"Enabling reveals the same tabs from the Full Page View.",sync_tabs_additional_info_tabs:"Otherwise, the following tabs will be shown:",location_field_label:"Location field",create_new_item:"Create new {0}",warning_color:"Warning - {0}",color_contrast_warning:"Fails WCAG 2.1 AA contrast when paired with these colors:",color_contrast_warning_non_solid:"WCAG 2.1 AA contrast must be manually verified when paired with non-solid colors:",has_compliance_warning:"{0} - has compliance warning",compliance_warning:"Compliance warning",gradient_warning:"WCAG 2.1 AA contrast must be manually verified for a non-solid color.",advanced_settings_toggle_btn:"{0} advanced settings",color_swatch_btn_label:"Set {0} to {1}",theme_preview_title:"Theme Preview",default_font_info:"Selection will override app header and heading fonts",custom_font_family:"{0} font family name",custom_font_family_error:"Font family can't be empty",fields_to_highlight:"Summary fields to highlight",first_field:"First field",first_n_fields:"First {0} fields",learn_about_primary_fields:"Learn more about Primary Fields",show_lifecycle:"Show Lifecycle",use_only_primary_fields:"Use only Primary Fields in Summary Panel",use_only_primary_fields_info:'"Use only Primary Fields" pre-populates and links the Full Object Display Rule with the Primary Fields configured in the Data Model tab.',new_tab_heading:"New Tab",creating_tab:"Creating Tab...",create_tab_failure_message:"Failed to create a Tab",loading_configure_dialog:"Loading configure dialog",delete_parameter_filter:"Delete parameter filter",insight_field_applied_on:"Insight field applied on",please_fill_the_required_fields:"Please fill the required fields",system_pages:"System pages",value_cannot_be_blank:"Value cannot be blank",valid_number_within_range:"Enter a valid number between {0} - {1}",expected_value:"Expected value {0}",invalid_value:"Invalid value",hide_icons_additional_info_first_sentence:"To ensure accessibility standards are met, color cannot be the only way of distinguishing information.",hide_icons_additional_info_second_sentence:"Visit {0} to learn more about the related accessibility guidelines.",wcag:"WCAG",add_to:"Add to {0}",namespace:"Namespace",decision_rule:"Decision",when_rule:"When",invalid_rule:"This Rule is no longer valid. Ensure it exists in the system.",invalid_rule_non_relevant_record:"This Rule is no longer valid. Ensure it exists in the system and is marked as a relevant record.",infinity_stack_overflow_error:"This View is currently configured to include itself. Please change configuration to prevent error.",expression_error_incorrect_data_type:"Incorrect datatype",expression_error_with_data_and_object_type:"Incorrect type, {0} of type {1} is required",expression_error_with_data_type:"Incorrect type, {0} is required",prompt_scope:"Scope",prompt_type:"Type",expression_wait_message:"Expression is being validated. Please wait a little and then click Save/Submit again.",expression_general_error:"Error Occurred in Expression Component",expression_datapage_general_error:"Error occurred on fetching {0}",expression_allowed_rules_error:"Only {0} are allowed",expression_empty_error:"Cannot be blank",ui_inspector:"UI Inspector",ui_inspector_iframe_title:"{0} - UI Inspector enabled",ui_inspector_metadata:"Metadata",ui_inspector_quick_info:"Quick info",ui_inspector_field_metadata:"Field metadata",ai_tracer:"AI tracer",agent_tracer_select_an_event:"Select an event",agent_tracer_total_processing_time:"Total processing time",agent_tracer_total_tokens:"Total tokens",agent_tracer_total_tool_calls:"Total tool calls",agent_tracer_total_llm_calls:"Total LLM calls",agent_tracer_agent_configuration:"Agent configuration",agent_tracer_agent_instruction:"Agent instruction",agent_tracer_user_query:"User query",agent_tracer_tools_to_be_invoked:"Tools to be invoked",agent_tracer_inputs:"Inputs",agent_tracer_output:"Output",agent_tracer_prerequisites:"Prerequisites",agent_tracer_pega_context:"Pega context",agent_tracer_data_from_all_sources:"Data sources",agent_tracer_complete_data_source:"Complete data source",agent_tracer_conversation_trace:"Conversation trace"},m=e=>Object.freeze({..._,...e}),h=m,f=m(),g=["ar","arc","ckb","dv","fa","ha","he","khw","ks","ps","ur","yi"],b=e=>g.includes(e.split("-")[0])?"rtl":"ltr";var y=r(9839),v=r(127),$=r(4680),w=r(2477),k=r(4853);class x extends HTMLElement{connectedCallback(){this.dispatchEvent(new Event("connect-disconnect",{bubbles:!1}))}disconnectedCallback(){this.dispatchEvent(new Event("connect-disconnect",{bubbles:!1}))}}customElements.get("pega-connected-watcher")||customElements.define("pega-connected-watcher",x);const A=y.A?navigator.language:"en",C=(0,o.createContext)({locale:A,direction:b(A),translations:f,themeMachine:u.qR,styleSheetTarget:v.A?document.head:void 0,portalTarget:v.A?document.body:void 0,loadedRef:{current:!1},renderNativeControls:!1,testIds:!0,mountedStyleSheetManagers:[],initialized:!1}),S=Symbol.for("@pega/cosmos-react-core.metadata"),P=new Set,E={version:"8.9.2",mountedConfigs:[],mountOrder:[],mountCount:{}};$.A&&(window.cosmos.instances||(window.cosmos.instances=[]),window.cosmos.instances.push(E),Array.isArray(window[S])&&(window.cosmos.instances.push(...window[S]),delete window[S]),window[S]||(window[S]={push:e=>{window.cosmos.instances?.push(e)}}));const T=(0,o.forwardRef)(function({children:e,locale:t,direction:r,translations:s,theme:l,disableDefaultFontLoading:c,styleSheets:u,styleSheetTarget:_,portalTarget:m,renderNativeControls:f,testIds:g,id:x},A){const S=$.A?window.cosmos.configurationContext??C:C,T=(0,o.useContext)(S),j=l?new p.A({theme:l,parent:T.themeMachine}):T.themeMachine,z=(0,o.useMemo)(()=>h({...T.translations,...s}),[T.translations,s]),[H,R]=(0,w.A)(),[I,L]=(0,w.A)(),[,O]=(0,o.useState)(null),N=(0,k.A)(R,A);(0,o.useEffect)(()=>{if(!I)return;const e=()=>{O(I.isConnected)};return I.addEventListener("connect-disconnect",e),()=>{I.removeEventListener("connect-disconnect",e)}},[I]);const[D,M]=(0,o.useMemo)(()=>{if(!v.A||!H?.isConnected)return[void 0,void 0];const e=H.getRootNode(),t=e instanceof ShadowRoot?e:document.head,r=e instanceof ShadowRoot?e:document.body,a=_??T.styleSheetTarget,o=m??T.portalTarget;return[e.contains(a??null)?a:t,e.contains(o??null)?o:r]},[H,H?.isConnected,_,m,T.styleSheetTarget,T.portalTarget]),q=(0,o.useMemo)(()=>!T.initialized||!(!H||H.getRootNode()===T.styleSheetTarget?.getRootNode()),[T.initialized,H]),F=q?[]:T.mountedStyleSheetManagers,U=(0,o.useMemo)(()=>!!F?.includes(i.ID),[F]);(0,o.useEffect)(()=>{const e=Symbol(x);return(e=>{P.add(e),E.mountedConfigs=[...P].map(e=>e.description??"Unknown");const t=e.description??"Unknown";E.mountOrder.push(t),t in E.mountCount||(E.mountCount[t]=0),E.mountCount[t]+=1})(e),()=>{(e=>{P.delete(e),E.mountedConfigs=[...P].map(e=>e.description??"Unknown")})(e)}},[x]);const W=q?(0,a.jsxs)(a.Fragment,{children:[!c&&D&&(0,n.createPortal)((0,a.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400..700;1,400..700&family=Inter:wght@400..700&family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,400..700&display=swap","data-cosmos-global-style":!0}),D),(0,a.jsx)(d,{}),e]}):(0,a.jsx)(a.Fragment,{children:e}),B=U?W:(0,a.jsx)(i.ID,{disableVendorPrefixes:!0,target:y.A&&D?.isConnected&&!navigator.userAgent.includes("jsdom")?D:void 0,children:W});return(0,a.jsxs)("div",{"data-config-root":!0,style:{display:"contents"},ref:N,children:[(0,a.jsx)(S.Provider,{value:{locale:t??T.locale,direction:r??(void 0!==t?b(t):T.direction),translations:z,themeMachine:j,styleSheetTarget:D,portalTarget:M,loadedRef:T.loadedRef,renderNativeControls:f??T.renderNativeControls,testIds:g??T.testIds,mountedStyleSheetManagers:U?F:[...F??[],i.ID],initialized:!0},children:(0,a.jsxs)(i.NP,{theme:j.theme,children:[u&&D&&(0,n.createPortal)(u.map(e=>(0,a.jsx)("link",{rel:"stylesheet",href:e,"data-cosmos-global-style":!0},e)),D),B]})}),(0,a.jsx)("pega-connected-watcher",{ref:L,style:{display:"none"}})]})}),j=T},1862:(e,t,r)=>{r.d(t,{A:()=>a});const a=e=>(e=e??document.body).offsetWidth},2365:(e,t,r)=>{r.d(t,{A:()=>a});const a=e=>[e.scrollWidth>e.clientWidth,e.scrollHeight>e.clientHeight]},2477:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(1594);const o=(e=null)=>(0,a.useState)(e)},2558:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(1594);const o=(e,t)=>{const r=(0,a.useRef)(!1);(0,a.useEffect)(()=>{if(r.current)return e();r.current=!0},t)}},2884:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(1594),o=(r(8347),r(4680));const n=(0,a.createContext)({announce:()=>{},announcePolite:()=>{},announceAssertive:()=>{},initialized:!1}),i=()=>{const e=o.A?window.cosmos.liveLogContext??n:n;return(0,a.useContext)(e)}},3072:(e,t)=>{var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,n=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,_=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,f=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,y=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case d:case u:case n:case s:case i:case _:return e;default:switch(e=e&&e.$$typeof){case c:case p:case f:case h:case l:return e;default:return t}}case o:return t}}}function w(e){return $(e)===u}t.AsyncMode=d,t.ConcurrentMode=u,t.ContextConsumer=c,t.ContextProvider=l,t.Element=a,t.ForwardRef=p,t.Fragment=n,t.Lazy=f,t.Memo=h,t.Portal=o,t.Profiler=s,t.StrictMode=i,t.Suspense=_,t.isAsyncMode=function(e){return w(e)||$(e)===d},t.isConcurrentMode=w,t.isContextConsumer=function(e){return $(e)===c},t.isContextProvider=function(e){return $(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return $(e)===p},t.isFragment=function(e){return $(e)===n},t.isLazy=function(e){return $(e)===f},t.isMemo=function(e){return $(e)===h},t.isPortal=function(e){return $(e)===o},t.isProfiler=function(e){return $(e)===s},t.isStrictMode=function(e){return $(e)===i},t.isSuspense=function(e){return $(e)===_},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===u||e===s||e===i||e===_||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===h||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v||e.$$typeof===g)},t.typeOf=$},3113:(e,t,r)=>{r.d(t,{A:()=>u,G:()=>d});var a=r(4848),o=r(1594),n=r(8267),i=r(1357),s=r(9549),l=r(9187),c=r(7321);const d=n.Ay.label(({theme:e,labelHidden:t})=>{const{"foreground-color":r}=e.components.label,a=(0,l.A)(()=>t?i.Ic:(0,i.B3)((0,c.W0)(e.base.palette["primary-background"]),e.base.transparency["transparent-3"])),o=(0,c.Vr)(e.base["font-size"],e.base["font-scale"]);return t?i.Ic:n.AH`
          max-width: max-content;
          font-size: ${o[e.components.label["font-size"]]};
          font-weight: ${e.components.label["font-weight"]};
          color: ${"auto"===r?a:r};
        `});d.defaultProps=s.qn;const u=(0,o.forwardRef)(function({children:e,labelHidden:t=!1,htmlFor:r,...o},n){return(0,a.jsx)(d,{ref:n,labelHidden:t,htmlFor:""===r?void 0:r,...o,children:e})})},3351:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(1594),o=r(4685);const n=()=>(0,a.useRef)((0,o.A)()).current},3404:(e,t,r)=>{e.exports=r(3072)},3456:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(9463);const o=()=>(0,a.A)().themeMachine.theme},3662:(e,t,r)=>{function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}r.d(t,{A:()=>a})},3700:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(1594);const o=e=>{const t=(0,a.useRef)();return(0,a.useLayoutEffect)(()=>{t.current=e},[e]),t.current}},4146:(e,t,r)=>{var a=r(3404),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return a.isMemo(e)?i:s[e.$$typeof]||o}s[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[a.Memo]=i;var c=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,_=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,a){if("string"!=typeof r){if(m){var o=_(r);o&&o!==m&&e(t,o,a)}var i=d(r);u&&(i=i.concat(u(r)));for(var s=l(t),h=l(r),f=0;f<i.length;++f){var g=i[f];if(!(n[g]||a&&a[g]||h&&h[g]||s&&s[g])){var b=p(r,g);try{c(t,g,b)}catch(e){}}}}return t}},4651:(e,t,r)=>{r.d(t,{A:()=>c});var a=r(1594),o=r(4680);const n=(e,t)=>{let r;return function(...a){window.clearTimeout(r),r=window.setTimeout(()=>{r=void 0,e.apply(this,a)},t)}},i=r(127).A?(()=>{const e=document.createElement("div");e.style.width="1ch",e.style.position="fixed",document.body.append(e);const t=e.offsetWidth;return e.remove(),t})():1;var s=r(3456);const l=o.A&&window.getComputedStyle(document.documentElement).fontSize||"16px",c=(e,{breakpointRef:t,defaultValue:r=!1,themeProp:c="breakpoints"}={})=>{const{base:{breakpoints:d,"content-width":u}}=(0,s.A)(),p="content-width"===c?u[e]:d[e],[_,m]=(0,a.useState)(o.A?window.matchMedia(`(min-width: ${p})`).matches:!!r),h=i,f=(0,a.useCallback)(e=>{m(e.matches)},[]);return(0,a.useLayoutEffect)(()=>{if(t&&t.current){const e=n(e=>{if(!t.current?.checkVisibility())return;const r=e.some(({target:e,contentRect:r})=>{if(e!==t.current)return;const a="breakpoints"===c?parseFloat(l):h;return r.width>=parseFloat(p)*a});m(r)},100),r=new ResizeObserver(e);return r.observe(t.current),()=>{r.disconnect()}}if(o.A){const e=window.matchMedia(`(min-width: ${p})`),t="addEventListener"in e,r=n(()=>{m(window.innerWidth>=parseInt(p,10))},100);return t?(e.addEventListener("change",f),m(e.matches)):(window.addEventListener("resize",r),m(window.innerWidth>=parseInt(p,10))),()=>{t?e.removeEventListener("change",f):window.removeEventListener("resize",r)}}},[t?.current]),_}},4680:(e,t,r)=>{r.d(t,{A:()=>a});const a="undefined"!=typeof window},4685:(e,t,r)=>{r.d(t,{A:()=>a});const a=()=>`_${Math.random().toString(36).slice(2,11)}`},4853:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(1594);const o=(...e)=>{const t=(0,a.useRef)(null),[r]=(0,a.useState)(()=>Object.defineProperty({current:null},"current",{configurable:!0,enumerable:!0,get:()=>t.current,set:r=>{t.current=r,e.forEach(e=>{e&&("function"==typeof e?e(t.current):e.current=t.current)})}}));return r}},4860:(e,t,r)=>{r.d(t,{A:()=>i,L:()=>n});const a=(e,t)=>{let r=e;if(t.every(e=>!("object"!=typeof r||!r||(r=r[e],0))))return r},o=(e,t,r)=>(Object.defineProperty(e,t,{get:()=>(delete e[t],e[t]=r(),e[t]),enumerable:!0,configurable:!0}),e),n=Symbol.for("@pega/cosmos-react-core.theme.resetToInitial"),i=class{parent;definition;overrides;theme;overrideInTree(e){let t=this;const r=e.join(".");for(;t;){if(a(t.theme,e),t.overrides.has(r))return!!t.overrides.get(r);t=t.parent}return!1}constructTheme(e){const t=(r=[])=>{const i={};return Object.keys(a(this.definition,r)).forEach(s=>{if("$comment"===s)return;const l=[...r,s],c=a(this.definition,l);if(void 0===c.$type)return void o(i,s,()=>t(l));const d=a(e,l);void 0!==d&&this.overrides.set(l.join("."),d!==n),void 0===d||d===n||c.$constant?this.overrideInTree(l)?o(i,s,()=>a(this.parent.theme,l)):"inherited"===c.$type?o(i,s,()=>a(this.theme,c.$value.split("."))):"literal"===c.$type&&(i[s]=c.$value):i[s]=d}),i};return t()}constructor({theme:e={},parent:t,definition:r}){this.parent=t??null,this.definition=t?t.definition:r,this.overrides=new Map,this.theme=this.constructTheme(e)}}},4869:(e,t,r)=>{r.d(t,{A:()=>a});const a=(e,t)=>(e.getTestIds=t,e)},5387:(e,t,r)=>{r.d(t,{A:()=>C});var a=r(4848),o=r(1594),n=r(8267),i=r(9549),s=r(150),l=r(3351),c=r(4853),d=r(8579),u=r(3456),p=r(7321),_=r(2365),m=r(127);const h={primary:!1,secondary:!1,auxillary:!1,fourth:!1,fifth:!1};if(m.A){const e=({buttons:e})=>{h.primary=!!(1&e),h.secondary=!!(2&e),h.auxillary=!!(4&e),h.fourth=!!(8&e),h.fifth=!!(16&e)};document.addEventListener("mousedown",e),document.addEventListener("mouseup",e),document.addEventListener("drop",e)}const f=h;var g=r(9749),b=r(4869),y=r(4860),v=r(4680),$=r(1649);const w=({children:e,theme:t})=>{const r=v.A?window.cosmos.configurationContext??$.Q:$.Q,i=(0,o.useContext)(r),s=new y.A({theme:t,parent:i.themeMachine});return(0,a.jsx)(r.Provider,{value:{...i,themeMachine:s},children:(0,a.jsx)(n.NP,{theme:s.theme,children:e})})},k=(0,r(8044).A)("tooltip",[]),x=n.Ay.div(({theme:e})=>{const t=(0,p.Vr)(e.base["font-size"],e.base["font-scale"]);return n.AH`
    background-color: ${e.components.tooltip["background-color"]};
    color: ${e.components.tooltip["foreground-color"]};
    font-size: ${t.xxs};
    max-width: 40ch;
    padding: ${e.base.spacing};
    white-space: pre-line;
    word-break: break-word;
  `});x.defaultProps=i.qn;const A=(0,o.forwardRef)(function({testId:e,children:t,target:r,ignoredElements:n=[],showDelay:i="short",hideDelay:m="long",placement:h="top",describeTarget:b=!0,smart:y,groupId:v="tooltip",...$},A){const C=(0,l.A)(),[S,P]=(0,o.useState)(!1),[E,T]=(0,o.useState)(!1),j=(0,c.A)(A),z=(0,o.useRef)(null),H=(0,d.A)(e,k),R="string"==typeof t||Array.isArray(t)&&t.every(e=>"string"==typeof e),I=(0,o.useCallback)(({target:e})=>{z.current=e,e!==j.current&&e!==r&&P(!1)},[r]);(0,o.useEffect)(()=>{if(!r)return;const e=()=>{const e=t=>{if((0,_.A)(t).some(Boolean)&&!["absolute","fixed"].includes(window.getComputedStyle(t).position))return!0;for(const r of t.children)if(e(r))return!0;return!1};P(!y||e(r))},t=()=>{e()},a=()=>{z.current&&z.current===j.current||P(!1),z.current=null},o=()=>{n.some(e=>e?.matches(":hover"))||f.primary||e()},i=()=>{(0,g.A)()!==r&&P(!1)},s=({key:e})=>{"Escape"===e&&S&&(T(!0),P(!1))};return document.addEventListener("keydown",s),document.addEventListener("mousedown",I),r.addEventListener("focusin",t),r.addEventListener("focusout",a),r.addEventListener("mouseenter",o),r.addEventListener("mouseleave",i),()=>{document.removeEventListener("keydown",s),document.removeEventListener("mousedown",I),r.removeEventListener("focusin",t),r.removeEventListener("focusout",a),r.removeEventListener("mouseenter",o),r.removeEventListener("mouseleave",i)}},[r,I,y,S]),(0,o.useEffect)(()=>{if(r&&b&&S){const e=r.getAttribute("aria-describedby");r.setAttribute("aria-describedby",e?`${e} ${C}`:C)}else if(r){const e=r.getAttribute("aria-describedby");if(e)if(e===C)r.removeAttribute("aria-describedby");else{const t=e.replace(new RegExp(`(?:^|\\s+)${C}`),"");r.setAttribute("aria-describedby",t)}}},[b,r,S]),(0,o.useEffect)(()=>{!S&&E&&T(!1)},[S,E]);const L=(0,u.A)(),O={base:{palette:{"primary-background":L.components.tooltip["background-color"],"foreground-color":L.components.tooltip["foreground-color"],interactive:(0,p.ho)(L.base.palette.interactive,L.components.tooltip["background-color"])}}};return(0,a.jsx)(w,{theme:O,children:(0,a.jsx)(s.A,{"data-testid":H.root,id:C,groupId:v,...$,show:S,showDelay:E?"none":i,hideDelay:E?"none":m,onMouseOver:()=>{P(!0)},onMouseOut:()=>{P(!1)},strategy:"fixed",as:x,role:R?"tooltip":"dialog",target:r,arrow:!0,placement:h,onMouseDown:I,hideOnTargetHidden:!0,ref:j,children:t})})}),C=(0,b.A)(A,k)},5582:(e,t,r)=>{r.d(t,{A:()=>i,y:()=>o}),r(8347);var a=r(4680);a.A&&(window.cosmos.popoverMap??=new WeakMap);const o=a.A?window.cosmos.popoverMap:new WeakMap,n=e=>{const t=e.getRootNode();return t instanceof Document||t instanceof DocumentFragment?[...e.querySelectorAll("[data-popover-target]")].flatMap(e=>o.has(e)?[...o.get(e)].map(e=>t.querySelector(`[data-popover-id="${e.replace(/"/g,'\\"')}"]`)).flatMap(e=>e?[e,...n(e)]:[]):[]):[]},i=n},6416:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(1594),o=r(5582),n=r(3351);const i=(e,t=!0)=>{const r=(0,n.A)();return(0,a.useEffect)(()=>{if(e&&t)return o.y.has(e)||o.y.set(e,new Set),e.toggleAttribute("data-popover-target",!0),o.y.get(e).add(r),()=>{o.y.has(e)&&(o.y.get(e).delete(r),0===o.y.get(e).size&&(o.y.delete(e),e.removeAttribute("data-popover-target")))}},[t,e,r]),r}},6629:(e,t,r)=>{r.d(t,{A:()=>a});const a=()=>{const e=document.createElement("div"),t="50px";let r=0;return e.style.position="absolute",e.style.top=`-${t}`,e.style.width=t,e.style.height=t,e.style.overflow="scroll",document.body.appendChild(e),r=e.offsetWidth-e.clientWidth,document.body.removeChild(e),r}},6765:(e,t,r)=>{r.d(t,{Ay:()=>m,pU:()=>d,vE:()=>u});var a=r(4848),o=r(1594),n=r(8267),i=r(3456),s=r(9549),l=r(7321);const c=new Map([]),d=(...e)=>{e.forEach(({set:e,name:t,...r})=>{const a=e??"budicon";c.has(a)?c.get(a).has(t)||c.get(a).set(t,r):c.set(a,new Map([[t,r]]))})},u=n.Ay.svg(({theme:e,size:t="s"})=>{const{components:{icon:{size:{s:r,m:a,l:o}}}}=e;return n.AH`
    display: inline-block;
    fill: currentColor;
    vertical-align: middle;
    flex-shrink: 0;
    /* stylelint-disable unit-allowed-list */
    min-width: 14px;
    min-height: 14px;
    /* stylelint-enable unit-allowed-list */

    @media (forced-colors: active) {
      fill: CanvasText;
    }

    ${"s"===t&&n.AH`
      width: ${r};
      height: ${r};
    `}

    ${"m"===t&&n.AH`
      width: ${a};
      height: ${a};
    `}

    ${"l"===t&&n.AH`
      width: ${o};
      height: ${o};
    `}

    ${"font-size"===t&&n.AH`
      width: 1em;
      height: 1em;
    `}
  `});u.defaultProps=s.qn;const p=n.Ay.div(({theme:e,background:t,foreground:r,size:a="m",shape:o="square"})=>{const i=(0,l.W0)(t),{base:{"border-radius":s},components:{icon:{size:{s:c,m:d,l:p},"border-radius-multiplier":_}}}=e;return n.AH`
    color: ${r??i};
    background-color: ${t};
    display: flex;
    justify-content: center;
    align-items: center;

    ${"s"===a&&n.AH`
      width: ${c};
      height: ${c};
    `}

    ${"m"===a&&n.AH`
      width: ${d};
      height: ${d};
    `}

    ${"l"===a&&n.AH`
      width: ${p};
      height: ${p};
    `}

    ${"font-size"===a&&n.AH`
      width: 1em;
      height: 1em;
    `}

    ${"square"===o&&n.AH`
      border-radius: calc(${_} * ${s});
    `}

    ${"circle"===o&&n.AH`
      border-radius: 50%;
    `}

    ${u} {
      width: 50%;
      height: 50%;
      /* stylelint-disable unit-allowed-list */
      min-width: min(14px, 90%);
      min-height: min(14px, 90%);
      /* stylelint-enable unit-allowed-list */
    }
  `});p.defaultProps=s.qn;const _=Object.freeze({Component:()=>null}),m=(0,o.forwardRef)(function({set:e,name:t,size:n,"aria-label":s,role:l,...m},h){const{base:{"icon-set":f}}=(0,i.A)(),g=e??f??"budicon",[b,y]=(0,o.useState)(c.get(g)?.get(t)??_);return(0,o.useEffect)(()=>{if(c.get(g)?.has(t))return void y(c.get(g).get(t));const e=new AbortController;return(async()=>{try{const e=encodeURIComponent(t);let a,o;switch(g){case"streamline":a="streamline-icons";break;case"budicon":a="icons";break;default:throw new Error("Unknown icon")}try{o=await r(2020)(`./${a}/${e}.icon`)}catch{o=await r(6935)(`./${a}/${e}.icon.tsx`)}if(o.name!==t||!o.Component)throw new Error("Malformed icon definition");d(o)}catch{d({set:g,name:t,..._})}e.signal.aborted||y(c.get(g).get(t)??_)})(),()=>e.abort()},[t,g]),"string"==typeof m.background?(0,a.jsx)(p,{...m,background:m.background,foreground:m.foreground,shape:m.shape,size:n,ref:h,children:(0,a.jsx)(u,{role:l??void 0!==s?"img":"presentation","aria-label":s,viewBox:b.viewBox,children:(0,a.jsx)(b.Component,{})})}):(0,a.jsx)(u,{...m,role:l??void 0!==s?"img":"presentation","aria-label":s,viewBox:b.viewBox,size:n,ref:h,children:(0,a.jsx)(b.Component,{})})})},6878:(e,t,r)=>{r.d(t,{OV:()=>w,ah:()=>k,Ay:()=>x});var a=r(4848),o=r(1594),n=r(8267),i=r(1357),s=r(9549),l=r(9187);var c=r(9576),d=r(7321),u=r(2477),p=r(4853),_=r(5387),m=r(405),h=r(9466),f=r(285),g=r(6765),b=r(8889);const y=e=>{const{base:{spacing:t,animation:{speed:r,timing:{ease:a}},"disabled-opacity":o},components:{button:{"focus-shadow":i}}}=e;return n.AH`
    outline: none;
    text-decoration: none;
    transition-property: background-color, color, border-color, box-shadow, translate;
    transition-duration: calc(0.5 * ${r});
    transition-timing-function: ${a};
    cursor: pointer;

    & + & {
      margin-inline-start: ${t};
    }

    /* Not able to combine with selector above. Stylis bug? */

    & + ${b.l} + & {
      margin-inline-start: ${t};
    }

    &:disabled,
    &[disabled] {
      opacity: ${o};
      cursor: not-allowed;
      pointer-events: none;
    }

    &:enabled:focus,
    &:not([disabled]):focus {
      box-shadow: ${i};
    }
  `},v=(e,t)=>({contrastColor:t?e:(0,l.A)(()=>(0,d.W0)(e)),hoverColors:(0,d.ZV)(t||e),activeColors:(0,d.BI)(t||e)}),$=(e,t)=>{const r=(0,d.VR)(t)?t:(0,d.W0)(e),a=(0,l.A)(()=>(0,i.IM)(e,r).AA),o=a?e:(0,d.ho)(e,t),n=(0,l.A)(()=>(0,i.jh)(.9,t,e)),s=(0,l.A)(()=>(0,i.jh)(.8,t,o));return{textColor:a?e:(0,d.W0)(e),hoverBg:n,hoverFg:(0,d.ho)(e,n??"transparent"),activeBg:(0,l.A)(()=>(0,i.jh)(.8,t,o)),activeFg:(0,d.ho)(o,s??"transparent")}},w=n.Ay.button.withConfig((0,d.ks)("loading"))(({variant:e,icon:t,loading:r,compact:a,theme:o})=>{const{base:{spacing:i,"border-radius":s,palette:{"primary-background":l},"hit-area":{"mouse-min":c,"finger-min":d,"compact-min":u},animation:{speed:p}},components:{button:{color:_,"foreground-color":h,"secondary-color":g,"secondary-fill-style":b,padding:w,"border-radius":k,"border-width":x,touch:{padding:A}}}}=o,C=y(o),S=n.AH`
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: ${c};
      min-width: ${c};
      border: ${x} solid transparent;
      border-radius: calc(${s} * ${k});
      -webkit-user-select: none;
      user-select: none;
      white-space: nowrap;

      ${!t&&n.AH`
        padding: ${w};
      `}

      ${t&&n.AH`
        border-radius: calc(${s} * ${k});

        > svg {
          display: block;
        }
      `} ${a&&n.AH`
        min-height: ${u};
        min-width: ${u};
      `} @media (
        pointer: coarse) {
        border-radius: calc(${s} * ${k});

        ${!a&&n.AH`
          min-height: ${d};
          min-width: ${d};
        `}

        ${!t&&n.AH`
          padding: ${A};
        `}
      }

      &:active {
        translate: 0 0.0625rem;
      }
    `,{contrastColor:P,hoverColors:E,activeColors:T}="primary"!==e||"auto"===h?v("primary"===e?_:g):v(h,_),j=n.AH`
      --button-background-color: ${"primary"===e?_:g};
      color: ${P};
      background-color: ${"primary"===e?_:g};

      @media (hover: hover) {
        &:hover {
          background-color: ${E.background};
          text-decoration: none;
        }
      }

      &:active {
        background-color: ${T.background};
        color: ${T.foreground};
        text-decoration: none;
      }
    `,z=$(g,l),H=n.AH`
      --button-background-color: ${l};
      color: ${z.textColor};
      background-color: ${l};
      border-color: ${g};

      @media (hover: hover) {
        &:hover {
          background-color: ${z.hoverBg};
          text-decoration: none;
        }
      }

      &:active {
        color: ${z.activeFg};
        background-color: ${z.activeBg};
        border-color: ${z.activeFg};
        text-decoration: none;
      }
    `,R=$("outline"===b?g:_,l),I=n.AH`
      --button-background-color: ${t?"transparent":l};
      color: ${t?"currentColor":R.textColor};
      background-color: ${t?"transparent":l};

      @media (hover: hover) {
        &:hover {
          ${t&&n.AH`
            ::before {
              content: '';
              position: absolute;
              top: calc(${x} * -1);
              bottom: calc(${x} * -1);
              left: calc(${x} * -1);
              right: calc(${x} * -1);
              border-radius: inherit;
              background-color: currentColor;
              opacity: 0.1;
            }
          `}

          ${!t&&n.AH`
            background-color: ${R.hoverBg};
            color: ${R.hoverFg};
            border-color: ${R.hoverFg};
            text-decoration: none;
          `}
        }

        &:active {
          ${t&&n.AH`
            ::before {
              content: '';
              position: absolute;
              top: calc(${x} * -1);
              bottom: calc(${x} * -1);
              left: calc(${x} * -1);
              right: calc(${x} * -1);
              border-radius: inherit;
              background-color: currentColor;
              opacity: 0.2;
            }
          `}

          ${!t&&n.AH`
            background-color: ${R.activeBg};
            color: ${R.activeFg};
            border-color: ${R.activeFg};
            text-decoration: none;
          `}
        }
      }
    `;return n.AH`
      ${C}
      ${S}
        ${("primary"===e||"secondary"===e&&"fill"===b)&&j}
        ${"secondary"===e&&"outline"===b&&H}
        ${"simple"===e&&I}
        ${"primary"===e&&n.AH`
        font-weight: ${o.base["font-weight"]["semi-bold"]};
      `}

        ${r&&n.AH`
        ${f.e} {
          background-color: var(--button-background-color);
          border-radius: inherit;
        }

        ${m.pT} {
          width: 1em;
          height: 1em;

          ${!t&&n.AH`
            margin-inline-end: calc(${i} / 2);
          `}
          circle:nth-child(2) {
            animation-duration: calc(${p} * 2);
          }
        }
      `}
    `});w.defaultProps=s.qn;const k=n.Ay.a.withConfig((0,d.ks)("loading"))(({theme:e,variant:t,href:r})=>{const{base:{palette:{"foreground-color":a}},components:{button:{color:o,"secondary-fill-style":i},link:{color:s}}}=e;let l=s;r||"solid"!==i||(l=o);const{background:c}=(0,d.BI)(l),{background:u}=(0,d.BI)(a),p=y(e),_=n.AH`
    background-color: transparent;
    display: inline;
    text-align: start;
    border: none;

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }

    > ${g.vE} {
      vertical-align: bottom;
    }
  `,m=n.AH`
    color: ${l};

    &:active {
      color: ${c};
    }
  `,h=n.AH`
    color: ${a};

    &:active {
      color: ${u};
    }
  `;return n.AH`
    ${p}
    ${_}
      ${"link"===t&&m}
      ${"text"===t&&h}
  `});k.defaultProps=s.qn;const x=(0,o.forwardRef)(function({variant:e="secondary",type:t="button",disabled:r=!1,icon:n=!1,compact:i=!1,href:s,as:l,forwardedAs:d,label:m,"aria-label":f,loading:g=!1,children:b,className:y,...v},$){const[x,A]=(0,u.A)(),C=(0,o.useRef)(),S=(0,o.useRef)(),P=(0,o.useRef)(),E=(0,p.A)($,A),T=["link","text"].includes(e),j=g&&!T,z=T?k:w,H=e=>{E.current&&S.current&&P.current&&(({x:e,y:t},r)=>e>=r.left&&e<=r.right&&t>=r.top&&t<=r.bottom)({x:e.clientX,y:e.clientY},S.current)&&Date.now()-P.current<500&&E.current.click()};return(0,o.useEffect)(()=>(document.addEventListener("mouseup",H),()=>{document.removeEventListener("mouseup",H),C.current=void 0,S.current=void 0,P.current=void 0}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(z,{...v,ref:E,as:l||(s?"a":"button"),forwardedAs:d||(s?"a":"button"),className:(0,c.A)("button",y,{variant:e,icon:n,compact:i,loading:g}),variant:e,icon:n,compact:i,type:s?void 0:t,href:s,disabled:r&&!s,loading:j,"aria-label":f||m,onMouseDown:e=>{v.onMouseDown?.(e),e.persist(),C.current=e,S.current=e.currentTarget.getBoundingClientRect(),P.current=Date.now()},onMouseUp:e=>{const t=C.current&&!C.current.defaultPrevented;return C.current=void 0,S.current=void 0,P.current=void 0,t&&E.current!==document.activeElement&&E.current?.focus(),v.onMouseUp?.(e)},children:[j&&(0,a.jsx)(h.A,{variant:"ring",placement:"inline"}),n&&j?null:b]}),x&&m&&(0,a.jsx)(_.A,{target:x,showDelay:"none",hideDelay:"none",describeTarget:!1,children:m})]})})},6883:(e,t,r)=>{r.d(t,{A:()=>p,e:()=>u});var a=r(4848),o=r(1594),n=r(8267),i=r(9549);const s=e=>["between","around","evenly"].includes(e)?`space-${e}`:e,l=e=>{if(!e)return;if(!0===e)return n.AH`
      display: grid;
    `;const{inline:t,pad:r,cols:a,autoCols:o,rows:i,autoRows:l,autoFlow:c,areas:d,template:u,colGap:p,rowGap:_,gap:m,justifyItems:h,justifyContent:f,alignItems:g,alignContent:b}=e;return n.AH`
    display: ${t?"inline-grid":"grid"};

    ${void 0!==r&&n.AH`
      padding: ${({theme:{base:{spacing:e}}})=>(Array.isArray(r)?r:[r]).map(t=>`calc(${t} * ${e})`).join(" ")};
    `}

    ${a&&n.AH`
      grid-template-columns: ${a};
    `}

    ${o&&n.AH`
      grid-auto-columns: ${o};
    `}

    ${i&&n.AH`
      grid-template-rows: ${i};
    `}

    ${l&&n.AH`
      grid-auto-rows: ${l};
    `}

    ${c&&n.AH`
      grid-auto-flow: ${c};
    `}

    ${d&&n.AH`
      grid-template-areas: ${d};
    `}

    ${u&&n.AH`
      grid-template: ${u};
    `}

    ${void 0!==m&&n.AH`
      gap: calc(${m} * ${e=>e.theme.base.spacing});
    `}

    ${void 0!==p&&n.AH`
      column-gap: calc(${p} * ${e=>e.theme.base.spacing});
    `}

    ${void 0!==_&&n.AH`
      row-gap: calc(${_} * ${e=>e.theme.base.spacing});
    `}

    ${h&&n.AH`
      justify-items: ${h};
    `}

    ${f&&n.AH`
      justify-content: ${s(f)};
    `}

    ${g&&n.AH`
      align-items: ${g};
    `}

    ${b&&n.AH`
      align-content: ${s(b)};
    `}
  `},c=e=>{if(!e)return;const{colStart:t,colEnd:r,colStartEnd:a,rowStart:o,rowEnd:i,rowStartEnd:s,area:l,justifySelf:c,alignSelf:d}=e;return n.AH`
    ${t&&n.AH`
      grid-column-start: ${t};
    `}

    ${r&&n.AH`
      grid-column-end: ${r};
    `}

    ${a&&n.AH`
      grid-column: ${a};
    `}

    ${o&&n.AH`
      grid-row-start: ${o};
    `}

    ${i&&n.AH`
      grid-row-end: ${i};
    `}

    ${s&&n.AH`
      grid-row: ${s};
    `}

    ${l&&n.AH`
      grid-area: ${l};
    `}

    ${c&&n.AH`
      justify-self: ${c};
    `}

    ${d&&n.AH`
      align-self: ${d};
    `}
  `},d=["xs","sm","md","lg","xl"],u=n.Ay.div(({container:e,item:t,theme:{base:{breakpoints:r}},xs:a,sm:o,md:i,lg:s,xl:u})=>{const p={xs:a,sm:o,md:i,lg:s,xl:u};return n.AH`
      ${l(e)}
      ${c(t)}

    ${d.map(e=>p[e]&&n.AH`
            @media screen and (min-width: ${r[e]}) {
              ${l(p[e]?.container)}
              ${c(p[e]?.item)}
            }
          `)}
    `});u.defaultProps=i.qn;const p=(0,o.forwardRef)(function(e,t){return(0,a.jsx)(u,{...e,ref:t})})},7103:(e,t,r)=>{r.d(t,{A:()=>a});const a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},7321:(e,t,r)=>{r.d(t,{BI:()=>d,LP:()=>h,VR:()=>i,Vr:()=>m,W0:()=>s,ZV:()=>c,ho:()=>u,ks:()=>p});var a=r(1357),o=r(9187);const n={AA:4.5,AALarge:3,AAA:7,AAALarge:4.5,AANonText:3},i=e=>{const t=(0,o.A)(()=>(0,a.kN)(e));return t&&(void 0===t.alpha||void 0!==t.alpha&&1===t.alpha)},s=(e,{mode:t="light",level:r="AA"}={})=>{const o="string"==typeof r?n[r]:r;return"light"===t&&(0,a.bJ)("#fff",e)>=o?"#fff":"dark"===t&&(0,a.bJ)("#000",e)>=o?"#000":(0,a.W0)(e)},l=(e,t)=>{const r=(0,o.A)(()=>(0,a.iC)(e).lightness,()=>1);let n=(0,o.A)(()=>(0,a.a)(t,e)),i=(0,o.A)(()=>s((0,a.a)(t,e)));return r>.35&&(n=(0,o.A)(()=>(0,a.e$)(t,e)),i=(0,o.A)(()=>s((0,a.e$)(t,e)))),{background:n,foreground:i}},c=e=>l(e,.1),d=e=>l(e,.2),u=(e,t,{mode:r="both",level:o="AA"}={})=>{if(!i(e)&&!i(t))return"#000000";if(!i(t))return e;if(!i(e))return t;const l="string"==typeof o?n[o]:o;if((0,a.bJ)(e,t)>=l)return e;const{lightness:c,...d}=(0,a.iC)(e);let u=!0,p=!0,_="",m="";for(let e=0;e<=1;e+=.01){if(u){const o=(0,a.KI)({...d,lightness:Math.min(c+e,1)});if((0,a.bJ)(o,t)>=l){if("dark"!==r)return o;u=!1,_=o}c+e>=1&&(u=!1)}if(p){const o=(0,a.KI)({...d,lightness:Math.max(c-e,0)});if((0,a.bJ)(o,t)>=l){if("light"!==r)return o;p=!1,m=o}c-e<=0&&(p=!1)}if(!u&&!p)break}return _||m||s(t,{mode:r,level:o})},p=(...e)=>({shouldForwardProp:(t,r)=>!e.includes(t)&&r(t)}),_={xxs:-2,xs:-1,s:0,m:1,l:2,xl:3,xxl:4},m=(e,t)=>Object.fromEntries(Object.entries(_).map(([r,n])=>{const i=(0,o.A)(()=>"linear"===t?(0,a.Dy)(`${e} + (${n} * 0.0625rem)`):(0,a.xi)(n,e,t),()=>e);return"xs"===r&&Number.parseFloat(`${(0,a.BP)(i)}`)<.75?[r,`max(calc((${e} + 12px) / 2), 12px)`]:[r,`max(${i}, 12px)`]})),h=(e,t)=>{const r=!i(e),o=((e,t)=>"auto"!==t?t:i(e)?s(e):"#000000")(e,t),n=r?s(o):e;let l=(0,a.e$)(.05,n);return 1===(0,a.bJ)(n,l)&&(l=(0,a.a)(.15,n)),r&&(l=(0,a.No)(.9,o)),{contrastColor:l,backgroundColor:n}}},7387:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(3662);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,a.A)(e,t)}},7491:(e,t,r)=>{r.d(t,{A:()=>l,U:()=>s});var a=r(4848),o=r(1594),n=r(8267),i=r(1357);const s=n.Ay.span`
  ${i.Ic}
  -webkit-user-select: none;
  user-select: none;
`,l=(0,o.forwardRef)(function(e,t){return(0,a.jsx)(s,{...e,ref:t})})},7501:(e,t,r)=>{r.d(t,{A:()=>p,D:()=>u});var a=r(4848),o=r(1594),n=r(8267),i=r(9549);const s=e=>["between","around","evenly"].includes(e)?`space-${e}`:["start","end"].includes(e)?`flex-${e}`:e,l=(e,t)=>{if(!e)return"";if(!0===e)return n.AH`
      display: flex;
    `;const r=(e=>{if(!Array.isArray(e))return[e,e,e,e];switch(e.length){case 1:return[e[0],e[0],e[0],e[0]];case 2:return[e[0],e[1],e[0],e[1]];case 3:return[e[0],e[1],e[2],e[1]];case 4:return e;default:return[void 0,void 0,void 0,void 0]}})(e.pad);if(e&&"object"==typeof e){const a=!e.direction||e.direction.includes("row"),o=e.direction&&e.direction.includes("reverse");return n.AH`
      display: ${e.inline?"inline-flex":"flex"};

      ${void 0!==r[0]&&n.AH`
        padding-block-start: calc(${r[0]} * ${t});
      `}
      ${void 0!==r[1]&&n.AH`
        padding-inline-end: calc(${r[1]} * ${t});
      `}

        ${void 0!==r[2]&&n.AH`
        padding-block-end: calc(${r[2]} * ${t});
      `}

        ${void 0!==r[3]&&n.AH`
        padding-inline-start: calc(${r[3]} * ${t});
      `}

      ${e.direction&&n.AH`
        flex-direction: ${e.direction};
      `}

      ${e.justify&&n.AH`
        justify-content: ${s(e.justify)};
      `}

      ${e.wrap&&n.AH`
        flex-wrap: ${e.wrap};
      `}

      ${e.alignItems&&n.AH`
        align-items: ${s(e.alignItems)};
      `}

      ${e.alignContent&&n.AH`
        align-content: ${s(e.alignContent)};
      `}

      ${e.itemGap&&n.AH`
          > * {
            margin-${a?"inline-start":"block-start"}: calc(${e.itemGap} * ${e=>e.theme.base.spacing});
            ${o?":last-child":":first-child"} {
              margin-${a?"inline-start":"block-start"}: 0;
            }
          }
        `}

      ${void 0!==e.gap&&n.AH`
        gap: calc(${e.gap} * ${e=>e.theme.base.spacing});
      `}

      ${void 0!==e.colGap&&n.AH`
        column-gap: calc(${e.colGap} * ${e=>e.theme.base.spacing});
      `}

      ${void 0!==e.rowGap&&n.AH`
        row-gap: calc(${e.rowGap} * ${e=>e.theme.base.spacing});
      `}
    `}},c=e=>n.AH`
    ${e&&n.AH`
      max-width: 100%;
      min-width: 0;

      ${void 0!==e.grow&&n.AH`
        flex-grow: ${e.grow};
      `}

      ${void 0!==e.shrink&&n.AH`
        flex-shrink: ${e.shrink};
      `}

      ${e.alignSelf&&n.AH`
        align-self: ${s(e.alignSelf)};
      `}

      ${e.basis&&n.AH`
        flex-basis: ${e.basis};
      `}
    `}
  `,d=["xs","sm","md","lg","xl"],u=n.Ay.div(({container:e,item:t,theme:{base:{breakpoints:r,spacing:a}},xs:o,sm:i,md:s,lg:u,xl:p})=>{const _={xs:o,sm:i,md:s,lg:u,xl:p};return n.AH`
      ${l(e,a)}
      ${c(t)}

    ${d.map(e=>_[e]&&n.AH`
            @media screen and (min-width: ${r[e]}) {
              ${l(_[e]?.container,a)}
              ${c(_[e]?.item)}
            }
          `)}
    `});u.defaultProps=i.qn;const p=(0,o.forwardRef)(function(e,t){return(0,a.jsx)(u,{...e,ref:t})})},7521:(e,t,r)=>{r.d(t,{A:()=>u,D:()=>d});var a=r(4848),o=r(1594),n=r(8267),i=r(1357),s=r(9549),l=r(9187),c=r(7321);const d=n.Ay.span(e=>{const{variant:t,status:r,theme:{base:{"font-size":a,"font-scale":o,"font-family":s,palette:{"foreground-color":d,urgent:u,warn:p,success:_},transparency:{"transparent-2":m}},components:{text:h}}}=e;let f;r&&(f={error:u,warning:p,success:_}[r]),"secondary"===t&&(f=(0,l.A)(()=>(0,i.B3)(f??d,m)));const g=(0,c.Vr)(a,o);return n.AH`
    font-size: ${g[h[t]["font-size"]]};
    font-weight: ${h[t]["font-weight"]};
    font-family: ${h[t]["font-family"]||s};
    color: ${f};
  `});d.defaultProps=s.qn;const u=(0,o.forwardRef)(function({variant:e="primary",as:t,...r},o){return!t&&/h\d/i.test(e)&&(t=e),(0,a.jsx)(d,{ref:o,variant:e,as:t,...r})})},8044:(e,t,r)=>{r.d(t,{A:()=>a});const a=(e,t)=>r=>{const a=`${r??""}:${e}:`,o=Object.fromEntries(t.map(e=>{return[(t=e,t.replace(/^-+/g,"").replace(/-+(.)?/g,(e,t)=>t.toUpperCase())),`${a}${e}`];var t}));return o.root=a,o}},8168:(e,t,r)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},a.apply(null,arguments)}r.d(t,{A:()=>a})},8268:(e,t,r)=>{r.d(t,{A:()=>o});const a=Object.prototype.toString(),o=(e,...t)=>{if(0===t.length)return!1;if(!e||"object"!=typeof e&&"function"!=typeof e)return!1;if(t.some(t=>e instanceof t))return!0;const r=new Set(t.flatMap(e=>{const t=Object.prototype.toString.call(e.prototype);return t===a&&e.prototype!==Object.prototype?[]:t}));if(0===r.size)return!1;let o=e;for(;o;){if(r.has(Object.prototype.toString.call(o)))return!0;o=Object.getPrototypeOf(o)}return!1}},8347:()=>{"undefined"==typeof window||window.cosmos||Object.defineProperty(window,"cosmos",{value:{}})},8579:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(1594),o=r(9463);const n=(e,t)=>{const{testIds:r}=(0,o.A)();return(0,a.useMemo)(()=>r?"object"==typeof e&&e?e:t(e):{},[r,e,t])}},8593:(e,t,r)=>{function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}r.d(t,{A:()=>i});var o=r(3662);function n(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(n=function(){return!!e})()}function i(e){var t="function"==typeof Map?new Map:void 0;return i=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return function(e,t,r){if(n())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var i=new(e.bind.apply(e,a));return r&&(0,o.A)(i,r.prototype),i}(e,arguments,a(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,o.A)(r,e)},i(e)}},8887:(e,t,r)=>{r.d(t,{A:()=>a});const a=function(e){function t(e,a,l,c,p){for(var _,m,h,f,v,w=0,k=0,x=0,A=0,C=0,z=0,R=h=_=0,L=0,O=0,N=0,D=0,M=l.length,q=M-1,F="",U="",W="",B="";L<M;){if(m=l.charCodeAt(L),L===q&&0!==k+A+x+w&&(0!==k&&(m=47===k?10:47),A=x=w=0,M++,q++),0===k+A+x+w){if(L===q&&(0<O&&(F=F.replace(u,"")),0<F.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:F+=l.charAt(L)}m=59}switch(m){case 123:for(_=(F=F.trim()).charCodeAt(0),h=1,D=++L;L<M;){switch(m=l.charCodeAt(L)){case 123:h++;break;case 125:h--;break;case 47:switch(m=l.charCodeAt(L+1)){case 42:case 47:e:{for(R=L+1;R<q;++R)switch(l.charCodeAt(R)){case 47:if(42===m&&42===l.charCodeAt(R-1)&&L+2!==R){L=R+1;break e}break;case 10:if(47===m){L=R+1;break e}}L=R}}break;case 91:m++;case 40:m++;case 34:case 39:for(;L++<q&&l.charCodeAt(L)!==m;);}if(0===h)break;L++}if(h=l.substring(D,L),0===_&&(_=(F=F.replace(d,"").trim()).charCodeAt(0)),64===_){switch(0<O&&(F=F.replace(u,"")),m=F.charCodeAt(1)){case 100:case 109:case 115:case 45:O=a;break;default:O=j}if(D=(h=t(a,O,h,m,p+1)).length,0<H&&(v=s(3,h,O=r(j,F,N),a,P,S,D,m,p,c),F=O.join(""),void 0!==v&&0===(D=(h=v.trim()).length)&&(m=0,h="")),0<D)switch(m){case 115:F=F.replace($,i);case 100:case 109:case 45:h=F+"{"+h+"}";break;case 107:h=(F=F.replace(g,"$1 $2"))+"{"+h+"}",h=1===T||2===T&&n("@"+h,3)?"@-webkit-"+h+"@"+h:"@"+h;break;default:h=F+h,112===c&&(U+=h,h="")}else h=""}else h=t(a,r(a,F,N),h,c,p+1);W+=h,h=N=O=R=_=0,F="",m=l.charCodeAt(++L);break;case 125:case 59:if(1<(D=(F=(0<O?F.replace(u,""):F).trim()).length))switch(0===R&&(_=F.charCodeAt(0),45===_||96<_&&123>_)&&(D=(F=F.replace(" ",":")).length),0<H&&void 0!==(v=s(1,F,a,e,P,S,U.length,c,p,c))&&0===(D=(F=v.trim()).length)&&(F="\0\0"),_=F.charCodeAt(0),m=F.charCodeAt(1),_){case 0:break;case 64:if(105===m||99===m){B+=F+l.charAt(L);break}default:58!==F.charCodeAt(D-1)&&(U+=o(F,_,m,F.charCodeAt(2)))}N=O=R=_=0,F="",m=l.charCodeAt(++L)}}switch(m){case 13:case 10:47===k?k=0:0===1+_&&107!==c&&0<F.length&&(O=1,F+="\0"),0<H*I&&s(0,F,a,e,P,S,U.length,c,p,c),S=1,P++;break;case 59:case 125:if(0===k+A+x+w){S++;break}default:switch(S++,f=l.charAt(L),m){case 9:case 32:if(0===A+w+k)switch(C){case 44:case 58:case 9:case 32:f="";break;default:32!==m&&(f=" ")}break;case 0:f="\\0";break;case 12:f="\\f";break;case 11:f="\\v";break;case 38:0===A+k+w&&(O=N=1,f="\f"+f);break;case 108:if(0===A+k+w+E&&0<R)switch(L-R){case 2:112===C&&58===l.charCodeAt(L-3)&&(E=C);case 8:111===z&&(E=z)}break;case 58:0===A+k+w&&(R=L);break;case 44:0===k+x+A+w&&(O=1,f+="\r");break;case 34:case 39:0===k&&(A=A===m?0:0===A?m:A);break;case 91:0===A+k+x&&w++;break;case 93:0===A+k+x&&w--;break;case 41:0===A+k+w&&x--;break;case 40:0===A+k+w&&(0===_&&(2*C+3*z==533||(_=1)),x++);break;case 64:0===k+x+A+w+R+h&&(h=1);break;case 42:case 47:if(!(0<A+w+x))switch(k){case 0:switch(2*m+3*l.charCodeAt(L+1)){case 235:k=47;break;case 220:D=L,k=42}break;case 42:47===m&&42===C&&D+2!==L&&(33===l.charCodeAt(D+2)&&(U+=l.substring(D,L+1)),f="",k=0)}}0===k&&(F+=f)}z=C,C=m,L++}if(0<(D=U.length)){if(O=a,0<H&&void 0!==(v=s(2,U,O,e,P,S,D,c,p,c))&&0===(U=v).length)return B+U+W;if(U=O.join(",")+"{"+U+"}",0!==T*E){switch(2!==T||n(U,2)||(E=0),E){case 111:U=U.replace(y,":-moz-$1")+U;break;case 112:U=U.replace(b,"::-webkit-input-$1")+U.replace(b,"::-moz-$1")+U.replace(b,":-ms-input-$1")+U}E=0}}return B+U+W}function r(e,t,r){var o=t.trim().split(h);t=o;var n=o.length,i=e.length;switch(i){case 0:case 1:var s=0;for(e=0===i?"":e[0]+" ";s<n;++s)t[s]=a(e,t[s],r).trim();break;default:var l=s=0;for(t=[];s<n;++s)for(var c=0;c<i;++c)t[l++]=a(e[c]+" ",o[s],r).trim()}return t}function a(e,t,r){var a=t.charCodeAt(0);switch(33>a&&(a=(t=t.trim()).charCodeAt(0)),a){case 38:return t.replace(f,"$1"+e.trim());case 58:return e.trim()+t.replace(f,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(f,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function o(e,t,r,a){var i=e+";",s=2*t+3*r+4*a;if(944===s){e=i.indexOf(":",9)+1;var l=i.substring(e,i.length-1).trim();return l=i.substring(0,e).trim()+l+";",1===T||2===T&&n(l,1)?"-webkit-"+l+l:l}if(0===T||2===T&&!n(i,1))return i;switch(s){case 1015:return 97===i.charCodeAt(10)?"-webkit-"+i+i:i;case 951:return 116===i.charCodeAt(3)?"-webkit-"+i+i:i;case 963:return 110===i.charCodeAt(5)?"-webkit-"+i+i:i;case 1009:if(100!==i.charCodeAt(4))break;case 969:case 942:return"-webkit-"+i+i;case 978:return"-webkit-"+i+"-moz-"+i+i;case 1019:case 983:return"-webkit-"+i+"-moz-"+i+"-ms-"+i+i;case 883:if(45===i.charCodeAt(8))return"-webkit-"+i+i;if(0<i.indexOf("image-set(",11))return i.replace(C,"$1-webkit-$2")+i;break;case 932:if(45===i.charCodeAt(4))switch(i.charCodeAt(5)){case 103:return"-webkit-box-"+i.replace("-grow","")+"-webkit-"+i+"-ms-"+i.replace("grow","positive")+i;case 115:return"-webkit-"+i+"-ms-"+i.replace("shrink","negative")+i;case 98:return"-webkit-"+i+"-ms-"+i.replace("basis","preferred-size")+i}return"-webkit-"+i+"-ms-"+i+i;case 964:return"-webkit-"+i+"-ms-flex-"+i+i;case 1023:if(99!==i.charCodeAt(8))break;return"-webkit-box-pack"+(l=i.substring(i.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+i+"-ms-flex-pack"+l+i;case 1005:return _.test(i)?i.replace(p,":-webkit-")+i.replace(p,":-moz-")+i:i;case 1e3:switch(t=(l=i.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=i.replace(v,"tb");break;case 232:l=i.replace(v,"tb-rl");break;case 220:l=i.replace(v,"lr");break;default:return i}return"-webkit-"+i+"-ms-"+l+i;case 1017:if(-1===i.indexOf("sticky",9))break;case 975:switch(t=(i=e).length-10,s=(l=(33===i.charCodeAt(t)?i.substring(0,t):i).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:i=i.replace(l,"-webkit-"+l)+";"+i;break;case 207:case 102:i=i.replace(l,"-webkit-"+(102<s?"inline-":"")+"box")+";"+i.replace(l,"-webkit-"+l)+";"+i.replace(l,"-ms-"+l+"box")+";"+i}return i+";";case 938:if(45===i.charCodeAt(5))switch(i.charCodeAt(6)){case 105:return l=i.replace("-items",""),"-webkit-"+i+"-webkit-box-"+l+"-ms-flex-"+l+i;case 115:return"-webkit-"+i+"-ms-flex-item-"+i.replace(k,"")+i;default:return"-webkit-"+i+"-ms-flex-line-pack"+i.replace("align-content","").replace(k,"")+i}break;case 973:case 989:if(45!==i.charCodeAt(3)||122===i.charCodeAt(4))break;case 931:case 953:if(!0===A.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?o(e.replace("stretch","fill-available"),t,r,a).replace(":fill-available",":stretch"):i.replace(l,"-webkit-"+l)+i.replace(l,"-moz-"+l.replace("fill-",""))+i;break;case 962:if(i="-webkit-"+i+(102===i.charCodeAt(5)?"-ms-"+i:"")+i,211===r+a&&105===i.charCodeAt(13)&&0<i.indexOf("transform",10))return i.substring(0,i.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+i}return i}function n(e,t){var r=e.indexOf(1===t?":":"{"),a=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),R(2!==t?a:a.replace(x,"$1"),r,t)}function i(e,t){var r=o(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(w," or ($1)").substring(4):"("+t+")"}function s(e,t,r,a,o,n,i,s,l,d){for(var u,p=0,_=t;p<H;++p)switch(u=z[p].call(c,e,_,r,a,o,n,i,s,l,d)){case void 0:case!1:case!0:case null:break;default:_=u}if(_!==t)return _}function l(e){return void 0!==(e=e.prefix)&&(R=null,e?"function"!=typeof e?T=1:(T=2,R=e):T=0),l}function c(e,r){var a=e;if(33>a.charCodeAt(0)&&(a=a.trim()),a=[a],0<H){var o=s(-1,r,a,a,P,S,0,0,0,0);void 0!==o&&"string"==typeof o&&(r=o)}var n=t(j,a,r,0,0);return 0<H&&void 0!==(o=s(-2,n,a,a,P,S,n.length,0,0,0))&&(n=o),E=0,S=P=1,n}var d=/^\0+/g,u=/[\0\r\f]/g,p=/: */g,_=/zoo|gra/,m=/([,: ])(transform)/g,h=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,y=/:(read-only)/g,v=/[svh]\w+-[tblr]{2}/,$=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,k=/-self|flex-/g,x=/[^]*?(:[rp][el]a[\w-]+)[^]*/,A=/stretch|:\s*\w+\-(?:conte|avail)/,C=/([^-])(image-set\()/,S=1,P=1,E=0,T=1,j=[],z=[],H=0,R=null,I=0;return c.use=function e(t){switch(t){case void 0:case null:H=z.length=0;break;default:if("function"==typeof t)z[H++]=t;else if("object"==typeof t)for(var r=0,a=t.length;r<a;++r)e(t[r]);else I=0|!!t}return e},c.set=l,void 0!==e&&l(e),c}},8889:(e,t,r)=>{r.d(t,{l:()=>s,s:()=>i});var a=r(8267),o=r(9549),n=r(7321);const i=a.Ay.div`
  background-color: inherit;

  ::before {
    content: '';
    display: block;
    position: absolute;
    inset: -0.25rem;
    background-color: inherit;
    transform: rotate(45deg);
  }
`;i.defaultProps=o.qn;const s=a.Ay.div(({theme:{base:{"border-radius":e,"z-index":{popover:t,backdrop:r},shadow:{high:o},palette:s},components:{card:{background:l,"foreground-color":c},"form-control":{"border-radius":d}}},portal:u,offset:p})=>{const{backgroundColor:_}=(0,n.LP)(l,c);return a.AH`
      /*
        Margin should never be used with Popper.
        https://popper.js.org/docs/v2/migration-guide/#4-remove-all-css-margins
      */
      margin: 0 !important;
      z-index: ${u?r-1:t};
      background: ${_};
      border-radius: calc(${d} * ${e});
      box-shadow: ${o};
      color: ${s["foreground-color"]};

      @media (forced-colors: active) {
        border: 0.0625rem solid transparent;
      }

      &[data-popper-reference-hidden='true'] {
        visibility: hidden;
        pointer-events: none;
      }

      &[data-popper-placement^='top'] {
        > ${i} {
          top: calc(100%);

          ::before {
            border-bottom-right-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          height: ${p}px;
          bottom: -${p}px;
          left: 0;
          right: 0;
        }
      }

      &[data-popper-placement^='bottom'] {
        > ${i} {
          bottom: calc(100%);

          ::before {
            border-top-left-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          height: ${p}px;
          top: -${p}px;
          left: 0;
          right: 0;
        }
      }

      &[data-popper-placement^='right'] {
        > ${i} {
          right: calc(100%);

          ::before {
            border-bottom-left-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          width: ${p}px;
          left: -${p}px;
          top: 0;
          bottom: 0;
        }
      }

      &[data-popper-placement^='left'] {
        > ${i} {
          left: calc(100%);

          ::before {
            border-top-right-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          width: ${p}px;
          right: -${p}px;
          top: 0;
          bottom: 0;
        }
      }
    `});s.defaultProps=o.qn},9061:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(4848),o=r(8267),n=r(9586),i=r(7491);const s=o.Ay.span`
  display: inline-block;
  position: relative;
`,l=()=>{const e=(0,n.A)();return(0,a.jsxs)(s,{children:[(0,a.jsx)("span",{"aria-hidden":!0,children:"––"}),(0,a.jsx)(i.A,{children:e("no_value")})]})}},9187:(e,t,r)=>{r.d(t,{A:()=>a});const a=function(e,t,r){try{return e()}catch(e){if(t)return t(e)}finally{if(r)return r()}}},9252:(e,t,r)=>{r.d(t,{Ay:()=>z});var a=r(4848),o=r(1594),n=r(8267),i=r(6883),s=r(3113),l=r(8579),c=r(4853),d=r(4651),u=r(3456),p=r(9549),_=r(9586),m=r(4680),h=r(6878),f=r(3700);const g=e=>{const{status:t,dimension:r,transitionSpeed:a,transitionTimingFunction:o,min:n,max:i,nullWhenCollapsed:s,el:l}=e,c={};let d=i;return l&&!i&&(d=((e,t)=>e?"height"===t?`${e.scrollHeight}px`:`${e.scrollWidth}px`:"")(l,r)),"expanded"!==t&&"collapsed"!==t||((i||n)&&(c[r]="expanded"===t?d:n||0,c["overflow"+("width"===r?"X":"Y")]="hidden"),"collapsed"!==t||s||n||(c[r]=0,c.overflow="hidden",c.visibility="hidden")),"expanding"!==t&&"collapsing"!==t||(c[r]="expanding"===t?d:n||0,c.overflow="hidden",c.transitionProperty=r,c.transitionDuration=`max(${a}, 0.01ms)`,c.transitionTimingFunction=o),c},b=(0,o.forwardRef)(function(e,t){const{base:{animation:r}}=(0,u.A)(),{children:n,dimension:i="height",collapsed:s=!1,onBeforeExpand:l,onAfterExpand:d,onBeforeCollapse:p,onAfterCollapse:_,transitionSpeed:m=r.speed,min:h,max:b,nullWhenCollapsed:y=!1,as:v="div",...$}=e,[w,k]=(0,o.useState)(s?"collapsed":"expanded"),x=(0,o.useState)(),A=x[1];let C=x[0];const S=(0,f.A)(w),P=(0,c.A)(t),E=(0,o.useCallback)(e=>{e.target===P.current&&e.propertyName===i&&k("expanding"===w?"expanded":"collapsed")},[P.current,w]);return(0,o.useLayoutEffect)(()=>{const e=s,t=!s,a=["expanded","expanding"].includes(w),o=["collapsed","collapsing"].includes(w);t&&o?(l?.(),k("expanding")):e&&a&&(p?.(),k("collapsing")),"expanded"===w&&"expanded"!==S?d?.():"collapsed"===w&&"collapsed"!==S&&_?.(),A(g({dimension:i,min:h,max:b,transitionSpeed:m,nullWhenCollapsed:y,status:w,el:P.current,transitionTimingFunction:r.timing.ease}))},[s,w,h,b]),w!==S&&["expanded","collapsed"].includes(S)&&(C=g({dimension:i,min:h,max:b,transitionSpeed:m,nullWhenCollapsed:y,status:"expanding"===w?"collapsing":"expanding",el:P.current,transitionTimingFunction:r.timing.ease})),"collapsed"===w&&y&&!h?null:(0,a.jsx)(v,{ref:P,onTransitionEnd:E,...$,inert:"collapsed"!==w||y||h?void 0:"",style:C,children:n})}),y=(0,n.Ay)(h.Ay)``,v=({children:e,lines:t})=>{const[r,n]=(0,o.useState)(!0),[i,s]=(0,o.useState)(!1),l=(0,o.useRef)(null),c=(0,_.A)(),d=(0,o.useMemo)(()=>{if(!m.A)return 1/0;const e=1.25*Number.parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"),10);return t*e},[]);return(0,o.useLayoutEffect)(()=>{if(!l.current)return;const e=new ResizeObserver(e=>{const t=e.some(({target:e,contentRect:t})=>{if(e===l.current)return t.height>d});s(t)});return e.observe(l.current),()=>{e.disconnect()}},[l.current,d]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{collapsed:r,min:i?`${d}px`:"max-content",children:(0,a.jsx)("div",{ref:l,children:e})}),i&&(0,a.jsx)(y,{variant:"link",onClick:()=>n(e=>!e),children:c(r?"show_more":"show_less")})]})};var $=r(4869),w=r(9061),k=r(8044);const x=(0,k.A)("field-value-list",[]),A=(0,k.A)("field-value-item",["name","value"]),C=n.Ay.dt`
  word-break: break-word;
`,S=n.Ay.dd`
  word-break: break-word;
`,P=n.Ay.div``,E=n.Ay.dl(({variant:e,theme:t})=>{const{components:{"field-value-list":{inline:{detached:r}}}}=t;return n.AH`
    width: 100%;

    ${"value-comparison"===e&&n.AH`
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

    ${r&&"inline"===e&&n.AH`
      dt {
        width: 100%;
        padding-inline-end: calc(${t.base.spacing});
      }
      ${s.G} {
        max-width: unset;
      }
      dd:not(:last-of-type),
      dt:not(:last-of-type),
      dd:has(+ ${P}),
      dt:has(+ dd + ${P}),
      ${P}:has(+ dt + dd),
      ${P}:not(:last-of-type) {
        border-bottom: 0.0625rem dashed ${t.base.palette["border-line"]};
        padding-bottom: calc(0.5 * ${t.base.spacing});
      }
    `}
  `});E.defaultProps=p.qn;const T=(0,$.A)(({testId:e,name:t,value:r,variant:o="inline",truncate:n=!0})=>{const i=(0,l.A)(e,A),c="string"==typeof r&&n?(0,a.jsx)(v,{lines:3,children:r}):r,d=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.G,{"data-testid":i.name,as:C,role:"none",children:t}),(0,a.jsx)(S,{"data-testid":i.value,role:"none",children:r?c:(0,a.jsx)(w.A,{})})]});return"stacked"===o?(0,a.jsx)(P,{"data-testid":i.root,children:d}):(0,a.jsx)(a.Fragment,{children:d})},A),j=(0,o.forwardRef)(function({testId:e,fields:t,variant:r="inline",...o},n){const s=(0,l.A)(e,x),p=(0,c.A)(n),_=(0,d.A)("xs",{breakpointRef:p,themeProp:"content-width"}),{components:{"field-value-list":{inline:{detached:m}}}}=(0,u.A)();return(0,a.jsx)(i.A,{"data-testid":s.root,...o,ref:p,container:{cols:["inline","value-comparison"].includes(r)&&_?"16ch minmax(0, 1fr)":"minmax(0, 1fr)",colGap:m||"value-comparison"===r?0:2,rowGap:m||"value-comparison"===r?.5:1},as:E,role:"none",variant:_?r:"stacked",children:t.map(({id:e,name:t,value:o,truncate:n=!0,variant:i})=>{const s={name:t,variant:"stacked"!==(i??r)&&_?"inline":"stacked"};return"string"==typeof o?(0,a.jsx)(T,{...s,value:o,truncate:n},e??t):(0,a.jsx)(T,{...s,value:o},e??t)})})}),z=(0,$.A)(j,x)},9316:(e,t,r)=>{function a(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}r.d(t,{A:()=>n});var o=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,n=a(function(e){return o.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})},9417:(e,t,r)=>{function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{A:()=>a})},9463:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(1594),o=(r(8347),r(4680)),n=r(1649);const i=()=>{const e=o.A?window.cosmos.configurationContext??n.Q:n.Q;return(0,a.useContext)(e)}},9466:(e,t,r)=>{r.d(t,{A:()=>b});var a=r(4848),o=r(1594),n=r(5206),i=r(1357),s=r(7521),l=r(9586),c=r(9463),d=r(2884),u=r(3456),p=r(4853),_=r(7501),m=r(405);const h=(0,o.forwardRef)(function({value:e,minValue:t=0,maxValue:r=100,message:o,placement:n,style:i,...s},l){let c=e;return"number"==typeof e&&(c=e>r||t>r?0:e<t?100:-100*(1-(e-t)/(r-t))),(0,a.jsx)(m.QS,{ref:l,role:"progressbar","aria-valuemin":t,"aria-valuemax":r,"aria-valuenow":e,placement:n,determinate:"number"==typeof e,style:{...i,"--progress":c?`${c}%`:""},...s})}),f=(0,o.forwardRef)(function({message:e,placement:t,...r},o){return(0,a.jsx)(m.wE,{ref:o,role:"progressbar",placement:t,...r,children:(0,a.jsxs)("span",{children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]})})}),g={ring:(0,o.forwardRef)(function({value:e,minValue:t=0,maxValue:r=100,placement:o,...n},i){let s;const l=18*Math.PI;return s="number"!=typeof e?(1-.33)*l:e>r||t>r?0:e<t?l:(1-(e-t)/(r-t))*l,(0,a.jsx)(m.pT,{ref:i,role:"progressbar","aria-valuemin":t,"aria-valuemax":r,"aria-valuenow":e,placement:o,determinate:"number"==typeof e,...n,children:(0,a.jsxs)("svg",{viewBox:"0 0 20 20",children:[(0,a.jsx)("circle",{}),(0,a.jsx)("circle",{strokeDasharray:l,style:{strokeDashoffset:s}})]})})}),bar:h,ellipsis:f},b=(0,o.forwardRef)(function({variant:e="ring",placement:t="global",visible:r=!0,focusOnVisible:h=!1,delay:f=!1,onTransitionStartIn:b,onTransitionEndIn:y,onTransitionStartOut:v,onTransitionEndOut:$,value:w,message:k,liveConfig:x,...A},C){const S=(0,l.A)(),{portalTarget:P}=(0,c.A)(),{announcePolite:E}=(0,d.A)(),T=(0,u.A)(),j=(0,p.A)(C),[z,H]=(0,o.useState)(!f&&r),[R,I]=(0,o.useState)(!z),L=(0,o.useRef)(),O=(0,o.useRef)(),N=(0,o.useRef)(),D=(0,o.useRef)(),M="global"===t||"local"===t,q="number"==typeof w?`${w}%`:void 0,F=k&&q?`${k} - ${q}`:k||q,U=()=>{H(!0),I(!1)},W=()=>{H(!1),M||I(!0)};if((0,o.useEffect)(()=>{if(r)L.current=Date.now(),f?N.current=window.setTimeout(U,100):U();else if(void 0!==N.current)if(clearTimeout(N.current),void 0!==O.current){const e=Date.now()-O.current;e>=1e3?W():D.current=window.setTimeout(W,1e3-e)}else W();else W()},[r]),(0,o.useEffect)(()=>{x?.contextualLabel&&z&&E({message:`${x.contextualLabel}, ${F??S("loading")}`,type:"status"})},[z]),(0,o.useEffect)(()=>{!R&&z&&(O.current=Date.now(),h&&j.current?.focus())},[R]),R)return null;const B=g[e];let V=(0,a.jsx)(B,{"aria-label":"number"!=typeof w&&F?F:S("loading"),as:"inline"===t?"span":void 0,...A,placement:t,value:w,"aria-valuetext":"number"==typeof w?F:void 0,ref:j,tabIndex:-1});"inline"!==t&&(V=(0,a.jsxs)(_.A,{container:{direction:"column",alignItems:"center",gap:.5},as:m.r3,placement:t,children:[V,k&&(0,a.jsx)(s.A,{as:m.z5,variant:"secondary","aria-hidden":!0,children:k})]}));const G=(0,i.J1)(T.base.palette["foreground-color"])>.5?"dark":"light",X=M?(0,a.jsx)(m.D2,{open:z,container:{direction:"column"},position:"global"===t?"fixed":"absolute",variant:G,alpha:.8,onBeforeTransitionIn:b,onAfterTransitionIn:y,onBeforeTransitionOut:v,onAfterTransitionOut:()=>{I(!0),$?.()},children:V}):V;return"global"===t&&P?(0,n.createPortal)(X,P):X})},9549:(e,t,r)=>{r.d(t,{qR:()=>n,qn:()=>l});var a=r(4860);const o=JSON.parse('{"base":{"colors":{"white":{"$type":"literal","$value":"#ffffff"},"black":{"$type":"literal","$value":"#000000"},"gray":{"extra-light":{"$type":"literal","$value":"#f5f5f5"},"light":{"$type":"literal","$value":"#cfcfcf"},"medium":{"$type":"literal","$value":"#939393"},"dark":{"$type":"literal","$value":"#676767"},"extra-dark":{"$type":"literal","$value":"#3f3f3f"}},"slate":{"extra-light":{"$type":"literal","$value":"#e9eef3"},"light":{"$type":"literal","$value":"#cbd4dc"},"medium":{"$type":"literal","$value":"#8397ab"},"dark":{"$type":"literal","$value":"#4c5a67"},"extra-dark":{"$type":"literal","$value":"#252c32"}},"red":{"extra-light":{"$type":"literal","$value":"#ffdbde"},"light":{"$type":"literal","$value":"#f66f78"},"medium":{"$type":"literal","$value":"#d91c29"},"dark":{"$type":"literal","$value":"#a6020d"},"extra-dark":{"$type":"literal","$value":"#570006"}},"orange":{"extra-light":{"$type":"literal","$value":"#feede2"},"light":{"$type":"literal","$value":"#ffaa75"},"medium":{"$type":"literal","$value":"#fd6000"},"dark":{"$type":"literal","$value":"#b54703"},"extra-dark":{"$type":"literal","$value":"#5a2401"}},"green":{"extra-light":{"$type":"literal","$value":"#d4f7d5"},"light":{"$type":"literal","$value":"#7ee791"},"medium":{"$type":"literal","$value":"#20aa50"},"dark":{"$type":"literal","$value":"#156f35"},"extra-dark":{"$type":"literal","$value":"#0b381a"}},"blue":{"extra-light":{"$type":"literal","$value":"#e2f1ff"},"light":{"$type":"literal","$value":"#71baff"},"medium":{"$type":"literal","$value":"#076bc9"},"dark":{"$type":"literal","$value":"#054a8a"},"extra-dark":{"$type":"literal","$value":"#00284c"}},"purple":{"extra-light":{"$type":"literal","$value":"#f1e9fb"},"light":{"$type":"literal","$value":"#d6bcf5"},"medium":{"$type":"literal","$value":"#ac75f0"},"dark":{"$type":"literal","$value":"#681fc3"},"extra-dark":{"$type":"literal","$value":"#341061"}},"yellow":{"extra-light":{"$type":"literal","$value":"#fffce5"},"light":{"$type":"literal","$value":"#fff5b3"},"medium":{"$type":"literal","$value":"#ffdd33"},"dark":{"$type":"literal","$value":"#c29b00"},"extra-dark":{"$type":"literal","$value":"#856600"}}},"palette":{"ai":{"$type":"inherited","$value":"base.colors.purple.dark"},"app-background":{"$type":"inherited","$value":"base.colors.slate.extra-light"},"app-foreground":{"$type":"literal","$value":"auto"},"primary-background":{"$type":"inherited","$value":"base.colors.white"},"secondary-background":{"$type":"inherited","$value":"base.colors.gray.extra-light"},"foreground-color":{"$type":"inherited","$value":"base.palette.dark"},"brand-primary":{"$type":"inherited","$value":"base.colors.blue.medium"},"brand-secondary":{"$type":"inherited","$value":"base.palette.primary-background"},"brand-background":{"$type":"inherited","$value":"base.palette.brand-primary"},"brand-foreground":{"$type":"literal","$value":"auto"},"urgent":{"$type":"inherited","$value":"base.colors.red.medium"},"warn":{"$type":"inherited","$value":"base.colors.orange.medium"},"success":{"$type":"inherited","$value":"base.colors.green.medium"},"pending":{"$type":"inherited","$value":"base.colors.purple.dark"},"info":{"$type":"inherited","$value":"base.colors.slate.medium"},"interactive":{"$type":"inherited","$value":"base.palette.brand-primary"},"border-line":{"$type":"inherited","$value":"base.colors.gray.light"},"skeleton":{"$type":"inherited","$value":"base.colors.gray.extra-light"},"light":{"$type":"inherited","$value":"base.colors.white"},"dark":{"$type":"inherited","$value":"base.colors.black"},"background-color":{"$type":"inherited","$value":"base.palette.light"}},"font-family":{"$type":"literal","$value":"\'Open Sans\', sans-serif"},"font-size":{"$type":"literal","$value":"0.875rem"},"font-scale":{"$type":"literal","$value":"linear"},"font-stretch":{"$type":"literal","$value":"normal"},"letter-spacing":{"$type":"literal","$value":"normal"},"font-weight":{"bold":{"$type":"literal","$value":700},"semi-bold":{"$type":"literal","$value":600},"normal":{"$type":"literal","$value":400}},"line-height":{"$type":"literal","$value":"normal"},"scale":{"$type":"literal","$value":1},"border-radius":{"$type":"literal","$value":"0.5rem"},"spacing":{"$type":"literal","$value":"0.5rem"},"hit-area":{"compact":{"$type":"literal","$value":"1.5rem"},"compact-min":{"$type":"literal","$value":"24px"},"mouse":{"$type":"literal","$value":"2rem"},"mouse-min":{"$type":"literal","$value":"32px"},"finger":{"$type":"literal","$value":"2.75rem"},"finger-min":{"$type":"literal","$value":"44px"}},"custom-scrollbar":{"$type":"literal","$value":true},"animation":{"speed":{"$type":"literal","$value":"0.25s"},"timing":{"ease":{"$type":"literal","$value":"cubic-bezier(0.4, 0.6, 0.1,1)"},"ease-out":{"$type":"literal","$value":"ease-out"},"ease-in":{"$type":"literal","$value":"ease-in"}}},"transparency":{"transparent-1":{"$type":"literal","$value":0.8},"transparent-2":{"$type":"literal","$value":0.7},"transparent-3":{"$type":"literal","$value":0.6},"transparent-4":{"$type":"literal","$value":0.4},"transparent-5":{"$type":"literal","$value":0.3}},"disabled-opacity":{"$type":"inherited","$value":"base.transparency.transparent-4"},"shadow":{"high":{"$type":"literal","$value":"0 0.125rem 1.5rem rgba(0,0,0,.3)"},"low":{"$type":"literal","$value":"0 0.125rem 0.5rem rgba(0,0,0,.2)"},"high-filter":{"$type":"literal","$value":"drop-shadow(0 0.125rem 0.75rem rgba(0,0,0,.3))"},"low-filter":{"$type":"literal","$value":"drop-shadow(0 0.125rem 0.25rem rgba(0,0,0,.2))"},"focus":{"$type":"literal","$value":"0 0 0 0.11rem #fff, 0 0 0 0.18rem #076bc9, 0 0 0 0.3rem #076bc91a"},"focus-group":{"$type":"literal","$value":"0 0 0 0.125rem #076bc966"},"focus-group-inset":{"$type":"literal","$value":"inset 0 0 0 0.125rem #076bc966"},"focus-inset":{"$type":"literal","$value":"inset 0 0 0 0.11rem #fff, inset 0 0 0 0.18rem #076bc9, inset 0 0 0 0.3rem #076bc91a"},"focus-solid":{"$type":"literal","$value":"0 0 0 0.0625rem rgb(0, 118, 209)"},"focus-filter":{"$type":"literal","$value":"drop-shadow(0 0 0.125rem rgba(0, 118, 209, 0.30))"}},"z-index":{"popover":{"$type":"literal","$value":1000},"drawer":{"$type":"literal","$value":2000},"modal":{"$type":"literal","$value":3000},"alert":{"$type":"literal","$value":4000},"backdrop":{"$type":"literal","$value":7000},"toast":{"$type":"literal","$value":8000},"tooltip":{"$type":"literal","$value":9000},"max":{"$type":"literal","$value":2147483647}},"breakpoints":{"xs":{"$type":"literal","$value":"0em"},"sm":{"$type":"literal","$value":"31.25em"},"md":{"$type":"literal","$value":"62.5em"},"lg":{"$type":"literal","$value":"93.75em"},"xl":{"$type":"literal","$value":"125em"}},"content-width":{"xs":{"$type":"literal","$value":"20ch"},"sm":{"$type":"literal","$value":"40ch"},"md":{"$type":"literal","$value":"60ch"},"lg":{"$type":"literal","$value":"80ch"},"xl":{"$type":"literal","$value":"100ch"}},"icon-set":{"$type":"literal","$value":"budicon"}},"components":{"app-shell":{"nav":{"background":{"$type":"inherited","$value":"components.app-shell.nav.background-color"},"foreground-color":{"$type":"literal","$value":"auto"},"background-color":{"$type":"inherited","$value":"base.colors.slate.extra-dark"},"border-color":{"$type":"inherited","$value":"base.palette.border-line"},"detached":{"$type":"literal","$value":false}},"header":{"background":{"$type":"inherited","$value":"components.app-shell.header.background-color"},"foreground-color":{"$type":"literal","$value":"auto"},"background-color":{"$type":"inherited","$value":"base.palette.brand-secondary"},"border-color":{"$type":"inherited","$value":"base.palette.border-line"}}},"case-view":{"header":{"background":{"$type":"inherited","$value":"components.case-view.header.background-color"},"background-color":{"$type":"inherited","$value":"base.palette.brand-background"},"foreground-color":{"$type":"inherited","$value":"base.palette.brand-foreground"}},"summary":{"detached":{"$type":"literal","$value":false}},"utilities":{"detached":{"$type":"literal","$value":true},"background":{"$type":"literal","$value":"transparent"},"foreground-color":{"$type":"inherited","$value":"base.palette.foreground-color"}},"assignments":{"background":{"$type":"inherited","$value":"components.card.background"},"foreground-color":{"$type":"inherited","$value":"components.card.foreground-color"},"detached":{"$type":"literal","$value":false}},"stages":{"status":{"completed":{"foreground-color":{"$type":"inherited","$value":"components.card.foreground-color"},"background":{"$type":"inherited","$value":"components.card.background"}},"current":{"foreground-color":{"$type":"inherited","$value":"components.card.foreground-color"},"background":{"$type":"inherited","$value":"components.card.background"}},"pending":{"foreground-color":{"$type":"inherited","$value":"components.card.foreground-color"},"background":{"$type":"inherited","$value":"components.card.background"}}}}},"announcement":{"background":{"$type":"inherited","$value":"base.palette.brand-primary"},"foreground-color":{"$type":"literal","$value":"auto"}},"avatar":{"background-color":{"$type":"inherited","$value":"base.colors.slate.dark"}},"badges":{"font-stretch":{"$type":"inherited","$value":"base.font-stretch"},"status":{"success":{"foreground":{"$type":"inherited","$value":"base.colors.green.dark"},"background":{"$type":"inherited","$value":"base.colors.green.extra-light"}},"urgent":{"foreground":{"$type":"inherited","$value":"base.colors.red.dark"},"background":{"$type":"inherited","$value":"base.colors.red.extra-light"}},"warn":{"foreground":{"$type":"inherited","$value":"base.colors.orange.dark"},"background":{"$type":"inherited","$value":"base.colors.orange.extra-light"}},"pending":{"foreground":{"$type":"inherited","$value":"base.colors.purple.dark"},"background":{"$type":"inherited","$value":"base.colors.purple.extra-light"}},"info":{"foreground":{"$type":"inherited","$value":"base.colors.slate.dark"},"background":{"$type":"inherited","$value":"base.colors.slate.extra-light"}}},"tag":{"foreground":{"$type":"inherited","$value":"base.palette.interactive"},"background":{"$type":"inherited","$value":"base.palette.interactive"}},"count":{"default":{"foreground":{"$type":"inherited","$value":"base.colors.slate.dark"},"background":{"$type":"inherited","$value":"base.colors.slate.extra-light"}},"urgent":{"foreground":{"$type":"inherited","$value":"base.palette.light"},"background":{"$type":"inherited","$value":"base.palette.urgent"}}},"alert":{"urgent":{"background":{"$type":"inherited","$value":"base.palette.urgent"}},"success":{"background":{"$type":"inherited","$value":"base.palette.success"}},"base":{"border-color":{"$type":"inherited","$value":"base.palette.light"}}},"keyboard":{"background-color":{"$type":"inherited","$value":"base.colors.slate.extra-light"},"border-color":{"$type":"inherited","$value":"base.colors.slate.light"}}},"banner":{"icon-color":{"$type":"inherited","$value":"base.palette.light"},"urgent":{"background":{"$type":"inherited","$value":"base.palette.urgent"}},"warning":{"background":{"$type":"inherited","$value":"base.palette.warn"}},"success":{"background":{"$type":"inherited","$value":"base.palette.success"}},"ai":{"background":{"$type":"inherited","$value":"base.palette.ai"}},"info":{"background":{"$type":"inherited","$value":"base.palette.info"}}},"button":{"height":{"$type":"inherited","$value":"base.hit-area.mouse-min"},"border-width":{"$type":"literal","$value":"0.0625rem"},"border-radius":{"$type":"literal","$value":9999},"color":{"$type":"inherited","$value":"base.palette.interactive"},"foreground-color":{"$type":"inherited","$value":"base.palette.brand-foreground"},"secondary-color":{"$type":"inherited","$value":"base.palette.interactive"},"secondary-fill-style":{"$type":"literal","$value":"outline"},"focus-shadow":{"$type":"inherited","$value":"base.shadow.focus"},"padding":{"$type":"literal","$value":"0 1rem"},"touch":{"height":{"$type":"inherited","$value":"base.hit-area.finger-min"},"padding":{"$type":"literal","$value":"0 1.5rem"}}},"card":{"border-radius":{"$type":"inherited","$value":"base.border-radius"},"background":{"$type":"inherited","$value":"base.palette.primary-background"},"foreground-color":{"$type":"literal","$value":"auto"},"padding":{"$type":"inherited","$value":"base.spacing"},"border-color":{"$type":"inherited","$value":"base.palette.interactive"}},"checkbox":{"border-radius":{"$type":"inherited","$value":"components.form-control.border-radius"}},"field-value-list":{"inline":{"detached":{"$type":"literal","$value":false}}},"details":{"field-label":{"$type":"literal","$value":"inline"}},"form-control":{"foreground-color":{"$type":"inherited","$value":"base.palette.foreground-color"},"background-color":{"$type":"inherited","$value":"base.palette.primary-background"},"border-color":{"$type":"inherited","$value":"base.colors.gray.medium"},"border-width":{"$type":"literal","$value":"0.0625rem"},"border-radius":{"$type":"literal","$value":0.5},"padding":{"$type":"inherited","$value":"base.spacing"},":hover":{"border-color":{"$type":"inherited","$value":"base.colors.gray.extra-dark"}},":active":{"border-color":{"$type":"literal","$value":"transparent"}},":focus":{"border-color":{"$type":"literal","$value":"transparent"},"box-shadow":{"$type":"inherited","$value":"base.shadow.focus"}},":disabled":{"background-color":{"$type":"inherited","$value":"base.colors.gray.extra-light"},"border-color":{"$type":"inherited","$value":"base.colors.gray.light"}},":read-only":{"background-color":{"$type":"inherited","$value":"base.colors.gray.extra-light"},"border-color":{"$type":"literal","$value":"transparent"}}},"form-field":{"error":{"status-color":{"$type":"inherited","$value":"base.palette.urgent"}},"success":{"status-color":{"$type":"inherited","$value":"base.palette.success"}},"warning":{"status-color":{"$type":"inherited","$value":"base.palette.warn"}},"pending":{"status-color":{"$type":"inherited","$value":"base.palette.pending"}}},"input":{"height":{"$type":"literal","$value":"2rem"},"padding":{"$type":"inherited","$value":"components.form-control.padding"},"background-color":{"$type":"inherited","$value":"components.form-control.background-color"},"border-color":{"$type":"inherited","$value":"components.form-control.border-color"},"border-width":{"$type":"inherited","$value":"components.form-control.border-width"},"border-radius":{"$type":"inherited","$value":"components.form-control.border-radius"}},"icon":{"size":{"s":{"$type":"literal","$value":"1.125rem"},"m":{"$type":"literal","$value":"2rem"},"l":{"$type":"literal","$value":"4rem"}},"border-radius-multiplier":{"$comment":"Base border radius multiplier used for background border radius.","$type":"literal","$value":"0.5"}},"interaction-timer":{"notification-indicator":{"$type":"inherited","$value":"base.colors.red.light"},"sla":{"goal":{"progress":{"primary-color":{"$type":"inherited","$value":"base.colors.green.medium"},"secondary-color":{"$type":"inherited","$value":"base.colors.green.extra-dark"}}},"deadline":{"progress":{"primary-color":{"$type":"inherited","$value":"base.colors.orange.medium"},"secondary-color":{"$type":"inherited","$value":"base.colors.orange.extra-dark"}}},"past-deadline":{"progress":{"primary-color":{"$type":"inherited","$value":"base.colors.red.medium"},"secondary-color":{"$type":"inherited","$value":"base.colors.red.extra-dark"}}}}},"label":{"color":{"$type":"inherited","$value":"base.palette.foreground-color"},"font-size":{"$type":"literal","$value":"xs"},"font-weight":{"$type":"inherited","$value":"base.font-weight.semi-bold"},"foreground-color":{"$type":"literal","$value":"auto"}},"link":{"color":{"$type":"inherited","$value":"base.palette.interactive"}},"mark":{"background-color":{"$type":"inherited","$value":"base.colors.yellow.light"},"font-weight":{"$type":"inherited","$value":"base.font-weight.bold"}},"progress":{"progress-color":{"$type":"inherited","$value":"base.palette.brand-primary"}},"radio-check":{"border-color":{"$type":"inherited","$value":"components.form-control.border-color"},"border-width":{"$type":"inherited","$value":"components.form-control.border-width"},"background-color":{"$type":"inherited","$value":"components.form-control.background-color"},"foreground-color":{"$type":"inherited","$value":"base.palette.interactive"},"label":{"color":{"$type":"inherited","$value":"base.palette.foreground-color"},"font-weight":{"$type":"inherited","$value":"base.font-weight.normal"}},"size":{"$type":"literal","$value":"1.25rem"},"touch-size":{"$type":"literal","$value":"1.75rem"},":checked":{"background-color":{"$type":"inherited","$value":"base.palette.interactive"},"border-color":{"$type":"inherited","$value":"base.palette.interactive"}}},"radio-button":{"border-radius":{"$type":"literal","$value":"50%"}},"rating":{"color":{"$type":"inherited","$value":"base.palette.foreground-color"}},"search-input":{"border-radius":{"$type":"literal","$value":9999}},"select":{"height":{"$type":"literal","$value":"2rem"},"padding":{"$type":"inherited","$value":"components.form-control.padding"},"border-color":{"$type":"inherited","$value":"components.form-control.border-color"},"border-width":{"$type":"inherited","$value":"components.form-control.border-width"},"border-radius":{"$type":"inherited","$value":"components.form-control.border-radius"}},"sentiment":{"positive":{"color":{"$type":"inherited","$value":"base.palette.success"}},"negative":{"color":{"$type":"inherited","$value":"base.palette.urgent"}},"neutral":{"color":{"$type":"inherited","$value":"base.palette.foreground-color"}}},"switch":{"height":{"$type":"literal","$value":"1.5rem"},"width":{"$type":"literal","$value":"3rem"},"touch-height":{"$type":"literal","$value":"2rem"},"touch-width":{"$type":"literal","$value":"4rem"},"off":{"color":{"$type":"inherited","$value":"base.colors.gray.medium"}},"on":{"color":{"$type":"inherited","$value":"base.palette.interactive"}}},"tabs":{"detached":{"$type":"literal","$value":false}},"table":{"typography":{"font-stretch":{"$type":"literal","$value":"base.font-stretch"},"letter-spacing":{"$type":"inherited","$value":"base.letter-spacing"}},"header":{"font-size":{"$type":"literal","$value":"s"},"font-weight":{"$type":"inherited","$value":"base.font-weight.semi-bold"},"foreground-color":{"$type":"inherited","$value":"base.palette.foreground-color"},"background-color":{"$type":"inherited","$value":"base.palette.secondary-background"},"vertical-spacing":{"$type":"literal","$value":1},"horizontal-spacing":{"$type":"literal","$value":2},"border-width":{"$type":"literal","$value":"0.0625rem"},"border-color":{"$type":"inherited","$value":"base.palette.border-line"}},"striped-rows":{"$type":"literal","$value":true},"body":{"foreground-color":{"$type":"inherited","$value":"base.palette.foreground-color"},"background-color":{"$type":"inherited","$value":"base.palette.primary-background"},"secondary-background-color":{"$type":"inherited","$value":"components.table.header.background-color"},"vertical-spacing":{"$type":"literal","$value":1},"horizontal-spacing":{"$type":"literal","$value":1},"border-width":{"$type":"literal","$value":"0.0625rem"},"border-color":{"$type":"inherited","$value":"base.palette.border-line"}},"border":{"horizontal-inner":{"$type":"literal","$value":true},"horizontal-outer":{"$type":"literal","$value":true},"vertical-inner":{"$type":"literal","$value":true},"vertical-outer":{"$type":"literal","$value":true}},"spacing":{"horizontal-inner":{"$type":"literal","$value":true},"horizontal-outer":{"$type":"literal","$value":true},"vertical-inner":{"$type":"literal","$value":true},"vertical-outer":{"$type":"literal","$value":true}}},"task-manager":{"task-icon":{"banner":{"background":{"$type":"inherited","$value":"base.colors.orange.medium"},"foreground":{"$type":"inherited","$value":"base.colors.white"}},"action":{"background":{"$type":"inherited","$value":"base.palette.interactive"},"foreground":{"$type":"inherited","$value":"base.colors.white"}},"task-drawer":{"background":{"$type":"inherited","$value":"base.colors.gray.extra-light"},"foreground":{"$type":"inherited","$value":"base.colors.gray.extra-dark"}},"wrap-up":{"background":{"$type":"inherited","$value":"base.palette.dark"},"foreground":{"$type":"inherited","$value":"base.colors.white"}},"suggested":{"background":{"$type":"inherited","$value":"base.colors.slate.light"},"foreground":{"$type":"inherited","$value":"base.colors.gray.extra-dark"}},"queued":{"background":{"$type":"inherited","$value":"base.colors.slate.light"},"foreground":{"$type":"inherited","$value":"base.colors.gray.extra-dark"}},"in-progress":{"background":{"$type":"inherited","$value":"base.colors.slate.light"},"foreground":{"$type":"inherited","$value":"base.colors.gray.extra-dark"}},"resolved":{"background":{"$type":"inherited","$value":"base.colors.slate.light"},"foreground":{"$type":"inherited","$value":"base.colors.gray.extra-dark"}}}},"text":{"primary":{"font-size":{"$type":"literal","$value":"s"},"font-weight":{"$type":"inherited","$value":"base.font-weight.normal"},"font-family":{"$type":"inherited","$value":"base.font-family"}},"secondary":{"font-size":{"$type":"literal","$value":"xxs"},"font-weight":{"$type":"inherited","$value":"base.font-weight.normal"},"font-family":{"$type":"inherited","$value":"base.font-family"}},"h1":{"font-size":{"$type":"literal","$value":"xl"},"font-weight":{"$type":"inherited","$value":"base.font-weight.semi-bold"},"font-family":{"$type":"inherited","$value":"base.font-family"}},"h2":{"font-size":{"$type":"literal","$value":"l"},"font-weight":{"$type":"inherited","$value":"base.font-weight.semi-bold"},"font-family":{"$type":"inherited","$value":"base.font-family"}},"h3":{"font-size":{"$type":"literal","$value":"m"},"font-weight":{"$type":"inherited","$value":"base.font-weight.semi-bold"},"font-family":{"$type":"inherited","$value":"base.font-family"}},"h4":{"font-size":{"$type":"literal","$value":"s"},"font-weight":{"$type":"inherited","$value":"base.font-weight.semi-bold"},"font-family":{"$type":"inherited","$value":"base.font-family"}},"h5":{"font-size":{"$type":"literal","$value":"xs"},"font-weight":{"$type":"inherited","$value":"base.font-weight.semi-bold"},"font-family":{"$type":"inherited","$value":"base.font-family"}},"h6":{"font-size":{"$type":"literal","$value":"xxs"},"font-weight":{"$type":"inherited","$value":"base.font-weight.semi-bold"},"font-family":{"$type":"inherited","$value":"base.font-family"}},"brand-primary":{"font-family":{"$type":"inherited","$value":"components.text.primary.font-family"},"font-size":{"$type":"literal","$value":"s"},"font-weight":{"$type":"literal","$value":"base.font-weight.semi-bold"}}},"text-area":{"min-height":{"$type":"literal","$value":"3.75rem"},"padding":{"$type":"inherited","$value":"components.form-control.padding"}},"tooltip":{"foreground-color":{"$type":"inherited","$value":"base.colors.gray.extra-light"},"background-color":{"$type":"inherited","$value":"base.colors.gray.extra-dark"}}}}'),n=new a.A({definition:o}),i=n.theme,s=e=>Object.fromEntries(Object.entries(e).map(([e,t])=>t&&"object"==typeof t?[e,s(t)]:[e,a.L])),l=(s(i),Object.freeze({theme:i}))},9576:(e,t,r)=>{r.d(t,{A:()=>a});const a=(e,t,r)=>{const a=`pega-${e}`;return Object.entries(r??{}).reduce((e,[t,r])=>("string"==typeof r?e.push(`${a}-${t}-${r}`):!0===r&&e.push(`${a}-${t}`),e),t?[t,a]:[a]).join(" ")}},9586:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(1594),o=r(4848);var n=r(9463);const i=()=>{const{translations:e,locale:t}=(0,n.A)();return(0,a.useMemo)(()=>((e,t)=>{const r=new Intl.PluralRules(t),n=new Intl.PluralRules(t,{type:"ordinal"});return(t,i=[],s)=>{let l=e[t];if(!l)return`!unknown key: ${t}`;const c=[];return"object"==typeof l&&(l=l[("ordinal"===s?.pluralType?n:r).select(s?.count||0)]),l.split(/\{(\d+)\}/g).forEach((e,t)=>{const r=t%2?i[Number(e)]:e;void 0!==r&&""!==r&&c.push(r)}),c.every(e=>"string"==typeof e||"number"==typeof e)?c.join("").trim():c.map((e,t)=>(0,o.jsx)(a.Fragment,{children:e},t))}})(e,t),[e,t])}},9749:(e,t,r)=>{r.d(t,{A:()=>o});const a=(e=document)=>{let t=e.activeElement;return t?("iframe"===t.tagName.toLowerCase()&&t.contentDocument&&(t=a(t.contentDocument)??t),t.shadowRoot&&(t=a(t.shadowRoot)??t),t):null},o=a},9839:(e,t,r)=>{r.d(t,{A:()=>a});const a="undefined"!=typeof navigator}}]);
//# sourceMappingURL=PP8001_8684007.190a1d2d.js.map