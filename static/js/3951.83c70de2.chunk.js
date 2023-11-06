"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3951],{6053:function(e,n,t){t.d(n,{G:function(){return r}});var i=t(80815),o=t(48141);function r(){const{chainId:e}=(0,i.useWeb3React)();return e&&o.Ep.includes(e)}},83951:function(e,n,t){t.r(n),t.d(n,{default:function(){return Te}});var i,o,r,s=t(42893),a=t(12204),d=t(19903),c=t(80815),l=t(66196),p=t(18646),m=t(60198),u=t(60476),x=t(13712),f=t(41440),h=t(87253),g=t(39839);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},w.apply(this,arguments)}function j(e,n){let{title:t,titleId:s,...a}=e;return x.createElement("svg",w({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":s},a),t?x.createElement("title",{id:s},t):null,i||(i=x.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=x.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=x.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const v=x.forwardRef(j);t.p;var y,C=t(55338),b=t(56564),k=t(13120);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(y||(y={}));const O=(0,h.default)(v).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Menu\\index__StyledMenuIcon",componentId:"sc-ef21e182-0"})`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,_=h.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Menu\\index__StyledMenu",componentId:"sc-ef21e182-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,T=h.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Menu\\index__MenuFlyout",componentId:"sc-ef21e182-2"})`
  min-width: 196px;
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border: 1px solid ${({theme:e})=>e.surface1};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 3rem;
  z-index: 100;

  ${({flyoutAlignment:e=y.RIGHT})=>e===y.RIGHT?h.css`
          right: 0rem;
        `:h.css`
          left: 0rem;
        `};
`,D=(0,h.default)(g.dL).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Menu\\index__MenuItem",componentId:"sc-ef21e182-3"})`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
`,I=(0,h.default)(f.rU).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Menu\\index__InternalMenuItem",componentId:"sc-ef21e182-4"})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({theme:e})=>e.neutral2};
  width: max-content;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`,P=(0,h.default)(D).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Menu\\index__ExternalMenuItem",componentId:"sc-ef21e182-5"})`
  width: max-content;
  text-decoration: none;
`;var L=t(22230),H=t(1990);const N=h.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\PositionList\\index__DesktopHeader",componentId:"sc-f5e51e03-0"})`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${H.e.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,E=h.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\PositionList\\index__MobileHeader",componentId:"sc-f5e51e03-1"})`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${H.e.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${H.e.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,U=h.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\PositionList\\index__ToggleWrap",componentId:"sc-f5e51e03-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
`,$=h.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\PositionList\\index__ToggleLabel",componentId:"sc-f5e51e03-3"})`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function G({positions:e,setUserHideClosedPositions:n,userHideClosedPositions:t}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(N,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(a.cC,{id:"LcLwJZ"}),e&&" ("+e.length+")"]}),(0,s.jsx)($,{id:"desktop-hide-closed-positions",onClick:()=>{n(!t)},children:t?(0,s.jsx)(a.cC,{id:"GOctE4"}):(0,s.jsx)(a.cC,{id:"l+HNUa"})})]}),(0,s.jsxs)(E,{children:[(0,s.jsx)(a.cC,{id:"LcLwJZ"}),(0,s.jsx)(U,{children:(0,s.jsx)($,{onClick:()=>{n(!t)},children:t?(0,s.jsx)(a.cC,{id:"GOctE4"}):(0,s.jsx)(a.cC,{id:"l+HNUa"})})})]}),e.map((e=>(0,s.jsx)(L.Z,{...e},e.tokenId.toString())))]})}var z=t(2304),M=t(85729),W=t(48141),R=t(25243),S=t(6053),A=t(59991),B=t(34578),Z=t(49855),F=t(47212),J=t(41432),q=t.n(J);function Q(){return Q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Q.apply(this,arguments)}function V(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Y=(0,x.forwardRef)((function(e,n){var t=e.color,i=void 0===t?"currentColor":t,o=e.size,r=void 0===o?24:o,s=V(e,["color","size"]);return x.createElement("svg",Q({ref:n,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),x.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),x.createElement("polyline",{points:"2 17 12 22 22 17"}),x.createElement("polyline",{points:"2 12 12 17 22 12"}))}));Y.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},Y.displayName="Layers";var K=Y;function X(){return X=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},X.apply(this,arguments)}function ee(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var ne=(0,x.forwardRef)((function(e,n){var t=e.color,i=void 0===t?"currentColor":t,o=e.size,r=void 0===o?24:o,s=ee(e,["color","size"]);return x.createElement("svg",X({ref:n,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),x.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),x.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))}));ne.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},ne.displayName="BookOpen";var te=ne,ie=t(83931),oe=t(64614),re=t(68040);const se=h.default.section.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\CTACards__CTASection",componentId:"sc-543d2c46-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`,ae=(0,h.default)(g.dL).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\CTACards__CTA",componentId:"sc-543d2c46-1"})`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.surface3};

  * {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};

    text-decoration: none;
    * {
      text-decoration: none !important;
    }
  }
