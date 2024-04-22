function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Teachers-1PZKHx6K.js","assets/TeachersCard-BYOz_0mn.js","assets/Favorite-D5Ap6BAt.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var fI=Object.defineProperty;var hI=(t,e,n)=>e in t?fI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Rd=(t,e,n)=>(hI(t,typeof e!="symbol"?e+"":e,n),n);function pI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ys(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vw={exports:{}},mc={},_w={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Na=Symbol.for("react.element"),mI=Symbol.for("react.portal"),gI=Symbol.for("react.fragment"),yI=Symbol.for("react.strict_mode"),vI=Symbol.for("react.profiler"),_I=Symbol.for("react.provider"),wI=Symbol.for("react.context"),EI=Symbol.for("react.forward_ref"),SI=Symbol.for("react.suspense"),CI=Symbol.for("react.memo"),TI=Symbol.for("react.lazy"),Cy=Symbol.iterator;function xI(t){return t===null||typeof t!="object"?null:(t=Cy&&t[Cy]||t["@@iterator"],typeof t=="function"?t:null)}var ww={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ew=Object.assign,Sw={};function Qs(t,e,n){this.props=t,this.context=e,this.refs=Sw,this.updater=n||ww}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cw(){}Cw.prototype=Qs.prototype;function $p(t,e,n){this.props=t,this.context=e,this.refs=Sw,this.updater=n||ww}var Fp=$p.prototype=new Cw;Fp.constructor=$p;Ew(Fp,Qs.prototype);Fp.isPureReactComponent=!0;var Ty=Array.isArray,Tw=Object.prototype.hasOwnProperty,jp={current:null},xw={key:!0,ref:!0,__self:!0,__source:!0};function Iw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tw.call(e,r)&&!xw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Na,type:t,key:s,ref:o,props:i,_owner:jp.current}}function II(t,e){return{$$typeof:Na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Up(t){return typeof t=="object"&&t!==null&&t.$$typeof===Na}function bI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xy=/\/+/g;function Od(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bI(""+t.key):e.toString(36)}function Pl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Na:case mI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Od(o,0):r,Ty(i)?(n="",t!=null&&(n=t.replace(xy,"$&/")+"/"),Pl(i,e,n,"",function(u){return u})):i!=null&&(Up(i)&&(i=II(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ty(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Od(s,a);o+=Pl(s,e,n,l,i)}else if(l=xI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Od(s,a++),o+=Pl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nl(t,e,n){if(t==null)return t;var r=[],i=0;return Pl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},Rl={transition:null},PI={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:jp};K.Children={map:nl,forEach:function(t,e,n){nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nl(t,function(){e++}),e},toArray:function(t){return nl(t,function(e){return e})||[]},only:function(t){if(!Up(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=Qs;K.Fragment=gI;K.Profiler=vI;K.PureComponent=$p;K.StrictMode=yI;K.Suspense=SI;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PI;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ew({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tw.call(e,l)&&!xw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Na,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:wI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_I,_context:t},t.Consumer=t};K.createElement=Iw;K.createFactory=function(t){var e=Iw.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:EI,render:t}};K.isValidElement=Up;K.lazy=function(t){return{$$typeof:TI,_payload:{_status:-1,_result:t},_init:kI}};K.memo=function(t,e){return{$$typeof:CI,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return it.current.useCallback(t,e)};K.useContext=function(t){return it.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return it.current.useDeferredValue(t)};K.useEffect=function(t,e){return it.current.useEffect(t,e)};K.useId=function(){return it.current.useId()};K.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return it.current.useMemo(t,e)};K.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};K.useRef=function(t){return it.current.useRef(t)};K.useState=function(t){return it.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return it.current.useTransition()};K.version="18.2.0";_w.exports=K;var E=_w.exports;const ut=Ys(E),Uf=pI({__proto__:null,default:ut},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RI=E,OI=Symbol.for("react.element"),NI=Symbol.for("react.fragment"),AI=Object.prototype.hasOwnProperty,DI=RI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LI={key:!0,ref:!0,__self:!0,__source:!0};function bw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)AI.call(e,r)&&!LI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:OI,type:t,key:s,ref:o,props:i,_owner:DI.current}}mc.Fragment=NI;mc.jsx=bw;mc.jsxs=bw;vw.exports=mc;var w=vw.exports,zf={},kw={exports:{}},Rt={},Pw={exports:{}},Rw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,M){var z=O.length;O.push(M);e:for(;0<z;){var X=z-1>>>1,Y=O[X];if(0<i(Y,M))O[X]=M,O[z]=Y,z=X;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var M=O[0],z=O.pop();if(z!==M){O[0]=z;e:for(var X=0,Y=O.length,nn=Y>>>1;X<nn;){var Ze=2*(X+1)-1,et=O[Ze],He=Ze+1,_t=O[He];if(0>i(et,z))He<Y&&0>i(_t,et)?(O[X]=_t,O[He]=z,X=He):(O[X]=et,O[Ze]=z,X=Ze);else if(He<Y&&0>i(_t,z))O[X]=_t,O[He]=z,X=He;else break e}}return M}function i(O,M){var z=O.sortIndex-M.sortIndex;return z!==0?z:O.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,f=3,p=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=O)r(u),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(u)}}function _(O){if(v=!1,g(O),!y)if(n(l)!==null)y=!0,Xr(x);else{var M=n(u);M!==null&&wn(_,M.startTime-O)}}function x(O,M){y=!1,v&&(v=!1,m(b),b=-1),p=!0;var z=f;try{for(g(M),c=n(l);c!==null&&(!(c.expirationTime>M)||O&&!W());){var X=c.callback;if(typeof X=="function"){c.callback=null,f=c.priorityLevel;var Y=X(c.expirationTime<=M);M=t.unstable_now(),typeof Y=="function"?c.callback=Y:c===n(l)&&r(l),g(M)}else r(l);c=n(l)}if(c!==null)var nn=!0;else{var Ze=n(u);Ze!==null&&wn(_,Ze.startTime-M),nn=!1}return nn}finally{c=null,f=z,p=!1}}var C=!1,T=null,b=-1,D=5,$=-1;function W(){return!(t.unstable_now()-$<D)}function Fe(){if(T!==null){var O=t.unstable_now();$=O;var M=!0;try{M=T(!0,O)}finally{M?we():(C=!1,T=null)}}else C=!1}var we;if(typeof h=="function")we=function(){h(Fe)};else if(typeof MessageChannel<"u"){var vt=new MessageChannel,Vi=vt.port2;vt.port1.onmessage=Fe,we=function(){Vi.postMessage(null)}}else we=function(){S(Fe,0)};function Xr(O){T=O,C||(C=!0,we())}function wn(O,M){b=S(function(){O(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,Xr(x))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var z=f;f=M;try{return O()}finally{f=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,M){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var z=f;f=O;try{return M()}finally{f=z}},t.unstable_scheduleCallback=function(O,M,z){var X=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?X+z:X):z=X,O){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=z+Y,O={id:d++,callback:M,priorityLevel:O,startTime:z,expirationTime:Y,sortIndex:-1},z>X?(O.sortIndex=z,e(u,O),n(l)===null&&O===n(u)&&(v?(m(b),b=-1):v=!0,wn(_,z-X))):(O.sortIndex=Y,e(l,O),y||p||(y=!0,Xr(x))),O},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(O){var M=f;return function(){var z=f;f=M;try{return O.apply(this,arguments)}finally{f=z}}}})(Rw);Pw.exports=Rw;var MI=Pw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ow=E,bt=MI;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nw=new Set,Qo={};function Ni(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(Qo[t]=e,t=0;t<e.length;t++)Nw.add(e[t])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wf=Object.prototype.hasOwnProperty,$I=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Iy={},by={};function FI(t){return Wf.call(by,t)?!0:Wf.call(Iy,t)?!1:$I.test(t)?by[t]=!0:(Iy[t]=!0,!1)}function jI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function UI(t,e,n,r){if(e===null||typeof e>"u"||jI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ve[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ve[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ve[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ve[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ve[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ve[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ve[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ve[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ve[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var zp=/[\-:]([a-z])/g;function Wp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zp,Wp);Ve[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zp,Wp);Ve[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zp,Wp);Ve[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ve[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ve[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bp(t,e,n,r){var i=Ve.hasOwnProperty(e)?Ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(UI(e,n,i,r)&&(n=null),r||i===null?FI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gn=Ow.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rl=Symbol.for("react.element"),Xi=Symbol.for("react.portal"),Ji=Symbol.for("react.fragment"),Vp=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),Aw=Symbol.for("react.provider"),Dw=Symbol.for("react.context"),Hp=Symbol.for("react.forward_ref"),Vf=Symbol.for("react.suspense"),Hf=Symbol.for("react.suspense_list"),Gp=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),Lw=Symbol.for("react.offscreen"),ky=Symbol.iterator;function co(t){return t===null||typeof t!="object"?null:(t=ky&&t[ky]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,Nd;function xo(t){if(Nd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nd=e&&e[1]||""}return`
`+Nd+t}var Ad=!1;function Dd(t,e){if(!t||Ad)return"";Ad=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ad=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xo(t):""}function zI(t){switch(t.tag){case 5:return xo(t.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return t=Dd(t.type,!1),t;case 11:return t=Dd(t.type.render,!1),t;case 1:return t=Dd(t.type,!0),t;default:return""}}function Gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ji:return"Fragment";case Xi:return"Portal";case Bf:return"Profiler";case Vp:return"StrictMode";case Vf:return"Suspense";case Hf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dw:return(t.displayName||"Context")+".Consumer";case Aw:return(t._context.displayName||"Context")+".Provider";case Hp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gp:return e=t.displayName||null,e!==null?e:Gf(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return Gf(t(e))}catch{}}return null}function WI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gf(e);case 8:return e===Vp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BI(t){var e=Mw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function il(t){t._valueTracker||(t._valueTracker=BI(t))}function $w(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Mw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kf(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Py(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fw(t,e){e=e.checked,e!=null&&Bp(t,"checked",e,!1)}function qf(t,e){Fw(t,e);var n=Dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yf(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ry(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yf(t,e,n){(e!=="number"||ou(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Io=Array.isArray;function ps(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Oy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Io(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function jw(t,e){var n=Dr(e.value),r=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ny(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Uw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Uw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sl,zw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sl=sl||document.createElement("div"),sl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VI=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(t){VI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ao[e]=Ao[t]})});function Ww(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ao.hasOwnProperty(t)&&Ao[t]?(""+e).trim():e+"px"}function Bw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ww(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var HI=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jf(t,e){if(e){if(HI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Zf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=null;function Kp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var th=null,ms=null,gs=null;function Ay(t){if(t=La(t)){if(typeof th!="function")throw Error(k(280));var e=t.stateNode;e&&(e=wc(e),th(t.stateNode,t.type,e))}}function Vw(t){ms?gs?gs.push(t):gs=[t]:ms=t}function Hw(){if(ms){var t=ms,e=gs;if(gs=ms=null,Ay(t),e)for(t=0;t<e.length;t++)Ay(e[t])}}function Gw(t,e){return t(e)}function Kw(){}var Ld=!1;function qw(t,e,n){if(Ld)return t(e,n);Ld=!0;try{return Gw(t,e,n)}finally{Ld=!1,(ms!==null||gs!==null)&&(Kw(),Hw())}}function Jo(t,e){var n=t.stateNode;if(n===null)return null;var r=wc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var nh=!1;if(Fn)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){nh=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{nh=!1}function GI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Do=!1,au=null,lu=!1,rh=null,KI={onError:function(t){Do=!0,au=t}};function qI(t,e,n,r,i,s,o,a,l){Do=!1,au=null,GI.apply(KI,arguments)}function YI(t,e,n,r,i,s,o,a,l){if(qI.apply(this,arguments),Do){if(Do){var u=au;Do=!1,au=null}else throw Error(k(198));lu||(lu=!0,rh=u)}}function Ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Yw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dy(t){if(Ai(t)!==t)throw Error(k(188))}function QI(t){var e=t.alternate;if(!e){if(e=Ai(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dy(i),t;if(s===r)return Dy(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Qw(t){return t=QI(t),t!==null?Xw(t):null}function Xw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xw(t);if(e!==null)return e;t=t.sibling}return null}var Jw=bt.unstable_scheduleCallback,Ly=bt.unstable_cancelCallback,XI=bt.unstable_shouldYield,JI=bt.unstable_requestPaint,Te=bt.unstable_now,ZI=bt.unstable_getCurrentPriorityLevel,qp=bt.unstable_ImmediatePriority,Zw=bt.unstable_UserBlockingPriority,uu=bt.unstable_NormalPriority,eb=bt.unstable_LowPriority,e1=bt.unstable_IdlePriority,gc=null,hn=null;function tb(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(gc,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:ib,nb=Math.log,rb=Math.LN2;function ib(t){return t>>>=0,t===0?32:31-(nb(t)/rb|0)|0}var ol=64,al=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=bo(a):(s&=o,s!==0&&(r=bo(s)))}else o=n&~i,o!==0?r=bo(o):s!==0&&(r=bo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),i=1<<n,r|=t[n],e&=~i;return r}function sb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ob(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=sb(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ih(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function t1(){var t=ol;return ol<<=1,!(ol&4194240)&&(ol=64),t}function Md(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function ab(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Yp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function n1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var r1,Qp,i1,s1,o1,sh=!1,ll=[],vr=null,_r=null,wr=null,Zo=new Map,ea=new Map,ar=[],lb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function My(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function ho(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=La(e),e!==null&&Qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ub(t,e,n,r,i){switch(e){case"focusin":return vr=ho(vr,t,e,n,r,i),!0;case"dragenter":return _r=ho(_r,t,e,n,r,i),!0;case"mouseover":return wr=ho(wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Zo.set(s,ho(Zo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ea.set(s,ho(ea.get(s)||null,t,e,n,r,i)),!0}return!1}function a1(t){var e=si(t.target);if(e!==null){var n=Ai(e);if(n!==null){if(e=n.tag,e===13){if(e=Yw(n),e!==null){t.blockedOn=e,o1(t.priority,function(){i1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ol(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);eh=r,n.target.dispatchEvent(r),eh=null}else return e=La(n),e!==null&&Qp(e),t.blockedOn=n,!1;e.shift()}return!0}function $y(t,e,n){Ol(t)&&n.delete(e)}function cb(){sh=!1,vr!==null&&Ol(vr)&&(vr=null),_r!==null&&Ol(_r)&&(_r=null),wr!==null&&Ol(wr)&&(wr=null),Zo.forEach($y),ea.forEach($y)}function po(t,e){t.blockedOn===e&&(t.blockedOn=null,sh||(sh=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,cb)))}function ta(t){function e(i){return po(i,t)}if(0<ll.length){po(ll[0],t);for(var n=1;n<ll.length;n++){var r=ll[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vr!==null&&po(vr,t),_r!==null&&po(_r,t),wr!==null&&po(wr,t),Zo.forEach(e),ea.forEach(e),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)a1(n),n.blockedOn===null&&ar.shift()}var ys=Gn.ReactCurrentBatchConfig,du=!0;function db(t,e,n,r){var i=ne,s=ys.transition;ys.transition=null;try{ne=1,Xp(t,e,n,r)}finally{ne=i,ys.transition=s}}function fb(t,e,n,r){var i=ne,s=ys.transition;ys.transition=null;try{ne=4,Xp(t,e,n,r)}finally{ne=i,ys.transition=s}}function Xp(t,e,n,r){if(du){var i=oh(t,e,n,r);if(i===null)Gd(t,e,r,fu,n),My(t,r);else if(ub(i,t,e,n,r))r.stopPropagation();else if(My(t,r),e&4&&-1<lb.indexOf(t)){for(;i!==null;){var s=La(i);if(s!==null&&r1(s),s=oh(t,e,n,r),s===null&&Gd(t,e,r,fu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gd(t,e,r,null,n)}}var fu=null;function oh(t,e,n,r){if(fu=null,t=Kp(r),t=si(t),t!==null)if(e=Ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Yw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fu=t,null}function l1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZI()){case qp:return 1;case Zw:return 4;case uu:case eb:return 16;case e1:return 536870912;default:return 16}default:return 16}}var pr=null,Jp=null,Nl=null;function u1(){if(Nl)return Nl;var t,e=Jp,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Nl=i.slice(t,1<r?1-r:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function Fy(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ul:Fy,this.isPropagationStopped=Fy,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zp=Ot(Xs),Da=_e({},Xs,{view:0,detail:0}),hb=Ot(Da),$d,Fd,mo,yc=_e({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:em,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?($d=t.screenX-mo.screenX,Fd=t.screenY-mo.screenY):Fd=$d=0,mo=t),$d)},movementY:function(t){return"movementY"in t?t.movementY:Fd}}),jy=Ot(yc),pb=_e({},yc,{dataTransfer:0}),mb=Ot(pb),gb=_e({},Da,{relatedTarget:0}),jd=Ot(gb),yb=_e({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),vb=Ot(yb),_b=_e({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wb=Ot(_b),Eb=_e({},Xs,{data:0}),Uy=Ot(Eb),Sb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Tb[t])?!!e[t]:!1}function em(){return xb}var Ib=_e({},Da,{key:function(t){if(t.key){var e=Sb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:em,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bb=Ot(Ib),kb=_e({},yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zy=Ot(kb),Pb=_e({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:em}),Rb=Ot(Pb),Ob=_e({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nb=Ot(Ob),Ab=_e({},yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Db=Ot(Ab),Lb=[9,13,27,32],tm=Fn&&"CompositionEvent"in window,Lo=null;Fn&&"documentMode"in document&&(Lo=document.documentMode);var Mb=Fn&&"TextEvent"in window&&!Lo,c1=Fn&&(!tm||Lo&&8<Lo&&11>=Lo),Wy=" ",By=!1;function d1(t,e){switch(t){case"keyup":return Lb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zi=!1;function $b(t,e){switch(t){case"compositionend":return f1(e);case"keypress":return e.which!==32?null:(By=!0,Wy);case"textInput":return t=e.data,t===Wy&&By?null:t;default:return null}}function Fb(t,e){if(Zi)return t==="compositionend"||!tm&&d1(t,e)?(t=u1(),Nl=Jp=pr=null,Zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c1&&e.locale!=="ko"?null:e.data;default:return null}}var jb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jb[t.type]:e==="textarea"}function h1(t,e,n,r){Vw(r),e=hu(e,"onChange"),0<e.length&&(n=new Zp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Mo=null,na=null;function Ub(t){T1(t,0)}function vc(t){var e=ns(t);if($w(e))return t}function zb(t,e){if(t==="change")return e}var p1=!1;if(Fn){var Ud;if(Fn){var zd="oninput"in document;if(!zd){var Hy=document.createElement("div");Hy.setAttribute("oninput","return;"),zd=typeof Hy.oninput=="function"}Ud=zd}else Ud=!1;p1=Ud&&(!document.documentMode||9<document.documentMode)}function Gy(){Mo&&(Mo.detachEvent("onpropertychange",m1),na=Mo=null)}function m1(t){if(t.propertyName==="value"&&vc(na)){var e=[];h1(e,na,t,Kp(t)),qw(Ub,e)}}function Wb(t,e,n){t==="focusin"?(Gy(),Mo=e,na=n,Mo.attachEvent("onpropertychange",m1)):t==="focusout"&&Gy()}function Bb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc(na)}function Vb(t,e){if(t==="click")return vc(e)}function Hb(t,e){if(t==="input"||t==="change")return vc(e)}function Gb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:Gb;function ra(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wf.call(e,i)||!en(t[i],e[i]))return!1}return!0}function Ky(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qy(t,e){var n=Ky(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ky(n)}}function g1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?g1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function y1(){for(var t=window,e=ou();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ou(t.document)}return e}function nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Kb(t){var e=y1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&g1(n.ownerDocument.documentElement,n)){if(r!==null&&nm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qy(n,s);var o=qy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qb=Fn&&"documentMode"in document&&11>=document.documentMode,es=null,ah=null,$o=null,lh=!1;function Yy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lh||es==null||es!==ou(r)||(r=es,"selectionStart"in r&&nm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$o&&ra($o,r)||($o=r,r=hu(ah,"onSelect"),0<r.length&&(e=new Zp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=es)))}function cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ts={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},Wd={},v1={};Fn&&(v1=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function _c(t){if(Wd[t])return Wd[t];if(!ts[t])return t;var e=ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in v1)return Wd[t]=e[n];return t}var _1=_c("animationend"),w1=_c("animationiteration"),E1=_c("animationstart"),S1=_c("transitionend"),C1=new Map,Qy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(t,e){C1.set(t,e),Ni(e,[t])}for(var Bd=0;Bd<Qy.length;Bd++){var Vd=Qy[Bd],Yb=Vd.toLowerCase(),Qb=Vd[0].toUpperCase()+Vd.slice(1);Br(Yb,"on"+Qb)}Br(_1,"onAnimationEnd");Br(w1,"onAnimationIteration");Br(E1,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(S1,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xb=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function Xy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,YI(r,e,void 0,t),t.currentTarget=null}function T1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Xy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Xy(i,a,u),s=l}}}if(lu)throw t=rh,lu=!1,rh=null,t}function ue(t,e){var n=e[hh];n===void 0&&(n=e[hh]=new Set);var r=t+"__bubble";n.has(r)||(x1(e,t,2,!1),n.add(r))}function Hd(t,e,n){var r=0;e&&(r|=4),x1(n,t,r,e)}var dl="_reactListening"+Math.random().toString(36).slice(2);function ia(t){if(!t[dl]){t[dl]=!0,Nw.forEach(function(n){n!=="selectionchange"&&(Xb.has(n)||Hd(n,!1,t),Hd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dl]||(e[dl]=!0,Hd("selectionchange",!1,e))}}function x1(t,e,n,r){switch(l1(e)){case 1:var i=db;break;case 4:i=fb;break;default:i=Xp}n=i.bind(null,e,n,t),i=void 0,!nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=si(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}qw(function(){var u=s,d=Kp(n),c=[];e:{var f=C1.get(t);if(f!==void 0){var p=Zp,y=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":p=bb;break;case"focusin":y="focus",p=jd;break;case"focusout":y="blur",p=jd;break;case"beforeblur":case"afterblur":p=jd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=jy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=mb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Rb;break;case _1:case w1:case E1:p=vb;break;case S1:p=Nb;break;case"scroll":p=hb;break;case"wheel":p=Db;break;case"copy":case"cut":case"paste":p=wb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=zy}var v=(e&4)!==0,S=!v&&t==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var h=u,g;h!==null;){g=h;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=Jo(h,m),_!=null&&v.push(sa(h,_,g)))),S)break;h=h.return}0<v.length&&(f=new p(f,y,null,n,d),c.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==eh&&(y=n.relatedTarget||n.fromElement)&&(si(y)||y[jn]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?si(y):null,y!==null&&(S=Ai(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=jy,_="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=zy,_="onPointerLeave",m="onPointerEnter",h="pointer"),S=p==null?f:ns(p),g=y==null?f:ns(y),f=new v(_,h+"leave",p,n,d),f.target=S,f.relatedTarget=g,_=null,si(d)===u&&(v=new v(m,h+"enter",y,n,d),v.target=g,v.relatedTarget=S,_=v),S=_,p&&y)t:{for(v=p,m=y,h=0,g=v;g;g=Gi(g))h++;for(g=0,_=m;_;_=Gi(_))g++;for(;0<h-g;)v=Gi(v),h--;for(;0<g-h;)m=Gi(m),g--;for(;h--;){if(v===m||m!==null&&v===m.alternate)break t;v=Gi(v),m=Gi(m)}v=null}else v=null;p!==null&&Jy(c,f,p,v,!1),y!==null&&S!==null&&Jy(c,S,y,v,!0)}}e:{if(f=u?ns(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var x=zb;else if(Vy(f))if(p1)x=Hb;else{x=Bb;var C=Wb}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=Vb);if(x&&(x=x(t,u))){h1(c,x,n,d);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Yf(f,"number",f.value)}switch(C=u?ns(u):window,t){case"focusin":(Vy(C)||C.contentEditable==="true")&&(es=C,ah=u,$o=null);break;case"focusout":$o=ah=es=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,Yy(c,n,d);break;case"selectionchange":if(qb)break;case"keydown":case"keyup":Yy(c,n,d)}var T;if(tm)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Zi?d1(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(c1&&n.locale!=="ko"&&(Zi||b!=="onCompositionStart"?b==="onCompositionEnd"&&Zi&&(T=u1()):(pr=d,Jp="value"in pr?pr.value:pr.textContent,Zi=!0)),C=hu(u,b),0<C.length&&(b=new Uy(b,t,null,n,d),c.push({event:b,listeners:C}),T?b.data=T:(T=f1(n),T!==null&&(b.data=T)))),(T=Mb?$b(t,n):Fb(t,n))&&(u=hu(u,"onBeforeInput"),0<u.length&&(d=new Uy("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=T))}T1(c,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Jo(t,n),s!=null&&r.unshift(sa(t,s,i)),s=Jo(t,e),s!=null&&r.push(sa(t,s,i))),t=t.return}return r}function Gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Jo(n,s),l!=null&&o.unshift(sa(n,l,a))):i||(l=Jo(n,s),l!=null&&o.push(sa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Jb=/\r\n?/g,Zb=/\u0000|\uFFFD/g;function Zy(t){return(typeof t=="string"?t:""+t).replace(Jb,`
`).replace(Zb,"")}function fl(t,e,n){if(e=Zy(e),Zy(t)!==e&&n)throw Error(k(425))}function pu(){}var uh=null,ch=null;function dh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fh=typeof setTimeout=="function"?setTimeout:void 0,ek=typeof clearTimeout=="function"?clearTimeout:void 0,ev=typeof Promise=="function"?Promise:void 0,tk=typeof queueMicrotask=="function"?queueMicrotask:typeof ev<"u"?function(t){return ev.resolve(null).then(t).catch(nk)}:fh;function nk(t){setTimeout(function(){throw t})}function Kd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ta(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ta(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),cn="__reactFiber$"+Js,oa="__reactProps$"+Js,jn="__reactContainer$"+Js,hh="__reactEvents$"+Js,rk="__reactListeners$"+Js,ik="__reactHandles$"+Js;function si(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tv(t);t!==null;){if(n=t[cn])return n;t=tv(t)}return e}t=n,n=t.parentNode}return null}function La(t){return t=t[cn]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function wc(t){return t[oa]||null}var ph=[],rs=-1;function Vr(t){return{current:t}}function he(t){0>rs||(t.current=ph[rs],ph[rs]=null,rs--)}function le(t,e){rs++,ph[rs]=t.current,t.current=e}var Lr={},Xe=Vr(Lr),ft=Vr(!1),gi=Lr;function ks(t,e){var n=t.type.contextTypes;if(!n)return Lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ht(t){return t=t.childContextTypes,t!=null}function mu(){he(ft),he(Xe)}function nv(t,e,n){if(Xe.current!==Lr)throw Error(k(168));le(Xe,e),le(ft,n)}function I1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,WI(t)||"Unknown",i));return _e({},n,r)}function gu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,gi=Xe.current,le(Xe,t),le(ft,ft.current),!0}function rv(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=I1(t,e,gi),r.__reactInternalMemoizedMergedChildContext=t,he(ft),he(Xe),le(Xe,t)):he(ft),le(ft,n)}var bn=null,Ec=!1,qd=!1;function b1(t){bn===null?bn=[t]:bn.push(t)}function sk(t){Ec=!0,b1(t)}function Hr(){if(!qd&&bn!==null){qd=!0;var t=0,e=ne;try{var n=bn;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bn=null,Ec=!1}catch(i){throw bn!==null&&(bn=bn.slice(t+1)),Jw(qp,Hr),i}finally{ne=e,qd=!1}}return null}var is=[],ss=0,yu=null,vu=0,Dt=[],Lt=0,yi=null,kn=1,Pn="";function Zr(t,e){is[ss++]=vu,is[ss++]=yu,yu=t,vu=e}function k1(t,e,n){Dt[Lt++]=kn,Dt[Lt++]=Pn,Dt[Lt++]=yi,yi=t;var r=kn;t=Pn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var s=32-Qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kn=1<<32-Qt(e)+i|n<<i|r,Pn=s+t}else kn=1<<s|n<<i|r,Pn=t}function rm(t){t.return!==null&&(Zr(t,1),k1(t,1,0))}function im(t){for(;t===yu;)yu=is[--ss],is[ss]=null,vu=is[--ss],is[ss]=null;for(;t===yi;)yi=Dt[--Lt],Dt[Lt]=null,Pn=Dt[--Lt],Dt[Lt]=null,kn=Dt[--Lt],Dt[Lt]=null}var xt=null,St=null,me=!1,Ht=null;function P1(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function iv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,St=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yi!==null?{id:kn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,St=null,!0):!1;default:return!1}}function mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gh(t){if(me){var e=St;if(e){var n=e;if(!iv(t,e)){if(mh(t))throw Error(k(418));e=Er(n.nextSibling);var r=xt;e&&iv(t,e)?P1(r,n):(t.flags=t.flags&-4097|2,me=!1,xt=t)}}else{if(mh(t))throw Error(k(418));t.flags=t.flags&-4097|2,me=!1,xt=t}}}function sv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function hl(t){if(t!==xt)return!1;if(!me)return sv(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dh(t.type,t.memoizedProps)),e&&(e=St)){if(mh(t))throw R1(),Error(k(418));for(;e;)P1(t,e),e=Er(e.nextSibling)}if(sv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=xt?Er(t.stateNode.nextSibling):null;return!0}function R1(){for(var t=St;t;)t=Er(t.nextSibling)}function Ps(){St=xt=null,me=!1}function sm(t){Ht===null?Ht=[t]:Ht.push(t)}var ok=Gn.ReactCurrentBatchConfig;function Bt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var _u=Vr(null),wu=null,os=null,om=null;function am(){om=os=wu=null}function lm(t){var e=_u.current;he(_u),t._currentValue=e}function yh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vs(t,e){wu=t,om=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ct=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(om!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(wu===null)throw Error(k(308));os=t,wu.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var oi=null;function um(t){oi===null?oi=[t]:oi.push(t)}function O1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,um(e)):(n.next=i.next,i.next=n),e.interleaved=n,Un(t,r)}function Un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function cm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function N1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Un(t,n)}return i=r.interleaved,i===null?(e.next=e,um(r)):(e.next=i.next,i.next=e),r.interleaved=e,Un(t,n)}function Dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yp(t,n)}}function ov(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Eu(t,e,n,r){var i=t.updateQueue;sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){c=y.call(p,c,f);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(p,c,f):y,f==null)break e;c=_e({},c,f);break e;case 2:sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=c):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_i|=o,t.lanes=o,t.memoizedState=c}}function av(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var A1=new Ow.Component().refs;function vh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sc={isMounted:function(t){return(t=t._reactInternals)?Ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Tr(t),s=Dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,i),e!==null&&(Xt(e,t,i,r),Dl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Tr(t),s=Dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,i),e!==null&&(Xt(e,t,i,r),Dl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=Tr(t),i=Dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Sr(t,i,r),e!==null&&(Xt(e,t,r,n),Dl(e,t,r))}};function lv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,r)||!ra(i,s):!0}function D1(t,e,n){var r=!1,i=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=ht(e)?gi:Xe.current,r=e.contextTypes,s=(r=r!=null)?ks(t,i):Lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function uv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sc.enqueueReplaceState(e,e.state,null)}function _h(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=A1,cm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=ht(e)?gi:Xe.current,i.context=ks(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sc.enqueueReplaceState(i,i.state,null),Eu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===A1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function pl(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cv(t){var e=t._init;return e(t._payload)}function L1(t){function e(m,h){if(t){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=xr(m,h),m.index=0,m.sibling=null,m}function s(m,h,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,h,g,_){return h===null||h.tag!==6?(h=tf(g,m.mode,_),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,_){var x=g.type;return x===Ji?d(m,h,g.props.children,_,g.key):h!==null&&(h.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ir&&cv(x)===h.type)?(_=i(h,g.props),_.ref=go(m,h,g),_.return=m,_):(_=Ul(g.type,g.key,g.props,null,m.mode,_),_.ref=go(m,h,g),_.return=m,_)}function u(m,h,g,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=nf(g,m.mode,_),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function d(m,h,g,_,x){return h===null||h.tag!==7?(h=fi(g,m.mode,_,x),h.return=m,h):(h=i(h,g),h.return=m,h)}function c(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=tf(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case rl:return g=Ul(h.type,h.key,h.props,null,m.mode,g),g.ref=go(m,null,h),g.return=m,g;case Xi:return h=nf(h,m.mode,g),h.return=m,h;case ir:var _=h._init;return c(m,_(h._payload),g)}if(Io(h)||co(h))return h=fi(h,m.mode,g,null),h.return=m,h;pl(m,h)}return null}function f(m,h,g,_){var x=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:a(m,h,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rl:return g.key===x?l(m,h,g,_):null;case Xi:return g.key===x?u(m,h,g,_):null;case ir:return x=g._init,f(m,h,x(g._payload),_)}if(Io(g)||co(g))return x!==null?null:d(m,h,g,_,null);pl(m,g)}return null}function p(m,h,g,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(h,m,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case rl:return m=m.get(_.key===null?g:_.key)||null,l(h,m,_,x);case Xi:return m=m.get(_.key===null?g:_.key)||null,u(h,m,_,x);case ir:var C=_._init;return p(m,h,g,C(_._payload),x)}if(Io(_)||co(_))return m=m.get(g)||null,d(h,m,_,x,null);pl(h,_)}return null}function y(m,h,g,_){for(var x=null,C=null,T=h,b=h=0,D=null;T!==null&&b<g.length;b++){T.index>b?(D=T,T=null):D=T.sibling;var $=f(m,T,g[b],_);if($===null){T===null&&(T=D);break}t&&T&&$.alternate===null&&e(m,T),h=s($,h,b),C===null?x=$:C.sibling=$,C=$,T=D}if(b===g.length)return n(m,T),me&&Zr(m,b),x;if(T===null){for(;b<g.length;b++)T=c(m,g[b],_),T!==null&&(h=s(T,h,b),C===null?x=T:C.sibling=T,C=T);return me&&Zr(m,b),x}for(T=r(m,T);b<g.length;b++)D=p(T,m,b,g[b],_),D!==null&&(t&&D.alternate!==null&&T.delete(D.key===null?b:D.key),h=s(D,h,b),C===null?x=D:C.sibling=D,C=D);return t&&T.forEach(function(W){return e(m,W)}),me&&Zr(m,b),x}function v(m,h,g,_){var x=co(g);if(typeof x!="function")throw Error(k(150));if(g=x.call(g),g==null)throw Error(k(151));for(var C=x=null,T=h,b=h=0,D=null,$=g.next();T!==null&&!$.done;b++,$=g.next()){T.index>b?(D=T,T=null):D=T.sibling;var W=f(m,T,$.value,_);if(W===null){T===null&&(T=D);break}t&&T&&W.alternate===null&&e(m,T),h=s(W,h,b),C===null?x=W:C.sibling=W,C=W,T=D}if($.done)return n(m,T),me&&Zr(m,b),x;if(T===null){for(;!$.done;b++,$=g.next())$=c(m,$.value,_),$!==null&&(h=s($,h,b),C===null?x=$:C.sibling=$,C=$);return me&&Zr(m,b),x}for(T=r(m,T);!$.done;b++,$=g.next())$=p(T,m,b,$.value,_),$!==null&&(t&&$.alternate!==null&&T.delete($.key===null?b:$.key),h=s($,h,b),C===null?x=$:C.sibling=$,C=$);return t&&T.forEach(function(Fe){return e(m,Fe)}),me&&Zr(m,b),x}function S(m,h,g,_){if(typeof g=="object"&&g!==null&&g.type===Ji&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case rl:e:{for(var x=g.key,C=h;C!==null;){if(C.key===x){if(x=g.type,x===Ji){if(C.tag===7){n(m,C.sibling),h=i(C,g.props.children),h.return=m,m=h;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ir&&cv(x)===C.type){n(m,C.sibling),h=i(C,g.props),h.ref=go(m,C,g),h.return=m,m=h;break e}n(m,C);break}else e(m,C);C=C.sibling}g.type===Ji?(h=fi(g.props.children,m.mode,_,g.key),h.return=m,m=h):(_=Ul(g.type,g.key,g.props,null,m.mode,_),_.ref=go(m,h,g),_.return=m,m=_)}return o(m);case Xi:e:{for(C=g.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=nf(g,m.mode,_),h.return=m,m=h}return o(m);case ir:return C=g._init,S(m,h,C(g._payload),_)}if(Io(g))return y(m,h,g,_);if(co(g))return v(m,h,g,_);pl(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=tf(g,m.mode,_),h.return=m,m=h),o(m)):n(m,h)}return S}var Rs=L1(!0),M1=L1(!1),Ma={},pn=Vr(Ma),aa=Vr(Ma),la=Vr(Ma);function ai(t){if(t===Ma)throw Error(k(174));return t}function dm(t,e){switch(le(la,e),le(aa,t),le(pn,Ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xf(e,t)}he(pn),le(pn,e)}function Os(){he(pn),he(aa),he(la)}function $1(t){ai(la.current);var e=ai(pn.current),n=Xf(e,t.type);e!==n&&(le(aa,t),le(pn,n))}function fm(t){aa.current===t&&(he(pn),he(aa))}var ge=Vr(0);function Su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yd=[];function hm(){for(var t=0;t<Yd.length;t++)Yd[t]._workInProgressVersionPrimary=null;Yd.length=0}var Ll=Gn.ReactCurrentDispatcher,Qd=Gn.ReactCurrentBatchConfig,vi=0,ye=null,be=null,Ae=null,Cu=!1,Fo=!1,ua=0,ak=0;function Ge(){throw Error(k(321))}function pm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function mm(t,e,n,r,i,s){if(vi=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=t===null||t.memoizedState===null?dk:fk,t=n(r,i),Fo){s=0;do{if(Fo=!1,ua=0,25<=s)throw Error(k(301));s+=1,Ae=be=null,e.updateQueue=null,Ll.current=hk,t=n(r,i)}while(Fo)}if(Ll.current=Tu,e=be!==null&&be.next!==null,vi=0,Ae=be=ye=null,Cu=!1,e)throw Error(k(300));return t}function gm(){var t=ua!==0;return ua=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ye.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function jt(){if(be===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Ae===null?ye.memoizedState:Ae.next;if(e!==null)Ae=e,be=t;else{if(t===null)throw Error(k(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ae===null?ye.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function ca(t,e){return typeof e=="function"?e(t):e}function Xd(t){var e=jt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((vi&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,ye.lanes|=d,_i|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,en(r,e.memoizedState)||(ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,_i|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jd(t){var e=jt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function F1(){}function j1(t,e){var n=ye,r=jt(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,ct=!0),r=r.queue,ym(W1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,da(9,z1.bind(null,n,r,i,e),void 0,null),Me===null)throw Error(k(349));vi&30||U1(n,e,i)}return i}function U1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function z1(t,e,n,r){e.value=n,e.getSnapshot=r,B1(e)&&V1(t)}function W1(t,e,n){return n(function(){B1(e)&&V1(t)})}function B1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function V1(t){var e=Un(t,1);e!==null&&Xt(e,t,1,-1)}function dv(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=ck.bind(null,ye,t),[e.memoizedState,t]}function da(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function H1(){return jt().memoizedState}function Ml(t,e,n,r){var i=an();ye.flags|=t,i.memoizedState=da(1|e,n,void 0,r===void 0?null:r)}function Cc(t,e,n,r){var i=jt();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&pm(r,o.deps)){i.memoizedState=da(e,n,s,r);return}}ye.flags|=t,i.memoizedState=da(1|e,n,s,r)}function fv(t,e){return Ml(8390656,8,t,e)}function ym(t,e){return Cc(2048,8,t,e)}function G1(t,e){return Cc(4,2,t,e)}function K1(t,e){return Cc(4,4,t,e)}function q1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Y1(t,e,n){return n=n!=null?n.concat([t]):null,Cc(4,4,q1.bind(null,e,t),n)}function vm(){}function Q1(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function X1(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function J1(t,e,n){return vi&21?(en(n,e)||(n=t1(),ye.lanes|=n,_i|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=n)}function lk(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=Qd.transition;Qd.transition={};try{t(!1),e()}finally{ne=n,Qd.transition=r}}function Z1(){return jt().memoizedState}function uk(t,e,n){var r=Tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},eE(t))tE(e,n);else if(n=O1(t,e,n,r),n!==null){var i=rt();Xt(n,t,r,i),nE(n,e,r)}}function ck(t,e,n){var r=Tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(eE(t))tE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,en(a,o)){var l=e.interleaved;l===null?(i.next=i,um(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=O1(t,e,i,r),n!==null&&(i=rt(),Xt(n,t,r,i),nE(n,e,r))}}function eE(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function tE(t,e){Fo=Cu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yp(t,n)}}var Tu={readContext:Ft,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},dk={readContext:Ft,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:fv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,q1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=uk.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:dv,useDebugValue:vm,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=dv(!1),e=t[0];return t=lk.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=an();if(me){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Me===null)throw Error(k(349));vi&30||U1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,fv(W1.bind(null,r,s,t),[t]),r.flags|=2048,da(9,z1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=Me.identifierPrefix;if(me){var n=Pn,r=kn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ak++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fk={readContext:Ft,useCallback:Q1,useContext:Ft,useEffect:ym,useImperativeHandle:Y1,useInsertionEffect:G1,useLayoutEffect:K1,useMemo:X1,useReducer:Xd,useRef:H1,useState:function(){return Xd(ca)},useDebugValue:vm,useDeferredValue:function(t){var e=jt();return J1(e,be.memoizedState,t)},useTransition:function(){var t=Xd(ca)[0],e=jt().memoizedState;return[t,e]},useMutableSource:F1,useSyncExternalStore:j1,useId:Z1,unstable_isNewReconciler:!1},hk={readContext:Ft,useCallback:Q1,useContext:Ft,useEffect:ym,useImperativeHandle:Y1,useInsertionEffect:G1,useLayoutEffect:K1,useMemo:X1,useReducer:Jd,useRef:H1,useState:function(){return Jd(ca)},useDebugValue:vm,useDeferredValue:function(t){var e=jt();return be===null?e.memoizedState=t:J1(e,be.memoizedState,t)},useTransition:function(){var t=Jd(ca)[0],e=jt().memoizedState;return[t,e]},useMutableSource:F1,useSyncExternalStore:j1,useId:Z1,unstable_isNewReconciler:!1};function Ns(t,e){try{var n="",r=e;do n+=zI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pk=typeof WeakMap=="function"?WeakMap:Map;function rE(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Iu||(Iu=!0,Rh=r),wh(t,e)},n}function iE(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wh(t,e),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=kk.bind(null,t,e,n),e.then(t,t))}function pv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var mk=Gn.ReactCurrentOwner,ct=!1;function tt(t,e,n,r){e.child=t===null?M1(e,null,n,r):Rs(e,t.child,n,r)}function gv(t,e,n,r,i){n=n.render;var s=e.ref;return vs(e,i),r=mm(t,e,n,r,s,i),n=gm(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(me&&n&&rm(e),e.flags|=1,tt(t,e,r,i),e.child)}function yv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Im(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sE(t,e,s,r,i)):(t=Ul(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,r)&&t.ref===e.ref)return zn(t,e,i)}return e.flags|=1,t=xr(s,r),t.ref=e.ref,t.return=e,e.child=t}function sE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ra(s,r)&&t.ref===e.ref)if(ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ct=!0);else return e.lanes=t.lanes,zn(t,e,i)}return Eh(t,e,n,r,i)}function oE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(ls,Et),Et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(ls,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(ls,Et),Et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(ls,Et),Et|=r;return tt(t,e,i,n),e.child}function aE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Eh(t,e,n,r,i){var s=ht(n)?gi:Xe.current;return s=ks(e,s),vs(e,i),n=mm(t,e,n,r,s,i),r=gm(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(me&&r&&rm(e),e.flags|=1,tt(t,e,n,i),e.child)}function vv(t,e,n,r,i){if(ht(n)){var s=!0;gu(e)}else s=!1;if(vs(e,i),e.stateNode===null)$l(t,e),D1(e,n,r),_h(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ft(u):(u=ht(n)?gi:Xe.current,u=ks(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&uv(e,o,r,u),sr=!1;var f=e.memoizedState;o.state=f,Eu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||ft.current||sr?(typeof d=="function"&&(vh(e,n,d,r),l=e.memoizedState),(a=sr||lv(e,n,a,r,f,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,N1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Bt(e.type,a),o.props=u,c=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ft(l):(l=ht(n)?gi:Xe.current,l=ks(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||f!==l)&&uv(e,o,r,l),sr=!1,f=e.memoizedState,o.state=f,Eu(e,r,o,i);var y=e.memoizedState;a!==c||f!==y||ft.current||sr?(typeof p=="function"&&(vh(e,n,p,r),y=e.memoizedState),(u=sr||lv(e,n,u,r,f,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Sh(t,e,n,r,s,i)}function Sh(t,e,n,r,i,s){aE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&rv(e,n,!1),zn(t,e,s);r=e.stateNode,mk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,a,s)):tt(t,e,a,s),e.memoizedState=r.state,i&&rv(e,n,!0),e.child}function lE(t){var e=t.stateNode;e.pendingContext?nv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nv(t,e.context,!1),dm(t,e.containerInfo)}function _v(t,e,n,r,i){return Ps(),sm(i),e.flags|=256,tt(t,e,n,r),e.child}var Ch={dehydrated:null,treeContext:null,retryLane:0};function Th(t){return{baseLanes:t,cachePool:null,transitions:null}}function uE(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(ge,i&1),t===null)return gh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ic(o,r,0,null),t=fi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Th(n),e.memoizedState=Ch,t):_m(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=xr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=fi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Th(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ch,r}return s=t.child,t=s.sibling,r=xr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _m(t,e){return e=Ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ml(t,e,n,r){return r!==null&&sm(r),Rs(e,t.child,null,n),t=_m(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zd(Error(k(422))),ml(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ic({mode:"visible",children:r.children},i,0,null),s=fi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Rs(e,t.child,null,o),e.child.memoizedState=Th(o),e.memoizedState=Ch,s);if(!(e.mode&1))return ml(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Zd(s,r,void 0),ml(t,e,o,r)}if(a=(o&t.childLanes)!==0,ct||a){if(r=Me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(t,i),Xt(r,t,i,-1))}return xm(),r=Zd(Error(k(421))),ml(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Pk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=Er(i.nextSibling),xt=e,me=!0,Ht=null,t!==null&&(Dt[Lt++]=kn,Dt[Lt++]=Pn,Dt[Lt++]=yi,kn=t.id,Pn=t.overflow,yi=e),e=_m(e,r.children),e.flags|=4096,e)}function wv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yh(t.return,e,n)}function ef(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function cE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tt(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wv(t,n,e);else if(t.tag===19)wv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Su(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ef(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Su(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ef(e,!0,n,null,s);break;case"together":ef(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_i|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yk(t,e,n){switch(e.tag){case 3:lE(e),Ps();break;case 5:$1(e);break;case 1:ht(e.type)&&gu(e);break;case 4:dm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(_u,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?uE(t,e,n):(le(ge,ge.current&1),t=zn(t,e,n),t!==null?t.sibling:null);le(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return cE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,oE(t,e,n)}return zn(t,e,n)}var dE,xh,fE,hE;dE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xh=function(){};fE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ai(pn.current);var s=null;switch(n){case"input":i=Kf(t,i),r=Kf(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=Qf(t,i),r=Qf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pu)}Jf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};hE=function(t,e,n,r){n!==r&&(e.flags|=4)};function yo(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vk(t,e,n){var r=e.pendingProps;switch(im(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return ht(e.type)&&mu(),Ke(e),null;case 3:return r=e.stateNode,Os(),he(ft),he(Xe),hm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(Ah(Ht),Ht=null))),xh(t,e),Ke(e),null;case 5:fm(e);var i=ai(la.current);if(n=e.type,t!==null&&e.stateNode!=null)fE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Ke(e),null}if(t=ai(pn.current),hl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[oa]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<ko.length;i++)ue(ko[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Py(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":Oy(r,s),ue("invalid",r)}Jf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,a,t),i=["children",""+a]):Qo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":il(r),Ry(r,s,!0);break;case"textarea":il(r),Ny(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Uw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[oa]=r,dE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zf(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<ko.length;i++)ue(ko[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":Py(t,r),i=Kf(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),ue("invalid",t);break;case"textarea":Oy(t,r),i=Qf(t,r),ue("invalid",t);break;default:i=r}Jf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Bw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xo(t,l):typeof l=="number"&&Xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ue("scroll",t):l!=null&&Bp(t,s,l,o))}switch(n){case"input":il(t),Ry(t,r,!1);break;case"textarea":il(t),Ny(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ps(t,!!r.multiple,s,!1):r.defaultValue!=null&&ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ke(e),null;case 6:if(t&&e.stateNode!=null)hE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=ai(la.current),ai(pn.current),hl(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return Ke(e),null;case 13:if(he(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&St!==null&&e.mode&1&&!(e.flags&128))R1(),Ps(),e.flags|=98560,s=!1;else if(s=hl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[cn]=e}else Ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ke(e),s=!1}else Ht!==null&&(Ah(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?Re===0&&(Re=3):xm())),e.updateQueue!==null&&(e.flags|=4),Ke(e),null);case 4:return Os(),xh(t,e),t===null&&ia(e.stateNode.containerInfo),Ke(e),null;case 10:return lm(e.type._context),Ke(e),null;case 17:return ht(e.type)&&mu(),Ke(e),null;case 19:if(he(ge),s=e.memoizedState,s===null)return Ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)yo(s,!1);else{if(Re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Su(t),o!==null){for(e.flags|=128,yo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>As&&(e.flags|=128,r=!0,yo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Su(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),yo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Ke(e),null}else 2*Te()-s.renderingStartTime>As&&n!==1073741824&&(e.flags|=128,r=!0,yo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=ge.current,le(ge,r?n&1|2:n&1),e):(Ke(e),null);case 22:case 23:return Tm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function _k(t,e){switch(im(e),e.tag){case 1:return ht(e.type)&&mu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Os(),he(ft),he(Xe),hm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fm(e),null;case 13:if(he(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(ge),null;case 4:return Os(),null;case 10:return lm(e.type._context),null;case 22:case 23:return Tm(),null;case 24:return null;default:return null}}var gl=!1,qe=!1,wk=typeof WeakSet=="function"?WeakSet:Set,A=null;function as(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function Ih(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var Ev=!1;function Ek(t,e){if(uh=du,t=y1(),nm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)f=c,c=p;for(;;){if(c===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(p=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ch={focusedElem:t,selectionRange:n},du=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:Bt(e.type,v),S);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){Ee(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return y=Ev,Ev=!1,y}function jo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ih(e,n,s)}i=i.next}while(i!==r)}}function Tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pE(t){var e=t.alternate;e!==null&&(t.alternate=null,pE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[oa],delete e[hh],delete e[rk],delete e[ik])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mE(t){return t.tag===5||t.tag===3||t.tag===4}function Sv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pu));else if(r!==4&&(t=t.child,t!==null))for(kh(t,e,n),t=t.sibling;t!==null;)kh(t,e,n),t=t.sibling}function Ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}var Ue=null,Vt=!1;function tr(t,e,n){for(n=n.child;n!==null;)gE(t,e,n),n=n.sibling}function gE(t,e,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:qe||as(n,e);case 6:var r=Ue,i=Vt;Ue=null,tr(t,e,n),Ue=r,Vt=i,Ue!==null&&(Vt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Vt?(t=Ue,n=n.stateNode,t.nodeType===8?Kd(t.parentNode,n):t.nodeType===1&&Kd(t,n),ta(t)):Kd(Ue,n.stateNode));break;case 4:r=Ue,i=Vt,Ue=n.stateNode.containerInfo,Vt=!0,tr(t,e,n),Ue=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ih(n,e,o),i=i.next}while(i!==r)}tr(t,e,n);break;case 1:if(!qe&&(as(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,e,a)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,tr(t,e,n),qe=r):tr(t,e,n);break;default:tr(t,e,n)}}function Cv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wk),e.forEach(function(r){var i=Rk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ue=a.stateNode,Vt=!1;break e;case 3:Ue=a.stateNode.containerInfo,Vt=!0;break e;case 4:Ue=a.stateNode.containerInfo,Vt=!0;break e}a=a.return}if(Ue===null)throw Error(k(160));gE(s,o,i),Ue=null,Vt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ee(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yE(e,t),e=e.sibling}function yE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),on(t),r&4){try{jo(3,t,t.return),Tc(3,t)}catch(v){Ee(t,t.return,v)}try{jo(5,t,t.return)}catch(v){Ee(t,t.return,v)}}break;case 1:zt(e,t),on(t),r&512&&n!==null&&as(n,n.return);break;case 5:if(zt(e,t),on(t),r&512&&n!==null&&as(n,n.return),t.flags&32){var i=t.stateNode;try{Xo(i,"")}catch(v){Ee(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Fw(i,s),Zf(a,o);var u=Zf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?Bw(i,c):d==="dangerouslySetInnerHTML"?zw(i,c):d==="children"?Xo(i,c):Bp(i,d,c,u)}switch(a){case"input":qf(i,s);break;case"textarea":jw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ps(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ps(i,!!s.multiple,s.defaultValue,!0):ps(i,!!s.multiple,s.multiple?[]:"",!1))}i[oa]=s}catch(v){Ee(t,t.return,v)}}break;case 6:if(zt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ee(t,t.return,v)}}break;case 3:if(zt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(v){Ee(t,t.return,v)}break;case 4:zt(e,t),on(t);break;case 13:zt(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Sm=Te())),r&4&&Cv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(u=qe)||d,zt(e,t),qe=u):zt(e,t),on(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(c=A=d;A!==null;){switch(f=A,p=f.child,f.tag){case 0:case 11:case 14:case 15:jo(4,f,f.return);break;case 1:as(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Ee(r,n,v)}}break;case 5:as(f,f.return);break;case 22:if(f.memoizedState!==null){xv(c);continue}}p!==null?(p.return=f,A=p):xv(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ww("display",o))}catch(v){Ee(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){Ee(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:zt(e,t),on(t),r&4&&Cv(t);break;case 21:break;default:zt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mE(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xo(i,""),r.flags&=-33);var s=Sv(t);Ph(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Sv(t);kh(t,a,o);break;default:throw Error(k(161))}}catch(l){Ee(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sk(t,e,n){A=t,vE(t)}function vE(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||qe;a=gl;var u=qe;if(gl=o,(qe=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?Iv(i):l!==null?(l.return=o,A=l):Iv(i);for(;s!==null;)A=s,vE(s),s=s.sibling;A=i,gl=a,qe=u}Tv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):Tv(t)}}function Tv(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||Tc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&av(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}av(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ta(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}qe||e.flags&512&&bh(e)}catch(f){Ee(e,e.return,f)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function xv(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function Iv(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tc(4,e)}catch(l){Ee(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ee(e,i,l)}}var s=e.return;try{bh(e)}catch(l){Ee(e,s,l)}break;case 5:var o=e.return;try{bh(e)}catch(l){Ee(e,o,l)}}}catch(l){Ee(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var Ck=Math.ceil,xu=Gn.ReactCurrentDispatcher,wm=Gn.ReactCurrentOwner,$t=Gn.ReactCurrentBatchConfig,Q=0,Me=null,Ie=null,Be=0,Et=0,ls=Vr(0),Re=0,fa=null,_i=0,xc=0,Em=0,Uo=null,at=null,Sm=0,As=1/0,xn=null,Iu=!1,Rh=null,Cr=null,yl=!1,mr=null,bu=0,zo=0,Oh=null,Fl=-1,jl=0;function rt(){return Q&6?Te():Fl!==-1?Fl:Fl=Te()}function Tr(t){return t.mode&1?Q&2&&Be!==0?Be&-Be:ok.transition!==null?(jl===0&&(jl=t1()),jl):(t=ne,t!==0||(t=window.event,t=t===void 0?16:l1(t.type)),t):1}function Xt(t,e,n,r){if(50<zo)throw zo=0,Oh=null,Error(k(185));Aa(t,n,r),(!(Q&2)||t!==Me)&&(t===Me&&(!(Q&2)&&(xc|=n),Re===4&&lr(t,Be)),pt(t,r),n===1&&Q===0&&!(e.mode&1)&&(As=Te()+500,Ec&&Hr()))}function pt(t,e){var n=t.callbackNode;ob(t,e);var r=cu(t,t===Me?Be:0);if(r===0)n!==null&&Ly(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ly(n),e===1)t.tag===0?sk(bv.bind(null,t)):b1(bv.bind(null,t)),tk(function(){!(Q&6)&&Hr()}),n=null;else{switch(n1(r)){case 1:n=qp;break;case 4:n=Zw;break;case 16:n=uu;break;case 536870912:n=e1;break;default:n=uu}n=IE(n,_E.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _E(t,e){if(Fl=-1,jl=0,Q&6)throw Error(k(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var r=cu(t,t===Me?Be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ku(t,r);else{e=r;var i=Q;Q|=2;var s=EE();(Me!==t||Be!==e)&&(xn=null,As=Te()+500,di(t,e));do try{Ik();break}catch(a){wE(t,a)}while(!0);am(),xu.current=s,Q=i,Ie!==null?e=0:(Me=null,Be=0,e=Re)}if(e!==0){if(e===2&&(i=ih(t),i!==0&&(r=i,e=Nh(t,i))),e===1)throw n=fa,di(t,0),lr(t,r),pt(t,Te()),n;if(e===6)lr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Tk(i)&&(e=ku(t,r),e===2&&(s=ih(t),s!==0&&(r=s,e=Nh(t,s))),e===1))throw n=fa,di(t,0),lr(t,r),pt(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:ei(t,at,xn);break;case 3:if(lr(t,r),(r&130023424)===r&&(e=Sm+500-Te(),10<e)){if(cu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=fh(ei.bind(null,t,at,xn),e);break}ei(t,at,xn);break;case 4:if(lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ck(r/1960))-r,10<r){t.timeoutHandle=fh(ei.bind(null,t,at,xn),r);break}ei(t,at,xn);break;case 5:ei(t,at,xn);break;default:throw Error(k(329))}}}return pt(t,Te()),t.callbackNode===n?_E.bind(null,t):null}function Nh(t,e){var n=Uo;return t.current.memoizedState.isDehydrated&&(di(t,e).flags|=256),t=ku(t,e),t!==2&&(e=at,at=n,e!==null&&Ah(e)),t}function Ah(t){at===null?at=t:at.push.apply(at,t)}function Tk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~Em,e&=~xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function bv(t){if(Q&6)throw Error(k(327));_s();var e=cu(t,0);if(!(e&1))return pt(t,Te()),null;var n=ku(t,e);if(t.tag!==0&&n===2){var r=ih(t);r!==0&&(e=r,n=Nh(t,r))}if(n===1)throw n=fa,di(t,0),lr(t,e),pt(t,Te()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ei(t,at,xn),pt(t,Te()),null}function Cm(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(As=Te()+500,Ec&&Hr())}}function wi(t){mr!==null&&mr.tag===0&&!(Q&6)&&_s();var e=Q;Q|=1;var n=$t.transition,r=ne;try{if($t.transition=null,ne=1,t)return t()}finally{ne=r,$t.transition=n,Q=e,!(Q&6)&&Hr()}}function Tm(){Et=ls.current,he(ls)}function di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ek(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(im(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mu();break;case 3:Os(),he(ft),he(Xe),hm();break;case 5:fm(r);break;case 4:Os();break;case 13:he(ge);break;case 19:he(ge);break;case 10:lm(r.type._context);break;case 22:case 23:Tm()}n=n.return}if(Me=t,Ie=t=xr(t.current,null),Be=Et=e,Re=0,fa=null,Em=xc=_i=0,at=Uo=null,oi!==null){for(e=0;e<oi.length;e++)if(n=oi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}oi=null}return t}function wE(t,e){do{var n=Ie;try{if(am(),Ll.current=Tu,Cu){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cu=!1}if(vi=0,Ae=be=ye=null,Fo=!1,ua=0,wm.current=null,n===null||n.return===null){Re=1,fa=e,Ie=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Be,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=pv(o);if(p!==null){p.flags&=-257,mv(p,o,a,s,e),p.mode&1&&hv(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){hv(s,u,e),xm();break e}l=Error(k(426))}}else if(me&&a.mode&1){var S=pv(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),mv(S,o,a,s,e),sm(Ns(l,a));break e}}s=l=Ns(l,a),Re!==4&&(Re=2),Uo===null?Uo=[s]:Uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=rE(s,l,e);ov(s,m);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Cr===null||!Cr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=iE(s,a,e);ov(s,_);break e}}s=s.return}while(s!==null)}CE(n)}catch(x){e=x,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function EE(){var t=xu.current;return xu.current=Tu,t===null?Tu:t}function xm(){(Re===0||Re===3||Re===2)&&(Re=4),Me===null||!(_i&268435455)&&!(xc&268435455)||lr(Me,Be)}function ku(t,e){var n=Q;Q|=2;var r=EE();(Me!==t||Be!==e)&&(xn=null,di(t,e));do try{xk();break}catch(i){wE(t,i)}while(!0);if(am(),Q=n,xu.current=r,Ie!==null)throw Error(k(261));return Me=null,Be=0,Re}function xk(){for(;Ie!==null;)SE(Ie)}function Ik(){for(;Ie!==null&&!XI();)SE(Ie)}function SE(t){var e=xE(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?CE(t):Ie=e,wm.current=null}function CE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_k(n,e),n!==null){n.flags&=32767,Ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,Ie=null;return}}else if(n=vk(n,e,Et),n!==null){Ie=n;return}if(e=e.sibling,e!==null){Ie=e;return}Ie=e=t}while(e!==null);Re===0&&(Re=5)}function ei(t,e,n){var r=ne,i=$t.transition;try{$t.transition=null,ne=1,bk(t,e,n,r)}finally{$t.transition=i,ne=r}return null}function bk(t,e,n,r){do _s();while(mr!==null);if(Q&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ab(t,s),t===Me&&(Ie=Me=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yl||(yl=!0,IE(uu,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=ne;ne=1;var a=Q;Q|=4,wm.current=null,Ek(t,n),yE(n,t),Kb(ch),du=!!uh,ch=uh=null,t.current=n,Sk(n),JI(),Q=a,ne=o,$t.transition=s}else t.current=n;if(yl&&(yl=!1,mr=t,bu=i),s=t.pendingLanes,s===0&&(Cr=null),tb(n.stateNode),pt(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Iu)throw Iu=!1,t=Rh,Rh=null,t;return bu&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===Oh?zo++:(zo=0,Oh=t):zo=0,Hr(),null}function _s(){if(mr!==null){var t=n1(bu),e=$t.transition,n=ne;try{if($t.transition=null,ne=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,bu=0,Q&6)throw Error(k(331));var i=Q;for(Q|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:jo(8,d,s)}var c=d.child;if(c!==null)c.return=d,A=c;else for(;A!==null;){d=A;var f=d.sibling,p=d.return;if(pE(d),d===u){A=null;break}if(f!==null){f.return=p,A=f;break}A=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:jo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var h=t.current;for(A=h;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=h;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tc(9,a)}}catch(x){Ee(a,a.return,x)}if(a===o){A=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,A=_;break e}A=a.return}}if(Q=i,Hr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(gc,t)}catch{}r=!0}return r}finally{ne=n,$t.transition=e}}return!1}function kv(t,e,n){e=Ns(n,e),e=rE(t,e,1),t=Sr(t,e,1),e=rt(),t!==null&&(Aa(t,1,e),pt(t,e))}function Ee(t,e,n){if(t.tag===3)kv(t,t,n);else for(;e!==null;){if(e.tag===3){kv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){t=Ns(n,t),t=iE(e,t,1),e=Sr(e,t,1),t=rt(),e!==null&&(Aa(e,1,t),pt(e,t));break}}e=e.return}}function kk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&(Be&n)===n&&(Re===4||Re===3&&(Be&130023424)===Be&&500>Te()-Sm?di(t,0):Em|=n),pt(t,e)}function TE(t,e){e===0&&(t.mode&1?(e=al,al<<=1,!(al&130023424)&&(al=4194304)):e=1);var n=rt();t=Un(t,e),t!==null&&(Aa(t,e,n),pt(t,n))}function Pk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),TE(t,n)}function Rk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),TE(t,n)}var xE;xE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ct=!1,yk(t,e,n);ct=!!(t.flags&131072)}else ct=!1,me&&e.flags&1048576&&k1(e,vu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$l(t,e),t=e.pendingProps;var i=ks(e,Xe.current);vs(e,n),i=mm(null,e,r,t,i,n);var s=gm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(r)?(s=!0,gu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cm(e),i.updater=Sc,e.stateNode=i,i._reactInternals=e,_h(e,r,t,n),e=Sh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&rm(e),tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($l(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Nk(r),t=Bt(r,t),i){case 0:e=Eh(null,e,r,t,n);break e;case 1:e=vv(null,e,r,t,n);break e;case 11:e=gv(null,e,r,t,n);break e;case 14:e=yv(null,e,r,Bt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Eh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),vv(t,e,r,i,n);case 3:e:{if(lE(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,N1(t,e),Eu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ns(Error(k(423)),e),e=_v(t,e,r,n,i);break e}else if(r!==i){i=Ns(Error(k(424)),e),e=_v(t,e,r,n,i);break e}else for(St=Er(e.stateNode.containerInfo.firstChild),xt=e,me=!0,Ht=null,n=M1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ps(),r===i){e=zn(t,e,n);break e}tt(t,e,r,n)}e=e.child}return e;case 5:return $1(e),t===null&&gh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,dh(r,i)?o=null:s!==null&&dh(r,s)&&(e.flags|=32),aE(t,e),tt(t,e,o,n),e.child;case 6:return t===null&&gh(e),null;case 13:return uE(t,e,n);case 4:return dm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Rs(e,null,r,n):tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),gv(t,e,r,i,n);case 7:return tt(t,e,e.pendingProps,n),e.child;case 8:return tt(t,e,e.pendingProps.children,n),e.child;case 12:return tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(_u,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!ft.current){e=zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Dn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,vs(e,n),i=Ft(i),r=r(i),e.flags|=1,tt(t,e,r,n),e.child;case 14:return r=e.type,i=Bt(r,e.pendingProps),i=Bt(r.type,i),yv(t,e,r,i,n);case 15:return sE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),$l(t,e),e.tag=1,ht(r)?(t=!0,gu(e)):t=!1,vs(e,n),D1(e,r,i),_h(e,r,i,n),Sh(null,e,r,!0,t,n);case 19:return cE(t,e,n);case 22:return oE(t,e,n)}throw Error(k(156,e.tag))};function IE(t,e){return Jw(t,e)}function Ok(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new Ok(t,e,n,r)}function Im(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nk(t){if(typeof t=="function")return Im(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hp)return 11;if(t===Gp)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ul(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Im(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ji:return fi(n.children,i,s,e);case Vp:o=8,i|=8;break;case Bf:return t=Mt(12,n,e,i|2),t.elementType=Bf,t.lanes=s,t;case Vf:return t=Mt(13,n,e,i),t.elementType=Vf,t.lanes=s,t;case Hf:return t=Mt(19,n,e,i),t.elementType=Hf,t.lanes=s,t;case Lw:return Ic(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Aw:o=10;break e;case Dw:o=9;break e;case Hp:o=11;break e;case Gp:o=14;break e;case ir:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function fi(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function Ic(t,e,n,r){return t=Mt(22,t,r,e),t.elementType=Lw,t.lanes=n,t.stateNode={isHidden:!1},t}function tf(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function nf(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ak(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Md(0),this.expirationTimes=Md(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Md(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bm(t,e,n,r,i,s,o,a,l){return t=new Ak(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cm(s),t}function Dk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bE(t){if(!t)return Lr;t=t._reactInternals;e:{if(Ai(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(ht(n))return I1(t,n,e)}return e}function kE(t,e,n,r,i,s,o,a,l){return t=bm(n,r,!0,t,i,s,o,a,l),t.context=bE(null),n=t.current,r=rt(),i=Tr(n),s=Dn(r,i),s.callback=e??null,Sr(n,s,i),t.current.lanes=i,Aa(t,i,r),pt(t,r),t}function bc(t,e,n,r){var i=e.current,s=rt(),o=Tr(i);return n=bE(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Sr(i,e,o),t!==null&&(Xt(t,i,o,s),Dl(t,i,o)),o}function Pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function km(t,e){Pv(t,e),(t=t.alternate)&&Pv(t,e)}function Lk(){return null}var PE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pm(t){this._internalRoot=t}kc.prototype.render=Pm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));bc(t,e,null,null)};kc.prototype.unmount=Pm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wi(function(){bc(null,t,null,null)}),e[jn]=null}};function kc(t){this._internalRoot=t}kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=s1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&a1(t)}};function Rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rv(){}function Mk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Pu(o);s.call(u)}}var o=kE(e,r,t,0,null,!1,!1,"",Rv);return t._reactRootContainer=o,t[jn]=o.current,ia(t.nodeType===8?t.parentNode:t),wi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Pu(l);a.call(u)}}var l=bm(t,0,!1,null,null,!1,!1,"",Rv);return t._reactRootContainer=l,t[jn]=l.current,ia(t.nodeType===8?t.parentNode:t),wi(function(){bc(e,l,n,r)}),l}function Rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Pu(o);a.call(l)}}bc(e,o,t,i)}else o=Mk(n,e,t,i,r);return Pu(o)}r1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(Yp(e,n|1),pt(e,Te()),!(Q&6)&&(As=Te()+500,Hr()))}break;case 13:wi(function(){var r=Un(t,1);if(r!==null){var i=rt();Xt(r,t,1,i)}}),km(t,1)}};Qp=function(t){if(t.tag===13){var e=Un(t,134217728);if(e!==null){var n=rt();Xt(e,t,134217728,n)}km(t,134217728)}};i1=function(t){if(t.tag===13){var e=Tr(t),n=Un(t,e);if(n!==null){var r=rt();Xt(n,t,e,r)}km(t,e)}};s1=function(){return ne};o1=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};th=function(t,e,n){switch(e){case"input":if(qf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wc(r);if(!i)throw Error(k(90));$w(r),qf(r,i)}}}break;case"textarea":jw(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};Gw=Cm;Kw=wi;var $k={usingClientEntryPoint:!1,Events:[La,ns,wc,Vw,Hw,Cm]},vo={findFiberByHostInstance:si,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Fk={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qw(t),t===null?null:t.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||Lk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{gc=vl.inject(Fk),hn=vl}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$k;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rm(e))throw Error(k(200));return Dk(t,e,null,n)};Rt.createRoot=function(t,e){if(!Rm(t))throw Error(k(299));var n=!1,r="",i=PE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bm(t,1,!1,null,null,n,!1,r,i),t[jn]=e.current,ia(t.nodeType===8?t.parentNode:t),new Pm(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Qw(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return wi(t)};Rt.hydrate=function(t,e,n){if(!Pc(e))throw Error(k(200));return Rc(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Rm(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=PE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=kE(e,null,t,1,n??null,i,!1,s,o),t[jn]=e.current,ia(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new kc(e)};Rt.render=function(t,e,n){if(!Pc(e))throw Error(k(200));return Rc(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Pc(t))throw Error(k(40));return t._reactRootContainer?(wi(function(){Rc(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Cm;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pc(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Rc(t,e,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";function RE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(RE)}catch(t){console.error(t)}}RE(),kw.exports=Rt;var OE=kw.exports,Ov=OE;zf.createRoot=Ov.createRoot,zf.hydrateRoot=Ov.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ha.apply(this,arguments)}var gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(gr||(gr={}));const Nv="popstate";function jk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Dh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ru(i)}return zk(e,n,null,t)}function ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function NE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Uk(){return Math.random().toString(36).substr(2,8)}function Av(t,e){return{usr:t.state,key:t.key,idx:e}}function Dh(t,e,n,r){return n===void 0&&(n=null),ha({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Zs(e):e,{state:n,key:e&&e.key||r||Uk()})}function Ru(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Zs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function zk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=gr.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(ha({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=gr.Pop;let S=d(),m=S==null?null:S-u;u=S,l&&l({action:a,location:v.location,delta:m})}function f(S,m){a=gr.Push;let h=Dh(v.location,S,m);n&&n(h,S),u=d()+1;let g=Av(h,u),_=v.createHref(h);try{o.pushState(g,"",_)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(_)}s&&l&&l({action:a,location:v.location,delta:1})}function p(S,m){a=gr.Replace;let h=Dh(v.location,S,m);n&&n(h,S),u=d();let g=Av(h,u),_=v.createHref(h);o.replaceState(g,"",_),s&&l&&l({action:a,location:v.location,delta:0})}function y(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:Ru(S);return h=h.replace(/ $/,"%20"),ve(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let v={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Nv,c),l=S,()=>{i.removeEventListener(Nv,c),l=null}},createHref(S){return e(i,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(S){return o.go(S)}};return v}var Dv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dv||(Dv={}));function Wk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Zs(e):e,i=Ds(r.pathname||"/",n);if(i==null)return null;let s=AE(t);Bk(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=eP(i);o=Jk(s[a],l)}return o}function AE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ir([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),AE(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Qk(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of DE(s.path))i(s,o,l)}),e}function DE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=DE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Bk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Xk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vk=/^:[\w-]+$/,Hk=3,Gk=2,Kk=1,qk=10,Yk=-2,Lv=t=>t==="*";function Qk(t,e){let n=t.split("/"),r=n.length;return n.some(Lv)&&(r+=Yk),e&&(r+=Gk),n.filter(i=>!Lv(i)).reduce((i,s)=>i+(Vk.test(s)?Hk:s===""?Kk:qk),r)}function Xk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Jk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=Lh({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;s.push({params:r,pathname:Ir([i,d.pathname]),pathnameBase:iP(Ir([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Ir([i,d.pathnameBase]))}return s}function Lh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Zk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let v=a[c]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[c];return p&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Zk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),NE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function eP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return NE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ds(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function tP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zs(t):t;return{pathname:n?n.startsWith("/")?n:nP(n,e):e,search:sP(r),hash:oP(i)}}function nP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Om(t,e){let n=rP(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Nm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Zs(t):(i=ha({},t),ve(!i.pathname||!i.pathname.includes("?"),rf("?","pathname","search",i)),ve(!i.pathname||!i.pathname.includes("#"),rf("#","pathname","hash",i)),ve(!i.search||!i.search.includes("#"),rf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}a=c>=0?e[c]:"/"}let l=tP(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Ir=t=>t.join("/").replace(/\/\/+/g,"/"),iP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),sP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,oP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function aP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const LE=["post","put","patch","delete"];new Set(LE);const lP=["get",...LE];new Set(lP);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pa.apply(this,arguments)}const Oc=E.createContext(null),ME=E.createContext(null),Kn=E.createContext(null),Nc=E.createContext(null),qn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),$E=E.createContext(null);function uP(t,e){let{relative:n}=e===void 0?{}:e;eo()||ve(!1);let{basename:r,navigator:i}=E.useContext(Kn),{hash:s,pathname:o,search:a}=Ac(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ir([r,o])),i.createHref({pathname:l,search:a,hash:s})}function eo(){return E.useContext(Nc)!=null}function to(){return eo()||ve(!1),E.useContext(Nc).location}function FE(t){E.useContext(Kn).static||E.useLayoutEffect(t)}function jE(){let{isDataRoute:t}=E.useContext(qn);return t?TP():cP()}function cP(){eo()||ve(!1);let t=E.useContext(Oc),{basename:e,future:n,navigator:r}=E.useContext(Kn),{matches:i}=E.useContext(qn),{pathname:s}=to(),o=JSON.stringify(Om(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return FE(()=>{a.current=!0}),E.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Nm(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ir([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const dP=E.createContext(null);function fP(t){let e=E.useContext(qn).outlet;return e&&E.createElement(dP.Provider,{value:t},e)}function Ac(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=E.useContext(Kn),{matches:i}=E.useContext(qn),{pathname:s}=to(),o=JSON.stringify(Om(i,r.v7_relativeSplatPath));return E.useMemo(()=>Nm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function hP(t,e){return pP(t,e)}function pP(t,e,n,r){eo()||ve(!1);let{navigator:i}=E.useContext(Kn),{matches:s}=E.useContext(qn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=to(),d;if(e){var c;let S=typeof e=="string"?Zs(e):e;l==="/"||(c=S.pathname)!=null&&c.startsWith(l)||ve(!1),d=S}else d=u;let f=d.pathname||"/",p=f;if(l!=="/"){let S=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=Wk(t,{pathname:p}),v=_P(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Ir([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Ir([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&v?E.createElement(Nc.Provider,{value:{location:pa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:gr.Pop}},v):v}function mP(){let t=CP(),e=aP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,null)}const gP=E.createElement(mP,null);class yP extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(qn.Provider,{value:this.props.routeContext},E.createElement($E.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vP(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Oc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(qn.Provider,{value:e},r)}function _P(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));d>=0||ve(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:f,errors:p}=n,y=c.route.loader&&f[c.route.id]===void 0&&(!p||p[c.route.id]===void 0);if(c.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,f)=>{let p,y=!1,v=null,S=null;n&&(p=a&&c.route.id?a[c.route.id]:void 0,v=c.route.errorElement||gP,l&&(u<0&&f===0?(xP("route-fallback",!1),y=!0,S=null):u===f&&(y=!0,S=c.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),h=()=>{let g;return p?g=v:y?g=S:c.route.Component?g=E.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=d,E.createElement(vP,{match:c,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:g})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?E.createElement(yP,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var UE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(UE||{}),Ou=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ou||{});function wP(t){let e=E.useContext(Oc);return e||ve(!1),e}function EP(t){let e=E.useContext(ME);return e||ve(!1),e}function SP(t){let e=E.useContext(qn);return e||ve(!1),e}function zE(t){let e=SP(),n=e.matches[e.matches.length-1];return n.route.id||ve(!1),n.route.id}function CP(){var t;let e=E.useContext($E),n=EP(Ou.UseRouteError),r=zE(Ou.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function TP(){let{router:t}=wP(UE.UseNavigateStable),e=zE(Ou.UseNavigateStable),n=E.useRef(!1);return FE(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,pa({fromRouteId:e},s)))},[t,e])}const Mv={};function xP(t,e,n){!e&&!Mv[t]&&(Mv[t]=!0)}function Mh(t){let{to:e,replace:n,state:r,relative:i}=t;eo()||ve(!1);let{future:s,static:o}=E.useContext(Kn),{matches:a}=E.useContext(qn),{pathname:l}=to(),u=jE(),d=Nm(e,Om(a,s.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(d);return E.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function IP(t){return fP(t.context)}function Qi(t){ve(!1)}function bP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=gr.Pop,navigator:s,static:o=!1,future:a}=t;eo()&&ve(!1);let l=e.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:s,static:o,future:pa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Zs(r));let{pathname:d="/",search:c="",hash:f="",state:p=null,key:y="default"}=r,v=E.useMemo(()=>{let S=Ds(d,l);return S==null?null:{location:{pathname:S,search:c,hash:f,state:p,key:y},navigationType:i}},[l,d,c,f,p,y,i]);return v==null?null:E.createElement(Kn.Provider,{value:u},E.createElement(Nc.Provider,{children:n,value:v}))}function kP(t){let{children:e,location:n}=t;return hP($h(e),n)}new Promise(()=>{});function $h(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,$h(r.props.children,s));return}r.type!==Qi&&ve(!1),!r.props.index||!r.props.children||ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$h(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nu(){return Nu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nu.apply(this,arguments)}function WE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function PP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function RP(t,e){return t.button===0&&(!e||e==="_self")&&!PP(t)}const OP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],NP=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],AP="6";try{window.__reactRouterVersion=AP}catch{}const DP=E.createContext({isTransitioning:!1}),LP="startTransition",$v=Uf[LP];function MP(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=jk({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=E.useCallback(c=>{u&&$v?$v(()=>l(c)):l(c)},[l,u]);return E.useLayoutEffect(()=>o.listen(d),[o,d]),E.createElement(bP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const $P=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",FP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jP=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,f=WE(e,OP),{basename:p}=E.useContext(Kn),y,v=!1;if(typeof u=="string"&&FP.test(u)&&(y=u,$P))try{let g=new URL(window.location.href),_=u.startsWith("//")?new URL(g.protocol+u):new URL(u),x=Ds(_.pathname,p);_.origin===g.origin&&x!=null?u=x+_.search+_.hash:v=!0}catch{}let S=uP(u,{relative:i}),m=zP(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:c});function h(g){r&&r(g),g.defaultPrevented||m(g)}return E.createElement("a",Nu({},f,{href:y||S,onClick:v||s?r:h,ref:n,target:l}))}),Am=E.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:d}=e,c=WE(e,NP),f=Ac(l,{relative:c.relative}),p=to(),y=E.useContext(ME),{navigator:v,basename:S}=E.useContext(Kn),m=y!=null&&WP(f)&&u===!0,h=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,g=p.pathname,_=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(g=g.toLowerCase(),_=_?_.toLowerCase():null,h=h.toLowerCase()),_&&S&&(_=Ds(_,S)||_);const x=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let C=g===h||!o&&g.startsWith(h)&&g.charAt(x)==="/",T=_!=null&&(_===h||!o&&_.startsWith(h)&&_.charAt(h.length)==="/"),b={isActive:C,isPending:T,isTransitioning:m},D=C?r:void 0,$;typeof s=="function"?$=s(b):$=[s,C?"active":null,T?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let W=typeof a=="function"?a(b):a;return E.createElement(jP,Nu({},c,{"aria-current":D,className:$,ref:n,style:W,to:l,unstable_viewTransition:u}),typeof d=="function"?d(b):d)});var Fh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Fh||(Fh={}));var Fv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Fv||(Fv={}));function UP(t){let e=E.useContext(Oc);return e||ve(!1),e}function zP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=jE(),u=to(),d=Ac(t,{relative:o});return E.useCallback(c=>{if(RP(c,n)){c.preventDefault();let f=r!==void 0?r:Ru(u)===Ru(d);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,s,o,a])}function WP(t,e){e===void 0&&(e={});let n=E.useContext(DP);n==null&&ve(!1);let{basename:r}=UP(Fh.useViewTransitionState),i=Ac(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ds(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ds(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Lh(i.pathname,o)!=null||Lh(i.pathname,s)!=null}var BE={exports:{}},VE={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $a=E;function BP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var VP=typeof Object.is=="function"?Object.is:BP,HP=$a.useSyncExternalStore,GP=$a.useRef,KP=$a.useEffect,qP=$a.useMemo,YP=$a.useDebugValue;VE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=GP(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=qP(function(){function l(p){if(!u){if(u=!0,d=p,p=r(p),i!==void 0&&o.hasValue){var y=o.value;if(i(y,p))return c=y}return c=p}if(y=c,VP(d,p))return y;var v=r(p);return i!==void 0&&i(y,v)?y:(d=p,c=v)}var u=!1,d,c,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=HP(t,s[0],s[1]);return KP(function(){o.hasValue=!0,o.value=a},[a]),YP(a),a};BE.exports=VE;var QP=BE.exports,Ct="default"in Uf?ut:Uf,jv=Symbol.for("react-redux-context"),Uv=typeof globalThis<"u"?globalThis:{};function XP(){if(!Ct.createContext)return{};const t=Uv[jv]??(Uv[jv]=new Map);let e=t.get(Ct.createContext);return e||(e=Ct.createContext(null),t.set(Ct.createContext,e)),e}var Mr=XP(),JP=()=>{throw new Error("uSES not initialized!")};function Dm(t=Mr){return function(){return Ct.useContext(t)}}var HE=Dm(),GE=JP,ZP=t=>{GE=t},eR=(t,e)=>t===e;function tR(t=Mr){const e=t===Mr?HE:Dm(t),n=(r,i={})=>{const{equalityFn:s=eR,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:d,identityFunctionCheck:c}=e();Ct.useRef(!0);const f=Ct.useCallback({[r.name](y){return r(y)}}[r.name],[r,d,o.stabilityCheck]),p=GE(l.addNestedSub,a.getState,u||a.getState,f,s);return Ct.useDebugValue(p),p};return Object.assign(n,{withTypes:()=>n}),n}var KE=tR();function nR(t){t()}function rR(){let t=null,e=null;return{clear(){t=null,e=null},notify(){nR(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var zv={notify(){},get:()=>[]};function iR(t,e){let n,r=zv,i=0,s=!1;function o(v){d();const S=r.subscribe(v);let m=!1;return()=>{m||(m=!0,S(),c())}}function a(){r.notify()}function l(){y.onStateChange&&y.onStateChange()}function u(){return s}function d(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=rR())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=zv)}function f(){s||(s=!0,d())}function p(){s&&(s=!1,c())}const y={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return y}var sR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oR=sR?Ct.useLayoutEffect:Ct.useEffect;function aR({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Ct.useMemo(()=>{const u=iR(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=Ct.useMemo(()=>t.getState(),[t]);oR(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Mr;return Ct.createElement(l.Provider,{value:o},n)}var lR=aR;function qE(t=Mr){const e=t===Mr?HE:Dm(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var uR=qE();function cR(t=Mr){const e=t===Mr?uR:qE(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Dc=cR();ZP(QP.useSyncExternalStoreWithSelector);function je(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var dR=typeof Symbol=="function"&&Symbol.observable||"@@observable",Wv=dR,sf=()=>Math.random().toString(36).substring(7).split("").join("."),fR={INIT:`@@redux/INIT${sf()}`,REPLACE:`@@redux/REPLACE${sf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${sf()}`},Au=fR;function Lm(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function Mm(t,e,n){if(typeof t!="function")throw new Error(je(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(je(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(je(1));return n(Mm)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((S,m)=>{o.set(m,S)}))}function d(){if(l)throw new Error(je(3));return i}function c(S){if(typeof S!="function")throw new Error(je(4));if(l)throw new Error(je(5));let m=!0;u();const h=a++;return o.set(h,S),function(){if(m){if(l)throw new Error(je(6));m=!1,u(),o.delete(h),s=null}}}function f(S){if(!Lm(S))throw new Error(je(7));if(typeof S.type>"u")throw new Error(je(8));if(typeof S.type!="string")throw new Error(je(17));if(l)throw new Error(je(9));try{l=!0,i=r(i,S)}finally{l=!1}return(s=o).forEach(h=>{h()}),S}function p(S){if(typeof S!="function")throw new Error(je(10));r=S,f({type:Au.REPLACE})}function y(){const S=c;return{subscribe(m){if(typeof m!="object"||m===null)throw new Error(je(11));function h(){const _=m;_.next&&_.next(d())}return h(),{unsubscribe:S(h)}},[Wv](){return this}}}return f({type:Au.INIT}),{dispatch:f,subscribe:c,getState:d,replaceReducer:p,[Wv]:y}}function hR(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Au.INIT})>"u")throw new Error(je(12));if(typeof n(void 0,{type:Au.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(je(13))})}function YE(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{hR(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],f=n[c],p=o[c],y=f(p,a);if(typeof y>"u")throw a&&a.type,new Error(je(14));u[c]=y,l=l||y!==p}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Du(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function pR(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(je(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=Du(...a)(i.dispatch),{...i,dispatch:s}}}function mR(t){return Lm(t)&&"type"in t&&typeof t.type=="string"}var QE=Symbol.for("immer-nothing"),Bv=Symbol.for("immer-draftable"),kt=Symbol.for("immer-state");function Gt(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Ls=Object.getPrototypeOf;function $r(t){return!!t&&!!t[kt]}function Wn(t){var e;return t?XE(t)||Array.isArray(t)||!!t[Bv]||!!((e=t.constructor)!=null&&e[Bv])||Mc(t)||$c(t):!1}var gR=Object.prototype.constructor.toString();function XE(t){if(!t||typeof t!="object")return!1;const e=Ls(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===gR}function Lu(t,e){Lc(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function Lc(t){const e=t[kt];return e?e.type_:Array.isArray(t)?1:Mc(t)?2:$c(t)?3:0}function jh(t,e){return Lc(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function JE(t,e,n){const r=Lc(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function yR(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Mc(t){return t instanceof Map}function $c(t){return t instanceof Set}function ti(t){return t.copy_||t.base_}function Uh(t,e){if(Mc(t))return new Map(t);if($c(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&XE(t))return Ls(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[kt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(Ls(t),n)}function $m(t,e=!1){return Fc(t)||$r(t)||!Wn(t)||(Lc(t)>1&&(t.set=t.add=t.clear=t.delete=vR),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>$m(r,!0))),t}function vR(){Gt(2)}function Fc(t){return Object.isFrozen(t)}var _R={};function Ei(t){const e=_R[t];return e||Gt(0,t),e}var ma;function ZE(){return ma}function wR(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Vv(t,e){e&&(Ei("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function zh(t){Wh(t),t.drafts_.forEach(ER),t.drafts_=null}function Wh(t){t===ma&&(ma=t.parent_)}function Hv(t){return ma=wR(ma,t)}function ER(t){const e=t[kt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function Gv(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[kt].modified_&&(zh(e),Gt(4)),Wn(t)&&(t=Mu(e,t),e.parent_||$u(e,t)),e.patches_&&Ei("Patches").generateReplacementPatches_(n[kt].base_,t,e.patches_,e.inversePatches_)):t=Mu(e,n,[]),zh(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==QE?t:void 0}function Mu(t,e,n){if(Fc(e))return e;const r=e[kt];if(!r)return Lu(e,(i,s)=>Kv(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return $u(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),Lu(s,(a,l)=>Kv(t,r,i,a,l,n,o)),$u(t,i,!1),n&&t.patches_&&Ei("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function Kv(t,e,n,r,i,s,o){if($r(i)){const a=s&&e&&e.type_!==3&&!jh(e.assigned_,r)?s.concat(r):void 0,l=Mu(t,i,a);if(JE(n,r,l),$r(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Wn(i)&&!Fc(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Mu(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&$u(t,i)}}function $u(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&$m(e,n)}function SR(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:ZE(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Fm;n&&(i=[r],s=ga);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var Fm={get(t,e){if(e===kt)return t;const n=ti(t);if(!jh(n,e))return CR(t,n,e);const r=n[e];return t.finalized_||!Wn(r)?r:r===of(t.base_,e)?(af(t),t.copy_[e]=Vh(r,t)):r},has(t,e){return e in ti(t)},ownKeys(t){return Reflect.ownKeys(ti(t))},set(t,e,n){const r=eS(ti(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=of(ti(t),e),s=i==null?void 0:i[kt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(yR(n,i)&&(n!==void 0||jh(t.base_,e)))return!0;af(t),Bh(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return of(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,af(t),Bh(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=ti(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Gt(11)},getPrototypeOf(t){return Ls(t.base_)},setPrototypeOf(){Gt(12)}},ga={};Lu(Fm,(t,e)=>{ga[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});ga.deleteProperty=function(t,e){return ga.set.call(this,t,e,void 0)};ga.set=function(t,e,n){return Fm.set.call(this,t[0],e,n,t[0])};function of(t,e){const n=t[kt];return(n?ti(n):t)[e]}function CR(t,e,n){var i;const r=eS(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function eS(t,e){if(!(e in t))return;let n=Ls(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Ls(n)}}function Bh(t){t.modified_||(t.modified_=!0,t.parent_&&Bh(t.parent_))}function af(t){t.copy_||(t.copy_=Uh(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var TR=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,d=>n.call(this,d,...u))}}typeof n!="function"&&Gt(6),r!==void 0&&typeof r!="function"&&Gt(7);let i;if(Wn(e)){const s=Hv(this),o=Vh(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?zh(s):Wh(s)}return Vv(s,r),Gv(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===QE&&(i=void 0),this.autoFreeze_&&$m(i,!0),r){const s=[],o=[];Ei("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Gt(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Wn(t)||Gt(8),$r(t)&&(t=tS(t));const e=Hv(this),n=Vh(t,void 0);return n[kt].isManual_=!0,Wh(e),n}finishDraft(t,e){const n=t&&t[kt];(!n||!n.isManual_)&&Gt(9);const{scope_:r}=n;return Vv(r,e),Gv(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Ei("Patches").applyPatches_;return $r(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Vh(t,e){const n=Mc(t)?Ei("MapSet").proxyMap_(t,e):$c(t)?Ei("MapSet").proxySet_(t,e):SR(t,e);return(e?e.scope_:ZE()).drafts_.push(n),n}function tS(t){return $r(t)||Gt(10,t),nS(t)}function nS(t){if(!Wn(t)||Fc(t))return t;const e=t[kt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Uh(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Uh(t,!0);return Lu(n,(r,i)=>{JE(n,r,nS(i))}),e&&(e.finalized_=!1),n}var Pt=new TR,rS=Pt.produce;Pt.produceWithPatches.bind(Pt);Pt.setAutoFreeze.bind(Pt);Pt.setUseStrictShallowCopy.bind(Pt);Pt.applyPatches.bind(Pt);Pt.createDraft.bind(Pt);Pt.finishDraft.bind(Pt);function xR(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function IR(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function bR(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var qv=t=>Array.isArray(t)?t:[t];function kR(t){const e=Array.isArray(t[0])?t[0]:t;return bR(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function PR(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var RR=class{constructor(t){this.value=t}deref(){return this.value}},OR=typeof WeakRef<"u"?WeakRef:RR,NR=0,Yv=1;function _l(){return{s:NR,v:void 0,o:null,p:null}}function jm(t,e={}){let n=_l();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var c;let a=n;const{length:l}=arguments;for(let f=0,p=l;f<p;f++){const y=arguments[f];if(typeof y=="function"||typeof y=="object"&&y!==null){let v=a.o;v===null&&(a.o=v=new WeakMap);const S=v.get(y);S===void 0?(a=_l(),v.set(y,a)):a=S}else{let v=a.p;v===null&&(a.p=v=new Map);const S=v.get(y);S===void 0?(a=_l(),v.set(y,a)):a=S}}const u=a;let d;if(a.s===Yv?d=a.v:(d=t.apply(null,arguments),s++),u.s=Yv,r){const f=((c=i==null?void 0:i.deref)==null?void 0:c.call(i))??i;f!=null&&r(f,d)&&(d=f,s!==0&&s--),i=typeof d=="object"&&d!==null||typeof d=="function"?new OR(d):d}return u.v=d,d}return o.clearCache=()=>{n=_l(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function iS(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),xR(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const d={...n,...l},{memoize:c,memoizeOptions:f=[],argsMemoize:p=jm,argsMemoizeOptions:y=[],devModeChecks:v={}}=d,S=qv(f),m=qv(y),h=kR(i),g=c(function(){return s++,u.apply(null,arguments)},...S),_=p(function(){o++;const C=PR(h,arguments);return a=g.apply(null,C),a},...m);return Object.assign(_,{resultFunc:u,memoizedResultFunc:g,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:c,argsMemoize:p})};return Object.assign(r,{withTypes:()=>r}),r}var AR=iS(jm),DR=Object.assign((t,e=AR)=>{IR(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>DR});function sS(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var LR=sS(),MR=sS,$R=(...t)=>{const e=iS(...t),n=Object.assign((...r)=>{const i=e(...r),s=(o,...a)=>i($r(o)?tS(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};$R(jm);var FR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Du:Du.apply(null,arguments)},jR=t=>t&&typeof t.match=="function";function Ln(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(mt(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>mR(r)&&r.type===t,n}var oS=class Po extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Po.prototype)}static get[Symbol.species](){return Po}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Po(...e[0].concat(this)):new Po(...e.concat(this))}};function Qv(t){return Wn(t)?rS(t,()=>{}):t}function Xv(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(mt(10));const r=n.insert(e,t);return t.set(e,r),r}function UR(t){return typeof t=="boolean"}var zR=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new oS;return n&&(UR(n)?o.push(LR):o.push(MR(n.extraArgument))),o},WR="RTK_autoBatch",aS=t=>e=>{setTimeout(e,t)},BR=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:aS(10),VR=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?BR:t.type==="callback"?t.queueNotification:aS(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>i&&d(),f=r.subscribe(c);return a.add(d),()=>{f(),a.delete(d)}},dispatch(d){var c;try{return i=!((c=d==null?void 0:d.meta)!=null&&c[WR]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(d)}finally{i=!0}}})},HR=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new oS(t);return r&&i.push(VR(typeof r=="object"?r:void 0)),i},GR=!0;function KR(t){const e=zR(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(Lm(n))a=YE(n);else throw new Error(mt(1));let l;typeof r=="function"?l=r(e):l=e();let u=Du;i&&(u=FR({trace:!GR,...typeof i=="object"&&i}));const d=pR(...l),c=HR(d);let f=typeof o=="function"?o(c):c();const p=u(...f);return Mm(a,s,p)}function lS(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(mt(28));if(a in e)throw new Error(mt(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function qR(t){return typeof t=="function"}function YR(t,e){let[n,r,i]=lS(e),s;if(qR(t))s=()=>Qv(t());else{const a=Qv(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:d})=>d(l)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,c)=>{if(c)if($r(d)){const p=c(d,l);return p===void 0?d:p}else{if(Wn(d))return rS(d,f=>c(f,l));{const f=c(d,l);if(f===void 0){if(d===null)return d;throw new Error(mt(9))}return f}}return d},a)}return o.getInitialState=s,o}var QR="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",uS=(t=21)=>{let e="",n=t;for(;n--;)e+=QR[Math.random()*64|0];return e},XR=(t,e)=>jR(t)?t.match(e):t(e);function JR(...t){return e=>t.some(n=>XR(n,e))}var ZR=["name","message","stack","code"],lf=class{constructor(t,e){Rd(this,"_type");this.payload=t,this.meta=e}},Jv=class{constructor(t,e){Rd(this,"_type");this.payload=t,this.meta=e}},eO=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of ZR)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},Fa=(()=>{function t(e,n,r){const i=Ln(e+"/fulfilled",(l,u,d,c)=>({payload:l,meta:{...c||{},arg:d,requestId:u,requestStatus:"fulfilled"}})),s=Ln(e+"/pending",(l,u,d)=>({payload:void 0,meta:{...d||{},arg:u,requestId:l,requestStatus:"pending"}})),o=Ln(e+"/rejected",(l,u,d,c,f)=>({payload:c,error:(r&&r.serializeError||eO)(l||"Rejected"),meta:{...f||{},arg:d,requestId:u,rejectedWithValue:!!c,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,d,c)=>{const f=r!=null&&r.idGenerator?r.idGenerator(l):uS(),p=new AbortController;let y,v;function S(h){v=h,p.abort()}const m=async function(){var _,x;let h;try{let C=(_=r==null?void 0:r.condition)==null?void 0:_.call(r,l,{getState:d,extra:c});if(nO(C)&&(C=await C),C===!1||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const T=new Promise((b,D)=>{y=()=>{D({name:"AbortError",message:v||"Aborted"})},p.signal.addEventListener("abort",y)});u(s(f,l,(x=r==null?void 0:r.getPendingMeta)==null?void 0:x.call(r,{requestId:f,arg:l},{getState:d,extra:c}))),h=await Promise.race([T,Promise.resolve(n(l,{dispatch:u,getState:d,extra:c,requestId:f,signal:p.signal,abort:S,rejectWithValue:(b,D)=>new lf(b,D),fulfillWithValue:(b,D)=>new Jv(b,D)})).then(b=>{if(b instanceof lf)throw b;return b instanceof Jv?i(b.payload,f,l,b.meta):i(b,f,l)})])}catch(C){h=C instanceof lf?o(null,f,l,C.payload,C.meta):o(C,f,l)}finally{y&&p.signal.removeEventListener("abort",y)}return r&&!r.dispatchConditionRejection&&o.match(h)&&h.meta.condition||u(h),h}();return Object.assign(m,{abort:S,requestId:f,arg:l,unwrap(){return m.then(tO)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:JR(o,i),typePrefix:e})}return t.withTypes=()=>t,t})();function tO(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function nO(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var rO=Symbol.for("rtk-slice-createasyncthunk");function iO(t,e){return`${t}/${e}`}function sO({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[rO];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(mt(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(aO()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(g,_){const x=typeof g=="string"?g:g.type;if(!x)throw new Error(mt(12));if(x in u.sliceCaseReducersByType)throw new Error(mt(13));return u.sliceCaseReducersByType[x]=_,d},addMatcher(g,_){return u.sliceMatchers.push({matcher:g,reducer:_}),d},exposeAction(g,_){return u.actionCreators[g]=_,d},exposeCaseReducer(g,_){return u.sliceCaseReducersByName[g]=_,d}};l.forEach(g=>{const _=a[g],x={reducerName:g,type:iO(s,g),createNotation:typeof i.reducers=="function"};uO(_)?dO(x,_,d,e):lO(x,_,d)});function c(){const[g={},_=[],x=void 0]=typeof i.extraReducers=="function"?lS(i.extraReducers):[i.extraReducers],C={...g,...u.sliceCaseReducersByType};return YR(i.initialState,T=>{for(let b in C)T.addCase(b,C[b]);for(let b of u.sliceMatchers)T.addMatcher(b.matcher,b.reducer);for(let b of _)T.addMatcher(b.matcher,b.reducer);x&&T.addDefaultCase(x)})}const f=g=>g,p=new Map;let y;function v(g,_){return y||(y=c()),y(g,_)}function S(){return y||(y=c()),y.getInitialState()}function m(g,_=!1){function x(T){let b=T[g];return typeof b>"u"&&_&&(b=S()),b}function C(T=f){const b=Xv(p,_,{insert:()=>new WeakMap});return Xv(b,T,{insert:()=>{const D={};for(const[$,W]of Object.entries(i.selectors??{}))D[$]=oO(W,T,S,_);return D}})}return{reducerPath:g,getSelectors:C,get selectors(){return C(x)},selectSlice:x}}const h={name:s,reducer:v,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:S,...m(o),injectInto(g,{reducerPath:_,...x}={}){const C=_??o;return g.inject({reducerPath:C,reducer:v},x),{...h,...m(C,!0)}}};return h}}function oO(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var cS=sO();function aO(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function lO({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!cO(r))throw new Error(mt(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?Ln(t,o):Ln(t))}function uO(t){return t._reducerDefinitionType==="asyncThunk"}function cO(t){return t._reducerDefinitionType==="reducerWithPrepare"}function dO({type:t,reducerName:e},n,r,i){if(!i)throw new Error(mt(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:d}=n,c=i(t,s,d);r.exposeAction(e,c),o&&r.addCase(c.fulfilled,o),a&&r.addCase(c.pending,a),l&&r.addCase(c.rejected,l),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(e,{fulfilled:o||wl,pending:a||wl,rejected:l||wl,settled:u||wl})}function wl(){}var fO=(t,e)=>{if(typeof t!="function")throw new Error(mt(32))},Um="listenerMiddleware",hO=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:s}=t;if(e)i=Ln(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(mt(21));return fO(s),{predicate:i,type:e,effect:s}},pO=Object.assign(t=>{const{type:e,predicate:n,effect:r}=hO(t);return{id:uS(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(mt(22))}}},{withTypes:()=>pO}),mO=Object.assign(Ln(`${Um}/add`),{withTypes:()=>mO});Ln(`${Um}/removeAll`);var gO=Object.assign(Ln(`${Um}/remove`),{withTypes:()=>gO});function mt(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var Zv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw no(e)},no=function(t){return new Error("Firebase Database ("+dS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},zm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[d],n[c],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new vO;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),c!==64){const y=u<<6&192|c;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hS=function(t){const e=fS(t);return zm.encodeByteArray(e,!0)},Fu=function(t){return hS(t).replace(/\./g,"")},ju=function(t){try{return zm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _O(t){return pS(void 0,t)}function pS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!wO(n)||(t[n]=pS(t[n],e[n]));return t}function wO(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO=()=>EO().__FIREBASE_DEFAULTS__,CO=()=>{if(typeof process>"u"||typeof Zv>"u")return;const t=Zv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ju(t[1]);return e&&JSON.parse(e)},Wm=()=>{try{return SO()||CO()||TO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mS=t=>{var e,n;return(n=(e=Wm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xO=t=>{const e=mS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gS=()=>{var t;return(t=Wm())===null||t===void 0?void 0:t.config},yS=t=>{var e;return(e=Wm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fu(JSON.stringify(n)),Fu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function bO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kO(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _S(){return dS.NODE_ADMIN===!0}function PO(){try{return typeof indexedDB=="object"}catch{return!1}}function RO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO="FirebaseError";class Gr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OO,Object.setPrototypeOf(this,Gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ja.prototype.create)}}class ja{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?NO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gr(i,a,r)}}function NO(t,e){return t.replace(AO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const AO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){return JSON.parse(t)}function ke(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ya(ju(s[0])||""),n=ya(ju(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},DO=function(t){const e=wS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},LO=function(t){const e=wS(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ms(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Hh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Uu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function zu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(e_(s)&&e_(o)){if(!zu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function e_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ro(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Oo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function $O(t,e){const n=new FO(t,e);return n.subscribe.bind(n)}class FO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=uf),i.error===void 0&&(i.error=uf),i.complete===void 0&&(i.complete=uf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uf(){}function ES(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){return t&&t._delegate?t._delegate:t}class Si{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Bm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BO(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WO(t){return t===ni?void 0:t}function BO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const HO={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},GO=ie.INFO,KO={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},qO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=KO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hm{constructor(e){this.name=e,this._logLevel=GO,this._logHandler=qO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const YO=(t,e)=>e.some(n=>t instanceof n);let t_,n_;function QO(){return t_||(t_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XO(){return n_||(n_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const SS=new WeakMap,Gh=new WeakMap,CS=new WeakMap,cf=new WeakMap,Gm=new WeakMap;function JO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(br(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&SS.set(n,t)}).catch(()=>{}),Gm.set(e,t),e}function ZO(t){if(Gh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Gh.set(t,e)}let Kh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||CS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eN(t){Kh=t(Kh)}function tN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(df(this),e,...n);return CS.set(r,e.sort?e.sort():[e]),br(r)}:XO().includes(t)?function(...e){return t.apply(df(this),e),br(SS.get(this))}:function(...e){return br(t.apply(df(this),e))}}function nN(t){return typeof t=="function"?tN(t):(t instanceof IDBTransaction&&ZO(t),YO(t,QO())?new Proxy(t,Kh):t)}function br(t){if(t instanceof IDBRequest)return JO(t);if(cf.has(t))return cf.get(t);const e=nN(t);return e!==t&&(cf.set(t,e),Gm.set(e,t)),e}const df=t=>Gm.get(t);function rN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=br(o);return r&&o.addEventListener("upgradeneeded",l=>{r(br(o.result),l.oldVersion,l.newVersion,br(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const iN=["get","getKey","getAll","getAllKeys","count"],sN=["put","add","delete","clear"],ff=new Map;function r_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ff.get(e))return ff.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||iN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ff.set(e,s),s}eN(t=>({...t,get:(e,n,r)=>r_(e,n)||t.get(e,n,r),has:(e,n)=>!!r_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qh="@firebase/app",i_="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Hm("@firebase/app"),lN="@firebase/app-compat",uN="@firebase/analytics-compat",cN="@firebase/analytics",dN="@firebase/app-check-compat",fN="@firebase/app-check",hN="@firebase/auth",pN="@firebase/auth-compat",mN="@firebase/database",gN="@firebase/database-compat",yN="@firebase/functions",vN="@firebase/functions-compat",_N="@firebase/installations",wN="@firebase/installations-compat",EN="@firebase/messaging",SN="@firebase/messaging-compat",CN="@firebase/performance",TN="@firebase/performance-compat",xN="@firebase/remote-config",IN="@firebase/remote-config-compat",bN="@firebase/storage",kN="@firebase/storage-compat",PN="@firebase/firestore",RN="@firebase/firestore-compat",ON="firebase",NN="10.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="[DEFAULT]",AN={[qh]:"fire-core",[lN]:"fire-core-compat",[cN]:"fire-analytics",[uN]:"fire-analytics-compat",[fN]:"fire-app-check",[dN]:"fire-app-check-compat",[hN]:"fire-auth",[pN]:"fire-auth-compat",[mN]:"fire-rtdb",[gN]:"fire-rtdb-compat",[yN]:"fire-fn",[vN]:"fire-fn-compat",[_N]:"fire-iid",[wN]:"fire-iid-compat",[EN]:"fire-fcm",[SN]:"fire-fcm-compat",[CN]:"fire-perf",[TN]:"fire-perf-compat",[xN]:"fire-rc",[IN]:"fire-rc-compat",[bN]:"fire-gcs",[kN]:"fire-gcs-compat",[PN]:"fire-fst",[RN]:"fire-fst-compat","fire-js":"fire-js",[ON]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Map,DN=new Map,Qh=new Map;function s_(t,e){try{t.container.addComponent(e)}catch(n){Ci.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $s(t){const e=t.name;if(Qh.has(e))return Ci.debug(`There were multiple attempts to register component ${e}.`),!1;Qh.set(e,t);for(const n of Wu.values())s_(n,t);for(const n of DN.values())s_(n,t);return!0}function Km(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kr=new ja("app","Firebase",LN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=NN;function TS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kr.create("bad-app-name",{appName:String(i)});if(n||(n=gS()),!n)throw kr.create("no-options");const s=Wu.get(i);if(s){if(zu(n,s.options)&&zu(r,s.config))return s;throw kr.create("duplicate-app",{appName:i})}const o=new VO(i);for(const l of Qh.values())o.addComponent(l);const a=new MN(n,r,o);return Wu.set(i,a),a}function xS(t=Yh){const e=Wu.get(t);if(!e&&t===Yh&&gS())return TS();if(!e)throw kr.create("no-app",{appName:t});return e}function Pr(t,e,n){var r;let i=(r=AN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ci.warn(a.join(" "));return}$s(new Si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N="firebase-heartbeat-database",FN=1,va="firebase-heartbeat-store";let hf=null;function IS(){return hf||(hf=rN($N,FN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(va)}catch(n){console.warn(n)}}}}).catch(t=>{throw kr.create("idb-open",{originalErrorMessage:t.message})})),hf}async function jN(t){try{const n=(await IS()).transaction(va),r=await n.objectStore(va).get(bS(t));return await n.done,r}catch(e){if(e instanceof Gr)Ci.warn(e.message);else{const n=kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ci.warn(n.message)}}}async function o_(t,e){try{const r=(await IS()).transaction(va,"readwrite");await r.objectStore(va).put(e,bS(t)),await r.done}catch(n){if(n instanceof Gr)Ci.warn(n.message);else{const r=kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ci.warn(r.message)}}}function bS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=1024,zN=30*24*60*60*1e3;class WN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=a_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=zN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=a_(),{heartbeatsToSend:r,unsentEntries:i}=BN(this._heartbeatsCache.heartbeats),s=Fu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function a_(){return new Date().toISOString().substring(0,10)}function BN(t,e=UN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),l_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),l_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return PO()?RO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return o_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return o_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function l_(t){return Fu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(t){$s(new Si("platform-logger",e=>new oN(e),"PRIVATE")),$s(new Si("heartbeat",e=>new WN(e),"PRIVATE")),Pr(qh,i_,t),Pr(qh,i_,"esm2017"),Pr("fire-js","")}HN("");var Qe=function(){return Qe=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Qe.apply(this,arguments)};function qm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Fs(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function kS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GN=kS,PS=new ja("auth","Firebase",kS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Hm("@firebase/auth");function KN(t,...e){Bu.logLevel<=ie.WARN&&Bu.warn(`Auth (${io}): ${t}`,...e)}function zl(t,...e){Bu.logLevel<=ie.ERROR&&Bu.error(`Auth (${io}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,...e){throw Ym(t,...e)}function mn(t,...e){return Ym(t,...e)}function RS(t,e,n){const r=Object.assign(Object.assign({},GN()),{[e]:n});return new ja("auth","Firebase",r).create(e,{appName:t.name})}function Mn(t){return RS(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ym(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return PS.create(t,...e)}function U(t,e,...n){if(!t)throw Ym(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zl(e),new Error(e)}function Bn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qN(){return u_()==="http:"||u_()==="https:"}function u_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qN()||bO()||"connection"in navigator)?navigator.onLine:!0}function QN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=Vm()||vS()}get(){return YN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=new Ua(3e4,6e4);function Kr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qn(t,e,n,r,i={}){return NS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ro(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),OS.fetch()(AS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function NS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XN),e);try{const i=new eA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw El(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw El(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw El(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw El(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw RS(t,d,u);tn(t,d)}}catch(i){if(i instanceof Gr)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function za(t,e,n,r,i={}){const s=await Qn(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function AS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Qm(t.config,i):`${t.config.apiScheme}://${i}`}function ZN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),JN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function El(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mn(t,e,r);return i.customData._tokenResponse=n,i}function c_(t){return t!==void 0&&t.enterprise!==void 0}class tA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ZN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function nA(t,e){return Qn(t,"GET","/v2/recaptchaConfig",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e){return Qn(t,"POST","/v1/accounts:delete",e)}async function DS(t,e){return Qn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iA(t,e=!1){const n=yt(t),r=await n.getIdToken(e),i=Xm(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wo(pf(i.auth_time)),issuedAtTime:Wo(pf(i.iat)),expirationTime:Wo(pf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pf(t){return Number(t)*1e3}function Xm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zl("JWT malformed, contained fewer than 3 sections"),null;try{const i=ju(n);return i?JSON.parse(i):(zl("Failed to decode base64 JWT payload"),null)}catch(i){return zl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function d_(t){const e=Xm(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gr&&sA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wo(this.lastLoginAt),this.creationTime=Wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await js(t,DS(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?LS(s.providerUserInfo):[],a=lA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Jh(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function aA(t){const e=yt(t);await Vu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function LS(t){return t.map(e=>{var{providerId:n}=e,r=qm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(t,e){const n=await NS(t,{},async()=>{const r=ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=AS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",OS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cA(t,e){return Qn(t,"POST","/v2/accounts:revokeToken",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):d_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=d_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ws;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Jh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await js(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iA(this,e)}reload(){return aA(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(Mn(this.auth));const e=await this.getIdToken();return await js(this,rA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:_,isAnonymous:x,providerData:C,stsTokenManager:T}=n;U(g&&T,e,"internal-error");const b=ws.fromJSON(this.name,T);U(typeof g=="string",e,"internal-error"),nr(c,e.name),nr(f,e.name),U(typeof _=="boolean",e,"internal-error"),U(typeof x=="boolean",e,"internal-error"),nr(p,e.name),nr(y,e.name),nr(v,e.name),nr(S,e.name),nr(m,e.name),nr(h,e.name);const D=new On({uid:g,auth:e,email:f,emailVerified:_,displayName:c,isAnonymous:x,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:b,createdAt:m,lastLoginAt:h});return C&&Array.isArray(C)&&(D.providerData=C.map($=>Object.assign({},$))),S&&(D._redirectEventId=S),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new ws;i.updateFromServerResponse(n);const s=new On({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];U(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?LS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ws;a.updateFromIdToken(r);const l=new On({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Jh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=new Map;function Nn(t){Bn(t instanceof Function,"Expected a class definition");let e=f_.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,f_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}MS.type="NONE";const h_=MS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?On._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Es(Nn(h_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Nn(h_);const o=Wl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=On._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Es(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Es(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($S(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zS(e))return"Blackberry";if(WS(e))return"Webos";if(Jm(e))return"Safari";if((e.includes("chrome/")||FS(e))&&!e.includes("edge/"))return"Chrome";if(US(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $S(t=Je()){return/firefox\//i.test(t)}function Jm(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function FS(t=Je()){return/crios\//i.test(t)}function jS(t=Je()){return/iemobile/i.test(t)}function US(t=Je()){return/android/i.test(t)}function zS(t=Je()){return/blackberry/i.test(t)}function WS(t=Je()){return/webos/i.test(t)}function Uc(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dA(t=Je()){var e;return Uc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fA(){return kO()&&document.documentMode===10}function BS(t=Je()){return Uc(t)||US(t)||WS(t)||zS(t)||/windows phone/i.test(t)||jS(t)}function hA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(t,e=[]){let n;switch(t){case"Browser":n=p_(Je());break;case"Worker":n=`${p_(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${io}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(t,e={}){return Qn(t,"GET","/v2/passwordPolicy",Kr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=6;class yA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new m_(this),this.idTokenSubscription=new m_(this),this.beforeStateQueue=new pA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=PS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await DS(this,{idToken:e}),r=await On._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(Mn(this));const n=e?yt(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mA(this),n=new yA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ja("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Di(t){return yt(t)}class m_{constructor(e){this.auth=e,this.observer=null,this.addObserver=$O(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _A(t){zc=t}function HS(t){return zc.loadJS(t)}function wA(){return zc.recaptchaEnterpriseScript}function EA(){return zc.gapiScript}function SA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const CA="recaptcha-enterprise",TA="NO_RECAPTCHA";class xA{constructor(e){this.type=CA,this.auth=Di(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{nA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new tA(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;c_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(TA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&c_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=wA();l.length!==0&&(l+=a),HS(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function g_(t,e,n,r=!1){const i=new xA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Zh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await g_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await g_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t,e){const n=Km(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zu(s,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function bA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kA(t,e,n){const r=Di(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=GS(e),{host:o,port:a}=PA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||RA()}function GS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PA(t){const e=GS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:y_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:y_(o)}}}function y_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function OA(t,e){return Qn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(t,e){return za(t,"POST","/v1/accounts:signInWithPassword",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",Kr(t,e))}async function DA(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends Zm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new _a(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _a(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zh(e,n,"signInWithPassword",NA);case"emailLink":return AA(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zh(e,r,"signUpPassword",OA);case"emailLink":return DA(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t,e){return za(t,"POST","/v1/accounts:signInWithIdp",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA="http://localhost";class Ti extends Zm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ti(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ss(e,n)}buildRequest(){const e={requestUri:LA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $A(t){const e=Ro(Oo(t)).link,n=e?Ro(Oo(e)).deep_link_id:null,r=Ro(Oo(t)).deep_link_id;return(r?Ro(Oo(r)).link:null)||r||n||e||t}class eg{constructor(e){var n,r,i,s,o,a;const l=Ro(Oo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=MA((i=l.mode)!==null&&i!==void 0?i:null);U(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$A(e);try{return new eg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.providerId=so.PROVIDER_ID}static credential(e,n){return _a._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=eg.parseLink(n);return U(r,"argument-error"),_a._fromEmailAndCode(e,r.code,r.tenantId)}}so.PROVIDER_ID="password";so.EMAIL_PASSWORD_SIGN_IN_METHOD="password";so.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends KS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Wa{constructor(){super("facebook.com")}static credential(e){return Ti._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ti._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Wa{constructor(){super("github.com")}static credential(e){return Ti._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Wa{constructor(){super("twitter.com")}static credential(e,n){return Ti._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(t,e){return za(t,"POST","/v1/accounts:signUp",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await On._fromIdTokenResponse(e,r,i),o=v_(r);return new xi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=v_(r);return new xi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function v_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu extends Gr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Hu(e,n,r,i)}}function qS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hu._fromErrorAndOperation(t,s,e,r):s})}async function jA(t,e,n=!1){const r=await js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UA(t,e,n=!1){const{auth:r}=t;if(dn(r.app))return Promise.reject(Mn(r));const i="reauthenticate";try{const s=await js(t,qS(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=Xm(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),xi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e,n=!1){if(dn(t.app))return Promise.reject(Mn(t));const r="signIn",i=await qS(t,r,e),s=await xi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function zA(t,e){return YS(Di(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(t){const e=Di(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function WA(t,e,n){if(dn(t.app))return Promise.reject(Mn(t));const r=Di(t),o=await Zh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",FA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&QS(t),l}),a=await xi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function BA(t,e,n){return dn(t.app)?Promise.reject(Mn(t)):zA(yt(t),so.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&QS(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(t,e){return Qn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=yt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await js(r,VA(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function GA(t,e,n,r){return yt(t).onIdTokenChanged(e,n,r)}function KA(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}function qA(t){return yt(t).signOut()}const Gu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gu,"1"),this.storage.removeItem(Gu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(){const t=Je();return Jm(t)||Uc(t)}const QA=1e3,XA=10;class JS extends XS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=YA()&&hA(),this.fallbackToPolling=BS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}JS.type="LOCAL";const JA=JS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS extends XS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ZS.type="SESSION";const eC=ZS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ZA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=tg("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function t2(t){gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function n2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function i2(){return tC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="firebaseLocalStorageDb",s2=1,Ku="firebaseLocalStorage",rC="fbase_key";class Ba{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bc(t,e){return t.transaction([Ku],e?"readwrite":"readonly").objectStore(Ku)}function o2(){const t=indexedDB.deleteDatabase(nC);return new Ba(t).toPromise()}function ep(){const t=indexedDB.open(nC,s2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ku,{keyPath:rC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ku)?e(r):(r.close(),await o2(),e(await ep()))})})}async function __(t,e,n){const r=Bc(t,!0).put({[rC]:e,value:n});return new Ba(r).toPromise()}async function a2(t,e){const n=Bc(t,!1).get(e),r=await new Ba(n).toPromise();return r===void 0?null:r.value}function w_(t,e){const n=Bc(t,!0).delete(e);return new Ba(n).toPromise()}const l2=800,u2=3;class iC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ep(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>u2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wc._getInstance(i2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await n2(),!this.activeServiceWorker)return;this.sender=new e2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||r2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ep();return await __(e,Gu,"1"),await w_(e,Gu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>__(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>a2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>w_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bc(i,!1).getAll();return new Ba(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),l2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iC.type="LOCAL";const c2=iC;new Ua(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(t,e){return e?Nn(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng extends Zm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function f2(t){return YS(t.auth,new ng(t),t.bypassAuthState)}function h2(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),UA(n,new ng(t),t.bypassAuthState)}async function p2(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),jA(n,new ng(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return f2;case"linkViaPopup":case"linkViaRedirect":return p2;case"reauthViaPopup":case"reauthViaRedirect":return h2;default:tn(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=new Ua(2e3,1e4);class us extends sC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=tg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,m2.get())};e()}}us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2="pendingRedirect",Bl=new Map;class y2 extends sC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bl.get(this.auth._key());if(!e){try{const r=await v2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bl.set(this.auth._key(),e)}return this.bypassAuthState||Bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function v2(t,e){const n=E2(e),r=w2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _2(t,e){Bl.set(t._key(),e)}function w2(t){return Nn(t._redirectPersistence)}function E2(t){return Wl(g2,t.config.apiKey,t.name)}async function S2(t,e,n=!1){if(dn(t.app))return Promise.reject(Mn(t));const r=Di(t),i=d2(r,e),o=await new y2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=10*60*1e3;class T2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!x2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=C2&&this.cachedEventUids.clear(),this.cachedEventUids.has(E_(e))}saveEventToCache(e){this.cachedEventUids.add(E_(e)),this.lastProcessedEventTime=Date.now()}}function E_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function x2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I2(t,e={}){return Qn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,k2=/^https?/;async function P2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await I2(t);for(const n of e)try{if(R2(n))return}catch{}tn(t,"unauthorized-domain")}function R2(t){const e=Xh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!k2.test(n))return!1;if(b2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=new Ua(3e4,6e4);function S_(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function N2(t){return new Promise((e,n)=>{var r,i,s;function o(){S_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{S_(),n(mn(t,"network-request-failed"))},timeout:O2.get()})}if(!((i=(r=gn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gn().gapi)===null||s===void 0)&&s.load)o();else{const a=SA("iframefcb");return gn()[a]=()=>{gapi.load?o():n(mn(t,"network-request-failed"))},HS(`${EA()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Vl=null,e})}let Vl=null;function A2(t){return Vl=Vl||N2(t),Vl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2=new Ua(5e3,15e3),L2="__/auth/iframe",M2="emulator/auth/iframe",$2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},F2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j2(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qm(e,M2):`https://${t.config.authDomain}/${L2}`,r={apiKey:e.apiKey,appName:t.name,v:io},i=F2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ro(r).slice(1)}`}async function U2(t){const e=await A2(t),n=gn().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:j2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),a=gn().setTimeout(()=>{s(o)},D2.get());function l(){gn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},W2=500,B2=600,V2="_blank",H2="http://localhost";class C_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function G2(t,e,n,r=W2,i=B2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},z2),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Je().toLowerCase();n&&(a=FS(u)?V2:n),$S(u)&&(e=e||H2,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[p,y])=>`${f}${p}=${y},`,"");if(dA(u)&&a!=="_self")return K2(e||"",a),new C_(null);const c=window.open(e||"",a,d);U(c,t,"popup-blocked");try{c.focus()}catch{}return new C_(c)}function K2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="__/auth/handler",Y2="emulator/auth/handler",Q2=encodeURIComponent("fac");async function T_(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:io,eventId:i};if(e instanceof KS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof Wa){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${Q2}=${encodeURIComponent(l)}`:"";return`${X2(t)}?${ro(a).slice(1)}${u}`}function X2({config:t}){return t.emulator?Qm(t,Y2):`https://${t.authDomain}/${q2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="webStorageSupport";class J2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eC,this._completeRedirectFn=S2,this._overrideRedirectResult=_2}async _openPopup(e,n,r,i){var s;Bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await T_(e,n,r,Xh(),i);return G2(e,o,tg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await T_(e,n,r,Xh(),i);return t2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await U2(e),r=new T2(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mf,{type:mf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[mf];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=P2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return BS()||Jm()||Uc()}}const Z2=J2;var x_="@firebase/auth",I_="1.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nD(t){$s(new Si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VS(t)},u=new vA(r,i,s,l);return bA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$s(new Si("auth-internal",e=>{const n=Di(e.getProvider("auth").getImmediate());return(r=>new eD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pr(x_,I_,tD(t)),Pr(x_,I_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=5*60,iD=yS("authIdTokenMaxAge")||rD;let b_=null;const sD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iD)return;const i=n==null?void 0:n.token;b_!==i&&(b_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Vc(t=xS()){const e=Km(t,"auth");if(e.isInitialized())return e.getImmediate();const n=IA(t,{popupRedirectResolver:Z2,persistence:[c2,JA,eC]}),r=yS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=sD(s.toString());KA(n,o,()=>o(n.currentUser)),GA(n,a=>o(a))}}const i=mS("auth");return i&&kA(n,`http://${i}`),n}function oD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_A({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",oD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nD("Browser");let aD={data:""},lD=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||aD,uD=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,cD=/\/\*[^]*?\*\/|  +/g,k_=/\n+/g,hr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?hr(o,s):s+"{"+hr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=hr(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=hr.p?hr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Sn={},aC=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+aC(t[n]);return e}return t},dD=(t,e,n,r,i)=>{let s=aC(t),o=Sn[s]||(Sn[s]=(l=>{let u=0,d=11;for(;u<l.length;)d=101*d+l.charCodeAt(u++)>>>0;return"go"+d})(s));if(!Sn[o]){let l=s!==t?t:(u=>{let d,c,f=[{}];for(;d=uD.exec(u.replace(cD,""));)d[4]?f.shift():d[3]?(c=d[3].replace(k_," ").trim(),f.unshift(f[0][c]=f[0][c]||{})):f[0][d[1]]=d[2].replace(k_," ").trim();return f[0]})(t);Sn[o]=hr(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Sn.g?Sn.g:null;return n&&(Sn.g=Sn[o]),((l,u,d,c)=>{c?u.data=u.data.replace(c,l):u.data.indexOf(l)===-1&&(u.data=d?l+u.data:u.data+l)})(Sn[o],e,r,a),o},fD=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":hr(a,""):a===!1?"":a}return r+i+(o??"")},"");function Hc(t){let e=this||{},n=t.call?t(e.p):t;return dD(n.unshift?n.raw?fD(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,lD(e.target),e.g,e.o,e.k)}let lC,tp,np;Hc.bind({g:1});let Vn=Hc.bind({k:1});function hD(t,e,n,r){hr.p=e,lC=t,tp=n,np=r}function qr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:tp&&tp()},a),n.o=/ *go\d+/.test(l),a.className=Hc.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),np&&u[0]&&np(a),lC(u,a)}return e?e(i):i}}var pD=t=>typeof t=="function",qu=(t,e)=>pD(t)?t(e):t,mD=(()=>{let t=0;return()=>(++t).toString()})(),uC=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),gD=20,Hl=new Map,yD=1e3,P_=t=>{if(Hl.has(t))return;let e=setTimeout(()=>{Hl.delete(t),Li({type:4,toastId:t})},yD);Hl.set(t,e)},vD=t=>{let e=Hl.get(t);e&&clearTimeout(e)},rp=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,gD)};case 1:return e.toast.id&&vD(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?rp(t,{type:1,toast:n}):rp(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?P_(r):t.toasts.forEach(s=>{P_(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},Gl=[],Kl={toasts:[],pausedAt:void 0},Li=t=>{Kl=rp(Kl,t),Gl.forEach(e=>{e(Kl)})},_D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},wD=(t={})=>{let[e,n]=E.useState(Kl);E.useEffect(()=>(Gl.push(n),()=>{let i=Gl.indexOf(n);i>-1&&Gl.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||_D[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},ED=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||mD()}),Va=t=>(e,n)=>{let r=ED(e,t,n);return Li({type:2,toast:r}),r.id},Tt=(t,e)=>Va("blank")(t,e);Tt.error=Va("error");Tt.success=Va("success");Tt.loading=Va("loading");Tt.custom=Va("custom");Tt.dismiss=t=>{Li({type:3,toastId:t})};Tt.remove=t=>Li({type:4,toastId:t});Tt.promise=(t,e,n)=>{let r=Tt.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(Tt.success(qu(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Tt.error(qu(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var SD=(t,e)=>{Li({type:1,toast:{id:t,height:e}})},CD=()=>{Li({type:5,time:Date.now()})},TD=t=>{let{toasts:e,pausedAt:n}=wD(t);E.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(l<0){a.visible&&Tt.dismiss(a.id);return}return setTimeout(()=>Tt.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=E.useCallback(()=>{n&&Li({type:6,time:Date.now()})},[n]),i=E.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=o||{},d=e.filter(p=>(p.position||u)===(s.position||u)&&p.height),c=d.findIndex(p=>p.id===s.id),f=d.filter((p,y)=>y<c&&p.visible).length;return d.filter(p=>p.visible).slice(...a?[f+1]:[0,f]).reduce((p,y)=>p+(y.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:SD,startPause:CD,endPause:r,calculateOffset:i}}},xD=Vn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ID=Vn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,bD=Vn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,kD=qr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${xD} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ID} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${bD} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,PD=Vn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,RD=qr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${PD} 1s linear infinite;
`,OD=Vn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ND=Vn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,AD=qr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${OD} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ND} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,DD=qr("div")`
  position: absolute;
`,LD=qr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,MD=Vn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$D=qr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${MD} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,FD=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?E.createElement($D,null,e):e:n==="blank"?null:E.createElement(LD,null,E.createElement(RD,{...r}),n!=="loading"&&E.createElement(DD,null,n==="error"?E.createElement(kD,{...r}):E.createElement(AD,{...r})))},jD=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,UD=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,zD="0%{opacity:0;} 100%{opacity:1;}",WD="0%{opacity:1;} 100%{opacity:0;}",BD=qr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,VD=qr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,HD=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=uC()?[zD,WD]:[jD(n),UD(n)];return{animation:e?`${Vn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Vn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},GD=E.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?HD(t.position||e||"top-center",t.visible):{opacity:0},s=E.createElement(FD,{toast:t}),o=E.createElement(VD,{...t.ariaProps},qu(t.message,t));return E.createElement(BD,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):E.createElement(E.Fragment,null,s,o))});hD(E.createElement);var KD=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=E.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return E.createElement("div",{ref:s,className:e,style:n},i)},qD=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:uC()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},YD=Hc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Sl=16,QD=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:l}=TD(n);return E.createElement("div",{style:{position:"fixed",zIndex:9999,top:Sl,left:Sl,right:Sl,bottom:Sl,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let d=u.position||e,c=l.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),f=qD(d,c);return E.createElement(KD,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?YD:"",style:f},u.type==="custom"?qu(u.message,u):i?i(u):E.createElement(GD,{toast:u,position:d}))}))},rg=Tt;const cC=Fa("auth/register",async({value:t},e)=>{const{name:n,email:r,password:i}=t,s=Vc();try{const a=(await WA(s,r,i)).user;return await HA(a,{displayName:n}),{email:a.email,accessToken:a.accessToken,id:a.uid,name:a.displayName}}catch(o){return rg.error("Please check your data and try again"),e.rejectWithValue(o.message)}}),dC=Fa("auth/login",async({value:t},e)=>{const{email:n,password:r}=t,i=Vc();try{const o=(await BA(i,n,r)).user;return{email:o.email,accessToken:o.accessToken,id:o.uid,name:o.displayName}}catch(s){return rg.error("Please check your data and try again"),e.rejectWithValue(s.message)}}),fC=Fa("auth/logout",async(t,e)=>{const n=Vc();try{await qA(n)}catch(r){return e.rejectWithValue(r.message)}}),ql=Fa("auth/refresh",async(t,e)=>{const r=e.getState().auth.token,i=Vc();if(r===null)return e.rejectWithValue("Unable to fetch user");try{return new Promise((s,o)=>{i.onAuthStateChanged(a=>{a?s({name:a.displayName,email:a.email,token:a.accessToken,id:a.uid}):o("Unable to fetch user")})})}catch(s){return e.rejectWithValue(s.message)}}),XD={name:null,email:null,token:null,id:null,isLoggedIn:!1,isRefreshing:!1},JD=cS({name:"auth",initialState:XD,extraReducers:t=>{t.addCase(cC.fulfilled,(e,n)=>{e.email=n.payload.email,e.token=n.payload.accessToken,e.id=n.payload.id,e.name=n.payload.name,e.isLoggedIn=!0}).addCase(dC.fulfilled,(e,n)=>{e.email=n.payload.email,e.token=n.payload.accessToken,e.id=n.payload.id,e.name=n.payload.name,e.isLoggedIn=!0}).addCase(fC.fulfilled,e=>{e.email=null,e.token=null,e.id=null,e.name=null,e.isLoggedIn=!1}).addCase(ql.pending,e=>{e.isRefreshing=!0}).addCase(ql.fulfilled,(e,n)=>{e.name=n.payload.name,e.email=n.payload.email,e.token=n.payload.token,e.id=n.payload.id,e.isLoggedIn=!0,e.isRefreshing=!1}).addCase(ql.rejected,e=>{e.isRefreshing=!1})}}),ZD=JD.reducer;var ig="persist:",sg="persist/FLUSH",Gc="persist/REHYDRATE",og="persist/PAUSE",ag="persist/PERSIST",lg="persist/PURGE",ug="persist/REGISTER",eL=-1;function Yl(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Yl=function(n){return typeof n}:Yl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Yl(t)}function R_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function tL(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?R_(n,!0).forEach(function(r){nL(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R_(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function nL(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rL(t,e,n,r){r.debug;var i=tL({},n);return t&&Yl(t)==="object"&&Object.keys(t).forEach(function(s){s!=="_persist"&&e[s]===n[s]&&(i[s]=t[s])}),i}function iL(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,s="".concat(t.keyPrefix!==void 0?t.keyPrefix:ig).concat(t.key),o=t.storage,a;t.serialize===!1?a=function(x){return x}:typeof t.serialize=="function"?a=t.serialize:a=sL;var l=t.writeFailHandler||null,u={},d={},c=[],f=null,p=null,y=function(x){Object.keys(x).forEach(function(C){m(C)&&u[C]!==x[C]&&c.indexOf(C)===-1&&c.push(C)}),Object.keys(u).forEach(function(C){x[C]===void 0&&m(C)&&c.indexOf(C)===-1&&u[C]!==void 0&&c.push(C)}),f===null&&(f=setInterval(v,i)),u=x};function v(){if(c.length===0){f&&clearInterval(f),f=null;return}var _=c.shift(),x=r.reduce(function(C,T){return T.in(C,_,u)},u[_]);if(x!==void 0)try{d[_]=a(x)}catch(C){console.error("redux-persist/createPersistoid: error serializing state",C)}else delete d[_];c.length===0&&S()}function S(){Object.keys(d).forEach(function(_){u[_]===void 0&&delete d[_]}),p=o.setItem(s,a(d)).catch(h)}function m(_){return!(n&&n.indexOf(_)===-1&&_!=="_persist"||e&&e.indexOf(_)!==-1)}function h(_){l&&l(_)}var g=function(){for(;c.length!==0;)v();return p||Promise.resolve()};return{update:y,flush:g}}function sL(t){return JSON.stringify(t)}function oL(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:ig).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(o){return o}:typeof t.deserialize=="function"?i=t.deserialize:i=aL,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=e.reduceRight(function(u,d){return d.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function aL(t){return JSON.parse(t)}function lL(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:ig).concat(t.key);return e.removeItem(n,uL)}function uL(t){}function O_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Cn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?O_(n,!0).forEach(function(r){cL(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O_(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function cL(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dL(t,e){if(t==null)return{};var n=fL(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function fL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var hL=5e3;function N_(t,e){var n=t.version!==void 0?t.version:eL;t.debug;var r=t.stateReconciler===void 0?rL:t.stateReconciler,i=t.getStoredState||oL,s=t.timeout!==void 0?t.timeout:hL,o=null,a=!1,l=!0,u=function(c){return c._persist.rehydrated&&o&&!l&&o.update(c),c};return function(d,c){var f=d||{},p=f._persist,y=dL(f,["_persist"]),v=y;if(c.type===ag){var S=!1,m=function(b,D){S||(c.rehydrate(t.key,b,D),S=!0)};if(s&&setTimeout(function(){!S&&m(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},s),l=!1,o||(o=iL(t)),p)return Cn({},e(v,c),{_persist:p});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(t.key),i(t).then(function(T){var b=t.migrate||function(D,$){return Promise.resolve(D)};b(T,n).then(function(D){m(D)},function(D){m(void 0,D)})},function(T){m(void 0,T)}),Cn({},e(v,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===lg)return a=!0,c.result(lL(t)),Cn({},e(v,c),{_persist:p});if(c.type===sg)return c.result(o&&o.flush()),Cn({},e(v,c),{_persist:p});if(c.type===og)l=!0;else if(c.type===Gc){if(a)return Cn({},v,{_persist:Cn({},p,{rehydrated:!0})});if(c.key===t.key){var h=e(v,c),g=c.payload,_=r!==!1&&g!==void 0?r(g,d,h,t):h,x=Cn({},_,{_persist:Cn({},p,{rehydrated:!0})});return u(x)}}}if(!p)return e(d,c);var C=e(v,c);return C===v?d:u(Cn({},C,{_persist:p}))}}function A_(t){return gL(t)||mL(t)||pL()}function pL(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function mL(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function gL(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function D_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ip(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?D_(n,!0).forEach(function(r){yL(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D_(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function yL(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var hC={registry:[],bootstrapped:!1},vL=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:hC,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ug:return ip({},e,{registry:[].concat(A_(e.registry),[n.key])});case Gc:var r=e.registry.indexOf(n.key),i=A_(e.registry);return i.splice(r,1),ip({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function _L(t,e,n){var r=n||!1,i=Mm(vL,hC,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:ug,key:u})},o=function(u,d,c){var f={type:Gc,payload:d,err:c,key:u};t.dispatch(f),i.dispatch(f),r&&a.getState().bootstrapped&&(r(),r=!1)},a=ip({},i,{purge:function(){var u=[];return t.dispatch({type:lg,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:sg,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){t.dispatch({type:og})},persist:function(){t.dispatch({type:ag,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}var cg={},dg={};dg.__esModule=!0;dg.default=SL;function Ql(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ql=function(n){return typeof n}:Ql=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ql(t)}function gf(){}var wL={getItem:gf,setItem:gf,removeItem:gf};function EL(t){if((typeof self>"u"?"undefined":Ql(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function SL(t){var e="".concat(t,"Storage");return EL(e)?self[e]:wL}cg.__esModule=!0;cg.default=xL;var CL=TL(dg);function TL(t){return t&&t.__esModule?t:{default:t}}function xL(t){var e=(0,CL.default)(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var fg=void 0,IL=bL(cg);function bL(t){return t&&t.__esModule?t:{default:t}}var kL=(0,IL.default)("local");fg=kL;var L_={};const M_="@firebase/database",$_="1.0.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pC="";function PL(t){pC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ya(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new RL(e)}}catch{}return new OL},li=mC("localStorage"),sp=mC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Hm("@firebase/database"),NL=function(){let t=1;return function(){return t++}}(),gC=function(t){const e=UO(t),n=new MO;n.update(e);const r=n.digest();return zm.encodeByteArray(r)},Ha=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ha.apply(null,r):typeof r=="object"?e+=ke(r):e+=r,e+=" "}return e};let hi=null,F_=!0;const AL=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Cs.logLevel=ie.VERBOSE,hi=Cs.log.bind(Cs),e&&sp.set("logging_enabled",!0)):typeof t=="function"?hi=t:(hi=null,sp.remove("logging_enabled"))},Ye=function(...t){if(F_===!0&&(F_=!1,hi===null&&sp.get("logging_enabled")===!0&&AL(!0)),hi){const e=Ha.apply(null,t);hi(e)}},Ga=function(t){return function(...e){Ye(t,...e)}},op=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ha(...t);Cs.error(e)},Hn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ha(...t)}`;throw Cs.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+Ha(...t);Cs.warn(e)},DL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},LL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Us="[MIN_NAME]",Ii="[MAX_NAME]",oo=function(t,e){if(t===e)return 0;if(t===Us||e===Ii)return-1;if(e===Us||t===Ii)return 1;{const n=j_(t),r=j_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},ML=function(t,e){return t===e?0:t<e?-1:1},_o=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ke(e))},hg=function(t){if(typeof t!="object"||t===null)return ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ke(e[r]),n+=":",n+=hg(t[e[r]]);return n+="}",n},vC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function gt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _C=function(t){P(!yC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},$L=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},FL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jL(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const UL=new RegExp("^-?(0*)\\d{1,10}$"),zL=-2147483648,WL=2147483647,j_=function(t){if(UL.test(t)){const e=Number(t);if(e>=zL&&e<=WL)return e}return null},Ka=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},BL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}class Ts{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ts.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="5",wC="v",EC="s",SC="r",CC="f",TC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xC="ls",IC="p",ap="ac",bC="websocket",kC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=li.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&li.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function GL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function RC(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===bC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===kC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);GL(t)&&(n.ns=t.namespace);const i=[];return gt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(){this.counters_={}}incrementCounter(e,n=1){Yn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _O(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf={},vf={};function mg(t){const e=t.toString();return yf[e]||(yf[e]=new KL),yf[e]}function qL(t,e){const n=t.toString();return vf[n]||(vf[n]=e()),vf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ka(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="start",QL="close",XL="pLPCommand",JL="pRTLPCB",OC="id",NC="pw",AC="ser",ZL="cb",eM="seg",tM="ts",nM="d",rM="dframe",DC=1870,LC=30,iM=DC-LC,sM=25e3,oM=3e4;class cs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ga(e),this.stats_=mg(n),this.urlFn=l=>(this.appCheckToken&&(l[ap]=this.appCheckToken),RC(n,kC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new YL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(oM)),LL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gg((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===U_)this.id=a,this.password=l;else if(o===QL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[U_]="t",r[AC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ZL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[wC]=pg,this.transportSessionId&&(r[EC]=this.transportSessionId),this.lastSessionId&&(r[xC]=this.lastSessionId),this.applicationId&&(r[IC]=this.applicationId),this.appCheckToken&&(r[ap]=this.appCheckToken),typeof location<"u"&&location.hostname&&TC.test(location.hostname)&&(r[SC]=CC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){cs.forceAllow_=!0}static forceDisallow(){cs.forceDisallow_=!0}static isAvailable(){return cs.forceAllow_?!0:!cs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$L()&&!FL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=hS(n),i=vC(r,iM);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[rM]="t",r[OC]=e,r[NC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class gg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=NL(),window[XL+this.uniqueCallbackIdentifier]=e,window[JL+this.uniqueCallbackIdentifier]=n,this.myIFrame=gg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ye("frame writing exception"),a.stack&&Ye(a.stack),Ye(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ye("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[OC]=this.myID,e[NC]=this.myPW,e[AC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+LC+r.length<=DC;){const o=this.pendingSegs.shift();r=r+"&"+eM+i+"="+o.seg+"&"+tM+i+"="+o.ts+"&"+nM+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(sM)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aM=16384,lM=45e3;let Yu=null;typeof MozWebSocket<"u"?Yu=MozWebSocket:typeof WebSocket<"u"&&(Yu=WebSocket);class Kt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ga(this.connId),this.stats_=mg(n),this.connURL=Kt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[wC]=pg,typeof location<"u"&&location.hostname&&TC.test(location.hostname)&&(o[SC]=CC),n&&(o[EC]=n),r&&(o[xC]=r),i&&(o[ap]=i),s&&(o[IC]=s),RC(e,bC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,li.set("previous_websocket_failure",!0);try{let r;_S(),this.mySock=new Yu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Yu!==null&&!Kt.forceDisallow_}static previouslyFailed(){return li.isInMemoryStorage||li.get("previous_websocket_failure")===!0}markConnectionHealthy(){li.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ya(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=vC(n,aM);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kt.responsesRequiredToBeHealthy=2;Kt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[cs,Kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Kt&&Kt.isAvailable();let r=n&&!Kt.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Kt];else{const i=this.transports_=[];for(const s of wa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);wa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM=6e4,cM=5e3,dM=10*1024,fM=100*1024,_f="t",z_="d",hM="s",W_="r",pM="e",B_="o",V_="a",H_="n",G_="p",mM="h";class gM{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ga("c:"+this.id+":"),this.transportManager_=new wa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Bo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>fM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_f in e){const n=e[_f];n===V_?this.upgradeIfSecondaryHealthy_():n===W_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===B_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=_o("t",e),r=_o("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:G_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:V_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:H_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=_o("t",e),r=_o("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=_o(_f,e);if(z_ in e){const r=e[z_];if(n===mM){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===H_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hM?this.onConnectionShutdown_(r):n===W_?this.onReset_(r):n===pM?op("Server Error: "+r):n===B_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):op("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),pg!==r&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Bo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(uM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:G_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(li.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends $C{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qu}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=32,q_=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new se("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fr(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function FC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function yM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function jC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function UC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function Pe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function nt(t,e){const n=q(t),r=q(e);if(n===null)return e;if(n===r)return nt(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zC(t,e){if(Fr(t)!==Fr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function qt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fr(t)>Fr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class vM{constructor(e,n){this.errorPrefix_=n,this.parts_=jC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=jc(this.parts_[r]);WC(this)}}function _M(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=jc(e),WC(t)}function wM(t){const e=t.parts_.pop();t.byteLength_-=jc(e),t.parts_.length>0&&(t.byteLength_-=1)}function WC(t){if(t.byteLength_>q_)throw new Error(t.errorPrefix_+"has a key path longer than "+q_+" bytes ("+t.byteLength_+").");if(t.parts_.length>K_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+K_+") or object contains a cycle "+ri(t))}function ri(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg extends $C{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new yg}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=1e3,EM=60*5*1e3,Y_=30*1e3,SM=1.3,CM=3e4,TM="server_kill",Q_=3;class $n extends MC{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$n.nextPersistentConnectionId_++,this.log_=Ga("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wo,this.maxReconnectDelay_=EM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!_S())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ke(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Bm,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;$n.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yn(e,"w")){const r=Ms(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||LO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Y_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=DO(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):op("Unrecognized action received from server: "+ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CM&&(this.reconnectDelay_=wo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$n.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ye("getToken() completed but was canceled"):(Ye("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new gM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{It(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(TM)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&It(c),l())}}}interrupt(e){Ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hh(this.interruptReasons_)&&(this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>hg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Q_&&(this.reconnectDelay_=Y_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Q_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+pC.replace(/\./g,"-")]=1,Vm()?e["framework.cordova"]=1:vS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qu.getInstance().currentlyOnline();return Hh(this.interruptReasons_)&&e}}$n.nextPersistentConnectionId_=0;$n.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new H(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new H(Us,e),i=new H(Us,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl;class BC extends Kc{static get __EMPTY_NODE(){return Cl}static set __EMPTY_NODE(e){Cl=e}compare(e,n){return oo(e.name,n.name)}isDefinedOn(e){throw no("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Ii,Cl)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,Cl)}toString(){return".key"}}const xs=new BC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??De.RED,this.left=i??dt.EMPTY_NODE,this.right=s??dt.EMPTY_NODE}copy(e,n,r,i,s){return new De(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return dt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return dt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class xM{copy(e,n,r,i,s){return this}insert(e,n,r){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class dt{constructor(e,n=dt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new dt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new dt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Tl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Tl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Tl(this.root_,null,this.comparator_,!0,e)}}dt.EMPTY_NODE=new xM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IM(t,e){return oo(t.name,e.name)}function vg(t,e){return oo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lp;function bM(t){lp=t}const VC=function(t){return typeof t=="number"?"number:"+_C(t):"string:"+t},HC=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yn(e,".sv"),"Priority must be a string or number.")}else P(t===lp||t.isEmpty(),"priority of unexpected type.");P(t===lp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let X_;class Ne{constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),HC(this.priorityNode_)}static set __childrenNodeConstructor(e){X_=e}static get __childrenNodeConstructor(){return X_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:q(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+VC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_C(this.value_):e+=this.value_,this.lazyHash_=gC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ne.VALUE_TYPE_ORDER.indexOf(n),s=Ne.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GC,KC;function kM(t){GC=t}function PM(t){KC=t}class RM extends Kc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?oo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Ii,new Ne("[PRIORITY-POST]",KC))}makePost(e,n){const r=GC(e);return new H(n,new Ne("[PRIORITY-POST]",r))}toString(){return".priority"}}const Se=new RM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM=Math.log(2);class NM{constructor(e){const n=s=>parseInt(Math.log(s)/OM,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xu=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=t[l],f=n?n(c):c,new De(f,c.node,De.BLACK,null,null);{const p=parseInt(d/2,10)+l,y=i(l,p),v=i(p+1,u);return c=t[p],f=n?n(c):c,new De(f,c.node,De.BLACK,y,v)}},s=function(l){let u=null,d=null,c=t.length;const f=function(y,v){const S=c-y,m=c;c-=y;const h=i(S+1,m),g=t[S],_=n?n(g):g;p(new De(_,g.node,v,null,h))},p=function(y){u?(u.left=y,u=y):(d=y,u=y)};for(let y=0;y<l.count;++y){const v=l.nextBitIsOne(),S=Math.pow(2,l.count-(y+1));v?f(S,De.BLACK):(f(S,De.BLACK),f(S,De.RED))}return d},o=new NM(t.length),a=s(o);return new dt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wf;const Ki={};class An{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Ki&&Se,"ChildrenNode.ts has not been loaded"),wf=wf||new An({".priority":Ki},{".priority":Se}),wf}get(e){const n=Ms(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof dt?n:null}hasIndex(e){return Yn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==xs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Xu(r,e.getCompare()):a=Ki;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new An(d,u)}addToIndexes(e,n){const r=Uu(this.indexes_,(i,s)=>{const o=Ms(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===Ki)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Xu(a,o.getCompare())}else return Ki;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new H(e.name,a))),l.insert(e,e.node)}});return new An(r,this.indexSet_)}removeFromIndexes(e,n){const r=Uu(this.indexes_,i=>{if(i===Ki)return i;{const s=n.get(e.name);return s?i.remove(new H(e.name,s)):i}});return new An(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&HC(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Eo||(Eo=new j(new dt(vg),null,An.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Eo}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Eo:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new H(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Eo:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=q(e);if(r===null)return n;{P(q(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ae(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Se,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+VC(this.getPriority().val())+":"),this.forEachChild(Se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":gC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qa?-1:0}withIndex(e){if(e===xs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Se),i=n.getIterator(Se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xs?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class AM extends j{constructor(){super(new dt(vg),j.EMPTY_NODE,An.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const qa=new AM;Object.defineProperties(H,{MIN:{value:new H(Us,j.EMPTY_NODE)},MAX:{value:new H(Ii,qa)}});BC.__EMPTY_NODE=j.EMPTY_NODE;Ne.__childrenNodeConstructor=j;bM(qa);PM(qa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM=!0;function We(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,We(e))}if(!(t instanceof Array)&&DM){const n=[];let r=!1;if(gt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=We(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=Xu(n,IM,o=>o.name,vg);if(r){const o=Xu(n,Se.getCompare());return new j(s,We(e),new An({".priority":o},{".priority":Se}))}else return new j(s,We(e),An.Default)}else{let n=j.EMPTY_NODE;return gt(t,(r,i)=>{if(Yn(t,r)&&r.substring(0,1)!=="."){const s=We(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(We(e))}}kM(We);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM extends Kc{constructor(e){super(),this.indexPath_=e,P(!G(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?oo(e.name,n.name):s}makePost(e,n){const r=We(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,qa);return new H(Ii,e)}toString(){return jC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM extends Kc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?oo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const r=We(e);return new H(n,r)}toString(){return".value"}}const $M=new MM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t){return{type:"value",snapshotNode:t}}function zs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ea(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Sa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function FM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ea(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(zs(n,r)):o.trackChildChange(Sa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Se,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ea(i,s))}),n.isLeafNode()||n.forEachChild(Se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Sa(i,s,o))}else r.trackChildChange(zs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.indexedFilter_=new _g(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ca.getStartPost_(e),this.endPost_=Ca.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new H(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(Se,(o,a)=>{s.matches(new H(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ca(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,p)=>c(p,f)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new H(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(d&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(Sa(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ea(n,c));const v=a.updateImmediateChild(n,j.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(zs(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ea(u.name,u.node)),s.trackChildChange(zs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Us}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ii}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const e=new wg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function UM(t){return t.loadsAllData()?new _g(t.getIndex()):t.hasLimit()?new jM(t):new Ca(t)}function J_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Se?n="$priority":t.index_===$M?n="$value":t.index_===xs?n="$key":(P(t.index_ instanceof LM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Z_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Se&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends MC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ga("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ju.getListenId_(e,r),a={};this.listens_[o]=a;const l=J_(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Ms(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Ju.getListenId_(e,n);delete this.listens_[r]}get(e){const n=J_(e._queryParams),r=e._path.toString(),i=new Bm;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ro(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ya(a.responseText)}catch{It("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(){return{value:null,children:new Map}}function YC(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=q(e);t.children.has(r)||t.children.set(r,Zu());const i=t.children.get(r);e=ae(e),YC(i,e,n)}}function up(t,e,n){t.value!==null?n(e,t.value):WM(t,(r,i)=>{const s=new se(e.toString()+"/"+r);up(i,s,n)})}function WM(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&gt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=10*1e3,VM=30*1e3,HM=5*60*1e3;class GM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new BM(e);const r=e0+(VM-e0)*Math.random();Bo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;gt(e,(i,s)=>{s>0&&Yn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Bo(this.reportStats_.bind(this),Math.floor(Math.random()*2*HM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yt||(Yt={}));function QC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Eg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Sg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Yt.ACK_USER_WRITE,this.source=QC()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new ec(J(),n,this.revert)}}else return P(q(this.path)===e,"operationForChild called for unrelated child."),new ec(ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n){this.source=e,this.path=n,this.type=Yt.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Ta(this.source,J()):new Ta(this.source,ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Yt.OVERWRITE}operationForChild(e){return G(this.path)?new bi(this.source,J(),this.snap.getImmediateChild(e)):new bi(this.source,ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Yt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new bi(this.source,J(),n.value):new xa(this.source,J(),n)}else return P(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xa(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qM(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(FM(o.childName,o.snapshotNode))}),So(t,i,"child_removed",e,r,n),So(t,i,"child_added",e,r,n),So(t,i,"child_moved",s,r,n),So(t,i,"child_changed",e,r,n),So(t,i,"value",e,r,n),i}function So(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>QM(t,a,l)),o.forEach(a=>{const l=YM(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function YM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function QM(t,e,n){if(e.childName==null||n.childName==null)throw no("Should only compare child_ events.");const r=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t,e){return{eventCache:t,serverCache:e}}function Vo(t,e,n,r){return qc(new jr(e,n,r),t.serverCache)}function XC(t,e,n,r){return qc(t.eventCache,new jr(e,n,r))}function tc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ki(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ef;const XM=()=>(Ef||(Ef=new dt(ML)),Ef);class fe{constructor(e,n=XM()){this.value=e,this.children=n}static fromObject(e){let n=new fe(null);return gt(e,(r,i)=>{n=n.set(new se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(G(e))return null;{const r=q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ae(e),n);return s!=null?{path:Pe(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=q(e),r=this.children.get(n);return r!==null?r.subtree(ae(e)):new fe(null)}}set(e,n){if(G(e))return new fe(n,this.children);{const r=q(e),s=(this.children.get(r)||new fe(null)).set(ae(e),n),o=this.children.insert(r,s);return new fe(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=q(e),r=this.children.get(n);if(r){const i=r.remove(ae(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new fe(null):new fe(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=q(e),r=this.children.get(n);return r?r.get(ae(e)):null}}setTree(e,n){if(G(e))return n;{const r=q(e),s=(this.children.get(r)||new fe(null)).setTree(ae(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new fe(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Pe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(ae(e),Pe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=q(e),s=this.children.get(i);return s?s.foreachOnPath_(ae(e),Pe(n,i),r):new fe(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Pe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new fe(null))}}function Ho(t,e,n){if(G(e))return new Jt(new fe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=nt(i,e);return s=s.updateChild(o,n),new Jt(t.writeTree_.set(i,s))}else{const i=new fe(n),s=t.writeTree_.setTree(e,i);return new Jt(s)}}}function t0(t,e,n){let r=t;return gt(n,(i,s)=>{r=Ho(r,Pe(e,i),s)}),r}function n0(t,e){if(G(e))return Jt.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new Jt(n)}}function cp(t,e){return Mi(t,e)!=null}function Mi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(nt(n.path,e)):null}function r0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(r,i)=>{e.push(new H(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new H(r,i.value))}),e}function Rr(t,e){if(G(e))return t;{const n=Mi(t,e);return n!=null?new Jt(new fe(n)):new Jt(t.writeTree_.subtree(e))}}function dp(t){return t.writeTree_.isEmpty()}function Ws(t,e){return JC(J(),t.writeTree_,e)}function JC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=JC(Pe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Pe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t,e){return nT(e,t)}function JM(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ho(t.visibleWrites,e,n)),t.lastWriteId=r}function ZM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function e$(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&t$(a,r.path)?i=!1:qt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return n$(t),!0;if(r.snap)t.visibleWrites=n0(t.visibleWrites,r.path);else{const a=r.children;gt(a,l=>{t.visibleWrites=n0(t.visibleWrites,Pe(r.path,l))})}return!0}else return!1}function t$(t,e){if(t.snap)return qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qt(Pe(t.path,n),e))return!0;return!1}function n$(t){t.visibleWrites=ZC(t.allWrites,r$,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function r$(t){return t.visible}function ZC(t,e,n){let r=Jt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)qt(n,o)?(a=nt(n,o),r=Ho(r,a,s.snap)):qt(o,n)&&(a=nt(o,n),r=Ho(r,J(),s.snap.getChild(a)));else if(s.children){if(qt(n,o))a=nt(n,o),r=t0(r,a,s.children);else if(qt(o,n))if(a=nt(o,n),G(a))r=t0(r,J(),s.children);else{const l=Ms(s.children,q(a));if(l){const u=l.getChild(ae(a));r=Ho(r,J(),u)}}}else throw no("WriteRecord should have .snap or .children")}}return r}function eT(t,e,n,r,i){if(!r&&!i){const s=Mi(t.visibleWrites,e);if(s!=null)return s;{const o=Rr(t.visibleWrites,e);if(dp(o))return n;if(n==null&&!cp(o,J()))return null;{const a=n||j.EMPTY_NODE;return Ws(o,a)}}}else{const s=Rr(t.visibleWrites,e);if(!i&&dp(s))return n;if(!i&&n==null&&!cp(s,J()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(qt(u.path,e)||qt(e,u.path))},a=ZC(t.allWrites,o,e),l=n||j.EMPTY_NODE;return Ws(a,l)}}}function i$(t,e,n){let r=j.EMPTY_NODE;const i=Mi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Rr(t.visibleWrites,e);return n.forEachChild(Se,(o,a)=>{const l=Ws(Rr(s,new se(o)),a);r=r.updateImmediateChild(o,l)}),r0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Rr(t.visibleWrites,e);return r0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function s$(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Pe(e,n);if(cp(t.visibleWrites,s))return null;{const o=Rr(t.visibleWrites,s);return dp(o)?i.getChild(n):Ws(o,i.getChild(n))}}function o$(t,e,n,r){const i=Pe(e,n),s=Mi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Rr(t.visibleWrites,i);return Ws(o,r.getNode().getImmediateChild(n))}else return null}function a$(t,e){return Mi(t.visibleWrites,e)}function l$(t,e,n,r,i,s,o){let a;const l=Rr(t.visibleWrites,e),u=Mi(l,J());if(u!=null)a=u;else if(n!=null)a=Ws(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&d.length<i;)c(p,r)!==0&&d.push(p),p=f.getNext();return d}else return[]}function u$(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function nc(t,e,n,r){return eT(t.writeTree,t.treePath,e,n,r)}function Cg(t,e){return i$(t.writeTree,t.treePath,e)}function i0(t,e,n,r){return s$(t.writeTree,t.treePath,e,n,r)}function rc(t,e){return a$(t.writeTree,Pe(t.treePath,e))}function c$(t,e,n,r,i,s){return l$(t.writeTree,t.treePath,e,n,r,i,s)}function Tg(t,e,n){return o$(t.writeTree,t.treePath,e,n)}function tT(t,e){return nT(Pe(t.treePath,e),t.writeTree)}function nT(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d${constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Sa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ea(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,zs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Sa(r,e.snapshotNode,i.oldSnap));else throw no("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f${getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const rT=new f$;class xg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new jr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Tg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ki(this.viewCache_),s=c$(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h$(t){return{filter:t}}function p$(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function m$(t,e,n,r,i){const s=new d$;let o,a;if(n.type===Yt.OVERWRITE){const u=n;u.source.fromUser?o=fp(t,e,u.path,u.snap,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=ic(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Yt.MERGE){const u=n;u.source.fromUser?o=y$(t,e,u.path,u.children,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=hp(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Yt.ACK_USER_WRITE){const u=n;u.revert?o=w$(t,e,u.path,r,i,s):o=v$(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Yt.LISTEN_COMPLETE)o=_$(t,e,n.path,r,s);else throw no("Unknown operation type: "+n.type);const l=s.getChanges();return g$(e,o,l),{viewCache:o,changes:l}}function g$(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=tc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(qC(tc(e)))}}function iT(t,e,n,r,i,s){const o=e.eventCache;if(rc(r,n)!=null)return e;{let a,l;if(G(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ki(e),d=u instanceof j?u:j.EMPTY_NODE,c=Cg(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=nc(r,ki(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=q(n);if(u===".priority"){P(Fr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=i0(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=ae(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=i0(r,n,o.getNode(),l);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=Tg(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return Vo(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function ic(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),p,null)}else{const p=q(n);if(!l.isCompleteForPath(n)&&Fr(n)>1)return e;const y=ae(n),S=l.getNode().getImmediateChild(p).updateChild(y,r);p===".priority"?u=d.updatePriority(l.getNode(),S):u=d.updateChild(l.getNode(),p,S,y,rT,null)}const c=XC(e,u,l.isFullyInitialized()||G(n),d.filtersNodes()),f=new xg(i,c,s);return iT(t,c,n,i,f,a)}function fp(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new xg(i,e,s);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Vo(e,u,!0,t.filter.filtersNodes());else{const c=q(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Vo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ae(n),p=a.getNode().getImmediateChild(c);let y;if(G(f))y=r;else{const v=d.getCompleteChild(c);v!=null?FC(f)===".priority"&&v.getChild(UC(f)).isEmpty()?y=v:y=v.updateChild(f,r):y=j.EMPTY_NODE}if(p.equals(y))l=e;else{const v=t.filter.updateChild(a.getNode(),c,y,f,d,o);l=Vo(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function s0(t,e){return t.eventCache.isCompleteForChild(e)}function y$(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=Pe(n,l);s0(e,q(d))&&(a=fp(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=Pe(n,l);s0(e,q(d))||(a=fp(t,a,d,u,i,s,o))}),a}function o0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function hp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;G(n)?u=r:u=new fe(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const p=e.serverCache.getNode().getImmediateChild(c),y=o0(t,p,f);l=ic(t,l,new se(c),y,i,s,o,a)}}),u.children.inorderTraversal((c,f)=>{const p=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!p){const y=e.serverCache.getNode().getImmediateChild(c),v=o0(t,y,f);l=ic(t,l,new se(c),v,i,s,o,a)}}),l}function v$(t,e,n,r,i,s,o){if(rc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ic(t,e,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let u=new fe(null);return l.getNode().forEachChild(xs,(d,c)=>{u=u.set(new se(d),c)}),hp(t,e,n,u,i,s,a,o)}else return e}else{let u=new fe(null);return r.foreach((d,c)=>{const f=Pe(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),hp(t,e,n,u,i,s,a,o)}}function _$(t,e,n,r,i){const s=e.serverCache,o=XC(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return iT(t,o,n,r,rT,i)}function w$(t,e,n,r,i,s){let o;if(rc(r,n)!=null)return e;{const a=new xg(r,e,i),l=e.eventCache.getNode();let u;if(G(n)||q(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=nc(r,ki(e));else{const c=e.serverCache.getNode();P(c instanceof j,"serverChildren would be complete if leaf node"),d=Cg(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=q(n);let c=Tg(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,ae(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,j.EMPTY_NODE,ae(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=nc(r,ki(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||rc(r,J())!=null,Vo(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E${constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new _g(r.getIndex()),s=UM(r);this.processor_=h$(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),d=new jr(l,o.isFullyInitialized(),i.filtersNodes()),c=new jr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=qc(c,d),this.eventGenerator_=new KM(this.query_)}get query(){return this.query_}}function S$(t){return t.viewCache_.serverCache.getNode()}function C$(t){return tc(t.viewCache_)}function T$(t,e){const n=ki(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function a0(t){return t.eventRegistrations_.length===0}function x$(t,e){t.eventRegistrations_.push(e)}function l0(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function u0(t,e,n,r){e.type===Yt.MERGE&&e.source.queryId!==null&&(P(ki(t.viewCache_),"We should always have a full cache before handling merges"),P(tc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=m$(t.processor_,i,e,n,r);return p$(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,sT(t,s.changes,s.viewCache.eventCache.getNode(),null)}function I$(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Se,(s,o)=>{r.push(zs(s,o))}),n.isFullyInitialized()&&r.push(qC(n.getNode())),sT(t,r,n.getNode(),e)}function sT(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return qM(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;class oT{constructor(){this.views=new Map}}function b$(t){P(!sc,"__referenceConstructor has already been defined"),sc=t}function k$(){return P(sc,"Reference.ts has not been loaded"),sc}function P$(t){return t.views.size===0}function Ig(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),u0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(u0(o,e,n,r));return s}}function aT(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=nc(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=Cg(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const u=qc(new jr(a,l,!1),new jr(r,i,!1));return new E$(e,u)}return o}function R$(t,e,n,r,i,s){const o=aT(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),x$(o,n),I$(o,n)}function O$(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Ur(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(l0(u,n,r)),a0(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(l0(l,n,r)),a0(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Ur(t)&&s.push(new(k$())(e._repo,e._path)),{removed:s,events:o}}function lT(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Or(t,e){let n=null;for(const r of t.views.values())n=n||T$(r,e);return n}function uT(t,e){if(e._queryParams.loadsAllData())return Qc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function cT(t,e){return uT(t,e)!=null}function Ur(t){return Qc(t)!=null}function Qc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc;function N$(t){P(!oc,"__referenceConstructor has already been defined"),oc=t}function A$(){return P(oc,"Reference.ts has not been loaded"),oc}let D$=1;class c0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=u$(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function L$(t,e,n,r,i){return JM(t.pendingWriteTree_,e,n,r,i),i?Qa(t,new bi(QC(),e,n)):[]}function ds(t,e,n=!1){const r=ZM(t.pendingWriteTree_,e);if(e$(t.pendingWriteTree_,e)){let s=new fe(null);return r.snap!=null?s=s.set(J(),!0):gt(r.children,o=>{s=s.set(new se(o),!0)}),Qa(t,new ec(r.path,s,n))}else return[]}function Ya(t,e,n){return Qa(t,new bi(Eg(),e,n))}function M$(t,e,n){const r=fe.fromObject(n);return Qa(t,new xa(Eg(),e,r))}function $$(t,e){return Qa(t,new Ta(Eg(),e))}function F$(t,e,n){const r=bg(t,n);if(r){const i=kg(r),s=i.path,o=i.queryId,a=nt(s,e),l=new Ta(Sg(o),a);return Pg(t,s,l)}else return[]}function dT(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||cT(o,e))){const l=O$(o,e,n,r);P$(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,p)=>Ur(p));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=W$(f);for(let y=0;y<p.length;++y){const v=p[y],S=v.query,m=gT(t,v);t.listenProvider_.startListening(Go(S),Ia(t,S),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Go(e),null):u.forEach(f=>{const p=t.queryToTagMap.get(Xc(f));t.listenProvider_.stopListening(Go(f),p)}))}B$(t,u)}return a}function fT(t,e,n,r){const i=bg(t,r);if(i!=null){const s=kg(i),o=s.path,a=s.queryId,l=nt(o,e),u=new bi(Sg(a),l,n);return Pg(t,o,u)}else return[]}function j$(t,e,n,r){const i=bg(t,r);if(i){const s=kg(i),o=s.path,a=s.queryId,l=nt(o,e),u=fe.fromObject(n),d=new xa(Sg(a),l,u);return Pg(t,o,d)}else return[]}function U$(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const y=nt(f,i);s=s||Or(p,y),o=o||Ur(p)});let a=t.syncPointTree_.get(i);a?(o=o||Ur(a),s=s||Or(a,J())):(a=new oT,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,y)=>{const v=Or(y,J());v&&(s=s.updateImmediateChild(p,v))}));const u=cT(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Xc(e);P(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=V$();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const d=Yc(t.pendingWriteTree_,i);let c=R$(a,e,n,d,s,l);if(!u&&!o&&!r){const f=uT(a,e);c=c.concat(H$(t,e,f))}return c}function hT(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=nt(o,e),u=Or(a,l);if(u)return u});return eT(i,e,s,n,!0)}function z$(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=nt(u,n);r=r||Or(d,c)});let i=t.syncPointTree_.get(n);i?r=r||Or(i,J()):(i=new oT,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new jr(r,!0,!1):null,a=Yc(t.pendingWriteTree_,e._path),l=aT(i,e,a,s?o.getNode():j.EMPTY_NODE,s);return C$(l)}function Qa(t,e){return pT(e,t.syncPointTree_,null,Yc(t.pendingWriteTree_,J()))}function pT(t,e,n,r){if(G(t.path))return mT(t,e,n,r);{const i=e.get(J());n==null&&i!=null&&(n=Or(i,J()));let s=[];const o=q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=tT(r,o);s=s.concat(pT(a,l,u,d))}return i&&(s=s.concat(Ig(i,t,r,n))),s}}function mT(t,e,n,r){const i=e.get(J());n==null&&i!=null&&(n=Or(i,J()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=tT(r,o),d=t.operationForChild(o);d&&(s=s.concat(mT(d,a,l,u)))}),i&&(s=s.concat(Ig(i,t,r,n))),s}function gT(t,e){const n=e.query,r=Ia(t,n);return{hashFn:()=>(S$(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?F$(t,n._path,r):$$(t,n._path);{const s=jL(i,n);return dT(t,n,null,s)}}}}function Ia(t,e){const n=Xc(e);return t.queryToTagMap.get(n)}function Xc(t){return t._path.toString()+"$"+t._queryIdentifier}function bg(t,e){return t.tagToQueryMap.get(e)}function kg(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Pg(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=Yc(t.pendingWriteTree_,e);return Ig(r,n,i,null)}function W$(t){return t.fold((e,n,r)=>{if(n&&Ur(n))return[Qc(n)];{let i=[];return n&&(i=lT(n)),gt(r,(s,o)=>{i=i.concat(o)}),i}})}function Go(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(A$())(t._repo,t._path):t}function B$(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Xc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function V$(){return D$++}function H$(t,e,n){const r=e._path,i=Ia(t,e),s=gT(t,n),o=t.listenProvider_.startListening(Go(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)P(!Ur(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!G(u)&&d&&Ur(d))return[Qc(d).query];{let f=[];return d&&(f=f.concat(lT(d).map(p=>p.query))),gt(c,(p,y)=>{f=f.concat(y)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Go(d),Ia(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Rg(n)}node(){return this.node_}}class Og{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pe(this.path_,e);return new Og(this.syncTree_,n)}node(){return hT(this.syncTree_,this.path_)}}const G$=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},d0=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return K$(t[".sv"],e,n);if(typeof t[".sv"]=="object")return q$(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},K$=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},q$=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Y$=function(t,e,n,r){return Ng(e,new Og(n,t),r)},Q$=function(t,e,n){return Ng(t,new Rg(e),n)};function Ng(t,e,n){const r=t.getPriority().val(),i=d0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=d0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ne(a,We(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ne(i))),o.forEachChild(Se,(a,l)=>{const u=Ng(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Dg(t,e){let n=e instanceof se?e:new se(e),r=t,i=q(n);for(;i!==null;){const s=Ms(r.node.children,i)||{children:{},childCount:0};r=new Ag(i,r,s),n=ae(n),i=q(n)}return r}function ao(t){return t.node.value}function yT(t,e){t.node.value=e,pp(t)}function vT(t){return t.node.childCount>0}function X$(t){return ao(t)===void 0&&!vT(t)}function Jc(t,e){gt(t.node.children,(n,r)=>{e(new Ag(n,t,r))})}function _T(t,e,n,r){n&&!r&&e(t),Jc(t,i=>{_T(i,e,!0,r)}),n&&r&&e(t)}function J$(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Xa(t){return new se(t.parent===null?t.name:Xa(t.parent)+"/"+t.name)}function pp(t){t.parent!==null&&Z$(t.parent,t.name,t)}function Z$(t,e,n){const r=X$(n),i=Yn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,pp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,pp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eF=/[\[\].#$\/\u0000-\u001F\u007F]/,tF=/[\[\].#$\u0000-\u001F\u007F]/,Sf=10*1024*1024,wT=function(t){return typeof t=="string"&&t.length!==0&&!eF.test(t)},ET=function(t){return typeof t=="string"&&t.length!==0&&!tF.test(t)},nF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ET(t)},ST=function(t,e,n){const r=n instanceof se?new vM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ri(r));if(typeof e=="function")throw new Error(t+"contains a function "+ri(r)+" with contents = "+e.toString());if(yC(e))throw new Error(t+"contains "+e.toString()+" "+ri(r));if(typeof e=="string"&&e.length>Sf/3&&jc(e)>Sf)throw new Error(t+"contains a string greater than "+Sf+" utf8 bytes "+ri(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(gt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!wT(o)))throw new Error(t+" contains an invalid key ("+o+") "+ri(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_M(r,o),ST(t,a,r),wM(r)}),i&&s)throw new Error(t+' contains ".value" child '+ri(r)+" in addition to actual children.")}},CT=function(t,e,n,r){if(!(r&&n===void 0)&&!ET(n))throw new Error(ES(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rF=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),CT(t,e,n,r)},iF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!nF(n))throw new Error(ES(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function oF(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!zC(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Yr(t,e,n){oF(t,n),aF(t,r=>qt(r,e)||qt(e,r))}function aF(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(lF(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function lF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();hi&&Ye("event: "+n.toString()),Ka(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uF="repo_interrupt",cF=25;class dF{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zu(),this.transactionQueueTree_=new Ag,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fF(t,e,n){if(t.stats_=mg(t.repoInfo_),t.forceRestClient_||BL())t.server_=new Ju(t.repoInfo_,(r,i,s,o)=>{f0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>h0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new $n(t.repoInfo_,e,(r,i,s,o)=>{f0(t,r,i,s,o)},r=>{h0(t,r)},r=>{pF(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=qL(t.repoInfo_,()=>new GM(t.stats_,t.server_)),t.infoData_=new zM,t.infoSyncTree_=new c0({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ya(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Lg(t,"connected",!1),t.serverSyncTree_=new c0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Yr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function hF(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function TT(t){return G$({timestamp:hF(t)})}function f0(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Uu(n,u=>We(u));o=j$(t.serverSyncTree_,s,l,i)}else{const l=We(n);o=fT(t.serverSyncTree_,s,l,i)}else if(r){const l=Uu(n,u=>We(u));o=M$(t.serverSyncTree_,s,l)}else{const l=We(n);o=Ya(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Fg(t,s)),Yr(t.eventQueue_,a,o)}function h0(t,e){Lg(t,"connected",e),e===!1&&yF(t)}function pF(t,e){gt(e,(n,r)=>{Lg(t,n,r)})}function Lg(t,e,n){const r=new se("/.info/"+e),i=We(n);t.infoData_.updateSnapshot(r,i);const s=Ya(t.infoSyncTree_,r,i);Yr(t.eventQueue_,r,s)}function mF(t){return t.nextWriteId_++}function gF(t,e,n){const r=z$(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=We(i).withIndex(e._queryParams.getIndex());U$(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ya(t.serverSyncTree_,e._path,s);else{const a=Ia(t.serverSyncTree_,e);o=fT(t.serverSyncTree_,e._path,s,a)}return Yr(t.eventQueue_,e._path,o),dT(t.serverSyncTree_,e,n,null,!0),s},i=>(Mg(t,"get for query "+ke(e)+" failed: "+i),Promise.reject(new Error(i))))}function yF(t){Mg(t,"onDisconnectEvents");const e=TT(t),n=Zu();up(t.onDisconnect_,J(),(i,s)=>{const o=Y$(i,s,t.serverSyncTree_,e);YC(n,i,o)});let r=[];up(n,J(),(i,s)=>{r=r.concat(Ya(t.serverSyncTree_,i,s));const o=EF(t,i);Fg(t,o)}),t.onDisconnect_=Zu(),Yr(t.eventQueue_,J(),r)}function vF(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uF)}function Mg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ye(n,...e)}function xT(t,e,n){return hT(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function $g(t,e=t.transactionQueueTree_){if(e||Zc(t,e),ao(e)){const n=bT(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&_F(t,Xa(e),n)}else vT(e)&&Jc(e,n=>{$g(t,n)})}function _F(t,e,n){const r=n.map(u=>u.currentWriteId),i=xT(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];P(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=nt(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Mg(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(ds(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Zc(t,Dg(t.transactionQueueTree_,e)),$g(t,t.transactionQueueTree_),Yr(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)Ka(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{It("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Fg(t,e)}},o)}function Fg(t,e){const n=IT(t,e),r=Xa(n),i=bT(t,n);return wF(t,i,r),r}function wF(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=nt(n,l.path);let d=!1,c;if(P(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(ds(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=cF)d=!0,c="maxretry",i=i.concat(ds(t.serverSyncTree_,l.currentWriteId,!0));else{const f=xT(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){ST("transaction failed: Data returned ",p,l.path);let y=We(p);typeof p=="object"&&p!=null&&Yn(p,".priority")||(y=y.updatePriority(f.getPriority()));const S=l.currentWriteId,m=TT(t),h=Q$(y,f,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=h,l.currentWriteId=mF(t),o.splice(o.indexOf(S),1),i=i.concat(L$(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(ds(t.serverSyncTree_,S,!0))}else d=!0,c="nodata",i=i.concat(ds(t.serverSyncTree_,l.currentWriteId,!0))}Yr(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}Zc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ka(r[a]);$g(t,t.transactionQueueTree_)}function IT(t,e){let n,r=t.transactionQueueTree_;for(n=q(e);n!==null&&ao(r)===void 0;)r=Dg(r,n),e=ae(e),n=q(e);return r}function bT(t,e){const n=[];return kT(t,e,n),n.sort((r,i)=>r.order-i.order),n}function kT(t,e,n){const r=ao(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Jc(e,i=>{kT(t,i,n)})}function Zc(t,e){const n=ao(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,yT(e,n.length>0?n:void 0)}Jc(e,r=>{Zc(t,r)})}function EF(t,e){const n=Xa(IT(t,e)),r=Dg(t.transactionQueueTree_,e);return J$(r,i=>{Cf(t,i)}),Cf(t,r),_T(r,i=>{Cf(t,i)}),n}function Cf(t,e){const n=ao(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ds(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?yT(e,void 0):n.length=s+1,Yr(t.eventQueue_,Xa(e),i);for(let o=0;o<r.length;o++)Ka(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SF(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function CF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const p0=function(t,e){const n=TF(t),r=n.namespace;n.domain==="firebase.com"&&Hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||DL();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new PC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},TF=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=SF(t.substring(d,c)));const f=CF(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xF{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ke(this.snapshot.exportVal())}}class IF{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bF{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:FC(this._path)}get ref(){return new Xn(this._repo,this._path)}get _queryIdentifier(){const e=Z_(this._queryParams),n=hg(e);return n==="{}"?"default":n}get _queryObject(){return Z_(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof jg))return!1;const n=this._repo===e._repo,r=zC(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+yM(this._path)}}class Xn extends jg{constructor(e,n){super(e,n,new wg,!1)}get parent(){const e=UC(this._path);return e===null?null:new Xn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ba{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=mp(this.ref,e);return new ba(this._node.getChild(n),r,Se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ba(i,mp(this.ref,r),Se)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function kF(t,e){return t=yt(t),t._checkNotDeleted("ref"),e!==void 0?mp(t._root,e):t._root}function mp(t,e){return t=yt(t),q(t._path)===null?rF("child","path",e,!1):CT("child","path",e,!1),new Xn(t._repo,Pe(t._path,e))}function PF(t){t=yt(t);const e=new bF(()=>{}),n=new Ug(e);return gF(t._repo,t,n).then(r=>new ba(r,new Xn(t._repo,t._path),t._queryParams.getIndex()))}class Ug{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new xF("value",this,new ba(e.snapshotNode,new Xn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new IF(this,e,n):null}matches(e){return e instanceof Ug?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}b$(Xn);N$(Xn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RF="FIREBASE_DATABASE_EMULATOR_HOST",gp={};let OF=!1;function NF(t,e,n,r){t.repoInfo_=new PC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function AF(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ye("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=p0(s,i),a=o.repoInfo,l,u;typeof process<"u"&&L_&&(u=L_[RF]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=p0(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new Ts(Ts.OWNER):new HL(t.name,t.options,e);iF("Invalid Firebase Database URL",o),G(o.path)||Hn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=LF(a,t,d,new VL(t.name,n));return new MF(c,t)}function DF(t,e){const n=gp[e];(!n||n[t.key]!==t)&&Hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vF(t),delete n[t.key]}function LF(t,e,n,r){let i=gp[e.name];i||(i={},gp[e.name]=i);let s=i[t.toURLString()];return s&&Hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new dF(t,OF,n,r),i[t.toURLString()]=s,s}class MF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xn(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(DF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Hn("Cannot call "+e+" on a deleted database.")}}function $F(t=xS(),e){const n=Km(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=xO("database");r&&FF(n,...r)}return n}function FF(t,e,n,r={}){t=yt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Hn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ts(Ts.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:IO(r.mockUserToken,t.app.options.projectId);s=new Ts(o)}NF(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jF(t){PL(io),$s(new Si("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return AF(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Pr(M_,$_,t),Pr(M_,$_,"esm2017")}$n.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$n.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};jF();var UF="firebase",zF="10.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr(UF,zF,"app");const WF={apiKey:"AIzaSyCHTmc3Gh4W1XLIpMpgCM752wA_87tnpyE",authDomain:"learn-lingo.firebaseapp.com",projectId:"learn-lingo-e82db",storageBucket:"learn-lingo.appspot.com",messagingSenderId:"397520927845",appId:"1:501362930586:web:387ce46ec4671a8d3f4023",databaseURL:"https://learn-lingo-e82db-default-rtdb.europe-west1.firebasedatabase.app"},BF=TS(WF),VF=$F(BF),Tf=Fa("teachers/getTeachers",async({signal:t},e)=>{try{const n=kF(VF);return(await PF(n,{signal:t})).val()}catch(n){return e.rejectWithValue(n.message)}}),HF={teachersCard:[],favorite:[],isLoading:!1,error:"",card:[]},ed=cS({name:"teachers",initialState:HF,reducers:{setFavorite:(t,e)=>{t.favorite.push(e.payload)},delFavorite:(t,e)=>{t.favorite=t.favorite.filter(n=>n.id!==e.payload.id)},setCard:(t,e)=>{t.card=e.payload}},extraReducers:t=>{t.addCase(Tf.pending,e=>{e.isLoading=!0}).addCase(Tf.fulfilled,(e,n)=>{e.isLoading=!1,e.teachersCard=n.payload,e.error=""}).addCase(Tf.rejected,(e,n)=>{e.isLoading=!1,e.error=n.payload})}}),{setCard:_W}=ed.actions,{setFavorite:wW}=ed.actions,{delFavorite:EW}=ed.actions,GF=ed.reducer,KF={key:"auth",storage:fg,whitelist:["token"]},qF={key:"teachers",storage:fg,blacklist:["teachersCard"]},YF=YE({auth:N_(KF,ZD),teachers:N_(qF,GF)}),PT=KR({reducer:YF,middleware:t=>t({serializableCheck:{ignoredActions:[sg,Gc,og,ag,lg,ug]}})}),QF=_L(PT);function Xl(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xl=function(n){return typeof n}:Xl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Xl(t)}function XF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function JF(t,e,n){return e&&m0(t.prototype,e),n&&m0(t,n),t}function ZF(t,e){return e&&(Xl(e)==="object"||typeof e=="function")?e:Jl(t)}function yp(t){return yp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},yp(t)}function Jl(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function e3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&vp(t,e)}function vp(t,e){return vp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},vp(t,e)}function Zl(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var RT=function(t){e3(e,t);function e(){var n,r;XF(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=ZF(this,(n=yp(e)).call.apply(n,[this].concat(s))),Zl(Jl(r),"state",{bootstrapped:!1}),Zl(Jl(r),"_unsubscribe",void 0),Zl(Jl(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return JF(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(E.PureComponent);Zl(RT,"defaultProps",{children:null,loading:null});const t3="modulepreload",n3=function(t){return"/reactVite-LearnLingo/"+t},g0={},zg=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.all(n.map(l=>{if(l=n3(l),l in g0)return;g0[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!r)for(let p=s.length-1;p>=0;p--){const y=s[p];if(y.href===l&&(!u||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":t3,u||(f.as="script",f.crossOrigin=""),f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((p,y)=>{f.addEventListener("load",p),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var OT={exports:{}},r3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i3=r3,s3=i3;function NT(){}function AT(){}AT.resetWarningCache=NT;var o3=function(){function t(r,i,s,o,a,l){if(l!==s3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:AT,resetWarningCache:NT};return n.PropTypes=n,n};OT.exports=o3();var a3=OT.exports;const zr=Ys(a3),l3=()=>w.jsxs("svg",{width:"20.000000",height:"20.000000",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[w.jsx("desc",{children:"Created with Pixso."}),w.jsx("defs",{children:w.jsx("clipPath",{id:"clip27_256",children:w.jsx("rect",{id:"log-in-01",width:"20.000000",height:"20.000000",fill:"white",fillOpacity:"0"})})}),w.jsx("rect",{id:"log-in-01",width:"20.000000",height:"20.000000",fill:"#FFFFFF",fillOpacity:"0"}),w.jsxs("g",{clipPath:"url(#clip27_256)",children:[w.jsx("path",{id:"Accent",d:"M12.5 2.5L13.5 2.5C14.9001 2.5 15.6002 2.5 16.135 2.77246C16.6053 3.01221 16.9878 3.39453 17.2275 3.86499C17.5 4.3999 17.5 5.09985 17.5 6.5L17.5 13.5C17.5 14.9001 17.5 15.6001 17.2275 16.135C16.9878 16.6055 16.6053 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5L12.5 17.5",stroke:"#F4C550",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round",strokeLinecap:"round"}),w.jsx("path",{id:"Icon",d:"M8.33337 5.83325L12.5 10L8.33337 14.1665M2.5 10L12.5 10",stroke:"#F4C550",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"})]})]}),u3=()=>w.jsxs("svg",{width:"28.000000",height:"28.000000",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[w.jsx("desc",{children:"Created with Pixso."}),w.jsx("defs",{children:w.jsx("clipPath",{id:"clip4_550",children:w.jsx("rect",{id:"ukraine",width:"28.000000",height:"28.000000",fill:"white",fillOpacity:"0"})})}),w.jsx("rect",{id:"ukraine",width:"28.000000",height:"28.000000",fill:"#FFFFFF",fillOpacity:"0"}),w.jsxs("g",{clipPath:"url(#clip4_550)",children:[w.jsx("path",{id:"Vector",d:"M28 14C28 21.7319 21.732 28 14 28C6.26801 28 0 21.7319 0 14C0 6.26807 6.26801 0 14 0C21.732 0 28 6.26807 28 14Z",fill:"#FFDA44",fillOpacity:"1.000000",fillRule:"evenodd"}),w.jsx("path",{id:"Vector",d:"M0 14C0 6.26807 6.26807 0 14 0C21.7319 0 28 6.26807 28 14L0 14Z",fill:"#338AF3",fillOpacity:"1.000000",fillRule:"nonzero"})]})]});var c3=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var d=o[u];if(!l(d))return!1;var c=e[d],f=n[d];if(s=r?r.call(i,c,f,d):void 0,s===!1||s===void 0&&c!==f)return!1}return!0};const d3=Ys(c3);var ce="-ms-",Ko="-moz-",Z="-webkit-",DT="comm",td="rule",Wg="decl",f3="@import",LT="@keyframes",h3="@layer",MT=Math.abs,Bg=String.fromCharCode,_p=Object.assign;function p3(t,e){return Le(t,0)^45?(((e<<2^Le(t,0))<<2^Le(t,1))<<2^Le(t,2))<<2^Le(t,3):0}function $T(t){return t.trim()}function In(t,e){return(t=e.exec(t))?t[0]:t}function B(t,e,n){return t.replace(e,n)}function eu(t,e,n){return t.indexOf(e,n)}function Le(t,e){return t.charCodeAt(e)|0}function Bs(t,e,n){return t.slice(e,n)}function un(t){return t.length}function FT(t){return t.length}function No(t,e){return e.push(t),t}function m3(t,e){return t.map(e).join("")}function y0(t,e){return t.filter(function(n){return!In(n,e)})}var nd=1,Vs=1,jT=0,Ut=0,xe=0,lo="";function rd(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:nd,column:Vs,length:o,return:"",siblings:a}}function rr(t,e){return _p(rd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function qi(t){for(;t.root;)t=rr(t.root,{children:[t]});No(t,t.siblings)}function g3(){return xe}function y3(){return xe=Ut>0?Le(lo,--Ut):0,Vs--,xe===10&&(Vs=1,nd--),xe}function Zt(){return xe=Ut<jT?Le(lo,Ut++):0,Vs++,xe===10&&(Vs=1,nd++),xe}function pi(){return Le(lo,Ut)}function tu(){return Ut}function id(t,e){return Bs(lo,t,e)}function wp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function v3(t){return nd=Vs=1,jT=un(lo=t),Ut=0,[]}function _3(t){return lo="",t}function xf(t){return $T(id(Ut-1,Ep(t===91?t+2:t===40?t+1:t)))}function w3(t){for(;(xe=pi())&&xe<33;)Zt();return wp(t)>2||wp(xe)>3?"":" "}function E3(t,e){for(;--e&&Zt()&&!(xe<48||xe>102||xe>57&&xe<65||xe>70&&xe<97););return id(t,tu()+(e<6&&pi()==32&&Zt()==32))}function Ep(t){for(;Zt();)switch(xe){case t:return Ut;case 34:case 39:t!==34&&t!==39&&Ep(xe);break;case 40:t===41&&Ep(t);break;case 92:Zt();break}return Ut}function S3(t,e){for(;Zt()&&t+xe!==57;)if(t+xe===84&&pi()===47)break;return"/*"+id(e,Ut-1)+"*"+Bg(t===47?t:Zt())}function C3(t){for(;!wp(pi());)Zt();return id(t,Ut)}function T3(t){return _3(nu("",null,null,null,[""],t=v3(t),0,[0],t))}function nu(t,e,n,r,i,s,o,a,l){for(var u=0,d=0,c=o,f=0,p=0,y=0,v=1,S=1,m=1,h=0,g="",_=i,x=s,C=r,T=g;S;)switch(y=h,h=Zt()){case 40:if(y!=108&&Le(T,c-1)==58){eu(T+=B(xf(h),"&","&\f"),"&\f",MT(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:T+=xf(h);break;case 9:case 10:case 13:case 32:T+=w3(y);break;case 92:T+=E3(tu()-1,7);continue;case 47:switch(pi()){case 42:case 47:No(x3(S3(Zt(),tu()),e,n,l),l);break;default:T+="/"}break;case 123*v:a[u++]=un(T)*m;case 125*v:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+d:m==-1&&(T=B(T,/\f/g,"")),p>0&&un(T)-c&&No(p>32?_0(T+";",r,n,c-1,l):_0(B(T," ","")+";",r,n,c-2,l),l);break;case 59:T+=";";default:if(No(C=v0(T,e,n,u,d,i,a,g,_=[],x=[],c,s),s),h===123)if(d===0)nu(T,e,C,C,_,s,c,a,x);else switch(f===99&&Le(T,3)===110?100:f){case 100:case 108:case 109:case 115:nu(t,C,C,r&&No(v0(t,C,C,0,0,i,a,g,i,_=[],c,x),x),i,x,c,a,r?_:x);break;default:nu(T,C,C,C,[""],x,0,a,x)}}u=d=p=0,v=m=1,g=T="",c=o;break;case 58:c=1+un(T),p=y;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&y3()==125)continue}switch(T+=Bg(h),h*v){case 38:m=d>0?1:(T+="\f",-1);break;case 44:a[u++]=(un(T)-1)*m,m=1;break;case 64:pi()===45&&(T+=xf(Zt())),f=pi(),d=c=un(g=T+=C3(tu())),h++;break;case 45:y===45&&un(T)==2&&(v=0)}}return s}function v0(t,e,n,r,i,s,o,a,l,u,d,c){for(var f=i-1,p=i===0?s:[""],y=FT(p),v=0,S=0,m=0;v<r;++v)for(var h=0,g=Bs(t,f+1,f=MT(S=o[v])),_=t;h<y;++h)(_=$T(S>0?p[h]+" "+g:B(g,/&\f/g,p[h])))&&(l[m++]=_);return rd(t,e,n,i===0?td:a,l,u,d,c)}function x3(t,e,n,r){return rd(t,e,n,DT,Bg(g3()),Bs(t,2,-2),0,r)}function _0(t,e,n,r,i){return rd(t,e,n,Wg,Bs(t,0,r),Bs(t,r+1,-1),r,i)}function UT(t,e,n){switch(p3(t,e)){case 5103:return Z+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+t+t;case 4789:return Ko+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+t+Ko+t+ce+t+t;case 5936:switch(Le(t,e+11)){case 114:return Z+t+ce+B(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Z+t+ce+B(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Z+t+ce+B(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Z+t+ce+t+t;case 6165:return Z+t+ce+"flex-"+t+t;case 5187:return Z+t+B(t,/(\w+).+(:[^]+)/,Z+"box-$1$2"+ce+"flex-$1$2")+t;case 5443:return Z+t+ce+"flex-item-"+B(t,/flex-|-self/g,"")+(In(t,/flex-|baseline/)?"":ce+"grid-row-"+B(t,/flex-|-self/g,""))+t;case 4675:return Z+t+ce+"flex-line-pack"+B(t,/align-content|flex-|-self/g,"")+t;case 5548:return Z+t+ce+B(t,"shrink","negative")+t;case 5292:return Z+t+ce+B(t,"basis","preferred-size")+t;case 6060:return Z+"box-"+B(t,"-grow","")+Z+t+ce+B(t,"grow","positive")+t;case 4554:return Z+B(t,/([^-])(transform)/g,"$1"+Z+"$2")+t;case 6187:return B(B(B(t,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),t,"")+t;case 5495:case 3959:return B(t,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return B(B(t,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+t+t;case 4200:if(!In(t,/flex-|baseline/))return ce+"grid-column-align"+Bs(t,e)+t;break;case 2592:case 3360:return ce+B(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,In(r.props,/grid-\w+-end/)})?~eu(t+(n=n[e].value),"span",0)?t:ce+B(t,"-start","")+t+ce+"grid-row-span:"+(~eu(n,"span",0)?In(n,/\d+/):+In(n,/\d+/)-+In(t,/\d+/))+";":ce+B(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return In(r.props,/grid-\w+-start/)})?t:ce+B(B(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return B(t,/(.+)-inline(.+)/,Z+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(un(t)-1-e>6)switch(Le(t,e+1)){case 109:if(Le(t,e+4)!==45)break;case 102:return B(t,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+Ko+(Le(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~eu(t,"stretch",0)?UT(B(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return B(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return ce+i+":"+s+u+(o?ce+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(Le(t,e+6)===121)return B(t,":",":"+Z)+t;break;case 6444:switch(Le(t,Le(t,14)===45?18:11)){case 120:return B(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+(Le(t,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+ce+"$2box$3")+t;case 100:return B(t,":",":"+ce)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(t,"scroll-","scroll-snap-")+t}return t}function ac(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function I3(t,e,n,r){switch(t.type){case h3:if(t.children.length)break;case f3:case Wg:return t.return=t.return||t.value;case DT:return"";case LT:return t.return=t.value+"{"+ac(t.children,r)+"}";case td:if(!un(t.value=t.props.join(",")))return""}return un(n=ac(t.children,r))?t.return=t.value+"{"+n+"}":""}function b3(t){var e=FT(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function k3(t){return function(e){e.root||(e=e.return)&&t(e)}}function P3(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Wg:t.return=UT(t.value,t.length,n);return;case LT:return ac([rr(t,{value:B(t.value,"@","@"+Z)})],r);case td:if(t.length)return m3(n=t.props,function(i){switch(In(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qi(rr(t,{props:[B(i,/:(read-\w+)/,":"+Ko+"$1")]})),qi(rr(t,{props:[i]})),_p(t,{props:y0(n,r)});break;case"::placeholder":qi(rr(t,{props:[B(i,/:(plac\w+)/,":"+Z+"input-$1")]})),qi(rr(t,{props:[B(i,/:(plac\w+)/,":"+Ko+"$1")]})),qi(rr(t,{props:[B(i,/:(plac\w+)/,ce+"input-$1")]})),qi(rr(t,{props:[i]})),_p(t,{props:y0(n,r)});break}return""})}}var R3={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wt={},Hs=typeof process<"u"&&wt!==void 0&&(wt.REACT_APP_SC_ATTR||wt.SC_ATTR)||"data-styled",zT="active",WT="data-styled-version",sd="6.1.8",Vg=`/*!sc*/
`,Hg=typeof window<"u"&&"HTMLElement"in window,O3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==""?wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.SC_DISABLE_SPEEDY!==void 0&&wt.SC_DISABLE_SPEEDY!==""&&wt.SC_DISABLE_SPEEDY!=="false"&&wt.SC_DISABLE_SPEEDY),N3={},od=Object.freeze([]),Gs=Object.freeze({});function BT(t,e,n){return n===void 0&&(n=Gs),t.theme!==n.theme&&t.theme||e||n.theme}var VT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),A3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D3=/(^-|-$)/g;function w0(t){return t.replace(A3,"-").replace(D3,"")}var L3=/(a)(d)/gi,xl=52,E0=function(t){return String.fromCharCode(t+(t>25?39:97))};function Sp(t){var e,n="";for(e=Math.abs(t);e>xl;e=e/xl|0)n=E0(e%xl)+n;return(E0(e%xl)+n).replace(L3,"$1-$2")}var If,HT=5381,fs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},GT=function(t){return fs(HT,t)};function Gg(t){return Sp(GT(t)>>>0)}function M3(t){return t.displayName||t.name||"Component"}function bf(t){return typeof t=="string"&&!0}var KT=typeof Symbol=="function"&&Symbol.for,qT=KT?Symbol.for("react.memo"):60115,$3=KT?Symbol.for("react.forward_ref"):60112,F3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},j3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},YT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},U3=((If={})[$3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},If[qT]=YT,If);function S0(t){return("type"in(e=t)&&e.type.$$typeof)===qT?YT:"$$typeof"in t?U3[t.$$typeof]:F3;var e}var z3=Object.defineProperty,W3=Object.getOwnPropertyNames,C0=Object.getOwnPropertySymbols,B3=Object.getOwnPropertyDescriptor,V3=Object.getPrototypeOf,T0=Object.prototype;function QT(t,e,n){if(typeof e!="string"){if(T0){var r=V3(e);r&&r!==T0&&QT(t,r,n)}var i=W3(e);C0&&(i=i.concat(C0(e)));for(var s=S0(t),o=S0(e),a=0;a<i.length;++a){var l=i[a];if(!(l in j3||n&&n[l]||o&&l in o||s&&l in s)){var u=B3(e,l);try{z3(t,l,u)}catch{}}}}return t}function Ks(t){return typeof t=="function"}function Kg(t){return typeof t=="object"&&"styledComponentId"in t}function ui(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function lc(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function ka(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Cp(t,e,n){if(n===void 0&&(n=!1),!n&&!ka(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Cp(t[r],e[r]);else if(ka(e))for(var r in e)t[r]=Cp(t[r],e[r]);return t}function qg(t,e){Object.defineProperty(t,"toString",{value:e})}function Ja(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var H3=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Ja(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Vg);return n},t}(),ru=new Map,uc=new Map,iu=1,Il=function(t){if(ru.has(t))return ru.get(t);for(;uc.has(iu);)iu++;var e=iu++;return ru.set(t,e),uc.set(e,t),e},G3=function(t,e){iu=e+1,ru.set(t,e),uc.set(e,t)},K3="style[".concat(Hs,"][").concat(WT,'="').concat(sd,'"]'),q3=new RegExp("^".concat(Hs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Y3=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},Q3=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Vg),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(q3);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(G3(d,u),Y3(t,d,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function X3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var XT=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Hs,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Hs,zT),r.setAttribute(WT,sd);var o=X3();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},J3=function(){function t(e){this.element=XT(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ja(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Z3=function(){function t(e){this.element=XT(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),ej=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),x0=Hg,tj={isServer:!Hg,useCSSOMInjection:!O3},cc=function(){function t(e,n,r){e===void 0&&(e=Gs),n===void 0&&(n={});var i=this;this.options=Qe(Qe({},tj),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Hg&&x0&&(x0=!1,function(s){for(var o=document.querySelectorAll(K3),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Hs)!==zT&&(Q3(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),qg(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(c){var f=function(m){return uc.get(m)}(c);if(f===void 0)return"continue";var p=s.names.get(f),y=o.getGroup(c);if(p===void 0||y.length===0)return"continue";var v="".concat(Hs,".g").concat(c,'[id="').concat(f,'"]'),S="";p!==void 0&&p.forEach(function(m){m.length>0&&(S+="".concat(m,","))}),l+="".concat(y).concat(v,'{content:"').concat(S,'"}').concat(Vg)},d=0;d<a;d++)u(d);return l}(i)})}return t.registerId=function(e){return Il(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Qe(Qe({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new ej(i):r?new J3(i):new Z3(i)}(this.options),new H3(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Il(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Il(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Il(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),nj=/&/g,rj=/^\s*\/\/.*$/gm;function JT(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=JT(n.children,e)),n})}function ZT(t){var e,n,r,i=t===void 0?Gs:t,s=i.options,o=s===void 0?Gs:s,a=i.plugins,l=a===void 0?od:a,u=function(f,p,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(e):f},d=l.slice();d.push(function(f){f.type===td&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(nj,n).replace(r,u))}),o.prefix&&d.push(P3),d.push(I3);var c=function(f,p,y,v){p===void 0&&(p=""),y===void 0&&(y=""),v===void 0&&(v="&"),e=v,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var S=f.replace(rj,""),m=T3(y||p?"".concat(y," ").concat(p," { ").concat(S," }"):S);o.namespace&&(m=JT(m,o.namespace));var h=[];return ac(m,b3(d.concat(k3(function(g){return h.push(g)})))),h};return c.hash=l.length?l.reduce(function(f,p){return p.name||Ja(15),fs(f,p.name)},HT).toString():"",c}var ij=new cc,Tp=ZT(),Yg=ut.createContext({shouldForwardProp:void 0,styleSheet:ij,stylis:Tp});Yg.Consumer;var sj=ut.createContext(void 0);function dc(){return E.useContext(Yg)}function oj(t){var e=E.useState(t.stylisPlugins),n=e[0],r=e[1],i=dc().styleSheet,s=E.useMemo(function(){var l=i;return t.sheet?l=t.sheet:t.target&&(l=l.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(l=l.reconstructWithOptions({useCSSOMInjection:!1})),l},[t.disableCSSOMInjection,t.sheet,t.target,i]),o=E.useMemo(function(){return ZT({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})},[t.enableVendorPrefixes,t.namespace,n]);E.useEffect(function(){d3(n,t.stylisPlugins)||r(t.stylisPlugins)},[t.stylisPlugins]);var a=E.useMemo(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:s,stylis:o}},[t.shouldForwardProp,s,o]);return ut.createElement(Yg.Provider,{value:a},ut.createElement(sj.Provider,{value:o},t.children))}var ex=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Tp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,qg(this,function(){throw Ja(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Tp),this.name+e.hash},t}(),aj=function(t){return t>="A"&&t<="Z"};function I0(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;aj(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var tx=function(t){return t==null||t===!1||t===""},nx=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!tx(s)&&(Array.isArray(s)&&s.isCss||Ks(s)?r.push("".concat(I0(i),":"),s,";"):ka(s)?r.push.apply(r,Fs(Fs(["".concat(i," {")],nx(s),!1),["}"],!1)):r.push("".concat(I0(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in R3||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Nr(t,e,n,r){if(tx(t))return[];if(Kg(t))return[".".concat(t.styledComponentId)];if(Ks(t)){if(!Ks(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Nr(i,e,n,r)}var s;return t instanceof ex?n?(t.inject(n,r),[t.getName(r)]):[t]:ka(t)?nx(t):Array.isArray(t)?Array.prototype.concat.apply(od,t.map(function(o){return Nr(o,e,n,r)})):[t.toString()]}function rx(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ks(n)&&!Kg(n))return!1}return!0}var lj=GT(sd),uj=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&rx(e),this.componentId=n,this.baseHash=fs(lj,n),this.baseStyle=r,cc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ui(i,this.staticRulesId);else{var s=lc(Nr(this.rules,e,n,r)),o=Sp(fs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ui(i,o),this.staticRulesId=o}else{for(var l=fs(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var f=lc(Nr(c,e,n,r));l=fs(l,f+d),u+=f}}if(u){var p=Sp(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=ui(i,p)}}return i},t}(),Qg=ut.createContext(void 0);Qg.Consumer;var kf={};function cj(t,e,n){var r=Kg(t),i=t,s=!bf(t),o=e.attrs,a=o===void 0?od:o,l=e.componentId,u=l===void 0?function(_,x){var C=typeof _!="string"?"sc":w0(_);kf[C]=(kf[C]||0)+1;var T="".concat(C,"-").concat(Gg(sd+C+kf[C]));return x?"".concat(x,"-").concat(T):T}(e.displayName,e.parentComponentId):l,d=e.displayName,c=d===void 0?function(_){return bf(_)?"styled.".concat(_):"Styled(".concat(M3(_),")")}(t):d,f=e.displayName&&e.componentId?"".concat(w0(e.displayName),"-").concat(e.componentId):e.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;y=function(_,x){return v(_,x)&&S(_,x)}}else y=v}var m=new uj(n,f,r?i.componentStyle:void 0);function h(_,x){return function(C,T,b){var D=C.attrs,$=C.componentStyle,W=C.defaultProps,Fe=C.foldedComponentIds,we=C.styledComponentId,vt=C.target,Vi=ut.useContext(Qg),Xr=dc(),wn=C.shouldForwardProp||Xr.shouldForwardProp,O=BT(T,Vi,W)||Gs,M=function(et,He,_t){for(var Zn,rn=Qe(Qe({},He),{className:void 0,theme:_t}),Hi=0;Hi<et.length;Hi+=1){var er=Ks(Zn=et[Hi])?Zn(rn):Zn;for(var sn in er)rn[sn]=sn==="className"?ui(rn[sn],er[sn]):sn==="style"?Qe(Qe({},rn[sn]),er[sn]):er[sn]}return He.className&&(rn.className=ui(rn.className,He.className)),rn}(D,T,O),z=M.as||vt,X={};for(var Y in M)M[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&M.theme===O||(Y==="forwardedAs"?X.as=M.forwardedAs:wn&&!wn(Y,z)||(X[Y]=M[Y]));var nn=function(et,He){var _t=dc(),Zn=et.generateAndInjectStyles(He,_t.styleSheet,_t.stylis);return Zn}($,M),Ze=ui(Fe,we);return nn&&(Ze+=" "+nn),M.className&&(Ze+=" "+M.className),X[bf(z)&&!VT.has(z)?"class":"className"]=Ze,X.ref=b,E.createElement(z,X)}(g,_,x)}h.displayName=c;var g=ut.forwardRef(h);return g.attrs=p,g.componentStyle=m,g.displayName=c,g.shouldForwardProp=y,g.foldedComponentIds=r?ui(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=f,g.target=r?i.target:t,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=r?function(x){for(var C=[],T=1;T<arguments.length;T++)C[T-1]=arguments[T];for(var b=0,D=C;b<D.length;b++)Cp(x,D[b],!0);return x}({},i.defaultProps,_):_}}),qg(g,function(){return".".concat(g.styledComponentId)}),s&&QT(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function b0(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var k0=function(t){return Object.assign(t,{isCss:!0})};function Pi(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ks(t)||ka(t))return k0(Nr(b0(od,Fs([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Nr(r):k0(Nr(b0(r,e)))}function xp(t,e,n){if(n===void 0&&(n=Gs),!e)throw Ja(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Pi.apply(void 0,Fs([i],s,!1)))};return r.attrs=function(i){return xp(t,e,Qe(Qe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return xp(t,e,Qe(Qe({},n),i))},r}var ix=function(t){return xp(cj,t)},R=ix;VT.forEach(function(t){R[t]=ix(t)});var dj=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=rx(e),cc.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(lc(Nr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&cc.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function fj(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Pi.apply(void 0,Fs([t],e,!1)),i="sc-global-".concat(Gg(JSON.stringify(r))),s=new dj(r,i),o=function(l){var u=dc(),d=ut.useContext(Qg),c=ut.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(c,l,u.styleSheet,d,u.stylis),ut.useLayoutEffect(function(){if(!u.styleSheet.server)return a(c,l,u.styleSheet,d,u.stylis),function(){return s.removeStyles(c,u.styleSheet)}},[c,l,u.styleSheet,d,u.stylis]),null};function a(l,u,d,c,f){if(s.isStatic)s.renderStyles(l,N3,d,f);else{var p=Qe(Qe({},u),{theme:BT(u,c,o.defaultProps)});s.renderStyles(l,p,d,f)}}return ut.memo(o)}function $i(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=lc(Pi.apply(void 0,Fs([t],e,!1))),i=Gg(r);return new ex(i,r)}const hj=fj`
@font-face {
  font-family: "Roboto";
  src: url("../src/assets/fonts/Roboto-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url("../src/assets/fonts/Roboto-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url("../src/assets/fonts/Roboto-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("../src/assets/fonts/Roboto-Italic.ttf") format("truetype");
  font-weight: 400;
  font-style: italic;
}


/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  overflow-x: hidden;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
  height: auto;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

html {
  font-family: "Roboto", sans-serif;

  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #d7e3ff;
    border-radius: 100px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: #9ebbff;
    border-radius: 100px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #6191ff;
  }
}

button,
a {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  padding: 0;
  cursor: pointer;

}

a {
  text-decoration: none;
}`,Ce={WHITE:"#FFFFFF",YELLOW:"#F4C550",LIGHT_YELLOW:"#FBE9BA",GREEN:"#9FBAAE",LIGHT_GREEN:"#CBDED3",BLUE:"#9FB7CE",LIGHT:"#BFD6EA",PEACH:"#F0AA8D",LIGHT_PEACH:"#F4C8BA",ROSE:"#E0A39A",LIGHT_ROSE:"#F2C0BD",BLACK_TEXT:"#121417",LIGHT_BLACK_TEXT:"rgba(18, 20, 23, 0.2)",YELLOW_BUTTON:"#F4C550",YELLOW_HOVER_BUTTON:"#FFDC86",GREY_LABEL:"#8A8A89",SILVER_BACKGROUND:"#F8F8F8"},pj=R(Am)`
  height: 28px;
`,mj=R.header`
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 20px 128px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 560px) {
    padding: 20px 15px;
  }
`,gj=R(Am)`
  color: rgb(18, 20, 23);
  font-size: 20px;
  //font-size: calc(12px + (20 - 12) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.333px;
`,yj=R.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
`,vj=R.div`
  display: flex;
  align-items: center;
  gap: 28px;
`,Pf=R(Am)`
  color: ${Ce.BLACK_TEXT};
  font-size: 16px;
  /* font-size: calc(12px + (20 - 12) * ((100vw - 320px) / (1440 - 320))); */
  font-weight: 400;
  line-height: 20px;
  max-width: 66px;

  &:hover,
  &:focus {
    color: ${Ce.LIGHT_YELLOW};
  }

  &.active {
    font-weight: 500;
    color: ${Ce.YELLOW};
  }
`,_j=R.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,wj=R.button`
  height: 48px;
  max-width: 73px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${Ce.BLACK_TEXT};
  font-size: 16px;
  //font-size: calc(12px + (20 - 12) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  font-family: Roboto;
  white-space: nowrap;

  &:hover,
  &:focus {
    color: ${Ce.LIGHT_YELLOW};
  }
`,Ej=R.button`
  height: 48px;
  width: 166px;
  border: none;
  border-radius: 12px;
  background: rgb(18, 20, 23);
  color: ${Ce.WHITE};
  font-family: Roboto;
  font-size: 16px;
  //font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  padding: 14px 39px 14px 39px;
`,Sj=R.span`
  max-width: 20px;
  height: 20px;
`,Cj=R.div`
  display: flex;
  gap: 390px;
  align-items: center;
`,Tj=R.div`
  display: flex;
  align-items: center;
`,Xg=()=>{const{name:t,email:e,token:n,id:r,isLoggedIn:i,isRefreshing:s}=KE(o=>o.auth);return{isRefreshing:s,isLoggedIn:i,email:e,token:n,name:t,id:r}},xj=R.div`
  display: flex;
  gap: 8px;
`,Ij=R.button`
  height: 48px;
  max-width: 166px;
  border: none;
  border-radius: 12px;
  background: ${Ce.YELLOW_BUTTON};
  color: ${Ce.WHITE};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  padding: 14px 39px 14px 39px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`,bj=R.p`
  color: rgb(18, 20, 23);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.333px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`,kj=()=>{const t=Dc(),{name:e}=Xg(),n=()=>{t(fC())};return w.jsxs(xj,{children:[w.jsx(bj,{children:`Welcome, ${e}`}),w.jsx(Ij,{type:"button",onClick:()=>n(),children:"Log Out"})]})},sx=({setNamePopUp:t})=>{const{isLoggedIn:e}=Xg(),n=()=>(t("login"),w.jsx(Mh,{to:"/login"})),r=()=>(t("signin"),w.jsx(Mh,{to:"/login"}));return w.jsxs(mj,{children:[w.jsx(Cj,{children:w.jsxs(yj,{children:[w.jsx(pj,{to:"/",children:w.jsx(u3,{})}),w.jsx(gj,{to:"/",children:"LearnLingo"})]})}),w.jsxs(vj,{children:[w.jsx(Pf,{to:"/",children:"Home"}),w.jsx(Pf,{to:"teachers",children:"Teachers"}),e&&w.jsx(Pf,{to:"favorites",children:"Favorites"})]}),w.jsx(Tj,{children:e?w.jsx(kj,{}):w.jsxs(_j,{children:[w.jsxs(wj,{type:"button",onClick:n,children:[w.jsx(Sj,{children:w.jsx(l3,{})}),"Log in"]}),w.jsx(Ej,{type:"button",onClick:()=>r(),children:"Registration"})]})})]})};sx.propTypes={setNamePopUp:zr.func.isRequired};const Pj=R.div`
  max-width: 100%;
  text-align: center;
`,Rj="#4fa94d",Oj={"aria-busy":!0,role:"progressbar"},Nj=R.div`
  display: ${t=>t.$visible?"flex":"none"};
`,Aj="http://www.w3.org/2000/svg",Dj=({height:t="100",width:e="100",color:n=Rj,ariaLabel:r="audio-loading",wrapperStyle:i={},wrapperClass:s,visible:o=!0})=>w.jsx(Nj,{$visible:o,style:{...i},className:s,"data-testid":"audio-loading","aria-label":r,...Oj,children:w.jsxs("svg",{height:`${t}`,width:`${e}`,fill:n,viewBox:"0 0 55 80",xmlns:Aj,"data-testid":"audio-svg",children:[w.jsx("title",{children:"Audio Visualization"}),w.jsx("desc",{children:"Animated representation of audio data"}),w.jsxs("g",{transform:"matrix(1 0 0 -1 0 80)",children:[w.jsx("rect",{width:"10",height:"20",rx:"3",children:w.jsx("animate",{attributeName:"height",begin:"0s",dur:"4.3s",values:"20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",calcMode:"linear",repeatCount:"indefinite"})}),w.jsx("rect",{x:"15",width:"10",height:"80",rx:"3",children:w.jsx("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"80;55;33;5;75;23;73;33;12;14;60;80",calcMode:"linear",repeatCount:"indefinite"})}),w.jsx("rect",{x:"30",width:"10",height:"50",rx:"3",children:w.jsx("animate",{attributeName:"height",begin:"0s",dur:"1.4s",values:"50;34;78;23;56;23;34;76;80;54;21;50",calcMode:"linear",repeatCount:"indefinite"})}),w.jsx("rect",{x:"45",width:"10",height:"30",rx:"3",children:w.jsx("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"30;45;13;80;56;72;45;76;34;23;67;30",calcMode:"linear",repeatCount:"indefinite"})})]})]})}),Wt=242.776657104492,Lj=1.6,Mj=$i`
12.5% {
  stroke-dasharray: ${Wt*.14}px, ${Wt}px;
  stroke-dashoffset: -${Wt*.11}px;
}
43.75% {
  stroke-dasharray: ${Wt*.35}px, ${Wt}px;
  stroke-dashoffset: -${Wt*.35}px;
}
100% {
  stroke-dasharray: ${Wt*.01}px, ${Wt}px;
  stroke-dashoffset: -${Wt*.99}px;
}
`;R.path`
  stroke-dasharray: ${Wt*.01}px, ${Wt};
  stroke-dashoffset: 0;
  animation: ${Mj} ${Lj}s linear infinite;
`;const $j=$i`
to {
   transform: rotate(360deg);
 }
`;R.svg`
  animation: ${$j} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;R.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const Fj=$i`
to {
   stroke-dashoffset: 136;
 }
`;R.polygon`
  stroke-dasharray: 17;
  animation: ${Fj} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;R.svg`
  transform-origin: 50% 65%;
`;const jj=R.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,Uj=()=>w.jsx(jj,{children:w.jsx(Dj,{height:"80",width:"80",radius:"9",color:Ce.YELLOW,ariaLabel:"loading",wrapperStyle:!0,wrapperClass:!0})}),ox=({setNamePopUp:t})=>w.jsxs(w.Fragment,{children:[w.jsx(sx,{setNamePopUp:t}),w.jsx(Pj,{children:w.jsx(E.Suspense,{fallback:w.jsx(Uj,{}),children:w.jsx(IP,{})})})]});ox.propTypes={setNamePopUp:zr.func.isRequired};var zj=function(e){return Wj(e)&&!Bj(e)};function Wj(t){return!!t&&typeof t=="object"}function Bj(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||Gj(t)}var Vj=typeof Symbol=="function"&&Symbol.for,Hj=Vj?Symbol.for("react.element"):60103;function Gj(t){return t.$$typeof===Hj}function Kj(t){return Array.isArray(t)?[]:{}}function fc(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Pa(Kj(t),t,e):t}function qj(t,e,n){return t.concat(e).map(function(r){return fc(r,n)})}function Yj(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=fc(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=fc(e[i],n):r[i]=Pa(t[i],e[i],n)}),r}function Pa(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||qj,n.isMergeableObject=n.isMergeableObject||zj;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):Yj(t,e,n):fc(e,n)}Pa.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return Pa(r,i,n)},{})};var Ip=Pa,ax=typeof global=="object"&&global&&global.Object===Object&&global,Qj=typeof self=="object"&&self&&self.Object===Object&&self,_n=ax||Qj||Function("return this")(),Wr=_n.Symbol,lx=Object.prototype,Xj=lx.hasOwnProperty,Jj=lx.toString,Co=Wr?Wr.toStringTag:void 0;function Zj(t){var e=Xj.call(t,Co),n=t[Co];try{t[Co]=void 0;var r=!0}catch{}var i=Jj.call(t);return r&&(e?t[Co]=n:delete t[Co]),i}var e4=Object.prototype,t4=e4.toString;function n4(t){return t4.call(t)}var r4="[object Null]",i4="[object Undefined]",P0=Wr?Wr.toStringTag:void 0;function Fi(t){return t==null?t===void 0?i4:r4:P0&&P0 in Object(t)?Zj(t):n4(t)}function ux(t,e){return function(n){return t(e(n))}}var Jg=ux(Object.getPrototypeOf,Object);function ji(t){return t!=null&&typeof t=="object"}var s4="[object Object]",o4=Function.prototype,a4=Object.prototype,cx=o4.toString,l4=a4.hasOwnProperty,u4=cx.call(Object);function R0(t){if(!ji(t)||Fi(t)!=s4)return!1;var e=Jg(t);if(e===null)return!0;var n=l4.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&cx.call(n)==u4}var O0=Array.isArray,N0=Object.keys,c4=Object.prototype.hasOwnProperty,d4=typeof Element<"u";function bp(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=O0(t),r=O0(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!bp(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==e.toString();var c=N0(t);if(s=c.length,s!==N0(e).length)return!1;for(i=s;i--!==0;)if(!c4.call(e,c[i]))return!1;if(d4&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=c[i],!(o==="_owner"&&t.$$typeof)&&!bp(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var f4=function(e,n){try{return bp(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const or=Ys(f4);function h4(){this.__data__=[],this.size=0}function dx(t,e){return t===e||t!==t&&e!==e}function ad(t,e){for(var n=t.length;n--;)if(dx(t[n][0],e))return n;return-1}var p4=Array.prototype,m4=p4.splice;function g4(t){var e=this.__data__,n=ad(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():m4.call(e,n,1),--this.size,!0}function y4(t){var e=this.__data__,n=ad(e,t);return n<0?void 0:e[n][1]}function v4(t){return ad(this.__data__,t)>-1}function _4(t,e){var n=this.__data__,r=ad(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Jn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Jn.prototype.clear=h4;Jn.prototype.delete=g4;Jn.prototype.get=y4;Jn.prototype.has=v4;Jn.prototype.set=_4;function w4(){this.__data__=new Jn,this.size=0}function E4(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function S4(t){return this.__data__.get(t)}function C4(t){return this.__data__.has(t)}function Za(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var T4="[object AsyncFunction]",x4="[object Function]",I4="[object GeneratorFunction]",b4="[object Proxy]";function fx(t){if(!Za(t))return!1;var e=Fi(t);return e==x4||e==I4||e==T4||e==b4}var Rf=_n["__core-js_shared__"],A0=function(){var t=/[^.]+$/.exec(Rf&&Rf.keys&&Rf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function k4(t){return!!A0&&A0 in t}var P4=Function.prototype,R4=P4.toString;function Ui(t){if(t!=null){try{return R4.call(t)}catch{}try{return t+""}catch{}}return""}var O4=/[\\^$.*+?()[\]{}|]/g,N4=/^\[object .+?Constructor\]$/,A4=Function.prototype,D4=Object.prototype,L4=A4.toString,M4=D4.hasOwnProperty,$4=RegExp("^"+L4.call(M4).replace(O4,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function F4(t){if(!Za(t)||k4(t))return!1;var e=fx(t)?$4:N4;return e.test(Ui(t))}function j4(t,e){return t==null?void 0:t[e]}function zi(t,e){var n=j4(t,e);return F4(n)?n:void 0}var Ra=zi(_n,"Map"),Oa=zi(Object,"create");function U4(){this.__data__=Oa?Oa(null):{},this.size=0}function z4(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var W4="__lodash_hash_undefined__",B4=Object.prototype,V4=B4.hasOwnProperty;function H4(t){var e=this.__data__;if(Oa){var n=e[t];return n===W4?void 0:n}return V4.call(e,t)?e[t]:void 0}var G4=Object.prototype,K4=G4.hasOwnProperty;function q4(t){var e=this.__data__;return Oa?e[t]!==void 0:K4.call(e,t)}var Y4="__lodash_hash_undefined__";function Q4(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Oa&&e===void 0?Y4:e,this}function Ri(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ri.prototype.clear=U4;Ri.prototype.delete=z4;Ri.prototype.get=H4;Ri.prototype.has=q4;Ri.prototype.set=Q4;function X4(){this.size=0,this.__data__={hash:new Ri,map:new(Ra||Jn),string:new Ri}}function J4(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function ld(t,e){var n=t.__data__;return J4(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Z4(t){var e=ld(this,t).delete(t);return this.size-=e?1:0,e}function e6(t){return ld(this,t).get(t)}function t6(t){return ld(this,t).has(t)}function n6(t,e){var n=ld(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Qr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Qr.prototype.clear=X4;Qr.prototype.delete=Z4;Qr.prototype.get=e6;Qr.prototype.has=t6;Qr.prototype.set=n6;var r6=200;function i6(t,e){var n=this.__data__;if(n instanceof Jn){var r=n.__data__;if(!Ra||r.length<r6-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Qr(r)}return n.set(t,e),this.size=n.size,this}function uo(t){var e=this.__data__=new Jn(t);this.size=e.size}uo.prototype.clear=w4;uo.prototype.delete=E4;uo.prototype.get=S4;uo.prototype.has=C4;uo.prototype.set=i6;function s6(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var D0=function(){try{var t=zi(Object,"defineProperty");return t({},"",{}),t}catch{}}();function hx(t,e,n){e=="__proto__"&&D0?D0(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var o6=Object.prototype,a6=o6.hasOwnProperty;function px(t,e,n){var r=t[e];(!(a6.call(t,e)&&dx(r,n))||n===void 0&&!(e in t))&&hx(t,e,n)}function ud(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?hx(n,a,l):px(n,a,l)}return n}function l6(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var u6="[object Arguments]";function L0(t){return ji(t)&&Fi(t)==u6}var mx=Object.prototype,c6=mx.hasOwnProperty,d6=mx.propertyIsEnumerable,f6=L0(function(){return arguments}())?L0:function(t){return ji(t)&&c6.call(t,"callee")&&!d6.call(t,"callee")},el=Array.isArray;function h6(){return!1}var gx=typeof exports=="object"&&exports&&!exports.nodeType&&exports,M0=gx&&typeof module=="object"&&module&&!module.nodeType&&module,p6=M0&&M0.exports===gx,$0=p6?_n.Buffer:void 0,m6=$0?$0.isBuffer:void 0,yx=m6||h6,g6=9007199254740991,y6=/^(?:0|[1-9]\d*)$/;function v6(t,e){var n=typeof t;return e=e??g6,!!e&&(n=="number"||n!="symbol"&&y6.test(t))&&t>-1&&t%1==0&&t<e}var _6=9007199254740991;function vx(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=_6}var w6="[object Arguments]",E6="[object Array]",S6="[object Boolean]",C6="[object Date]",T6="[object Error]",x6="[object Function]",I6="[object Map]",b6="[object Number]",k6="[object Object]",P6="[object RegExp]",R6="[object Set]",O6="[object String]",N6="[object WeakMap]",A6="[object ArrayBuffer]",D6="[object DataView]",L6="[object Float32Array]",M6="[object Float64Array]",$6="[object Int8Array]",F6="[object Int16Array]",j6="[object Int32Array]",U6="[object Uint8Array]",z6="[object Uint8ClampedArray]",W6="[object Uint16Array]",B6="[object Uint32Array]",de={};de[L6]=de[M6]=de[$6]=de[F6]=de[j6]=de[U6]=de[z6]=de[W6]=de[B6]=!0;de[w6]=de[E6]=de[A6]=de[S6]=de[D6]=de[C6]=de[T6]=de[x6]=de[I6]=de[b6]=de[k6]=de[P6]=de[R6]=de[O6]=de[N6]=!1;function V6(t){return ji(t)&&vx(t.length)&&!!de[Fi(t)]}function Zg(t){return function(e){return t(e)}}var _x=typeof exports=="object"&&exports&&!exports.nodeType&&exports,qo=_x&&typeof module=="object"&&module&&!module.nodeType&&module,H6=qo&&qo.exports===_x,Of=H6&&ax.process,qs=function(){try{var t=qo&&qo.require&&qo.require("util").types;return t||Of&&Of.binding&&Of.binding("util")}catch{}}(),F0=qs&&qs.isTypedArray,G6=F0?Zg(F0):V6,K6=Object.prototype,q6=K6.hasOwnProperty;function wx(t,e){var n=el(t),r=!n&&f6(t),i=!n&&!r&&yx(t),s=!n&&!r&&!i&&G6(t),o=n||r||i||s,a=o?l6(t.length,String):[],l=a.length;for(var u in t)(e||q6.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||v6(u,l)))&&a.push(u);return a}var Y6=Object.prototype;function ey(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||Y6;return t===n}var Q6=ux(Object.keys,Object),X6=Object.prototype,J6=X6.hasOwnProperty;function Z6(t){if(!ey(t))return Q6(t);var e=[];for(var n in Object(t))J6.call(t,n)&&n!="constructor"&&e.push(n);return e}function Ex(t){return t!=null&&vx(t.length)&&!fx(t)}function ty(t){return Ex(t)?wx(t):Z6(t)}function e5(t,e){return t&&ud(e,ty(e),t)}function t5(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var n5=Object.prototype,r5=n5.hasOwnProperty;function i5(t){if(!Za(t))return t5(t);var e=ey(t),n=[];for(var r in t)r=="constructor"&&(e||!r5.call(t,r))||n.push(r);return n}function ny(t){return Ex(t)?wx(t,!0):i5(t)}function s5(t,e){return t&&ud(e,ny(e),t)}var Sx=typeof exports=="object"&&exports&&!exports.nodeType&&exports,j0=Sx&&typeof module=="object"&&module&&!module.nodeType&&module,o5=j0&&j0.exports===Sx,U0=o5?_n.Buffer:void 0,z0=U0?U0.allocUnsafe:void 0;function a5(t,e){if(e)return t.slice();var n=t.length,r=z0?z0(n):new t.constructor(n);return t.copy(r),r}function Cx(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function l5(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function Tx(){return[]}var u5=Object.prototype,c5=u5.propertyIsEnumerable,W0=Object.getOwnPropertySymbols,ry=W0?function(t){return t==null?[]:(t=Object(t),l5(W0(t),function(e){return c5.call(t,e)}))}:Tx;function d5(t,e){return ud(t,ry(t),e)}function xx(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var f5=Object.getOwnPropertySymbols,Ix=f5?function(t){for(var e=[];t;)xx(e,ry(t)),t=Jg(t);return e}:Tx;function h5(t,e){return ud(t,Ix(t),e)}function bx(t,e,n){var r=e(t);return el(t)?r:xx(r,n(t))}function p5(t){return bx(t,ty,ry)}function m5(t){return bx(t,ny,Ix)}var kp=zi(_n,"DataView"),Pp=zi(_n,"Promise"),Rp=zi(_n,"Set"),Op=zi(_n,"WeakMap"),B0="[object Map]",g5="[object Object]",V0="[object Promise]",H0="[object Set]",G0="[object WeakMap]",K0="[object DataView]",y5=Ui(kp),v5=Ui(Ra),_5=Ui(Pp),w5=Ui(Rp),E5=Ui(Op),ii=Fi;(kp&&ii(new kp(new ArrayBuffer(1)))!=K0||Ra&&ii(new Ra)!=B0||Pp&&ii(Pp.resolve())!=V0||Rp&&ii(new Rp)!=H0||Op&&ii(new Op)!=G0)&&(ii=function(t){var e=Fi(t),n=e==g5?t.constructor:void 0,r=n?Ui(n):"";if(r)switch(r){case y5:return K0;case v5:return B0;case _5:return V0;case w5:return H0;case E5:return G0}return e});const iy=ii;var S5=Object.prototype,C5=S5.hasOwnProperty;function T5(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&C5.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var q0=_n.Uint8Array;function sy(t){var e=new t.constructor(t.byteLength);return new q0(e).set(new q0(t)),e}function x5(t,e){var n=e?sy(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var I5=/\w*$/;function b5(t){var e=new t.constructor(t.source,I5.exec(t));return e.lastIndex=t.lastIndex,e}var Y0=Wr?Wr.prototype:void 0,Q0=Y0?Y0.valueOf:void 0;function k5(t){return Q0?Object(Q0.call(t)):{}}function P5(t,e){var n=e?sy(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var R5="[object Boolean]",O5="[object Date]",N5="[object Map]",A5="[object Number]",D5="[object RegExp]",L5="[object Set]",M5="[object String]",$5="[object Symbol]",F5="[object ArrayBuffer]",j5="[object DataView]",U5="[object Float32Array]",z5="[object Float64Array]",W5="[object Int8Array]",B5="[object Int16Array]",V5="[object Int32Array]",H5="[object Uint8Array]",G5="[object Uint8ClampedArray]",K5="[object Uint16Array]",q5="[object Uint32Array]";function Y5(t,e,n){var r=t.constructor;switch(e){case F5:return sy(t);case R5:case O5:return new r(+t);case j5:return x5(t,n);case U5:case z5:case W5:case B5:case V5:case H5:case G5:case K5:case q5:return P5(t,n);case N5:return new r;case A5:case M5:return new r(t);case D5:return b5(t);case L5:return new r;case $5:return k5(t)}}var X0=Object.create,Q5=function(){function t(){}return function(e){if(!Za(e))return{};if(X0)return X0(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function X5(t){return typeof t.constructor=="function"&&!ey(t)?Q5(Jg(t)):{}}var J5="[object Map]";function Z5(t){return ji(t)&&iy(t)==J5}var J0=qs&&qs.isMap,eU=J0?Zg(J0):Z5,tU="[object Set]";function nU(t){return ji(t)&&iy(t)==tU}var Z0=qs&&qs.isSet,rU=Z0?Zg(Z0):nU,iU=1,sU=2,oU=4,kx="[object Arguments]",aU="[object Array]",lU="[object Boolean]",uU="[object Date]",cU="[object Error]",Px="[object Function]",dU="[object GeneratorFunction]",fU="[object Map]",hU="[object Number]",Rx="[object Object]",pU="[object RegExp]",mU="[object Set]",gU="[object String]",yU="[object Symbol]",vU="[object WeakMap]",_U="[object ArrayBuffer]",wU="[object DataView]",EU="[object Float32Array]",SU="[object Float64Array]",CU="[object Int8Array]",TU="[object Int16Array]",xU="[object Int32Array]",IU="[object Uint8Array]",bU="[object Uint8ClampedArray]",kU="[object Uint16Array]",PU="[object Uint32Array]",oe={};oe[kx]=oe[aU]=oe[_U]=oe[wU]=oe[lU]=oe[uU]=oe[EU]=oe[SU]=oe[CU]=oe[TU]=oe[xU]=oe[fU]=oe[hU]=oe[Rx]=oe[pU]=oe[mU]=oe[gU]=oe[yU]=oe[IU]=oe[bU]=oe[kU]=oe[PU]=!0;oe[cU]=oe[Px]=oe[vU]=!1;function Yo(t,e,n,r,i,s){var o,a=e&iU,l=e&sU,u=e&oU;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!Za(t))return t;var d=el(t);if(d){if(o=T5(t),!a)return Cx(t,o)}else{var c=iy(t),f=c==Px||c==dU;if(yx(t))return a5(t,a);if(c==Rx||c==kx||f&&!i){if(o=l||f?{}:X5(t),!a)return l?h5(t,s5(o,t)):d5(t,e5(o,t))}else{if(!oe[c])return i?t:{};o=Y5(t,c,a)}}s||(s=new uo);var p=s.get(t);if(p)return p;s.set(t,o),rU(t)?t.forEach(function(S){o.add(Yo(S,e,n,S,t,s))}):eU(t)&&t.forEach(function(S,m){o.set(m,Yo(S,e,n,m,t,s))});var y=u?l?m5:p5:l?ny:ty,v=d?void 0:y(t);return s6(v||t,function(S,m){v&&(m=S,S=t[m]),px(o,m,Yo(S,e,n,m,t,s))}),o}var RU=4;function ew(t){return Yo(t,RU)}function Ox(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var OU="[object Symbol]";function oy(t){return typeof t=="symbol"||ji(t)&&Fi(t)==OU}var NU="Expected a function";function ay(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(NU);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(ay.Cache||Qr),n}ay.Cache=Qr;var AU=500;function DU(t){var e=ay(t,function(r){return n.size===AU&&n.clear(),r}),n=e.cache;return e}var LU=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,MU=/\\(\\)?/g,$U=DU(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(LU,function(n,r,i,s){e.push(i?s.replace(MU,"$1"):r||n)}),e});const FU=$U;var jU=1/0;function UU(t){if(typeof t=="string"||oy(t))return t;var e=t+"";return e=="0"&&1/t==-jU?"-0":e}var zU=1/0,tw=Wr?Wr.prototype:void 0,nw=tw?tw.toString:void 0;function Nx(t){if(typeof t=="string")return t;if(el(t))return Ox(t,Nx)+"";if(oy(t))return nw?nw.call(t):"";var e=t+"";return e=="0"&&1/t==-zU?"-0":e}function WU(t){return t==null?"":Nx(t)}function Ax(t){return el(t)?Ox(t,UU):oy(t)?[t]:Cx(FU(WU(t)))}var Dx={exports:{}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=typeof Symbol=="function"&&Symbol.for,ly=$e?Symbol.for("react.element"):60103,uy=$e?Symbol.for("react.portal"):60106,cd=$e?Symbol.for("react.fragment"):60107,dd=$e?Symbol.for("react.strict_mode"):60108,fd=$e?Symbol.for("react.profiler"):60114,hd=$e?Symbol.for("react.provider"):60109,pd=$e?Symbol.for("react.context"):60110,cy=$e?Symbol.for("react.async_mode"):60111,md=$e?Symbol.for("react.concurrent_mode"):60111,gd=$e?Symbol.for("react.forward_ref"):60112,yd=$e?Symbol.for("react.suspense"):60113,BU=$e?Symbol.for("react.suspense_list"):60120,vd=$e?Symbol.for("react.memo"):60115,_d=$e?Symbol.for("react.lazy"):60116,VU=$e?Symbol.for("react.block"):60121,HU=$e?Symbol.for("react.fundamental"):60117,GU=$e?Symbol.for("react.responder"):60118,KU=$e?Symbol.for("react.scope"):60119;function Nt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ly:switch(t=t.type,t){case cy:case md:case cd:case fd:case dd:case yd:return t;default:switch(t=t&&t.$$typeof,t){case pd:case gd:case _d:case vd:case hd:return t;default:return e}}case uy:return e}}}function Lx(t){return Nt(t)===md}re.AsyncMode=cy;re.ConcurrentMode=md;re.ContextConsumer=pd;re.ContextProvider=hd;re.Element=ly;re.ForwardRef=gd;re.Fragment=cd;re.Lazy=_d;re.Memo=vd;re.Portal=uy;re.Profiler=fd;re.StrictMode=dd;re.Suspense=yd;re.isAsyncMode=function(t){return Lx(t)||Nt(t)===cy};re.isConcurrentMode=Lx;re.isContextConsumer=function(t){return Nt(t)===pd};re.isContextProvider=function(t){return Nt(t)===hd};re.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ly};re.isForwardRef=function(t){return Nt(t)===gd};re.isFragment=function(t){return Nt(t)===cd};re.isLazy=function(t){return Nt(t)===_d};re.isMemo=function(t){return Nt(t)===vd};re.isPortal=function(t){return Nt(t)===uy};re.isProfiler=function(t){return Nt(t)===fd};re.isStrictMode=function(t){return Nt(t)===dd};re.isSuspense=function(t){return Nt(t)===yd};re.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===cd||t===md||t===fd||t===dd||t===yd||t===BU||typeof t=="object"&&t!==null&&(t.$$typeof===_d||t.$$typeof===vd||t.$$typeof===hd||t.$$typeof===pd||t.$$typeof===gd||t.$$typeof===HU||t.$$typeof===GU||t.$$typeof===KU||t.$$typeof===VU)};re.typeOf=Nt;Dx.exports=re;var qU=Dx.exports,dy=qU,YU={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},QU={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},XU={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Mx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fy={};fy[dy.ForwardRef]=XU;fy[dy.Memo]=Mx;function rw(t){return dy.isMemo(t)?Mx:fy[t.$$typeof]||YU}var JU=Object.defineProperty,ZU=Object.getOwnPropertyNames,iw=Object.getOwnPropertySymbols,e8=Object.getOwnPropertyDescriptor,t8=Object.getPrototypeOf,sw=Object.prototype;function $x(t,e,n){if(typeof e!="string"){if(sw){var r=t8(e);r&&r!==sw&&$x(t,r,n)}var i=ZU(e);iw&&(i=i.concat(iw(e)));for(var s=rw(t),o=rw(e),a=0;a<i.length;++a){var l=i[a];if(!QU[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=e8(e,l);try{JU(t,l,u)}catch{}}}}return t}var n8=$x;const r8=Ys(n8);var i8=1,s8=4;function o8(t){return Yo(t,i8|s8)}function te(){return te=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},te.apply(this,arguments)}function Fx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function yr(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ow(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var wd=E.createContext(void 0);wd.displayName="FormikContext";var a8=wd.Provider,l8=wd.Consumer;function jx(){var t=E.useContext(wd);return t}var aw=function(e){return Array.isArray(e)&&e.length===0},ze=function(e){return typeof e=="function"},tl=function(e){return e!==null&&typeof e=="object"},u8=function(e){return String(Math.floor(Number(e)))===e},Nf=function(e){return Object.prototype.toString.call(e)==="[object String]"},Ux=function(e){return E.Children.count(e)===0},Af=function(e){return tl(e)&&ze(e.then)};function pe(t,e,n,r){r===void 0&&(r=0);for(var i=Ax(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function yn(t,e,n){for(var r=ew(t),i=r,s=0,o=Ax(e);s<o.length-1;s++){var a=o[s],l=pe(t,o.slice(0,s+1));if(l&&(tl(l)||Array.isArray(l)))i=i[a]=ew(l);else{var u=o[s+1];i=i[a]=u8(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function zx(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];tl(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},zx(a,e,n,r[o])):r[o]=e}return r}function c8(t,e){switch(e.type){case"SET_VALUES":return te({},t,{values:e.payload});case"SET_TOUCHED":return te({},t,{touched:e.payload});case"SET_ERRORS":return or(t.errors,e.payload)?t:te({},t,{errors:e.payload});case"SET_STATUS":return te({},t,{status:e.payload});case"SET_ISSUBMITTING":return te({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return te({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return te({},t,{values:yn(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return te({},t,{touched:yn(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return te({},t,{errors:yn(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return te({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return te({},t,{touched:zx(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return te({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return te({},t,{isSubmitting:!1});default:return t}}var Jr={},bl={};function d8(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,d=t.onSubmit,c=yr(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=te({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:d},c),p=E.useRef(f.initialValues),y=E.useRef(f.initialErrors||Jr),v=E.useRef(f.initialTouched||bl),S=E.useRef(f.initialStatus),m=E.useRef(!1),h=E.useRef({});E.useEffect(function(){return m.current=!0,function(){m.current=!1}},[]);var g=E.useState(0),_=g[1],x=E.useRef({values:f.initialValues,errors:f.initialErrors||Jr,touched:f.initialTouched||bl,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),C=x.current,T=E.useCallback(function(I){var N=x.current;x.current=c8(N,I),N!==x.current&&_(function(L){return L+1})},[]),b=E.useCallback(function(I,N){return new Promise(function(L,F){var V=f.validate(I,N);V==null?L(Jr):Af(V)?V.then(function(ee){L(ee||Jr)},function(ee){F(ee)}):L(V)})},[f.validate]),D=E.useCallback(function(I,N){var L=f.validationSchema,F=ze(L)?L(N):L,V=N&&F.validateAt?F.validateAt(N,I):h8(I,F);return new Promise(function(ee,Oe){V.then(function(){ee(Jr)},function(En){En.name==="ValidationError"?ee(f8(En)):Oe(En)})})},[f.validationSchema]),$=E.useCallback(function(I,N){return new Promise(function(L){return L(h.current[I].validate(N))})},[]),W=E.useCallback(function(I){var N=Object.keys(h.current).filter(function(F){return ze(h.current[F].validate)}),L=N.length>0?N.map(function(F){return $(F,pe(I,F))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(L).then(function(F){return F.reduce(function(V,ee,Oe){return ee==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ee&&(V=yn(V,N[Oe],ee)),V},{})})},[$]),Fe=E.useCallback(function(I){return Promise.all([W(I),f.validationSchema?D(I):{},f.validate?b(I):{}]).then(function(N){var L=N[0],F=N[1],V=N[2],ee=Ip.all([L,F,V],{arrayMerge:p8});return ee})},[f.validate,f.validationSchema,W,b,D]),we=At(function(I){return I===void 0&&(I=C.values),T({type:"SET_ISVALIDATING",payload:!0}),Fe(I).then(function(N){return m.current&&(T({type:"SET_ISVALIDATING",payload:!1}),T({type:"SET_ERRORS",payload:N})),N})});E.useEffect(function(){o&&m.current===!0&&or(p.current,f.initialValues)&&we(p.current)},[o,we]);var vt=E.useCallback(function(I){var N=I&&I.values?I.values:p.current,L=I&&I.errors?I.errors:y.current?y.current:f.initialErrors||{},F=I&&I.touched?I.touched:v.current?v.current:f.initialTouched||{},V=I&&I.status?I.status:S.current?S.current:f.initialStatus;p.current=N,y.current=L,v.current=F,S.current=V;var ee=function(){T({type:"RESET_FORM",payload:{isSubmitting:!!I&&!!I.isSubmitting,errors:L,touched:F,status:V,values:N,isValidating:!!I&&!!I.isValidating,submitCount:I&&I.submitCount&&typeof I.submitCount=="number"?I.submitCount:0}})};if(f.onReset){var Oe=f.onReset(C.values,Ey);Af(Oe)?Oe.then(ee):ee()}else ee()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);E.useEffect(function(){m.current===!0&&!or(p.current,f.initialValues)&&u&&(p.current=f.initialValues,vt(),o&&we(p.current))},[u,f.initialValues,vt,o,we]),E.useEffect(function(){u&&m.current===!0&&!or(y.current,f.initialErrors)&&(y.current=f.initialErrors||Jr,T({type:"SET_ERRORS",payload:f.initialErrors||Jr}))},[u,f.initialErrors]),E.useEffect(function(){u&&m.current===!0&&!or(v.current,f.initialTouched)&&(v.current=f.initialTouched||bl,T({type:"SET_TOUCHED",payload:f.initialTouched||bl}))},[u,f.initialTouched]),E.useEffect(function(){u&&m.current===!0&&!or(S.current,f.initialStatus)&&(S.current=f.initialStatus,T({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var Vi=At(function(I){if(h.current[I]&&ze(h.current[I].validate)){var N=pe(C.values,I),L=h.current[I].validate(N);return Af(L)?(T({type:"SET_ISVALIDATING",payload:!0}),L.then(function(F){return F}).then(function(F){T({type:"SET_FIELD_ERROR",payload:{field:I,value:F}}),T({type:"SET_ISVALIDATING",payload:!1})})):(T({type:"SET_FIELD_ERROR",payload:{field:I,value:L}}),Promise.resolve(L))}else if(f.validationSchema)return T({type:"SET_ISVALIDATING",payload:!0}),D(C.values,I).then(function(F){return F}).then(function(F){T({type:"SET_FIELD_ERROR",payload:{field:I,value:pe(F,I)}}),T({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Xr=E.useCallback(function(I,N){var L=N.validate;h.current[I]={validate:L}},[]),wn=E.useCallback(function(I){delete h.current[I]},[]),O=At(function(I,N){T({type:"SET_TOUCHED",payload:I});var L=N===void 0?i:N;return L?we(C.values):Promise.resolve()}),M=E.useCallback(function(I){T({type:"SET_ERRORS",payload:I})},[]),z=At(function(I,N){var L=ze(I)?I(C.values):I;T({type:"SET_VALUES",payload:L});var F=N===void 0?n:N;return F?we(L):Promise.resolve()}),X=E.useCallback(function(I,N){T({type:"SET_FIELD_ERROR",payload:{field:I,value:N}})},[]),Y=At(function(I,N,L){T({type:"SET_FIELD_VALUE",payload:{field:I,value:N}});var F=L===void 0?n:L;return F?we(yn(C.values,I,N)):Promise.resolve()}),nn=E.useCallback(function(I,N){var L=N,F=I,V;if(!Nf(I)){I.persist&&I.persist();var ee=I.target?I.target:I.currentTarget,Oe=ee.type,En=ee.name,kd=ee.id,Pd=ee.value,cI=ee.checked,yW=ee.outerHTML,Sy=ee.options,dI=ee.multiple;L=N||En||kd,F=/number|range/.test(Oe)?(V=parseFloat(Pd),isNaN(V)?"":V):/checkbox/.test(Oe)?g8(pe(C.values,L),cI,Pd):Sy&&dI?m8(Sy):Pd}L&&Y(L,F)},[Y,C.values]),Ze=At(function(I){if(Nf(I))return function(N){return nn(N,I)};nn(I)}),et=At(function(I,N,L){N===void 0&&(N=!0),T({type:"SET_FIELD_TOUCHED",payload:{field:I,value:N}});var F=L===void 0?i:L;return F?we(C.values):Promise.resolve()}),He=E.useCallback(function(I,N){I.persist&&I.persist();var L=I.target,F=L.name,V=L.id,ee=L.outerHTML,Oe=N||F||V;et(Oe,!0)},[et]),_t=At(function(I){if(Nf(I))return function(N){return He(N,I)};He(I)}),Zn=E.useCallback(function(I){ze(I)?T({type:"SET_FORMIK_STATE",payload:I}):T({type:"SET_FORMIK_STATE",payload:function(){return I}})},[]),rn=E.useCallback(function(I){T({type:"SET_STATUS",payload:I})},[]),Hi=E.useCallback(function(I){T({type:"SET_ISSUBMITTING",payload:I})},[]),er=At(function(){return T({type:"SUBMIT_ATTEMPT"}),we().then(function(I){var N=I instanceof Error,L=!N&&Object.keys(I).length===0;if(L){var F;try{if(F=rI(),F===void 0)return}catch(V){throw V}return Promise.resolve(F).then(function(V){return m.current&&T({type:"SUBMIT_SUCCESS"}),V}).catch(function(V){if(m.current)throw T({type:"SUBMIT_FAILURE"}),V})}else if(m.current&&(T({type:"SUBMIT_FAILURE"}),N))throw I})}),sn=At(function(I){I&&I.preventDefault&&ze(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&ze(I.stopPropagation)&&I.stopPropagation(),er().catch(function(N){console.warn("Warning: An unhandled error was caught from submitForm()",N)})}),Ey={resetForm:vt,validateForm:we,validateField:Vi,setErrors:M,setFieldError:X,setFieldTouched:et,setFieldValue:Y,setStatus:rn,setSubmitting:Hi,setTouched:O,setValues:z,setFormikState:Zn,submitForm:er},rI=At(function(){return d(C.values,Ey)}),iI=At(function(I){I&&I.preventDefault&&ze(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&ze(I.stopPropagation)&&I.stopPropagation(),vt()}),sI=E.useCallback(function(I){return{value:pe(C.values,I),error:pe(C.errors,I),touched:!!pe(C.touched,I),initialValue:pe(p.current,I),initialTouched:!!pe(v.current,I),initialError:pe(y.current,I)}},[C.errors,C.touched,C.values]),oI=E.useCallback(function(I){return{setValue:function(L,F){return Y(I,L,F)},setTouched:function(L,F){return et(I,L,F)},setError:function(L){return X(I,L)}}},[Y,et,X]),aI=E.useCallback(function(I){var N=tl(I),L=N?I.name:I,F=pe(C.values,L),V={name:L,value:F,onChange:Ze,onBlur:_t};if(N){var ee=I.type,Oe=I.value,En=I.as,kd=I.multiple;ee==="checkbox"?Oe===void 0?V.checked=!!F:(V.checked=!!(Array.isArray(F)&&~F.indexOf(Oe)),V.value=Oe):ee==="radio"?(V.checked=F===Oe,V.value=Oe):En==="select"&&kd&&(V.value=V.value||[],V.multiple=!0)}return V},[_t,Ze,C.values]),bd=E.useMemo(function(){return!or(p.current,C.values)},[p.current,C.values]),lI=E.useMemo(function(){return typeof a<"u"?bd?C.errors&&Object.keys(C.errors).length===0:a!==!1&&ze(a)?a(f):a:C.errors&&Object.keys(C.errors).length===0},[a,bd,C.errors,f]),uI=te({},C,{initialValues:p.current,initialErrors:y.current,initialTouched:v.current,initialStatus:S.current,handleBlur:_t,handleChange:Ze,handleReset:iI,handleSubmit:sn,resetForm:vt,setErrors:M,setFormikState:Zn,setFieldTouched:et,setFieldValue:Y,setFieldError:X,setStatus:rn,setSubmitting:Hi,setTouched:O,setValues:z,submitForm:er,validateForm:we,validateField:Vi,isValid:lI,dirty:bd,unregisterField:wn,registerField:Xr,getFieldProps:aI,getFieldMeta:sI,getFieldHelpers:oI,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return uI}function hy(t){var e=d8(t),n=t.component,r=t.children,i=t.render,s=t.innerRef;return E.useImperativeHandle(s,function(){return e}),E.createElement(a8,{value:e},n?E.createElement(n,e):i?i(e):r?ze(r)?r(e):Ux(r)?null:E.Children.only(r):null)}function f8(t){var e={};if(t.inner){if(t.inner.length===0)return yn(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;pe(e,o.path)||(e=yn(e,o.path,o.message))}}return e}function h8(t,e,n,r){n===void 0&&(n=!1);var i=Np(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Np(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||R0(i)?Np(i):i!==""?i:void 0}):R0(t[r])?e[r]=Np(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function p8(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?Ip(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=Ip(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function m8(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function g8(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var y8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?E.useLayoutEffect:E.useEffect;function At(t){var e=E.useRef(t);return y8(function(){e.current=t}),E.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}function Ed(t){var e=t.validate,n=t.name,r=t.render,i=t.children,s=t.as,o=t.component,a=t.className,l=yr(t,["validate","name","render","children","as","component","className"]),u=jx(),d=yr(u,["validate","validationSchema"]),c=d.registerField,f=d.unregisterField;E.useEffect(function(){return c(n,{validate:e}),function(){f(n)}},[c,f,n,e]);var p=d.getFieldProps(te({name:n},l)),y=d.getFieldMeta(n),v={field:p,form:d};if(r)return r(te({},v,{meta:y}));if(ze(i))return i(te({},v,{meta:y}));if(o){if(typeof o=="string"){var S=l.innerRef,m=yr(l,["innerRef"]);return E.createElement(o,te({ref:S},p,m,{className:a}),i)}return E.createElement(o,te({field:p,form:d},l,{className:a}),i)}var h=s||"input";if(typeof h=="string"){var g=l.innerRef,_=yr(l,["innerRef"]);return E.createElement(h,te({ref:g},p,_,{className:a}),i)}return E.createElement(h,te({},p,l,{className:a}),i)}var Sd=E.forwardRef(function(t,e){var n=t.action,r=yr(t,["action"]),i=n??"#",s=jx(),o=s.handleReset,a=s.handleSubmit;return E.createElement("form",te({onSubmit:a,ref:e,onReset:o,action:i},r))});Sd.displayName="Form";function v8(t){var e=function(i){return E.createElement(l8,null,function(s){return E.createElement(t,te({},i,{formik:s}))})},n=t.displayName||t.name||t.constructor&&t.constructor.name||"Component";return e.WrappedComponent=t,e.displayName="FormikConnect("+n+")",r8(e,t)}var _8=function(e,n,r){var i=Oi(e),s=i[n];return i.splice(n,1),i.splice(r,0,s),i},w8=function(e,n,r){var i=Oi(e),s=i[n];return i[n]=i[r],i[r]=s,i},Df=function(e,n,r){var i=Oi(e);return i.splice(n,0,r),i},E8=function(e,n,r){var i=Oi(e);return i[n]=r,i},Oi=function(e){if(e){if(Array.isArray(e))return[].concat(e);var n=Object.keys(e).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(te({},e,{length:n+1}))}else return[]},lw=function(e,n){var r=typeof e=="function"?e:n;return function(i){if(Array.isArray(i)||tl(i)){var s=Oi(i);return r(s)}return i}},S8=function(t){Fx(e,t);function e(r){var i;return i=t.call(this,r)||this,i.updateArrayField=function(s,o,a){var l=i.props,u=l.name,d=l.formik.setFormikState;d(function(c){var f=lw(a,s),p=lw(o,s),y=yn(c.values,u,s(pe(c.values,u))),v=a?f(pe(c.errors,u)):void 0,S=o?p(pe(c.touched,u)):void 0;return aw(v)&&(v=void 0),aw(S)&&(S=void 0),te({},c,{values:y,errors:a?yn(c.errors,u,v):c.errors,touched:o?yn(c.touched,u,S):c.touched})})},i.push=function(s){return i.updateArrayField(function(o){return[].concat(Oi(o),[o8(s)])},!1,!1)},i.handlePush=function(s){return function(){return i.push(s)}},i.swap=function(s,o){return i.updateArrayField(function(a){return w8(a,s,o)},!0,!0)},i.handleSwap=function(s,o){return function(){return i.swap(s,o)}},i.move=function(s,o){return i.updateArrayField(function(a){return _8(a,s,o)},!0,!0)},i.handleMove=function(s,o){return function(){return i.move(s,o)}},i.insert=function(s,o){return i.updateArrayField(function(a){return Df(a,s,o)},function(a){return Df(a,s,null)},function(a){return Df(a,s,null)})},i.handleInsert=function(s,o){return function(){return i.insert(s,o)}},i.replace=function(s,o){return i.updateArrayField(function(a){return E8(a,s,o)},!1,!1)},i.handleReplace=function(s,o){return function(){return i.replace(s,o)}},i.unshift=function(s){var o=-1;return i.updateArrayField(function(a){var l=a?[s].concat(a):[s];return o=l.length,l},function(a){return a?[null].concat(a):[null]},function(a){return a?[null].concat(a):[null]}),o},i.handleUnshift=function(s){return function(){return i.unshift(s)}},i.handleRemove=function(s){return function(){return i.remove(s)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(ow(i)),i.pop=i.pop.bind(ow(i)),i}var n=e.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!or(pe(i.formik.values,i.name),pe(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var s;return this.updateArrayField(function(o){var a=o?Oi(o):[];return s||(s=a[i]),ze(a.splice)&&a.splice(i,1),ze(a.every)&&a.every(function(l){return l===void 0})?[]:a},!0,!0),s},n.pop=function(){var i;return this.updateArrayField(function(s){var o=s.slice();return i||(i=o&&o.pop&&o.pop()),o},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},s=this.props,o=s.component,a=s.render,l=s.children,u=s.name,d=s.formik,c=yr(d,["validate","validationSchema"]),f=te({},i,{form:c,name:u});return o?E.createElement(o,f):a?a(f):l?typeof l=="function"?l(f):Ux(l)?null:E.Children.only(l):null},e}(E.Component);S8.defaultProps={validateOnChange:!0};var C8=function(t){Fx(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.shouldComponentUpdate=function(i){return pe(this.props.formik.errors,this.props.name)!==pe(i.formik.errors,this.props.name)||pe(this.props.formik.touched,this.props.name)!==pe(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,s=i.component,o=i.formik,a=i.render,l=i.children,u=i.name,d=yr(i,["component","formik","render","children","name"]),c=pe(o.touched,u),f=pe(o.errors,u);return c&&f?a?ze(a)?a(f):null:l?ze(l)?l(f):null:s?E.createElement(s,d,f):f:null},e}(E.Component),Is=v8(C8);const T8=$i`
        0% {
      background-color: rgb(0, 0, 0, 0.4);
      opacity: 0.3;
    }
    100% {
      background-color: rgb(0, 0, 0, 0.8);
      opacity: 1;
    }
`,x8=$i`
        0% {
      background-color: rgb(0, 0, 0, 0.8);
      opacity: 1;
    }
    100% {
      background-color: rgb(0, 0, 0, 0.4);
      opacity: 0;
    }
`,I8=t=>{switch(t.$closing){case!1:return Pi`
        animation: ${T8} 350ms ease 1 normal forwards;
      `;case!0:return Pi`
        animation: ${x8} 350ms 350ms ease 1 normal forwards;
      `;default:return null}},b8=$i`
  0% {
      opacity: 0.3;
      transform: scale(0.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  `,k8=$i`
  0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  `,P8=t=>{switch(t.$closing){case!1:return Pi`
        animation: ${b8} 350ms 350ms ease 1 normal forwards;
      `;case!0:return Pi`
        animation: ${k8} 350ms ease 1 normal forwards;
      `;default:return null}},R8=R.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: scroll;
  z-index: 100;
  ${I8}
`,O8=R.div`
  opacity: 0;
  ${P8}
`,N8=R.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,py=({children:t,onClose:e})=>{const[n,r]=E.useState(!1);document.body.style.overflow="hidden";const i=E.useCallback(s=>{(s.code==="Escape"||s.target===s.currentTarget)&&(r(!0),setTimeout(()=>{r(!1),document.body.style.overflow="auto",e()},750))},[e]);return E.useEffect(()=>(document.body.style.overflow="hidden",window.addEventListener("keydown",i),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",i)}),[i]),OE.createPortal(w.jsx(R8,{id:"modalWrap",$closing:n,onClick:i,children:w.jsx(N8,{children:w.jsx(O8,{$closing:n,children:t})})}),document.querySelector("#root"))},A8=R.div`
  position: relative;
  max-width: 566px;
  height: 506px;
  background-color: #fff;
  padding: 4.444vw;
  border-radius: 30px;
  background: rgb(255, 255, 255);
`,D8=R.h3`
  color: ${Ce.BLACK_TEXT};
  //font-size: 40px;
  font-size: calc(28px + (40 - 28) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  text-align: start;
  margin-bottom: 20px;
`,L8=R.p`
  color: ${Ce.BLACK_TEXT};
  font-size: 16px;
  font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  margin-bottom: 40px;
`,uw=R(Ed)`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  width: 100%;
  height: 54px;
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  padding: 16px 18px 16px 18px;
  &::placeholder {
    color: ${Ce.BLACK_TEXT};
  }
  margin-bottom: ${t=>t.marginbottom||"18px"};
`,M8=R.button`
  width: 100%;
  height: 60px;
  border-radius: 12px;
  background-color: ${Ce.YELLOW_BUTTON};
  &:hover {
    background-color: ${Ce.YELLOW_HOVER_BUTTON};
  }
  border: none;
  color: ${Ce.BLACK_TEXT};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
`,$8=R.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`,F8=R.div`
  position: relative;
`,j8=R.button`
  position: absolute;
  background: none;
  border: none;
  right: 17px;
  bottom: 117px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`,U8=R.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 55px;
`,z8=R.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 128px;
`;function Wi(t){this._maxSize=t,this.clear()}Wi.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Wi.prototype.get=function(t){return this._values[t]};Wi.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var W8=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Wx=/^\d+$/,B8=/^\d/,V8=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,H8=/^\s*(['"]?)(.*?)(\1)\s*$/,my=512,cw=new Wi(my),dw=new Wi(my),fw=new Wi(my),mi={Cache:Wi,split:Ap,normalizePath:Lf,setter:function(t){var e=Lf(t);return dw.get(t)||dw.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=Lf(t);return fw.get(t)||fw.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(gy(n)||Wx.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){G8(Array.isArray(t)?t:Ap(t),e,n)}};function Lf(t){return cw.get(t)||cw.set(t,Ap(t).map(function(e){return e.replace(H8,"$2")}))}function Ap(t){return t.match(W8)||[""]}function G8(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(Y8(i)&&(i='"'+i+'"'),a=gy(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function gy(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function K8(t){return t.match(B8)&&!t.match(Wx)}function q8(t){return V8.test(t)}function Y8(t){return!gy(t)&&(K8(t)||q8(t))}const Q8=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Cd=t=>t.match(Q8)||[],Td=t=>t[0].toUpperCase()+t.slice(1),yy=(t,e)=>Cd(t).join(e).toLowerCase(),Bx=t=>Cd(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),X8=t=>Td(Bx(t)),J8=t=>yy(t,"_"),Z8=t=>yy(t,"-"),ez=t=>Td(yy(t," ")),tz=t=>Cd(t).map(Td).join(" ");var Mf={words:Cd,upperFirst:Td,camelCase:Bx,pascalCase:X8,snakeCase:J8,kebabCase:Z8,sentenceCase:ez,titleCase:tz},vy={exports:{}};vy.exports=function(t){return Vx(nz(t),t)};vy.exports.array=Vx;function Vx(t,e){var n=t.length,r=new Array(n),i={},s=n,o=rz(e),a=iz(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,d,c){if(c.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[d]){i[d]=!0;var p=o.get(u)||new Set;if(p=Array.from(p),d=p.length){c.add(u);do{var y=p[--d];l(y,a.get(y),c)}while(d);c.delete(u)}r[--n]=u}}}function nz(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function rz(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function iz(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var sz=vy.exports;const oz=Ys(sz),az=Object.prototype.toString,lz=Error.prototype.toString,uz=RegExp.prototype.toString,cz=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",dz=/^Symbol\((.*)\)(.*)$/;function fz(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function hw(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return fz(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return cz.call(t).replace(dz,"Symbol($1)");const r=az.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+lz.call(t)+"]":r==="RegExp"?uz.call(t):null}function Ar(t,e){let n=hw(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=hw(this[r],e);return s!==null?s:i},2)}function Hx(t){return t==null?[]:[].concat(t)}let Gx,Kx,qx,hz=/\$\{\s*(\w+)\s*\}/g;Gx=Symbol.toStringTag;class pw{constructor(e,n,r,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[Gx]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Hx(e).forEach(s=>{if(lt.isError(s)){this.errors.push(...s.errors);const o=s.inner.length?s.inner:[s];this.inner.push(...o)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}Kx=Symbol.hasInstance;qx=Symbol.toStringTag;class lt extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(hz,(i,s)=>Ar(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){const o=new pw(e,n,r,i);if(s)return o;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[qx]="Error",this.name=o.name,this.message=o.message,this.type=o.type,this.value=o.value,this.path=o.path,this.errors=o.errors,this.inner=o.inner,Error.captureStackTrace&&Error.captureStackTrace(this,lt)}static[Kx](e){return pw[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let ln={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Ar(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${Ar(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${Ar(n,!0)}\``+i}},ot={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},pz={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Dp={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},mz={isValue:"${path} field must be ${value}"},Lp={noUnknown:"${path} field has unspecified keys: ${unknown}"},gz={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},yz={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Ar(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Ar(n,!0)}\``}return lt.formatError(ln.notType,t)}};Object.assign(Object.create(null),{mixed:ln,string:ot,number:pz,date:Dp,object:Lp,array:gz,boolean:mz,tuple:yz});const _y=t=>t&&t.__isYupSchema__;class hc{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new hc(e,(a,l)=>{var u;let d=o(...a)?i:s;return(u=d==null?void 0:d(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!_y(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const kl={context:"$",value:"."};class Bi{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===kl.context,this.isValue=this.key[0]===kl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?kl.context:this.isValue?kl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&mi.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}Bi.prototype.__isYupRef=!0;const ci=t=>t==null;function Yi(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:d,params:c,message:f,skipAbsent:p}=t;let{parent:y,context:v,abortEarly:S=o.spec.abortEarly,disableStackTrace:m=o.spec.disableStackTrace}=i;function h(W){return Bi.isRef(W)?W.getValue(n,y,v):W}function g(W={}){const Fe=Object.assign({value:n,originalValue:s,label:o.spec.label,path:W.path||r,spec:o.spec,disableStackTrace:W.disableStackTrace||m},c,W.params);for(const vt of Object.keys(Fe))Fe[vt]=h(Fe[vt]);const we=new lt(lt.formatError(W.message||f,Fe),n,Fe.path,W.type||u,Fe.disableStackTrace);return we.params=Fe,we}const _=S?a:l;let x={path:r,parent:y,type:u,from:i.from,createError:g,resolve:h,options:i,originalValue:s,schema:o};const C=W=>{lt.isError(W)?_(W):W?l(null):_(g())},T=W=>{lt.isError(W)?_(W):a(W)};if(p&&ci(n))return C(!0);let D;try{var $;if(D=d.call(x,n,x),typeof(($=D)==null?void 0:$.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${x.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(D).then(C,T)}}catch(W){T(W);return}C(D)}return e.OPTIONS=t,e}function vz(t,e,n,r=n){let i,s,o;return e?(mi.forEach(e,(a,l,u)=>{let d=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let c=t.type==="tuple",f=u?parseInt(d,10):0;if(t.innerType||c){if(c&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[f],t=c?t.spec.types[f]:t.innerType}if(!u){if(!t.fields||!t.fields[d])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[d],t=t.fields[d]}s=d,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class pc extends Set{describe(){const e=[];for(const n of this.values())e.push(Bi.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new pc(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function hs(t,e=new Map){if(_y(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=hs(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,hs(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(hs(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=hs(i,e)}else throw Error(`Unable to clone ${t}`);return n}class vn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new pc,this._blacklist=new pc,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(ln.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=hs(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&ci(s))return s;let o=Ar(e),a=Ar(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let d of Object.values(this.internalTests))d&&u.push(d);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,d=>{if(d.length)return i(d,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,d=v=>{i||(i=!0,n(v,o))},c=v=>{i||(i=!0,r(v,o))},f=s.length,p=[];if(!f)return c([]);let y={value:o,originalValue:a,path:l,options:u,schema:this};for(let v=0;v<s.length;v++){const S=s[v];S(y,d,function(h){h&&(Array.isArray(h)?p.push(...h):p.push(h)),--f<=0&&c(p)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const d=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${l?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(c,f,p)=>this.resolve(d)._validate(u,d,f,p)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,u)=>{lt.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new lt(l,u,void 0,void 0,s)):o(u)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw lt.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new lt(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(lt.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(lt.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):hs(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=Yi({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=Yi({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=ln.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=ln.notNull){return this.nullability(!1,e)}required(e=ln.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=ln.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Yi(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=Hx(e).map(s=>new Bi(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new hc(i,n):hc.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=Yi({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=ln.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Yi({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=ln.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Yi({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,d)=>d.findIndex(c=>c.name===l.name)===u)}}}vn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])vn.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=vz(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])vn.prototype[t]=vn.prototype.oneOf;for(const t of["not","nope"])vn.prototype[t]=vn.prototype.notOneOf;const _z=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function wz(t){const e=Mp(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let n=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(n=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(n=0-n)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+n,e.second,e.millisecond)}function Mp(t){var e,n;const r=_z.exec(t);return r?{year:Tn(r[1]),month:Tn(r[2],1)-1,day:Tn(r[3],1),hour:Tn(r[4]),minute:Tn(r[5]),second:Tn(r[6]),millisecond:r[7]?Tn(r[7].substring(0,3)):0,precision:(e=(n=r[7])==null?void 0:n.length)!=null?e:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:Tn(r[10]),minuteOffset:Tn(r[11])}:null}function Tn(t,e=0){return Number(t)||e}let Ez=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Sz=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Cz=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Tz="^\\d{4}-\\d{2}-\\d{2}",xz="\\d{2}:\\d{2}:\\d{2}",Iz="(([+-]\\d{2}(:?\\d{2})?)|Z)",bz=new RegExp(`${Tz}T${xz}(\\.\\d+)?${Iz}$`),kz=t=>ci(t)||t===t.trim(),Pz={}.toString();function fn(){return new Yx}class Yx extends vn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===Pz?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||ln.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=ot.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=ot.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=ot.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||ot.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=ot.email){return this.matches(Ez,{name:"email",message:e,excludeEmptyString:!0})}url(e=ot.url){return this.matches(Sz,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=ot.uuid){return this.matches(Cz,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let n="",r,i;return e&&(typeof e=="object"?{message:n="",allowOffset:r=!1,precision:i=void 0}=e:n=e),this.matches(bz,{name:"datetime",message:n||ot.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||ot.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:s=>{if(!s||r)return!0;const o=Mp(s);return o?!!o.z:!1}}).test({name:"datetime_precision",message:n||ot.datetime_precision,params:{precision:i},skipAbsent:!0,test:s=>{if(!s||i==null)return!0;const o=Mp(s);return o?o.precision===i:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=ot.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:kz})}lowercase(e=ot.lowercase){return this.transform(n=>ci(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ci(n)||n===n.toLowerCase()})}uppercase(e=ot.uppercase){return this.transform(n=>ci(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ci(n)||n===n.toUpperCase()})}}fn.prototype=Yx.prototype;let Rz=new Date(""),Oz=t=>Object.prototype.toString.call(t)==="[object Date]";class xd extends vn{constructor(){super({type:"date",check(e){return Oz(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=wz(e),isNaN(e)?xd.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(Bi.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=Dp.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=Dp.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}xd.INVALID_DATE=Rz;xd.prototype;function Nz(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=mi.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),Bi.isRef(a)&&a.isSibling?s(a.path,o):_y(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return oz.array(Array.from(r),n).reverse()}function mw(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function Qx(t){return(e,n)=>mw(t,e)-mw(t,n)}const Az=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function su(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=su(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=su(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(su)}):"optional"in t?t.optional():t}const Dz=(t,e)=>{const n=[...mi.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=mi.getter(mi.join(n),!0)(t);return!!(i&&r in i)};let gw=t=>Object.prototype.toString.call(t)==="[object Object]";function Lz(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const Mz=Qx([]);function Id(t){return new Xx(t)}class Xx extends vn{constructor(e){super({type:"object",check(n){return gw(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=Mz,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(c=>!this._nodes.includes(c))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),d=!1;for(const c of a){let f=s[c],p=c in i;if(f){let y,v=i[c];u.path=(n.path?`${n.path}.`:"")+c,f=f.resolve({value:v,context:n.context,parent:l});let S=f instanceof vn?f.spec:void 0,m=S==null?void 0:S.strict;if(S!=null&&S.strip){d=d||c in i;continue}y=!n.__validating||!m?f.cast(i[c],u):i[c],y!==void 0&&(l[c]=y)}else p&&!o&&(l[c]=i[c]);(p!==c in l||l[c]!==i[c])&&(d=!0)}return d?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!gw(u)){i(l,u);return}o=o||u;let d=[];for(let c of this._nodes){let f=this.fields[c];!f||Bi.isRef(f)||d.push(f.asNestedTest({options:n,key:c,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:d,value:u,originalValue:o,options:n},r,c=>{i(c.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=Nz(e,n),r._sortErrors=Qx(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return su(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=mi.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return Dz(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(Az)}noUnknown(e=!0,n=Lp.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=Lz(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=Lp.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(Mf.camelCase)}snakeCase(){return this.transformKeys(Mf.snakeCase)}constantCase(){return this.transformKeys(e=>Mf.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}Id.prototype=Xx.prototype;const wy=()=>w.jsxs("svg",{width:"32.000000",height:"32.000000",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[w.jsx("desc",{children:"Created with Pixso."}),w.jsx("defs",{children:w.jsx("clipPath",{id:"clip4_589",children:w.jsx("rect",{id:"x",width:"32.000000",height:"32.000000",fill:"white",fillOpacity:"0"})})}),w.jsx("rect",{id:"x",width:"32.000000",height:"32.000000",fill:"#FFFFFF",fillOpacity:"0"}),w.jsxs("g",{clipPath:"url(#clip4_589)",children:[w.jsx("path",{id:"Vector",d:"M24 8L8 24",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.5",strokeLinejoin:"round",strokeLinecap:"round"}),w.jsx("path",{id:"Vector",d:"M8 8L24 24",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.5",strokeLinejoin:"round",strokeLinecap:"round"})]})]}),Jx=()=>w.jsxs("svg",{width:"20.000000",height:"20.000000",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[w.jsx("desc",{children:"Created with Pixso."}),w.jsx("defs",{children:w.jsx("clipPath",{id:"clip4_621",children:w.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"white",fillOpacity:"0"})})}),w.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"#FFFFFF",fillOpacity:"0"}),w.jsx("g",{clipPath:"url(#clip4_621)",children:w.jsx("path",{id:"Vector",d:"M14.95 14.95C13.5254 16.0358 11.7908 16.6373 10 16.6666C4.1665 16.6666 0.833252 10 0.833252 10C1.86987 8.06824 3.30762 6.38049 5.0498 5.04993M8.25 3.53333C8.82349 3.39905 9.41089 3.33191 10 3.33325C15.8333 3.33325 19.1665 10 19.1665 10C18.6606 10.9463 18.0574 11.8372 17.3667 12.6583M11.7666 11.7666C11.5376 12.0122 11.2617 12.2092 10.9551 12.3458C10.6484 12.4825 10.3174 12.556 9.98169 12.5619C9.646 12.5679 9.3125 12.5061 9.00122 12.3804C8.68994 12.2546 8.40723 12.0675 8.16968 11.8301C7.93237 11.5927 7.74536 11.3099 7.61963 10.9987C7.49365 10.6873 7.43213 10.3539 7.43799 10.0182C7.44385 9.6825 7.51733 9.35144 7.65405 9.0448C7.79053 8.73816 7.98755 8.46216 8.23315 8.23328",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"})})]}),Zx=()=>w.jsxs("svg",{width:"20.000000",height:"20.000000",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[w.jsx("desc",{children:"Created with Pixso."}),w.jsx("defs",{children:w.jsx("clipPath",{id:"clip4_621",children:w.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"white",fillOpacity:"0"})})}),w.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"#FFFFFF",fillOpacity:"0"}),w.jsxs("g",{clipPath:"url(#clip4_621)",children:[w.jsx("path",{id:"Vector",d:"M14.95 14.95C13.5254 16.0358 11.7908 16.6373 10 16.6666C4.1665 16.6666 0.833252 10 0.833252 10C1.86987 8.06824 3.30762 6.38049 5.0498 5.04993M8.25 3.53333C8.82349 3.39905 9.41089 3.33191 10 3.33325C15.8333 3.33325 19.1665 10 19.1665 10C18.6606 10.9463 18.0574 11.8372 17.3667 12.6583M11.7666 11.7666C11.5376 12.0122 11.2617 12.2092 10.9551 12.3458C10.6484 12.4825 10.3174 12.556 9.98169 12.5619C9.646 12.5679 9.3125 12.5061 9.00122 12.3804C8.68994 12.2546 8.40723 12.0675 8.16968 11.8301C7.93237 11.5927 7.74536 11.3099 7.61963 10.9987C7.49365 10.6873 7.43213 10.3539 7.43799 10.0182C7.44385 9.6825 7.51733 9.35144 7.65405 9.0448C7.79053 8.73816 7.98755 8.46216 8.23315 8.23328",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"}),w.jsx("path",{id:"Vector",d:"M0.833252 0.833374L19.1665 19.1667",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round",strokeLinecap:"round"})]})]}),$z={email:"",password:""},Fz=Id().shape({email:fn().matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,"Incorret email").required("Be sure to enter your email"),password:fn().min(8,"Password must contain minimum 8 symbols").max(64,"Password must contain maximum 64 symbols").required("Be sure to enter your password")}),eI=({onClose:t})=>{const[e,n]=E.useState(!1),r=Dc(),i=(o,{resetForm:a})=>{r(dC({value:o})),a(),t()},s=({name:o})=>{switch(o){case"email":return w.jsx(Is,{name:o,component:U8});case"password":return w.jsx(Is,{name:o,component:z8})}};return w.jsx(py,{onClose:t,children:w.jsx(A8,{children:w.jsx(hy,{initialValues:$z,validationSchema:Fz,onSubmit:i,children:w.jsxs(Sd,{children:[w.jsx($8,{onClick:t,children:w.jsx(wy,{strokeWidth:"2.5"})}),w.jsx(D8,{children:"Log In"}),w.jsx(L8,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),w.jsxs(F8,{children:[w.jsx(uw,{type:"text",name:"email",placeholder:"Email"}),w.jsx(s,{name:"email"}),w.jsx(uw,{type:e?"text":"password",name:"password",placeholder:"Password",marginbottom:"40px"}),w.jsx(s,{name:"password"}),w.jsx(M8,{type:"submit",children:"Log In"}),w.jsx(j8,{type:"button",onClick:()=>{n(!e)},children:e?w.jsx(Jx,{}):w.jsx(Zx,{})})]})]})})})})};eI.propTypes={onClose:zr.func.isRequired,name:zr.string};const jz=R.div`
  position: relative;
  max-width: 566px;
  background-color: #fff;
  padding: 64px 4.444vw 64px 4.444vw;
  border-radius: 30px;
  background: rgb(255, 255, 255);
`,Uz=R.h3`
  color: ${Ce.BLACK_TEXT};
  //font-size: 40px;
  font-size: calc(28px + (40 - 28) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  text-align: start;
  margin-bottom: 20px;
`,zz=R.p`
  color: ${Ce.BLACK_TEXT};
  //font-size: 16px;
  font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  margin-bottom: 40px;
`,$f=R(Ed)`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  width: 100%;
  height: 54px;
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  padding: 16px 18px 16px 18px;
  &::placeholder {
    color: ${Ce.BLACK_TEXT};
  }
`,Wz=R.button`
  width: 100%;
  height: 60px;
  border-radius: 12px;
  background-color: ${Ce.YELLOW_BUTTON};
  &:hover {
    background-color: ${Ce.YELLOW_HOVER_BUTTON};
  }
  border: none;
  color: ${Ce.BLACK_TEXT};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
`,Bz=R.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`,Vz=R.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 18px;
  margin-bottom: 40px;
`,Hz=R.button`
  position: absolute;
  background: none;
  border: none;
  right: 17px;
  bottom: 17px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`,Gz=R.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: -16px;
`,Kz=R.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 55px;
`,qz=R.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 128px;
`,Yz={name:"",email:"",password:""},Qz=Id().shape({name:fn().required("Be sure to enter your name"),email:fn().matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,"Incorret email").required("Be sure to enter your email"),password:fn().min(8,"Password must contain minimum 8 symbols").max(64,"Password must contain maximum 64 symbols").required("Be sure to enter your password")}),tI=({onClose:t})=>{const[e,n]=E.useState(!1),r=Dc(),i=o=>{r(cC({value:o})),t()},s=({name:o})=>{switch(o){case"name":return w.jsx(Is,{name:o,component:Gz});case"email":return w.jsx(Is,{name:o,component:Kz});case"password":return w.jsx(Is,{name:o,component:qz})}};return w.jsx(py,{onClose:t,children:w.jsx(jz,{children:w.jsx(hy,{initialValues:Yz,validationSchema:Qz,onSubmit:i,children:w.jsxs(Sd,{children:[w.jsx(Bz,{onClick:t,children:w.jsx(wy,{strokeWidth:"2.5"})}),w.jsx(Uz,{children:"Registration"}),w.jsxs(zz,{children:["Thank you for your interest in our platform! In order to register",w.jsx("wbr",{}),", we need some information. Please provide us with the following information"]}),w.jsxs(Vz,{children:[w.jsx($f,{type:"text",name:"name",placeholder:"Name"}),w.jsx(s,{name:"name"}),w.jsx($f,{type:"text",name:"email",placeholder:"Email"}),w.jsx(s,{name:"email"}),w.jsx($f,{type:e?"text":"password",name:"password",placeholder:"Password"}),w.jsx(s,{name:"password"}),w.jsx(Hz,{type:"button",onClick:()=>{n(!e)},children:e?w.jsx(Jx,{}):w.jsx(Zx,{})})]}),w.jsx(Wz,{type:"submit",children:"Sign Up"})]})})})})};tI.propTypes={onClose:zr.func.isRequired,name:zr.string};const Xz=R.div`
  max-width: 600px;
  padding: 64px;
  background-color: ${Ce.WHITE};
  border-radius: 30px;
`,Jz=R.div`
  margin-block-end: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    line-height: 1.375;
  }
`,To=R(Ed)`
  margin-inline-end: 8px;
  cursor: pointer;
  position: relative;
  top: 5px;
  block-size: 22px;
  inline-size: 22px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    inline-size: 24px;
    block-size: 24px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 2px solid rgba(18, 20, 23, 0.1);
  }

  &:checked::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    inline-size: 24px;
    block-size: 24px;
    border-radius: 50%;
    border: 2px solid #f4c550;
    transform: translate(-50%, -50%);
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    inline-size: 12px;
    block-size: 12px;
    border-radius: 50%;
    background-color: #f4c550;
    transform: translate(-50%, -50%);
    visibility: visible;
  }
`,Ff=R(Ed)`
  inline-size: 100%;
  margin-block-end: 18px;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  outline: none;
`,jf=R(Is)`
  font-size: 12px;
  color: red;
  margin-block-end: 18px;
`,Zz=R.button`
  padding-block: 16px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: #f4c550;
  transition: background-color 350ms linear;
  width: 100%;
  margin-top: 22px;

  &:hover {
    background-color: #ffdc86;
  }

  span {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.555;
    white-space: nowrap;
  }
`,eW=R.h1`
  color: rgb(18, 20, 23);
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`,tW=R.p`
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 20px;
`,nW=R.img`
  width: 44px;
  border-radius: 100%;
`,rW=R.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 40px;
`,iW=R.p`
  color: rgb(138, 138, 137);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`,sW=R.p`
  color: rgb(18, 20, 23);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,oW=R.h3`
  color: rgb(18, 20, 23);
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 20px;
`,aW=R.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`,SW=t=>t.teachers.teachersCard,CW=t=>t.teachers.favorite,lW=t=>t.teachers.card,uW={reason:"",name:"",email:"",phone:""},cW=Id().shape({reason:fn().required("Please choose a reason for learning English"),name:fn().min(3,"Minimum 3 characters").max(30,"Maximum 30 characters").required("Required"),email:fn().email("Invalid email address").required("Fill in the mandatory email field"),phone:fn().required("This is a required field").matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be digits and dashes.")}),dW=({onClose:t})=>{const{avatar_url:e,name:n,surname:r}=KE(lW),i=(s,{resetForm:o})=>{rg.success("Trial lesson successfully ordered."),o(),t()};return w.jsxs(w.Fragment,{children:[w.jsx(py,{onClose:t,children:w.jsx(Xz,{children:w.jsx(hy,{initialValues:uW,validationSchema:cW,onSubmit:i,children:w.jsxs(Sd,{children:[w.jsx(aW,{onClick:t,children:w.jsx(wy,{strokeWidth:"2.5"})}),w.jsx(eW,{children:"Book trial lesson"}),w.jsx(tW,{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),w.jsxs(rW,{children:[w.jsx(nW,{src:e,alt:"avatar"}),w.jsxs("div",{children:[w.jsx(iW,{children:"Your teacher"}),w.jsxs(sW,{children:[n," ",r]})]})]}),w.jsx(oW,{children:"What is your main reason for learning English?"}),w.jsxs(Jz,{children:[w.jsxs("label",{children:[w.jsx(To,{type:"radio",name:"reason",value:"CaB"}),"Career and business"]}),w.jsxs("label",{children:[w.jsx(To,{type:"radio",name:"reason",value:"LfK"}),"Lesson for kids"]}),w.jsxs("label",{children:[w.jsx(To,{type:"radio",name:"reason",value:"LA"}),"Living abroad"]}),w.jsxs("label",{children:[w.jsx(To,{type:"radio",name:"reason",value:"EaC"}),"Exams and coursework"]}),w.jsxs("label",{children:[w.jsx(To,{type:"radio",name:"reason",value:"fiv"}),"Culture, travel or hobby"]})]}),w.jsxs("label",{"aria-label":"Field for Full name",children:[w.jsx(Ff,{type:"text",name:"name",placeholder:"Name"}),w.jsx(jf,{name:"name",component:"div"})]}),w.jsxs("label",{"aria-label":"Field for Email",children:[w.jsx(Ff,{type:"email",name:"email",placeholder:"Email"}),w.jsx(jf,{name:"email",component:"div"})]}),w.jsxs("label",{"aria-label":"Field for Phone number",children:[w.jsx(Ff,{type:"tel",name:"phone",placeholder:"Phone number"}),w.jsx(jf,{name:"phone",component:"div"})]}),w.jsx(Zz,{type:"submit",children:w.jsx("span",{children:"Book"})})]})})})}),";"]})},nI=({namePopUp:t,onClose:e})=>{switch(t){case"login":return w.jsx(eI,{onClose:e});case"signin":return w.jsx(tI,{onClose:e});case"trial":return w.jsx(dW,{onClose:e})}return w.jsx(w.Fragment,{})};nI.propTypes={namePopUp:zr.string.isRequired,onClose:zr.func.isRequired};const fW=({children:t})=>{const e=Xg(),n=e.isLoggedIn,r=e.isLoggedIn;return!n&&!r?w.jsx(Mh,{to:"/"}):t},yw=E.lazy(()=>zg(()=>import("./Home-B23dNCUv.js"),__vite__mapDeps([]))),hW=E.lazy(()=>zg(()=>import("./Teachers-1PZKHx6K.js"),__vite__mapDeps([0,1]))),pW=E.lazy(()=>zg(()=>import("./Favorite-D5Ap6BAt.js"),__vite__mapDeps([2,1]))),mW=()=>{const[t,e]=E.useState(""),n=Dc();return E.useEffect(()=>{n(ql())},[n]),w.jsxs(w.Fragment,{children:[w.jsxs(kP,{children:[w.jsxs(Qi,{path:"/",element:w.jsx(ox,{setNamePopUp:e}),children:[w.jsx(Qi,{index:!0,element:w.jsx(yw,{})}),w.jsx(Qi,{path:"/teachers",element:w.jsx(hW,{setNamePopUp:e})}),w.jsx(Qi,{path:"favorites",element:w.jsx(fW,{children:w.jsx(pW,{setNamePopUp:e})})})]}),w.jsx(Qi,{path:"*",element:w.jsx(yw,{})})]}),w.jsx(nI,{namePopUp:t,onClose:()=>e("")}),w.jsx(QD,{})]})},TW=R.p`
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  max-width: 968px;
  margin-bottom: 32px;
`,xW=R.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
`;R.img`
  border-radius: 100px;
`;const IW=R.div`
  width: 44px;
  height: 44px;
  background-size: cover;
  border-radius: 100px;
  background-image: url(${t=>t.avatarUrl});
  background-position: 50%;
`,bW=R.li``,kW=R.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
`,PW=R.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,RW=R.li`
  color: rgb(138, 138, 137);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  display: flex;
  align-items: center;
  gap: 8px;
`,OW=R.span`
  color: rgb(18, 20, 23);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`,NW=R.p`
  color: rgb(18, 20, 23);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  text-align: left;
`,gW=({children:t})=>w.jsx(oj,{shouldForwardProp:e=>e!=="avatarUrl",children:t});zf.createRoot(document.getElementById("root")).render(w.jsx(ut.StrictMode,{children:w.jsx(RT,{loading:null,persistor:QF,children:w.jsx(MP,{basename:"/reactVite-LearnLingo/",children:w.jsx(lR,{store:PT,children:w.jsxs(gW,{children:[w.jsx(mW,{}),w.jsx(hj,{})]})})})})}));export{NW as C,TW as E,jP as L,xW as R,OW as S,PW as W,rg as _,KE as a,Dc as b,Ce as c,CW as d,bW as e,IW as f,Tf as g,kW as h,RW as i,w as j,_W as k,Xg as l,wW as m,EW as n,zr as p,E as r,SW as s,R as u};
