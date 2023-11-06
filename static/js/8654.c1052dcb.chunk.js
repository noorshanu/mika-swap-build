"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8654],{86646:function(e,t,s){s.r(t),s.d(t,{default:function(){return wi}});var n=s(42893),i=s(12204),o=s(19903),r=s(80815),a=s(66196),c=s(18646),l=s(60198),d=s(17790),p=s(60476),m=s(2304),u=s(95202),f=s(46217),h=s(4572),x=s(30476),g=s(55867),w=s(54212),b=s(13712),C=s(50595),k=s(34578),v=s(87253),j=s(1990),y=s(39839),_=s(437),D=s(57482);const P=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__ModalWrapper",componentId:"sc-ae656bd-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${_.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: ${j.j$.sm}px) {
    width: 100%;
  }
`,I=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__CloseIconWrapper",componentId:"sc-ae656bd-1"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,S=(0,v.default)(C.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__CloseIcon",componentId:"sc-ae656bd-2"})`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`,N=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__HazardIconWrap",componentId:"sc-ae656bd-3"})`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px 120px;
`,O=(0,v.default)(l.DF).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__ContinueButton",componentId:"sc-ae656bd-4"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  margin-top: 12px;
`,T=v.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__EditListings",componentId:"sc-ae656bd-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.accent1};
  text-align: center;
  cursor: pointer;
  padding: 12px 16px;

  &:hover {
    opacity: 0.6;
  }
`,$=({listingsBelowFloor:e,closeModal:t,startListing:s})=>{const o=(0,v.useTheme)(),{formatDelta:r}=(0,D.Gb)();return(0,n.jsxs)(g.h,{children:[(0,n.jsxs)(P,{children:[(0,n.jsxs)(I,{children:[(0,n.jsx)(S,{width:24,height:24,onClick:t})," "]}),(0,n.jsx)(N,{children:(0,n.jsx)(k.Z,{height:90,width:90,color:o.critical})}),(0,n.jsx)(y.Tv.HeadlineSmall,{lineHeight:"28px",textAlign:"center",children:(0,n.jsx)(i.cC,{id:"nJdoNI"})}),(0,n.jsxs)(y.Tv.BodyPrimary,{textAlign:"center",children:[(0,n.jsx)(i.cC,{id:"+VPrZ3",values:{0:1!==e.length?2:1,1:x.ag._({id:"DK8H0x",values:{0:r(100*(1-(e[0][1].price??0)/(e[0][0].floorPrice??0)))}}),2:x.ag._({id:"7fIIB5",values:{0:e.length}})}}),"\xa0",(0,n.jsx)(i.cC,{id:"LngMh5"})]}),(0,n.jsx)(O,{onClick:e=>{e.preventDefault(),e.stopPropagation(),s(),t()},children:(0,n.jsx)(i.cC,{id:"xGVfLh"})}),(0,n.jsx)(T,{onClick:t,children:(0,n.jsx)(i.cC,{id:"jUcBoP"})})]}),(0,n.jsx)(w.a,{onClick:t})]})};var R=s(5658),E=s(21828),M=s(79954),G=s(55831),L=s.n(G);const H=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\shared__RemoveIconWrap",componentId:"sc-7c47588-0"})`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 32px;
  visibility: ${({hovered:e})=>e?"visible":"hidden"};
`,A=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\shared__TitleRow",componentId:"sc-7c47588-1"})`
  justify-content: space-between;
  margin-bottom: 8px;
`;var F,U;!function(e){e[e.SAME_PRICE=0]="SAME_PRICE",e[e.FLOOR_PRICE=1]="FLOOR_PRICE",e[e.LAST_PRICE=2]="LAST_PRICE",e[e.CUSTOM=3]="CUSTOM"}(F||(F={})),function(e){e[e.BELOW_FLOOR=0]="BELOW_FLOOR",e[e.ALREADY_LISTED=1]="ALREADY_LISTED",e[e.NONE=2]="NONE"}(U||(U={}));const W="0x59728544B08AB483533076417FbBB2fD0B17CE3a",Z="0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",B="0x1e0049783f008a0085193e00003d00cd54003c71",z="0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC",V={[Z]:B},X=1e4,Y=async e=>{const t=JSON.stringify(e),s=new AbortController,n=new Request("https://temp.api.uniswap.org/v1/nft/postX2Y2SellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:s.signal}),i=setTimeout((()=>s.abort()),6e4);try{const e=await fetch(n);return 200===(await e.json()).code}catch(o){return!1}finally{clearTimeout(i)}},J=async(e,t)=>{const s=`https://temp.api.uniswap.org/v1/nft/getX2Y2OrderId?collectionAddress=${e}&tokenId=${t}`,n=await fetch(s,{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"}}),i=await n.json();return i?.data?.data?.[0]?.id};var K=s(1004),q=s(86003),Q=s(4348),ee=s(69867),te=s(88868),se=s(13368),ne=s(91101);const ie=async e=>{const t=await fetch("https://temp.api.uniswap.org/v1/nft/createLooksRareOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return(await t.json()).success}catch(s){return!1}};var oe=s(7432),re=s(86784),ae=s(7571),ce=s(39112),le=s(95339),de=s(73198),pe=s(14628);const me="tuple(uint256 price, bytes data)",ue=["uint256","address","uint256","uint256","uint256","uint256","address","bytes","uint256",`${me}[]`],fe=`tuple(uint256 salt, address user, uint256 network, uint256 intent, uint256 delegateType, uint256 deadline, address currency, bytes dataMask, ${me}[] items, bytes32 r, bytes32 s, uint8 v, uint8 signVersion)`,he=async(e,t)=>{const s=ae.$.encode(ue,[t.salt,t.user,t.network,t.intent,t.delegateType,t.deadline,t.currency,t.dataMask,t.items.length,t.items]),n=(0,de.keccak256)(s),i=await e.send("personal_sign",[n,t.user]);t.r=`0x${i.slice(2,66)}`,t.s=`0x${i.slice(66,130)}`,t.v=parseInt(i.slice(130,132),16),xe(t)},xe=e=>{e.v<27&&(e.v=e.v+27)},ge=e=>ae.$.encode([fe],[e]),we=(e,t,s,n=M.hg.Erc721)=>({salt:(()=>{const e=q.O$.from((0,pe.O)(16)).toHexString();return(0,ce.hexZeroPad)(e,64)})(),user:e,network:1,intent:1,delegateType:n===M.hg.Erc721?1:2,deadline:t,currency:le.d,dataMask:"0x",items:s.map((e=>{return{price:e.price,data:(t=e.tokens,ae.$.encode(["tuple(address token, uint256 tokenId, uint256 amount)[]"],[t]))};var t})),r:"",s:"",v:0,signVersion:1}),be=[{name:"X2Y2",fee:.5},{name:"OpenSea",fee:2.5}],Ce=(e,t)=>({amount:e,recipient:t}),ke=(e,t,s)=>{const n=e?.basisPoints??0,i=100*(be.find((e=>"OpenSea"===e.name))?.fee??0),o=X-n-i,r=t.mul(q.O$.from(n)).div(q.O$.from(X)).toString(),a=t.mul(q.O$.from(o)).div(q.O$.from(X)).toString(),c=t.mul(q.O$.from(i)).div(q.O$.from(X)).toString();return{sellerFee:Ce(a,s),creatorFee:n>0?Ce(r,e?.asset_contract?.payout_address??""):void 0,openSeaFee:i?Ce(c,"0x0000a26b00c1F0DF003000390027140000fAa719"):void 0}};async function ve(e,t,s,n,i=0,o){const r=new te.A(n,{conduitKeyToConduit:V,overrides:{defaultConduitKey:Z},seaportVersion:"1.5"}),a=await s.getAddress(),c=t.newListings?.find((t=>t.marketplace.name===e.name))?.price;if(!c||!t.expirationTime||!t.asset_contract.address||!t.tokenId)return!1;switch(e.name){case"OpenSea":try{const e=(0,ee.parseEther)(`${c}`),{sellerFee:s,creatorFee:n,openSeaFee:i}=ke(t,e,a),l=[s,n,i].filter((e=>void 0!==e)),{executeAllActions:d}=await r.createOrder({offer:[{itemType:t.asset_contract.tokenType===M.hg.Erc721?se.ItemType.ERC721:se.ItemType.ERC1155,token:t.asset_contract.address,identifier:t.tokenId,amount:"1"}],consideration:l,endTime:t.expirationTime.toString(),zone:ne.r_,allowPartialFills:!0},a),p={...await d(),protocol_address:z};o(K.Sb.PENDING);const m=await async function(e){const t=e?JSON.stringify(e):void 0,s=new AbortController,n=new Request("https://temp.api.uniswap.org/v1/nft/postOpenSeaSellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:s.signal}),i=setTimeout((()=>s.abort()),L()("60s"));try{const e=await fetch(n);return 200===(await e.json()).code}catch(o){return!1}finally{clearTimeout(i)}}(p);return o(m?K.Sb.APPROVED:K.Sb.FAILED),m}catch(l){return 4001===l.code?o(K.Sb.REJECTED):o(K.Sb.FAILED),!1}case"LooksRare":{const e=E.Xg[E.HL.MAINNET],n=Math.round(Date.now()/1e3),r={isOrderAsk:!0,signer:a,collection:t.asset_contract.address,price:(0,ee.parseEther)(c.toString()),tokenId:q.O$.from(t.tokenId),amount:q.O$.from(1),strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,nonce:q.O$.from(i),startTime:q.O$.from(n),endTime:q.O$.from(t.expirationTime),minPercentageToAsk:q.O$.from(1e4).sub(q.O$.from(150+(t.basisPoints?50:0))).toNumber(),params:[]};try{const l=await(0,E.tI)(s,E.HL.MAINNET,r,W);o(K.Sb.PENDING);const d={signature:l,tokenId:t.tokenId,collection:t.asset_contract.address,strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,signer:a,isOrderAsk:!0,nonce:i,amount:1,price:(0,ee.parseEther)(c.toString()).toString(),startTime:n,endTime:t.expirationTime,minPercentageToAsk:1e4-(150+(t.basisPoints?50:0)),params:[]},p=await ie(d);return o(p?K.Sb.APPROVED:K.Sb.FAILED),p}catch(l){return 4001===l.code?o(K.Sb.REJECTED):o(K.Sb.FAILED),!1}}case"X2Y2":{const e={price:(0,ee.parseEther)(c.toString()),tokens:[{token:t.asset_contract.address,tokenId:q.O$.from(t.tokenId),amount:1}]},s=we(a,t.expirationTime,[e],t.asset_contract.tokenType);try{const e=await J(t.asset_contract.address,t.tokenId);await he(n,s);const i={order:ge(s),isBundle:!1,bundleName:"",bundleDesc:"",orderIds:e?[e]:[],changePrice:Boolean(e),isCollection:!1};o(K.Sb.PENDING);const r=await Y(i);return o(r?K.Sb.APPROVED:K.Sb.FAILED),r}catch(l){return 4001===l.code?o(K.Sb.REJECTED):o(K.Sb.FAILED),!1}}default:return!1}}async function je(e,t,s){const n=()=>je(e,t,s);s(e,K.Sb.SIGNING,n);const{marketplace:i,collectionAddress:o,nftStandard:r}=e,a=E.Xg[E.HL.MAINNET],c="OpenSea"===i.name?B:"LooksRare"===i.name?e.nftStandard===M.hg.Erc721?W:"0xfed24ec7e22f573c2e08aef55aa6797ca2b3a051":"X2Y2"===i.name?e.nftStandard===M.hg.Erc721?"0xf849de01b080adc3a814fabe1e2087475cf2e354":"0x024ac22acdb367a3ae52a3d94ac6649fdc1f0779":a.TRANSFER_MANAGER_ERC721;o&&await async function(e,t,s,n,i=M.hg.Erc721){const o=new Q.Contract(t,i===M.hg.Erc721?oe:re,s),r=await s.getAddress();try{if(await o.isApprovedForAll(r,e))return void n(K.Sb.APPROVED);n(K.Sb.SIGNING);const t=await o.setApprovalForAll(e,!0);n(K.Sb.PENDING),1===(await t.wait()).status?n(K.Sb.APPROVED):n(K.Sb.FAILED)}catch(a){4001===a.code?n(K.Sb.REJECTED):n(K.Sb.FAILED)}}(c,o,t,(t=>s(e,t,n)),r)}async function ye(e,t,s,n,i,o){const r=n(),a=()=>ye(e,t,s,n,i,o);o(e,K.Sb.SIGNING,a);const{asset:c,marketplace:l}=e;await ve(l,c,t,s,r,(t=>o(e,t,a)))&&"LooksRare"===e.marketplace.name&&i(r+1)}const _e=e=>{const t=e.reduce(((e,t)=>{if(t.newListings?.length){const s=t.newListings.reduce(((e,t)=>(e.price??0)>(t.price??0)?e:t)),n=s.marketplace.fee+("LooksRare"===s.marketplace.name?50:t?.basisPoints??0)/100;return e+(s.price??0)-(s.price??0)*(n/100)}return e}),0);return t?Math.round(1e4*t+Number.EPSILON)/1e4:0};function De(){const e=(0,R.Pc)((e=>e.sellAssets)),{setListings:t,setCollectionsRequiringApproval:s}=(0,R.zM)((({setListings:e,setCollectionsRequiringApproval:t})=>({setListings:e,setCollectionsRequiringApproval:t})));(0,b.useEffect)((()=>{const[n,i]=(e=>{const t=[],s=[];return e.forEach((e=>{e.marketplaces?.forEach((n=>{const i={image:e.smallImageUrl,name:e.name||`#${e.tokenId}`,status:K.Sb.DEFINED,asset:e,marketplace:n,price:e.newListings?.find((e=>e.marketplace.name===n.name))?.price};if(s.push(i),!t.some((t=>t.collectionAddress===e.asset_contract.address&&t.marketplace.name===n.name))){const s={image:e.asset_contract.image_url,name:e.asset_contract.name,status:K.Sb.DEFINED,collectionAddress:e.asset_contract.address,isVerified:e.collectionIsVerified,marketplace:n,nftStandard:e.asset_contract.tokenType};t.push(s)}}))})),[t,s]})(e);t(i),s(n)}),[e,s,t])}const Pe=(e,t)=>.01*("LooksRare"===e.name?t.basisPoints?50:0:t.basisPoints??0),Ie=(0,v.default)(l.Yd).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\ListingButton__StyledListingButton",componentId:"sc-e8e4aebd-0"})`
  background: ${({showResolveIssues:e,theme:t})=>e?t.critical:t.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  padding: 16px;
  border-radius: 12px;
  width: min-content;
  border: none;
  cursor: ${({missingPrices:e})=>e?"auto":"pointer"};
  opacity: ${({showResolveIssues:e,missingPrices:t})=>!e&&t&&"0.3"};

  @media screen and (max-width: ${j.j$.sm}px) {
    font-size: 16px;
    line-height: 20px;
    padding: 10px 12px;
  }
`,Se=({onClick:e})=>{const{sellAssets:t,showResolveIssues:s,toggleShowResolveIssues:o,issues:r,setIssues:a}=(0,R.Pc)((({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:s,issues:n,setIssues:i})=>({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:s,issues:n,setIssues:i}))),[c,l]=(0,b.useState)(!1),d=(0,R.dD)(),[p,m]=(0,b.useMemo)((()=>{const{missingExpiration:e,overMaxExpiration:n,listingsMissingPrice:i,listingsBelowFloor:r,listingsAboveSellOrderFloor:c}=(e=>{const t=e.some((e=>null!=e.expirationTime&&(isNaN(e.expirationTime)||1e3*e.expirationTime-Date.now()<L()("60s")))),s=e.some((e=>null!=e.expirationTime&&1e3*e.expirationTime-Date.now()>L()("180d"))),n=[],i=[],o=[];for(const r of e)if(r.newListings)for(const e of r.newListings)e.price?e.price<.8*(r?.floorPrice??0)&&!e.overrideFloorPrice?i.push([r,e]):r.floor_sell_order_price&&e.price>=r.floor_sell_order_price&&r.asset_contract.tokenType!==M.hg.Erc1155&&o.push([r,e]):n.push([r,e]);return{missingExpiration:t,overMaxExpiration:s,listingsMissingPrice:n,listingsBelowFloor:i,listingsAboveSellOrderFloor:o}})(t),l=Number(e)+Number(n)+i.length+c.length;return a(l),!l&&s&&o(),(e||n||c.length)&&!s&&o(),[i,r]}),[t,a,s,o]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ie,{onClick:()=>{r?!s&&o():m.length?l(!0):e()},missingPrices:!!p.length,showResolveIssues:s,children:s?(0,n.jsx)(i.cC,{id:"KbR9EP",values:{0:1!==r?2:1,1:x.ag._({id:"mTYnTI",values:{issues:r}})}}):p.length&&!d?(0,n.jsx)(i.cC,{id:"FULt6J"}):(0,n.jsx)(i.cC,{id:"HmkXCG"})}),c&&(0,n.jsx)($,{listingsBelowFloor:m,closeModal:()=>l(!1),startListing:e})]})};var Ne=s(46591),Oe=s(62329),Te=s(65647),$e=s(26030),Re=s(7178),Ee=s(62878),Me=s(47371),Ge=s(25575),Le=s(12113),He=s(29304),Ae=s(40709),Fe=s(18030);const Ue=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ContentColumn",componentId:"sc-e114c2e9-0"})`
  background-color: ${({theme:e,failed:t})=>t&&(0,Fe.j)(12,e.critical)};
  border-radius: 12px;
  padding-bottom: ${({failed:e})=>e&&"16px"};
`,We=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ContentRowWrapper",componentId:"sc-e114c2e9-1"})`
  padding: 16px;
  border: ${({failed:e,theme:t})=>!e&&`1px solid ${t.surface3}`};
  border-radius: 12px;
  opacity: ${({active:e,failed:t})=>e||t?"1":"0.6"};
`,Ze=v.default.img.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__CollectionIcon",componentId:"sc-e114c2e9-2"})`
  border-radius: 100px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,Be=v.default.img.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__AssetIcon",componentId:"sc-e114c2e9-3"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,ze=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__MarketplaceIcon",componentId:"sc-e114c2e9-4"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  margin-left: -4px;
  margin-right: 12px;
`,Ve=(0,v.default)(y.Tv.SubHeaderSmall).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ContentName",componentId:"sc-e114c2e9-5"})`
  color: ${({theme:e})=>e.neutral1};
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 40%;
`,Xe=v.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ProceedText",componentId:"sc-e114c2e9-6"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,Ye=v.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__FailedText",componentId:"sc-e114c2e9-7"})`
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({theme:e})=>e.critical};
  margin-left: 4px;
