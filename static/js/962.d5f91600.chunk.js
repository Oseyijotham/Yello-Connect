"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[962],{4962:function(t,e,n){n.r(e),n.d(e,{Contacts:function(){return v},default:function(){return j}});var a=n(5075),o=n(487),r={phoneBook:"ContactForm_phoneBook__Krcs9",phoneBookContainer:"ContactForm_phoneBookContainer__zvme-",formTitle:"ContactForm_formTitle__N6O4g",formSection:"ContactForm_formSection__4wcn3",button:"ContactForm_button__eSwX9",buttonArea:"ContactForm_buttonArea__IAEoE",formLabel:"ContactForm_formLabel__TSwxK",formInput:"ContactForm_formInput__GszVU"},s=n(4420),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},i=n(184),l=function(t){var e=t.children,n=c(),l=c(),m=(0,s.v9)(o.Af),u=(0,s.I0)();return(0,i.jsxs)("div",{className:r.phoneBook,children:[(0,i.jsx)("h2",{className:r.formTitle,children:"Phonebook"}),(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.target[0].value;m.some((function(t){return t.name.trim().toLowerCase()===e.trim().toLowerCase()}))?alert("This name already exists"):(u((0,a.uK)({name:t.target[0].value,phone:t.target[1].value})),console.log({name:t.target[0].value,phone:t.target[1].value}),t.target.reset())},className:r.formSection,children:[(0,i.jsxs)("label",{className:r.loginLabel,children:[(0,i.jsx)("span",{className:r.formLabel,children:"Name:"}),(0,i.jsx)("input",{type:"text",placeholder:"Enter Name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,autoComplete:"off",id:n,className:r.formInput})]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("span",{className:r.formLabel,children:"Number:"}),(0,i.jsx)("input",{type:"tel",placeholder:"Enter Number",autoComplete:"off",name:"number",required:!0,id:l,className:r.formInput,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})]}),(0,i.jsx)("div",{className:r.buttonArea,children:(0,i.jsx)("button",{type:"submit",name:"button",className:r.button,onClick:function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3)},children:"Add Contact"})})]}),e]})},m="ContactList_contactsSection__3KZcT",u="ContactList_contactsTitle__gHlpa",d="ContactList_contactsList__7leRd",h="ContactList_contactsData__gZODb",f="ContactList_contactsItem__x8C9b",_="ContactList_contactsButton__6hBLW",p=function(t){var e=t.children,n=(0,s.v9)(o.Af),r=(0,s.I0)(),c=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3),r((0,a.GK)(t.target.name))},l=(0,s.v9)(o.YI);return(0,i.jsxs)("div",{className:m,children:[(0,i.jsx)("h3",{className:u,children:"Contacts"}),e,""===l&&0!==n.length&&(0,i.jsx)("ul",{className:d,children:n.map((function(t){return(0,i.jsxs)("li",{className:f,children:[(0,i.jsxs)("span",{className:h,children:[t.name,": ",t.phone]}),(0,i.jsx)("button",{type:"submit",className:_,name:t._id,onClick:c,children:"Delete"})]},t._id)}))})]})},x={formLabel:"Filter_formLabel__Ozoh5",formInput:"Filter_formInput__XNLZn",contactsList:"Filter_contactsList__78f6h",contactsData:"Filter_contactsData__q4ogS",contactsItem:"Filter_contactsItem__CHFiw"},b=n(458),C=function(){var t=c(),e=(0,s.v9)(o.Af),n=(0,s.v9)(o.YI),a=(0,s.I0)(),r=e.filter((function(t){return t.name.toLowerCase().includes(n.trim().toLowerCase())&&""!==n.trim()}));return(0,i.jsxs)("div",{className:x.contactList,children:[(0,i.jsxs)("label",{htmlFor:t,children:[(0,i.jsx)("span",{className:x.formLabel,children:"Find Contacts By Name:"}),(0,i.jsx)("input",{type:"text",placeholder:"Enter Name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,onChange:function(t){a((0,b.T)(t.target.value)),console.log(t.target.value)},id:t,autoComplete:"off",className:x.formInput})]}),""!==n&&0!==r.length&&(0,i.jsx)("ul",{className:x.contactsList,children:r.map((function(t){return(0,i.jsx)("li",{className:x.contactsItem,children:(0,i.jsxs)("span",{className:x.contactsData,children:[t.name,": ",t.phone]})},t._id)}))})]})},g=n(2791),N="Contacts_coverWrapper__X4gza",v=function(){var t=(0,s.I0)(),e=(0,s.v9)(o.xU),n=(0,s.v9)(o.zh);return(0,g.useEffect)((function(){t((0,a.yF)())}),[t]),(0,i.jsx)("div",{className:N,children:(0,i.jsxs)(l,{children:[e&&!n&&(0,i.jsx)("b",{children:"Please wait..."}),n&&(0,i.jsx)("b",{children:"There was an error"}),(0,i.jsx)(p,{children:(0,i.jsx)(C,{})})]})})},j=v},487:function(t,e,n){n.d(e,{Af:function(){return a},YI:function(){return o},xU:function(){return r},zh:function(){return s}});var a=function(t){return t.contacts.contacts.items},o=function(t){return t.filter},r=function(t){return t.contacts.contacts.isLoading},s=function(t){return t.contacts.contacts.error}}}]);
//# sourceMappingURL=962.d5f91600.chunk.js.map