`,de=(0,h.default)(g.Tv.DeprecatedLabel).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\CTACards__HeaderText",componentId:"sc-543d2c46-2"})`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,ce=(0,h.default)(u.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\CTACards__ResponsiveColumn",componentId:"sc-543d2c46-3"})`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function le(){const{chainId:e}=(0,c.useWeb3React)(),{infoLink:n}=(0,re.o7)(e);return(0,s.jsxs)(se,{children:[(0,s.jsx)(ae,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:(0,s.jsxs)(ce,{children:[(0,s.jsxs)(de,{children:[(0,s.jsx)(a.cC,{id:"4xl+7r"})," \u2197"]}),(0,s.jsx)(g.Tv.DeprecatedBody,{style:{alignItems:"center",display:"flex",fontWeight:485},children:(0,s.jsx)(a.cC,{id:"xTN8Uu"})})]})}),(0,s.jsx)(ae,{"data-testid":"cta-infolink",href:n+"pools",children:(0,s.jsxs)(ce,{children:[(0,s.jsxs)(de,{style:{alignSelf:"flex-start"},children:[(0,s.jsx)(a.cC,{id:"T6amNF"})," \u2197"]}),(0,s.jsx)(g.Tv.DeprecatedBody,{style:{alignSelf:"flex-start",fontWeight:485},children:(0,s.jsx)(a.cC,{id:"sX+nNt"})})]})})]})}var pe=t(55494);const me=(0,h.default)(u.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\index__PageWrapper",componentId:"sc-59ac2f81-0"})`
  padding: 68px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,ue=(0,h.default)(z.m0).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\index__TitleRow",componentId:"sc-59ac2f81-1"})`
  color: ${({theme:e})=>e.neutral2};
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`,xe=(0,h.default)(z.DA).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\index__ButtonRow",componentId:"sc-59ac2f81-2"})`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`,fe=(0,h.default)((({flyoutAlignment:e=y.RIGHT,ToggleUI:n,menuItems:t,...i})=>{const o=(0,x.useRef)(),r=(0,b.Wt)(k.Lk.POOL_OVERVIEW_OPTIONS),a=(0,b.xk)(k.Lk.POOL_OVERVIEW_OPTIONS);(0,C.t)(o,r?a:void 0);const d=n||O;return(0,s.jsxs)(_,{ref:o,...i,children:[(0,s.jsx)(d,{onClick:a}),r&&(0,s.jsx)(T,{flyoutAlignment:e,children:t.map((({content:e,link:n,external:t},i)=>t?(0,s.jsx)(P,{href:n,children:e},i):(0,s.jsx)(I,{to:n,children:e},i)))})]})})).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\index__PoolMenu",componentId:"sc-59ac2f81-3"})`
  margin-left: 0;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }

  a {
    width: 100%;
  }
