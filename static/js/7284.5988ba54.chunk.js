"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7284],{91443:function(e,n,t){t.d(n,{Bz:function(){return a},HM:function(){return r},VC:function(){return i},fj:function(){return d}});var o=t(11275),s=t(17487);function i(e){if(!e.length)return{min:0,max:0};let n=e[0].value,t=e[0].value;for(const o of e)o.value<n&&(n=o.value),o.value>t&&(t=o.value);return{min:n,max:t}}function a(e){const n=[],t=[];let o;if(e.forEach(((s,i)=>{if(0!==s.value){if(0===n.length&&0!==i){const n={timestamp:e[0].timestamp,value:s.value};t.push([n,s])}o=s,n.push(s)}})),o){if(o!==e[e.length-1]){const n={timestamp:e[e.length-1].timestamp,value:o.value};t.push([o,n])}}return{prices:n,blanks:t,lastValidPrice:o}}function r(e,n,t){const s=t.invert(e),i=(0,(0,o.YFb)((e=>e.timestamp)).left)(n,s,1),a=n[i-1],r=n[i];if(!r)return a;return Math.abs(s.valueOf()-a.timestamp.valueOf())<Math.abs(r.timestamp.valueOf()-s.valueOf())?a:r}const l=o.Z_i.every(5),c={[s.XH.HOUR]:l?{interval:l,step:2}:{interval:o.Z_i,step:10},[s.XH.DAY]:{interval:o.WQD,step:4},[s.XH.WEEK]:{interval:o.rr1,step:1},[s.XH.MONTH]:{interval:o.rr1,step:7},[s.XH.YEAR]:{interval:o.F0B,step:2}};function d(e,n,t,o){if(0===o||n<=e)return[];const s=(n-e)/24,i=new Date(1e3*(e+s)),a=new Date(1e3*(n-s)),{interval:r,step:l}=c[t],d=r.range(i,a,l).map((e=>e.valueOf()/1e3));if(d.length<=o)return d;const p=[],m=Math.floor(d.length/o);for(let c=1;c<d.length;c+=m)p.push(d[c]);return p}},57284:function(e,n,t){t.d(n,{h8:function(){return ce},VJ:function(){return me},pS:function(){return he},PI:function(){return ue},_j:function(){return re}});var o=t(42893),s=t(12204),i=t(19903),a=t(4271),r=t(66196),l=t(11275),c=t(13712),d=t(87253),p=t(47244),m=t(14045);function u({data:e,getX:n,getY:t,marginTop:s,curve:i,color:a,strokeWidth:r,width:l,height:c,children:u}){const h=(0,d.useTheme)();return(0,o.jsxs)("svg",{width:l,height:c,children:[(0,o.jsx)(p.Z,{top:s,children:(0,o.jsx)(m.Z,{curve:i,stroke:a??h.accent1,strokeWidth:r,data:e,x:n,y:t})}),u]})}var h=c.memo(u),f=t(91443);const x=d.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Charts\\SparklineChart__LoadingContainer",componentId:"sc-6357d2d2-0"})`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;function k({width:e,height:n,tokenData:t,pricePercentChange:s,sparklineMap:i}){const a=(0,d.useTheme)(),r=t?.address?i[t.address]:null;if(!r||r.length<=1)return(0,o.jsx)(x,{children:(0,o.jsx)(re,{})});const c=r[0],p=r[r.length-1],m=(0,l.BYU)().domain([c.timestamp,p.timestamp]).range([0,110]),{min:u,max:k}=(0,f.VC)(r),w=(0,l.BYU)().domain([u,k]).range([30,0]);return(0,o.jsx)(h,{data:r,getX:e=>m(e.timestamp),getY:e=>w(e.value),curve:l.YY7.tension(.9),marginTop:5,color:s&&s<0?a.critical:a.success,strokeWidth:1.5,width:e,height:n})}var w=(0,c.memo)(k),g=t(83246),T=t(37636);const C=e=>(0,o.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,o.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12.75 16.5C12.75 16.914 12.414 17.25 12 17.25C11.586 17.25 11.25 16.914 11.25 16.5V11.929C11.25 11.515 11.586 11.179 12 11.179C12.414 11.179 12.75 11.515 12.75 11.929V16.5ZM12.02 9.5C11.468 9.5 11.0149 9.052 11.0149 8.5C11.0149 7.948 11.458 7.5 12.01 7.5H12.02C12.573 7.5 13.02 7.948 13.02 8.5C13.02 9.052 12.572 9.5 12.02 9.5Z",fill:"#9B9B9B"})});var b=t(3077),v=t(65647),_=t(11569),y=t(17487),j=t(67621),D=t(41440),O=t(80657),U=t(1990),$=t(39839),N=t(57482),I=t(35458),H=t(80343),R=t(86403),L=t(86682);const E=d.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__Cell",componentId:"sc-6783a7e7-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
`,G=d.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__StyledTokenRow",componentId:"sc-6783a7e7-1"})`
  background-color: transparent;
  display: grid;
  font-size: 16px;
  grid-template-columns: 1fr 7fr 4fr 4fr 4fr 4fr 5fr;
  line-height: 24px;
  max-width: ${I.y5};
  min-width: 390px;
  ${({first:e,last:n})=>d.css`
    height: ${e||n?"72px":"64px"};
    padding-top: ${e?"8px":"0px"};
    padding-bottom: ${n?"8px":"0px"};
  `}
  padding-left: 12px;
  padding-right: 12px;
  transition: ${({theme:{transition:{duration:e,timing:n}}})=>d.css`background-color ${e.medium} ${n.ease}`};
  width: 100%;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};

  &:hover {
    ${({$loading:e,theme:n})=>!e&&d.css`
        background-color: ${n.deprecated_hoverDefault};
      `}
    ${({last:e})=>e&&d.css`
        border-radius: 0px 0px 8px 8px;
      `}
  }

  @media only screen and (max-width: ${I.y5}) {
    grid-template-columns: 1fr 6.5fr 4.5fr 4.5fr 4.5fr 4.5fr 1.7fr;
  }

  @media only screen and (max-width: ${I.$l}) {
    grid-template-columns: 1fr 7.5fr 4.5fr 4.5fr 4.5fr 1.7fr;
  }

  @media only screen and (max-width: ${I.Uw}) {
    grid-template-columns: 1fr 10fr 5fr 5fr 1.2fr;
  }

  @media only screen and (max-width: ${I.T1}) {
    grid-template-columns: 2fr 3fr;
    min-width: unset;
    border-bottom: 0.5px solid ${({theme:e})=>e.surface2};

    :last-of-type {
      border-bottom: none;
    }
  }