`,Je=(0,v.default)($e.SA).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__StyledVerifiedIcon",componentId:"sc-e114c2e9-8"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
`,Ke=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__IconWrapper",componentId:"sc-e114c2e9-9"})`
  margin-left: auto;
  margin-right: 0px;
`,qe=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ButtonRow",componentId:"sc-e114c2e9-10"})`
  padding: 0px 16px;
  justify-content: space-between;
`,Qe=v.css`
  width: 152px;
  cursor: pointer;
  padding: 8px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }
`,et=v.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__RemoveButton",componentId:"sc-e114c2e9-11"})`
  background-color: ${({theme:e})=>e.critical};
  color: ${({theme:e})=>e.neutral1};
  ${Qe}
`,tt=v.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__RetryButton",componentId:"sc-e114c2e9-12"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${Qe}
`,st=({row:e,isCollectionApprovalSection:t,removeRow:s})=>{const o=(0,v.useTheme)(),r=(0,b.useRef)(),a=e.status===K.Sb.FAILED||e.status===K.Sb.REJECTED;return(0,b.useEffect)((()=>{e.status===K.Sb.SIGNING&&r.current}),[e.status]),(0,n.jsxs)(Ue,{failed:a,children:[(0,n.jsxs)(We,{active:e.status===K.Sb.SIGNING||e.status===K.Sb.APPROVED,failed:a,ref:r,children:[t?(0,n.jsx)(Ze,{src:e.image}):(0,n.jsx)(Be,{src:e.image}),(0,n.jsx)(ze,{children:(0,Le.Dp)(e.marketplace.name,"24")}),(0,n.jsx)(Ve,{children:e.name}),t&&e.isVerified&&(0,n.jsx)(Je,{}),(0,n.jsx)(Ke,{children:e.status===K.Sb.DEFINED||e.status===K.Sb.PENDING?(0,n.jsx)(Ge.ZP,{height:"14px",width:"14px",stroke:e.status===K.Sb.PENDING?o.accent1:o.neutral3}):e.status===K.Sb.SIGNING?(0,n.jsx)(Xe,{children:(0,n.jsx)(i.cC,{id:"CpEYLQ"})}):e.status===K.Sb.APPROVED?(0,n.jsx)(He.Z,{height:"20",width:"20",stroke:o.success}):a&&(0,n.jsxs)(m.ZP,{children:[(0,n.jsx)(Ae.Z,{height:"20",width:"20",color:o.critical}),(0,n.jsx)(Ye,{children:e.status===K.Sb.FAILED?(0,n.jsx)(i.cC,{id:"7Bj3x9"}):(0,n.jsx)(i.cC,{id:"ekCRTP"})})]})})]}),a&&(0,n.jsxs)(qe,{justify:"space-between",children:[(0,n.jsx)(et,{onClick:()=>s(e),children:(0,n.jsx)(i.cC,{id:"t/YqKh"})}),(0,n.jsx)(tt,{onClick:e.callback,children:(0,n.jsx)(i.cC,{id:"6gRgw8"})})]})]})},nt=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionHeader",componentId:"sc-10f7808c-0"})`
  justify-content: space-between;
`,it=(0,v.default)(y.Tv.SubHeader).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionTitle",componentId:"sc-10f7808c-1"})`
  line-height: 24px;
  color: ${({theme:e,active:t,approved:s})=>s?e.success:t?e.neutral1:e.neutral2};
`,ot=(0,v.default)($e.g8).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionArrow",componentId:"sc-10f7808c-2"})`
  height: 24px;
  width: 24px;
  cursor: pointer;
  transition: ${Me.Kd.medium}ms;
  transform: rotate(${({active:e})=>e?0:180}deg);
`,rt=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionBody",componentId:"sc-10f7808c-3"})`
  border-left: 1.5px solid ${Ee.O9.gray650};
  margin-top: 4px;
  margin-left: 7px;
  padding-top: 4px;
  padding-left: 20px;
  max-height: 394px;
  overflow-y: auto;
  ${Oe.Z}
`,at=(0,v.default)(Re.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__StyledInfoIcon",componentId:"sc-10f7808c-4"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
  color: ${({theme:e})=>e.neutral2};
`,ct=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__ContentRowContainer",componentId:"sc-10f7808c-5"})`
  gap: 8px;
  scroll-behavior: smooth;
