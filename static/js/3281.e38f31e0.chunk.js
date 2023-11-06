/*! For license information please see 3281.e38f31e0.chunk.js.LICENSE.txt */
(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3281,3095],{82406:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var i=n(42893),o=n(12204),s=n(19903),a=n(66196),r=n(60198),l=n(5658),c=n(41440),d=n(87253),u=n(39839),p=n(78174),h=n.p+"static/media/404-page-dark.f24684e761633ae99402.png",x=n.p+"static/media/404-page-light.c448d3fd36de14609aba.png";const m=d.default.img.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\NotFound\\index__Image",componentId:"sc-63817ee5-0"})`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`,f=d.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\NotFound\\index__Container",componentId:"sc-63817ee5-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,g=(0,d.default)(f).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\NotFound\\index__Header",componentId:"sc-63817ee5-2"})`
  gap: 30px;
`,v=(0,d.default)(f).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\NotFound\\index__PageWrapper",componentId:"sc-63817ee5-3"})`
  flex: 1;
  justify-content: center;
  gap: 50px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function b(){const e=(0,p.Gv)(),t=(0,l.dD)(),n=t?u.Tv.LargeHeader:u.Tv.Hero,d=t?u.Tv.HeadlineMedium:u.Tv.HeadlineLarge;return(0,i.jsx)(v,{children:(0,i.jsxs)(a.fM,{page:s.yJ.NOT_FOUND,shouldLogImpression:!0,children:[(0,i.jsxs)(g,{children:[(0,i.jsxs)(f,{children:[(0,i.jsx)(n,{children:"404"}),(0,i.jsx)(d,{color:"neutral2",children:(0,i.jsx)(o.cC,{id:"yduHrq"})})]}),(0,i.jsx)(m,{src:e?h:x,alt:"Liluni"})]}),(0,i.jsx)(r.Hm,{as:c.rU,to:"/",children:(0,i.jsx)(o.cC,{id:"GTK9OW"})})]})})}},34445:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return tt}});var i=n(42893),o=n(12204),s=n(60476),a=n(2304),r=n(80343),l=n(35225),c=n(17487),d=n(15387),u=n(1152),p=n(13712),h=n(68222),x=n(56762),m=n(68040),f=n(55831),g=n.n(f);const v=(e,t,n)=>{const i=parseFloat(e)-parseFloat(t),o=parseFloat(t)-parseFloat(n),s=(i-o)/o*100;return isNaN(s)||!isFinite(s)?[i,0]:[i,s]},b=e=>{let t="query blocks {";return t+=e.map((e=>`t${e}:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ${e}, timestamp_lt: ${e+600} }) {\n        number\n      }`)),t+="}",(0,u.ZP)(t)};function w(e,t){const[n,i]=(0,p.useState)(),[o,s]=(0,p.useState)(!1),a=x.Pf[t],r=n?.[t];(0,p.useEffect)((()=>{r||o||async function(){const o=await async function(e,t,n,i,o=1e3){let s={},a=!1,r=0;try{for(;!a;){let l=i.length;r+o<i.length&&(l=r+o);const c=i.slice(r,l),d=await t.query({query:e(...n,c),fetchPolicy:"network-only"});s={...s,...d.data},Object.keys(d.data).length<o||r+o>i.length?a=!0:r+=o}return s}catch(l){return void console.log(l)}}(b,a,[],e);o?i({...n??{},[t]:o}):s(!0)}()}));const l=(0,p.useMemo)((()=>{if(n?.[t]){const e=n?.[t],i=[];for(const n in e)if(e[n].length>0){const o=e[n][0].number,s=m.DM[t],a=o>s?o:s;i.push({timestamp:n.split("t")[1],number:a})}return i}}),[t,n]);return{blocks:l,error:o}}function y(e,t){const n=[e],i=x.uw[t||d.ChainId.MAINNET],[o,s,a]=function(){const e=Date.now();return[Math.floor((e-g()("1d"))/1e3),Math.floor((e-g()("2d"))/1e3),Math.floor((e-g()("7d"))/1e3)]}(),{blocks:r,error:l}=w([o,s,a],t||d.ChainId.MAINNET),[c,u,m]=r??[],{loading:f,error:b,data:y}=(0,h.zm)({variables:{poolId:n},client:i,fetchPolicy:"no-cache"}),{loading:j,error:D,data:C}=(0,h.zm)({variables:{poolId:n,block:{number:parseFloat(c?.number)}},client:i,fetchPolicy:"no-cache"}),{loading:k,error:_,data:P}=(0,h.zm)({variables:{poolId:n,block:{number:parseFloat(u?.number)}},client:i,fetchPolicy:"no-cache"}),{loading:$,error:T,data:S}=(0,h.zm)({variables:{poolId:n,block:{number:parseFloat(m?.number)}},client:i,fetchPolicy:"no-cache"});return(0,p.useMemo)((()=>{const t=Boolean(b||D||_||l||T),n=Boolean(f||j||k||$);if(t||n)return{loading:n,error:t,data:void 0};const i=y?.pools[0],o=C?.pools[0],s=P?.pools[0],a=S?.pools[0],r=y?.bundles?.[0]?.ethPriceUSD?parseFloat(y?.bundles?.[0]?.ethPriceUSD):0,[c,d]=i&&o&&s?v(i.volumeUSD,o.volumeUSD,s.volumeUSD):i?[parseFloat(i.volumeUSD),0]:[0,0],u=i&&a?parseFloat(i.volumeUSD)-parseFloat(a.volumeUSD):i?parseFloat(i.volumeUSD):0,p=i?parseFloat(i.feeTier)/1e4/100:0,h=i?.volumeToken0?parseFloat(i.volumeToken0)*p/2:0,x=i?.volumeToken1?parseFloat(i.volumeToken1)*p/2:0,m=i?parseFloat(i.totalValueLockedToken0)-h:0,g=i?parseFloat(i.totalValueLockedToken1)-x:0;let w=i?parseFloat(i.totalValueLockedUSD):0;const I=i&&o?(parseFloat(i.totalValueLockedUSD)-parseFloat(o.totalValueLockedUSD))/parseFloat("0"===o.totalValueLockedUSD?"1":o.totalValueLockedUSD)*100:0,N=i?m*parseFloat(i.token0.derivedETH)*r+g*parseFloat(i.token1.derivedETH)*r:void 0;return N&&(w=N),{data:i?{...i,address:e,volumeUSD:c,volumeUSDChange:d,volumeUSDWeek:u,tvlUSD:w,tvlUSDChange:I,tvlToken0:m,tvlToken1:g,tick:parseFloat(i.tick)}:void 0,error:t,loading:n}}),[l,y?.bundles,y?.pools,C?.pools,P?.pools,S?.pools,b,D,_,T,f,j,k,$,e])}u.ZP`
  query PoolData($poolId: [ID!], $block: Block_height = null) {
    pools(
      where: { id_in: $poolId }
      block: $block
      orderBy: totalValueLockedUSD
      orderDirection: desc
      subgraphError: allow
    ) {
      id
      feeTier
      liquidity
      sqrtPrice
      tick
      token0 {
        id
        symbol
        name
        decimals
        derivedETH
      }
      token1 {
        id
        symbol
        name
        decimals
        derivedETH
      }
      token0Price
      token1Price
      volumeUSD
      volumeToken0
      volumeToken1
      txCount
      totalValueLockedToken0
      totalValueLockedToken1
      totalValueLockedUSD
    }
    bundles(where: { id: "1" }) {
      ethPriceUSD
    }
  }
`;var j=n(82406),D=n(80657),C=n(47096),k=n(87253),_=n(1990),P=n(83777),$=n(31972),T=n(42528),S=n(91101),I=n(15627),N=n(2738),U=n(41440),H=n(39839);const O=(0,k.default)(r.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\shared__DetailBubble",componentId:"sc-c2245840-0"})`
  height: ${({$height:e})=>e?`${e}px`:"16px"};
  width: ${({$width:e})=>e?`${e}px`:"80px"};
`,L=(0,k.default)(r.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\shared__SmallDetailBubble",componentId:"sc-c2245840-1"})`
  height: 20px;
  width: 20px;
  border-radius: 100px;
`,Z=(0,k.default)(s.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsHeader__HeaderColumn",componentId:"sc-d2b0e0e7-0"})`
  gap: 36px;
`,G=(0,k.default)(U.rU).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsHeader__StyledLink",componentId:"sc-d2b0e0e7-1"})`
  text-decoration: none;
  ${H.iV}
`,M=(0,k.default)(H.Tv.LabelMicro).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsHeader__FeeTier",componentId:"sc-d2b0e0e7-2"})`
  background: ${({theme:e})=>e.surface2};
  padding: 2px 6px;
  border-radius: 4px;
`,E=(0,k.default)((e=>(0,i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M18.125 10V12.5C18.125 14.2233 16.7225 15.625 15 15.625H4.0092L5.4425 17.0583C5.68667 17.3025 5.68667 17.6983 5.4425 17.9425C5.32084 18.0642 5.16081 18.1258 5.00081 18.1258C4.84081 18.1258 4.68079 18.065 4.55912 17.9425L2.05912 15.4425C2.00162 15.385 1.9559 15.3159 1.92424 15.2393C1.8609 15.0868 1.8609 14.9143 1.92424 14.7618C1.9559 14.6851 2.00162 14.6158 2.05912 14.5583L4.55912 12.0583C4.80329 11.8141 5.19915 11.8141 5.44332 12.0583C5.68749 12.3025 5.68749 12.6983 5.44332 12.9425L4.01001 14.3758H15C16.0333 14.3758 16.875 13.535 16.875 12.5008V10.0008C16.875 9.65581 17.155 9.37581 17.5 9.37581C17.845 9.37581 18.125 9.655 18.125 10ZM2.5 10.625C2.845 10.625 3.125 10.345 3.125 10V7.5C3.125 6.46583 3.96667 5.625 5 5.625H15.9908L14.5575 7.05831C14.3133 7.30247 14.3133 7.69834 14.5575 7.9425C14.6792 8.06417 14.8392 8.12581 14.9992 8.12581C15.1592 8.12581 15.3192 8.065 15.4409 7.9425L17.9409 5.4425C17.9984 5.385 18.0441 5.31592 18.0758 5.23926C18.1391 5.08676 18.1391 4.91426 18.0758 4.76176C18.0441 4.68509 17.9984 4.61581 17.9409 4.55831L15.4409 2.05831C15.1967 1.81414 14.8008 1.81414 14.5567 2.05831C14.3125 2.30247 14.3125 2.69834 14.5567 2.9425L15.99 4.37581H5C3.2775 4.37581 1.875 5.77748 1.875 7.50081V10.0008C1.875 10.345 2.155 10.625 2.5 10.625Z",fill:"#5E5E5E"})}))).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsHeader__ToggleReverseArrows",componentId:"sc-d2b0e0e7-3"})`
  ${H.iV}
`,F=(0,k.default)(r.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsHeader__IconBubble",componentId:"sc-d2b0e0e7-4"})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;function B({chainId:e,poolAddress:t,token0:n,token1:r,feeTier:l,toggleReversed:d,loading:u}){const p=[(0,I.U8)(n?.id,e)??void 0,(0,I.U8)(r?.id,e)??void 0],h=`/tokens/${(0,c.Ld)(e)}`;return u?(0,i.jsxs)(Z,{"data-testid":"pdp-header-loading-skeleton",children:[(0,i.jsx)(O,{$width:300}),(0,i.jsx)(s.ZP,{gap:"sm",children:(0,i.jsxs)(a.ZP,{gap:"8px",children:[(0,i.jsx)(F,{}),(0,i.jsx)(O,{$width:137})]})})]}):(0,i.jsxs)(Z,{children:[(0,i.jsxs)(a.ZP,{children:[(0,i.jsx)(G,{to:h,children:(0,i.jsx)(H.Tv.BodySecondary,{children:(0,i.jsx)(o.cC,{id:"8tjQCz"})})}),(0,i.jsxs)(H.Tv.BodySecondary,{children:["\xa0",">","\xa0"]}),(0,i.jsx)(G,{to:h,children:(0,i.jsx)(H.Tv.BodySecondary,{children:(0,i.jsx)(o.cC,{id:"ou6PkF"})})}),(0,i.jsxs)(H.Tv.BodySecondary,{children:["\xa0",">","\xa0"]}),(0,i.jsxs)(H.Tv.BodyPrimary,{children:[n?.symbol," / ",r?.symbol," (",(0,P.Xn)(t),")"]})]}),(0,i.jsxs)(a.ZP,{gap:"18px",children:[(0,i.jsxs)(a.ZP,{gap:"8px",width:"max-content",children:[e&&(0,i.jsx)(z,{"data-testid":"double-token-logo",chainId:e,currencies:p}),(0,i.jsxs)(H.Tv.HeadlineSmall,{children:[n?.symbol," / ",r?.symbol]})]}),!!l&&(0,i.jsxs)(M,{children:[l/S.PM,"%"]}),(0,i.jsx)(E,{"data-testid":"toggle-tokens-reverse-arrows",onClick:d})]})]})}const R=k.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsHeader__StyledLogoParentContainer",componentId:"sc-d2b0e0e7-5"})`
  position: relative;
  top: 0;
  left: 0;
`;function z({chainId:e,currencies:t}){return(0,i.jsxs)(R,{children:[(0,i.jsx)(q,{chainId:e,currencies:t}),(0,i.jsx)(A,{chainId:e})]})}const V=k.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsHeader__L2LogoContainer",componentId:"sc-d2b0e0e7-6"})`
  background-color: ${({theme:e})=>e.surface2};
  border-radius: 2px;
  height: 12px;
  left: 60%;
  position: absolute;
  top: 60%;
  outline: 2px solid ${({theme:e})=>e.surface1};
  width: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;function A({chainId:e}){return e===d.ChainId.MAINNET?null:(0,i.jsx)(V,{children:(0,i.jsx)(T.Ej,{chainId:e,size:12})})}function q({chainId:e,currencies:t,small:n}){const[o,s]=(0,N.Z)(t?.[0]?.wrapped.address,e,t?.[0]?.isNative),[a,r]=(0,N.Z)(t?.[1]?.wrapped.address,e,t?.[1]?.isNative);return(0,i.jsx)(K,{logo1:o,onError1:s,logo2:a,onError2:r,small:n})}const W=k.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsHeader__DoubleLogoContainer",componentId:"sc-d2b0e0e7-7"})`
  display: flex;
  gap: 2px;
  position: relative;
  top: 0;
  left: 0;
  img {
    width: ${({small:e})=>e?"10px":"16px"};
    height: ${({small:e})=>e?"20px":"32px"};
    object-fit: cover;
  }
  img:first-child {
    border-radius: ${({small:e})=>e?"10px 0 0 10px":"16px 0 0 16px"};
    object-position: 0 0;
  }
  img:last-child {
    border-radius: ${({small:e})=>e?"0 10px 10px 0":"0 16px 16px 0"};
    object-position: 100% 0;
  }
`,X=k.default.img.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsHeader__CircleLogoImage",componentId:"sc-d2b0e0e7-8"})`
  width: ${({small:e})=>e?"10px":"16px"};
  height: ${({small:e})=>e?"20px":"32px"};
  border-radius: 50%;
`;function K({logo1:e,onError1:t,logo2:n,onError2:o,small:s}){return(0,i.jsxs)(W,{small:s,children:[(0,i.jsx)(X,{src:e??$.Z,onError:t,small:s}),(0,i.jsx)(X,{src:n??$.Z,onError:o,small:s})]})}var Q=n(14307);const J=e=>(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{id:"box-search_2",d:"M6.32064 7.43328C6.4873 7.50661 6.66065 7.55329 6.83398 7.59329V13.94C6.72732 13.9133 6.62067 13.8733 6.52067 13.8266L2.52067 12.0466C1.80067 11.7266 1.33398 11.0133 1.33398 10.2199V5.77996C1.33398 5.59996 1.36064 5.41995 1.40731 5.25329L6.32064 7.43328ZM12.754 4.37328C12.5807 4.19995 12.3806 4.05328 12.1473 3.95328L8.1473 2.17329C7.6273 1.93996 7.04067 1.93996 6.52067 2.17329L2.52067 3.95328C2.28734 4.05328 2.08731 4.19995 1.91398 4.37328L6.72062 6.51328C7.10729 6.68661 7.55401 6.68661 7.94735 6.51328L12.754 4.37328ZM11.1347 7.92862C11.8227 7.76662 12.4766 7.81863 13.0646 8.02129C13.1966 8.06663 13.334 7.97729 13.334 7.83729V5.77996C13.334 5.59996 13.3073 5.41995 13.2607 5.25329L8.34733 7.43328C8.18066 7.49995 8.00732 7.55329 7.83398 7.59329V13.94C7.84598 13.948 7.84599 13.9479 7.85799 13.9559L8.98665 13.452C9.10132 13.4006 9.13533 13.262 9.066 13.158C8.584 12.4373 8.37864 11.522 8.57397 10.5586C8.83464 9.27263 9.85802 8.22929 11.1347 7.92862ZM15.0207 14.3526C14.9233 14.4499 14.7953 14.4993 14.6673 14.4993C14.5393 14.4993 14.4113 14.4506 14.314 14.3526L13.2807 13.3193C12.896 13.5713 12.4386 13.7213 11.9453 13.7213C10.5973 13.7213 9.50065 12.6246 9.50065 11.2766C9.50065 9.92862 10.5973 8.83194 11.9453 8.83194C13.2926 8.83194 14.3893 9.92862 14.3893 11.2766C14.3893 11.77 14.24 12.228 13.988 12.6119L15.0213 13.6453C15.216 13.8406 15.216 14.1573 15.0207 14.3526ZM13.3893 11.2773C13.3893 10.4806 12.7413 9.83261 11.9453 9.83261C11.1486 9.83261 10.5007 10.4806 10.5007 11.2773C10.5007 12.0739 11.1486 12.722 11.9453 12.722C12.7413 12.7213 13.3893 12.0733 13.3893 11.2773Z",fill:"white"})});var Y=n(56823),ee=n(11569),te=n(38641),ne=n(26),ie=n(41162),oe=n(34120);const se=(0,k.default)(H.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsLink__TokenName",componentId:"sc-5c58c598-0"})`
  display: none;

  @media (max-width: ${_.j$.lg-1}px) and (min-width: ${_.j$.xs-1}px) {
    display: block;
  }
  ${H.cw}
`,ae=(0,k.default)(a.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsLink__TokenTextWrapper",componentId:"sc-5c58c598-1"})`
  gap: 8px;
  margin-right: 12px;
  ${({isClickable:e})=>e&&H.iV}
`,re=(0,k.default)(H.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsLink__SymbolText",componentId:"sc-5c58c598-2"})`
  flex-shrink: 0;

  @media (max-width: ${_.j$.lg-1}px) and (min-width: ${_.j$.xs-1}px) {
    color: ${({theme:e})=>e.neutral2};
  }
  ${H.cw}
`,le=(0,k.default)(a.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsLink__CopyAddress",componentId:"sc-5c58c598-3"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  flex-shrink: 0;
  ${H.iV}
`,ce=(0,k.default)(ne.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsLink__StyledCopyIcon",componentId:"sc-5c58c598-4"})`
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.neutral2};
  flex-shrink: 0;
`,de=k.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsLink__ExplorerWrapper",componentId:"sc-5c58c598-5"})`
  padding: 8px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  display: flex;
  ${H.iV}
`,ue=(0,k.default)(a.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsLink__ButtonsRow",componentId:"sc-5c58c598-6"})`
  gap: 8px;
  flex-shrink: 0;
  width: max-content;
`;function pe({address:e,chainId:t,tokens:n,loading:s}){const r=(0,k.useTheme)(),l=[(0,I.U8)(n[0]?.id,t)??void 0,(0,I.U8)(n[1]?.id,t)??void 0],[,u]=(0,te.Z)(),h=(0,p.useCallback)((()=>{e&&u(e)}),[e,u]),x=2===n.length,m=e&&t&&(0,oe.E)(t,e,x?oe.r.ADDRESS:oe.r.TOKEN),f=(0,D.s0)(),g=(0,ee.C)(),v=(0,c.Ld)(t),b=(0,p.useCallback)((()=>{x||f((0,c.dG)({address:n[0]?.id,chain:v,isInfoExplorePageEnabled:g}))}),[f,n,x,v,g]);return!s&&e&&t?(0,i.jsxs)(a.ZP,{align:"space-between",children:[(0,i.jsxs)(ae,{"data-testid":x?`pdp-pool-logo-${n[0]?.symbol}-${n[1]?.symbol}`:`pdp-token-logo-${n[0]?.symbol}`,isClickable:!x,onClick:b,children:[x?(0,i.jsx)(q,{chainId:t,currencies:l,small:!0}):(0,i.jsx)(Y.Z,{currency:l[0],size:"20px"}),(0,i.jsx)(se,{children:x?(0,i.jsx)(o.cC,{id:"ou6PkF"}):n[0]?.name}),(0,i.jsx)(re,{children:x?`${n[0]?.symbol} / ${n[1]?.symbol}`:(0,i.jsxs)(a.ZP,{gap:"4px",children:[n[0]?.symbol," ",(0,i.jsx)(ie.Z,{size:16,color:r.neutral2})]})})]}),(0,i.jsxs)(ue,{children:[(0,i.jsxs)(le,{"data-testid":`copy-address-${e}`,onClick:h,children:[(0,P.Xn)(e),(0,i.jsx)(ce,{})]}),m&&(0,i.jsx)(H.dL,{href:m,"data-testid":`explorer-url-${m}`,children:(0,i.jsx)(de,{children:t===d.ChainId.MAINNET?(0,i.jsx)(Q.P,{width:"16px",height:"16px",fill:r.neutral2}):(0,i.jsx)(J,{width:"16px",height:"16px",stroke:r.darkMode?"none":r.neutral2})})})]})]}):(0,i.jsxs)(a.ZP,{gap:"8px",padding:"6px 0px",children:[(0,i.jsx)(L,{}),(0,i.jsx)(O,{$width:117})]})}var he=n(86682),xe=n(90937),me=n(49912),fe=n(62878),ge=n(57482);const ve=(0,k.default)(C.xv).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsStats__HeaderText",componentId:"sc-1472b0c3-0"})`
  font-weight: 485;
  font-size: 24px;
  line-height: 36px;
  @media (max-width: ${_.j$.lg-1}px) {
    width: 100%;
  }
`,be=(0,k.default)(s.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsStats__StatsWrapper",componentId:"sc-1472b0c3-1"})`
  gap: 24px;
  padding: 20px;
  border-radius: 20px;
  background: ${({theme:e})=>e.surface2};
  width: 100%;

  @media (max-width: ${_.j$.lg-1}px) {
    flex-direction: row;
    background: ${({theme:e})=>e.surface1};
    flex-wrap: wrap;
    padding: 20px 0px;
    justify-content: space-between;
  }
`,we=(0,k.default)(s.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsStats__StatItemColumn",componentId:"sc-1472b0c3-2"})`
  gap: 8px;
  flex: 1;
  min-width: 180px;

  @media (max-width: ${_.j$.sm}px) {
    min-width: 150px;
  }
`,ye=(0,k.default)(a.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsStats__PoolBalanceSymbols",componentId:"sc-1472b0c3-3"})`
  justify-content: space-between;

  @media (max-width: ${_.j$.lg-1}px) {
    flex-direction: column;
  }
`,je=(0,k.default)(a.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsStats__PoolBalanceTokenNames",componentId:"sc-1472b0c3-4"})`
  font-weight: 485;
  font-size: 18px;
  line-height: 24px;
  width: max-content;

  @media (max-width: ${_.j$.lg-1}px) {
    font-size: 20px;
    line-height: 28px;
    width: 100%;
  }
`,De=k.css`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: 1px solid ${({theme:e})=>e.surface2};
`,Ce=k.css`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid ${({theme:e})=>e.surface2};
`,ke=k.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsStats__BalanceChartSide",componentId:"sc-1472b0c3-5"})`
  height: 8px;
  width: ${({percent:e})=>100*e}%;
  background: ${({$color:e})=>e};
  ${({isLeft:e})=>e?De:Ce}
`,_e=(0,k.default)(r.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsStats__StatSectionBubble",componentId:"sc-1472b0c3-6"})`
  width: 180px;
  height: 40px;
`,Pe=(0,k.default)(r.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsStats__StatHeaderBubble",componentId:"sc-1472b0c3-7"})`
  width: 116px;
  height: 24px;
  border-radius: 8px;
`;function $e({poolData:e,isReversed:t,chainId:n,loading:r}){const l=(0,me.e)().lg,{formatNumber:c}=(0,ge.Gb)(),d=(0,k.useTheme)(),u=(0,I.U8)(e?.token0?.id,n)??void 0,h=(0,I.U8)(e?.token1?.id,n)??void 0,x=(0,xe.r)(u?.wrapped,d.surface2,d.darkMode);let m=(0,xe.r)(h?.wrapped,d.surface2,d.darkMode);x===m&&x===d.accent1&&(m=fe.O9.blue400);const[f,g]=(0,p.useMemo)((()=>{if(e){const n=e?.tvlToken0/e?.token0Price+e?.tvlToken1,i={...e?.token0,price:e?.token0Price,tvl:e?.tvlToken0,color:x,percent:e?.tvlToken0/e?.token0Price/n,currency:u},o={...e?.token1,price:e?.token1Price,tvl:e?.tvlToken1,color:m,percent:e?.tvlToken1/n,currency:h};return t?[o,i]:[i,o]}return[void 0,void 0]}),[x,m,u,h,t,e]);return!r&&f&&g&&e?(0,i.jsxs)(be,{children:[(0,i.jsx)(ve,{children:(0,i.jsx)(o.cC,{id:"29Hx9U"})}),(0,i.jsxs)(we,{children:[(0,i.jsx)(H.Tv.BodySecondary,{children:(0,i.jsx)(o.cC,{id:"2mfj90"})}),(0,i.jsxs)(ye,{children:[(0,i.jsxs)(je,{children:[!l&&(0,i.jsx)(Y.Z,{currency:f.currency,size:"20px",style:{marginRight:"8px"}}),c({input:f.tvl,type:ge.sw.TokenNonTx}),"\xa0",f.symbol]}),(0,i.jsxs)(je,{children:[!l&&(0,i.jsx)(Y.Z,{currency:g.currency,size:"20px",style:{marginRight:"8px"}}),c({input:g.tvl,type:ge.sw.TokenNonTx}),"\xa0",g.symbol]})]}),l&&(0,i.jsxs)(a.ZP,{"data-testid":"pool-balance-chart",children:[f.color&&(0,i.jsx)(ke,{percent:f.percent,$color:f.color,isLeft:!0}),g.color&&(0,i.jsx)(ke,{percent:g.percent,$color:g.color,isLeft:!1})]})]}),(0,i.jsx)(Ie,{title:(0,i.jsx)(o.cC,{id:"FHKsZF"}),value:e.tvlUSD,delta:e.tvlUSDChange}),(0,i.jsx)(Ie,{title:(0,i.jsx)(o.cC,{id:"0RweTm"}),value:e.volumeUSD,delta:e.volumeUSDChange}),(0,i.jsx)(Ie,{title:(0,i.jsx)(o.cC,{id:"PpS90j"}),value:e.volumeUSD*(e.feeTier/1e6)})]}):(0,i.jsxs)(be,{children:[(0,i.jsx)(ve,{children:(0,i.jsx)(Pe,{})}),Array.from({length:4}).map(((e,t)=>(0,i.jsxs)(s.ZP,{gap:"md",children:[(0,i.jsx)(O,{}),(0,i.jsx)(_e,{})]},`loading-info-row-${t}`)))]})}const Te=(0,k.default)(a.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsStats__StatsTextContainer",componentId:"sc-1472b0c3-8"})`
  gap: 4px;
  width: 100%;
  align-items: flex-end;

  @media (max-width: ${_.j$.lg-1}px) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }
