(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{45:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(16),s=a.n(c),r=(a(45),a(7)),l=a(23),i=a(40),o=a(18),b=Object(l.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"USERS_LIST":case"SEARCH_LIST":return Object(o.a)(Object(o.a)({},e),{},{list:t.payload});case"CLEAR_DETAILS":case"USER_DETAILS":return Object(o.a)(Object(o.a)({},e),{},{details:t.payload});case"REGISTER-USER":case"UPDATE_USER":return Object(o.a)(Object(o.a)({},e),{},{list:[].concat(Object(i.a)(e.list),[t.payload])});case"DELETE-USER":return Object(o.a)(Object(o.a)({},e),{},{deleted:t.payload});default:return e}}}),d=a(39),j=a.n(d),u=Object(l.a)(j.a)(l.c)(b),p=a(12),m=a(6),O=a(5),x=a(14),h=a.n(x),f=a(19),g=a(20),v=a.n(g),N="/api/users",y=function(){var e=Object(f.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,e.prev=1,e.next=4,v.a.get("".concat(N,"/?name=").concat(t));case 4:a=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return e.abrupt("return",{type:"SEARCH_LIST",payload:a.data});case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.next=4,v.a.get("".concat(N));case 4:t=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return e.abrupt("return",{type:"USERS_LIST",payload:t.data});case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,console.log("here"),e.prev=2,e.next=5,v.a.get("".concat(N,"/").concat(t));case 5:a=e.sent,console.log(a.data+"getUserDetails"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:return e.abrupt("return",{type:"USER_DETAILS",payload:a.data});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in a=null,console.log("here"),t)console.log("User "+n+" value "+t[n]);return e.prev=3,e.next=6,v.a.post("".concat(N),t);case 6:a=e.sent,console.log(a.data+"register"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:return e.abrupt("return",{type:"REGISTER-USER",payload:a.data});case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(h.a.mark((function e(t,a){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c in n=null,console.log("here"),a)console.log("User "+c+" value "+a[c]);return e.prev=3,e.next=6,v.a.patch("".concat(N,"/").concat(t),a);case 6:n=e.sent,console.log(n.data+"register"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:return e.abrupt("return",{type:"UPDATE_USER",payload:n.data});case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,a){return e.apply(this,arguments)}}(),C=function(){var e=Object(f.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,console.log("here"),e.prev=2,e.next=5,v.a.delete("".concat(N,"/").concat(t));case 5:a=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:return e.abrupt("return",{type:"DELETE-USER",payload:a.data});case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),F=(a(17),a(1)),A=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],s=Object(r.b)();return Object(n.useEffect)((function(){s(E())}),[]),Object(F.jsx)("div",{className:"text-center",children:Object(F.jsx)("input",{value:a,type:"text",placeholder:"search by name",className:"form-control rounded-pill w-75 m-auto mb-4",onChange:function(e){c(e.target.value),0!==e.target.value.length&&e.target.value?s(y(e.target.value)):s(E())}})})},D=function(e){var t=e.info;return t?Object(F.jsxs)("div",{className:"alert border border-2 d-flex justify-content-between",children:[Object(F.jsx)("h4",{className:"align-self-center",children:t.name}),Object(F.jsx)(p.b,{className:"w-25",to:"/users/".concat(t._id),children:Object(F.jsx)("img",{className:"w-100 rounded-circle",src:t.img,alt:t.name})})]}):Object(F.jsx)("p",{children:"No Info prop available"})},U=function(){var e=Object(r.c)((function(e){return e.users.list}));return e?e.map((function(e){return Object(F.jsx)(D,{info:e},e._id)})):Object(F.jsx)("p",{children:"Loading Users..."})},R=function(){return Object(F.jsxs)("div",{className:"m-2",children:[Object(F.jsx)(A,{}),Object(F.jsx)(U,{})]})},T=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h1",{className:"not-found-header",children:"404"}),Object(F.jsxs)("p",{children:["Page is not found,",Object(F.jsx)(p.b,{to:"/",children:"go home"})]})]})},I=a(8),L=function(e){var t=e.match,a=Object(r.c)((function(e){return e.users.details})),c=Object(n.useState)(!1),s=Object(O.a)(c,2),l=s[0],i=s[1],o=Object(r.b)(),b=Object(m.f)().push;return Object(n.useEffect)((function(){o(S(t.params.id))}),[]),a?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(I.a,{show:l,children:[Object(F.jsx)(I.a.Header,{children:"Deleting User"}),Object(F.jsx)(I.a.Body,{children:Object(F.jsxs)("h1",{children:["Do You Want To Delete User ",a.name,"?"]})}),Object(F.jsxs)(I.a.Footer,{children:[Object(F.jsx)("button",{className:"btn btn-primary",onClick:function(){return b("/delete/".concat(a._id))},children:"Delete"}),Object(F.jsx)("button",{className:"btn btn-primary",onClick:function(){return i(!1)},children:"Cancel"})]})]}),Object(F.jsxs)("div",{className:"d-flex w-100 justify-content-around alert alert-secondary\r\n",children:[Object(F.jsxs)("div",{children:[Object(F.jsxs)("h1",{children:["Name: ",a.name]}),Object(F.jsxs)("h1",{children:["Age: ",a.age]}),Object(F.jsxs)("h1",{children:["Email: ",a.email]}),Object(F.jsx)("button",{className:"btn btn-danger mt-5",onClick:function(){return i(!0)},children:"Delete"}),Object(F.jsx)("button",{className:"btn btn-danger mx-3 mt-5",onClick:function(){return b("/update/".concat(a._id))},children:"Update"})]}),Object(F.jsx)("img",{className:"w-25",src:a.img,alt:a.img})]})]}):Object(F.jsx)(F.Fragment,{children:"No Data....."})},P=function(){var e=Object(m.f)().push,t=Object(n.useState)(""),a=Object(O.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(18),i=Object(O.a)(l,2),o=i[0],b=i[1],d=Object(n.useState)(""),j=Object(O.a)(d,2),u=j[0],p=j[1],x=Object(n.useState)(""),h=Object(O.a)(x,2),f=h[0],g=h[1],v=Object(n.useState)(""),N=Object(O.a)(v,2),y=N[0],E=N[1],S=Object(n.useState)(""),k=Object(O.a)(S,2),C=k[0],A=k[1],D=Object(n.useState)(""),U=Object(O.a)(D,2),R=U[0],T=U[1],L=Object(n.useState)(""),P=Object(O.a)(L,2),_=P[0],H=P[1],B=Object(n.useState)(!0),z=Object(O.a)(B,2),V=z[0],Z=z[1],$=Object(r.b)(),G=!0,J=!0,M=!0;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h1",{style:{color:"navy",textAlign:"center"},children:"Register Here"}),Object(F.jsxs)(I.a,{show:V,children:[Object(F.jsxs)(I.a.Header,{children:[" ",Object(F.jsx)("h1",{className:"d-block",children:"Register"})]}),Object(F.jsxs)(I.a.Body,{children:[Object(F.jsx)("p",{className:"text-danger",children:R}),Object(F.jsx)("form",{className:"mb-3",children:Object(F.jsxs)("div",{className:"input-group pmd-input-group pmd-input-group-icon mb-3",children:[Object(F.jsxs)("div",{className:"pmd-textfield pmd-textfield-floating-label w-100",children:[Object(F.jsx)("label",{htmlFor:"inputError1",children:"Name"}),Object(F.jsx)("input",{type:"text",className:"form-control","aria-describedby":"basic-addon3",value:c,onChange:function(e){e.target.value?e.target.value.length>20||e.target.value.length<3?(E("Name length must be between 3 and 20 characters"),G=!1):(E(""),G=!0):(E("Please Enter Employee Name"),G=!1),s(e.target.value)}}),Object(F.jsx)("p",{className:"text-danger",children:y}),Object(F.jsx)("span",{className:"pmd-textfield-focused"})]}),Object(F.jsxs)("div",{className:"pmd-textfield pmd-textfield-floating-label w-100",children:[Object(F.jsx)("label",{htmlFor:"inputError1",children:"Age"}),Object(F.jsx)("input",{type:"number",className:"form-control","aria-describedby":"basic-addon3",value:o,onChange:function(e){/^[0-9]{1,3}$/.test(e.target.value)?e.target.value>=13&&e.target.value<=140?(A("Age Must be between 13 and 140"),J=!1):J=!0:(A("you must Enter An Age"),J=!1),A(""),b(e.target.value)}}),Object(F.jsx)("p",{className:"text-danger",children:C}),Object(F.jsx)("span",{className:"pmd-textfield-focused"})]}),Object(F.jsxs)("div",{className:"pmd-textfield pmd-textfield-floating-label w-100",children:[Object(F.jsx)("label",{htmlFor:"inputError1",children:"Email"}),Object(F.jsx)("input",{type:"email",className:"form-control","aria-describedby":"basic-addon3",value:f,onChange:function(e){e.target.value?/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)?(M=!0,H("")):(H("Invalid email address"),M=!1):(H("Please Enter Email ID"),M=!1),g(e.target.value)}}),Object(F.jsx)("p",{className:"text-danger",children:_}),Object(F.jsx)("span",{className:"pmd-textfield-focused"})]}),Object(F.jsxs)("div",{className:"pmd-textfield pmd-textfield-floating-labe w-100",children:[Object(F.jsx)("label",{htmlFor:"inputError1",children:"Image"}),Object(F.jsx)("input",{type:"file",className:"form-control","aria-describedby":"basic-addon3",onChange:function(e){var t=e.target.files[0];p(t)}}),Object(F.jsx)("span",{className:"pmd-textfield-focused"})]})]})})]}),Object(F.jsxs)(I.a.Footer,{children:[Object(F.jsx)("button",{className:"btn btn-primary",onClick:function(){Z({isOpen:!1}),e("/")},children:"Cancel"}),Object(F.jsx)("button",{className:"btn btn-primary",onClick:function(){if(G&&J&&M){var t=new FormData;t.append("name",c),t.append("age",o),t.append("email",f),t.append("img",u),$(w(t)),Z({isOpen:!1}),e("/")}else T("Please Enter Valid Values To Proceed")},children:"Save"})]})]})]})},_=function(){var e=Object(m.f)().push;return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(F.jsxs)("div",{className:"container-fluid",children:[Object(F.jsx)(p.b,{className:"navbar-brand active",to:"/",children:"UsersHub"}),Object(F.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(F.jsx)("span",{className:"navbar-toggler-icon"})}),Object(F.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(F.jsx)("ul",{className:"navbar-nav",children:Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(p.b,{className:"nav-link active",to:"/",children:"Home"})})})}),Object(F.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",onClick:function(){return e("/register")},children:"Register"})]})})})},H=function(e){var t=e.match,a=Object(r.c)((function(e){return e.users.deleted})),c=Object(m.f)().push,s=Object(r.b)(),l=Object(n.useState)(""),i=Object(O.a)(l,2),o=i[0],b=i[1];return Object(n.useEffect)((function(){s(C(t.params.id)),b(a?"Deleted":"Not Deleted")}),[]),Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(I.a,{show:!0,children:[Object(F.jsx)(I.a.Header,{children:"Deleting User"}),Object(F.jsx)(I.a.Body,{children:Object(F.jsx)("h1",{children:o})}),Object(F.jsx)(I.a.Footer,{children:Object(F.jsx)("button",{className:"btn btn-primary",onClick:function(){c("/")},children:"Done"})})]})})},B=function(e){var t=e.match,a=Object(r.b)(),c=Object(r.c)((function(e){return e.users.details})),s=Object(m.f)().push,l=!0,i=!0,o=!0,b=Object(n.useState)(""),d=Object(O.a)(b,2),j=d[0],u=d[1],p=Object(n.useState)(""),x=Object(O.a)(p,2),h=x[0],f=x[1],g=Object(n.useState)(""),v=Object(O.a)(g,2),N=v[0],y=v[1],E=Object(n.useState)(""),w=Object(O.a)(E,2),C=w[0],A=w[1],D=Object(n.useState)(c.name),U=Object(O.a)(D,2),R=U[0],T=U[1],L=Object(n.useState)(c.age),P=Object(O.a)(L,2),_=P[0],H=P[1],B=Object(n.useState)(),z=Object(O.a)(B,2),V=z[0],Z=z[1],$=Object(n.useState)(c.email),G=Object(O.a)($,2),J=G[0],M=G[1],W=Object(n.useState)(!0),Y=Object(O.a)(W,2),q=Y[0],K=Y[1];Object(n.useEffect)((function(){console.log(t.params.id+"match"),a(S(t.params.id))}),[]);return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h1",{style:{color:"navy",textAlign:"center"},children:"Register Here"}),Object(F.jsxs)(I.a,{show:q,children:[Object(F.jsxs)(I.a.Header,{children:["Update User ",c.name]}),Object(F.jsxs)(I.a.Body,{children:[Object(F.jsx)("p",{className:"text-danger",children:N}),Object(F.jsx)("form",{className:"mb-3",children:Object(F.jsxs)("div",{className:"input-group pmd-input-group pmd-input-group-icon mb-3",children:[Object(F.jsxs)("div",{className:"pmd-textfield pmd-textfield-floating-label",style:{flex:"auto",display:"block"},children:[Object(F.jsx)("label",{htmlFor:"inputError1",children:"Name"}),Object(F.jsx)("input",{type:"text",className:"form-control","aria-describedby":"basic-addon3",value:R,onChange:function(e){e.target.value?e.target.value.length>20||e.target.value.length<3?(u("Name length must be between 3 and 20 characters"),l=!1):(u(""),l=!0):(u("Please Enter Employee Name"),l=!1),T(e.target.value)}}),Object(F.jsx)("p",{className:"text-danger",children:j}),Object(F.jsx)("span",{className:"pmd-textfield-focused"})]}),Object(F.jsxs)("div",{className:"pmd-textfield pmd-textfield-floating-label",style:{flex:"auto",display:"block"},children:[Object(F.jsx)("label",{htmlFor:"inputError1",children:"Age"}),Object(F.jsx)("input",{type:"number",className:"form-control","aria-describedby":"basic-addon3",value:_,onChange:function(e){/^[0-9]{1,3}$/.test(e.target.value)?e.target.value>=13&&e.target.value<=140?(f("Age Must be between 13 and 140"),i=!1):i=!0:(f("you must Enter An Age"),i=!1),f(""),H(e.target.value)}}),Object(F.jsx)("p",{className:"text-danger",children:h}),Object(F.jsx)("span",{className:"pmd-textfield-focused"})]}),Object(F.jsxs)("div",{className:"pmd-textfield pmd-textfield-floating-label",style:{flex:"auto",display:"block"},children:[Object(F.jsx)("label",{htmlFor:"inputError1",children:"Email"}),Object(F.jsx)("input",{type:"email",className:"form-control","aria-describedby":"basic-addon3",value:J,onChange:function(e){e.target.value?/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)?(o=!0,A("")):(A("Invalid email address"),o=!1):(A("Please Enter Email ID"),o=!1),M(e.target.value)}}),Object(F.jsx)("p",{className:"text-danger",children:C}),Object(F.jsx)("span",{className:"pmd-textfield-focused"})]}),Object(F.jsxs)("div",{className:"pmd-textfield pmd-textfield-floating-label",style:{flex:"auto",display:"block"},children:[Object(F.jsx)("label",{htmlFor:"inputError1",children:"Image"}),Object(F.jsx)("input",{type:"file",className:"form-control","aria-describedby":"basic-addon3",onChange:function(e){var t=e.target.files[0];Z(t)}}),Object(F.jsx)("span",{className:"pmd-textfield-focused"})]})]})})]}),Object(F.jsxs)(I.a.Footer,{children:[Object(F.jsx)("button",{className:"btn btn-primary",onClick:function(){K({isOpen:!1}),s("/")},children:"Cancel"}),Object(F.jsx)("button",{className:"btn btn-primary",onClick:function(){if(l&&i&&o){var e=new FormData;e.append("name",R),e.append("age",_),e.append("email",J),e.append("img",V),a(k(t.params.id,e)),K({isOpen:!1}),s("/")}else y("Please Enter Valid Values To Proceed")},children:"Save"})]})]})]})},z=function(){return Object(F.jsxs)(p.a,{basename:"/task-backend/build/",children:[Object(F.jsx)(_,{}),Object(F.jsx)("div",{className:"conatainer",children:Object(F.jsx)("div",{className:"row",children:Object(F.jsx)("div",{className:"col",children:Object(F.jsxs)(m.c,{children:[Object(F.jsx)(m.a,{exact:!0,path:"/",component:R}),Object(F.jsx)(m.a,{path:"/users/:id",component:L}),Object(F.jsx)(m.a,{path:"/register",component:P}),Object(F.jsx)(m.a,{path:"/delete/:id",component:H}),Object(F.jsx)(m.a,{path:"/update/:id",component:B}),Object(F.jsx)(m.a,{path:"*",component:T})]})})})})]})},V=function(){return Object(F.jsx)(r.a,{store:u,children:Object(F.jsx)(z,{})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};s.a.render(Object(F.jsx)(V,{}),document.getElementById("root")),Z()}},[[75,1,2]]]);
//# sourceMappingURL=main.6173e186.chunk.js.map