`,P=d.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__ClickableContent",componentId:"sc-6783a7e7-2"})`
  display: flex;
  ${({gap:e})=>e&&`gap: ${e}px`};
  text-decoration: none;
  color: ${({theme:e})=>e.neutral1};
  align-items: center;
  cursor: pointer;
`,X=(0,d.default)(P).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__ClickableName",componentId:"sc-6783a7e7-3"})`
  gap: 12px;
  max-width: 100%;
`,V=(0,d.default)(G).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__StyledHeaderRow",componentId:"sc-6783a7e7-4"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  border-radius: 8px 8px 0px 0px;
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  height: 48px;
  line-height: 16px;
  padding: 0px 12px;
  width: 100%;
  justify-content: center;

  &:hover {
    background-color: transparent;
  }

  @media only screen and (max-width: ${I.T1}) {
    justify-content: space-between;
  }
`,M=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__ListNumberCell",componentId:"sc-6783a7e7-5"})`
  color: ${({theme:e})=>e.neutral2};
  min-width: 32px;
  font-size: 14px;

  @media only screen and (max-width: ${I.T1}) {
    display: none;
  }
`,A=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__DataCell",componentId:"sc-6783a7e7-6"})`
  justify-content: flex-end;
  min-width: 80px;
  user-select: ${({sortable:e})=>e?"none":"unset"};
  transition: ${({theme:{transition:{duration:e,timing:n}}})=>d.css`background-color ${e.medium} ${n.ease}`};
`,B=(0,d.default)(A).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__TvlCell",componentId:"sc-6783a7e7-7"})`
  padding-right: 8px;
  @media only screen and (max-width: ${I.Uw}) {
    display: none;
  }
`,S=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__NameCell",componentId:"sc-6783a7e7-8"})`
  justify-content: flex-start;
  padding: 0px 8px;
  min-width: 240px;
  gap: 8px;

  @media only screen and (max-width: ${U.j$.xs}px) {
    min-width: 200px;
  }
`,Y=(0,d.default)(A).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__PriceCell",componentId:"sc-6783a7e7-9"})`
  padding-right: 8px;
`,K=(0,d.default)(A).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__PercentChangeCell",componentId:"sc-6783a7e7-10"})`
  padding-right: 8px;
  @media only screen and (max-width: ${I.T1}) {
    display: none;
  }
`,z=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__PercentChangeInfoCell",componentId:"sc-6783a7e7-11"})`
  display: none;

  @media only screen and (max-width: ${I.T1}) {
    display: flex;
    gap: 3px;
    justify-content: flex-end;
    color: ${({theme:e})=>e.neutral2};
    font-size: 12px;
    line-height: 16px;
  }
