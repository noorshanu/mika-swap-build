"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7790],{17790:function(e,t,n){n.d(t,{ZI:function(){return It},zD:function(){return Ct},ZP:function(){return _t}});var s=n(42893),r=n(12204),o=n(19903),a=n(66196),i=n(62069),c=n(69867),d=n(30476),l=n(15387),u=n(80815),p=n(18646),m=n(60476),g=n(25575),x=n(56823),h=n(2304),f=n(20437),I=n(80343),C=n(65647),N=n(48141),b=n(28702),T=n(1152),A=n(79954);T.ZP`
  query NftUniversalRouterAddress($chain: Chain = ETHEREUM) {
    nftRoute(chain: $chain, senderAddress: "", nftTrades: []) {
      toAddress
    }
  }
`;var _=n(15627),E=n(79741),w=n(95202),v=n(97901),O=n(79847),k=n(4572),j=n(98841),y=n(50026),P=n(83884),R=n(99968),S=n(13712),L=n(69574),D=n(58336);var B=n(1004),U=n(12113),z=n(68044),G=n(57174);function H(e,t,n){const{hasPriceAdjustment:s,updatedAssets:r}=(0,z.$)(e,t),o=s&&n,{unchanged:a,priceChanged:i,unavailable:c}=(0,G.K)(r),d=r.length>0,l=i.length>0,u=c.length>0,p=l||u,m=function(e,t,n){return[...e.map((e=>({asset:e,status:B.ZJ.UNAVAILABLE}))),...t.map((e=>({asset:e,status:B.ZJ.REVIEWING_PRICE_CHANGE}))),...n.map((e=>({asset:e,status:B.ZJ.REVIEWED})))]}(c,i,a),g=function(e,t,n,s){return e?t?n?B.s.IN_REVIEW:B.s.CONFIRM_REVIEW:s?B.s.CONFIRM_QUOTE:B.s.CONFIRMING_IN_WALLET:B.s.ADDING_TO_BAG}(d,p,l,o);return{newBagItems:m,nextBagStatus:g}}function F(e){return{action:B.lQ.Buy,marketplace:e.marketplace.toLowerCase(),amountIn:e.price.value,assetIn:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},amountOut:e.amount.toString(),assetOut:{id:e.id,decimals:18,address:e.contractAddress,priceInfo:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},tokenType:e.tokenType,tokenId:e.tokenId,amount:e.amount.toString(),marketplace:e.marketplace.toLowerCase(),orderSource:"api"}}}function M(e,t){const n=e.route?e.route.map(F):[];return{route:n,routeResponse:{route:n,valueToSend:t?void 0:e.sendAmount.value,data:e.calldata,to:e.toAddress}}}var W=n(22495),$=n(45239);var V=n(9170),Z=n(66528);const q=(0,n(98102).F)()((0,V.mW)((e=>({inputCurrency:void 0,tokenTradeInput:void 0,setInputCurrency:t=>e((()=>({inputCurrency:t}))),clearInputCurrency:()=>e((()=>({inputCurrency:void 0}))),setTokenTradeInput:t=>e((()=>({tokenTradeInput:t})))})),{name:"useTokenInput"}),Z.X);function Y(){const{account:e}=(0,u.useWeb3React)(),{itemsInBag:t,setBagStatus:n,didOpenUnavailableAssets:s,setDidOpenUnavailableAssets:r,isLocked:o,setLocked:a,setItemsInBag:i}=(0,j.c)((({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:r,setLocked:o,setItemsInBag:a})=>({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:r,setLocked:o,setItemsInBag:a}))),c=q((e=>e.tokenTradeInput)),d=(0,S.useMemo)((()=>(0,U.G7)(t)),[t]),[l]=(0,A.yo)(),p=function(){const{provider:e}=(0,u.useWeb3React)(),t=(0,W.p)((e=>e.sendTransaction)),n=(0,$.J)((e=>e.setTransactionResponse)),{setLocked:s,setBagExpanded:r,reset:o}=(0,j.c)((({setLocked:e,setBagExpanded:t,reset:n})=>({setLocked:e,setBagExpanded:t,reset:n})));return(0,S.useCallback)((async(a,i,c=!1)=>{if(!e)return;const d=await t(e.getSigner(),i,a,c);d&&(s(!1),n(d),r({bagExpanded:!1}),o())}),[e,o,t,r,s,n])}(),m=(0,S.useCallback)((()=>{s&&r(!1),!o&&a(!0),n(B.s.FETCHING_ROUTE)}),[o,s,a,n,r]);return(0,S.useCallback)((async()=>{m(),l({variables:{senderAddress:e||"",nftTrades:(0,U.hI)(d),tokenTrades:c||void 0},onCompleted:e=>{if(!e.nftRoute||!e.nftRoute.route)return n(B.s.ADDING_TO_BAG),void a(!1);const t=function(e){return e.filter((e=>e.status!==B.ZJ.UNAVAILABLE)).map((e=>e.asset))}(d),s=!!c,{route:r,routeResponse:o}=M(e.nftRoute,s),{newBagItems:l,nextBagStatus:u}=H(t,r,s);if(i(l),n(u),u===B.s.CONFIRMING_IN_WALLET)return p(o,t,s),void a(!0);a(!1)}})}),[e,l,d,p,m,a,n,i,c])}var K=n(73293);function X(e){return{...(n={inputAmount:e.inputAmount,outputAmount:e.outputAmount},{inputAmount:{amount:n.inputAmount.quotient.toString(),token:{address:n.inputAmount.currency.isToken?n.inputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.inputAmount.currency.chainId,decimals:n.inputAmount.currency.decimals,isNative:n.inputAmount.currency.isNative}},outputAmount:{amount:n.outputAmount.quotient.toString(),token:{address:n.outputAmount.currency.isToken?n.outputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.outputAmount.currency.chainId,decimals:n.outputAmount.currency.decimals,isNative:n.outputAmount.currency.isNative}}}),pools:(t=e.route.pools,t.map((e=>function(e){const t="fee"in e;return{pair:t?void 0:{tokenAmountA:{amount:e.reserve0.quotient.toString(),token:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative}},tokenAmountB:{amount:e.reserve1.quotient.toString(),token:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}},pool:t?{fee:e.fee,liquidity:e.liquidity.toString(),sqrtRatioX96:e.sqrtRatioX96.toString(),tickCurrent:e.tickCurrent.toString(),tokenA:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative},tokenB:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}:void 0}}(e))))};var t,n}function J(e,t,n){const s=q((e=>e.setTokenTradeInput)),r=(0,D.pG)(e)&&e.routes,o=!!e&&!!e.inputAmount&&e.inputAmount.currency.isToken,a=!!n&&!!t;(0,S.useEffect)((()=>{if(!r||!o||!a)return void s(void 0);const i=parseInt(n.multiply(100).toSignificant(2)),{mixedTokenTradeRouteInputs:c,v2TokenTradeRouteInputs:d,v3TokenTradeRouteInputs:l}=function(e){const t=[],n=[],s=[],r=e.swaps;for(const o of r)o.route.protocol===K.Protocol.MIXED?t.push(X(o)):o.route.protocol===K.Protocol.V2?n.push(X(o)):s.push(X(o));return{mixedTokenTradeRouteInputs:t.length>0?t:void 0,v2TokenTradeRouteInputs:n.length>0?n:void 0,v3TokenTradeRouteInputs:s.length>0?s:void 0}}(e),u={mixedRoutes:c,tradeType:A.NS.ExactOutput,v2Routes:d,v3Routes:l},p="permitSignature"in t&&t.permitSignature?{details:{amount:t.permitSignature.details.amount.toString(),expiration:t.permitSignature.details.expiration.toString(),nonce:t.permitSignature.details.nonce.toString(),token:t.permitSignature.details.token},sigDeadline:t.permitSignature.sigDeadline.toString(),signature:t.permitSignature.signature,spender:t.permitSignature.spender}:void 0;s({permit:p,routes:u,slippageToleranceBasisPoints:i,tokenAmount:{amount:e.inputAmount.quotient.toString(),token:{address:e.inputAmount.currency.address,chainId:e.inputAmount.currency.chainId,decimals:e.inputAmount.currency.decimals,isNative:e.inputAmount.currency.isNative}}})}),[t,n,a,o,r,s,e])}var Q=n(87253),ee=n(57482),te=n(74969);var ne,se=n(8586),re=n(34578),oe=n(83931),ae=n(39839);function ie(e,t,n,o,a){const i={handleClick:()=>{},buttonText:(0,s.jsx)(r.cC,{id:"nwtY4N"}),disabled:!0,warningText:void 0,warningTextColor:t.deprecated_accentWarning,helperText:void 0,helperTextColor:t.neutral2,buttonColor:t.accent1,buttonTextColor:t.deprecated_accentTextLightPrimary};return{[ne.WALLET_NOT_CONNECTED]:{...i,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(r.cC,{id:"VHOVEJ"})},[ne.NOT_SUPPORTED_CHAIN]:{...i,handleClick:n??(()=>{}),buttonText:(0,s.jsx)(r.cC,{id:"ffOtfc"}),disabled:!1,warningText:(0,s.jsx)(r.cC,{id:"IwI0rY"})},[ne.INSUFFICIENT_BALANCE]:{...i,buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"}),warningText:(0,s.jsx)(r.cC,{id:"cPcTW+"})},[ne.ERROR]:{...i,warningText:(0,s.jsx)(r.cC,{id:"fWsBTs"})},[ne.IN_WALLET_CONFIRMATION]:{...i,buttonText:(0,s.jsx)(r.cC,{id:"CpEYLQ"})},[ne.PROCESSING_TRANSACTION]:{...i,buttonText:(0,s.jsx)(r.cC,{id:"SqYgw0"})},[ne.FETCHING_TOKEN_ROUTE]:{...i,buttonText:(0,s.jsx)(r.cC,{id:"hQHwxA"})},[ne.INVALID_TOKEN_ROUTE]:{...i,buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"})},[ne.NO_TOKEN_ROUTE_FOUND]:{...i,buttonText:(0,s.jsx)(r.cC,{id:"dLAScn"}),buttonColor:t.surface3,buttonTextColor:t.neutral1,helperText:(0,s.jsx)(r.cC,{id:"1u70J/"})},[ne.LOADING_ALLOWANCE]:{...i,buttonText:(0,s.jsx)(r.cC,{id:"TuN3Z4"})},[ne.IN_WALLET_ALLOWANCE_APPROVAL]:{...i,buttonText:(0,s.jsx)(r.cC,{id:"4k/lBP"})},[ne.PROCESSING_APPROVAL]:{...i,buttonText:(0,s.jsx)(r.cC,{id:"gHko4n"})},[ne.REQUIRE_APPROVAL]:{...i,disabled:!1,handleClick:n??(()=>{}),helperText:(0,s.jsx)(r.cC,{id:"kpa6xe"}),buttonText:(0,s.jsx)(r.cC,{id:"Z7ZXbT"})},[ne.CONFIRM_UPDATED_PRICE]:{...i,handleClick:n??(()=>{}),disabled:!1,warningTextColor:t.accent1,warningText:(0,s.jsx)(r.cC,{id:"Ejd0wH"}),buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"})},[ne.PRICE_IMPACT_HIGH]:{...i,handleClick:n??(()=>{}),disabled:!1,buttonColor:a?a.priceImpactSeverity.color:i.buttonColor,helperText:(0,s.jsx)(r.cC,{id:"NF0esC"}),helperTextColor:a?a.priceImpactSeverity.color:i.helperTextColor,buttonText:(0,s.jsx)(r.cC,{id:"2AEplS"})},[ne.PAY]:{...i,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(r.cC,{id:"4fL/V7"}),helperText:o?(0,s.jsx)(r.cC,{id:"3BWxOM"}):void 0}}[e]}!function(e){e[e.WALLET_NOT_CONNECTED=0]="WALLET_NOT_CONNECTED",e[e.NOT_SUPPORTED_CHAIN=1]="NOT_SUPPORTED_CHAIN",e[e.INSUFFICIENT_BALANCE=2]="INSUFFICIENT_BALANCE",e[e.ERROR=3]="ERROR",e[e.IN_WALLET_CONFIRMATION=4]="IN_WALLET_CONFIRMATION",e[e.PROCESSING_TRANSACTION=5]="PROCESSING_TRANSACTION",e[e.FETCHING_TOKEN_ROUTE=6]="FETCHING_TOKEN_ROUTE",e[e.INVALID_TOKEN_ROUTE=7]="INVALID_TOKEN_ROUTE",e[e.NO_TOKEN_ROUTE_FOUND=8]="NO_TOKEN_ROUTE_FOUND",e[e.LOADING_ALLOWANCE=9]="LOADING_ALLOWANCE",e[e.IN_WALLET_ALLOWANCE_APPROVAL=10]="IN_WALLET_ALLOWANCE_APPROVAL",e[e.PROCESSING_APPROVAL=11]="PROCESSING_APPROVAL",e[e.REQUIRE_APPROVAL=12]="REQUIRE_APPROVAL",e[e.CONFIRM_UPDATED_PRICE=13]="CONFIRM_UPDATED_PRICE",e[e.PRICE_IMPACT_HIGH=14]="PRICE_IMPACT_HIGH",e[e.PAY=15]="PAY"}(ne||(ne={}));const ce=Q.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagFooter__FooterContainer",componentId:"sc-9e4b286e-0"})`
  padding: 0px 12px;
