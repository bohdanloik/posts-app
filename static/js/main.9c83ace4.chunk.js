(this["webpackJsonpincora-app"]=this["webpackJsonpincora-app"]||[]).push([[0],{13:function(e,t,c){e.exports={backdrop:"Modal_backdrop__3FAPo",modal:"Modal_modal__P3_V5",form:"Modal_form__10UQC",buttonWraper:"Modal_buttonWraper__K3tvR",button:"Modal_button__2O7k8",textarea:"Modal_textarea__16lpD"}},14:function(e,t,c){e.exports={wrapper:"SinglePost_wrapper__1Vj0v",commentWrapper:"SinglePost_commentWrapper__LJOns",tip:"SinglePost_tip__3AXem",dialogbox:"SinglePost_dialogbox__1aeJ0",body:"SinglePost_body__31zcG",message:"SinglePost_message__1Xrmx"}},34:function(e,t,c){e.exports={button:"Button_button__2lgkF"}},35:function(e,t,c){e.exports={table:"Table_table__3hEsh"}},44:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var n=c(32),r=c.n(n),s=(c(44),c(0)),a=c.n(s),o=c(2),i=c(9),j=c(7),d=c(11),b=c(5),l=c.n(b),u=c(12),O=c.n(u),p={SET_USERS:"SET_USERS",SET_POSTS:"SET_POSTS",SET_POST:"SET_POST",SET_COMMENTS:"SET_COMMENTS"},h=function(e){return{type:p.SET_USERS,payload:e}},x=function(e){return{type:p.SET_POSTS,payload:e}},m=function(e){return{type:p.SET_POST,payload:e}},f=function(e){return{type:p.SET_COMMENTS,payload:e}},_="https://jsonplaceholder.typicode.com/",v=c(34),S=c.n(v),g=c(1),E=function(e){return Object(g.jsx)("span",{onClick:e.onClick,className:S.a.button,children:e.children})},T=c(35),y=c.n(T),k=function(e){return Object(g.jsx)("table",{className:y.a.table,children:e.children})},N=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.usersReducer.users}));return Object(s.useEffect)((function(){e(function(){var e=Object(d.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(_,"users"));case 2:c=e.sent,t(h(c.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(g.jsxs)(k,{children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Name"}),Object(g.jsx)("th",{children:"Email"}),Object(g.jsx)("th",{children:"Username"}),Object(g.jsx)("th",{children:"Website"}),Object(g.jsx)("th",{})]})}),Object(g.jsx)("tbody",{children:t.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.name}),Object(g.jsx)("td",{children:e.email}),Object(g.jsx)("td",{children:e.username}),Object(g.jsx)("td",{children:e.website}),Object(g.jsx)("td",{children:Object(g.jsx)(j.b,{to:"/user-posts/".concat(e.id),className:"open-posts",children:Object(g.jsx)(E,{children:"Open"})})})]},e.id)}))})]})},P=function(){var e=Object(o.e)(),t=Object(i.b)(),c=Object(i.c)((function(e){return e.postsReducer.posts})),n=Object(o.g)().id;return Object(s.useEffect)((function(){var e;t((e=n,function(){var t=Object(d.a)(l.a.mark((function t(c){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("".concat(_,"posts?userId=").concat(e));case 2:n=t.sent,c(x(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[]),Object(g.jsx)(a.a.Fragment,{children:Object(g.jsxs)(k,{children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Posts Title"}),Object(g.jsx)("th",{}),Object(g.jsx)(j.b,{to:"/modal",state:{backgroundLocation:e},children:Object(g.jsx)(E,{children:"Add post"})})]})}),Object(g.jsx)("tbody",{children:c.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.title}),Object(g.jsx)("td",{children:Object(g.jsx)(j.b,{to:"/posts/".concat(e.id),children:Object(g.jsx)(E,{children:"Open"})})})]},e.id)}))})]})})},w=function(){return Object(g.jsx)("header",{children:Object(g.jsx)(j.b,{to:"/",children:Object(g.jsx)(E,{children:"Users List"})})})},M=c(10),R=c(13),C=c.n(R),W=function(e){var t=Object(o.e)().state,c=t.postTitle,n=t.postBody,r=Object(s.useState)(""),a=Object(M.a)(r,2),i=a[0],j=a[1],d=Object(s.useState)(""),b=Object(M.a)(d,2),l=b[0],u=b[1];c&&!i&&(j(c),u(n));var O=Object(o.f)();function p(){O(-1)}return Object(g.jsx)("div",{className:C.a.backdrop,children:Object(g.jsx)("div",{className:C.a.modal,children:Object(g.jsxs)("form",{className:C.a.form,onSubmit:function(e){e.preventDefault()},children:[Object(g.jsx)("label",{for:"title",children:"Title"}),Object(g.jsx)("input",{id:"title",type:"text",onChange:function(e){j(e.target.value)},value:i}),Object(g.jsx)("label",{for:"description",children:"Description"}),Object(g.jsx)("textarea",{id:"description",className:C.a.textarea,rows:"7",value:l,onChange:function(e){u(e.target.value)}}),Object(g.jsxs)("div",{className:C.a.buttonWraper,children:[Object(g.jsx)("button",{className:C.a.button,type:"submit",onClick:p,children:"SAVE"}),Object(g.jsx)("button",{className:C.a.button,onClick:p,children:"CLOSE"})]})]})})})},L=c(14),U=c.n(L),D=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.commentsReducer.comments})),c=Object(i.c)((function(e){return e.postsReducer.post})),n=c.title,r=c.body,a=c.userId,b=Object(o.g)().id;Object(s.useEffect)((function(){var t;e((t=b,function(){var e=Object(d.a)(l.a.mark((function e(c){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(_,"comments?postId=").concat(t));case 2:n=e.sent,c(f(n.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[]),Object(s.useEffect)((function(){var t;e((t=b,function(){var e=Object(d.a)(l.a.mark((function e(c){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(_,"posts/").concat(t));case 2:n=e.sent,c(m(n.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[]);var u=Object(o.e)();return Object(g.jsxs)("div",{className:U.a.wrapper,children:[Object(g.jsx)("h2",{children:n}),Object(g.jsx)("p",{children:r}),Object(g.jsx)(j.b,{to:"/modal",state:{backgroundLocation:u,postTitle:n,postBody:r},children:Object(g.jsx)(E,{children:"Edit Post"})}),Object(g.jsx)(j.b,{to:"/user-posts/".concat(a),children:Object(g.jsx)(E,{children:"Delete"})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"COMMENTS"}),Object(g.jsx)("div",{className:U.a.commentWrapper,children:t.map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)("div",{class:U.a.dialogbox,children:Object(g.jsxs)("div",{class:U.a.body,children:[Object(g.jsx)("span",{class:U.a.tip}),Object(g.jsxs)("div",{class:U.a.message,children:[Object(g.jsx)("h4",{children:"".concat(e.name," from ").concat(e.email)}),Object(g.jsx)("span",{children:e.body})]})]})})},e.id)}))})]})]})},A=function(){var e=Object(o.e)(),t=e.state;return Object(g.jsxs)(a.a.Fragment,{children:[Object(g.jsx)(w,{}),Object(g.jsxs)(o.c,{location:(null===t||void 0===t?void 0:t.backgroundLocation)||e,children:[Object(g.jsx)(o.a,{exact:!0,path:"/",element:Object(g.jsx)(N,{})}),Object(g.jsx)(o.a,{path:"/user-posts/:id",element:Object(g.jsx)(P,{})}),Object(g.jsx)(o.a,{exact:!0,path:"/posts/:id",element:Object(g.jsx)(D,{})}),Object(g.jsx)(o.a,{path:"/modal",element:Object(g.jsx)(W,{})})]}),(null===t||void 0===t?void 0:t.backgroundLocation)&&Object(g.jsx)(o.c,{children:Object(g.jsx)(o.a,{path:"/modal",element:Object(g.jsx)(W,{})})})]})},B=c(15),F=c(36),I=c(37),J=c(8),V={users:[]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;return t.type===p.SET_USERS?Object(J.a)(Object(J.a)({},e),{},{users:t.payload}):e},z={posts:[],post:{}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.SET_POSTS:return Object(J.a)(Object(J.a)({},e),{},{posts:t.payload});case p.SET_POST:return Object(J.a)(Object(J.a)({},e),{},{post:t.payload});default:return e}},K={comments:[]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;return t.type===p.SET_COMMENTS?Object(J.a)(Object(J.a)({},e),{},{comments:t.payload}):e},q=Object(B.combineReducers)({usersReducer:X,postsReducer:G,commentsReducer:Q}),H=Object(B.createStore)(q,Object(F.composeWithDevTools)(Object(B.applyMiddleware)(I.a)));r.a.createRoot(document.getElementById("root")).render(Object(g.jsx)(i.a,{store:H,children:Object(g.jsx)(j.a,{children:Object(g.jsx)(A,{})})}))}},[[67,1,2]]]);
//# sourceMappingURL=main.9c83ace4.chunk.js.map