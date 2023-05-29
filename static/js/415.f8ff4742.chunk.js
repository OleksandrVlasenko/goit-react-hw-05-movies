"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415,216],{487:function(n,t,e){e.d(t,{T:function(){return s}});var r,i=e(168),a=e(686),u=e(87),c=(0,a.Z)(u.OL)(r||(r=(0,i.Z)(["\ndisplay: block;\npadding: 3px;\nborder: 1px solid black;\nwidth: 60px;\nmargin-bottom: 10px;\n\n&:hover {\n  color: orange\n}\n"]))),o=e(184),s=function(n){var t=n.link;return(0,o.jsx)(c,{to:t,children:"Go back"})}},147:function(n,t,e){e.d(t,{Z:function(){return h}});var r,i,a=e(689),u=e(168),c=e(686),o=e(87),s=(0,c.Z)(o.rU)(r||(r=(0,u.Z)(["\n  display: block;\n\n  &:hover {\n    color: orange;\n  }\n"]))),f=e(184),p=function(n){var t=n.title,e=n.id,r=(0,a.TH)();return(0,f.jsx)(s,{to:"/movies/".concat(e),state:{from:r},children:t})},l=c.Z.ul(i||(i=(0,u.Z)(["\n  margin-left: 30px;\n"]))),h=function(n){var t=n.movies;return(0,f.jsx)(l,{children:t.map((function(n){var t=n.title,e=n.id;return(0,f.jsx)(p,{title:t,id:e},e)}))})}},216:function(n,t,e){e.r(t);var r=e(487),i=e(821),a=e(184);t.default=function(n){var t=n.error;return t&&i.v.failure(t.message),i.v.failure("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443"),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.T,{link:"/"}),(0,a.jsx)("h2",{children:"\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})}},415:function(n,t,e){e.r(t);var r=e(861),i=e(439),a=e(687),u=e.n(a),c=e(791),o=e(484),s=e(147),f=e(216),p=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,i.Z)(n,2),e=t[0],a=t[1];return(0,c.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){var t,e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.A.getTrendingMovie();case 3:t=n.sent,e=t.data.results,r=e.map((function(n){return{title:n.title,id:n.id}})),a(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),f.default,n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(s.Z,{movies:e})]})}},821:function(n,t,e){e.d(t,{v:function(){return a}});var r=e(919),i=e.n(r),a={success:function(n){i().Notify.success(n)},failure:function(n){i().Notify.failure(n)},warning:function(n){i().Notify.warning(n)}}},484:function(n,t,e){e.d(t,{A:function(){return h}});var r=e(861),i=e(671),a=e(466),u=e(274),c=e(359),o=e(687),s=e.n(o),f=e(243);f.Z.defaults.baseURL="https://api.themoviedb.org/3",f.Z.defaults.timeout=1e3;var p=(0,c.Z)("AUTH_KEY"),l=function(){function n(){(0,i.Z)(this,n),Object.defineProperty(this,p,{writable:!0,value:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmE2OTViZjhjZDk3YzJlZjFjMmE4YTIwN2E1MDc5MSIsInN1YiI6IjY0NzI1YzdiYmUyZDQ5MDBhN2Q1ZDBmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lPU0wQ1y9n834eQ_fI0wPgzW-vuaEfLFb91z2AfAWd0"}),this.options={method:"GET",headers:{accept:"application/json",Authorization:(0,u.Z)(this,p)[p]},params:{language:"en-US"}}}return(0,a.Z)(n,[{key:"getTrendingMovie",value:function(){var n=(0,r.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.Z.get("/trending/movie/day",this.options);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"getSearchMovie",value:function(){var n=(0,r.Z)(s().mark((function n(t){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.Z.get("/search/movie?query=".concat(t,"&include_adult=false&page=1"),this.options);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var n=(0,r.Z)(s().mark((function n(t){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.Z.get("/movie/".concat(t,"}"),this.options);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"getMovieCredits",value:function(){var n=(0,r.Z)(s().mark((function n(t){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.Z.get("/movie/".concat(t,"/credits"),this.options);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var n=(0,r.Z)(s().mark((function n(t){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.Z.get("/movie/".concat(t,"/reviews?page=1"),this.options);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"getImg",value:function(n,t){return"https://image.tmdb.org/t/p/".concat(n).concat(t)}}]),n}(),h=new l}}]);
//# sourceMappingURL=415.f8ff4742.chunk.js.map