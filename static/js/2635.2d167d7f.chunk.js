"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2635],{4987:function(e,n,t){t.d(n,{q:function(){return C},w:function(){return T}});var i=t(42893),r=t(12204),s=t(80815),o=t(24364),c=t(46591),a=t(41440),d=t(80657),l=t(47096),u=t(63498),p=t(40740),x=t(4292),m=t(87253),g=t(39839),h=t(47371),f=t(2304);const j=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\NavigationTabs\\index__Tabs",componentId:"sc-9b3b504e-0"})`
  ${h.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,v=(0,m.default)(a.rU).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\NavigationTabs\\index__StyledLink",componentId:"sc-9b3b504e-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,b=(0,m.default)(g.Tv.SubHeaderLarge).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\NavigationTabs\\index__FindPoolTabsText",componentId:"sc-9b3b504e-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,y=(0,m.default)(c.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\NavigationTabs\\index__StyledArrowLeft",componentId:"sc-9b3b504e-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function C({origin:e}){return(0,i.jsx)(j,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(a.rU,{to:e,children:(0,i.jsx)(y,{})}),(0,i.jsx)(b,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const w=(0,m.default)(g.Tv.SubHeaderLarge).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\NavigationTabs\\index__AddRemoveTitleText",componentId:"sc-9b3b504e-4"})`
  flex: 1;
  margin: auto;
