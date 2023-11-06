"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[891],{30891:function(e,n,o){o.r(n),o.d(n,{default:function(){return nn}});var t=o(42893),i=o(19903),r=o(66196),s=o(79954),a=o(65364),l=o(12113),d=o(13712),c=o(80657),p=o(87253),m=o(26030),u=o(68830);const x=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Carousel__CarouselContainer",componentId:"sc-433e7397-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,h=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Carousel__CarouselCardContainer",componentId:"sc-433e7397-1"})`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,g=(0,p.default)(u.a.div).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Carousel__CarouselItemCard",componentId:"sc-433e7397-2"})`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  will-change: transform;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,f=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Carousel__CarouselItemIcon",componentId:"sc-433e7397-3"})`
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,C=800,w=({children:e,activeIndex:n,toggleNextSlide:o})=>{const i=(0,d.useCallback)(((n,o=e.length)=>(0,l.ef)(n,o)),[e]),r=(0,d.useCallback)(((e,n,o)=>(0,l.E)(e,n,o,i)),[i]),[s,a]=(0,u.useSprings)(e.length,(n=>({x:(n<e.length-1?n:-1)*C}))),c=(0,d.useRef)([0,1]),p=(0,d.useCallback)(((n,o)=>{const t=i(Math.floor(n/C)%e.length),s=o<0?e.length-2:1;a((i=>{const a=r(i,t,s),d=r(i,c.current[0],c.current[1]),p=(0,l.Z1)(t,s,a,e.length,n);return{x:-n%(C*e.length)+C*p,immediate:o<0?d>a:d<a,config:{tension:250,friction:30}}})),c.current=[t,s]}),[i,r,a,e.length]),w=(0,d.useRef)(0);(0,d.useEffect)((()=>{p(n*C,w.current)}),[n,p]);const b=(0,d.useCallback)((e=>{w.current=e,o(e)}),[o]);return(0,d.useEffect)((()=>{const e=setInterval((async()=>{b(1)}),7e3);return()=>{clearInterval(e)}}),[b,n]),(0,t.jsxs)(x,{children:[(0,t.jsx)(f,{onClick:()=>b(-1),children:(0,t.jsx)(m.wy,{width:"16px",height:"16px"})}),(0,t.jsx)(h,{children:s.map((({x:n},o)=>(0,t.jsx)(g,{style:{x:n},children:e[o]},o)))}),(0,t.jsx)(f,{onClick:()=>b(1),children:(0,t.jsx)(m.XC,{width:"16px",height:"16px"})})]})},b=({children:e})=>(0,t.jsx)(w,{activeIndex:0,toggleNextSlide:()=>{},children:[e]});var v=o(13119),y=o(80343),j=o(20555),k=o(1004),_=o(85325),D=o(57482);const H=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__CarouselCardBorder",componentId:"sc-3794e070-0"})`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,T=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__CardHeaderContainer",componentId:"sc-3794e070-1"})`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,N=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__LoadingCardHeaderContainer",componentId:"sc-3794e070-2"})`
  position: relative;
  animation: ${v.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,$=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__CardHeaderColumn",componentId:"sc-3794e070-3"})`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,S=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__IconContainer",componentId:"sc-3794e070-4"})`
  display: inline-flex;
  vertical-align: text-bottom;
  margin-left: 2px;
  transform: translateY(-2px) translateX(2px);
`,I=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__CollectionNameContainer",componentId:"sc-3794e070-5"})`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,O=(0,p.default)(y.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__LoadingCollectionNameContainer",componentId:"sc-3794e070-6"})`
  width: 50%;
`,G=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__HeaderOverlay",componentId:"sc-3794e070-7"})`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,z=p.default.img.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__CollectionImage",componentId:"sc-3794e070-8"})`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border-radius: 100px;
`,U=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__LoadingCollectionImage",componentId:"sc-3794e070-9"})`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${v.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,F=(0,p.default)(y.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__LoadingTableElement",componentId:"sc-3794e070-10"})`
  width: 50px;
`,E=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__TableElement",componentId:"sc-3794e070-11"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,P=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__FirstColumnTextWrapper",componentId:"sc-3794e070-12"})``,B=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__CardBottomContainer",componentId:"sc-3794e070-13"})`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,X=p.default.img.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__MarketplaceIcon",componentId:"sc-3794e070-14"})`
  width: 20px;
  height: 20px;
`,V=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__CarouselCardContainer",componentId:"sc-3794e070-15"})`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${E}:nth-child(3n-1), ${F}:nth-child(3n-1) {
    justify-self: center;
  }

  ${E}:nth-child(3n), ${F}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${P} {
      display: none;
    }
    ${E} {
      justify-self: left !important;
    }
    ${$} {
      padding: 0 20px;
    }
  }
