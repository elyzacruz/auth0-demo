(this.webpackJsonpspa1=this.webpackJsonpspa1||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},36:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(17),s=c.n(r),a=(c(26),c(50)),i=c.p+"static/media/logo.6ce24c58.svg",o=(c(27),c(4)),j=c(1),l=c.p+"static/media/loading.330b7d99.svg",u=function(){return Object(j.jsx)("div",{className:"spinner",children:Object(j.jsx)("img",{src:l,alt:"Loading"})})},b=function(){var e=Object(o.b)().logout;return Object(j.jsx)("button",{onClick:function(){return e({returnTo:"http://localhost:3000"})},children:"Log Out"})},d=Object(o.c)((function(){var e=Object(o.b)(),t=e.user,c=e.isAuthenticated;return Object(j.jsx)(j.Fragment,{children:c&&Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:t.picture,alt:t.name}),Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("p",{children:t.email})]})})}),{onRedirecting:function(){return Object(j.jsx)(u,{})}}),h=(c(36),c(47)),p=c(48),O=c(49),x=function(){var e=Object(o.b)().isAuthenticated;return Object(j.jsx)(h.a,{color:"light",light:!0,expand:"md",children:Object(j.jsx)(p.a,{children:Object(j.jsxs)(O.a,{navbar:!0,children:[e&&Object(j.jsx)(b,{}),e&&Object(j.jsx)("button",{onClick:function(){window.location.href="".concat(window.location.origin,"/profile")},children:"Profile"}),e&&Object(j.jsx)("button",{onClick:function(){window.location.href="".concat(window.location.origin,"/callApi")},children:"Call API"})]})})})},f=c(13),m=c.n(f),g=c(18),v=c(15),w=Object(o.c)((function(){var e=Object(o.b)(),t=e.user,c=e.isAuthenticated,r=e.getAccessTokenSilently,s=Object(n.useState)(null),a=Object(v.a)(s,2),i=a[0],l=a[1],u=Object(n.useState)(null),b=Object(v.a)(u,2),d=b[0],h=b[1];return Object(n.useEffect)((function(){(function(){var e=Object(g.a)(m.a.mark((function e(){var c,n,s,a,i,o,j;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="whispir-tabs.au.auth0.com",e.prev=1,e.next=4,r({audience:"https://".concat(c,"/api/v2/"),scope:"read:current_user"});case 4:return n=e.sent,s="https://".concat(c,"/api/v2/users/").concat(t.sub),e.next=8,fetch(s,{headers:{Authorization:"Bearer ".concat(n)}});case 8:return a=e.sent,e.next=11,a.json();case 11:return i=e.sent,e.next=14,fetch("http://localhost:3060/userData",{headers:{Authorization:"Bearer ".concat(n)}});case 14:return o=e.sent,e.next=17,o.json();case 17:j=e.sent,l(i),h(j),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(1),console.log(e.t0.message);case 25:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(){return e.apply(this,arguments)}})()()}),[r,null===t||void 0===t?void 0:t.sub]),c&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("p",{children:t.email}),Object(j.jsx)("h3",{children:"User Metadata"}),i?Object(j.jsx)("pre",{children:JSON.stringify(i,null,2)}):"No user metadata defined",d?Object(j.jsx)("pre",{children:d.message}):"No api res"]})}),{onRedirecting:function(){return Object(j.jsx)(u,{})}}),A=c(6),k=Object(A.a)();var E=function(){var e=Object(o.b)().error;return e?(console.error("Error",e),Object(j.jsxs)("div",{children:["Oops... ",e.message]})):Object(j.jsx)(a.b,{history:k,children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(x,{}),Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(j.jsx)("p",{children:"SPA 2"}),Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{exact:!0,path:"/",component:d}),Object(j.jsx)(a.a,{path:"/profile",component:d}),Object(j.jsx)(a.a,{path:"/callApi",component:w})]})]})]})})};s.a.render(Object(j.jsx)(o.a,{domain:"whispir-tabs.au.auth0.com",clientId:"lgJOE63EZdBrzDBpMmqEGPpqGUFUqEIe",redirectUri:"".concat(window.location.origin),audience:"https://whispir-tabs.au.auth0.com/api/v2/",scope:"read:current_user",children:Object(j.jsx)(E,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.a4791b1b.chunk.js.map