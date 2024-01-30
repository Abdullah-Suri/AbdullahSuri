import{c as ce,g as de,_ as oe,o as X,a as Z,b as x,r as ue,d as ne,e as fe,n as pe,f as R,h as J,w as se,F as me,p as be,i as he}from"./index-duyaZsnk.js";var le={exports:{}};(function(_,N){(function(h,i){_.exports=i()})(ce,function(){return function(h){function i(t){if(a[t])return a[t].exports;var s=a[t]={exports:{},id:t,loaded:!1};return h[t].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}var a={};return i.m=h,i.c=a,i.p="dist/",i(0)}([function(h,i,a){function t(r){return r&&r.__esModule?r:{default:r}}var s=Object.assign||function(r){for(var j=1;j<arguments.length;j++){var E=arguments[j];for(var D in E)Object.prototype.hasOwnProperty.call(E,D)&&(r[D]=E[D])}return r},m=a(1),y=(t(m),a(6)),n=t(y),f=a(7),l=t(f),d=a(8),c=t(d),b=a(9),S=t(b),z=a(10),V=t(z),G=a(11),Q=t(G),ee=a(14),U=t(ee),O=[],K=!1,v={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},A=function(){var r=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(r&&(K=!0),K)return O=(0,Q.default)(O,v),(0,V.default)(O,v.once),O},T=function(){O=(0,U.default)(),A()},o=function(){O.forEach(function(r,j){r.node.removeAttribute("data-aos"),r.node.removeAttribute("data-aos-easing"),r.node.removeAttribute("data-aos-duration"),r.node.removeAttribute("data-aos-delay")})},e=function(r){return r===!0||r==="mobile"&&S.default.mobile()||r==="phone"&&S.default.phone()||r==="tablet"&&S.default.tablet()||typeof r=="function"&&r()===!0},u=function(r){v=s(v,r),O=(0,U.default)();var j=document.all&&!window.atob;return e(v.disable)||j?o():(v.disableMutationObserver||c.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),v.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",v.easing),document.querySelector("body").setAttribute("data-aos-duration",v.duration),document.querySelector("body").setAttribute("data-aos-delay",v.delay),v.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?A(!0):v.startEvent==="load"?window.addEventListener(v.startEvent,function(){A(!0)}):document.addEventListener(v.startEvent,function(){A(!0)}),window.addEventListener("resize",(0,l.default)(A,v.debounceDelay,!0)),window.addEventListener("orientationchange",(0,l.default)(A,v.debounceDelay,!0)),window.addEventListener("scroll",(0,n.default)(function(){(0,V.default)(O,v.once)},v.throttleDelay)),v.disableMutationObserver||c.default.ready("[data-aos]",T),O)};h.exports={init:u,refresh:A,refreshHard:T}},function(h,i){},,,,,function(h,i){(function(a){function t(e,u,r){function j(p){var $=M,W=L;return M=L=void 0,q=p,k=e.apply(W,$)}function E(p){return q=p,w=setTimeout(B,u),F?j(p):k}function D(p){var $=p-C,W=p-q,ie=u-$;return I?T(ie,H-W):ie}function Y(p){var $=p-C,W=p-q;return C===void 0||$>=u||$<0||I&&W>=H}function B(){var p=o();return Y(p)?ae(p):void(w=setTimeout(B,D(p)))}function ae(p){return w=void 0,g&&M?j(p):(M=L=void 0,k)}function re(){w!==void 0&&clearTimeout(w),q=0,M=C=L=w=void 0}function te(){return w===void 0?k:ae(o())}function P(){var p=o(),$=Y(p);if(M=arguments,L=this,C=p,$){if(w===void 0)return E(C);if(I)return w=setTimeout(B,u),j(C)}return w===void 0&&(w=setTimeout(B,u)),k}var M,L,H,k,w,C,q=0,F=!1,I=!1,g=!0;if(typeof e!="function")throw new TypeError(d);return u=f(u)||0,m(r)&&(F=!!r.leading,I="maxWait"in r,H=I?A(f(r.maxWait)||0,u):H,g="trailing"in r?!!r.trailing:g),P.cancel=re,P.flush=te,P}function s(e,u,r){var j=!0,E=!0;if(typeof e!="function")throw new TypeError(d);return m(r)&&(j="leading"in r?!!r.leading:j,E="trailing"in r?!!r.trailing:E),t(e,u,{leading:j,maxWait:u,trailing:E})}function m(e){var u=typeof e>"u"?"undefined":l(e);return!!e&&(u=="object"||u=="function")}function y(e){return!!e&&(typeof e>"u"?"undefined":l(e))=="object"}function n(e){return(typeof e>"u"?"undefined":l(e))=="symbol"||y(e)&&v.call(e)==b}function f(e){if(typeof e=="number")return e;if(n(e))return c;if(m(e)){var u=typeof e.valueOf=="function"?e.valueOf():e;e=m(u)?u+"":u}if(typeof e!="string")return e===0?e:+e;e=e.replace(S,"");var r=V.test(e);return r||G.test(e)?Q(e.slice(2),r?2:8):z.test(e)?c:+e}var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="Expected a function",c=NaN,b="[object Symbol]",S=/^\s+|\s+$/g,z=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,G=/^0o[0-7]+$/i,Q=parseInt,ee=(typeof a>"u"?"undefined":l(a))=="object"&&a&&a.Object===Object&&a,U=(typeof self>"u"?"undefined":l(self))=="object"&&self&&self.Object===Object&&self,O=ee||U||Function("return this")(),K=Object.prototype,v=K.toString,A=Math.max,T=Math.min,o=function(){return O.Date.now()};h.exports=s}).call(i,function(){return this}())},function(h,i){(function(a){function t(o,e,u){function r(g){var p=P,$=M;return P=M=void 0,C=g,H=o.apply($,p)}function j(g){return C=g,k=setTimeout(Y,e),q?r(g):H}function E(g){var p=g-w,$=g-C,W=e-p;return F?A(W,L-$):W}function D(g){var p=g-w,$=g-C;return w===void 0||p>=e||p<0||F&&$>=L}function Y(){var g=T();return D(g)?B(g):void(k=setTimeout(Y,E(g)))}function B(g){return k=void 0,I&&P?r(g):(P=M=void 0,H)}function ae(){k!==void 0&&clearTimeout(k),C=0,P=w=M=k=void 0}function re(){return k===void 0?H:B(T())}function te(){var g=T(),p=D(g);if(P=arguments,M=this,w=g,p){if(k===void 0)return j(w);if(F)return k=setTimeout(Y,e),r(w)}return k===void 0&&(k=setTimeout(Y,e)),H}var P,M,L,H,k,w,C=0,q=!1,F=!1,I=!0;if(typeof o!="function")throw new TypeError(l);return e=n(e)||0,s(u)&&(q=!!u.leading,F="maxWait"in u,L=F?v(n(u.maxWait)||0,e):L,I="trailing"in u?!!u.trailing:I),te.cancel=ae,te.flush=re,te}function s(o){var e=typeof o>"u"?"undefined":f(o);return!!o&&(e=="object"||e=="function")}function m(o){return!!o&&(typeof o>"u"?"undefined":f(o))=="object"}function y(o){return(typeof o>"u"?"undefined":f(o))=="symbol"||m(o)&&K.call(o)==c}function n(o){if(typeof o=="number")return o;if(y(o))return d;if(s(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=s(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=o.replace(b,"");var u=z.test(o);return u||V.test(o)?G(o.slice(2),u?2:8):S.test(o)?d:+o}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},l="Expected a function",d=NaN,c="[object Symbol]",b=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,V=/^0o[0-7]+$/i,G=parseInt,Q=(typeof a>"u"?"undefined":f(a))=="object"&&a&&a.Object===Object&&a,ee=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,U=Q||ee||Function("return this")(),O=Object.prototype,K=O.toString,v=Math.max,A=Math.min,T=function(){return U.Date.now()};h.exports=t}).call(i,function(){return this}())},function(h,i){function a(f){var l=void 0,d=void 0;for(l=0;l<f.length;l+=1)if(d=f[l],d.dataset&&d.dataset.aos||d.children&&a(d.children))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!t()}function m(f,l){var d=window.document,c=t(),b=new c(y);n=l,b.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function y(f){f&&f.forEach(function(l){var d=Array.prototype.slice.call(l.addedNodes),c=Array.prototype.slice.call(l.removedNodes),b=d.concat(c);if(a(b))return n()})}Object.defineProperty(i,"__esModule",{value:!0});var n=function(){};i.default={isSupported:s,ready:m}},function(h,i){function a(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function d(c,b){for(var S=0;S<b.length;S++){var z=b[S];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(c,z.key,z)}}return function(c,b,S){return b&&d(c.prototype,b),S&&d(c,S),c}}(),m=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,y=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,n=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function d(){a(this,d)}return s(d,[{key:"phone",value:function(){var c=t();return!(!m.test(c)&&!y.test(c.substr(0,4)))}},{key:"mobile",value:function(){var c=t();return!(!n.test(c)&&!f.test(c.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();i.default=new l},function(h,i){Object.defineProperty(i,"__esModule",{value:!0});var a=function(s,m,y){var n=s.node.getAttribute("data-aos-once");m>s.position?s.node.classList.add("aos-animate"):typeof n<"u"&&(n==="false"||!y&&n!=="true")&&s.node.classList.remove("aos-animate")},t=function(s,m){var y=window.pageYOffset,n=window.innerHeight;s.forEach(function(f,l){a(f,n+y,m)})};i.default=t},function(h,i,a){function t(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(i,"__esModule",{value:!0});var s=a(12),m=t(s),y=function(n,f){return n.forEach(function(l,d){l.node.classList.add("aos-init"),l.position=(0,m.default)(l.node,f.offset)}),n};i.default=y},function(h,i,a){function t(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(i,"__esModule",{value:!0});var s=a(13),m=t(s),y=function(n,f){var l=0,d=0,c=window.innerHeight,b={offset:n.getAttribute("data-aos-offset"),anchor:n.getAttribute("data-aos-anchor"),anchorPlacement:n.getAttribute("data-aos-anchor-placement")};switch(b.offset&&!isNaN(b.offset)&&(d=parseInt(b.offset)),b.anchor&&document.querySelectorAll(b.anchor)&&(n=document.querySelectorAll(b.anchor)[0]),l=(0,m.default)(n).top,b.anchorPlacement){case"top-bottom":break;case"center-bottom":l+=n.offsetHeight/2;break;case"bottom-bottom":l+=n.offsetHeight;break;case"top-center":l+=c/2;break;case"bottom-center":l+=c/2+n.offsetHeight;break;case"center-center":l+=c/2+n.offsetHeight/2;break;case"top-top":l+=c;break;case"bottom-top":l+=n.offsetHeight+c;break;case"center-top":l+=n.offsetHeight/2+c}return b.anchorPlacement||b.offset||isNaN(f)||(d=f),l+d};i.default=y},function(h,i){Object.defineProperty(i,"__esModule",{value:!0});var a=function(t){for(var s=0,m=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)s+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),m+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:m,left:s}};i.default=a},function(h,i){Object.defineProperty(i,"__esModule",{value:!0});var a=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(s){return{node:s}})};i.default=a}])})})(le);var ve=le.exports;const ge=de(ve),ye={mounted(){this.initializeScrollbar()},methods:{initializeScrollbar(){const _=this.$jQuery(this.$refs.scrollContainer),N=200,h=100;_.mCustomScrollbar({axis:"x",theme:"dark-thin",scrollbarPosition:"outside",autoHideScrollbar:!0,scrollInertia:800,mouseWheel:{scrollAmount:N}}),_.on("mousewheel",i=>{const a=_.mCustomScrollbar("getScrollPosition").x,t=(i.deltaX||i.deltaY)*h,s=a-t;_.mCustomScrollbar("scrollTo",s,{scrollInertia:50}),i.preventDefault()})}}},we={ref:"scrollContainer",class:"custom-scrollbar"},xe={class:"scroll-content"},_e=x("div",{class:"scroll-progress hide-mobile"},[x("div",null,[x("div")])],-1);function ke(_,N,h,i,a,t){return X(),Z("div",we,[x("div",xe,[ue(_.$slots,"default"),_e])],512)}const je=oe(ye,[["render",ke]]),Se={},$e={class:"fixed flex items-center justify-between w-screen h-fit p-7 z-20 text-white"},ze=ne('<div><ul class="flex text-lg gap-6 font-medium"><li><button class="relative inline-flex items-center leading-6 align-middle border-none after:content-[&#39;&#39;] after:absolute after:h-[2px] after:w-0 hover:after:w-full after:end-0 hover:after:ti-auto after:bottom-px after:start-0 after:duration-500 hover:text-primary after:bg-primary duration-500">Home</button></li><li><button class="relative inline-flex items-center leading-6 align-middle border-none after:content-[&#39;&#39;] after:absolute after:h-[2px] after:w-0 hover:after:w-full after:end-0 hover:after:ti-auto after:bottom-px after:start-0 after:duration-500 hover:text-primary after:bg-primary duration-500">About</button></li><li><button class="relative inline-flex items-center leading-6 align-middle border-none after:content-[&#39;&#39;] after:absolute after:h-[2px] after:w-0 hover:after:w-full after:end-0 hover:after:ti-auto after:bottom-px after:start-0 after:duration-500 hover:text-primary after:bg-primary duration-500">Portfolio</button></li><li><button class="relative inline-flex items-center leading-6 align-middle border-none after:content-[&#39;&#39;] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:ti-auto after:bottom-px after:start-0 after:duration-500 hover:text-primary after:bg-primary duration-500">Contact</button></li></ul></div><div class="flex items-center"><a href="/resume.pdf" class="btn"><i class="animation"></i><div class="svg-wrapper-1"><div class="svg-wrapper"><svg xmlns="http://www.w3.org/2000/svg" class="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="currentColor"><path d="M13 13V18.585L14.8284 16.7574L16.2426 18.1716L12 22.4142L7.75736 18.1716L9.17157 16.7574L11 18.585V13H13ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z"></path></svg></div></div><span>Download Resume</span><i class="animation"></i></a></div>',2),Oe=[ze];function Ce(_,N){return X(),Z("div",$e,Oe)}const Me=oe(Se,[["render",Ce]]),Ae={class:"bg-black h-screen w-screen shrink-0"},Ee=ne('<div class="flex flex-col justify-center items-center h-screen text-white pointer-events-none testing_animation"><div class="text-[150px] font-bold leading-0 hero_text"><h1 class="leading-none animate__animated animate__fadeInUp hero_top_slow">Hello<span class="text-primary changed_hero_text">,</span></h1><div class="flex items-center gap-10"><h2 class="leading-none animate__animated animate__fadeInUp hero_mid_slow">I am</h2><div class="flex flex-col mt-10"><span class="relative inline w-fit text-[17px] whitespace-normal tracking-wider leading-relaxed h-auto font-medium removed_hero_text z-[1] before:absolute before:bottom-[3px] before:left-0 before:h-[4px] before:w-full before:bg-[#fa5b0f]/60 before:z-[-1] animate__animated animate__lightSpeedInRight">Front-end Developer </span><span class="relative inline w-fit text-[17px] whitespace-normal tracking-wider leading-relaxed h-auto font-medium removed_hero_text z-[1] before:absolute before:bottom-[3px] before:left-0 before:h-[4px] before:w-full before:bg-[#fa5b0f]/60 before:z-[-1] animate__animated animate__lightSpeedInRight">with 1+ years of experience</span><span class="relative inline w-fit text-[17px] whitespace-normal tracking-wider leading-relaxed h-auto font-medium removed_hero_text z-[1] before:absolute before:bottom-[3px] before:left-0 before:h-[4px] before:w-full before:bg-[#fa5b0f]/60 before:z-[-1] animate__animated animate__lightSpeedInRight">based in Pakistan</span></div></div><h3 class="leading-none animate__animated animate__fadeInUp hero_high_slow">Abdullah</h3></div></div>',1),Pe=[Ee],Le={__name:"HeroSection",setup(_){return fe(()=>{particlesJS("particles-js",{particles:{number:{value:70,density:{enable:!0,value_area:700}},color:{value:"#fa5b0f"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:4,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:140,color:"#ccc",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}),(N,h)=>(X(),Z("div",Ae,Pe))}},He="/assets/abdullah-img-oenCFmrN.jpg",Ie={data(){return{boxShadow:"rgba(250, 89, 15, 0.3) -7px 5px, rgba(250, 89, 15, 0.2) -14px 10px, rgba(250, 89, 15, 0.1) -21px 15px, rgba(250, 89, 15, 0.1) -28px 20px, rgba(250, 89, 15, 0.07) -35px 25px"}},mounted(){},methods:{}},Ne={class:"bg-black h-screen w-screen shrink-0"},Te={class:"flex justify-center items-center h-screen text-white"},De={class:"flex justify-center items-center gap-28"},qe=x("div",{class:"absolute inset-0 w-full h-full bg-black/45 rounded-2xl"},null,-1),Fe=x("img",{src:He,class:"max-w-[360px] objec-cover",alt:""},null,-1),We=[qe,Fe],Ye=ne('<div><div class="text-[65px] font-bold leading-[1.2em]"><h4 class="relative w-fit z-[1] before:absolute before:left-3 before:top-3 before:w-52 before:h-[4rem] before:bg-[#fa5b0f]/50 before:-skew-x-[36deg] before:z-[-1]">Muhammad</h4><h3 class="text-[70px]">Abdullah Suri</h3></div><div class="flex gap-12 mt-12"><ul class="space-y-3 text-lg"><li class="flex items-center gap-4"><span class="block w-1.5 h-1.5 rounded-full bg-primary"></span><p class="text-gray-400 group pointer-events-none">Age : <span class="ml-2 text-white">19 Years</span></p></li><li class="flex items-center gap-4"><span class="block w-1.5 h-1.5 rounded-full bg-primary"></span><p class="text-gray-400 group pointer-events-none">Nationality : <span class="ml-2 text-white">Pakistan</span></p></li><li class="flex items-center gap-4"><span class="block w-1.5 h-1.5 rounded-full bg-primary"></span><p class="text-gray-400 group pointer-events-none">Freelance : <span class="ml-2 text-white">Available</span></p></li><li class="flex items-center gap-4"><span class="block w-1.5 h-1.5 rounded-full bg-primary"></span><p class="text-gray-400 group pointer-events-none">Langages : <span class="ml-2 text-white">English / Urdu</span></p></li><div></div></ul><ul class="space-y-3 text-lg"><li class="flex items-center gap-4"><span class="block w-1.5 h-1.5 rounded-full bg-primary"></span><p class="text-gray-400 group pointer-events-none">City : <span class="ml-2 text-white">Karachi</span></p></li><li class="flex items-center gap-4"><span class="block w-1.5 h-1.5 rounded-full bg-primary"></span><a href="tel:+92330811066" class="text-gray-400 group">Phone : <span class="ml-2 text-white group-hover:text-primary transition-all duration-300">+92 330811066</span></a></li><li class="flex items-center gap-4"><span class="block w-1.5 h-1.5 rounded-full bg-primary"></span><a href="mailto:m.abdullahsuri@gmail.com" class="text-gray-400 group">Email : <span class="ml-2 text-white group-hover:text-primary transition-all duration-300">m.abdullahsuri@gmail.com</span></a></li><li class="flex items-center gap-4"><span class="block w-1.5 h-1.5 rounded-full bg-primary"></span><a href="https://www.linkedin.com/in/abdullah-suri-a7b012269/" class="text-gray-400 group">LinkedIn : <span class="ml-2 text-white group-hover:text-primary transition-all duration-300">Abdullah Suri</span></a></li><div></div></ul></div></div>',1);function Be(_,N,h,i,a,t){return X(),Z("div",Ne,[x("div",Te,[x("div",De,[x("div",{class:"relative shine rounded-2xl trigger-element",style:pe({boxShadow:a.boxShadow})},We,4),Ye])])])}const Ve=oe(Ie,[["render",Be]]),Ue={mounted(){}},Ke={class:"bg-black w-screen shrink-0"},Re={class:"flex flex-col items-center justify-center h-full"},Je=ne('<h4 class="text-white text-[65px] font-bold leading-[1.2em] capitalize heading_style">Projects i Made</h4><div class="flex gap-5 my-10"><a href="https://physicianux.com/" target="_blank"><div class="w-full max-w-[350px] hover:bg-bottom transition-all duration-[5s] h-full project_01 border-[#fa5b0f]/60"><div class="portfolio-overlay group overflow-hidden"><div class="invisible group-hover:visible translate-y-24 group-hover:translate-y-0 transition-ease-in duration-300 flex flex-col justify-end items-start h-full p-4 text-white"><h2 class="text-xl font-semibold underline underline-offset-2">Physcian Ux</h2><div class="whitespace-break-spaces text-xs font-medium mt-2"><p>Enhanced medical notes powered by AI. Effortless, precise, and efficient documentation for modern healthcare</p></div></div></div></div></a><div><a href="https://interactive-keyboard.netlify.app" target="_blank"><div class="w-full max-w-[350px] hover:bg-bottom transition-all duration-[5s] max-h-[215px] project_03 border border-[#fa5b0f]/60"><div class="portfolio-overlay group overflow-hidden"><div class="invisible group-hover:visible translate-y-24 group-hover:translate-y-0 transition-ease-in duration-300 flex flex-col justify-end items-start h-full p-3 text-[#adadad]"><h2 class="text-lg font-semibold underline underline-offset-2">Interactive Keyboard</h2><div class="whitespace-break-spaces text-xs font-medium mt-0.5"><p>Interactive keyboard that Interact with your Keyboard. made with HTML, CSS and Js</p></div></div></div></div></a><a href="https://www.teksyo.com/" target="_blank"><div class="w-full max-w-[350px] hover:bg-bottom transition-all duration-[5s] max-h-[215px] project_04 mt-5 border-[#fa5b0f]/60"><div class="portfolio-overlay group overflow-hidden"><div class="invisible group-hover:visible translate-y-24 group-hover:translate-y-0 transition-ease-in duration-300 flex flex-col justify-end items-start h-full p-3 text-white"><h2 class="text-lg font-semibold underline underline-offset-2">Teksyo</h2><div class="whitespace-break-spaces text-xs font-medium mt-0.5"><p>IT Company Provides Digital Services</p></div></div></div></div></a></div><a href="https://platypusdreaming.com.au/" target="_blank"><div class="w-full max-w-[350px] hover:bg-bottom transition-all duration-[5s] h-full project_02 border-[#fa5b0f]/60"><div class="portfolio-overlay group overflow-hidden"><div class="invisible group-hover:visible translate-y-24 group-hover:translate-y-0 transition-ease-in duration-300 flex flex-col justify-end items-start h-full p-3 text-white"><h2 class="text-lg font-semibold underline underline-offset-2">Platypus Dreaming</h2><div class="whitespace-break-spaces text-xs font-medium mt-0.5"><p>E-commerce Website Develop on wordpress with help of Elementor</p></div></div></div></div></a></div>',2),Xe=x("div",{class:"absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-900 delay-150 group-hover:delay-75"},null,-1),Ze=x("div",{class:"absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-800 delay-150 group-hover:delay-100"},null,-1),Ge=x("div",{class:"absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-700 delay-150 group-hover:delay-150"},null,-1),Qe=x("div",{class:"absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-600 delay-150 group-hover:delay-200"},null,-1),et=x("div",{class:"absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-500 delay-150 group-hover:delay-300"},null,-1),tt=x("p",{class:"z-10"},"View All",-1);function ot(_,N,h,i,a,t){const s=R("router-link");return X(),Z("div",Ke,[x("div",Re,[Je,J(s,{to:"",class:"relative border-[2px] border-[#fa5b0f] duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-56 rounded-md bg-orange-800 p-2 flex justify-center items-center font-semibold"},{default:se(()=>[Xe,Ze,Ge,Qe,et,tt]),_:1})])])}const at=oe(Ue,[["render",ot]]),nt={mounted(){ge.init()},components:{CustomScrollbar:je,Header:Me,HeroSection:Le,AboutMe:Ve,Portfolio:at}},rt=_=>(be("data-v-ae6f207e"),_=_(),he(),_),it={ref:"",id:"smooth-wrapper",class:"flex flex-row whitespace-nowrap min-h-screen"},st=rt(()=>x("div",{id:"particles-js",class:"absolute top-0 left-0 h-full"},null,-1));function lt(_,N,h,i,a,t){const s=R("Header"),m=R("HeroSection"),y=R("AboutMe"),n=R("Portfolio"),f=R("CustomScrollbar");return X(),Z(me,null,[J(s),J(f,{class:"!h-screen"},{default:se(()=>[x("div",it,[st,J(m),J(y),J(n)],512)]),_:1})],64)}const dt=oe(nt,[["render",lt],["__scopeId","data-v-ae6f207e"]]);export{dt as default};