`,Se=(0,k.default)(C.xv).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsStats__StatItemText",componentId:"sc-1472b0c3-9"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  font-weight: 485;
  line-height: 44px;

  @media (max-width: ${_.j$.lg-1}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;function Ie({title:e,value:t,delta:n}){const{formatNumber:o,formatDelta:s}=(0,ge.Gb)();return(0,i.jsxs)(we,{children:[(0,i.jsx)(H.Tv.BodySecondary,{children:e}),(0,i.jsxs)(Te,{children:[(0,i.jsx)(Se,{children:o({input:t,type:ge.sw.FiatTokenStats})}),!!n&&(0,i.jsxs)(a.ZP,{width:"max-content",padding:"4px 0px",children:[(0,i.jsx)(he.Kx,{delta:n}),(0,i.jsx)(H.Tv.BodySecondary,{children:s(n)})]})]})]})}var Ne=n(80815),Ue=n(70368),He=n(60198),Oe=n(97901),Le=n(21103);const Ze=(0,k.default)(a.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsStatsButtons__PoolDetailsStatsButtonsRow",componentId:"sc-1fd14d7e-0"})`
  gap: 12px;

  @media (max-width: ${_.j$.lg-1}px) {
    display: none;
  }
`,Ge=(0,k.default)(He.UH).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsStatsButtons__PoolButton",componentId:"sc-1fd14d7e-1"})`
  padding: 12px 16px 12px 12px;
  border-radius: 900px;
  width: 50%;