`,L=({marketplace:e,floorInEth:n,listings:o})=>{const{formatNumberOrString:i}=(0,D.Gb)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(E,{children:[(0,t.jsx)(X,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,t.jsx)(P,{children:(0,t.jsx)(_.T.BodySmall,{color:"neutral2",children:e})})]}),(0,t.jsx)(E,{children:(0,t.jsx)(_.T.BodySmall,{color:"neutral2",children:Number(n)>0?`${i({input:n,type:D.sw.NFTTokenFloorPriceTrailingZeros})} ETH`:"-"})}),(0,t.jsx)(E,{children:(0,t.jsx)(_.T.BodySmall,{color:"neutral2",children:Number(o)>0?o:"None"})})]})},M=[k.Fz.Opensea,k.Fz.X2Y2,k.Fz.LooksRare],R={[k.Fz.Opensea]:"OpenSea",[k.Fz.X2Y2]:"X2Y2",[k.Fz.LooksRare]:"LooksRare"},A=({collection:e,onClick:n})=>{const{data:o,loading:i}=(0,j.K)(e.address??""),{formatNumber:r}=(0,D.Gb)();return i?(0,t.jsx)(Z,{}):(0,t.jsx)(H,{children:(0,t.jsxs)(V,{onClick:n,children:[(0,t.jsx)(K,{collection:e}),(0,t.jsx)(B,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(E,{children:[(0,t.jsx)(m.pD,{width:"20",height:"20"}),(0,t.jsx)(P,{children:(0,t.jsx)(_.T.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),(0,t.jsx)(E,{children:e.floor&&(0,t.jsxs)(_.T.SubHeaderSmall,{color:"userThemeColor",children:[r({input:e.floor,type:D.sw.NFTToken})," ETH Floor"]})}),(0,t.jsx)(E,{children:(0,t.jsxs)(_.T.SubHeaderSmall,{color:"userThemeColor",children:[o.marketplaceCount?.reduce(((e,n)=>e+n.count),0)," Listings"]})}),M.map((n=>{const i=o.marketplaceCount?.find((e=>e.marketplace===n));return i?(0,t.jsx)(L,{marketplace:R[n],listings:i.count,floorInEth:i.floorPrice},`CarouselCard-key-${e.address}-${i.marketplace}`):null}))]})})]})})},W=()=>(0,t.jsx)(t.Fragment,{children:[...Array(12)].map((e=>(0,t.jsx)(F,{},e)))}),Y=(0,p.default)(_.T.MediumHeader).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\CarouselCard__CollectionName",componentId:"sc-3794e070-16"})`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,K=({collection:e})=>(0,t.jsxs)(T,{src:e.bannerImageUrl??"",children:[(0,t.jsxs)($,{children:[(0,t.jsx)(z,{src:e.imageUrl}),(0,t.jsxs)(I,{children:[(0,t.jsx)(Y,{color:"deprecated_accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,t.jsx)(S,{children:(0,t.jsx)(m.SA,{width:"24px",height:"24px"})})]})]}),(0,t.jsx)(G,{})]}),Z=({collection:e})=>(0,t.jsx)(H,{children:(0,t.jsxs)(V,{children:[e?(0,t.jsx)(K,{collection:e}):(0,t.jsxs)(N,{children:[(0,t.jsxs)($,{children:[(0,t.jsx)(U,{}),(0,t.jsx)(O,{})]}),(0,t.jsx)(G,{})]}),(0,t.jsx)(B,{children:(0,t.jsx)(W,{})})]})}),q=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Banner__BannerContainer",componentId:"sc-422b0ee0-0"})`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,J=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Banner__BannerMainArea",componentId:"sc-422b0ee0-1"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>e.maxWidth};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,Q=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Banner__HeaderContainer",componentId:"sc-422b0ee0-2"})`
  display: flex;
  max-width: 500px;
  font-weight: 535;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.neutral1};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,ee=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"];var ne=()=>{const e=(0,c.s0)(),{data:n}=(0,a.S)(5+ee.length,s._u.Day),o=(0,d.useMemo)((()=>n?.filter((e=>e.address&&!ee.includes(e.address))).slice(0,5)),[n]),[i,r]=(0,d.useState)(0),p=(0,d.useCallback)((e=>{o&&r((n=>(0,l.ef)(n+e,o.length)))}),[o]);return(0,t.jsx)(q,{children:(0,t.jsxs)(J,{children:[(0,t.jsxs)(Q,{children:["Better prices. ",(0,t.jsx)("br",{}),"More listings."]}),o?(0,t.jsx)(w,{activeIndex:i,toggleNextSlide:p,children:o.map((n=>(0,t.jsx)(A,{collection:n,onClick:()=>e(`/nfts/collection/${n.address}`)},n.address)))}):(0,t.jsx)(b,{children:(0,t.jsx)(Z,{})})]})})},oe=o(62329),te=o(5658),ie=o(39839),re=o(69867),se=o(86682);o(56605),o(41966);const ae=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedText",componentId:"sc-abbd867d-0"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,le=(0,p.default)(ae).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Cells\\Cells__CollectionNameContainer",componentId:"sc-abbd867d-1"})`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,de=(0,p.default)(ae).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Cells\\Cells__CollectionName",componentId:"sc-abbd867d-2"})`
  margin-left: 8px;
`,ce=(0,p.default)(ie.Tv.SubHeader).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedSubHeader",componentId:"sc-abbd867d-3"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,pe=(0,p.default)(ie.Tv.SubHeaderSmall).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedSubHeaderSmall",componentId:"sc-abbd867d-4"})`
  color: ${({theme:e})=>`${e.neutral1}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,me=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Cells\\Cells__RoundedImage",componentId:"sc-abbd867d-5"})`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:n})=>e?`url(${e})`:n.surface2};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,ue=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Cells\\Cells__ChangeCellContainer",componentId:"sc-abbd867d-6"})`
  display: flex;
  color: ${({theme:e,change:n})=>n>=0?e.success:e.critical};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,xe=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Cells\\Cells__EthContainer",componentId:"sc-abbd867d-7"})`
  display: flex;
  justify-content: flex-end;
`,he=({value:e})=>{const n=(0,te.dD)();return(0,t.jsxs)(le,{children:[(0,t.jsx)(me,{src:e.logo}),(0,t.jsx)(de,{children:n?(0,t.jsx)(pe,{children:e.name}):(0,t.jsx)(ce,{children:e.name})}),e.isVerified&&(0,t.jsx)("span",{className:"rgw6ezl3 rgw6ez453 rgw6ez2o3 rgw6ez19r rgw6ez12r rgw6ez45x",children:(0,t.jsx)(m.SA,{})})]})},ge=({value:e})=>{const{formatNumberOrString:n}=(0,D.Gb)();return(0,t.jsx)("span",{children:e.value?n({input:e.value,type:D.sw.NFTCollectionStats}):"-"})},fe=(e,n,o,t)=>e===k.VG.ETH?o:t&&o?t*(n?parseFloat((0,re.formatEther)(o)):o):void 0,Ce=({value:e,denomination:n,usdPrice:o})=>{const{formatNumberOrString:i}=(0,D.Gb)(),r=fe(n,!1,e,o),s=n===k.VG.ETH,a=i({input:r,type:s?D.sw.NFTToken:D.sw.FiatTokenStats})+(s?" ETH":""),l=(0,te.dD)()?ie.Tv.BodySmall:ie.Tv.BodyPrimary;return(0,t.jsx)(xe,{children:(0,t.jsx)(l,{children:e?a:"-"})})},we=({value:e})=>(0,t.jsx)(ie.Tv.BodyPrimary,{children:e}),be=({value:e,denomination:n,usdPrice:o})=>{const{formatNumberOrString:i}=(0,D.Gb)(),r=fe(n,!1,e,o),s=n===k.VG.ETH,a=i({input:r,type:s?D.sw.WholeNumber:D.sw.FiatTokenStats})+(s?" ETH":"");return(0,t.jsx)(xe,{children:(0,t.jsx)(ie.Tv.BodyPrimary,{children:a})})},ve=({change:e,children:n})=>{const o=(0,te.dD)()?ie.Tv.BodySmall:ie.Tv.BodyPrimary;return(0,t.jsxs)(ue,{change:e??0,children:[(0,t.jsx)(se.Kx,{delta:e}),(0,t.jsx)(o,{color:"currentColor",children:n||`${e?Math.abs(Math.round(e)):0}%`})]})};var ye=o(80815),je=o(83246),ke=o(37636),_e=o(82118),De=o(83029),He=o(98424),Te="_1mor7veh rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2of rgw6ez27x rgw6ez1jl rgw6ez463 rgw6ez48x",Ne="_1mor7vea rgw6ez4qf rgw6ez16r rgw6ez80x rgw6ez7zl",$e="_1mor7ved rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4bf rgw6ez2or rgw6ez289",Se="rgw6ezr9 rgw6ez55f rgw6ez895 rgw6ez805";const Ie=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Table__RankCellContainer",componentId:"sc-3614719b-0"})`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,Oe=p.default.tr.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Table__StyledRow",componentId:"sc-3614719b-1"})`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.surface3};
  }
  :active {
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }
`,Ge=p.default.tr.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Table__StyledLoadingRow",componentId:"sc-3614719b-2"})`
  height: 80px;
`,ze=p.default.th.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Table__StyledHeader",componentId:"sc-3614719b-3"})`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.click};`}
  }
`,Ue=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Table__StyledLoadingHolder",componentId:"sc-3614719b-4"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,Fe=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Table__StyledCollectionNameHolder",componentId:"sc-3614719b-5"})`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,Ee=(0,p.default)(y.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Table__StyledImageHolder",componentId:"sc-3614719b-6"})`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Pe=(0,p.default)(y.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\Table__StyledRankHolder",componentId:"sc-3614719b-7"})`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`,Be=10;function Xe({columns:e,data:n,smallHiddenColumns:o,mediumHiddenColumns:s,largeHiddenColumns:a,...l}){const m=(0,p.useTheme)(),{chainId:u}=(0,ye.useWeb3React)(),{width:x}=(0,_e.i)(),h=(0,te.dD)(),{getTableProps:g,getTableBodyProps:f,headerGroups:C,rows:w,prepareRow:b,setHiddenColumns:v,visibleColumns:y}=(0,De.useTable)({columns:e,data:n,initialState:{sortBy:[{desc:!0,id:Le.Volume}]},...l},De.useSortBy),j=(0,c.s0)();return(0,d.useEffect)((()=>{x&&(x<=m.breakpoint.sm?v(o):x<=m.breakpoint.md?v(s):x<=m.breakpoint.lg?v(a):v([]))}),[x,v,e,o,s,a,m.breakpoint]),0===n.length?(0,t.jsx)(Ve,{headerGroups:C,visibleColumns:y,...g()}):(0,t.jsxs)("table",{...g(),className:Ne,children:[(0,t.jsx)("thead",{className:Se,children:C.map((e=>(0,d.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,d.createElement)(ze,{className:$e,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?h?"16px":"52px":0},disabled:e.disableSortBy,key:n,children:[(0,t.jsx)(He.n,{as:"span",color:"neutral2",position:"relative",children:e.isSorted?e.isSortedDesc?(0,t.jsx)(ke.V,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):(0,t.jsx)(je.c,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):""}),(0,t.jsx)(He.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,t.jsx)("tbody",{...f(),children:w.map(((e,n)=>(b(e),(0,t.jsx)(r.M8,{events:[i.TM.onClick],name:i.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:u},element:i.xo.NFT_TRENDING_ROW,children:(0,d.createElement)(Oe,{...e.getRowProps(),key:e.id,onClick:()=>j(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map(((e,o)=>(0,d.createElement)("td",{className:"_1mor7vef rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2o3 rgw6ez27l rgw6ez1jl rgw6ez463 rgw6ez48x",...e.getCellProps(),key:o,style:{maxWidth:0===o?h?"240px":"360px":"160px"}},0===o?(0,t.jsxs)(Ie,{children:[!h&&(0,t.jsx)(ie.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:n+1}),e.render("Cell")]}):e.render("Cell")))))},n))))})]})}function Ve({headerGroups:e,visibleColumns:n,...o}){return(0,t.jsxs)("table",{...o,className:Ne,children:[(0,t.jsx)("thead",{className:Se,children:e.map((e=>(0,d.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,d.createElement)(ze,{className:$e,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?"52px":0},disabled:0===n,key:n,children:[(0,t.jsx)(He.n,{as:"span",color:"accent1",position:"relative",children:e.isSorted?e.isSortedDesc?(0,t.jsx)(ke.V,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):(0,t.jsx)(je.c,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):""}),(0,t.jsx)(He.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,t.jsx)("tbody",{...o,children:[...Array(Be)].map(((e,o)=>(0,t.jsx)(Ge,{children:[...Array(n.length)].map(((e,n)=>(0,t.jsx)("td",{className:Te,children:0===n?(0,t.jsxs)(Fe,{children:[(0,t.jsx)(Pe,{}),(0,t.jsx)(Ee,{}),(0,t.jsx)(y.X,{})]}):(0,t.jsx)(Ue,{children:(0,t.jsx)(y.X,{})})},n)))},o)))})]})}var Le;!function(e){e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners"}(Le||(Le={}));const Me=(e,n)=>e?n?Math.round(1e5*e)>=Math.round(1e5*n)?1:-1:1:-1;var Re=({data:e,timePeriod:n})=>{const o=(0,d.useMemo)((()=>(e,n)=>Me(e.original.floor.value,n.original.floor.value)),[]),i=(0,d.useMemo)((()=>(e,n)=>Me(e.original.floor.change,n.original.floor.change)),[]),r=(0,d.useMemo)((()=>(e,n)=>Me(e.original.volume.value,n.original.volume.value)),[]),s=(0,d.useMemo)((()=>(e,n)=>Me(e.original.volume.change,n.original.volume.change)),[]),a=(0,d.useMemo)((()=>[{Header:"Collection name",accessor:"collection",Cell:he,disableSortBy:!0},{id:Le.Floor,Header:Le.Floor,accessor:({floor:e})=>e.value,sortType:o,Cell:function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Ce,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),n!==k.XH.AllTime&&(0,t.jsx)(ie.SF,{children:(0,t.jsx)(ve,{change:e.row.original.floor.change})})]})}},{id:Le.FloorChange,Header:Le.FloorChange,accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:n===k.XH.AllTime,sortType:i,Cell:function(e){return n===k.XH.AllTime?(0,t.jsx)(we,{value:"-"}):(0,t.jsx)(ve,{change:e.row.original.floor.change})}},{id:Le.Volume,Header:Le.Volume,accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:r,Cell:function(e){return(0,t.jsx)(be,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:Le.VolumeChange,Header:Le.VolumeChange,accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:n===k.XH.AllTime,sortType:s,Cell:function(e){const{change:o}=e.row.original.volume;return n===k.XH.AllTime?(0,t.jsx)(we,{value:"-"}):o&&o>=9999?(0,t.jsxs)(ve,{change:o,children:[">9999","%"]}):(0,t.jsx)(ve,{change:o})}},{id:Le.Items,Header:Le.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,t.jsx)(ge,{value:{value:e.row.original.totalSupply}})}},{Header:Le.Owners,accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,t.jsx)(ge,{value:e.row.original.owners})}}]),[i,o,s,r,n]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(Xe,{smallHiddenColumns:[Le.Items,Le.FloorChange,Le.Volume,Le.VolumeChange,Le.Owners],mediumHiddenColumns:[Le.Items,Le.FloorChange,Le.VolumeChange,Le.Owners],largeHiddenColumns:[Le.Items,Le.Owners],data:e,columns:a})})};const Ae=[{label:"1D",value:k.XH.OneDay},{label:"1W",value:k.XH.SevenDays},{label:"1M",value:k.XH.ThirtyDays},{label:"All",value:k.XH.AllTime}],We=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\TrendingCollections__ExploreContainer",componentId:"sc-43719baf-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth};
  padding: 0 16px;