`;var lt;!function(e){e[e.APPROVE=0]="APPROVE",e[e.SIGN=1]="SIGN"}(lt||(lt={}));const dt=({sectionType:e,active:t,content:s,toggleSection:o})=>{const r=(0,v.useTheme)(),a=(0,R.Pc)((e=>e.sellAssets)),c=(0,R.Pc)((e=>e.removeAssetMarketplace)),l=(0,b.useMemo)((()=>!s.some((e=>e.status!==K.Sb.APPROVED))),[s]),d=0===e,u=(0,b.useMemo)((()=>{if(d){const e=s.map((e=>e.collectionAddress));return[...new Set(e)].length}}),[s,d]),f=e=>{if(d){const t=e;for(const e of a)e.asset_contract.address===t.collectionAddress&&c(e,t.marketplace)}else{const t=e;c(t.asset,t.marketplace)}};return(0,n.jsxs)(p.ZP,{children:[(0,n.jsxs)(nt,{children:[(0,n.jsxs)(m.ZP,{children:[t||l?(0,n.jsx)($e.bT,{fill:l?r.success:r.accent1}):(0,n.jsx)($e.rD,{}),(0,n.jsx)(it,{active:t,marginLeft:"12px",approved:l,children:d?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.cC,{id:"Z7ZXbT"}),"\xa0",(0,n.jsx)(i.cC,{id:"8KNiOP",values:{0:u??1}})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.cC,{id:"c+Fnce"})," \xa0",s.length,"\xa0"," ",(0,n.jsx)(i.cC,{id:"OOoi9e",values:{0:s.length}})]})})]}),(0,n.jsx)(ot,{active:t,secondaryColor:t?r.neutral1:r.neutral2,onClick:o})]}),t&&(0,n.jsxs)(rt,{children:[d&&(0,n.jsxs)(m.ZP,{height:"16px",marginBottom:"16px",children:[(0,n.jsx)(y.Tv.BodySmall,{lineHeight:"16px",color:"neutral2",children:(0,n.jsx)(i.cC,{id:"CSw5a/"})}),(0,n.jsx)(Te.ud,{text:(0,n.jsx)(i.cC,{id:"VsETB7"}),children:(0,n.jsx)(at,{})})]}),(0,n.jsx)(ct,{children:s.map((e=>(0,n.jsx)(st,{row:e,removeRow:f,isCollectionApprovalSection:d},e?.name??e.marketplace.name)))})]})]})};var pt=s(77300);const mt=v.default.img.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__SuccessImage",componentId:"sc-ca6cb53b-0"})`
  width: calc(${({numImages:e})=>e>1?e>2?"33%":"50%":"100%"} - 12px);
  border-radius: 12px;
`,ut=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__SuccessImageWrapper",componentId:"sc-ca6cb53b-1"})`
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  overflow-y: scroll;
  margin-bottom: 16px;
  ${Oe.Z}
`,ft=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__ProceedsColumn",componentId:"sc-ca6cb53b-2"})`
  text-align: right;
`,ht=v.css`
  width: 182px;
  cursor: pointer;
  padding: 12px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: ${j.j$.sm}px) {
    width: 100%;
    margin-bottom: 8px;
  }
`,xt=v.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__ReturnButton",componentId:"sc-ca6cb53b-3"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${ht}
`,gt=v.default.a.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__TweetButton",componentId:"sc-ca6cb53b-4"})`
  background-color: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  text-decoration: none;
  ${ht}
`,wt=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__TweetRow",componentId:"sc-ca6cb53b-5"})`
  justify-content: center;
  gap: 4px;
`,bt=({overlayClick:e})=>{const t=(0,v.useTheme)(),{formatNumberOrString:s}=(0,D.Gb)(),o=(0,R.Pc)((e=>e.sellAssets)),{chainId:a}=(0,r.useWeb3React)(),c=(0,f.Z)(a),{formatCurrencyAmount:l}=(0,D.Gb)(),d=(0,b.useMemo)((()=>_e(o)),[o]),p=(0,h.Z)(d.toString(),c),x=(0,u.sq)(p);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(A,{children:[(0,n.jsxs)(y.Tv.HeadlineSmall,{lineHeight:"28px",children:[(0,n.jsx)(i.cC,{id:"n3Wa1f"}),"\xa0",o.length>1?` ${o.length} `:"","NFT",(0,Le._6)(o.length),"!"]}),(0,n.jsx)(C.Z,{size:24,cursor:"pointer",onClick:e})]}),(0,n.jsx)(ut,{children:o.map((e=>(0,n.jsx)(mt,{src:e.imageUrl,numImages:o.length},e?.asset_contract?.address??""+e?.tokenId)))}),(0,n.jsxs)(m.ZP,{justify:"space-between",align:"flex-start",marginBottom:"16px",children:[(0,n.jsx)(y.Tv.SubHeader,{children:(0,n.jsx)(i.cC,{id:"ORzP3x"})}),(0,n.jsxs)(ft,{children:[(0,n.jsxs)(y.Tv.SubHeader,{children:[s({input:d,type:D.sw.NFTToken})," ETH"]}),x&&(0,n.jsx)(y.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:l({amount:x,type:D.sw.FiatTokenPrice})})]})]}),(0,n.jsxs)(m.ZP,{justify:"space-between",flexWrap:"wrap",children:[(0,n.jsx)(xt,{onClick:()=>window.location.reload(),children:(0,n.jsx)(i.cC,{id:"eIO6eZ"})}),(0,n.jsx)(gt,{href:(0,Le.FX)(o),target:"_blank",rel:"noreferrer",children:(0,n.jsxs)(wt,{children:[(0,n.jsx)(pt.Z,{height:20,width:20,color:t.deprecated_accentTextLightPrimary,fill:t.deprecated_accentTextLightPrimary}),(0,n.jsx)(i.cC,{id:"BMdkoo"})]})})]})]})},Ct=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Modal\\ListModal__ListModalWrapper",componentId:"sc-327786fb-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${_.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: ${j.j$.sm}px) {
    width: 100%;
    height: 100%;
  }
`,kt=({overlayClick:e})=>{const{provider:t,chainId:s}=(0,r.useWeb3React)(),c=t?.getSigner(),l=(0,a.oO)({modal:o.KO.NFT_LISTING}),{formatCurrencyAmount:d}=(0,D.Gb)(),p=(0,R.Pc)((e=>e.sellAssets)),{setListingStatusAndCallback:m,setLooksRareNonce:x,getLooksRareNonce:k,collectionsRequiringApproval:v,listings:j}=(0,R.zM)((({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:s,collectionsRequiringApproval:n,listings:i})=>({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:s,collectionsRequiringApproval:n,listings:i}))),_=(0,b.useMemo)((()=>_e(p)),[p]),[P,I]=(0,b.useReducer)((e=>e===lt.APPROVE?lt.SIGN:lt.APPROVE),lt.APPROVE),S=(0,f.Z)(s),N=(0,h.Z)(_.toString(),S),O=d({amount:(0,u.sq)(N),type:D.sw.FiatTokenPrice}),T=(0,b.useMemo)((()=>v.every((e=>e.status===K.Sb.APPROVED))),[v]),$=(0,b.useMemo)((()=>j.every((e=>e.status===K.Sb.APPROVED))),[j]);(0,b.useEffect)((()=>{T&&((async()=>{if(c&&t){for(const e of j)await ye(e,c,t,k,x,m);(0,a._P)(o.Yz.NFT_LISTING_COMPLETED,{signatures_approved:j.filter((e=>e.status===K.Sb.APPROVED)),list_quantity:j.length,usd_value:O,...l})}})(),P===lt.APPROVE&&I())}),[T]);const E=(0,b.useCallback)((()=>{$?window.location.reload():e()}),[$,e]);return(0,b.useEffect)((()=>{!j.length&&E()}),[j,E]),(0,n.jsxs)(g.h,{children:[(0,n.jsx)(a.fM,{modal:o.KO.NFT_LISTING,children:(0,n.jsx)(Ct,{children:$?(0,n.jsx)(bt,{overlayClick:E}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(A,{children:[(0,n.jsx)(y.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,n.jsx)(i.cC,{id:"k6Nkrt"})}),(0,n.jsx)(C.Z,{size:24,cursor:"pointer",onClick:E})]}),(0,n.jsx)(dt,{sectionType:lt.APPROVE,active:P===lt.APPROVE,content:v,toggleSection:I}),(0,n.jsx)(dt,{sectionType:lt.SIGN,active:P===lt.SIGN,content:j,toggleSection:I})]})})}),(0,n.jsx)(w.a,{onClick:E})]})};var vt=s(55338),jt=s(83931);const yt=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Dropdown__DropdownWrapper",componentId:"sc-92c556b4-0"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface1};
  padding: 8px;
  width: ${({$width:e})=>e}px;
  border-radius: 12px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 1px solid ${({theme:e})=>e.surface3};
`,_t=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\Dropdown__DropdownRow",componentId:"sc-92c556b4-1"})`
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Dt=({dropDownOptions:e,width:t})=>{const s=(0,v.useTheme)();return(0,n.jsx)(yt,{$width:t,children:e.map((e=>(0,n.jsxs)(_t,{onClick:e.onClick,children:[(0,n.jsx)(y.Tv.BodyPrimary,{lineHeight:"24px",children:e.displayText}),e.isSelected&&(0,n.jsx)(He.Z,{height:20,width:20,color:s.accent1})]},e.displayText)))})};var Pt=s(95829),It=s(42012),St=s(74090),Nt=s(15655),Ot=s(13678);const Tt=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\PriceTextInput__PriceTextInputWrapper",componentId:"sc-5a5b62bc-0"})`
  gap: 12px;
  position: relative;
`,$t=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\PriceTextInput__InputWrapper",componentId:"sc-5a5b62bc-1"})`
  height: 48px;
  color: ${({theme:e})=>e.neutral3};
  padding: 12px;
  border: 2px solid;
  border-radius: 8px;
  border-color: ${({borderColor:e})=>e};
  margin-right: auto;
  box-sizing: border-box;
`,Rt=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\PriceTextInput__CurrencyWrapper",componentId:"sc-5a5b62bc-2"})`
  color: ${({listPrice:e,theme:t})=>e?t.neutral1:t.neutral2};
`,Et=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\PriceTextInput__GlobalPriceIcon",componentId:"sc-5a5b62bc-3"})`
  display: flex;
  cursor: pointer;
  position: absolute;
  bottom: 32px;
  right: -10px;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 50%;
  height: 28px;
  width: 28px;
  align-items: center;
  justify-content: center;
`,Mt=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\PriceTextInput__WarningRow",componentId:"sc-5a5b62bc-4"})`
  gap: 4px;
`,Gt=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\PriceTextInput__WarningMessage",componentId:"sc-5a5b62bc-5"})`
  top: 52px;
  width: max-content;
  position: absolute;
  right: 0;
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({$color:e})=>e};

  @media screen and (min-width: ${j.j$.md}px) {
    right: unset;
  }
`,Lt=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\PriceTextInput__WarningAction",componentId:"sc-5a5b62bc-6"})`
  cursor: pointer;
  color: ${({theme:e})=>e.accent1};
