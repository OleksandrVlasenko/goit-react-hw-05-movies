"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[523,216],{216:function(e,t,n){n.r(t);var r=n(87),i=n(821),u=n(184);t.default=function(e){var t=e.error;return t&&i.v.failure(t.message),i.v.failure("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443"),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.rU,{to:"/",children:"Go back"}),(0,u.jsx)("h2",{children:"\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})}},523:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(861),i=n(439),u=n(687),a=n.n(u),s=n(791),c=n(689),o=n(184),f=function(e){var t=e.review;return(0,o.jsx)(o.Fragment,{children:0===t.length?(0,o.jsx)("p",{children:"\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"}):(0,o.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,o.jsxs)("div",{children:[(0,o.jsxs)("h5",{children:["Author: ",n]}),(0,o.jsx)("p",{children:r})]},t)}))})})},p=n(484),h=n(216),l=function(){var e=(0,c.UO)().movieId,t=(0,s.useState)(null),n=(0,i.Z)(t,2),u=n[0],l=n[1];return(0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(a().mark((function t(){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.A.getMovieReviews(e);case 3:n=t.sent,r=n.data,console.log("Review:",r.results),l(r.results),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),h.default,t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),(0,o.jsx)(o.Fragment,{children:u&&(0,o.jsx)(f,{review:u})})}},821:function(e,t,n){n.d(t,{v:function(){return u}});var r=n(919),i=n.n(r),u={success:function(e){i().Notify.success(e)},failure:function(e){i().Notify.failure(e)},warning:function(e){i().Notify.warning(e)}}},484:function(e,t,n){n.d(t,{A:function(){return l}});var r=n(861),i=n(671),u=n(466),a=n(274),s=n(359),c=n(687),o=n.n(c),f=n(243);f.Z.defaults.baseURL="https://api.themoviedb.org/3",f.Z.defaults.timeout=1e3;var p=(0,s.Z)("AUTH_KEY"),h=function(){function e(){(0,i.Z)(this,e),Object.defineProperty(this,p,{writable:!0,value:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmE2OTViZjhjZDk3YzJlZjFjMmE4YTIwN2E1MDc5MSIsInN1YiI6IjY0NzI1YzdiYmUyZDQ5MDBhN2Q1ZDBmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lPU0wQ1y9n834eQ_fI0wPgzW-vuaEfLFb91z2AfAWd0"}),this.options={method:"GET",headers:{accept:"application/json",Authorization:(0,a.Z)(this,p)[p]},params:{language:"en-US"}}}return(0,u.Z)(e,[{key:"getTrendingMovie",value:function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("/trending/movie/day",this.options);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSearchMovie",value:function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("/search/movie?query=".concat(t,"&include_adult=false&page=1"),this.options);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("/movie/".concat(t,"}"),this.options);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieCredits",value:function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("/movie/".concat(t,"/credits"),this.options);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("/movie/".concat(t,"/reviews?page=1"),this.options);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),l=new h}}]);
//# sourceMappingURL=523.74513794.chunk.js.map