`,Ye=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\TrendingCollections__StyledHeader",componentId:"sc-43719baf-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  line-height: 44px;
  font-weight: 535;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,Ke=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\TrendingCollections__FiltersRow",componentId:"sc-43719baf-2"})`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,Ze=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\TrendingCollections__Filter",componentId:"sc-43719baf-3"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  padding: 4px;
`,qe=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\TrendingCollections__Selector",componentId:"sc-43719baf-4"})`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:n})=>e?n.surface3:"none"};
  cursor: pointer;

  ${oe.c}
`,Je=(0,p.default)(ie.Tv.SubHeader).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\explore\\TrendingCollections__StyledSelectorText",componentId:"sc-43719baf-5"})`
  color: ${({theme:e,active:n})=>n?e.neutral1:e.neutral2};
`;var Qe=()=>{const{formatterLocalCurrency:e}=(0,D.h2)(),[n,o]=(0,d.useState)(k.XH.OneDay),[i,r]=(0,d.useState)(!0),{data:l,loading:c}=(0,a.S)(100,function(e){switch(e){case k.XH.OneDay:return s._u.Day;case k.XH.SevenDays:return s._u.Week;case k.XH.ThirtyDays:return s._u.Month;case k.XH.AllTime:return s._u.Max;default:return s._u.Day}}(n)),p=(0,te.$N)(),m=(0,d.useMemo)((()=>!c&&l?l.map((e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:i?k.VG.ETH:k.VG.USD,usdPrice:p}))):[]),[l,c,i,p]);return(0,t.jsxs)(We,{children:[(0,t.jsx)(Ye,{children:"Trending NFT collections"}),(0,t.jsxs)(Ke,{children:[(0,t.jsx)(Ze,{children:Ae.map((e=>(0,t.jsx)(qe,{active:e.value===n,onClick:()=>o(e.value),children:(0,t.jsx)(Je,{lineHeight:"20px",active:e.value===n,children:e.label})},e.value)))}),(0,t.jsxs)(Ze,{onClick:()=>r(!i),children:[(0,t.jsx)(qe,{active:i,children:(0,t.jsx)(Je,{lineHeight:"20px",active:i,children:"ETH"})}),(0,t.jsx)(qe,{active:!i,children:(0,t.jsx)(Je,{lineHeight:"20px",active:!i,children:e})})]})]}),(0,t.jsx)(Re,{data:m,timePeriod:n})]})};const en=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\pages\\explore\\index__ExploreContainer",componentId:"sc-63c48b70-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`;var nn=()=>{const e=(0,te.cP)((e=>e.setBagExpanded));return(0,d.useEffect)((()=>{e({bagExpanded:!1,manualClose:!1})}),[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.fM,{page:i.yJ.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:(0,t.jsxs)(en,{children:[(0,t.jsx)(ne,{}),(0,t.jsx)(Qe,{})]})})})}}}]);
//# sourceMappingURL=891.63d3f747.chunk.js.map