`,Ht=e=>{let t=(0,n.jsx)(n.Fragment,{});switch(e){case U.BELOW_FLOOR:t=(0,n.jsx)(i.cC,{id:"rKgBmD"});break;case U.ALREADY_LISTED:t=(0,n.jsx)(i.cC,{id:"VnmT/F"})}return t},At=({listPrice:e,setListPrice:t,isGlobalPrice:s,setGlobalOverride:o,globalOverride:r,asset:a})=>{const{formatNumberOrString:c,formatDelta:l}=(0,D.Gb)(),[d,p]=(0,b.useState)(U.NONE),m=(0,R.Pc)((e=>e.removeSellAsset)),u=(0,R.Pc)((e=>e.showResolveIssues)),f=(0,b.useRef)(),h=(0,v.useTheme)(),x=100*(1-(e??0)/(a.floorPrice??0)),g=u&&!e||d===U.ALREADY_LISTED||d===U.BELOW_FLOOR&&x>=20?Ee.O9.red400:d===U.BELOW_FLOOR?h.deprecated_accentWarning:s||e?h.accent1:h.neutral2;return function(e,t,s,n){(0,b.useEffect)((()=>{e(U.NONE);const i=n??0;t.current.value=`${i}`,i<(s?.floorPrice??0)&&i>0?e(U.BELOW_FLOOR):s.floor_sell_order_price&&i>=s.floor_sell_order_price&&s.asset_contract.tokenType!==M.hg.Erc1155&&e(U.ALREADY_LISTED)}),[s.asset_contract.tokenType,s?.floorPrice,s.floor_sell_order_price,t,n,e])}(p,f,a,e),(0,n.jsxs)(Tt,{children:[(0,n.jsxs)($t,{borderColor:g,children:[(0,n.jsx)(St.A,{as:"input",pattern:"[0-9]",borderStyle:"none",className:Nt.d1,color:{placeholder:"neutral2",default:"neutral1"},placeholder:"0",backgroundColor:"none",width:{sm:"54",md:"68"},ref:f,onChange:s=>{if(!e&&s.target.value.includes(".")&&0===parseFloat(s.target.value))return;const n=parseFloat(s.target.value);t(isNaN(n)?void 0:n)}}),(0,n.jsx)(Rt,{listPrice:e,children:"\xa0ETH"}),(s||r)&&(0,n.jsx)(Et,{onClick:()=>o(!r),children:r?(0,n.jsx)($e.We,{}):(0,n.jsx)(Ot.Z,{size:20,color:g})})]}),(0,n.jsx)(Gt,{$color:g,children:d!==U.NONE&&(0,n.jsxs)(Mt,{children:[(0,n.jsx)(k.Z,{height:16,width:16,color:g}),(0,n.jsxs)("span",{children:[d===U.BELOW_FLOOR&&`${l(x)} `,Ht(d),"\xa0",d===U.ALREADY_LISTED&&`${c({input:a?.floor_sell_order_price??0,type:D.sw.NFTToken})} ETH`]}),(0,n.jsx)(Lt,{onClick:()=>{d===U.ALREADY_LISTED&&m(a),p(U.NONE)},children:d===U.BELOW_FLOOR?(0,n.jsx)(i.cC,{id:"1QfxQT"}):(0,n.jsx)(i.cC,{id:"vop1s3"})})]})})]})},Ft=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__FeeWrap",componentId:"sc-7e2c8fd-0"})`
  margin-bottom: 4px;
  justify-content: space-between;
`,Ut=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__RoyaltyContainer",componentId:"sc-7e2c8fd-1"})`
  gap: 12px;
  padding: 4px 0px;
`,Wt=v.css`
  width: 16px;
  height: 16px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,Zt=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__MarketIcon",componentId:"sc-7e2c8fd-2"})`
  border-radius: 4px;
  ${Wt}
`,Bt=v.default.img.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__CollectionIcon",componentId:"sc-7e2c8fd-3"})`
  object-fit: cover;
  border-radius: 50%;
  ${Wt}
`,zt=(0,v.default)(y.Tv.BodySmall).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__FeePercent",componentId:"sc-7e2c8fd-4"})`
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
  white-space: nowrap;
`,Vt=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__MaxFeeContainer",componentId:"sc-7e2c8fd-5"})`
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.surface3};
`,Xt=({selectedMarkets:e,asset:t,fees:s})=>{const{formatNumberOrString:o,formatDelta:r}=(0,D.Gb)(),a=Math.max(...e.map((e=>Pe(e,t)??0)));return(0,n.jsxs)(Ut,{children:[e.map((e=>(0,n.jsxs)(Ft,{children:[(0,n.jsxs)(m.ZP,{children:[(0,n.jsx)(Zt,{children:(0,Le.Dp)(e.name,"16")}),(0,n.jsxs)(y.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:[e.name,"\xa0",(0,n.jsx)(i.cC,{id:"9JsPP+"})]})]}),(0,n.jsx)(zt,{children:r(e.fee)})]},t.collection?.address??""+t.tokenId+e.name+"fee"))),(0,n.jsxs)(Ft,{children:[(0,n.jsxs)(m.ZP,{children:[(0,n.jsx)(Bt,{src:t.collection?.imageUrl}),(0,n.jsx)(y.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:(0,n.jsx)(i.cC,{id:"5KArrt"})})]}),(0,n.jsxs)(zt,{children:[a,"%"]})]}),(0,n.jsxs)(Vt,{children:[(0,n.jsx)(y.Tv.BodySmall,{lineHeight:"16px",children:(0,n.jsx)(i.cC,{id:"b/e652"})}),(0,n.jsxs)(y.Tv.BodySmall,{lineHeight:"16px",color:s?"neutral1":"neutral2",children:[s?o({input:s,type:D.sw.NFTToken}):"-"," ETH"]})]})]})},Yt=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\MarketplaceRow__LastPriceInfo",componentId:"sc-ec6662ed-0"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${j.j$.lg}px) {
    display: flex;
  }
`,Jt=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\MarketplaceRow__FloorPriceInfo",componentId:"sc-ec6662ed-1"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${j.j$.md}px) {
    display: flex;
  }
`,Kt=(0,v.default)(H).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\MarketplaceRow__RemoveMarketplaceWrap",componentId:"sc-ec6662ed-2"})`
  top: 8px;
  left: 16px;
  z-index: 3;
`,qt=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\MarketplaceRow__MarketIconsWrapper",componentId:"sc-ec6662ed-3"})`
  position: relative;
  margin-right: 12px;
  width: 44px;
  justify-content: flex-end;

  @media screen and (max-width: ${j.j$.sm}px) {
    display: none;
  }
`,Qt=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\MarketplaceRow__MarketIconWrapper",componentId:"sc-ec6662ed-4"})`
  position: relative;
  cursor: pointer;
`,es=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\MarketplaceRow__MarketIcon",componentId:"sc-ec6662ed-5"})`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  z-index: ${({index:e})=>2-e};
  margin-left: ${({index:e})=>(0===e?0:-8)+"px"};
  outline: 1px solid ${({theme:e})=>e.surface3};
`,ts=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\MarketplaceRow__ExpandMarketIconWrapper",componentId:"sc-ec6662ed-6"})`
  cursor: pointer;
  margin-left: 4px;
  height: 28px;

  @media screen and (max-width: ${j.j$.sm}px) {
    display: none;
  }
`,ss=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\MarketplaceRow__FeeColumnWrapper",componentId:"sc-ec6662ed-7"})`
  flex: 1;
  align-items: flex-end;
  display: none;

  @media screen and (min-width: ${j.j$.md}px) {
    display: flex;
  }
`,ns=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\MarketplaceRow__FeeWrapper",componentId:"sc-ec6662ed-8"})`
  width: min-content;
  white-space: nowrap;
`,is=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\MarketplaceRow__ReturnColumn",componentId:"sc-ec6662ed-9"})`
  flex: 1.5;
  display: none;

  @media screen and (min-width: ${j.j$.md}px) {
    display: flex;
  }
`,os=({globalPriceMethod:e,globalPrice:t,setGlobalPrice:s,selectedMarkets:i,removeMarket:o,asset:r,expandMarketplaceRows:a,toggleExpandMarketplaceRows:c,rowHovered:l})=>{const{formatNumberOrString:d,formatDelta:p}=(0,D.Gb)(),u=(0,R.Pc)((e=>e.setAssetListPrice)),f=(0,R.Pc)((e=>e.removeAssetMarketplace)),[h,g]=(0,b.useReducer)((e=>!e),!1),[w,C]=(0,b.useReducer)((e=>!e),!1),[k,v]=(0,b.useState)((()=>r.newListings?.find((e=>a?e.marketplace.name===i?.[0].name:!!e.price))?.price)),[j,_]=(0,b.useState)(!1),P=e===F.SAME_PRICE&&!j,I=P?t:k,S=(0,b.useCallback)((e=>{P?s(e):v(e);for(const t of i)u(r,e,t)}),[r,i,u,s,P]),N=(0,b.useMemo)((()=>{let e=0;for(const t of i){const s=Pe(t,r)+t.fee;e=Math.max(s,e)}return e}),[r,i]),O=I&&I*N/100,T=I&&O&&I-O;return function(e,t,s,n,i){(0,b.useEffect)((()=>{let o;e?(n||t(i),o=i):o=n,s(o)}),[e])}(j,v,S,k,t),function(e,t,s,n,i,o,r){(0,b.useEffect)((()=>{r===F.FLOOR_PRICE?(t(e?.floorPrice),s(e.floorPrice)):r===F.LAST_PRICE?(t(e.lastPrice),s(e.lastPrice)):r===F.SAME_PRICE&&(i&&!o?s(i):t(o)),n(!1)}),[r])}(r,v,s,_,k,t,e),(0,b.useEffect)((()=>{P&&S(t)}),[t]),(0,n.jsxs)(m.ZP,{onMouseEnter:C,onMouseLeave:C,children:[(0,n.jsx)(Jt,{children:(0,n.jsx)(y.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:d({input:r.floorPrice,type:D.sw.NFTToken})+r.floorPrice?" ETH":""})}),(0,n.jsx)(Yt,{children:(0,n.jsx)(y.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:r.lastPrice?`${d({input:r.lastPrice,type:D.sw.NFTToken})} ETH`:"-"})}),(0,n.jsxs)(m.ZP,{flex:"2",children:[(a||i.length>1)&&(0,n.jsx)(qt,{onMouseEnter:g,onMouseLeave:g,children:i.map(((e,t)=>(0,n.jsxs)(Qt,{onClick:t=>{t.stopPropagation(),f(r,e),o&&o()},children:[(0,n.jsx)(es,{index:t,children:(0,Le.Dp)(e.name,"20")}),(0,n.jsx)(Kt,{hovered:h&&(a??!1),children:(0,n.jsx)("img",{width:"20px",src:"/nft/svgs/minusCircle.svg",alt:"Remove item"})})]},e.name+r.collection?.address+r.tokenId)))}),(0,n.jsx)(At,{listPrice:I,setListPrice:S,isGlobalPrice:P,setGlobalOverride:_,globalOverride:j,asset:r}),l&&(a&&w||i.length>1)&&(0,n.jsx)(ts,{onClick:c,children:a?(0,n.jsx)($e.fJ,{}):(0,n.jsx)($e.nG,{})})]}),(0,n.jsx)(ss,{children:(0,n.jsx)(Te.ud,{text:(0,n.jsx)(Xt,{selectedMarkets:i,asset:r,fees:O}),placement:"left",children:(0,n.jsx)(ns,{children:(0,n.jsx)(y.Tv.BodyPrimary,{color:"neutral2",children:N>0?`${p(N)}${i.length>1?x.ag._({id:"ydV21Q"}):""}`:"--%"})})})}),(0,n.jsx)(is,{children:(0,n.jsx)(rs,{ethPrice:T})})]})},rs=({ethPrice:e=0})=>{const{formatNumberOrString:t}=(0,D.Gb)(),s=(0,It.$)();return(0,n.jsx)(m.ZP,{width:"100%",justify:"flex-end",children:(0,n.jsx)(y.Tv.BodyPrimary,{lineHeight:"24px",color:e?"neutral1":"neutral2",textAlign:"right",children:0!==e?(0,n.jsxs)(p.ZP,{children:[(0,n.jsxs)("span",{children:[t({input:e,type:D.sw.NFTToken})," ETH"]}),(0,n.jsx)(y.Tv.BodyPrimary,{color:"neutral2",children:t({input:e*s,type:D.sw.FiatNFTToken})})]}):"- ETH"})})},as=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListRow__NFTListRowWrapper",componentId:"sc-c3541116-0"})`
  padding: 24px 0px;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,cs=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListRow__RemoveIconContainer",componentId:"sc-c3541116-1"})`
  width: ${60}px;
  height: ${60}px;
  padding-left: 12px;
  align-self: flex-start;
  align-items: center;
  display: flex;

  @media screen and (max-width: ${j.j$.sm}px) {
    display: none;
  }

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,ls=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListRow__NFTInfoWrapper",componentId:"sc-c3541116-2"})`
  align-items: center;
  min-width: 0px;
  flex: 2;
  margin-bottom: auto;

  @media screen and (min-width: ${j.j$.md}px) {
    flex: 1.5;
  }