`;function T({adding:e,creating:n,autoSlippage:t,positionID:c,children:a}){const{chainId:g}=(0,s.useWeb3React)(),h=(0,m.useTheme)(),b=(0,u.T)(),C=(0,d.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(c?`/${c.toString()}`:"");return(0,i.jsx)(j,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(v,{to:C,onClick:()=>{e&&(b((0,p.dA)()),b((0,x.dA)()))},flex:a?"1":void 0,children:(0,i.jsx)(y,{stroke:h.neutral2})}),(0,i.jsx)(w,{textAlign:a?"start":"center",children:n?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),a&&(0,i.jsx)(l.xu,{style:{marginRight:".5rem"},children:a}),(0,i.jsx)(o.Z,{autoSlippage:t,chainId:g,hideRoutingSettings:!0})]})})}},72714:function(e,n,t){t.d(n,{Z:function(){return c},e:function(){return o}});var i=t(42893),r=t(87253),s=t(437);const o=r.default.main.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-de634c55-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${s.k.default};
`;function c(e){return(0,i.jsx)(o,{...e})}},90958:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var i,r=t(42893),s=t(12204),o=t(19903),c=t(80815),a=t(66196),d=t(22875),l=t(6053),u=t(44998),p=t.n(u),x=t(13712),m=t(49287),g=t(80657),h=t(47096),f=t(39839),j=t(60198),v=t(42246),b=t(60476),y=t(56823),C=t(4987),w=t(16403),T=t(2304),O=t(20437),_=t(85729),k=t(58025),D=t(97761),I=t(42881),N=t(64614),S=t(21103),E=t(72714),G=t(55494);function $(){const e=new URLSearchParams((0,g.TH)().search),{account:n,chainId:t}=(0,c.useWeb3React)(),[u,$]=(0,x.useState)(!1),[A,H]=(0,x.useState)(i.TOKEN1),[L,z]=(0,x.useState)((()=>t?(0,k.gX)(t):null)),[P,W]=(0,x.useState)(null),[B,U]=(0,D.Oo)(L??void 0,P??void 0),K=(0,N.uB)();(0,x.useEffect)((()=>{U&&K(U)}),[U,K]);const q=B===D._G.NOT_EXISTS||Boolean(B===D._G.EXISTS&&U&&p().equal(U.reserve0.quotient,p().BigInt(0))&&p().equal(U.reserve1.quotient,p().BigInt(0))),R=(0,I.mM)(n??void 0,U?.liquidityToken),Z=Boolean(R&&p().greaterThan(R.quotient,p().BigInt(0))),F=(0,x.useCallback)((e=>{A===i.TOKEN0?z(e):W(e)}),[A]),M=(0,x.useCallback)((()=>{$(!1)}),[$]),X=(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsx)(h.xv,{textAlign:"center",children:n?(0,r.jsx)(s.cC,{id:"pKO91W"}):(0,r.jsx)(s.cC,{id:"4YB3Bt"})})});return(0,l.G)()?(0,r.jsx)(a.fM,{page:o.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(E.Z,{children:[(0,r.jsx)(C.q,{origin:e.get("origin")??"/pools/v2"}),(0,r.jsxs)(b.Tz,{style:{padding:"1rem"},gap:"md",children:[(0,r.jsx)(v.Pj,{children:(0,r.jsx)(b.Tz,{gap:"10px",children:(0,r.jsx)(f.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,r.jsx)(s.cC,{id:"qtO+b3",components:{0:(0,r.jsx)("b",{})}})})})}),(0,r.jsx)(j.KA,{onClick:()=>{$(!0),H(i.TOKEN0)},children:L?(0,r.jsxs)(T.ZP,{children:[(0,r.jsx)(y.Z,{currency:L}),(0,r.jsx)(h.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:L.symbol})]}):(0,r.jsx)(h.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(s.cC,{id:"T0Y2+3"})})}),(0,r.jsx)(b.lg,{children:(0,r.jsx)(m.Z,{size:"16",color:"#888D9B"})}),(0,r.jsx)(j.KA,{onClick:()=>{$(!0),H(i.TOKEN1)},children:P?(0,r.jsxs)(T.ZP,{children:[(0,r.jsx)(y.Z,{currency:P}),(0,r.jsx)(h.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:P.symbol})]}):(0,r.jsx)(h.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(s.cC,{id:"T0Y2+3"})})}),Z&&(0,r.jsxs)(b.lg,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,r.jsx)(h.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(s.cC,{id:"lYF0uv"})}),(0,r.jsx)(f.m_,{to:"pools/v2",children:(0,r.jsx)(h.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"/4YRTg"})})})]}),L&&P?B===D._G.EXISTS?Z&&U?(0,r.jsx)(w.WP,{pair:U,border:"1px solid #CED0D9"}):(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsxs)(b.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(h.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"Lu0Uod"})}),(0,r.jsx)(f.m_,{to:`/add/${(0,S.H)(L)}/${(0,S.H)(P)}`,children:(0,r.jsx)(h.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"xJEVlK"})})})]})}):q?(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsxs)(b.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(h.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"+8rnEI"})}),(0,r.jsx)(f.m_,{to:`/add/${(0,S.H)(L)}/${(0,S.H)(P)}`,children:(0,r.jsx)(s.cC,{id:"I1gztT"})})]})}):B===D._G.INVALID?(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsx)(b.Tz,{gap:"sm",justify:"center",children:(0,r.jsx)(h.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(s.cC,{id:"ovVGFw"})})})}):B===D._G.LOADING?(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsx)(b.Tz,{gap:"sm",justify:"center",children:(0,r.jsxs)(h.xv,{textAlign:"center",children:[(0,r.jsx)(s.cC,{id:"yQE2r9"}),(0,r.jsx)(G.bb,{})]})})}):null:X]}),(0,r.jsx)(O.Z,{isOpen:u,onCurrencySelect:F,onDismiss:M,showCommonBases:!0,selectedCurrency:(A===i.TOKEN0?P:L)??void 0})]}),(0,r.jsx)(_.c,{})]})}):(0,r.jsx)(d.A,{})}!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(i||(i={}))},55494:function(e,n,t){t.d(n,{DC:function(){return c},ER:function(){return a},bb:function(){return d},im:function(){return o},pr:function(){return l}});var i=t(13119),r=t(47096),s=t(87253);const o=s.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\styled__Wrapper",componentId:"sc-e4e1fcd6-0"})`
  position: relative;
  padding: 20px;
`,c=(0,s.default)(r.xv).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\styled__ClickableText",componentId:"sc-e4e1fcd6-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,a=s.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\styled__MaxButton",componentId:"sc-e4e1fcd6-2"})`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,d=s.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\styled__Dots",componentId:"sc-e4e1fcd6-3"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,l=(0,s.default)(i.pr).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\styled__LoadingRows",componentId:"sc-e4e1fcd6-4"})`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},49111:function(e,n,t){t.d(n,{B:function(){return s}});var i=t(48141),r=t(58025);function s(e){if(e.isNative)return e;const n=(0,i.oG)(e.chainId);return n&&r.Fl[n]?.equals(e)?(0,r.gX)(e.chainId):e}},49287:function(e,n,t){var i=t(13712),r=t(41432),s=t.n(r);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,s=e.size,a=void 0===s?24:s,d=c(e,["color","size"]);return i.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));a.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},a.displayName="Plus",n.Z=a}}]);
//# sourceMappingURL=2635.2d167d7f.chunk.js.map