`,Me=(0,k.default)(r.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsStatsButtons__ButtonBubble",componentId:"sc-1fd14d7e-2"})`
  height: 44px;
  width: 175px;
  border-radius: 900px;
`;function Ee({chainId:e,token0:t,token1:n,feeTier:s,loading:a}){const{chainId:r,connector:l,account:c}=(0,Ne.useWeb3React)(),{positions:d}=(0,Ue.Z)(c??"",e?[e]:void 0),u=d&&function(e,t,n,i){return e?.find((e=>(e?.details.token0.toLowerCase()===t?.id||e?.details.token0.toLowerCase()===n?.id)&&(e?.details.token1.toLowerCase()===t?.id||e?.details.token1.toLowerCase()===n?.id)&&e?.details.fee==i&&!e.closed))}(d,t,n,s),p=u?.details.tokenId,h=(0,Oe.o)(),x=(0,D.s0)(),m=(0,I.U8)(t?.id,e),f=(0,I.U8)(n?.id,e),g=async t=>{m&&f&&(r!==e&&e&&await h(l,e),x(t?`/swap?inputCurrency=${(0,Le.H)(m)}&outputCurrency=${(0,Le.H)(f)}`:`/increase/${(0,Le.H)(m)}/${(0,Le.H)(f)}/${s}${p?`/${p}`:""}`))};return!a&&m&&f?(0,i.jsxs)(Ze,{children:[(0,i.jsx)(Ge,{size:He.qE.medium,emphasis:He.eI.highSoft,onClick:()=>g(!1),"data-testid":"pool-details-add-liquidity-button",children:(0,i.jsx)(o.cC,{id:"E6MqGy"})}),(0,i.jsx)(Ge,{size:He.qE.medium,emphasis:He.eI.highSoft,onClick:()=>g(!0),"data-testid":"pool-details-swap-button",children:(0,i.jsx)(o.cC,{id:"vH2C/2"})})]}):(0,i.jsxs)(Ze,{"data-testid":"pdp-buttons-loading-skeleton",children:[(0,i.jsx)(Me,{}),(0,i.jsx)(Me,{})]})}var Fe=n(62329),Be=n(20837);const Re=(0,k.default)(s.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsTableSkeleton__Table",componentId:"sc-a173d7fb-0"})`
  gap: 24px;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  padding-bottom: 12px;
  overflow-y: hidden;
  ${Fe.Z}