`,de=Q.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagFooter__Footer",componentId:"sc-9e4b286e-1"})`
  border-top: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  flex-direction: column;
  margin: 0px 16px 8px;
  padding: 12px 0px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,le=(0,Q.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagFooter__FooterHeader",componentId:"sc-9e4b286e-2"})`
  padding-top: 8px;
  padding-bottom: 16px;
`,ue=(0,Q.default)(h.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagFooter__CurrencyRow",componentId:"sc-9e4b286e-3"})`
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,pe=(0,Q.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagFooter__TotalColumn",componentId:"sc-9e4b286e-4"})`
  text-align: end;
  overflow: hidden;
`,me=(0,Q.default)(re.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagFooter__WarningIcon",componentId:"sc-9e4b286e-5"})`
  width: 14px;
  margin-right: 4px;
  color: inherit;
`,ge=(0,Q.default)(ae.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagFooter__WarningText",componentId:"sc-9e4b286e-6"})`
  align-items: center;
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  margin-bottom: 10px !important;
  text-align: center;
`,xe=(0,Q.default)(ae.Tv.BodySmall).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagFooter__HelperText",componentId:"sc-9e4b286e-7"})`
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px !important;
`,he=(0,Q.default)(h.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagFooter__CurrencyInput",componentId:"sc-9e4b286e-8"})`
  gap: 8px;
  cursor: pointer;
`,fe=Q.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagFooter__ActionButton",componentId:"sc-9e4b286e-9"})`
  display: flex;
  background: ${({$backgroundColor:e})=>e};
  color: ${({$color:e})=>e};
  font-weight: 535;
  line-height: 24px;
  font-size: 16px;
  gap: 16px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 12px 0px;
  cursor: pointer;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: auto;
  }
`,Ie=(0,Q.default)(I.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagFooter__FiatLoadingBubble",componentId:"sc-9e4b286e-10"})`
  border-radius: 4px;
  width: 4rem;
  height: 20px;
  align-self: end;
`,Ce=(0,Q.default)(h.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagFooter__PriceImpactContainer",componentId:"sc-9e4b286e-11"})`
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`,Ne=(0,Q.default)(h.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagFooter__PriceImpactRow",componentId:"sc-9e4b286e-12"})`
  align-items: center;
  gap: 8px;
`,be=(0,Q.default)(ae.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagFooter__ValueText",componentId:"sc-9e4b286e-13"})`
  line-height: 20px;
  font-weight: 535;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`,Te=({color:e,children:t})=>t?(0,s.jsxs)(ge,{"data-testid":"nft-buy-button-warning",fontSize:"14px",lineHeight:"20px",$color:e,children:[(0,s.jsx)(me,{}),t]}):null,Ae=({children:e,color:t})=>e?(0,s.jsx)(xe,{lineHeight:"16px",$color:t,children:e}):null,_e=({usingPayWithAnyToken:e,totalEthPrice:t,activeCurrency:n,tradeState:o,trade:a})=>{const{formatEther:i,formatNumberOrString:c}=(0,ee.Gb)();return e?o!==L.qx.LOADING||a?(0,s.jsx)(be,{color:o===L.qx.LOADING?"neutral3":"neutral1",children:c({input:a?.inputAmount.toExact(),type:ee.sw.NFTToken})}):(0,s.jsx)(ae.Tv.BodyPrimary,{color:"neutral3",lineHeight:"20px",fontWeight:"535",children:(0,s.jsx)(r.cC,{id:"hwuHLB"})}):(0,s.jsxs)(ae.Tv.BodyPrimary,{lineHeight:"20px",fontWeight:"535",children:[i({input:t.toString(),type:ee.sw.NFTToken}),"\xa0",n?.symbol??"ETH"]})},Ee=({usdcValue:e,priceImpact:t,tradeState:n,usingPayWithAnyToken:o})=>{const{formatNumberOrString:a}=(0,ee.Gb)();return e?(0,s.jsxs)(Ce,{children:[t&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(C.ud,{text:d.ag._({id:"KaCkzz"}),children:(0,s.jsxs)(Ne,{children:[(0,s.jsx)(re.Z,{color:t.priceImpactSeverity.color,size:"16px"}),(0,s.jsxs)(ae.Tv.BodySmall,{style:{color:t.priceImpactSeverity.color},lineHeight:"20px",children:["(",(0,s.jsx)(r.cC,{id:"J/hVSQ",values:{0:t.displayPercentage()}}),")"]})]})})}),(0,s.jsx)(ae.Tv.BodySmall,{color:"neutral3",lineHeight:"20px",children:`${a({input:e?.toExact(),type:ee.sw.FiatNFTToken})}`})]}):!o||n!==L.qx.INVALID&&n!==L.qx.NO_ROUTE_FOUND?(0,s.jsx)(Ie,{}):null},we=[B.s.FETCHING_ROUTE,B.s.CONFIRMING_IN_WALLET,B.s.FETCHING_FINAL_ROUTE,B.s.PROCESSING_TRANSACTION],ve=({setModalIsOpen:e,eventProperties:t})=>{const n=(0,p.LK)(),i=(0,Q.useTheme)(),{account:d,chainId:h,connector:I}=(0,u.useWeb3React)(),C=Boolean(d&&h),T=(0,y.P)(),{inputCurrency:U}=q((({inputCurrency:e})=>({inputCurrency:e}))),z=q((e=>e.setInputCurrency)),G=(0,_.U8)("ETH"),H=(0,O.mM)(d??void 0,U&&U.isToken?U:void 0),{isLocked:F,bagStatus:M,setBagExpanded:$,setBagStatus:V}=(0,j.c)((({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s})=>({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s}))),[Z,K]=(0,S.useState)(!1),X=we.includes(M),re=U??G,me=!!U&&h===l.ChainId.MAINNET,{universalRouterAddress:ge,universalRouterAddressIsLoading:xe}=function(){const{data:e,loading:t}=(0,A.Z6)({fetchPolicy:"no-cache"});return{universalRouterAddress:e?.nftRoute?.toAddress,universalRouterAddressIsLoading:t}}();!function(e){const t=(0,W.p)((e=>e.state)),n=(0,W.p)((e=>e.setState)),s=(0,S.useRef)(t),{setBagStatus:r,setLocked:o}=(0,j.c)((({setBagExpanded:e,setBagStatus:t,setLocked:n})=>({setBagExpanded:e,setBagStatus:t,setLocked:n})));(0,S.useEffect)((()=>{W.p.subscribe((e=>s.current=e.state))}),[]),(0,S.useEffect)((()=>{s.current===B.c$.Confirming&&r(B.s.PROCESSING_TRANSACTION),s.current!==B.c$.Denied&&s.current!==B.c$.Invalid||(s.current===B.c$.Invalid?r(B.s.WARNING):r(B.s.CONFIRM_REVIEW),n(B.c$.New),o(!1),e(!1))}),[o,r,e,n,s.current])}(e);const Ie=Y(),Ce=(0,S.useMemo)((()=>(0,k.Z)((0,c.formatEther)(T.toString()),G??void 0)),[G,T]),{state:Ne,trade:be,maximumAmountIn:ve,allowedSlippage:Oe}=function(e,t){const{state:n,trade:s}=(0,R.C)(l.TradeType.EXACT_OUTPUT,t,e??void 0,L.R5.API),r=(0,P.Z)((0,D.pG)(s)?s:void 0),o=(0,S.useMemo)((()=>{const e=s?.maximumAmountIn(r);return e?.currency.isToken?e:void 0}),[r,s]);return(0,S.useMemo)((()=>({state:n,trade:s,maximumAmountIn:o,allowedSlippage:r})),[r,o,n,s])}(me?U:void 0,Ce),ke=(0,E.Z)(ve,function(e,t){if(e)return e===l.ChainId.MAINNET?t??(0,b.UNIVERSAL_ROUTER_ADDRESS)(e):(0,N.EC)(e)?(0,b.UNIVERSAL_ROUTER_ADDRESS)(e):void 0}(h,ge),L.d7.Classic),je=ke.state===E.K.LOADING||xe;J(be,ke,Oe);const ye=function(e){const t=(0,Q.useTheme)(),{formatPercent:n}=(0,ee.Gb)();return(0,S.useMemo)((()=>{const s=e?(0,te.QW)(e):void 0,r=s?(0,te.BK)(s):void 0,o="error"===r?t.critical:"warning"===r?t.deprecated_accentWarning:void 0;return s&&r&&o?{priceImpactSeverity:{type:r,color:o},displayPercentage:()=>n(s)}:void 0}),[n,t.critical,t.deprecated_accentWarning,e])}(be),Pe=(0,w.sq)(be?.inputAmount),Re=(0,w.sq)(Ce),Se=me?Pe:Re,{balance:Le}=(0,se.t)(),De=(0,S.useMemo)((()=>{if(C&&h===l.ChainId.MAINNET){if(U){const e=be?.inputAmount;if(!H||!e)return;return!H.lessThan(e)}return(0,c.parseEther)(Le).gte(T)}}),[C,h,U,Le,T,be?.inputAmount,H]);(0,S.useEffect)((()=>{V(B.s.ADDING_TO_BAG)}),[U,V]);const Be=(0,v.o)(),{buttonText:Ue,buttonTextColor:ze,disabled:Ge,warningText:He,warningTextColor:Fe,helperText:Me,helperTextColor:We,handleClick:$e,buttonColor:Ve}=(0,S.useMemo)((()=>{if(C&&h!==l.ChainId.MAINNET){const e=()=>Be(I,l.ChainId.MAINNET);return ie(ne.NOT_SUPPORTED_CHAIN,i,e)}if(!1===De)return ie(ne.INSUFFICIENT_BALANCE,i);if(M===B.s.WARNING)return ie(ne.ERROR,i);if(!C){const e=()=>{n(),$({bagExpanded:!1})};return ie(ne.WALLET_NOT_CONNECTED,i,e)}if(M===B.s.FETCHING_FINAL_ROUTE||M===B.s.CONFIRMING_IN_WALLET)return ie(ne.IN_WALLET_CONFIRMATION,i);if(M===B.s.PROCESSING_TRANSACTION)return ie(ne.PROCESSING_TRANSACTION,i);if(me&&Ne!==L.qx.VALID)return Ne===L.qx.INVALID?ie(ne.INVALID_TOKEN_ROUTE,i):Ne===L.qx.NO_ROUTE_FOUND?ie(ne.NO_TOKEN_ROUTE_FOUND,i):ie(ne.FETCHING_TOKEN_ROUTE,i);const e=ke.state===E.K.REQUIRED,t=()=>e&&ke.approveAndPermit();return je?ie(ne.LOADING_ALLOWANCE,i,t):e?ke.isApprovalPending?ie(ne.IN_WALLET_ALLOWANCE_APPROVAL,i,t):ke.isApprovalLoading?ie(ne.PROCESSING_APPROVAL,i,t):ie(ne.REQUIRE_APPROVAL,i,t):M===B.s.CONFIRM_QUOTE?ie(ne.CONFIRM_UPDATED_PRICE,i,Ie):ye&&"error"===ye.priceImpactSeverity.type?ie(ne.PRICE_IMPACT_HIGH,i,Ie,me,ye):ie(ne.PAY,i,Ie,me)}),[C,h,De,M,me,Ne,je,ke,ye,i,Ie,Be,I,n,$]),Ze={usd_value:Se?.toExact(),using_erc20:!!U,...t};return(0,s.jsxs)(ce,{children:[(0,s.jsxs)(de,{children:[(0,s.jsxs)(le,{gap:"xs",children:[(0,s.jsxs)(ue,{children:[(0,s.jsx)(m.ZP,{gap:"xs",children:(0,N.EC)(h)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ae.Tv.SubHeaderSmall,{children:(0,s.jsx)(r.cC,{id:"JQjhrO"})}),(0,s.jsxs)(he,{onClick:()=>{F||(K(!0),(0,a._P)(o.Yz.NFT_BUY_TOKEN_SELECTOR_CLICKED))},children:[(0,s.jsx)(x.Z,{currency:re,size:"24px"}),(0,s.jsx)(ae.Tv.HeadlineSmall,{fontWeight:535,lineHeight:"24px",children:re?.symbol}),(0,s.jsx)(oe.Z,{size:20,color:i.neutral2})]})]})}),(0,s.jsxs)(pe,{gap:"xs",children:[(0,s.jsx)(ae.Tv.SubHeaderSmall,{children:(0,s.jsx)(r.cC,{id:"72c5Qo"})}),(0,s.jsx)(_e,{usingPayWithAnyToken:me,totalEthPrice:T,activeCurrency:re,tradeState:Ne,trade:be})]})]}),(0,s.jsx)(Ee,{usdcValue:Se,priceImpact:ye,tradeState:Ne,usingPayWithAnyToken:me})]}),(0,s.jsxs)(a.M8,{events:[o.TM.onClick],name:o.Yz.NFT_BUY_BAG_PAY,element:o.xo.NFT_BUY_BAG_PAY_BUTTON,properties:{...Ze},shouldLogImpression:C&&!Ge,children:[(0,s.jsx)(Te,{color:Fe,children:He}),(0,s.jsx)(Ae,{color:We,children:Me}),(0,s.jsxs)(fe,{"data-testid":"nft-buy-button",onClick:$e,disabled:Ge||X,$backgroundColor:Ve,$color:ze,children:[X&&(0,s.jsx)(g.ZP,{size:"20px",stroke:"white"}),Ue]})]})]}),(0,s.jsx)(f.Z,{isOpen:Z,onDismiss:()=>K(!1),onCurrencySelect:e=>{z(e.isNative?void 0:e),e.isToken&&(0,a._P)(o.Yz.NFT_BUY_TOKEN_SELECTED,{token_address:e.address,token_symbol:e.symbol})},selectedCurrency:re??void 0,onlyShowCurrenciesWithBalance:!0})]})};var Oe=n(98424),ke=n(55867),je=n(2994),ye=n(54212),Pe=n(5658),Re=n(437),Se=(n(56605),n(86003)),Le=n(56878),De=n(60198);const Be=Q.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,Ue=Q.default.circle.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\TimedLoader__Circle",componentId:"sc-a8d4bcf8-0"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${Be} linear;
  animation: ${Be} linear;
  animation-duration: 160s;
  stroke: ${({theme:e})=>e.accent1};
`,ze=()=>(0,s.jsx)(Oe.n,{display:"flex",position:"absolute",children:(0,s.jsx)("svg",{height:"18px",width:"18px",children:(0,s.jsx)(Ue,{strokeWidth:"1.5",strokeLinecap:"round",style:{transform:"rotate(90deg)",transformOrigin:"50% 50%"},fill:"transparent",r:"8px",cx:"9px",cy:"9px"})})});var Ge=n(83164),He=n(26030),Fe=n(15655),Me=n(70453),We=n(41440),$e=(n(41966),"_1kuawcb rgw6ezbf rgw6ezd9 rgw6ez8bh rgw6ez45r rgw6ez45l"),Ve="_1kuawc1 rgw6ez2dr rgw6ez2j9 rgw6ez2of rgw6ez27x rgw6ez4b9 rgw6ez3tf rgw6ez7zd rgw6ez1dr rgw6ez80x",Ze="rgw6ez149 rgw6ez1b9 rgw6ez49l rgw6ez80p",qe="rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez8bh rgw6ez45l rgw6ez45r rgw6ez4bf",Ye="_1kuawc7",Ke="rgw6ez3xr";const Xe=(0,Q.default)(De.UH).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagRow__RemoveButton",componentId:"sc-52af37a4-0"})`
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  padding: 12px 14px;
`,Je=(0,Q.default)(De.UH).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagRow__ReviewButton",componentId:"sc-52af37a4-1"})`
  border-radius: 12px;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 8px;
  width: 50%;
`,Qe=Q.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagRow__RemoveAssetOverlay",componentId:"sc-52af37a4-2"})`
  position: absolute;
  display: block;
  right: -11px;
  top: -11px;
  z-index: 1;
  transition: 250ms;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`,et=({onClick:e})=>(0,s.jsx)(Qe,{onClick:e,children:(0,s.jsx)(He.Xv,{})}),tt=()=>(0,s.jsx)(Oe.n,{position:"relative",background:"loadingBackground",className:Ze,children:(0,s.jsxs)(Oe.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,s.jsx)("br",{}),"not",(0,s.jsx)("br",{}),"available"]})}),nt=({asset:e,usdPrice:t,removeAsset:n,showRemove:r,grayscale:o,isMobile:a})=>{const{formatEther:i,formatNumberOrString:d}=(0,ee.Gb)(),[l,u]=(0,S.useState)(!1),[p,m]=(0,S.useState)(!e.smallImageUrl),[g,x]=(0,S.useState)(!1),h=(0,S.useCallback)((()=>x(!0)),[]),f=(0,S.useCallback)((()=>x(!1)),[]),I=Boolean(r&&g&&!a),C=e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,N=i({input:C,type:ee.sw.NFTToken}),b=d({input:t?parseFloat((0,c.formatEther)(C))*t:t,type:ee.sw.FiatNFTToken}),T=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation(),n([e])}),[e,n]);return(0,s.jsx)(We.rU,{to:(0,U.PZ)(e),style:{textDecoration:"none"},children:(0,s.jsxs)(je.X2,{className:Ve,onMouseEnter:h,onMouseLeave:f,children:[(0,s.jsxs)(Oe.n,{position:"relative",display:"flex",children:[r&&a&&(0,s.jsx)(et,{onClick:T}),!p&&(0,s.jsx)(Oe.n,{as:"img",src:e.smallImageUrl,alt:e.name,className:(0,Le.default)(Ze,o&&!g&&Ye),onLoad:()=>{u(!0)},onError:()=>{m(!0)},visibility:l?"visible":"hidden"}),!l&&(0,s.jsx)(Oe.n,{position:"absolute",className:`${Ze} ${Me.L}`}),p&&(0,s.jsx)(tt,{})]}),(0,s.jsxs)(je.sg,{overflow:"hidden",width:"full",color:o?"neutral2":"neutral1",children:[(0,s.jsxs)(je.X2,{overflow:"hidden",width:"full",whiteSpace:"nowrap",children:[(0,s.jsx)(Oe.n,{className:$e,children:e.name??`#${e.tokenId}`}),e.susFlag&&(0,s.jsx)(Ge.yT,{})]}),(0,s.jsxs)(je.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(Oe.n,{className:qe,children:e.collectionName}),e.collectionIsVerified&&(0,s.jsx)(He.SA,{className:Ke})]})]}),I&&(0,s.jsx)(Xe,{onClick:T,emphasis:De.eI.medium,size:De.qE.medium,children:"Remove"}),(!I||a)&&(0,s.jsxs)(je.sg,{flexShrink:"0",alignItems:"flex-end",children:[(0,s.jsxs)(Oe.n,{className:"_1kuawc9 rgw6ez3sr rgw6ezbf rgw6ezd9 rgw6ez3xr",children:[N,"\xa0ETH"]}),(0,s.jsx)(Oe.n,{className:qe,children:b})]})]})})},st=({asset:e,usdPrice:t,markAssetAsReviewed:n,top:r,isMobile:o})=>{const{formatEther:a}=(0,ee.Gb)(),i=Se.O$.from(e.updatedPriceInfo?.ETHPrice).gt(Se.O$.from(e.priceInfo.ETHPrice)),c=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!1)}),[e,n]),d=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!0)}),[e,n]);return(0,s.jsxs)(je.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3t3 rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez5yr rgw6ez1dr rgw6ez7zd",borderTopColor:r?"surface3":"transparent",children:[(0,s.jsxs)(je.X2,{className:"rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4dr rgw6ez3sr",children:[i?(0,s.jsx)(He.PH,{}):(0,s.jsx)(He.HE,{}),(0,s.jsx)(Oe.n,{children:`Price ${i?"increased":"decreased"} from ${a({input:e.priceInfo.ETHPrice,type:ee.sw.NFTToken})} ETH`})]}),(0,s.jsx)(Oe.n,{style:{marginLeft:"-8px",marginRight:"-8px"},children:(0,s.jsx)(nt,{asset:e,usdPrice:t,removeAsset:()=>{},isMobile:o})}),(0,s.jsxs)(je.X2,{gap:"8",justifyContent:"space-between",children:[(0,s.jsx)(Je,{onClick:c,emphasis:De.eI.medium,size:De.qE.small,children:"Remove"}),(0,s.jsx)(Je,{onClick:d,emphasis:De.eI.high,size:De.qE.small,children:"Keep"})]})]})},rt=({assets:e})=>(0,s.jsx)(je.sg,{display:"grid",style:{gridTemplateColumns:`repeat(${e.length}, 20px)`,width:32+20*(e.length-1)+"px"},children:e.map(((e,t)=>(0,s.jsx)(Oe.n,{as:"img",src:e.smallImageUrl,width:"32",height:"32",borderStyle:"solid",borderWidth:"1px",borderColor:"surface1",borderRadius:"4",style:{zIndex:t},className:Ye},`${e.address}-${e.tokenId}`)))}),ot=({assets:e,usdPrice:t,clearUnavailableAssets:n,didOpenUnavailableAssets:r,setDidOpenUnavailableAssets:o,isMobile:a})=>{const[i,c]=(0,S.useReducer)((e=>!e),!1),[d,l]=(0,S.useState)(8);if((0,S.useEffect)((()=>{if(!d)return void(r||(n(),o(!1)));const e=setInterval((()=>{l(d-1)}),1e3);return()=>clearInterval(e)}),[d,n,r,o]),!e||0===e.length)return null;const u=e.length>1,p=i||!u;return(0,s.jsx)(je.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3tf rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez6df rgw6ez5yr rgw6ez1dr",children:(0,s.jsxs)(je.sg,{children:[(0,s.jsxs)(je.X2,{justifyContent:"space-between",marginBottom:p?"12":"0",cursor:u?"pointer":"default",onClick:()=>{u&&(!r&&o(!0),c())},children:[(0,s.jsxs)(je.X2,{gap:"12",color:"neutral2",className:Fe.Km,children:[!p&&(0,s.jsx)(rt,{assets:e.slice(0,5)}),"No longer available"]}),u&&(0,s.jsx)(je.X2,{color:"neutral2",children:i?(0,s.jsx)(He.X_,{}):(0,s.jsx)(He.Xs,{})}),!r&&(0,s.jsxs)(je.X2,{position:"relative",width:"20",height:"20",color:"neutral1",justifyContent:"center",cursor:"pointer",onClick:n,children:[(0,s.jsx)(ze,{}),(0,s.jsx)(He.Nb,{})]})]}),(0,s.jsx)(je.sg,{gap:"8",style:{marginLeft:"-8px",marginRight:"-8px"},children:p&&e.map((e=>(0,s.jsx)(nt,{asset:e,usdPrice:t,removeAsset:()=>{},grayscale:!0,isMobile:a},e.id)))})]})})},at=()=>{const e=(0,Pe.cP)((e=>e.bagStatus)),t=(0,Pe.cP)((e=>e.setBagStatus)),n=(0,Pe.cP)((e=>e.markAssetAsReviewed)),r=(0,Pe.cP)((e=>e.didOpenUnavailableAssets)),i=(0,Pe.cP)((e=>e.setDidOpenUnavailableAssets)),c=(0,Pe.cP)((e=>e.itemsInBag)),d=(0,Pe.cP)((e=>e.setItemsInBag)),l=(0,Pe.cP)((e=>e.removeAssetsFromBag)),u=(0,Pe.dD)(),p=(0,S.useMemo)((()=>(0,U.G7)(c)),[c]),m=(0,Pe.$N)(),{unchangedAssets:g,priceChangedAssets:x,unavailableAssets:h,availableItems:f}=(0,S.useMemo)((()=>({unchangedAssets:p.filter((e=>e.status===B.ZJ.ADDED_TO_BAG||e.status===B.ZJ.REVIEWED)).map((e=>e.asset)),priceChangedAssets:p.filter((e=>e.status===B.ZJ.REVIEWING_PRICE_CHANGE)).map((e=>e.asset)),unavailableAssets:p.filter((e=>e.status===B.ZJ.UNAVAILABLE)).map((e=>e.asset)),availableItems:p.filter((e=>e.status!==B.ZJ.UNAVAILABLE))})),[p]);return(0,S.useEffect)((()=>{const n=x.length>0,s=p.length>0;n&&(0,a._P)(o.Yz.NFT_BUY_BAG_CHANGED,{usd_value:m,bag_quantity:p,...(0,U.Hj)(x)}),e!==B.s.IN_REVIEW||n||t(s?B.s.CONFIRM_REVIEW:B.s.ADDING_TO_BAG),e!==B.s.CONFIRM_REVIEW||s||t(B.s.ADDING_TO_BAG)}),[e,p,x,t,m]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(je.sg,{display:x.length>0||h.length>0?"flex":"none",children:[h.length>0&&(0,s.jsx)(a.fM,{name:o.Yz.NFT_BUY_BAG_CHANGED,properties:{usd_value:m,bag_quantity:p.length,...(0,U.Hj)(h)},shouldLogImpression:!0,children:(0,s.jsx)(ot,{assets:h,usdPrice:m,clearUnavailableAssets:()=>d(f),didOpenUnavailableAssets:r,setDidOpenUnavailableAssets:i,isMobile:u})}),x.map(((e,t)=>(0,s.jsx)(st,{asset:e,usdPrice:m,markAssetAsReviewed:n,top:0===t&&0===h.length,isMobile:u},e.id)))]}),(0,s.jsx)(je.sg,{children:g.slice(0).reverse().map((e=>(0,s.jsx)(nt,{asset:e,usdPrice:m,removeAsset:l,showRemove:!0,isMobile:u},e.id)))})]})};var it=n(62329);const ct=(0,Q.default)(ae.oD).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagHeader__ClearButton",componentId:"sc-a59e8baf-0"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;

  :active {
    text-decoration: none;
  }
`,dt=Q.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagHeader__IconWrapper",componentId:"sc-a59e8baf-1"})`
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  padding: 2px;
  opacity: 1;

  ${it.c}
`,lt=Q.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagHeader__CounterDot",componentId:"sc-a59e8baf-2"})`
  align-items: center;
  background-color: ${({theme:e})=>e.accent1};
  border-radius: 100px;
  font-weight: bold;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  font-size: 10px;
  justify-content: center;
  min-width: ${({sizing:e})=>e};
  min-height: ${({sizing:e})=>e};
  padding: 4px 6px;
`,ut=Q.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\BagHeader__Wrapper",componentId:"sc-a59e8baf-3"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  margin: 16px 28px;
  text-align: center;
`,pt=({numberOfAssets:e,closeBag:t,resetFlow:n,isProfilePage:o})=>{const a=(0,S.useMemo)((()=>(e=>17+6*e.toString().length+"px")(e)),[e]);return(0,s.jsxs)(ut,{children:[(0,s.jsx)(ae.Tv.HeadlineSmall,{children:o?(0,s.jsx)(r.cC,{id:"xNB0TS"}):(0,s.jsx)(r.cC,{id:"EnO7qf"})}),e>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(lt,{sizing:a,children:e}),(0,s.jsx)(ct,{onClick:n,children:(0,s.jsx)(r.cC,{id:"yYxB17"})})]}),(0,s.jsx)(dt,{onClick:t,children:(0,s.jsx)(He.BW,{"data-testid":"nft-bag-close-icon"})})]})};var mt=n(17669);const gt=(0,Q.default)(je.sg).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\EmptyContent__StyledColumn",componentId:"sc-4847ac9a-0"})`
  gap: 12px;
  margin-top: 68px;
