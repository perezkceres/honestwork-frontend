(this["webpackJsonphonest-frontend"]=this["webpackJsonphonest-frontend"]||[]).push([[20],{671:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(4),c=t.n(r),a=t(15),i=t(110),o=t.n(i),s=t(61),u=function(e,n){return new(new o.a(e).eth.Contract)(s,n)},b=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){var a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u(n,t),e.prev=1,e.next=4,a.methods.balanceOf(r).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t,r){return e.apply(this,arguments)}}()},789:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return ke}));var r=t(12),c=t(60),a=t(0),i=t(3),o=t(780),s=t(49),u=t(661),b=t(171),j=t(4),l=t.n(j),d=t(15),p=t(25),f=t(66),x=t(668),h=t(675),O=t(16),m=t(13),g=t.n(m),v=t(36),w=t(50),k=t(102),y=t(683),z=t(131),S=function(){var e=Object(a.useState)([]),n=Object(p.a)(e,2),t=n[0],r=n[1],c=Object(f.m)().account,i=Object(z.a)().fastRefresh;return Object(a.useEffect)((function(){c&&function(){var e=Object(d.a)(l.a.mark((function e(){var n,t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.a.map((function(e){return{address:Object(w.e)(),name:"pendinghonest",params:[e.pid,c]}})),e.next=3,Object(v.a)(k,n);case 3:t=e.sent,a=y.a.map((function(e,n){return Object(O.a)(Object(O.a)({},e),{},{balance:new g.a(t[n])})})),r(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,i]),t},B=t(678),C=t(684),R=function(e){var n=e.value,t=e.decimals,c=e.fontSize,i=void 0===c?"40px":c,o=e.prefix,u=Object(C.useCountUp)({start:0,end:n,duration:1,separator:",",decimals:void 0!==t?t:n<0?4:n>1e5?0:3}),b=u.countUp,j=u.update,l=Object(a.useRef)(j);return Object(a.useEffect)((function(){l.current(n)}),[n,l]),Object(r.jsxs)(s.B,{bold:!0,fontSize:i,children:[o,b]})},F=function(e){var n=e.earningsSum,t=Object(u.a)();return Object(f.m)().account?Object(r.jsx)(R,{value:n}):Object(r.jsx)(s.B,{color:"textDisabled",style:{lineHeight:"60px"},children:t(298,"Locked")})},A=function(e){var n=e.cakeBalance,t=Object(u.a)();return Object(f.m)().account?Object(r.jsx)(R,{value:n,fontSize:"24px"}):Object(r.jsx)(s.B,{color:"textDisabled",style:{lineHeight:"36px"},children:t(298,"Locked")})},E=t(106),D=t(270),N=t(84),H=t(671),T=(t(61),function(e,n,t){var r=Object(a.useState)(new g.a(0)),c=Object(p.a)(r,2),i=c[0],o=c[1],s=Object(f.m)(),u=s.account,b=s.ethereum,j=Object(z.a)().fastRefresh,x=n||u,h=t||b;return Object(a.useEffect)((function(){x&&h&&function(){var n=Object(d.a)(l.a.mark((function n(){var t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(H.b)(h,e,x);case 2:t=n.sent,o(new g.a(t));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[x,h,e,j]),i}),L=t(662);function Q(){var e=Object(c.a)(["\n  margin-top: 24px;\n"]);return Q=function(){return e},e}function $(){var e=Object(c.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return $=function(){return e},e}function P(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n"]);return P=function(){return e},e}function U(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n"]);return U=function(){return e},e}function q(){var e=Object(c.a)(["\nbackground-image: url('/images/egg/mod.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n    min-width: 10%;\n  min-height: 10%;\n  width: 10%;\n  height: 100%;\n  center: right;\n  \n \n"]);return q=function(){return e},e}var G=Object(i.e)(s.h)(q()),J=i.e.div(U()),V=(i.e.img(P()),i.e.div($(),(function(e){return e.theme.colors.textSubtle}))),W=i.e.div(Q()),I=function(){var e=Object(a.useState)(!1),n=Object(p.a)(e,2),t=n[0],c=n[1],i=Object(f.m)().account,o=Object(u.a)(),b=S(),j=Object(L.a)(T(Object(w.a)())),O=Object(E.g)().toNumber(),m=b.reduce((function(e,n){return e+new x.a(n.balance).div(new x.a(10).pow(18)).toNumber()}),0),g=b.filter((function(e){return e.balance.toNumber()>0})),v=Object(h.a)(g.map((function(e){return e.pid}))).onReward,k=Object(a.useCallback)(Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,v();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[v]);return Object(r.jsx)(G,{children:Object(r.jsxs)(s.i,{children:[Object(r.jsx)(s.n,{size:"xl",mb:"24px",children:o(542,"Farms & Staking")}),Object(r.jsxs)(J,{children:[Object(r.jsx)(V,{children:"\ud83d\ude9c to Harvest"}),Object(r.jsx)(F,{earningsSum:m}),Object(r.jsxs)(V,{children:["~$",(O*m).toFixed(2)]})]}),Object(r.jsxs)(J,{children:[Object(r.jsx)(V,{children:"\ud83d\ude9c in Wallet"}),Object(r.jsx)(A,{cakeBalance:j}),Object(r.jsxs)(V,{children:["~$",(O*j).toFixed(2)]})]}),Object(r.jsx)(W,{children:i?Object(r.jsx)(s.d,{id:"harvest-all",disabled:g.length<=0||t,onClick:k,children:t?o(548,"Collecting EGG"):o(999,"Harvest all (".concat(g.length,")"))}):Object(r.jsx)(B.a,{})}),Object(r.jsx)(s.n,{size:"s",mb:"24px",children:"..."})]})})};function M(){var e=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return M=function(){return e},e}function Y(){var e=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  background-image: url('/images/egg/stats.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n    min-width: 10%;\n  min-height: 10%;\n  width: 100%;\n  height: auto;\n  \n  \n  \n"]);return Y=function(){return e},e}var _=Object(i.e)(s.h)(Y()),K=i.e.div(M()),X=function(){var e=Object(u.a)(),n=function(){var e=Object(z.a)().slowRefresh,n=Object(a.useState)(),t=Object(p.a)(n,2),r=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(N.a)(D,Object(w.a)()),e.next=3,n.methods.totalSupply().call();case 3:t=e.sent,c(new g.a(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),r}(),t=function(e){var n=Object(a.useState)(new g.a(0)),t=Object(p.a)(n,2),r=t[0],c=t[1],i=Object(z.a)().slowRefresh;return Object(a.useEffect)((function(){!function(){var e=Object(d.a)(l.a.mark((function e(){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(N.a)(D,Object(w.a)()),e.next=3,n.methods.balanceOf("0xf43261d712cCa4aE55b34B77d9157e773254D1dF").call();case 3:t=e.sent,c(new g.a(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,i]),r}(Object(w.a)()),c=Object(E.c)(),i=Object(E.g)(),o=n?n.minus(t):new x.a(0),b=Object(L.a)(o),j=i.times(o),f=0;i.times(t),Object(E.g)();return c&&c[0]&&c[0].honestPerBlock&&(f=new x.a(c[0].honestPerBlock).div(new x.a(10).pow(18)).toNumber()),Object(r.jsx)(_,{children:Object(r.jsxs)(s.i,{children:[Object(r.jsx)(s.n,{size:"xl",mb:"24px",children:"\ud83d\ude9c Stats"}),Object(r.jsxs)(K,{children:[Object(r.jsx)(s.B,{fontSize:"14px",children:"honest Price"}),Object(r.jsx)(R,{fontSize:"14px",value:i.toNumber(),decimals:2,prefix:"$"})]}),Object(r.jsxs)(K,{children:[Object(r.jsx)(s.B,{fontSize:"14px",children:"Total Supply"}),Object(r.jsx)(s.B,{bold:!0,fontSize:"14px",children:Object(L.a)(n)})]}),Object(r.jsxs)(K,{children:[Object(r.jsx)(s.B,{fontSize:"14px",children:"Circulating Supply"}),b&&Object(r.jsx)(R,{fontSize:"14px",value:b,decimals:0})]}),Object(r.jsxs)(K,{children:[Object(r.jsx)(s.B,{fontSize:"14px",children:"Tokens to be farmed"}),Object(r.jsx)(R,{fontSize:"14px",value:Object(L.a)(t),decimals:0})]}),Object(r.jsxs)(K,{children:[Object(r.jsx)(s.B,{fontSize:"14px",children:e(999,"Market Cap")}),Object(r.jsx)(R,{fontSize:"14px",value:Object(L.a)(j),decimals:0,prefix:"$"})]}),Object(r.jsxs)(K,{children:[Object(r.jsx)(s.B,{fontSize:"14px",children:" \ud83d\ude9c/block"}),Object(r.jsx)(s.B,{bold:!0,fontSize:"14px",children:f})]})]})})};function Z(){var e=Object(c.a)(["\n\n\nbackground: linear-gradient(135deg, orange 60%, cyan);\nbackground-image: url('/images/egg/tvl.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n    min-width: 10%;\n  min-height: 10%;\n  width: 10%;\n  height: 100%;\n  \n  align-items: center;\n  display: flex;\n  flex: 2;\n"]);return Z=function(){return e},e}var ee=Object(i.e)(s.h)(Z()),ne=function(){var e=Object(u.a)(),n=Object(E.h)().toNumber();return Object(r.jsx)(ee,{children:Object(r.jsxs)(s.i,{children:[Object(r.jsx)(s.n,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R,{value:n,prefix:"$",decimals:2}),Object(r.jsx)(s.B,{color:"textSubtle",children:"Across All Barns"})]})]})})},te=t(781);function re(){var e=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return re=function(){return e},e}function ce(){var e=Object(c.a)(["\nbackground-image: url('/images/egg/twitter.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n    min-width: 10%;\n  min-height: 10%;\n  width: 10%;\n  height: 100%;\n  center: right;\n  \n"]);return ce=function(){return e},e}var ae=Object(i.e)(s.h)(ce()),ie=(i.e.div(re()),function(){var e=Object(u.a)();return Object(r.jsx)(ae,{children:Object(r.jsxs)(s.i,{children:[Object(r.jsx)(s.n,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(r.jsxs)(s.m,{flexDirection:"row",mb:"15px",children:[Object(r.jsx)(s.n,{size:"l",mb:"24px",color:"secondary",children:"token go livee : \ud83d\ude9c"}),Object(r.jsx)(s.r,{mb:"5px",small:!0,href:"https://quickswap.exchange/#/swap?outputCurrency=0x4dA646B71014332AE8370017d05205346d3ca50A",children:"BUY"})]}),Object(r.jsx)(s.n,{size:"l",mb:"24px",color:"secondary",children:"Farming Starts:"}),Object(r.jsx)(s.n,{size:"l",mb:"24px",color:"secondary",children:"RugDoc Review:"}),Object(r.jsx)(s.m,{flexDirection:"row",mb:"15px",children:Object(r.jsx)(s.r,{mb:"5px",small:!0,href:"https://rugdoc.io/project/honest-farms/",children:"RugDoc Review:"})}),Object(r.jsx)(te.a,{dataSource:{sourceType:"profile",screenName:"Polyhonest"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})});function oe(){var e=Object(c.a)(["\n  margin-top: 24px;\n"]);return oe=function(){return e},e}function se(){var e=Object(c.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return se=function(){return e},e}function ue(){var e=Object(c.a)(["\n  margin-bottom: 0px;\n"]);return ue=function(){return e},e}function be(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 0px;\n"]);return be=function(){return e},e}function je(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n"]);return je=function(){return e},e}function le(){var e=Object(c.a)(["\nbackground-image: url('/images/egg/meta.png');\nbackground-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n \n"]);return le=function(){return e},e}var de=Object(i.e)(s.h)(le()),pe=(i.e.div(je()),i.e.div(be())),fe=i.e.img(ue()),xe=(i.e.div(se(),(function(e){return e.theme.colors.textSubtle})),i.e.div(oe()),Object(w.a)()),he=function(){var e=Object(a.useState)(!1),n=Object(p.a)(e,2),t=(n[0],n[1]),c=(Object(f.m)().account,Object(u.a)(),S().filter((function(e){return e.balance.toNumber()>0}))),i=Object(h.a)(c.map((function(e){return e.pid}))).onReward,o=(Object(a.useCallback)(Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),e.prev=1,e.next=4,i();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,t(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[i]),Object(a.useCallback)(Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=window.ethereum)){e.next=11;break}return e.prev=2,e.next=5,n.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:xe,symbol:"honest",decimals:"18",image:"/logo.png"}}});case 5:e.sent&&console.log("Token was added"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])}))),[]));return Object(r.jsx)(de,{children:Object(r.jsxs)(s.i,{children:[Object(r.jsx)(s.n,{size:"xl",mb:"24px",children:"Add \ud83d\ude9c"}),Object(r.jsx)(s.m,{flexDirection:"column",mb:"15px",children:Object(r.jsx)(s.r,{mb:"20px",small:!0,href:"https://polygonscan.com/token/".concat(xe),children:xe})}),Object(r.jsxs)(pe,{children:[Object(r.jsx)(fe,{src:"/images/egg/9.png",alt:"Farm honest logo",width:60,height:60}),Object(r.jsx)("hr",{}),Object(r.jsxs)(s.d,{onClick:o,size:"sm",children:["+ Add \ud83d\ude9c to ",Object(r.jsx)("img",{style:{marginLeft:8},width:16,src:"https://jaguarswap.com/images/tokens/metamask.png",alt:"metamask logo"})]})]})]})})};function Oe(){var e=Object(c.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"]);return Oe=function(){return e},e}function me(){var e=Object(c.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 72px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);return me=function(){return e},e}function ge(){var e=Object(c.a)(["\n  align-items: center;\n  background-image: url('/images/egg/3a.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 50px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/egg/home.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n    min-width: 10%;\n  min-height: 10%;\n  width: 100%;\n  height: 10%;\n  \n  align-items: center;\n  display: flex;\n  flex: 1;\n  }\n"]);return ge=function(){return e},e}var ve=i.e.div(ge(),(function(e){return e.theme.mediaQueries.lg})),we=Object(i.e)(s.b)(me(),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),ke=(Object(i.e)(s.b)(Oe(),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),function(){Object(u.a)(),new o.a;return Object(r.jsxs)(b.a,{children:[Object(r.jsxs)(ve,{children:[Object(r.jsx)(s.n,{as:"h1",size:"xl",mb:"14px",color:"secondary",children:"Honest Farms"}),Object(r.jsx)(s.n,{as:"h1",size:"m",mb:"24px",color:"secondary",children:"It ain't much but it's Honest Work"}),Object(r.jsx)(s.B,{children:"First fixed supply deflationary Farm on polygon"}),Object(r.jsx)(s.n,{as:"h1",size:"xl",mb:"14px",color:"secondary",children:"..."})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)(we,{children:[Object(r.jsx)(I,{}),Object(r.jsx)(ie,{})]}),Object(r.jsxs)(we,{children:[Object(r.jsx)(X,{}),Object(r.jsx)(ne,{}),Object(r.jsx)(he,{})]})]})]})})}}]);
//# sourceMappingURL=20.74905559.chunk.js.map