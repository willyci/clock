(function(e){function n(n){for(var c,o,u=n[0],i=n[1],d=n[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(n);while(f.length)f.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],c=!0,o=1;o<t.length;o++){var i=t[o];0!==r[i]&&(c=!1)}c&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var c={},r={app:0},a=[];function o(e){return u.p+"js/"+({"polyfills-core-js":"polyfills-core-js","polyfills-dom":"polyfills-dom"}[e]||e)+"."+{"chunk-02c995b5":"c8dee7ab","chunk-09155df3":"e3ac211b","chunk-09162720":"102e7a40","chunk-097e0872":"3522b5ab","chunk-0e93a01c":"b0a5975b","chunk-1bff95de":"c7f1bfb8","chunk-1c4705f4":"6dbe2887","chunk-1dbc15a2":"8c41fb29","chunk-21a76241":"9a71d653","chunk-25d83ca8":"89659437","chunk-2d0a463b":"580f9170","chunk-2d0c073f":"017f6960","chunk-2d0d43da":"c6672c38","chunk-2d0d5c33":"d98bbfcf","chunk-2d0da04a":"620f425b","chunk-2d0e5812":"bc3079e1","chunk-2d213189":"2b11f265","chunk-2d217e6a":"9d5e5387","chunk-2d218068":"115cead1","chunk-2d21da73":"56e20878","chunk-2d237b00":"037b5772","chunk-2d237b2f":"c5abefaf","chunk-30dd9750":"6b7d6eb0","chunk-37f2300e":"cc3c45b7","chunk-3ed29de3":"9e68e146","chunk-41c0f7a4":"5f0941d1","chunk-426f2f16":"9f46eefa","chunk-462c869e":"0ea6ae2c","chunk-47245a33":"b9e6a322","chunk-4739acd0":"12a964e2","chunk-53b1137a":"8efb31cd","chunk-541ea42d":"63c37d24","chunk-54bbd082":"aa2ffdeb","chunk-59d4c87c":"9a2960ba","chunk-5a8ac886":"1c1bcfb0","chunk-5ff96a24":"bc2c1407","chunk-69eb8776":"8f434896","chunk-6d375f34":"8b250ad4","chunk-7548ca2d":"f50c2a89","chunk-79f1dac7":"4481f814","chunk-858cd918":"54b9acef","chunk-8bb7f81e":"4465b78a","chunk-a9395c36":"8777d2b5","chunk-d0e8aa0a":"ef2f5d14","chunk-d8413eac":"9e3a3351","chunk-e5275ddc":"a29be33a","chunk-eaa2b130":"700c0fb3","polyfills-core-js":"12be3461","polyfills-dom":"662760da","chunk-2d2297f7":"78980670","chunk-2d0c9758":"62f099a9","chunk-2d0b33e3":"2e69defc","chunk-2d0b9074":"cf6d8bbf","chunk-2d0b9280":"58416f48","chunk-2d0baac9":"ecbd8a2b","chunk-2d2376e6":"a05b70ee"}[e]+".js"}function u(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var c=new Promise((function(n,c){t=r[e]=[n,c]}));n.push(t[2]=c);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=o(e);var d=new Error;a=function(n){i.onerror=i.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",d.name="ChunkLoadError",d.type=c,d.request=a,t[1](d)}r[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=c,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)u.d(t,c,function(n){return e[n]}.bind(null,c));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var b=d;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("7a23");function r(e,n,t,r,a,o){var u=Object(c["v"])("ion-router-outlet"),i=Object(c["v"])("ion-app");return Object(c["p"])(),Object(c["e"])(i,null,{default:Object(c["A"])((function(){return[Object(c["g"])(u)]})),_:1})}var a=t("d867"),o=Object(c["h"])({name:"App",components:{IonApp:a["a"],IonRouterOutlet:a["i"]}});o.render=r;var u=o,i=(t("d3b7"),t("3ca3"),t("ddb0"),t("bec5")),d=Object(c["g"])("h2",null,"Class Schedule",-1),s=Object(c["g"])("h1",null,"Today",-1);function b(e,n,t,r,a,o){var u=Object(c["v"])("ion-item"),i=Object(c["v"])("ion-list"),b=Object(c["v"])("base-layout");return Object(c["p"])(),Object(c["e"])(b,{"page-title":"list"},{default:Object(c["A"])((function(){return[d,s,Object(c["g"])("h2",null,Object(c["x"])(a.currentDate),1),Object(c["g"])(i,null,{default:Object(c["A"])((function(){return[(Object(c["p"])(!0),Object(c["e"])(c["a"],null,Object(c["t"])(a.memories,(function(e){return Object(c["p"])(),Object(c["e"])(u,{key:e.id,"router-link":"/memories/".concat(e.id)},{default:Object(c["A"])((function(){return[Object(c["f"])(Object(c["x"])(e.ClassTitle)+" - start at "+Object(c["x"])(e.timeIn),1)]})),_:2},1032,["router-link"])})),128))]})),_:1})]})),_:1})}t("4d90");var f={components:{IonList:a["g"],IonItem:a["f"]},data:function(){return{memories:[{id:1,classID:"1234",ClassTitle:"Med class 1234",date:"Mon May 24, 2021",timeIn:"9:00 AM",timeOut:"10:00AM"},{id:2,classID:"534",ClassTitle:"History class 534",date:"Mon May 24, 2021",timeIn:"11:00 AM",timeOut:"12:00PM"},{id:3,classID:"134",ClassTitle:"Physics class 134",date:"Mon May 24, 2021",timeIn:"2:00 PM",timeOut:"3:00PM"},{id:4,classID:"341",ClassTitle:"Math class 341",date:"Mon May 24, 2021",timeIn:"4:00 PM",timeOut:"5:00PM"}],currentDate:""}},methods:{getTodayDate:function(){var e=new Date,n=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0"),c=e.getFullYear();return e=t+"/"+n+"/"+c,e}},mounted:function(){this.currentDate=this.getTodayDate(),console.log("today is = "+this.currentDate)}};f.render=b;var l=f,h=[{path:"/",redirect:"/memories"},{path:"/memories",name:"memories list",component:l},{path:"/memories/:id",name:"memories details",component:function(){return t.e("chunk-2d237b2f").then(t.bind(null,"fbda"))}}],k=Object(i["a"])({history:Object(i["b"])("/"),routes:h}),j=k;t("4b63"),t("4041"),t("51ef"),t("a237"),t("e09e"),t("46e5"),t("98b6"),t("2d22"),t("66b0"),t("ce1f"),t("8c28");function p(e,n,t,r,a,o){var u=Object(c["v"])("ion-back-button"),i=Object(c["v"])("ion-buttons"),d=Object(c["v"])("ion-title"),s=Object(c["v"])("ion-toolbar"),b=Object(c["v"])("ion-header"),f=Object(c["v"])("ion-content"),l=Object(c["v"])("ion-page");return Object(c["p"])(),Object(c["e"])(l,null,{default:Object(c["A"])((function(){return[Object(c["g"])(b,null,{default:Object(c["A"])((function(){return[Object(c["g"])(s,null,{default:Object(c["A"])((function(){return[Object(c["g"])(i,{slot:"start"},{default:Object(c["A"])((function(){return[Object(c["g"])(u,{"default-href":t.pageDefaultBackLink},null,8,["default-href"])]})),_:1}),Object(c["g"])(d,null,{default:Object(c["A"])((function(){return[Object(c["f"])(Object(c["x"])(t.pageTitle),1)]})),_:1})]})),_:1})]})),_:1}),Object(c["g"])(f,null,{default:Object(c["A"])((function(){return[Object(c["u"])(e.$slots,"default")]})),_:3})]})),_:1})}var y={props:["pageTitle","pageDefaultBackLink"],components:{IonPage:a["h"],IonTitle:a["j"],IonHeader:a["e"],IonContent:a["d"],IonToolbar:a["k"],IonBackButton:a["b"],IonButtons:a["c"]}};y.render=p;var O=y,m=Object(c["d"])(u).use(a["l"]).use(j);m.component("base-layout",O),j.isReady().then((function(){m.mount("#app")}))},"8c28":function(e,n,t){},aa55:function(e,n,t){var c={"./ion-action-sheet.entry.js":["6618","chunk-426f2f16"],"./ion-alert.entry.js":["f06c","chunk-1c4705f4"],"./ion-app_8.entry.js":["c215","chunk-53b1137a"],"./ion-avatar_3.entry.js":["cf12","chunk-59d4c87c"],"./ion-back-button.entry.js":["4b35","chunk-69eb8776"],"./ion-backdrop.entry.js":["429d","chunk-2d0c073f"],"./ion-button_2.entry.js":["4453","chunk-25d83ca8"],"./ion-card_5.entry.js":["070b","chunk-541ea42d"],"./ion-checkbox.entry.js":["dfd8","chunk-09162720"],"./ion-chip.entry.js":["430d","chunk-09155df3"],"./ion-col_3.entry.js":["6a8a","chunk-2d0da04a"],"./ion-datetime_3.entry.js":["c15b","chunk-21a76241"],"./ion-fab_3.entry.js":["dd47","chunk-3ed29de3"],"./ion-img.entry.js":["9588","chunk-2d0e5812"],"./ion-infinite-scroll_2.entry.js":["d1e5","chunk-2d21da73"],"./ion-input.entry.js":["d111","chunk-37f2300e"],"./ion-item-option_3.entry.js":["1bb3","chunk-5ff96a24"],"./ion-item_8.entry.js":["69da","chunk-5a8ac886"],"./ion-loading.entry.js":["53a5","chunk-6d375f34"],"./ion-menu_3.entry.js":["cb00","chunk-097e0872"],"./ion-modal.entry.js":["1ad0","chunk-1bff95de"],"./ion-nav_2.entry.js":["e44f","chunk-4739acd0"],"./ion-popover.entry.js":["4285","chunk-e5275ddc"],"./ion-progress-bar.entry.js":["9b72","chunk-1dbc15a2"],"./ion-radio_2.entry.js":["beb3","chunk-0e93a01c"],"./ion-range.entry.js":["719f","chunk-54bbd082"],"./ion-refresher_2.entry.js":["0a47","chunk-d8413eac"],"./ion-reorder_2.entry.js":["6672","chunk-d0e8aa0a"],"./ion-ripple-effect.entry.js":["c8da","chunk-2d218068"],"./ion-route_4.entry.js":["10e8","chunk-858cd918"],"./ion-searchbar.entry.js":["8625","chunk-a9395c36"],"./ion-segment_2.entry.js":["0c02","chunk-462c869e"],"./ion-select_3.entry.js":["d25f","chunk-79f1dac7"],"./ion-slide_2.entry.js":["05dd","chunk-2d0a463b"],"./ion-spinner.entry.js":["e11b","chunk-8bb7f81e"],"./ion-split-pane.entry.js":["aae8","chunk-2d213189"],"./ion-tab-bar_2.entry.js":["a2bb","chunk-02c995b5"],"./ion-tab_2.entry.js":["6725","chunk-47245a33"],"./ion-text.entry.js":["ed3b","chunk-30dd9750"],"./ion-textarea.entry.js":["8798","chunk-eaa2b130"],"./ion-toast.entry.js":["c1a5","chunk-41c0f7a4"],"./ion-toggle.entry.js":["bef2","chunk-7548ca2d"],"./ion-virtual-scroll.entry.js":["5fd7","chunk-2d0d43da"]};function r(e){if(!t.o(c,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=c[e],r=n[0];return t.e(n[1]).then((function(){return t(r)}))}r.keys=function(){return Object.keys(c)},r.id="aa55",e.exports=r},ab00:function(e,n,t){var c={"./ion-icon.entry.js":["7059","chunk-2d0d5c33"]};function r(e){if(!t.o(c,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=c[e],r=n[0];return t.e(n[1]).then((function(){return t(r)}))}r.keys=function(){return Object.keys(c)},r.id="ab00",e.exports=r}});
//# sourceMappingURL=app.13f3db3b.js.map