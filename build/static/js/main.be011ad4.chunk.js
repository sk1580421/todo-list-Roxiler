(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{26:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(6),i=c.n(r),o=(c(26),c(4)),a=c.n(o),l=c(9),j=c(3),d=(c(28),c(1));var u=function(e){var t=e.lists,c=e.info,n=t[0]&&Object.keys(t[0]);return console.log(n),Object(d.jsxs)("div",{className:"todolist",children:[Object(d.jsxs)("div",{className:"todolistheader",children:[Object(d.jsx)("h3",{children:"ToDo ID"}),Object(d.jsx)("h3",{children:"Title"}),Object(d.jsx)("h3",{children:"Status"}),Object(d.jsx)("h3",{children:"Action"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"todolistrows",children:Object(d.jsx)("table",{cellPadding:10,cellSpacing:10,children:Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{children:[n.slice(1,n.length-1).map((function(t){return Object(d.jsx)("td",{children:e[t]})})),e.completed?"complete":"Incomplete",Object(d.jsx)("button",{onClick:function(){return c([e.userId,e.title,e.id])},children:"View User"})]})}))})})})]})};c(30);var h=function(e){var t=e.detail,c=e.title,n=e.todoid;return Object(d.jsxs)("div",{className:"userdetails",children:[Object(d.jsx)("h1",{children:"User Detail : "}),Object(d.jsxs)("div",{className:"userinfo",children:["`",Object(d.jsxs)("h2",{children:[" Todo ID : : ",n," "]}),"  `",Object(d.jsx)("hr",{}),"`",Object(d.jsxs)("h2",{children:["Todo Title : :  ",c]}),"  `",Object(d.jsx)("hr",{}),"`",Object(d.jsxs)("h2",{children:["User ID : : ",t.id," "]}),"`",Object(d.jsx)("hr",{}),"`",Object(d.jsxs)("h2",{children:["User Name : : ",t.name]}),"  `",Object(d.jsx)("hr",{}),"`",Object(d.jsxs)("h2",{children:["Email : : ",t.email]}),"  `"]})]})},b=(c(31),c(11)),O=c.n(b);var x=function e(){var t=Object(n.useState)(""),c=Object(j.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)([]),o=Object(j.a)(i,2),b=o[0],x=o[1],f=Object(n.useState)({}),p=Object(j.a)(f,2),v=p[0],m=p[1],g=Object(n.useState)([]),w=Object(j.a)(g,2),S=w[0],y=w[1],N=Object(n.useState)([]),k=Object(j.a)(N,2),D=k[0],I=k[1],T=Object(n.useState)([]),C=Object(j.a)(T,2),E=C[0],U=C[1],L=function(){var e=Object(l.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/todos");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c),x(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){L()}),[e]);var J,z=function(){var e=Object(l.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c),U(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){z()}),[]),Object(d.jsxs)("div",{className:"whole",children:[Object(d.jsx)("h2",{children:"ToDos"}),Object(d.jsxs)("div",{className:"input",children:[Object(d.jsx)(O.a,{fontSize:"large",style:{color:"white"}}),Object(d.jsx)("input",{type:"text",placeholder:"Search...",value:s,onChange:function(e){return r(e.target.value)}})]}),Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(u,{lists:(J=b,J.filter((function(e){return e.title.toLowerCase().indexOf(s)>-1||e.id.toString().toLowerCase().indexOf(s)>-1||e.completed.toString().toLowerCase().indexOf(s)>-1}))),info:function(e){var t=Object(j.a)(e,3),c=t[0],n=t[1],s=t[2];I(n),y(s),E.map((function(e){e.id===c&&m(e)}))}}),Object(d.jsx)(h,{detail:v,title:D,todoid:S})]})]})};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.be011ad4.chunk.js.map