`;var xt=()=>{const e=(0,i.e5)();return(0,s.jsxs)(gt,{children:[(0,s.jsx)(je.M5,{children:e?(0,s.jsx)(He.JP,{color:mt.Z4.colors.neutral3}):(0,s.jsx)(He.Ln,{color:mt.Z4.colors.neutral3,height:"96px",width:"96px",strokeWidth:"1px"})}),e?(0,s.jsx)(je.M5,{"data-testid":"nft-no-nfts-selected",className:Fe.v4,children:"No NFTs selected"}):(0,s.jsxs)(je.sg,{gap:"16",children:[(0,s.jsx)(je.M5,{"data-testid":"nft-empty-bag",className:Fe.v4,style:{lineHeight:"24px"},children:"Your bag is empty"}),(0,s.jsx)(je.M5,{fontSize:"12",fontWeight:"book",color:"neutral2",style:{lineHeight:"16px"},children:"Selected NFTs will appear here"})]})]})};var ht=({asset:e})=>{const t=(0,Pe.Pc)((e=>e.removeSellAsset)),n=(0,Pe.dD)(),[r,o]=(0,S.useState)(!1),a=()=>o(!r),i=n=>{n.preventDefault(),n.stopPropagation(),t(e)};return(0,s.jsxs)(je.X2,{className:Ve,onMouseEnter:a,onMouseLeave:a,children:[(0,s.jsxs)(Oe.n,{position:"relative",display:"flex",children:[n&&(0,s.jsx)(et,{onClick:i}),(0,s.jsx)("img",{src:e.smallImageUrl,alt:e.name,className:Ze})]}),(0,s.jsxs)(je.sg,{overflow:"hidden",width:"full",color:"neutral1",children:[(0,s.jsx)(je.X2,{overflow:"hidden",width:"full",justifyContent:"space-between",whiteSpace:"nowrap",gap:"16",children:(0,s.jsx)(Oe.n,{className:$e,children:e.name||`#${e.tokenId}`})}),(0,s.jsxs)(je.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(Oe.n,{className:qe,children:e.asset_contract.name}),e.collectionIsVerified&&(0,s.jsx)(He.SA,{className:Ke})]})]}),r&&!n&&(0,s.jsx)(Xe,{onClick:i,emphasis:De.eI.medium,size:De.qE.medium,children:"Remove"})]})};const ft=()=>{const e=(0,Pe.Pc)((e=>e.sellAssets));return(0,s.jsx)(je.sg,{children:e.length?e.map(((e,t)=>(0,s.jsx)(ht,{asset:e},t))):null})},It=320,Ct=360,Nt=Q.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\Bag__BagContainer",componentId:"sc-e6de1f05-0"})`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 88px;
  right: 20px;
  width: ${It}px;
  height: calc(100vh - 108px);
  background: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  z-index: ${({raiseZIndex:e,isProfilePage:t})=>e?t?Re.k.modalOverTooltip:Re.k.modalBackdrop-1:3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    border: none;
  }

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${Ct}px;
  }
