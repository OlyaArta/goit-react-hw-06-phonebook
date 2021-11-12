(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={list:"Contact_list__1hdCz",button:"Contact_button__212vN"}},17:function(e,t,n){e.exports={label:"Filter_label__2mQLH",input:"Filter_input__2l1tD"}},22:function(e,t,n){e.exports={container:"Container_container__tVcUD"}},28:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(9),i=n.n(o),s=(n(28),n(3)),b=n(12),l=n(4),u=n(5),j=n(20),d=n.n(j),m=n(13),O=n(2),f=n(49),h=Object(l.b)("phonebook/add",(function(e,t){return{payload:{id:Object(f.a)(),name:e,number:t}}})),p=Object(l.b)("phonebook/changeFilter"),x=Object(l.b)("phonebook/delete"),_=Object(l.c)([],(a={},Object(m.a)(a,h,(function(e,t){var n=t.payload;return[].concat(Object(b.a)(e),[n])})),Object(m.a)(a,x,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),v=Object(l.c)("",Object(m.a)({},p,(function(e,t){return t.payload}))),g=Object(O.b)({items:_,filter:v}),C=n(21),k=n.n(C),N=[].concat(Object(b.a)(Object(l.d)({serializableCheck:{ignoredActions:[u.a,u.f,u.b,u.c,u.d,u.e]}})),[d.a]),y={key:"contacts",storage:k.a,blackList:["filter"]},F=Object(l.a)({reducer:{contacts:Object(u.g)(y,g)},middleware:N,devTools:!1}),w=Object(u.h)(F),A=n(22),z=n.n(A),D=n(1);var L=function(e){var t=e.children;return Object(D.jsx)("div",{className:z.a.container,children:t})},S=n(18),J=n(16),T=n.n(J),Z=function(e){return e.contacts.filter},q=function(e){return e.contacts.items},B=function(e){var t=Z(e),n=q(e),a=t.toLowerCase();return n.filter((function(e){return e.name.name.toLowerCase().includes(a)}))},H=n(6),K=n.n(H);var M=function(){var e=Object(s.c)(q),t=Object(s.b)(),n=Object(c.useState)(""),a=Object(S.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),b=Object(S.a)(i,2),l=b[0],u=b[1],j=T.a.generate(),d=T.a.generate(),m=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":u(a);break;default:return}},O=function(){o(""),u("")};return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),e.find((function(e){return e.name.name===r})))return alert("".concat(r," is alredy in contacts"));!function(e,n){t(h(e,n))}({name:r,number:l}),O()},className:K.a.form,children:[Object(D.jsx)("label",{htmlFor:j,className:K.a.label,children:"Name"}),Object(D.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:m,id:j,className:K.a.input}),Object(D.jsx)("label",{htmlFor:d,className:K.a.label,children:"Number"}),Object(D.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:m,id:d,className:K.a.input}),Object(D.jsx)("button",{type:"submit",className:K.a.btn,children:"Add contact"})]})})},Q=n(11),E=n.n(Q),I=function(e){var t=e.name,n=e.number,a=e.id,c=e.onDeleteContact;return Object(D.jsxs)("li",{children:[Object(D.jsxs)("span",{children:[t,": "]}),Object(D.jsx)("span",{children:n}),Object(D.jsx)("button",{type:"button",onClick:function(){return c(a)},className:E.a.button,children:"Delete"})]})};function P(){var e=Object(s.c)(B),t=Object(s.b)(),n=function(e){return t(x(e))};return Object(D.jsx)("ul",{className:E.a.list,children:e.map((function(e){var t=e.id,a=e.name;return Object(D.jsx)(I,{name:a.name,number:a.number,onDeleteContact:n,id:t},t)}))})}var U=n(17),V=n.n(U);var Y=function(){var e=Object(s.c)(Z),t=Object(s.b)();return Object(D.jsxs)("label",{className:V.a.label,children:["Find contacts by name",Object(D.jsx)("input",{type:"text",value:e,onChange:function(e){return t(p(e.currentTarget.value))},className:V.a.input})]})};var $=function(){return Object(D.jsxs)(L,{children:[Object(D.jsx)("h1",{children:"Phonebook"}),Object(D.jsx)(M,{}),Object(D.jsx)("h2",{children:"Contacts"}),Object(D.jsx)(Y,{}),Object(D.jsx)(P,{})]})},G=n(23);i.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(G.a,{loading:null,persistor:w,children:Object(D.jsx)(s.a,{store:F,children:Object(D.jsx)($,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={form:"Form_form__2YtLn",label:"Form_label__3stfK",input:"Form_input__1w1Kf",btn:"Form_btn__s1QHu"}}},[[47,1,2]]]);
//# sourceMappingURL=main.d84f03ac.chunk.js.map