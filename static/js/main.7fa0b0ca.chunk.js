(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={label:"Filter_label__2mQLH",input:"Filter_input__2l1tD"}},12:function(e,t,n){e.exports={container:"Container_container__tVcUD"}},18:function(e,t,n){},2:function(e,t,n){e.exports={form:"Form_form__2YtLn",label:"Form_label__3stfK",input:"Form_input__1w1Kf",btn:"Form_btn__s1QHu"}},28:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=(n(18),n(13)),s=n(3),u=n(30),l=n(12),b=n.n(l),j=n(0);var m=function(e){var t=e.children;return Object(j.jsx)("div",{className:b.a.container,children:t})},d=n(9),f=n.n(d),h=n(2),O=n.n(h);var p=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),l=u[0],b=u[1],m=f.a.generate(),d=f.a.generate(),h=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":b(a);break;default:return}},p=function(){o(""),b("")};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:r,number:l}),p()},className:O.a.form,children:[Object(j.jsx)("label",{htmlFor:m,className:O.a.label,children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:h,id:m,className:O.a.input}),Object(j.jsx)("label",{htmlFor:d,className:O.a.label,children:"Number"}),Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:h,id:d,className:O.a.input}),Object(j.jsx)("button",{type:"submit",className:O.a.btn,children:"Add contact"})]})})},x=n(7),v=n.n(x),_=function(e){var t=e.name,n=e.number,a=e.id,c=e.onDeleteContact;return Object(j.jsxs)("li",{children:[Object(j.jsxs)("span",{children:[t,": "]}),Object(j.jsx)("span",{children:n}),Object(j.jsx)("button",{type:"button",onClick:function(){return c(a)},className:v.a.button,children:"Delete"})]})},C=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(j.jsx)("ul",{className:v.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(j.jsx)(_,{name:a,number:c,onDeleteContact:n,id:t},t)}))})},g=n(10),N=n.n(g);var w=function(e){var t=e.value,n=e.onChange;return Object(j.jsxs)("label",{className:N.a.label,children:["Find contacts by name",Object(j.jsx)("input",{type:"text",value:t,onChange:n,className:N.a.input})]})};var S=function(){var e=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:""})),t=Object(s.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var r=Object(a.useState)(""),o=Object(s.a)(r,2),l=o[0],b=o[1],d=function(){var e=l.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(j.jsxs)(m,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{onSubmit:function(e){var t=e.name,a=e.number,r={id:Object(u.a)(),name:t,number:a};if(n.some((function(e){return e.name===t})))return alert("".concat(t," is already in contacts!"));c((function(e){return[r].concat(Object(i.a)(n))}))}}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(w,{value:l,onChange:function(e){b(e.currentTarget.value)}}),Object(j.jsx)(C,{contacts:d,onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={list:"Contact_list__1hdCz",button:"Contact_button__212vN"}}},[[28,1,2]]]);
//# sourceMappingURL=main.7fa0b0ca.chunk.js.map