`,bt=Q.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\Bag__DetailsPageBackground",componentId:"sc-e6de1f05-1"})`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0px;
  width: 100%;
  height: 100%;
`,Tt=Q.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\bag\\Bag__ContinueButton",componentId:"sc-e6de1f05-2"})`
  background: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  margin: 32px 28px 16px;
  padding: 10px 0px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transition.duration.medium};

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,At=({top:e,show:t})=>(0,s.jsx)(Oe.n,{marginX:"24",borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",borderTopColor:e?"transparent":"surface3",borderBottomColor:e?"surface3":"transparent",opacity:t?"1":"0",transition:"250"});var _t=()=>{const{resetSellAssets:e,sellAssets:t}=(0,Pe.Pc)((({reset:e,sellAssets:t})=>({resetSellAssets:e,sellAssets:t}))),{setProfilePageState:n}=(0,Pe.aO)((({setProfilePageState:e})=>({setProfilePageState:e}))),{bagStatus:c,bagIsLocked:d,reset:l,bagExpanded:u,toggleBag:p,setBagExpanded:m}=(0,Pe.cP)((e=>({...e,bagIsLocked:e.isLocked,uncheckedItemsInBag:e.itemsInBag}))),{uncheckedItemsInBag:g}=(0,Pe.cP)((({itemsInBag:e})=>({uncheckedItemsInBag:e}))),x=(0,i.e5)(),h=(0,i._3)(),f=(0,i.GZ)(),I=(0,Pe.dD)(),C=(0,S.useMemo)((()=>(0,U.G7)(g)),[g]),[N,b]=(0,S.useState)(!1),{userCanScroll:T,scrollRef:A,scrollProgress:_,scrollHandler:E}=(0,Pe.uh)(),w=(0,S.useCallback)((()=>{m({bagExpanded:!1,manualClose:!0})}),[m]);(0,S.useEffect)((()=>{d&&!N&&b(!0)}),[d,N]);const v=C.length>0,O=C.length>0,k=t.length>0,j=Boolean(!x&&!O&&c===B.s.ADDING_TO_BAG||x&&!k),y=(0,S.useMemo)((()=>({...(0,U.Hj)(C.map((e=>e.asset)))})),[C]);return u&&f?(0,s.jsxs)(ke.h,{children:[(0,s.jsxs)(Nt,{"data-testid":"nft-bag",raiseZIndex:I||N,isProfilePage:x,children:[(0,s.jsx)(pt,{numberOfAssets:x?t.length:C.length,closeBag:w,resetFlow:x?e:l,isProfilePage:x}),j&&(0,s.jsx)(xt,{}),(0,s.jsx)(At,{top:!0,show:T&&_>0}),(0,s.jsx)(je.sg,{ref:A,className:"_1jcz50r1 rgw6ez2ef rgw6ez2jx rgw6ez1yr rgw6ez8ct",onScroll:E,gap:"12",children:x?(0,s.jsx)(ft,{}):(0,s.jsx)(at,{})}),v&&!x&&(0,s.jsx)(ve,{setModalIsOpen:b,eventProperties:y}),k&&x&&(0,s.jsx)(Tt,{onClick:()=>{p(),n(B.HA.LISTING),(0,a._P)(o.Yz.NFT_PROFILE_PAGE_START_SELL,{list_quantity:t.length,collection_addresses:t.map((e=>e.asset_contract.address)),token_ids:t.map((e=>e.tokenId))})},children:(0,s.jsx)(r.cC,{id:"xGVfLh"})})]}),h?(0,s.jsx)(bt,{onClick:p}):N&&(0,s.jsx)(ye.a,{onClick:()=>d?void 0:b(!1)})]}):null}},54212:function(e,t,n){n.d(t,{a:function(){return i},U:function(){return a}});var s=n(42893),r=n(42826),o=n(98424);n(56605);const a=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},i=({onClick:e=r.Z})=>(0,s.jsx)(o.n,{className:"_199qdl71 rgw6ez3f3 rgw6ez343 rgw6ez17l rgw6ez1ef rgw6ez48r rgw6ez44l rgw6ez4u3",onClick:e})},50026:function(e,t,n){n.d(t,{B:function(){return p},P:function(){return u}});var s=n(86003),r=n(69867),o=n(15627),a=n(95202),i=n(4572),c=n(1004),d=n(13712),l=n(98841);function u(){const e=(0,l.c)((e=>e.itemsInBag));return(0,d.useMemo)((()=>e.reduce(((e,t)=>t.status!==c.ZJ.UNAVAILABLE?e.add(s.O$.from(t.asset.updatedPriceInfo?t.asset.updatedPriceInfo.ETHPrice:t.asset.priceInfo.ETHPrice)):e),s.O$.from(0))),[e])}function p(){const e=u(),t=(0,o.U8)("ETH"),n=(0,d.useMemo)((()=>(0,i.Z)((0,r.formatEther)(e.toString()),t??void 0)),[t,e]),s=(0,a.sq)(n);return(0,d.useMemo)((()=>s?.toExact()),[s])}}}]);
//# sourceMappingURL=7790.4c9bd2b8.chunk.js.map