`,ds=v.default.img.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListRow__NFTImage",componentId:"sc-c3541116-3"})`
  width: ${60}px;
  height: ${60}px;
  border-radius: 8px;
  margin-right: 8px;
`,ps=v.css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ms=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListRow__TokenInfoWrapper",componentId:"sc-c3541116-4"})`
  margin-right: 8px;
  min-width: 0px;
`,us=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListRow__TokenName",componentId:"sc-c3541116-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  ${ps}
`,fs=(0,v.default)(y.Tv.BodySmall).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListRow__CollectionName",componentId:"sc-c3541116-6"})`
  color: ${({theme:e})=>e.neutral2};
  line-height: 20px;
  ${ps};
`,hs=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListRow__MarketPlaceRowWrapper",componentId:"sc-c3541116-7"})`
  gap: 24px;
  flex: 1.5;
  margin-right: 12px;
  padding: 6px 0px;

  @media screen and (min-width: ${j.j$.md}px) {
    flex: 2;
  }

  @media screen and (min-width: ${j.j$.md}px) {
    flex: 3;
  }
`,xs=({asset:e,globalPriceMethod:t,globalPrice:s,setGlobalPrice:i,selectedMarkets:o})=>{const[r,a]=(0,b.useReducer)((e=>!e),!1),c=(0,R.Pc)((e=>e.removeSellAsset)),[l,d]=(0,b.useState)([]),[p,m]=(0,b.useReducer)((e=>!e),!1),u=(0,v.useTheme)();return(0,b.useEffect)((()=>{d(JSON.parse(JSON.stringify(o)))}),[o]),(0,n.jsxs)(as,{onMouseEnter:()=>{!p&&m()},onMouseLeave:()=>{p&&m()},children:[(0,n.jsx)(cs,{children:p&&(0,n.jsx)(Pt.Z,{size:20,color:u.neutral2,cursor:"pointer",onClick:()=>{c(e)}})}),(0,n.jsxs)(ls,{children:[(0,n.jsx)(ds,{alt:e.name,src:e.imageUrl||"/nft/svgs/image-placeholder.svg"}),(0,n.jsxs)(ms,{children:[(0,n.jsx)(us,{children:e.name?e.name:`#${e.tokenId}`}),(0,n.jsxs)(fs,{children:[e.collection?.name,e.collectionIsVerified&&(0,n.jsx)($e.SA,{style:{marginBottom:"-5px"}})]})]})]}),(0,n.jsx)(hs,{children:r&&l.length>1?l.map((o=>(0,n.jsx)(os,{globalPriceMethod:t,globalPrice:s,setGlobalPrice:i,selectedMarkets:[o],removeMarket:()=>d(l.filter((e=>e.name!==o.name))),asset:e,expandMarketplaceRows:r,rowHovered:p,toggleExpandMarketplaceRows:a},e.name+o.name))):(0,n.jsx)(os,{globalPriceMethod:t,globalPrice:s,setGlobalPrice:i,selectedMarkets:l,asset:e,rowHovered:p,toggleExpandMarketplaceRows:a})})]})},gs=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListingsGrid__TableHeader",componentId:"sc-6f7bb7c1-0"})`
  display: flex;
  position: sticky;
  align-items: center;
  top: 72px;
  padding-top: 24px;
  padding-bottom: 24px;
  z-index: 3;
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  border-radius: 12px;

  @media screen and (min-width: ${j.j$.sm}px) {
    padding-left: 48px;
  }
`,ws=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListingsGrid__NFTHeader",componentId:"sc-6f7bb7c1-1"})`
  flex: 2;

  @media screen and (min-width: ${j.j$.md}px) {
    flex: 1.5;
  }
`,bs=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListingsGrid__PriceHeaders",componentId:"sc-6f7bb7c1-2"})`
  flex: 1.5;
  margin-right: 12px;

  @media screen and (min-width: ${j.j$.md}px) {
    flex: 3;
  }
`,Cs=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListingsGrid__LastPriceHeader",componentId:"sc-6f7bb7c1-3"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${j.j$.lg}px) {
    display: flex;
  }
`,ks=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListingsGrid__FloorPriceHeader",componentId:"sc-6f7bb7c1-4"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${j.j$.md}px) {
    display: flex;
  }
`,vs=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownAndHeaderWrapper",componentId:"sc-6f7bb7c1-5"})`
  flex: 2;
  gap: 4px;
`,js=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownPromptContainer",componentId:"sc-6f7bb7c1-6"})`
  position: relative;
  @media screen and (max-width: ${j.j$.sm}px) {
    display: none;
  }
`,ys=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownPrompt",componentId:"sc-6f7bb7c1-7"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  padding: 2px 6px;
  width: min-content;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,_s=(0,v.default)(jt.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownChevron",componentId:"sc-6f7bb7c1-8"})`
  height: 16px;
  width: 16px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,Ds=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownContainer",componentId:"sc-6f7bb7c1-9"})`
  position: absolute;
  top: 36px;
  right: 0px;
`,Ps=v.css`
  display: none;
  justify-content: flex-end;
  @media screen and (min-width: ${j.j$.md}px) {
    display: flex;
  }
`,Is=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListingsGrid__FeeHeader",componentId:"sc-6f7bb7c1-10"})`
  flex: 1;
  ${Ps}
`,Ss=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListingsGrid__UserReceivesHeader",componentId:"sc-6f7bb7c1-11"})`
  flex: 1.5;
  ${Ps}
`,Ns=v.default.hr.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\NFTListingsGrid__RowDivider",componentId:"sc-6f7bb7c1-12"})`
  height: 0px;
  width: 100%;
  border-radius: 20px;
  border-width: 0.5px;
  border-style: solid;
  margin: 0;
  border-color: ${({theme:e})=>e.surface3};
`,Os=({selectedMarkets:e})=>{const t=(0,R.Pc)((e=>e.sellAssets)),[s,o]=(0,b.useState)(F.CUSTOM),[r,a]=(0,b.useState)(),[c,l]=(0,b.useReducer)((e=>!e),!1),d=(0,b.useRef)(null);(0,vt.t)(d,c?l:void 0);const m=(0,b.useMemo)((()=>[{displayText:"Custom",isSelected:s===F.CUSTOM,onClick:()=>{o(F.CUSTOM),l()}},{displayText:"Floor price",isSelected:s===F.FLOOR_PRICE,onClick:()=>{o(F.FLOOR_PRICE),l()}},{displayText:"Last price",isSelected:s===F.LAST_PRICE,onClick:()=>{o(F.LAST_PRICE),l()}},{displayText:"Same price",isSelected:s===F.SAME_PRICE,onClick:()=>{o(F.SAME_PRICE),l()}}]),[s]);let u;switch(s){case F.CUSTOM:u=(0,n.jsx)(i.cC,{id:"8Tg/JR"});break;case F.FLOOR_PRICE:u=(0,n.jsx)(i.cC,{id:"IX1M/E"});break;case F.LAST_PRICE:u=(0,n.jsx)(i.cC,{id:"HoGOsT"});break;case F.SAME_PRICE:u=(0,n.jsx)(i.cC,{id:"uK2Qlr"})}return(0,n.jsxs)(p.ZP,{children:[(0,n.jsxs)(gs,{children:[(0,n.jsx)(ws,{children:(0,n.jsx)(i.cC,{id:"zJlXbX"})}),(0,n.jsxs)(bs,{children:[(0,n.jsx)(ks,{children:(0,n.jsx)(i.cC,{id:"WEXsZg"})}),(0,n.jsx)(Cs,{children:(0,n.jsx)(i.cC,{id:"RtKKbA"})}),(0,n.jsxs)(vs,{ref:d,children:[(0,n.jsx)(i.cC,{id:"a7u1N9"}),(0,n.jsxs)(js,{children:[(0,n.jsxs)(ys,{onClick:l,children:[u," ",(0,n.jsx)(_s,{isOpen:c})]}),c&&(0,n.jsx)(Ds,{children:(0,n.jsx)(Dt,{dropDownOptions:m,width:200})})]})]}),(0,n.jsx)(Is,{children:(0,n.jsx)(i.cC,{id:"/mfICu"})}),(0,n.jsx)(Ss,{children:(0,n.jsx)(i.cC,{id:"88cUW+"})})]})]}),t.map((i=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(xs,{asset:i,globalPriceMethod:s,globalPrice:r,setGlobalPrice:a,selectedMarkets:e}),t.indexOf(i)<t.length-1&&(0,n.jsx)(Ns,{})]})))]})};var Ts=s(35458),$s=s(2994),Rs=s(71814),Es=s(17669);const Ms=(0,v.default)($s.X2).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__MarketplaceRowWrapper",componentId:"sc-7944421b-0"})`
  gap: 6px;
  height: 44px;
  width: 100%;
  cursor: pointer;
  justify-content: space-between;
  padding: 0px 16px;
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
  border-radius: 12px;
`,Gs=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__FeeText",componentId:"sc-7944421b-1"})`
  color: ${({theme:e})=>e.neutral2};
`,Ls=(0,v.default)($s.X2).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__HeaderButtonWrap",componentId:"sc-7944421b-2"})`
  padding: 12px;
  border-radius: 12px;
  width: 180px;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface3};
  cursor: pointer;
  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  @media screen and (min-width: ${Ts.T1}) {
    width: 220px;
  }
`,Hs=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__HeaderButtonContentWrapper",componentId:"sc-7944421b-3"})`
  display: flex;
`,As=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__MarketIcon",componentId:"sc-7944421b-4"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 4px;
  z-index: ${({index:e,totalSelected:t})=>t-e};
  margin-left: ${({index:e})=>(0===e?0:-18)+"px"};
`,Fs=(0,v.default)($e.g8).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__Chevron",componentId:"sc-7944421b-5"})`
  height: 20px;
  width: 20px;
  fill: ${({theme:e})=>e.neutral1};
  transition: ${({theme:{transition:{duration:e}}})=>`${e.fast} transform`};
  transform: ${({isOpen:e})=>`rotate(${e?0:180}deg)`};
`,Us=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__ModalWrapper",componentId:"sc-7944421b-6"})`
  display: flex;
  flex-direction: column;
  position: relative;
