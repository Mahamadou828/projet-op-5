!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=document.createElement(e),i=Object.entries(t),a=0,c=i;a<c.length;a++){var s=r(c[a],2),l=s[0],u=s[1];"innerHTML"===l?o.innerHTML=u:o.setAttribute(l,u)}for(var d=0;d<n.length;d++)o.appendChild(n[d]);return o}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t),n.d(t,"CartItem",(function(){return j}));var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,r,o=u(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).headerShop=i("div",{class:"shop-container-header"}),t.bodyShop=i("div",{class:"shop-container-body",id:"shopBody"}),t.container=i("div",{class:"shop disable",id:"shopCart",style:"display: none"},[t.headerShop,t.bodyShop]),t}return t=a,(n=[{key:"renderCart",value:function(){if(this.button=i("button",{innerHTML:"Panier",class:"cart"}),this.renderBodyShop())return this.button}},{key:"connectCartEvent",value:function(){return this.container.addEventListener("AddProduct",function(){var e=this.renderBodyShop();document.querySelector("#shopCart")&&e?this.container.replaceChild(this.bodyShop,document.querySelector("#shopBody")):e&&this.container.appendChild(this.bodyShop)}.bind(this)),this.container}},{key:"renderBodyShop",value:function(){this.bodyShop.innerHTML="";var e=this.getCartContain();if(e)for(var t=e.products,n=0;n<t.length;n++)this.bodyShop.appendChild(this.renderItem(t[n]));var r=i("button",{class:"order",innerHTML:"Passer commande"});return this.bodyShop.appendChild(r),r.addEventListener("click",(function(){window.location.href="panier.html"})),!0}},{key:"renderItem",value:function(e){var t=e.item,n=t.image,r=t.price,o=t.description,a=e.number,c=i("div",{class:"detail"},[i("p",{innerHTML:"".concat(r,"$*").concat(a," = ").concat(r*a,"$"),class:"price"}),i("p",{innerHTML:"detail: ".concat(o)})]),s=i("div",{class:"shop-container-body-product"},[i("img",{src:n}),c]);return s}},{key:"getAllComponentAndEvent",value:function(){return{buttonComponent:this.button,shopCartComponent:this.container,AddProductEvent:this.AddProduct,RemoveProductEvent:this.RemoveProduct}}}])&&s(t.prototype,n),r&&s(t,r),a}(function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.key=t,this.price=0,this.products=[],this.AddProduct=new Event("AddProduct"),this.RemoveProduct=new Event("RemoveProduct"),localStorage.getItem(t)){var n=JSON.parse(localStorage.getItem(t));this.price=n.price,this.products=n.products}}var t,n,r;return t=e,(n=[{key:"saveItem",value:function(e){var t=!1;this.price+=e.price,this.products.forEach((function(n){n.item.id===e.id&&(n.number++,t=!0)})),t||this.products.push({item:e,number:1}),localStorage.setItem(this.key,JSON.stringify({price:this.price,products:this.products}))}},{key:"removeItem",value:function(e){this.products.forEach((function(t){t.item.id===e.id&&t.number--}))}},{key:"getCartContain",value:function(){return JSON.parse(localStorage.getItem(this.key))}},{key:"getNumberOfAnProduct",value:function(e){var t=!1,n=0;return this.products.forEach((function(r){r.item.id===e&&(t=!0,n=r.number)})),t?n:0}}])&&a(t.prototype,n),r&&a(t,r),e}());function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseRoute="http://localhost:3000/api",this.productToRequest=t,this.defaultGetHeader={method:"GET",headers:new Headers,mode:"cors",cache:"default"},this.defaultPostHeader={method:"POST",body:JSON.stringify({}),headers:{"Content-Type":"application/json"},mode:"cors",cache:"default"},this.sendRequest=this.sendRequest.bind(this)}var t,n,r;return t=e,r=[{key:"generateDefaultPostHeader",value:function(e){return{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},mode:"cors",cache:"default"}}}],(n=[{key:"sendRequest",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(r,o){fetch("".concat(t.baseRoute,"/").concat(t.productToRequest,"/").concat(n),e).then((function(e){e.json().then((function(e){r(e)})).catch((function(e){o(e)}))})).catch((function(e){o(e)}))}))}}])&&h(t.prototype,n),r&&h(t,r),e}(),m=new y("teddies");function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){var n=t.imageUrl,r=t.description,o=t.price,i=t._id;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.image=n,this.description=r,this.price=o,this.id=i,this.hasAnRender=!1}var t,n,r;return t=e,(n=[{key:"renderProduct",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.imageComponent=i("img",{src:this.image}),this.descriptionComponent=i("p",{innerHTML:this.description}),this.priceComponent=i("p",{innerHTML:"".concat(this.price,"$"),class:"price"}),e="object"===v(t)&&t.AddCustonProduct?t.custonProduct:this.renderSimpleProduct(t),this.container=i("article",{class:"string"==typeof t.class?t.class:""},[this.imageComponent,i("hr"),this.descriptionComponent,this.priceComponent,e]),this.hasAnRender=!0,this.container}},{key:"getAllComponent",value:function(){return this.hasAnRender?{description:this.descriptionComponent,image:this.imageComponent,link:"object"===v(this.linkComponent)?this.linkComponent:null,container:this.container,price:this.priceComponent,order:this.orderComponent}:"Error the component doesn't have an render form"}},{key:"renderSimpleProduct",value:function(e){this.orderComponent=i("button",{innerHTML:"Ajouter au panier",idProduct:this.id},[i("i",{class:"fab fa-shopify"})]);var t=i("div",{class:"container"},[this.orderComponent]);return e.addLink&&(this.linkComponent=i("a",{innerHTML:e.linkText,href:e.link},i("i",{class:"fas fa-eye"})),t.appendChild(this.linkComponent)),t}}])&&b(t.prototype,n),r&&b(t,r),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"slideUp",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;e.style.height="".concat(e.offsetHeight,"px"),e.style.transition="all ".concat(t,"ms"),e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout((function(){e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.style.removeProperty("transition-timing-function"),e.style.removeProperty("transition-delay")}),t)}},{key:"slideDown",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;e.style.removeProperty("display");var n=window.getComputedStyle(e).display;"none"===n&&(n="block"),e.style.display=window.getComputedStyle(e).display;var r="".concat(e.offsetHeight,"px");e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transition="all ".concat(t,"ms"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.height=r,window.setTimeout((function(){e.style.display=n,e.style.removeProperty("heigth"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.style.removeProperty("transition-timing-function"),e.style.removeProperty("transition-delay")}),t)}},{key:"slideToggle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=window.getComputedStyle(e).display;"none"===n?this.slideDown(e,t):this.slideUp(e,t)}}],(n=null)&&C(t.prototype,n),r&&C(t,r),e}();function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){var n=e.colors,r=e._id,o=e.price,a=e.imageUrl,c=e.description,s=t.getNumberOfAnProduct(r),l=function(e){for(var t=i("label",{innerHTML:"Colors:"}),n=[],r=0;r<e.length;r++)n.push(i("option",{class:"colors-choice",innerHTML:e[r]}));var o=i("select",{class:"colors"},n);return i("div",{class:"container"},[t,o])}(n),u=E(s),d=i("button",{class:"order-button",innerHTML:"Commander"});d.addEventListener("click",(function(){P.slideDown(document.getElementById("popup"))}));var p=i("div",{class:"container"},[i("p",{class:"order-price",innerHTML:"".concat(o,"$")}),d]);return d.addEventListener("click",(function(){var n=t.getAllComponentAndEvent();Object.defineProperty(e,"id",{value:r}),Object.defineProperty(e,"image",{value:e.imageUrl});for(var i=document.querySelector("#number").value,s=0;s<parseInt(i);s++)t.saveItem({id:r,image:a,description:c,price:o});n.shopCartComponent.dispatchEvent(n.AddProductEvent)})),i("div",{class:"command"},[l,u,p])}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=i("label",{innerHTML:"Number:"}),r=i("input",{type:"text",value:e,id:"number",disabled:"disabled"}),o=i("div",{class:"arrow",innerHTML:"+"}),a=i("div",{class:"arrow",innerHTML:"-"});o.addEventListener("click",(function(){var e=parseInt(r.value)+1;r.setAttribute("value",e),"function"==typeof t&&t()})),a.addEventListener("click",(function(){var e=parseInt(r.value)-1;e>=1&&r.setAttribute("value",e),"function"==typeof t&&t()}));var c=i("div",{class:"numbers-rows"},[a,r,o]);return i("div",{class:"container"},[n,c])}function T(e){return 0===e.length?"Email is Require":/^[a-z0-9\-_\.]+@[a-z0-9]+\.[a-z]{2,5}$/.test(e)?"":"Email is not valid"}function k(e){return 0===e.length?"Ce champ est requis":/(a-zA-Z)+(\!\@\#\$\%\^\&\*\(\))+/.test(e)?"Ce champ n'est pas valide":""}function L(e){var t=j.getCartContain(),n=t.products,r=t.price;n.forEach((function(t){e.appendChild(new g({imageUrl:t.item.image,description:t.item.description,_id:t.item.id,price:t.item.price}).renderProduct({addLink:!1,AddCustonProduct:!0,custonProduct:E(t.number,A),class:"panier-product"}))})),e.appendChild(i("p",{id:"price",innerHTML:"Au total ".concat(r,"$")})),e.appendChild(function(){for(var e=[{type:"text",placeholder:"Enter your name",id:"nom"},{type:"text",placeholder:"Enter your surname",id:"prenom"},{type:"text",placeholder:"Enter your address",id:"adresse"},{type:"text",placeholder:"Enter your town",id:"ville"},{type:"email",placeholder:"Enter your email",id:"email"}],t=[],n=0;n<e.length;n++)t.push(i("input",{class:"input",type:e[n].type,placeholder:e[n].placeholder,id:e[n].id}));t.forEach((function(e){!function(e){e.addEventListener("change",(function(e){var t="",n=e.target.value;switch(e.target.type){case"text":(t=k(n)).length>0?O(e,t):e.target.classList.remove("error");break;case"email":(t=T(n)).length>0?O(e,t):e.target.classList.remove("error")}}))}(e)}));var r=i("button",{type:"submit",innerHTML:"Commander"});return r.addEventListener("click",(function(e){!function(e){e.preventDefault();var t=document.querySelector("#price").innerHTML.split("Au total")[1];if(parseInt(t)>0){var n=document.querySelectorAll(".input");if(!function(e){var t=!1;return e.forEach((function(e){"text"===e.type?k(e.value).length>0&&(t=!0):"email"===e.type&&T(e.value).length>0&&(t=!0)})),t}(n)){var r=[];n.forEach((function(e){var t=[e.id,e.value];r.push(t)}));var o=Object.fromEntries(new Map(r)),i=j.getCartContain().products.map((function(e){return e.item.id}));m.sendRequest(y.generateDefaultPostHeader({contact:o,products:i}),"/order").then((function(e){e.orderId.length>0&&(localStorage.setItem("orderId",JSON.stringify({orderId:e.orderId,price:t})),window.location.href="confirmation.html")})).catch((function(e){console.log(e)}))}}}(e)})),t.push(r),i("form",{class:"form"},t)}())}function A(){var e=0;document.querySelectorAll(".panier-product").forEach((function(t){var n=t.children[3].textContent.split("$")[0],r=t.lastChild.lastChild.childNodes[1].value;e+=parseInt(n)*parseInt(r)})),document.querySelector("#price").innerHTML="Au total ".concat(e,"$")}function O(e,t){e.target.value="",e.target.placeholder=t,e.target.classList.add("error")}function H(){var e=i("section",{class:"popup disable"},[i("p",{innerHTML:"Produit ajouter"})]),t=i("button",{},[i("i",{class:"fas fa-times"})]);return t.addEventListener("click",(function(){P.slideUp(document.querySelector("#popup"))})),e.appendChild(t),i("div",{class:"popup-contain",id:"popup"},[e])}var j=new f("products");window.onload=function(){var e=document.querySelector("#app"),t=i("a",{innerHTML:"Orinoco",href:"./index.html"},[i("i",{class:"fas fa-shopping-cart"})]),n=i("nav",{class:"header"},[t,j.renderCart()]);document.body.insertBefore(n,document.body.firstChild),n.parentNode.insertBefore(j.connectCartEvent(),n.nextSibling);var r=j.getAllComponentAndEvent();r.buttonComponent.addEventListener("click",(function(){P.slideToggle(r.shopCartComponent)}));var o,a,c,s=window.location.href.split("client/")[1];switch((s=s.split("?"))[0]){case"index.html":e.appendChild(H()),function(e,t){var n=t.getAllComponentAndEvent(),r=[];m.sendRequest(m.defaultGetHeader).then((function(o){o.forEach((function(o){var i=new g(o);e.appendChild(i.renderProduct({class:"product__item",addLink:!0,link:"./voirProduit.html?id=".concat(o._id),linkText:"Regarder l'objet"})),r.push(i),i.getAllComponent().order.addEventListener("click",(function(e){var o,i=e.target.getAttribute("idProduct");r.forEach((function(e){e.id===i&&(o=e)})),"object"===S(o)&&(t.saveItem(o),n.shopCartComponent.dispatchEvent(n.AddProductEvent),P.slideDown(document.getElementById("popup")))}))}))})).catch((function(e){console.log(e)})),P.slideUp(document.querySelector("#popup"))}(e,j);break;case"voirProduit.html":e.appendChild(H()),function(e,t,n){m.sendRequest(m.defaultGetHeader,t.split("id=")[1]).then((function(t){var r=i("img",{src:t.imageUrl}),o=i("p",{innerHTML:"<strong>".concat(t.name,":</strong>").concat(t.description),class:"description"}),a=i("div",{class:"voirProduit-container"},[o,w(t,n)]),c=i("div",{class:"voirProduit"},[r,a]);e.appendChild(c)})).catch((function(e){console.log(e)}))}(e,s[1],j);break;case"panier.html":L(e);break;case"confirmation.html":o=JSON.parse(localStorage.getItem("orderId")),a=o.orderId,c=o.price,localStorage.clear(),document.querySelector("#price").innerHTML="Au total ".concat(c),document.querySelector("#orderId").innerHTML="L'id de votre demande: ".concat(a,"$");break;default:window.location.assign("/client/index.html")}}}]);