`,ze=(0,k.default)(a.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsTableSkeleton__TableRow",componentId:"sc-a173d7fb-1"})`
  justify-content: space-between;
  border-bottom: ${({$borderBottom:e,theme:t})=>e?`1px solid ${t.surface3}`:"none"}};
  padding: 12px;
  min-width: max-content;
`,Ve=(0,k.default)(H.Tv.BodySecondary).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\PoolDetailsTableSkeleton__TableElement",componentId:"sc-a173d7fb-2"})`
  display: flex;
  padding: 0px 8px;
  flex: ${({small:e})=>e?"unset":"1"};
  width: ${({small:e})=>e?"44px":"auto"};
  min-width: ${({large:e,small:t})=>e?"136px":t?"unset":"121px"} !important;
  justify-content: ${({alignRight:e})=>e?"flex-end":"flex-start"};
`;function Ae(){return(0,i.jsxs)(Re,{$isHorizontalScroll:!0,children:[(0,i.jsxs)(ze,{$borderBottom:!0,children:[(0,i.jsx)(Ve,{large:!0,children:(0,i.jsxs)(a.ZP,{children:[(0,i.jsx)(Be.Z,{size:16}),(0,i.jsx)(o.cC,{id:"LhMjLm"})]})}),(0,i.jsx)(Ve,{children:(0,i.jsx)(o.cC,{id:"+zy2Nq"})}),(0,i.jsx)(Ve,{alignRight:!0,children:(0,i.jsx)(o.cC,{id:"OwJ3Q/"})}),(0,i.jsx)(Ve,{alignRight:!0,children:(0,i.jsx)(O,{})}),(0,i.jsx)(Ve,{alignRight:!0,children:(0,i.jsx)(O,{})}),(0,i.jsx)(Ve,{alignRight:!0,children:(0,i.jsx)(o.cC,{id:"n0DQBh"})}),(0,i.jsx)(Ve,{alignRight:!0,small:!0,children:(0,i.jsx)(o.cC,{id:"MfOowr"})})]}),Array.from({length:10}).map(((e,t)=>(0,i.jsxs)(ze,{children:[(0,i.jsx)(Ve,{large:!0,children:(0,i.jsx)(O,{})}),(0,i.jsx)(Ve,{children:(0,i.jsx)(O,{})}),(0,i.jsx)(Ve,{alignRight:!0,children:(0,i.jsx)(O,{})}),(0,i.jsx)(Ve,{alignRight:!0,children:(0,i.jsx)(O,{})}),(0,i.jsx)(Ve,{alignRight:!0,children:(0,i.jsx)(O,{})}),(0,i.jsx)(Ve,{alignRight:!0,children:(0,i.jsx)(O,{})}),(0,i.jsx)(Ve,{alignRight:!0,small:!0,children:(0,i.jsx)(L,{})})]},`loading-table-row-${t}`)))]})}const qe=(0,k.default)(a.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\index__PageWrapper",componentId:"sc-3451c796-0"})`
  padding: 48px;
  width: 100%;
  align-items: flex-start;
  gap: 60px;

  @media (max-width: ${_.j$.lg-1}px) {
    flex-direction: column;
    gap: unset;
  }

  @media (max-width: ${_.j$.sm-1}px) {
    padding: 48px 16px;
  }
