(this.webpackJsonpspa1=this.webpackJsonpspa1||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(19),a=c.n(r),i=(c(27),c(4)),s=c.p+"static/media/logo.6ce24c58.svg",o=(c(28),c(13),c(1)),j=c(5),u=c.p+"static/media/loading.330b7d99.svg",l=function(){return Object(o.jsx)("div",{className:"spinner",children:Object(o.jsx)("img",{src:u,alt:"Loading"})})},b=function(){var e=Object(j.b)().logout;return Object(o.jsx)("button",{onClick:function(){return e({returnTo:window.location.origin})},children:"Log Out"})},d=(Object(j.c)((function(){var e=Object(j.b)(),t=e.user,c=e.isAuthenticated;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{children:"SPA 1"}),c&&Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:t.picture,alt:t.name}),Object(o.jsx)("h2",{children:t.name}),Object(o.jsx)("p",{children:t.email})]})]})}),{onRedirecting:function(){return Object(o.jsx)(l,{})}}),c(44),c(48)),h=c(49),O=c(50),p=function(){var e=Object(j.b)().loginWithRedirect;return Object(o.jsx)("button",{onClick:function(){return e()},children:"Log In"})},x=function(){var e=Object(j.b)().isAuthenticated;return Object(o.jsx)(d.a,{color:"light",light:!0,expand:"md",children:Object(o.jsx)(h.a,{children:Object(o.jsxs)(O.a,{navbar:!0,children:[e&&Object(o.jsx)(b,{}),e&&Object(o.jsx)("button",{onClick:function(){window.location.href="".concat(window.location.origin,"/profile")},children:"Profile"}),e&&Object(o.jsx)("button",{onClick:function(){window.location.href="".concat(window.location.origin,"/callApi")},children:"Call API"})]})})})},f=function(){return!Object(j.b)().isAuthenticated&&Object(o.jsx)(n.Fragment,{children:Object(o.jsx)(p,{})})},m=c(17),g=c.n(m),v=c(22),w=c(18),A=(Object(j.c)((function(){var e=Object(j.b)(),t=e.user,c=e.isAuthenticated,r=e.getAccessTokenSilently;alert("isAuthenticated: ",c);var a=Object(n.useState)(null),i=Object(w.a)(a,2),s=i[0],u=i[1],l=Object(n.useState)(null),b=Object(w.a)(l,2),d=b[0],h=b[1];return Object(n.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var c,n,a,i,s,o,j;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="whispir-tabs.au.auth0.com",e.prev=1,e.next=4,r({audience:"https://".concat(c,"/api/v2/"),scope:"read:current_user"});case 4:return n=e.sent,a="https://".concat(c,"/api/v2/users/").concat(t.sub),e.next=8,fetch(a,{headers:{Authorization:"Bearer ".concat(n)}});case 8:return i=e.sent,e.next=11,i.json();case 11:return s=e.sent,e.next=14,fetch("https://s1n5lju3i9.execute-api.ap-southeast-2.amazonaws.com/default/stablada-auth0-poc-lambda",{headers:{Authorization:"Bearer ".concat(n)}});case 14:return o=e.sent,e.next=17,o.json();case 17:j=e.sent,u(s),h(JSON.stringify(j)),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(1),console.log(e.t0.message);case 25:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(){return e.apply(this,arguments)}})()()}),[r,null===t||void 0===t?void 0:t.sub]),c&&Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:t.picture,alt:t.name}),Object(o.jsx)("h2",{children:t.name}),Object(o.jsx)("p",{children:t.email}),Object(o.jsx)("h3",{children:"User Metadata"}),s?Object(o.jsx)("pre",{children:JSON.stringify(s,null,2)}):"No user metadata defined",d?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("pre",{children:"API Response"}),Object(o.jsx)("pre",{children:d})]}):"No api res"]})}),{onRedirecting:function(){return Object(o.jsx)(l,{})}}),c(6)),k=Object(A.a)();var N=function(){var e=Object(j.b)().error;return e?(console.error("Error",e),Object(o.jsxs)("div",{children:["Oops... ",e.message]})):Object(o.jsx)(i.b,{history:k,children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(x,{}),Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(o.jsx)("p",{children:"SPA 1"}),Object(o.jsx)(i.c,{children:Object(o.jsx)(i.a,{exact:!0,path:"/",component:f})})]})]})})};a.a.render(Object(o.jsx)(j.a,{domain:"whispir-tabs.au.auth0.com",clientId:"rv7FbUY4fvJ3OkIKljPjappC0VbF4tbL",redirectUri:"".concat(window.location.origin),audience:"https://s1n5lju3i9.execute-api.ap-southeast-2.amazonaws.com/default/stablada-auth0-poc-lambda",scope:"read:current_user",children:Object(o.jsx)(N,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.f5c6dbf6.chunk.js.map