"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[149,216],{6:function(e,t,n){n.d(t,{Z:function(){return l}});var r,u=n(689),i=n(168),a=n(686),c=n(87),o=(0,a.Z)(c.rU)(r||(r=(0,i.Z)(["\n  display: block;\n"]))),s=n(184),f=function(e){var t=e.title,n=e.id,r=(0,u.TH)();return(0,s.jsx)(o,{to:"/movies/".concat(n),state:{from:r},children:t})},l=function(e){var t=e.movies;return(0,s.jsx)("ul",{children:t.map((function(e){var t=e.title,n=e.id;return(0,s.jsx)(f,{title:t,id:n},n)}))})}},216:function(e,t,n){n.r(t);var r=n(87),u=n(821),i=n(184);t.default=function(e){var t=e.error;return t&&u.v.failure(t.message),u.v.failure("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443"),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.rU,{to:"/",children:"Go back"}),(0,i.jsx)("h2",{children:"\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})}},149:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),u=n(439),i=n(687),a=n.n(i),c=n(791),o=n(87),s=n(484),f=n(821),l=n(6),p=n(184),v=function(e){var t,n=e.onSubmit,r=(0,o.lr)(),i=(0,u.Z)(r,2),a=i[0],c=i[1],s=null!==(t=a.get("query"))&&void 0!==t?t:"";return(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==s.trim()?n(s.toLowerCase()):f.v.warning("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0443")},children:[(0,p.jsx)("input",{type:"text",name:"movie",autoFocus:!0,placeholder:"Search movies",autoComplete:"on",value:s,onChange:function(e){var t=e.target.value;c(""!==t?{query:t}:{})}}),(0,p.jsx)("button",{type:"submit",children:"Search"})]})},h=n(216),d=function(){var e,t=(0,c.useState)(""),n=(0,u.Z)(t,2),i=n[0],d=n[1],m=(0,c.useState)([]),Z=(0,u.Z)(m,2),g=Z[0],y=Z[1],x=(0,o.lr)(),w=(0,u.Z)(x,1)[0],b=(0,c.useRef)(null!==(e=w.get("query"))&&void 0!==e?e:"");return(0,c.useEffect)((function(){d(b.current)}),[]),(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.A.getSearchMovie(i);case 3:if(t=e.sent,0!==(n=t.data.results).length){e.next=9;break}return f.v.failure("\u041f\u043e \u0432\u0430\u0448\u043e\u043c\u0443 \u0437\u0430\u043f\u0438\u0442\u0443 \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"),y([]),e.abrupt("return");case 9:y(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),h.default,e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}""!==i&&function(){e.apply(this,arguments)}()}),[i]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v,{onSubmit:d}),(0,p.jsx)(l.Z,{movies:g})]})}},821:function(e,t,n){n.d(t,{v:function(){return i}});var r=n(919),u=n.n(r),i={success:function(e){u().Notify.success(e)},failure:function(e){u().Notify.failure(e)},warning:function(e){u().Notify.warning(e)}}},484:function(e,t,n){n.d(t,{A:function(){return v}});var r=n(861),u=n(671),i=n(466),a=n(274),c=n(359),o=n(687),s=n.n(o),f=n(243);f.Z.defaults.baseURL="https://api.themoviedb.org/3",f.Z.defaults.timeout=1e3;var l=(0,c.Z)("AUTH_KEY"),p=function(){function e(){(0,u.Z)(this,e),Object.defineProperty(this,l,{writable:!0,value:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmE2OTViZjhjZDk3YzJlZjFjMmE4YTIwN2E1MDc5MSIsInN1YiI6IjY0NzI1YzdiYmUyZDQ5MDBhN2Q1ZDBmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lPU0wQ1y9n834eQ_fI0wPgzW-vuaEfLFb91z2AfAWd0"}),this.options={method:"GET",headers:{accept:"application/json",Authorization:(0,a.Z)(this,l)[l]},params:{language:"en-US"}}}return(0,i.Z)(e,[{key:"getTrendingMovie",value:function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("/trending/movie/day",this.options);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSearchMovie",value:function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("/search/movie?query=".concat(t,"&include_adult=false&page=1"),this.options);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("/movie/".concat(t,"}"),this.options);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieCredits",value:function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("/movie/".concat(t,"/credits"),this.options);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("/movie/".concat(t,"/reviews?page=1"),this.options);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),v=new p}}]);
//# sourceMappingURL=149.38b5c130.chunk.js.map