`,Z=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__PriceInfoCell",componentId:"sc-6783a7e7-12"})`
  justify-content: flex-end;
  flex: 1;

  @media only screen and (max-width: ${I.T1}) {
    flex-direction: column;
    align-items: flex-end;
  }
`,W=d.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__HeaderCellWrapper",componentId:"sc-6783a7e7-13"})`
  align-items: center;
  cursor: ${({onClick:e})=>e?"pointer":"unset"};
  display: flex;
  gap: 4px;
  justify-content: flex-end;
  width: 100%;

  &:hover {
    ${$.iV}
  }
`,F=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__SparkLineCell",componentId:"sc-6783a7e7-14"})`
  padding: 0px 24px;
  min-width: 120px;

  @media only screen and (max-width: ${I.y5}) {
    display: none;
  }
`,J=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__SparkLine",componentId:"sc-6783a7e7-15"})`
  width: 124px;
  height: 42px;
`,Q=(0,d.default)(D.rU).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__StyledLink",componentId:"sc-6783a7e7-16"})`
  text-decoration: none;
`,q=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__TokenInfoCell",componentId:"sc-6783a7e7-17"})`
  gap: 8px;
  line-height: 24px;
  font-size: 16px;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media only screen and (max-width: ${I.T1}) {
    justify-content: flex-start;
    flex-direction: column;
    gap: 0px;
    width: max-content;
    font-weight: 535;
  }
`,ee=d.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__TokenName",componentId:"sc-6783a7e7-18"})`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,ne=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__TokenSymbol",componentId:"sc-6783a7e7-19"})`
  color: ${({theme:e})=>e.neutral2};
  text-transform: uppercase;

  @media only screen and (max-width: ${I.T1}) {
    font-size: 12px;
    height: 16px;
    justify-content: flex-start;
    width: 100%;
  }
`,te=(0,d.default)(A).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__VolumeCell",componentId:"sc-6783a7e7-20"})`
  padding-right: 8px;
  @media only screen and (max-width: ${I.$l}) {
    display: none;
  }
`,oe=(0,d.default)(H.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__SmallLoadingBubble",componentId:"sc-6783a7e7-21"})`
  width: 25%;
`,se=(0,d.default)(H.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__MediumLoadingBubble",componentId:"sc-6783a7e7-22"})`
  width: 65%;
`,ie=(0,d.default)(H.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__LongLoadingBubble",componentId:"sc-6783a7e7-23"})`
  width: 90%;
`,ae=(0,d.default)(H.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__IconLoadingBubble",componentId:"sc-6783a7e7-24"})`
  border-radius: 50%;
  width: 24px;
`,re=(0,d.default)(ie).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__SparkLineLoadingBubble",componentId:"sc-6783a7e7-25"})`
  height: 4px;
`,le=d.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\mika-swap\\src\\components\\Tokens\\TokenTable\\TokenRow__InfoIconContainer",componentId:"sc-6783a7e7-26"})`
  width: 16px;
  margin-left: 2px;
  display: flex;
  align-items: center;
  cursor: help;
