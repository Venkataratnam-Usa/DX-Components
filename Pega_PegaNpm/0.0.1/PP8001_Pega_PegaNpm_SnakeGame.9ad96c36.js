(self.webpackChunkdxcomponent=self.webpackChunkdxcomponent||[]).push([[8325664],{2020:(e,r,o)=>{var a={};function t(e){return Promise.resolve().then(()=>{if(!o.o(a,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return o(a[e])})}t.keys=()=>Object.keys(a),t.id=2020,e.exports=t},6049:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>W});var a=o(1594),t=o(4848),n=o(8267),d=o(9549),s=o(7501),i=o(8889),c=o(3901);const l=n.Ay.div`
  img,
  video,
  audio {
    object-fit: cover;
    width: 100%;
  }
`,b=n.Ay.article(e=>{const r=(0,c.gP)(),{"border-radius":o,"border-color":a,background:t}=e.theme.components.card,d=e.interactive?n.AH`
        &:hover {
          border: 0;
          box-shadow: 0 0 0 0.0625rem ${a};
        }
        &:focus {
          border: 0;
          box-shadow: 0 0 0 0.125rem ${a};
        }
      `:void 0;return n.AH`
    ${i.l} &, &:not(& &) {
      background: ${t};

      &:focus {
        outline: none;
      }

      ${d}

      ${l} {
        &:first-child img {
          border-radius: var(--container-border-radius, ${o})
            var(--container-border-radius, ${o}) 0 0;
        }
      }

      ${r?.[0]?n.AH`
            block-size: 100%;
            border-radius: 0;
          `:n.AH`
            border-radius: var(--border-radius, ${o});
            --container-border-radius: var(--border-radius, ${o});
            * {
              --border-radius: calc(var(--container-border-radius) * 0.5);
            }
          `}
    }
  `});b.defaultProps=d.qn;const u=(0,a.forwardRef)(function({children:e,as:r,onClick:o,interactive:a=!1,...n},d){const i={...o&&{onClick:o,tabIndex:0,role:"button"},...a&&{tabIndex:0},interactive:a};return(0,t.jsx)(s.A,{role:"none",container:{direction:"column"},as:b,forwardedAs:r,ref:d,...i,...n,children:e})});var p=o(6765),h=o(6224),f=o(1357),m=o(7321),$=o(9238),g=o(9586),x=o(2477),y=o(4853),A=o(3351),k=o(5387),v=o(9187),w=o(1564),H=o(331),j=o(1269);const P=(0,a.createContext)({level:1});(0,p.pU)($);const N=e=>n.AH`
  ::after {
    display: block;
    background-color: ${e};
  }
`,S=({detached:e,level:r,opacity:o,color:a})=>r&&r>1&&!e?n.AH`
        ::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          border-radius: inherit;
          background-color: currentColor;
          opacity: ${o};
        }
      `:n.AH`
        background-color: ${a};
        border-start-start-radius: ${e?0:"calc(0.5rem * 0.5)"};
        border-start-end-radius: ${e?0:"calc(0.5rem * 0.5)"};
      `,E=(0,n.Ay)(H.A)(({theme:e,tabType:r,selected:o,level:a})=>n.AH`
    position: relative;
    background: none;
    cursor: pointer;
    white-space: nowrap;

    ${o&&n.AH`
      font-weight: bold;
    `}

    & + & {
      margin-inline-start: 0;
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: ${e.base["disabled-opacity"]};
    }

    ${"horizontal"===r?(({selected:e,level:r,theme:o})=>{const a=o.components.button.color,t=o.base.palette["foreground-color"],{detached:d}=o.components.tabs,s=d?o.base.palette["primary-background"]:o.base.palette["secondary-background"],i=(0,v.A)(()=>(0,f.No)(.3,a))??"",c=(0,m.VR)(s)?s:(0,f.W0)(a),l=(0,v.A)(()=>(0,f.IM)(a,c).AA)?a:(0,m.ho)(a,c),b=d?(0,v.A)(()=>(0,f.No)(.95,t)):(0,v.A)(()=>(0,f.jh)(.9,c,l)),u=d?o.base.palette["secondary-background"]:(0,v.A)(()=>(0,f.jh)(.8,c,l)),{spacing:p}=o.base;let h=o.base.palette.interactive;return(0,f.IM)(h,c).AA||(h=(0,m.ho)(h,c)),n.AH`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: calc(4 * ${p});
    padding: 0 calc(1.5 * ${p});
    border: none;
    text-decoration: none;

    @media (pointer: coarse) {
      height: ${o.base["hit-area"]["finger-min"]};
    }

    span:first-of-type {
      color: ${e?a:t};
      display: inline-block;

      ::before {
        content: attr(data-content) / '';
        display: block;
        font-weight: bold;
        height: 0;
        overflow: hidden;
        visibility: hidden;
      }
    }

    &:first-child {
      margin-left: 0;
    }
    ::after {
      background: ${e?a:i};
      display: ${e?"block":"none"};
      content: '';
      position: absolute;
      height: 0.125rem;
      bottom: 0;
      left: calc(1.5 * ${p});
      right: calc(1.5 * ${p});
    }

    ${e?n.AH`
          ${r&&r>1&&n.AH`
            background-color: ${o.base.palette["primary-background"]};
          `}
        `:n.AH`
          @media (hover: hover) {
            &:not(:disabled):hover {
              text-decoration: none;
              ${S({detached:d,level:r,opacity:.1,color:b})}
            }

            &:not(:disabled):active {
              text-decoration: none;
              ${S({detached:d,level:r,opacity:.2,color:u})}
            }
          }
        `}

    &:focus,
    &:not([disabled]):focus {
      border-radius: calc(0.5rem * 0.5);
      box-shadow: ${o.base.shadow["focus-inset"]};
      text-decoration: none;
      ::after {
        display: none;
      }
    }

    @media (pointer: coarse) {
      min-block-size: ${o.base["hit-area"].finger};
    }

    ${w.B} {
      margin-inline-start: calc(0.5 * ${p});
    }

    ${d&&n.AH`
      &[aria-selected='true'],
      &:focus,
      &:not([disabled]):focus {
        color: ${h};
        span:first-of-type {
          color: ${h};
        }
        background: ${u};
      }
      &:hover:not(:disabled):not([aria-selected='true']) {
        background: ${b};
        border-radius: 0;
        color: ${t};
        span:first-of-type {
          color: ${t};
        }
      }
    `}
  `})({theme:e,selected:o,level:a}):(({selected:e,theme:r})=>{const{detached:o}=r.components.tabs,a=r.base.palette["border-line"],t=r.base.palette.interactive,d=r.base.palette["foreground-color"],s=r.base.palette["secondary-background"],i=(0,v.A)(()=>(0,f.No)(o?.95:.5,o?d:t))??"",{spacing:c}=r.base,l=o?s:(0,f.No)(.75,t),b=o?t:(0,m.ZS)(l,d);return n.AH`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-style: solid;
    color: ${d};
    border-width: 0.0625rem 0;
    border-color: ${o?"transparent":a};
    height: calc(5.5 * ${c});
    margin-top: -0.0625rem;
    padding: 0 calc(2 * ${c});
    text-decoration: none;

    &:first-child {
      border-top: 0.0625rem solid ${o?"transparent":a};
    }
    ::after {
      content: '';
      position: absolute;
      display: ${e?"block":"none"};
      top: 0;
      bottom: 0;
      ${o?"left: 0;":"right: 0;"}
      width: 0.25rem;
      background: ${t};
    }
    &:hover&:not(:disabled) {
      ${N(i)}
      text-decoration: none;
    }

    &:focus,
    &:not([disabled]):focus {
      ${N(t)}
      box-shadow: inset 0 0 0 0.0625rem ${t};
      text-decoration: none;
    }

    ${o&&n.AH`
      border-radius: calc(0.5 * ${r.base["border-radius"]});
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin: calc(0.125 * ${c}) calc(2 * ${c});

      &:not([disabled]):focus,
      &[aria-selected='true'] {
        background: ${l};
        color: ${b};
      }
      &:hover&:not(:disabled):not([aria-selected='true']) {
        background: ${i};
      }
    `}
  `})({theme:e,selected:o})}

    ${R} {
      margin-inline-end: calc(0.5 * ${e.base.spacing});
    }
  `);E.defaultProps=d.qn,(0,a.forwardRef)(function({selected:e,content:r,count:o,type:n,disabled:d,errors:s,...i},c){const l=(0,g.A)(),[b,u]=(0,x.A)(),p=(0,y.A)(c,u),{level:h}=(0,a.useContext)(P),f=(0,A.A)(),m=(0,A.A)(),$=(0,A.A)(),v=[];return"number"==typeof o&&v.push(f),"number"==typeof o&&s&&v.push($),s&&v.push(m),(0,t.jsxs)(E,{ref:p,selected:e,tabType:n,disabled:d,level:h,"aria-describedby":v.length>0?v.join(" "):void 0,...i,children:[(0,t.jsxs)("span",{children:[!!s&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(R,{name:"warn-solid"}),(0,t.jsx)(k.A,{target:b,hideDelay:"none",showDelay:"none",describeTarget:!1,children:l("tab_error_tooltip",[r])}),(0,t.jsx)(j.A,{id:m,children:l("tab_error_description")})]}),(0,t.jsx)("span",{"data-content":r,children:r})]}),"number"==typeof o&&(0,t.jsx)(w.A,{id:f,children:o}),"number"==typeof o&&s&&(0,t.jsx)(j.A,{id:$,children:","})]})});const C=n.Ay.div(({theme:e})=>n.AH`
    border-block-end: ${e.components.tabs.detached?"none":`0.0625rem solid ${e.base.palette["border-line"]}`};
    border-inline-end: ${e.components.tabs.detached?"none":`0.0625rem solid ${e.base.palette["border-line"]}`};
    height: calc(${e.base["hit-area"]["mouse-min"]} + 0.0625rem);

    ${e.components.tabs.detached&&n.AH`
      padding: 0;
    `};

    @media (pointer: coarse) {
      height: calc(${e.base["hit-area"]["finger-min"]} + 0.0625rem);
    }
  `);C.defaultProps=d.qn;const O=n.Ay.div(({theme:e,hasScrollBar:r,level:o})=>n.AH`
    position: relative;

    ${e.components.tabs.detached&&n.AH`
      ${E} + ${E} {
        margin-inline-start: calc(2 * ${e.base.spacing});
      }
      &[aria-orientation='horizontal'] {
        background-color: ${e.base.palette["secondary-background"]};
        border-radius: var(--border-radius, ${e.base["border-radius"]});
        border-end-end-radius: 0;
        border-end-start-radius: 0;
        > ${E} {
          background-color: ${e.base.palette["secondary-background"]};
          &[aria-selected='true'] {
            background-color: ${e.base.palette["primary-background"]};
          }
          ${!r&&n.AH`
            :first-child {
              border-top-left-radius: var(--border-radius, ${e.base["border-radius"]});
            }
          `}
          ${r&&n.AH`
            :last-child {
              border-top-right-radius: var(--border-radius, ${e.base["border-radius"]});
            }
          `}
        }
      }
    `}

    &[aria-orientation='horizontal'] {
      height: max-content;
      overflow: auto;

      ${r?n.AH`
            max-width: calc(
              100% - ${e.base["hit-area"]["mouse-min"]} -
                ${o>1?"0px":`calc(0.5 * ${e.base.spacing}) - 0.0625rem `}
            );

            ${E} {
              border-block-end: ${e.components.tabs.detached?"none":`0.0625rem solid ${e.base.palette["border-line"]}`};
              height: calc(${e.base["hit-area"]["mouse-min"]} + 0.0625rem);

              @media (pointer: coarse) {
                height: calc(${e.base["hit-area"]["finger-min"]} + 0.0625rem);
              }

              &:disabled {
                opacity: 1;
                > * {
                  opacity: ${e.base["disabled-opacity"]};
                }
              }
            }
          `:n.AH`
            border-block-end: ${e.components.tabs.detached?"none":`0.0625rem solid ${e.base.palette["border-line"]}`};
            ${o>1&&n.AH`
              background-color: ${e.base.palette["secondary-background"]};
              border: ${e.components.tabs.detached?"none":`0.0625rem solid ${e.base.palette["border-line"]}`};
              border-block-end: none;
              border-radius: 0;
              border-start-start-radius: ${e.components.tabs.detached?`var(--border-radius, ${e.base["border-radius"]})`:"calc(0.5rem * 0.5)"};
              border-start-end-radius: ${e.components.tabs.detached?`var(--border-radius, ${e.base["border-radius"]})`:"calc(0.5rem * 0.5)"};
            `}
          `}
      ${e.components.tabs.detached&&n.AH`
        padding-block: 0;
        border: 0.0625rem solid ${e.base.palette["border-line"]};
        border-block-end: none;

        ${C} + & {
          padding-inline-start: calc(0.25 * ${e.base.spacing});
        }
        ${E} + ${E} {
          margin-inline-start: 0;
        }
        ${r&&n.AH`
          border: none;
          border-inline-start: none;
          max-width: calc(100% - ${e.base["hit-area"]["mouse-min"]});

          @media (pointer: coarse) {
            max-width: calc(100% - ${e.base["hit-area"]["finger-min"]});
          }
        `}
      `}
    }

    &:has(:focus-visible) {
      &[aria-orientation='vertical'] {
        box-shadow: ${e.base.shadow["focus-group-inset"]};
      }

      &[aria-orientation='horizontal'] {
        box-shadow: ${e.base.shadow["focus-group"]};
      }
    }
  `);O.defaultProps=d.qn,(0,n.Ay)(h.A)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`.defaultProps=d.qn;const R=(0,n.Ay)(p.Ay)(({theme:e})=>n.AH`
    color: ${e.base.palette.urgent};
  `);R.defaultProps=d.qn;const T=n.Ay.div(({theme:e,level:r})=>n.AH`
    ${r>1&&n.AH`
      background-color: ${e.base.palette["secondary-background"]};
      ${!e.components.tabs.detached&&n.AH`
        border-inline: 0.0625rem solid ${e.base.palette["border-line"]};
        border-block-start: 0.0625rem solid ${e.base.palette["border-line"]};
        border-start-start-radius: calc(0.5rem * 0.5);
        border-start-end-radius: calc(0.5rem * 0.5);
      `}

      ${C}, ${E} {
        border-block-end: none;
        border-inline-end: none;
      }
    `}
    ${e.components.tabs.detached&&n.AH`
      background-color: ${e.base.palette["primary-background"]};
      border: 0.0625rem solid ${e.base.palette["border-line"]};
      border-block-end: none;
      ${C} {
        border-radius: 0;
      }
    `}
  `);T.defaultProps=d.qn;const D=n.Ay.span(({theme:e,transparent:r})=>n.AH`
    align-self: center;
    height: 1em;
    min-width: 0.0625rem;
    background-color: ${r?"transparent":e.base.palette["border-line"]};
  `);D.defaultProps=d.qn;const I=n.Ay.footer(({theme:e})=>n.AH`
    ${i.l} &, &:not(${b} ${b} > &) {
      padding: calc(1.5 * ${e.base.spacing}) calc(${e.components.card.padding} * 2);
    }
  `);I.defaultProps=d.qn;const M=n.Ay.div(({theme:e})=>n.AH`
    ${i.l} &, &:not(${b} ${b} > &) {
      position: relative;
      padding: calc(1.5 * ${e.base.spacing}) calc(${e.components.card.padding} * 2);

      & + &,
      & + ${I} {
        padding-block-start: 0;
      }
    }
  `);M.defaultProps=d.qn;const _=({children:e,container:r,...o})=>(0,t.jsx)(s.A,{...o,container:{direction:"column",...r},as:M,children:e}),q=n.Ay.header(({theme:e,onClick:r})=>n.AH`
    ${i.l} &, &:not(${b} ${b} > &) {
      padding: calc(1.5 * ${e.base.spacing}) calc(${e.components.card.padding} * 2);

      &:has(${O}:first-child) {
        padding-block-start: 0;
      }

      > ${O} {
        min-inline-size: calc(100% + ${e.components.card.padding} * 4);
        margin-inline-start: calc(${e.components.card.padding} * -2);
      }

      + ${M} {
        padding-block-start: 0;

        /* Plain selector is used instead of StyledTabPanel due to cyclic dependency. */
        > [role='tabpanel'] {
          padding-block-start: 0;
        }
      }

      &:hover {
        ${r?"cursor: pointer;":void 0}
      }
    }
  `);q.defaultProps=d.qn;const U=(0,a.forwardRef)(function({children:e,actions:r,...o},a){return(0,t.jsx)(s.A,{container:{alignItems:"center",justify:"between"},as:q,...o,ref:a,children:r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.A,{container:{alignItems:"center"},item:{grow:1},children:e}),(0,t.jsx)("div",{children:r})]}):e})});U.displayName="CardHeader";const F=U;var L=o(1093);const z=n.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* 🌌 SPACE BACKGROUND */
  background: radial-gradient(circle at top, #0f2027, #203a43, #000);
  padding: 20px;
  min-height: 100vh;

  .score-board {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 18px;
    color: #00e5ff;
    margin-bottom: 12px;
    animation: scorePop 0.4s ease;
  }

  /* 🎯 Score Animation */
  @keyframes scorePop {
    0% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  .board {
    display: grid;
    grid-template-columns: repeat(20, 22px);
    grid-template-rows: repeat(20, 22px);

    background: rgba(0, 0, 0, 0.8);
    border: 3px solid #00e5ff;
    border-radius: 12px;
    box-shadow: 0 0 25px #00e5ff;
  }

  .cell {
    width: 22px;
    height: 22px;
    background: transparent;
  }

  /* 🐍 NEON SNAKE BODY */
  .snake {
    background: linear-gradient(135deg, #00ff88, #00c853);
    border-radius: 50%;
    box-shadow: 0 0 8px #00ff88, 0 0 16px #00ff88;
    transition: 0.1s;
  }

  /* 🟢 SNAKE HEAD */
  .snake-head {
    background: linear-gradient(135deg, #76ff03, #00c853);
    border-radius: 50%;
    box-shadow: 0 0 12px #76ff03, 0 0 25px #76ff03;
    transform: scale(1.1);
  }

  /* 🌈 Animated Food Pulse */
  .food {
    background: radial-gradient(circle, #ff1744, #b71c1c);
    border-radius: 50%;
    animation: pulse 1s infinite;
    box-shadow: 0 0 15px #ff1744;
  }

  @keyframes pulse {
    0% { transform: scale(1); box-shadow: 0 0 10px #ff1744; }
    50% { transform: scale(1.3); box-shadow: 0 0 25px #ff1744; }
    100% { transform: scale(1); box-shadow: 0 0 10px #ff1744; }
  }

  .game-over {
    text-align: center;
    margin-top: 20px;
    color: orangered;
    font-weight: bold;
     animation: gameOverFlash 1s infinite;
  }

  button {
    padding: 8px 14px;
    cursor: pointer;
    background: #00e5ff;
    color: black;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    transition: 0.2s;
  }

  button:hover {
    background: #00bcd4;
    transform: scale(1.05);
  }
`,G=20,B=[{x:10,y:10}],W=(0,L.A)(function(e){const{title:r="Snake Game - Venkat USA"}=e,[o,n]=(0,a.useState)(B),[d,s]=(0,a.useState)(()=>({x:Math.floor(Math.random()*G),y:Math.floor(Math.random()*G)})),[i,c]=(0,a.useState)("RIGHT"),[l,b]=(0,a.useState)(!1),[p,h]=(0,a.useState)(0),[f,m]=(0,a.useState)(200),$=(0,a.useRef)(null),g=(0,a.useRef)(new Audio("https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg")),x=(0,a.useRef)(new Audio("https://actions.google.com/sounds/v1/cartoon/concussive_drum_hit.ogg"));function y(){return{x:Math.floor(Math.random()*G),y:Math.floor(Math.random()*G)}}function A(){b(!0),x.current.play()}const k=(0,a.useCallback)(()=>{n(e=>{const r={...e[0]};if("UP"===i&&(r.y-=1),"DOWN"===i&&(r.y+=1),"LEFT"===i&&(r.x-=1),"RIGHT"===i&&(r.x+=1),r.x<0||r.y<0||r.x>=G||r.y>=G)return A(),e;if(e.some(e=>e.x===r.x&&e.y===r.y))return A(),e;const o=[r,...e];if(r.x===d.x&&r.y===d.y){g.current.play();const e=p+10;h(e),e%50==0&&f>60&&m(e=>e-20),s(y())}else o.pop();return o})},[i,d,p,f]);return(0,a.useEffect)(()=>{function e(e){"ArrowUp"===e.key&&"DOWN"!==i&&c("UP"),"ArrowDown"===e.key&&"UP"!==i&&c("DOWN"),"ArrowLeft"===e.key&&"RIGHT"!==i&&c("LEFT"),"ArrowRight"===e.key&&"LEFT"!==i&&c("RIGHT")}return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[i]),(0,a.useEffect)(()=>{if(!l)return $.current=window.setInterval(k,f),()=>{null!==$.current&&clearInterval($.current)}},[k,f,l]),(0,t.jsx)(z,{children:(0,t.jsxs)(u,{children:[(0,t.jsx)(F,{children:r}),(0,t.jsxs)(_,{children:[(0,t.jsxs)("div",{className:"score-board",children:[(0,t.jsxs)("span",{children:["Score: ",p]}),(0,t.jsxs)("span",{children:["Level: ",Math.floor(p/50)+1]})]}),(0,t.jsx)("div",{className:"board",children:function(){const e=[];for(let r=0;r<G;r+=1)for(let a=0;a<G;a+=1){const n=o[0]?.x===a&&o[0]?.y===r,s=o.some(e=>e.x===a&&e.y===r),i=d.x===a&&d.y===r;e.push((0,t.jsx)("div",{className:`cell ${s?"snake":""} ${n?"snake-head":""} ${i?"food":""}`},`${r}-${a}`))}return e}()}),l&&(0,t.jsxs)("div",{className:"game-over",children:[(0,t.jsx)("p",{children:" Game Over"}),(0,t.jsxs)("p",{children:["Final Score: ",p]}),(0,t.jsx)("button",{type:"button",onClick:function(){n(B),s(y()),c("RIGHT"),b(!1),h(0),m(200)},children:"Restart"})]})]})]})})})},6935:e=>{function r(e){return Promise.resolve().then(()=>{var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r})}r.keys=()=>[],r.resolve=r,r.id=6935,e.exports=r}}]);
//# sourceMappingURL=PP8001_Pega_PegaNpm_SnakeGame.9ad96c36.js.map