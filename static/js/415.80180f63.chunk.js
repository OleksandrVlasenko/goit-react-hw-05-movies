"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415,216],{6:function(t,e,n){n.d(e,{Z:function(){return p}});var r,i=n(689),a=n(168),u=n(686),c=n(87),s=(0,u.Z)(c.rU)(r||(r=(0,a.Z)(["\n  display: block;\n"]))),o=n(184),f=function(t){var e=t.title,n=t.id,r=(0,i.TH)();return(0,o.jsx)(s,{to:"/movies/".concat(n),state:{from:r},children:e})},p=function(t){var e=t.movies;return(0,o.jsx)("ul",{children:e.map((function(t){var e=t.title,n=t.id;return(0,o.jsx)(f,{title:e,id:n},n)}))})}},216:function(t,e,n){n.r(e);var r=n(87),i=n(821),a=n(184);e.default=function(t){var e=t.error;return e&&i.v.failure(e.message),i.v.failure("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443"),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.rU,{to:"/",children:"Go back"}),(0,a.jsx)("h2",{children:"\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})}},415:function(t,e,n){n.r(e);var r=n(861),i=n(439),a=n(687),u=n.n(a),c=n(791),s=n(484),o=n(6),f=n(216),p=n(184);e.default=function(){var t=(0,c.useState)([]),e=(0,i.Z)(t,2),n=e[0],a=e[1];return(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e,n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.A.getTrendingMovie();case 3:e=t.sent,n=e.data.results,r=n.map((function(t){return{title:t.title,id:t.id}})),a(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),f.default,t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(o.Z,{movies:n})]})}},821:function(t,e,n){n.d(e,{v:function(){return a}});var r=n(919),i=n.n(r),a={success:function(t){i().Notify.success(t)},failure:function(t){i().Notify.failure(t)},warning:function(t){i().Notify.warning(t)}}},484:function(t,e,n){n.d(e,{A:function(){return l}});var r=n(861),i=n(671),a=n(466),u=n(274),c=n(359),s=n(687),o=n.n(s),f=n(243);f.Z.defaults.baseURL="https://api.themoviedb.org/3",f.Z.defaults.timeout=1e3;var p=(0,c.Z)("AUTH_KEY"),h=function(){function t(){(0,i.Z)(this,t),Object.defineProperty(this,p,{writable:!0,value:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmE2OTViZjhjZDk3YzJlZjFjMmE4YTIwN2E1MDc5MSIsInN1YiI6IjY0NzI1YzdiYmUyZDQ5MDBhN2Q1ZDBmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lPU0wQ1y9n834eQ_fI0wPgzW-vuaEfLFb91z2AfAWd0"}),this.options={method:"GET",headers:{accept:"application/json",Authorization:(0,u.Z)(this,p)[p]},params:{language:"en-US"}}}return(0,a.Z)(t,[{key:"getTrendingMovie",value:function(){var t=(0,r.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.Z.get("/trending/movie/day",this.options);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getSearchMovie",value:function(){var t=(0,r.Z)(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.Z.get("/search/movie?query=".concat(e,"&include_adult=false&page=1"),this.options);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var t=(0,r.Z)(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.Z.get("/movie/".concat(e,"}"),this.options);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getMovieCredits",value:function(){var t=(0,r.Z)(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.Z.get("/movie/".concat(e,"/credits"),this.options);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var t=(0,r.Z)(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.Z.get("/movie/".concat(e,"/reviews?page=1"),this.options);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getImg",value:function(t,e){return"https://image.tmdb.org/t/p/".concat(t).concat(e)}}]),t}(),l=new h}}]);
//# sourceMappingURL=415.80180f63.chunk.js.map