`,ce={[R.PU.PRICE]:void 0,[R.PU.PERCENT_CHANGE]:void 0,[R.PU.TOTAL_VALUE_LOCKED]:(0,o.jsx)(s.cC,{id:"b2kIOW"}),[R.PU.VOLUME]:(0,o.jsx)(s.cC,{id:"UOqQih"})};function de({category:e}){const n=(0,d.useTheme)(),t=(0,j.Dv)(R.$E),s=(0,R.OX)(e),i=(0,j.Dv)(R.AY),a=ce[e];return(0,o.jsxs)(W,{onClick:s,children:[i===e&&(0,o.jsx)(o.Fragment,{children:t?(0,o.jsx)(T.V,{width:16,height:16,color:n.neutral2}):(0,o.jsx)(g.c,{width:16,height:16,color:n.neutral2})}),e,a&&(0,o.jsx)(v.ud,{text:a,placement:"right",children:(0,o.jsx)(le,{children:(0,o.jsx)(C,{width:"16px",height:"16px"})})})]})}function pe({header:e,listNumber:n,tokenInfo:t,price:s,percentChange:i,tvl:a,volume:r,sparkLine:l,...c}){const d=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(M,{header:e,children:n}),(0,o.jsx)(S,{"data-testid":"name-cell",children:t}),(0,o.jsx)(Y,{"data-testid":"price-cell",sortable:e,children:s}),(0,o.jsx)(K,{"data-testid":"percent-change-cell",sortable:e,children:i}),(0,o.jsx)(B,{"data-testid":"tvl-cell",sortable:e,children:a}),(0,o.jsx)(te,{"data-testid":"volume-cell",sortable:e,children:r}),(0,o.jsx)(F,{children:l})]});return e?(0,o.jsx)(V,{"data-testid":"header-row",children:d}):(0,o.jsx)(G,{...c,children:d})}function me(){return(0,o.jsx)(pe,{header:!0,listNumber:"#",tokenInfo:(0,o.jsx)(s.cC,{id:"SKZhW9"}),price:(0,o.jsx)(de,{category:R.PU.PRICE}),percentChange:(0,o.jsx)(de,{category:R.PU.PERCENT_CHANGE}),tvl:(0,o.jsx)(de,{category:R.PU.TOTAL_VALUE_LOCKED}),volume:(0,o.jsx)(de,{category:R.PU.VOLUME}),sparkLine:null})}function ue(e){return(0,o.jsx)(pe,{header:!1,listNumber:(0,o.jsx)(oe,{}),$loading:!0,tokenInfo:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ae,{}),(0,o.jsx)(se,{})]}),price:(0,o.jsx)(se,{}),percentChange:(0,o.jsx)(H.X,{}),tvl:(0,o.jsx)(H.X,{}),volume:(0,o.jsx)(H.X,{}),sparkLine:(0,o.jsx)(re,{}),...e})}const he=(0,c.forwardRef)(((e,n)=>{const{formatFiatPrice:t,formatNumber:s,formatDelta:l}=(0,N.Gb)(),{tokenListIndex:c,tokenListLength:d,token:p,sortRank:m}=e,u=(0,j.Dv)(R.fO),h=(0,y.Qj)((0,O.UO)().chainName?.toUpperCase()),f=(0,y.Tz)(h),x=(0,j.Dv)(R.X3),k=p.market?.pricePercentChange?.value,g=l(k),T={chain_id:f,token_address:p.address,token_symbol:p.symbol,token_list_index:c,token_list_rank:m,token_list_length:d,time_frame:x,search_token_address_input:u},C=0===p.market?.price?.value?"-":t({price:p.market?.price?.value}),v=(0,_.C)();return(0,o.jsx)("div",{ref:n,"data-testid":`token-table-row-${p.address}`,children:(0,o.jsx)(Q,{to:(0,y.dG)({...p,isInfoExplorePageEnabled:v}),onClick:()=>(0,r._P)(i.Je.EXPLORE_TOKEN_ROW_CLICKED,T),children:(0,o.jsx)(pe,{header:!1,listNumber:m,tokenInfo:(0,o.jsxs)(X,{children:[(0,o.jsx)(b.Z,{token:p,size:"32px"}),(0,o.jsxs)(q,{children:[(0,o.jsx)(ee,{"data-cy":"token-name",children:p.name}),(0,o.jsx)(ne,{children:p.symbol})]})]}),price:(0,o.jsx)(P,{children:(0,o.jsxs)(Z,{children:[C,(0,o.jsxs)(z,{children:[(0,o.jsx)(L.Kx,{delta:k,size:14}),(0,o.jsx)(L.Jp,{delta:k,children:g})]})]})}),percentChange:(0,o.jsxs)(P,{gap:3,children:[(0,o.jsx)(L.Kx,{delta:k}),(0,o.jsx)(L.Jp,{delta:k,children:g})]}),tvl:(0,o.jsx)(P,{children:s({input:p.market?.totalValueLocked?.value,type:N.sw.FiatTokenStats})}),volume:(0,o.jsx)(P,{children:s({input:p.market?.volume?.value,type:N.sw.FiatTokenStats})}),sparkLine:(0,o.jsx)(J,{children:(0,o.jsx)(a.Z,{children:({width:n,height:t})=>e.sparklineMap&&(0,o.jsx)(w,{width:n,height:t,tokenData:p,pricePercentChange:p.market?.pricePercentChange?.value,sparklineMap:e.sparklineMap})})}),first:0===c,last:c===d-1})})})}));he.displayName="LoadedRow"},86403:function(e,n,t){t.d(n,{$E:function(){return p},AY:function(){return d},OX:function(){return m},PU:function(){return o},X3:function(){return c},fO:function(){return l}});var o,s=t(17487),i=t(30719),a=t(67621),r=t(13712);!function(e){e.PRICE="Price",e.PERCENT_CHANGE="Change",e.TOTAL_VALUE_LOCKED="TVL",e.VOLUME="Volume"}(o||(o={}));const l=(0,a.rw)(""),c=(0,i.cn)(s.XH.DAY),d=(0,i.cn)(o.VOLUME),p=(0,i.cn)(!1);function m(e){const[n,t]=(0,i.KO)(d),[o,s]=(0,i.KO)(p);return(0,r.useCallback)((()=>{n===e?s(!o):(t(e),s(!1))}),[n,t,s,o,e])}}}]);
//# sourceMappingURL=7284.5988ba54.chunk.js.map