`,he=h.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\index__PoolMenuItem",componentId:"sc-59ac2f81-4"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 535;
`,ge=(0,h.default)(m.Ux).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\index__MoreOptionsButton",componentId:"sc-59ac2f81-5"})`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 6px 8px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,we=(0,h.default)(g.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\index__MoreOptionsText",componentId:"sc-59ac2f81-6"})`
  align-items: center;
  display: flex;
`,je=h.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\index__ErrorContainer",componentId:"sc-59ac2f81-7"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,ve=h.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,ye=(0,h.default)(B.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\index__NetworkIcon",componentId:"sc-59ac2f81-8"})`
  ${ve}
`,Ce=(0,h.default)(Z.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\index__InboxIcon",componentId:"sc-59ac2f81-9"})`
  ${ve}
`,be=(0,h.default)(m.DF).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\index__ResponsiveButtonPrimary",componentId:"sc-59ac2f81-10"})`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,ke=h.default.main.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\Pool\\index__MainContentWrapper",componentId:"sc-59ac2f81-11"})`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function Oe(){return(0,s.jsxs)(pe.pr,{children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})}function _e(){const e=(0,h.useTheme)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(me,{children:(0,s.jsx)(u.Tz,{gap:"lg",justify:"center",children:(0,s.jsxs)(u.Tz,{gap:"lg",style:{width:"100%"},children:[(0,s.jsx)(ue,{padding:"0",children:(0,s.jsx)(g.Tv.LargeHeader,{children:(0,s.jsx)(a.cC,{id:"lQfOr9"})})}),(0,s.jsx)(ke,{children:(0,s.jsx)(je,{children:(0,s.jsxs)(g.Tv.BodyPrimary,{color:e.neutral3,textAlign:"center",children:[(0,s.jsx)(ye,{strokeWidth:1.2}),(0,s.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,s.jsx)(a.cC,{id:"nFZR3H"})})]})})})]})})}),(0,s.jsx)(M.c,{})]})}function Te(){const{account:e,chainId:n}=(0,c.useWeb3React)(),t=(0,S.G)(),i=(0,p.LK)(),o=(0,h.useTheme)(),[r,w]=(0,oe.QP)(),{positions:j,loading:v}=(0,A.W)(e),[C,b]=j?.reduce(((e,n)=>(e[n.liquidity?.isZero()?1:0].push(n),e)),[[],[]])??[[],[]],k=(0,x.useMemo)((()=>[...C,...r?[]:b]),[b,C,r]),O=(0,R.J)(k);if(!(0,W.EC)(n))return(0,s.jsx)(_e,{});const _=Boolean(!e),T=[{content:(0,s.jsxs)(he,{children:[(0,s.jsx)(a.cC,{id:"y5rS9U"}),(0,s.jsx)(F.Z,{size:16})]}),link:"/migrate/v2",external:!1},{content:(0,s.jsxs)(he,{children:[(0,s.jsx)(a.cC,{id:"F+Ocff"}),(0,s.jsx)(K,{size:16})]}),link:"/pools/v2",external:!1},{content:(0,s.jsxs)(he,{children:[(0,s.jsx)(a.cC,{id:"rjZpLn"}),(0,s.jsx)(te,{size:16})]}),link:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",external:!0}];return(0,s.jsxs)(l.fM,{page:d.yJ.POOL_PAGE,shouldLogImpression:!0,children:[(0,s.jsx)(me,{children:(0,s.jsx)(u.Tz,{gap:"lg",justify:"center",children:(0,s.jsxs)(u.Tz,{gap:"lg",style:{width:"100%"},children:[(0,s.jsxs)(ue,{padding:"0",children:[(0,s.jsx)(g.Tv.LargeHeader,{children:(0,s.jsx)(a.cC,{id:"lQfOr9"})}),(0,s.jsxs)(xe,{children:[t&&(0,s.jsx)(fe,{menuItems:T,flyoutAlignment:y.LEFT,ToggleUI:e=>(0,s.jsx)(ge,{...e,children:(0,s.jsxs)(we,{children:[(0,s.jsx)(a.cC,{id:"2FYpfJ"}),(0,s.jsx)(ie.Z,{size:15})]})})}),(0,s.jsxs)(be,{"data-cy":"join-pool-button",id:"join-pool-button",as:f.rU,to:"/add/ETH",children:["+ ",(0,s.jsx)(a.cC,{id:"1k0YWs"})]})]})]}),(0,s.jsx)(ke,{children:v?(0,s.jsx)(Oe,{}):O&&b&&O.length>0?(0,s.jsx)(G,{positions:O,setUserHideClosedPositions:w,userHideClosedPositions:r}):(0,s.jsxs)(je,{children:[(0,s.jsxs)(g.Tv.BodyPrimary,{color:o.neutral3,textAlign:"center",children:[(0,s.jsx)(Ce,{strokeWidth:1,style:{marginTop:"2em"}}),(0,s.jsx)("div",{children:(0,s.jsx)(a.cC,{id:"YgSnQ0"})})]}),!_&&b.length>0&&(0,s.jsx)(m.oD,{style:{marginTop:".5rem"},onClick:()=>w(!r),children:(0,s.jsx)(a.cC,{id:"GOctE4"})}),_&&(0,s.jsx)(l.M8,{events:[d.TM.onClick],name:d.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:d.xo.CONNECT_WALLET_BUTTON,children:(0,s.jsx)(m.DF,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:i,children:(0,s.jsx)(a.cC,{id:"GdzYJ9"})})})]})}),(0,s.jsx)(g.Pw,{children:(0,s.jsx)(le,{})})]})})}),(0,s.jsx)(M.c,{})]})}},49855:function(e,n,t){var i=t(13712),o=t(41432),r=t.n(o);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=(0,i.forwardRef)((function(e,n){var t=e.color,o=void 0===t?"currentColor":t,r=e.size,d=void 0===r?24:r,c=a(e,["color","size"]);return i.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),i.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));d.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},d.displayName="Inbox",n.Z=d}}]);
//# sourceMappingURL=3951.83c70de2.chunk.js.map