`,We=(0,k.default)(s.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\index__LeftColumn",componentId:"sc-3451c796-1"})`
  gap: 24px;
  width: 65vw;
  overflow: hidden;
  justify-content: flex-start;

  @media (max-width: ${_.j$.lg-1}px) {
    width: 100%;
  }
`,Xe=k.default.hr.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\index__HR",componentId:"sc-3451c796-2"})`
  border: 0.5px solid ${({theme:e})=>e.surface3};
  margin: 16px 0px;
  width: 100%;
`,Ke=(0,k.default)(r.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\index__ChartHeaderBubble",componentId:"sc-3451c796-3"})`
  width: 180px;
  height: 32px;
`,Qe=(0,k.default)(s.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\index__RightColumn",componentId:"sc-3451c796-4"})`
  gap: 24px;
  margin: 0 48px 0 auto;
  width: 22vw;
  min-width: 360px;

  @media (max-width: ${_.j$.lg-1}px) {
    margin: 44px 0px;
    width: 100%;
    min-width: unset;
  }
`,Je=(0,k.default)(s.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\index__TokenDetailsWrapper",componentId:"sc-3451c796-5"})`
  gap: 24px;
  padding: 20px;

  @media (max-width: ${_.j$.lg-1}px) and (min-width: ${_.j$.sm}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: unset;
  }

  @media (max-width: ${_.j$.sm-1}px) {
    padding: unset;
  }
