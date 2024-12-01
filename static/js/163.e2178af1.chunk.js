"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[163],{7163:function(t,e,a){a.r(e),a.d(e,{Contacts:function(){return Z},default:function(){return D}});var n=a(4942),s=a(9439),o=a(3433),i=a(5075),c=a(487),r={phoneBook:"ContactForm_phoneBook__Krcs9",phoneBookContainer:"ContactForm_phoneBookContainer__zvme-",formTitle:"ContactForm_formTitle__N6O4g",formSection:"ContactForm_formSection__4wcn3",button:"ContactForm_button__eSwX9",buttonArea:"ContactForm_buttonArea__IAEoE",formLabel:"ContactForm_formLabel__TSwxK",formInput:"ContactForm_formInput__GszVU"},l=a(4420),d=a(5984),u=a(184),m=function(t){var e=t.children,a=(0,d.x0)(),n=(0,d.x0)(),s=(0,l.v9)(c.Af),m=(0,l.I0)();return(0,u.jsxs)("div",{className:r.phoneBook,children:[(0,u.jsx)("h2",{className:r.formTitle,children:"Phonebook"}),(0,u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.target[0].value;s.some((function(t){return t.name.trim().toLowerCase()===e.trim().toLowerCase()}))?alert("This name already exists"):""!==e.trim()?(m((0,i.uK)({name:t.target[0].value,phone:t.target[1].value})),t.target.reset()):alert("Empty spaces are not allowed")},className:r.formSection,children:[(0,u.jsxs)("label",{className:r.loginLabel,children:[(0,u.jsx)("span",{className:r.formLabel,children:"Name:"}),(0,u.jsx)("input",{type:"text",placeholder:"Enter Name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,autoComplete:"off",id:a,className:r.formInput,onChange:function(t){var e,a=t.target.value,n=!1;a.length>15&&((e=(0,o.Z)(a)).pop(),t.target.value=e.join(""),n=!0),!0===n&&alert("Maximum Charater limit is 15")}})]}),(0,u.jsxs)("label",{children:[(0,u.jsx)("span",{className:r.formLabel,children:"Number:"}),(0,u.jsx)("input",{type:"tel",placeholder:"Enter Number",autoComplete:"off",name:"number",required:!0,id:n,className:r.formInput,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})]}),(0,u.jsx)("div",{className:r.buttonArea,children:(0,u.jsx)("button",{type:"submit",name:"button",className:r.button,onClick:function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3)},children:"Add Contact"})})]}),e]})},h=a(2791),p="ContactList_contactsSection__3KZcT",_="ContactList_contactsTitle__gHlpa",x="ContactList_contactsList__7leRd",f="ContactList_contactsData__gZODb",g="ContactList_contactsPhone__qIcDs",b="ContactList_contactsItem__x8C9b",C="ContactList_contactsButtonArea__6jkW1",N="ContactList_contactsButton__6hBLW",j="ContactList_navigationArea__nXhaT",v="ContactList_navigationButton__ZT5QF",I=a(7694),y=a.n(I),S=function(t){var e=t.children,a=(0,l.v9)(c.Af),n=(0,l.v9)(c.kL),o=(0,l.v9)(c.WS),r=(0,l.I0)(),d=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3),r((0,i.GK)(t.target.name))},m=(0,l.v9)(c.YI),I=function(t){if(t.target.getAttribute("data-id")){var e=t.currentTarget.getAttribute("data-id");r((0,i.he)(e)),r((0,i.h7)())}},S=(0,h.useState)(0),w=(0,s.Z)(S,2),k=w[0],L=w[1],A=(0,h.useState)(4),T=(0,s.Z)(A,2),B=T[0],F=T[1],Z=function(t){if(t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500),""===m&&(L(k+4),F(B+4)),""!==m){console.log("OK");var e=n,a=o;r((0,i._w)(e)),r((0,i.ag)(a))}},D=function(t){if(t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500),""===m&&(L(k-4),F(B-4)),""!==m){var e=n,a=o;r((0,i.oQ)(e)),r((0,i.M3)(a))}},E=a.filter((function(t){return t.name.toLowerCase().includes(m.trim().toLowerCase())&&""!==m.trim()}));return(0,u.jsxs)("div",{className:p,children:[(0,u.jsx)("h3",{className:_,children:"Contacts"}),e,""===m&&0!==a.length&&(0,u.jsx)("ul",{className:x,children:a.map((function(t){var e=a.indexOf(t);if(e>=k&&e<B)return(0,u.jsxs)("li",{"data-id":t._id,className:b,onClick:I,children:[(0,u.jsxs)("span",{className:f,"data-id":t._id,children:[t.name,":"," ",(0,u.jsx)("span",{className:g,"data-id":t._id,children:t.phone})]}),(0,u.jsxs)("span",{className:C,children:[(0,u.jsx)("button",{className:N,name:t._id,onClick:function(e){navigator.clipboard.writeText(t.phone),y().Notify.success("Copied"),e.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){e.target.style.boxShadow="none"}),1e3)},children:"Copy"}),(0,u.jsx)("button",{type:"submit",className:N,name:t._id,onClick:d,children:"Delete"})]})]},t._id)}))}),""===m&&(0,u.jsxs)("div",{className:j,children:[0!==k&&(0,u.jsx)("button",{className:v,onClick:D,children:"Prev"}),!(B>a.length)&&B!==a.length&&(0,u.jsx)("button",{className:v,onClick:Z,children:"Forward"})]}),""!==m&&(0,u.jsxs)("div",{className:j,children:[0!==o&&(0,u.jsx)("button",{className:v,onClick:D,children:"Prev"}),!(n>E.length)&&n!==E.length&&(0,u.jsx)("button",{className:v,onClick:Z,children:"Forward"})]})]})},w={formLabel:"Filter_formLabel__Ozoh5",formInput:"Filter_formInput__XNLZn",contactsList:"Filter_contactsList__78f6h",contactsData:"Filter_contactsData__q4ogS",contactsItem:"Filter_contactsItem__CHFiw",contactsPhone:"Filter_contactsPhone__hxyN-",contactsButtonArea:"Filter_contactsButtonArea__0a5PO",contactsButton:"Filter_contactsButton__7e+W-"},k=a(458),L=function(){var t=(0,d.x0)(),e=(0,l.v9)(c.Af),a=(0,l.v9)(c.kL),n=(0,l.v9)(c.WS),s=(0,l.v9)(c.YI),o=(0,l.I0)(),r=e.filter((function(t){return t.name.toLowerCase().includes(s.trim().toLowerCase())&&""!==s.trim()})),m=function(t){if(t.target.getAttribute("data-id")){var e=t.currentTarget.getAttribute("data-id");o((0,i.he)(e)),o((0,i.h7)())}},h=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3),o((0,i.GK)(t.target.name))};return(0,u.jsxs)("div",{className:w.contactList,children:[(0,u.jsxs)("label",{htmlFor:t,children:[(0,u.jsx)("span",{className:w.formLabel,children:"Find Contacts By Name:"}),(0,u.jsx)("input",{type:"text",placeholder:"Enter Name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,onChange:function(t){o((0,k.T)(t.target.value)),console.log(t.target.value)},id:t,autoComplete:"off",className:w.formInput})]}),""!==s&&0!==r.length&&(0,u.jsx)("ul",{className:w.contactsList,children:r.map((function(t){var e=r.indexOf(t);if(e>=n&&e<a)return(0,u.jsxs)("li",{"data-id":t._id,className:w.contactsItem,onClick:m,children:[(0,u.jsxs)("span",{className:w.contactsData,"data-id":t._id,children:[t.name,":"," ",(0,u.jsx)("span",{className:w.contactsPhone,"data-id":t._id,children:t.phone})]}),(0,u.jsxs)("span",{className:w.contactsButtonArea,children:[(0,u.jsx)("button",{className:w.contactsButton,name:t._id,onClick:function(){return navigator.clipboard.writeText(t.phone)},children:"Copy"}),(0,u.jsx)("button",{type:"submit",className:w.contactsButton,name:t._id,onClick:h,children:"Delete"})]})]},t._id)}))})]})},A=a(3733),T={coverWrapper:"Contacts_coverWrapper__X4gza",selected:"Contacts_selected__JPpLk",contactsDetailsHide:"Contacts_contactsDetailsHide__EAxL5",contactsDetailsShow:"Contacts_contactsDetailsShow__GNtTf",closeModal:"Contacts_closeModal__mVT9L",contactsDetailsArea:"Contacts_contactsDetailsArea__qByv6",contactImage:"Contacts_contactImage__9S+4-",detailsSection:"Contacts_detailsSection__-isHv",detailsImageWrapper:"Contacts_detailsImageWrapper__4e94u",detailsImage:"Contacts_detailsImage__Fv6gk",detailsImageButton:"Contacts_detailsImageButton__R1iMX",detailsImageInput:"Contacts_detailsImageInput__pywld",detailsSectionTitle:"Contacts_detailsSectionTitle__zASfN",detailsWrapper:"Contacts_detailsWrapper__C50Aa",detailsItem:"Contacts_detailsItem__DEXoV",detailsCover:"Contacts_detailsCover__lqSnp",detailsInfo:"Contacts_detailsInfo__HEN35",details:"Contacts_details__xkbEz",detailsVal:"Contacts_detailsVal__AIPnW",detailsValPhone:"Contacts_detailsValPhone__28REO",detailsValInput:"Contacts_detailsValInput__XHX6i",detailsValInputPhone:"Contacts_detailsValInputPhone__Z59HF",backDrop:"Contacts_backDrop__of3D3",loader:"Contacts_loader__jgaE8",detailButton:"Contacts_detailButton__+1M8g",buttonWrapper:"Contacts_buttonWrapper__u4A+7",detailsEditClose:"Contacts_detailsEditClose__3PDcl"};var B=a.p+"static/media/icons.77c8d2ef0bd65aab65a1e4f05688514c.svg",F=a(4137),Z=function(){var t,e,a=(0,h.useState)(!1),o=(0,s.Z)(a,2),r=o[0],d=o[1],p=(0,h.useState)(""),_=(0,s.Z)(p,2),x=_[0],f=_[1],g=(0,h.useState)(!1),b=(0,s.Z)(g,2),C=b[0],N=b[1],j=(0,h.useState)(""),v=(0,s.Z)(j,2),I=v[0],w=v[1],k=(0,h.useState)(!1),Z=(0,s.Z)(k,2),D=Z[0],E=Z[1],P=(0,h.useState)(""),W=(0,s.Z)(P,2),V=W[0],q=W[1],z=(0,l.I0)(),M=(0,l.v9)(c.xU),H=(0,l.v9)(c.Qc),O=(0,l.v9)(c.D1),U=(0,l.v9)(c.zh),X=(0,l.v9)(c.Q9);return(0,h.useEffect)((function(){z((0,i.yF)())}),[z]),(0,u.jsx)("div",{className:(0,A.Z)(T.coverWrapper,(t={},(0,n.Z)(t,T.selected,X),(0,n.Z)(t,"is-elevated",!1),t)),children:(0,u.jsxs)(m,{children:[M&&!U&&(0,u.jsx)("b",{children:"Please wait..."}),U&&(0,u.jsx)("b",{children:"There was an error"}),(0,u.jsxs)("div",{className:(0,A.Z)(T.contactsDetailsHide,(e={},(0,n.Z)(e,T.contactsDetailsShow,X),(0,n.Z)(e,"is-elevated",!1),e)),children:[H&&(0,u.jsx)("div",{className:T.backDrop,children:(0,u.jsx)(F.Z1,{visible:!0,height:"80",width:"80",color:"rgb(235, 144, 25)",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:T.loader})}),(0,u.jsx)("button",{className:T.closeModal,onClick:function(){z((0,i.Mr)()),d(!1),N(!1)},children:(0,u.jsx)("svg",{width:"10px",height:"10px",className:T.modalIcon,children:(0,u.jsx)("use",{href:"".concat(B,"#icon-cross")})})}),(0,u.jsx)("div",{className:T.detailsImageWrapper,children:(0,u.jsx)("img",{className:T.detailsImage,src:"http://localhost:8000".concat(O.avatarURL),alt:"Contact"})}),(0,u.jsx)("input",{className:T.detailsImageButton,type:"file",accept:"image/*",name:"avatar",onChange:function(t){var e=t.target.files[0],a=t.currentTarget.getAttribute("data-id");e&&z((0,i.im)({myFile:e,myId:a}))},id:"2","data-id":O._id}),(0,u.jsx)("label",{className:T.detailsImageInput,htmlFor:"2",children:"Update Picture +"}),(0,u.jsxs)("ul",{className:T.detailsWrapper,children:[(0,u.jsx)("li",{className:T.detailsItem,children:(0,u.jsxs)("span",{className:T.detailsCover,children:[(0,u.jsxs)("span",{className:T.detailsInfo,children:[(0,u.jsx)("span",{className:T.details,children:"Name:-"})," ",!1===r?(0,u.jsx)("span",{className:T.detailsVal,children:(0,u.jsx)("i",{className:T.detail,children:O.name})}):(0,u.jsx)("input",{type:"text",className:T.detailsValInput,required:!0,onChange:function(t){f(t.target.value)},"data-id":O._id,name:"username"})]}),(0,u.jsxs)("span",{className:T.buttonWrapper,children:[!0===r&&(0,u.jsx)("button",{className:T.detailsEditClose,onClick:function(){d(!1)},children:(0,u.jsx)("svg",{width:"5px",height:"5px",className:T.modalIcon,children:(0,u.jsx)("use",{href:"".concat(B,"#icon-cross")})})}),!1===r?(0,u.jsx)("button",{className:T.detailButton,onClick:function(t){d(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="username"]').focus()}),100)},children:"Edit"}):(0,u.jsx)("button",{name:O._id,className:T.detailButton,onClick:function(t){if(""!=x.trim()){var e=t.target.name;z((0,i.bZ)({name:x,myUpdateId:e})),d(!1)}else""===x.trim()&&y().Notify.failure("Input is required");t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},children:"Save"})]})]})}),(0,u.jsx)("li",{className:T.detailsItem,children:(0,u.jsxs)("span",{className:T.detailsCover,children:[(0,u.jsxs)("span",{className:T.detailsInfo,children:[(0,u.jsx)("span",{className:T.details,children:"Email:-"})," ",!1===C?(0,u.jsx)("span",{className:T.detailsVal,children:(0,u.jsx)("i",{className:T.detail,children:O.email})}):(0,u.jsx)("input",{type:"text",className:T.detailsValInput,required:!0,onChange:function(t){w(t.target.value)},"data-id":O._id,name:"email"})]}),(0,u.jsxs)("span",{className:T.buttonWrapper,children:[!0===C&&(0,u.jsx)("button",{className:T.detailsEditClose,onClick:function(){N(!1)},children:(0,u.jsx)("svg",{width:"5px",height:"5px",className:T.modalIcon,children:(0,u.jsx)("use",{href:"".concat(B,"#icon-cross")})})}),!1===C?(0,u.jsx)("button",{className:T.detailButton,onClick:function(t){N(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="email"]').focus()}),100)},children:"Edit"}):(0,u.jsx)("button",{name:O._id,className:T.detailButton,onClick:function(t){if(""!=I.trim()){var e=t.target.name;z((0,i.NO)({email:I,myUpdateId:e})),N(!1)}else""===I.trim()&&y().Notify.failure("Input is required");t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},children:"Save"})]})]})}),(0,u.jsx)("li",{className:T.detailsItem,children:(0,u.jsxs)("span",{className:T.detailsCover,children:[(0,u.jsxs)("span",{className:T.detailsInfo,children:[(0,u.jsx)("span",{className:T.details,children:"Phone Number:-"})," ",!1===D?(0,u.jsx)("span",{className:T.detailsValPhone,children:(0,u.jsx)("i",{className:T.detail,children:O.phone})}):(0,u.jsx)("input",{type:"text",className:T.detailsValInputPhone,required:!0,onChange:function(t){q(t.target.value)},"data-id":O._id,name:"phone"})]}),(0,u.jsxs)("span",{className:T.buttonWrapper,children:[!0===D&&(0,u.jsx)("button",{className:T.detailsEditClose,onClick:function(){E(!1)},children:(0,u.jsx)("svg",{width:"5px",height:"5px",className:T.modalIcon,children:(0,u.jsx)("use",{href:"".concat(B,"#icon-cross")})})}),!1===D?(0,u.jsx)("button",{className:T.detailButton,onClick:function(t){E(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="phone"]').focus()}),100)},children:"Edit"}):(0,u.jsx)("button",{name:O._id,className:T.detailButton,onClick:function(t){if(""!=I.trim()){var e=t.target.name;z((0,i.jX)({phone:V,myUpdateId:e})),E(!1)}else""===I.trim()&&y().Notify.failure("Input is required");t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},children:"Save"})]})]})})]})]}),(0,u.jsx)(S,{children:(0,u.jsx)(L,{})})]})})},D=Z},487:function(t,e,a){a.d(e,{Af:function(){return n},D1:function(){return r},Q9:function(){return c},Qc:function(){return l},WS:function(){return u},YI:function(){return s},kL:function(){return d},xU:function(){return o},zh:function(){return i}});var n=function(t){return t.contacts.contacts.items},s=function(t){return t.filter},o=function(t){return t.contacts.contacts.isLoading},i=function(t){return t.contacts.contacts.error},c=function(t){return t.contacts.contacts.openMyModal},r=function(t){return t.contacts.contacts.selectedContact},l=function(t){return t.contacts.contacts.isSlideLoading},d=function(t){return t.contacts.contacts.filterUpLimit},u=function(t){return t.contacts.contacts.filterDownLimit}}}]);
//# sourceMappingURL=163.e2178af1.chunk.js.map