(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a.n(n),r=a(6),s=a(3),o=(a(11),a(1)),c=a(5),l=a.n(c),d=(a(12),a(0)),u=function(e){var t=e.user,a=t.email,n=t.name;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},m=(a(14),function(e){var t=e.todo,a=t.title,n=t.user,i=t.completed,r=t.id;return Object(d.jsxs)("article",{"data-id":r,className:l()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:a}),n?Object(d.jsx)(u,{user:n}):"no user"]})}),j=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(m,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];var b=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:(t=e.userId,h.find((function(e){return e.id===t}))||null)});var t})),f=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault()},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("input",{type:"text","data-cy":"titleInput",value:a,onChange:function(e){n(e.target.value)},placeholder:"Enter a title"}),Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("select",{"data-cy":"userSelect",children:Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"})}),Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(j,{todos:b})]})};i.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.beac58a8.chunk.js.map