`,Ye=(0,k.default)(C.xv).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\index__TokenDetailsHeader",componentId:"sc-3451c796-6"})`
  width: 100%;
  font-size: 24px;
  font-weight: 485;
  line-height: 32px;
`,et=(0,k.default)(s.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\pages\\PoolDetails\\index__LinksContainer",componentId:"sc-3451c796-7"})`
  gap: 16px;
  width: 100%;
`;function tt(){const{poolAddress:e,chainName:t}=(0,D.UO)(),n=(0,c._3)(t),a=n&&(0,c.Tz)(n),{data:r,loading:d}=y(e??"",a),[u,h]=(0,p.useReducer)((e=>!e),!1),x=u?r?.token1:r?.token0,m=u?r?.token0:r?.token1,f=!t||!e||!(0,c._3)(t)||!(0,P.UJ)(e);return!d&&!r||f?(0,i.jsx)(j.default,{}):(0,i.jsxs)(qe,{children:[(0,i.jsxs)(We,{children:[(0,i.jsxs)(s.ZP,{gap:"sm",children:[(0,i.jsx)(B,{chainId:a,poolAddress:e,token0:x,token1:m,feeTier:r?.feeTier,toggleReversed:h,loading:d}),(0,i.jsx)(l.sT,{})]}),(0,i.jsx)(Xe,{}),(0,i.jsx)(Ke,{}),(0,i.jsx)(Ae,{})]}),(0,i.jsxs)(Qe,{children:[(0,i.jsx)(Ee,{chainId:a,token0:x,token1:m,feeTier:r?.feeTier,loading:d}),(0,i.jsx)($e,{poolData:r,isReversed:u,chainId:a,loading:d}),(0,i.jsxs)(Je,{children:[(0,i.jsx)(Ye,{children:(0,i.jsx)(o.cC,{id:"Rj01Fz"})}),(0,i.jsxs)(et,{children:[(0,i.jsx)(pe,{address:e,chainId:a,tokens:[x,m],loading:d}),(0,i.jsx)(pe,{address:x?.id,chainId:a,tokens:[x],loading:d}),(0,i.jsx)(pe,{address:m?.id,chainId:a,tokens:[m],loading:d})]})]})]})]})}},47244:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var i=n(41432),o=n.n(i),s=n(13712),a=n(61940),r=n.n(a),l=["top","left","transform","className","children","innerRef"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c.apply(this,arguments)}function d(e){var t=e.top,n=void 0===t?0:t,i=e.left,o=void 0===i?0:i,a=e.transform,d=e.className,u=e.children,p=e.innerRef,h=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,l);return s.createElement("g",c({ref:p,className:r()("visx-group",d),transform:a||"translate("+o+", "+n+")"},h),u)}d.propTypes={top:o().number,left:o().number,transform:o().string,className:o().string,children:o().node,innerRef:o().oneOfType([o().string,o().func,o().object])}},4271:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var i=n(41432),o=n.n(i),s=n(82751),a=n.n(s),r=n(13712),l=n(92695),c=["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"];function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d.apply(this,arguments)}var u=[];function p(e){var t=e.className,n=e.children,i=e.debounceTime,o=void 0===i?300:i,s=e.ignoreDimensions,p=void 0===s?u:s,h=e.parentSizeStyles,x=void 0===h?{width:"100%",height:"100%"}:h,m=e.enableDebounceLeadingCall,f=void 0===m||m,g=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,c),v=(0,r.useRef)(null),b=(0,r.useRef)(0),w=(0,r.useState)({width:0,height:0,top:0,left:0}),y=w[0],j=w[1],D=(0,r.useMemo)((function(){var e=Array.isArray(p)?p:[p];return a()((function(t){j((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),o,{leading:f})}),[o,f,p]);return(0,r.useEffect)((function(){var e=new l.do((function(e){void 0===e&&(e=[]),e.forEach((function(e){var t=e.contentRect,n=t.left,i=t.top,o=t.width,s=t.height;b.current=window.requestAnimationFrame((function(){D({width:o,height:s,top:i,left:n})}))}))}));return v.current&&e.observe(v.current),function(){window.cancelAnimationFrame(b.current),e.disconnect(),null!=D&&D.cancel&&D.cancel()}}),[D]),r.createElement("div",d({style:x,ref:v,className:t},g),n(d({},y,{ref:v.current,resize:D})))}p.propTypes={className:o().string,debounceTime:o().number,enableDebounceLeadingCall:o().bool,ignoreDimensions:o().oneOfType([o().any,o().arrayOf(o().any)]),children:o().func.isRequired}},14045:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var i=n(13712),o=n(61940),s=n.n(o),a=n(62972),r=n(30349);function l(e){this._context=e}function c(e){return new l(e)}function d(e){return e[0]}function u(e){return e[1]}function p(){var e=d,t=u,n=(0,r.Z)(!0),i=null,o=c,s=null;function l(r){var l,c,d,u=r.length,p=!1;for(null==i&&(s=o(d=(0,a.Z)())),l=0;l<=u;++l)!(l<u&&n(c=r[l],l,r))===p&&((p=!p)?s.lineStart():s.lineEnd()),p&&s.point(+e(c,l,r),+t(c,l,r));if(d)return s=null,d+""||null}return l.x=function(t){return arguments.length?(e="function"==typeof t?t:(0,r.Z)(+t),l):e},l.y=function(e){return arguments.length?(t="function"==typeof e?e:(0,r.Z)(+e),l):t},l.defined=function(e){return arguments.length?(n="function"==typeof e?e:(0,r.Z)(!!e),l):n},l.curve=function(e){return arguments.length?(o=e,null!=i&&(s=o(i)),l):o},l.context=function(e){return arguments.length?(null==e?i=s=null:s=o(i=e),l):i},l}function h(e,t){e(t)}l.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t)}}};var x=["children","data","x","y","fill","className","curve","innerRef","defined"];function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},m.apply(this,arguments)}function f(e){var t=e.children,n=e.data,o=void 0===n?[]:n,a=e.x,r=e.y,l=e.fill,c=void 0===l?"transparent":l,d=e.className,u=e.curve,f=e.innerRef,g=e.defined,v=void 0===g?function(){return!0}:g,b=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,x),w=function(e){var t=void 0===e?{}:e,n=t.x,i=t.y,o=t.defined,s=t.curve,a=p();return n&&h(a.x,n),i&&h(a.y,i),o&&a.defined(o),s&&a.curve(s),a}({x:a,y:r,defined:v,curve:u});return t?i.createElement(i.Fragment,null,t({path:w})):i.createElement("path",m({ref:f,className:s()("visx-linepath",d),d:w(o)||"",fill:c,strokeLinecap:"round"},b))}},61940:function(e,t){var n;!function(){"use strict";var i={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var r in n)i.call(n,r)&&n[r]&&e.push(r)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},62972:function(e,t){"use strict";var n=Math.PI,i=2*n,o=1e-6,s=i-o;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function r(){return new a}a.prototype=r.prototype={constructor:a,moveTo:function(e,t){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,t){this._+="L"+(this._x1=+e)+","+(this._y1=+t)},quadraticCurveTo:function(e,t,n,i){this._+="Q"+ +e+","+ +t+","+(this._x1=+n)+","+(this._y1=+i)},bezierCurveTo:function(e,t,n,i,o,s){this._+="C"+ +e+","+ +t+","+ +n+","+ +i+","+(this._x1=+o)+","+(this._y1=+s)},arcTo:function(e,t,i,s,a){e=+e,t=+t,i=+i,s=+s,a=+a;var r=this._x1,l=this._y1,c=i-e,d=s-t,u=r-e,p=l-t,h=u*u+p*p;if(a<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=e)+","+(this._y1=t);else if(h>o)if(Math.abs(p*c-d*u)>o&&a){var x=i-r,m=s-l,f=c*c+d*d,g=x*x+m*m,v=Math.sqrt(f),b=Math.sqrt(h),w=a*Math.tan((n-Math.acos((f+h-g)/(2*v*b)))/2),y=w/b,j=w/v;Math.abs(y-1)>o&&(this._+="L"+(e+y*u)+","+(t+y*p)),this._+="A"+a+","+a+",0,0,"+ +(p*x>u*m)+","+(this._x1=e+j*c)+","+(this._y1=t+j*d)}else this._+="L"+(this._x1=e)+","+(this._y1=t)},arc:function(e,t,a,r,l,c){e=+e,t=+t,c=!!c;var d=(a=+a)*Math.cos(r),u=a*Math.sin(r),p=e+d,h=t+u,x=1^c,m=c?r-l:l-r;if(a<0)throw new Error("negative radius: "+a);null===this._x1?this._+="M"+p+","+h:(Math.abs(this._x1-p)>o||Math.abs(this._y1-h)>o)&&(this._+="L"+p+","+h),a&&(m<0&&(m=m%i+i),m>s?this._+="A"+a+","+a+",0,1,"+x+","+(e-d)+","+(t-u)+"A"+a+","+a+",0,1,"+x+","+(this._x1=p)+","+(this._y1=h):m>o&&(this._+="A"+a+","+a+",0,"+ +(m>=n)+","+x+","+(this._x1=e+a*Math.cos(l))+","+(this._y1=t+a*Math.sin(l))))},rect:function(e,t,n,i){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)+"h"+ +n+"v"+ +i+"h"+-n+"Z"},toString:function(){return this._}},t.Z=r},30349:function(e,t,n){"use strict";function i(e){return function(){return e}}n.d(t,{Z:function(){return i}})},8328:function(e,t,n){var i=n(22160).Symbol;e.exports=i},5757:function(e,t,n){var i=n(8328),o=n(20040),s=n(48755),a=i?i.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):s(e)}},80050:function(e,t,n){var i=n(24427),o=/^\s+/;e.exports=function(e){return e?e.slice(0,i(e)+1).replace(o,""):e}},50531:function(e,t,n){var i="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=i},20040:function(e,t,n){var i=n(8328),o=Object.prototype,s=o.hasOwnProperty,a=o.toString,r=i?i.toStringTag:void 0;e.exports=function(e){var t=s.call(e,r),n=e[r];try{e[r]=void 0;var i=!0}catch(l){}var o=a.call(e);return i&&(t?e[r]=n:delete e[r]),o}},48755:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},22160:function(e,t,n){var i=n(50531),o="object"==typeof self&&self&&self.Object===Object&&self,s=i||o||Function("return this")();e.exports=s},24427:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},82751:function(e,t,n){var i=n(85886),o=n(90724),s=n(29727),a=Math.max,r=Math.min;e.exports=function(e,t,n){var l,c,d,u,p,h,x=0,m=!1,f=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=l,i=c;return l=c=void 0,x=t,u=e.apply(i,n)}function b(e){var n=e-h;return void 0===h||n>=t||n<0||f&&e-x>=d}function w(){var e=o();if(b(e))return y(e);p=setTimeout(w,function(e){var n=t-(e-h);return f?r(n,d-(e-x)):n}(e))}function y(e){return p=void 0,g&&l?v(e):(l=c=void 0,u)}function j(){var e=o(),n=b(e);if(l=arguments,c=this,h=e,n){if(void 0===p)return function(e){return x=e,p=setTimeout(w,t),m?v(e):u}(h);if(f)return clearTimeout(p),p=setTimeout(w,t),v(h)}return void 0===p&&(p=setTimeout(w,t)),u}return t=s(t)||0,i(n)&&(m=!!n.leading,d=(f="maxWait"in n)?a(s(n.maxWait)||0,t):d,g="trailing"in n?!!n.trailing:g),j.cancel=function(){void 0!==p&&clearTimeout(p),x=0,l=h=c=p=void 0},j.flush=function(){return void 0===p?u:y(o())},j}},85886:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},8164:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},83352:function(e,t,n){var i=n(5757),o=n(8164);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==i(e)}},90724:function(e,t,n){var i=n(22160);e.exports=function(){return i.Date.now()}},29727:function(e,t,n){var i=n(80050),o=n(85886),s=n(83352),a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(s(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=i(e);var n=r.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}}}]);
//# sourceMappingURL=3281.e38f31e0.chunk.js.map