`,Ws=(0,v.default)($s.sg).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__DropdownWrapper",componentId:"sc-7944421b-7"})`
  padding: 16px 0px;
  background-color: ${({theme:e})=>e.surface1};
  display: ${({isOpen:e})=>e?"flex":"none"};
  position: absolute;
  top: 52px;
  width: 100%;
  border-radius: 12px;
  gap: 12px;
  z-index: ${_.k.modalBackdrop};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
`,Zs=({setSelectedMarkets:e,selectedMarkets:t})=>{const[s,i]=(0,b.useReducer)((e=>!e),!1),o=(0,b.useMemo)((()=>1===t.length?t[0].name:"Multiple"),[t]),r=(0,b.useRef)(null);return(0,vt.t)(r,(()=>s&&i())),(0,n.jsxs)(Us,{ref:r,children:[(0,n.jsxs)(Ls,{className:Nt.km,onClick:i,children:[(0,n.jsxs)(Hs,{children:[t.map(((e,s)=>(0,n.jsx)(As,{totalSelected:t.length,index:s,children:(0,Le.Dp)(e.name,"20")},s))),o]}),(0,n.jsx)(Fs,{isOpen:s,secondaryColor:Es.Z4.colors.neutral1})]}),(0,n.jsx)(Ws,{isOpen:s,children:be.map((s=>(({market:e,setSelectedMarkets:t,selectedMarkets:s})=>{const i=s.includes(e),[o,r]=(0,b.useReducer)((e=>!e),!1),a=()=>{1===s.length&&i||t(i?s.filter((t=>t!==e)):[...s,e])};return(0,n.jsxs)(Ms,{onMouseEnter:r,onMouseLeave:r,onClick:a,children:[(0,n.jsxs)($s.X2,{gap:"12",onClick:a,children:[(0,Le.Dp)(e.name,"24"),(0,n.jsxs)($s.sg,{children:[(0,n.jsx)(y.Tv.BodyPrimary,{children:e.name}),(0,n.jsxs)(Gs,{className:Nt.VJ,children:[e.fee,"% fee"]})]})]}),(0,n.jsx)(Rs.X,{hovered:o,checked:i,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:(0,n.jsx)("span",{})})]})})({market:s,setSelectedMarkets:e,selectedMarkets:t})))})]})},Bs=(0,v.default)($s.sg).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\SetDurationModal__ModalWrapper",componentId:"sc-391461b0-0"})`
  gap: 4px;
  position: relative;
`,zs=(0,v.default)($s.X2).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\SetDurationModal__InputWrapper",componentId:"sc-391461b0-1"})`
  padding: 6px 6px 6px 12px;
  border: 1px solid;
  position: relative;
  height: 44px;
  border-radius: 8px;
  border-color: ${({isInvalid:e,theme:t})=>e?t.critical:t.surface3};
  width: 160px;
  justify-content: space-between;
`,Vs=(0,v.default)($s.X2).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\SetDurationModal__DropdownPrompt",componentId:"sc-391461b0-2"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 8px;
  padding: 6px 4px 6px 8px;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Xs=(0,v.default)(jt.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\SetDurationModal__DropdownChevron",componentId:"sc-391461b0-3"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,Ys=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\SetDurationModal__DropdownContainer",componentId:"sc-391461b0-4"})`
  position: absolute;
  top: 48px;
  right: 0px;
  z-index: ${_.k.dropdown};
`,Js=(0,v.default)($s.X2).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\SetDurationModal__ErrorMessage",componentId:"sc-391461b0-5"})`
  color: ${({theme:e})=>e.critical};
  gap: 4px;
  position: absolute;
  top: 44px;
  white-space: nowrap;
`,Ks=(0,v.default)(k.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\SetDurationModal__WarningIcon",componentId:"sc-391461b0-6"})`
  width: 16px;
  color: ${({theme:e})=>e.critical};
`;var qs,Qs;!function(e){e.hour="hour",e.day="day",e.week="week",e.month="month"}(qs||(qs={})),function(e){e[e.valid=0]="valid",e[e.empty=1]="empty",e[e.overMax=2]="overMax"}(Qs||(Qs={}));const en=()=>{const[e,t]=(0,b.useState)(qs.day),[s,o]=(0,b.useState)("7"),[r,a]=(0,b.useState)(Qs.valid),c=(0,R.Pc)((e=>e.setGlobalExpiration)),[l,d]=(0,b.useReducer)((e=>!e),!1),p=(0,b.useRef)(null);(0,vt.t)(p,l?d:void 0);const m=(0,b.useMemo)((()=>[{displayText:"hours",isSelected:e===qs.hour,onClick:()=>{t(qs.hour),d()}},{displayText:"days",isSelected:e===qs.day,onClick:()=>{t(qs.day),d()}},{displayText:"weeks",isSelected:e===qs.week,onClick:()=>{t(qs.week),d()}},{displayText:"months",isSelected:e===qs.month,onClick:()=>{t(qs.month),d()}}]),[e]);let u;switch(e){case qs.hour:u=(0,n.jsx)(i.cC,{id:"JC1A6G",values:{amount:s}});break;case qs.day:u=(0,n.jsx)(i.cC,{id:"/TUNHz",values:{amount:s}});break;case qs.week:u=(0,n.jsx)(i.cC,{id:"v3mlu/",values:{amount:s}});break;case qs.month:u=(0,n.jsx)(i.cC,{id:"zo+8I3",values:{amount:s}})}return(0,b.useEffect)((()=>{const t=tn(parseFloat(s),e);1e3*t-Date.now()<L()("60s")||isNaN(t)?a(Qs.empty):1e3*t-Date.now()>L()("180d")?a(Qs.overMax):a(Qs.valid),c(t)}),[s,e,c]),(0,n.jsxs)(Bs,{ref:p,children:[(0,n.jsxs)(zs,{isInvalid:r!==Qs.valid,children:[(0,n.jsx)(St.A,{as:"input",type:"number",pattern:"[0-9]",borderStyle:"none",className:Nt.d1,color:{placeholder:"neutral2",default:"neutral1"},value:s,width:"40",marginRight:"4",backgroundColor:"none",onChange:e=>{o(e.target.value.length?e.target.value:"")},flexShrink:"0"}),(0,n.jsxs)(Vs,{onClick:d,children:[u," ",(0,n.jsx)(Xs,{isOpen:l})]}),l&&(0,n.jsx)(Ys,{children:(0,n.jsx)(Dt,{dropDownOptions:m,width:125})})]}),r!==Qs.valid&&(0,n.jsxs)(Js,{className:Nt.VJ,children:[" ",(0,n.jsx)(Ks,{})," ",r===Qs.overMax?"Maximum 6 months":"Set duration"]})]})},tn=(e,t)=>Math.round((Date.now()+L()("1h")*(()=>{switch(t){case qs.hour:return 1;case qs.day:return 24;case qs.week:return 168;default:return 720}})()*e)/1e3),sn=(0,v.default)(p.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\ListPage__ListingHeader",componentId:"sc-c3011cdc-0"})`
  gap: 16px;
  margin-top: 36px;

  @media screen and (min-width: ${j.j$.xs}px) {
    gap: 4px;
  }
`,nn=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\ListPage__ArrowContainer",componentId:"sc-c3011cdc-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  @media screen and (min-width: ${j.j$.sm}px) {
    height: 40px;
    width: 40px;
  }
`,on=(0,v.default)(Ne.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\ListPage__BackArrow",componentId:"sc-c3011cdc-2"})`
  height: 16px;
  width: 16px;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral2};

  @media screen and (min-width: ${j.j$.sm}px) {
    height: 20px;
    width: 20px;
  }
`,rn=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\ListPage__TitleWrapper",componentId:"sc-c3011cdc-3"})`
  gap: 4px;
  margin-bottom: 12px;
  white-space: nowrap;
  width: min-content;
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;

  @media screen and (min-width: ${j.j$.xs}px) {
    margin-bottom: 0px;
    font-weight: 535;
    font-size: 28px;
    line-height: 36px;
  }
`,an=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\ListPage__ButtonsWrapper",componentId:"sc-c3011cdc-4"})`
  gap: 12px;
  width: min-content;
`,cn=v.default.section.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\ListPage__MarketWrap",componentId:"sc-c3011cdc-5"})`
  gap: 48px;
  margin: 0px auto;
  width: 100%;
  max-width: 1200px;
`,ln=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\ListPage__ListingHeaderRow",componentId:"sc-c3011cdc-6"})`
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${j.j$.sm}px) {
    padding-left: 40px;
  }
`,dn=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\ListPage__GridWrapper",componentId:"sc-c3011cdc-7"})`
  margin-top: 24px;
  margin-bottom: 48px;
`,pn=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\ListPage__FloatingConfirmationBar",componentId:"sc-c3011cdc-8"})`
  padding: 12px 12px 12px 32px;
  border: 1px solid;
  border-color: ${({theme:e,issues:t})=>t?e.surface3:e.accent1};
  border-radius: 20px;
  white-space: nowrap;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface1};
  position: fixed;
  bottom: 32px;
  width: calc(100vw - ${80}px);
  left: 50%;
  transform: translateX(-50%);
  max-width: ${({theme:e})=>e.maxWidth};
  z-index: ${_.k.under_dropdown};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};

  @media screen and (max-width: ${j.j$.lg}px) {
    bottom: 68px;
  }

  @media screen and (max-width: ${j.j$.sm}px) {
    width: calc(100% - ${32}px);
    padding: 8px 8px 8px 16px;
  }
`,mn=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\ListPage__Overlay",componentId:"sc-c3011cdc-9"})`
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 158px;
  width: 100vw;
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${e.surface2} 100%)`};
`,un=(0,v.default)(y.Tv.SubHeader).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\ListPage__UsdValue",componentId:"sc-c3011cdc-10"})`
  line-height: 24px;
  color: ${({theme:e})=>e.neutral2};
  display: none;

  @media screen and (min-width: ${j.j$.lg}px) {
    display: flex;
  }
`,fn=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\ListPage__ProceedsAndButtonWrapper",componentId:"sc-c3011cdc-11"})`
  width: min-content;
  gap: 40px;

  @media screen and (max-width: ${j.j$.sm}px) {
    gap: 20px;
  }
`,hn=(0,v.default)(m.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\ListPage__ProceedsWrapper",componentId:"sc-c3011cdc-12"})`
  width: min-content;
  gap: 16px;
