"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{779:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var r,a,c,s,u,o,i,p=e(861),l=e(439),f=e(757),h=e.n(f),d=e(791),v=e(689),g=e(758),x=e(168),m=e(867),w=m.ZP.ul(r||(r=(0,x.Z)(["\n  /* display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n  gap: 50px 30px; */\n"]))),Z=m.ZP.li(a||(a=(0,x.Z)(["\n  /* width: 100px;\n  height: 150px; */\n  margin-bottom: 40px;\n  background-color: #143034;\n  color: #cbf9ff;\n\tpadding: 30px;\n\tborder-radius: 20px;\n"]))),b=m.ZP.div(c||(c=(0,x.Z)(["\n  display: flex;\n  gap: 15px;\n  margin-bottom: 15px;\n  align-items: center;\n"]))),_=m.ZP.h4(s||(s=(0,x.Z)(["\n  font-size: 22px;\n"]))),k=m.ZP.img(u||(u=(0,x.Z)(["\nwidth: 100px;\nheight: 100px;\n  border-radius: 50%;\n  margin-bottom: 2px;\n"]))),y=m.ZP.p(o||(o=(0,x.Z)(["\n  word-spacing: 2px;\n  letter-spacing: 0.4px;\n  font-size: 16px;\n"]))),j=m.ZP.p(i||(i=(0,x.Z)(["\n  font-size: 40px;\n  color: #cbf9ff;\n  text-align: center;\n"]))),P=e(184),U=function(){var n=(0,v.UO)().id,t=(0,d.useState)([]),e=(0,l.Z)(t,2),r=e[0],a=e[1];return(0,d.useEffect)((function(){var t=function(){var t=(0,p.Z)(h().mark((function t(){var e;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,g.tx)(n);case 3:e=t.sent,a(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,P.jsx)(P.Fragment,{children:0===r.length?(0,P.jsx)(j,{children:"We don't have any reviews for this movie"}):(0,P.jsx)(w,{children:null===r||void 0===r?void 0:r.map((function(n){return(0,P.jsxs)(Z,{children:[(0,P.jsxs)(b,{children:[(0,P.jsx)(k,{src:null!==n.author_details.avatar_path?"https://image.tmdb.org/t/p/w500".concat(n.author_details.avatar_path):"http://placehold.it/100x150",alt:n.author}),(0,P.jsx)(_,{children:n.author})]}),(0,P.jsx)(y,{children:n.content})]},n.id)}))})})}},758:function(n,t,e){e.d(t,{M1:function(){return l},TP:function(){return p},Vw:function(){return o},q:function(){return i},tx:function(){return f}});var r=e(861),a=e(757),c=e.n(a),s=e(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="e37708b7fb6536a3c046b3464e4c85b5",o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/trending/all/day?language=en-US",{params:{api_key:u}});case 3:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 8:throw n.prev=8,n.t0=n.catch(0),console.log(n.t0.message),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),{params:{api_key:u}});case 3:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),console.log(n.t0.message),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/movie/".concat(t),{params:{api_key:u}});case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),console.log(n.t0.message),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/movie/".concat(t,"/credits?language=en-US"),{params:{api_key:u}});case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),console.log(n.t0.message),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/movie/".concat(t,"/reviews?language=en-US"),{params:{api_key:u}});case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),console.log(n.t0.message),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.dbec4022.chunk.js.map