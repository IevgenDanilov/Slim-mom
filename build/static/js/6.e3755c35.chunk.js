(this["webpackJsonpslim-mom"]=this["webpackJsonpslim-mom"]||[]).push([[6],{106:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return r}))},107:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",a=crypto.getRandomValues(new Uint8Array(e));e--;){var n=63&a[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t}},108:function(e,t,a){e.exports={container:"TextField_container___zNHT",visuallyHidden:"TextField_visuallyHidden__RX9lI",formInput:"TextField_formInput__2skS2"}},110:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(24),r=a(32),o=a(107),i=a(108),c=a.n(i),l=a(1),s=["label"],d=function(e){var t=e.label,a=Object(r.a)(e,s),i=Object(o.a)();return a.required&&(a.placeholder+=" *"),Object(l.jsxs)("div",{className:c.a.formGroup,children:[t&&Object(l.jsx)("label",{htmlFor:i,children:t}),Object(l.jsx)("input",Object(n.a)(Object(n.a)({className:c.a.formInput},a),{},{id:i}))]})};d.defaultProps={required:!1,type:"text"};var u=d},111:function(e,t,a){e.exports={container:"Button_container__eJNRm",visuallyHidden:"Button_visuallyHidden__FgCje",button:"Button_button__3dW8N",buttonPrimary:"Button_buttonPrimary__3e5nj",buttonSecondary:"Button_buttonSecondary__1mPxn"}},112:function(e,t,a){"use strict";var n=a(9),r=a(24),o=a(106),i=a(0);t.a=function(e,t){var a=Object(i.useState)(e),c=Object(o.a)(a,2),l=c[0],s=c[1];return[l,function(e){var t=e.target,a=t.type,o=t.name,i=t.value,c="radio"===a?t.dataset.radio:i;s((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},o,c))}))},function(a){a.preventDefault(),t(l),s(Object(r.a)({},e))}]}},113:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(111),r=a.n(n),o=a(1),i={primary:r.a.buttonPrimary,secondary:r.a.buttonSecondary},c=function(e){var t=e.className,a=e.text,n=e.onClick,c=e.variant,l=e.type,s=i[c];return Object(o.jsx)("button",{type:l,onClick:n,className:"".concat(r.a.button," ").concat(s," ").concat(t),children:a})},l=c;c.defaultProps={variant:"primary",className:"",type:"button",onClick:function(){}}},115:function(e,t,a){e.exports={container:"RadioField_container__NueVS",visuallyHidden:"RadioField_visuallyHidden__12e4_",radioBox:"RadioField_radioBox__3hsdW",radioLabel:"RadioField_radioLabel__4fw5r",radioButton:"RadioField_radioButton__2dRju",customRadio:"RadioField_customRadio__rY8sG"}},116:function(e,t,a){e.exports={container:"RadioGroup_container__MmAkI",visuallyHidden:"RadioGroup_visuallyHidden__3g-Rr",radioGroup:"RadioGroup_radioGroup__ypbOV",radioButtons:"RadioGroup_radioButtons__2PEes",label:"RadioGroup_label__NSG_k"}},126:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(24),r=a(107),o=a(0),i=function(){return Object(o.useRef)(Object(r.a)()).current},c=a(115),l=a.n(c),s=a(1),d=function(e){var t=e.onChange,a=e.label,n=e.name,r=e.required,o=e.dataRadio,c=i();return Object(s.jsxs)("div",{className:l.a.radioBox,children:[Object(s.jsx)("input",{name:n,id:c,type:"radio","data-radio":o,onChange:t,required:r&&r,className:"".concat(l.a.radioButton," ").concat(l.a.visuallyHidden)}),Object(s.jsxs)("label",{htmlFor:c,className:l.a.radioLabel,children:[Object(s.jsx)("span",{className:l.a.customRadio}),a&&a]})]})};d.defaultProps={onChange:function(){},required:!1};var u=d,b=a(116),_=a.n(b),m=function(e){var t=e.label,a=e.items.map((function(e){return Object(s.jsx)(u,Object(n.a)({},e),e.label)}));return Object(s.jsxs)("div",{className:_.a.radioGroup,children:[t&&Object(s.jsx)("label",{className:_.a.label,children:t}),Object(s.jsx)("div",{className:_.a.radioButtons,children:a})]})};m.defaultProps={items:[]};var j=m},208:function(e,t,a){e.exports={container:"MainPage_container__QMZwZ",visuallyHidden:"MainPage_visuallyHidden__3kFVy",title:"MainPage_title__TqMvC",main:"MainPage_main__2zCW4",form:"MainPage_form__1uyux",fields:"MainPage_fields__2rfVQ",field:"MainPage_field__116B3",button:"MainPage_button__uNAuH"}},209:function(e,t,a){e.exports={container:"Modal_container__2o5dF",visuallyHidden:"Modal_visuallyHidden__1ngQj",modalMainContainerOverlay:"Modal_modalMainContainerOverlay__3eq3k",modalMainContainer:"Modal_modalMainContainer__2OksP",mobileBackground:"Modal_mobileBackground__B7ENn",closeModalBtnMobile:"Modal_closeModalBtnMobile__3RZ1f",closeModalBtn:"Modal_closeModalBtn__2Chk1"}},210:function(e,t,a){e.exports={container:"ModalInfo_container__2fH9t",visuallyHidden:"ModalInfo_visuallyHidden__1IuzN",title:"ModalInfo_title__1wnjW",button:"ModalInfo_button__1cKfw",caloriesText:"ModalInfo_caloriesText__1g5qS",caloriesValue:"ModalInfo_caloriesValue__YIaPX",productsTitle:"ModalInfo_productsTitle__2GVvu",productsList:"ModalInfo_productsList__3pRVJ",productsItem:"ModalInfo_productsItem__237bf"}},226:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(5),i=a(106),c=a(0),l=a(208),s=a.n(l),d=a(113),u=a(110),b=a(126),_=a(209),m=a.n(_),j=a(31),f=a(1),p=function(e){var t=e.onClose,a=e.children;Object(c.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[]);var n=function(e){"Escape"===e.code&&t()};return Object(j.createPortal)(Object(f.jsx)("div",{className:m.a.modalMainContainerOverlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(f.jsxs)("div",{className:m.a.modalMainContainer,children:[Object(f.jsx)("button",{className:m.a.closeModalBtn,onClick:t}),Object(f.jsx)("div",{className:m.a.mobileBackground,children:Object(f.jsx)("button",{className:m.a.closeModalBtnMobile,onClick:function(e){"BUTTON"===e.target.tagName&&t()}})}),Object(f.jsx)("div",{className:m.a.container,children:a})]})}),document.getElementById("modal"))};p.defaultProps={onClose:function(){}};var v=p,h=a(210),O=a.n(h),x=a(27),y=function(e){var t=e.products,a=e.calories;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{className:O.a.title,children:"\u0412\u0430\u0448\u0430 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u0430\u044f \u0441\u0443\u0442\u043e\u0447\u043d\u0430\u044f \u043d\u043e\u0440\u043c\u0430 \u043a\u0430\u043b\u043e\u0440\u0438\u0439 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442"}),Object(f.jsxs)("div",{className:O.a.container,children:[Object(f.jsxs)("p",{className:O.a.caloriesText,children:[Object(f.jsx)("span",{className:O.a.caloriesValue,children:a})," \u043a\u043a\u0430\u043b"]}),Object(f.jsx)("h2",{className:O.a.productsTitle,children:" \u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0430\u043c \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0443\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0442\u044c"}),Object(f.jsx)("ol",{className:O.a.productsList,children:t.map((function(e){return Object(f.jsx)("li",{className:O.a.productsItem,children:e},e)}))}),Object(f.jsx)(x.b,{to:"/registration",className:O.a.button,children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0445\u0443\u0434\u0435\u0442\u044c"})]})]})},g=a(58),N=a(112),M={weight:"",height:"",age:"",desiredWeight:"",bloodType:null};t.default=function(){var e=Object(N.a)(M,(function(){})),t=Object(i.a)(e,3),a=t[0],n=t[1],l=t[2],_=Object(c.useState)(!1),m=Object(i.a)(_,2),j=m[0],p=m[1],h=Object(c.useState)(null),O=Object(i.a)(h,2),x=O[0],C=O[1],R=Object(c.useState)([]),B=Object(i.a)(R,2),w=B[0],I=B[1],k=Object(c.useState)(null),P=Object(i.a)(k,2),S=P[0],H=P[1],T=function(){p(!j)},F="bloodType",q=[{onChange:function(){C(1)},name:F,label:"1",dataRadio:1,required:!0},{onChange:function(){C(2)},name:F,dataRadio:2,label:"2"},{onChange:function(){C(3)},name:F,dataRadio:3,label:"3"},{onChange:function(){C(4)},name:F,dataRadio:4,label:"4"}],G=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,o,c,s,d,u,b,_;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=Object.entries(a),o=n.map((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return[a,Number(n)]})),e.next=5,Object.fromEntries(o);case 5:return(c=e.sent).bloodType=x,e.prev=7,e.next=10,Object(g.a)(c);case 10:return s=e.sent,d=s.data,e.next=14,d;case 14:u=e.sent,b=u.dailyRate,_=u.notAllowedProducts,H(b),I(_.slice(0,4)),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(7),console.log(e.t0);case 24:T(),t.target.reset(),l(t);case 27:case"end":return e.stop()}}),e,null,[[7,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:s.a.main,children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{className:s.a.title,children:"\u041f\u0440\u043e\u0441\u0447\u0438\u0442\u0430\u0439 \u0441\u0432\u043e\u044e \u0441\u0443\u0442\u043e\u0447\u043d\u0443\u044e \u043d\u043e\u0440\u043c\u0443 \u043a\u0430\u043b\u043b\u043e\u0440\u0438\u0439 \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441"}),j&&Object(f.jsx)(v,{onClose:T,children:Object(f.jsx)(y,{products:w,calories:S})}),Object(f.jsxs)("form",{onSubmit:G,className:s.a.form,children:[Object(f.jsxs)("div",{className:s.a.fields,children:[Object(f.jsx)("div",{className:s.a.field,children:Object(f.jsx)(u.a,{required:!0,label:"",name:"height",value:a.height,onChange:n,placeholder:"\u0420\u043e\u0441\u0442",min:"100",max:"250",type:"number"})}),Object(f.jsx)("div",{className:s.a.field,children:Object(f.jsx)(u.a,{required:!0,label:"",value:a.age,name:"age",onChange:n,placeholder:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",min:"18",max:"100",type:"number"})}),Object(f.jsx)("div",{className:s.a.field,children:Object(f.jsx)(u.a,{required:!0,label:"",value:a.weight,name:"weight",onChange:n,placeholder:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0432\u0435\u0441",min:"0",max:"500",type:"number"})}),Object(f.jsx)("div",{className:s.a.field,children:Object(f.jsx)(u.a,{required:!0,label:"",value:a.desiredWeight,name:"desiredWeight",onChange:n,placeholder:"\u0416\u0435\u043b\u0430\u0435\u043c\u044b\u0439 \u0432\u0435\u0441",min:"0",max:"500",type:"number"})}),Object(f.jsx)(b.a,{label:"\u0413\u0440\u0443\u043f\u043f\u0430 \u043a\u0440\u043e\u0432\u0438 *",items:q})]}),Object(f.jsx)(d.a,{text:"\u041f\u043e\u0445\u0443\u0434\u0435\u0442\u044c",className:s.a.button,type:"submit"})]})]})})}}}]);
//# sourceMappingURL=6.e3755c35.chunk.js.map