`,xn=v.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\list\\ListPage__EthValueWrapper",componentId:"sc-c3011cdc-13"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme:e,totalEthListingValue:t})=>t?e.neutral1:e.neutral2};

  @media screen and (max-width: ${j.j$.sm}px) {
    font-size: 16px;
    line-height: 24px;
  }
`,gn=()=>{const{formatNumberOrString:e}=(0,D.Gb)(),{setProfilePageState:t}=(0,R.aO)(),{provider:s,chainId:c}=(0,r.useWeb3React)(),l=(0,R.dD)(),d=(0,a.oO)({modal:o.KO.NFT_LISTING}),{formatCurrencyAmount:x}=(0,D.Gb)(),{setGlobalMarketplaces:g,sellAssets:w,issues:C}=(0,R.Pc)((({setGlobalMarketplaces:e,sellAssets:t,issues:s})=>({setGlobalMarketplaces:e,sellAssets:t,issues:s}))),{listings:k,collectionsRequiringApproval:v,setLooksRareNonce:j,setCollectionStatusAndCallback:_}=(0,R.zM)((({listings:e,collectionsRequiringApproval:t,setLooksRareNonce:s,setCollectionStatusAndCallback:n})=>({listings:e,collectionsRequiringApproval:t,setLooksRareNonce:s,setCollectionStatusAndCallback:n}))),P=(0,b.useMemo)((()=>_e(w)),[w]),I=(0,f.Z)(c),S=(0,h.Z)(P.toString(),I),N=(0,u.sq)(S),O=x({amount:N,type:D.sw.FiatTokenPrice}),[T,$]=(0,b.useReducer)((e=>!e),!1),[E,M]=(0,b.useState)([be[0]]),G=s?.getSigner();De(),(0,b.useEffect)((()=>{g(E)}),[E,g]);const L={collection_addresses:w.map((e=>e.asset_contract.address)),token_ids:w.map((e=>e.tokenId)),marketplaces:Array.from(new Set(k.map((e=>e.marketplace.name)))),list_quantity:k.length,usd_value:O,...d},H=async()=>{if(!G)return;(0,a._P)(o.Yz.NFT_SELL_START_LISTING,{...L});const e=await G.getAddress(),t=await(async e=>{const t=await fetch(`https://api.looksrare.org/api/v1/orders/nonce?address=${e}`);if(200!==t.status)return void console.log(`LooksRare nonce API errored with status ${t.statusText}`);const s=await t.json();return parseFloat(s.data)})(e);j(t??0);for(const n of v)(s=n.status)!==K.Sb.PAUSED&&s!==K.Sb.APPROVED&&(l?await je(n,G,_):je(n,G,_));var s},A=l?(0,n.jsx)(y.Tv.SubHeader,{children:(0,n.jsx)(i.cC,{id:"lDgVWA"})}):(0,n.jsx)(y.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,n.jsx)(i.cC,{id:"88cUW+"})});return(0,n.jsxs)(p.ZP,{children:[(0,n.jsxs)(cn,{children:[(0,n.jsxs)(sn,{children:[(0,n.jsxs)(m.ZP,{children:[(0,n.jsx)(nn,{children:(0,n.jsx)(on,{onClick:()=>t(K.HA.VIEWING)})}),(0,n.jsx)(y.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:(0,n.jsx)(i.cC,{id:"/7Thkl"})})]}),(0,n.jsxs)(ln,{children:[(0,n.jsx)(rn,{children:(0,n.jsx)(i.cC,{id:"EjWd3p"})}),(0,n.jsxs)(an,{children:[(0,n.jsx)(Zs,{setSelectedMarkets:M,selectedMarkets:E}),(0,n.jsx)(en,{})]})]})]}),(0,n.jsx)(dn,{children:(0,n.jsx)(Os,{selectedMarkets:E})})]}),(0,n.jsxs)(pn,{issues:!!C,children:[A,(0,n.jsxs)(fn,{children:[(0,n.jsxs)(hn,{children:[(0,n.jsxs)(xn,{totalEthListingValue:!!P,children:[P>0?e({input:P,type:D.sw.NFTToken}):"-"," ","ETH"]}),!!N&&(0,n.jsx)(un,{children:O})]}),(0,n.jsx)(Se,{onClick:()=>{$(),H()}})]})]}),(0,n.jsx)(mn,{}),T&&(0,n.jsx)(kt,{overlayClick:$})]})};var wn=s(48571),bn=s(98424),Cn=s(35837),kn=s(42223),vn=s(71170),jn=s(21849),yn=s(80343),_n=s(3923),Dn=s(68830),Pn=s(94231),In=s(90739),Sn=s(81983),Nn=s(42826);s(56605),s(41966);const On=(0,v.default)($s.sg).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\view\\FilterSidebar__ItemsContainer",componentId:"sc-69a84b79-0"})`
  ${Oe.Z}
  height: 100vh;
`,Tn=(0,v.default)(yn.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\view\\FilterSidebar__LongLoadingBubble",componentId:"sc-69a84b79-1"})`
  min-height: 15px;
  width: 75%;
`,$n=(0,v.default)(yn.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\view\\FilterSidebar__SmallLoadingBubble",componentId:"sc-69a84b79-2"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`,Rn=(0,v.default)($s.X2).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\view\\FilterSidebar__MobileMenuHeader",componentId:"sc-69a84b79-3"})`
  justify-content: space-between;
  padding-bottom: 8px;
`,En=({style:e})=>(0,n.jsxs)($s.X2,{display:"flex",justifyContent:"space-between",style:e,paddingLeft:"12",paddingRight:"16",children:[(0,n.jsxs)($s.X2,{display:"flex",flex:"1",children:[(0,n.jsx)($n,{}),(0,n.jsx)(Tn,{})]}),(0,n.jsx)(bn.n,{as:"span",borderColor:"surface3",className:_n.MJ,"aria-hidden":"true"})]}),Mn=({fetchNextPage:e,hasNextPage:t,isFetchingNextPage:s,walletCollections:i})=>{const o=(0,R.Pr)((e=>e.collectionFilters)),r=(0,R.Pr)((e=>e.setCollectionFilters)),[a,c]=(0,R.wx)(),l=(0,R.dD)(),{sidebarX:d}=(0,Dn.useSpring)({sidebarX:a?0:-360,config:{duration:Me.Kd.medium,easing:Dn.easings.easeOutSine}}),p=(0,b.useMemo)((()=>i&&i?.length>=li||s),[i,s]);return(0,n.jsx)(bn.x,{position:{sm:"fixed",md:"sticky"},top:{sm:"0",md:"72"},left:{sm:"0",md:"unset"},width:{sm:"full",md:"332",lg:"332"},height:{sm:"full",md:"auto"},zIndex:{sm:"modal",md:"auto"},display:a?"flex":"none",style:{transform:l?void 0:d.to((e=>`translateX(${e}px)`))},background:"surface2",children:(0,n.jsxs)(bn.n,{paddingTop:{sm:"24",md:"0"},paddingLeft:{sm:"16",md:"0"},paddingRight:"16",width:{sm:"full",md:"332",lg:"332"},children:[l&&(0,n.jsxs)(Rn,{children:[(0,n.jsx)(y.Tv.HeadlineSmall,{children:"Filter"}),(0,n.jsx)($e.DX,{height:28,width:28,fill:Es.Z4.colors.neutral1,onClick:()=>c(!1)})]}),(0,n.jsx)(Gn,{collections:i,collectionFilters:o,setCollectionFilters:r,fetchNextPage:e,hasNextPage:t,isFetchingNextPage:s,hideSearch:p})]})})},Gn=({collections:e,collectionFilters:t,setCollectionFilters:s,fetchNextPage:i,hasNextPage:o,isFetchingNextPage:r,hideSearch:a})=>{const[c,l]=(0,b.useState)(""),[d,p]=(0,b.useState)(e);(0,b.useEffect)((()=>{if(c){const t=e.filter((e=>e.name?.toLowerCase().includes(c.toLowerCase())));p(t)}else p(e)}),[c,e]);const m=(0,b.useCallback)(((e,t)=>{if(!t)return e;return`${t[e].address}_${e}`}),[]),u=o?d.length+1:d.length,f=r?Nn.Z:i,h=(0,b.useCallback)((e=>!o||e<d.length),[d.length,o]),x=(0,b.useCallback)((({index:e,style:i})=>!(!!d&&d[e])||r?(0,n.jsx)(En,{style:i},e):(0,n.jsx)(Hn,{style:i,collection:d[e],collectionFilters:t,setCollectionFilters:s},m(e,d))),[d,r,m,t,s]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(bn.n,{className:Nt.v4,marginTop:"12",marginBottom:"16",width:"276",children:"Collections"}),(0,n.jsx)(bn.n,{paddingBottom:"12",borderRadius:"8",children:(0,n.jsxs)($s.sg,{as:"ul",paddingLeft:"0",gap:"10",style:{maxHeight:"80vh"},children:[!a&&(0,n.jsx)(Ln,{collectionSearchText:c,setCollectionSearchText:l}),(0,n.jsx)(On,{children:(0,n.jsx)(Pn.Z,{disableWidth:!0,children:({height:e})=>(0,n.jsx)(Sn.Z,{isItemLoaded:h,itemCount:u,loadMoreItems:f,children:({onItemsRendered:t,ref:s})=>(0,n.jsx)(In.t7,{height:e,width:"100%",itemCount:u,itemSize:44,onItemsRendered:t,itemKey:m,ref:s,children:x})})})})]})})]})},Ln=({collectionSearchText:e,setCollectionSearchText:t})=>(0,n.jsx)(St.I,{placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full",value:e,onChange:e=>t(e.currentTarget.value)}),Hn=({collection:e,collectionFilters:t,setCollectionFilters:s,style:i})=>{const[o,r]=(0,b.useState)(!1),[a,c]=(0,b.useReducer)((e=>!e),!1),l=(0,b.useCallback)((e=>t.some((t=>t===e))),[t]),d=()=>{r(!o),s(e.address)};return(0,n.jsxs)($s.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:"_1bw5dlr3 rgw6ezd3 rgw6ezb9 rgw6ezdr",justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...i},maxHeight:"44",as:"li",onMouseEnter:c,onMouseLeave:c,onClick:d,children:[(0,n.jsxs)($s.X2,{children:[(0,n.jsx)(bn.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,n.jsxs)(bn.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",paddingLeft:"12",paddingRight:"14",style:{minHeight:15,maxWidth:"180px"},children:[e.name," "]})]}),(0,n.jsx)(Rs.X,{checked:l(e.address),hovered:a,onChange:d,children:(0,n.jsx)(bn.n,{as:"span",color:"neutral3",marginRight:"12",marginLeft:"auto",children:e.count})})]})};var An=s(18683),Fn=s(46642),Un=s(12694),Wn=s(12835),Zn=s(70453);const Bn=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__SkeletonBodyWrapper",componentId:"sc-20d199ad-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
`,zn=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__SkeletonRowWrapper",componentId:"sc-20d199ad-1"})`
  display: flex;
  flex-direct: row;
  width: 100%;
`,Vn=(0,v.default)(zn).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__AccountDetailsSkeletonWrapper",componentId:"sc-20d199ad-2"})`
  gap: 12px;
  margin-bottom: 30px;
`,Xn=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__ProfileDetailsSkeleton",componentId:"sc-20d199ad-3"})`
  width: 180px;
  height: 36px;
  border-radius: 12px;
`,Yn=(0,v.default)(zn).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__FilterBarSkeletonWrapper",componentId:"sc-20d199ad-4"})`
  justify-content: space-between;
`,Jn=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__FilterButtonSkeleton",componentId:"sc-20d199ad-5"})`
  width: 92px;
  height: 44px;
  border-radius: 12px;
`,Kn=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__SellButtonSkeleton",componentId:"sc-20d199ad-6"})`
  width: 80px;
  height: 44px;
  border-radius: 12px;
`,qn=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__ProfileAssetCardSkeleton",componentId:"sc-20d199ad-7"})`
  width: 100%;
  height: 330px;
  border-radius: 20px;
`,Qn=()=>(0,n.jsx)(bn.n,{width:"full",className:kn.P,children:Array.from(Array(ci),((e,t)=>(0,n.jsx)(qn,{className:Zn.S},t)))}),ei=()=>(0,n.jsxs)(Bn,{children:[(0,n.jsx)(Vn,{children:(0,n.jsx)(Xn,{className:Zn.S})}),(0,n.jsxs)(Yn,{children:[(0,n.jsx)(Jn,{className:Zn.S}),(0,n.jsx)(Kn,{className:Zn.S})]}),(0,n.jsx)(Qn,{})]});var ti=s(14327),si=s(68431),ni=s(80657);const ii=({asset:e,mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:s,hideDetails:r})=>{const c=(0,R.Pc)((e=>e.sellAssets)),l=(0,R.Pc)((e=>e.selectSellAsset)),d=(0,R.Pc)((e=>e.removeSellAsset)),p=(0,R.cP)((e=>e.bagExpanded)),m=(0,R.cP)((e=>e.toggleBag)),u=(0,R.dD)(),f=(0,ni.s0)(),h=(0,b.useMemo)((()=>c.some((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))),[e,c]),x=(0,a.oO)(),g=t=>{t?d(e):(l(e),(0,a._P)(o.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...x})),p||c.find((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))||u||m()},w=e.susFlag,C=(0,b.useMemo)((()=>({primaryInfo:!!e.asset_contract.name&&e.asset_contract.name,primaryInfoIcon:e.collectionIsVerified&&(0,n.jsx)($e.SA,{height:"16px",width:"16px"}),secondaryInfo:e.name||e.tokenId?e.name??`#${e.tokenId}`:null,selectedInfo:(0,n.jsx)(i.cC,{id:"77UrnP"}),notSelectedInfo:(0,n.jsx)(i.cC,{id:"9AgVn/"}),disabledInfo:(0,n.jsx)(i.cC,{id:"KWvmby"})})),[e.asset_contract.name,e.collectionIsVerified,e.name,e.tokenId]);return(0,n.jsx)(ti.y,{asset:e,display:C,isSelected:h,isDisabled:Boolean(w),selectAsset:()=>g(!1),unselectAsset:()=>g(!0),onButtonClick:()=>g(h),onCardClick:()=>{r||f((0,si.VL)(e))},mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:s,testId:"nft-profile-asset"})},oi=(0,v.default)($s.sg).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\view\\ProfilePage__ProfilePageColumn",componentId:"sc-37f4dde3-0"})`
  ${An.bc}
`,ri=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\view\\ProfilePage__ProfileHeader",componentId:"sc-37f4dde3-1"})`
  font-size: 28px;
  font-weight: 535;
  line-height: 38px;
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 0px;
  }
`,ai=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\components\\profile\\view\\ProfilePage__EmptyStateContainer",componentId:"sc-37f4dde3-2"})`
  margin-top: 164px;
`,ci=25,li=300,di=()=>{const{address:e}=(0,R.tM)(),t=(0,R.Pr)((e=>e.walletCollections)),s=(0,R.Pr)((e=>e.setWalletCollections)),{resetSellAssets:i}=(0,R.Pc)((({reset:e})=>({resetSellAssets:e}))),o=(0,R.Pc)((e=>e.sellAssets)),r=(0,R.cP)((e=>e.toggleBag)),[a,c]=(0,R.wx)(),l=(0,R.dD)(),{data:d,fetchNextPage:p,hasNextPage:m,isFetchingNextPage:u,isSuccess:f}=(0,Un.useInfiniteQuery)(["ownerCollections",{address:e}],(async({pageParam:t=0})=>{const s=await(async({params:e})=>{let t=!1;for(const i of Object.values(e))void 0===i&&(t=!0);if(t)return[];const s=await fetch(`https://api.opensea.io/api/v1/collections?${new URLSearchParams(e).toString()}`),n=await s.json();return n?n.filter((e=>e.primary_asset_contracts.length)).map((e=>({address:e.primary_asset_contracts[0].address,name:e.name,image:e.image_url,count:e.owned_asset_count}))):[]})({params:{asset_owner:e,offset:""+t*li,limit:`${li}`}});return{data:s,nextPage:t+1}}),{getNextPageParam:e=>0===e.data.length?void 0:e.nextPage,refetchInterval:15e3,refetchIntervalInBackground:!1,refetchOnWindowFocus:!1,refetchOnMount:!1}),h=(0,b.useMemo)((()=>f?d?.pages.map((e=>e.data)).flat():null),[f,d]);return(0,b.useEffect)((()=>{h&&s(h)}),[h,s]),(0,n.jsxs)(oi,{width:"full",paddingTop:{sm:"16",md:"40"},children:[(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ri,{children:"My NFTs"}),(0,n.jsxs)($s.X2,{alignItems:"flex-start",position:"relative",children:[(0,n.jsx)(Mn,{fetchNextPage:p,hasNextPage:m,isFetchingNextPage:u,walletCollections:t}),(!l||!a)&&(0,n.jsx)(b.Suspense,{fallback:(0,n.jsx)(ei,{}),children:(0,n.jsx)(pi,{walletCollections:t,isFiltersExpanded:a,setFiltersExpanded:c})})]})]}),o.length>0&&(0,n.jsxs)($s.X2,{display:{sm:"flex",md:"none"},position:"fixed",left:"16",height:"56",borderRadius:"12",paddingX:"16",paddingY:"12",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",style:{bottom:"68px",width:"calc(100% - 32px)",lineHeight:"24px"},className:Nt.v4,children:[o.length," NFT",1===o.length?"":"s",(0,n.jsx)(bn.n,{fontWeight:"medium",fontSize:"14",cursor:"pointer",color:"neutral2",marginRight:"20",marginLeft:"auto",onClick:i,lineHeight:"16",children:"Clear"}),(0,n.jsx)(bn.n,{color:"white",marginRight:"0",fontWeight:"medium",fontSize:"14",cursor:"pointer",backgroundColor:"accent1",onClick:r,lineHeight:"16",borderRadius:"12",paddingY:"8",paddingX:"28",children:"List for sale"})]})]})},pi=({walletCollections:e,isFiltersExpanded:t,setFiltersExpanded:s})=>{const{address:i}=(0,R.tM)(),o=(0,R.Pr)((e=>e.setCollectionFilters)),r=(0,R.Pr)((e=>e.collectionFilters)),a=(0,R.Pr)((e=>e.clearCollectionFilters)),c=(0,R.cP)((e=>e.bagExpanded)),[l,d]=(0,b.useState)(),p=(0,R.dD)(),m=(0,R.Pc)((e=>e.sellAssets)),{walletAssets:u,loading:f,hasNext:h,loadMore:x}=(0,wn.b)(i,r,[],ci),{gridX:g}=(0,Dn.useSpring)({gridX:t?300:-16,config:{duration:250,easing:Dn.easings.easeOutSine}});return f?(0,n.jsx)(ei,{}):(0,n.jsx)($s.sg,{width:"full",children:0===u?.length?(0,n.jsx)(ai,{children:(0,n.jsx)(Wn.f,{})}):(0,n.jsxs)(bn.x,{flexShrink:"0",position:p&&c?"fixed":"static",style:{transform:g.to((e=>`translate(${Number(e)-(!p&&t?300:-16)}px)`))},paddingY:"20",children:[(0,n.jsx)($s.X2,{gap:"8",flexWrap:"nowrap",justifyContent:"space-between",children:(0,n.jsx)(vn.L,{isMobile:p,isFiltersExpanded:t,onClick:()=>s(!t)})}),(0,n.jsx)($s.X2,{children:(0,n.jsx)(mi,{collections:e,collectionFilters:r,setCollectionFilters:o,clearCollectionFilters:a})}),(0,n.jsx)(Fn.Z,{next:x,hasMore:h??!1,loader:Boolean(h&&u?.length)&&(0,n.jsx)(Cn.p,{count:ci}),dataLength:u?.length??0,className:u?.length?kn.P:void 0,style:{overflow:"unset"},children:u?.length?u.map(((e,t)=>(0,n.jsx)("div",{children:(0,n.jsx)(ii,{asset:e,mediaShouldBePlaying:e.tokenId===l,setCurrentTokenPlayingMedia:d,hideDetails:m.length>0})},t))):null})]})})},mi=({collections:e,collectionFilters:t,setCollectionFilters:s,clearCollectionFilters:i})=>{const o=t=>e?.find((e=>e.address===t)),r=(0,b.useCallback)((()=>i()),[i]);return(0,n.jsxs)($s.X2,{paddingY:"18",gap:"8",flexWrap:"wrap",children:[Boolean(t?.length)&&t.map(((e,t)=>(0,n.jsx)(ui,{collection:o(e),setCollectionFilters:s},`CollectionFilterItem-${e}-${t}`))),Boolean(t?.length)&&(0,n.jsx)(jn.v,{onClick:r,children:"Clear all"})]})},ui=({collection:e,setCollectionFilters:t})=>e?(0,n.jsxs)($s.X2,{justifyContent:"center",paddingTop:"6",paddingRight:"6",paddingBottom:"6",paddingLeft:"12",borderRadius:"8",background:"surface3",fontSize:"14",children:[(0,n.jsx)(bn.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,n.jsx)(bn.n,{marginLeft:"6",className:"_1bw5dlr8",children:e?.name}),(0,n.jsx)(bn.n,{color:"neutral2",background:"none",height:"28",width:"28",padding:"0",as:"button",border:"none",cursor:"pointer",onClick:()=>t(e.address),children:(0,n.jsx)($e.aM,{})})]}):null,fi=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\pages\\profile\\index__ProfilePageWrapper",componentId:"sc-688a71cd-0"})`
  height: 100%;
  width: 100%;
  scrollbar-width: none;

  @media screen and (min-width: ${j.j$.lg}px) {
    height: auto;
  }
`,hi=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\pages\\profile\\index__LoadedAccountPage",componentId:"sc-688a71cd-1"})`
  width: calc(
    100% -
      ${({cartExpanded:e,isListingNfts:t})=>t?80:e?d.zD:0}px
  );
  margin: 0px ${({isListingNfts:e})=>e?40:0}px;

  @media screen and (max-width: ${j.j$.sm}px) {
    width: calc(100% - ${({isListingNfts:e})=>e?32:0}px);
    margin: 0px ${({isListingNfts:e})=>e?16:0}px;
  }
`,xi=v.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\pages\\profile\\index__Center",componentId:"sc-688a71cd-2"})`
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  white-space: nowrap;
`,gi=(0,v.default)(l.DF).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\nft\\pages\\profile\\index__ConnectWalletButton",componentId:"sc-688a71cd-3"})`
  width: min-content;
  white-space: nowrap;
  border-radius: 12px;
  padding: 14px 18px;
  border: none;
`;function wi(){const e=(0,R.aO)((e=>e.state)),t=(0,R.aO)((e=>e.setProfilePageState)),s=(0,R.Pc)((e=>e.reset)),l=(0,R.Pr)((e=>e.clearCollectionFilters)),{account:d}=(0,r.useWeb3React)(),p=(0,b.useRef)(d),m=(0,c.LK)();(0,b.useEffect)((()=>{p.current!==d&&(p.current=d,s(),t(K.HA.VIEWING),l())}),[d,s,t,l]);const u=(0,R.cP)((e=>e.bagExpanded)),f=e===K.HA.LISTING;return(0,n.jsx)(a.fM,{page:o.yJ.NFT_PROFILE_PAGE,shouldLogImpression:!0,children:(0,n.jsx)(fi,{children:d?(0,n.jsx)(hi,{cartExpanded:u,isListingNfts:f,children:f?(0,n.jsx)(gn,{}):(0,n.jsx)(di,{})}):(0,n.jsxs)(xi,{children:[(0,n.jsx)(y.Tv.HeadlineMedium,{lineHeight:"36px",color:"neutral2",fontWeight:"535",marginBottom:"24px",children:(0,n.jsx)(i.cC,{id:"xZBwjV"})}),(0,n.jsx)(gi,{onClick:m,children:(0,n.jsx)(y.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,n.jsx)(i.cC,{id:"VHOVEJ"})})})]})})})}}}]);
//# sourceMappingURL=8654.c1052dcb.chunk.js.map