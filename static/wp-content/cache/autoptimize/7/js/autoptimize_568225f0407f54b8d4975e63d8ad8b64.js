/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
(function(){var $,__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i;}return-1;};$=jQuery;$.fn.validateCreditCard=function(callback,options){var card,card_type,card_types,get_card_type,is_valid_length,is_valid_luhn,normalize,validate,validate_number,_i,_len,_ref,_ref1;card_types=[{name:'amex',pattern:/^3[47]/,valid_length:[15]},{name:'diners_club_carte_blanche',pattern:/^30[0-5]/,valid_length:[14]},{name:'diners_club_international',pattern:/^36/,valid_length:[14]},{name:'jcb',pattern:/^35(2[89]|[3-8][0-9])/,valid_length:[16]},{name:'laser',pattern:/^(6304|670[69]|6771)/,valid_length:[16,17,18,19]},{name:'visa_electron',pattern:/^(4026|417500|4508|4844|491(3|7))/,valid_length:[16]},{name:'visa',pattern:/^4/,valid_length:[16]},{name:'mastercard',pattern:/^5[1-5]/,valid_length:[16]},{name:'maestro',pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,valid_length:[12,13,14,15,16,17,18,19]},{name:'discover',pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,valid_length:[16]}];if(options==null){options={};}
if((_ref=options.accept)==null){options.accept=(function(){var _i,_len,_results;_results=[];for(_i=0,_len=card_types.length;_i<_len;_i++){card=card_types[_i];_results.push(card.name);}
return _results;})();}
_ref1=options.accept;for(_i=0,_len=_ref1.length;_i<_len;_i++){card_type=_ref1[_i];if(__indexOf.call((function(){var _j,_len1,_results;_results=[];for(_j=0,_len1=card_types.length;_j<_len1;_j++){card=card_types[_j];_results.push(card.name);}
return _results;})(),card_type)<0){throw"Credit card type '"+card_type+"' is not supported";}}
get_card_type=function(number){var _j,_len1,_ref2;_ref2=(function(){var _k,_len1,_ref2,_results;_results=[];for(_k=0,_len1=card_types.length;_k<_len1;_k++){card=card_types[_k];if(_ref2=card.name,__indexOf.call(options.accept,_ref2)>=0){_results.push(card);}}
return _results;})();for(_j=0,_len1=_ref2.length;_j<_len1;_j++){card_type=_ref2[_j];if(number.match(card_type.pattern)){return card_type;}}
return null;};is_valid_luhn=function(number){var digit,n,sum,_j,_len1,_ref2;sum=0;_ref2=number.split('').reverse();for(n=_j=0,_len1=_ref2.length;_j<_len1;n=++_j){digit=_ref2[n];digit=+digit;if(n%2){digit*=2;if(digit<10){sum+=digit;}else{sum+=digit-9;}}else{sum+=digit;}}
return sum%10===0;};is_valid_length=function(number,card_type){var _ref2;return _ref2=number.length,__indexOf.call(card_type.valid_length,_ref2)>=0;};validate_number=function(number){var length_valid,luhn_valid;card_type=get_card_type(number);luhn_valid=false;length_valid=false;if(card_type!=null){luhn_valid=is_valid_luhn(number);length_valid=is_valid_length(number,card_type);}
return callback({card_type:card_type,luhn_valid:luhn_valid,length_valid:length_valid});};validate=function(){var number;number=normalize($(this).val());return validate_number(number);};normalize=function(number){return number.replace(/[ -]/g,'');};this.bind('input',function(){$(this).unbind('keyup');return validate.call(this);});this.bind('keyup',function(){return validate.call(this);});if(this.length!==0){validate.call(this);}
return this;};}).call(this);
(function($){if(top.location!==location){var css='#stm_wrapper { display: none; } '+'body.has_envato_iframe {top: 0 !important}',head=document.head||document.getElementsByTagName('head')[0],style=document.createElement('style');style.type='text/css';style.appendChild(document.createTextNode(css));head.appendChild(style);}})(jQuery);
/*!
 * Vue.js v2.5.17-beta.0
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";var y=Object.freeze({});function M(e){return null==e}function D(e){return null!=e}function S(e){return!0===e}function T(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function P(e){return null!==e&&"object"==typeof e}var r=Object.prototype.toString;function u(e){return"[object Object]"===r.call(e)}function i(e){var t=parseFloat(String(e));return 0<=t&&Math.floor(t)===t&&isFinite(e)}function t(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function F(e){var t=parseFloat(e);return isNaN(t)?e:t}function s(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var c=s("slot,component",!0),l=s("key,ref,slot,slot-scope,is");function f(e,t){if(e.length){var n=e.indexOf(t);if(-1<n)return e.splice(n,1)}}var n=Object.prototype.hasOwnProperty;function p(e,t){return n.call(e,t)}function e(t){var n=Object.create(null);return function(e){return n[e]||(n[e]=t(e))}}var o=/-(\w)/g,g=e(function(e){return e.replace(o,function(e,t){return t?t.toUpperCase():""})}),d=e(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),a=/\B([A-Z])/g,_=e(function(e){return e.replace(a,"-$1").toLowerCase()});var v=Function.prototype.bind?function(e,t){return e.bind(t)}:function(n,r){function e(e){var t=arguments.length;return t?1<t?n.apply(r,arguments):n.call(r,e):n.call(r)}return e._length=n.length,e};function h(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function m(e,t){for(var n in t)e[n]=t[n];return e}function b(e){for(var t={},n=0;n<e.length;n++)e[n]&&m(t,e[n]);return t}function $(e,t,n){}var O=function(e,t,n){return!1},w=function(e){return e};function C(t,n){if(t===n)return!0;var e=P(t),r=P(n);if(!e||!r)return!e&&!r&&String(t)===String(n);try{var i=Array.isArray(t),o=Array.isArray(n);if(i&&o)return t.length===n.length&&t.every(function(e,t){return C(e,n[t])});if(i||o)return!1;var a=Object.keys(t),s=Object.keys(n);return a.length===s.length&&a.every(function(e){return C(t[e],n[e])})}catch(e){return!1}}function x(e,t){for(var n=0;n<e.length;n++)if(C(e[n],t))return n;return-1}function R(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var j="data-server-rendered",k=["component","directive","filter"],A=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"],E={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:O,isReservedAttr:O,isUnknownElement:O,getTagNamespace:$,parsePlatformTagName:w,mustUseProp:O,_lifecycleHooks:A};function N(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var I=/[^\w.$]/;var L,H="__proto__"in{},B="undefined"!=typeof window,U="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,V=U&&WXEnvironment.platform.toLowerCase(),K=B&&window.navigator.userAgent.toLowerCase(),z=K&&/msie|trident/.test(K),J=K&&0<K.indexOf("msie 9.0"),q=K&&0<K.indexOf("edge/"),W=(K&&K.indexOf("android"),K&&/iphone|ipad|ipod|ios/.test(K)||"ios"===V),G=(K&&/chrome\/\d+/.test(K),{}.watch),Z=!1;if(B)try{var X={};Object.defineProperty(X,"passive",{get:function(){Z=!0}}),window.addEventListener("test-passive",null,X)}catch(e){}var Y=function(){return void 0===L&&(L=!B&&!U&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),L},Q=B&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ee(e){return"function"==typeof e&&/native code/.test(e.toString())}var te,ne="undefined"!=typeof Symbol&&ee(Symbol)&&"undefined"!=typeof Reflect&&ee(Reflect.ownKeys);te="undefined"!=typeof Set&&ee(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var re=$,ie=0,oe=function(){this.id=ie++,this.subs=[]};oe.prototype.addSub=function(e){this.subs.push(e)},oe.prototype.removeSub=function(e){f(this.subs,e)},oe.prototype.depend=function(){oe.target&&oe.target.addDep(this)},oe.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},oe.target=null;var ae=[];function se(e){oe.target&&ae.push(oe.target),oe.target=e}function ce(){oe.target=ae.pop()}var ue=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},le={child:{configurable:!0}};le.child.get=function(){return this.componentInstance},Object.defineProperties(ue.prototype,le);var fe=function(e){void 0===e&&(e="");var t=new ue;return t.text=e,t.isComment=!0,t};function pe(e){return new ue(void 0,void 0,void 0,String(e))}function de(e){var t=new ue(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var ve=Array.prototype,he=Object.create(ve);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(o){var a=ve[o];N(he,o,function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var n,r=a.apply(this,e),i=this.__ob__;switch(o){case"push":case"unshift":n=e;break;case"splice":n=e.slice(2)}return n&&i.observeArray(n),i.dep.notify(),r})});var me=Object.getOwnPropertyNames(he),ye=!0;function ge(e){ye=e}var _e=function(e){(this.value=e,this.dep=new oe,this.vmCount=0,N(e,"__ob__",this),Array.isArray(e))?((H?be:$e)(e,he,me),this.observeArray(e)):this.walk(e)};function be(e,t,n){e.__proto__=t}function $e(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];N(e,o,t[o])}}function we(e,t){var n;if(P(e)&&!(e instanceof ue))return p(e,"__ob__")&&e.__ob__ instanceof _e?n=e.__ob__:ye&&!Y()&&(Array.isArray(e)||u(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new _e(e)),t&&n&&n.vmCount++,n}function Ce(n,e,r,t,i){var o=new oe,a=Object.getOwnPropertyDescriptor(n,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(r=n[e]);var u=!i&&we(r);Object.defineProperty(n,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(n):r;return oe.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&function e(t){for(var n=void 0,r=0,i=t.length;r<i;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&e(n)}(e))),e},set:function(e){var t=s?s.call(n):r;e===t||e!=e&&t!=t||(c?c.call(n,e):r=e,u=!i&&we(e),o.notify())}})}}function xe(e,t,n){if(Array.isArray(e)&&i(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(Ce(r.value,t,n),r.dep.notify(),n):e[t]=n}function ke(e,t){if(Array.isArray(e)&&i(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||p(e,t)&&(delete e[t],n&&n.dep.notify())}}_e.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Ce(e,t[n])},_e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)we(e[t])};var Ae=E.optionMergeStrategies;function Oe(e,t){if(!t)return e;for(var n,r,i,o=Object.keys(t),a=0;a<o.length;a++)r=e[n=o[a]],i=t[n],p(e,n)?u(r)&&u(i)&&Oe(r,i):xe(e,n,i);return e}function Se(n,r,i){return i?function(){var e="function"==typeof r?r.call(i,i):r,t="function"==typeof n?n.call(i,i):n;return e?Oe(e,t):t}:r?n?function(){return Oe("function"==typeof r?r.call(this,this):r,"function"==typeof n?n.call(this,this):n)}:r:n}function Te(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function je(e,t,n,r){var i=Object.create(e||null);return t?m(i,t):i}Ae.data=function(e,t,n){return n?Se(e,t,n):t&&"function"!=typeof t?e:Se(e,t)},A.forEach(function(e){Ae[e]=Te}),k.forEach(function(e){Ae[e+"s"]=je}),Ae.watch=function(e,t,n,r){if(e===G&&(e=void 0),t===G&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in m(i,e),t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Ae.props=Ae.methods=Ae.inject=Ae.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return m(i,e),t&&m(i,t),i},Ae.provide=Se;var Ee=function(e,t){return void 0===t?e:t};function Ne(n,r,i){"function"==typeof r&&(r=r.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[g(i)]={type:null});else if(u(n))for(var a in n)i=n[a],o[g(a)]=u(i)?i:{type:i};e.props=o}}(r),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(u(n))for(var o in n){var a=n[o];r[o]=u(a)?m({from:o},a):{from:a}}}}(r),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(r);var e=r.extends;if(e&&(n=Ne(n,e,i)),r.mixins)for(var t=0,o=r.mixins.length;t<o;t++)n=Ne(n,r.mixins[t],i);var a,s={};for(a in n)c(a);for(a in r)p(n,a)||c(a);function c(e){var t=Ae[e]||Ee;s[e]=t(n[e],r[e],i,e)}return s}function Ie(e,t,n,r){if("string"==typeof n){var i=e[t];if(p(i,n))return i[n];var o=g(n);if(p(i,o))return i[o];var a=d(o);return p(i,a)?i[a]:i[n]||i[o]||i[a]}}function Le(e,t,n,r){var i=t[e],o=!p(n,e),a=n[e],s=Pe(Boolean,i.type);if(-1<s)if(o&&!p(i,"default"))a=!1;else if(""===a||a===_(e)){var c=Pe(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=function(e,t,n){if(!p(t,"default"))return;var r=t.default;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return"function"==typeof r&&"Function"!==Me(t.type)?r.call(e):r}(r,i,e);var u=ye;ge(!0),we(a),ge(u)}return a}function Me(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function De(e,t){return Me(e)===Me(t)}function Pe(e,t){if(!Array.isArray(t))return De(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(De(t[n],e))return n;return-1}function Fe(e,t,n){if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){Re(e,r,"errorCaptured hook")}}Re(e,t,n)}function Re(e,t,n){if(E.errorHandler)try{return E.errorHandler.call(null,e,t,n)}catch(e){He(e,null,"config.errorHandler")}He(e,t,n)}function He(e,t,n){if(!B&&!U||"undefined"==typeof console)throw e;console.error(e)}var Be,Ue,Ve=[],Ke=!1;function ze(){Ke=!1;for(var e=Ve.slice(0),t=Ve.length=0;t<e.length;t++)e[t]()}var Je=!1;if("undefined"!=typeof setImmediate&&ee(setImmediate))Ue=function(){setImmediate(ze)};else if("undefined"==typeof MessageChannel||!ee(MessageChannel)&&"[object MessageChannelConstructor]"!==MessageChannel.toString())Ue=function(){setTimeout(ze,0)};else{var qe=new MessageChannel,We=qe.port2;qe.port1.onmessage=ze,Ue=function(){We.postMessage(1)}}if("undefined"!=typeof Promise&&ee(Promise)){var Ge=Promise.resolve();Be=function(){Ge.then(ze),W&&setTimeout($)}}else Be=Ue;function Ze(e,t){var n;if(Ve.push(function(){if(e)try{e.call(t)}catch(e){Fe(e,t,"nextTick")}else n&&n(t)}),Ke||(Ke=!0,Je?Ue():Be()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}var Xe=new te;function Ye(e){!function e(t,n){var r,i;var o=Array.isArray(t);if(!o&&!P(t)||Object.isFrozen(t)||t instanceof ue)return;if(t.__ob__){var a=t.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(o)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}(e,Xe),Xe.clear()}var Qe,et=e(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}});function tt(e){function i(){var e=arguments,t=i.fns;if(!Array.isArray(t))return t.apply(null,arguments);for(var n=t.slice(),r=0;r<n.length;r++)n[r].apply(null,e)}return i.fns=e,i}function nt(e,t,n,r,i){var o,a,s,c;for(o in e)a=e[o],s=t[o],c=et(o),M(a)||(M(s)?(M(a.fns)&&(a=e[o]=tt(a)),n(c.name,a,c.once,c.capture,c.passive,c.params)):a!==s&&(s.fns=a,e[o]=s));for(o in t)M(e[o])&&r((c=et(o)).name,t[o],c.capture)}function rt(e,t,n){var r;e instanceof ue&&(e=e.data.hook||(e.data.hook={}));var i=e[t];function o(){n.apply(this,arguments),f(r.fns,o)}M(i)?r=tt([o]):D(i.fns)&&S(i.merged)?(r=i).fns.push(o):r=tt([i,o]),r.merged=!0,e[t]=r}function it(e,t,n,r,i){if(D(t)){if(p(t,n))return e[n]=t[n],i||delete t[n],!0;if(p(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function ot(e){return T(e)?[pe(e)]:Array.isArray(e)?function e(t,n){var r=[];var i,o,a,s;for(i=0;i<t.length;i++)M(o=t[i])||"boolean"==typeof o||(a=r.length-1,s=r[a],Array.isArray(o)?0<o.length&&(at((o=e(o,(n||"")+"_"+i))[0])&&at(s)&&(r[a]=pe(s.text+o[0].text),o.shift()),r.push.apply(r,o)):T(o)?at(s)?r[a]=pe(s.text+o):""!==o&&r.push(pe(o)):at(o)&&at(s)?r[a]=pe(s.text+o.text):(S(t._isVList)&&D(o.tag)&&M(o.key)&&D(n)&&(o.key="__vlist"+n+"_"+i+"__"),r.push(o)));return r}(e):void 0}function at(e){return D(e)&&D(e.text)&&!1===e.isComment}function st(e,t){return(e.__esModule||ne&&"Module"===e[Symbol.toStringTag])&&(e=e.default),P(e)?t.extend(e):e}function ct(e){return e.isComment&&e.asyncFactory}function ut(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(D(n)&&(D(n.componentOptions)||ct(n)))return n}}function lt(e,t,n){n?Qe.$once(e,t):Qe.$on(e,t)}function ft(e,t){Qe.$off(e,t)}function pt(e,t,n){Qe=e,nt(t,n||{},lt,ft),Qe=void 0}function dt(e,t){var n={};if(!e)return n;for(var r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(vt)&&delete n[u];return n}function vt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function ht(e,t){t=t||{};for(var n=0;n<e.length;n++)Array.isArray(e[n])?ht(e[n],t):t[e[n].key]=e[n].fn;return t}var mt=null;function yt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function gt(e,t){if(t){if(e._directInactive=!1,yt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)gt(e.$children[n]);_t(e,"activated")}}function _t(t,n){se();var e=t.$options[n];if(e)for(var r=0,i=e.length;r<i;r++)try{e[r].call(t)}catch(e){Fe(e,t,n+" hook")}t._hasHookEvent&&t.$emit("hook:"+n),ce()}var bt=[],$t=[],wt={},Ct=!1,xt=!1,kt=0;function At(){var e,t;for(xt=!0,bt.sort(function(e,t){return e.id-t.id}),kt=0;kt<bt.length;kt++)(e=bt[kt]).before&&e.before(),t=e.id,wt[t]=null,e.run();var n=$t.slice(),r=bt.slice();kt=bt.length=$t.length=0,wt={},Ct=xt=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,gt(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&_t(r,"updated")}}(r),Q&&E.devtools&&Q.emit("flush")}var Ot=0,St=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.computed=!!r.computed,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.computed=this.sync=!1,this.cb=n,this.id=++Ot,this.active=!0,this.dirty=this.computed,this.deps=[],this.newDeps=[],this.depIds=new te,this.newDepIds=new te,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!I.test(e)){var n=e.split(".");return function(e){for(var t=0;t<n.length;t++){if(!e)return;e=e[n[t]]}return e}}}(t),this.getter||(this.getter=function(){})),this.computed?(this.value=void 0,this.dep=new oe):this.value=this.get()};St.prototype.get=function(){var e;se(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;Fe(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Ye(e),ce(),this.cleanupDeps()}return e},St.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},St.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},St.prototype.update=function(){var e=this;this.computed?0===this.dep.subs.length?this.dirty=!0:this.getAndInvoke(function(){e.dep.notify()}):this.sync?this.run():function(e){var t=e.id;if(null==wt[t]){if(wt[t]=!0,xt){for(var n=bt.length-1;kt<n&&bt[n].id>e.id;)n--;bt.splice(n+1,0,e)}else bt.push(e);Ct||(Ct=!0,Ze(At))}}(this)},St.prototype.run=function(){this.active&&this.getAndInvoke(this.cb)},St.prototype.getAndInvoke=function(e){var t=this.get();if(t!==this.value||P(t)||this.deep){var n=this.value;if(this.value=t,this.dirty=!1,this.user)try{e.call(this.vm,t,n)}catch(e){Fe(e,this.vm,'callback for watcher "'+this.expression+'"')}else e.call(this.vm,t,n)}},St.prototype.evaluate=function(){return this.dirty&&(this.value=this.get(),this.dirty=!1),this.value},St.prototype.depend=function(){this.dep&&oe.target&&this.dep.depend()},St.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||f(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var Tt={enumerable:!0,configurable:!0,get:$,set:$};function jt(e,t,n){Tt.get=function(){return this[t][n]},Tt.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Tt)}function Et(e){e._watchers=[];var t=e.$options;t.props&&function(n,r){var i=n.$options.propsData||{},o=n._props={},a=n.$options._propKeys=[];n.$parent&&ge(!1);var e=function(e){a.push(e);var t=Le(e,r,i,n);Ce(o,e,t),e in n||jt(n,"_props",e)};for(var t in r)e(t);ge(!0)}(e,t.props),t.methods&&function(e,t){e.$options.props;for(var n in t)e[n]=null==t[n]?$:v(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;u(t=e._data="function"==typeof t?function(e,t){se();try{return e.call(t,t)}catch(e){return Fe(e,t,"data()"),{}}finally{ce()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);for(;i--;){var o=n[i];r&&p(r,o)||(void 0,36!==(a=(o+"").charCodeAt(0))&&95!==a&&jt(e,"_data",o))}var a;we(t,!0)}(e):we(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=Y();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;r||(n[i]=new St(e,a||$,$,Nt)),i in e||It(e,i,o)}}(e,t.computed),t.watch&&t.watch!==G&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Mt(e,n,r[i]);else Mt(e,n,r)}}(e,t.watch)}var Nt={computed:!0};function It(e,t,n){var r=!Y();"function"==typeof n?(Tt.get=r?Lt(t):n,Tt.set=$):(Tt.get=n.get?r&&!1!==n.cache?Lt(t):n.get:$,Tt.set=n.set?n.set:$),Object.defineProperty(e,t,Tt)}function Lt(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.depend(),e.evaluate()}}function Mt(e,t,n,r){return u(n)&&(n=(r=n).handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Dt(t,e){if(t){for(var n=Object.create(null),r=ne?Reflect.ownKeys(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}):Object.keys(t),i=0;i<r.length;i++){for(var o=r[i],a=t[o].from,s=e;s;){if(s._provided&&p(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in t[o]){var c=t[o].default;n[o]="function"==typeof c?c.call(e):c}}return n}}function Pt(e,t){var n,r,i,o,a;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(P(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return D(n)&&(n._isVList=!0),n}function Ft(e,t,n,r){var i,o=this.$scopedSlots[e];if(o)n=n||{},r&&(n=m(m({},r),n)),i=o(n)||t;else{var a=this.$slots[e];a&&(a._rendered=!0),i=a||t}var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function Rt(e){return Ie(this.$options,"filters",e)||w}function Ht(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function Bt(e,t,n,r,i){var o=E.keyCodes[t]||n;return i&&r&&!E.keyCodes[t]?Ht(i,r):o?Ht(o,e):r?_(r)!==t:void 0}function Ut(n,r,i,o,a){if(i)if(P(i)){var s;Array.isArray(i)&&(i=b(i));var e=function(t){if("class"===t||"style"===t||l(t))s=n;else{var e=n.attrs&&n.attrs.type;s=o||E.mustUseProp(r,e,t)?n.domProps||(n.domProps={}):n.attrs||(n.attrs={})}t in s||(s[t]=i[t],a&&((n.on||(n.on={}))["update:"+t]=function(e){i[t]=e}))};for(var t in i)e(t)}else;return n}function Vt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||zt(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r}function Kt(e,t,n){return zt(e,"__once__"+t+(n?"_"+n:""),!0),e}function zt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&Jt(e[r],t+"_"+r,n);else Jt(e,t,n)}function Jt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function qt(e,t){if(t)if(u(t)){var n=e.on=e.on?m({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function Wt(e){e._o=Kt,e._n=F,e._s=t,e._l=Pt,e._t=Ft,e._q=C,e._i=x,e._m=Vt,e._f=Rt,e._k=Bt,e._b=Ut,e._v=pe,e._e=fe,e._u=ht,e._g=qt}function Gt(e,t,n,o,r){var a,s=r.options;p(o,"_uid")?(a=Object.create(o))._original=o:o=(a=o)._original;var i=S(s._compiled),c=!i;this.data=e,this.props=t,this.children=n,this.parent=o,this.listeners=e.on||y,this.injections=Dt(s.inject,o),this.slots=function(){return dt(n,o)},i&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=e.scopedSlots||y),s._scopeId?this._c=function(e,t,n,r){var i=on(a,e,t,n,r,c);return i&&!Array.isArray(i)&&(i.fnScopeId=s._scopeId,i.fnContext=o),i}:this._c=function(e,t,n,r){return on(a,e,t,n,r,c)}}function Zt(e,t,n,r){var i=de(e);return i.fnContext=n,i.fnOptions=r,t.slot&&((i.data||(i.data={})).slot=t.slot),i}function Xt(e,t){for(var n in t)e[g(n)]=t[n]}Wt(Gt.prototype);var Yt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;Yt.prepatch(n,n)}else{(e.componentInstance=function(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;D(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns);return new e.componentOptions.Ctor(n)}(e,mt)).$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions;!function(e,t,n,r,i){var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==y);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,e.$attrs=r.data.attrs||y,e.$listeners=n||y,t&&e.$options.props){ge(!1);for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c],l=e.$options.props;a[u]=Le(u,l,t,e)}ge(!0),e.$options.propsData=t}n=n||y;var f=e.$options._parentListeners;e.$options._parentListeners=n,pt(e,n,f),o&&(e.$slots=dt(i,r.context),e.$forceUpdate())}(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,_t(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,$t.push(t)):gt(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(!(n&&(t._directInactive=!0,yt(t))||t._inactive)){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);_t(t,"deactivated")}}(t,!0):t.$destroy())}},Qt=Object.keys(Yt);function en(e,t,n,r,i){if(!M(e)){var o=n.$options._base;if(P(e)&&(e=o.extend(e)),"function"==typeof e){var a,s,c,u,l,f,p;if(M(e.cid)&&void 0===(e=function(t,n,e){if(S(t.error)&&D(t.errorComp))return t.errorComp;if(D(t.resolved))return t.resolved;if(S(t.loading)&&D(t.loadingComp))return t.loadingComp;if(!D(t.contexts)){var r=t.contexts=[e],i=!0,o=function(){for(var e=0,t=r.length;e<t;e++)r[e].$forceUpdate()},a=R(function(e){t.resolved=st(e,n),i||o()}),s=R(function(e){D(t.errorComp)&&(t.error=!0,o())}),c=t(a,s);return P(c)&&("function"==typeof c.then?M(t.resolved)&&c.then(a,s):D(c.component)&&"function"==typeof c.component.then&&(c.component.then(a,s),D(c.error)&&(t.errorComp=st(c.error,n)),D(c.loading)&&(t.loadingComp=st(c.loading,n),0===c.delay?t.loading=!0:setTimeout(function(){M(t.resolved)&&M(t.error)&&(t.loading=!0,o())},c.delay||200)),D(c.timeout)&&setTimeout(function(){M(t.resolved)&&s(null)},c.timeout))),i=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(e)}(a=e,o,n)))return s=a,c=t,u=n,l=r,f=i,(p=fe()).asyncFactory=s,p.asyncMeta={data:c,context:u,children:l,tag:f},p;t=t||{},vn(e),D(t.model)&&function(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.props||(t.props={}))[n]=t.model.value;var i=t.on||(t.on={});D(i[r])?i[r]=[t.model.callback].concat(i[r]):i[r]=t.model.callback}(e.options,t);var d=function(e,t,n){var r=t.options.props;if(!M(r)){var i={},o=e.attrs,a=e.props;if(D(o)||D(a))for(var s in r){var c=_(s);it(i,a,s,c,!0)||it(i,o,s,c,!1)}return i}}(t,e);if(S(e.options.functional))return function(e,t,n,r,i){var o=e.options,a={},s=o.props;if(D(s))for(var c in s)a[c]=Le(c,s,t||y);else D(n.attrs)&&Xt(a,n.attrs),D(n.props)&&Xt(a,n.props);var u=new Gt(n,a,i,r,e),l=o.render.call(null,u._c,u);if(l instanceof ue)return Zt(l,n,u.parent,o);if(Array.isArray(l)){for(var f=ot(l)||[],p=new Array(f.length),d=0;d<f.length;d++)p[d]=Zt(f[d],n,u.parent,o);return p}}(e,d,t,n,r);var v=t.on;if(t.on=t.nativeOn,S(e.options.abstract)){var h=t.slot;t={},h&&(t.slot=h)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<Qt.length;n++){var r=Qt[n],i=t[r],o=Yt[r];i===o||i&&i._merged||(t[r]=i?tn(o,i):o)}}(t);var m=e.options.name||i;return new ue("vue-component-"+e.cid+(m?"-"+m:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:d,listeners:v,tag:i,children:r},a)}}}function tn(n,r){var e=function(e,t){n(e,t),r(e,t)};return e._merged=!0,e}var nn=1,rn=2;function on(e,t,n,r,i,o){return(Array.isArray(n)||T(n))&&(i=r,r=n,n=void 0),S(o)&&(i=rn),function(e,t,n,r,i){if(D(n)&&D(n.__ob__))return fe();D(n)&&D(n.is)&&(t=n.is);if(!t)return fe();Array.isArray(r)&&"function"==typeof r[0]&&((n=n||{}).scopedSlots={default:r[0]},r.length=0);i===rn?r=ot(r):i===nn&&(r=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(r));var o,a;if("string"==typeof t){var s;a=e.$vnode&&e.$vnode.ns||E.getTagNamespace(t),o=E.isReservedTag(t)?new ue(E.parsePlatformTagName(t),n,r,void 0,void 0,e):D(s=Ie(e.$options,"components",t))?en(s,n,e,r,t):new ue(t,n,r,void 0,void 0,e)}else o=en(t,n,e,r);return Array.isArray(o)?o:D(o)?(D(a)&&function e(t,n,r){t.ns=n;"foreignObject"===t.tag&&(n=void 0,r=!0);if(D(t.children))for(var i=0,o=t.children.length;i<o;i++){var a=t.children[i];D(a.tag)&&(M(a.ns)||S(r)&&"svg"!==a.tag)&&e(a,n,r)}}(o,a),D(n)&&function(e){P(e.style)&&Ye(e.style);P(e.class)&&Ye(e.class)}(n),o):fe()}(e,t,n,r,i)}var an,sn,cn,un,ln,fn,pn,dn=0;function vn(e){var t=e.options;if(e.super){var n=vn(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.extendOptions,i=e.sealedOptions;for(var o in n)n[o]!==i[o]&&(t||(t={}),t[o]=hn(n[o],r[o],i[o]));return t}(e);r&&m(e.extendOptions,r),(t=e.options=Ne(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function hn(e,t,n){if(Array.isArray(e)){var r=[];n=Array.isArray(n)?n:[n],t=Array.isArray(t)?t:[t];for(var i=0;i<e.length;i++)(0<=t.indexOf(e[i])||n.indexOf(e[i])<0)&&r.push(e[i]);return r}return e}function mn(e){this._init(e)}function yn(e){e.cid=0;var a=1;e.extend=function(e){e=e||{};var t=this,n=t.cid,r=e._Ctor||(e._Ctor={});if(r[n])return r[n];var i=e.name||t.options.name,o=function(e){this._init(e)};return((o.prototype=Object.create(t.prototype)).constructor=o).cid=a++,o.options=Ne(t.options,e),o.super=t,o.options.props&&function(e){var t=e.options.props;for(var n in t)jt(e.prototype,"_props",n)}(o),o.options.computed&&function(e){var t=e.options.computed;for(var n in t)It(e.prototype,n,t[n])}(o),o.extend=t.extend,o.mixin=t.mixin,o.use=t.use,k.forEach(function(e){o[e]=t[e]}),i&&(o.options.components[i]=o),o.superOptions=t.options,o.extendOptions=e,o.sealedOptions=m({},o.options),r[n]=o}}function gn(e){return e&&(e.Ctor.options.name||e.tag)}function _n(e,t){return Array.isArray(e)?-1<e.indexOf(t):"string"==typeof e?-1<e.split(",").indexOf(t):(n=e,"[object RegExp]"===r.call(n)&&e.test(t));var n}function bn(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=gn(a.componentOptions);s&&!t(s)&&$n(n,o,r,i)}}}function $n(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,f(n,t)}mn.prototype._init=function(e){var t,n,r,i,o=this;o._uid=dn++,o._isVue=!0,e&&e._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent;var i=(n._parentVnode=r).componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(o,e):o.$options=Ne(vn(o.constructor),e||{},o),function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}((o._renderProxy=o)._self=o),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&pt(e,t)}(o),function(i){i._vnode=null,i._staticTrees=null;var e=i.$options,t=i.$vnode=e._parentVnode,n=t&&t.context;i.$slots=dt(e._renderChildren,n),i.$scopedSlots=y,i._c=function(e,t,n,r){return on(i,e,t,n,r,!1)},i.$createElement=function(e,t,n,r){return on(i,e,t,n,r,!0)};var r=t&&t.data;Ce(i,"$attrs",r&&r.attrs||y,null,!0),Ce(i,"$listeners",e._parentListeners||y,null,!0)}(o),_t(o,"beforeCreate"),(n=Dt((t=o).$options.inject,t))&&(ge(!1),Object.keys(n).forEach(function(e){Ce(t,e,n[e])}),ge(!0)),Et(o),(i=(r=o).$options.provide)&&(r._provided="function"==typeof i?i.call(r):i),_t(o,"created"),o.$options.el&&o.$mount(o.$options.el)},an=mn,sn={get:function(){return this._data}},cn={get:function(){return this._props}},Object.defineProperty(an.prototype,"$data",sn),Object.defineProperty(an.prototype,"$props",cn),an.prototype.$set=xe,an.prototype.$delete=ke,an.prototype.$watch=function(e,t,n){if(u(t))return Mt(this,e,t,n);(n=n||{}).user=!0;var r=new St(this,e,t,n);return n.immediate&&t.call(this,r.value),function(){r.teardown()}},ln=/^hook:/,(un=mn).prototype.$on=function(e,t){if(Array.isArray(e))for(var n=0,r=e.length;n<r;n++)this.$on(e[n],t);else(this._events[e]||(this._events[e]=[])).push(t),ln.test(e)&&(this._hasHookEvent=!0);return this},un.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},un.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)this.$off(e[r],t);return n}var o=n._events[e];if(!o)return n;if(!t)return n._events[e]=null,n;if(t)for(var a,s=o.length;s--;)if((a=o[s])===t||a.fn===t){o.splice(s,1);break}return n},un.prototype.$emit=function(t){var n=this,e=n._events[t];if(e){e=1<e.length?h(e):e;for(var r=h(arguments,1),i=0,o=e.length;i<o;i++)try{e[i].apply(n,r)}catch(e){Fe(e,n,'event handler for "'+t+'"')}}return n},(fn=mn).prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=mt;(mt=n)._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),mt=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},fn.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},fn.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){_t(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||f(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),_t(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}},Wt((pn=mn).prototype),pn.prototype.$nextTick=function(e){return Ze(e,this)},pn.prototype._render=function(){var t,n=this,e=n.$options,r=e.render,i=e._parentVnode;i&&(n.$scopedSlots=i.data.scopedSlots||y),n.$vnode=i;try{t=r.call(n._renderProxy,n.$createElement)}catch(e){Fe(e,n,"render"),t=n._vnode}return t instanceof ue||(t=fe()),t.parent=i,t};var wn,Cn,xn,kn=[String,RegExp,Array],An={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:kn,exclude:kn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)$n(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){bn(e,function(e){return _n(t,e)})}),this.$watch("exclude",function(t){bn(e,function(e){return!_n(t,e)})})},render:function(){var e=this.$slots.default,t=ut(e),n=t&&t.componentOptions;if(n){var r=gn(n),i=this.include,o=this.exclude;if(i&&(!r||!_n(i,r))||o&&r&&_n(o,r))return t;var a=this.cache,s=this.keys,c=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;a[c]?(t.componentInstance=a[c].componentInstance,f(s,c),s.push(c)):(a[c]=t,s.push(c),this.max&&s.length>parseInt(this.max)&&$n(a,s[0],s,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}}};wn=mn,xn={get:function(){return E}},Object.defineProperty(wn,"config",xn),wn.util={warn:re,extend:m,mergeOptions:Ne,defineReactive:Ce},wn.set=xe,wn.delete=ke,wn.nextTick=Ze,wn.options=Object.create(null),k.forEach(function(e){wn.options[e+"s"]=Object.create(null)}),m((wn.options._base=wn).options.components,An),wn.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(-1<t.indexOf(e))return this;var n=h(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this},wn.mixin=function(e){return this.options=Ne(this.options,e),this},yn(wn),Cn=wn,k.forEach(function(n){Cn[n]=function(e,t){return t?("component"===n&&u(t)&&(t.name=t.name||e,t=this.options._base.extend(t)),"directive"===n&&"function"==typeof t&&(t={bind:t,update:t}),this.options[n+"s"][e]=t):this.options[n+"s"][e]}}),Object.defineProperty(mn.prototype,"$isServer",{get:Y}),Object.defineProperty(mn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(mn,"FunctionalRenderContext",{value:Gt}),mn.version="2.5.17-beta.0";var On=s("style,class"),Sn=s("input,textarea,option,select,progress"),Tn=function(e,t,n){return"value"===n&&Sn(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},jn=s("contenteditable,draggable,spellcheck"),En=s("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Nn="http://www.w3.org/1999/xlink",In=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Ln=function(e){return In(e)?e.slice(6,e.length):""},Mn=function(e){return null==e||!1===e};function Dn(e){for(var t=e.data,n=e,r=e;D(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(t=Pn(r.data,t));for(;D(n=n.parent);)n&&n.data&&(t=Pn(t,n.data));return function(e,t){if(D(e)||D(t))return Fn(e,Rn(t));return""}(t.staticClass,t.class)}function Pn(e,t){return{staticClass:Fn(e.staticClass,t.staticClass),class:D(e.class)?[e.class,t.class]:t.class}}function Fn(e,t){return e?t?e+" "+t:e:t||""}function Rn(e){return Array.isArray(e)?function(e){for(var t,n="",r=0,i=e.length;r<i;r++)D(t=Rn(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}(e):P(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var Hn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Bn=s("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Un=s("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Vn=function(e){return Bn(e)||Un(e)};function Kn(e){return Un(e)?"svg":"math"===e?"math":void 0}var zn=Object.create(null);var Jn=s("text,number,password,search,email,tel,url");function qn(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}var Wn=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n},createElementNS:function(e,t){return document.createElementNS(Hn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),Gn={create:function(e,t){Zn(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Zn(e,!0),Zn(t))},destroy:function(e){Zn(e,!0)}};function Zn(e,t){var n=e.data.ref;if(D(n)){var r=e.context,i=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?f(o[n],i):o[n]===i&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}var Xn=new ue("",{},[]),Yn=["create","activate","update","remove","destroy"];function Qn(e,t){return e.key===t.key&&(e.tag===t.tag&&e.isComment===t.isComment&&D(e.data)===D(t.data)&&function(e,t){if("input"!==e.tag)return!0;var n,r=D(n=e.data)&&D(n=n.attrs)&&n.type,i=D(n=t.data)&&D(n=n.attrs)&&n.type;return r===i||Jn(r)&&Jn(i)}(e,t)||S(e.isAsyncPlaceholder)&&e.asyncFactory===t.asyncFactory&&M(t.asyncFactory.error))}function er(e,t,n){var r,i,o={};for(r=t;r<=n;++r)D(i=e[r].key)&&(o[i]=r);return o}var tr={create:nr,update:nr,destroy:function(e){nr(e,Xn)}};function nr(e,t){(e.data.directives||t.data.directives)&&function(t,n){var e,r,i,o=t===Xn,a=n===Xn,s=ir(t.data.directives,t.context),c=ir(n.data.directives,n.context),u=[],l=[];for(e in c)r=s[e],i=c[e],r?(i.oldValue=r.value,or(i,"update",n,t),i.def&&i.def.componentUpdated&&l.push(i)):(or(i,"bind",n,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var e=0;e<u.length;e++)or(u[e],"inserted",n,t)};o?rt(n,"insert",f):f()}l.length&&rt(n,"postpatch",function(){for(var e=0;e<l.length;e++)or(l[e],"componentUpdated",n,t)});if(!o)for(e in s)c[e]||or(s[e],"unbind",t,t,a)}(e,t)}var rr=Object.create(null);function ir(e,t){var n,r,i,o=Object.create(null);if(!e)return o;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=rr),(o[(i=r,i.rawName||i.name+"."+Object.keys(i.modifiers||{}).join("."))]=r).def=Ie(t.$options,"directives",r.name);return o}function or(t,n,r,e,i){var o=t.def&&t.def[n];if(o)try{o(r.elm,t,r,e,i)}catch(e){Fe(e,r.context,"directive "+t.name+" "+n+" hook")}}var ar=[Gn,tr];function sr(e,t){var n=t.componentOptions;if(!(D(n)&&!1===n.Ctor.options.inheritAttrs||M(e.data.attrs)&&M(t.data.attrs))){var r,i,o=t.elm,a=e.data.attrs||{},s=t.data.attrs||{};for(r in D(s.__ob__)&&(s=t.data.attrs=m({},s)),s)i=s[r],a[r]!==i&&cr(o,r,i);for(r in(z||q)&&s.value!==a.value&&cr(o,"value",s.value),a)M(s[r])&&(In(r)?o.removeAttributeNS(Nn,Ln(r)):jn(r)||o.removeAttribute(r))}}function cr(e,t,n){-1<e.tagName.indexOf("-")?ur(e,t,n):En(t)?Mn(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):jn(t)?e.setAttribute(t,Mn(n)||"false"===n?"false":"true"):In(t)?Mn(n)?e.removeAttributeNS(Nn,Ln(t)):e.setAttributeNS(Nn,t,n):ur(e,t,n)}function ur(t,e,n){if(Mn(n))t.removeAttribute(e);else{if(z&&!J&&"TEXTAREA"===t.tagName&&"placeholder"===e&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var lr={create:sr,update:sr};function fr(e,t){var n=t.elm,r=t.data,i=e.data;if(!(M(r.staticClass)&&M(r.class)&&(M(i)||M(i.staticClass)&&M(i.class)))){var o=Dn(t),a=n._transitionClasses;D(a)&&(o=Fn(o,Rn(a))),o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o)}}var pr,dr,vr,hr,mr,yr,gr={create:fr,update:fr},_r=/[\w).+\-_$\]]/;function br(e){var t,n,r,i,o,a=!1,s=!1,c=!1,u=!1,l=0,f=0,p=0,d=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),a)39===t&&92!==n&&(a=!1);else if(s)34===t&&92!==n&&(s=!1);else if(c)96===t&&92!==n&&(c=!1);else if(u)47===t&&92!==n&&(u=!1);else if(124!==t||124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||l||f||p){switch(t){case 34:s=!0;break;case 39:a=!0;break;case 96:c=!0;break;case 40:p++;break;case 41:p--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}if(47===t){for(var v=r-1,h=void 0;0<=v&&" "===(h=e.charAt(v));v--);h&&_r.test(h)||(u=!0)}}else void 0===i?(d=r+1,i=e.slice(0,r).trim()):m();function m(){(o||(o=[])).push(e.slice(d,r).trim()),d=r+1}if(void 0===i?i=e.slice(0,r).trim():0!==d&&m(),o)for(r=0;r<o.length;r++)i=$r(i,o[r]);return i}function $r(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==i?","+i:i)}function wr(e){console.error("[Vue compiler]: "+e)}function Cr(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function xr(e,t,n){(e.props||(e.props=[])).push({name:t,value:n}),e.plain=!1}function kr(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n}),e.plain=!1}function Ar(e,t,n){e.attrsMap[t]=n,e.attrsList.push({name:t,value:n})}function Or(e,t,n,r,i,o){var a;(r=r||y).capture&&(delete r.capture,t="!"+t),r.once&&(delete r.once,t="~"+t),r.passive&&(delete r.passive,t="&"+t),"click"===t&&(r.right?(t="contextmenu",delete r.right):r.middle&&(t="mouseup")),r.native?(delete r.native,a=e.nativeEvents||(e.nativeEvents={})):a=e.events||(e.events={});var s={value:n.trim()};r!==y&&(s.modifiers=r);var c=a[t];Array.isArray(c)?i?c.unshift(s):c.push(s):a[t]=c?i?[s,c]:[c,s]:s,e.plain=!1}function Sr(e,t,n){var r=Tr(e,":"+t)||Tr(e,"v-bind:"+t);if(null!=r)return br(r);if(!1!==n){var i=Tr(e,t);if(null!=i)return JSON.stringify(i)}}function Tr(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function jr(e,t,n){var r=n||{},i=r.number,o="$$v",a=o;r.trim&&(a="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(a="_n("+a+")");var s=Er(t,a);e.model={value:"("+t+")",expression:'"'+t+'"',callback:"function ($$v) {"+s+"}"}}function Er(e,t){var n=function(e){if(e=e.trim(),pr=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<pr-1)return-1<(hr=e.lastIndexOf("."))?{exp:e.slice(0,hr),key:'"'+e.slice(hr+1)+'"'}:{exp:e,key:null};dr=e,hr=mr=yr=0;for(;!Ir();)Lr(vr=Nr())?Dr(vr):91===vr&&Mr(vr);return{exp:e.slice(0,mr),key:e.slice(mr+1,yr)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function Nr(){return dr.charCodeAt(++hr)}function Ir(){return pr<=hr}function Lr(e){return 34===e||39===e}function Mr(e){var t=1;for(mr=hr;!Ir();)if(Lr(e=Nr()))Dr(e);else if(91===e&&t++,93===e&&t--,0===t){yr=hr;break}}function Dr(e){for(var t=e;!Ir()&&(e=Nr())!==t;);}var Pr,Fr="__r",Rr="__c";function Hr(e,t,n,r,i){var o,a,s,c,u;t=(o=t)._withTask||(o._withTask=function(){Je=!0;var e=o.apply(null,arguments);return Je=!1,e}),n&&(a=t,s=e,c=r,u=Pr,t=function e(){null!==a.apply(null,arguments)&&Br(s,e,c,u)}),Pr.addEventListener(e,t,Z?{capture:r,passive:i}:r)}function Br(e,t,n,r){(r||Pr).removeEventListener(e,t._withTask||t,n)}function Ur(e,t){if(!M(e.data.on)||!M(t.data.on)){var n=t.data.on||{},r=e.data.on||{};Pr=t.elm,function(e){if(D(e[Fr])){var t=z?"change":"input";e[t]=[].concat(e[Fr],e[t]||[]),delete e[Fr]}D(e[Rr])&&(e.change=[].concat(e[Rr],e.change||[]),delete e[Rr])}(n),nt(n,r,Hr,Br,t.context),Pr=void 0}}var Vr={create:Ur,update:Ur};function Kr(e,t){if(!M(e.data.domProps)||!M(t.data.domProps)){var n,r,i,o,a=t.elm,s=e.data.domProps||{},c=t.data.domProps||{};for(n in D(c.__ob__)&&(c=t.data.domProps=m({},c)),s)M(c[n])&&(a[n]="");for(n in c){if(r=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===s[n])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n){var u=M(a._value=r)?"":String(r);o=u,(i=a).composing||"OPTION"!==i.tagName&&!function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(i,o)&&!function(e,t){var n=e.value,r=e._vModifiers;if(D(r)){if(r.lazy)return!1;if(r.number)return F(n)!==F(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}(i,o)||(a.value=u)}else a[n]=r}}}var zr={create:Kr,update:Kr},Jr=e(function(e){var n={},r=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var t=e.split(r);1<t.length&&(n[t[0].trim()]=t[1].trim())}}),n});function qr(e){var t=Wr(e.style);return e.staticStyle?m(e.staticStyle,t):t}function Wr(e){return Array.isArray(e)?b(e):"string"==typeof e?Jr(e):e}var Gr,Zr=/^--/,Xr=/\s*!important$/,Yr=function(e,t,n){if(Zr.test(t))e.style.setProperty(t,n);else if(Xr.test(n))e.style.setProperty(t,n.replace(Xr,""),"important");else{var r=ei(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},Qr=["Webkit","Moz","ms"],ei=e(function(e){if(Gr=Gr||document.createElement("div").style,"filter"!==(e=g(e))&&e in Gr)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Qr.length;n++){var r=Qr[n]+t;if(r in Gr)return r}});function ti(e,t){var n=t.data,r=e.data;if(!(M(n.staticStyle)&&M(n.style)&&M(r.staticStyle)&&M(r.style))){var i,o,a=t.elm,s=r.staticStyle,c=r.normalizedStyle||r.style||{},u=s||c,l=Wr(t.data.style)||{};t.data.normalizedStyle=D(l.__ob__)?m({},l):l;var f=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=qr(i.data))&&m(r,n);(n=qr(e.data))&&m(r,n);for(var o=e;o=o.parent;)o.data&&(n=qr(o.data))&&m(r,n);return r}(t,!0);for(o in u)M(f[o])&&Yr(a,o,"");for(o in f)(i=f[o])!==u[o]&&Yr(a,o,null==i?"":i)}}var ni={create:ti,update:ti};function ri(t,e){if(e&&(e=e.trim()))if(t.classList)-1<e.indexOf(" ")?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function ii(t,e){if(e&&(e=e.trim()))if(t.classList)-1<e.indexOf(" ")?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";0<=n.indexOf(r);)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function oi(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&m(t,ai(e.name||"v")),m(t,e),t}return"string"==typeof e?ai(e):void 0}}var ai=e(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),si=B&&!J,ci="transition",ui="animation",li="transition",fi="transitionend",pi="animation",di="animationend";si&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(li="WebkitTransition",fi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(pi="WebkitAnimation",di="webkitAnimationEnd"));var vi=B?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function hi(e){vi(function(){vi(e)})}function mi(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),ri(e,t))}function yi(e,t){e._transitionClasses&&f(e._transitionClasses,t),ii(e,t)}function gi(t,e,n){var r=bi(t,e),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===ci?fi:di,c=0,u=function(){t.removeEventListener(s,l),n()},l=function(e){e.target===t&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),t.addEventListener(s,l)}var _i=/\b(transform|all)(,|$)/;function bi(e,t){var n,r=window.getComputedStyle(e),i=r[li+"Delay"].split(", "),o=r[li+"Duration"].split(", "),a=$i(i,o),s=r[pi+"Delay"].split(", "),c=r[pi+"Duration"].split(", "),u=$i(s,c),l=0,f=0;return t===ci?0<a&&(n=ci,l=a,f=o.length):t===ui?0<u&&(n=ui,l=u,f=c.length):f=(n=0<(l=Math.max(a,u))?u<a?ci:ui:null)?n===ci?o.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===ci&&_i.test(r[li+"Property"])}}function $i(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max.apply(null,e.map(function(e,t){return wi(e)+wi(n[t])}))}function wi(e){return 1e3*Number(e.slice(0,-1))}function Ci(n,e){var r=n.elm;D(r._leaveCb)&&(r._leaveCb.cancelled=!0,r._leaveCb());var t=oi(n.data.transition);if(!M(t)&&!D(r._enterCb)&&1===r.nodeType){for(var i=t.css,o=t.type,a=t.enterClass,s=t.enterToClass,c=t.enterActiveClass,u=t.appearClass,l=t.appearToClass,f=t.appearActiveClass,p=t.beforeEnter,d=t.enter,v=t.afterEnter,h=t.enterCancelled,m=t.beforeAppear,y=t.appear,g=t.afterAppear,_=t.appearCancelled,b=t.duration,$=mt,w=mt.$vnode;w&&w.parent;)$=(w=w.parent).context;var C=!$._isMounted||!n.isRootInsert;if(!C||y||""===y){var x=C&&u?u:a,k=C&&f?f:c,A=C&&l?l:s,O=C&&m||p,S=C&&"function"==typeof y?y:d,T=C&&g||v,j=C&&_||h,E=F(P(b)?b.enter:b),N=!1!==i&&!J,I=Ai(S),L=r._enterCb=R(function(){N&&(yi(r,A),yi(r,k)),L.cancelled?(N&&yi(r,x),j&&j(r)):T&&T(r),r._enterCb=null});n.data.show||rt(n,"insert",function(){var e=r.parentNode,t=e&&e._pending&&e._pending[n.key];t&&t.tag===n.tag&&t.elm._leaveCb&&t.elm._leaveCb(),S&&S(r,L)}),O&&O(r),N&&(mi(r,x),mi(r,k),hi(function(){yi(r,x),L.cancelled||(mi(r,A),I||(ki(E)?setTimeout(L,E):gi(r,o,L)))})),n.data.show&&(e&&e(),S&&S(r,L)),N||I||L()}}}function xi(e,t){var n=e.elm;D(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=oi(e.data.transition);if(M(r)||1!==n.nodeType)return t();if(!D(n._leaveCb)){var i=r.css,o=r.type,a=r.leaveClass,s=r.leaveToClass,c=r.leaveActiveClass,u=r.beforeLeave,l=r.leave,f=r.afterLeave,p=r.leaveCancelled,d=r.delayLeave,v=r.duration,h=!1!==i&&!J,m=Ai(l),y=F(P(v)?v.leave:v),g=n._leaveCb=R(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),h&&(yi(n,s),yi(n,c)),g.cancelled?(h&&yi(n,a),p&&p(n)):(t(),f&&f(n)),n._leaveCb=null});d?d(_):_()}function _(){g.cancelled||(e.data.show||((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),u&&u(n),h&&(mi(n,a),mi(n,c),hi(function(){yi(n,a),g.cancelled||(mi(n,s),m||(ki(y)?setTimeout(g,y):gi(n,o,g)))})),l&&l(n,g),h||m||g())}}function ki(e){return"number"==typeof e&&!isNaN(e)}function Ai(e){if(M(e))return!1;var t=e.fns;return D(t)?Ai(Array.isArray(t)?t[0]:t):1<(e._length||e.length)}function Oi(e,t){!0!==t.data.show&&Ci(t)}var Si=function(e){var r,t,m={},n=e.modules,y=e.nodeOps;for(r=0;r<Yn.length;++r)for(m[Yn[r]]=[],t=0;t<n.length;++t)D(n[t][Yn[r]])&&m[Yn[r]].push(n[t][Yn[r]]);function o(e){var t=y.parentNode(e);D(t)&&y.removeChild(t,e)}function g(e,t,n,r,i,o,a){if(D(e.elm)&&D(o)&&(e=o[a]=de(e)),e.isRootInsert=!i,!function(e,t,n,r){var i=e.data;if(D(i)){var o=D(e.componentInstance)&&i.keepAlive;if(D(i=i.hook)&&D(i=i.init)&&i(e,!1),D(e.componentInstance))return d(e,t),l(n,e.elm,r),S(o)&&function(e,t,n,r){for(var i,o=e;o.componentInstance;)if(o=o.componentInstance._vnode,D(i=o.data)&&D(i=i.transition)){for(i=0;i<m.activate.length;++i)m.activate[i](Xn,o);t.push(o);break}l(n,e.elm,r)}(e,t,n,r),!0}}(e,t,n,r)){var s=e.data,c=e.children,u=e.tag;D(u)?(e.elm=e.ns?y.createElementNS(e.ns,u):y.createElement(u,e),f(e),v(e,c,t),D(s)&&h(e,t)):S(e.isComment)?e.elm=y.createComment(e.text):e.elm=y.createTextNode(e.text),l(n,e.elm,r)}}function d(e,t){D(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,_(e)?(h(e,t),f(e)):(Zn(e),t.push(e))}function l(e,t,n){D(e)&&(D(n)?n.parentNode===e&&y.insertBefore(e,t,n):y.appendChild(e,t))}function v(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)g(t[r],n,e.elm,null,!0,t,r);else T(e.text)&&y.appendChild(e.elm,y.createTextNode(String(e.text)))}function _(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return D(e.tag)}function h(e,t){for(var n=0;n<m.create.length;++n)m.create[n](Xn,e);D(r=e.data.hook)&&(D(r.create)&&r.create(Xn,e),D(r.insert)&&t.push(e))}function f(e){var t;if(D(t=e.fnScopeId))y.setStyleScope(e.elm,t);else for(var n=e;n;)D(t=n.context)&&D(t=t.$options._scopeId)&&y.setStyleScope(e.elm,t),n=n.parent;D(t=mt)&&t!==e.context&&t!==e.fnContext&&D(t=t.$options._scopeId)&&y.setStyleScope(e.elm,t)}function b(e,t,n,r,i,o){for(;r<=i;++r)g(n[r],o,e,t,!1,n,r)}function $(e){var t,n,r=e.data;if(D(r))for(D(t=r.hook)&&D(t=t.destroy)&&t(e),t=0;t<m.destroy.length;++t)m.destroy[t](e);if(D(t=e.children))for(n=0;n<e.children.length;++n)$(e.children[n])}function w(e,t,n,r){for(;n<=r;++n){var i=t[n];D(i)&&(D(i.tag)?(a(i),$(i)):o(i.elm))}}function a(e,t){if(D(t)||D(e.data)){var n,r=m.remove.length+1;for(D(t)?t.listeners+=r:t=function(e,t){function n(){0==--n.listeners&&o(e)}return n.listeners=t,n}(e.elm,r),D(n=e.componentInstance)&&D(n=n._vnode)&&D(n.data)&&a(n,t),n=0;n<m.remove.length;++n)m.remove[n](e,t);D(n=e.data.hook)&&D(n=n.remove)?n(e,t):t()}else o(e.elm)}function C(e,t,n,r){for(var i=n;i<r;i++){var o=t[i];if(D(o)&&Qn(e,o))return i}}function x(e,t,n,r){if(e!==t){var i=t.elm=e.elm;if(S(e.isAsyncPlaceholder))D(t.asyncFactory.resolved)?O(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(S(t.isStatic)&&S(e.isStatic)&&t.key===e.key&&(S(t.isCloned)||S(t.isOnce)))t.componentInstance=e.componentInstance;else{var o,a=t.data;D(a)&&D(o=a.hook)&&D(o=o.prepatch)&&o(e,t);var s=e.children,c=t.children;if(D(a)&&_(t)){for(o=0;o<m.update.length;++o)m.update[o](e,t);D(o=a.hook)&&D(o=o.update)&&o(e,t)}M(t.text)?D(s)&&D(c)?s!==c&&function(e,t,n,r,i){for(var o,a,s,c=0,u=0,l=t.length-1,f=t[0],p=t[l],d=n.length-1,v=n[0],h=n[d],m=!i;c<=l&&u<=d;)M(f)?f=t[++c]:M(p)?p=t[--l]:Qn(f,v)?(x(f,v,r),f=t[++c],v=n[++u]):Qn(p,h)?(x(p,h,r),p=t[--l],h=n[--d]):Qn(f,h)?(x(f,h,r),m&&y.insertBefore(e,f.elm,y.nextSibling(p.elm)),f=t[++c],h=n[--d]):(Qn(p,v)?(x(p,v,r),m&&y.insertBefore(e,p.elm,f.elm),p=t[--l]):(M(o)&&(o=er(t,c,l)),M(a=D(v.key)?o[v.key]:C(v,t,c,l))?g(v,r,e,f.elm,!1,n,u):Qn(s=t[a],v)?(x(s,v,r),t[a]=void 0,m&&y.insertBefore(e,s.elm,f.elm)):g(v,r,e,f.elm,!1,n,u)),v=n[++u]);l<c?b(e,M(n[d+1])?null:n[d+1].elm,n,u,d,r):d<u&&w(0,t,c,l)}(i,s,c,n,r):D(c)?(D(e.text)&&y.setTextContent(i,""),b(i,null,c,0,c.length-1,n)):D(s)?w(0,s,0,s.length-1):D(e.text)&&y.setTextContent(i,""):e.text!==t.text&&y.setTextContent(i,t.text),D(a)&&D(o=a.hook)&&D(o=o.postpatch)&&o(e,t)}}}function k(e,t,n){if(S(n)&&D(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var A=s("attrs,class,staticClass,staticStyle,key");function O(e,t,n,r){var i,o=t.tag,a=t.data,s=t.children;if(r=r||a&&a.pre,t.elm=e,S(t.isComment)&&D(t.asyncFactory))return t.isAsyncPlaceholder=!0;if(D(a)&&(D(i=a.hook)&&D(i=i.init)&&i(t,!0),D(i=t.componentInstance)))return d(t,n),!0;if(D(o)){if(D(s))if(e.hasChildNodes())if(D(i=a)&&D(i=i.domProps)&&D(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var c=!0,u=e.firstChild,l=0;l<s.length;l++){if(!u||!O(u,s[l],n,r)){c=!1;break}u=u.nextSibling}if(!c||u)return!1}else v(t,s,n);if(D(a)){var f=!1;for(var p in a)if(!A(p)){f=!0,h(t,n);break}!f&&a.class&&Ye(a.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,r){if(!M(t)){var i,o=!1,a=[];if(M(e))o=!0,g(t,a);else{var s=D(e.nodeType);if(!s&&Qn(e,t))x(e,t,a,r);else{if(s){if(1===e.nodeType&&e.hasAttribute(j)&&(e.removeAttribute(j),n=!0),S(n)&&O(e,t,a))return k(t,a,!0),e;i=e,e=new ue(y.tagName(i).toLowerCase(),{},[],void 0,i)}var c=e.elm,u=y.parentNode(c);if(g(t,a,c._leaveCb?null:u,y.nextSibling(c)),D(t.parent))for(var l=t.parent,f=_(t);l;){for(var p=0;p<m.destroy.length;++p)m.destroy[p](l);if(l.elm=t.elm,f){for(var d=0;d<m.create.length;++d)m.create[d](Xn,l);var v=l.data.hook.insert;if(v.merged)for(var h=1;h<v.fns.length;h++)v.fns[h]()}else Zn(l);l=l.parent}D(u)?w(0,[e],0,0):D(e.tag)&&$(e)}}return k(t,a,o),t.elm}D(e)&&$(e)}}({nodeOps:Wn,modules:[lr,gr,Vr,zr,ni,B?{create:Oi,activate:Oi,remove:function(e,t){!0!==e.data.show?xi(e,t):t()}}:{}].concat(ar)});J&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Di(e,"input")});var Ti={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?rt(n,"postpatch",function(){Ti.componentUpdated(e,t,n)}):ji(e,t,n.context),e._vOptions=[].map.call(e.options,Ii)):("textarea"===n.tag||Jn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Li),e.addEventListener("compositionend",Mi),e.addEventListener("change",Mi),J&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){ji(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Ii);if(i.some(function(e,t){return!C(e,r[t])}))(e.multiple?t.value.some(function(e){return Ni(e,i)}):t.value!==t.oldValue&&Ni(t.value,i))&&Di(e,"change")}}};function ji(e,t,n){Ei(e,t,n),(z||q)&&setTimeout(function(){Ei(e,t,n)},0)}function Ei(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=-1<x(r,Ii(a)),a.selected!==o&&(a.selected=o);else if(C(Ii(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Ni(t,e){return e.every(function(e){return!C(e,t)})}function Ii(e){return"_value"in e?e._value:e.value}function Li(e){e.target.composing=!0}function Mi(e){e.target.composing&&(e.target.composing=!1,Di(e.target,"input"))}function Di(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Pi(e){return!e.componentInstance||e.data&&e.data.transition?e:Pi(e.componentInstance._vnode)}var Fi={model:Ti,show:{bind:function(e,t,n){var r=t.value,i=(n=Pi(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Ci(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=Pi(n)).data&&n.data.transition?(n.data.show=!0,r?Ci(n,function(){e.style.display=e.__vOriginalDisplay}):xi(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},Ri={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Hi(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Hi(ut(t.children)):e}function Bi(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[g(o)]=i[o];return t}function Ui(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var Vi={name:"transition",props:Ri,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag||ct(e)})).length){var r=this.mode,i=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return i;var o=Hi(i);if(!o)return i;if(this._leaving)return Ui(e,i);var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:T(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var s,c,u=(o.data||(o.data={})).transition=Bi(this),l=this._vnode,f=Hi(l);if(o.data.directives&&o.data.directives.some(function(e){return"show"===e.name})&&(o.data.show=!0),f&&f.data&&(s=o,(c=f).key!==s.key||c.tag!==s.tag)&&!ct(f)&&(!f.componentInstance||!f.componentInstance._vnode.isComment)){var p=f.data.transition=m({},u);if("out-in"===r)return this._leaving=!0,rt(p,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),Ui(e,i);if("in-out"===r){if(ct(o))return l;var d,v=function(){d()};rt(u,"afterEnter",v),rt(u,"enterCancelled",v),rt(p,"delayLeave",function(e){d=e})}}return i}}},Ki=m({tag:String,moveClass:String},Ri);function zi(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Ji(e){e.data.newPos=e.elm.getBoundingClientRect()}function qi(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete Ki.mode;var Wi={Transition:Vi,TransitionGroup:{props:Ki,beforeMount:function(){var n=this,r=this._update;this._update=function(e,t){n.__patch__(n._vnode,n.kept,!1,!0),n._vnode=n.kept,r.call(n,e,t)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Bi(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),((n[c.key]=c).data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,r=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,r)&&(e.forEach(zi),e.forEach(Ji),e.forEach(qi),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,t=n.style;mi(n,r),t.transform=t.WebkitTransform=t.transitionDuration="",n.addEventListener(fi,n._moveCb=function e(t){t&&!/transform$/.test(t.propertyName)||(n.removeEventListener(fi,e),n._moveCb=null,yi(n,r))})}}))},methods:{hasMove:function(e,t){if(!si)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){ii(n,e)}),ri(n,t),n.style.display="none",this.$el.appendChild(n);var r=bi(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};mn.config.mustUseProp=Tn,mn.config.isReservedTag=Vn,mn.config.isReservedAttr=On,mn.config.getTagNamespace=Kn,mn.config.isUnknownElement=function(e){if(!B)return!0;if(Vn(e))return!1;if(e=e.toLowerCase(),null!=zn[e])return zn[e];var t=document.createElement(e);return-1<e.indexOf("-")?zn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:zn[e]=/HTMLUnknownElement/.test(t.toString())},m(mn.options.directives,Fi),m(mn.options.components,Wi),mn.prototype.__patch__=B?Si:$,mn.prototype.$mount=function(e,t){return e=e&&B?qn(e):void 0,r=e,i=t,(n=this).$el=r,n.$options.render||(n.$options.render=fe),_t(n,"beforeMount"),new St(n,function(){n._update(n._render(),i)},$,{before:function(){n._isMounted&&_t(n,"beforeUpdate")}},!0),i=!1,null==n.$vnode&&(n._isMounted=!0,_t(n,"mounted")),n;var n,r,i},B&&setTimeout(function(){E.devtools&&Q&&Q.emit("init",mn)},0);var Gi=/\{\{((?:.|\n)+?)\}\}/g,Zi=/[-.*+?^${}()|[\]\/\\]/g,Xi=e(function(e){var t=e[0].replace(Zi,"\\$&"),n=e[1].replace(Zi,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")});var Yi={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=Tr(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=Sr(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}};var Qi,eo={staticKeys:["staticStyle"],transformNode:function(e,t){t.warn;var n=Tr(e,"style");n&&(e.staticStyle=JSON.stringify(Jr(n)));var r=Sr(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},to=function(e){return(Qi=Qi||document.createElement("div")).innerHTML=e,Qi.textContent},no=s("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),ro=s("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),io=s("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),oo=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,ao="[a-zA-Z_][\\w\\-\\.]*",so="((?:"+ao+"\\:)?"+ao+")",co=new RegExp("^<"+so),uo=/^\s*(\/?)>/,lo=new RegExp("^<\\/"+so+"[^>]*>"),fo=/^<!DOCTYPE [^>]+>/i,po=/^<!\--/,vo=/^<!\[/,ho=!1;"x".replace(/x(.)?/g,function(e,t){ho=""===t});var mo=s("script,style,textarea",!0),yo={},go={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t"},_o=/&(?:lt|gt|quot|amp);/g,bo=/&(?:lt|gt|quot|amp|#10|#9);/g,$o=s("pre,textarea",!0),wo=function(e,t){return e&&$o(e)&&"\n"===t[0]};var Co,xo,ko,Ao,Oo,So,To,jo,Eo=/^@|^v-on:/,No=/^v-|^@|^:/,Io=/([^]*?)\s+(?:in|of)\s+([^]*)/,Lo=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Mo=/^\(|\)$/g,Do=/:(.*)$/,Po=/^:|^v-bind:/,Fo=/\.[^.]+/g,Ro=e(to);function Ho(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:function(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}(t),parent:n,children:[]}}function Bo(e,p){Co=p.warn||wr,So=p.isPreTag||O,To=p.mustUseProp||O,jo=p.getTagNamespace||O,ko=Cr(p.modules,"transformNode"),Ao=Cr(p.modules,"preTransformNode"),Oo=Cr(p.modules,"postTransformNode"),xo=p.delimiters;var d,v,h=[],i=!1!==p.preserveWhitespace,m=!1,y=!1;function g(e){e.pre&&(m=!1),So(e.tag)&&(y=!1);for(var t=0;t<Oo.length;t++)Oo[t](e,p)}return function(i,d){for(var e,v,h=[],m=d.expectHTML,y=d.isUnaryTag||O,g=d.canBeLeftOpenTag||O,a=0;i;){if(e=i,v&&mo(v)){var r=0,o=v.toLowerCase(),t=yo[o]||(yo[o]=new RegExp("([\\s\\S]*?)(</"+o+"[^>]*>)","i")),n=i.replace(t,function(e,t,n){return r=n.length,mo(o)||"noscript"===o||(t=t.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),wo(o,t)&&(t=t.slice(1)),d.chars&&d.chars(t),""});a+=i.length-n.length,i=n,A(o,a-r,a)}else{var s=i.indexOf("<");if(0===s){if(po.test(i)){var c=i.indexOf("--\x3e");if(0<=c){d.shouldKeepComment&&d.comment(i.substring(4,c)),C(c+3);continue}}if(vo.test(i)){var u=i.indexOf("]>");if(0<=u){C(u+2);continue}}var l=i.match(fo);if(l){C(l[0].length);continue}var f=i.match(lo);if(f){var p=a;C(f[0].length),A(f[1],p,a);continue}var _=x();if(_){k(_),wo(v,i)&&C(1);continue}}var b=void 0,$=void 0,w=void 0;if(0<=s){for($=i.slice(s);!(lo.test($)||co.test($)||po.test($)||vo.test($)||(w=$.indexOf("<",1))<0);)s+=w,$=i.slice(s);b=i.substring(0,s),C(s)}s<0&&(b=i,i=""),d.chars&&b&&d.chars(b)}if(i===e){d.chars&&d.chars(i);break}}function C(e){a+=e,i=i.substring(e)}function x(){var e=i.match(co);if(e){var t,n,r={tagName:e[1],attrs:[],start:a};for(C(e[0].length);!(t=i.match(uo))&&(n=i.match(oo));)C(n[0].length),r.attrs.push(n);if(t)return r.unarySlash=t[1],C(t[0].length),r.end=a,r}}function k(e){var t=e.tagName,n=e.unarySlash;m&&("p"===v&&io(t)&&A(v),g(t)&&v===t&&A(t));for(var r,i,o,a=y(t)||!!n,s=e.attrs.length,c=new Array(s),u=0;u<s;u++){var l=e.attrs[u];ho&&-1===l[0].indexOf('""')&&(""===l[3]&&delete l[3],""===l[4]&&delete l[4],""===l[5]&&delete l[5]);var f=l[3]||l[4]||l[5]||"",p="a"===t&&"href"===l[1]?d.shouldDecodeNewlinesForHref:d.shouldDecodeNewlines;c[u]={name:l[1],value:(r=f,i=p,o=i?bo:_o,r.replace(o,function(e){return go[e]}))}}a||(h.push({tag:t,lowerCasedTag:t.toLowerCase(),attrs:c}),v=t),d.start&&d.start(t,c,a,e.start,e.end)}function A(e,t,n){var r,i;if(null==t&&(t=a),null==n&&(n=a),e&&(i=e.toLowerCase()),e)for(r=h.length-1;0<=r&&h[r].lowerCasedTag!==i;r--);else r=0;if(0<=r){for(var o=h.length-1;r<=o;o--)d.end&&d.end(h[o].tag,t,n);h.length=r,v=r&&h[r-1].tag}else"br"===i?d.start&&d.start(e,[],!0,t,n):"p"===i&&(d.start&&d.start(e,[],!1,t,n),d.end&&d.end(e,t,n))}A()}(e,{warn:Co,expectHTML:p.expectHTML,isUnaryTag:p.isUnaryTag,canBeLeftOpenTag:p.canBeLeftOpenTag,shouldDecodeNewlines:p.shouldDecodeNewlines,shouldDecodeNewlinesForHref:p.shouldDecodeNewlinesForHref,shouldKeepComment:p.comments,start:function(e,t,n){var r=v&&v.ns||jo(e);z&&"svg"===r&&(t=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Jo.test(r.name)||(r.name=r.name.replace(qo,""),t.push(r))}return t}(t));var i,o,a,s,c,u=Ho(e,t,v);r&&(u.ns=r),"style"!==(i=u).tag&&("script"!==i.tag||i.attrsMap.type&&"text/javascript"!==i.attrsMap.type)||Y()||(u.forbidden=!0);for(var l=0;l<Ao.length;l++)u=Ao[l](u,p)||u;if(m||(null!=Tr(o=u,"v-pre")&&(o.pre=!0),u.pre&&(m=!0)),So(u.tag)&&(y=!0),m?function(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}(u):u.processed||(Vo(u),function(e){var t=Tr(e,"v-if");if(t)e.if=t,Ko(e,{exp:t,block:e});else{null!=Tr(e,"v-else")&&(e.else=!0);var n=Tr(e,"v-else-if");n&&(e.elseif=n)}}(u),null!=Tr(a=u,"v-once")&&(a.once=!0),Uo(u,p)),d?h.length||d.if&&(u.elseif||u.else)&&Ko(d,{exp:u.elseif,block:u}):d=u,v&&!u.forbidden)if(u.elseif||u.else)s=u,(c=function(e){var t=e.length;for(;t--;){if(1===e[t].type)return e[t];e.pop()}}(v.children))&&c.if&&Ko(c,{exp:s.elseif,block:s});else if(u.slotScope){v.plain=!1;var f=u.slotTarget||'"default"';(v.scopedSlots||(v.scopedSlots={}))[f]=u}else v.children.push(u),u.parent=v;n?g(u):(v=u,h.push(u))},end:function(){var e=h[h.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!y&&e.children.pop(),h.length-=1,v=h[h.length-1],g(e)},chars:function(e){if(v&&(!z||"textarea"!==v.tag||v.attrsMap.placeholder!==e)){var t,n,r=v.children;if(e=y||e.trim()?"script"===(t=v).tag||"style"===t.tag?e:Ro(e):i&&r.length?" ":"")!m&&" "!==e&&(n=function(e,t){var n=t?Xi(t):Gi;if(n.test(e)){for(var r,i,o,a=[],s=[],c=n.lastIndex=0;r=n.exec(e);){c<(i=r.index)&&(s.push(o=e.slice(c,i)),a.push(JSON.stringify(o)));var u=br(r[1].trim());a.push("_s("+u+")"),s.push({"@binding":u}),c=i+r[0].length}return c<e.length&&(s.push(o=e.slice(c)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}(e,xo))?r.push({type:2,expression:n.expression,tokens:n.tokens,text:e}):" "===e&&r.length&&" "===r[r.length-1].text||r.push({type:3,text:e})}},comment:function(e){v.children.push({type:3,text:e,isComment:!0})}}),d}function Uo(e,t){var n,r,i,o;(r=Sr(n=e,"key"))&&(n.key=r),e.plain=!e.key&&!e.attrsList.length,(o=Sr(i=e,"ref"))&&(i.ref=o,i.refInFor=function(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(i)),function(e){if("slot"===e.tag)e.slotName=Sr(e,"name");else{var t;"template"===e.tag?(t=Tr(e,"scope"),e.slotScope=t||Tr(e,"slot-scope")):(t=Tr(e,"slot-scope"))&&(e.slotScope=t);var n=Sr(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,"template"===e.tag||e.slotScope||kr(e,"slot",n))}}(e),function(e){var t;(t=Sr(e,"is"))&&(e.component=t);null!=Tr(e,"inline-template")&&(e.inlineTemplate=!0)}(e);for(var a=0;a<ko.length;a++)e=ko[a](e,t)||e;!function(e){var t,n,r,i,o,a,s,c=e.attrsList;for(t=0,n=c.length;t<n;t++)if(r=i=c[t].name,o=c[t].value,No.test(r))if(e.hasBindings=!0,(a=zo(r))&&(r=r.replace(Fo,"")),Po.test(r))r=r.replace(Po,""),o=br(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=g(r))&&(r="innerHTML")),a.camel&&(r=g(r)),a.sync&&Or(e,"update:"+g(r),Er(o,"$event"))),s||!e.component&&To(e.tag,e.attrsMap.type,r)?xr(e,r,o):kr(e,r,o);else if(Eo.test(r))r=r.replace(Eo,""),Or(e,r,o,a,!1);else{var u=(r=r.replace(No,"")).match(Do),l=u&&u[1];l&&(r=r.slice(0,-(l.length+1))),p=r,d=i,v=o,h=l,m=a,((f=e).directives||(f.directives=[])).push({name:p,rawName:d,value:v,arg:h,modifiers:m}),f.plain=!1}else kr(e,r,JSON.stringify(o)),!e.component&&"muted"===r&&To(e.tag,e.attrsMap.type,r)&&xr(e,r,"true");var f,p,d,v,h,m}(e)}function Vo(e){var t;if(t=Tr(e,"v-for")){var n=function(e){var t=e.match(Io);if(!t)return;var n={};n.for=t[2].trim();var r=t[1].trim().replace(Mo,""),i=r.match(Lo);i?(n.alias=r.replace(Lo,""),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(t);n&&m(e,n)}}function Ko(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function zo(e){var t=e.match(Fo);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}var Jo=/^xmlns:NS\d+/,qo=/^NS\d+:/;function Wo(e){return Ho(e.tag,e.attrsList.slice(),e.parent)}var Go=[Yi,eo,{preTransformNode:function(e,t){if("input"===e.tag){var n,r=e.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=Sr(e,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=Tr(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=Tr(e,"v-else",!0),s=Tr(e,"v-else-if",!0),c=Wo(e);Vo(c),Ar(c,"type","checkbox"),Uo(c,t),c.processed=!0,c.if="("+n+")==='checkbox'"+o,Ko(c,{exp:c.if,block:c});var u=Wo(e);Tr(u,"v-for",!0),Ar(u,"type","radio"),Uo(u,t),Ko(c,{exp:"("+n+")==='radio'"+o,block:u});var l=Wo(e);return Tr(l,"v-for",!0),Ar(l,":type",n),Uo(l,t),Ko(c,{exp:i,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}];var Zo,Xo,Yo,Qo={expectHTML:!0,modules:Go,directives:{model:function(e,t,n){var r,i,o,a,s,c,u,l,f,p,d,v,h,m,y,g,_=t.value,b=t.modifiers,$=e.tag,w=e.attrsMap.type;if(e.component)return jr(e,_,b),!1;if("select"===$)h=e,m=_,g=(g='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+((y=b)&&y.number?"_n(val)":"val")+"});")+" "+Er(m,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Or(h,"change",g,null,!0);else if("input"===$&&"checkbox"===w)c=e,u=_,f=(l=b)&&l.number,p=Sr(c,"value")||"null",d=Sr(c,"true-value")||"true",v=Sr(c,"false-value")||"false",xr(c,"checked","Array.isArray("+u+")?_i("+u+","+p+")>-1"+("true"===d?":("+u+")":":_q("+u+","+d+")")),Or(c,"change","var $$a="+u+",$$el=$event.target,$$c=$$el.checked?("+d+"):("+v+");if(Array.isArray($$a)){var $$v="+(f?"_n("+p+")":p)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Er(u,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Er(u,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Er(u,"$$c")+"}",null,!0);else if("input"===$&&"radio"===w)r=e,i=_,a=(o=b)&&o.number,s=Sr(r,"value")||"null",xr(r,"checked","_q("+i+","+(s=a?"_n("+s+")":s)+")"),Or(r,"change",Er(i,s),null,!0);else if("input"===$||"textarea"===$)!function(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?Fr:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=Er(t,l);c&&(f="if($event.target.composing)return;"+f),xr(e,"value","("+t+")"),Or(e,u,f,null,!0),(s||a)&&Or(e,"blur","$forceUpdate()")}(e,_,b);else if(!E.isReservedTag($))return jr(e,_,b),!1;return!0},text:function(e,t){t.value&&xr(e,"textContent","_s("+t.value+")")},html:function(e,t){t.value&&xr(e,"innerHTML","_s("+t.value+")")}},isPreTag:function(e){return"pre"===e},isUnaryTag:no,mustUseProp:Tn,canBeLeftOpenTag:ro,isReservedTag:Vn,getTagNamespace:Kn,staticKeys:(Zo=Go,Zo.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(","))},ea=e(function(e){return s("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))});function ta(e,t){e&&(Xo=ea(t.staticKeys||""),Yo=t.isReservedTag||O,function e(t){t.static=function(e){if(2===e.type)return!1;if(3===e.type)return!0;return!(!e.pre&&(e.hasBindings||e.if||e.for||c(e.tag)||!Yo(e.tag)||function(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}(e)||!Object.keys(e).every(Xo)))}(t);if(1===t.type){if(!Yo(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var n=0,r=t.children.length;n<r;n++){var i=t.children[n];e(i),i.static||(t.static=!1)}if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++){var s=t.ifConditions[o].block;e(s),s.static||(t.static=!1)}}}(e),function e(t,n){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var r=0,i=t.children.length;r<i;r++)e(t.children[r],n||!!t.for);if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++)e(t.ifConditions[o].block,n)}}(e,!1))}var na=/^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,ra=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,ia={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},oa={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:" ",up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete"]},aa=function(e){return"if("+e+")return null;"},sa={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:aa("$event.target !== $event.currentTarget"),ctrl:aa("!$event.ctrlKey"),shift:aa("!$event.shiftKey"),alt:aa("!$event.altKey"),meta:aa("!$event.metaKey"),left:aa("'button' in $event && $event.button !== 0"),middle:aa("'button' in $event && $event.button !== 1"),right:aa("'button' in $event && $event.button !== 2")};function ca(e,t,n){var r=t?"nativeOn:{":"on:{";for(var i in e)r+='"'+i+'":'+ua(i,e[i])+",";return r.slice(0,-1)+"}"}function ua(t,e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return ua(t,e)}).join(",")+"]";var n=ra.test(e.value),r=na.test(e.value);if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)if(sa[s])o+=sa[s],ia[s]&&a.push(s);else if("exact"===s){var c=e.modifiers;o+=aa(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);return a.length&&(i+="if(!('button' in $event)&&"+a.map(la).join("&&")+")return null;"),o&&(i+=o),"function($event){"+i+(n?"return "+e.value+"($event)":r?"return ("+e.value+")($event)":e.value)+"}"}return n||r?e.value:"function($event){"+e.value+"}"}function la(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=ia[e],r=oa[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var fa={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(t,n){t.wrapData=function(e){return"_b("+e+",'"+t.tag+"',"+n.value+","+(n.modifiers&&n.modifiers.prop?"true":"false")+(n.modifiers&&n.modifiers.sync?",true":"")+")"}},cloak:$},pa=function(e){this.options=e,this.warn=e.warn||wr,this.transforms=Cr(e.modules,"transformCode"),this.dataGenFns=Cr(e.modules,"genData"),this.directives=m(m({},fa),e.directives);var t=e.isReservedTag||O;this.maybeComponent=function(e){return!t(e.tag)},this.onceId=0,this.staticRenderFns=[]};function da(e,t){var n=new pa(t);return{render:"with(this){return "+(e?va(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function va(e,t){if(e.staticRoot&&!e.staticProcessed)return ha(e,t);if(e.once&&!e.onceProcessed)return ma(e,t);if(e.for&&!e.forProcessed)return f=t,v=(l=e).for,h=l.alias,m=l.iterator1?","+l.iterator1:"",y=l.iterator2?","+l.iterator2:"",l.forProcessed=!0,(d||"_l")+"(("+v+"),function("+h+m+y+"){return "+(p||va)(l,f)+"})";if(e.if&&!e.ifProcessed)return ya(e,t);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return function(e,t){var n=e.slotName||'"default"',r=ba(e,t),i="_t("+n+(r?","+r:""),o=e.attrs&&"{"+e.attrs.map(function(e){return g(e.name)+":"+e.value}).join(",")+"}",a=e.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}(e,t);var n;if(e.component)a=e.component,c=t,u=(s=e).inlineTemplate?null:ba(s,c,!0),n="_c("+a+","+ga(s,c)+(u?","+u:"")+")";else{var r=e.plain?void 0:ga(e,t),i=e.inlineTemplate?null:ba(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return ba(e,t)||"void 0";var a,s,c,u,l,f,p,d,v,h,m,y}function ha(e,t){return e.staticProcessed=!0,t.staticRenderFns.push("with(this){return "+va(e,t)+"}"),"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function ma(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return ya(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+va(e,t)+","+t.onceId+++","+n+")":va(e,t)}return ha(e,t)}function ya(e,t,n,r){return e.ifProcessed=!0,function e(t,n,r,i){if(!t.length)return i||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+a(o.block)+":"+e(t,n,r,i):""+a(o.block);function a(e){return r?r(e,n):e.once?ma(e,n):va(e,n)}}(e.ifConditions.slice(),t,n,r)}function ga(e,t){var n,r,i="{",o=function(e,t){var n=e.directives;if(!n)return;var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=t.directives[o.name];u&&(a=!!u(e,o,t.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(c)return s.slice(0,-1)+"]"}(e,t);o&&(i+=o+","),e.key&&(i+="key:"+e.key+","),e.ref&&(i+="ref:"+e.ref+","),e.refInFor&&(i+="refInFor:true,"),e.pre&&(i+="pre:true,"),e.component&&(i+='tag:"'+e.tag+'",');for(var a=0;a<t.dataGenFns.length;a++)i+=t.dataGenFns[a](e);if(e.attrs&&(i+="attrs:{"+Ca(e.attrs)+"},"),e.props&&(i+="domProps:{"+Ca(e.props)+"},"),e.events&&(i+=ca(e.events,!1,t.warn)+","),e.nativeEvents&&(i+=ca(e.nativeEvents,!0,t.warn)+","),e.slotTarget&&!e.slotScope&&(i+="slot:"+e.slotTarget+","),e.scopedSlots&&(i+=(n=e.scopedSlots,r=t,"scopedSlots:_u(["+Object.keys(n).map(function(e){return _a(e,n[e],r)}).join(",")+"]),")),e.model&&(i+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var s=function(e,t){var n=e.children[0];if(1===n.type){var r=da(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}(e,t);s&&(i+=s+",")}return i=i.replace(/,$/,"")+"}",e.wrapData&&(i=e.wrapData(i)),e.wrapListeners&&(i=e.wrapListeners(i)),i}function _a(e,t,n){return t.for&&!t.forProcessed?(r=e,o=n,a=(i=t).for,s=i.alias,c=i.iterator1?","+i.iterator1:"",u=i.iterator2?","+i.iterator2:"",i.forProcessed=!0,"_l(("+a+"),function("+s+c+u+"){return "+_a(r,i,o)+"})"):"{key:"+e+",fn:"+("function("+String(t.slotScope)+"){return "+("template"===t.tag?t.if?t.if+"?"+(ba(t,n)||"undefined")+":undefined":ba(t,n)||"undefined":va(t,n))+"}")+"}";var r,i,o,a,s,c,u}function ba(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||va)(a,t);var s=n?function(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if($a(i)||i.ifConditions&&i.ifConditions.some(function(e){return $a(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}(o,t.maybeComponent):0,c=i||wa;return"["+o.map(function(e){return c(e,t)}).join(",")+"]"+(s?","+s:"")}}function $a(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function wa(e,t){return 1===e.type?va(e,t):3===e.type&&e.isComment?(r=e,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=e).type?n.expression:xa(JSON.stringify(n.text)))+")";var n,r}function Ca(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+xa(r.value)+","}return t.slice(0,-1)}function xa(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)");function ka(t,n){try{return new Function(t)}catch(e){return n.push({err:e,code:t}),$}}var Aa,Oa,Sa=(Aa=function(e,t){var n=Bo(e.trim(),t);!1!==t.optimize&&ta(n,t);var r=da(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(s){function e(e,t){var n=Object.create(s),r=[],i=[];if(n.warn=function(e,t){(t?i:r).push(e)},t)for(var o in t.modules&&(n.modules=(s.modules||[]).concat(t.modules)),t.directives&&(n.directives=m(Object.create(s.directives||null),t.directives)),t)"modules"!==o&&"directives"!==o&&(n[o]=t[o]);var a=Aa(e,n);return a.errors=r,a.tips=i,a}return{compile:e,compileToFunctions:(c=e,u=Object.create(null),function(e,t,n){(t=m({},t)).warn,delete t.warn;var r=t.delimiters?String(t.delimiters)+e:e;if(u[r])return u[r];var i=c(e,t),o={},a=[];return o.render=ka(i.render,a),o.staticRenderFns=i.staticRenderFns.map(function(e){return ka(e,a)}),u[r]=o})};var c,u})(Qo).compileToFunctions;function Ta(e){return(Oa=Oa||document.createElement("div")).innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',0<Oa.innerHTML.indexOf("&#10;")}var ja=!!B&&Ta(!1),Ea=!!B&&Ta(!0),Na=e(function(e){var t=qn(e);return t&&t.innerHTML}),Ia=mn.prototype.$mount;return mn.prototype.$mount=function(e,t){if((e=e&&qn(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Na(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=function(e){{if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}}(e));if(r){var i=Sa(r,{shouldDecodeNewlines:ja,shouldDecodeNewlinesForHref:Ea,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return Ia.call(this,e,t)},mn.compile=Sa,mn});
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DatePicker=t():e.DatePicker=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=5)}([function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(i[r]=!0)}for(a=0;a<t.length;a++){var s=t[a];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t){e.exports=function(e,t,n,i,a,r){var s,o=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(s=e,o=e.default);var c="function"==typeof o?o.options:o;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId=a);var u;if(r?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=u):i&&(u=i),u){var d=c.functional,h=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(e,t){return u.call(t),h(e,t)}):c.beforeCreate=h?[].concat(h,u):[u]}return{esModule:s,exports:o,options:c}}},function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=u[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(r(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],a=0;a<n.parts.length;a++)s.push(r(n.parts[a]));u[n.id]={id:n.id,refs:1,parts:s}}}}function a(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function r(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(f)return m;i.parentNode.removeChild(i)}if(g){var r=p++;i=h||(h=a()),t=s.bind(null,i,r,!1),n=s.bind(null,i,r,!0)}else i=a(),t=o.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function s(e,t,n,i){var a=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=v(t,a);else{var r=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function o(e,t){var n=t.css,i=t.media,a=t.sourceMap;if(i&&e.setAttribute("media",i),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(15),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),h=null,p=0,f=!1,m=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){f=n;var a=c(e,t);return i(a),function(t){for(var n=[],r=0;r<a.length;r++){var s=a[r],o=u[s.id];o.refs--,n.push(o)}t?(a=c(e,t),i(a)):a=[];for(var r=0;r<n.length;r++){var o=n[r];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete u[o.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function i(e){n(13)}var a=n(7),r=n(11),s=n(1),o=i,l=s(a.a,r.a,!1,o,null,null);t.a=l.exports},function(e,t,n){"use strict";t.a={zh:{days:["日","一","二","三","四","五","六"],months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],pickers:["未来7天","未来30天","最近7天","最近30天"],placeholder:{date:"请选择日期",dateRange:"请选择日期范围"}},en:{days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],pickers:["next 7 days","next 30 days","previous 7 days","previous 30 days"],placeholder:{date:"Select Date",dateRange:"Select Date Range"}},ro:{days:["Lun","Mar","Mie","Joi","Vin","Sâm","Dum"],months:["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Noi","Dec"],pickers:["urmatoarele 7 zile","urmatoarele 30 zile","ultimele 7 zile","ultimele 30 zile"],placeholder:{date:"Selectați Data",dateRange:"Selectați Intervalul De Date"}},fr:{days:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],months:["Jan","Fev","Mar","Avr","Mai","Juin","Juil","Aout","Sep","Oct","Nov","Dec"],pickers:["7 jours suivants","30 jours suivants","7 jours précédents","30 jours précédents"],placeholder:{date:"Sélectionnez une date",dateRange:"Sélectionnez une période"}},es:{days:["Dom","Lun","mar","Mie","Jue","Vie","Sab"],months:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],pickers:["próximos 7 días","próximos 30 días","7 días anteriores","30 días anteriores"],placeholder:{date:"Seleccionar fecha",dateRange:"Seleccionar un rango de fechas"}},"pt-br":{days:["Dom","Seg","Ter","Qua","Quin","Sex","Sáb"],months:["Jan","Fev","Mar","Abr","Maio","Jun","Jul","Ago","Set","Out","Nov","Dez"],pickers:["próximos 7 dias","próximos 30 dias","7 dias anteriores"," 30 dias anteriores"],placeholder:{date:"Selecione uma data",dateRange:"Selecione um período"}},ru:{days:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],pickers:["след. 7 дней","след. 30 дней","прош. 7 дней","прош. 30 дней"],placeholder:{date:"Выберите дату",dateRange:"Выберите период"}},de:{days:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],pickers:["nächsten 7 Tage","nächsten 30 Tage","vorigen 7 Tage","vorigen 30 Tage"],placeholder:{date:"Datum auswählen",dateRange:"Zeitraum auswählen"}},it:{days:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],months:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],pickers:["successivi 7 giorni","successivi 30 giorni","precedenti 7 giorni","precedenti 30 giorni"],placeholder:{date:"Seleziona una data",dateRange:"Seleziona un intervallo date"}},cs:{days:["Ned","Pon","Úte","Stř","Čtv","Pát","Sob"],months:["Led","Úno","Bře","Dub","Kvě","Čer","Čerc","Srp","Zář","Říj","Lis","Pro"],pickers:["příštích 7 dní","příštích 30 dní","předchozích 7 dní","předchozích 30 dní"],placeholder:{date:"Vyberte datum",dateRange:"Vyberte časové rozmezí"}},sl:{days:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"],months:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],pickers:["naslednjih 7 dni","naslednjih 30 dni","prejšnjih 7 dni","prejšnjih 30 dni"],placeholder:{date:"Izberite datum",dateRange:"Izberite razpon med 2 datumoma"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3);i.a.install=function(e){e.component(i.a.name,i.a)},t.default=i.a},function(e,t,n){"use strict";var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseInt(e/t);return Array.apply(null,{length:n}).map(function(e,n){return n*t})},a=function(e){var t=(e||"").split(":");if(t.length>=2){return{hours:parseInt(t[0],10),minutes:parseInt(t[1],10)}}return null},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"24",n=e.hours;n="24"===t?n:n%12||12,n=n<10?"0"+n:n;var i=e.minutes<10?"0"+e.minutes:e.minutes,a=n+":"+i;return"12"===t&&(a+=e.hours>=12?" pm":" am"),a};t.a={props:{startAt:null,endAt:null,value:null,show:Boolean},data:function(){var e=this.$parent.translation,t=this.$parent.minuteStep,n=[i(24,1),i(60,t||1)];return 0===t&&n.push(i(60,1)),{months:e.months,dates:[],years:[],now:new Date,currentPanel:"date",times:n}},computed:{days:function(){var e=this.$parent.translation.days,t=+this.$parent.firstDayOfWeek;return e.concat(e).slice(t,t+7)},timeType:function(){return/h+/.test(this.$parent.format)?"12":"24"},timeSelectOptions:function(){var e=[],t=this.$parent.timePickerOptions;if(!t)return[];if("function"==typeof t)return t()||[];var n=a(t.start),i=a(t.end),s=a(t.step);if(n&&i&&s)for(var o=n.minutes+60*n.hours,l=i.minutes+60*i.hours,c=s.minutes+60*s.hours,u=Math.floor((l-o)/c),d=0;d<=u;d++){var h=o+d*c,p=Math.floor(h/60),f=h%60,m={hours:p,minutes:f};e.push({value:m,label:r(m,this.timeType)})}return e},currentYear:function(){return this.now.getFullYear()},currentMonth:function(){return this.now.getMonth()},curHour:function(){return this.now.getHours()},curMinute:function(){return this.now.getMinutes()},curSecond:function(){return this.now.getSeconds()}},created:function(){this.updateCalendar()},watch:{show:function(e){e&&(this.currentPanel="date",this.updateNow())},value:{handler:"updateNow",immediate:!0},now:"updateCalendar"},filters:{timeText:function(e){return("00"+e).slice(String(e).length)}},methods:{updateNow:function(){this.now=this.value?new Date(this.value):new Date},updateCalendar:function(){function e(e,t,n,i){return Array.apply(null,{length:n}).map(function(n,a){var r=t+a,s=new Date(e.getFullYear(),e.getMonth(),r,0,0,0);return s.setDate(r),{title:s.toLocaleDateString(),date:s,day:r,classes:i}})}var t=this.$parent.firstDayOfWeek,n=new Date(this.now);n.setDate(0);var i=(n.getDay()+7-t)%7+1,a=n.getDate()-(i-1),r=e(n,a,i,"lastMonth");n.setMonth(n.getMonth()+2,0);var s=n.getDate(),o=e(n,1,s,"curMonth");n.setMonth(n.getMonth()+1,1);for(var l=42-(i+s),c=e(n,1,l,"nextMonth"),u=0,d=0,h=r.concat(o,c),p=new Array(6);u<42;)p[d++]=h.slice(u,u+=7);this.dates=p},isDisabled:function(e){var t=new Date(e).getTime();return!!(this.$parent.disabledDays.some(function(e){return new Date(e).setHours(0,0,0,0)===t})||""!==this.$parent.notBefore&&t<new Date(this.$parent.notBefore).getTime()||""!==this.$parent.notAfter&&t>new Date(this.$parent.notAfter).getTime()||this.startAt&&t<new Date(this.startAt).setHours(0,0,0,0)||this.endAt&&t>new Date(this.endAt).setHours(0,0,0,0))},getDateClasses:function(e){var t=[],n=new Date(e.date).setHours(0,0,0,0),i=(new Date(e.date).setHours(23,59,59,999),this.value?new Date(this.value).setHours(0,0,0,0):0),a=this.startAt?new Date(this.startAt).setHours(0,0,0,0):0,r=this.endAt?new Date(this.endAt).setHours(0,0,0,0):0,s=(new Date).setHours(0,0,0,0);return this.isDisabled(n)?"disabled":(t.push(e.classes),n===s&&t.push("today"),i&&(n===i?t.push("current"):a&&n<=i?t.push("inrange"):r&&n>=i&&t.push("inrange")),t.join(" "))},getTimeClasses:function(e,t){var n=void 0,i=void 0,a=this.startAt?new Date(this.startAt):0,r=this.endAt?new Date(this.endAt):0,s=[];switch(t){case-1:n=60*this.curHour+this.curMinute,i=new Date(this.now).setHours(Math.floor(e/60),e%60,0);break;case 0:n=this.curHour,i=new Date(this.now).setHours(e);break;case 1:n=this.curMinute,i=new Date(this.now).setMinutes(e);break;case 2:n=this.curSecond,i=new Date(this.now).setSeconds(e)}return""!==this.$parent.notBefore&&i<new Date(this.$parent.notBefore).getTime()||""!==this.$parent.notAfter&&i>new Date(this.$parent.notAfter).getTime()?"disabled":(e===n?s.push("cur-time"):a?i<a&&s.push("disabled"):r&&i>r&&s.push("disabled"),s.join(" "))},showMonths:function(){"months"===this.currentPanel?this.currentPanel="date":this.currentPanel="months"},showYears:function(){if("years"===this.currentPanel)this.currentPanel="date";else{for(var e=10*Math.floor(this.now.getFullYear()/10),t=[],n=0;n<10;n++)t.push(e+n);this.years=t,this.currentPanel="years"}},changeYear:function(e){if("years"===this.currentPanel)this.years=this.years.map(function(t){return t+10*e});else{var t=new Date(this.now);t.setFullYear(t.getFullYear()+e,t.getMonth(),1),this.now=t}},changeMonth:function(e){var t=new Date(this.now);t.setMonth(t.getMonth()+e,1),this.now=t},scrollIntoView:function(e,t){if(!t)return void(e.scrollTop=0);var n=t.offsetTop,i=t.offsetTop+t.offsetHeight,a=e.scrollTop,r=a+e.clientHeight;n<a?e.scrollTop=n:i>r&&(e.scrollTop=i-e.clientHeight)},selectDate:function(e){var t=this;if(-1===this.getDateClasses(e).indexOf("disabled")){var n=new Date(e.date);"datetime"===this.$parent.type&&(this.value instanceof Date&&n.setHours(this.value.getHours(),this.value.getMinutes(),this.value.getSeconds()),this.startAt&&n.getTime()<new Date(this.startAt).getTime()?n=new Date(this.startAt):this.endAt&&n.getTime()>new Date(this.endAt).getTime()&&(n=new Date(this.endAt)),this.currentPanel="time",this.$nextTick(function(){Array.prototype.forEach.call(t.$el.querySelectorAll(".mx-time-list-wrapper"),function(e){t.scrollIntoView(e,e.querySelector(".cur-time"))})})),this.now=n,this.$emit("input",n),this.$emit("select")}},isDisabledYear:function(e){if(this.value){var t=new Date(this.now).setFullYear(e);return this.isDisabled(t)}return!1},isDisabledMonth:function(e){if(this.value){var t=new Date(this.now).setMonth(e);return this.isDisabled(t)}return!1},selectYear:function(e){if(!this.isDisabledYear(e)){var t=new Date(this.now);t.setFullYear(e),this.now=t,this.value&&(this.$emit("input",t),this.$emit("select",!0)),this.currentPanel="months"}},selectMonth:function(e){if(!this.isDisabledMonth(e)){var t=new Date(this.now);t.setMonth(e),this.now=t,this.value&&(this.$emit("input",t),this.$emit("select",!0)),this.currentPanel="date"}},selectTime:function(e,t){if(-1===this.getTimeClasses(e,t).indexOf("disabled")){var n=new Date(this.now);0===t?n.setHours(e):1===t?n.setMinutes(e):2===t&&n.setSeconds(e),this.now=n,this.$emit("input",n),this.$emit("select")}},pickTime:function(e){if(-1===this.getTimeClasses(60*e.hours+e.minutes,-1).indexOf("disabled")){var t=new Date(this.now);t.setHours(e.hours,e.minutes,0),this.now=t,this.$emit("input",t),this.$emit("select")}}}}},function(e,t,n){"use strict";var i=n(10),a=n(4),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e){return null!==e&&"object"===(void 0===e?"undefined":s(e))};t.a={name:"DatePicker",components:{CalendarPanel:i.a},props:{value:null,format:{type:String,default:"yyyy-MM-dd"},customFormatter:{type:Function},range:{type:Boolean,default:!1},type:{type:String,default:"date"},width:{type:[String,Number],default:210},placeholder:String,lang:{type:[String,Object],default:"zh"},shortcuts:{type:[Boolean,Array],default:!0},disabledDays:{type:Array,default:function(){return[]}},notBefore:{default:""},notAfter:{default:""},firstDayOfWeek:{default:7,type:Number,validator:function(e){return e>=1&&e<=7}},minuteStep:{type:Number,default:0,validator:function(e){return e>=0&&e<=60}},timePickerOptions:{type:[Object,Function],default:function(){return null}},confirm:{type:Boolean,default:!1},inputClass:{type:String,default:"mx-input"},confirmText:{type:String,default:"OK"},disabled:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},rangeSeparator:{type:String,default:"~"},inputName:{type:String,default:"date"}},data:function(){return{showPopup:!1,showCloseIcon:!1,currentValue:this.value,position:null,userInput:null,ranges:[]}},watch:{value:{handler:function(e){this.range?this.currentValue=this.isValidRange(e)?e.slice(0,2):[void 0,void 0]:this.currentValue=this.isValidDate(e)?e:void 0},immediate:!0},showPopup:function(e){e?this.$nextTick(this.displayPopup):this.userInput=null}},computed:{translation:function(){return o(this.lang)?r({},a.a.en,this.lang):a.a[this.lang]||a.a.en},innerPlaceholder:function(){return this.placeholder||(this.range?this.translation.placeholder.dateRange:this.translation.placeholder.date)},text:function(){return!this.range&&this.isValidDate(this.value)?null!==this.userInput?this.userInput:this.stringify(this.value):this.range&&this.isValidRange(this.value)?this.stringify(this.value[0])+" "+this.rangeSeparator+" "+this.stringify(this.value[1]):""},computedWidth:function(){return"string"==typeof this.width&&/^\d+$/.test(this.width)||"number"==typeof this.width?this.width+"px":this.width}},methods:{handleInput:function(e){this.userInput=e.target.value},handleChange:function(e){var t=e.target.value,n=this.parseDate(t,this.format);if(n&&this.editable&&!this.range){if(this.notBefore&&n<new Date(this.notBefore))return;if(this.notAfter&&n>new Date(this.notAfter))return;for(var i=0,a=this.disabledDays.length;i<a;i++)if(n.getTime()===new Date(this.disabledDays[i]).getTime())return;this.$emit("input",n),this.$emit("change",n),this.closePopup()}},updateDate:function(){var e=this.currentValue;(!this.range&&e||this.range&&e[0]&&e[1])&&(this.$emit("input",e),this.$emit("change",e))},confirmDate:function(){this.updateDate(),this.closePopup(),this.$emit("confirm",this.currentValue)},selectDate:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.confirm||this.disabled||(this.updateDate(),e||"date"!==this.type||this.range||this.closePopup())},closePopup:function(){this.showPopup=!1},togglePopup:function(){this.showPopup?(this.$refs.input.blur(),this.showPopup=!1):(this.$refs.input.focus(),this.showPopup=!0)},hoverIcon:function(e){this.disabled||("mouseenter"===e.type&&this.text&&(this.showCloseIcon=!0),"mouseleave"===e.type&&(this.showCloseIcon=!1))},clickIcon:function(){this.disabled||(this.showCloseIcon?(this.$emit("input",""),this.$emit("change","")):this.togglePopup())},parseDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd",n=!0,i={y:0,M:1,d:0,H:0,h:0,m:0,s:0};return t.replace(/([^yMdHhms]*?)(([yMdHhms])\3*)([^yMdHhms]*?)/g,function(t,a,r,s,o,l,c){var u=new RegExp(a+"(\\d{"+r.length+"})"+o);return-1===e.search(u)?n=!1:e=e.replace(u,function(e,t){return i[s]=parseInt(t),""}),""}),!!n&&(i.M--,new Date(i.y,i.M,i.d,i.H||i.h,i.m,i.s))},formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd HH:mm:ss",n=e.getHours(),i={"M+":e.getMonth()+1,"[Dd]+":e.getDate(),"H+":n,"h+":n%12||12,"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds(),a:n>=12?"pm":"am",A:n>=12?"PM":"AM"},a=t.replace(/[Yy]+/g,function(t){return(""+e.getFullYear()).slice(4-t.length)});return Object.keys(i).forEach(function(e){a=a.replace(new RegExp(e),function(t){var n=""+i[e];return 1===t.length?n:("00"+n).slice(n.length)})}),a},stringify:function(e){return"function"==typeof this.customFormatter?this.customFormatter(new Date(e)):this.formatDate(new Date(e),this.format)},isValidDate:function(e){return!!new Date(e).getTime()},isValidRange:function(e){return Array.isArray(e)&&2===e.length&&this.isValidDate(e[0])&&this.isValidDate(e[1])},selectRange:function(e){this.$emit("input",[e.start,e.end]),this.$emit("change",[e.start,e.end])},initRanges:function(){var e=this;Array.isArray(this.shortcuts)?this.ranges=this.shortcuts:this.shortcuts?(this.ranges=[{text:"未来7天",start:new Date,end:new Date(Date.now()+6048e5)},{text:"未来30天",start:new Date,end:new Date(Date.now()+2592e6)},{text:"最近7天",start:new Date(Date.now()-6048e5),end:new Date},{text:"最近30天",start:new Date(Date.now()-2592e6),end:new Date}],this.ranges.forEach(function(t,n){t.text=e.translation.pickers[n]})):this.ranges=[]},displayPopup:function(){if(!this.disabled){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight,n=this.$el.getBoundingClientRect(),i=this.$refs.calendar.getBoundingClientRect();this.position={},e-n.left<i.width&&n.right<i.width?this.position.left=1-n.left+"px":n.left+n.width/2<=e/2?this.position.left=0:this.position.right=0,n.top<=i.height+1&&t-n.bottom<=i.height+1?this.position.top=t-n.top-i.height-1+"px":n.top+n.height/2<=t/2?this.position.top="100%":this.position.bottom="100%"}}},created:function(){this.initRanges()},directives:{clickoutside:{bind:function(e,t,n){e["@clickoutside"]=function(i){!e.contains(i.target)&&t.expression&&n.context[t.expression]&&t.value()},document.addEventListener("click",e["@clickoutside"],!0)},unbind:function(e){document.removeEventListener("click",e["@clickoutside"],!0)}}}}},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,'.mx-datepicker{position:relative;display:inline-block;color:#73879c;font:14px/1.5 Helvetica Neue,Helvetica,Arial,Microsoft Yahei,sans-serif}.mx-datepicker *{box-sizing:border-box}.mx-datepicker.disabled{opacity:.7;cursor:not-allowed}.mx-datepicker-popup{position:absolute;width:250px;margin-top:1px;margin-bottom:1px;border:1px solid #d9d9d9;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);z-index:1000}.mx-datepicker-popup.range{width:496px}.mx-input{display:inline-block;width:100%;height:34px;padding:6px 30px 6px 10px;font-size:14px;line-height:1.4;color:#555;background-color:#fff;border:1px solid #ccc;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.mx-input.disabled,.mx-input:disabled{opacity:.7;cursor:not-allowed}.mx-input:focus{outline:none}.mx-input-icon{top:0;right:0;position:absolute;width:30px;height:100%;color:#888;text-align:center;font-style:normal}.mx-input-icon:after{content:"";display:inline-block;width:0;height:100%;vertical-align:middle}.mx-input-icon__calendar{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4T72SzQ2CQBCF54UGKIES6EAswQq0BS/A3PQ0hAt0oKVQgiVYAkcuZMwSMOyCyRKNe9uf+d6b2Qf6csGtL8sy7vu+Zebn/E5EoiAIwjRNH/PzBUBEGiJqmPniAMw+YeZkFSAiJwA3j45aVT0wsxGitwOjDGDnASBVvU4OLQARRURk9e4CAcSqWn8CLHp3Ae6MXAe/B4yzUeMkz/P9ZgdFUQzFIwD/B4yKgwMTos0OtvzCHcDRJ0gAzlmW1VYSq6oKu66LfQBTjC2AT+Hamxcml5IRpPq3VQAAAABJRU5ErkJggg==);background-position:50%;background-repeat:no-repeat}.mx-input-icon__close:before{content:"\\2716";vertical-align:middle}.mx-datepicker-top{text-align:left;padding:0 12px;line-height:34px;border-bottom:1px solid rgba(0,0,0,.05)}.mx-datepicker-top>span{white-space:nowrap;cursor:pointer}.mx-datepicker-top>span:hover{color:#1284e7}.mx-datepicker-top>span:after{content:"|";margin:0 10px;color:#48576a}.mx-datepicker-footer{padding:4px;clear:both;text-align:right;border-top:1px solid rgba(0,0,0,.05)}.mx-datepicker-btn{font-size:12px;line-height:1;padding:7px 15px;margin:0 5px;cursor:pointer;background-color:transparent;outline:none;border:none;border-radius:3px}.mx-datepicker-btn-confirm{border:1px solid rgba(0,0,0,.1);color:#73879c}.mx-datepicker-btn-confirm:hover{color:#1284e7;border-color:#1284e7}',""])},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".mx-calendar{float:left;width:100%;padding:6px 12px}.mx-calendar a{color:inherit;text-decoration:none;cursor:pointer}.mx-calendar-header{line-height:34px;text-align:center}.mx-calendar-header>a:hover{color:#1284e7}.mx-calendar__next-icon,.mx-calendar__prev-icon{font-size:20px;padding:0 6px}.mx-calendar__prev-icon{float:left}.mx-calendar__next-icon{float:right}.mx-calendar-content{height:224px;overflow:hidden}.mx-calendar-table{width:100%;font-size:12px;table-layout:fixed;border-collapse:collapse;border-spacing:0}.mx-calendar-table .today{color:#20a0ff}.mx-calendar-table .lastMonth,.mx-calendar-table .nextMonth{color:#ddd}.mx-calendar-table td,.mx-calendar-table th{width:32px;height:32px;text-align:center}.mx-calendar-table td{cursor:pointer}.mx-calendar-month>a:hover,.mx-calendar-table td.inrange,.mx-calendar-table td:hover,.mx-calendar-year>a:hover{background-color:#eaf8fe}.mx-calendar-month>a.current,.mx-calendar-table td.current,.mx-calendar-year>a.current{color:#fff;background-color:#1284e7}.mx-calendar-month a.disabled,.mx-calendar-table td.disabled,.mx-calendar-year a.disabled,.mx-time-item.disabled{cursor:not-allowed;color:#ccc;background-color:#f3f3f3}.mx-calendar-month,.mx-calendar-time,.mx-calendar-year{width:100%;height:100%;padding:7px 0;text-align:center}.mx-calendar-year>a{display:inline-block;width:40%;margin:1px 5%;line-height:40px}.mx-calendar-month>a{display:inline-block;width:30%;line-height:40px;margin:8px 1.5%}.mx-time-list-wrapper{position:relative;display:inline-block;width:100%;height:100%;border-top:1px solid rgba(0,0,0,.05);border-left:1px solid rgba(0,0,0,.05);box-sizing:border-box;overflow-y:auto}.mx-time-list-wrapper::-webkit-scrollbar{width:8px;height:8px}.mx-time-list-wrapper::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.05);border-radius:10px;box-shadow:inset 1px 1px 0 rgba(0,0,0,.1)}.mx-time-list-wrapper:hover::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.2)}.mx-time-list-wrapper:first-child{border-left:0}.mx-time-picker-item{text-align:left;padding-left:10px}.mx-time-list{margin:0;padding:0;list-style:none}.mx-time-item{width:100%;font-size:12px;height:30px;line-height:30px;cursor:pointer}.mx-time-item:hover{background-color:#eaf8fe}.mx-time-item.cur-time{color:#fff;background-color:#1284e7}",""])},function(e,t,n){"use strict";function i(e){n(14)}var a=n(6),r=n(12),s=n(1),o=i,l=s(a.a,r.a,!1,o,null,null);t.a=l.exports},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.closePopup,expression:"closePopup"}],staticClass:"mx-datepicker",class:{disabled:e.disabled},style:{width:e.computedWidth,"min-width":e.range?"datetime"===e.type?"320px":"210px":"140px"}},[n("input",{ref:"input",class:e.inputClass,attrs:{name:e.inputName,disabled:e.disabled,readonly:!e.editable||e.range,placeholder:e.innerPlaceholder},domProps:{value:e.text},on:{mouseenter:e.hoverIcon,mouseleave:e.hoverIcon,click:e.togglePopup,input:e.handleInput,change:e.handleChange,mousedown:function(e){e.preventDefault()}}}),e._v(" "),n("i",{staticClass:"mx-input-icon",class:e.showCloseIcon?"mx-input-icon__close":"mx-input-icon__calendar",on:{mouseenter:e.hoverIcon,mouseleave:e.hoverIcon,click:e.clickIcon}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showPopup,expression:"showPopup"}],ref:"calendar",staticClass:"mx-datepicker-popup",class:{range:e.range},style:e.position},[e.range?n("div",{staticStyle:{overflow:"hidden"}},[e.ranges.length?n("div",{staticClass:"mx-datepicker-top"},e._l(e.ranges,function(t){return n("span",{on:{click:function(n){e.selectRange(t)}}},[e._v(e._s(t.text))])})):e._e(),e._v(" "),n("calendar-panel",{staticStyle:{width:"50%","box-shadow":"1px 0 rgba(0, 0, 0, .1)"},attrs:{"end-at":e.currentValue[1],show:e.showPopup},on:{select:e.selectDate},model:{value:e.currentValue[0],callback:function(t){e.$set(e.currentValue,0,t)},expression:"currentValue[0]"}}),e._v(" "),n("calendar-panel",{staticStyle:{width:"50%"},attrs:{"start-at":e.currentValue[0],show:e.showPopup},on:{select:e.selectDate},model:{value:e.currentValue[1],callback:function(t){e.$set(e.currentValue,1,t)},expression:"currentValue[1]"}})],1):n("calendar-panel",{attrs:{show:e.showPopup},on:{select:e.selectDate},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}}),e._v(" "),e.confirm?n("div",{staticClass:"mx-datepicker-footer"},[n("button",{staticClass:"mx-datepicker-btn mx-datepicker-btn-confirm",attrs:{type:"button"},on:{click:e.confirmDate}},[e._v(" "+e._s(e.confirmText))])]):e._e()],1)])},a=[],r={render:i,staticRenderFns:a};t.a=r},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mx-calendar"},["time"===e.currentPanel?n("div",{staticClass:"mx-calendar-header"},[n("a",{on:{click:function(t){e.currentPanel="date"}}},[e._v(e._s(e.now.toLocaleDateString()))])]):n("div",{staticClass:"mx-calendar-header"},[n("a",{staticClass:"mx-calendar__prev-icon",on:{click:function(t){e.changeYear(-1)}}},[e._v("«")]),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"date"===e.currentPanel,expression:"currentPanel === 'date'"}],staticClass:"mx-calendar__prev-icon",on:{click:function(t){e.changeMonth(-1)}}},[e._v("‹")]),e._v(" "),n("a",{staticClass:"mx-calendar__next-icon",on:{click:function(t){e.changeYear(1)}}},[e._v("»")]),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"date"===e.currentPanel,expression:"currentPanel === 'date'"}],staticClass:"mx-calendar__next-icon",on:{click:function(t){e.changeMonth(1)}}},[e._v("›")]),e._v(" "),n("a",{on:{click:e.showMonths}},[e._v(e._s(e.months[e.currentMonth]))]),e._v(" "),n("a",{on:{click:e.showYears}},[e._v(e._s(e.currentYear))])]),e._v(" "),n("div",{staticClass:"mx-calendar-content"},[n("table",{directives:[{name:"show",rawName:"v-show",value:"date"===e.currentPanel,expression:"currentPanel === 'date'"}],staticClass:"mx-calendar-table"},[n("thead",[n("tr",e._l(e.days,function(t,i){return n("th",{key:i},[e._v(e._s(t))])}))]),e._v(" "),n("tbody",e._l(e.dates,function(t){return n("tr",e._l(t,function(t){return n("td",{class:e.getDateClasses(t),attrs:{title:t.title},on:{click:function(n){e.selectDate(t)}}},[e._v(e._s(t.day))])}))}))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"years"===e.currentPanel,expression:"currentPanel === 'years'"}],staticClass:"mx-calendar-year"},e._l(e.years,function(t){return n("a",{class:{current:e.currentYear===t,disabled:e.isDisabledYear(t)},on:{click:function(n){e.selectYear(t)}}},[e._v(e._s(t))])})),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"months"===e.currentPanel,expression:"currentPanel === 'months'"}],staticClass:"mx-calendar-month"},e._l(e.months,function(t,i){return n("a",{class:{current:e.currentMonth===i,disabled:e.isDisabledMonth(i)},on:{click:function(t){e.selectMonth(i)}}},[e._v(e._s(t))])})),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"time"===e.currentPanel,expression:"currentPanel === 'time'"}],staticClass:"mx-calendar-time"},[e.timeSelectOptions.length?n("div",{staticClass:"mx-time-list-wrapper"},[n("ul",{staticClass:"mx-time-list"},e._l(e.timeSelectOptions,function(t){return n("li",{staticClass:"mx-time-item mx-time-picker-item",class:e.getTimeClasses(60*t.value.hours+t.value.minutes,-1),on:{click:function(n){e.pickTime(t.value)}}},[e._v("\n            "+e._s(t.label)+"\n          ")])}))]):e._l(e.times,function(t,i){return n("div",{key:i,staticClass:"mx-time-list-wrapper",style:{width:100/e.times.length+"%"}},[n("ul",{staticClass:"mx-time-list"},e._l(t,function(t){return n("li",{key:t,staticClass:"mx-time-item",class:e.getTimeClasses(t,i),on:{click:function(n){e.selectTime(t,i)}}},[e._v(e._s(e._f("timeText")(t)))])}))])})],2)])])},a=[],r={render:i,staticRenderFns:a};t.a=r},function(e,t,n){var i=n(8);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2)("23e67822",i,!0)},function(e,t,n){var i=n(9);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2)("8118ebce",i,!0)},function(e,t){e.exports=function(e,t){for(var n=[],i={},a=0;a<t.length;a++){var r=t[a],s=r[0],o=r[1],l=r[2],c=r[3],u={id:e+":"+a,css:o,media:l,sourceMap:c};i[s]?i[s].parts.push(u):n.push(i[s]={id:s,parts:[u]})}return n}}])});
(function($){document.addEventListener('lazybeforeunveil',function(e){$(e.target).closest('.stm_lms_lazy_image').addClass('stm_lms_lazyloaded');});$(document).ready(function(){$('.stm_lms_log_in[data-lms-modal]').on('click',function(e){e.preventDefault();e.stopPropagation();if($('.stm-lms-wrapper__login').length){$(this).removeAttr('data-lms-modal');$([document.documentElement,document.body]).animate({scrollTop:$(".stm-lms-wrapper__login").offset().top},300);}});var modal_body=[];$('[data-lms-modal]').on('click',function(e){e.preventDefault();var modal_target=$(this).attr('data-target');if(!$(modal_target).length){var modal=$(this).attr('data-lms-modal');var params=$(this).attr('data-lms-params');$.ajax({url:stm_lms_ajaxurl,dataType:'json',context:this,data:{action:'stm_lms_load_modal',modal:modal,nonce:stm_lms_nonces['load_modal'],params:params},beforeSend:function(){$(this).addClass('loading');},complete:function(data){var data=data['responseJSON'];$(this).addClass('modal-loaded');$(this).removeClass('loading');modal_body[modal_target]=$(data['modal']).appendTo('body');toggleModal(modal_target);}});}else{toggleModal(modal_target);}});function toggleModal(modal){$(modal).modal('toggle');}
$('[data-buy-course]').on('click',function(e){var item_id=$(this).attr('data-buy-course');if(typeof item_id==='undefined'){window.location=$(this).attr('href');return false;}
$.ajax({url:stm_lms_ajaxurl,dataType:'json',context:this,data:{action:'stm_lms_add_to_cart',nonce:stm_lms_nonces['stm_lms_add_to_cart'],item_id:item_id,},beforeSend:function(){$(this).addClass('loading');},complete:function(data){var data=data['responseJSON'];$(this).removeClass('loading');$(this).find('span').text(data['text']);if(data['cart_url']){if(data['redirect'])window.location=data['cart_url'];$(this).attr('href',data['cart_url']).removeAttr('data-buy-course');}}});e.preventDefault();});$('[data-delete-course]').on('click',function(e){e.preventDefault();var item_id=$(this).data('delete-course');var group_id=$(this).data('delete-enterprise');$.ajax({url:stm_lms_ajaxurl,dataType:'json',context:this,data:{action:'stm_lms_delete_from_cart',nonce:stm_lms_nonces['stm_lms_delete_from_cart'],item_id:item_id,group_id:group_id,},beforeSend:function(){$(this).addClass('loading');},complete:function(data){$(this).removeClass('loading');$(this).closest('.item_can_hide').slideUp();location.reload();}});});$('.stm_lms_logout').on('click',function(e){e.preventDefault();$.ajax({url:stm_lms_ajaxurl,dataType:'json',context:this,data:{action:'stm_lms_logout',},complete:function(data){location.reload();}});});})})(jQuery);function stm_lms_price_format(price){price=stm_lms_price_format_number(price);price=(stm_lms_vars['position']==='left')?stm_lms_vars['symbol']+price:price+stm_lms_vars['symbol'];return price;}
function stm_lms_price_format_number(price){return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1'+stm_lms_vars['currency_thousands'])};
/*! lazysizes - v5.1.0 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}("undefined"!=typeof window?window:{},function(a,b){"use strict";var c,d;if(function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b])}(),!b||!b.getElementsByClassName)return{init:function(){},cfg:d,noSupport:!0};var e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=c,h.initEvent(d,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),e({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=d.throttleDelay,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=!0===a)&&(g=33),b||(b=!0,d=e-(f.now()-c),d<0&&(d=0),a||d<9?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;a<d?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}},D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K=/^img$/i,L=/^iframe$/i,M="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),N=0,O=0,P=0,Q=-1,R=function(a){P--,(!a||P<0||!a.target)&&(P=0)},S=function(a){return null==J&&(J="hidden"==x(b.body,"visibility")),J||"hidden"!=x(a.parentNode,"visibility")&&"hidden"!=x(a,"visibility")},T=function(a,c){var d,f=a,g=S(a);for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)(g=(x(f,"opacity")||1)>0)&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},U=function(){var a,f,h,j,k,m,n,p,q,r,s,t,u=c.elements;if((o=d.loadMode)&&P<8&&(a=u.length)){for(f=0,Q++;f<a;f++)if(u[f]&&!u[f]._lazyRace)if(!M||c.prematureUnveil&&c.prematureUnveil(u[f]))aa(u[f]);else if((p=u[f][i]("data-expand"))&&(m=1*p)||(m=O),r||(r=!d.expand||d.expand<1?e.clientHeight>500&&e.clientWidth>500?500:370:d.expand,c._defEx=r,s=r*d.expFactor,t=d.hFac,J=null,O<s&&P<1&&Q>2&&o>2&&!b.hidden?(O=s,Q=0):O=o>1&&Q>1&&P<6?r:N),q!==m&&(y=innerWidth+m*t,D=innerHeight+m,n=-1*m,q=m),h=u[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*t&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||S(u[f]))&&(l&&P<3&&!p&&(o<3||Q<4)||T(u[f],m))){if(aa(u[f]),k=!0,P>9)break}else!k&&l&&!j&&P<4&&Q<4&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=u[f][i](d.sizesAttr)))&&(j=g[0]||u[f]);j&&!k&&aa(j)}},V=B(U),W=function(a){var b=a.target;if(b._lazyCache)return void delete b._lazyCache;R(a),s(b,d.loadedClass),t(b,d.loadingClass),u(b,Y),v(b,"lazyloaded")},X=A(W),Y=function(a){X({target:a.target})},Z=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},$=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},_=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},s(a,d.loadingClass),p&&(clearTimeout(m),m=k(R,2500),u(a,Y,!0)),l&&q.call(j.getElementsByTagName("source"),$),h?a.setAttribute("srcset",h):g&&!l&&(L.test(a.nodeName)?Z(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){var b=a.complete&&a.naturalWidth>1;p&&!b||(b&&s(a,"ls-is-cached"),W(o),a._lazyCache=!0,k(function(){"_lazyCache"in a&&delete a._lazyCache},9)),"lazy"==a.loading&&P--},!0)}),aa=function(a){if(!a._lazyRace){var b,c=K.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,P++,_(a,b,f,e,c))}},ba=C(function(){d.loadMode=3,V()}),ca=function(){3==d.loadMode&&(d.loadMode=2),ba()},da=function(){if(!l){if(f.now()-p<999)return void k(da,999);l=!0,d.loadMode=3,V(),j("scroll",ca,!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),j("scroll",V,!0),j("resize",V,!0),a.MutationObserver?new MutationObserver(V).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",V,!0),e[h]("DOMAttrModified",V,!0),setInterval(V,999)),j("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(a){b[h](a,V,!0)}),/d$|^c/.test(b.readyState)?da():(j("load",da),b[h]("DOMContentLoaded",V),k(da,2e4)),c.elements.length?(U(),z._lsFlush()):V()},checkElems:V,unveil:aa,_aLSL:ca}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){!F.i&&b.getElementsByClassName&&(F.i=!0,E._(),D._())};return k(function(){d.init&&F()}),c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}});
(function($){document.addEventListener('lazybeforeunveil',function(e){$(e.target).closest('.stm_lms_lazy_image').addClass('stm_lms_lazy_image__lazyloaded');});})(jQuery);
(function($){'use strict';if(typeof wpcf7==='undefined'||wpcf7===null){return;}
wpcf7=$.extend({cached:0,inputs:[]},wpcf7);$(function(){wpcf7.supportHtml5=(function(){var features={};var input=document.createElement('input');features.placeholder='placeholder'in input;var inputTypes=['email','url','tel','number','range','date'];$.each(inputTypes,function(index,value){input.setAttribute('type',value);features[value]=input.type!=='text';});return features;})();$('div.wpcf7 > form').each(function(){var $form=$(this);wpcf7.initForm($form);if(wpcf7.cached){wpcf7.refill($form);}});});wpcf7.getId=function(form){return parseInt($('input[name="_wpcf7"]',form).val(),10);};wpcf7.initForm=function(form){var $form=$(form);$form.submit(function(event){if(!wpcf7.supportHtml5.placeholder){$('[placeholder].placeheld',$form).each(function(i,n){$(n).val('').removeClass('placeheld');});}
if(typeof window.FormData==='function'){wpcf7.submit($form);event.preventDefault();}});$('.wpcf7-submit',$form).after('<span class="ajax-loader"></span>');wpcf7.toggleSubmit($form);$form.on('click','.wpcf7-acceptance',function(){wpcf7.toggleSubmit($form);});$('.wpcf7-exclusive-checkbox',$form).on('click','input:checkbox',function(){var name=$(this).attr('name');$form.find('input:checkbox[name="'+name+'"]').not(this).prop('checked',false);});$('.wpcf7-list-item.has-free-text',$form).each(function(){var $freetext=$(':input.wpcf7-free-text',this);var $wrap=$(this).closest('.wpcf7-form-control');if($(':checkbox, :radio',this).is(':checked')){$freetext.prop('disabled',false);}else{$freetext.prop('disabled',true);}
$wrap.on('change',':checkbox, :radio',function(){var $cb=$('.has-free-text',$wrap).find(':checkbox, :radio');if($cb.is(':checked')){$freetext.prop('disabled',false).focus();}else{$freetext.prop('disabled',true);}});});if(!wpcf7.supportHtml5.placeholder){$('[placeholder]',$form).each(function(){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld');$(this).focus(function(){if($(this).hasClass('placeheld')){$(this).val('').removeClass('placeheld');}});$(this).blur(function(){if(''===$(this).val()){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld');}});});}
if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.date){$form.find('input.wpcf7-date[type="date"]').each(function(){$(this).datepicker({dateFormat:'yy-mm-dd',minDate:new Date($(this).attr('min')),maxDate:new Date($(this).attr('max'))});});}
if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.number){$form.find('input.wpcf7-number[type="number"]').each(function(){$(this).spinner({min:$(this).attr('min'),max:$(this).attr('max'),step:$(this).attr('step')});});}
$('.wpcf7-character-count',$form).each(function(){var $count=$(this);var name=$count.attr('data-target-name');var down=$count.hasClass('down');var starting=parseInt($count.attr('data-starting-value'),10);var maximum=parseInt($count.attr('data-maximum-value'),10);var minimum=parseInt($count.attr('data-minimum-value'),10);var updateCount=function(target){var $target=$(target);var length=$target.val().length;var count=down?starting-length:length;$count.attr('data-current-value',count);$count.text(count);if(maximum&&maximum<length){$count.addClass('too-long');}else{$count.removeClass('too-long');}
if(minimum&&length<minimum){$count.addClass('too-short');}else{$count.removeClass('too-short');}};$(':input[name="'+name+'"]',$form).each(function(){updateCount(this);$(this).keyup(function(){updateCount(this);});});});$form.on('change','.wpcf7-validates-as-url',function(){var val=$.trim($(this).val());if(val&&!val.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==val.indexOf('.')){val=val.replace(/^\/+/,'');val='http://'+val;}
$(this).val(val);});};wpcf7.submit=function(form){if(typeof window.FormData!=='function'){return;}
var $form=$(form);$('.ajax-loader',$form).addClass('is-active');wpcf7.clearResponse($form);var formData=new FormData($form.get(0));var detail={id:$form.closest('div.wpcf7').attr('id'),status:'init',inputs:[],formData:formData};$.each($form.serializeArray(),function(i,field){if('_wpcf7'==field.name){detail.contactFormId=field.value;}else if('_wpcf7_version'==field.name){detail.pluginVersion=field.value;}else if('_wpcf7_locale'==field.name){detail.contactFormLocale=field.value;}else if('_wpcf7_unit_tag'==field.name){detail.unitTag=field.value;}else if('_wpcf7_container_post'==field.name){detail.containerPostId=field.value;}else if(field.name.match(/^_wpcf7_\w+_free_text_/)){var owner=field.name.replace(/^_wpcf7_\w+_free_text_/,'');detail.inputs.push({name:owner+'-free-text',value:field.value});}else if(field.name.match(/^_/)){}else{detail.inputs.push(field);}});wpcf7.triggerEvent($form.closest('div.wpcf7'),'beforesubmit',detail);var ajaxSuccess=function(data,status,xhr,$form){detail.id=$(data.into).attr('id');detail.status=data.status;detail.apiResponse=data;var $message=$('.wpcf7-response-output',$form);switch(data.status){case'validation_failed':$.each(data.invalidFields,function(i,n){$(n.into,$form).each(function(){wpcf7.notValidTip(this,n.message);$('.wpcf7-form-control',this).addClass('wpcf7-not-valid');$('[aria-invalid]',this).attr('aria-invalid','true');});});$message.addClass('wpcf7-validation-errors');$form.addClass('invalid');wpcf7.triggerEvent(data.into,'invalid',detail);break;case'acceptance_missing':$message.addClass('wpcf7-acceptance-missing');$form.addClass('unaccepted');wpcf7.triggerEvent(data.into,'unaccepted',detail);break;case'spam':$message.addClass('wpcf7-spam-blocked');$form.addClass('spam');wpcf7.triggerEvent(data.into,'spam',detail);break;case'aborted':$message.addClass('wpcf7-aborted');$form.addClass('aborted');wpcf7.triggerEvent(data.into,'aborted',detail);break;case'mail_sent':$message.addClass('wpcf7-mail-sent-ok');$form.addClass('sent');wpcf7.triggerEvent(data.into,'mailsent',detail);break;case'mail_failed':$message.addClass('wpcf7-mail-sent-ng');$form.addClass('failed');wpcf7.triggerEvent(data.into,'mailfailed',detail);break;default:var customStatusClass='custom-'
+data.status.replace(/[^0-9a-z]+/i,'-');$message.addClass('wpcf7-'+customStatusClass);$form.addClass(customStatusClass);}
wpcf7.refill($form,data);wpcf7.triggerEvent(data.into,'submit',detail);if('mail_sent'==data.status){$form.each(function(){this.reset();});wpcf7.toggleSubmit($form);}
if(!wpcf7.supportHtml5.placeholder){$form.find('[placeholder].placeheld').each(function(i,n){$(n).val($(n).attr('placeholder'));});}
$message.html('').append(data.message).slideDown('fast');$message.attr('role','alert');$('.screen-reader-response',$form.closest('.wpcf7')).each(function(){var $response=$(this);$response.html('').attr('role','').append(data.message);if(data.invalidFields){var $invalids=$('<ul></ul>');$.each(data.invalidFields,function(i,n){if(n.idref){var $li=$('<li></li>').append($('<a></a>').attr('href','#'+n.idref).append(n.message));}else{var $li=$('<li></li>').append(n.message);}
$invalids.append($li);});$response.append($invalids);}
$response.attr('role','alert').focus();});};$.ajax({type:'POST',url:wpcf7.apiSettings.getRoute('/contact-forms/'+wpcf7.getId($form)+'/feedback'),data:formData,dataType:'json',processData:false,contentType:false}).done(function(data,status,xhr){ajaxSuccess(data,status,xhr,$form);$('.ajax-loader',$form).removeClass('is-active');}).fail(function(xhr,status,error){var $e=$('<div class="ajax-error"></div>').text(error.message);$form.after($e);});};wpcf7.triggerEvent=function(target,name,detail){var $target=$(target);var event=new CustomEvent('wpcf7'+name,{bubbles:true,detail:detail});$target.get(0).dispatchEvent(event);$target.trigger('wpcf7:'+name,detail);$target.trigger(name+'.wpcf7',detail);};wpcf7.toggleSubmit=function(form,state){var $form=$(form);var $submit=$('input:submit',$form);if(typeof state!=='undefined'){$submit.prop('disabled',!state);return;}
if($form.hasClass('wpcf7-acceptance-as-validation')){return;}
$submit.prop('disabled',false);$('.wpcf7-acceptance',$form).each(function(){var $span=$(this);var $input=$('input:checkbox',$span);if(!$span.hasClass('optional')){if($span.hasClass('invert')&&$input.is(':checked')||!$span.hasClass('invert')&&!$input.is(':checked')){$submit.prop('disabled',true);return false;}}});};wpcf7.notValidTip=function(target,message){var $target=$(target);$('.wpcf7-not-valid-tip',$target).remove();$('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);if($target.is('.use-floating-validation-tip *')){var fadeOut=function(target){$(target).not(':hidden').animate({opacity:0},'fast',function(){$(this).css({'z-index':-100});});};$target.on('mouseover','.wpcf7-not-valid-tip',function(){fadeOut(this);});$target.on('focus',':input',function(){fadeOut($('.wpcf7-not-valid-tip',$target));});}};wpcf7.refill=function(form,data){var $form=$(form);var refillCaptcha=function($form,items){$.each(items,function(i,n){$form.find(':input[name="'+i+'"]').val('');$form.find('img.wpcf7-captcha-'+i).attr('src',n);var match=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);$form.find('input:hidden[name="_wpcf7_captcha_challenge_'+i+'"]').attr('value',match[1]);});};var refillQuiz=function($form,items){$.each(items,function(i,n){$form.find(':input[name="'+i+'"]').val('');$form.find(':input[name="'+i+'"]').siblings('span.wpcf7-quiz-label').text(n[0]);$form.find('input:hidden[name="_wpcf7_quiz_answer_'+i+'"]').attr('value',n[1]);});};if(typeof data==='undefined'){$.ajax({type:'GET',url:wpcf7.apiSettings.getRoute('/contact-forms/'+wpcf7.getId($form)+'/refill'),beforeSend:function(xhr){var nonce=$form.find(':input[name="_wpnonce"]').val();if(nonce){xhr.setRequestHeader('X-WP-Nonce',nonce);}},dataType:'json'}).done(function(data,status,xhr){if(data.captcha){refillCaptcha($form,data.captcha);}
if(data.quiz){refillQuiz($form,data.quiz);}});}else{if(data.captcha){refillCaptcha($form,data.captcha);}
if(data.quiz){refillQuiz($form,data.quiz);}}};wpcf7.clearResponse=function(form){var $form=$(form);$form.removeClass('invalid spam sent failed');$form.siblings('.screen-reader-response').html('').attr('role','');$('.wpcf7-not-valid-tip',$form).remove();$('[aria-invalid]',$form).attr('aria-invalid','false');$('.wpcf7-form-control',$form).removeClass('wpcf7-not-valid');$('.wpcf7-response-output',$form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');};wpcf7.apiSettings.getRoute=function(path){var url=wpcf7.apiSettings.root;url=url.replace(wpcf7.apiSettings.namespace,wpcf7.apiSettings.namespace+path);return url;};})(jQuery);(function(){if(typeof window.CustomEvent==="function")return false;function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};var evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt;}
CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent;})();

/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 6.0.0
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var y="1.6.9",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipetp=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipetp")}}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}return G};f.fn.swipetp.version=y;f.fn.swipetp.defaults=n;f.fn.swipetp.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipetp.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipetp.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipetp.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipetp.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,aw){var aA=(a||d||!aw.fallbackToMouseEvents),K=aA?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",az=aA?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=aA?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=aA?null:"mouseleave",aE=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ah=0,aQ=null,ac=0,a2=0,a0=0,H=1,ar=0,aK=0,N=null;var aS=f(a5);var aa="start";var X=0;var aR=null;var U=0,a3=0,a6=0,ae=0,O=0;var aX=null,ag=null;try{aS.bind(K,aO);aS.bind(aE,ba)}catch(al){f.error("events not supported "+K+","+aE+" on jQuery.swipetp")}this.enable=function(){aS.bind(K,aO);aS.bind(aE,ba);return aS};this.disable=function(){aL();return aS};this.destroy=function(){aL();aS.data(C,null);aS=null};this.option=function(bd,bc){if(aw[bd]!==undefined){if(bc===undefined){return aw[bd]}else{aw[bd]=bc}}else{f.error("Option "+bd+" does not exist on jQuery.swipetp.options")}return null};function aO(be){if(aC()){return}if(f(be.target).closest(aw.excludedElements,aS).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{be.preventDefault()}ah=0;aQ=null;aK=null;ac=0;a2=0;a0=0;H=1;ar=0;aR=ak();N=ab();S();if(!bg||(X===aw.fingers||aw.fingers===i)||aY()){aj(0,bc);U=au();if(X==2){aj(1,bg[1]);a2=a0=av(aR[0].start,aR[1].start)}if(aw.swipeStatus||aw.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(aw.hold){ag=setTimeout(f.proxy(function(){aS.trigger("hold",[bf.target]);if(aw.hold){bd=aw.hold.call(aS,bf,bf.target)}},this),aw.longTapThreshold)}ap(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||an()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aI(bd);a3=au();if(bj){X=bj.length}if(aw.hold){clearTimeout(ag)}aa=k;if(X==2){if(a2==0){aj(1,bj[1]);a2=a0=av(aR[0].start,aR[1].start)}else{aI(bj[1]);a0=av(aR[0].end,aR[1].end);aK=at(aR[0].end,aR[1].end)}H=a8(a2,a0);ar=Math.abs(a2-a0)}if((X===aw.fingers||aw.fingers===i)||!bj||aY()){aQ=aM(bg.start,bg.end);am(bf,aQ);ah=aT(bg.start,bg.end);ac=aN();aJ(aQ,ah);if(aw.swipeStatus||aw.pinchStatus){be=P(bi,aa)}if(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave){var bc=true;if(aw.triggerOnTouchLeave){var bh=aZ(this);bc=F(bg.end,bh)}if(!aw.triggerOnTouchEnd&&bc){aa=aD(k)}else{if(aw.triggerOnTouchLeave&&!bc){aa=aD(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length){G();return true}}if(an()){X=ae}a3=au();ac=aN();if(bb()||!ao()){aa=q;P(bd,aa)}else{if(aw.triggerOnTouchEnd||(aw.triggerOnTouchEnd==false&&aa===k)){bc.preventDefault();aa=h;P(bd,aa)}else{if(!aw.triggerOnTouchEnd&&a7()){aa=h;aG(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}ap(false);return null}function ba(){X=0;a3=0;U=0;a2=0;a0=0;H=1;S();ap(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(aw.triggerOnTouchLeave){aa=aD(h);P(bd,aa)}}function aL(){aS.unbind(K,aO);aS.unbind(aE,ba);aS.unbind(az,a4);aS.unbind(V,M);if(T){aS.unbind(T,L)}ap(false)}function aD(bg){var bf=bg;var be=aB();var bd=ao();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&aw.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if((J()||W())||(Q()||aY())){if(J()||W()){bd=aG(be,bc,l)}if((Q()||aY())&&bd!==false){bd=aG(be,bc,t)}}else{if(aH()&&bd!==false){bd=aG(be,bc,j)}else{if(aq()&&bd!==false){bd=aG(be,bc,b)}else{if(ai()&&bd!==false){bd=aG(be,bc,B)}}}}if(bc===q){ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aG(bf,bc,be){var bd;if(be==l){aS.trigger("swipeStatus",[bc,aQ||null,ah||0,ac||0,X,aR]);if(aw.swipeStatus){bd=aw.swipeStatus.call(aS,bf,bc,aQ||null,ah||0,ac||0,X,aR);if(bd===false){return false}}if(bc==h&&aW()){aS.trigger("swipe",[aQ,ah,ac,X,aR]);if(aw.swipe){bd=aw.swipe.call(aS,bf,aQ,ah,ac,X,aR);if(bd===false){return false}}switch(aQ){case p:aS.trigger("swipeLeft",[aQ,ah,ac,X,aR]);if(aw.swipeLeft){bd=aw.swipeLeft.call(aS,bf,aQ,ah,ac,X,aR)}break;case o:aS.trigger("swipeRight",[aQ,ah,ac,X,aR]);if(aw.swipeRight){bd=aw.swipeRight.call(aS,bf,aQ,ah,ac,X,aR)}break;case e:aS.trigger("swipeUp",[aQ,ah,ac,X,aR]);if(aw.swipeUp){bd=aw.swipeUp.call(aS,bf,aQ,ah,ac,X,aR)}break;case x:aS.trigger("swipeDown",[aQ,ah,ac,X,aR]);if(aw.swipeDown){bd=aw.swipeDown.call(aS,bf,aQ,ah,ac,X,aR)}break}}}if(be==t){aS.trigger("pinchStatus",[bc,aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchStatus){bd=aw.pinchStatus.call(aS,bf,bc,aK||null,ar||0,ac||0,X,H,aR);if(bd===false){return false}}if(bc==h&&a9()){switch(aK){case c:aS.trigger("pinchIn",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchIn){bd=aw.pinchIn.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break;case A:aS.trigger("pinchOut",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchOut){bd=aw.pinchOut.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aX);clearTimeout(ag);if(Z()&&!I()){O=au();aX=setTimeout(f.proxy(function(){O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}},this),aw.doubleTapThreshold)}else{O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("doubletap",[bf.target]);if(aw.doubleTap){bd=aw.doubleTap.call(aS,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("longtap",[bf.target]);if(aw.longTap){bd=aw.longTap.call(aS,bf,bf.target)}}}}}return bd}function ao(){var bc=true;if(aw.threshold!==null){bc=ah>=aw.threshold}return bc}function bb(){var bc=false;if(aw.cancelThreshold!==null&&aQ!==null){bc=(aU(aQ)-ah)>=aw.cancelThreshold}return bc}function af(){if(aw.pinchThreshold!==null){return ar>=aw.pinchThreshold}return true}function aB(){var bc;if(aw.maxTimeThreshold){if(ac>=aw.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function am(bc,bd){if(aw.preventDefaultEvents===false){return}if(aw.allowPageScroll===m){bc.preventDefault()}else{var be=aw.allowPageScroll===s;switch(bd){case p:if((aw.swipeLeft&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((aw.swipeRight&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((aw.swipeUp&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((aw.swipeDown&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aP();var bc=Y();var be=af();return bd&&bc&&be}function aY(){return !!(aw.pinchStatus||aw.pinchIn||aw.pinchOut)}function Q(){return !!(a9()&&aY())}function aW(){var bf=aB();var bh=ao();var be=aP();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(aw.swipe||aw.swipeStatus||aw.swipeLeft||aw.swipeRight||aw.swipeUp||aw.swipeDown)}function J(){return !!(aW()&&W())}function aP(){return((X===aw.fingers||aw.fingers===i)||!a)}function Y(){return aR[0].end.x!==0}function a7(){return !!(aw.tap)}function Z(){return !!(aw.doubleTap)}function aV(){return !!(aw.longTap)}function R(){if(O==null){return false}var bc=au();return(Z()&&((bc-O)<=aw.doubleTapThreshold))}function I(){return R()}function ay(){return((X===1||!a)&&(isNaN(ah)||ah<aw.threshold))}function a1(){return((ac>aw.longTapThreshold)&&(ah<r))}function ai(){return !!(ay()&&a7())}function aH(){return !!(R()&&Z())}function aq(){return !!(a1()&&aV())}function G(){a6=au();ae=event.touches.length+1}function S(){a6=0;ae=0}function an(){var bc=false;if(a6){var bd=au()-a6;if(bd<=aw.fingerReleaseThreshold){bc=true}}return bc}function aC(){return !!(aS.data(C+"_intouch")===true)}function ap(bc){if(bc===true){aS.bind(az,a4);aS.bind(V,M);if(T){aS.bind(T,L)}}else{aS.unbind(az,a4,false);aS.unbind(V,M,false);if(T){aS.unbind(T,L,false)}}aS.data(C+"_intouch",bc===true)}function aj(bd,bc){var be=bc.identifier!==undefined?bc.identifier:0;aR[bd].identifier=be;aR[bd].start.x=aR[bd].end.x=bc.pageX||bc.clientX;aR[bd].start.y=aR[bd].end.y=bc.pageY||bc.clientY;return aR[bd]}function aI(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bd){for(var bc=0;bc<aR.length;bc++){if(aR[bc].identifier==bd){return aR[bc]}}}function ak(){var bc=[];for(var bd=0;bd<=5;bd++){bc.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bc}function aJ(bc,bd){bd=Math.max(bd,aU(bc));N[bc].distance=bd}function aU(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=ax(p);bc[o]=ax(o);bc[e]=ax(e);bc[x]=ax(x);return bc}function ax(bc){return{direction:bc,distance:0}}function aN(){return a3-U}function av(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function at(){if(H<1){return A}else{return c}}function aT(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aF(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aM(bd,bc){var be=aF(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function au(){var bc=new Date();return bc.getTime()}function aZ(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));
if(typeof(console) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}
var RS_CacheGS = window.GreenSockGlobals, RS_CacheGS_queue = window._gsQueue,RS_Cache_define = window._gsDefine; window._gsDefine = null;delete window._gsDefine;var punchgs = window.GreenSockGlobals = {};
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="2.0.2",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,d){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var e,f,i,j,k,l,m,n,o,p=this._dirty?this.totalDuration():this._totalDuration,q=this._time,r=this._totalTime,s=this._cycle,t=this._duration,u=this._rawPrevTime;if(a>=p-1e-7&&a>=0?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=t,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(e=!0,f="onComplete",d=d||this._timeline.autoRemoveChildren),0===t&&(this._initted||!this.vars.lazy||d)&&(this._startTime===this._timeline._duration&&(a=0),(0>u||0>=a&&a>=-1e-7||u===g&&"isPause"!==this.data)&&u!==a&&(d=!0,u>g&&(f="onReverseComplete")),this._rawPrevTime=n=!b||a||u===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==r||0===t&&u>0)&&(f="onReverseComplete",e=this._reversed),0>a&&(this._active=!1,0===t&&(this._initted||!this.vars.lazy||d)&&(u>=0&&(d=!0),this._rawPrevTime=n=!b||a||u===a?a:g)),this._initted||(d=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(j=t+this._repeatDelay,this._cycle=this._totalTime/j>>0,0!==this._cycle&&this._cycle===this._totalTime/j&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*j,this._yoyo&&0!==(1&this._cycle)&&(this._time=t-this._time,o=this._yoyoEase||this.vars.yoyoEase,o&&(this._yoyoEase||(o!==!0||this._initted?this._yoyoEase=o=o===!0?this._ease:o instanceof Ease?o:Ease.map[o]:(o=this.vars.ease,this._yoyoEase=o=o?o instanceof Ease?o:"function"==typeof o?new Ease(o,this.vars.easeParams):Ease.map[o]||c.defaultEase:c.defaultEase)),this.ratio=o?1-o.getRatio((t-this._time)/t):0)),this._time>t?this._time=t:this._time<0&&(this._time=0)),this._easeType&&!o?(k=this._time/t,l=this._easeType,m=this._easePower,(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:this._time/t<.5?this.ratio=k/2:this.ratio=1-k/2):o||(this.ratio=this._ease.getRatio(this._time/t))),q===this._time&&!d&&s===this._cycle)return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!d&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=q,this._totalTime=r,this._rawPrevTime=u,this._cycle=s,h.lazyTweens.push(this),void(this._lazy=[a,b]);!this._time||e||o?e&&this._ease._calcEnd&&!o&&(this.ratio=this._ease.getRatio(0===this._time?0:1)):this.ratio=this._ease.getRatio(this._time/t)}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==q&&a>=0&&(this._active=!0),0===r&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,!0,d):f||(f="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===t)&&(b||this._callback("onStart"))),i=this._firstPT;i;)i.f?i.t[i.p](i.c*this.ratio+i.s):i.t[i.p]=i.c*this.ratio+i.s,i=i._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,!0,d),b||(this._totalTime!==r||f)&&this._callback("onUpdate")),this._cycle!==s&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),f&&(!this._gc||d)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,!0,d),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[f]&&this._callback(f),0===t&&this._rawPrevTime===g&&n!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="2.0.2",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),e._time&&(j=Math.max(0,Math.min(e.totalDuration(),(this.rawTime()-e._startTime)*e._timeScale)),Math.abs(j-e._totalTime)>1e-5&&e.render(j,!1,!1)),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._time,o=this._dirty?this.totalDuration():this._totalDuration,p=this._startTime,q=this._timeScale,r=this._paused;if(n!==this._time&&(a+=this._time-n),a>=o-1e-7&&a>=0)this._totalTime=this._time=o,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=o+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==n||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=n)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==n&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==n&&a>0&&(this._active=!0),0===n&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=n)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=n&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(e,e._startTime-e._delay),this._calculatingDuration=0):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale,this._time-=e._startTime,this._totalTime-=e._startTime,this._rawPrevTime-=e._startTime),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="2.0.2",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time===f.target.time()||d!==f.duration()||f.isFromTo||f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale).render(f.time(),!0,!0),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.isFromTo=1,d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._time,p=this._dirty?this.totalDuration():this._totalDuration,q=this._duration,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(o!==this._time&&(a+=this._time-o),a>=p-1e-7&&a>=0)this._locked||(this._totalTime=p,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=q,a=q+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==o||0===q&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=q||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===q&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=q+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=q-this._time),this._time>q?(this._time=q,a=q+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=o||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&m._startTime<q&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*q,this._cycle<w?x=!x:this._totalTime+=q,this._time=o,this._rawPrevTime=0===q?u-1e-4:u,this._cycle=w,this._locked=!0,o=x?0:q,this.render(o,b,0===q),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),o!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,o=x?q+1e-4:-1e-4,this.render(o,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==o&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=o)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[0][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),
c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="2.0.2",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=("undefined"!=typeof window?window:O.defaultView||{getComputedStyle:function(){}}).getComputedStyle,_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,-1!==_(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}else i=$(a).lineHeight,a.style.lineHeight=d,h=parseFloat($(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){"function"==typeof a&&(a=a(r,q));var c="string"==typeof a&&"="===a.charAt(1);return"string"==typeof a&&"v"===a.charAt(a.length-2)&&(a=(c?a.substr(0,2):0)+window["inner"+("vh"===a.substr(-2)?"Height":"Width")]*(parseFloat(c?a.substr(2):a)/100)),null==a?b:c?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(c[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=i.r(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod.call(this._tween,h.rotation,this.t,this._tween):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j?"function"==typeof j?j:Math.round:j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(-1!==(d+c).indexOf("rgb")||-1!==(d+c).indexOf("hsl")?(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" ")):(D=D.join(" ").split(",").join(", ").split(" "),E=E.join(" ").split(",").join(", ").split(" ")),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m]+"",x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px")?Math.round:!1,!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,z=u,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",Math.round,!0).appendXtra("",p[1],u[1]-p[1],",",Math.round).appendXtra("",p[2],u[2]-p[2],y?",":B,Math.round),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2)?Math.round:!1,0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!Ha||!a.getCTM||a.parentNode&&!a.ownerSVGElement||!Na(a))},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,!Ca||!(h=!$(a)||"none"===$(a).display)&&a.parentNode||(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(e=a.transform.baseVal.consolidate().matrix,d="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")",c=0)),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*L,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u;
};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(D.skewType=A.skewType||D.skewType||g.defaultSkewType,d._transform=D,"rotationZ"in A&&(A.rotation=A.rotationZ),E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",-1!==E.indexOf("%")&&(m.width=_(a,"width"),m.height=_(a,"height")),O.body.appendChild(Q),l=Ra(Q,null,!1),"simple"===D.skewType&&(l.scaleY*=Math.cos(l.skewX*K)),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="","co"===a.substr(0,2)?a:ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g])c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",$(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=e.r(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=e.r(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&(b.r=a[b.p]),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.7.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){var b=1>a?Math.pow(10,(a+"").length-2):1;return function(c){return(Math.round(c/a)*a*b|0)/b}},c=function(a,b){for(;a;)a.f||a.blob||(a.m=b||Math.round),a=a._next},d=a.prototype;d._onInitAllProps=function(){var a,d,e,f,g=this._tween,h=g.vars.roundProps,i={},j=g._propLookup.roundProps;if("object"!=typeof h||h.push)for("string"==typeof h&&(h=h.split(",")),e=h.length;--e>-1;)i[h[e]]=Math.round;else for(f in h)i[f]=b(h[f]);for(f in i)for(a=g._firstPT;a;)d=a._next,a.pg?a.t._mod(i):a.n===f&&(2===a.f&&a.t?c(a.t._firstPT,i[f]):(this._add(a.t,f,a.s,a.c,i[f]),d&&(d._prev=a._prev),a._prev?a._prev._next=d:g._firstPT===a&&(g._firstPT=d),a._next=a._prev=null,g._propLookup[f]=j)),a=d;return!1},d._add=function(a,b,c,d,e){this._addTween(a,b,c,c+d,b,e||Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e,f=_gsScope.GreenSockGlobals||_gsScope,g=f.com.greensock,h=2*Math.PI,i=Math.PI/2,j=g._class,k=function(b,c){var d=j("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},l=a.register||function(){},m=function(a,b,c,d,e){var f=j("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return l(f,a),f},n=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},o=function(b,c){var d=j("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},p=m("Back",o("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),o("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),o("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),q=j("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),r=q.prototype=new a;return r.constructor=q,r.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1===a?0:1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},q.ease=new q(.7,.7),r.config=q.config=function(a,b,c){return new q(a,b,c)},b=j("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),r=b.prototype=new a,r.constructor=b,r.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},r.config=b.config=function(a,c){return new b(a,c)},c=j("easing.ExpoScaleEase",function(a,b,c){this._p1=Math.log(b/a),this._p2=b-a,this._p3=a,this._ease=c},!0),r=c.prototype=new a,r.constructor=c,r.getRatio=function(a){return this._ease&&(a=this._ease.getRatio(a)),(this._p3*Math.exp(this._p1*a)-this._p3)/this._p2},r.config=c.config=function(a,b,d){return new c(a,b,d)},d=j("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),m=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--m>-1;)c=o?Math.random():1/l*m,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:m%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new n(1,1,null),m=l;--m>-1;)g=j[m],h=new n(g.x,g.y,h);this._prev=new n(0,0,0!==h.t?h:h.next)},!0),r=d.prototype=new a,r.constructor=d,r.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},r.config=function(a){return new d(a)},d.ease=new d,m("Bounce",k("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),k("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),k("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),m("Circ",k("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),k("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),k("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),e=function(b,c,d){var e=j("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/h*(Math.asin(1/this._p1)||0),this._p2=h/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},m("Elastic",e("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),e("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),e("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),m("Expo",k("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),k("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),k("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),m("Sine",k("SineOut",function(a){return Math.sin(a*i)}),k("SineIn",function(a){return-Math.cos(a*i)+1}),k("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),j("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),l(f.SlowMo,"SlowMo","ease,"),l(d,"RoughEase","ease,"),l(b,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a,f=e[b];if(f)return"undefined"!=typeof module&&module.exports&&(module.exports=f),f;var g,h,i,j,k,l=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},m=l("com.greensock"),n=1e-10,o=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},p=function(){},q=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),r={},s=function(d,f,g,h){this.sc=r[d]?r[d].sc:[],r[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var k,m,n,o,p=f.length,q=p;--p>-1;)(k=r[f[p]]||new s(f[p],[])).gsClass?(i[p]=k.gsClass,q--):j&&k.sc.push(this);if(0===q&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=l(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"==typeof define&&define.amd&&define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},t=a._gsDefine=function(a,b,c,d){return new s(a,b,c,d)},u=m._class=function(a,b,c){return b=b||function(){},t(a,[],function(){return b},c),b};t.globals=e;var v=[0,0,1,1],w=u("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?v.concat(b):v},!0),x=w.map={},y=w.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?u("easing."+f,null,!0):m.easing[f]||{},g=k.length;--g>-1;)h=k[g],x[f+"."+h]=x[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(i=w.prototype,i._calcEnd=!1,i.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},g=["Linear","Quad","Cubic","Quart","Quint,Strong"],h=g.length;--h>-1;)i=g[h]+",Power"+h,y(new w(null,null,1,h),i,"easeOut",!0),y(new w(null,null,2,h),i,"easeIn"+(0===h?",easeNone":"")),y(new w(null,null,3,h),i,"easeInOut");x.linear=m.easing.Linear.easeIn,x.swing=m.easing.Quad.easeInOut;var z=u("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});i=z.prototype,i.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],i=0;for(this!==j||k||j.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===i&&f.pr<e&&(i=g+1);h.splice(i,0,{c:b,s:c,up:d,pr:e})},i.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},i.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var A=a.requestAnimationFrame,B=a.cancelAnimationFrame,C=Date.now||function(){return(new Date).getTime()},D=C();for(g=["ms","moz","webkit","o"],h=g.length;--h>-1&&!A;)A=a[g[h]+"RequestAnimationFrame"],B=a[g[h]+"CancelAnimationFrame"]||a[g[h]+"CancelRequestAnimationFrame"];u("Ticker",function(a,b){var c,e,f,g,h,i=this,l=C(),m=b!==!1&&A?"auto":!1,o=500,q=33,r="tick",s=function(a){var b,d,j=C()-D;j>o&&(l+=j-q),D+=j,i.time=(D-l)/1e3,b=i.time-h,(!c||b>0||a===!0)&&(i.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&i.dispatchEvent(r)};z.call(i),i.time=i.frame=0,i.tick=function(){s(!0)},i.lagSmoothing=function(a,b){return arguments.length?(o=a||1/n,void(q=Math.min(b,o,0))):1/n>o},i.sleep=function(){null!=f&&(m&&B?B(f):clearTimeout(f),e=p,f=null,i===j&&(k=!1))},i.wake=function(a){null!==f?i.sleep():a?l+=-D+(D=C()):i.frame>10&&(D=C()-o+5),e=0===c?p:m&&A?A:function(a){return setTimeout(a,1e3*(h-i.time)+1|0)},i===j&&(k=!0),s(2)},i.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void i.wake()):c},i.useRAF=function(a){return arguments.length?(i.sleep(),m=a,void i.fps(c)):m},i.fps(a),setTimeout(function(){"auto"===m&&i.frame<5&&"hidden"!==(d||{}).visibilityState&&i.useRAF(!1)},1500)}),i=m.Ticker.prototype=new m.events.EventDispatcher,i.constructor=m.Ticker;var E=u("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,Y){k||j.wake();var c=this.vars.useFrames?X:Y;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});j=E.ticker=new m.Ticker,i=E.prototype,i._dirty=i._gc=i._initted=i._paused=!1,i._totalTime=i._time=0,i._rawPrevTime=-1,i._next=i._last=i._onUpdate=i._timeline=i.timeline=null,i._paused=!1;var F=function(){k&&C()-D>2e3&&("hidden"!==(d||{}).visibilityState||!j.lagSmoothing())&&j.wake();var a=setTimeout(F,2e3);a.unref&&a.unref()};F(),i.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},i.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},i.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},i.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},i.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},i.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},i.render=function(a,b,c){},i.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},i.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-1e-7},i._enabled=function(a,b){return k||j.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},i._kill=function(a,b){return this._enabled(!1,!1)},i.kill=function(a,b){return this._kill(a,b),this},i._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},i._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},i._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},i.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=q(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},i.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},i.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},i.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},i.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},i.totalTime=function(a,b,c){if(k||j.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(K.length&&$(),this.render(a,b,!1),K.length&&$())}return this},i.progress=i.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio;
},i.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},i.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},i.timeScale=function(a){if(!arguments.length)return this._timeScale;var b,c;for(a=a||n,this._timeline&&this._timeline.smoothChildTiming&&(b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime(),this._startTime=c-(c-this._startTime)*this._timeScale/a),this._timeScale=a,c=this.timeline;c&&c.timeline;)c._dirty=!0,c.totalDuration(),c=c.timeline;return this},i.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},i.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(k||a||j.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var G=u("core.SimpleTimeline",function(a){E.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});i=G.prototype=new E,i.constructor=G,i.kill()._gc=!1,i._first=i._last=i._recent=null,i._sortChildren=!1,i.add=i.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=this.rawTime()-(a._timeline.rawTime()-a._pauseTime)),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},i._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},i.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},i.rawTime=function(){return k||j.wake(),this._totalTime};var H=u("TweenLite",function(b,c,d){if(E.call(this,c,d),this.render=H.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:H.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?W[H.defaultOverwrite]:"number"==typeof i?i>>0:W[i],(h||b instanceof Array||b.push&&q(b))&&"number"!=typeof b[0])for(this._targets=g=o(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(o(f))):(this._siblings[e]=_(f,this,!1),1===i&&this._siblings[e].length>1&&ba(f,this,null,1,this._siblings[e])):(f=g[e--]=H.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=_(b,this,!1),1===i&&this._siblings.length>1&&ba(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-n,this.render(Math.min(0,-this._delay)))},!0),I=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},J=function(a,b){var c,d={};for(c in a)V[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!S[c]||S[c]&&S[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};i=H.prototype=new E,i.constructor=H,i.kill()._gc=!1,i.ratio=0,i._firstPT=i._targets=i._overwrittenProps=i._startAt=null,i._notifyPluginsOfEnabled=i._lazy=!1,H.version="2.0.2",H.defaultEase=i._ease=new w(null,null,1,1),H.defaultOverwrite="auto",H.ticker=j,H.autoSleep=120,H.lagSmoothing=function(a,b){j.lagSmoothing(a,b)},H.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(H.selector=c,c(b)):(d||(d=a.document),d?d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b):b)};var K=[],L={},M=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,N=/[\+-]=-?[\.\d]/,O=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&null!=this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m.call(this._tween,b,this._target||c.t,this._tween):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},P=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(M)||[],f=b.match(M)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=O,N.test(b)&&(l.end=null),l},Q=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=P(m,n?parseFloat(o.s)+o.c+(o.s+"").replace(/[0-9\-\.]/g,""):d,h||H.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},R=H._internals={isArray:q,isSelector:I,lazyTweens:K,blobDif:P},S=H._plugins={},T=R.tweenLookup={},U=0,V=R.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},W={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},X=E._rootFramesTimeline=new G,Y=E._rootTimeline=new G,Z=30,$=R.lazyRender=function(){var a,b=K.length;for(L={};--b>-1;)a=K[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);K.length=0};Y._startTime=j.time,X._startTime=j.frame,Y._active=X._active=!0,setTimeout($,1),E._updateRoot=H.render=function(){var a,b,c;if(K.length&&$(),Y.render((j.time-Y._startTime)*Y._timeScale,!1,!1),X.render((j.frame-X._startTime)*X._timeScale,!1,!1),K.length&&$(),j.frame>=Z){Z=j.frame+(parseInt(H.autoSleep,10)||120);for(c in T){for(b=T[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete T[c]}if(c=Y._first,(!c||c._paused)&&H.autoSleep&&!X._first&&1===j._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||j.sleep()}}},j.addEventListener("tick",E._updateRoot);var _=function(a,b,c){var d,e,f=a._gsTweenID;if(T[f||(a._gsTweenID=f="t"+U++)]||(T[f]={target:a,tweens:[]}),b&&(d=T[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return T[f].tweens},aa=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=H.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},ba=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+n,l=[],m=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||ca(b,0,o),0===ca(h,j,o)&&(l[m++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[m++]=h)));for(f=m;--f>-1;)if(h=l[f],i=h._firstPT,2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted&&i){if(2!==d&&!aa(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},ca=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*n>f-b?n:(f+=a.totalDuration()/a._timeScale/e)>b+n?0:f-b-n};i._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.data="isStart",e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateParams=g.onUpdateParams,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=H.to(this.target||{},0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)V[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=H.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof w?k:"function"==typeof k?new w(k,g.easeParams):x[k]||H.defaultEase:H.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&H._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},i._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;L[b._gsTweenID]&&$(),this.vars.css||b.style&&b!==a&&b.nodeType&&S.css&&this.vars.autoCSS!==!1&&J(this.vars,b);for(g in this.vars)if(l=this.vars[g],V[g])l&&(l instanceof Array||l.push&&q(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(S[g]&&(j=new S[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=Q.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&ba(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(L[b._gsTweenID]=!0),i)},i.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===n&&"isPause"!==this.data)&&j!==a&&(c=!0,j>n&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:n);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==n||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:n)),(!this._initted||this._startAt&&this._startAt.progress())&&(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,m=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,K.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,!0,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,!0,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,!0,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===n&&g!==n&&(this._rawPrevTime=0))}},i._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:H.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline,n=this._firstPT;if((q(b)||I(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(H.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!aa(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&n&&this._enabled(!1,!1)}}return i},i.invalidate=function(){return this._notifyPluginsOfEnabled&&H._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],E.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-n,this.render(Math.min(0,-this._delay))),this},i._enabled=function(a,b){if(k||j.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=_(d[c],this,!0);else this._siblings=_(this.target,this,!0)}return E.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?H._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},H.to=function(a,b,c){return new H(a,b,c)},H.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new H(a,b,c)},H.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new H(a,b,d)},H.delayedCall=function(a,b,c,d,e){return new H(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},H.set=function(a,b){return new H(a,0,b)},H.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:H.selector(a)||a;var c,d,e,f;if((q(a)||I(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(H.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=_(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},H.killTweensOf=H.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=H.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var da=u("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=da.prototype},!0);if(i=da.prototype,da.version="1.19.0",da.API=2,i._firstPT=null,i._addTween=Q,i.setRatio=O,i._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},i._mod=i._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},H._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},da.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===da.API&&(S[(new a[b])._propName]=a[b]);return!0},t.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=u("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){da.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new da(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,da.activate([g]),g},g=a._gsQueue){for(h=0;h<g.length;h++)g[h]();for(i in r)r[i].func||a.console.log("GSAP encountered missing dependency: "+i)}k=!1}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/* CUSTOM BOUNCE */
/*!
 * VERSION: 0.2.1
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.CustomBounce",["easing.CustomEase"],function(a){var b,c=function(a){var b,c=a.length,d=1/a[c-2],e=1e3;for(b=2;c>b;b+=2)a[b]=(a[b]*d*e|0)/e;a[c-2]=1},d=function(b,c){this.vars=c=c||{},c.squash&&(this.squash=new a(c.squashID||b+"-squash")),a.call(this,b),this.bounce=this,this.update(c)};return d.prototype=b=new a,b.constructor=d,b.update=function(b){b=b||this.vars;var d,e,f,g,h,i,j,k=.999,l=Math.min(k,b.strength||.7),m=l,n=(b.squash||0)/100,o=n,p=1/.03,q=.2,r=1,s=.1,t=[0,0,.07,0,.1,1,.1,1],u=[0,0,0,0,.1,0,.1,0];for(h=0;200>h&&(q*=m*((m+1)/2),r*=l*l,i=s+q,f=s+.49*q,g=1-r,d=s+r/p,e=f+.8*(f-d),n&&(s+=n,d+=n,f+=n,e+=n,i+=n,j=n/o,u.push(s-n,0,s-n,j,s-n/2,j,s,j,s,0,s,0,s,j*-.6,s+(i-s)/6,0,i,0),t.push(s-n,1,s,1,s,1),n*=l*l),t.push(s,1,d,g,f,g,e,g,i,1,i,1),l*=.95,p=r/(i-e),s=i,!(g>k));h++);if(b.endAtStart){if(f=-.1,t.unshift(f,1,f,1,-.07,0),o)for(n=2.5*o,f-=n,t.unshift(f,1,f,1,f,1),u.splice(0,6),u.unshift(f,0,f,0,f,1,f+n/2,1,f+n,1,f+n,0,f+n,0,f+n,-.6,f+n+.033,0),h=0;h<u.length;h+=2)u[h]-=f;for(h=0;h<t.length;h+=2)t[h]-=f,t[h+1]=1-t[h+1]}return n&&(c(u),u[2]="C"+u[2],this.squash||(this.squash=new a(b.squashID||this.id+"-squash")),this.squash.setData("M"+u.join(","))),c(t),t[2]="C"+t[2],this.setData("M"+t.join(","))},d.create=function(a,b){return new d(a,b)},d.version="0.2.1",d},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("./CustomEase.min.js"),require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite","CustomEase"],b)}("CustomBounce");
/* CUSTOM EASE */
/*!
 * VERSION: 0.2.2
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.CustomEase",["easing.Ease"],function(a){var b=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,c=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,d=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,e=/[cLlsS]/g,f="CustomEase only accepts Cubic Bezier data.",g=function(a,b,c,d,e,f,h,i,j,k,l){var m,n=(a+c)/2,o=(b+d)/2,p=(c+e)/2,q=(d+f)/2,r=(e+h)/2,s=(f+i)/2,t=(n+p)/2,u=(o+q)/2,v=(p+r)/2,w=(q+s)/2,x=(t+v)/2,y=(u+w)/2,z=h-a,A=i-b,B=Math.abs((c-h)*A-(d-i)*z),C=Math.abs((e-h)*A-(f-i)*z);return k||(k=[{x:a,y:b},{x:h,y:i}],l=1),k.splice(l||k.length-1,0,{x:x,y:y}),(B+C)*(B+C)>j*(z*z+A*A)&&(m=k.length,g(a,b,n,o,t,u,x,y,j,k,l),g(x,y,v,w,r,s,h,i,j,k,l+1+(k.length-m))),k},h=function(a){var b,e,g,h,i,j,k,l,m,n,o,p=(a+"").replace(d,function(a){var b=+a;return 1e-4>b&&b>-1e-4?0:b}).match(c)||[],q=[],r=0,s=0,t=p.length,u=2;for(b=0;t>b;b++)if(m=h,isNaN(p[b])?(h=p[b].toUpperCase(),i=h!==p[b]):b--,e=+p[b+1],g=+p[b+2],i&&(e+=r,g+=s),b||(k=e,l=g),"M"===h)j&&j.length<8&&(q.length-=1,u=0),r=k=e,s=l=g,j=[e,g],u=2,q.push(j),b+=2,h="L";else if("C"===h)j||(j=[0,0]),j[u++]=e,j[u++]=g,i||(r=s=0),j[u++]=r+1*p[b+3],j[u++]=s+1*p[b+4],j[u++]=r+=1*p[b+5],j[u++]=s+=1*p[b+6],b+=6;else if("S"===h)"C"===m||"S"===m?(n=r-j[u-4],o=s-j[u-3],j[u++]=r+n,j[u++]=s+o):(j[u++]=r,j[u++]=s),j[u++]=e,j[u++]=g,i||(r=s=0),j[u++]=r+=1*p[b+3],j[u++]=s+=1*p[b+4],b+=4;else{if("L"!==h&&"Z"!==h)throw f;"Z"===h&&(e=k,g=l,j.closed=!0),("L"===h||Math.abs(r-e)>.5||Math.abs(s-g)>.5)&&(j[u++]=r+(e-r)/3,j[u++]=s+(g-s)/3,j[u++]=r+2*(e-r)/3,j[u++]=s+2*(g-s)/3,j[u++]=e,j[u++]=g,"L"===h&&(b+=2)),r=e,s=g}return q[0]},i=function(a){var b,c=a.length,d=999999999999;for(b=1;c>b;b+=6)+a[b]<d&&(d=+a[b]);return d},j=function(a,b,c){c||0===c||(c=Math.max(+a[a.length-1],+a[1]));var d,e=-1*+a[0],f=-c,g=a.length,h=1/(+a[g-2]+e),j=-b||(Math.abs(+a[g-1]-+a[1])<.01*(+a[g-2]-+a[0])?i(a)+f:+a[g-1]+f);for(j=j?1/j:-h,d=0;g>d;d+=2)a[d]=(+a[d]+e)*h,a[d+1]=(+a[d+1]+f)*j},k=function(a){var b=this.lookup[a*this.l|0]||this.lookup[this.l-1];return b.nx<a&&(b=b.n),b.y+(a-b.x)/b.cx*b.cy},l=function(b,c,d){this._calcEnd=!0,this.id=b,b&&(a.map[b]=this),this.getRatio=k,this.setData(c,d)},m=l.prototype=new a;return m.constructor=l,m.setData=function(a,c){a=a||"0,0,1,1";var d,i,k,l,m,n,o,p,q,r,s=a.match(b),t=1,u=[];if(c=c||{},r=c.precision||1,this.data=a,this.lookup=[],this.points=u,this.fast=1>=r,(e.test(a)||-1!==a.indexOf("M")&&-1===a.indexOf("C"))&&(s=h(a)),d=s.length,4===d)s.unshift(0,0),s.push(1,1),d=8;else if((d-2)%6)throw f;for((0!==+s[0]||1!==+s[d-2])&&j(s,c.height,c.originY),this.rawBezier=s,l=2;d>l;l+=6)i={x:+s[l-2],y:+s[l-1]},k={x:+s[l+4],y:+s[l+5]},u.push(i,k),g(i.x,i.y,+s[l],+s[l+1],+s[l+2],+s[l+3],k.x,k.y,1/(2e5*r),u,u.length-1);for(d=u.length,l=0;d>l;l++)o=u[l],p=u[l-1]||o,o.x>p.x||p.y!==o.y&&p.x===o.x||o===p?(p.cx=o.x-p.x,p.cy=o.y-p.y,p.n=o,p.nx=o.x,this.fast&&l>1&&Math.abs(p.cy/p.cx-u[l-2].cy/u[l-2].cx)>2&&(this.fast=!1),p.cx<t&&(p.cx?t=p.cx:(p.cx=.001,l===d-1&&(p.x-=.001,t=Math.min(t,.001),this.fast=!1)))):(u.splice(l--,1),d--);if(d=1/t+1|0,this.l=d,m=1/d,n=0,o=u[0],this.fast){for(l=0;d>l;l++)q=l*m,o.nx<q&&(o=u[++n]),i=o.y+(q-o.x)/o.cx*o.cy,this.lookup[l]={x:q,cx:m,y:i,cy:0,nx:9},l&&(this.lookup[l-1].cy=i-this.lookup[l-1].y);this.lookup[d-1].cy=u[u.length-1].y-i}else{for(l=0;d>l;l++)o.nx<l*m&&(o=u[++n]),this.lookup[l]=o;n<u.length-1&&(this.lookup[l-1]=u[u.length-2])}return this._calcEnd=1!==u[u.length-1].y||0!==u[0].y,this},m.getRatio=k,m.getSVGData=function(a){return l.getSVGData(this,a)},l.create=function(a,b,c){return new l(a,b,c)},l.version="0.2.2",l.bezierToPoints=g,l.get=function(b){return a.map[b]},l.getSVGData=function(b,c){c=c||{};var d,e,f,g,h,i,j,k,l,m,n=1e3,o=c.width||100,p=c.height||100,q=c.x||0,r=(c.y||0)+p,s=c.path;if(c.invert&&(p=-p,r=0),b=b.getRatio?b:a.map[b]||console.log("No ease found: ",b),b.rawBezier){for(d=[],j=b.rawBezier.length,f=0;j>f;f+=2)d.push(((q+b.rawBezier[f]*o)*n|0)/n+","+((r+b.rawBezier[f+1]*-p)*n|0)/n);d[0]="M"+d[0],d[1]="C"+d[1]}else for(d=["M"+q+","+r],j=Math.max(5,200*(c.precision||1)),g=1/j,j+=2,k=5/j,l=((q+g*o)*n|0)/n,m=((r+b.getRatio(g)*-p)*n|0)/n,e=(m-r)/(l-q),f=2;j>f;f++)h=((q+f*g*o)*n|0)/n,i=((r+b.getRatio(f*g)*-p)*n|0)/n,(Math.abs((i-m)/(h-l)-e)>k||f===j-1)&&(d.push(l+","+m),e=(i-m)/(h-l)),l=h,m=i;return s&&("string"==typeof s?document.querySelector(s):s).setAttribute("d",d.join(" ")),d.join(" ")},l},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("CustomEase");
/* CUSTOM WIGGLE */
/*!
 * VERSION: 0.2.1
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.CustomWiggle",["easing.CustomEase","easing.Ease"],function(a,b){var c,d={easeOut:new a("","M0,1,C0.7,1,0.6,0,1,0"),easeInOut:new a("","M0,0,C0.104,0,0.242,1,0.444,1,0.644,1,0.608,0,1,0"),anticipate:new a("","M0,0,C0,0.222,0.024,0.386,0.06,0.402,0.181,0.455,0.647,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1"),uniform:new a("","M0,0,C0,0.95,0.01,1,0.01,1,0.01,1,1,1,1,1,1,1,1,0.01,1,0")},e=new a,f=function(c,d){return c=c.getRatio?c:b.map[c]||new a("",c),c.rawBezier||!d?c:{getRatio:function(a){return 1-c.getRatio(a)}}},g=function(b,c){this.vars=c||{},a.call(this,b),this.update(this.vars)};return g.prototype=c=new a,c.constructor=g,c.update=function(a){a=a||this.vars;var b,c,g,h,i,j,k,l,m,n=0|(a.wiggles||10),o=1/n,p=o/2,q="anticipate"===a.type,r=d[a.type]||d.easeOut,s=e,t=1e3;if(q&&(s=r,r=d.easeOut),a.timingEase&&(s=f(a.timingEase)),a.amplitudeEase&&(r=f(a.amplitudeEase,!0)),j=s.getRatio(p),k=q?-r.getRatio(p):r.getRatio(p),l=[0,0,j/4,0,j/2,k,j,k],"random"===a.type){for(l.length=4,b=s.getRatio(o),c=2*Math.random()-1,m=2;n>m;m++)p=b,k=c,b=s.getRatio(o*m),c=2*Math.random()-1,g=Math.atan2(c-l[l.length-3],b-l[l.length-4]),h=Math.cos(g)*o,i=Math.sin(g)*o,l.push(p-h,k-i,p,k,p+h,k+i);l.push(b,0,1,0)}else{for(m=1;n>m;m++)l.push(s.getRatio(p+o/2),k),p+=o,k=(k>0?-1:1)*r.getRatio(m*o),j=s.getRatio(p),l.push(s.getRatio(p-o/2),k,j,k);l.push(s.getRatio(p+o/4),k,s.getRatio(p+o/4),0,1,0)}for(m=l.length;--m>-1;)l[m]=(l[m]*t|0)/t;l[2]="C"+l[2],this.setData("M"+l.join(","))},g.create=function(a,b){return new g(a,b)},g.version="0.2.1",g.eases=d,g},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("./CustomEase.min.js"),require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite","CustomEase"],b)}("CustomWiggle");
/*!
 * VERSION: 0.6.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(a){"use strict";var b=a.GreenSockGlobals||a,c=function(a){var c,d=a.split("."),e=b;for(c=0;c<d.length;c++)e[d[c]]=e=e[d[c]]||{};return e},d=c("com.greensock.utils"),e=function(a){var b=a.nodeType,c="";if(1===b||9===b||11===b){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===b||4===b)return a.nodeValue;return c},f=document,g=f.defaultView?f.defaultView.getComputedStyle:function(){},h=/([A-Z])/g,i=function(a,b,c,d){var e;return(c=c||g(a,null))?(a=c.getPropertyValue(b.replace(h,"-$1").toLowerCase()),e=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,e=c[b]),d?e:parseInt(e,10)||0},j=function(a){return a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},k=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],j(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else e.push(c);return e},l=function(a,b){for(var c,d=b.length;--d>-1;)if(c=b[d],a.substr(0,c.length)===c)return c.length},m=/(?:\r|\n|\t\t)/g,n=/(?:\s\s+)/g,o=55296,p=56319,q=56320,r=127462,s=127487,t=127995,u=127999,v=function(a){return(a.charCodeAt(0)-o<<10)+(a.charCodeAt(1)-q)+65536},w=f.all&&!f.addEventListener,x=" style='position:relative;display:inline-block;"+(w?"*display:inline;*zoom:1;'":"'"),y=function(a,b){a=a||"";var c=-1!==a.indexOf("++"),d=1;return c&&(a=a.split("++").join("")),function(){return"<"+b+x+(a?" class='"+a+(c?d++:"")+"'>":">")}},z=d.SplitText=b.SplitText=function(a,b){if("string"==typeof a&&(a=z.selector(a)),!a)throw"cannot split a null element.";this.elements=j(a)?k(a):[a],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=b||{},this.split(b)},A=function(a,b,c){var d=a.nodeType;if(1===d||9===d||11===d)for(a=a.firstChild;a;a=a.nextSibling)A(a,b,c);else(3===d||4===d)&&(a.nodeValue=a.nodeValue.split(b).join(c))},B=function(a,b){for(var c=b.length;--c>-1;)a.push(b[c])},C=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},D=function(a,b,c){for(var d;a&&a!==b;){if(d=a._next||a.nextSibling)return d.textContent.charAt(0)===c;a=a.parentNode||a._parent}return!1},E=function(a){var b,c,d=C(a.childNodes),e=d.length;for(b=0;e>b;b++)c=d[b],c._isSplit?E(c):(b&&3===c.previousSibling.nodeType?c.previousSibling.nodeValue+=3===c.nodeType?c.nodeValue:c.firstChild.nodeValue:3!==c.nodeType&&a.insertBefore(c.firstChild,c),a.removeChild(c))},F=function(a,b,c,d,e,h,j){var k,l,m,n,o,p,q,r,s,t,u,v,w=g(a),x=i(a,"paddingLeft",w),y=-999,z=i(a,"borderBottomWidth",w)+i(a,"borderTopWidth",w),C=i(a,"borderLeftWidth",w)+i(a,"borderRightWidth",w),F=i(a,"paddingTop",w)+i(a,"paddingBottom",w),G=i(a,"paddingLeft",w)+i(a,"paddingRight",w),H=.2*i(a,"fontSize"),I=i(a,"textAlign",w,!0),J=[],K=[],L=[],M=b.wordDelimiter||" ",N=b.span?"span":"div",O=b.type||b.split||"chars,words,lines",P=e&&-1!==O.indexOf("lines")?[]:null,Q=-1!==O.indexOf("words"),R=-1!==O.indexOf("chars"),S="absolute"===b.position||b.absolute===!0,T=b.linesClass,U=-1!==(T||"").indexOf("++"),V=[];for(U&&(T=T.split("++").join("")),l=a.getElementsByTagName("*"),m=l.length,o=[],k=0;m>k;k++)o[k]=l[k];if(P||S)for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,(p||S||R&&!Q)&&(v=n.offsetTop,P&&p&&Math.abs(v-y)>H&&("BR"!==n.nodeName||0===k)&&(q=[],P.push(q),y=v),S&&(n._x=n.offsetLeft,n._y=v,n._w=n.offsetWidth,n._h=n.offsetHeight),P&&((n._isSplit&&p||!R&&p||Q&&p||!Q&&n.parentNode.parentNode===a&&!n.parentNode._isSplit)&&(q.push(n),n._x-=x,D(n,a,M)&&(n._wordEnd=!0)),"BR"===n.nodeName&&(n.nextSibling&&"BR"===n.nextSibling.nodeName||0===k)&&P.push([])));for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,"BR"!==n.nodeName?(S&&(s=n.style,Q||p||(n._x+=n.parentNode._x,n._y+=n.parentNode._y),s.left=n._x+"px",s.top=n._y+"px",s.position="absolute",s.display="block",s.width=n._w+1+"px",s.height=n._h+"px"),!Q&&R?n._isSplit?(n._next=n.nextSibling,n.parentNode.appendChild(n)):n.parentNode._isSplit?(n._parent=n.parentNode,!n.previousSibling&&n.firstChild&&(n.firstChild._isFirst=!0),n.nextSibling&&" "===n.nextSibling.textContent&&!n.nextSibling.nextSibling&&V.push(n.nextSibling),n._next=n.nextSibling&&n.nextSibling._isFirst?null:n.nextSibling,n.parentNode.removeChild(n),o.splice(k--,1),m--):p||(v=!n.nextSibling&&D(n.parentNode,a,M),n.parentNode._parent&&n.parentNode._parent.appendChild(n),v&&n.parentNode.appendChild(f.createTextNode(" ")),b.span&&(n.style.display="inline"),J.push(n)):n.parentNode._isSplit&&!n._isSplit&&""!==n.innerHTML?K.push(n):R&&!n._isSplit&&(b.span&&(n.style.display="inline"),J.push(n))):P||S?(n.parentNode&&n.parentNode.removeChild(n),o.splice(k--,1),m--):Q||a.appendChild(n);for(k=V.length;--k>-1;)V[k].parentNode.removeChild(V[k]);if(P){for(S&&(t=f.createElement(N),a.appendChild(t),u=t.offsetWidth+"px",v=t.offsetParent===a?0:a.offsetLeft,a.removeChild(t)),s=a.style.cssText,a.style.cssText="display:none;";a.firstChild;)a.removeChild(a.firstChild);for(r=" "===M&&(!S||!Q&&!R),k=0;k<P.length;k++){for(q=P[k],t=f.createElement(N),t.style.cssText="display:block;text-align:"+I+";position:"+(S?"absolute;":"relative;"),T&&(t.className=T+(U?k+1:"")),L.push(t),m=q.length,l=0;m>l;l++)"BR"!==q[l].nodeName&&(n=q[l],t.appendChild(n),r&&n._wordEnd&&t.appendChild(f.createTextNode(" ")),S&&(0===l&&(t.style.top=n._y+"px",t.style.left=x+v+"px"),n.style.top="0px",v&&(n.style.left=n._x-v+"px")));0===m?t.innerHTML="&nbsp;":Q||R||(E(t),A(t,String.fromCharCode(160)," ")),S&&(t.style.width=u,t.style.height=n._h+"px"),a.appendChild(t)}a.style.cssText=s}S&&(j>a.clientHeight&&(a.style.height=j-F+"px",a.clientHeight<j&&(a.style.height=j+z+"px")),h>a.clientWidth&&(a.style.width=h-G+"px",a.clientWidth<h&&(a.style.width=h+C+"px"))),B(c,J),Q&&B(d,K),B(e,L)},G=function(a,b,c,d){var g,h,i,j,k,q,w,x,y,z,B=b.span?"span":"div",C=b.type||b.split||"chars,words,lines",D=-1!==C.indexOf("chars"),E="absolute"===b.position||b.absolute===!0,F=b.wordDelimiter||" ",G=" "!==F?"":E?"&#173; ":" ",H=b.span?"</span>":"</div>",I=!0,J=b.specialChars?"function"==typeof b.specialChars?b.specialChars:l:null,K=f.createElement("div"),L=a.parentNode;for(L.insertBefore(K,a),K.textContent=a.nodeValue,L.removeChild(a),a=K,g=e(a),w=-1!==g.indexOf("<"),b.reduceWhiteSpace!==!1&&(g=g.replace(n," ").replace(m,"")),w&&(g=g.split("<").join("{{LT}}")),k=g.length,h=(" "===g.charAt(0)?G:"")+c(),i=0;k>i;i++)if(q=g.charAt(i),J&&(z=J(g.substr(i),b.specialChars)))q=g.substr(i,z||1),h+=D&&" "!==q?d()+q+"</"+B+">":q,i+=z-1;else if(q===F&&g.charAt(i-1)!==F&&i){for(h+=I?H:"",I=!1;g.charAt(i+1)===F;)h+=G,i++;i===k-1?h+=G:")"!==g.charAt(i+1)&&(h+=G+c(),I=!0)}else"{"===q&&"{{LT}}"===g.substr(i,6)?(h+=D?d()+"{{LT}}</"+B+">":"{{LT}}",i+=5):q.charCodeAt(0)>=o&&q.charCodeAt(0)<=p||g.charCodeAt(i+1)>=65024&&g.charCodeAt(i+1)<=65039?(x=v(g.substr(i,2)),y=v(g.substr(i+2,2)),j=x>=r&&s>=x&&y>=r&&s>=y||y>=t&&u>=y?4:2,h+=D&&" "!==q?d()+g.substr(i,j)+"</"+B+">":g.substr(i,j),i+=j-1):h+=D&&" "!==q?d()+q+"</"+B+">":q;a.outerHTML=h+(I?H:""),w&&A(L,"{{LT}}","<")},H=function(a,b,c,d){var e,f,g=C(a.childNodes),h=g.length,j="absolute"===b.position||b.absolute===!0;if(3!==a.nodeType||h>1){for(b.absolute=!1,e=0;h>e;e++)f=g[e],(3!==f.nodeType||/\S+/.test(f.nodeValue))&&(j&&3!==f.nodeType&&"inline"===i(f,"display",null,!0)&&(f.style.display="inline-block",f.style.position="relative"),f._isSplit=!0,H(f,b,c,d));return b.absolute=j,void(a._isSplit=!0)}G(a,b,c,d)},I=z.prototype;I.split=function(a){this.isSplit&&this.revert(),this.vars=a=a||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var b,c,d,e=this.elements.length,f=a.span?"span":"div",g=y(a.wordsClass,f),h=y(a.charsClass,f);--e>-1;)d=this.elements[e],this._originals[e]=d.innerHTML,b=d.clientHeight,c=d.clientWidth,H(d,a,g,h),F(d,a,this.chars,this.words,this.lines,c,b);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},I.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var a=this._originals.length;--a>-1;)this.elements[a].innerHTML=this._originals[a];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},z.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(z.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)},z.version="0.6.1"}(_gsScope),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?module.exports=b():"function"==typeof define&&define.amd&&define([],b)}("SplitText");
/* CREATE CUSTOM EASE */
punchgs.SFXBounceLite = punchgs.CustomBounce.create("SFXBounceLite", { strength:0.3 ,squash:1, squashID:"SFXBounceLite-squash"});
punchgs.SFXBounceSolid = punchgs.CustomBounce.create("SFXBounceSolid", { strength:0.5,squash:2,squashID:"SFXBounceSolid-squash"});
punchgs.SFXBounceStrong = punchgs.CustomBounce.create("SFXBounceStrong", { strength:0.7,squash:3,squashID:"SFXBounceStrong-squash"});
punchgs.SFXBounceExtrem = punchgs.CustomBounce.create("SFXBounceExtrem", { strength:0.9,squash:4,squashID:"SFXBounceExtrem-squash"});
punchgs.BounceLite = punchgs.CustomBounce.create("BounceLite", { strength:0.3 });
punchgs.BounceSolid = punchgs.CustomBounce.create("BounceSolid", { strength:0.5});
punchgs.BounceStrong = punchgs.CustomBounce.create("BounceStrong", { strength:0.7});
punchgs.BounceExtrem = punchgs.CustomBounce.create("BounceExtrem", { strength:0.9});
try{
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;
	delete(window.GreenSockGlobals);
	delete(window._gsQueue);
	delete(window._gsDefine);	
   } catch(e) {}
try{
	window.GreenSockGlobals = RS_CacheGS;
	window._gsQueue = RS_CacheGS_queue;
	window._gsDefine = RS_Cache_define;
	} catch(e) {}
(function(e,t){
		e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};		
})(jQuery);
/*!
  - Slider Revolution 6.0 JavaScript Plugin -
..........................xXXXXX.................
................. xXXXXX..xXXXXX..xXXXXX.........
..................xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........
				VERSION: 6.0.4
			   DATE: 2019-07-12
    @author: Krisztian Horvath, ThemePunch OHG.
UPDATES AND DOCS AT: 
https://www.themepunch.com/support-center
GET LICENSE AT: 
https://codecanyon.net/item/slider-revolution-responsive-wordpress-plugin/2751380?ref=themepunch
LICENSE:
Copyright (c) 2009-2019, ThemePunch. All rights reserved.
This work is subject to the terms at https://codecanyon.net/licenses/standard (Regular / Extended)
*/
!function(e,t){"use strict";var i;e.fn.extend({revolution:function(a){return this.each(function(){for(var o=document.getElementsByClassName("rs-p-wp-fix");o[0];)o[0].parentNode.removeChild(o[0]);var s=this.id=this.id===t?"rs_module_"+Math.round(1e7*Math.random()):this.id;e.fn.revolution[s]=Y(a),(i=e.fn.revolution)[s].c=e(this),i[s].cpar=i[s].c.parent(),i[s].canvas=i[s].c.find("rs-slides"),i[s].stopAfterLoops!=t&&i[s].stopAfterLoops>-1?i[s].looptogo=i[s].stopAfterLoops:i[s].looptogo="disabled",window._T=i[s],i[s].BUG_safari_clipPath="Safari"===i.get_browser()&&i.get_browser_version()>"12",i[s].BUG_ie_clipPath="Edge"===i.get_browser()||"IE"===i.get_browser(),i[s].anyid=[],i[s].indexhelper=0,i[s].level=0,i[s].rtl=e("body").hasClass("rtl"),i[s].minHeight=i[s].minHeight!=t&&""!==i[s].minHeight?parseInt(i[s].minHeight,0):0,r(s),"hero"==i[s].sliderType&&i[s].c.find("rs-slide").each(function(t){t>0&&e(this).remove()}),i[s].navigation.use="hero"!==i[s].sliderType&&("carousel"==i[s].sliderType||i[s].navigation.keyboardNavigation||"on"==i[s].navigation.mouseScrollNavigation||"carousel"==i[s].navigation.mouseScrollNavigation||i[s].navigation.touch.touchenabled||i[s].navigation.arrows.enable||i[s].navigation.bullets.enable||i[s].navigation.thumbnails.enable||i[s].navigation.tabs.enable),i[s].c.find("rs-bgvideo").each(function(){"RS-BGVIDEO"!==this.tagName||this.id!==t&&""!==this.id||(this.id="rs-bg-video-"+Math.round(1e6*Math.random()))}),punchgs.force3D="auto",c(s)})},getRSVersion:function(e){var t,i,a=window.SliderRevolutionVersion;if(!e){for(var r in t=i="---------------------------------------------------------\n",t+="    Currently Loaded Slider Revolution & SR Modules :\n"+i,a)a.hasOwnProperty(r)&&(t+=a[r].alias+": "+a[r].ver+"\n");t+=i}return e?a:t},revremoveslide:function(t){return this.each(function(){var a=this.id;if(!(t<0||t>i[a].slideamount)&&i[a]&&i[a].slides.length>0&&(t>0||t<=i[a].slides.length)){var r=i[a].slides[t].dataset.key;i[a].slideamount=i[a].slideamount-1,i[a].realslideamount=i[a].realslideamount-1,s("rs-bullet",r,a),s("rs-tab",r,a),s("rs-thumb",r,a),e(i[a].slides[t]).remove(),i[a].slides=o(i[a].slides,t),i[a].carousel&&i[a].carousel.slides&&(i[a].carousel.slides=o(i[a].carousel.slides,t)),i[a].thumbs=o(i[a].thumbs,t),i.updateNavIndexes&&i.updateNavIndexes(a),t<=i[a].pr_active_key&&(i[a].pr_active_key=i[a].pr_active_key-1)}})},revaddcallback:function(e){return this.each(function(){i[this.id]&&(i[this.id].callBackArray===t&&(i[this.id].callBackArray=[]),i[this.id].callBackArray.push(e))})},revgetparallaxproc:function(){if(i[this[0].id])return i[this[0].id].scrollproc},revdebugmode:function(){return this.each(function(){i[this.id].debugMode=!0,m(this.id)})},revscroll:function(t){return this.each(function(){var i=e(this);e("body,html").animate({scrollTop:i.offset().top+i.height()-t+"px"},{duration:400})})},revredraw:function(){return this.each(function(){m(this.id)})},revkill:function(){return this.each(function(){var a=this.id;punchgs.TweenMax.killDelayedCallsTo(i.showHideNavElements),i[a].c.data("conthover",1),i[a].c.data("conthoverchanged",1),i[a].c.trigger("revolution.slide.onpause");var r=i[a].cpar.find("rs-progress");i[a].c[0].opt;i[a].tonpause=!0,i[a].c.trigger("stoptimer"),i[a].sliderisrunning=!1;var o="resize.revslider-"+i[a].c.attr("id");e(window).unbind(o),punchgs.TweenMax.killTweensOf(i[a].c.find("*"),!1),punchgs.TweenMax.killTweensOf(i[a].c,!1),i[a].c.unbind("hover, mouseover, mouseenter,mouseleave, resize"),o="resize.revslider-"+i[a].c.attr("id"),e(window).off(o),i[a].c.find("*").each(function(){var i=e(this);i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"),i.off("on, hover, mouseenter,mouseleave,mouseover, resize"),i.data("mySplitText",null),i.data("ctl",null),i.data("tween")!=t&&i.data("tween").kill(),i.data("pztl")!=t&&i.data("pztl").kill(),i.data("timeline_out")!=t&&i.data("timeline_out").kill(),i.data("timeline")!=t&&i.data("timeline").kill(),i.remove(),i.empty(),i=null}),punchgs.TweenMax.killTweensOf(i[a].c.find("*"),!1),punchgs.TweenMax.killTweensOf(i[a].c,!1),r.remove();try{i[a].c.closest("rs-fullwidth-wrap").remove()}catch(e){}try{i[a].c.closest("rs-module-wrap").remove()}catch(e){}try{i[a].c.remove()}catch(e){}i[a].c.empty(),i[a].c.html(),i[a].c=null})},revpause:function(){return this.each(function(){var a=e(this);a!=t&&a.length>0&&e("body").find("#"+a.attr("id")).length>0&&(a.data("conthover",1),a.data("conthoverchanged",1),a.trigger("revolution.slide.onpause"),i[this.id].tonpause=!0,a.trigger("stoptimer"))})},revresume:function(){return this.each(function(){if(i[this.id]!==t){var a=e(this);a.data("conthover",0),a.data("conthoverchanged",1),a.trigger("revolution.slide.onresume"),i[this.id].tonpause=!1,a.trigger("starttimer")}})},revmodal:function(a){var r=this instanceof e?this[0]:this,o=r.id;i[r.id]!==t&&i.revModal(o,a)},revstart:function(){var a=this instanceof e?this[0]:this;return i[a.id]===t?(console.log("Slider is Not Existing"),!1):i[a.id].sliderisrunning?(console.log("Slider Is Running Already"),!1):(i[a.id].c=e(a),i[a.id].canvas=i[a.id].c.find("rs-slides"),h(a.id),!0)},revnext:function(){return this.each(function(){i[this.id]!==t&&i.callingNewSlide(this.id,1,"carousel"===i[this.id].sliderType)})},revprev:function(){return this.each(function(){i[this.id]!==t&&i.callingNewSlide(this.id,-1,"carousel"===i[this.id].sliderType)})},revmaxslide:function(){return e(this).find("rs-slide").length},revcurrentslide:function(){if(i[e(this)[0].id]!==t)return parseInt(i[e(this)[0].id].pr_active_key,0)+1},revlastslide:function(){return e(this).find("rs-slide").length},revshowslide:function(e){return this.each(function(){i[this.id]!==t&&e!==t&&i.callingNewSlide(this.id,"to"+(e-1))})},revcallslidewithid:function(e){return this.each(function(){i[this.id]!==t&&i.callingNewSlide(this.id,e,"carousel"===i[this.id].sliderType)})}}),i=e.fn.revolution,e.extend(!0,i,{updateFixedScrollTimes:function(e){!0===i[e].sbtimeline.set&&!0===i[e].sbtimeline.fixed&&"auto"!==i[e].sliderLayout&&(i[e].sbtimeline.rest=i[e].duration-i[e].sbtimeline.fixEnd,i[e].sbtimeline.time=i[e].duration-(i[e].sbtimeline.fixStart+i[e].sbtimeline.rest),i[e].sbtimeline.extended=i[e].sbtimeline.time/10)},callContWidthManager:function(e){g(e)},revModal:function(a,r){if(a!==t&&i[a]!==t)switch(r.mode){case"show":r.slide=r.slide===t?"to0":r.slide,i[a].modal.bodyclass!==t&&i[a].modal.bodyclass.length>=0&&document.body.classList.add(i[a].modal.bodyclass),punchgs.TweenMax.to(i[a].modal.bg,2,{display:"block",opacity:1,ease:punchgs.Power3.easeInOut}),punchgs.TweenMax.set(i[a].modal.c,{display:"auto"===i[a].sliderLayout?"inline-block":"block",opacity:0}),punchgs.TweenMax.set(i[a].cpar,{display:"block",opacity:1}),punchgs.TweenMax.fromTo([i[a].modal.c],.01,{opacity:0},{opacity:1,ease:punchgs.Power3.easeInOut,onComplete:function(){i[a].sliderisrunning?i.callingNewSlide(a,r.slide):("to0"!==r.slide&&(i[a].startWithSlideKey=r.slide),h(a))}}),window.overscrollhistory=document.body.style.overflow,document.body.style.overflow="hidden";break;case"close":P(a),document.body.style.overflow=window.overscrollhistory,i[a].modal.bodyclass!==t&&i[a].modal.bodyclass.length>=0&&document.body.classList.remove(i[a].modal.bodyclass),punchgs.TweenMax.to(i[a].modal.bg,2,{display:"none",opacity:0,ease:punchgs.Power3.easeInOut}),punchgs.TweenMax.to(i[a].modal.c,.3,{display:"none",delay:.5,opacity:0,onComplete:function(){punchgs.TweenMax.set(i[a].cpar,{display:"none",opacity:0}),e(document).trigger("revolution.all.resize")}});break;case"init":if(window.RS_60_MODALS=window.RS_60_MODALS===t?[]:window.RS_60_MODALS,-1===e.inArray(i[a].modal.alias,window.RS_60_MODALS)&&window.RS_60_MODALS.push(i[a].modal.alias),i[a].modal.listener===t){i[a].modal.c=e("#"+a+"_modal"),i[a].modal.bg=e('<rs-modal-cover data-rid="'+a+'" id="'+a+'_modal_bg"></rs-modal-cover>'),"auto"===i[a].sliderLayout&&i[a].modal.cover?e("body").append(i[a].modal.bg):i[a].modal.c.append(i[a].modal.bg),i[a].modal.c[0].className+="rs-modal-"+i[a].sliderLayout;var o={left:"auto"===i[a].sliderLayout?"center"===i[a].modal.horizontal?"50%":"left"===i[a].modal.horizontal?"0px":"auto":"0px",right:"auto"===i[a].sliderLayout?"center"===i[a].modal.horizontal?"auto":"left"===i[a].modal.horizontal?"auto":"0px":"0px",top:"auto"===i[a].sliderLayout||"fullwidth"===i[a].sliderLayout?"middle"===i[a].modal.vertical?"50%":"top"===i[a].modal.vertical?"0px":"auto":"0px",bottom:"auto"===i[a].sliderLayout||"fullwidth"===i[a].sliderLayout?"middle"===i[a].modal.vertical?"auto":"top"===i[a].modal.vertical?"auto":"0px":"0px",y:("auto"===i[a].sliderLayout||"fullwidth"===i[a].sliderLayout)&&"middle"===i[a].modal.vertical?"-50%":0,x:"auto"===i[a].sliderLayout&&"center"===i[a].modal.horizontal?"-50%":0};punchgs.TweenMax.set(i[a].modal.c,"auto"===i[a].sliderLayout||"fullscreen"===i[a].sliderLayout?e.extend(!0,o,{opacity:0,display:"none"}):{opacity:0,display:"none"}),"fullwidth"===i[a].sliderLayout&&punchgs.TweenMax.set(i[a].modal.c.find("rs-module-wrap"),o),!1!==i[a].modal.cover&&"false"!==i[a].modal.cover||(i[a].modal.coverColor="transparent"),punchgs.TweenMax.set(i[a].modal.bg,{display:"none",background:i[a].modal.coverColor,opacity:0}),e(document).on("RS_OPENMODAL_"+i[a].modal.alias,function(e,t){i.revModal(a,{mode:"show",slide:t})}),e(document).on("click","rs-modal-cover",function(){i.revModal(this.dataset.rid,{mode:"close"})}),i[a].modal.listener=!0}}},smartConvertDivs:function(e){var t="";if("string"==typeof e&&e.indexOf("#")>=0){var i=e.split(","),a=i.length-1;for(var r in i)t="string"==typeof i[r]&&"#"===i[r][0]?t+i[r][1]/i[r][3]*100+"%"+(r<a?",":""):t+i[r]+(r<a?",":"")}else t=e;return t},revToResp:function(e,i,a,r){if((e=e===t?a:e)!==t){if(r=r===t?",":r,"boolean"!=typeof e&&("object"!=typeof e||Array.isArray(e))){try{e=e.replace(/[[\]]/g,"").replace(/\'/g,"").split(r)}catch(e){}for(e=Array.isArray(e)?e:[e];e.length<i;)e[e.length]=e[e.length-1]}return e}},updateVisibleArea:function(a){for(var r in i[a].viewPort.visible_area=i.revToResp(i[a].viewPort.visible_area,i[a].rle,"200px"),i[a].viewPort.vaType=new Array(4),i[a].viewPort.visible_area)i[a].viewPort.visible_area.hasOwnProperty(r)&&(e.isNumeric(i[a].viewPort.visible_area[r])&&(i[a].viewPort.visible_area[r]+="%"),i[a].viewPort.visible_area[r]!==t&&(i[a].viewPort.vaType[r]=i[a].viewPort.visible_area[r].indexOf("%")>=0?"%":"px"),i[a].viewPort.visible_area[r]=parseInt(i[a].viewPort.visible_area[r],0),i[a].viewPort.visible_area[r]="%"==i[a].viewPort.vaType[r]?i[a].viewPort.visible_area[r]/100:i[a].viewPort.visible_area[r])},fontLoaded:function(e){return i.monoWidth=i.monoWidth===t?n("monospace"):i.monoWidth,i.sansWidth=i.sansWidth===t?n("sans-serif"):i.sansWidth,i.serifWidth=i.serifWidth===t?n("serif"):i.serifWidth,i.monoWidth!==n(e+",monospace")||i.sansWidth!==n(e+",sans-serif")||i.serifWidth!==n(e+",serif")},getversion:function(){return"Slider Revolution 6.0.4"},currentSlideIndex:function(e){return i[e].pr_active_key},simp:function(e,t,i){var a=Math.abs(e)-Math.floor(Math.abs(e/t))*t;return i?a:e<0?-1*a:a},iOSVersion:function(){return!!(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i))&&navigator.userAgent.match(/OS 4_\d like Mac OS X/i)},isIE:function(t,i){var a=e('<div style="display:none;"/>').appendTo(e("body"));a.html("\x3c!--[if "+(i||"")+" IE "+(t||"")+"]><a>&nbsp;</a><![endif]--\x3e");var r=a.find("a").length;return a.remove(),r},is_mobile:function(){var e=["android","webos","iphone","ipad","blackberry","Android","webos","iPod","iPhone","iPad","Blackberry","BlackBerry"],t=!1;for(var i in e)e.hasOwnProperty(i)&&(t=!!(t||navigator.userAgent.split(e[i]).length>1)||t);return t},is_android:function(){var e=["android","Android"],t=!1;for(var i in e)e.hasOwnProperty(i)&&(t=!!(t||navigator.userAgent.split(e[i]).length>1)||t);return t},callBackHandling:function(t,a,r){i[t].callBackArray&&e.each(i[t].callBackArray,function(e,t){t&&t.inmodule&&t.inmodule===a&&t.atposition&&t.atposition===r&&t.callback&&t.callback.call()})},get_browser:function(){var e,t=navigator.userAgent,i=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(i[1])?(e=/\brv[ :]+(\d+)/g.exec(t)||[],"IE"):"Chrome"===i[1]&&null!=(e=t.match(/\b(OPR|Edge)\/(\d+)/))?e[1].replace("OPR","Opera"):(i=i[2]?[i[1],i[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=t.match(/version\/(\d+)/i))&&i.splice(1,1,e[1]),i[0])},get_browser_version:function(){var e,t=navigator.appName,i=navigator.userAgent,a=i.match(/(edge|opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return a&&null!=(e=i.match(/version\/([\.\d]+)/i))&&(a[2]=e[1]),(a=a?[a[1],a[2]]:[t,navigator.appVersion,"-?"])[1]},isFirefox:function(e){return i[e].isFirefox=i[e].isFirefox===t?"Firefox"===i.get_browser():i[e].isFirefox,i[e].isFirefox},isSafari11:function(){return"safari"===e.trim(i.get_browser().toLowerCase())&&parseFloat(i.get_browser_version())>=11},getHorizontalOffset:function(e,t){var i=d(e,".outer-left"),a=d(e,".outer-right");return"left"==t?i:"right"==t?a:i+a},getComingSlide:function(a,r){var o=i[a].pr_next_key!==t?i[a].pr_next_key:i[a].pr_processing_key!==t?i[a].pr_processing_key:i[a].pr_active_key,s=0;if(s=0,i[a].pr_active_slide!==t&&i[a].pr_active_slide.hasClass("not-in-nav")&&(o=i[a].pr_lastshown_key),r!==t&&e.isNumeric(r)||r!==t&&r.match(/to/g))s=1===r||-1===r?parseInt(o,0)+r<0?i[a].slideamount-1:parseInt(o,0)+r>=i[a].slideamount?0:parseInt(o,0)+r:(r=e.isNumeric(r)?r:parseInt(r.split("to")[1],0))<0?0:r>i[a].slideamount-1?i[a].slideamount-1:r;else if(r)for(var n in i[a].slides)i[a].slides.hasOwnProperty(n)&&(s=i[a].slides&&i[a].slides[n]&&i[a].slides[n].dataset&&i[a].slides[n].dataset.key===r?n:s);return{nindex:s,aindex:o}},callingNewSlide:function(e,t,a){var r=i.getComingSlide(e,t);i[e].pr_next_key=r.nindex,i[e].sdir=i[e].pr_next_key<i[e].pr_active_key?1:0,i[e].c.trigger("revolution.nextslide.waiting"),(r.aindex===i[e].pr_next_key&&r.aindex===i[e].pr_lastshown_key||i[e].pr_next_key!==r.aindex&&-1!=i[e].pr_next_key)&&C(e,a)},updateDimensions:function(e){i[e].lastconw=i[e].conw,i[e].lastconh=i[e].conh,i[e].conw=i[e].c.width(),i[e].conh=i[e].infullscreenmode?i[e].minHeight:i[e].c.height(),i[e].ulw=i[e].canvas.width(),i[e].ulh=i[e].canvas.height()},setSize:function(a,r){var o,s=parseInt(i[a].top_outer||0)+parseInt(i[a].bottom_outer||0),n="carousel"==i[a].sliderType?parseInt(i[a].carousel.padding_top||0,0):0,l="carousel"==i[a].sliderType?parseInt(i[a].carousel.padding_bottom||0,0):0,d=0,c=0,p=0,u=i[a].pr_processing_key||i[a].pr_active_key||0,h=i[a].pr_active_key||0;if(i[a].minHeight=i[a].minHeight===t?0:i[a].minHeight||0,i[a].paddings=i[a].paddings===t?{top:parseInt(i[a].cpar.css("paddingTop"),0)||0,bottom:parseInt(i[a].cpar.css("paddingBottom"),0)||0}:i[a].paddings,i[a].rowzones&&i[a].rowzones.length>0){if(i[a].rowzones[u]!==t)for(o=0;o<i[a].rowzones[u].length;o++)d+=i[a].rowzones[u][o][0].offsetHeight;if(h!==u)for(o=0;o<i[a].rowzones[h].length;o++)c+=i[a].rowzones[h][o][0].offsetHeight}if(i[a].srowzones&&i[a].srowzones.length>0)for(o=0;o<i[a].srowzones.length;o++)p+=i[a].srowzones[o][0].offsetHeight;d=d<p?p:d;var g=Math.max(Math.max(i[a].minHeight,i[a].gridheight[i[a].level]),d);if(g=0!==i[a].maxHeight?Math.min(i[a].maxHeight,g):g,"fullwidth"!=i[a].sliderLayout||i[a].autoHeight||punchgs.TweenMax.set(i[a].c,{maxHeight:g+"px"}),i[a].c.css({marginTop:n,marginBottom:l}),i[a].width=i[a].canvas.width(),i[a].height=i[a].canvas.height(),"fullscreen"==i[a].sliderLayout||i[a].infullscreenmode){var f=e(window).height();if(i[a].fullScreenOffsetContainer!=t){var m=(""+i[a].fullScreenOffsetContainer).split(",");for(var v in m)m.hasOwnProperty(v)&&(f-=e(m[v]).outerHeight(!0)||0)}i[a].fullScreenOffset!=t&&!e.isNumeric(i[a].fullScreenOffset)&&i[a].fullScreenOffset.split("%").length>1?f-=e(window).height()*parseInt(i[a].fullScreenOffset,0)/100:i[a].fullScreenOffset!=t&&i[a].fullScreenOffset.length>0&&e.isNumeric(parseInt(i[a].fullScreenOffset,0))&&(f-=parseInt(i[a].fullScreenOffset,0)),i[a].height=Math.max(d,Math.max(f-s,i[a].minHeight)),h!==u&&(i[a].currentSlideHeight=Math.max(c,Math.max(f-s,i[a].minHeight)),i[a].slides[h].style.maxHeight=i[a].currentSlideHeight!==i[a].height?i[a].currentSlideHeight+"px":"none"),i[a].cpar.height(i[a].height),i[a].c.css({height:"100%"})}else i[a].height=Math.round(i[a].gridheight[i[a].level]*(i[a].keepBPHeight?1:i[a].width/i[a].gridwidth[i[a].level])),i[a].height=Math.max(d,Math.max(i[a].autoHeight?i[a].height:Math.min(i[a].height,i[a].gridheight[i[a].level]),i[a].minHeight)),!1!==r&&i[a].c.height(i[a].height);var b=n+l+s+i[a].height+i[a].paddings.top+i[a].paddings.bottom,w={height:b};if(!1!==r&&(i[a].c.closest("rs-fullwidth-wrap").find("rs-fw-forcer").css(w),i[a].c.closest("rs-module-wrap").css(w)),i[a].sbtimeline.set&&i[a].sbtimeline.fixed&&(i[a].curheight=b,i[a].sbtimeline.extended===t&&i.updateFixedScrollTimes(a),punchgs.TweenMax.set(i[a].forcer,{height:2*b+i[a].sbtimeline.extended})),i[a].middleZones&&i[a].middleZones.length>0&&i[a].middleZones[u]!==t)for(o=0;o<i[a].middleZones[u].length;o++)i[a].middleZones[u][o].style.top=Math.round(b/2-i[a].middleZones[u][o].offsetHeight/2)+"px";if(i[a].smiddleZones&&i[a].smiddleZones.length>0)for(o=0;o<i[a].smiddleZones.length;o++)i[a].smiddleZones[o].style.top=Math.round(b/2-i[a].smiddleZones[o].offsetHeight/2)+"px";y(a)},enterInViewPort:function(a){i[a].waitForCountDown&&(Q(a),i[a].waitForCountDown=!1),i[a].waitForFirstSlide&&(C(a),i[a].waitForFirstSlide=!1,setTimeout(function(){i[a].c.removeClass("tp-waitforfirststart")},500)),"playing"!=i[a].sliderlaststatus&&i[a].sliderlaststatus!=t||i[a].c.trigger("starttimer"),i[a].lastplayedvideos!=t&&i[a].lastplayedvideos.length>0&&e.each(i[a].lastplayedvideos,function(e,t){i.playVideo(t,a)})},leaveViewPort:function(a){i[a].sliderlaststatus=i[a].sliderstatus,i[a].c.trigger("stoptimer"),i[a].playingvideos!=t&&i[a].playingvideos.length>0&&(i[a].lastplayedvideos=e.extend(!0,[],i[a].playingvideos),i[a].playingvideos&&e.each(i[a].playingvideos,function(e,t){i[a].leaveViewPortBasedStop=!0,i.stopVideo&&i.stopVideo(t,a)}))},unToggleState:function(e){if(e!==t)for(var i=0;i<e.length;i++)try{document.getElementById(e[i]).classList.remove("rs-tc-active")}catch(e){}},toggleState:function(e){if(e!==t)for(var i=0;i<e.length;i++)try{document.getElementById(e[i]).classList.add("rs-tc-active")}catch(e){}},swaptoggleState:function(e){if(e!=t&&e.length>0)for(var i=0;i<e.length;i++){var a=document.getElementById(e[i]);if(a.dataset.toggletimestamp!==t&&(new Date).getTime()-a.dataset.toggletimestamp<250)return;a.dataset.toggletimestamp=(new Date).getTime(),null!==a&&(a.className.indexOf("rs-tc-active")>=0?a.classList.remove("rs-tc-active"):a.classList.add("rs-tc-active"))}},lastToggleState:function(e){var i;if(e!==t)for(var a=0;a<e.length;a++){var r=document.getElementById(e[a]);i=!0===i||null!==r&&r.className.indexOf("rs-tc-active")>=0||i}return i},revCheckIDS:function(a,r){if(r.dataset.idcheck===t){for(;-1!=e.inArray(r.id,i[a].anyid);)console.log("Warning !! Double Id in Slider "+a+": "+r.id),r.id=r.id+"_"+Math.round(9999*Math.random());i[a].anyid.push(r.id)}r.dataset.idcheck=!0}});var a=i.is_mobile(),r=(i.is_android(),function(e){i[e].responsiveLevels=i.revToResp(i[e].responsiveLevels,i[e].rle),i[e].visibilityLevels=i.revToResp(i[e].visibilityLevels,i[e].rle),i[e].responsiveLevels[0]=9999,i[e].rle=i[e].responsiveLevels.length||1,i[e].gridwidth=i.revToResp(i[e].gridwidth,i[e].rle),i[e].gridheight=i.revToResp(i[e].gridheight,i[e].rle),i[e].editorheight!==t&&(i[e].editorheight=i.revToResp(i[e].editorheight,i[e].rle)),l(e),y(e);var a=Math.max(i[e].minHeight,i[e].gridheight[i[e].level]*i[e].bw);i[e].editorheight!==t&&(a=Math.max(a,i[e].editorheight[i[e].level]*i[e].bw)),punchgs.TweenMax.set(i[e].c,{height:a})}),o=function(t,i){var a=[];return e.each(t,function(e,t){e!=i&&a.push(t)}),a},s=function(t,a,r){i[r].c.find(t).each(function(){var t=e(this);t.data("key")===a&&t.remove()})},n=function(e){window.revFontTestcontainer==t&&(window.revFontTestcontainer=document.createElement("span"),window.revFontTestcontainer.innerHTML=Array(100).join("wi"),window.revFontTestcontainer.style.cssText=["position:absolute","width:auto","font-size:128px","left:-99999px"].join(" !important;")),window.revFontTestcontainer.style.fontFamily=e,document.body.appendChild(window.revFontTestcontainer);var i=window.revFontTestcontainer.clientWidth;return document.body.removeChild(window.revFontTestcontainer),i},l=function(t,a){var r=9999,o=0,s=0,n=e(window).width(),l=a&&9999==i[t].responsiveLevels?i[t].visibilityLevels:i[t].responsiveLevels;l&&l.length&&e.each(l,function(e,a){n<a&&(0==o||o>parseInt(a))&&(r=parseInt(a),i[t].level=e,o=parseInt(a)),n>a&&o<a&&(o=parseInt(a),s=e)}),o<r&&(i[t].level=s),i[t].levelForced=i[t].level},d=function(t,i){var a=0;return t.find(i).each(function(){var t=e(this);!t.hasClass("tp-forcenotvisible")&&a<t.outerWidth()&&(a=t.outerWidth())}),a},c=function(r){if(r===t||i[r]===t||i[r].c===t)return!1;window._rs_firefox13=!1,window._rs_ie=window._rs_ie===t?!e.support.opacity:window._rs_ie,window._rs_ie9=window._rs_ie9===t?9==document.documentMode:window._rs_ie9;var o=e.fn.jquery.split("."),s=parseFloat(o[0]),n=parseFloat(o[1]);1==s&&n<7&&i[r].c.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+o+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"),s>1&&(window._rs_ie=!1),i[r].aimg!=t&&("enabled"==i[r].aie8&&i.isIE(8)||"enabled"==i[r].amobile&&a)&&i[r].c.html('<img class="tp-slider-alternative-image" src="'+i[r].aimg+'">'),i[r].realslideamount=i[r].slideamount=0;var l=i[r].canvas[0].getElementsByTagName("rs-slide");for(var d in l)l.hasOwnProperty(d)&&(l[d].dataset!==t&&"on"==l[d].dataset.hsom&&a?l[d].classList.add("removeslidenow"):(l[d].dataset===t||!l[d].dataset.invisible&&1!=l[d].dataset.invisible?i[r].slideamount++:l[d].classList.add("not-in-nav"),i[r].realslideamount++,l[d].dataset!==t&&(l[d].dataset.originalindex=i[r].realslideamount,l[d].dataset.origindex=i[r].realslideamount-1)));i[r].canvas.find(".removeslidenow").each(function(){e(this).remove()}),i[r].canvas.find(".not-in-nav").each(function(){e(this).appendTo(i[r].canvas)}),i[r].canvas.css({visibility:"visible"}),i[r].slayers=i[r].c.find("rs-static-layers"),i[r].slayers.length>0&&(i[r].slayers[0].dataset.key="staticlayers"),!0===i[r].modal.useAsModal&&(i[r].cpar.wrap('<rs-modal id="'+i[r].c[0].id+'_modal"></rs-modal>'),i[r].modal.c=i[r].cpar.closest("rs-modal"),i[r].modal.c.appendTo(e("body")),i[r].modal!==t&&i[r].modal.alias!==t&&i.revModal(r,{mode:"init"})),1!=i[r].waitForInit&&1!=i[r].modal.useAsModal&&h(r)},p=function(){e("body").data("rs-fullScreenMode",!e("body").data("rs-fullScreenMode")),e("body").data("rs-fullScreenMode")&&setTimeout(function(){e(window).trigger("resize")},200)},u=function(e,a,r){return e.dataset.lazyload!==t?e.dataset.lazyload:i[r].lazyloaddata!==t&&i[r].lazyloaddata.length>0&&e.dataset[i[r].lazyloaddata]!==t?e.dataset[i[r].lazyloaddata]:e.dataset.lazySrc!==t?e.dataset.lazySrc:e.dataset.lazy!==t?e.dataset.lazy:a},h=function(r){if(i[r]!==t){if(i[r].sliderisrunning=!0,e(document).on("revolution.all.resize",function(){i[r].sliderisrunning&&m(r)}),i[r].shuffle){for(var o=i[r].canvas.find("rs-slide:first-child")[0].dataset.firstanim,s=0;s<i[r].slideamount;s++)i[r].canvas.find("rs-slide:eq("+Math.round(Math.random()*i[r].slideamount)+")").prependTo(i[r].canvas);i[r].canvas.find("rs-slide:first-child")[0].dataset.firstanim=o}for(var n in i[r].slides=i[r].canvas[0].getElementsByTagName("rs-slide"),i[r].thumbs=new Array(i[r].slides.length),i[r].slots=4,i[r].firststart=1,i[r].loadqueue=[],i[r].syncload=0,i.updateDimensions(r),i[r].slides)if(i[r].slides.hasOwnProperty(n)){var d=i[r].slides[n],c=d.getElementsByClassName(".rev-slidebg");c=0===c.length?d.getElementsByTagName("img")[0]:c,d.dataset.key=d.dataset.key===t?"rs-"+Math.round(999999*Math.random()):d.dataset.key;var h={params:Array(12),id:d.dataset.key,src:d.dataset.thumb!==t?d.dataset.thumb:u(c,c.src,r)};d.dataset.title=d.dataset.title===t?"":d.dataset.title,d.dataset.description=d.dataset.description===t?"":d.dataset.description,h.params[0]={from:RegExp("\\{\\{title\\}\\}","g"),to:d.dataset.title},h.params[1]={from:RegExp("\\{\\{description\\}\\}","g"),to:d.dataset.description};for(var v=1;v<=10;v++)d.dataset["p"+v]!==t?h.params[v+1]={from:RegExp("\\{\\{param"+v+"\\}\\}","g"),to:d.dataset["p"+v]}:h.params[v+1]={from:RegExp("\\{\\{param"+v+"\\}\\}","g"),to:""};if(i[r].thumbs[n]=h,d.dataset.link!=t||d.dataset.linktoslide!==t){var y=d.dataset.link!==t?d.dataset.link:"slide",w="slide"!=y?"no":d.dataset.linktoslide;if(w!=t&&"no"!=w&&"next"!=w&&"prev"!=w)for(var _ in i[r].slides)i[r].slides.hasOwnProperty(_)&&parseInt(i[r].slides[_].dataset.origindex,0)+1==d.dataset.linktoslide&&(w=i[r].slides[_].dataset.key);e(d).append('<rs-layer class="rs-layer slidelink" style="z-index:'+("back"===d.dataset.seoz?0:"front"===d.dataset.seoz?60:d.dataset.seoz!==t?parseInt(d.dataset.seoz,0):100)+';" dataxy="x:c;y:c" data-dim="w:100%;h:100%" data-basealign="slide"'+("no"==w?"":"  data-actions='"+("scroll_under"===w?"o:click;a:scrollbelow;offset:100px;":"prev"===w?"o:click;a:jumptoslide;slide:prev;d:0.2;":"next"===w?"o:click;a:jumptoslide;slide:next;d:0.2;":"o:click;a:jumptoslide;slide:"+w+";d:0.2;")+"'")+" data-frame_1='e:Power3.easeInOut;st:100;sp:100' data-frame_999='e:Power3.easeInOut;o:0;st:w;sp:100'><a "+("slide"!=y?' target="'+(d.dataset.target||"_self")+'" href="'+y+'"':"")+"><span></span></a></rs-layer>")}}if(i[r].simplifyAll&&(i.isIE(8)||i.iOSVersion())&&(i[r].c.find(".rs-layer").each(function(){var t=e(this);t.removeClass("customin customout").addClass("fadein fadeout"),t.data("splitin",""),t.data("speed",400)}),i[r].slides.each(function(){var t=e(this);t.data("transition","fade"),t.data("masterspeed",500),t.data("slotamount",1),(t.find(".rev-slidebg")||t.find(">img").first()).data("panzoom",null)})),window._rs_desktop=window._rs_desktop===t?!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i):window._rs_desktop,i[r].autoHeight="fullscreen"==i[r].sliderLayout||i[r].autoHeight,"fullwidth"!=i[r].sliderLayout||i[r].autoHeight||i[r].c.css({maxHeight:i[r].gridheight[i[r].level]+"px"}),"auto"==i[r].sliderLayout||0!=i[r].c.closest("rs-fullwidth-wrap").length||"fullscreen"===i[r].sliderLayout&&1==i[r].disableForceFullWidth)i[r].topc=i[r].cpar;else{var x=i[r].cpar[0].style.marginTop,k=i[r].cpar[0].style.marginBottom;x=x===t||""===x?"":"margin-top:"+x+";",k=k===t||""===k?"":"margin-bottom:"+k+";",i[r].topc=e('<rs-fullwidth-wrap id="'+i[r].c[0].id+'_forcefullwidth" style="'+x+k+'"></rs-fullwidth-wrap>'),i[r].forcer=e('<rs-fw-forcer style="height:'+i[r].cpar.height()+'px"></rs-fw-forcer>'),i[r].topc.append(i[r].forcer),i[r].topc.insertBefore(i[r].cpar),i[r].cpar.detach(),i[r].cpar.css({marginTop:"0px",marginBottom:"0px",position:"absolute"}),i[r].cpar.prependTo(i[r].topc)}if(i[r].forceOverflow&&i[r].topc[0].classList.add("rs-forceoverflow"),"carousel"===i[r].sliderType&&i[r].c.css({overflow:"visible"}),0!==i[r].maxHeight&&punchgs.TweenMax.set([i[r].cpar,i[r].c,i[r].topc],{maxHeight:i[r].maxHeight+"px"}),i[r].fixedOnTop&&punchgs.TweenMax.set(i[r].topc,{position:"fixed",top:"0px",left:"0px",pointerEvents:"none",zIndex:5e3}),i[r].shadow!==t&&i[r].shadow>0&&i[r].cpar.addClass("tp-shadow"+i[r].shadow).append('<div class="tp-shadowcover" style="background-color:'+i[r].cpar.css("backgroundColor")+";background-image:"+i[r].cpar.css("backgroundImage")+'"></div>'),l(r),!i[r].c.hasClass("revslider-initialised")){i[r].c[0].classList.add("revslider-initialised"),i[r].c[0].id=i[r].c[0].id===t?"revslider-"+Math.round(1e3*Math.random()+5):i[r].c[0].id,i.revCheckIDS(r,i[r].c[0]),i[r].origcd=parseInt(i[r].duration,0),i[r].scrolleffect._L=[],i[r].sbas=i[r].sbas===t?{}:i[r].sbas,i[r].layers=i[r].layers||{},i[r].sortedLayers=i[r].sortedLayers||{},i[r].c.detach(),i[r].c.find("rs-layer, rs-row, rs-column, rs-group,  rs-bgvideo, .rs-layer").each(function(){var a,o,s=e(this),n=s.data();if(n.startclasses=this.className,n.startclasses=n.startclasses===t||null===n.startclasses?"":n.startclasses,n.animationonscroll=!!i[r].sbtimeline.set&&i[r].sbtimeline.layers,n.animationonscroll=!0===n.animationonscroll||"true"==n.animationonscroll,n.filteronscroll=!!i[r].scrolleffect.set&&i[r].scrolleffect.layers,n.pxundermask=n.startclasses.indexOf("rs-pxmask")>=0&&"off"!==i[r].parallax.type&&n.startclasses.indexOf("rs-pxl-")>=0,n.noPevents=n.startclasses.indexOf("rs-noevents")>=0,n.sba)for(var l in a=n.sba.split(";"))a.hasOwnProperty(l)&&("t"==(o=a[l].split(":"))[0]&&(n.animationonscroll=o[1],"false"==o[1]&&(n.animOnScrollForceDisable=!0)),"e"==o[0]&&(n.filteronscroll=o[1]),"so"==o[0]&&(n.scrollBasedOffset=parseInt(o[1])/1e3));if("true"!=n.animationonscroll&&1!=n.animationonscroll||(n.startclasses+=" rs-sba",s[0].className+=" rs-sba"),n.startclasses.indexOf("rs-layer-static")>=0&&i.handleStaticLayers&&i.handleStaticLayers(s,r),"RS-BGVIDEO"!==s[0].tagName){if(s[0].classList.add("rs-layer"),"column"===n.type&&(n.columnwidth="33.33%",n.verticalalign="top",n.column!==t))for(var d in a=n.column.split(";"))a.hasOwnProperty(d)&&("w"===(o=a[d].split(":"))[0]&&(n.columnwidth=o[1]),"a"===o[0]&&(n.verticalalign=o[1]));var c=n.startclasses.indexOf("slidelink")>=0?"width:100% !important;height:100% !important;":"",p="column"!==n.type?"":n.verticalalign===t?" vertical-align:top;":" vertical-align:"+n.verticalalign+";",u="row"===n.type||"column"===n.type?"position:relative;":"position:absolute;",h="",g="row"===n.type?"rs-row-wrap":"column"===n.type?"rs-column-wrap":"group"===n.type?"rs-group-wrap":"rs-layer-wrap",f="",m="",v=(n.noPevents,";pointer-events:none");for(var y in"row"===n.type||"column"===n.type||"group"===n.type?(s[0].classList.remove("tp-resizeme"),"column"===n.type&&(n.width="auto",s[0].group="row",punchgs.TweenMax.set(s,{width:"auto"}),n.filteronscroll=!1)):(f="display:"+("inline-block"===s[0].style.display?"inline-block":"block")+";",s.closest("rs-column").length>0?(s[0].group="column",n.filteronscroll=!1):s.closest("rs-group-wrap").length>0&&(s[0].group="group",n.filteronscroll=!1)),n.wrpcls!==t&&(h=h+" "+n.wrpcls),n.wrpid!==t&&(m='id="'+n.wrpid+'"'),n.maskinuse=!1,n)n.maskinuse&&n.hasOwnProperty(y)&&(n.maskinuse=y.indexOf("_mask")>0);s.wrap("<"+g+" "+m+' class="rs-parallax-wrap '+h+'" style="'+p+" "+c+u+f+v+'"><rs-loop-wrap style="'+c+u+f+'"><rs-mask-wrap style="'+c+u+f+'">'+(n.pxundermask?"<rs-px-mask></rs-px-mask>":"")+"</rs-mask-wrap></rs-loop-wrap></"+g+">"),!0!==n.filteronscroll&&"true"!=n.filteronscroll||i[r].scrolleffect._L.push(s.parent()),s[0].id=s[0].id===t?"layer-"+Math.round(999999999*Math.random()):s[0].id,i.revCheckIDS(r,s[0]),"column"===n.type&&s.closest(".rs-parallax-wrap").append('<rs-cbg-mask-wrap><rs-column-bg id="'+s[0].id+'_rs_cbg"></rs-column-bg></rs-cbg-mask-wrap>'),"text"===n.type&&s[0].getElementsByTagName("iframe").length>0&&s[0].classList.add("rs-ii-o"),punchgs.TweenMax.set(s,{visibility:"hidden"}),i[r].BUG_safari_clipPath&&s[0].classList.add("rs-pelock")}s[0].dataset.actions&&i.checkActions&&i.checkActions(s,r,i[r]),!i.checkVideoApis||window.rs_addedvim&&window.rs_addedyt||i[r].youtubeapineeded&&i[r].vimeoapineeded||i.checkVideoApis(s,r)}),i[r].c.prependTo(i[r].cpar),i[r].c[0].addEventListener("mouseenter",function(){i[r].c.trigger("tp-mouseenter"),i[r].overcontainer=!0},{passive:!0}),i[r].c[0].addEventListener("mouseover",function(){i[r].c.trigger("tp-mouseover"),i[r].overcontainer=!0},{passive:!0}),i[r].c[0].addEventListener("mouseleave",function(){i[r].c.trigger("tp-mouseleft"),i[r].overcontainer=!1},{passive:!0}),i[r].c.find(".rs-layer video").each(function(t){var i=e(this);i.removeClass("video-js vjs-default-skin"),i.attr("preload",""),i.css({display:"none"})}),"standard"!==i[r].sliderType&&(i[r].lazyType="all"),i[r].rs_static_layer=i[r].c[0].getElementsByTagName("rs-static-layers"),i[r].rs_static_layer.length>0&&(I(i[r].rs_static_layer[0],r,0,!0),S(i[r].rs_static_layer[0],r,function(){i[r]!==t&&i[r].c.find("rs-static-layers img").each(function(){this.src=z(r,this.dataset.src!=t?this.dataset.src:this.src).src})})),i[r].rowzones=[],i[r].middleZones=[];var T=W("#")[0];if(T.length<9&&T.split("slide").length>1&&-1==T.indexOf("slider")){var L=parseInt(T.split("slide")[1],0);e.isNumeric(parseInt(L,0))&&((L=parseInt(L,0))<1&&(L=1),L>i[r].slideamount&&(L=i[r].slideamount),i[r].startWithSlide=L-1)}var R=parseInt(i[r].spinner.replace("spinner",""),10);if(isNaN(R)||R<6)i[r].loader=e('<rs-loader class="'+i[r].spinner+'"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></rs-loader>');else{var M,O=i[r].spinnerclr||"#ffffff",P='<div class="rs-spinner-inner"';if(7===R)-1!==O.search("#")?(M=O.replace("#",""),M="rgba("+parseInt(M.substring(0,2),16)+", "+parseInt(M.substring(2,4),16)+", "+parseInt(M.substring(4,6),16)+", "):-1!==O.search("rgb")&&(M=O.substring(O.indexOf("(")+1,O.lastIndexOf(")")).split(",")).length>2&&(M="rgba("+M[0].trim()+", "+M[1].trim()+", "+M[2].trim()+", "),M&&"string"==typeof M&&(P+=' style="border-top-color: '+M+"0.65); border-bottom-color: "+M+"0.15); border-left-color: "+M+"0.65); border-right-color: "+M+'0.15)"');else 12===R&&(P+=' style="background:'+O+'"');P+=">";for(var j=[10,0,4,2,5,9,0,4,4,2][R-6],A=0;A<j;A++)A>0&&(P+=" "),P+='<span style="background:'+O+'"></span>';P+="</div>",i[r].loader=e('<rs-loader class="'+i[r].spinner+'">'+P+"</div></rs-loader>")}i[r].c.append(i[r].loader),0===i[r].c.find("rs-progress").length&&i[r].c.append('<rs-progress style="visibility:hidden"></rs-progress>'),i[r].c.find("rs-progress").css({width:"0%"}),i[r].canvas.css({display:"block"}),b(r),i[r].slides=i[r].canvas.find("rs-slide").not(".rs-not-in-nav"),i[r].inli=i[r].canvas.find("rs-slide.rs-not-in-nav"),("off"!==i[r].parallax.type||i[r].scrolleffect.set||i[r].sbtimeline.set)&&i.checkForParallax&&i.checkForParallax(r),i.setSize(r,!1),"hero"!==i[r].sliderType&&i.createNavigation&&i[r].navigation.use&&i.createNavigation(r),i.resizeThumbsTabs&&i.resizeThumbsTabs&&i[r].navigation.use&&i.resizeThumbsTabs(r),g(r);var H=i[r].viewPort;i[r].inviewport=!1,H!=t&&H.enable&&i.scrollTicker&&i.scrollTicker(r),i[r].slides.each(function(t){var a=e(this);i[r].rowzones[t]=[],i[r].middleZones[t]=[],a.find("rs-zone").each(function(){i[r].rowzones[t].push(e(this)),this.className.indexOf("rev_row_zone_middle")>=0&&i[r].middleZones[t].push(this)}),((H.enable&&i[r].inviewport||!H.enable)&&"all"==i[r].lazyType||"smart"==i[r].lazyType&&(0==t||1==t||t==i[r].slideamount||t==i[r].slideamount-1))&&(I(a[0],r,t),S(a[0],r,function(){}))}),i[r].srowzones=[],i[r].smiddleZones=[],i[r].slayers.find("rs-zone").each(function(){i[r].srowzones.push(e(this)),this.className.indexOf("rev_row_zone_middle")>=0&&i[r].smiddleZones.push(this)}),"carousel"===i[r].sliderType&&i.prepareCarousel&&(punchgs.TweenMax.set(i[r].canvas,{scale:1,perspective:1200,transformStyle:"flat",opacity:0}),i.prepareCarousel(r,new punchgs.TimelineLite,t,0),i[r].onlyPreparedSlide=!0),setTimeout(function(){!H.enable||H.enable&&i[r].inviewport||H.enable&&!i[r].inviewport&&"wait"!==H.outof?C(r):(i[r].c.addClass("tp-waitforfirststart"),i[r].waitForFirstSlide=!0,H.presize&&(i[r].pr_next_slide=e(i[r].slides[0]),I(i[r].pr_next_slide[0],r,0,!0),S(i[r].pr_next_slide.find(".tp-layers"),r,function(){i.animateTheLayers&&i.animateTheLayers({slide:i[r].pr_next_key,id:r,mode:"preset"})}))),i.manageNavigation&&i[r].navigation.use&&i.manageNavigation(r),i[r].slideamount>1&&(!H.enable||H.enable&&i[r].inviewport?Q(r):i[r].waitForCountDown=!0),setTimeout(function(){i[r]!==t&&i[r].c.trigger("revolution.slide.onloaded")},50)},i[r].startDelay),i[r].startDelay=0,e("body").data("rs-fullScreenMode",!1),window.addEventListener("fullscreenchange",p,{passive:!0}),window.addEventListener("mozfullscreenchange",p,{passive:!0}),window.addEventListener("webkitfullscreenchange",p,{passive:!0});var N="resize.revslider-"+i[r].c.attr("id");e(window).on(N,function(){if(i[r]!==t){if(i[r].c==t)return!1;0!=e("body").find(i[r].c)&&(l(r),g(r));var o=!1;if("fullscreen"==i[r].sliderLayout){var s=e(window).height();"mobile"==i[r].fallbacks.ignoreHeightChanges&&a||"always"==i[r].fallbacks.ignoreHeightChanges?(i[r].fallbacks.ignoreHeightChangesSize=i[r].fallbacks.ignoreHeightChangesSize==t?0:i[r].fallbacks.ignoreHeightChangesSize,o=s!=i[r].lastwindowheight&&Math.abs(s-i[r].lastwindowheight)>i[r].fallbacks.ignoreHeightChangesSize):o=s!=i[r].lastwindowheight}(i[r].c.outerWidth(!0)!=i[r].width||i[r].c.is(":hidden")||o)&&(i[r].lastwindowheight=e(window).height(),m(r))}}),f(r),g(r),i[r].fallbacks.disableFocusListener||"true"==i[r].fallbacks.disableFocusListener||!0===i[r].fallbacks.disableFocusListener||(i[r].c.addClass("rev_redraw_on_blurfocus"),D())}}},g=function(a){var r=i.getHorizontalOffset(i[a].c,"left");if("auto"===i[a].sliderLayout||"fullscreen"===i[a].sliderLayout&&!0===i[a].disableForceFullWidth?"fullscreen"==i[a].sliderLayout&&1==i[a].disableForceFullWidth?punchgs.TweenMax.set(i[a].cpar,{left:0,width:"auto"}):punchgs.TweenMax.set(i[a].canvas,{left:"carousel"===i[a].sliderType?0:r,width:i[a].c.width()-i.getHorizontalOffset(i[a].c,"both")}):punchgs.TweenMax.set(i[a].cpar,{left:0-Math.ceil(i[a].c.closest("rs-fullwidth-wrap").offset().left-r)+"px",width:e(window).width()-i.getHorizontalOffset(i[a].c,"both")}),"auto"===i[a].sliderLayout&&i[a].modal!==t&&i[a].modal.useAsModal){var o=Math.min(i[a].gridwidth[i[a].level],window.innerWidth);punchgs.TweenMax.set([i[a].modal.c,i[a].canvas],{width:o})}i[a].slayers&&"fullwidth"!=i[a].sliderLayout&&"fullscreen"!=i[a].sliderLayout&&punchgs.TweenMax.set(i[a].slayers,{left:r})},f=function(a,r){e(window).width()<i[a].hideSliderAtLimit?(i[a].c.trigger("stoptimer"),i[a].cpar[0].dataset.displaycache="none"!=i[a].cpar.css("display")?i[a].cpar.css("display"):i[a].cpar[0].dataset.displaycache,i[a].cpar.css({display:"none"})):i[a].c.is(":hidden")&&r&&(i[a].cpar[0].dataset.displaycache!=t&&"none"!=i[a].cpar[0].dataset.displaycache?i[a].cpar.css({display:i[a].cpar[0].dataset.displaycache}):i[a].cpar.css({display:"block"}),i[a].c.trigger("restarttimer"),setTimeout(function(){m(a)},150)),i.hideUnHideNav&&i[a].navigation.use&&i.hideUnHideNav(a)},m=function(a){if(i[a].c===t)return!1;i[a].c.trigger("revolution.slide.beforeredraw"),1==i[a].infullscreenmode&&(i[a].minHeight=e(window).height()),l(a),i.resizeThumbsTabs&&!0!==i.resizeThumbsTabs(a)||(f(a,!0),g(a),"carousel"==i[a].sliderType&&i.prepareCarousel(a,!0),i.setSize(a),i.updateDimensions(a),"standard"===i[a].sliderType&&i[a].mtl!==t&&i.animateSlide({recall:!0,id:a}),"carousel"===i[a].sliderType&&i[a].lastconw!=i[a].conw&&(clearTimeout(i[a].pcartimer),i[a].pcartimer=setTimeout(function(){i.prepareCarousel(a,!0),"carousel"==i[a].sliderType&&i[a].carousel.showLayersAllTime&&e.each(i[a].slides,function(e){i.animateTheLayers&&i.animateTheLayers({slide:e,id:a,mode:"rebuild"})})},100),i[a].lastconw=i[a].conw),i.animateTheLayers&&(i[a].pr_processing_key!==t?i.animateTheLayers({slide:i[a].pr_processing_key,id:a,mode:"rebuild"}):i[a].pr_active_key!==t&&i.animateTheLayers({slide:i[a].pr_active_key,id:a,mode:"rebuild"}),i.scrollHandling&&i.scrollHandling(a,!0)),v(a,i[a].pr_next_bg),"carousel"!==i[a].sliderType&&v(a,i[a].pr_active_bg),i.manageNavigation&&i.manageNavigation(a)),i[a].c.trigger("revolution.slide.afterdraw"),setTimeout(function(){g(a)},19)},v=function(e,a){a&&a.data("panzoom")!==t&&i.startPanZoom(a,e,a.data("pztl")!==t?a.data("pztl").progress():0)},y=function(e){i[e].bw=i[e].width/i[e].gridwidth[i[e].level],i[e].bh=i[e].height/i[e].gridheight[i[e].level],i[e].bw=isNaN(i[e].bw)?1:i[e].bw,i[e].bh=isNaN(i[e].bh)?1:i[e].bh,i[e].bh>i[e].bw?i[e].bh=i[e].bw:i[e].bw=i[e].bh,(i[e].bh>1||i[e].bw>1)&&(i[e].bw=1,i[e].bh=1)},b=function(a){i[a].autoHeight&&punchgs.TweenMax.set([i[a].c,i[a].cpar],{maxHeight:"none"}),punchgs.TweenMax.set(i[a].canvas,{overflow:"hidden",width:"100%",height:"100%",maxHeight:i[a].autoHeight?"none":i[a].cpar.css("maxHeight")}),"carousel"===i[a].sliderType&&(i[a].canvas.css({overflow:"visible"}).wrap("<rs-carousel-wrap></rs-carousel-wrap>"),i[a].cpar.prepend("<rs-carousel-space></rs-carousel-space>").append("<rs-carousel-space></rs-carousel-space>"),i.prepareCarousel(a)),i[a].startWithSlide=i[a].startWithSlide===t?t:parseInt(i[a].startWithSlide)+1,i[a].cpar.css({overflow:"visible"}),i[a].scrolleffect.bgs=[];for(var r=0;r<i[a].slides.length;r++){var o=e(i[a].slides[r]),s=o.find(">img"),n=o.find("rs-bgvideo");s.detach(),n.detach(),(i[a].startWithSlide!=t&&i[a].slides[r].dataset.originalindex==i[a].startWithSlide||i[a].startWithSlide===t&&0==r)&&(i[a].pr_next_key=o.index()),punchgs.TweenMax.set(o,{width:"100%",height:"100%",overflow:"hidden"}),s.wrap("<rs-sbg-px><rs-sbg-wrap></rs-sbg-wrap></rs-sbg-px>");var l=s.closest("rs-sbg-wrap"),d=o.data("mediafilter"),c=w(s.data(),a,s[0].style.backgroundColor),p=c.bgcolor!==t&&c.bgcolor.indexOf("gradient")>=0,h=c.bgcolor!==t&&c.bgcolor.indexOf("gradient")>=0?"background:"+c.bgcolor+";":"background-color:"+c.bgcolor+";";c.src=s[0].src,c.lazyload=u(s[0],t,a),c.slidebgimage=!0,d="none"===d||d===t?"":d,n.length>0&&(n.addClass("defaultvid").css({zIndex:30}),n.appendTo(l),c.parallax!=t&&(n.data("parallax",c.parallax),n.data("showcoveronpause","on"))),"none"!=i[a].dottedOverlay&&i[a].dottedOverlay!=t&&l.append('<rs-dotted class="'+i[a].dottedOverlay+'"></rs-dotted>'),h+=(p?"":"background-repeat:"+c.bgrepeat+";background-image:url("+c.src+");background-size:"+c.bgfit+";background-position:"+c.bgposition+";")+"width:100%;height:100%;",h+="standard"===i[a].sliderType||"undefined"===i[a].sliderType?"opacity:0;":"",s.data("mediafilter",d),d=s.data("panzoom")!==t?"":d;var g=e("<rs-sbg "+(c.lazyload!==t?'data-lazyload="'+c.lazyload+'"':"")+' src="'+c.src+'" class="'+d+'" data-bgcolor="'+c.bgcolor+'" style="'+h+'"></rs-sbg>');l.append(g);var f=document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - "+s.get(0).outerHTML);s.replaceWith(f),l.data(c),g.data(c),o[0].dataset.sba=o[0].dataset.sba===t?"":o[0].dataset.sba;var m={},v=o[0].dataset.sba.split(";");for(var y in v)if(v.hasOwnProperty(y)){var b=v[y].split(":");switch(b[0]){case"f":m.f=b[1];break;case"b":m.b=b[1];break;case"g":m.g=b[1];break;case"t":m.s=b[1]}}o[0].dataset.scrollBased=!!i[a].sbtimeline.set&&(m.s!==t&&m.s),i[a].scrolleffect.set?(i[a].scrolleffect.bgs.push({fade:m.f!==t?m.f:!!i[a].scrolleffect.slide&&i[a].scrolleffect.fade,blur:m.b!==t?m.b:!!i[a].scrolleffect.slide&&i[a].scrolleffect.blur,grayscale:m.g!==t?m.g:!!i[a].scrolleffect.slide&&i[a].scrolleffect.grayscale,c:l.wrap("<rs-sbg-effectwrap></rs-sbg-effectwrap>").parent()}),o.prepend(l.parent().parent())):o.prepend(l.parent())}},w=function(r,o,s){r.bg=r.bg===t?"":r.bg;var n=r.bg.split(";"),l={bgposition:"50% 50%",bgfit:"cover",bgrepeat:"no-repeat",bgcolor:s||"transparent"};for(var d in n)if(n.hasOwnProperty(d)){var c=n[d].split(":"),p=c[0],u=c[1],h="";switch(p){case"p":h="bgposition";break;case"f":h="bgfit";break;case"r":h="bgrepeat";break;case"c":h="bgcolor"}h!==t&&(l[h]=u)}return i[o].fallbacks.panZoomDisableOnMobile&&a&&(l.panzoom=null,l.bgfit="cover"),e.extend(!0,r,l)},_=function(e,t){t.find(".slot, .slot-circle-wrapper").each(function(){}),i[e].transition=0},x=function(e){var i=e;return e!=t&&e.length>0&&(i=e.split("?")[0]),i},k=function(e){var i=e;return e!=t&&e.length>0&&(i=i.replace(document.location.protocol,"")),i},T=function(e,t){var i=e.split("/"),a=t.split("/");i.pop();for(var r=0;r<a.length;r++)"."!=a[r]&&(".."==a[r]?i.pop():i.push(a[r]));return i.join("/")},L=function(e,a,r){if(i[a]!==t){for(var o in i[a].syncload--,i[a].loadqueue)if(i[a].loadqueue.hasOwnProperty(o)&&"loaded"!==i[a].loadqueue[o].progress){var s=i[a].loadqueue[o].src!==t?i[a].loadqueue[o].src.replace(/\.\.\/\.\.\//gi,""):i[a].loadqueue[o].src;(s===e.src||k(s)===k(e.src)||x(document.location.protocol+s)===x(decodeURIComponent(e.src))||x(document.location.origin+s)===x(decodeURIComponent(e.src))||x(self.location.href.substring(0,self.location.href.length-1)+s)===x(decodeURIComponent(e.src))||x(T(self.location.href,i[a].loadqueue[o].src))===x(decodeURIComponent(e.src))||x(document.location.origin+"/"+s)===x(decodeURIComponent(e.src))||x(self.location.href.substring(0,self.location.href.length-1)+"/"+s)===x(decodeURIComponent(e.src))||x(i[a].loadqueue[o].src)===x(decodeURIComponent(e.src))||"file://"===window.location.origin&&x(e.src).match(new RegExp(s)))&&(i[a].loadqueue[o].progress=r,i[a].loadqueue[o].width=e.width,i[a].loadqueue[o].height=e.height)}R(a)}},R=function(t){4!=i[t].syncload&&i[t].loadqueue&&e.each(i[t].loadqueue,function(a,r){if("prepared"==r.progress&&i[t].syncload<=4){if(i[t].syncload++,"img"==r.type){var o=new Image;o.onload=function(){L(this,t,"loaded"),r.error=!1},o.onerror=function(){L(this,t,"failed"),r.error=!0},o.src=r.src,r.starttoload=e.now()}else e.get(r.src,function(e){r.innerHTML=(new XMLSerializer).serializeToString(e.documentElement),r.progress="loaded",i[t].syncload--,R(t)}).fail(function(){r.progress="failed",i[t].syncload--,R(t)});r.progress="inload"}})},I=function(a,r,o,s){if(a!==t&&0!==a.length){var n=a.querySelectorAll("img, rs-sbg, .rs-svg");for(var l in n)if(n.hasOwnProperty(l)){var d=u(n[l],t,r),c=d!==t?d:n[l].dataset.svg_src!=t?n[l].dataset.svg_src:n[l].src===t?e(n[l]).data("src"):n[l].src,p=n[l].dataset.svg_src!=t?"svg":"img";c!==t&&0==i[r].loadqueue.filter(function(e){return e.src===c}).length&&i[r].loadqueue.push({src:c,index:l,starttoload:e.now(),type:p||"img",prio:o,progress:n[l].complete&&c===n[l].src?"loaded":"prepared",static:s,width:n[l].complete&&c===n[l].src?n[l].width:t,height:n[l].complete&&c===n[l].src?n[l].height:t})}R(r)}},z=function(e,a){var r=i[e].loadqueue.filter(function(e){return e.src===a})[0];return r===t?{src:a}:r},S=function(r,o,s){if(r!==t&&0!==r.length&&i[o]!==t){var n=!1,l=r.querySelectorAll("img, rs-sbg, .rs-svg");for(var d in l)if(l.hasOwnProperty(d)&&!(l[d].className.indexOf("rs-pzimg")>=0)){var c=e(l[d]).data(),p=u(l[d],t,o),h=p!==t?p:l[d].dataset.svg_src!=t?l[d].dataset.svg_src:l[d].src===t?e(l[d]).data("src"):l[d].src,g=z(o,h);if(c.loaded===t&&g!==t&&g.progress&&"loaded"==g.progress){if(l[d].src=g.src,"img"==g.type){if(c.slidebgimage){-1==g.src.indexOf("images/transparent.png")&&-1==g.src.indexOf("assets/transparent.png")||c.bgcolor===t?l[d].style.backgroundImage='url("'+g.src+'")':c.bgcolor!==t&&(l[d].style.background=c.bgcolor),r.dataset.owidth=g.width,r.dataset.oheight=g.height;var f=r.getElementsByTagName("rs-sbg-wrap");f.length>0&&(f[0].dataset.owidth=g.width,f[0].dataset.oheight=g.height)}}else"svg"==g.type&&"loaded"==g.progress&&(l[d].innerHTML=g.innerHTML);c.loaded=!0}g&&g.progress&&g.progress.match(/inprogress|inload|prepared/g)&&(!g.error&&e.now()-g.starttoload<3e3?n=!0:(g.progress="failed",g.reported_img||(g.reported_img=!0,console.log(h+"  Could not be loaded !")))),1!=i[o].youtubeapineeded||window.YT&&YT.Player!=t||(n=O("youtube",o)),1!=i[o].vimeoapineeded||window.Vimeo||(n=O("vimeo",o))}!a&&i[o].audioqueue&&i[o].audioqueue.length>0&&e.each(i[o].audioqueue,function(t,i){i.status&&"prepared"===i.status&&e.now()-i.start<i.waittime&&(n=!0)}),e.each(i[o].loadqueue,function(t,i){!0===i.static&&("loaded"!=i.progress&&"done"!==i.progress||"failed"===i.progress)&&("failed"!=i.progress||i.reported?!i.error&&e.now()-i.starttoload<5e3?n=!0:i.reported||(i.reported=M(i.src,i.error)):i.reported=M(i.src,i.error))}),n?punchgs.TweenMax.delayedCall(.18,S,[r,o,s]):punchgs.TweenMax.delayedCall(.18,s)}},M=function(e,t){return console.log("Static Image "+e+"  Could not be loaded in time. Error Exists:"+t),!0},O=function(t,a){if(e.now()-i[a][t+"starttime"]>5e3&&1!=i[a][t+"warning"]){i[a][t+"warning"]=!0;var r=t+" Api Could not be loaded !";"https:"===location.protocol&&(r+=" Please Check and Renew SSL Certificate !"),console.error(r),i[a].c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+r+"</strong></div>")}return!0},P=function(a){i[a]!==t&&(i[a].pr_active_slide=e(i[a].slides[i[a].pr_active_key]),i[a].pr_next_slide=e(i[a].slides[i[a].pr_processing_key]),i[a].pr_active_bg=i[a].pr_active_slide.find("rs-sbg-wrap"),i[a].pr_next_bg=i[a].pr_next_slide.find("rs-sbg-wrap"),punchgs.TweenMax.to([i[a].pr_active_bg,i[a].pr_next_bg],.5,{opacity:0}),punchgs.TweenMax.set(i[a].pr_active_slide,{zIndex:18}),punchgs.TweenMax.set(i[a].pr_next_slide,{autoAlpha:0,zIndex:20}),i[a].tonpause=!1,i.removeTheLayers&&i[a].pr_active_key!==t&&i.removeTheLayers(i[a].pr_active_slide,a,!0),i[a].firststart=1,setTimeout(function(){delete i[a].pr_active_key,delete i[a].pr_processing_key},200))},C=function(a,r){if(i[a]!==t)if(clearTimeout(i[a].waitWithSwapSlide),i[a].pr_processing_key===t){if(i[a].startWithSlideKey!==t&&(i[a].pr_next_key=i.getComingSlide(a,i[a].startWithSlideKey).nindex,delete i[a].startWithSlideKey),i[a].pr_active_slide=e(i[a].slides[i[a].pr_active_key]),i[a].pr_next_slide=e(i[a].slides[i[a].pr_next_key]),i[a].pr_next_key==i[a].pr_active_key&&!0!==i[a].onlyPreparedSlide)return delete i[a].pr_next_key;!0===i[a].onlyPreparedSlide&&(i[a].onlyPreparedSlide=!1),i[a].pr_processing_key=i[a].pr_next_key,delete i[a].pr_next_key,i[a].pr_next_slide!==t&&i[a].pr_next_slide[0]!==t&&i[a].pr_next_slide[0].dataset.hal!==t&&(i[a].pr_next_slide[0].dataset.sofacounter=i[a].pr_next_slide[0].dataset.sofacounter==t?1:parseInt(i[a].pr_next_slide[0].dataset.sofacounter,0)+1),i[a].stopLoop&&i[a].pr_processing_key==i[a].lastslidetoshow-1&&(i[a].c.find("rs-progress").css({visibility:"hidden"}),i[a].c.trigger("revolution.slide.onstop"),i[a].noloopanymore=1),i[a].pr_next_slide.index()===i[a].slideamount-1&&i[a].looptogo>0&&"disabled"!==i[a].looptogo&&(i[a].looptogo--,i[a].looptogo<=0&&(i[a].stopLoop=!0)),i[a].tonpause=!0,i[a].c.trigger("stoptimer"),"off"===i[a].spinner&&(i[a].loader!==t?i[a].loader.css({display:"none"}):i[a].loadertimer=setTimeout(function(){i[a].loader!==t&&i[a].loader.css({display:"block"})},18)),I(i[a].pr_next_slide[0],a,1),i.preLoadAudio&&i.preLoadAudio(i[a].pr_next_slide,a,1),S(i[a].pr_next_slide[0],a,function(){i[a]!==t&&(i[a].pr_next_slide.find("rs-bgvideo").each(function(){var t=e(this);t.hasClass("HasListener")||(t.data("bgvideo",1),i.manageVideoLayer&&i.manageVideoLayer(t,a)),0==t.find(".rs-fullvideo-cover").length&&t.append('<div class="rs-fullvideo-cover"></div>')}),j(i[a].pr_next_slide.find("rs-sbg"),a,r))}),g(a)}else i[a].waitWithSwapSlide=setTimeout(function(){C(a,r)},18)},j=function(a,r,o){if(i[r]!==t){if(i[r].pr_active_slide=e(i[r].slides[i[r].pr_active_key]),i[r].pr_next_slide=e(i[r].slides[i[r].pr_processing_key]),i[r].pr_active_bg=i[r].pr_active_slide.find("rs-sbg-wrap"),i[r].pr_next_bg=i[r].pr_next_slide.find("rs-sbg-wrap"),i[r].tonpause=!1,clearTimeout(i[r].loadertimer),i[r].loader!==t&&i[r].loader.css({display:"none"}),i.setSize(r),i.manageNavigation&&i[r].navigation.use&&i.manageNavigation(r,!1),i[r].c.trigger("revolution.slide.onbeforeswap",{slider:r,slideIndex:parseInt(i[r].pr_active_key,0)+1,slideLIIndex:i[r].pr_active_key,nextSlideIndex:parseInt(i[r].pr_processing_key,0)+1,nextSlideLIIndex:i[r].pr_processing_key,nextslide:i[r].pr_next_slide,slide:i[r].pr_active_slide,currentslide:i[r].pr_active_slide,prevslide:i[r].pr_lastshown_key!==t?i[r].slides[i[r].pr_lastshown_key]:""}),i[r].transition=1,i[r].videoplaying=!1,i[r].pr_next_slide[0]!==t&&i[r].pr_next_slide[0].dataset.duration!=t&&""!=i[r].pr_next_slide[0].dataset.duration?i[r].duration=parseInt(i[r].pr_next_slide[0].dataset.duration,0):i[r].duration=i[r].origcd,i[r].pr_next_slide[0]===t||"true"!=i[r].pr_next_slide[0].dataset.ssop&&!0!==i[r].pr_next_slide[0].dataset.ssop?i[r].ssop=!1:i[r].ssop=!0,i[r].sbtimeline.set&&i[r].sbtimeline.fixed&&i.updateFixedScrollTimes(r),i[r].c.trigger("nulltimer"),i[r].sdir=i[r].pr_processing_key<i[r].pr_active_key?1:0,"arrow"==i[r].sc_indicator&&(0==i[r].pr_active_key&&i[r].pr_processing_key==i[r].slideamount-1&&(i[r].sdir=1),i[r].pr_active_key==i[r].slideamount-1&&0==i[r].pr_processing_key&&(i[r].sdir=0)),i[r].lsdir=i[r].sdir,i[r].pr_active_key!=i[r].pr_processing_key&&1!=i[r].firststart&&"carousel"!==i[r].sliderType&&i.removeTheLayers&&i.removeTheLayers(i[r].pr_active_slide,r),i[r].pr_next_slide.hasClass("rs-pause-timer-once")||i[r].pr_next_slide.hasClass("rs-pause-timer-always")?i[r].videoplaying=!0:i[r].c.trigger("restarttimer"),i[r].pr_next_slide.removeClass("rs-pause-timer-once"),"carousel"==i[r].sliderType)i[r].mtl=new punchgs.TimelineLite,i.prepareCarousel(r,i[r].mtl),A(r),i[r].transition=0;else{i[r].mtl=new punchgs.TimelineLite({onComplete:function(){A(r)}}),i[r].mtl.add(punchgs.TweenMax.set(i[r].pr_next_bg.find("rs-sbg"),{opacity:0})),i[r].mtl.pause(),i.animateTheLayers&&(i[r].pr_next_key!==t?i.animateTheLayers({slide:i[r].pr_next_key,id:r,mode:"preset"}):i[r].pr_processing_key!==t?i.animateTheLayers({slide:i[r].pr_processing_key,id:r,mode:"preset"}):i[r].pr_active_key!==t&&i.animateTheLayers({slide:i[r].pr_active_key,id:r,mode:"preset"})),1==i[r].firststart&&(punchgs.TweenMax.set(i[r].pr_active_slide,{autoAlpha:0}),i[r].firststart=0),punchgs.TweenMax.set(i[r].pr_active_slide,{zIndex:18}),punchgs.TweenMax.set(i[r].pr_next_slide,{autoAlpha:0,zIndex:20}),"prepared"==i[r].pr_next_slide[0].dataset.differentissplayed&&(i[r].pr_next_slide[0].dataset.differentissplayed="done",i[r].pr_next_slide[0].dataset.anim=i[r].pr_next_slide[0].dataset.savedanim),i[r].pr_next_slide[0].dataset.firstanim!=t&&"done"!=i[r].pr_next_slide[0].dataset.differentissplayed&&(i[r].pr_next_slide[0].dataset.savedanim=i[r].pr_next_slide[0].dataset.anim,i[r].pr_next_slide[0].dataset.anim=i[r].pr_next_slide[0].dataset.firstanim,i[r].pr_next_slide[0].dataset.differentissplayed="prepared");var s=function(e){var i=(e=e===t?"t:random":e).split(";"),a={};for(var r in i)if(i.hasOwnProperty(r)){var o=i[r].split(":"),s=o[0],n=o[1],l="transition";switch(s){case"ei":l="easein";break;case"eo":l="easeout";break;case"s":l="masterspeed";break;case"sl":l="slotamount";break;case"r":l="rotate"}s!==t&&n!==t&&(a[l]=n.split(","))}a.transition===t&&(a={transition:["fade"]});return a}(i[r].pr_next_slide[0].dataset.anim);i[r].pr_next_slide[0].dataset.ntrid="on"==i[r].pr_next_slide[0].dataset.rndtrans?Math.round(80*Math.random()):parseInt(i[r].pr_next_slide[0].dataset.ntrid,0)+1||0,i[r].pr_next_slide[0].dataset.ntrid=s.transition===t||i[r].pr_next_slide[0].dataset.ntrid==s.transition.length?0:i[r].pr_next_slide[0].dataset.ntrid,i.animateSlide({animation:s,ntrid:i[r].pr_next_slide[0].dataset.ntrid,id:r}),i[r].pr_next_bg.data("panzoom")!==t&&(i.startPanZoom(i[r].pr_next_bg,r),i[r].mtl.add(punchgs.TweenMax.set(i[r].pr_next_bg,{autoAlpha:0}))),i[r].mtl.pause()}i.scrollHandling&&i[r].mtl!==t&&(i.scrollHandling(r,!0,0),i[r].mtl.eventCallback("onUpdate",function(){i.scrollHandling(r,!0,0,!0)})),"off"!=i[r].parallax.type&&i[r].parallax.firstgo==t&&i.scrollHandling&&(i[r].parallax.firstgo=!0,i[r].lastscrolltop=-999,i.scrollHandling(r,!0,0),setTimeout(function(){i[r]!==t&&(i[r].lastscrolltop=-999,i.scrollHandling(r,!0,0))},70),setTimeout(function(){i[r]!==t&&(i[r].lastscrolltop=-999,i.scrollHandling(r,!0,0))},100)),i.animateTheLayers?"carousel"===i[r].sliderType?i[r].carousel.showLayersAllTime?(e.each(i[r].slides,function(e){i[r].carousel.allLayersStarted?i.animateTheLayers({slide:e,id:r,mode:"rebuild"}):i.animateTheLayers({slide:e,id:r,mode:"start"})}),i[r].carousel.allLayersStarted=!0):(0!==i[r].firststart?i.animateTheLayers({slide:0,id:r,mode:"start"}):!0!==o&&i.animateTheLayers({slide:i[r].pr_next_key!==t?i[r].pr_next_key:i[r].pr_processing_key!==t?i[r].pr_processing_key:i[r].pr_active_key,id:r,mode:"start"}),i[r].firststart=0):i.animateTheLayers({slide:i[r].pr_next_key!==t?i[r].pr_next_key:i[r].pr_processing_key!==t?i[r].pr_processing_key:i[r].pr_active_key,id:r,mode:"start"}):i[r].mtl!=t&&setTimeout(function(){i[r].mtl.resume()},18),punchgs.TweenMax.to(i[r].pr_next_slide,.001,{autoAlpha:1})}};var A=function(r){if(i[r]!==t&&(i[r].firstSlideAvailable===t&&(i[r].firstSlideAvailable=!0,i.showFirstTime!==t&&i.showFirstTime(r)),"carousel"===i[r].sliderType||(punchgs.TweenMax.to(i[r].pr_next_bg.find("rs-sbg"),.001,{zIndex:20,autoAlpha:1,onComplete:function(){_(r,i[r].pr_next_slide)}}),i[r].pr_next_slide.index()!=i[r].pr_active_slide.index()&&punchgs.TweenMax.to(i[r].pr_active_slide,.2,{zIndex:18,autoAlpha:0,onComplete:function(){_(r,i[r].pr_active_slide)}})),i[r].pr_active_key=i[r].pr_processing_key!==t?i[r].pr_processing_key:i[r].pr_active_key,delete i[r].pr_processing_key,"scroll"!=i[r].parallax.type&&"scroll+mouse"!=i[r].parallax.type&&"mouse+scroll"!=i[r].parallax.type||(i[r].lastscrolltop=-999,i.scrollHandling(r)),i[r].mtldiff=i[r].mtl.time(),delete i[r].mtl,i[r].pr_active_key!==t)){i[r].slides[i[r].pr_active_key].dataset.sloop!==t&&function(e){if(i[e]!==t){i[e].sloops=i[e].sloops===t?{}:i[e].sloops;var a=i[e].slides[i[e].pr_active_key].dataset.key,r=i[e].sloops[a];if(r===t){r={s:2500,e:4500,r:"unlimited"};var o=i[e].slides[i[e].pr_active_key].dataset.sloop.split(";");for(var s in o)if(o.hasOwnProperty(s)){var n=o[s].split(":");switch(n[0]){case"s":r.s=parseInt(n[1],0)/1e3;break;case"e":r.e=parseInt(n[1],0)/1e3;break;case"r":r.r=n[1]}}r.r="unlimited"===r.r?-1:parseInt(r.r,0),i[e].sloops[a]=r,r.key=a}r.ct={time:r.s},r.tl=new punchgs.TimelineMax({}),r.timer=punchgs.TweenMax.fromTo(r.ct,r.e-r.s,{time:r.s},{time:r.e,ease:punchgs.Linear.easeNone,onRepeat:function(){for(var a in i[e].layers[r.key])i[e].layers[r.key].hasOwnProperty(a)&&i[e]._L[a].timeline.play(r.s);var o=i[e].c.find("rs-progress");o!==t&&o[0]!==t&&o[0].tween!==t&&o[0].tween.time(r.s)},onUpdate:function(){},onComplete:function(){}}).repeat(r.r),r.tl.add(r.timer,r.s),r.tl.time(i[e].mtldiff)}}(r),i[r].c.find(".active-revslide").removeClass("active-rs-slide"),e(i[r].slides[i[r].pr_active_key]).addClass("active-rs-slide"),i[r].pr_active_bg.data("pztl")!=t&&(i[r].pr_active_bg.data("pztl").reverse(),i[r].pr_active_bg.data("pztl").timeScale(25)),i[r].pr_next_bg.data("panzoom")!==t&&(i[r].pr_next_bg.data("pztl")!=t?(i[r].pr_next_bg.data("pztl").timeScale(1),i[r].pr_next_bg.data("pztl").play()):i.startPanZoom(i[r].pr_next_bg,r)),i[r].pr_next_slide.find("rs-bgvideo").each(function(t){if(a&&!i[r].fallbacks.allowHTML5AutoPlayOnAndroid)return!1;var o=e(this);i.resetVideo(o,r,!1,!0),punchgs.TweenMax.fromTo(o,.25,{autoAlpha:0},{autoAlpha:1,ease:punchgs.Power3.easeInOut,delay:.05,onComplete:function(){i.animcompleted&&i.animcompleted(o,r)}})}),i[r].pr_active_bg.find("rs-bgvideo").each(function(t){if(a&&!i[r].fallbacks.allowHTML5AutoPlayOnAndroid)return!1;var o=e(this);i.stopVideo&&(i.resetVideo(o,r),i.stopVideo(o,r)),punchgs.TweenMax.to(o,1,{autoAlpha:0,ease:punchgs.Power3.easeInOut,delay:.2})});var o={slider:r,slideIndex:parseInt(i[r].pr_active_key,0)+1,slideLIIndex:i[r].pr_active_key,slide:i[r].pr_next_slide,currentslide:i[r].pr_next_slide,prevSlideIndex:i[r].pr_lastshown_key!==t&&parseInt(i[r].pr_lastshown_key,0)+1,prevSlideLIIndex:i[r].pr_lastshown_key!==t&&parseInt(i[r].pr_lastshown_key,0),prevSlide:i[r].pr_lastshown_key!==t&&i[r].slides[i[r].pr_lastshown_key]};if(i[r].c.trigger("revolution.slide.onchange",o),i[r].c.trigger("revolution.slide.onafterswap",o),i[r].pr_lastshown_key=i[r].pr_active_key,i[r].startWithSlide!==t&&"done"!==i[r].startWithSlide&&"carousel"===i[r].sliderType){for(var s=i[r].startWithSlide,n=0;n<=i[r].slides.length-1;n++)i[r].slides[n]!==t&&i[r].slides[n][0]!==t&&i[r].slides[n][0].dataset!==t&&i[r].slides[n][0].dataset.originalindex===i[r].startWithSlide&&(s=n);0!==s&&i.callingNewSlide(r,s),i[r].startWithSlide="done"}i[r].duringslidechange=!1,i[r].pr_active_slide.length>0&&i[r].pr_active_slide[0].dataset.hal!=t&&0!=i[r].pr_active_slide[0].dataset.hal&&i[r].pr_active_slide[0].dataset.hal<=i[r].pr_active_slide[0].dataset.sofacounter&&i[r].c.revremoveslide(i[r].pr_active_slide.index());var l=i[r].pr_processing_key||i[r].pr_active_key||0;i[r].rowzones!=t&&(l=l>i[r].rowzones.length?i[r].rowzones.length:l),i[r].rowzones!=t&&i[r].rowzones.length>0&&i[r].rowzones[l]!=t&&l>=0&&l<=i[r].rowzones.length&&i[r].rowzones[l].length>0&&i.setSize(r),delete i[r].sc_indicator,delete i[r].sc_indicator_dir,i[r].firstLetItFree===t&&(i.scrollHandling&&i.scrollHandling(r,!0),i[r].firstLetItFree=!0)}},Q=function(r){i[r].loop=0,i[r].stopAtSlide!=t&&i[r].stopAtSlide>-1?i[r].lastslidetoshow=i[r].stopAtSlide:i[r].lastslidetoshow=999,i[r].stopLoop=!1,0==i[r].looptogo&&(i[r].stopLoop=!0);var o=i[r].c.find("rs-progress");i[r].c.on("stoptimer",function(){var t=e(this).find("rs-progress");t[0].tween.pause(),i[r].disableProgressBar&&t.css({visibility:"hidden"}),i[r].sliderstatus="paused",i.unToggleState(i[r].slidertoggledby)}),i[r].c.on("starttimer",function(){i[r].forcepaused||(1!=i[r].conthover&&1!=i[r].videoplaying&&i[r].width>i[r].hideSliderAtLimit&&1!=i[r].tonpause&&1!=i[r].overnav&&1!=i[r].ssop&&(1===i[r].noloopanymore||i[r].viewPort.enable&&!i[r].inviewport||(o.css({visibility:"visible"}),o[0].tween.resume(),i[r].sliderstatus="playing")),i[r].disableProgressBar&&o.css({visibility:"hidden"}),i.toggleState(i[r].slidertoggledby))}),i[r].c.on("restarttimer",function(){if(!i[r].forcepaused){var t=e(this).find("rs-progress");if(i[r].mouseoncontainer&&"on"==i[r].navigation.onHoverStop&&!a)return!1;1===i[r].noloopanymore||i[r].viewPort.enable&&!i[r].inviewport||1==i[r].ssop||(t.css({visibility:"visible"}),t[0].tween.kill(),t[0].tween=punchgs.TweenMax.fromTo(t,i[r].duration/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:s,delay:1}),i[r].sliderstatus="playing"),i[r].disableProgressBar&&t.css({visibility:"hidden"}),i.toggleState(i[r].slidertoggledby)}}),i[r].c.on("nulltimer",function(){o[0].tween.kill(),o[0].tween=punchgs.TweenMax.fromTo(o,i[r].duration/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:s,delay:1}),o[0].tween.pause(0),i[r].disableProgressBar&&o.css({visibility:"hidden"}),i[r].sliderstatus="paused"});var s=function(){0==e("body").find(i[r].c).length&&(!function(t){i[t].c.children().each(function(){try{e(this).die("click")}catch(e){}try{e(this).die("mouseenter")}catch(e){}try{e(this).die("mouseleave")}catch(e){}try{e(this).unbind("hover")}catch(e){}});try{i[t].c.die("click","mouseenter","mouseleave")}catch(e){}clearInterval(i[t].cdint),i[t].c=null}(r),clearInterval(i[r].cdint)),i[r].c.trigger("revolution.slide.slideatend"),1==i[r].c.data("conthoverchanged")&&(i[r].conthover=i[r].c.data("conthover"),i[r].c.data("conthoverchanged",0)),i.callingNewSlide(r,1)};o[0].tween=punchgs.TweenMax.fromTo(o,i[r].duration/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:s,delay:1}),i[r].slideamount>1&&(0!=i[r].stopAfterLoops||1!=i[r].stopAtSlide)?i[r].c.trigger("starttimer"):(i[r].noloopanymore=1,i[r].c.trigger("nulltimer")),i[r].c.on("tp-mouseenter",function(){i[r].mouseoncontainer=!0,1!=i[r].navigation.onHoverStop||a||(i[r].c.trigger("stoptimer"),i[r].c.trigger("revolution.slide.onpause"))}),i[r].c.on("tp-mouseleft",function(){i[r].mouseoncontainer=!1,1!=i[r].c.data("conthover")&&1==i[r].navigation.onHoverStop&&(1==i[r].viewPort.enable&&i[r].inviewport||0==i[r].viewPort.enable)&&(i[r].c.trigger("revolution.slide.onresume"),i[r].c.trigger("starttimer"))})},H=function(){e(".rev_redraw_on_blurfocus").each(function(){var e=this.id;if(i[e]==t||i[e].c==t||0===i[e].c.length)return!1;1!=i[e].windowfocused&&(i[e].windowfocused=!0,punchgs.TweenMax.delayedCall(.3,function(){i[e].fallbacks.nextSlideOnWindowFocus&&i[e].c.revnext(),i[e].c.revredraw(),"playing"==i[e].lastsliderstatus&&i[e].c.revresume(),i[e].c.trigger("revolution.slide.tabfocused")}))})},N=function(){e(".rev_redraw_on_blurfocus").each(function(){i[this.id].windowfocused=!1,i[this.id].lastsliderstatus=i[this.id].sliderstatus,i[this.id].c.revpause(),i[this.id].pr_next_bg!==t&&i[this.id].pr_next_bg.data("panzoom")!==t&&i.stopPanZoom(i[this.id].pr_next_bg,i[this.id]),i[this.id].pr_active_bg!==t&&i[this.id].pr_active_bg.data("panzoom")!==t&&i.stopPanZoom(i[this.id].pr_active_bg,i[this.id]),i[this.id].c.trigger("revolution.slide.tabblured")})},D=function(){var i=document.documentMode===t,a=window.chrome;1!==e("body").data("revslider_focus_blur_listener")&&(e("body").data("revslider_focus_blur_listener",1),i&&!a?e(window).on("focusin",function(){H()}).on("focusout",function(){N()}):window.addEventListener?(window.addEventListener("focus",function(e){H()},{capture:!1,passive:!0}),window.addEventListener("blur",function(e){N()},{capture:!1,passive:!0})):(window.attachEvent("focus",function(e){H()}),window.attachEvent("blur",function(e){N()})))},W=function(e){for(var t,i=[],a=window.location.href.slice(window.location.href.indexOf(e)+1).split("_"),r=0;r<a.length;r++)a[r]=a[r].replace("%3D","="),t=a[r].split("="),i.push(t[0]),i[t[0]]=t[1];return i},B=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Y=function(i){return function(i){for(var a in i.minHeight=i.minHeight!==t?"none"===i.minHeight||"0"===i.minHeight||"0px"===i.minHeight||""==i.minHeight||" "==i.minHeight?0:parseInt(i.minHeight,0):0,i.maxHeight="none"===i.maxHeight||"0"===i.maxHeight?0:parseInt(i.maxHeight,0),i.carousel.maxVisibleItems=i.carousel.maxVisibleItems<1?999:i.carousel.maxVisibleItems,i.carousel.vertical_align="top"===i.carousel.vertical_align?"0%":"bottom"===i.carousel.vertical_align?"100%":"50%",i.carousel.space=parseInt(i.carousel.space,0),i.carousel.maxOpacity=parseInt(i.carousel.maxOpacity,0),i.carousel.maxRotation=parseInt(i.carousel.maxRotation,0),i.carousel.minScale=parseInt(i.carousel.minScale,0),i.navigation.maintypes=["arrows","tabs","thumbnails","bullets"],i.navigation.maintypes)i.navigation.maintypes.hasOwnProperty(a)&&i.navigation[i.navigation.maintypes[a]]!==t&&(i.navigation[i.navigation.maintypes[a]].animDelay=parseInt(i.navigation[i.navigation.maintypes[a]].animDelay,0)/1e3,i.navigation[i.navigation.maintypes[a]].animSpeed=parseInt(i.navigation[i.navigation.maintypes[a]].animSpeed,0)/1e3);if(e.isNumeric(i.scrolleffect.tilt)||-1!==i.scrolleffect.tilt.indexOf("%")&&(i.scrolleffect.tilt=parseInt(i.scrolleffect.tilt)),i.scrolleffect.tilt=i.scrolleffect.tilt/100,i.navigation.thumbnails.position="outer-horizontal"==i.navigation.thumbnails.position?"bottom"==i.navigation.thumbnails.v_align?"outer-bottom":"outer-top":"outer-vertical"==i.navigation.thumbnails.position?"left"==i.navigation.thumbnails.h_align?"outer-left":"outer-right":i.navigation.thumbnails.position,i.navigation.tabs.position="outer-horizontal"==i.navigation.tabs.position?"bottom"==i.navigation.tabs.v_align?"outer-bottom":"outer-top":"outer-vertical"==i.navigation.tabs.position?"left"==i.navigation.tabs.h_align?"outer-left":"outer-right":i.navigation.tabs.position,i.sbtimeline.speed=parseInt(i.sbtimeline.speed,0)/1e3||.5,!0===i.sbtimeline.set&&!0===i.sbtimeline.fixed&&"auto"!==i.sliderLayout?(i.sbtimeline.fixStart=parseInt(i.sbtimeline.fixStart),i.sbtimeline.fixEnd=parseInt(i.sbtimeline.fixEnd)):i.sbtimeline.fixed=!1,i.startDelay=parseInt(i.startDelay,0)||0,i.navigation!==t&&i.navigation.arrows!=t&&i.navigation.arrows.hide_under!=t&&(i.navigation.arrows.hide_under=parseInt(i.navigation.arrows.hide_under)),i.navigation!==t&&i.navigation.bullets!=t&&i.navigation.bullets.hide_under!=t&&(i.navigation.bullets.hide_under=parseInt(i.navigation.bullets.hide_under)),i.navigation!==t&&i.navigation.thumbnails!=t&&i.navigation.thumbnails.hide_under!=t&&(i.navigation.thumbnails.hide_under=parseInt(i.navigation.thumbnails.hide_under)),i.navigation!==t&&i.navigation.tabs!=t&&i.navigation.tabs.hide_under!=t&&(i.navigation.tabs.hide_under=parseInt(i.navigation.tabs.hide_under)),i.navigation!==t&&i.navigation.arrows!=t&&i.navigation.arrows.hide_over!=t&&(i.navigation.arrows.hide_over=parseInt(i.navigation.arrows.hide_over)),i.navigation!==t&&i.navigation.bullets!=t&&i.navigation.bullets.hide_over!=t&&(i.navigation.bullets.hide_over=parseInt(i.navigation.bullets.hide_over)),i.navigation!==t&&i.navigation.thumbnails!=t&&i.navigation.thumbnails.hide_over!=t&&(i.navigation.thumbnails.hide_over=parseInt(i.navigation.thumbnails.hide_over)),i.navigation!==t&&i.navigation.tabs!=t&&i.navigation.tabs.hide_over!=t&&(i.navigation.tabs.hide_over=parseInt(i.navigation.tabs.hide_over)),i.lazyloaddata!==t&&i.lazyloaddata.length>0&&i.lazyloaddata.indexOf("-")>0){var r=i.lazyloaddata.split("-");for(i.lazyloaddata=r[0],a=1;a<r.length;a++)i.lazyloaddata+=B(r[a])}return i}(e.extend(!0,{sliderType:"standard",sliderLayout:"auto",dottedOverlay:"none",duration:9e3,modal:{useAsModal:!1,cover:!0,coverColor:"rgba(0,0,0,0.5)",horizontal:"center",vertical:"middle"},navigation:{keyboardNavigation:!1,keyboard_direction:"horizontal",mouseScrollNavigation:"off",onHoverStop:!0,mouseScrollReverse:"default",touch:{touchenabled:!1,touchOnDesktop:!1,swipe_treshold:75,swipe_min_touches:1,swipe_direction:"horizontal",drag_block_vertical:!1},arrows:{style:"",enable:!1,hide_onmobile:!1,hide_under:0,hide_onleave:!1,hide_delay:200,hide_delay_mobile:1200,hide_over:9999,tmp:"",rtl:!1,left:{h_align:"left",v_align:"center",h_offset:20,v_offset:0,container:"slider"},right:{h_align:"right",v_align:"center",h_offset:20,v_offset:0,container:"slider"}},bullets:{enable:!1,hide_onmobile:!1,hide_onleave:!1,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",h_align:"center",v_align:"bottom",space:5,h_offset:0,v_offset:20,tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',container:"slider",rtl:!1,style:""},thumbnails:{container:"slider",rtl:!1,style:"",enable:!1,width:100,height:50,min_width:100,wrapper_padding:2,wrapper_color:"transparent",tmp:'<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!1,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,position:"inner",space:2,h_align:"center",v_align:"bottom",h_offset:0,v_offset:20},tabs:{container:"slider",rtl:!1,style:"",enable:!1,width:100,min_width:100,height:50,wrapper_padding:10,wrapper_color:"transparent",tmp:'<span class="tp-tab-image"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!1,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,space:0,position:"inner",h_align:"center",v_align:"bottom",h_offset:0,v_offset:20}},responsiveLevels:4064,visibilityLevels:[2048,1024,778,480],gridwidth:960,gridheight:500,minHeight:0,maxHeight:0,keepBPHeight:!1,forceOverflow:!1,fixedOnTop:!1,autoHeight:!1,gridEQModule:!1,disableForceFullWidth:!1,fullScreenOffsetContainer:"",fullScreenOffset:"0",hideLayerAtLimit:0,hideAllLayerAtLimit:0,hideSliderAtLimit:0,disableProgressBar:!1,stopAtSlide:-1,stopAfterLoops:0,shadow:0,startDelay:0,lazyType:"smart",spinner:"off",shuffle:!1,viewPort:{enable:!1,outof:"wait",visible_area:"200px",presize:!1},fallbacks:{isJoomla:!1,panZoomDisableOnMobile:!1,simplifyAll:!0,nextSlideOnWindowFocus:!1,disableFocusListener:!1,ignoreHeightChanges:"off",ignoreHeightChangesSize:0,allowHTML5AutoPlayOnAndroid:!0},parallax:{type:"off",levels:[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],origo:"enterpoint",disable_onmobile:!1,ddd_shadow:!1,ddd_bgfreeze:!1,ddd_overflow:"visible",ddd_layer_overflow:"visible",ddd_z_correction:65,speed:400,speedbg:0,speedls:0},scrolleffect:{set:!1,fade:!1,blur:!1,scale:!1,grayscale:!1,maxblur:10,layers:!1,slide:!1,direction:"both",multiplicator:1.35,multiplicator_layers:.5,tilt:30,mobile:!1},sbtimeline:{set:!1,fixed:!1,fixStart:0,fixEnd:0,layers:!1,slide:!1,ease:"Linear.easeNone",speed:500},carousel:{easing:punchgs.Power3.easeInOut,speed:800,showLayersAllTime:!1,horizontal_align:"center",vertical_align:"center",infinity:!1,space:0,maxVisibleItems:3,stretch:!1,fadeout:!0,maxRotation:0,maxOpacity:100,minScale:0,vary_fade:!1,vary_rotation:!1,vary_scale:!1,border_radius:"0px",padding_top:0,padding_bottom:0},extensions:"extensions/",extensions_suffix:".min.js",debugMode:!1,stopLoop:!1,waitForInit:!1},i))}}(jQuery),function($,undefined){"use strict";var _R=jQuery.fn.revolution;jQuery.extend(!0,_R,{checkActions:function(e,t){checkActions_intern(e,t)}});var checkActions_intern=function(layer,id){var actions=layer[0].dataset.actions,_L=layer.data();for(var ei in actions=actions.split("||"),layer.addClass("rs-waction"),_L.events=_L.events===undefined?[]:_L.events,actions)if(actions.hasOwnProperty(ei)){var event=getEventParams(actions[ei].split(";"));_L.events.push(event),_R[id].fullscreen_esclistener||"exitfullscreen"!=event.action&&"togglefullscreen"!=event.action||(jQuery(document).keyup(function(e){27==e.keyCode&&jQuery("#rs-go-fullscreen").length>0&&layer.trigger(event.on)}),_R[id].fullscreen_esclistener=!0);var targetlayer="backgroundvideo"==event.layer?jQuery("rs-bgvideo"):"firstvideo"==event.layer?jQuery("rs-slide").find(".rs-layer-video"):jQuery("#"+event.layer);switch(-1!=jQuery.inArray(event.action,["toggleslider","toggle_mute_video","toggle_global_mute_video","togglefullscreen"])&&(_L._togglelisteners=!0),event.action){case"togglevideo":jQuery.each(targetlayer,function(){updateToggleByList(jQuery(this),"videotoggledby",layer[0].id)});break;case"togglelayer":jQuery.each(targetlayer,function(){updateToggleByList(jQuery(this),"layertoggledby",layer[0].id),jQuery(this).data("triggered_startstatus",event.togglestate)});break;case"toggle_global_mute_video":case"toggle_mute_video":jQuery.each(targetlayer,function(e,t){updateToggleByList(jQuery(this),"videomutetoggledby",layer[0].id)});break;case"toggleslider":_R[id].slidertoggledby==undefined&&(_R[id].slidertoggledby=[]),_R[id].slidertoggledby.push(layer[0].id);break;case"togglefullscreen":_R[id].fullscreentoggledby==undefined&&(_R[id].fullscreentoggledby=[]),_R[id].fullscreentoggledby.push(layer[0].id)}}!_R[id].actionsPrepared&&_R[id].c[0].getElementsByClassName("rs-on-sh").length>0&&(_R[id].c.on("tp-mouseenter",function(){_R[id].mouseoncontainer=!0;var e,t=_R[id].pr_next_key!==undefined?_R[id].pr_next_key:_R[id].pr_processing_key!==undefined?_R[id].pr_processing_key:_R[id].pr_active_key!==undefined?_R[id].pr_active_key:_R[id].pr_next_key;if("none"!==t&&t!==undefined){if((t=_R[id].slides[t].dataset.key)!==undefined&&_R[id].layers[t])for(e in _R[id].layers[t])_R[id].layers[t][e].className.indexOf("rs-on-sh")>=0&&_R.renderLayerAnimation({layer:jQuery(_R[id].layers[t][e]),frame:"frame_1",mode:"trigger",id:id});for(e in _R[id].layers.static)_R[id].layers.static[e].className.indexOf("rs-on-sh")>=0&&_R.renderLayerAnimation({layer:jQuery(_R[id].layers.static[e]),frame:"frame_1",mode:"trigger",id:id})}}),_R[id].c.on("tp-mouseleft",function(){_R[id].mouseoncontainer=!0;var e,t=_R[id].pr_next_key!==undefined?_R[id].pr_next_key:_R[id].pr_processing_key!==undefined?_R[id].pr_processing_key:_R[id].pr_active_key!==undefined?_R[id].pr_active_key:_R[id].pr_next_key;if("none"!==t&&t!==undefined){if((t=_R[id].slides[t].dataset.key)!==undefined&&_R[id].layers[t])for(e in _R[id].layers[t])_R[id].layers[t][e].className.indexOf("rs-on-sh")>=0&&_R.renderLayerAnimation({layer:jQuery(_R[id].layers[t][e]),frame:"frame_999",mode:"trigger",id:id});for(e in _R[id].layers.static)_R[id].layers.static[e].className.indexOf("rs-on-sh")>=0&&_R.renderLayerAnimation({layer:jQuery(_R[id].layers.static[e]),frame:"frame_999",mode:"trigger",id:id})}})),_R[id].actionsPrepared=!0,layer.on("click mouseenter mouseleave",function(e){for(var i in _L.events)if(_L.events.hasOwnProperty(i)&&_L.events[i].on===e.type){var event=_L.events[i];if("click"===event.on&&layer.hasClass("tp-temporarydisabled"))return!1;var targetlayer="backgroundvideo"==event.layer?jQuery(_R[id].slides[_R[id].pr_active_key]).find("rs-sbg-wrap rs-bgvideo"):"firstvideo"==event.layer?jQuery(_R[id].slides[_R[id].pr_active_key]).find(".rs-layer-video").first():jQuery("#"+event.layer),tex=targetlayer.length>0;switch(event.action){case"nextframe":case"prevframe":case"gotoframe":case"togglelayer":case"toggleframes":case"startlayer":case"stoplayer":if(targetlayer[0]===undefined)continue;var _=_R[id]._L[targetlayer[0].id],frame=event.frame,tou="triggerdelay";if("click"===e.type&&_.clicked_time_stamp!==undefined&&(new Date).getTime()-_.clicked_time_stamp<300)return;if("mouseenter"===e.type&&_.mouseentered_time_stamp!==undefined&&(new Date).getTime()-_.mouseentered_time_stamp<300)return;if("mouseleave"===e.type&&_.mouseleaveed_time_stamp!==undefined&&(new Date).getTime()-_.mouseleaveed_time_stamp<300)return;if(clearTimeout(_.triggerdelayIn),clearTimeout(_.triggerdelayOut),clearTimeout(_.triggerdelay),"click"===e.type&&(_.clicked_time_stamp=(new Date).getTime()),"mouseenter"===e.type&&(_.mouseentered_time_stamp=(new Date).getTime()),"mouseleave"===e.type&&(_.mouseleaveed_time_stamp=(new Date).getTime()),"nextframe"===event.action||"prevframe"===event.action){_.forda=_.forda===undefined?getFordWithAction(_):_.forda;var inx=jQuery.inArray(_.currentframe,_.ford);for("nextframe"===event.action&&inx++,"prevframe"===event.action&&inx--;"skip"!==_.forda[inx]&&inx>0&&inx<_.forda.length-1;)"nextframe"===event.action&&inx++,"prevframe"===event.action&&inx--,inx=Math.min(Math.max(0,inx),_.forda.length-1);frame=_.ford[inx]}jQuery.inArray(event.action,["toggleframes","togglelayer","startlayer","stoplayer"])>=0&&(_.triggeredstate="startlayer"===event.action||"togglelayer"===event.action&&"frame_1"!==_.currentframe||"toggleframes"===event.action&&_.currentframe!==event.frameN,frame=_.triggeredstate?"toggleframes"===event.action?event.frameN:"frame_1":"toggleframes"===event.action?event.frameM:"frame_999",tou=_.triggeredstate?"triggerdelayIn":"triggerdelayOut",_.triggeredstate?_R.toggleState(_.layertoggledby):(_R.stopVideo&&_R.stopVideo(targetlayer,id),_R.unToggleState(_.layertoggledby)));var pars={layer:targetlayer,frame:frame,mode:"trigger",id:id};!0===event.children&&(pars.updateChildren=!0,pars.fastforward=!0),_R.renderLayerAnimation&&(clearTimeout(_[tou]),_[tou]=setTimeout(function(e){_R.renderLayerAnimation(e)},1e3*event.delay,pars));break;case"playvideo":tex&&_R.playVideo(targetlayer,id);break;case"stopvideo":tex&&_R.stopVideo&&_R.stopVideo(targetlayer,id);break;case"togglevideo":tex&&(_R.isVideoPlaying(targetlayer,id)?_R.stopVideo&&_R.stopVideo(targetlayer,id):_R.playVideo(targetlayer,id));break;case"mutevideo":tex&&_R.Mute(targetlayer,id,!0);break;case"unmutevideo":tex&&_R.Mute&&_R.Mute(targetlayer,id,!1);break;case"toggle_mute_video":tex&&(_R.Mute(targetlayer,id)?_R.Mute(targetlayer,id,!1):_R.Mute&&_R.Mute(targetlayer,id,!0));break;case"toggle_global_mute_video":var pvl=_R[id].playingvideos!=undefined&&_R[id].playingvideos.length>0;pvl&&(_R[id].globalmute?jQuery.each(_R[id].playingvideos,function(e,t){_R.Mute&&_R.Mute(t,id,!1)}):jQuery.each(_R[id].playingvideos,function(e,t){_R.Mute&&_R.Mute(t,id,!0)})),_R[id].globalmute=!_R[id].globalmute;break;default:punchgs.TweenLite.delayedCall(event.delay,function(targetlayer,id,event,layer){switch(event.action){case"openmodal":if(event.modalslide=event.modalslide===undefined?0:event.modalslide,window.RS_60_MODALS===undefined||-1==jQuery.inArray(event.modal,window.RS_60_MODALS)){var data={action:"revslider_ajax_call_front",client_action:"get_slider_html",token:_R[id].ajaxNonce,alias:event.modal,usage:"modal"};jQuery.ajax({type:"post",url:_R[id].ajaxUrl,dataType:"json",data:data,success:function(e,t,i){1==e.success&&(jQuery("body").append(e.data),setTimeout(function(){jQuery(document).trigger("RS_OPENMODAL_"+event.modal,event.modalslide)},49))},error:function(e){console.log("Modal Can not be Loaded"),console.log(e)}})}else jQuery(document).trigger("RS_OPENMODAL_"+event.modal,event.modalslide);break;case"closemodal":_R.revModal(id,{mode:"close"});break;case"callback":eval(event.callback);break;case"simplelink":window.open(event.url,event.target);break;case"simulateclick":targetlayer.length>0&&targetlayer.click();break;case"toggleclass":targetlayer.length>0&&targetlayer.toggleClass(event.classname);break;case"scrollbelow":case"scrollto":layer.addClass("tp-scrollbelowslider");var doc=jQuery(document),off="scrollbelow"===event.action?(getOffContH(_R[id].fullScreenOffsetContainer)||0)-(parseInt(event.offset,0)||0)||0:0-(parseInt(event.offset,0)||0),c="scrollbelow"===event.action?_R[id].c:jQuery("#"+event.id),ctop=c.length>0?c.offset().top:0,sobj={_y:window.pageYOffset!==document.documentElement.scrollTop?0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop:window.pageYOffset};ctop+="scrollbelow"===event.action?jQuery(_R[id].slides[0]).height():0,punchgs.TweenLite.to(sobj,event.speed/1e3,{_y:ctop-off,ease:event.ease,onUpdate:function(){doc.scrollTop(sobj._y)}});break;case"jumptoslide":switch(event.slide.toLowerCase()){case"+1":case"next":_R[id].sc_indicator="arrow",_R[id].sc_indicator_dir=0,_R.callingNewSlide(id,1,"carousel"===_R[id].sliderType);break;case"previous":case"prev":case"-1":_R[id].sc_indicator="arrow",_R[id].sc_indicator_dir=1,_R.callingNewSlide(id,-1,"carousel"===_R[id].sliderType);break;case"first":_R[id].sc_indicator="arrow",_R[id].sc_indicator_dir=1,_R.callingNewSlide(id,0,"carousel"===_R[id].sliderType);break;case"last":_R[id].sc_indicator="arrow",_R[id].sc_indicator_dir=0,_R.callingNewSlide(id,_R[id].slideamount-1,"carousel"===_R[id].sliderType);break;default:var ts=jQuery.isNumeric(event.slide)?parseInt(event.slide,0):event.slide;_R.callingNewSlide(id,ts,"carousel"===_R[id].sliderType)}break;case"toggleslider":_R[id].noloopanymore=0,"playing"==_R[id].sliderstatus?(_R[id].c.revpause(),_R[id].forcepaused=!0,_R.unToggleState(_R[id].slidertoggledby)):(_R[id].forcepaused=!1,_R[id].c.revresume(),_R.toggleState(_R[id].slidertoggledby));break;case"pauseslider":_R[id].c.revpause(),_R.unToggleState(_R[id].slidertoggledby);break;case"playslider":_R[id].noloopanymore=0,_R[id].c.revresume(),_R.toggleState(_R[id].slidertoggledby);break;case"gofullscreen":case"exitfullscreen":case"togglefullscreen":var gf;jQuery(".rs-go-fullscreen").length>0&&("togglefullscreen"==event.action||"exitfullscreen"==event.action)?(jQuery(".rs-go-fullscreen").removeClass("rs-go-fullscreen"),gf=_R[id].c.closest("rs-fullwidth-wrap").length>0?_R[id].c.closest("rs-fullwidth-wrap"):_R[id].c.closest("rs-module-wrap"),_R[id].minHeight=_R[id].oldminheight,_R[id].infullscreenmode=!1,_R[id].c.revredraw(),jQuery(window).trigger("resize"),_R.unToggleState(_R[id].fullscreentoggledby)):0!=jQuery(".rs-go-fullscreen").length||"togglefullscreen"!=event.action&&"gofullscreen"!=event.action||(gf=_R[id].c.closest("rs-fullwidth-wrap").length>0?_R[id].c.closest("rs-fullwidth-wrap"):_R[id].c.closest("rs-module-wrap"),gf.addClass("rs-go-fullscreen"),_R[id].oldminheight=_R[id].minHeight,_R[id].minHeight=jQuery(window).height(),_R[id].infullscreenmode=!0,_R[id].c.revredraw(),jQuery(window).trigger("resize"),_R.toggleState(_R[id].fullscreentoggledby));break;default:_R[id].c.trigger("layeraction",[event.action,layer,event])}},[targetlayer,id,event,layer])}}})};function getFordWithAction(e){var t=[];for(var i in e.ford)e.frames[e.ford[i]].timeline.waitoncall?t.push(e.ford[i]):t.push("skip");return t}function updateToggleByList(e,t,i){var a=e.data(t);a===undefined&&(a=[]),a.push(i),e.data(t,a)}function getEventParams(e){var t={on:"click",delay:0,ease:"Power2.easeOut",speed:400};for(var i in e)if(e.hasOwnProperty(i)){var a=e[i].split(":");switch(a[0]){case"modal":t.modal=a[1];break;case"ms":t.modalslide=a[1];break;case"m":t.frameM=a[1];break;case"n":t.frameN=a[1];break;case"o":t.on="click"===a[1]||"c"===a[1]?"click":"ml"===a[1]||"mouseleave"===a[1]?"mouseleave":"mouseenter"===a[1]||"me"===a[1]?"mouseenter":a[1];break;case"d":t.delay=parseInt(a[1],0)/1e3,t.delay="NaN"===t.delay||isNaN(t.delay)?0:t.delay;break;case"a":t.action=a[1];break;case"f":t.frame=a[1];break;case"slide":t.slide=a[1];break;case"layer":t.layer=a[1];break;case"sp":t.speed=parseInt(a[1],0);break;case"e":t.ease=a[1];break;case"ls":t.togglestate=a[1];break;case"offset":t.offset=a[1];break;case"call":t.callback=a[1];break;case"url":t.url="";for(var r=1;r<a.length;r++)t.url+=a[r]+(r===a.length-1?"":":");break;case"target":t.target=a[1];break;case"class":t.classname=a[1];break;case"ch":t.children="true"==a[1]||1==a[1]||"t"==a[1];break;default:a[0].length>0&&""!==a[0]&&(t[a[0]]=a[1])}}return t}var getOffContH=function(e){if(e==undefined)return 0;if(e.split(",").length>1){var t=e.split(","),i=0;return t&&jQuery.each(t,function(e,t){jQuery(t).length>0&&(i+=jQuery(t).outerHeight(!0))}),i}return jQuery(e).height()}}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution;jQuery.extend(!0,t,{prepareCarousel:function(e,o,n,l){void 0!==e&&(n=t[e].carousel.lastdirection=a(n,t[e].carousel.lastdirection),i(e),t[e].carousel.slide_offset_target=s(e),void 0!==l?r(e,n,!1,0):null==o?t.carouselToEvalPosition(e,n):r(e,n,!1))},carouselToEvalPosition:function(e,i){var o=t[e].carousel;i=o.lastdirection=a(i,o.lastdirection);var s="center"===o.horizontal_align?(o.wrapwidth/2-o.slide_width/2-o.slide_globaloffset)/o.slide_width:(0-o.slide_globaloffset)/o.slide_width,n=t.simp(s,t[e].slideamount,!1),l=n-Math.floor(n),d=0,c=-1*(Math.ceil(n)-n),p=-1*(Math.floor(n)-n);d=l>=.3&&"left"===i||l>=.7&&"right"===i?c:l<.3&&"left"===i||l<.7&&"right"===i?p:d,d=o.infinity?d:n<0?n:s>t[e].slideamount-1?s-(t[e].slideamount-1):d,o.slide_offset_target=d*o.slide_width,0!==Math.abs(o.slide_offset_target)?r(e,i,!0):t.organiseCarousel(e,i)},organiseCarousel:function(e,i,a,r){i=void 0===i||"down"==i||"up"==i||null===i||jQuery.isEmptyObject(i)?"left":i;for(var o=t[e].carousel,s=[],n=t[e].slides.length,l=0;l<n;l++){var d=l*o.slide_width+o.slide_offset;o.infinity&&(d=(d=d>o.wrapwidth-o.inneroffset&&"right"==i?o.slide_offset-(t[e].slides.length-l)*o.slide_width:d)<0-o.inneroffset-o.slide_width&&"left"==i?d+o.maxwidth:d),s[l]=d}var c=999,p=0;t[e].slides&&jQuery.each(t[e].slides,function(r,l){var d=s[r],u={};o.infinity&&(d=(d=d>o.wrapwidth-o.inneroffset+o.slide_width&&"left"===i?s[0]-(n-r)*o.slide_width:d)<0-o.inneroffset-3*o.slide_width?"left"==i?d+o.maxwidth:"right"===i?s[n-1]+(r+1)*o.slide_width:d:d),u.left=d+o.inneroffset;var h="center"===o.horizontal_align?(Math.abs(o.wrapwidth/2)-(u.left+o.slide_width/2))/o.slide_width:(o.inneroffset-u.left)/o.slide_width,g="center"===o.horizontal_align?2:1;if((a&&Math.abs(h)<c||0===h)&&(c=Math.abs(h),o.focused=r),u.width=o.slide_width,u.x=0,u.transformPerspective=1200,u.transformOrigin="50% "+o.vertical_align,o.fadeout)if(o.vary_fade)u.autoAlpha=1-Math.abs(o.maxOpacity/100/Math.ceil(o.maxVisibleItems/g)*h);else switch(o.horizontal_align){case"center":u.autoAlpha=Math.abs(h)<Math.ceil(o.maxVisibleItems/g-1)?1:1-(Math.abs(h)-Math.floor(Math.abs(h)));break;case"left":u.autoAlpha=h<1&&h>0?1-h:Math.abs(h)>o.maxVisibleItems-1?1-(Math.abs(h)-(o.maxVisibleItems-1)):1;break;case"right":u.autoAlpha=h>-1&&h<0?1-Math.abs(h):h>o.maxVisibleItems-1?1-(Math.abs(h)-(o.maxVisibleItems-1)):1}else u.autoAlpha=Math.abs(h)<Math.ceil(o.maxVisibleItems/g)?1:0;void 0!==o.minScale&&o.minScale>0&&(o.vary_scale?u.scale=1-Math.abs(o.minScale/100/Math.ceil(o.maxVisibleItems/g)*h):u.scale=h>=1||h<=-1?1-o.minScale/100:(100-o.minScale*Math.abs(h))/100,p=h*(u.width-u.width*u.scale)/2),void 0!==o.maxRotation&&0!=Math.abs(o.maxRotation)&&(o.vary_rotation?(u.rotationY=Math.abs(o.maxRotation)-Math.abs((1-Math.abs(1/Math.ceil(o.maxVisibleItems/g)*h))*o.maxRotation),u.autoAlpha=Math.abs(u.rotationY)>90?0:u.autoAlpha):u.rotationY=h>=1||h<=-1?o.maxRotation:Math.abs(h)*o.maxRotation,u.rotationY=h<0?-1*u.rotationY:u.rotationY),u.x=-1*o.space*h,u.left=Math.floor(u.left),u.x=Math.floor(u.x),void 0!==u.scale&&(u.x=u.x+p),u.zIndex=Math.round(100-Math.abs(5*h)),u.force3D=!0,u.transformStyle="3D"!=t[e].parallax.type&&"3d"!=t[e].parallax.type?"flat":"preserve-3d",punchgs.TweenLite.set(l,u)}),r&&(o.focused=void 0===o.focused?0:o.focused,o.oldfocused=void 0===o.oldfocused?0:o.oldfocused,t[e].pr_next_key=o.focused,o.focused!==o.oldfocused&&t.animateTheLayers&&(t.removeTheLayers(jQuery(t[e].slides[o.oldfocused]),e),t.animateTheLayers({slide:o.focused,id:e,mode:t[e].carousel.allLayersStarted?"rebuild":"start"})),o.oldfocused=o.focused,t[e].c.trigger("revolution.nextslide.waiting"))}});var i=function(e){void 0===t[e].bw&&t.setSize(e);var i=t[e].carousel,a=t.getHorizontalOffset(t[e].c,"left"),r=t.getHorizontalOffset(t[e].c,"right");void 0===i.wrap&&function(e){var i=t[e].carousel;i.infbackup=i.infinity,i.maxVisiblebackup=i.maxVisibleItems,i.slide_globaloffset="none",i.slide_offset=0,i.wrap=t[e].c.find("rs-carousel-wrap"),0!==i.maxRotation&&("3D"!==t[e].parallax.type&&"3d"!==t[e].parallax.type||punchgs.TweenLite.set(i.wrap,{perspective:"1600px",transformStyle:"preserve-3d"})),void 0!==i.border_radius&&parseInt(i.border_radius,0)>0&&punchgs.TweenLite.set(t[e].c.find("rs-slide"),{borderRadius:i.border_radius})}(e),i.slide_width=!0!==i.stretch?t[e].gridwidth[t[e].level]*(0===t[e].bw?1:t[e].bw):t[e].c.width(),i.slide_height=!0!==i.stretch?t[e].gridheight[t[e].level]*(0===t[e].bw?1:t[e].bw):t[e].c.height(),i.maxwidth=t[e].slideamount*i.slide_width,i.maxVisiblebackup>t[e].slides.length+1&&(i.maxVisibleItems=t[e].slides.length+2),i.wrapwidth=i.maxVisibleItems*i.slide_width+(i.maxVisibleItems-1)*i.space,i.wrapwidth="auto"!=t[e].sliderLayout?i.wrapwidth>t[e].c.width()?t[e].c.width():i.wrapwidth:i.wrapwidth>t[e].canvas.width()?t[e].canvas.width():i.wrapwidth,i.infinity=!(i.wrapwidth>=i.maxwidth)&&i.infbackup,i.wrapoffset="center"===i.horizontal_align?(t[e].c.width()-r-a-i.wrapwidth)/2:0,i.wrapoffset="auto"!=t[e].sliderLayout&&t[e].outernav?0:i.wrapoffset<a?a:i.wrapoffset;var o="3D"==t[e].parallax.type||"3d"==t[e].parallax.type?"visible":"hidden";"right"===i.horizontal_align?punchgs.TweenLite.set(i.wrap,{left:"auto",right:i.wrapoffset+"px",width:i.wrapwidth,overflow:o}):punchgs.TweenLite.set(i.wrap,{right:"auto",left:i.wrapoffset+"px",width:i.wrapwidth,overflow:o}),i.inneroffset="right"===i.horizontal_align?i.wrapwidth-i.slide_width:0,i.realoffset=Math.abs(i.wrap.position().left),i.windhalf=jQuery(window).width()/2},a=function(e,t){return null===e||jQuery.isEmptyObject(e)?t:void 0===e?"right":e},r=function(e,i,r,o){var s=t[e].carousel;i=s.lastdirection=a(i,s.lastdirection);var n={},l=r?punchgs.Power2.easeOut:s.easing;n.from=0,n.to=s.slide_offset_target,o=void 0===o?s.speed/1e3:o,o=r?.4:o,void 0!==s.positionanim&&s.positionanim.pause(),s.positionanim=punchgs.TweenLite.to(n,o,{from:n.to,onUpdate:function(){s.slide_offset=s.slide_globaloffset+n.from,s.slide_offset=t.simp(s.slide_offset,s.maxwidth),t.organiseCarousel(e,i,!1,!1)},onComplete:function(){s.slide_globaloffset=s.infinity?t.simp(s.slide_globaloffset+s.slide_offset_target,s.maxwidth):s.slide_globaloffset+s.slide_offset_target,s.slide_offset=t.simp(s.slide_offset,s.maxwidth),t.organiseCarousel(e,i,!1,!0),void 0!==s.focused&&r&&t.callingNewSlide(e,jQuery(t[e].slides[s.focused]).data("key"),!0),"carousel"!==t[e].sliderType||t[e].carousel.fadein||(punchgs.TweenLite.to(t[e].canvas,1,{scale:1,opacity:1}),t[e].carousel.fadein=!0),t[e].c.trigger("revolution.slide.carouselchange",{slider:e,slideIndex:parseInt(t[e].pr_active_key,0)+1,slideLIIndex:t[e].pr_active_key,slide:t[e].pr_next_slide,currentslide:t[e].pr_next_slide,prevSlideIndex:void 0!==t[e].pr_lastshown_key&&parseInt(t[e].pr_lastshown_key,0)+1,prevSlideLIIndex:void 0!==t[e].pr_lastshown_key&&parseInt(t[e].pr_lastshown_key,0),prevSlide:void 0!==t[e].pr_lastshown_key&&t[e].slides[t[e].pr_lastshown_key]})},ease:l})},o=function(e,t){return Math.abs(e)>Math.abs(t)?e>0?e-Math.abs(Math.floor(e/t)*t):e+Math.abs(Math.floor(e/t)*t):e},s=function(e){var i,a,r,s,n,l=0,d=t[e].carousel;if(void 0!==d.positionanim&&d.positionanim.kill(),"none"==d.slide_globaloffset)d.slide_globaloffset=l="center"===d.horizontal_align?d.wrapwidth/2-d.slide_width/2:0;else{d.slide_globaloffset=d.slide_offset,d.slide_offset=0;var c=t[e].pr_processing_key,p="center"===d.horizontal_align?(d.wrapwidth/2-d.slide_width/2-d.slide_globaloffset)/d.slide_width:(0-d.slide_globaloffset)/d.slide_width;p=t.simp(p,t[e].slideamount,!1),c=(c=c>=0?c:t[e].pr_active_key)>=0?c:0,l=d.infinity?(i=p,a=c,r=t[e].slideamount,n=a-r-i,s=o(s=a-i,r),n=o(n,r),-(Math.abs(s)>Math.abs(n)?n:s)):p-c,l*=d.slide_width}return l}}(jQuery),function(e){"use strict";var t=["chars","words","lines"],i=jQuery.fn.revolution;i.is_mobile(),i.is_android();jQuery.extend(!0,i,{checkLayerDimensions:function(e){var t=!1;for(var a in i[e.id].layers[e.skey])if(i[e.id].layers[e.skey].hasOwnProperty(a)&&!t){var r=i[e.id].layers[e.skey][a];i[e.id]._L[r.id].eow!==r.offsetWidth&&(t=!0)}return t},initLayer:function(e){var t,a,r,o=e.id,s=e.skey;for(var n in i[o]._L=void 0===i[o]._L?{}:i[o]._L,i[o].layers[s])if(i[o].layers[s].hasOwnProperty(n)){var l="carousel"===i[o].sliderType?0:i[o].width/2-i[o].gridwidth[i[o].level]*i[o].bw/2,d=0,c=i[o].layers[s][n],h=jQuery(c),g=c.dataset.initialised?i[o]._L[c.id]:h.data();if(void 0===c.dataset.initialised){if(i.revCheckIDS(o,c),i[o]._L[c.id]=g,g.ford=void 0===g.ford?"frame_0;frame_1;frame_999":g.ford,g.ford=";"==g.ford[g.ford.length-1]?g.ford.substring(0,g.ford.length-1):g.ford,g.ford=g.ford.split(";"),void 0!==g.clip)for(t in g.clipPath={use:!1,origin:"l",type:"rectangle"},g.clip=g.clip.split(";"),g.clip)g.clip.hasOwnProperty(t)&&("u"==(a=g.clip[t].split(":"))[0]&&(g.clipPath.use="true"==a[1]),"o"==a[0]&&(g.clipPath.origin=a[1]),"t"==a[0]&&(g.clipPath.type=a[1]));if(g.frames=w(g,o),g.c=h,g.p=h.closest(".rs-parallax-wrap"),g.lp=h.closest("rs-loop-wrap"),g.m=h.closest("rs-mask-wrap"),g.triggercache=void 0===g.triggercache?"reset":g.triggercache,g.rsp_bd=void 0===g.rsp_bd?"column"===g.type||"row"===g.type?"off":"on":g.rsp_bd,g.rsp_o=void 0===g.rsp_o?"on":g.rsp_o,g.basealign=void 0===g.basealign?"grid":g.basealign,g.group="group"!==g.type&&h.closest("rs-group-wrap").length>0?"group":"column"!==g.type&&h.closest("rs-column").length>0?"column":"row"!==g.type&&h.closest("rs-row").length>0?"row":void 0,g._lig="group"===g.group?h.closest("rs-group"):"column"===g.group?h.closest("rs-column"):"row"===g.group?h.closest("rs-row"):void 0,g._ligid=void 0!==g._lig?g._lig[0].id:void 0,g._column="RS-COLUMN"===h[0].tagName?h.closest("rs-column-wrap"):"none",g._row="RS-COLUMN"===h[0].tagName&&h.closest("rs-row"),g._ingroup="group"===g.group,g._incolumn="column"===g.group,g._inrow="row"===g.group,(g._ingroup||g._incolumn)&&g._lig[0].className.indexOf("rs-sba")>=0&&(!1!==g.animationonscroll||void 0===g.frames.loop)&&(g.animationonscroll=!0,h[0].className+=" rs-sba",i[o].sbas[s][c.id]=h[0]),g.animOnScrollRepeats=0,g._isgroup="RS-GROUP"===h[0].tagName,g.type=g.type||"none","row"===g.type&&void 0===g.cbreak&&(g.cbreak=2),g._isnotext=-1!==jQuery.inArray(g.type,["video","image","audio","shape"]),g._mediatag="html5"==g.audio?"audio":"video",g.img=h.find("img"),g.deepiframe=h[0].getElementsByTagName("iframe"),g.deepmedia=h[0].getElementsByTagName(g._mediatag),g.layertype="image"===g.type?"image":h[0].className.indexOf("rs-layer-video")>=0||h[0].className.indexOf("rs-layer-audio")>=0||g.deepiframe.length>0&&(g.deepiframe[0].src.toLowerCase().indexOf("youtube")>0||g.deepiframe[0].src.toLowerCase().indexOf("vimeo")>0)||g.deepmedia.length>0?"video":"html",g.deepiframe.length>0&&(g.deepiframe[0].dataset.layertype=g.layertype),"column"===g.type&&(g.cbg=g.p.find("rs-column-bg"),g.cbgmask=g.p.find("rs-cbg-mask-wrap")),g._slidelink=h[0].className.indexOf("slidelink")>=0,g._isstatic=h[0].className.indexOf("rs-layer-static")>=0,g.slidekey=g._isstatic?"staticlayers":s,g._togglelisteners=h.find(".rs-toggled-content").length>0,g.bgcol=void 0===g.bgcol?h[0].style.background.indexOf("gradient")>=0?h[0].style.background:h.css("backgroundColor"):g.bgcol,g.zindex=h.css("z-Index"),g._togglelisteners&&h.click(function(){i.swaptoggleState([this.id])}),void 0!==g.border)for(t in g.border=g.border.split(";"),g.bordercolor="transparent",g.border)if(g.border.hasOwnProperty(t))switch((a=g.border[t].split(":"))[0]){case"boc":g.bordercolor=a[1];break;case"bow":g.borderwidth=i.revToResp(a[1],4,0);break;case"bos":g.borderstyle=i.revToResp(a[1],4,0);break;case"bor":g.borderradius=i.revToResp(a[1],4,0)}if("svg"===g.type&&(g.svg=h.find("svg"),g.svgPath=g.svg.find("path"),g.svgI=p(g.svgi,o),g.svgH=p(g.svgh,o)),void 0!==g.btrans){var f=g.btrans;for(t in g.btrans={rX:0,rY:0,rZ:0,o:1},f=f.split(";"))if(f.hasOwnProperty(t))switch((a=f[t].split(":"))[0]){case"rX":g.btrans.rX=a[1];break;case"rY":g.btrans.rY=a[1];break;case"rZ":g.btrans.rZ=a[1];break;case"o":g.btrans.o=a[1]}}if(void 0!==g.tsh)for(t in g.tshadow={c:"rgba(0,0,0,0.25)",v:0,h:0,b:0},g.tsh=g.tsh.split(";"),g.tsh)if(g.tsh.hasOwnProperty(t))switch((a=g.tsh[t].split(":"))[0]){case"c":g.tshadow.c=a[1];break;case"h":g.tshadow.h=a[1];break;case"v":g.tshadow.v=a[1];break;case"b":g.tshadow.b=a[1]}if(void 0!==g.bsh)for(t in g.bshadow={e:"c",c:"rgba(0,0,0,0.25)",v:0,h:0,b:0,s:0},g.bsh=g.bsh.split(";"),g.bsh)if(g.bsh.hasOwnProperty(t))switch((a=g.bsh[t].split(":"))[0]){case"c":g.bshadow.c=a[1];break;case"h":g.bshadow.h=a[1];break;case"v":g.bshadow.v=a[1];break;case"b":g.bshadow.b=a[1];break;case"s":g.bshadow.s=a[1];break;case"e":g.bshadow.e=a[1]}if(void 0!==g.dim)for(t in g.dim=g.dim.split(";"),g.dim)if(g.dim.hasOwnProperty(t))switch((a=g.dim[t].split(":"))[0]){case"w":g.width=a[1];break;case"h":g.height=a[1];break;case"maxw":g.maxwidth=a[1];break;case"maxh":g.maxheight=a[1];break;case"minw":g.minwidth=a[1];break;case"minh":g.minheight=a[1]}if(void 0!==g.xy)for(t in g.xy=g.xy.split(";"),g.xy)if(g.xy.hasOwnProperty(t))switch((a=g.xy[t].split(":"))[0]){case"x":g.x=a[1].replace("px","");break;case"y":g.y=a[1].replace("px","");break;case"xo":g.hoffset=a[1].replace("px","");break;case"yo":g.voffset=a[1].replace("px","")}if(!g._isnotext&&void 0!==g.text)for(t in g.text=g.text.split(";"),g.text)if(g.text.hasOwnProperty(t))switch((a=g.text[t].split(":"))[0]){case"w":g.whitespace=a[1];break;case"td":g.textDecoration=a[1];break;case"c":g.clear=a[1];break;case"f":g.float=a[1];break;case"s":g.fontsize=a[1];break;case"l":g.lineheight=a[1];break;case"ls":g.letterspacing=a[1];break;case"fw":g.fontweight=a[1];break;case"a":g.textalign=a[1]}if(void 0!==g.flcr)for(t in g.flcr=g.flcr.split(";"),g.flcr)if(g.flcr.hasOwnProperty(t))switch((a=g.flcr[t].split(":"))[0]){case"c":g.clear=a[1];break;case"f":g.float=a[1]}if(void 0!==g.padding)for(t in g.padding=g.padding.split(";"),g.padding)if(g.padding.hasOwnProperty(t))switch((a=g.padding[t].split(":"))[0]){case"t":g.paddingtop=a[1];break;case"b":g.paddingbottom=a[1];break;case"l":g.paddingleft=a[1];break;case"r":g.paddingright=a[1]}if(void 0!==g.margin)for(t in g.margin=g.margin.split(";"),g.margin)if(g.margin.hasOwnProperty(t))switch((a=g.margin[t].split(":"))[0]){case"t":g.margintop=a[1];break;case"b":g.marginbottom=a[1];break;case"l":g.marginleft=a[1];break;case"r":g.marginright=a[1]}if(void 0!==g.spike&&(g.spike=S(g.spike)),void 0!==g.corners)for(t in r=g.corners.split(";"),g.corners={},r)r.hasOwnProperty(t)&&r[t].length>0&&(g.corners[r[t]]=jQuery("<"+r[t]+"></"+r[t]+">"),g.c.append(g.corners[r[t]]));g.textalign=u(g.textalign),g.vbility=i.revToResp(g.vbility,i[o].rle,!0),g.hoffset=i.revToResp(g.hoffset,i[o].rle,0),g.voffset=i.revToResp(g.voffset,i[o].rle,0),g.x=i.revToResp(g.x,i[o].rle,"l"),g.y=i.revToResp(g.y,i[o].rle,"t"),L(h,0,o),c.dataset.initialised=!0}var m="grid"===g.basealign?i[o].width:"carousel"!==i[o].sliderType||g._isstatic?i[o].ulw:i[o].carousel.slide_width,v="grid"===g.basealign?i[o].height:("carousel"!==i[o].sliderType||g._isstatic,i[o].ulh),y=g.x[i[o].level],b=g.y[i[o].level];if(d="slide"===g.basealign?0:Math.max(0,"fullscreen"==i[o].sliderLayout?v/2-i[o].gridheight[i[o].level]*(i[o].keepBPHeight?1:i[o].bh)/2:i[o].autoHeight||null!=i[o].minHeight&&i[o].minHeight>0?i[o].conh/2-i[o].gridheight[i[o].level]*i[o].bh/2:d),l="slide"===g.basealign?0:Math.max(0,l),"slide"!==g.basealign&&"carousel"===i[o].sliderType&&g._isstatic&&void 0!==i[o].carousel&&void 0!==i[o].carousel.horizontal_align&&(l=Math.max(0,"center"===i[o].carousel.horizontal_align?0+(i[o].ulw-i[o].gridwidth[i[o].level]*i[o].bw)/2:"right"===i[o].carousel.horizontal_align?i[o].ulw-i[o].gridwidth[i[o].level]*i[o].bw:l)),"updateposition"!==e.mode){if(i[o].debugMode&&T(h,l,d,g),0==g.vbility[i[o].levelForced]||"f"==g.vbility[i[o].levelForced]||m<i[o].hideLayerAtLimit&&"on"==g.layeronlimit||m<i[o].hideAllLayerAtLimit?g.p[0].classList.add("rs-layer-hidden"):g.p[0].classList.remove("rs-layer-hidden"),g.poster=null==g.poster&&void 0!==g.thumbimage?g.thumbimage:g.poster,"image"===g.layertype)if("cover-proportional"===g.img.data("c")){g.img[0].dataset.owidth=void 0===g.img[0].dataset.owidth?g.img[0].width:g.img[0].dataset.owidth,g.img[0].dataset.oheight=void 0===g.img[0].dataset.oheight?g.img[0].height:g.img[0].dataset.oheight;var _=g.img[0].dataset.owidth/g.img[0].dataset.oheight,x=m/v;_>x&&_<=1||_<x&&_>1?punchgs.TweenMax.set(g.img,{width:"100%",height:"auto",left:"c"===y||"center"===y?"50%":"left"===y||"l"===y?"0":"auto",right:"r"===y||"right"===y?"0":"auto",top:"c"===b||"center"===b?"50%":"top"===b||"t"===b?"0":"auto",bottom:"b"===b||"bottom"===b?"0":"auto",x:"c"===y||"center"===y?"-50%":"0",y:"c"===b||"center"===y?"-50%":"0",position:"absolute"}):punchgs.TweenMax.set(g.img,{height:"100%",width:"auto",left:"c"===y||"center"===y?"50%":"left"===y||"l"===y?"0":"auto",right:"r"===y||"right"===y?"0":"auto",top:"c"===b||"center"===b?"50%":"top"===b||"t"===b?"0":"auto",bottom:"b"===b||"bottom"===b?"0":"auto",x:"c"===y||"center"===y?"-50%":"0",y:"c"===b||"center"===y?"-50%":"0",position:"absolute"})}else{var k="auto"!==g.width[i[o].level]||isNaN(g.width[i[o].level])&&g.width[i[o].level].indexOf("%")>=0?"100%":"auto",I="auto"!==g.height[i[o].level]||isNaN(g.height[i[o].level])&&g.height[i[o].level].indexOf("%")>=0?"100%":"auto";punchgs.TweenMax.set(g.img,{width:k,height:I})}else if("video"===g.layertype){i.manageVideoLayer&&!g.videoLayerManaged&&i.manageVideoLayer(h,o),"rebuild"!==e.mode&&i.resetVideo&&i.resetVideo(h,o,e.mode),null!=g.aspectratio&&g.aspectratio.split(":").length>1&&(1==g.bgvideo||1==g.forcecover)&&i.prepareCoveredVideo(o,h),g.media=void 0===g.media?g.deepiframe.length>0?jQuery(g.deepiframe[0]):jQuery(g.deepmedia[0]):g.media,g.html5vid=void 0===g.html5vid?!(g.deepiframe.length>0):g.html5vid;var M=h[0].className.indexOf("coverscreenvideo")>=0;g.media.css({display:"block"});var O=g.width[i[o].level],P=g.height[i[o].level];O="auto"===O?O:!jQuery.isNumeric(O)&&O.indexOf("%")>0?g._incolumn||g._ingroup?"100%":"grid"===g.basealign?i[o].gridwidth[i[o].level]*i[o].bw:m:"off"!==g.rsp_bd?parseFloat(O)*i[o].bw+"px":parseFloat(O)+"px",P="auto"===P?P:!jQuery.isNumeric(P)&&P.indexOf("%")>0?"grid"===g.basealign?i[o].gridheight[i[o].level]*i[o].bw:v:"off"!==g.rsp_bd?parseFloat(P)*i[o].bh+"px":parseFloat(P)+"px";var C=R(h,o);if(g._incolumn&&"100%"===O&&"auto"===P&&void 0!==g.ytid){g.vd=void 0===g.vd?i[o].videos[h[0].id].ratio.split(":").length>1?i[o].videos[h[0].id].ratio.split(":")[0]/i[o].videos[h[0].id].ratio.split(":")[1]:1:g.vd;var j=h.width()/g.vd;punchgs.TweenLite.set(h,{height:j+"px"}),g.heightSetByVideo=!0}else-1!=h[0].className.indexOf("rs-fsv")||M?(l=0,d=0,g.x=i.revToResp(0,i[o].rle,0),g.y=i.revToResp(0,i[o].rle,0),h.css({width:m,height:i[o].autoHeight?i[o].conh:v})):punchgs.TweenMax.set(h,{paddingTop:Math.round(C.paddingTop*i[o].bh)+"px",paddingBottom:Math.round(C.paddingBottom*i[o].bh)+"px",paddingLeft:Math.round(C.paddingLeft*i[o].bw)+"px",paddingRight:Math.round(C.paddingRight*i[o].bw)+"px",marginTop:C.marginTop*i[o].bh+"px",marginBottom:C.marginBottom*i[o].bh+"px",marginLeft:C.marginLeft*i[o].bw+"px",marginRight:C.marginRight*i[o].bw+"px",borderTopWidth:Math.round(C.borderTopWidth*i[o].bh)+"px",borderBottomWidth:Math.round(C.borderBottomWidth*i[o].bh)+"px",borderLeftWidth:Math.round(C.borderLeftWidth*i[o].bw)+"px",borderRightWidth:Math.round(C.borderRightWidth*i[o].bw)+"px",width:O,height:P}),(0==g.html5vid&&!M||1!=g.forcecover&&!h.hasClass("rs-fsv")&&!M)&&(g.media.width(O),g.media.height(P)),g._ingroup&&null!=O&&!jQuery.isNumeric(O)&&O.indexOf("%")>0&&punchgs.TweenMax.set([g.lp,g.p,g.m],{minWidth:O})}g._slidelink||z(h,o,0,g.rsp_bd),"on"===g.rsp_ch&&"row"!==g.type&&"column"!==g.type&&"group"!==g.type&&h.find("*").each(function(){var e=jQuery(this);null==this.dataset||this.dataset.stylerecorder||L(e,"rekursive",o),z(e,o,"rekursive",g.rsp_bd)})}if("preset"!==e.mode){if(g.eow=h.outerWidth(!0),g.eoh=h.outerHeight(!0),("text"===g.type||"button"===g.type)&&void 0!==g.corners){for(r in g.corners)if(g.corners.hasOwnProperty(r)){g.corners[r].css("borderWidth",g.eoh+"px");var A="rs-fcrt"===r||"rs-fcr"===r;g.corners[r].css("border"+(A?"Right":"Left"),"0px solid transparent"),g.corners[r].css("border"+("rs-fcrt"==r||"rs-bcr"==r?"Bottom":"Top")+"Color",g.bgcol)}g.eow=h.outerWidth(!0)}0==g.eow&&0==g.eoh&&(g.eow=i[o].ulw,g.eoh=i[o].ulh);var Q="on"===g.rsp_o?parseInt(g.voffset[i[o].level],0)*i[o].bw:parseInt(g.voffset[i[o].level],0),H="on"===g.rsp_o?parseInt(g.hoffset[i[o].level],0)*i[o].bw:parseInt(g.hoffset[i[o].level],0),N="grid"===g.basealign?i[o].gridwidth[i[o].level]*i[o].bw:m,D="grid"===g.basealign?i[o].gridheight[i[o].level]*(i[o].keepBPHeight?1:i[o].bh):v;(1==i[o].gridEQModule||void 0!==g._lig&&"row"!==g.type&&"column"!==g.type&&"group"!==g.type)&&(N=void 0!==g._lig?g._lig.width():i[o].ulw,D=void 0!==g._lig?g._lig.height():i[o].ulh,l=0,d=0),y="c"===y||"m"===y||"center"===y||"middle"===y?N/2-g.eow/2+H:"l"===y||"left"===y?H:"r"===y||"right"===y?N-g.eow-H:"off"!==g.rsp_o?y*i[o].bw:y,b="m"===b||"c"===b||"center"===b||"middle"===b?D/2-g.eoh/2+Q:"t"===b||"top"==b?Q:"b"===b||"bottom"==b?D-g.eoh-Q:"off"!==g.rsp_o?b*i[o].bw:b,y=g._slidelink?0:i[o].rtl&&"100%"!==g.width[i[o].level]?y+g.eow:y,g.calcx=parseInt(y,0)+l,g.calcy=parseInt(b,0)+d,"row"!==g.type&&"column"!==g.type?punchgs.TweenMax.set(g.p,{zIndex:g.zindex,top:g.calcy,left:g.calcx,overwrite:"auto"}):"row"!==g.type?punchgs.TweenMax.set(g.p,{zIndex:g.zindex,width:g.columnwidth,top:0,left:0,overwrite:"auto"}):"row"===g.type&&(punchgs.TweenMax.set(g.p,{zIndex:g.zindex,width:"grid"===g.basealign?N+"px":"100%",top:0,left:l,overwrite:"auto"}),g.cbreak<=i[o].level?h[0].classList.add("rev_break_columns"):h[0].classList.remove("rev_break_columns")),void 0!==g.blendmode&&punchgs.TweenMax.set(g.p,{mixBlendMode:g.blendmode}),void 0!==g.frame_loop&&punchgs.TweenMax.set(g.lp,{minWidth:g.eow,minHeight:g.eoh}),g._ingroup&&(void 0!==g._groupw&&!jQuery.isNumeric(g._groupw)&&g._groupw.indexOf("%")>0&&punchgs.TweenMax.set([g.lp,g.p,g.m],{minWidth:g._groupw}),void 0!==g._grouph&&!jQuery.isNumeric(g._grouph)&&g._grouph.indexOf("%")>0&&punchgs.TweenMax.set([g.lp,g.p,g.m],{minHeight:g._grouph}))}}},animcompleted:function(e,t){if(void 0!==i[t].videos){var a=i[t].videos[e[0].id];null!=a&&null!=a.type&&"none"!=a.type&&(1==a.aplay||"true"==a.aplay||"on"==a.aplay||"1sttime"==a.aplay?(("carousel"!==i[t].sliderType||!i[t].carousel.showLayersAllTime&&e.closest("rs-slide").index()==i[t].pr_active_key)&&i.playVideo(e,t),i.toggleState(e.data("videotoggledby")),(a.aplay1||"1sttime"==a.aplay)&&(a.aplay1=!1,a.aplay=!1)):("no1sttime"==a.aplay&&(a.datasetautoplay="on"),i.unToggleState(e.data("videotoggledby"))))}},handleStaticLayers:function(e,t){var a=0,r=i[t].realslideamount+1;if(void 0!==e[0].dataset.onslides){var o=e[0].dataset.onslides.split(";");for(var s in o)if(o.hasOwnProperty(s)){var n=o[s].split(":");"s"===n[0]&&(a=parseInt(n[1],0)),"e"===n[0]&&(r=parseInt(n[1],0))}}a=Math.max(0,a),r=Math.min(i[t].realslideamount,r<0?i[t].realslideamount:r),r=1!==a&&0!==a||r!==i[t].realslideamount?r:i[t].realslideamount+1,e.data("startslide",a),e.data("endslide",r),e[0].dataset.startslide=a,e[0].dataset.endslide=r},animateTheLayers:function(e){if(void 0===e.slide)return!1;var t=e.id;if(void 0===i[t].slides[e.slide])return!1;var a=i[t].slides[e.slide].dataset.key,r=i[t].pr_processing_key||i[t].pr_active_key||0;if(i[t].layers=i[t].layers||{},i[t].layers[a]=void 0===i[t].layers[a]?x(jQuery(i[t].slides[e.slide]),"rs-layer"):i[t].layers[a],i[t].layers.static=void 0===i[t].layers.static?x(jQuery(i[t].c.find("rs-static-layers")),"rs-layer"):i[t].layers.static,i[t].sbas[a]=void 0===i[t].sbas[a]?x(jQuery(i[t].slides[e.slide]),"rs-sba"):i[t].sbas[a],i.updateDimensions(t),i[t].debugMode&&k(t),void 0!==a&&i[t].layers[a]&&i.initLayer({id:t,skey:a,mode:e.mode,animcompleted:"rebuild"===e.mode&&"carousel"===i[t].sliderType&&i[t].carousel.showLayersAllTime}),i[t].layers.static&&i.initLayer({id:t,skey:"static",mode:e.mode,animcompleted:"rebuild"===e.mode&&"carousel"===i[t].sliderType&&i[t].carousel.showLayersAllTime}),i[t].dimensionReCheck||(setTimeout(function(){void 0!==a&&i[t].layers[a]&&i.checkLayerDimensions({id:t,skey:a})&&i.initLayer({id:t,skey:a,mode:"updateposition"}),i[t].layers.static&&i.checkLayerDimensions({id:t,skey:"static"})&&i.initLayer({id:t,skey:"static",mode:"updateposition"})},200),i[t].dimensionReCheck=!0),(void 0!==i[t].rowzones&&i[t].rowzones.length>0&&r>=0&&i[t].rowzones[Math.min(r,i[t].rowzones.length)].length>0||void 0!==i[t].srowzones&&i[t].srowzones.length>0||void 0!==i[t].smiddleZones&&i[t].smiddleZones.length>0)&&(i.setSize(t),i.updateDimensions(t),i.initLayer({id:t,skey:a,mode:"updateposition"}),i.initLayer({id:t,skey:"static",mode:"updateposition"})),void 0!==a&&i[t].layers[a])for(var o in i[t].layers[a])i[t].layers[a].hasOwnProperty(o)&&i.renderLayerAnimation({layer:jQuery(i[t].layers[a][o]),id:t,mode:e.mode});if(i[t].layers.static)for(var o in i[t].layers.static)i[t].layers.static.hasOwnProperty(o)&&i.renderLayerAnimation({layer:jQuery(i[t].layers.static[o]),id:t,mode:e.mode});null!=i[t].mtl&&setTimeout(function(){null!=i[t].mtl&&i[t].mtl.resume()},30)},removeTheLayers:function(e,t,a){var r=e[0].dataset.key;if(i[t].sloops&&i[t].sloops[r]&&i[t].sloops[r].tl&&i[t].sloops[r].tl.stop(),"carousel"===i[t].sliderType&&i[t].carousel.showLayersAllTime);else{for(var o in i[t].layers[r])i[t].layers[r].hasOwnProperty(o)&&i.renderLayerAnimation({layer:jQuery(i[t].layers[r][o]),frame:"frame_999",mode:"continue",id:t,allforce:a});for(var o in i[t].layers.static)i[t].layers.static.hasOwnProperty(o)&&i.renderLayerAnimation({layer:jQuery(i[t].layers.static[o]),frame:"frame_999",mode:"continue",id:t,allforce:a})}},renderLayerAnimation:function(e){var d=e.layer,c=e.id,p=i[c].level,u=i[c]._L[d[0].id],f=void 0!==u.timeline?u.timeline.time():void 0,b=!1,w=!1,_="none";if("preset"!==e.mode||!0===u.frames.frame_1.timeline.waitoncall||void 0!==u.scrollBasedOffset||!0===u.forceRender){if("trigger"==e.mode&&(u.triggeredFrame=e.frame),u._isstatic){var x="carousel"===i[c].sliderType&&void 0!==i[c].carousel.oldfocused?i[c].carousel.oldfocused:void 0===i[c].pr_lastshown_key?1:parseInt(i[c].pr_lastshown_key,0)+1,k="carousel"===i[c].sliderType?void 0===i[c].pr_next_key?0===x?1:x:parseInt(i[c].pr_next_key,0)+1:void 0===i[c].pr_processing_key?x:parseInt(i[c].pr_processing_key,0)+1,T=x>=u.startslide&&x<=u.endslide,L=k>=u.startslide&&k<=u.endslide;if(_=x===u.endslide&&"continue"===e.mode||("continue"===e.mode||x===u.endslide)&&"none",!0===e.allforce||!0===_);else{if("preset"===e.mode&&(u.elementHovered||!L))return;if("rebuild"===e.mode&&!T&&!L)return;if("start"===e.mode&&L&&"frame_1"===u.lastRequestedMainFrame)return;if("continue"===e.mode&&"frame_999"===e.frame&&L)return;if("start"===e.mode&&!L)return}}else"start"===e.mode&&"keep"!==u.triggercache&&(u.triggeredFrame=void 0);for(var R in"start"===e.mode&&void 0!==u.layerLoop&&(u.layerLoop.count=0),"start"===e.mode&&(e.frame=void 0===u.triggeredFrame?0:u.triggeredFrame),"continue"!==e.mode&&"trigger"!==e.mode&&void 0!==u.timeline&&u.timeline.pause(0),"continue"!==e.mode&&"trigger"!==e.mode||void 0===u.timeline||u.timeline.pause(),u.timeline=new punchgs.TimelineMax({paused:!0}),"text"!==u.type&&"button"!==u.type||void 0!==u.splitText&&(void 0!==u.splitTextFix||"start"!==e.mode&&"preset"!==e.mode)||(h({layer:d,id:c}),"start"===e.mode&&(u.splitTextFix=!0)),u.ford)if(u.ford.hasOwnProperty(R)){var I=u.ford[R],z=!1;if("frame_0"!==I&&"frame_hover"!==I&&"loop"!==I){if("frame_999"===I&&!u.frames[I].timeline.waitoncall&&u.frames[I].timeline.start>=i[c].duration&&(u.frames[I].timeline.waitoncall=!0),"start"===e.mode&&"keep"!==u.triggercache&&(u.frames[I].timeline.callstate=u.frames[I].timeline.waitoncall?"waiting":""),"trigger"===e.mode&&u.frames[I].timeline.waitoncall&&(I===e.frame?(u.frames[I].timeline.triggered=!0,u.frames[I].timeline.callstate="called"):u.frames[I].timeline.triggered=!1),"rebuild"===e.mode||u.frames[I].timeline.triggered||(u.frames[I].timeline.callstate=u.frames[I].timeline.waitoncall?"waiting":""),!1!==e.fastforward){if(("continue"===e.mode||"trigger"===e.mode)&&!1===w&&I!==e.frame)continue;if(("rebuild"===e.mode||"preset"===e.mode)&&!1===w&&void 0!==u.triggeredFrame&&I!==u.triggeredFrame)continue;(I===e.frame||"rebuild"===e.mode&&I===u.triggeredFrame)&&(w=!0)}else I===e.frame&&(w=!0);if(I!==e.frame&&u.frames[I].timeline.waitoncall&&"called"!==u.frames[I].timeline.callstate&&(b=!0),I!==e.frame&&w&&(b=!0===b&&u.frames[I].timeline.waitoncall?"skiprest":!0!==b&&b),b&&"waiting"===u.frames[I].timeline.callstate&&"preset"===e.mode&&1!=u.firstTimeRendered)z=!0,u.firstTimeRendered=!0;else if("skiprest"===b||"called"!==u.frames[I].timeline.callstate&&b&&e.toframe!==I)continue;if("frame_999"!==I||!1!==_||"continue"!==e.mode&&"start"!==e.mode&&"rebuild"!==e.mode){u.fff="frame_1"===I&&("trigger"!==e.mode||"frame_999"===u.currentframe||"frame_0"===u.currentframe||void 0===u.currentframe),z||(u.frames[I].timeline.callstate="called",u.currentframe=I);var S=u.frames[I],M=u.fff?u.frames.frame_0:void 0,O=new punchgs.TimelineMax,P=new punchgs.TimelineMax,C=u.c,j=void 0!==S.sfx&&g(S.sfx.effect,u.m,S.timeline.ease),A=S.timeline.speed/1e3,Q=0,H=m({id:c,frame:S,layer:d,ease:S.timeline.ease,splitAmount:C.length,target:I,forcefilter:void 0!==u.frames.frame_hover&&void 0!==u.frames.frame_hover.filter}),N=u.fff?m({id:c,frame:M,layer:d,ease:S.timeline.ease,splitAmount:C.length,target:"frame_0"}):void 0,D=void 0!==S.mask?m({id:c,frame:{transform:{x:S.mask.x,y:S.mask.y}},layer:d,ease:H.ease,target:"mask"}):void 0,W=void 0!==D&&u.fff?m({id:c,frame:{transform:{x:M.mask.x,y:M.mask.y}},layer:d,ease:H.ease,target:"frommask"}):void 0,B=H.ease;"block"===j.type&&(j.ft[0].background=S.sfx.fxc,O.add(punchgs.TweenMax.fromTo(j.bmask_in,A/2,j.ft[0],j.ft[1],0)),O.add(punchgs.TweenMax.fromTo(j.bmask_in,A/2,j.ft[1],j.t,A/2)),"frame_0"===I||"frame_1"===I?N.opacity=0:"frame_999"===I&&O.add(P.staggerFromTo(C,.05,{autoAlpha:1},{autoAlpha:0,delay:A/2},0),.001)),void 0!==S.color?H.color=S.color:void 0!==u.color&&"npc"!==u.color[p]&&(H.color=u.color[p]),void 0!==M&&void 0!==M.color?N.color=M.color:void 0!==M&&void 0!==u.color&&"npc"!==u.color[p]&&(N.color=u.color[p]),void 0!==S.bgcolor?S.bgcolor.indexOf("gradient")>=0?H.background=S.bgcolor:H.backgroundColor=S.bgcolor:!0===u.bgcolinuse&&(u.bgcol.indexOf("gradient")>=0?H.background=u.bgcol:H.backgroundColor=u.bgcol),void 0!==M&&(void 0!==M.bgcolor?M.bgcolor.indexOf("gradient")>=0?N.background=M.bgcolor:N.backgroundColor=M.bgcolor:!0===u.bgcolinuse&&(u.bgcol.indexOf("gradient")>=0?N.background=u.bgcol:N.backgroundColor=u.bgcol));var Y=0;if(void 0!==u.splitText&&!1!==u.splitText)for(var F in t)if(void 0===S[t[F]]||u.quickRendering)u.fff?O.add(P.fromTo(u.splitText[t[F]],A,{immediateRender:!1,color:N.color},{color:H.color},0),0):O.add(P.to(u.splitText[t[F]],A,{color:H.color},0),0);else{var V=y(u.splitText[t[F]],S[t[F]].dir),X=m({id:c,frame:S,source:t[F],ease:B,layer:d,splitAmount:V.length,target:I+"_"+t[F]}),E=u.fff?m({id:c,frame:M,ease:X.ease,source:t[F],layer:d,splitAmount:V.length,target:"frame_0_"+t[F]}):void 0;Q=void 0===S[t[F]].delay?.05:S[t[F]].delay/100,X.color=H.color,void 0!==N&&(E.color=N.color);var Z=v(jQuery.extend(!0,{},X)),q=u.fff?v(jQuery.extend(!0,{},E)):void 0;delete Z.dir,Z.data={splitted:!0},void 0!==q&&delete q.dir,u.fff?O.add(P.staggerFromTo(V,A,q,Z,u.frames[I].split?Q:0,0),0):O.add(P.staggerTo(V,A,Z,u.frames[I].split?Q:0,0),0),Y=V.length>Y?V.length:Y}A+=u.frames[I].split?Q*Y:0,u.pxundermask||void 0!==D&&(void 0!==M&&"hidden"===M.mask.overflow||"hidden"===S.mask.overflow)?(O.add(punchgs.TweenMax.to(u.m,.001,{overflow:"hidden"}),0),"column"===u.type&&O.add(punchgs.TweenMax.to(u.cbgmask,.001,{overflow:"hidden"}),0),u.btrans&&(W&&(W.rotationX=u.btrans.rX,W.rotationY=u.btrans.rY,W.rotationZ=u.btrans.rZ,W.opacity=u.btrans.o),D.rotationX=u.btrans.rX,D.rotationY=u.btrans.rY,D.rotationZ=u.btrans.rZ,D.opacity=u.btrans.o),u.fff?O.add(punchgs.TweenMax.fromTo([u.m,u.cbgmask],A,jQuery.extend(!0,{},W),jQuery.extend(!0,{},D)),.001):O.add(punchgs.TweenMax.to([u.m,u.cbgmask],A,jQuery.extend(!0,{},D)),.001)):void 0!==u.btrans?O.add(punchgs.TweenMax.to(u.m,.001,{x:0,y:0,filter:"none",opacity:u.btrans.o,rotationX:u.btrans.rX,rotationY:u.btrans.rY,rotationZ:u.btrans.rZ,overflow:"visible"}),0):O.add(punchgs.TweenMax.to(u.m,.001,{clearProps:"transform",overflow:"visible"}),0),H.force3D="auto",u.fff?(H.visibility="visible",void 0!==u.cbg&&O.fromTo(u.cbg,A,N,H,0),i[c].BUG_safari_clipPath&&(N.clipPath||H.clipPath||u.spike)&&(N.z&&parseInt(N.z,10)||(N.z=-1e-4),H.z&&parseInt(H.z,10)||(H.z=0)),void 0!==u.cbg&&"column"===u.type?O.fromTo(C,A,a(N),a(H),0):O.fromTo(C,A,N,H,0)):(void 0!==u.cbg&&O.to(u.cbg,A,H,0),!i[c].BUG_safari_clipPath||!H.clipPath&&!u.spike||H.z&&parseInt(H.z,10)||(H.z=0-.01*Math.random()),void 0!==u.cbg&&"column"===u.type?O.to(C,A,a(H),0):O.to(C,A,H,0)),void 0!==B&&"object"!=typeof B&&B.indexOf("SFXBounce")>=0&&O.to(C,A,{scaleY:.5,scaleX:1.3,ease:H.ease+"-squash",transformOrigin:"bottom"},1e-4);var U="trigger"!==e.mode&&(!0!==b&&"skiprest"!==b||"rebuild"!==e.mode)||e.frame===I||void 0===S.timeline.start||!jQuery.isNumeric(S.timeline.start)?"+=0"===S.timeline.start||void 0===S.timeline.start?"+=0.005":parseInt(S.timeline.start,0)/1e3:"+="+parseInt(S.timeline.startRelative,0)/1e3;u.timeline.addLabel(I,U),u.timeline.add(O,U),u.timeline.addLabel(I+"_end","+=0.01"),O.eventCallback("onStart",o,[{id:c,frame:I,L:d}]),"true"==u.animationonscroll||1==u.animationonscroll?(O.eventCallback("onUpdate",s,[{id:c,frame:I,L:d}]),O.smoothChildTiming=!0):O.eventCallback("onUpdate",s,[{id:c,frame:I,L:d}]),O.eventCallback("onComplete",n,[{id:c,frame:I,L:d}])}}}if(void 0!==u.frames.loop){var G=u.frames.loop.frame_0,J=u.frames.loop.frame_999,K=new punchgs.TimelineMax({}),$=new punchgs.TimelineMax({repeat:-1,yoyo:u.frames.loop.timeline.yoyo_move}),ee=new punchgs.TimelineMax({repeat:-1,yoyo:u.frames.loop.timeline.yoyo_rotate}),te=new punchgs.TimelineMax({repeat:-1,yoyo:u.frames.loop.timeline.yoyo_scale}),ie=new punchgs.TimelineMax({repeat:-1,yoyo:u.frames.loop.timeline.yoyo_filter}),ae=parseInt(u.frames.loop.timeline.speed,0)/1e3,re=parseInt(u.frames.loop.timeline.start)/1e3||0,oe=re+.2;if(K.add($,0),K.add(ee,0),K.add(te,0),K.add(ie,0),J.originX=G.originX,J.originY=G.originY,J.originZ=G.originZ,u.frames.loop.timeline.curved){var se=parseInt(u.frames.loop.timeline.radiusAngle,0)||0,ne=[{x:(G.x-G.xr)*i[c].bw,y:0,z:(G.z-G.zr)*i[c].bw},{x:0,y:(G.y+G.yr)*i[c].bw,z:0},{x:(J.x+J.xr)*i[c].bw,y:0,z:(J.z+J.zr)*i[c].bw},{x:0,y:(J.y-J.yr)*i[c].bw,z:0}],le={type:"thru",curviness:u.frames.loop.timeline.curviness,values:[],autoRotate:u.frames.loop.timeline.autoRotate};for(var de in ne)ne.hasOwnProperty(de)&&(le.values[de]=ne[se],se=++se==ne.length?0:se);u.timeline.fromTo(u.lp,.2,{"-webkit-filter":"blur("+(G.blur||0)+"px) grayscale("+(G.grayscale||0)+"%) brightness("+(G.brightness||100)+"%)",filter:"blur("+(G.blur||0)+"px) grayscale("+(G.grayscale||0)+"%) brightness("+(G.brightness||100)+"%)",x:0,y:0,z:0,minWidth:void 0===u.eow?0:u.eow,minHeight:void 0===u.eoh?0:u.eoh,scaleX:1,scaleY:1,skew:0,rotationX:0,rotationY:0,rotationZ:0,transformPerspective:600,transformOrigin:J.originX+" "+J.originY+" "+J.originZ,opacity:1},{x:le.values[3].x,y:le.values[3].y,z:le.values[3].z,scaleX:G.scaleX,skewX:G.skewX,skewY:G.skewY,scaleY:G.scaleY,rotationX:G.rotationX,rotationY:G.rotationY,rotationZ:G.rotationZ,"-webkit-filter":"blur("+parseInt(G.blur,0)+"px) grayscale("+parseInt(G.grayscale,0)+"%) brightness("+parseInt(G.brightness,0)+"%)",filter:"blur("+parseInt(G.blur,0)+"px) grayscale("+parseInt(G.grayscale,0)+"%) brightness("+parseInt(G.brightness,0)+"%)",ease:punchgs.Sine.easeInOut,opacity:G.opacity},re),$.to(u.lp,u.frames.loop.timeline.yoyo_move?ae/2:ae,{bezier:le,ease:u.frames.loop.timeline.ease})}else u.timeline.fromTo(u.lp,.2,{"-webkit-filter":"blur("+(G.blur||0)+"px) grayscale("+(G.grayscale||0)+"%) brightness("+(G.brightness||100)+"%)",filter:"blur("+(G.blur||0)+"px) grayscale("+(G.grayscale||0)+"%) brightness("+(G.brightness||100)+"%)",x:0,y:0,z:0,minWidth:void 0===u.eow?0:u.eow,minHeight:void 0===u.eoh?0:u.eoh,scaleX:1,scaleY:1,skew:0,rotationX:0,rotationY:0,rotationZ:0,transformPerspective:600,transformOrigin:J.originX+" "+J.originY+" "+J.originZ,opacity:1},{x:G.x*i[c].bw,y:G.y*i[c].bw,z:G.z*i[c].bw,scaleX:G.scaleX,skewX:G.skewX,skewY:G.skewY,scaleY:G.scaleY,rotationX:G.rotationX,rotationY:G.rotationY,rotationZ:G.rotationZ,ease:punchgs.Sine.easeOut,opacity:G.opacity,"-webkit-filter":"blur("+parseInt(G.blur||0,0)+"px) grayscale("+parseInt(G.grayscale||0,0)+"%) brightness("+parseInt(G.brightness||100,0)+"%)",filter:"blur("+parseInt(G.blur||0,0)+"px) grayscale("+parseInt(G.grayscale||0,0)+"%) brightness("+parseInt(G.brightness||100,0)+"%)"},re),$.to(u.lp,u.frames.loop.timeline.yoyo_move?ae/2:ae,{x:J.x*i[c].bw,y:J.y*i[c].bw,z:J.z*i[c].bw,ease:u.frames.loop.timeline.ease});ee.to(u.lp,u.frames.loop.timeline.yoyo_rotate?ae/2:ae,{rotationX:J.rotationX,rotationY:J.rotationY,rotationZ:J.rotationZ,ease:u.frames.loop.timeline.ease}),te.to(u.lp,u.frames.loop.timeline.yoyo_scale?ae/2:ae,{scaleX:J.scaleX,scaleY:J.scaleY,skewX:J.skewX,skewY:J.skewY,ease:u.frames.loop.timeline.ease});var ce={opacity:J.opacity||1,ease:u.frames.loop.timeline.ease,"-webkit-filter":"blur("+(J.blur||0)+"px) grayscale("+(J.grayscale||0)+"%) brightness("+(J.brightness||100)+"%)",filter:"blur("+(J.blur||0)+"px) grayscale("+(J.grayscale||0)+"%) brightness("+(J.brightness||100)+"%)"};ie.to(u.lp,u.frames.loop.timeline.yoyo_filter?ae/2:ae,ce),u.timeline.add(K,oe)}if(void 0!==u.frames.frame_hover&&("start"===e.mode||void 0===u.hoverframeadded)){u.hoverframeadded=!0;var pe=u.frames.frame_hover.timeline.speed/1e3;pe=0===pe?1e-5:pe,u.hoverlistener||(u.hoverlistener=!0,jQuery(document).on("mouseenter mousemove",("column"===u.type?"#"+u.cbg[0].id+",":"")+"#"+u.c[0].id,function(e){if(("mousemove"!==e.type||!0!==u.ignoremousemove)&&u.readyForHover){if(u.ignoremousemove=!0,u.elementHovered=!0,u.hovertimeline||(u.hovertimeline=new punchgs.TimelineMax),u.hovertimeline.to([u.m,u.cbgmask],pe,{overflow:u.frames.frame_hover.mask?"hidden":"visible"},0),"column"===u.type&&u.hovertimeline.to(u.cbg,pe,jQuery.extend(!0,{},l(u.frames.frame_hover,u.cbg)),0),u.hovertimeline.pause(),"text"!==u.type&&"button"!==u.type||void 0===u.splitText||!1===u.splitText||u.hovertimeline.to([u.splitText.lines,u.splitText.words,u.splitText.chars],pe,{color:u.frames.frame_hover.color,ease:u.frames.frame_hover.transform.ease},0),"column"===u.type?u.hovertimeline.to(u.c,pe,a(jQuery.extend(!0,{},l(u.frames.frame_hover,u.c))),0):u.hovertimeline.to(u.c,pe,jQuery.extend(!0,{},l(u.frames.frame_hover,u.c)),0),"svg"===u.type){u.svgHTemp=jQuery.extend(!0,{},u.svgH);var t=Array.isArray(u.svgHTemp.fill)?u.svgHTemp.fill[i[c].level]:u.svgHTemp.fill;u.svgHTemp.fill=t,u.hovertimeline.to(u.svg,pe,u.svgHTemp,0),u.hovertimeline.to(u.svgPath,pe,{fill:t},0)}u.hovertimeline.play()}}),jQuery(document).on("mouseleave",("column"===u.type?"#"+u.cbg[0].id+",":"")+"#"+u.c[0].id,function(){u.elementHovered=!1,u.readyForHover&&void 0!==u.hovertimeline&&(u.hovertimeline.reverse(),u.hovertimeline.eventCallback("onReverseComplete",r,[{id:c,L:d}]))}))}if(z||(u.lastRequestedMainFrame="start"===e.mode?"frame_1":"continue"===e.mode?e.frame:u.lastRequestedMainFrame),void 0!==e.totime?u.tSTART=e.totime:void 0!==f&&void 0===e.frame?u.tSTART=f:void 0!==e.frame?u.tSTART=e.frame:u.tSTART=0,"frame_999"!==u.tSTART&&"frame_999"!==u.triggeredFrame||!u.leftstage&&void 0!==u.startedAnimOnce){if("true"!=u.animationonscroll&&1!=u.animationonscroll?u.timeline.play(u.tSTART):u.timeline.time(u.tSTART),jQuery.inArray(u.type,["group","row","column"])>=0&&!0===e.updateChildren){if(void 0===u.childrenJS)for(var F in u.childrenJS={},i[c]._L)void 0!==i[c]._L[F]._lig&&void 0!==i[c]._L[F]._lig[0]&&i[c]._L[F]._lig[0].id===d[0].id&&i[c]._L[F]._lig[0].id!==i[c]._L[F].c[0].id&&(u.childrenJS[i[c]._L[F].c[0].id]=i[c]._L[F].c);var ue=void 0===e.totime?void 0!==u.frames[e.frame].timeline.startAbsolute?parseInt(u.frames[e.frame].timeline.startAbsolute,0)/1e3:void 0!==u.frames[e.frame].timeline.start?jQuery.isNumeric(u.frames[e.frame].timeline.start)?parseInt(u.frames[e.frame].timeline.start,0)/1e3:e.totime:.001:e.totime;for(var F in u.childrenJS)u.childrenJS.hasOwnProperty(F)&&i.renderLayerAnimation({layer:u.childrenJS[F],fastforward:!1,id:c,mode:"continue",updateChildren:!0,totime:ue})}}else;}}});var a=function(e){var t=jQuery.extend(!0,{},e);return delete t.backgroundColor,delete t.background,delete t.backgroundImage,delete t.borderSize,delete t.borderStyle,t},r=function(e){i[e.id]._L[e.L[0].id].textDecoration&&punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].c,{textDecoration:i[e.id]._L[e.L[0].id].textDecoration})},o=function(e){i[e.id].BUG_safari_clipPath&&e.L[0].classList.remove("rs-pelock"),(i[e.id]._L[e.L[0].id]._ingroup||i[e.id]._L[e.L[0].id]._incolumn||i[e.id]._L[e.L[0].id]._inrow)&&void 0!==i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid]&&void 0!==i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timeline&&(i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timeline.isActive()||void 0===i[e.id]._L[e.L[0].id]||void 0===i[e.id]._L[e.L[0].id].frames[i[e.id]._L[e.L[0].id].timeline.currentLabel()]||(null==i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timezone||i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timezone.to<=parseInt(i[e.id]._L[e.L[0].id].frames[i[e.id]._L[e.L[0].id].timeline.currentLabel()].timeline.start,0))&&!0!==i[e.id]._L[e.L[0].id].animOnScrollForceDisable&&i[e.id]._L[e.L[0].id].timeline.pause());var t=i[e.id]._L[e.L[0].id],a=t.hovertimeline;a&&a.time()>0&&(a.pause(),a.time(0),a.kill(),delete t.hovertimeline),i[e.id]._L[e.L[0].id].p[0].classList.remove("rs-forcehidden");var r={};i[e.id]._L[e.L[0].id].ignoremousemove=!1,i[e.id]._L[e.L[0].id].leftstage=!1,i[e.id]._L[e.L[0].id].readyForHover=!1,r.layer=e.L,void 0!==i[e.id]._L[e.L[0].id].layerLoop&&i[e.id]._L[e.L[0].id].layerLoop.from===e.frame&&i[e.id]._L[e.L[0].id].layerLoop.count++,"frame_999"!==e.frame&&(i[e.id]._L[e.L[0].id].startedAnimOnce=!0,punchgs.TweenMax.set([i[e.id]._L[e.L[0].id].c,i[e.id]._L[e.L[0].id].l,i[e.id]._L[e.L[0].id].m],{visibility:"visible"}),punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].p,{pointerEvents:i[e.id]._L[e.L[0].id].noPevents?"none":"auto",visibility:"visible"})),r.eventtype="frame_0"===e.frame||"frame_1"===e.frame?"enterstage":"frame_999"===e.frame?"leavestage":"framestarted",r.layertype=i[e.id]._L[e.L[0].id].type,r.frame_index=e.frame,r.layersettings=i[e.id]._L[e.L[0].id],i[e.id].c.trigger("revolution.layeraction",[r]),"enterstage"===r.eventtype&&i.toggleState(i[e.id]._L[e.L[0].id].layertoggledby),"frame_1"===e.frame&&i.animcompleted(e.L,e.id)},s=function(e){"frame_999"===e.frame&&(i[e.id]._L[e.L[0].id].leftstage&&i[e.id]._L[e.L[0].id].p[0].classList.remove("rs-forcehidden"),i[e.id]._L[e.L[0].id].leftstage=!1,punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].c,{visibility:"visible"}),punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].p,{pointerEvents:i[e.id]._L[e.L[0].id].noPevents?"none":"auto",visibility:"visible"}))},n=function(e){var t=!0;if("column"===i[e.id]._L[e.L[0].id].type||"row"===i[e.id]._L[e.L[0].id].type||"group"===i[e.id]._L[e.L[0].id].type){var a=i[e.id]._L[e.L[0].id].timeline.currentLabel(),r=jQuery.inArray(a,i[e.id]._L[e.L[0].id].ford);r++,r=i[e.id]._L[e.L[0].id].ford.length>r?i[e.id]._L[e.L[0].id].ford[r]:a,void 0!==i[e.id]._L[e.L[0].id].frames[r]&&void 0!==i[e.id]._L[e.L[0].id].frames[a]&&(i[e.id]._L[e.L[0].id].timezone={from:parseInt(i[e.id]._L[e.L[0].id].frames[a].timeline.startAbsolute,0),to:parseInt(i[e.id]._L[e.L[0].id].frames[r].timeline.startAbsolute,0)})}"frame_999"===e.frame&&(punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].c,{visibility:"hidden"}),punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].p,{pointerEvents:"none",visibility:"hidden"}),t=!1);var o={};o.layer=e.L,o.eventtype="frame_0"===e.frame||"frame_1"===e.frame?"enteredstage":"frame_999"===e.frame?"leftstage":"frameended",i[e.id]._L[e.L[0].id].readyForHover=!0,o.layertype=i[e.id]._L[e.L[0].id].type,o.frame_index=e.frame,o.layersettings=i[e.id]._L[e.L[0].id],i[e.id].c.trigger("revolution.layeraction",[o]),"frame_999"===e.frame&&"leftstage"===o.eventtype&&(i[e.id]._L[e.L[0].id].leftstage=!0,i[e.id]._L[e.L[0].id].p[0].classList.add("rs-forcehidden")),"leftstage"===o.eventtype&&void 0!==i[e.id].videos&&void 0!==i[e.id].videos[e.L[0].id]&&i.stopVideo&&i.stopVideo(e.L,e.id),"column"===i[e.id]._L[e.L[0].id].type&&punchgs.TweenMax.to(i[e.id]._L[e.L[0].id].cbg,.01,{visibility:"visible"}),"leftstage"===o.eventtype&&(i.unToggleState(e.layertoggledby),"video"===i[e.id]._L[e.L[0].id].type&&i.resetVideo&&setTimeout(function(){i.resetVideo(e.L,e.id)},100)),i[e.id].BUG_safari_clipPath&&!t&&e.L[0].classList.add("rs-pelock"),void 0!==i[e.id]._L[e.L[0].id].layerLoop&&i[e.id]._L[e.L[0].id].layerLoop.to===e.frame&&(-1==i[e.id]._L[e.L[0].id].layerLoop.repeat||i[e.id]._L[e.L[0].id].layerLoop.repeat>i[e.id]._L[e.L[0].id].layerLoop.count)&&i.renderLayerAnimation({layer:i[e.id]._L[e.L[0].id].c,frame:i[e.id]._L[e.L[0].id].layerLoop.from,updateChildren:i[e.id]._L[e.L[0].id].layerLoop.children,mode:"continue",fastforward:!0===i[e.id]._L[e.L[0].id].layerLoop.keep,id:e.id})},l=function(e,t){var i=jQuery.extend(!0,{},e.transform);return(i.originX||i.originY||i.originZ)&&(i.transformOrigin=(void 0===i.originX?"50%":i.originX)+" "+(void 0===i.originY?"50%":i.originY)+" "+(void 0===i.originZ?"50%":i.originZ),delete i.originX,delete i.originY,delete i.originZ),void 0!==e&&void 0!==e.filter&&(i["-webkit-filter"]="blur("+(e.filter.blur||0)+"px) grayscale("+(e.filter.grayscale||0)+"%) brightness("+(e.filter.brightness||100)+"%)",i.filter="blur("+(e.filter.blur||0)+"px) grayscale("+(e.filter.grayscale||0)+"%) brightness("+(e.filter.brightness||100)+"%)"),i.color=void 0===i.color?"rgba(255,255,255,1)":i.color,i.force3D="auto",i.backgroundImage&&"string"==typeof i.backgroundImage&&-1!==i.backgroundImage.search("gradient")&&180!==c(t.css("backgroundImage"))&&180===c(i.backgroundImage)&&(i.backgroundImage=d(i.backgroundImage,180)),i},d=function(e,t){var i=(e=e.split("("))[0];return e.shift(),i+"("+t+"deg, "+e.join("(")},c=function(e){if(-1!==e.search("deg,")){var t=e.split("deg,")[0];if(-1!==t.search(/\(/))return parseInt(t.split("(")[1],10)}return 180},p=function(e,t){e=void 0===e?"":e.split(";");var a={fill:i.revToResp("#ffffff",i[t].rle),stroke:"transparent","stroke-width":"0px","stroke-dasharray":"0","stroke-dashoffset":"0"};for(var r in e)if(e.hasOwnProperty(r)){var o=e[r].split(":");switch(o[0]){case"c":a.fill=i.revToResp(o[1],i[t].rle,void 0,"||");break;case"sw":a["stroke-width"]=o[1];break;case"sc":a.stroke=o[1];break;case"so":a["stroke-dashoffset"]=o[1];break;case"sa":a["stroke-dasharray"]=o[1]}}return a},u=function(e){return"c"===e?"center":"l"===e?"left":"r"===e?"right":e},h=function(e){var t=i[e.id]._L[e.layer[0].id],a=!1;if(t.splitText&&!1!==t.splitText&&t.splitText.revert(),"text"===t.type||"button"===t.type){for(var r in t.frames)if(void 0!==t.frames[r].chars||void 0!==t.frames[r].words||void 0!==t.frames[r].lines){a=!0;break}t.splitText=!!a&&new punchgs.SplitText(t.c,{type:"lines,words,chars",wordsClass:"rs_splitted_words",linesClass:"rs_splitted_lines",charsClass:"rs_splitted_chars"})}else t.splitText=!1},g=function(e,t,i){if(void 0!==e&&e.indexOf("block")>=0){var a={};switch(0===t.find(".tp-blockmask_in").length&&(t.append('<div class="tp-blockmask_in"></div>'),t.append('<div class="tp-blockmask_out"></div>')),i=void 0===i?punchgs.Power3.easeInOut:i,a.ft=[{scaleY:1,scaleX:0,transformOrigin:"0% 50%"},{scaleY:1,scaleX:1,ease:i,immediateRender:!1}],a.t={scaleY:1,scaleX:0,transformOrigin:"100% 50%",ease:i,immediateRender:!1},a.bmask_in=t.find(".tp-blockmask_in"),a.bmask_out=t.find(".tp-blockmask_out"),a.type="block",e){case"blocktoleft":case"blockfromright":a.ft[0].transformOrigin="100% 50%",a.t.transformOrigin="0% 50%";break;case"blockfromtop":case"blocktobottom":a.ft=[{scaleX:1,scaleY:0,transformOrigin:"50% 0%"},{scaleX:1,scaleY:1,ease:i,immediateRender:!1}],a.t={scaleX:1,scaleY:0,transformOrigin:"50% 100%",ease:i,immediateRender:!1};break;case"blocktotop":case"blockfrombottom":a.ft=[{scaleX:1,scaleY:0,transformOrigin:"50% 100%"},{scaleX:1,scaleY:1,ease:i,immediateRender:!1}],a.t={scaleX:1,scaleY:0,transformOrigin:"50% 0%",ease:i,immediateRender:!1}}return a.ft[1].overwrite="auto",a.t.overwrite="auto",a}return!1},f=function(e,t,a,r,o){return 0===i[o].sdir||void 0===t?e:("mask"===a?r="x"===r?"mX":"y"===r?"mY":r:"chars"===a?r="x"===r?"cX":"y"===r?"cY":"dir"===r?"cD":r:"words"===a?r="x"===r?"wX":"y"===r?"wY":"dir"===r?"wD":r:"lines"===a&&(r="x"===r?"lX":"y"===r?"lY":"dir"===r?"lD":r),void 0===t[r]||!1===t[r]?e:void 0!==t&&!0===t[r]?"t"===e||"top"===e?"b":"b"===e||"bottom"===e?"t":"l"===e||"left"===e?"r":"r"===e||"right"===e?"l":-1*e:void 0)},m=function(e){var t=i[e.id]._L[e.layer[0].id],a=void 0===e.source?jQuery.extend(!0,{},e.frame.transform):jQuery.extend(!0,{},e.frame[e.source]),r={originX:"50%",originY:"50%",originZ:"0"},o=i[e.id].conw,s=i[e.id].conh;for(var n in a)if(a.hasOwnProperty(n))if(a[n]="object"==typeof a[n]?a[n][i[e.id].level]:a[n],"inherit"===a[n]||"delay"===n||"direction"===n||"use"===n)delete a[n];else if("originX"===n||"originY"===n||"originZ"===n)r[n]=a[n],delete a[n];else if(jQuery.isNumeric(a[n],0))a[n]=f(a[n],e.frame.reverse,e.target,n,e.id,e.id);else if("r"===a[n][0]&&"a"===a[n][1]&&"random"!==a[n]){a[n]=a[n].replace("ran(","").replace(")","");var l=a[n].indexOf("%")>=0?"%":"",d=a[n].split("|");if(d[0]=parseFloat(d[0]),d[1]=parseFloat(d[1]),void 0!==e.splitAmount&&e.splitAmount>1){a[n]="["+(Math.random()*(d[1]-d[0])+d[0])+l;for(var c=0;c<e.splitAmount;c++)a[n]=a[n]+"|"+(Math.random()*(d[1]-d[0])+d[0])+l;a[n]=a[n]+"]"}else a[n]=Math.random()*(d[1]-d[0])+d[0]+l}else{a[n]=a[n].replace("[","").replace("]",""),a[n]=a[n].replace("cyc(","").replace(")","");var p=parseInt(a[n],0);if(a[n].indexOf("%")>=0&&jQuery.isNumeric(p))"x"==n?a[n]=f(t.eow*p/100,e.frame.reverse,e.target,n,e.id):"y"==n&&(a[n]=f(t.eoh*p/100,e.frame.reverse,e.target,n,e.id));else switch(a[n]=f(a[n],e.frame.reverse,e.target,n,e.id,e.id),a[n]){case"t":case"top":a[n]=0-t.eoh-("column"===t.type?0:t.calcy);break;case"b":case"bottom":a[n]=s-("column"===t.type?0:t.calcy);break;case"l":case"left":a[n]=0-t.eow-("column"===t.type?0:t.calcx);break;case"r":case"right":a[n]=o-("column"===t.type?0:t.calcx);break;case"m":case"c":case"middle":case"center":"x"===n&&(a[n]=f(o/2-("column"===t.type?0:t.calcx)-t.eow/2,e.frame.reverse,e.target,n,e.id)),"y"===n&&(a[n]=f(s/2-("column"===t.type?0:t.calcy)-t.eoh/2,e.frame.reverse,e.target,n,e.id))}}if(a.transformOrigin=r.originX+" "+r.originY+" "+r.originZ,!i[e.id].BUG_ie_clipPath&&void 0!==a.clip&&void 0!==t.clipPath&&t.clipPath.use){var u="rectangle"==t.clipPath.type,h=parseInt(a.clip,0),g=100-parseInt(a.clipB,0),m=Math.round(h/2);switch(t.clipPath.origin){case"invh":a.clipPath="polygon(0% 0%, 0% 100%, "+h+"% 100%, "+h+"% 0%, 100% 0%, 100% 100%, "+g+"% 100%, "+g+"% 0%, 0% 0%)";break;case"invv":a.clipPath="polygon(100% 0%, 0% 0%, 0% "+h+"%, 100% "+h+"%, 100% 100%, 0% 100%, 0% "+g+"%, 100% "+g+"%, 100% 0%)";break;case"cv":a.clipPath=u?"polygon("+(50-m)+"% 0%, "+(50+m)+"% 0%, "+(50+m)+"% 100%, "+(50-m)+"% 100%)":"circle("+h+"% at 50% 50%)";break;case"ch":a.clipPath=u?"polygon(0% "+(50-m)+"%, 0% "+(50+m)+"%, 100% "+(50+m)+"%, 100% "+(50-m)+"%)":"circle("+h+"% at 50% 50%)";break;case"l":a.clipPath=u?"polygon(0% 0%, "+h+"% 0%, "+h+"% 100%, 0% 100%)":"circle("+h+"% at 0% 50%)";break;case"r":a.clipPath=u?"polygon("+(100-h)+"% 0%, 100% 0%, 100% 100%, "+(100-h)+"% 100%)":"circle("+h+"% at 100% 50%)";break;case"t":a.clipPath=u?"polygon(0% 0%, 100% 0%, 100% "+h+"%, 0% "+h+"%)":"circle("+h+"% at 50% 0%)";break;case"b":a.clipPath=u?"polygon(0% 100%, 100% 100%, 100% "+(100-h)+"%, 0% "+(100-h)+"%)":"circle("+h+"% at 50% 100%)";break;case"lt":a.clipPath=u?"polygon(0% 0%,"+2*h+"% 0%, 0% "+2*h+"%)":"circle("+h+"% at 0% 0%)";break;case"lb":a.clipPath=u?"polygon(0% "+(100-2*h)+"%, 0% 100%,"+2*h+"% 100%)":"circle("+h+"% at 0% 100%)";break;case"rt":a.clipPath=u?"polygon("+(100-2*h)+"% 0%, 100% 0%, 100% "+2*h+"%)":"circle("+h+"% at 100% 0%)";break;case"rb":a.clipPath=u?"polygon("+(100-2*h)+"% 100%, 100% 100%, 100% "+(100-2*h)+"%)":"circle("+h+"% at 100% 100%)";break;case"clr":a.clipPath=u?"polygon(0% 0%, 0% "+h+"%, "+(100-h)+"% 100%, 100% 100%, 100% "+(100-h)+"%, "+h+"% 0%)":"circle("+h+"% at 50% 50%)";break;case"crl":a.clipPath=u?"polygon(0% "+(100-h)+"%, 0% 100%, "+h+"% 100%, 100% "+h+"%, 100% 0%, "+(100-h)+"% 0%)":"circle("+h+"% at 50% 50%)"}a["-webkit-clip-path"]=a.clipPath,delete a.clip}else delete a.clip;return"mask"!==e.target&&(void 0===e.frame||void 0===e.frame.filter&&!e.forcefilter||(a["-webkit-filter"]="blur("+(null==e.frame.filter?0:e.frame.filter.blur||0)+"px) grayscale("+(null==e.frame.filter?0:e.frame.filter.grayscale||0)+"%) brightness("+(null==e.frame.filter?100:e.frame.filter.brightness||100)+"%)",a.filter="blur("+(null==e.frame.filter?0:e.frame.filter.blur||0)+"px) grayscale("+(null==e.frame.filter?0:e.frame.filter.grayscale||0)+"%) brightness("+(null==e.frame.filter?100:e.frame.filter.brightness||100)+"%)"),jQuery.inArray(e.source,["chars","words","lines"])>=0&&(void 0!==e.frame[e.source].blur||e.forcefilter)&&(a["-webkit-filter"]="blur("+(parseInt(e.frame[e.source].blur,0)||0)+"px) grayscale("+(parseInt(e.frame[e.source].grayscale,0)||0)+"%) brightness("+(parseInt(e.frame[e.source].brightness,0)||100)+"%)",a.filter="blur("+(parseInt(e.frame[e.source].blur,0)||0)+"px) grayscale("+(parseInt(e.frame[e.source].grayscale,0)||0)+"%) brightness("+(parseInt(e.frame[e.source].brightness,0)||100)+"%)")),a.ease=void 0!==a.ease?a.ease:void 0===a.ease&&void 0!==e.ease||void 0!==a.ease&&void 0!==e.ease&&"inherit"===a.ease?e.ease:e.frame.timeline.ease,a.ease=void 0===a.ease||"default"===a.ease?punchgs.Power3.easeInOut:a.ease,a},v=function(e){var t;for(var i in e)"string"==typeof e[i]&&e[i].indexOf("|")>=0&&((t=void 0===t?{}:t)[i]=e[i].replace("[","").replace("]","").split("|"),delete e[i]);return void 0!==t&&(e.cycle=t),e},y=function(e,t){var i,a,r,o=e.length-1,s=[];switch(t){case"forward":case"f":case"random":case"r":for(i=0;i<=o;i++)s.push(i);"random"!==t&&"r"!==t||(s=function(e){for(var t,i,a=e.length;0!==a;)i=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[i],e[i]=t;return e}(s));break;case"b":case"backward":for(i=0;i<=o;i++)s.push(o-i);break;case"m":case"middletoedge":var n=Math.ceil(o/2);for(r=n-1,a=n+1,s.push(n),i=0;i<n;i++)r>=0&&s.push(r),a<=o&&s.push(a),r--,a++;break;case"e":case"edgetomiddle":for(r=o,a=0,i=0;i<=Math.floor(o/2);i++)s.push(r),a<r&&s.push(a),r--,a++;break;default:for(i=0;i<=o;i++)s.push(i)}var l=[];for(var d in s)s.hasOwnProperty(d)&&l.push(e[s[d]]);return l},b=function(e,t,a,r,o){var s,n,l={},d={},c={};for(var p in r=void 0===r?"transform":r,"loop"===o?(c.autoRotate=!1,c.yoyo_filter=!1,c.yoyo_rotate=!1,c.yoyo_move=!1,c.yoyo_scale=!1,c.curved=!1,c.curviness=2,c.ease="Linear.easeNone",c.speed=1e3,c.st=0,l.x=0,l.y=0,l.z=0,l.xr=0,l.yr=0,l.zr=0,l.scaleX=1,l.scaleY=1,l.originX="50%",l.originY="50%",l.originZ="0",l.rotationX="0deg",l.rotationY="0deg",l.rotationZ="0deg"):(c.speed=300,a?c.ease="default":l.ease="default"),"sfx"===o&&(l.fxc="#ffffff"),e=e.split(";"))if(e.hasOwnProperty(p)){var u=e[p].split(":");switch(u[0]){case"u":l.use="true"===u[1]||"t"===u[1]||fasle;break;case"c":s=u[1];break;case"fxc":l.fxc=u[1];break;case"bgc":n=u[1];break;case"auto":l.auto="t"===u[1]||void 0===u[1]||"true"===u[1];break;case"o":l.opacity=u[1];break;case"oX":l.originX=u[1];break;case"oY":l.originY=u[1];break;case"oZ":l.originZ=u[1];break;case"sX":l.scaleX=u[1];break;case"sY":l.scaleY=u[1];break;case"skX":l.skewX=u[1];break;case"skY":l.skewY=u[1];break;case"rX":l.rotationX=u[1];break;case"rY":l.rotationY=u[1];break;case"rZ":l.rotationZ=u[1];break;case"sc":l.color=u[1];break;case"se":l.effect=u[1];break;case"bos":l.borderStyle=u[1];break;case"boc":l.borderColor=u[1];break;case"td":l.textDecoration=u[1];break;case"zI":l.zIndex=u[1];break;case"tp":l.transformPerspective=u[1];break;case"cp":l.clip=parseInt(u[1],0);break;case"cpb":l.clipB=parseInt(u[1],0);break;case"fpr":l.fpr="t"===u[1]||"true"===u[1]||!0===u[1];break;case"aR":c.autoRotate="t"==u[1];break;case"rA":c.radiusAngle=u[1];break;case"yyf":c.yoyo_filter="t"==u[1];break;case"yym":c.yoyo_move="t"==u[1];break;case"yyr":c.yoyo_rotate="t"==u[1];break;case"yys":c.yoyo_scale="t"==u[1];break;case"crd":c.curved="t"==u[1];break;case"x":l.x="reverse"===o?"t"===u[1]||!0===u[1]||"true"==u[1]:"loop"===o?parseInt(u[1],0):i.revToResp(u[1],i[t].rle);break;case"y":l.y="reverse"===o?"t"===u[1]||!0===u[1]||"true"==u[1]:"loop"===o?parseInt(u[1],0):i.revToResp(u[1],i[t].rle);break;case"z":l.z="loop"===o?parseInt(u[1],0):i.revToResp(u[1],i[t].rle);break;case"bow":l.borderWidth=i.revToResp(u[1],4,0).toString().replace(/,/g," ");break;case"bor":l.borderRadius=i.revToResp(u[1],4,0).toString().replace(/,/g," ");break;case"m":l.mask="t"===u[1]||"f"!==u[1]&&u[1];break;case"xR":l.xr=parseInt(u[1],0);break;case"yR":l.yr=parseInt(u[1],0);break;case"zR":l.zr=parseInt(u[1],0);break;case"blu":"loop"===o?l.blur=parseInt(u[1],0):d.blur=parseInt(u[1],0);break;case"gra":"loop"===o?l.grayscale=parseInt(u[1],0):d.grayscale=parseInt(u[1],0);break;case"bri":"loop"===o?l.brightness=parseInt(u[1],0):d.brightness=parseInt(u[1],0);break;case"sp":c.speed=parseInt(u[1],0);break;case"d":l.delay=parseInt(u[1],0);break;case"crns":c.curviness=parseInt(u[1],0);break;case"st":c.start="w"===u[1]||"a"===u[1]?"+=0":u[1],c.waitoncall="w"===u[1]||"a"===u[1];break;case"sA":c.startAbsolute=u[1];break;case"sR":c.startRelative=u[1];break;case"e":a?c.ease=u[1]:l.ease=u[1];break;default:u[0].length>0&&(l[u[0]]="t"===u[1]||"f"!==u[1]&&u[1])}}var h={timeline:c};return jQuery.isEmptyObject(d)||("split"===o?l=jQuery.extend(!0,l,d):h.filter=d),"split"===o&&void 0===l.dir&&(l.dir="forward"),jQuery.isEmptyObject(s)||(h.color=s),jQuery.isEmptyObject(n)||(h.bgcolor=n),h[r]=l,h},w=function(e,t){var a={},r=0;if(void 0===window.rdF0){var o=b("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;dir:forward;d:5",t).transform;window.rdF0=window.rdF1={transform:b("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;tp:600px",t,!0).transform,mask:b("x:0;y:0",t,!0).transform,chars:jQuery.extend(!0,{blur:0,grayscale:0,brightness:100},o),words:jQuery.extend(!0,{blur:0,grayscale:0,brightness:100},o),lines:jQuery.extend(!0,{blur:0,grayscale:0,brightness:100},o)},window.rdF1.transform.opacity=window.rdF1.chars.opacity=window.rdF1.words.opacity=window.rdF1.lines.opacity=window.rdF1.transform.scaleX=window.rdF1.chars.scaleX=window.rdF1.words.scaleX=window.rdF1.lines.scaleX=window.rdF1.transform.scaleY=window.rdF1.chars.scaleY=window.rdF1.words.scaleY=window.rdF1.lines.scaleY=1}for(var r in void 0===e.frame_0&&(e.frame_0="x:0"),void 0===e.frame_1&&(e.frame_1="x:0"),e.ford)if(e.ford.hasOwnProperty(r)){var s=e.ford[r];if(e[s]){if(a[s]=b(e[s],t,!0),void 0!==a[s].bgcolor&&(e.bgcolinuse=!0),i[t].BUG_ie_clipPath&&void 0!==e.clipPath&&e.clipPath.use&&void 0!==a[s].transform.clip){var n="rectangle"===e.clipPath.type?100-parseInt(a[s].transform.clip):100-Math.min(100,2*parseInt(a[s].transform.clip));switch(e.clipPath.origin){case"clr":case"rb":case"rt":case"r":e[s+"_mask"]="u:t;x:"+n+"%;y:0px;",a[s].transform.x=i.revToResp("-"+n+"%",i[t].rle);break;case"crl":case"lb":case"lt":case"cv":case"l":e[s+"_mask"]="u:t;x:-"+n+"%;y:0px;",a[s].transform.x=i.revToResp(n+"%",i[t].rle);break;case"ch":case"t":e[s+"_mask"]="u:t;y:-"+n+"%;y:0px;",a[s].transform.y=i.revToResp(n+"%",i[t].rle);break;case"b":e[s+"_mask"]="u:t;y:"+n+"%;y:0px;",a[s].transform.y=i.revToResp("-"+n+"%",i[t].rle)}delete a[s].transform.clip,delete a[s].transform.clipB,e.maskinuse=!0}e[s+"_mask"]&&(a[s].mask=b(e[s+"_mask"],t).transform),null!=a[s].mask&&a[s].mask.use?(a[s].mask.x=void 0===a[s].mask.x?0:a[s].mask.x,a[s].mask.y=void 0===a[s].mask.y?0:a[s].mask.y,delete a[s].mask.use,a[s].mask.overflow="hidden"):a[s].mask={ease:"default",overflow:"visible"},e[s+"_chars"]&&(a[s].chars=b(e[s+"_chars"],t,void 0,void 0,"split").transform),e[s+"_words"]&&(a[s].words=b(e[s+"_words"],t,void 0,void 0,"split").transform),e[s+"_lines"]&&(a[s].lines=b(e[s+"_lines"],t,void 0,void 0,"split").transform),(e[s+"_chars"]||e[s+"_words"]||e[s+"_lines"])&&(a[s].split=!0),a.frame_0=void 0===a.frame_0?{transform:{}}:a.frame_0,a[s].transform.auto&&(a[s].transform=jQuery.extend(!0,{},a.frame_0.transform),a[s].transform.opacity=void 0===a[s].transform.opacity?0:a[s].transform.opacity,void 0!==a.frame_0.filter&&(a[s].filter=jQuery.extend(!0,{},a.frame_0.filter)),void 0!==a.frame_0.mask&&(a[s].mask=jQuery.extend(!0,{},a.frame_0.mask)),void 0!==a.frame_0.chars&&(a[s].chars=jQuery.extend(!0,{},a.frame_0.chars)),void 0!==a.frame_0.words&&(a[s].words=jQuery.extend(!0,{},a.frame_0.words)),void 0!==a.frame_0.lines&&(a[s].lines=jQuery.extend(!0,{},a.frame_0.lines))),e[s+"_sfx"]&&(a[s].sfx=b(e[s+"_sfx"],t,!1,void 0,"sfx").transform),e[s+"_reverse"]&&(a[s].reverse=b(e[s+"_reverse"],t,!1,void 0,"reverse").transform)}}if(a.frame_0.split&&(a.frame_1.split=!0),void 0!==a.frame_0.transform.fpr&&(e.forceRender=a.frame_0.transform.fpr,delete a.frame_0.transform.fpr),void 0===e.frame_hover&&void 0===e.svgh||(a.frame_hover=b(void 0===e.frame_hover?"":e.frame_hover,t),a.frame_hover.transform.color=a.frame_hover.color,void 0===a.frame_hover.transform.color&&delete a.frame_hover.transform.color,void 0!==a.frame_hover.bgcolor&&a.frame_hover.bgcolor.indexOf("gradient")>=0?a.frame_hover.transform.backgroundImage=a.frame_hover.bgcolor:void 0!==a.frame_hover.bgcolor&&(a.frame_hover.transform.backgroundColor=a.frame_hover.bgcolor),void 0!==a.frame_hover.bgcolor&&(e.bgcolinuse=!0),a.frame_hover.transform.opacity=void 0===a.frame_hover.transform.opacity?1:a.frame_hover.transform.opacity,a.frame_hover.mask=void 0!==a.frame_hover.transform.mask&&a.frame_hover.transform.mask,delete a.frame_hover.transform.mask,void 0!==a.frame_hover.transform&&((a.frame_hover.transform.borderWidth||a.frame_hover.transform.borderStyle)&&(a.frame_hover.transform.borderColor=void 0===a.frame_hover.transform.borderColor?"transparent":a.frame_hover.transform.borderColor),"none"!==a.frame_hover.transform.borderStyle&&void 0===a.frame_hover.transform.borderWidth&&(a.frame_hover.transform.borderWidth=i.revToResp(0,4,0).toString().replace(/,/g," ")),void 0===e.bordercolor&&void 0!==a.frame_hover.transform.borderColor&&(e.bordercolor="transparent"),void 0===e.borderwidth&&void 0!==a.frame_hover.transform.borderWidth&&(e.borderwidth=i.revToResp(a.frame_hover.transform.borderWidth,4,0)),void 0===e.borderstyle&&void 0!==a.frame_hover.transform.borderStyle&&(e.borderstyle=i.revToResp(a.frame_hover.transform.borderStyle,4,0)))),void 0!==e.tloop){e.layerLoop={from:"frame_1",to:"frame_999",repeat:-1,keep:!0,children:!0};var l=e.tloop.split(";");for(var r in l)if(l.hasOwnProperty(r)){var d=l[r].split(":");switch(d[0]){case"f":e.layerLoop.from=d[1];break;case"t":e.layerLoop.to=d[1];break;case"k":e.layerLoop.keep=d[1];break;case"r":e.layerLoop.repeat=parseInt(d[1],0);break;case"c":e.layerLoop.children=d[1]}}e.layerLoop.count=0}for(var r in(e.loop_0||e.loop_999)&&(a.loop=b(e.loop_999,t,!0,"frame_999","loop"),a.loop.frame_0=b(e.loop_0||"",t,!1,void 0,"loop").transform),a.frame_0.transform.opacity=void 0===a.frame_0.transform.opacity?0:a.frame_0.transform.opacity,a.frame_1.transform.opacity=void 0===a.frame_1.transform.opacity?1:a.frame_1.transform.opacity,a.frame_999.transform.opacity=void 0===a.frame_999.transform.opacity?"inherit":a.frame_999.transform.opacity,a.frame_0.transform.transformPerspective=void 0===a.frame_0.transform.transformPerspective?"600px":a.frame_0.transform.transformPerspective,e.clipPath&&e.clipPath.use&&(a.frame_0.transform.clip=void 0===a.frame_0.transform.clip?100:parseInt(a.frame_0.transform.clip),a.frame_1.transform.clip=void 0===a.frame_1.transform.clip?100:parseInt(a.frame_1.transform.clip)),e.resetfilter=!1,a)void 0!==a[r].filter&&(e.resetfilter=!0);return e.resetfilter&&(a.frame_0.filter=jQuery.extend(!0,{},a.frame_0.filter),a.frame_0.filter.blur=void 0===a.frame_0.filter.blur?0:a.frame_0.filter.blur,a.frame_0.filter.brightness=void 0===a.frame_0.filter.brightness?100:a.frame_0.filter.brightness,a.frame_0.filter.grayscale=void 0===a.frame_0.filter.grayscale?0:a.frame_0.filter.grayscale),void 0!==a.frame_0.filter&&(a.frame_1.filter=jQuery.extend(!0,{},a.frame_1.filter),void 0!==a.frame_0.filter.blur&&0!==a.frame_1.filter.blur&&(a.frame_1.filter.blur=void 0===a.frame_1.filter.blur?0:a.frame_1.filter.blur),void 0!==a.frame_0.filter.brightness&&100!==a.frame_1.filter.brightness&&(a.frame_1.filter.brightness=void 0===a.frame_1.filter.brightness?100:a.frame_1.filter.brightness),void 0!==a.frame_0.filter.grayscale&&0!==a.frame_1.filter.grayscale&&(a.frame_1.filter.grayscale=void 0===a.frame_1.filter.grayscale?0:a.frame_1.filter.grayscale)),_(a)},_=function(e){var t,i={},a=["transform","words","chars","lines","mask"];for(var r in e)"loop"!==r&&"frame_hover"!==r&&(i=jQuery.extend(!0,i,e[r]));for(var r in e)if(e.hasOwnProperty(r)&&"loop"!==r&&"frame_hover"!==r){for(t in i.transform)i.transform.hasOwnProperty(t)&&(i.transform[t]=void 0===e[r].transform[t]?"frame_0"===r?window.rdF0.transform[t]:"frame_1"===r?window.rdF1.transform[t]:i.transform[t]:e[r].transform[t],e[r].transform[t]=void 0===e[r].transform[t]?i.transform[t]:e[r].transform[t]);for(var o=1;o<=4;o++)for(t in i[a[o]])i[a[o]].hasOwnProperty(t)&&(e[r][a[o]]=void 0===e[r][a[o]]?{}:e[r][a[o]],i[a[o]][t]=void 0===e[r][a[o]][t]?"frame_0"===r?window.rdF0[a[o]][t]:"frame_1"===r?window.rdF1[a[o]][t]:i[a[o]][t]:e[r][a[o]][t],e[r][a[o]][t]=void 0===e[r][a[o]][t]?i[a[o]][t]:e[r][a[o]][t])}return e},x=function(e,t){if(0===e.length)return{};for(var i=e[0].getElementsByClassName(t),a={},r=0;r<i.length;r++)a[i[r].id]=i[r];return a},k=function(e){var t=jQuery(i[e].slides[obj.slide]);t.addClass("indebugmode"),t.find(".helpgrid").remove(),i[e].c.find(".hglayerinfo").remove(),t.append('<div class="helpgrid" style="width:'+i[e].gridwidth[i[e].level]*i[e].bw+"px;height:"+i[e].gridheight[i[e].level]*i[e].bw+'px;"></div>');var a=t.find(".helpgrid");a.append('<div class="hginfo">Zoom:'+Math.round(100*i[e].bw)+"% &nbsp;&nbsp;&nbsp; Device Level:"+i[e].level+"&nbsp;&nbsp;&nbsp; Grid Preset:"+i[e].gridwidth[i[e].level]+"x"+i[e].gridheight[i[e].level]+"</div>"),i[e].c.append('<div class="hglayerinfo"></div>'),a.append('<div class="tlhg"></div>')},T=function(e,t,a,r){e.closest("rs-slide").find(".helpgrid").css({top:a+"px",left:t+"px"});var o=i[id].c.find(".hglayerinfo");e.on("hover, mouseenter",function(){var e="";r&&jQuery.each(r,function(t,i){"object"!=typeof i&&(e=e+'<span style="white-space:nowrap"><span style="color:#27ae60">'+t+":</span>"+i+"</span>&nbsp; &nbsp; ")}),o.html(e)})},L=function(e,t,a){if("BR"==e[0].nodeName||"br"==e[0].tagName||"object"!=typeof e[0].className&&e[0].className.indexOf("rs_splitted_")>=0)return!1;e[0].dataset.stylerecorder=!0;var r=window.getComputedStyle(e[0],null),o=void 0!==e[0].id&&void 0!==i[a]._L[e[0].id]?i[a]._L[e[0].id]:e.data(),s="rekursive"===t?e.closest(".rs-layer"):void 0,n=void 0!==s&&r.fontSize===s.css("fontSize")&&r.fontWeight===s.css("fontWeight")&&r.lineHeight===s.css("lineHeight"),l=n?void 0!==s[0].id&&void 0!==i[a]._L[s[0].id]?i[a]._L[s[0].id]:s.data():void 0,d=0;o.basealign=void 0===o.basealign?"grid":o.basealign,o._isnotext||(o.fontSize=i.revToResp(n?void 0===l.fontsize?parseInt(s.css("fontSize"),0)||20:l.fontsize:void 0===o.fontsize?"rekursive"!==t?20:"inherit":o.fontsize,i[a].rle),o.fontWeight=i.revToResp(n?void 0===l.fontweight?s.css("fontWeight")||"inherit":l.fontweight:void 0===o.fontweight?e.css("fontWeight")||"inherit":o.fontweight,i[a].rle),o.whiteSpace=i.revToResp(n?void 0===l.whitespace?"nowrap":l.whitespace:void 0===o.whitespace?"nowrap":o.whitespace,i[a].rle),o.textAlign=i.revToResp(n?void 0===l.textalign?"left":l.textalign:void 0===o.textalign?"left":o.textalign,i[a].rle),o.letterSpacing=i.revToResp(n?void 0===l.letterspacing?parseInt(s.css("letterSpacing"),0)||"inherit":l.letterspacing:void 0===o.letterspacing?parseInt(e.css("letterSpacing"),0)||"inherit":o.letterspacing,i[a].rle),o.textDecoration=n?void 0===l.textDecoration?"none":l.textDecoration:void 0===o.textDecoration?"none":o.textDecoration,d=25,d=void 0!==s&&"I"===e[0].tagName?"inherit":d,void 0!==o.tshadow&&(o.tshadow.b=i.revToResp(o.tshadow.b,i[a].rle),o.tshadow.h=i.revToResp(o.tshadow.h,i[a].rle),o.tshadow.v=i.revToResp(o.tshadow.v,i[a].rle))),void 0!==o.bshadow&&(o.bshadow.b=i.revToResp(o.bshadow.b,i[a].rle),o.bshadow.h=i.revToResp(o.bshadow.h,i[a].rle),o.bshadow.v=i.revToResp(o.bshadow.v,i[a].rle),o.bshadow.s=i.revToResp(o.bshadow.s,i[a].rle)),o.display=n?void 0===l.display?s.css("display"):l.display:void 0===o.display?e.css("display"):o.display,o.float=i.revToResp(n?void 0===l.float?s.css("float")||"none":l.float:void 0===o.float?"none":o.float,i[a].rle),o.clear=i.revToResp(n?void 0===l.clear?s.css("clear")||"none":l.clear:void 0===o.clear?"none":o.clear,i[a].rle),o.lineHeight=i.revToResp(e.is("img")||-1!=jQuery.inArray(o.layertype,["video","image","audio"])?d:n?void 0===l.lineheight?parseInt(s.css("lineHeight"),0)||d:l.lineheight:void 0===o.lineheight?d:o.lineheight,i[a].rle),o.zIndex=n?void 0===l.zindex?parseInt(s.css("zIndex"),0)||"inherit":l.zindex:void 0===o.zindex?parseInt(e.css("zIndex"),0)||"inherit":o.zindex,o.paddingTop=i.revToResp(void 0===o.paddingtop?parseInt(r.paddingTop,0)||0:o.paddingtop,i[a].rle),o.paddingBottom=i.revToResp(void 0===o.paddingbottom?parseInt(r.paddingBottom,0)||0:o.paddingbottom,i[a].rle),o.paddingLeft=i.revToResp(void 0===o.paddingleft?parseInt(r.paddingLeft,0)||0:o.paddingleft,i[a].rle),o.paddingRight=i.revToResp(void 0===o.paddingright?parseInt(r.paddingRight,0)||0:o.paddingright,i[a].rle),o.marginTop=i.revToResp(void 0===o.margintop?parseInt(r.marginTop,0)||0:o.margintop,i[a].rle),o.marginBottom=i.revToResp(void 0===o.marginbottom?parseInt(r.marginBottom,0)||0:o.marginbottom,i[a].rle),o.marginLeft=i.revToResp(void 0===o.marginleft?parseInt(r.marginLeft,0)||0:o.marginleft,i[a].rle),o.marginRight=i.revToResp(void 0===o.marginright?parseInt(r.marginRight,0)||0:o.marginright,i[a].rle),o.borderTopWidth=void 0===o.borderwidth?parseInt(r.borderTopWidth,0)||0:o.borderwidth[0],o.borderBottomWidth=void 0===o.borderwidth?parseInt(r.borderBottomWidth,0)||0:o.borderwidth[2],o.borderLeftWidth=void 0===o.borderwidth?parseInt(r.borderLeftWidth,0)||0:o.borderwidth[3],o.borderRightWidth=void 0===o.borderwidth?parseInt(r.borderRightWidth,0)||0:o.borderwidth[1],o.borderTopLeftRadius=i.revToResp(void 0===o.borderradius?r.borderTopLeftRadius||0:o.borderradius[0],i[a].rle),o.borderTopRightRadius=i.revToResp(void 0===o.borderradius?r.borderTopRightRadius||0:o.borderradius[1],i[a].rle),o.borderBottomLeftRadius=i.revToResp(void 0===o.borderradius?r.borderBottomLeftRadius||0:o.borderradius[3],i[a].rle),o.borderBottomRightRadius=i.revToResp(void 0===o.borderradius?r.borderBottomRightRadius||0:o.borderradius[2],i[a].rle),o.borderStyle=i.revToResp(void 0===o.borderstyle?r.borderStyle||0:o.borderstyle,i[a].rle),o.borderBottomColor=void 0===o.bordercolor?r["border-bottom-color"]:o.bordercolor,o.borderTopColor=void 0===o.bordercolor?r["border-top-color"]:o.bordercolor,o.borderLeftColor=void 0===o.bordercolor?r["border-left-color"]:o.bordercolor,o.borderRightColor=void 0===o.bordercolor?r["border-right-color"]:o.bordercolor,"rekursive"!==t?(o.color=i.revToResp(void 0===o.color?"#ffffff":o.color,i[a].rle,void 0,"||"),o.minWidth=i.revToResp(void 0===o.minwidth?parseInt(r.minWidth,0)||0:o.minwidth,i[a].rle),o.minHeight=i.revToResp(void 0===o.minheight?parseInt(r.minHeight,0)||0:o.minheight,i[a].rle),o.width=i.revToResp(void 0===o.width?"auto":i.smartConvertDivs(o.width),i[a].rle),o.height=i.revToResp(void 0===o.height?"auto":i.smartConvertDivs(o.height),i[a].rle),o.maxWidth=i.revToResp(void 0===o.maxwidth?parseInt(r.maxWidth,0)||"none":o.maxwidth,i[a].rle),o.maxHeight=i.revToResp(-1!==jQuery.inArray(o.type,["column","row"])?"none":void 0!==o.maxheight?parseInt(r.maxHeight,0)||"none":o.maxheight,i[a].rle)):"html"===o.layertype&&(o.width=i.revToResp(e[0].width,i[a].rle),o.height=i.revToResp(e[0].height,i[a].rle)),o.styleProps={background:e[0].style.background,"background-color":e[0].style["background-color"],color:e[0].style.color,cursor:e[0].style.cursor,"font-style":e[0].style["font-style"]},null==o.bshadow&&(o.styleProps.boxShadow=e[0].style.boxShadow),""!==o.styleProps.background&&void 0!==o.styleProps.background&&o.styleProps.background!==o.styleProps["background-color"]||delete o.styleProps.background,""==o.styleProps.color&&(o.styleProps.color=r.color)},R=function(e,t){if(void 0!==e){if("BR"==e[0].nodeName||"br"==e[0].tagName)return!1;var a=i[t].level,r=void 0!==e[0]&&void 0!==e[0].id&&void 0!==i[t]._L[e[0].id]?i[t]._L[e[0].id]:e.data(),o={basealign:void 0===(r=void 0===r.basealign?e.closest("rs-layer").data():r).basealign?"grid":r.basealign,lineHeight:void 0===r.basealign?"inherit":parseInt(r.lineHeight[a]),color:void 0===r.color?void 0:r.color[a],width:void 0===r.width?void 0:"a"===r.width[a]?"auto":r.width[a],height:void 0===r.height?void 0:"a"===r.height[a]?"auto":r.height[a],minWidth:void 0===r.minWidth?void 0:"n"===r.minWidth[a]?"none":r.minWidth[a],minHeight:void 0===r.minHeight?void 0:"n"==r.minHeight[a]?"none":r.minHeight[a],maxWidth:void 0===r.maxWidth?void 0:"n"==r.maxWidth[a]?"none":r.maxWidth[a],maxHeight:void 0===r.maxHeight?void 0:"n"==r.maxHeight[a]?"none":r.maxHeight[a],paddingTop:r.paddingTop[a],paddingBottom:parseInt(r.paddingBottom[a]),paddingLeft:parseInt(r.paddingLeft[a]),paddingRight:parseInt(r.paddingRight[a]),marginTop:parseInt(r.marginTop[a]),marginBottom:parseInt(r.marginBottom[a]),marginLeft:parseInt(r.marginLeft[a]),marginRight:parseInt(r.marginRight[a]),borderTopWidth:parseInt(r.borderTopWidth),borderBottomWidth:parseInt(r.borderBottomWidth),borderLeftWidth:parseInt(r.borderLeftWidth),borderRightWidth:parseInt(r.borderRightWidth),borderTopLeftRadius:r.borderTopLeftRadius[a],borderTopRightRadius:r.borderTopRightRadius[a],borderBottomLeftRadius:r.borderBottomLeftRadius[a],borderBottomRightRadius:r.borderBottomRightRadius[a],borderStyle:r.borderStyle[a],float:r.float[a],clear:r.clear[a]};return o.borderTopColor=r.borderTopColor,o.borderBottomColor=r.borderBottomColor,o.borderLeftColor=r.borderLeftColor,o.borderRightColor=r.borderRightColor,r._isnotext||(o.textDecoration=r.textDecoration,o.fontSize=parseInt(r.fontSize[a]),o.fontWeight=parseInt(r.fontWeight[a]),o.letterSpacing=parseInt(r.letterSpacing[a])||0,o.textAlign=r.textAlign[a],o.whiteSpace=r.whiteSpace[a],o.whiteSpace="normal"===o.whiteSpace&&"auto"===o.width&&!0!==r._incolumn?"nowrap":o.whiteSpace,o.display=r.display,void 0!==r.tshadow&&(o.textShadow=parseInt(r.tshadow.h[a],0)+"px "+parseInt(r.tshadow.v[a],0)+"px "+r.tshadow.b[a]+" "+r.tshadow.c)),void 0!==r.bshadow&&(o.boxShadow=parseInt(r.bshadow.h[a],0)+"px "+parseInt(r.bshadow.v[a],0)+"px "+parseInt(r.bshadow.b[a],0)+"px "+parseInt(r.bshadow.s[a],0)+"px "+r.bshadow.c),o}},I=function(e,t,i,a,r){var o=jQuery.isNumeric(e)||void 0===e?"":e.indexOf("px")>=0?"px":e.indexOf("%")>=0?"%":"";return e=jQuery.isNumeric(parseInt(e))?parseInt(e):e,e=null==(e="full"===(e=jQuery.isNumeric(e)?e*t+o:e)?a:"auto"===e||"none"===e?i:e)?r:e},z=function(e,t,a,r){var o=i[t]._L[e[0].id];o=void 0===o?{}:o;var s=e[0].className;if("object"==typeof s&&(s=""),void 0!==e&&void 0!==e[0]&&(s.indexOf("rs_splitted")>=0||"BR"==e[0].nodeName||"br"==e[0].tagName||e[0].tagName.indexOf("FCR")>0||e[0].tagName.indexOf("BCR")>0))return!1;var n,l,d,c,p=R(e,t),u="off"===r?1:i[t].bw,h="off"===r?1:i[t].bh,g="column"!==o.type?{t:p.marginTop,b:p.marginBottom,l:p.marginLeft,r:p.marginRight}:{t:0,b:0,l:0,r:0};if("column"===o.type&&punchgs.TweenMax.set(o._column,{paddingTop:Math.round(p.marginTop*h)+"px",paddingBottom:Math.round(p.marginBottom*h)+"px",paddingLeft:Math.round(p.marginLeft*u)+"px",paddingRight:Math.round(p.marginRight*u)+"px"}),-1===s.indexOf("rs_splitted_")){var f={paddingTop:Math.round(p.paddingTop*h)+"px",paddingBottom:Math.round(p.paddingBottom*h)+"px",paddingLeft:Math.round(p.paddingLeft*u)+"px",paddingRight:Math.round(p.paddingRight*u)+"px",borderTopLeftRadius:p.borderTopLeftRadius,borderTopRightRadius:p.borderTopRightRadius,borderBottomLeftRadius:p.borderBottomLeftRadius,borderBottomRightRadius:p.borderBottomRightRadius,overwrite:"auto"};if(o._incolumn||(f.marginTop="row"===o.type?0:g.t*h+"px",f.marginBottom="row"===o.type?0:g.b*h+"px",f.marginLeft="row"===o.type?0:g.l*u+"px",f.marginRight="row"===o.type?0:g.r*u+"px"),void 0!==o.spike&&(f["clip-path"]=f["-webkit-clip-path"]=o.spike),p.boxShadow&&(f.boxShadow=p.boxShadow),"column"!==o.type&&(void 0!==p.borderStyle&&"none"!==p.borderStyle&&(0!==p.borderTopWidth||p.borderBottomWidth>0||p.borderLeftWidth>0||p.borderRightWidth>0)?(f.borderTopWidth=Math.round(p.borderTopWidth*h)+"px",f.borderBottomWidth=Math.round(p.borderBottomWidth*h)+"px",f.borderLeftWidth=Math.round(p.borderLeftWidth*u)+"px",f.borderRightWidth=Math.round(p.borderRightWidth*u)+"px",f.borderStyle=p.borderStyle,f.borderTopColor=p.borderTopColor,f.borderBottomColor=p.borderBottomColor,f.borderLeftColor=p.borderLeftColor,f.borderRightColor=p.borderRightColor):("none"===p.borderStyle&&(f.borderStyle="none"),f.borderTopColor=p.borderTopColor,f.borderBottomColor=p.borderBottomColor,f.borderLeftColor=p.borderLeftColor,f.borderRightColor=p.borderRightColor)),"shape"!==o.type||0===p.borderTopLeftRadius&&0===p.borderTopRightRadius&&0===p.borderBottomLeftRadius&&0===p.borderBottomRightRadius||(f.overflow="hidden"),o._isnotext||(f.fontSize=Math.round(p.fontSize*u)+"px",f.fontWeight=p.fontWeight,f.letterSpacing=p.letterSpacing*u+"px",f.lineHeight=Math.round(p.lineHeight*h)+"px",f.textAlign=p.textAlign,p.textShadow&&(f.textShadow=p.textShadow)),"column"===o.type&&(void 0===o.cbg_set&&(o.cbg_set=o.styleProps["background-color"],o.cbg_set=""==o.cbg_set||void 0===o.cbg_set||0==o.cbg_set.length?"transparent":o.cbg_set,o.cbg_img=e.css("backgroundImage"),o.cbg_img_r=e.css("backgroundRepeat"),o.cbg_img_p=e.css("backgroundPosition"),o.cbg_img_s=e.css("backgroundSize"),o.cbg_o=o.bgopacity?1:o.bgopacity,punchgs.TweenMax.set(e,{backgroundColor:"transparent",backgroundImage:""})),f.backgroundColor="transparent",f.backgroundImage="none"),o._isstatic&&o.elementHovered&&(n=e.data("frames"))&&n.frame_hover&&n.frame_hover.transform)for(l in f)f.hasOwnProperty(l)&&n.frame_hover.transform.hasOwnProperty(l)&&delete f[l];if("IFRAME"==e[0].nodeName&&"html"===e[0].dataset.layertype&&(d="slide"==p.basealign?i[t].ulw:i[t].gridwidth[i[t].level],c="slide"==p.basealign?i[t].ulh:i[t].gridheight[i[t].level],f.width=!jQuery.isNumeric(p.width)&&p.width.indexOf("%")>=0?!o._isstatic||o._incolumn||o._ingroup?p.width:d*parseInt(p.width,0)/100:I(p.width,u,"auto",d,"auto"),f.height=!jQuery.isNumeric(p.height)&&p.height.indexOf("%")>=0?!o._isstatic||o._incolumn||o._ingroup?p.height:c*parseInt(p.height,0)/100:I(p.height,h,"auto",d,"auto")),punchgs.TweenMax.set(e,f),"rekursive"!=a){d="slide"==p.basealign?i[t].ulw:i[t].gridwidth[i[t].level],c="slide"==p.basealign?i[t].ulh:i[t].gridheight[i[t].level];var m=!jQuery.isNumeric(p.width)&&p.width.indexOf("%")>=0?!o._isstatic||o._incolumn||o._ingroup?p.width:d*parseInt(p.width,0)/100:I(p.width,u,"auto",d,"auto"),v=!jQuery.isNumeric(p.height)&&p.height.indexOf("%")>=0?!o._isstatic||o._incolumn||o._ingroup?p.height:c*parseInt(p.height,0)/100:I(p.height,h,"auto",d,"auto"),y={maxWidth:I(p.maxWidth,u,"none",d,"none"),maxHeight:I(p.maxHeight,h,"none",c,"none"),minWidth:I(p.minWidth,u,"0px",d,0),minHeight:I(p.minHeight,h,"0px",c,0),height:v,width:m,overwrite:"auto"};if(1==o.heightSetByVideo&&delete y.height,o._incolumn?(punchgs.TweenMax.set([o.p],{minWidth:m,maxWidth:m,marginTop:g.t*h+"px",marginBottom:g.b*h+"px",marginLeft:g.l*u+"px",marginRight:g.r*u+"px",float:p.float,clear:p.clear}),punchgs.TweenMax.set("block"===p.display?[o.lp]:[o.lp,o.m],{width:"100%"}),y.width=!jQuery.isNumeric(p.width)&&p.width.indexOf("%")>=0?"100%":m,"image"===o.type&&punchgs.TweenMax.set(o.img,{width:y.width})):!jQuery.isNumeric(p.width)&&p.width.indexOf("%")>=0&&(punchgs.TweenMax.set([o.p],{minWidth:"slide"===o.basealign||!0===o._ingroup?m:i[t].gridwidth[i[t].level]*i[t].bw+"px"}),punchgs.TweenMax.set([o.lp,o.m],{width:"100%"})),!jQuery.isNumeric(p.height)&&p.height.indexOf("%")>=0&&(punchgs.TweenMax.set([o.p],{minHeight:"slide"===o.basealign||!0===o._ingroup?v:i[t].gridheight[i[t].level]*i[t].bw+"px"}),punchgs.TweenMax.set([o.lp,o.m],{height:"100%"})),o._isnotext||(y.whiteSpace=p.whiteSpace,y.textAlign=p.textAlign,y.textDecoration=p.textDecoration),"npc"!=p.color&&void 0!==p.color&&(y.color=p.color),o._ingroup&&(o._groupw=y.minWidth,o._grouph=y.minHeight),"row"===o.type&&(jQuery.isNumeric(y.minHeight)||y.minHeight.indexOf("px")>=0)&&"0px"!==y.minHeight&&0!==y.minHeight&&"0"!==y.minHeight&&"none"!==y.minHeight?y.height=y.minHeight:"row"===o.type&&(y.height="auto"),o._isstatic&&o.elementHovered&&(n=e.data("frames"))&&n.frame_hover&&n.frame_hover.transform)for(l in y)y.hasOwnProperty(l)&&n.frame_hover.transform.hasOwnProperty(l)&&delete y[l];"image"===o.type&&(!jQuery.isNumeric(y.width)&&y.width.indexOf("%")>=0&&(y.width="100%"),!jQuery.isNumeric(y.height)&&y.height.indexOf("%")>=0&&(y.height="100%")),o._isgroup&&(!jQuery.isNumeric(y.width)&&y.width.indexOf("%")>=0&&(y.width="100%"),punchgs.TweenMax.set(o.p,{height:y.height})),punchgs.TweenMax.set(e,y),null!=o.svg_src&&void 0!==o.svgI&&("string"==typeof o.svgI.fill&&(o.svgI.fill=[o.svgI.fill]),o.svgTemp=jQuery.extend(!0,{},o.svgI),o.svgTemp.fill=o.svgTemp.fill[i[t].level],punchgs.TweenMax.set(o.svg,o.svgTemp),punchgs.TweenMax.set(o.svgPath,{fill:o.svgI.fill[i[t].level]}))}"row"===o.type&&(f={paddingTop:g.t*h+"px",paddingBottom:g.b*h+"px",paddingLeft:g.l*u+"px",paddingRight:g.r*u+"px"},punchgs.TweenMax.set(o.p,f)),"column"===o.type&&o.cbg&&o.cbg.length>0&&(o.cbg[0].style.backgroundSize=o.cbg_img_s,punchgs.TweenMax.set(o.cbg,{cursor:o.styleProps.cursor,borderTopWidth:Math.round(p.borderTopWidth*h)+"px",borderBottomWidth:Math.round(p.borderBottomWidth*h)+"px",borderLeftWidth:Math.round(p.borderLeftWidth*u)+"px",borderRightWidth:Math.round(p.borderRightWidth*u)+"px",borderStyle:p.borderStyle,borderTopColor:p.borderTopColor,borderBottomColor:p.borderBottomColor,borderLeftColor:p.borderLeftColor,borderRightColor:p.borderRightColor,borderTopLeftRadius:p.borderTopLeftRadius,borderTopRightRadius:p.borderTopRightRadius,borderBottomLeftRadius:p.borderBottomLeftRadius,borderBottomRightRadius:p.borderBottomRightRadius,backgroundColor:o.cbg_set,backgroundImage:o.cbg_img,backgroundRepeat:o.cbg_img_r,backgroundPosition:o.cbg_img_p,opacity:o.cbg_o}),punchgs.TweenMax.set(o.cbgmask,{top:p.marginTop*h+"px",left:p.marginLeft*u+"px",right:p.marginRight*u+"px",bottom:p.marginBottom*h+"px"}))}},S=function(e){var t={l:"none",lw:10,r:"none",rw:10};for(var i in e=e.split(";"))if(e.hasOwnProperty(a)){var a=e[i].split(":");switch(a[0]){case"l":t.l=a[1];break;case"r":t.r=a[1];break;case"lw":t.lw=a[1];break;case"rw":t.rw=a[1]}}return"polygon("+M(t.l,0,parseFloat(t.lw))+","+M(t.r,100,100-parseFloat(t.rw),!0)+")"},M=function(e,t,i,a){var r;switch(e){case"none":r=t+"% 100%,"+t+"% 0%";break;case"top":r=i+"% 100%,"+t+"% 0%";break;case"middle":r=i+"% 100%,"+t+"% 50%,"+i+"% 0%";break;case"bottom":r=t+"% 100%,"+i+"% 0%";break;case"two":r=i+"% 100%,"+t+"% 75%,"+i+"% 50%,"+t+"% 25%,"+i+"% 0%";break;case"three":r=t+"% 100%,"+i+"% 75%,"+t+"% 50%,"+i+"% 25%,"+t+"% 0%";break;case"four":r=t+"% 100%,"+i+"% 87.5%,"+t+"% 75%,"+i+"% 62.5%,"+t+"% 50%,"+i+"% 37.5%,"+t+"% 25%,"+i+"% 12.5%,"+t+"% 0%";break;case"five":r=t+"% 100%,"+i+"% 90%,"+t+"% 80%,"+i+"% 70%,"+t+"% 60%,"+i+"% 50%,"+t+"% 40%,"+i+"% 30%,"+t+"% 20%,"+i+"% 10%,"+t+"% 0%"}if(a){var o=r.split(",");for(var i in r="",o)o.hasOwnProperty(i)||(r+=o[o.length-1-i]+(i<o.length-1?",":""))}return r}}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution,i=t.is_mobile();function a(e,i){var a=new Object({single:".tp-"+i,c:t[e].cpar.find(".tp-"+i+"s")});return a.mask=a.c.find(".tp-"+i+"-mask"),a.wrap=a.c.find(".tp-"+i+"s-inner-wrapper"),a}jQuery.extend(!0,t,{hideUnHideNav:function(e){var i=t[e].c.width(),a=t[e].navigation.arrows,r=t[e].navigation.bullets,o=t[e].navigation.thumbnails,s=t[e].navigation.tabs;p(a)&&k(t[e].c.find(".tparrows"),a.hide_under,i,a.hide_over),p(r)&&k(t[e].c.find(".tp-bullets"),r.hide_under,i,r.hide_over),p(o)&&k(o.c,o.hide_under,i,o.hide_over),p(s)&&k(s.c,s.hide_under,i,s.hide_over),x(e)},resizeThumbsTabs:function(e,i){if(void 0!==t[e]&&t[e].navigation.use&&(t[e].navigation&&t[e].navigation.bullets.enable||t[e].navigation&&t[e].navigation.tabs.enable||t[e].navigation&&t[e].navigation.thumbnails.enable)){var a=(jQuery(window).width()-480)/500,r=new punchgs.TimelineLite,s=t[e].navigation.tabs,n=t[e].navigation.thumbnails,l=t[e].navigation.bullets;if(r.pause(),a=a>1?1:a<0?0:a,p(s)&&(i||s.width>s.min_width)&&o(a,r,t[e].c,s,t[e].slideamount,"tab"),p(n)&&(i||n.width>n.min_width)&&o(a,r,t[e].c,n,t[e].slideamount,"thumb"),p(l)&&i){var d=t[e].c.find(".tp-bullets");d.find(".tp-bullet").each(function(e){var t=jQuery(this),i=e+1,a=t.outerWidth()+parseInt(void 0===l.space?0:l.space,0),r=t.outerHeight()+parseInt(void 0===l.space?0:l.space,0);"vertical"===l.direction?(t.css({top:(i-1)*r+"px",left:"0px"}),d.css({height:(i-1)*r+t.outerHeight(),width:t.outerWidth()})):(t.css({left:(i-1)*a+"px",top:"0px"}),d.css({width:(i-1)*a+t.outerWidth(),height:t.outerHeight()}))})}r.play(),x(e)}return!0},updateNavIndexes:function(e){var i=t[e].c;function a(e){i.find(e).lenght>0&&i.find(e).each(function(e){jQuery(this).data("liindex",e)})}a("rs-tab"),a("rs-bullet"),a("rs-thumb"),t.resizeThumbsTabs(e,!0),t.manageNavigation(e)},manageNavigation:function(e,i){if(t[e].navigation.use){var a=t.getHorizontalOffset(t[e].cpar,"left"),o=t.getHorizontalOffset(t[e].cpar,"right");p(t[e].navigation.bullets)&&("fullscreen"!=t[e].sliderLayout&&"fullwidth"!=t[e].sliderLayout&&(t[e].navigation.bullets.h_offset_old=void 0===t[e].navigation.bullets.h_offset_old?parseInt(t[e].navigation.bullets.h_offset,0):t[e].navigation.bullets.h_offset_old,t[e].navigation.bullets.h_offset="center"===t[e].navigation.bullets.h_align?t[e].navigation.bullets.h_offset_old+a/2-o/2:t[e].navigation.bullets.h_offset_old+a-o),b(t[e].c.find(".tp-bullets"),t[e].navigation.bullets,e)),p(t[e].navigation.thumbnails)&&b(t[e].navigation.thumbnails.c,t[e].navigation.thumbnails,e),p(t[e].navigation.tabs)&&b(t[e].navigation.tabs.c,t[e].navigation.tabs,e),p(t[e].navigation.arrows)&&("fullscreen"!=t[e].sliderLayout&&"fullwidth"!=t[e].sliderLayout&&(t[e].navigation.arrows.left.h_offset_old=void 0===t[e].navigation.arrows.left.h_offset_old?parseInt(t[e].navigation.arrows.left.h_offset,0):t[e].navigation.arrows.left.h_offset_old,t[e].navigation.arrows.left.h_offset="right"===t[e].navigation.arrows.left.h_align?t[e].navigation.arrows.left.h_offset_old+o:t[e].navigation.arrows.left.h_offset_old+a,t[e].navigation.arrows.right.h_offset_old=void 0===t[e].navigation.arrows.right.h_offset_old?parseInt(t[e].navigation.arrows.right.h_offset,0):t[e].navigation.arrows.right.h_offset_old,t[e].navigation.arrows.right.h_offset="right"===t[e].navigation.arrows.right.h_align?t[e].navigation.arrows.right.h_offset_old+o:t[e].navigation.arrows.right.h_offset_old+a),b(t[e].c.find(".tp-leftarrow.tparrows"),t[e].navigation.arrows.left,e),b(t[e].c.find(".tp-rightarrow.tparrows"),t[e].navigation.arrows.right,e)),!1!==i&&(p(t[e].navigation.thumbnails)&&r(t[e].navigation.thumbnails,e),p(t[e].navigation.tabs)&&r(t[e].navigation.tabs,e))}},showFirstTime:function(e){h(e),t.callContWidthManager(e)},createNavigation:function(e){var o=t[e].navigation.arrows,l=t[e].navigation.bullets,f=t[e].navigation.thumbnails,v=t[e].navigation.tabs,y=p(o),b=p(l),x=p(f),k=p(v);s(e),n(e),y&&(m(o,e),o.c=t[e].cpar.find(".tparrows")),t[e].slides.each(function(i){if(-1===this.className.indexOf("not-in-nav")){var a=jQuery(t[e].slides[t[e].slides.length-1-i]),r=jQuery(this);b&&(t[e].navigation.bullets.rtl?w(t[e].c,l,a,e):w(t[e].c,l,r,e)),x&&(t[e].navigation.thumbnails.rtl?_(t[e].c,f,a,"tp-thumb",e):_(t[e].c,f,r,"tp-thumb",e)),k&&(t[e].navigation.tabs.rtl?_(t[e].c,v,a,"tp-tab",e):_(t[e].c,v,r,"tp-tab",e))}}),b&&(l.c=t[e].cpar.find(".tp-bullets")),x&&jQuery.extend(!0,f,a(e,"thumb")),k&&jQuery.extend(!0,v,a(e,"tab")),t[e].c.bind("revolution.slide.onafterswap revolution.nextslide.waiting",function(i){if(void 0!==t[e].pr_next_key||void 0!==t[e].pr_active_key){var a=void 0===t[e].pr_next_key?t[e].slides[t[e].pr_active_key].dataset.key:t[e].slides[t[e].pr_next_key].dataset.key;t[e].c.find(".tp-bullet").each(function(){this.dataset.key===a?this.classList.add("selected"):this.classList.remove("selected")}),t[e].cpar.find(".tp-thumb, .tp-tab").each(function(){this.dataset.key===a?(this.classList.add("selected"),"RS-TAB"===this.nodeName?r(v,e):r(f,e)):this.classList.remove("selected")});var s=0,n=!1;t[e].thumbs&&jQuery.each(t[e].thumbs,function(e,t){s=!1===n?e:s,n=void 0!==t&&t.id===a||e===a||n});var l=s>0?s-1:t[e].slideamount-1,d=s+1==t[e].slideamount?0:s+1;if(!0===o.enable){var c=o.tmp;if(null!=t[e].thumbs[l]&&jQuery.each(t[e].thumbs[l].params,function(e,t){c=c.replace(t.from,t.to)}),o.left.j.html(c),c=o.tmp,d>t[e].slideamount)return;jQuery.each(t[e].thumbs[d].params,function(e,t){c=c.replace(t.from,t.to)}),o.right.j.html(c),o.rtl?(punchgs.TweenLite.set(o.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+t[e].thumbs[d].src+")"}),punchgs.TweenLite.set(o.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+t[e].thumbs[l].src+")"})):(punchgs.TweenLite.set(o.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+t[e].thumbs[l].src+")"}),punchgs.TweenLite.set(o.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+t[e].thumbs[d].src+")"}))}}}),c(o),c(l),c(f),c(v),t[e].cpar.on("mouseenter mousemove",function(a){t[e].cpar.hasClass("tp-mouseover")||(t[e].cpar.addClass("tp-mouseover"),t[e].firstSlideAvailable&&(h(e),i&&(u(t[e].hideAllNavElementTimer),t[e].hideAllNavElementTimer=setTimeout(function(){t[e].cpar.removeClass("tp-mouseover"),g(e)},150))))}),t[e].cpar.on("mouseleave ",function(){t[e].cpar.removeClass("tp-mouseover"),g(e)}),x&&d(f.c,e),k&&d(v.c,e),"carousel"===t[e].sliderType&&d(t[e].c,e,!0),(t[e].navigation.touch.touchOnDesktop||t[e].navigation.touch.touchenabled&&i)&&d(t[e].c,e,"swipebased")}});var r=function(e,i){var a="vertical"===e.direction?e.mask.find(e.single).first().outerHeight(!0)+e.space:e.mask.find(e.single).first().outerWidth(!0)+e.space,r="vertical"===e.direction?e.mask.height():e.mask.width(),o=e.mask.find(e.single+".selected").data("liindex");o=(o=void 0===o?0:o)>0&&1===t[i].sdir?o-1:o;var s=r/a,n="vertical"===e.direction?e.mask.height():e.mask.width(),l=0-o*a,d="vertical"===e.direction?e.wrap.height():e.wrap.width(),c=l<0-(d-n)?0-(d-n):l,p=e.wrap[0].dataset.offset;s>2&&(c=l-(p+a)<=0?l-(p+a)<0-a?p:c+a:c,c=l-a+p+r<a&&l+(Math.round(s)-2)*a<p?l+(Math.round(s)-2)*a:c),c="vertical"!==e.direction&&e.mask.width()>=e.wrap.width()||"vertical"===e.direction&&e.mask.height()>=e.wrap.height()?0:c<0-(d-n)?0-(d-n):c>0?0:c,e.c.hasClass("dragged")||("vertical"===e.direction?e.wrap.data("tmmove",punchgs.TweenLite.to(e.wrap,.5,{top:c+"px",ease:punchgs.Power3.easeInOut})):e.wrap.data("tmmove",punchgs.TweenLite.to(e.wrap,.5,{left:c+"px",ease:punchgs.Power3.easeInOut})),e.wrap.data("offset",c))},o=function(e,t,i,a,r,o){var s=i.parent().find(".tp-"+o+"s"),n=s.find(".tp-"+o+"s-inner-wrapper"),l=s.find(".tp-"+o+"-mask"),d=a.width*e<a.min_width?a.min_width:Math.round(a.width*e),c=Math.round(d/a.width*a.height),p="vertical"===a.direction?d:d*r+a.space*(r-1),u="vertical"===a.direction?c*r+a.space*(r-1):c,h="vertical"===a.direction?{width:d+"px"}:{height:c+"px"};t.add(punchgs.TweenLite.set(s,h)),t.add(punchgs.TweenLite.set(n,{width:p+"px",height:u+"px"})),t.add(punchgs.TweenLite.set(l,{width:p+"px",height:u+"px"}));var g=n.find(".tp-"+o);return g&&jQuery.each(g,function(e,i){"vertical"===a.direction?t.add(punchgs.TweenLite.set(i,{top:e*(c+parseInt(void 0===a.space?0:a.space,0)),width:d+"px",height:c+"px"})):"horizontal"===a.direction&&t.add(punchgs.TweenLite.set(i,{left:e*(d+parseInt(void 0===a.space?0:a.space,0)),width:d+"px",height:c+"px"}))}),t},s=function(e){!0===t[e].navigation.keyboardNavigation&&jQuery(document).keydown(function(i){("horizontal"==t[e].navigation.keyboard_direction&&39==i.keyCode||"vertical"==t[e].navigation.keyboard_direction&&40==i.keyCode)&&(t[e].sc_indicator="arrow",t[e].sc_indicator_dir=0,t.callingNewSlide(e,1)),("horizontal"==t[e].navigation.keyboard_direction&&37==i.keyCode||"vertical"==t[e].navigation.keyboard_direction&&38==i.keyCode)&&(t[e].sc_indicator="arrow",t[e].sc_indicator_dir=1,t.callingNewSlide(e,-1))})},n=function(e){if(!0===t[e].navigation.mouseScrollNavigation||"on"===t[e].navigation.mouseScrollNavigation||"carousel"===t[e].navigation.mouseScrollNavigation){t[e].isIEEleven=!!navigator.userAgent.match(/Trident.*rv\:11\./),t[e].isSafari=!!navigator.userAgent.match(/safari/i),t[e].ischrome=!!navigator.userAgent.match(/chrome/i);var i=t[e].ischrome?-49:t[e].isIEEleven||t[e].isSafari?-9:navigator.userAgent.match(/mozilla/i)?-29:-49,a=t[e].ischrome?49:t[e].isIEEleven||t[e].isSafari?9:navigator.userAgent.match(/mozilla/i)?29:49;t[e].c.on("mousewheel DOMMouseScroll",function(r){var o,s,n,l,d,c=(o=r.originalEvent,s=0,n=0,l=0,d=0,"detail"in o&&(n=o.detail),"wheelDelta"in o&&(n=-o.wheelDelta/120),"wheelDeltaY"in o&&(n=-o.wheelDeltaY/120),"wheelDeltaX"in o&&(s=-o.wheelDeltaX/120),"axis"in o&&o.axis===o.HORIZONTAL_AXIS&&(s=n,n=0),l=1*s,d=1*n,"deltaY"in o&&(d=o.deltaY),"deltaX"in o&&(l=o.deltaX),(l||d)&&o.deltaMode&&(o.deltaMode,l*=1,d*=1),l&&!s&&(s=l<1?-1:1),d&&!n&&(n=d<1?-1:1),((d=navigator.userAgent.match(/mozilla/i)?10*d:d)>300||d<-300)&&(d/=10),{spinX:s,spinY:n,pixelX:l,pixelY:d}),p=!0,u=0==t[e].pr_active_key||0==t[e].pr_processing_key,h=t[e].pr_active_key==t[e].slideamount-1||t[e].pr_processing_key==t[e].slideamount-1;"carousel"==t[e].navigation.mouseScrollNavigation&&(u=h=!1),void 0===t[e].pr_processing_key?c.pixelY<i?(u||(t[e].sc_indicator="arrow","reverse"!==t[e].navigation.mouseScrollReverse&&(t[e].sc_indicator_dir=1,t.callingNewSlide(e,-1)),p=!1),h||(t[e].sc_indicator="arrow","reverse"===t[e].navigation.mouseScrollReverse&&(t[e].sc_indicator_dir=0,t.callingNewSlide(e,1)),p=!1)):c.pixelY>a&&(h||(t[e].sc_indicator="arrow","reverse"!==t[e].navigation.mouseScrollReverse&&(t[e].sc_indicator_dir=0,t.callingNewSlide(e,1)),p=!1),u||(t[e].sc_indicator="arrow","reverse"===t[e].navigation.mouseScrollReverse&&(t[e].sc_indicator_dir=1,t.callingNewSlide(e,-1)),p=!1)):p=!1;var g=t[e].c.offset().top-jQuery("body").scrollTop(),f=g+t[e].c.height();return"carousel"!=t[e].navigation.mouseScrollNavigation?("reverse"!==t[e].navigation.mouseScrollReverse&&(g>0&&c.pixelY>0||f<jQuery(window).height()&&c.pixelY<0)&&(p=!0),"reverse"===t[e].navigation.mouseScrollReverse&&(g<0&&c.pixelY<0||f>jQuery(window).height()&&c.pixelY>0)&&(p=!0)):p=!1,p?void 0:(r.preventDefault(r),!1)})}},l=function(e,t,a){return!0===(e=i?jQuery(a.target).closest(e).length||jQuery(a.srcElement).closest(e).length:jQuery(a.toElement).closest(e).length||jQuery(a.originalTarget).closest(e).length)||1===e?1:0},d=function(e,a,r){var o=t[a].carousel;jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"),o.Limit="endless";var s=e,n="vertical"===t[a].navigation.thumbnails.direction||"vertical"===t[a].navigation.tabs.direction?"none":"vertical",d=t[a].navigation.touch.swipe_direction||"horizontal";n="swipebased"==r&&"vertical"==d?"none":r?"vertical":n,jQuery.fn.swipetp||(jQuery.fn.swipetp=jQuery.fn.swipe),jQuery.fn.swipetp.defaults&&jQuery.fn.swipetp.defaults.excludedElements||jQuery.fn.swipetp.defaults||(jQuery.fn.swipetp.defaults={}),jQuery.fn.swipetp.defaults.excludedElements="label, button, input, select, textarea, .noSwipe",s.swipetp({allowPageScroll:n,triggerOnTouchLeave:!0,treshold:t[a].navigation.touch.swipe_treshold,fingers:t[a].navigation.touch.swipe_min_touches>5?1:t[a].navigation.touch.swipe_min_touches,excludeElements:jQuery.fn.swipetp.defaults.excludedElements,swipeStatus:function(r,s,n,c,p,u,h){var g=l("rs-module-wrap",0,r),f=l(".tp-thumbs",0,r),m=l(".tp-tabs",0,r),v=!!jQuery(this).attr("class").match(/tp-tabs|tp-thumb/gi);if("carousel"===t[a].sliderType&&(("move"===s||"end"===s||"cancel"==s)&&t[a].dragStartedOverSlider&&!t[a].dragStartedOverThumbs&&!t[a].dragStartedOverTabs||"start"===s&&g>0&&0===f&&0===m)){if(i&&("up"===n||"down"===n))return;switch(t[a].dragStartedOverSlider=!0,c=n&&n.match(/left|up/g)?Math.round(-1*c):c=Math.round(1*c),s){case"start":void 0!==o.positionanim&&(o.positionanim.kill(),o.slide_globaloffset="off"===o.infinity?o.slide_offset:t.simp(o.slide_offset,o.maxwidth)),o.overpull="none",o.wrap.addClass("dragged");break;case"move":if(Math.abs(c)>=10||t[a].carousel.isDragged){if(t[a].carousel.isDragged=!0,t[a].c.find(".rs-waction").addClass("tp-temporarydisabled"),o.slide_offset="off"===o.infinity?o.slide_globaloffset+c:t.simp(o.slide_globaloffset+c,o.maxwidth),"off"===o.infinity){var y="center"===o.horizontal_align?(o.wrapwidth/2-o.slide_width/2-o.slide_offset)/o.slide_width:(0-o.slide_offset)/o.slide_width;"none"!==o.overpull&&0!==o.overpull||!(y<0||y>t[a].slideamount-1)?y>=0&&y<=t[a].slideamount-1&&(y>=0&&c>o.overpull||y<=t[a].slideamount-1&&c<o.overpull)&&(o.overpull=0):o.overpull=c,o.slide_offset=y<0?o.slide_offset+(o.overpull-c)/1.1+Math.sqrt(Math.abs((o.overpull-c)/1.1)):y>t[a].slideamount-1?o.slide_offset+(o.overpull-c)/1.1-Math.sqrt(Math.abs((o.overpull-c)/1.1)):o.slide_offset}t.organiseCarousel(a,n,!0,!0)}break;case"end":case"cancel":t[a].carousel.isDragged=!1,o.slide_globaloffset=o.slide_offset,o.wrap.removeClass("dragged"),t.carouselToEvalPosition(a,n),t[a].dragStartedOverSlider=!1,t[a].dragStartedOverThumbs=!1,t[a].dragStartedOverTabs=!1,setTimeout(function(){t[a].c.find(".rs-waction").removeClass("tp-temporarydisabled")},19)}}else{if(("move"!==s&&"end"!==s&&"cancel"!=s||t[a].dragStartedOverSlider||!t[a].dragStartedOverThumbs&&!t[a].dragStartedOverTabs)&&!("start"===s&&g>0&&(f>0||m>0))){if("end"==s&&!v){if(t[a].sc_indicator="arrow","horizontal"==d&&"left"==n||"vertical"==d&&"up"==n)return t[a].sc_indicator_dir=0,t.callingNewSlide(a,1),!1;if("horizontal"==d&&"right"==n||"vertical"==d&&"down"==n)return t[a].sc_indicator_dir=1,t.callingNewSlide(a,-1),!1}return t[a].dragStartedOverSlider=!1,t[a].dragStartedOverThumbs=!1,t[a].dragStartedOverTabs=!1,!0}f>0&&(t[a].dragStartedOverThumbs=!0),m>0&&(t[a].dragStartedOverTabs=!0);var b=t[a].dragStartedOverThumbs?".tp-thumbs":".tp-tabs",w=t[a].dragStartedOverThumbs?".tp-thumb-mask":".tp-tab-mask",_=t[a].dragStartedOverThumbs?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",x=t[a].dragStartedOverThumbs?".tp-thumb":".tp-tab",k=t[a].dragStartedOverThumbs?t[a].navigation.thumbnails:t[a].navigation.tabs;c=n&&n.match(/left|up/g)?Math.round(-1*c):c=Math.round(1*c);var T=e.parent().find(w),L=T.find(_),R=k.direction,I="vertical"===R?L.height():L.width(),z="vertical"===R?T.height():T.width(),S="vertical"===R?T.find(x).first().outerHeight(!0)+k.space:T.find(x).first().outerWidth(!0)+k.space,M=void 0===L.data("offset")?0:parseInt(L.data("offset"),0),O=0;switch(s){case"start":e.parent().find(b).addClass("dragged"),M="vertical"===R?L.position().top:L.position().left,L.data("offset",M),L.data("tmmove")&&L.data("tmmove").pause();break;case"move":if(I<=z)return!1;O=(O=M+c)>0?"horizontal"===R?O-L.width()*(O/L.width()*O/L.width()):O-L.height()*(O/L.height()*O/L.height()):O;var P="vertical"===R?0-(L.height()-T.height()):0-(L.width()-T.width());O=O<P?"horizontal"===R?O+L.width()*(O-P)/L.width()*(O-P)/L.width():O+L.height()*(O-P)/L.height()*(O-P)/L.height():O,"vertical"===R?punchgs.TweenLite.set(L,{top:O+"px"}):punchgs.TweenLite.set(L,{left:O+"px"});break;case"end":case"cancel":if(v)return O=M+c,O=(O="vertical"===R?O<0-(L.height()-T.height())?0-(L.height()-T.height()):O:O<0-(L.width()-T.width())?0-(L.width()-T.width()):O)>0?0:O,O=Math.abs(c)>S/10?c<=0?Math.floor(O/S)*S:Math.ceil(O/S)*S:c<0?Math.ceil(O/S)*S:Math.floor(O/S)*S,O=(O="vertical"===R?O<0-(L.height()-T.height())?0-(L.height()-T.height()):O:O<0-(L.width()-T.width())?0-(L.width()-T.width()):O)>0?0:O,"vertical"===R?punchgs.TweenLite.to(L,.5,{top:O+"px",ease:punchgs.Power3.easeOut}):punchgs.TweenLite.to(L,.5,{left:O+"px",ease:punchgs.Power3.easeOut}),O=O||("vertical"===R?L.position().top:L.position().left),L.data("offset",O),L.data("distance",c),setTimeout(function(){t[a].dragStartedOverSlider=!1,t[a].dragStartedOverThumbs=!1,t[a].dragStartedOverTabs=!1},100),e.parent().find(b).removeClass("dragged"),!1}}}})},c=function(e){e.hide_delay=jQuery.isNumeric(parseInt(e.hide_delay,0))?e.hide_delay:.2,e.hide_delay_mobile=jQuery.isNumeric(parseInt(e.hide_delay_mobile,0))?e.hide_delay_mobile:.2},p=function(e){return e&&e.enable},u=function(e){clearTimeout(e)},h=function(e){var i=t[e].navigation.maintypes;for(var a in i)i.hasOwnProperty(a)&&p(t[e].navigation[i[a]])&&(u(t[e].navigation[i[a]].showCall),t[e].navigation[i[a]].showCall=setTimeout(function(i){u(i.hideCall),i.hide_onleave&&!t[e].cpar.hasClass("tp-mouseover")||(void 0===i.tween?i.tween=f(i):i.tween.play())},t[e].navigation[i[a]].hide_onleave&&!t[e].cpar.hasClass("tp-mouseover")?0:parseInt(t[e].navigation[i[a]].animDelay),t[e].navigation[i[a]]))},g=function(e,a){var r=t[e].navigation.maintypes;for(var o in r)r.hasOwnProperty(o)&&void 0!==t[e].navigation[r[o]]&&t[e].navigation[r[o]].hide_onleave&&p(t[e].navigation[r[o]])&&(u(t[e].navigation[r[o]].hideCall),t[e].navigation[r[o]].hideCall=setTimeout(function(e){u(e.showCall),e.tween&&e.tween.reverse()},i?parseInt(t[e].navigation[r[o]].hide_delay_mobile,0):parseInt(t[e].navigation[r[o]].hide_delay,0),t[e].navigation[r[o]]))},f=function(e){e.speed=void 0===e.speed?.5:e.speed,e.anims=[],void 0!==e.anim&&void 0===e.left&&e.anims.push(e.anim),void 0!==e.left&&e.anims.push(e.left.anim),void 0!==e.right&&e.anims.push(e.right.anim);var t=new punchgs.TimelineLite;for(var i in t.add(punchgs.TweenLite.to(e.c,e.speed,{autoAlpha:1,opacity:1,ease:punchgs.Power3.easeInOut}),0),e.anims)if(e.anims.hasOwnProperty(i))switch(e.anims[i]){case"left":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{marginLeft:-50},{marginLeft:0,ease:punchgs.Power3.easeInOut}),0);break;case"right":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{marginLeft:50},{marginLeft:0,ease:punchgs.Power3.easeInOut}),0);break;case"top":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{marginTop:-50},{marginTop:0,ease:punchgs.Power3.easeInOut}),0);break;case"bottom":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{marginTop:50},{marginTop:0,ease:punchgs.Power3.easeInOut}),0);break;case"zoomin":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{scale:.5},{scale:1,ease:punchgs.Power3.easeInOut}),0);break;case"zoomout":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{scale:1.2},{scale:1,ease:punchgs.Power3.easeInOut}),0)}return t.play(),t},m=function(e,i){e.style=void 0===e.style?"":e.style,e.left.style=void 0===e.left.style?"":e.left.style,e.right.style=void 0===e.right.style?"":e.right.style,0===t[i].c.find(".tp-leftarrow.tparrows").length&&t[i].c.append('<rs-arrow style="opacity:0" class="tp-leftarrow tparrows '+e.style+" "+e.left.style+'">'+e.tmp+"</rs-arrow>"),0===t[i].c.find(".tp-rightarrow.tparrows").length&&t[i].c.append('<rs-arrow style="opacity:0"  class="tp-rightarrow tparrows '+e.style+" "+e.right.style+'">'+e.tmp+"</rs-arrow>");var a=t[i].c.find(".tp-leftarrow.tparrows"),r=t[i].c.find(".tp-rightarrow.tparrows");e.rtl?(a.click(function(){t[i].sc_indicator="arrow",t[i].sc_indicator_dir=0,t[i].c.revnext()}),r.click(function(){t[i].sc_indicator="arrow",t[i].sc_indicator_dir=1,t[i].c.revprev()})):(r.click(function(){t[i].sc_indicator="arrow",t[i].sc_indicator_dir=0,t[i].c.revnext()}),a.click(function(){t[i].sc_indicator="arrow",t[i].sc_indicator_dir=1,t[i].c.revprev()})),e.right.j=t[i].c.find(".tp-rightarrow.tparrows"),e.left.j=t[i].c.find(".tp-leftarrow.tparrows"),e.padding_top=parseInt(t[i].carousel.padding_top||0,0),e.padding_bottom=parseInt(t[i].carousel.padding_bottom||0,0),b(a,e.left,i),b(r,e.right,i),"outer-left"!=e.position&&"outer-right"!=e.position||(t[i].outernav=!0)},v=function(e,i,a){var r=e.outerHeight(!0),o=null==t[a]?0:0==t[a].conh?t[a].height:t[a].conh,s="layergrid"==i.container?"fullscreen"==t[a].sliderLayout?t[a].height/2-t[a].gridheight[t[a].level]*t[a].bh/2:t[a].autoHeight||null!=t[a].minHeight&&t[a].minHeight>0?o/2-t[a].gridheight[t[a].level]*t[a].bh/2:0:0,n="top"===i.v_align?{top:"0px",y:Math.round(i.v_offset+s)+"px"}:"center"===i.v_align?{top:"50%",y:Math.round(0-r/2+i.v_offset)+"px"}:{top:"100%",y:Math.round(0-(r+i.v_offset+s))+"px"};e.hasClass("outer-bottom")||punchgs.TweenLite.set(e,n)},y=function(e,i,a){var r=e.outerWidth(!0),o="layergrid"==i.container?"carousel"===t[a].sliderType?0:t[a].width/2-t[a].gridwidth[t[a].level]*t[a].bw/2:0,s="left"===i.h_align?{left:"0px",x:Math.round(i.h_offset+o)+"px"}:"center"===i.h_align?{left:"50%",x:Math.round(0-r/2+i.h_offset)+"px"}:{left:"100%",x:Math.round(0-(r+i.h_offset+o))+"px"};punchgs.TweenLite.set(e,s)},b=function(e,i,a){var r="fullwidth"==t[a].sliderLayout||"fullscreen"==t[a].sliderLayout,o=r?t[a].c.width():t[a].topc.width(),s=t[a].c.height();if(v(e,i,a),y(e,i,a),"outer-left"===i.position&&r?punchgs.TweenLite.set(e,{left:0-e.outerWidth()+"px",x:i.h_offset+"px"}):"outer-right"===i.position&&r&&punchgs.TweenLite.set(e,{right:0-e.outerWidth()+"px",x:i.h_offset+"px"}),e.hasClass("tp-thumbs")||e.hasClass("tp-tabs")){var n=e.data("wr_padding"),l=e.data("maxw"),d=e.data("maxh"),c=e.hasClass("tp-thumbs")?e.find(".tp-thumb-mask"):e.find(".tp-tab-mask"),p=parseInt(i.padding_top||0,0),u=parseInt(i.padding_bottom||0,0),h={},g={};l>o&&"outer-left"!==i.position&&"outer-right"!==i.position?(h.left="0px",h.x=0,h.maxWidth=o-2*n+"px",g.maxWidth=o-2*n+"px"):(h.maxWidth=l,g.maxWidth=o+"px"),d+2*n>s&&"outer-bottom"!==i.position&&"outer-top"!==i.position?(h.top="0px",h.y=0,h.maxHeight=p+u+(s-2*n)+"px",g.maxHeight=p+u+(s-2*n)+"px"):(h.maxHeight=d+"px",g.maxHeight=d+"px"),i.span?("layergrid"==i.container&&"outer-left"!==i.position&&"outer-right"!==i.position&&(p=u=0),"vertical"===i.direction?(h.maxHeight=p+u+(s-2*n)+"px",h.height=p+u+(s-2*n)+"px",h.top=0-p,h.y=0,g.maxHeight=p+u+(Math.min(d,s)-2*n)+"px",punchgs.TweenLite.set(e,h),punchgs.TweenLite.set(c,g),v(c,i,a)):"horizontal"===i.direction&&(h.maxWidth="100%",h.width=o-2*n+"px",h.left=0,h.x=0,g.maxWidth=l>=o?"100%":Math.min(l,o)+"px",punchgs.TweenLite.set(e,h),punchgs.TweenLite.set(c,g),y(c,i,a))):(punchgs.TweenLite.set(e,h),punchgs.TweenLite.set(c,g))}},w=function(e,i,a,r){0===e.find(".tp-bullets").length&&(i.style=void 0===i.style?"":i.style,e.append('<rs-bullets style="opacity:0"  class="tp-bullets '+i.style+" "+i.direction+'"></rs-bullets>'));var o=e.find(".tp-bullets"),s=a.data("key"),n=i.tmp;void 0!==t[r].thumbs[a.index()]&&jQuery.each(t[r].thumbs[a.index()].params,function(e,t){n=n.replace(t.from,t.to)}),o.append('<rs-bullet data-key="'+s+'" class="justaddedbullet tp-bullet">'+n+"</rs-bullet>");var l=e.find(".justaddedbullet"),d=e.find(".tp-bullet").length,c=l.outerWidth()+parseInt(void 0===i.space?0:i.space,0),p=l.outerHeight()+parseInt(void 0===i.space?0:i.space,0);"vertical"===i.direction?(l.css({top:(d-1)*p+"px",left:"0px"}),o.css({height:(d-1)*p+l.outerHeight(),width:l.outerWidth()})):(l.css({left:(d-1)*c+"px",top:"0px"}),o.css({width:(d-1)*c+l.outerWidth(),height:l.outerHeight()})),void 0!==t[r].thumbs[a.index()]&&l.find(".tp-bullet-image").css({backgroundImage:"url("+t[r].thumbs[a.index()].src+")"}),l.click(function(){t[r].sc_indicator="bullet",e.revcallslidewithid(s),e.find(".tp-bullet").removeClass("selected"),jQuery(this).addClass("selected")}),l.removeClass("justaddedbullet"),i.padding_top=parseInt(t[r].carousel.padding_top||0,0),i.padding_bottom=parseInt(t[r].carousel.padding_bottom||0,0),"outer-left"!=i.position&&"outer-right"!=i.position||(t[r].outernav=!0),o.addClass("nav-pos-hor-"+i.h_align),o.addClass("nav-pos-ver-"+i.v_align),o.addClass("nav-dir-"+i.direction),b(o,i,r)},_=function(e,i,a,r,o){var s="tp-thumb"===r?".tp-thumbs":".tp-tabs",n="tp-thumb"===r?".tp-thumb-mask":".tp-tab-mask",l="tp-thumb"===r?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",d="tp-thumb"===r?".tp-thumb":".tp-tab",c="tp-thumb"===r?".tp-thumb-image":".tp-tab-image",p="tp-thumb"===r?"rs-thumb":"rs-tab";if(i.visibleAmount=i.visibleAmount>t[o].slideamount?t[o].slideamount:i.visibleAmount,i.sliderLayout=t[o].sliderLayout,0===e.parent().find(s).length){i.style=void 0===i.style?"":i.style;var u="<"+p+'s style="opacity:0" class="'+r+"s "+(!0===i.span?"tp-span-wrapper":"")+" "+i.position+" "+i.style+'"><rs-navmask class="'+r+'-mask"><'+p+'s-wrap class="'+r+'s-inner-wrapper" style="position:relative;"></'+p+"s-wrap></rs-navmask></"+p+"s>";"outer-top"===i.position?e.parent().prepend(u):"outer-bottom"===i.position?e.after(u):e.append(u),"outer-left"!==i.position&&"outer-right"!==i.position||punchgs.TweenLite.set(t[o].c,{overflow:"visible"}),i.padding_top=parseInt(t[o].carousel.padding_top||0,0),i.padding_bottom=parseInt(t[o].carousel.padding_bottom||0,0),"outer-left"!=i.position&&"outer-right"!=i.position||(t[o].outernav=!0)}var h=a.data("key"),g=e.parent().find(s),f=g.find(n),m=f.find(l),v="horizontal"===i.direction?i.width*i.visibleAmount+i.space*(i.visibleAmount-1):i.width,y="horizontal"===i.direction?i.height:i.height*i.visibleAmount+i.space*(i.visibleAmount-1),w=i.tmp;void 0!==t[o].thumbs[a.index()]&&jQuery.each(t[o].thumbs[a.index()].params,function(e,t){w=w.replace(t.from,t.to)}),m.append("<"+p+' data-liindex="'+a.index()+'" data-key="'+h+'" class="justaddedthumb '+r+'" style="width:'+i.width+"px;height:"+i.height+'px;">'+w+"<"+p+">");var _=g.find(".justaddedthumb"),x=g.find(d).length,k=_.outerWidth()+parseInt(void 0===i.space?0:i.space,0),T=_.outerHeight()+parseInt(void 0===i.space?0:i.space,0);_.find(c).css({backgroundImage:"url("+t[o].thumbs[a.index()].src+")"}),"vertical"===i.direction?(_.css({top:(x-1)*T+"px",left:"0px"}),m.css({height:(x-1)*T+_.outerHeight(),width:_.outerWidth()})):(_.css({left:(x-1)*k+"px",top:"0px"}),m.css({width:(x-1)*k+_.outerWidth(),height:_.outerHeight()})),g.data("maxw",v),g.data("maxh",y),g.data("wr_padding",i.wrapper_padding);var L="outer-top"===i.position||"outer-bottom"===i.position?"relative":"absolute";f.css({maxWidth:v+"px",maxHeight:y+"px",overflow:"hidden",position:"relative"}),g.css({maxWidth:v+"px",maxHeight:y+"px",overflow:"visible",position:L,background:i.wrapper_color,padding:i.wrapper_padding+"px",boxSizing:"contet-box"}),_.click(function(){t[o].sc_indicator="bullet";var i=e.parent().find(l).data("distance");i=void 0===i?0:i,Math.abs(i)<10&&(e.revcallslidewithid(h),e.parent().find(s).removeClass("selected"),jQuery(this).addClass("selected"))}),_.removeClass("justaddedthumb"),g.addClass("nav-pos-hor-"+i.h_align),g.addClass("nav-pos-ver-"+i.v_align),g.addClass("nav-dir-"+i.direction),b(g,i,o),t.callContWidthManager(o)},x=function(e){var i=t[e].cpar.find(".outer-top"),a=t[e].cpar.find(".outer-bottom");t[e].top_outer=i.hasClass("tp-forcenotvisible")?0:i.outerHeight()||0,t[e].bottom_outer=a.hasClass("tp-forcenotvisible")?0:a.outerHeight()||0},k=function(e,t,i,a){t>i||i>a?e.addClass("tp-forcenotvisible"):e.removeClass("tp-forcenotvisible")}}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution;jQuery.extend(!0,t,{stopPanZoom:function(e){null!=e.data("pztl")&&e.data("pztl").pause()},startPanZoom:function(e,i,a){var r=e.data(),o=e.find("rs-sbg"),s=o.data("lazyload")||o.data("src"),n=(r.owidth,r.oheight,"carousel"===t[i].sliderType?t[i].carousel.slide_width:t[i].canvas.width()),l=t[i].canvas.height();if(void 0!==r.panzoom&&null!==r.panzoom){if(e.data("pztl")&&e.data("pztl").kill(),a=a||0,0==e.find(".rs-pzimg").length){var d=o.data("mediafilter");d=void 0===d?"":d,e.append('<rs-pzimg-wrap class="'+d+'" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;display:block"><img class="rs-pzimg" src="'+s+'" style="position:absolute;" width="'+r.owidth+'" height="'+r.oheight+'"></rs-pzimg-wrap>'),e.data("pzimg",e.find(".rs-pzimg"))}var c=function(e,t,i,a,r,o,s){var n=e*i,l=t*i,d=Math.abs(a-n),c=Math.abs(r-l),p=new Object;return p.l=(0-o)*d,p.r=p.l+n,p.t=(0-s)*c,p.b=p.t+l,p.h=o,p.v=s,p};null!=e.data("pztl")&&(e.data("pztl").kill(),e.removeData("pztl"));var p=e.data("pzimg"),u=p.parent(),h=function(e,t,i){var a=void 0===i.panvalues?jQuery.extend(!0,{},function(e){var t=e.panzoom.split(";"),i={duration:10,ease:"Linear.easeNone",scalestart:1,scaleend:1,rotatestart:.01,rotateend:0,blurstart:0,blurend:0,offsetstart:"0/0",offsetend:"0/0"};for(var a in t)if(t.hasOwnProperty(a)){var r=t[a].split(":"),o=r[0],s=r[1];switch(o){case"d":i.duration=parseInt(s,0)/1e3;break;case"e":i.ease=s;break;case"ss":i.scalestart=parseInt(s,0)/100;break;case"se":i.scaleend=parseInt(s,0)/100;break;case"rs":i.rotatestart=parseInt(s,0);break;case"re":i.rotateend=parseInt(s,0);break;case"bs":i.blurstart=parseInt(s,0);break;case"be":i.blurend=parseInt(s,0);break;case"os":i.offsetstart=s;break;case"oe":i.offsetend=s}}return i.offsetstart=i.offsetstart.split("/")||[0,0],i.offsetend=i.offsetend.split("/")||[0,0],i.rotatestart=0===i.rotatestart?.01:i.rotatestart,e.panvalues=i,e.bgposition="center center"==e.bgposition?"50% 50%":e.bgposition,i}(i)):jQuery.extend(!0,{},i.panvalues),r=a.offsetstart,o=a.offsetend,s={start:{width:e,height:e/i.owidth*i.oheight,rotation:a.rotatestart+"deg",scale:a.scalestart,transformOrigin:i.bgposition},starto:{},end:{rotation:a.rotateend+"deg",scale:a.scaleend},endo:{}};a.scalestart,i.owidth,i.oheight,a.scaleend,i.owidth,i.oheight;if(s.start.height<t){var n=t/s.start.height;s.start.height=t,s.start.width=s.start.width*n}var l=function(e,t,i,a){var r=e.bgposition.split(" ")||"center center",o="center"==r[0]?"50%":"left"==r[0]||"left"==r[1]?"0%":"right"==r[0]||"right"==r[1]?"100%":r[0],s="center"==r[1]?"50%":"top"==r[0]||"top"==r[1]?"0%":"bottom"==r[0]||"bottom"==r[1]?"100%":r[1];o=parseInt(o,0)/100||0,s=parseInt(s,0)/100||0;var n=new Object;return n.start=c(a.start.width,a.start.height,a.start.scale,t,i,o,s),n.end=c(a.start.width,a.start.height,a.end.scale,t,i,o,s),n}(i,e,t,s);r[0]=parseFloat(r[0])+l.start.l,o[0]=parseFloat(o[0])+l.end.l,r[1]=parseFloat(r[1])+l.start.t,o[1]=parseFloat(o[1])+l.end.t;var d=l.start.r-l.start.l,p=l.start.b-l.start.t,u=l.end.r-l.end.l,h=l.end.b-l.end.t;return r[0]=r[0]>0?0:d+r[0]<e?e-d:r[0],o[0]=o[0]>0?0:u+o[0]<e?e-u:o[0],r[1]=r[1]>0?0:p+r[1]<t?t-p:r[1],o[1]=o[1]>0?0:h+o[1]<t?t-h:o[1],s.starto.x=r[0]+"px",s.starto.y=r[1]+"px",s.endo.x=o[0]+"px",s.endo.y=o[1]+"px",s.end.ease=s.endo.ease=a.ease,s.end.force3D=s.endo.force3D=!0,s}(n,l,r),g=new punchgs.TimelineLite;if(g.pause(),h.start.transformOrigin="0% 0%",h.starto.transformOrigin="0% 0%",r.panvalues.duration=NaN===r.panvalues.duration||void 0===r.panvalues.duration?10:r.panvalues.duration,g.add(punchgs.TweenLite.fromTo(p,r.panvalues.duration,h.start,h.end),0),g.add(punchgs.TweenLite.fromTo(u,r.panvalues.duration,h.starto,h.endo),0),void 0!==r.panvalues.blurstart&&void 0!==r.panvalues.blurend&&(0!==r.panvalues.blurstart||0!==r.panvalues.blurend)){var f={a:r.panvalues.blurstart},m={a:r.panvalues.blurend,ease:h.endo.ease},v=new punchgs.TweenLite(f,r.panvalues.duration,m);v.eventCallback("onUpdate",function(e){punchgs.TweenLite.set(e,{filter:"blur("+f.a+"px)",webkitFilter:"blur("+f.a+"px)"})},[u]),g.add(v,0)}g.progress(a),g.play(),e.data("pztl",g)}}})}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution,i=t.is_mobile();jQuery.extend(!0,t,{checkForParallax:function(e){var a=t[e].parallax;if(!a.done){if(a.done=!0,i&&a.disable_onmobile)return!1;if(("3D"==a.type||"3d"==a.type)&&(punchgs.TweenLite.set(t[e].c,{overflow:a.ddd_overflow}),punchgs.TweenLite.set(t[e].canvas,{overflow:a.ddd_overflow}),"carousel"!=t[e].sliderType&&a.ddd_shadow)){var r=jQuery('<div class="dddwrappershadow"></div>');punchgs.TweenLite.set(r,{force3D:"auto",transformPerspective:1600,transformOrigin:"50% 50%",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0}),t[e].c.prepend(r)}t[e].slides.each(function(){n(jQuery(this))}),("3D"==a.type||"3d"==a.type)&&t[e].c.find("rs-static-layers").length>0&&(punchgs.TweenLite.set(t[e].c.find("rs-static-layers"),{top:0,left:0,width:"100%",height:"100%"}),n(t[e].c.find("rs-static-layers"))),a.pcontainers=[],a.pcontainer_depths=[],a.bgcontainers=[],a.bgcontainer_depths=[],a.speed=void 0===a.speed?0:parseInt(a.speed,0),a.speedbg=void 0===a.speedbg?0:parseInt(a.speedbg,0),a.speedls=void 0===a.speedls?0:parseInt(a.speedls,0),t[e].c.find("rs-slide rs-sbg-wrap, rs-slide rs-bgvideo").each(function(){var i=jQuery(this),r=i.data("parallax");void 0!==(r="on"==r||!0===r?1:r)&&"off"!==r&&!1!==r&&(a.bgcontainers.push(i.closest("rs-sbg-px")),a.bgcontainer_depths.push(t[e].parallax.levels[parseInt(r,0)-1]/100))});for(var o=1;o<=a.levels.length;o++)t[e].c.find(".rs-pxl-"+o).each(function(){var e=jQuery(this),t=this.className.indexOf("rs-pxmask")>=0?e.closest("rs-px-mask"):e.closest(".rs-parallax-wrap");t.data("parallaxlevel",a.levels[o-1]),t.addClass("tp-parallax-container"),a.pcontainers.push(t),a.pcontainer_depths.push(a.levels[o-1])});"mouse"!=a.type&&"mousescroll"!=a.type&&"3D"!=a.type&&"3d"!=a.type||(t[e].c.mouseenter(function(i){var a=t[e].c.offset().top,r=t[e].c.offset().left;void 0!==t[e].pr_active_key&&(t[e].slides[t[e].pr_active_key].dataset.enterx=i.pageX-r,t[e].slides[t[e].pr_active_key].dataset.entery=i.pageY-a)}),t[e].c.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath",function(i,r){var o=r&&r.li?r.li:jQuery(t[e].slides[t[e].pr_active_key]);if("enterpoint"==a.origo){var s=t[e].c.offset().top,n=t[e].c.offset().left;null==o.data("enterx")&&o.data("enterx",i.pageX-n),null==o.data("entery")&&o.data("entery",i.pageY-s);var l=o.data("enterx")||i.pageX-n,d=o.data("entery")||i.pageY-s,c=l-(i.pageX-n),p=d-(i.pageY-s),u=a.speed/1e3||.4}else s=t[e].c.offset().top,n=t[e].c.offset().left,c=t[e].conw/2-(i.pageX-n),p=t[e].conh/2-(i.pageY-s),u=a.speed/1e3||3;"mouseleave"==i.type&&(c=a.ddd_lasth||0,p=a.ddd_lastv||0,u=1.5);for(var h=0;h<a.pcontainers.length;h++){var g=a.pcontainers[h],f=a.pcontainer_depths[h],m="3D"==a.type||"3d"==a.type?f/200:f/100,v=c*m,y=p*m;"mousescroll"==a.type?punchgs.TweenLite.to(g,u,{force3D:"auto",x:v,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(g,u,{force3D:"auto",x:v,y:y,ease:punchgs.Power3.easeOut,overwrite:"all"})}if("3D"==a.type||"3d"==a.type){var b="rs-slide .dddwrapper, .dddwrappershadow, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer";"carousel"===t[e].sliderType&&(b="rs-slide .dddwrapper, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer"),t[e].c.find(b).each(function(){var r=jQuery(this),o=a.levels[a.levels.length-1]/200,s=c*o,n=p*o,l=0==t[e].conw?0:Math.round(c/t[e].conw*o*100)||0,d=0==t[e].conh?0:Math.round(p/t[e].conh*o*100)||0,h=r.closest("rs-slide"),g=0,f=!1;r.hasClass("dddwrapper-layer")&&(g=a.ddd_z_correction||65,f=!0),r.hasClass("dddwrapper-layer")&&(s=0,n=0),h.index()===t[e].pr_active_key||"carousel"!=t[e].sliderType?!a.ddd_bgfreeze||f?punchgs.TweenLite.to(r,u,{rotationX:d,rotationY:-l,x:s,z:g,y:n,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(r,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(r,.5,{force3D:"auto",rotationY:0,x:0,y:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==i.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}),i&&(window.ondeviceorientation=function(i){var r=Math.round(i.beta||0)-70,o=Math.round(i.gamma||0),s=jQuery(t[e].slides[t[e].pr_active_key]);if(jQuery(window).width()>jQuery(window).height()){var n=o;o=r,r=n}var l=t[e].c.width(),d=t[e].c.height(),c=360/l*o,p=180/d*r,u=a.speed/1e3||3,h=[];if(s.find(".tp-parallax-container").each(function(e){h.push(jQuery(this))}),t[e].c.find("rs-static-layers .tp-parallax-container").each(function(){h.push(jQuery(this))}),jQuery.each(h,function(){var e=jQuery(this),t=parseInt(e.data("parallaxlevel"),0)/100,i=c*t*2,a=p*t*4;punchgs.TweenLite.to(e,u,{force3D:"auto",x:i,y:a,ease:punchgs.Power3.easeOut,overwrite:"all"})}),"3D"==a.type||"3d"==a.type){var g="rs-slide .dddwrapper, .dddwrappershadow, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer";"carousel"===t[e].sliderType&&(g="rs-slide .dddwrapper, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer"),t[e].c.find(g).each(function(){var r=jQuery(this),o=a.levels[a.levels.length-1]/200,s=c*o,n=p*o*3,l=0==t[e].conw?0:Math.round(c/t[e].conw*o*500)||0,d=0==t[e].conh?0:Math.round(p/t[e].conh*o*700)||0,h=r.closest("rs-slide"),g=0,f=!1;r.hasClass("dddwrapper-layer")&&(g=a.ddd_z_correction||65,f=!0),r.hasClass("dddwrapper-layer")&&(s=0,n=0),h.hasClass("active-revslide")||"carousel"!=t[e].sliderType?!a.ddd_bgfreeze||f?punchgs.TweenLite.to(r,u,{rotationX:d,rotationY:-l,x:s,z:g,y:n,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(r,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(r,.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0,rotationX:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==i.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}));var s=t[e].scrolleffect;s.set&&(s.multiplicator_layers=parseFloat(s.multiplicator_layers),s.multiplicator=parseFloat(s.multiplicator)),void 0!==s._L&&0===s._L.length&&(s._L=!1),void 0!==s.bgs&&0===s.bgs.length&&(s.bgs=!1),t.scrollTicker(e)}function n(i){if("3D"==a.type||"3d"==a.type){i.find("rs-sbg-wrap").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'),i.find(".rs-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:'+a.ddd_layer_overflow+';"></div>'),i.find(".rs-pxl-tobggroup").closest(".rs-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');var r=i.find(".dddwrapper"),o=i.find(".dddwrapper-layer");i.find(".dddwrapper-layertobggroup").appendTo(r),"carousel"==t[e].sliderType&&(a.ddd_shadow&&r.addClass("dddwrappershadow"),punchgs.TweenLite.set(r,{borderRadius:t[e].carousel.border_radius})),punchgs.TweenLite.set(i,{overflow:"visible",transformStyle:"preserve-3d",perspective:1600}),punchgs.TweenLite.set(r,{force3D:"auto",transformOrigin:"50% 50%",transformStyle:"preserve-3d",transformPerspective:1600}),punchgs.TweenLite.set(o,{force3D:"auto",transformOrigin:"50% 50%",zIndex:5,transformStyle:"flat",transformPerspective:1600}),punchgs.TweenLite.set(t[e].canvas,{transformStyle:"preserve-3d",transformPerspective:1600})}}},scrollTicker:function(e){1!=t[e].scrollTicker&&(t[e].scrollTicker=!0,i?(punchgs.TweenLite.ticker.fps(150),punchgs.TweenLite.ticker.addEventListener("tick",function(){t.scrollHandling(e)},t[e].c,!1,1)):document.addEventListener("scroll",function(i){t.scrollHandling(e,!0)},{passive:!0})),t.scrollHandling(e,!0)},scrollHandling:function(e,a,r,o){if(void 0!==t[e]){if(t[e].lastwindowheight=t[e].lastwindowheight||window.innerHeight,t[e].conh=0===t[e].conh||void 0===t[e].conh?t[e].infullscreenmode?t[e].minHeight:t[e].c.height():t[e].conh,t[e].lastscrolltop==window.scrollY&&!t[e].duringslidechange&&!a)return!1;punchgs.TweenLite.delayedCall(.2,function(e,i){t[e].lastscrolltop=i},[e,window.scrollY]);var s=void 0!==t[e].topc?t[e].topc[0].getBoundingClientRect():0===t[e].c.height()?t[e].cpar[0].getBoundingClientRect():t[e].c[0].getBoundingClientRect(),n=t[e].viewPort,l=t[e].parallax,d=t[e].slides[void 0===t[e].pr_active_key?0:t[e].pr_active_key];s.hheight=0===s.height?0===t[e].c.height()?t[e].cpar.height():t[e].c.height():s.height;var c=s.top<0||s.hheight>t[e].lastwindowheight?s.top/s.hheight:s.bottom>t[e].lastwindowheight?(s.bottom-t[e].lastwindowheight)/s.hheight:0,p=t[e].fixedOnTop?Math.min(1,Math.max(0,window.scrollY/t[e].lastwindowheight)):Math.min(1,Math.max(0,1-(s.top+s.hheight)/(s.hheight+t[e].lastwindowheight))),u=s.top>=0&&s.top<=t[e].lastwindowheight||s.top<=0&&s.bottom>=0||s.top<=0&&s.bottom>=0;t[e].scrollproc=c,t.callBackHandling&&t.callBackHandling(e,"parallax","start");var h=Math.max(0,1-Math.abs(c));if(u?t[e].sbtimeline.fixed?(t[e].curheight=void 0===t[e].curheight?t[e].cpar.height():t[e].curheight,void 0===t[e].sbtimeline.rest&&t.updateFixedScrollTimes(e),s.top>=0&&s.top<=t[e].lastwindowheight?(p=t[e].sbtimeline.fixStart*(1-s.top/t[e].lastwindowheight)/1e3,t[e].topc.removeClass("rs-fixedscrollon"),punchgs.TweenLite.set(t[e].cpar,{top:0})):s.top<=0&&s.bottom>=t[e].curheight?(t[e].topc.addClass("rs-fixedscrollon"),punchgs.TweenLite.set(t[e].cpar,{top:0}),p=(t[e].sbtimeline.fixStart+t[e].sbtimeline.time*(Math.abs(s.top)/(s.hheight-t[e].curheight)))/1e3):(punchgs.TweenLite.set(t[e].cpar,{top:s.height-t[e].curheight}),t[e].topc.removeClass("rs-fixedscrollon"),p=(t[e].sbtimeline.fixEnd+t[e].sbtimeline.rest*(1-s.bottom/t[e].curheight))/1e3)):p=t[e].duration*p/1e3:t[e].sbtimeline.fixed&&(t[e].topc.removeClass("rs-fixedscrollon"),punchgs.TweenLite.set(t[e].cpar,{top:0})),n.enable&&(void 0===t[e].viewPort.vaType&&t.updateVisibleArea(e),"%"===n.vaType[t[e].level]&&n.visible_area[t[e].level]<=h||"px"===n.vaType[t[e].level]&&(s.top<=0&&s.bottom>=t[e].lastwindowheight||s.top>=0&&s.bottom<=t[e].lastwindowheight||s.top>=0&&s.top<t[e].lastwindowheight-n.visible_area[t[e].level]||s.bottom>=n.visible_area[t[e].level]&&s.bottom<t[e].lastwindowheight)?t[e].inviewport||(t[e].inviewport=!0,t.enterInViewPort(e)):t[e].inviewport&&(t[e].inviewport=!1,t.leaveViewPort(e))),u&&void 0!==d&&void 0!==d.dataset&&void 0!==d.dataset.key&&!0!==o)for(var g in t[e].sbas[d.dataset.key])void 0===t[e]._L[g]||void 0===t[e]._L[g].timeline||1!=t[e]._L[g].animationonscroll&&"true"!=t[e]._L[g].animationonscroll||(void 0!==t[e]._L[g].scrollBasedOffset&&(p+=t[e]._L[g].scrollBasedOffset),p>0&&t[e]._L[g].animOnScrollRepeats<5?(t[e]._L[g].timeline.time(p),t[e]._L[g].animOnScrollRepeats++):punchgs.TweenMax.to(t[e]._L[g].timeline,t[e].sbtimeline.speed,{time:p,ease:t[e].sbtimeline.ease}));if(i&&l.disable_onmobile)return!1;if("3d"!=l.type&&"3D"!=l.type){if(("scroll"==l.type||"mousescroll"==l.type)&&l.pcontainers)for(var f=0;f<l.pcontainers.length;f++)if(l.pcontainers[f].length>0){var m=l.pcontainers[f],v=l.pcontainer_depths[f]/100,y=Math.round(c*(-v*t[e].conh)*10)/10||0,b=void 0!==r?r:l.speedls/1e3||0;m.data("parallaxoffset",y),punchgs.TweenLite.to(m,b,{overwrite:"auto",force3D:"auto",y:y})}if(l.bgcontainers)for(f=0;f<l.bgcontainers.length;f++){var w=l.bgcontainers[f];y=c*(-l.bgcontainer_depths[f]*t[e].conh)||0,b=void 0!==r?r:l.speedbg/1e3||.015;b=void 0!==t[e].parallax.lastBGY&&0===b&&Math.abs(y-t[e].parallax.lastBGY)>50?.15:b,punchgs.TweenLite.to(w,b,{position:"absolute",top:"0px",left:"0px",backfaceVisibility:"hidden",force3D:"true",y:y+"px"}),t[e].parallax.lastBGY=y}}var _=t[e].scrolleffect;if(_.set&&(!_.mobile||!i)){var x=Math.abs(c)-_.tilt/100;if(x=x<0?0:x,!1!==_._L){var k=1-x*_.multiplicator_layers,T={force3D:"true"};if("top"==_.direction&&c>=0&&(k=1),"bottom"==_.direction&&c<=0&&(k=1),k=k>1?1:k<0?0:k,_.fade&&(T.opacity=k),_.scale){var L=k;T.scale=1-L+1}if(_.blur){var R=(1-k)*_.maxblur;T["-webkit-filter"]="blur("+R+"px)",T.filter="blur("+R+"px)"}if(_.grayscale){var I="grayscale("+100*(1-k)+"%)";T["-webkit-filter"]=void 0===T["-webkit-filter"]?I:T["-webkit-filter"]+" "+I,T.filter=void 0===T.filter?I:T.filter+" "+I}punchgs.TweenLite.set(_._L,T)}if(!1!==_.bgs){k=1-x*_.multiplicator,T={backfaceVisibility:"hidden",force3D:"true"};for(var z in"top"==_.direction&&c>=0&&(k=1),"bottom"==_.direction&&c<=0&&(k=1),k=k>1?1:k<0?0:k,_.bgs)if(_.bgs.hasOwnProperty(z)){if(_.bgs[z].fade&&(T.opacity=k),_.bgs[z].blur){R=(1-k)*_.maxblur;T["-webkit-filter"]="blur("+R+"px)",T.filter="blur("+R+"px)"}if(_.bgs[z].grayscale){I="grayscale("+100*(1-k)+"%)";T["-webkit-filter"]=void 0===T["-webkit-filter"]?I:T["-webkit-filter"]+" "+I,T.filter=void 0===T.filter?I:T.filter+" "+I}punchgs.TweenLite.set(_.bgs[z].c,T)}}}t.callBackHandling&&t.callBackHandling(e,"parallax","end")}}})}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution;jQuery.extend(!0,t,{animateSlide:function(e){return a(e)}});var i=function(e,t){var i;return void 0!==(i=jQuery.isArray(e)?e.length>=t?e[t]:e[e.length-1]:e)&&jQuery.isNumeric(i)?parseInt(e,0):i},a=function(e){var a=e.id,o="arrow"==t[a].sc_indicator?void 0===t[a].sc_indicator_dir?t[a].sdir:t[a].sc_indicator_dir:t[a].sdir,s=!0===e.recall?jQuery.extend(!0,{},t[a].lastSliderTransition):function(e,i,a){var r="Power1.easeIn",o="Power1.easeOut",s="Power1.easeInOut",n="Power2.easeIn",l="Power2.easeOut",d="Power2.easeInOut",c="Power3.easeInOut",p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],u=[17,18,19,20,21,22,23,24,25,27],h=0,g=1,f=0,m=[["boxslide",0,0,10,"box",!1,null,0,o,o,1e3,6],["boxrandomrotate",0,1,10,"box",!1,null,60,o,o,1e3,6],["boxfade",1,0,10,"box",!1,null,1,s,s,1e3,5],["slotslide-horizontal",2,0,0,"horizontal",!0,!1,2,d,d,1e3,3],["slotslide-vertical",3,0,0,"vertical",!0,!1,3,d,d,1e3,3],["curtain-1",4,3,0,"horizontal",!0,!0,4,o,o,900,5],["curtain-2",5,3,0,"horizontal",!0,!0,5,o,o,900,5],["curtain-3",6,3,25,"horizontal",!0,!0,6,o,o,900,5],["slotzoom-horizontal",7,0,0,"horizontal",!0,!0,7,o,o,1e3,7],["slotzoom-vertical",8,0,0,"vertical",!0,!0,8,l,l,1e3,8],["slotzoom-mixed",8,1,0,"vertical",!0,!0,59,l,l,1e3,8],["slotfade-horizontal",9,0,0,"horizontal",!0,null,9,d,d,1500,10],["slotfade-vertical",10,0,0,"vertical",!0,null,10,d,d,1500,10],["crossfade-horizontal",9,0,0,"horizontal",!0,null,9,d,d,0,10],["crossfade-vertical",10,0,0,"vertical",!0,null,10,d,d,0,10],["fade",11,0,1,"horizontal",!0,null,11,d,d,1e3,1],["crossfade",11,1,1,"horizontal",!0,null,11,d,d,1e3,1],["fadethroughdark",11,2,1,"horizontal",!0,null,11,d,d,1e3,1],["fadethroughlight",11,3,1,"horizontal",!0,null,11,d,d,1e3,1],["fadethroughtransparent",11,4,1,"horizontal",!0,null,11,d,d,1e3,1],["slideleft",12,0,1,"horizontal",!0,!0,12,c,c,1e3,1],["slideup",13,0,1,"horizontal",!0,!0,13,c,c,1e3,1],["slidedown",14,0,1,"horizontal",!0,!0,14,c,c,1e3,1],["slideright",15,0,1,"horizontal",!0,!0,15,c,c,1e3,1],["slideoverleft",12,7,1,"horizontal",!0,!0,12,c,c,1e3,1],["slideoverup",13,7,1,"horizontal",!0,!0,13,c,c,1e3,1],["slideoverdown",14,7,1,"horizontal",!0,!0,14,c,c,1e3,1],["slideoverright",15,7,1,"horizontal",!0,!0,15,c,c,1e3,1],["slideremoveleft",12,8,1,"horizontal",!0,!0,12,c,c,1e3,1],["slideremoveup",13,8,1,"horizontal",!0,!0,13,c,c,1e3,1],["slideremovedown",14,8,1,"horizontal",!0,!0,14,c,c,1e3,1],["slideremoveright",15,8,1,"horizontal",!0,!0,15,c,c,1e3,1],["papercut",16,0,0,"vertical",null,!0,16,c,c,1e3,2],["3dcurtain-horizontal",17,0,20,"vertical",!0,!0,17,s,s,2e3,7],["3dcurtain-vertical",18,0,10,"horizontal",!0,!0,18,s,s,2e3,7],["cubic",19,0,20,"horizontal",!1,!0,19,d,d,1e3,1],["cube",19,0,20,"horizontal",!1,!0,20,d,d,1e3,1],["flyin",20,0,4,"vertical",!1,!0,21,"Power3.easeOut",c,1e3,1],["turnoff",21,0,1,"horizontal",!1,!0,22,c,c,1e3,1],["incube",22,0,20,"horizontal",!1,!0,23,d,d,1e3,1],["cubic-horizontal",23,0,20,"vertical",!1,!0,24,d,d,1e3,1],["cube-horizontal",23,0,20,"vertical",!1,!0,25,d,d,1e3,1],["incube-horizontal",24,0,20,"vertical",!1,!0,26,d,d,1e3,1],["turnoff-vertical",25,0,1,"horizontal",!1,!0,27,d,d,1e3,1],["fadefromright",12,1,1,"horizontal",!0,!0,28,d,d,1e3,1],["fadefromleft",15,1,1,"horizontal",!0,!0,29,d,d,1e3,1],["fadefromtop",14,1,1,"horizontal",!0,!0,30,d,d,1e3,1],["fadefrombottom",13,1,1,"horizontal",!0,!0,31,d,d,1e3,1],["fadetoleftfadefromright",12,2,1,"horizontal",!0,!0,32,d,d,1e3,1],["fadetorightfadefromleft",15,2,1,"horizontal",!0,!0,33,d,d,1e3,1],["fadetobottomfadefromtop",14,2,1,"horizontal",!0,!0,34,d,d,1e3,1],["fadetotopfadefrombottom",13,2,1,"horizontal",!0,!0,35,d,d,1e3,1],["parallaxtoright",15,3,1,"horizontal",!0,!0,36,d,d,1500,1],["parallaxtoleft",12,3,1,"horizontal",!0,!0,37,d,d,1500,1],["parallaxtotop",14,3,1,"horizontal",!0,!0,38,d,d,1500,1],["parallaxtobottom",13,3,1,"horizontal",!0,!0,39,d,d,1500,1],["scaledownfromright",12,4,1,"horizontal",!0,!0,40,d,n,1e3,1],["scaledownfromleft",15,4,1,"horizontal",!0,!0,41,d,n,1e3,1],["scaledownfromtop",14,4,1,"horizontal",!0,!0,42,d,n,1e3,1],["scaledownfrombottom",13,4,1,"horizontal",!0,!0,43,d,n,1e3,1],["zoomout",13,5,1,"horizontal",!0,!0,44,d,d,1e3,1],["zoomin",13,6,1,"horizontal",!0,!0,45,d,d,1e3,1],["slidingoverlayup",27,0,1,"horizontal",!0,!0,47,s,o,2e3,1],["slidingoverlaydown",28,0,1,"horizontal",!0,!0,48,s,o,2e3,1],["slidingoverlayright",30,0,1,"horizontal",!0,!0,49,s,o,2e3,1],["slidingoverlayleft",29,0,1,"horizontal",!0,!0,50,s,o,2e3,1],["parallaxcirclesup",31,0,1,"horizontal",!0,!0,51,d,r,1500,1],["parallaxcirclesdown",32,0,1,"horizontal",!0,!0,52,d,r,1500,1],["parallaxcirclesright",33,0,1,"horizontal",!0,!0,53,d,r,1500,1],["parallaxcirclesleft",34,0,1,"horizontal",!0,!0,54,d,r,1500,1],["notransition",26,0,1,"horizontal",!0,null,46,d,n,1e3,1],["parallaxright",15,3,1,"horizontal",!0,!0,55,d,n,1500,1],["parallaxleft",12,3,1,"horizontal",!0,!0,56,d,n,1500,1],["parallaxup",14,3,1,"horizontal",!0,!0,57,d,r,1500,1],["parallaxdown",13,3,1,"horizontal",!0,!0,58,d,r,1500,1],["grayscale",11,5,1,"horizontal",!0,null,11,d,d,1e3,1],["grayscalecross",11,6,1,"horizontal",!0,null,11,d,d,1e3,1],["brightness",11,7,1,"horizontal",!0,null,11,d,d,1e3,1],["brightnesscross",11,8,1,"horizontal",!0,null,11,d,d,1e3,1],["blurlight",11,9,1,"horizontal",!0,null,11,d,d,1e3,1],["blurlightcross",11,10,1,"horizontal",!0,null,11,d,d,1e3,1],["blurstrong",11,9,1,"horizontal",!0,null,11,d,d,1e3,1],["blurstrongcross",11,10,1,"horizontal",!0,null,11,d,d,1e3,1]];return t[e].duringslidechange=!0,jQuery.each(["parallaxcircles","slidingoverlay","slide","slideover","slideremove","parallax","parralaxto"],function(e,t){i==t+"horizontal"&&(i=1!=a?t+"left":t+"right"),i==t+"vertical"&&(i=1!=a?t+"up":t+"down")}),"random"==i?i=Math.min(Math.round(Math.random()*(m.length-1)),m.length-1):"random-static"==i?i=p[Math.min(Math.round(Math.random()*p.length-1),p.length-1)]:"random-premium"==i&&(i=u[Math.min(Math.round(Math.random()*u.length-1),u.length-1)]),1==t[e].isJoomla&&null!=window.MooTools&&-1!=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45].indexOf(i)&&(i=u[Math.max(0,Math.min(u.length-1,Math.round(Math.random()*(u.length-2))+1))]),jQuery.each(m,function(e,t){t[0]!=i&&t[7]!=i||(h=t[1],g=t[2],f=e)}),{nTR:h=Math.max(0,Math.min(30,h)),TR:m[f],trC:g}}(a,e.animation.transition[e.ntrid],o),n=t[a].pr_next_bg&&void 0!==t[a].pr_next_bg.data("panzoom")&&(s.nTR<11||17==s.nTR||18===s.nTR||s.nTR>=27&&s.nTR<=30)?11:s.nTR;!0!==e.recall?(t[a].lastSliderAnimation=jQuery.extend(!0,{},e.animation),t[a].lastSliderTransition=jQuery.extend(!0,{},s)):e.animation=jQuery.extend(!0,{},t[a].lastSliderAnimation);var l=!0===e.recall?s.ntrid:e.ntrid||0,d=i(e.animation.masterspeed,l);d=(d="default"===d||"d"===d?s.TR[10]:"random"===d?Math.round(1e3*Math.random()+300):null!=d?parseInt(d,0):s.TR[10])>t[a].duration?t[a].duration:d,t[a].rotate=i(e.animation.rotate,l),t[a].rotate=null==t[a].rotate||"default"==t[a].rotate||"d"==t[a].rotate?0:999==t[a].rotate||"random"==t[a].rotate?Math.round(360*Math.random()):t[a].rotate,t[a].rotate=window._rs_ie||window._rs_ie9?0:t[a].rotate,(n<11||16===n||17===n||18===n||s.nTR>=27&&s.nTR<=30)&&(t[a].slots=i(e.animation.slotamount,l),t[a].slots=null==t[a].slots||"default"==t[a].slots||"d"==t[a].slots?s.TR[11]:"random"==t[a].slots?Math.round(12*Math.random()+4):t[a].slots,t[a].slots=t[a].slots<1?"boxslide"==s.TR[0]?Math.round(6*Math.random()+3):"boxslide"==s.TR[0]||"flyin"==s.TR[0]?Math.round(4*Math.random()+1):t[a].slots:t[a].slots,t[a].slots=(4==n||5==n||6==n)&&t[a].slots<3?3:t[a].slots,t[a].slots=0!=s.TR[3]?Math.min(t[a].slots,s.TR[3]):t[a].slots,t[a].slots=9==n?t[a].width/t[a].slots:10==n?t[a].height/t[a].slots:t[a].slots,t[a].slots=jQuery.inArray(n,[19,20,21,22,23,24,25,27])>=0?1:t[a].slots,t[a].slots=3!=n&&8!=n&&10!=n||"vertical"!==s.TR[4]?t[a].slots:t[a].slots+2,null!=s.TR[6]&&r(t[a].pr_active_bg,a,s.TR[6],s.TR[4]),null!=s.TR[5]&&r(t[a].pr_next_bg,a,s.TR[5],s.TR[4]),t[a].mtl.delay(.075));var c=7===n||16===n||8===n||17===n||18===n?0:1,p=n<11||17===n||18===n?0:1;t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.find("rs-sbg"),{scale:1,rotationX:0,rotationY:0,rotationZ:0,z:0,top:0,left:0,x:0,y:0,clearProps:"filter, transform",opacity:c}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.find("rs-sbg"),{scale:1,rotationX:0,rotationY:0,rotationZ:0,z:0,top:0,left:0,x:0,y:0,clearProps:"filter, transform",opacity:p}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg,{transformOrigin:"50% 50% 0",transformPerspective:600,scale:1,rotationX:0,rotationY:0,rotationZ:0,z:0,autoAlpha:1,top:0,left:0,x:0,y:0,clearProps:"filter, transform"}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg,{transformOrigin:"50% 50% 0",transformPerspective:600,scale:1,rotationX:0,rotationY:0,rotationZ:0,z:0,autoAlpha:1,top:0,left:0,x:0,y:0,clearProps:"filter, transform"}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.parent(),{backgroundColor:"transparent"}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.parent(),{backgroundColor:"transparent"}),0);var u=i(e.animation.easein,l),h=i(e.animation.easeout,l);if(u="default"===u||"d"===u?s.TR[8]||punchgs.Power2.easeInOut:u||s.TR[8]||punchgs.Power2.easeInOut,h="default"===h||"d"===h?s.TR[9]||punchgs.Power2.easeInOut:h||s.TR[9]||punchgs.Power2.easeInOut,0==n){var g=Math.ceil(t[a].height/t[a].sloth),f=0;t[a].pr_next_bg.find(".slotslide").each(function(e){f=++f===g?0:f,t[a].rotate=1===s.trC?45:t[a].rotate,t[a].mtl.add(punchgs.TweenLite.from(this,d/2e3,{opacity:0,transformStyle:"flat",transformPerspective:600,scale:0,rotationZ:0!==t[a].rotate?Math.random()*t[a].rotate-t[a].rotate/2:0,force3D:"auto",ease:u}),(10*e+30*f)/3e3)})}else if(1==n)t[a].pr_next_bg.find(".slotslide").each(function(e){t[a].mtl.add(punchgs.TweenLite.from(this,(Math.random()*d+300)/1e3,{autoAlpha:0,force3D:"auto",rotation:t[a].rotate,ease:u}),(500*Math.random()+200)/1e3)});else if(2==n||3==n)t[a].pr_active_bg.find(".slotslide").each(function(){t[a].mtl.add(punchgs.TweenLite.to(this,d/1e3,{top:3===n?t[a].sloth:0,left:2===n?t[a].slotw:0,ease:u,force3D:"auto",rotation:0-t[a].rotate}),0)}),t[a].pr_next_bg.find(".slotslide").each(function(){t[a].mtl.add(punchgs.TweenLite.from(this,d/1e3,{top:3==n?1===o?0-t[a].sloth:t[a].sloth:0,left:2==n?1===o?0-t[a].slotw:t[a].slotw:0,ease:u,force3D:"auto",rotation:t[a].rotate}),0)});else if(4==n||5==n||6==n){var m=new punchgs.TimelineLite,v=d/1e3-d/1e3/t[a].slots;t[a].slots-=t[a].slots%2==1?1:0,t[a].pr_active_bg.find(".slotslide").each(function(e){var i=6!==n?e:e>t[a].slots/2?t[a].slots-e:e;m.add(punchgs.TweenLite.to(this,v,{transformPerspective:600,force3D:"auto",top:1!==o?t[a].height:-t[a].height,opacity:.75,rotation:t[a].rotate,ease:u,delay:(5!==n?i:t[a].slots-i)*(v/t[a].slots)/(6===n?1.3:1)}),0),t[a].mtl.add(m,0)}),t[a].pr_next_bg.find(".slotslide").each(function(e){var i=6!==n?e:e>t[a].slots/2?t[a].slots-e:e;m.add(punchgs.TweenLite.from(this,v,{top:1==o?t[a].height:-t[a].height,opacity:.75,rotation:t[a].rotate,force3D:"auto",ease:punchgs.eo,delay:(5!==n?i:t[a].slots-i)*(v/t[a].slots)/(6===n?1.3:1)}),0),t[a].mtl.add(m,0)})}else if(7==n||8==n)d=Math.min(t[a].duration||d,d),t[a].pr_active_bg.find(".slotslide").each(function(e){var i=e>t[a].slots/2?t[a].slots-e:e;t[a].mtl.add(punchgs.TweenLite.to(this.getElementsByTagName("div"),d/1e3,{x:8===n&&0===s.trC?0:i*t[a].slotw/3,y:8===n&&0===s.trC?i*t[a].sloth/3:0,ease:u,transformPerspective:600,force3D:"auto",filter:"blur(2px)",scale:1.2,opacity:0}),0)}),t[a].pr_next_bg.find(".slotslide").each(function(e){var i=e>t[a].slots/2?t[a].slots-e:e;t[a].mtl.add(punchgs.TweenLite.fromTo(this.getElementsByTagName("div"),d/1e3,{x:8===n&&0===s.trC?0:0-i*t[a].slotw/3,y:8===n&&0===s.trC?0-i*t[a].sloth/3:0,filter:"blur(2px)",opacity:0,transformPerspective:600,scale:1.2},{x:0,y:0,ease:h,force3D:"auto",scale:1,filter:"blur(0px)",opacity:1,rotation:0}),0)});else if(9==n||10==n)for(var y=t[a].pr_next_bg[0].getElementsByClassName("slotslide"),b=d-d/1.8,w=0;w<y.length;w++)t[a].mtl.add(punchgs.TweenLite.fromTo(y[w],(d-w*(b/t[a].slots))/1e3,{opacity:0,force3D:"auto",transformPerspective:600},{opacity:1,ease:"Linear.easeNone",delay:w*(b/t[a].slots)/1e3}),0);else if(11==n){s.trC=Math.min(12,s.trC);var _=2==s.trC?"#000000":3==s.trC?"#ffffff":"transparent";switch(s.trC){case 0:t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,d/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:u}),0);break;case 1:t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,d/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:u}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,d/1e3,{autoAlpha:1},{autoAlpha:0,force3D:"auto",ease:u}),0);break;case 2:case 3:case 4:t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.parent(),{backgroundColor:_,force3D:"auto"}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.parent(),{backgroundColor:"transparent",force3D:"auto"}),0),t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,d/2e3,{autoAlpha:0,force3D:"auto",ease:u}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,d/2e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:u}),d/2e3);break;case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:var x="blur("+(jQuery.inArray(s.trC,[9,10])>=0?5:jQuery.inArray(s.trC,[11,12])>=0?10:0)+"px) grayscale("+(jQuery.inArray(s.trC,[5,6,7,8])>=0?100:0)+"%) brightness("+(jQuery.inArray(s.trC,[7,8])>=0?300:0)+"%)",k="blur(0px) grayscale(0%) brightness(100%)";t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,d/1e3,{autoAlpha:0,filter:x,"-webkit-filter":x},{autoAlpha:1,filter:k,"-webkit-filter":k,force3D:"auto",ease:u}),0),jQuery.inArray(s.trC,[6,8,10])>=0&&t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,d/1e3,{autoAlpha:1,filter:k,"-webkit-filter":k},{autoAlpha:0,force3D:"auto",ease:u,filter:x,"-webkit-filter":x}),0)}t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.find("rs-sbg"),{autoAlpha:1}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.find("rs-sbg"),{autoAlpha:1}),0)}else if(12==n||13==n||14==n||15==n){var T=3==s.trC?d/1300:d/1e3,L=d/1e3,R=5==s.trC||6==s.trC?0:t[a].width,I=5==s.trC||6==s.trC?0:t[a].currentSlideHeight,z=12==n?R:15==n?0-R:0,S=13==n?5==s.trC||6==s.trC?0:t[a].height:14==n?5==s.trC||6==s.trC?0:0-t[a].height:0,M=1==s.trC||2==s.trC||5==s.trC||6==s.trC?0:1,O=4==s.trC||5==s.trC?.6:6==s.trC?1.4:1,P=5==s.trC?1.4:6==s.trC?.6:1;if(7!=s.trC&&4!=s.trC||(R=0,I=0),8==s.trC?(t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide,{zIndex:20}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide,{zIndex:15}),0),t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_next_bg,.01,{overflow:"hidden",left:0,top:0,x:0,y:0,scale:1,autoAlpha:1,rotation:0,overwrite:!0,immediateRender:!0,force3D:"auto"}),0)):(t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide,{zIndex:15}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide,{zIndex:20}),0),t[a].mtl.add(punchgs.TweenLite.from(t[a].pr_next_bg,T,{left:z,top:S,overflow:"hidden",scale:P,autoAlpha:M,rotation:t[a].rotate,ease:u,force3D:"auto"}),0)),1!=s.trC)switch(n){case 12:t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,L,{left:0-R+"px",overflow:"hidden",force3D:"auto",scale:O,autoAlpha:M,rotation:t[a].rotate,ease:h}),0);break;case 15:t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,L,{left:R+"px",overflow:"hidden",force3D:"auto",scale:O,autoAlpha:M,rotation:t[a].rotate,ease:h}),0);break;case 13:t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,L,{top:0-I+"px",overflow:"hidden",force3D:"auto",scale:O,autoAlpha:M,rotation:t[a].rotate,ease:h}),0);break;case 14:t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,L,{top:I+"px",overflow:"hidden",force3D:"auto",scale:O,autoAlpha:M,rotation:t[a].rotate,ease:h}),0)}}else if(16==n){var C=1===o?"80% 50% 0":"20%  50% 0";t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide,{zIndex:20}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide,{zIndex:15}),0),t[a].pr_active_bg.find(".slotslide").each(function(e){t[a].mtl.add(punchgs.TweenLite.fromTo(this,d/1e3,{left:0,rotationZ:0,opacity:1,top:0,z:0,scale:1},{opacity:1,left:1===o?0==e?-t[a].width/1.6:-t[a].width/1.8:0===e?t[a].width/1.6:t[a].width/1.8,rotationZ:1===o?0===e?-35:25:0===e?25:-35,z:0,top:0==e?"-120%":"140%",scale:.8,force3D:"auto",transformPerspective:600,transformOrigin:C,delay:0,ease:u}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(this,d/2e3,{opacity:1},{opacity:0,delay:d/2e3}),0)}),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,d/1e3-d/7e3,{x:100*Math.random()-50,opacity:1,scale:.9,rotationZ:10*Math.random()-5},{x:0,opacity:1,scale:1,rotationZ:0,ease:u,force3D:"auto",delay:d/7e3}),0)}else if(17==n||18==n)t[a].pr_next_bg.find(".slotslide").each(function(e){t[a].mtl.add(punchgs.TweenLite.fromTo(this,d/t[a].slots/1e3,{opacity:0,top:0,left:0,rotationY:17===n?0:90,scale:1,rotationX:17===n?-90:0,force3D:"auto",transformPerspective:600,transformOrigin:17===n?"top center":"center left"},{opacity:1,top:0,left:0,rotationX:0,rotationY:0,force3D:"auto",ease:h,delay:e*(d/t[a].slots/2e3)}),0)}),t[a].pr_active_bg.find(".slotslide").each(function(e){t[a].mtl.add(punchgs.TweenLite.fromTo(this,d/t[a].slots/1e3,{opacity:1,rotationY:0,scale:1,rotationX:0,force3D:"auto",transformPerspective:600,transformOrigin:17===n?"bottom center":"center right"},{opacity:0,rotationX:17===n?110:0,rotationY:17===n?0:110,force3D:"auto",ease:u,delay:e*(d/t[a].slots/2e3)}),0)});else if(19==n||22==n||23==n||24==n){t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide,{zIndex:20}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide,{zIndex:10}),0);C=19===n?"center center -"+t[a].height/2:22===n?"center center "+t[a].height/2:23===n?"center center -"+t[a].width/2:"center center "+t[a].width/2;punchgs.TweenLite.set(t[a].c,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600}),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,d/1e3,{rotationX:19==n||22===n?1==o?-90:90:0,rotationY:23==n||24===n?1==o?-90:90:0,left:0,top:0,scale:1,x:0,y:0,overflow:"hidden",autoAlpha:1,transformStyle:"flat",backfaceVisibility:"hidden",force3D:"auto",transformPerspective:1200,transformOrigin:C},{overflow:"hidden",left:0,autoAlpha:1,rotationX:0,rotationY:0,top:0,scale:1,delay:0,ease:u,transformStyle:"flat",backfaceVisibility:"hidden",force3D:"auto",transformPerspective:1200,transformOrigin:C}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,d/2e3,{z:19==n||23===n?-200:0},{z:19===n||23===n?0:-200,ease:"Power3.easeInOut",delay:19===n||23===n?d/2e3:0}),0),22!==n&&24!==n||t[a].mtl.add(punchgs.TweenLite.fromTo([t[a].pr_active_bg,t[a].pr_next_bg],d/2e3,{z:-200},{z:0,ease:"Power2.easeIn",delay:d/2e3}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,d/2e3,{z:0},{z:-200,ease:"Power3.easeInOut",delay:0,force3D:"auto"}),0),19!==n&&23!==n||t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,d/2e3,{autoAlpha:1},{autoAlpha:0,ease:"LinearEase.none",delay:d/2e3,force3D:"auto"}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,d/1e3,{overflow:"hidden",rotationX:0,rotationY:0,rotationZ:0,top:0,left:0,scale:1,transformStyle:"flat",backfaceVisibility:"hidden",force3D:"auto",transformPerspective:1200,transformOrigin:C},{rotationX:19===n||22===n?1==o?90:-90:0,rotationY:23===n||24===n?1==o?90:-90:0,overflow:"hidden",top:0,scale:1,delay:0,force3D:"auto",ease:u,transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:1200,transformOrigin:C}),0)}else if(20==n){C=1===o?"20% ":"80% ";C+="60% -50%",t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,d/1e3,{left:1===o?-t[a].width:t[a].width,rotationX:20,z:-t[a].width,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:C,rotationY:1===o?50:-50},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:0,ease:u}),0),C=1!=o?"20% ":"80% ",C+="60% -50%",t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,d/1e3,{autoAlpha:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:C,rotationY:0},{autoAlpha:1,rotationX:20,top:0,z:-t[a].width,left:1!=o?-t[a].width/1.2:t[a].width/1.2,force3D:"auto",rotationY:1===o?-50:50,delay:0,ease:"Power2.easeInOut"}),0)}else if(21==n||25==n){var j=25===n?t[a].rotate:1===o?90:-90,A=25===n?1===o?-90:90:t[a].rotate;C=1===o?25===n?"center top 0":"left center 0":25===n?"center bottom 0":"right center 0";t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,d/1e3,{transformStyle:"flat",rotationX:A,top:0,left:0,autoAlpha:0,force3D:"auto",transformPerspective:1200,transformOrigin:C,rotationY:j},{autoAlpha:1,rotationX:0,rotationY:0,ease:u}),0),C=1===o?25===n?"center bottom 0":"right center 0":25===n?"center top 0":"left center 0",j=25!==n?-j:j,A=25!==n?A:-A,t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,d/1e3,{rotationX:0,rotationY:0,transformStyle:"flat",transformPerspective:1200,force3D:"auto"},{immediateRender:!0,rotationX:A,transformOrigin:C,rotationY:j,ease:h}),0)}else if(26==n)d=0,t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,.001,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:u}),0),t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,.001,{autoAlpha:0,force3D:"auto",ease:u}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.find("rs-sbg"),{autoAlpha:1}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.find("rs-sbg"),{autoAlpha:1}),0);else if(27==n||28==n||29==n||30==n){var Q=t[a].pr_next_bg.find(".slot"),H=27==n||29==n?"-100%":"+100%",N=27==n||29==n?"+100%":"-100%",D=27==n||29==n?"-80%":"80%",W=27==n||29==n?"+80%":"-80%",B=27==n||29==n?"+10%":"-10%",Y={overwrite:"all"},F={autoAlpha:0,zIndex:1,force3D:"auto",ease:u},V={position:"inherit",autoAlpha:0,overwrite:"all",zIndex:1},X={autoAlpha:1,force3D:"auto",ease:h},E={overwrite:"all",zIndex:2,opacity:1,autoAlpha:1},Z={autoAlpha:1,force3D:"auto",overwrite:"all",ease:u},q={overwrite:"all",zIndex:2,autoAlpha:1},U={autoAlpha:1,force3D:"auto",ease:u},G=1==(27==n||28==n?1:2)?"y":"x";Y[G]="0px",F[G]=H,V[G]=B,X[G]="0%",E[G]=N,Z[G]=H,q[G]=D,U[G]=W,Q.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,d/1e3,Y,F),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg.find("rs-sbg"),d/2e3,V,X),d/2e3),t[a].mtl.add(punchgs.TweenLite.fromTo(Q,d/1e3,E,Z),0),t[a].mtl.add(punchgs.TweenLite.fromTo(Q.find(".slotslide div"),d/1e3,q,U),0)}},r=function(e,i,a,r){var o=e.find("rs-sbg"),s=o.data("mediafilter"),n=e.data("zoomstart"),l=e.data("rotationstart");null!=o.data("currotate")&&(l=o.data("currotate")),null!=o.data("curscale")&&"box"==r?n=100*o.data("curscale"):null!=o.data("curscale")&&(n=o.data("curscale")),function(e,i){t[i].slotw=Math.ceil(t[i].width/t[i].slots),"fullscreen"==t[i].sliderLayout?t[i].sloth=Math.ceil(jQuery(window).height()/t[i].slots):t[i].sloth=Math.ceil(t[i].height/t[i].slots),t[i].autoHeight&&void 0!==e&&""!==e&&(t[i].sloth=Math.ceil(e.height()/t[i].slots))}(o,i);var d=void 0!==o[0]&&void 0!==o[0].dataset&&void 0!==o[0].dataset.lazyload?o[0].dataset.lazyload:o.attr("src"),c=t[i].width,p=t[i].autoHeight?t[i].c.height():t[i].height,u=o.data("fxof"),h=0,g=e.data("bgcolor")||o.css("backgroundColor"),f=e.data("bgfit")||"cover",m=e.data("bgrepeat")||"no-repeat",v=e.data("bgposition")||"center center",y=void 0!==g&&g.indexOf("gradient")>=0?"background:"+g:"background-color:"+g+";background-image:url("+d+");background-repeat:"+m+";background-size:"+f+";background-position:"+v,b="";if(u=null==u?0:u,e.find(".slot").each(function(){jQuery(this).remove()}),"box"===r)for(var w=0,_=0,x=0;x<t[i].slots;x++){_=0;for(var k=0;k<t[i].slots;k++)b+='<div class="slot" style="'+(null!=n&&null!=l?"transform:rotateZ("+l+"deg)":"")+";position:absolute;overflow:hidden;top:"+(0+_)+"px;left:"+(u+w)+"px;width:"+t[i].slotw+"px;height:"+t[i].sloth+'px;"><div class="slotslide '+s+'" data-x="'+w+'" data-y="'+_+'" style="position:absolute;top:0px;left:0px;width:'+t[i].slotw+"px;height:"+t[i].sloth+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-_)+"px;left:"+(0-w)+"px;width:"+c+"px;height:"+p+"px;"+y+';"></div></div></div>',_+=t[i].sloth;w+=t[i].slotw}else if("horizontal"===r){if(!a)h=0-t[i].slotw;for(k=0;k<t[i].slots;k++)b+='<div class="slot" style="'+(null!=n&&null!=l?"transform:rotateZ("+l+"deg)":"")+";position:absolute;overflow:hidden;top:0px;left:"+(u+k*t[i].slotw)+"px;width:"+(t[i].slotw+.3)+"px;height:"+p+'px"><div class="slotslide '+s+'" style="position:absolute;top:0px;left:'+h+"px;width:"+(t[i].slotw+.6)+"px;height:"+p+'px;overflow:hidden;"><div style="position:absolute;top:0px;left:'+(0-k*t[i].slotw)+"px;width:"+c+"px;height:"+p+"px;"+y+';"></div></div></div>'}if("vertical"===r){if(!a)h=0-t[i].sloth;for(k=0;k<t[i].slots;k++)b+='<div class="slot" style="'+(null!=n&&null!=l?"transform:rotateZ("+l+"deg)":"")+";position:absolute;overflow:hidden;top:"+(0+k*t[i].sloth)+"px;left:"+u+"px;width:"+c+"px;height:"+t[i].sloth+'px"><div class="slotslide '+s+'" style="position:absolute;top:'+h+"px;left:0px;width:"+c+"px;height:"+t[i].sloth+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-k*t[i].sloth)+"px;left:0px;width:"+c+"px;height:"+p+"px;"+y+';"></div></div></div>'}e.append(b)}}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution,i=t.is_mobile();t.is_android();function a(e){return null==e?-1:jQuery.isNumeric(e)?e:e.split(":").length>1?60*parseInt(e.split(":")[0],0)+parseInt(e.split(":")[1],0):e}jQuery.extend(!0,t,{preLoadAudio:function(e,i){t[i].videos=void 0===t[i].videos?{}:t[i].videos,e.find(".rs-layer-audio").each(function(){var e=jQuery(this),a=t[i].videos[e[0].id]=void 0===t[i].videos[e[0].id]?v(e.data()):t[i].videos[e[0].id],r={};0===e.find("audio").length&&(r.src=null!=a.mp4?a.mp4:"",r.pre=a.pload||"",this.id=void 0===this.id||""===this.id?e.attr("audio-layer-"+Math.round(199999*Math.random())):this.id,r.id=this.id,r.status="prepared",r.start=jQuery.now(),r.waittime=void 0!==a.ploadwait?1e3*a.ploadwait:5e3,"auto"!=r.pre&&"canplaythrough"!=r.pre&&"canplay"!=r.pre&&"progress"!=r.pre||(void 0===t[i].audioqueue&&(t[i].audioqueue=[]),t[i].audioqueue.push(r),t.manageVideoLayer(e,i)))})},preLoadAudioDone:function(e,i,a){var r=t[i].videos[e[0].id];t[i].audioqueue&&t[i].audioqueue.length>0&&jQuery.each(t[i].audioqueue,function(e,t){r.mp4!==t.src||t.pre!==a&&"auto"!==t.pre||(t.status="loaded")})},resetVideo:function(e,a,r,o){var s=t[a].videos[e[0].id];switch(s.type){case"youtube":s.rwd&&null!=s.player&&void 0!==s.player.seekTo&&(s.player.seekTo(-1==s.ssec?0:s.ssec),s.player.pauseVideo()),0!=e.find("rs-poster").length||s.bgvideo||"preset"===r||punchgs.TweenLite.to(e.find("iframe"),.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"vimeo":void 0!==s.vimeoplayer&&!o&&s.rwd&&(0!==s.ssec&&-1!==s.ssec||s.bgvideo||e.find("rs-poster").length>0)&&(s.ssec>=0&&s.vimeoplayer.setCurrentTime(s.ssec),s.vimeoplayer.pause()),0!=e.find("rs-poster").length||s.bgvideo||"preset"===r||punchgs.TweenLite.to(e.find("iframe"),.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"html5":if(i&&s.notonmobile)return!1;punchgs.TweenLite.to(s.jvideo,.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut}),s.rwd&&!e.hasClass("videoisplaying")&&(s.video.currentTime=-1==s.ssec?0:s.ssec),("mute"==s.volume||t.lastToggleState(e.videomutetoggledby)||!0===t[a].globalmute)&&(s.video.muted=!0)}},Mute:function(e,i,a){var r=!1,o=t[i].videos[e[0].id];switch(o.type){case"youtube":o.player&&(!0===a&&o.player.mute(),!1===a&&l(o,parseInt(o.volcache,0)),r=o.player.isMuted());break;case"vimeo":o.volcachecheck||(o.volcache=o.volcache>=1?o.volcache/100:o.volcache,o.volcachecheck=!0),o.volume=!0===a?"mute":!1===a?o.volcache:o.volume,void 0!==a&&null!=o.vimeoplayer&&n(o,!0===a?0:o.volcache),r="mute"==o.volume;break;case"html5":o.video.volume=o.volcache>=1?o.volcache/100:o.volcache,void 0!==a&&o.video&&(o.video.muted=a),r=void 0!==o.video?o.video.muted:r}if(void 0===a)return r},stopVideo:function(e,i){if(void 0!==t[i]&&void 0!==t[i]){var a=t[i].videos[e[0].id];if(void 0!==a)switch(t[i].leaveViewPortBasedStop||(t[i].lastplayedvideos=[]),t[i].leaveViewPortBasedStop=!1,a.type){case"youtube":if(void 0===a.player||2===a.player.getPlayerState()||5===a.player.getPlayerState())return;a.player.pauseVideo(),a.youtubepausecalled=!0,setTimeout(function(){a.youtubepausecalled=!1},80);break;case"vimeo":if(void 0===a.vimeoplayer)return;a.vimeoplayer.pause(),a.vimeopausecalled=!0,setTimeout(function(){a.vimeopausecalled=!1},80);break;case"html5":a.video&&a.video.pause()}}},playVideo:function(e,i){var a=t[i].videos[e[0].id];switch(clearTimeout(a.videoplaywait),a.type){case"youtube":if(0==e.find("iframe").length)e.append(a.videomarkup),u(e,i,!0);else if(null!=a.player.playVideo){var o=a.player.getCurrentTime();a.nseTriggered&&(o=-1,a.nseTriggered=!1),-1!=a.ssec&&a.ssec>o&&a.player.seekTo(a.ssec),!0!==a.youtubepausecalled&&c(a)}else a.videoplaywait=setTimeout(function(){!0!==a.youtubepausecalled&&t.playVideo(e,i)},50);break;case"vimeo":0==e.find("iframe").length?(delete a.vimeoplayer,e.append(a.videomarkup),u(e,i,!0)):e.hasClass("rs-apiready")?(a.vimeoplayer=null==a.vimeoplayer?new Vimeo.Player(e.find("iframe").attr("id")):a.vimeoplayer,a.vimeoplayer.getPaused()?setTimeout(function(){var r=void 0===a.currenttime?0:a.currenttime;a.nseTriggered&&(r=-1,a.nseTriggered=!1),-1!=a.ssec&&a.ssec>r&&a.vimeoplayer.setCurrentTime(a.ssec),("mute"==a.volume||0===a.volume||t.lastToggleState(e.data("videomutetoggledby"))||!0===t[i].globalmute)&&a.vimeoplayer.setVolume(0),d(a.vimeoplayer)},510):a.videoplaywait=setTimeout(function(){!0!==a.vimeopausecalled&&t.playVideo(e,i)},50)):a.videoplaywait=setTimeout(function(){!0!==a.vimeopausecalled&&t.playVideo(e,i)},100);break;case"html5":if(a.metaloaded){a.video.play();o=a.video.currentTime;a.nseTriggered&&(o=-1,a.nseTriggered=!1),-1!=a.ssec&&a.ssec>o&&(a.video.currentTime=a.ssec)}else r(a.video,"loadedmetadata",function(e){t.resetVideo(e,i),a.video.play();var r=a.video.currentTime;a.nseTriggered&&(r=-1,a.nseTriggered=!1),-1!=a.ssec&&a.ssec>r&&(a.video.currentTime=a.ssec)}(e))}},isVideoPlaying:function(e,i){var a=!1;return null!=t[i].playingvideos&&jQuery.each(t[i].playingvideos,function(t,i){e.attr("id")==i.attr("id")&&(a=!0)}),a},removeMediaFromList:function(e,t){b(e,t)},prepareCoveredVideo:function(e,i){var a=t[e].videos[i[0].id];if(void 0===a.vimeoid||void 0!==a.vimeoplayerloaded){if(a.ifr=i.find("iframe, video"),a.vd=a.ratio.split(":").length>1?a.ratio.split(":")[0]/a.ratio.split(":")[1]:1,0===t[e].conw||0===t[e].conh)return t.setSize(e),clearTimeout(a.resizelistener),void(a.resizelistener=setTimeout(function(){t.prepareCoveredVideo(e,i)},100));var r=t[e].conw/t[e].conh,o=r/a.vd*100,s=a.vd/r*100;"html5"===a.type&&"Edge"!==t.get_browser()&&"IE"!==t.get_browser()&&(s=100,o=100),r>a.vd?punchgs.TweenLite.set(a.ifr,{height:o+"%",width:"100%",top:-(o-100)/2+"%",left:"0px",position:"absolute"}):punchgs.TweenLite.set(a.ifr,{width:s+"%",height:"100%",left:-(s-100)/2+"%",top:"0px",position:"absolute"}),a.ifr.hasClass("resizelistener")||(a.ifr.addClass("resizelistener"),jQuery(window).resize(function(){t.prepareCoveredVideo(e,i),clearTimeout(a.resizelistener),a.resizelistener=setTimeout(function(){t.prepareCoveredVideo(e,i)},90)}))}},checkVideoApis:function(e,i){location.protocol;if(!t[i].youtubeapineeded&&((null!=e.data("ytid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&(t[i].youtubeapineeded=!0),t[i].youtubeapineeded&&!window.rs_addedyt)){t[i].youtubestarttime=jQuery.now(),window.rs_addedyt=!0;var a=document.createElement("script"),r=document.getElementsByTagName("script")[0],o=!0;a.src="https://www.youtube.com/iframe_api",jQuery("head").find("*").each(function(){"https://www.youtube.com/iframe_api"==jQuery(this).attr("src")&&(o=!1)}),o&&r.parentNode.insertBefore(a,r)}if(!t[i].vimeoapineeded&&((null!=e.data("vimeoid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&(t[i].vimeoapineeded=!0),t[i].vimeoapineeded&&!window.rs_addedvim)){t[i].vimeostarttime=jQuery.now(),window.rs_addedvim=!0;var s=document.createElement("script");r=document.getElementsByTagName("script")[0],o=!0;s.src="https://player.vimeo.com/api/player.js",jQuery("head").find("*").each(function(){"https://player.vimeo.com/api/player.js"==jQuery(this).attr("src")&&(o=!1)}),o&&r.parentNode.insertBefore(s,r)}},manageVideoLayer:function(e,a){if(e[0].dataset.videoLayerManaged)return!1;t[a].videos=void 0===t[a].videos?{}:t[a].videos;var o=t[a].videos[e[0].id]=void 0===t[a].videos[e[0].id]?v(e.data()):t[a].videos[e[0].id],s=e.hasClass("rs-layer-audio");if(i&&o.opom)0==e.find("rs-poster").length&&e.append('<rs-poster class="noSwipe" style="background-image:url('+o.poster+');"></rs-poster>');else{switch(o.id=e[0].id,o.audio=s,o.pload="auto"===o.pload||"canplay"===o.pload||"canplaythrough"===o.pload||"progress"===o.pload?"auto":o.pload,o.loop=!0===o.nse||"loop"!=o.loop&&"loopandnoslidestop"!=o.loop?"":"loop",o.type=null!=o.mp4||null!=o.webm?"html5":null!=o.ytid&&String(o.ytid).length>1?"youtube":null!=o.vimeoid&&String(o.vimeoid).length>1?"vimeo":"none",o.newtype="html5"==o.type&&0==e.find(o.audio?"audio":"video").length?"html5":"youtube"==o.type&&0==e.find("iframe").length?"youtube":"vimeo"==o.type&&0==e.find("iframe").length?"vimeo":"none",s||"1sttime"!=o.aplay||"loopandnoslidestop"==o.loopcache||e.closest("rs-slide").addClass("rs-pause-timer-once"),s||1!=o.aplay&&"true"!=o.aplay&&"no1sttime"!=o.aplay||"loopandnoslidestop"==o.loopcache||e.closest("rs-slide").addClass("rs-pause-timer-always"),o.noInt&&e.addClass("rs-nointeraction"),o.newtype){case"html5":o.audio&&e.addClass("rs-audio"),o.tag=o.audio?"audio":"video";var n="video"===o.tag&&(t.is_mobile()||t.isSafari11())?o.aplay||"true"===o.aplay?"muted playsinline autoplay":o.inline?" playsinline":"":"",l="<"+o.tag+" "+n+" "+(o.controls?" controls ":"")+' style="object-fit:cover;background-size:cover;opacity:0;width:100%; height:100%" class=""'+("loopandnoslidestop"===o.loopcache||"loop"===o.loopcache?"loop":"")+' preload="'+o.pload+'">';"video"===o.tag&&null!=o.webm&&"firefox"==t.get_browser().toLowerCase()&&(l=l+'<source src="'+o.webm+'" type="video/webm" />'),null!=o.mp4&&(l=l+'<source src="'+o.mp4+'" type="'+("video"===o.tag?"video/mp4":"audio/mpeg")+'" />'),null!=o.ogv&&(l=l+'<source src="'+o.mp4+'" type="'+o.tag+'/ogg" />'),l+="</"+o.tag+">",o.videomarkup=l,i&&o.notonmobile||t.isIE(8)||e.append(l),e.find(o.tag).parent().hasClass("html5vid")||e.find(o.tag).wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>'),o.jvideo=e.find(o.tag),o.video=o.jvideo[0],o.html5vid=o.jvideo.parent(),o.metaloaded||r(o.video,"loadedmetadata",function(e){f(e,a),t.resetVideo(e,a)}(e));break;case"youtube":o.controls||(o.vatr=o.vatr.replace("controls=1","controls=0"),-1==o.vatr.toLowerCase().indexOf("controls")&&(o.vatr=o.vatr+"&controls=0")),(o.inline||"RS-BGVIDEO"===e[0].tagName)&&(o.vatr=o.vatr+"&playsinline=1"),-1!=o.ssec&&(o.vatr+="&start="+o.ssec),-1!=o.esec&&(o.vatr+="&end="+o.esec);var d=o.vatr.split("origin=https://");o.vatrnew=d.length>1?d[0]+"origin=https://"+(self.location.href.match(/www/gi)&&!d[1].match(/www/gi)?"www."+d[1]:d[1]):o.vatr,o.videomarkup='<iframe allow="autoplay; fullscreen" type="text/html" src="https://www.youtube.com/embed/'+o.ytid+"?"+o.vatrnew+'" '+(!0===o.afs?"allowfullscreen":"")+' width="100%" height="100%" style="opacity:0;visibility:visible;width:100%;height:100%"></iframe>';break;case"vimeo":o.controls?(o.vatr=o.vatr.replace("background=0","background=1"),-1==o.vatr.toLowerCase().indexOf("background")&&(o.vatr=o.vatr+"&background=1")):(o.vatr=o.vatr.replace("background=1","background=0"),-1==o.vatr.toLowerCase().indexOf("background")&&(o.vatr=o.vatr+"&background=0")),o.vatr="autoplay="+(!0===o.aplay?1:0)+"&"+o.vatr,o.videomarkup='<iframe  allow="autoplay; fullscreen" src="https://player.vimeo.com/video/'+o.vimeoid+"?"+o.vatr+'" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="opacity:0;visibility:visible;100%;height:100%"></iframe>'}if(!(null!=o.poster&&o.poster.length>2)||i&&o.npom){if(i&&o.notonmobile)return!1;0!=e.find("iframe").length||"youtube"!=o.type&&"vimeo"!=o.type||(delete o.vimeoplayer,e.append(o.videomarkup),u(e,a,!1))}else 0==e.find("rs-poster").length&&e.append('<rs-poster class="noSwipe" style="background-image:url('+o.poster+');"></rs-poster>'),0==e.find("iframe").length&&e.find("rs-poster").click(function(){if(t.playVideo(e,a),i){if(o.notonmobile)return!1;punchgs.TweenLite.to(e.find("rs-poster"),.3,{opacity:0,visibility:"hidden",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut})}});"none"!==o.doverlay&&void 0!==o.doverlay&&1!=e.find("rs-dotted").length&&e.append('<rs-dotted class="'+o.doverlay+'"></rs-dotted>'),e[0].dataset.videoLayerManaged=!0,o.bgvideo&&punchgs.TweenLite.set(e.find("video, iframe"),{opacity:0})}}});var r=function(e,t,i){e.addEventListener?e.addEventListener(t,i,{capture:!1,passive:!0}):e.attachEvent(t,i,{capture:!1,passive:!0})},o=function(e,t,i){var a={};return a.video=e,a.type=t,a.settings=i,a},s=function(e,i){var a=t[e].videos[i[0].id];(a.bgvideo||a.fcover)&&(a.fcover&&i.removeClass("rs-fsv").addClass("coverscreenvideo"),(void 0===a.ratio||a.ratio.split(":").length<=1)&&(a.ratio="16:9"),t.prepareCoveredVideo(e,i))},n=function(e,t){var i=e.vimeoplayer;i.getPaused().then(function(a){var r=!a,o=i.setVolume(t);void 0!==o&&o.then(function(t){i.getPaused().then(function(t){r===t&&(e.volume="mute",i.setVolume(0),i.play())}).catch(function(e){console.log("Get Paused Function Failed for Vimeo Volume Changes Inside the Promise")})}).catch(function(t){r&&(e.volume="mute",i.setVolume(0),i.play())})}).catch(function(){console.log("Get Paused Function Failed for Vimeo Volume Changes")})},l=function(e,t){var i=e.player.getPlayerState();"mute"===t?e.player.mute():(e.player.unMute(),e.player.setVolume(t)),setTimeout(function(){1===i&&1!==e.player.getPlayerState()&&(e.player.mute(),e.player.playVideo())},39)},d=function(e){var t=e.play();void 0!==t&&t.then(function(e){}).catch(function(t){e.setVolume(0),e.play()})},c=function(e){e.player.playVideo(),setTimeout(function(){1!==e.player.getPlayerState()&&3!==e.player.getPlayerState()&&(e.volume="mute",e.player.mute(),e.player.playVideo())},39)},p=function(e,i,a){e.vimeostarted=!0,e.nextslidecalled=!1,punchgs.TweenLite.to(i.find("rs-poster"),.3,{opacity:0,visibility:"hidden",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(i.find("iframe"),.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut}),t[a].c.trigger("revolution.slide.onvideoplay",o(e.vimeoplayer,"vimeo",e)),t[a].videoplaying=!pforv,y(i,a),pforv&&t[a].c.trigger("stoptimer"),"mute"==e.volume||0===e.volume||t.lastToggleState(i.data("videomutetoggledby"))||!0===t[a].globalmute?e.vimeoplayer.setVolume(0):n(e,parseInt(e.volcache,0)/100||.75),t.toggleState(e.videotoggledby)},u=function(e,a,r){var n=t[a].videos[e[0].id],u="iframe"+Math.round(1e5*Math.random()+1),f="loop"==n.loop||"loopandnoslidestop"==n.loopcache,m="loopandnoslidestop"!=n.loopcache;if(n.ifr=e.find("iframe"),s(a,e),n.ifr.attr("id",u),n.startvideonow=r,n.videolistenerexist){if(r)switch(n.type){case"youtube":c(n),-1!=n.ssec&&n.player.seekTo(n.ssec);break;case"vimeo":d(n.vimeoplayer),-1!=n.ssec&&n.vimeoplayer.seekTo(n.ssec)}}else switch(n.type){case"youtube":n.player=new YT.Player(u,{events:{onStateChange:function(i){i.data==YT.PlayerState.PLAYING?(punchgs.TweenLite.to(e.find("rs-poster"),.3,{opacity:0,visibility:"hidden",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(n.ifr,.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut}),"mute"==n.volume||0===n.volume||t.lastToggleState(e.data("videomutetoggledby"))||!0===t[a].globalmute?n.player.mute():l(n,parseInt(n.volcache,0)||75),t[a].videoplaying=!0,y(e,a),m?t[a].c.trigger("stoptimer"):t[a].videoplaying=!1,t[a].c.trigger("revolution.slide.onvideoplay",o(n.player,"youtube",n)),t.toggleState(n.videotoggledby)):(0==i.data&&"loop"==n.loop&&(-1!=n.ssec&&n.player.seekTo(n.ssec),c(n),t.toggleState(n.videotoggledby)),g()||0!=i.data&&2!=i.data||!(n.scop&&e.find("rs-poster").length>0||n.bgvideo&&e.find(".rs-fullvideo-cover").length>0)||(n.bgvideo?punchgs.TweenLite.to(e.find(".rs-fullvideo-cover"),.1,{opacity:1,force3D:"auto",ease:punchgs.Power3.easeInOut}):punchgs.TweenLite.to(e.find("rs-poster"),.1,{opacity:1,visibility:"visible",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(n.ifr,.1,{opacity:0,ease:punchgs.Power3.easeInOut})),-1!=i.data&&3!=i.data&&(t[a].videoplaying=!1,t[a].tonpause=!1,b(e,a),t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.player,"youtube",n)),null!=t[a].videoIsPlaying&&t[a].videoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(n.videotoggledby)),0==i.data&&n.nse?(h(),n.nseTriggered=!0,t[a].c.revnext(),b(e,a)):(b(e,a),t[a].videoplaying=!1,t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.player,"youtube",n)),null!=t[a].videoIsPlaying&&t[a].videoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(n.videotoggledby)))},onReady:function(a){var r,o=t.is_mobile(),s=e.hasClass("rs-layer-video");!o&&(!t.isSafari11()||o&&s||"RS-BGVIDEO"!==e[0].tagName&&(!s||!n.aplay&&"true"!==n.aplay))||(r=!0,n.player.setVolume(0),n.volume="mute",n.player.mute(),clearTimeout(e.data("mobilevideotimr")),e.data("mobilevideotimr",setTimeout(function(){c(n)},500))),r||"mute"!=n.volume||(n.player.setVolume(0),n.player.mute()),e.addClass("rs-apiready"),null==n.speed&&1===n.speed||a.target.setPlaybackRate(parseFloat(n.speed)),e.find("rs-poster").unbind("click"),e.find("rs-poster").click(function(){i||c(n)}),n.startvideonow&&(c(n),-1!=n.ssec&&n.player.seekTo(n.ssec)),n.videolistenerexist=!0}}});break;case"vimeo":for(var v,w=n.ifr.attr("src"),_={},x=w,k=/([^&=]+)=([^&]*)/g;v=k.exec(x);)_[decodeURIComponent(v[1])]=decodeURIComponent(v[2]);w=(w=null!=_.player_id?w.replace(_.player_id,u):w+"&player_id="+u).replace(/&api=0|&api=1/g,"");var T,L=t.is_mobile(),R=L||t.isSafari11(),I="RS-BGVIDEO"===e[0].tagName;if(R&&I&&(w+="&background=1"),n.ifr.attr("src",w),n.vimeoplayer=void 0===n.vimeoplayer||!1===n.vimeoplayer?new Vimeo.Player(u):n.vimeoplayer,R)I?T=!0:(n.aplay||"true"===n.aplay)&&(L&&(n.aplay=!1),T=!0),T&&(n.vimeoplayer.setVolume(0),n.volume="mute");n.vimeoplayer.on("play",function(t){n.vimeostarted||p(n,e,a)}),n.vimeoplayer.on("loaded",function(t){var i={};n.vimeoplayer.getVideoWidth().then(function(t){i.width=t,void 0!==i.width&&void 0!==i.height&&(n.ratio=i.width+":"+i.height,n.vimeoplayerloaded=!0,s(a,e))}),n.vimeoplayer.getVideoHeight().then(function(t){i.height=t,void 0!==i.width&&void 0!==i.height&&(n.ratio=i.width+":"+i.height,n.vimeoplayerloaded=!0,s(a,e))}),n.startvideonow&&("mute"===n.volume&&n.vimeoplayer.setVolume(0),d(n.vimeoplayer),-1!=n.ssec&&n.vimeoplayer.setCurrentTime(n.ssec))}),e.addClass("rs-apiready"),n.vimeoplayer.on("volumechange",function(e){n.volume=e.volume}),n.vimeoplayer.on("timeupdate",function(i){n.vimeostarted||p(n,e,a),n.currenttime=i.seconds,0!=n.esec&&Math.abs(n.esec-i.seconds)<1&&n.esec>i.seconds&&!n.nextslidecalled&&(f?(d(n.vimeoplayer),-1!=n.ssec&&n.vimeoplayer.setCurrentTime(n.ssec)):(n.nse&&(n.nseTriggered=!0,n.nextslidecalled=!0,t[a].c.revnext()),n.vimeoplayer.pause()))}),n.vimeoplayer.on("ended",function(i){n.vimeostarted=!1,b(e,a),t[a].videoplaying=!1,t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.vimeoplayer,"vimeo",n)),n.nse&&(n.nseTriggered=!0,t[a].c.revnext()),null!=t[a].videoIsPlaying&&t[a].videoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(n.videotoggledby)}),n.vimeoplayer.on("pause",function(i){n.vimeostarted=!1,(n.scop&&e.find("rs-poster").length>0||n.bgvideo&&e.find(".rs-fullvideo-cover").length>0)&&(n.bgvideo?punchgs.TweenLite.to(e.find(".rs-fullvideo-cover"),.1,{opacity:1,force3D:"auto",ease:punchgs.Power3.easeInOut}):punchgs.TweenLite.to(e.find("rs-poster"),.1,{opacity:1,visibility:"visible",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.1,{opacity:0,ease:punchgs.Power3.easeInOut})),t[a].videoplaying=!1,t[a].tonpause=!1,b(e,a),t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.vimeoplayer,"vimeo",n)),null!=t[a].videoIsPlaying&&t[a].videoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(n.videotoggledby)}),e.find("rs-poster").unbind("click"),e.find("rs-poster").click(function(){if(!i)return d(n.vimeoplayer),!1}),n.videolistenerexist=!0}},h=function(){document.exitFullscreen&&document.fullscreen?document.exitFullscreen():document.mozCancelFullScreen&&document.mozFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitIsFullScreen&&document.webkitExitFullscreen()},g=function(){if(void 0!==window.fullScreen)return window.fullScreen;if(void 0!==document.fullscreen)return document.fullscreen;if(void 0!==document.mozFullScreen)return document.mozFullScreen;if(void 0!==document.webkitIsFullScreen)return document.webkitIsFullScreen;var e=jQuery.browser.webkit&&/Apple Computer/.test(navigator.vendor)?42:5;return screen.width==window.innerWidth&&Math.abs(screen.height-window.innerHeight)<e},f=function(e,a,s){var n=t[a].videos[e[0].id];if(i&&n.notonmobile)return!1;var l=(!n.bgvideo||"none"!==n.loop&&!1!==n.loop)&&"loopandnoslidestop"!=n.loopcache,d="loop"==n.loop||"loopandnoslidestop"==n.loopcache;n.metaloaded=!0,n.control||(0!=e.find(".tp-video-play-button").length||i||e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'),e.find("video, rs-poster, .tp-video-play-button").click(function(){e.hasClass("videoisplaying")?n.video.pause():n.video.play()})),(n.fcover||e.hasClass("rs-fsv")||n.bgvideo)&&(n.fcover||n.bgvideo?(n.html5vid.addClass("fullcoveredvideo"),void 0!==n.ratio&&1!=n.ratio.split(":").length||(n.ratio="16:9"),t.prepareCoveredVideo(a,e)):n.html5vid.addClass("rs-fsv")),r(n.video,"canplaythrough",function(){t.preLoadAudioDone(e,a,"canplaythrough")}),r(n.video,"canplay",function(){t.preLoadAudioDone(e,a,"canplay")}),r(n.video,"progress",function(){t.preLoadAudioDone(e,a,"progress")}),r(n.video,"timeupdate",function(e){0!=n.esec&&-1!=n.esec&&Math.abs(n.esec-n.video.currentTime)<=.3&&n.esec>n.video.currentTime&&!n.nextslidecalled&&(d?(n.video.play(),-1!=n.ssec&&(n.video.currentTime=n.ssec)):(n.nse&&(n.nseTriggered=!0,n.nextslidecalled=!0,t[a].jcnah=!0,t[a].c.revnext(),setTimeout(function(){t[a].jcnah=!1},1e3)),n.video.pause()))}),r(n.video,"play",function(){n.nextslidecalled=!1,n.volume=null!=n.volume&&"mute"!=n.volume?parseFloat(n.volcache):n.volume,n.volcache=null!=n.volcache&&"mute"!=n.volcache?parseFloat(n.volcache):n.volcache,t.is_mobile()||t.isSafari11()||(!0===t[a].globalmute?n.video.muted=!0:n.video.muted="mute"==n.volume,n.volcache=jQuery.isNumeric(n.volcache)&&n.volcache>1?n.volcache/100:n.volcache,"mute"==n.volume?n.video.muted=!0:null!=n.volcache&&(n.video.volume=n.volcache)),e.addClass("videoisplaying"),y(e,a),l&&"audio"!=n.tag?(t[a].videoplaying=!0,t[a].c.trigger("stoptimer"),t[a].c.trigger("revolution.slide.onvideoplay",o(n.video,"html5",n))):(t[a].videoplaying=!1,"audio"!=n.tag&&t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.video,"html5",n))),punchgs.TweenLite.to(e.find("rs-poster"),.3,{opacity:0,visibility:"hidden",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find(n.tag),.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut}),t.toggleState(n.videotoggledby)}),r(n.video,"pause",function(i){!g()&&e.find("rs-poster").length>0&&n.scop&&(punchgs.TweenLite.to(e.find("rs-poster"),.3,{opacity:1,visibility:"visible",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find(n.tag),.3,{opacity:0,ease:punchgs.Power3.easeInOut})),e.removeClass("videoisplaying"),t[a].videoplaying=!1,b(e,a),"audio"!=n.tag&&t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.video,"html5",n)),null!=t[a].videoIsPlaying&&t[a].videoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(n.videotoggledby)}),r(n.video,"ended",function(){h(),b(e,a),t[a].videoplaying=!1,b(e,a),"audio"!=n.tag&&t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.video,"html5",e.data())),n.nse&&n.video.currentTime>0&&(1==!t[a].jcnah&&(n.nseTriggered=!0,t[a].c.revnext(),t[a].jcnah=!0),setTimeout(function(){t[a].jcnah=!1},1500)),e.removeClass("videoisplaying")})},m=function(e){return"t"===e||!0===e||"true"===e||"f"!==e&&!1!==e&&"false"!==e&&e},v=function(e){var t=void 0===e.video?[]:e.video.split(";"),i={volume:"mute",pload:"auto",ratio:"16:9",loop:1===e.bgvideo?"none":"loopandnoslidestop",aplay:"true",fcover:!1,afs:!0,controls:!1,nse:!0,npom:!1,opom:!1,inline:!0,notonmobile:!1,start:-1,end:-1,do:"none",scop:!1,rwd:!0,speed:1,ploadwait:5,stopAV:!0,noInt:!1,volcache:75};for(var r in t)if(t.hasOwnProperty(r)){var o=t[r].split(":");switch(o[0]){case"v":i.volume=o[1];break;case"vd":i.volcache=o[1];break;case"p":i.pload=o[1];break;case"ar":i.ratio=o[1]+(void 0!==o[2]?":"+o[2]:"");break;case"ap":i.aplay=m(o[1]);break;case"l":i.loop=o[1];break;case"fc":i.fcover=m(o[1]);break;case"afs":i.afs=m(o[1]);break;case"vc":i.controls=o[1];break;case"nse":i.nse=m(o[1]);break;case"npom":i.npom=m(o[1]);break;case"opom":i.opom=m(o[1]);break;case"t":i.vtype=o[1];break;case"inl":i.inline=m(o[1]);break;case"nomo":i.notonmobile=m(o[1]);break;case"sta":i.start=o[1]+(void 0!==o[2]?":"+o[2]:"");break;case"end":i.end=o[1]+(void 0!==o[2]?":"+o[2]:"");break;case"do":i.doverlay=o[1];break;case"scop":i.scop=m(o[1]);break;case"rwd":i.rwd=m(o[1]);break;case"sp":i.speed=o[1];break;case"vw":i.ploadwait=parseInt(o[1],0)||5;break;case"sav":i.stopAV=m(o[1]);break;case"noint":i.noInt=m(o[1])}}return i.noInt&&(i.controls=!1),void 0!==e.mp4&&(i.mp4=e.mp4),void 0!==e.videomp4&&(i.mp4=e.videomp4),void 0!==e.ytid&&(i.ytid=e.ytid),void 0!==e.ogv&&(i.ogv=e.ogv),void 0!==e.webm&&(i.webm=e.webm),void 0!==e.vimeoid&&(i.vimeoid=e.vimeoid),void 0!==e.vatr&&(i.vatr=e.vatr),void 0!==e.videoattributes&&(i.vatr=e.videoattributes),void 0!==e.poster&&(i.poster=e.poster),void 0!==e.bgvideo&&(i.bgvideo=e.bgvideo),1===i.bgvideo&&(i.volume="mute"),i.ssec=a(i.start),i.esec=a(i.end),i.loopcache=i.loop,i.inColumn=e._incolumn,i},y=function(e,i){if(t[i].playingvideos=void 0===t[i].playingvideos?new Array:t[i].playingvideos,t[i].videos[e[0].id].stopAV&&void 0!==t[i].playingvideos&&t[i].playingvideos.length>0)for(var a in t[i].lastplayedvideos=jQuery.extend(!0,[],t[i].playingvideos),t[i].playingvideos)t[i].playingvideos.hasOwnProperty(a)&&t.stopVideo(t[i].playingvideos[a],i);t[i].playingvideos.push(e),t[i].videoIsPlaying=e},b=function(e,i){void 0!==t[i]&&void 0!==t[i]&&null!=t[i].playingvideos&&jQuery.inArray(e,t[i].playingvideos)>=0&&t[i].playingvideos.splice(jQuery.inArray(e,t[i].playingvideos),1)}}(jQuery);
"use strict";
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery), +function (a) {
  "use strict";
  function b() {
    var a = document.createElement("bootstrap"),
        b = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    for (var c in b) {
      if (void 0 !== a.style[c]) return {
        end: b[c]
      };
    }
    return !1;
  }
  a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;
    a(this).one("bsTransitionEnd", function () {
      c = !0;
    });
    var e = function e() {
      c || a(d).trigger(a.support.transition.end);
    };
    return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function handle(b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
      }
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.alert");
      e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
    });
  }
  var c = '[data-dismiss="alert"]',
      d = function d(b) {
    a(b).on("click", c, this.close);
  };
  d.VERSION = "3.3.1", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove();
    }
    var e = a(this),
        f = e.attr("data-target");
    f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
    var g = a(f);
    b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == _typeof(b) && b;
      e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
    });
  }
  var c = function c(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };
  c.VERSION = "3.3.1", c.DEFAULTS = {
    loadingText: "loading..."
  }, c.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();
    b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');
    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
    a && this.$element.toggleClass("active");
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target);
    d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault();
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == _typeof(b) && b),
          g = "string" == typeof b ? b : f.slide;
      e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }
  var c = function c(b, _c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };
  c.VERSION = "3.3.1", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return;
      }
      a.preventDefault();
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = "prev" == a ? -1 : 1,
        d = this.getItemIndex(b),
        e = (d + c) % this.$items.length;
    return this.$items.eq(e);
  }, c.prototype.to = function (a) {
    var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a);
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next");
  }, c.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev");
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left" : "right",
        i = "next" == b ? "first" : "last",
        j = this;
    if (!f.length) {
      if (!this.options.wrap) return;
      f = this.$element.find(".item")[i]();
    }
    if (f.hasClass("active")) return this.sliding = !1;
    var k = f[0],
        l = a.Event("slide.bs.carousel", {
      relatedTarget: k,
      direction: h
    });
    if (this.$element.trigger(l), !l.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var m = a(this.$indicators.children()[this.getItemIndex(f)]);
        m && m.addClass("active");
      }
      var n = a.Event("slid.bs.carousel", {
        relatedTarget: k,
        direction: h
      });
      return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), j.sliding = !1, setTimeout(function () {
          j.$element.trigger(n);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(n)), g && this.cycle(), this;
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  };
  var e = function e(c) {
    var d,
        e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
      h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
    }
  };
  a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);
      b.call(c, c.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    var c,
        d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
    return a(d);
  }
  function c(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == _typeof(b) && b);
      !e && f.toggle && "show" == b && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
    });
  }
  var d = function d(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a(this.options.trigger).filter('[href="#' + b.id + '"], [data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };
  d.VERSION = "3.3.1", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
    toggle: !0,
    trigger: '[data-toggle="collapse"]'
  }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height";
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b,
          e = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
      if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");
        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
          var g = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var h = function h() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };
          if (!a.support.transition) return h.call(this);
          var i = a.camelCase(["scroll", g].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var e = function e() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };
        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);
      this.addAriaAndCollapsedClass(b(e), e);
    }, this)).end();
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");
    a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
  };
  var e = a.fn.collapse;
  a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);
    e.attr("data-target") || d.preventDefault();
    var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : a.extend({}, e.data(), {
      trigger: this
    });
    c.call(f, h);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    b && 3 === b.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
          e = c(d),
          f = {
        relatedTarget: this
      };
      e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)));
    }));
  }
  function c(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent();
  }
  function d(b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
    });
  }
  var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function g(b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };
  g.VERSION = "3.3.1", g.prototype.toggle = function (d) {
    var e = a(this);
    if (!e.is(".disabled, :disabled")) {
      var f = c(e),
          g = f.hasClass("open");
      if (b(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
        var h = {
          relatedTarget: this
        };
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h);
      }
      return !1;
    }
  }, g.prototype.keydown = function (b) {
    if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
      var d = a(this);
      if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = c(d),
            g = e.hasClass("open");
        if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
        var h = " li:not(.divider):visible a",
            i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
        if (i.length) {
          var j = i.index(b.target);
          38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";
  function b(b, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == _typeof(b) && b);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }
  var c = function c(b, _c2) {
    this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };
  c.VERSION = "3.3.1", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var d = this,
        e = a.Event("show.bs.modal", {
      relatedTarget: b
    });
    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");
      d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.options.backdrop && d.adjustBackdrop(), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();
      var f = a.Event("shown.bs.modal", {
        relatedTarget: b
      });
      e ? d.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f);
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, c.prototype.hideModal = function () {
    var a = this;
    this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var d = this,
        e = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;
      if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", a.proxy(function (a) {
        a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
      }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var g = function g() {
        d.removeBackdrop(), b && b();
      };
      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
    } else b && b();
  }, c.prototype.handleUpdate = function () {
    this.options.backdrop && this.adjustBackdrop(), this.adjustDialog();
  }, c.prototype.adjustBackdrop = function () {
    this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight);
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
    });
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    });
  }, c.prototype.checkScrollbar = function () {
    this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar();
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);
    this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", "");
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");
    a.className = "modal-scrollbar-measure", this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b;
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle" : a.extend({
      remote: !/#/.test(e) && e
    }, f.data(), d.data());
    d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus");
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == _typeof(b) && b,
          g = f && f.selector;
      (e || "destroy" != b) && (g ? (e || d.data("bs.tooltip", e = {}), e[g] || (e[g] = new c(this, f))) : e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }
  var c = function c(a, b) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b);
  };
  c.VERSION = "3.3.1", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, c.prototype.init = function (b, c, d) {
    this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }
    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();
    return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c && c.$tip && c.$tip.is(":visible") ? void (c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show());
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide();
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !d) return;
      var e = this,
          f = this.tip(),
          g = this.getUID(this.type);
      this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
      var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          j = i.test(h);
      j && (h = h.replace(i, "") || "top"), f.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
      var k = this.getPosition(),
          l = f[0].offsetWidth,
          m = f[0].offsetHeight;
      if (j) {
        var n = h,
            o = this.options.container ? a(this.options.container) : this.$element.parent(),
            p = this.getPosition(o);
        h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h);
      }
      var q = this.getCalculatedOffset(h, k, l, m);
      this.applyPlacement(q, h);
      var r = function r() {
        var a = e.hoverState;
        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
      };
      a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
      using: function using(a) {
        d.css({
          top: Math.round(a.top),
          left: Math.round(a.left)
        });
      }
    }, b), 0), d.addClass("in");
    var i = d[0].offsetWidth,
        j = d[0].offsetHeight;
    "top" == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
        n = l ? "offsetWidth" : "offsetHeight";
    d.offset(b), this.replaceArrow(m, d[0][n], l);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
    }
    var e = this,
        f = this.tip(),
        g = a.Event("hide.bs." + this.type);
    return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this);
  }, c.prototype.fixTitle = function () {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;
    var c = b[0],
        d = "BODY" == c.tagName,
        e = c.getBoundingClientRect();
    null == e.width && (e = a.extend({}, e, {
      width: e.right - e.left,
      height: e.bottom - e.top
    }));
    var f = d ? {
      top: 0,
      left: 0
    } : b.offset(),
        g = {
      scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
    },
        h = d ? {
      width: a(window).width(),
      height: a(window).height()
    } : null;
    return a.extend({}, e, g, h, f);
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return e;
    var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);
    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
          i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f,
          k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k);
    }
    return e;
  }, c.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do {
      a += ~~(1e6 * Math.random());
    } while (document.getElementById(a));
    return a;
  }, c.prototype.tip = function () {
    return this.$tip = this.$tip || a(this.options.template);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;
    b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    var a = this;
    clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type);
    });
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == _typeof(b) && b,
          g = f && f.selector;
      (e || "destroy" != b) && (g ? (e || d.data("bs.popover", e = {}), e[g] || (e[g] = new c(this, f))) : e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }
  var c = function c(a, b) {
    this.init("popover", a, b);
  };
  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  c.VERSION = "3.3.1", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  }, c.prototype.tip = function () {
    return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(c, d) {
    var e = a.proxy(this.process, this);
    this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process();
  }
  function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == _typeof(c) && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }
  b.VERSION = "3.3.1", b.DEFAULTS = {
    offset: 10
  }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = "offset",
        c = 0;
    a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
    var d = this;
    this.$body.find(this.selector).map(function () {
      var d = a(this),
          e = d.data("target") || d.attr("href"),
          f = /^#./.test(e) && a(e);
      return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      d.offsets.push(this[0]), d.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
    if (g && b < e[0]) return this.activeTarget = null, this.clear();
    for (a = e.length; a--;) {
      g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
    }
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);
      c.call(b, b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");
      e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
    });
  }
  var c = function c(b) {
    this.element = a(b);
  };
  c.VERSION = "3.3.1", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");
    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
          f = a.Event("hide.bs.tab", {
        relatedTarget: b[0]
      }),
          g = a.Event("show.bs.tab", {
        relatedTarget: e[0]
      });
      if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);
        this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({
            type: "hidden.bs.tab",
            relatedTarget: b[0]
          }), b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e[0]
          });
        });
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
    }
    var g = d.find("> .active"),
        h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
    g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  };
  var e = function e(c) {
    c.preventDefault(), b.call(a(this), "show");
  };
  a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == _typeof(b) && b;
      e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }
  var c = function c(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition();
  };
  c.VERSION = "3.3.1", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
        f = this.$element.offset(),
        g = this.$target.height();
    if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
    if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
    var h = null == this.affixed,
        i = h ? e : f.top,
        j = h ? g : b;
    return null != c && c >= i ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a = this.$target.scrollTop(),
        b = this.$element.offset();
    return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
          d = this.options.offset,
          e = d.top,
          f = d.bottom,
          g = a("body").height();
      "object" != _typeof(d) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
      var h = this.getState(g, b, e, f);
      if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");
        var i = "affix" + (h ? "-" + h : ""),
            j = a.Event(i + ".bs.affix");
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
      }
      "bottom" == h && this.$element.offset({
        top: g - b - f
      });
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
          d = c.data();
      d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);
"use strict";
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */
(function(n,t,i,r){"use strict";var p=i("html"),e=i(n),o=i(t),u=i.fancybox=function(){u.open.apply(this,arguments);},y=navigator.userAgent.match(/msie/i),v=null,s=t.createTouch!==r,a=function a(n){return n&&n.hasOwnProperty&&n instanceof i;},c=function c(n){return n&&i.type(n)==="string";},l=function l(n){return c(n)&&n.indexOf("%")>0;},w=function w(n){return n&&!(n.style.overflow&&n.style.overflow==="hidden")&&(n.clientWidth&&n.scrollWidth>n.clientWidth||n.clientHeight&&n.scrollHeight>n.clientHeight);},f=function f(n,t){var i=parseInt(n,10)||0;return t&&l(n)&&(i=u.getViewport()[t]/100*i),Math.ceil(i);},h=function h(n,t){return f(n,t)+"px";};i.extend(u,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"><\/div><\/div><\/div><\/div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(y?' allowtransparency="true"':"")+"><\/iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.<\/p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><\/a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span><\/span><\/a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span><\/span><\/a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function open(n,t){if(n)return(i.isPlainObject(t)||(t={}),!1===u.close(!0))?void 0:(i.isArray(n)||(n=a(n)?i(n).get():[n]),i.each(n,function(f,e){var h={},s,p,l,o,v,y,w;i.type(e)==="object"&&(e.nodeType&&(e=i(e)),a(e)?(h={href:e.data("fancybox-href")||e.attr("href"),title:e.data("fancybox-title")||e.attr("title"),isDom:!0,element:e},i.metadata&&i.extend(!0,h,e.metadata())):h=e);s=t.href||h.href||(c(e)?e:null);p=t.title!==r?t.title:h.title||"";l=t.content||h.content;o=l?"html":t.type||h.type;!o&&h.isDom&&(o=e.data("fancybox-type"),o||(v=e.prop("class").match(/fancybox\.(\w+)/),o=v?v[1]:null));c(s)&&(o||(u.isImage(s)?o="image":u.isSWF(s)?o="swf":s.charAt(0)==="#"?o="inline":c(e)&&(o="html",l=e)),o==="ajax"&&(y=s.split(/\s+/,2),s=y.shift(),w=y.shift()));l||(o==="inline"?s?l=i(c(s)?s.replace(/.*(?=#[^\s]+$)/,""):s):h.isDom&&(l=e):o==="html"?l=s:o||s||!h.isDom||(o="inline",l=e));i.extend(h,{href:s,type:o,content:l,title:p,selector:w});n[f]=h;}),u.opts=i.extend(!0,{},u.defaults,t),t.keys!==r&&(u.opts.keys=t.keys?i.extend({},u.defaults.keys,t.keys):!1),u.group=n,u._start(u.opts.index));},cancel:function cancel(){var n=u.coming;n&&!1!==u.trigger("onCancel")&&(u.hideLoading(),u.ajaxLoad&&u.ajaxLoad.abort(),u.ajaxLoad=null,u.imgPreload&&(u.imgPreload.onload=u.imgPreload.onerror=null),n.wrap&&n.wrap.stop(!0,!0).trigger("onReset").remove(),u.coming=null,u.current||u._afterZoomOut(n));},close:function close(n){(u.cancel(),!1!==u.trigger("beforeClose"))&&(u.unbindEvents(),u.isActive)&&(u.isOpen&&n!==!0?(u.isOpen=u.isOpened=!1,u.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),u.wrap.stop(!0,!0).removeClass("fancybox-opened"),u.transitions[u.current.closeMethod]()):(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),u._afterZoomOut()));},play:function play(n){var t=function t(){clearTimeout(u.player.timer);},i=function i(){t();u.current&&u.player.isActive&&(u.player.timer=setTimeout(u.next,u.current.playSpeed));},r=function r(){t();o.unbind(".player");u.player.isActive=!1;u.trigger("onPlayEnd");},f=function f(){u.current&&(u.current.loop||u.current.index<u.group.length-1)&&(u.player.isActive=!0,o.bind({"onCancel.player beforeClose.player":r,"onUpdate.player":i,"beforeLoad.player":t}),i(),u.trigger("onPlayStart"));};n!==!0&&(u.player.isActive||n===!1)?r():f();},next:function next(n){var t=u.current;t&&(c(n)||(n=t.direction.next),u.jumpto(t.index+1,n,"next"));},prev:function prev(n){var t=u.current;t&&(c(n)||(n=t.direction.prev),u.jumpto(t.index-1,n,"prev"));},jumpto:function jumpto(n,t,i){var e=u.current;e&&(n=f(n),u.direction=t||e.direction[n>=e.index?"next":"prev"],u.router=i||"jumpto",e.loop&&(n<0&&(n=e.group.length+n%e.group.length),n=n%e.group.length),e.group[n]!==r&&(u.cancel(),u._start(n)));},reposition:function reposition(n,t){var f=u.current,e=f?f.wrap:null,r;e&&(r=u._getPosition(t),n&&n.type==="scroll"?(delete r.position,e.stop(!0,!0).animate(r,200)):(e.css(r),f.pos=i.extend({},f.dim,r)));},update:function update(n){var t=n&&n.type,i=!t||t==="orientationchange";(i&&(clearTimeout(v),v=null),u.isOpen&&!v)&&(v=setTimeout(function(){var r=u.current;r&&!u.isClosing&&(u.wrap.removeClass("fancybox-tmp"),(i||t==="load"||t==="resize"&&r.autoResize)&&u._setDimension(),t==="scroll"&&r.canShrink||u.reposition(n),u.trigger("onUpdate"),v=null);},i&&!s?0:300));},toggle:function toggle(n){u.isOpen&&(u.current.fitToView=i.type(n)==="boolean"?n:!u.current.fitToView,s&&(u.wrap.removeAttr("style").addClass("fancybox-tmp"),u.trigger("onUpdate")),u.update());},hideLoading:function hideLoading(){o.unbind(".loading");i("#fancybox-loading").remove();},showLoading:function showLoading(){var t,n;u.hideLoading();t=i('<div id="fancybox-loading"><div><\/div><\/div>').click(u.cancel).appendTo("body");o.bind("keydown.loading",function(n){(n.which||n.keyCode)===27&&(n.preventDefault(),u.cancel());});u.defaults.fixed||(n=u.getViewport(),t.css({position:"absolute",top:n.h*.5+n.y,left:n.w*.5+n.x}));},getViewport:function getViewport(){var i=u.current&&u.current.locked||!1,t={x:e.scrollLeft(),y:e.scrollTop()};return i?(t.w=i[0].clientWidth,t.h=i[0].clientHeight):(t.w=s&&n.innerWidth?n.innerWidth:e.width(),t.h=s&&n.innerHeight?n.innerHeight:e.height()),t;},unbindEvents:function unbindEvents(){u.wrap&&a(u.wrap)&&u.wrap.unbind(".fb");o.unbind(".fb");e.unbind(".fb");},bindEvents:function bindEvents(){var n=u.current,t;n&&(e.bind("orientationchange.fb"+(s?"":" resize.fb")+(n.autoCenter&&!n.locked?" scroll.fb":""),u.update),t=n.keys,t&&o.bind("keydown.fb",function(f){var e=f.which||f.keyCode,o=f.target||f.srcElement;if(e===27&&u.coming)return!1;f.ctrlKey||f.altKey||f.shiftKey||f.metaKey||o&&(o.type||i(o).is("[contenteditable]"))||i.each(t,function(t,o){return n.group.length>1&&o[e]!==r?(u[t](o[e]),f.preventDefault(),!1):i.inArray(e,o)>-1?(u[t](),f.preventDefault(),!1):void 0;});}),i.fn.mousewheel&&n.mouseWheel&&u.wrap.bind("mousewheel.fb",function(t,r,f,e){for(var h=t.target||null,o=i(h),s=!1;o.length;){if(s||o.is(".fancybox-skin")||o.is(".fancybox-wrap"))break;s=w(o[0]);o=i(o).parent();}
r===0||s||u.group.length>1&&!n.canShrink&&(e>0||f>0?u.prev(e>0?"down":"left"):(e<0||f<0)&&u.next(e<0?"up":"right"),t.preventDefault());}));},trigger:function trigger(n,t){var f,r=t||u.coming||u.current;if(r){if(i.isFunction(r[n])&&(f=r[n].apply(r,Array.prototype.slice.call(arguments,1))),f===!1)return!1;r.helpers&&i.each(r.helpers,function(t,f){f&&u.helpers[t]&&i.isFunction(u.helpers[t][n])&&u.helpers[t][n](i.extend(!0,{},u.helpers[t].defaults,f),r);});o.trigger(n);}},isImage:function isImage(n){return c(n)&&n.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);},isSWF:function isSWF(n){return c(n)&&n.match(/\.(swf)((\?|#).*)?$/i);},_start:function _start(n){var t={},c,l,r,e,o;if(n=f(n),c=u.group[n]||null,!c)return!1;if(t=i.extend(!0,{},u.opts,c),e=t.margin,o=t.padding,i.type(e)==="number"&&(t.margin=[e,e,e,e]),i.type(o)==="number"&&(t.padding=[o,o,o,o]),t.modal&&i.extend(!0,t,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),t.autoSize&&(t.autoWidth=t.autoHeight=!0),t.width==="auto"&&(t.autoWidth=!0),t.height==="auto"&&(t.autoHeight=!0),t.group=u.group,t.index=n,u.coming=t,!1===u.trigger("beforeLoad")){u.coming=null;return;}
if(r=t.type,l=t.href,!r)return(u.coming=null,u.current&&u.router&&u.router!=="jumpto")?(u.current.index=n,u[u.router](u.direction)):!1;if(u.isActive=!0,(r==="image"||r==="swf")&&(t.autoHeight=t.autoWidth=!1,t.scrolling="visible"),r==="image"&&(t.aspectRatio=!0),r==="iframe"&&s&&(t.scrolling="scroll"),t.wrap=i(t.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+r+" fancybox-tmp "+t.wrapCSS).appendTo(t.parent||"body"),i.extend(t,{skin:i(".fancybox-skin",t.wrap),outer:i(".fancybox-outer",t.wrap),inner:i(".fancybox-inner",t.wrap)}),i.each(["Top","Right","Bottom","Left"],function(n,i){t.skin.css("padding"+i,h(t.padding[n]));}),u.trigger("onReady"),r==="inline"||r==="html"){if(!t.content||!t.content.length)return u._error("content");}else if(!l)return u._error("href");r==="image"?u._loadImage():r==="ajax"?u._loadAjax():r==="iframe"?u._loadIframe():u._afterLoad();},_error:function _error(n){i.extend(u.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:n,content:u.coming.tpl.error});u._afterLoad();},_loadImage:function _loadImage(){var n=u.imgPreload=new Image();n.onload=function(){this.onload=this.onerror=null;u.coming.width=this.width/u.opts.pixelRatio;u.coming.height=this.height/u.opts.pixelRatio;u._afterLoad();};n.onerror=function(){this.onload=this.onerror=null;u._error("image");};n.src=u.coming.href;n.complete!==!0&&u.showLoading();},_loadAjax:function _loadAjax(){var n=u.coming;u.showLoading();u.ajaxLoad=i.ajax(i.extend({},n.ajax,{url:n.href,error:function error(n,t){u.coming&&t!=="abort"?u._error("ajax",n):u.hideLoading();},success:function success(t,i){i==="success"&&(n.content=t,u._afterLoad());}}));},_loadIframe:function _loadIframe(){var n=u.coming,t=i(n.tpl.iframe.replace(/\{rnd\}/g,new Date().getTime())).attr("scrolling",s?"auto":n.iframe.scrolling).attr("src",n.href);if(i(n.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty();}catch(n){}}),n.iframe.preload){u.showLoading();t.one("load",function(){i(this).data("ready",1);s||i(this).bind("load.fb",u.update);i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();u._afterLoad();});}
n.content=t.appendTo(n.inner);n.iframe.preload||u._afterLoad();},_preloadImages:function _preloadImages(){for(var r=u.group,i=u.current,f=r.length,e=i.preload?Math.min(i.preload,f-1):0,n,t=1;t<=e;t+=1){n=r[(i.index+t)%f],n.type==="image"&&n.href&&(new Image().src=n.href);}},_afterLoad:function _afterLoad(){var r=u.coming,f=u.current,e="fancybox-placeholder",t,n,c,o,s,h;if(u.hideLoading(),r&&u.isActive!==!1){if(!1===u.trigger("afterLoad",r,f)){r.wrap.stop(!0).trigger("onReset").remove();u.coming=null;return;}
f&&(u.trigger("beforeChange",f),f.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());u.unbindEvents();t=r;n=r.content;c=r.type;o=r.scrolling;i.extend(u,{wrap:t.wrap,skin:t.skin,outer:t.outer,inner:t.inner,current:t,previous:f});s=t.href;switch(c){case"inline":case"ajax":case"html":t.selector?n=i("<div>").html(n).find(t.selector):a(n)&&(n.data(e)||n.data(e,i('<div class="'+e+'"><\/div>').insertAfter(n).hide()),n=n.show().detach(),t.wrap.bind("onReset",function(){i(this).find(n).length&&n.hide().replaceAll(n.data(e)).data(e,!1);}));break;case"image":n=t.tpl.image.replace("{href}",s);break;case"swf":n='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+s+'"><\/param>';h="";i.each(t.swf,function(t,i){n+='<param name="'+t+'" value="'+i+'"><\/param>';h+=" "+t+'="'+i+'"';});n+='<embed src="'+s+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"><\/embed><\/object>";}
a(n)&&n.parent().is(t.inner)||t.inner.append(n);u.trigger("beforeShow");t.inner.css("overflow",o==="yes"?"scroll":o==="no"?"hidden":o);u._setDimension();u.reposition();u.isOpen=!1;u.coming=null;u.bindEvents();u.isOpened?f.prevMethod&&u.transitions[f.prevMethod]():i(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove();u.transitions[u.isOpened?t.nextMethod:t.openMethod]();u._preloadImages();}},_setDimension:function _setDimension(){var nt=u.getViewport(),wt=0,vt=!1,st=!1,v=u.wrap,k=u.skin,e=u.inner,r=u.current,n=r.width,t=r.height,o=r.minWidth,s=r.minHeight,c=r.maxWidth,a=r.maxHeight,bt=r.scrolling,ft=r.scrollOutside?r.scrollbarWidth:0,et=r.margin,yt=f(et[1]+et[3]),pt=f(et[0]+et[2]),d,ht,tt,it,p,y,ct,lt,w,g,b,rt,ot,ut,at;if(v.add(k).add(e).width("auto").height("auto").removeClass("fancybox-tmp"),d=f(k.outerWidth(!0)-k.width()),ht=f(k.outerHeight(!0)-k.height()),tt=yt+d,it=pt+ht,p=l(n)?(nt.w-tt)*f(n)/100:n,y=l(t)?(nt.h-it)*f(t)/100:t,r.type==="iframe"){if(ut=r.content,r.autoHeight&&ut.data("ready")===1)try{ut[0].contentWindow.document.location&&(e.width(p).height(9999),at=ut.contents().find("body"),ft&&at.css("overflow-x","hidden"),y=at.outerHeight(!0));}catch(kt){}}else(r.autoWidth||r.autoHeight)&&(e.addClass("fancybox-tmp"),r.autoWidth||e.width(p),r.autoHeight||e.height(y),r.autoWidth&&(p=e.width()),r.autoHeight&&(y=e.height()),e.removeClass("fancybox-tmp"));if(n=f(p),t=f(y),w=p/y,o=f(l(o)?f(o,"w")-tt:o),c=f(l(c)?f(c,"w")-tt:c),s=f(l(s)?f(s,"h")-it:s),a=f(l(a)?f(a,"h")-it:a),ct=c,lt=a,r.fitToView&&(c=Math.min(nt.w-tt,c),a=Math.min(nt.h-it,a)),rt=nt.w-yt,ot=nt.h-pt,r.aspectRatio?(n>c&&(n=c,t=f(n/w)),t>a&&(t=a,n=f(t*w)),n<o&&(n=o,t=f(n/w)),t<s&&(t=s,n=f(t*w))):(n=Math.max(o,Math.min(n,c)),r.autoHeight&&r.type!=="iframe"&&(e.width(n),t=e.height()),t=Math.max(s,Math.min(t,a))),r.fitToView)if(e.width(n).height(t),v.width(n+d),g=v.width(),b=v.height(),r.aspectRatio)while((g>rt||b>ot)&&n>o&&t>s){if(wt++>19)break;t=Math.max(s,Math.min(a,t-10));n=f(t*w);n<o&&(n=o,t=f(n/w));n>c&&(n=c,t=f(n/w));e.width(n).height(t);v.width(n+d);g=v.width();b=v.height();}else n=Math.max(o,Math.min(n,n-(g-rt))),t=Math.max(s,Math.min(t,t-(b-ot)));ft&&bt==="auto"&&t<y&&n+d+ft<rt&&(n+=ft);e.width(n).height(t);v.width(n+d);g=v.width();b=v.height();vt=(g>rt||b>ot)&&n>o&&t>s;st=r.aspectRatio?n<ct&&t<lt&&n<p&&t<y:(n<ct||t<lt)&&(n<p||t<y);i.extend(r,{dim:{width:h(g),height:h(b)},origWidth:p,origHeight:y,canShrink:vt,canExpand:st,wPadding:d,hPadding:ht,wrapSpace:b-k.outerHeight(!0),skinSpace:k.height()-t});!ut&&r.autoHeight&&t>s&&t<a&&!st&&e.height("auto");},_getPosition:function _getPosition(n){var i=u.current,r=u.getViewport(),f=i.margin,e=u.wrap.width()+f[1]+f[3],o=u.wrap.height()+f[0]+f[2],t={position:"absolute",top:f[0],left:f[3]};return i.autoCenter&&i.fixed&&!n&&o<=r.h&&e<=r.w?t.position="fixed":i.locked||(t.top+=r.y,t.left+=r.x),t.top=h(Math.max(t.top,t.top+(r.h-o)*i.topRatio)),t.left=h(Math.max(t.left,t.left+(r.w-e)*i.leftRatio)),t;},_afterZoomIn:function _afterZoomIn(){var n=u.current;n&&(u.isOpen=u.isOpened=!0,u.wrap.css("overflow","visible").addClass("fancybox-opened"),u.update(),(n.closeClick||n.nextClick&&u.group.length>1)&&u.inner.css("cursor","pointer").bind("click.fb",function(t){i(t.target).is("a")||i(t.target).parent().is("a")||(t.preventDefault(),u[n.closeClick?"close":"next"]());}),n.closeBtn&&i(n.tpl.closeBtn).appendTo(u.skin).bind("click.fb",function(n){n.preventDefault();u.close();}),n.arrows&&u.group.length>1&&((n.loop||n.index>0)&&i(n.tpl.prev).appendTo(u.outer).bind("click.fb",u.prev),(n.loop||n.index<u.group.length-1)&&i(n.tpl.next).appendTo(u.outer).bind("click.fb",u.next)),u.trigger("afterShow"),n.loop||n.index!==n.group.length-1?u.opts.autoPlay&&!u.player.isActive&&(u.opts.autoPlay=!1,u.play()):u.play(!1));},_afterZoomOut:function _afterZoomOut(n){n=n||u.current;i(".fancybox-wrap").trigger("onReset").remove();i.extend(u,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});u.trigger("afterClose",n);}});u.transitions={getOrigPosition:function getOrigPosition(){var n=u.current,f=n.element,t=n.orig,i={},e=50,o=50,s=n.hPadding,c=n.wPadding,r=u.getViewport();return!t&&n.isDom&&f.is(":visible")&&(t=f.find("img:first"),t.length||(t=f)),a(t)?(i=t.offset(),t.is("img")&&(e=t.outerWidth(),o=t.outerHeight())):(i.top=r.y+(r.h-o)*n.topRatio,i.left=r.x+(r.w-e)*n.leftRatio),(u.wrap.css("position")==="fixed"||n.locked)&&(i.top-=r.y,i.left-=r.x),{top:h(i.top-s*n.topRatio),left:h(i.left-c*n.leftRatio),width:h(e+c),height:h(o+s)};},step:function step(n,t){var r,s,e,i=t.prop,o=u.current,h=o.wrapSpace,c=o.skinSpace;(i==="width"||i==="height")&&(r=t.end===t.start?1:(n-t.start)/(t.end-t.start),u.isClosing&&(r=1-r),s=i==="width"?o.wPadding:o.hPadding,e=n-s,u.skin[i](f(i==="width"?e:e-h*r)),u.inner[i](f(i==="width"?e:e-h*r-c*r)));},zoomIn:function zoomIn(){var n=u.current,t=n.pos,r=n.openEffect,f=r==="elastic",e=i.extend({opacity:1},t);delete e.position;f?(t=this.getOrigPosition(),n.openOpacity&&(t.opacity=.1)):r==="fade"&&(t.opacity=.1);u.wrap.css(t).animate(e,{duration:r==="none"?0:n.openSpeed,easing:n.openEasing,step:f?this.step:null,complete:u._afterZoomIn});},zoomOut:function zoomOut(){var n=u.current,i=n.closeEffect,r=i==="elastic",t={opacity:.1};r&&(t=this.getOrigPosition(),n.closeOpacity&&(t.opacity=.1));u.wrap.animate(t,{duration:i==="none"?0:n.closeSpeed,easing:n.closeEasing,step:r?this.step:null,complete:u._afterZoomOut});},changeIn:function changeIn(){var i=u.current,s=i.nextEffect,t=i.pos,o={opacity:1},r=u.direction,e=200,n;t.opacity=.1;s==="elastic"&&(n=r==="down"||r==="up"?"top":"left",r==="down"||r==="right"?(t[n]=h(f(t[n])-e),o[n]="+="+e+"px"):(t[n]=h(f(t[n])+e),o[n]="-="+e+"px"));s==="none"?u._afterZoomIn():u.wrap.css(t).animate(o,{duration:i.nextSpeed,easing:i.nextEasing,complete:u._afterZoomIn});},changeOut:function changeOut(){var n=u.previous,r=n.prevEffect,f={opacity:.1},t=u.direction;r==="elastic"&&(f[t==="down"||t==="up"?"top":"left"]=(t==="up"||t==="left"?"-":"+")+"=200px");n.wrap.animate(f,{duration:r==="none"?0:n.prevSpeed,easing:n.prevEasing,complete:function complete(){i(this).trigger("onReset").remove();}});}};u.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:i("html"),create:function create(n){n=i.extend({},this.defaults,n);this.overlay&&this.close();this.overlay=i('<div class="fancybox-overlay"><\/div>').appendTo(u.coming?u.coming.parent:n.parent);this.fixed=!1;n.fixed&&u.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0);},open:function open(n){var t=this;n=i.extend({},this.defaults,n);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(n);this.fixed||(e.bind("resize.overlay",i.proxy(this.update,this)),this.update());n.closeClick&&this.overlay.bind("click.overlay",function(n){if(i(n.target).hasClass("fancybox-overlay"))return u.isActive?u.close():t.close(),!1;});this.overlay.css(n.css).show();},close:function close(){var n,t;e.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(i(".fancybox-margin").removeClass("fancybox-margin"),n=e.scrollTop(),t=e.scrollLeft(),this.el.removeClass("fancybox-lock"),e.scrollTop(n).scrollLeft(t));i(".fancybox-overlay").remove().hide();i.extend(this,{overlay:null,fixed:!1});},update:function update(){var n="100%",i;this.overlay.width(n).height("100%");y?(i=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),o.width()>i&&(n=o.width())):o.width()>e.width()&&(n=o.width());this.overlay.width(n).height(o.height());},onReady:function onReady(n,t){var r=this.overlay;i(".fancybox-overlay").stop(!0,!0);r||this.create(n);n.locked&&this.fixed&&t.fixed&&(r||(this.margin=o.height()>e.height()?i("html").css("margin-right").replace("px",""):!1),t.locked=this.overlay.append(t.wrap),t.fixed=!1);n.showEarly===!0&&this.beforeShow.apply(this,arguments);},beforeShow:function beforeShow(n,t){var r,u;t.locked&&(this.margin!==!1&&(i("*").filter(function(){return i(this).css("position")==="fixed"&&!i(this).hasClass("fancybox-overlay")&&!i(this).hasClass("fancybox-wrap");}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),r=e.scrollTop(),u=e.scrollLeft(),this.el.addClass("fancybox-lock"),e.scrollTop(r).scrollLeft(u));this.open(n);},onUpdate:function onUpdate(){this.fixed||this.update();},afterClose:function afterClose(n){this.overlay&&!u.coming&&this.overlay.fadeOut(n.speedOut,i.proxy(this.close,this));}};u.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function beforeShow(n){var o=u.current,r=o.title,s=n.type,t,e;if(i.isFunction(r)&&(r=r.call(o.element,o)),c(r)&&i.trim(r)!==""){t=i('<div class="fancybox-title fancybox-title-'+s+'-wrap">'+r+"<\/div>");switch(s){case"inside":e=u.skin;break;case"outside":e=u.wrap;break;case"over":e=u.inner;break;default:e=u.skin;t.appendTo("body");y&&t.width(t.width());t.wrapInner('<span class="child"><\/span>');u.current.margin[2]+=Math.abs(f(t.css("margin-bottom")));}
t[n.position==="top"?"prependTo":"appendTo"](e);}}};i.fn.fancybox=function(n){var r,f=i(this),t=this.selector||"",e=function e(_e){var o=i(this).blur(),c=r,h,s;_e.ctrlKey||_e.altKey||_e.shiftKey||_e.metaKey||o.is(".fancybox-wrap")||(h=n.groupAttr||"data-fancybox-group",s=o.attr(h),s||(h="rel",s=o.get(0)[h]),s&&s!==""&&s!=="nofollow"&&(o=t.length?i(t):f,o=o.filter("["+h+'="'+s+'"]'),c=o.index(this)),n.index=c,u.open(o,n)!==!1&&_e.preventDefault());};return n=n||{},r=n.index||0,t&&n.live!==!1?o.undelegate(t,"click.fb-start").delegate(t+":not('.fancybox-item, .fancybox-nav')","click.fb-start",e):f.unbind("click.fb-start").bind("click.fb-start",e),this.filter("[data-fancybox-start=1]").trigger("click"),this;};o.ready(function(){var t,f;i.scrollbarWidth===r&&(i.scrollbarWidth=function(){var n=i('<div style="width:50px;height:50px;overflow:auto"><div/><\/div>').appendTo("body"),t=n.children(),r=t.innerWidth()-t.height(99).innerWidth();return n.remove(),r;});i.support.fixedPosition===r&&(i.support.fixedPosition=function(){var n=i('<div style="position:fixed;top:20px;"><\/div>').appendTo("body"),t=n[0].offsetTop===20||n[0].offsetTop===15;return n.remove(),t;}());i.extend(u.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")});t=i(n).width();p.addClass("fancybox-lock-test");f=i(n).width();p.removeClass("fancybox-lock-test");i("<style type='text/css'>.fancybox-margin{margin-right:"+(f-t)+"px;}<\/style>").appendTo("head");});})(window,document,jQuery);
"use strict";
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
/*! Select2 4.0.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : jQuery);
}(function (a) {
  var b = function () {
    if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
    var b;
    return function () {
      if (!b || !b.requirejs) {
        b ? c = b : b = {};
        var a, c, d;
        !function (b) {
          function e(a, b) {
            return u.call(a, b);
          }
          function f(a, b) {
            var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n = b && b.split("/"),
                o = s.map,
                p = o && o["*"] || {};
            if (a && "." === a.charAt(0)) if (b) {
              for (n = n.slice(0, n.length - 1), a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.concat(a), k = 0; k < a.length; k += 1) {
                if (m = a[k], "." === m) a.splice(k, 1), k -= 1;else if (".." === m) {
                  if (1 === k && (".." === a[2] || ".." === a[0])) break;
                  k > 0 && (a.splice(k - 1, 2), k -= 2);
                }
              }
              a = a.join("/");
            } else 0 === a.indexOf("./") && (a = a.substring(2));
            if ((n || p) && o) {
              for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                if (d = c.slice(0, k).join("/"), n) for (l = n.length; l > 0; l -= 1) {
                  if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                    f = e, h = k;
                    break;
                  }
                }
                if (f) break;
                !i && p && p[d] && (i = p[d], j = k);
              }
              !f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"));
            }
            return a;
          }
          function g(a, c) {
            return function () {
              return _n.apply(b, v.call(arguments, 0).concat([a, c]));
            };
          }
          function h(a) {
            return function (b) {
              return f(b, a);
            };
          }
          function i(a) {
            return function (b) {
              q[a] = b;
            };
          }
          function j(a) {
            if (e(r, a)) {
              var c = r[a];
              delete r[a], t[a] = !0, m.apply(b, c);
            }
            if (!e(q, a) && !e(t, a)) throw new Error("No " + a);
            return q[a];
          }
          function k(a) {
            var b,
                c = a ? a.indexOf("!") : -1;
            return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a];
          }
          function l(a) {
            return function () {
              return s && s.config && s.config[a] || {};
            };
          }
          var m,
              _n,
              o,
              p,
              q = {},
              r = {},
              s = {},
              t = {},
              u = Object.prototype.hasOwnProperty,
              v = [].slice,
              w = /\.js$/;
          o = function o(a, b) {
            var c,
                d = k(a),
                e = d[0];
            return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
              f: e ? e + "!" + a : a,
              n: a,
              pr: e,
              p: c
            };
          }, p = {
            require: function require(a) {
              return g(a);
            },
            exports: function exports(a) {
              var b = q[a];
              return "undefined" != typeof b ? b : q[a] = {};
            },
            module: function module(a) {
              return {
                id: a,
                uri: "",
                exports: q[a],
                config: l(a)
              };
            }
          }, m = function m(a, c, d, f) {
            var h,
                k,
                l,
                m,
                n,
                s,
                u = [],
                v = _typeof(d);
            if (f = f || a, "undefined" === v || "function" === v) {
              for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1) {
                if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a);else if ("exports" === k) u[n] = p.exports(a), s = !0;else if ("module" === k) h = u[n] = p.module(a);else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);else {
                  if (!m.p) throw new Error(a + " missing " + k);
                  m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k];
                }
              }
              l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l));
            } else a && (q[a] = d);
          }, a = c = _n = function n(a, c, d, e, f) {
            if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);
            if (!a.splice) {
              if (s = a, s.deps && _n(s.deps, s.callback), !c) return;
              c.splice ? (a = c, c = d, d = null) : a = b;
            }
            return c = c || function () {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function () {
              m(b, a, c, d);
            }, 4), _n;
          }, _n.config = function (a) {
            return _n(a);
          }, a._defined = q, d = function d(a, b, c) {
            b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c]);
          }, d.amd = {
            jQuery: !0
          };
        }(), b.requirejs = a, b.require = c, b.define = d;
      }
    }(), b.define("almond", function () {}), b.define("jquery", [], function () {
      var b = a || $;
      return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b;
    }), b.define("select2/utils", ["jquery"], function (a) {
      function b(a) {
        var b = a.prototype,
            c = [];
        for (var d in b) {
          var e = b[d];
          "function" == typeof e && "constructor" !== d && c.push(d);
        }
        return c;
      }
      var c = {};
      c.Extend = function (a, b) {
        function c() {
          this.constructor = a;
        }
        var d = {}.hasOwnProperty;
        for (var e in b) {
          d.call(b, e) && (a[e] = b[e]);
        }
        return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
      }, c.Decorate = function (a, c) {
        function d() {
          var b = Array.prototype.unshift,
              d = c.prototype.constructor.length,
              e = a.prototype.constructor;
          d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments);
        }
        function e() {
          this.constructor = d;
        }
        var f = b(c),
            g = b(a);
        c.displayName = a.displayName, d.prototype = new e();
        for (var h = 0; h < g.length; h++) {
          var i = g[h];
          d.prototype[i] = a.prototype[i];
        }
        for (var j = function j(a) {
          var b = function b() {};
          (a in d.prototype) && (b = d.prototype[a]);
          var e = c.prototype[a];
          return function () {
            var a = Array.prototype.unshift;
            return a.call(arguments, b), e.apply(this, arguments);
          };
        }, k = 0; k < f.length; k++) {
          var l = f[k];
          d.prototype[l] = j(l);
        }
        return d;
      };
      var d = function d() {
        this.listeners = {};
      };
      return d.prototype.on = function (a, b) {
        this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b];
      }, d.prototype.trigger = function (a) {
        var b = Array.prototype.slice;
        this.listeners = this.listeners || {}, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
      }, d.prototype.invoke = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
          a[c].apply(this, b);
        }
      }, c.Observable = d, c.generateChars = function (a) {
        for (var b = "", c = 0; a > c; c++) {
          var d = Math.floor(36 * Math.random());
          b += d.toString(36);
        }
        return b;
      }, c.bind = function (a, b) {
        return function () {
          a.apply(b, arguments);
        };
      }, c._convertData = function (a) {
        for (var b in a) {
          var c = b.split("-"),
              d = a;
          if (1 !== c.length) {
            for (var e = 0; e < c.length; e++) {
              var f = c[e];
              f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f];
            }
            delete a[b];
          }
        }
        return a;
      }, c.hasScroll = function (b, c) {
        var d = a(c),
            e = c.style.overflowX,
            f = c.style.overflowY;
        return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1;
      }, c.escapeMarkup = function (a) {
        var b = {
          "\\": "&#92;",
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#47;"
        };
        return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) {
          return b[a];
        });
      }, c.appendMany = function (b, c) {
        if ("1.7" === a.fn.jquery.substr(0, 3)) {
          var d = a();
          a.map(c, function (a) {
            d = d.add(a);
          }), c = d;
        }
        b.append(c);
      }, c;
    }), b.define("select2/results", ["jquery", "./utils"], function (a, b) {
      function c(a, b, d) {
        this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this);
      }
      return b.Extend(c, b.Observable), c.prototype.render = function () {
        var b = a('<ul class="select2-results__options" role="tree"></ul>');
        return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b;
      }, c.prototype.clear = function () {
        this.$results.empty();
      }, c.prototype.displayMessage = function (b) {
        var c = this.options.get("escapeMarkup");
        this.clear(), this.hideLoading();
        var d = a('<li role="treeitem" class="select2-results__option"></li>'),
            e = this.options.get("translations").get(b.message);
        d.append(c(e(b.args))), this.$results.append(d);
      }, c.prototype.append = function (a) {
        this.hideLoading();
        var b = [];
        if (null == a.results || 0 === a.results.length) return void (0 === this.$results.children().length && this.trigger("results:message", {
          message: "noResults"
        }));
        a.results = this.sort(a.results);
        for (var c = 0; c < a.results.length; c++) {
          var d = a.results[c],
              e = this.option(d);
          b.push(e);
        }
        this.$results.append(b);
      }, c.prototype.position = function (a, b) {
        var c = b.find(".select2-results");
        c.append(a);
      }, c.prototype.sort = function (a) {
        var b = this.options.get("sorter");
        return b(a);
      }, c.prototype.setClasses = function () {
        var b = this;
        this.data.current(function (c) {
          var d = a.map(c, function (a) {
            return a.id.toString();
          }),
              e = b.$results.find(".select2-results__option[aria-selected]");
          e.each(function () {
            var b = a(this),
                c = a.data(this, "data"),
                e = "" + c.id;
            null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false");
          });
          var f = e.filter("[aria-selected=true]");
          f.length > 0 ? f.first().trigger("mouseenter") : e.first().trigger("mouseenter");
        });
      }, c.prototype.showLoading = function (a) {
        this.hideLoading();
        var b = this.options.get("translations").get("searching"),
            c = {
          disabled: !0,
          loading: !0,
          text: b(a)
        },
            d = this.option(c);
        d.className += " loading-results", this.$results.prepend(d);
      }, c.prototype.hideLoading = function () {
        this.$results.find(".loading-results").remove();
      }, c.prototype.option = function (b) {
        var c = document.createElement("li");
        c.className = "select2-results__option";
        var d = {
          role: "treeitem",
          "aria-selected": "false"
        };
        b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);
        for (var e in d) {
          var f = d[e];
          c.setAttribute(e, f);
        }
        if (b.children) {
          var g = a(c),
              h = document.createElement("strong");
          h.className = "select2-results__group";
          {
            a(h);
          }
          this.template(b, h);
          for (var i = [], j = 0; j < b.children.length; j++) {
            var k = b.children[j],
                l = this.option(k);
            i.push(l);
          }
          var m = a("<ul></ul>", {
            "class": "select2-results__options select2-results__options--nested"
          });
          m.append(i), g.append(h), g.append(m);
        } else this.template(b, c);
        return a.data(c, "data", b), c;
      }, c.prototype.bind = function (b) {
        var c = this,
            d = b.id + "-results";
        this.$results.attr("id", d), b.on("results:all", function (a) {
          c.clear(), c.append(a.data), b.isOpen() && c.setClasses();
        }), b.on("results:append", function (a) {
          c.append(a.data), b.isOpen() && c.setClasses();
        }), b.on("query", function (a) {
          c.showLoading(a);
        }), b.on("select", function () {
          b.isOpen() && c.setClasses();
        }), b.on("unselect", function () {
          b.isOpen() && c.setClasses();
        }), b.on("open", function () {
          c.$results.attr("aria-expanded", "true"), c.$results.attr("aria-hidden", "false"), c.setClasses(), c.ensureHighlightVisible();
        }), b.on("close", function () {
          c.$results.attr("aria-expanded", "false"), c.$results.attr("aria-hidden", "true"), c.$results.removeAttr("aria-activedescendant");
        }), b.on("results:toggle", function () {
          var a = c.getHighlightedResults();
          0 !== a.length && a.trigger("mouseup");
        }), b.on("results:select", function () {
          var a = c.getHighlightedResults();
          if (0 !== a.length) {
            var b = a.data("data");
            "true" == a.attr("aria-selected") ? c.trigger("close") : c.trigger("select", {
              data: b
            });
          }
        }), b.on("results:previous", function () {
          var a = c.getHighlightedResults(),
              b = c.$results.find("[aria-selected]"),
              d = b.index(a);
          if (0 !== d) {
            var e = d - 1;
            0 === a.length && (e = 0);
            var f = b.eq(e);
            f.trigger("mouseenter");
            var g = c.$results.offset().top,
                h = f.offset().top,
                i = c.$results.scrollTop() + (h - g);
            0 === e ? c.$results.scrollTop(0) : 0 > h - g && c.$results.scrollTop(i);
          }
        }), b.on("results:next", function () {
          var a = c.getHighlightedResults(),
              b = c.$results.find("[aria-selected]"),
              d = b.index(a),
              e = d + 1;
          if (!(e >= b.length)) {
            var f = b.eq(e);
            f.trigger("mouseenter");
            var g = c.$results.offset().top + c.$results.outerHeight(!1),
                h = f.offset().top + f.outerHeight(!1),
                i = c.$results.scrollTop() + h - g;
            0 === e ? c.$results.scrollTop(0) : h > g && c.$results.scrollTop(i);
          }
        }), b.on("results:focus", function (a) {
          a.element.addClass("select2-results__option--highlighted");
        }), b.on("results:message", function (a) {
          c.displayMessage(a);
        }), a.fn.mousewheel && this.$results.on("mousewheel", function (a) {
          var b = c.$results.scrollTop(),
              d = c.$results.get(0).scrollHeight - c.$results.scrollTop() + a.deltaY,
              e = a.deltaY > 0 && b - a.deltaY <= 0,
              f = a.deltaY < 0 && d <= c.$results.height();
          e ? (c.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (c.$results.scrollTop(c.$results.get(0).scrollHeight - c.$results.height()), a.preventDefault(), a.stopPropagation());
        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) {
          var d = a(this),
              e = d.data("data");
          return "true" === d.attr("aria-selected") ? void (c.options.get("multiple") ? c.trigger("unselect", {
            originalEvent: b,
            data: e
          }) : c.trigger("close")) : void c.trigger("select", {
            originalEvent: b,
            data: e
          });
        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function () {
          var b = a(this).data("data");
          c.getHighlightedResults().removeClass("select2-results__option--highlighted"), c.trigger("results:focus", {
            data: b,
            element: a(this)
          });
        });
      }, c.prototype.getHighlightedResults = function () {
        var a = this.$results.find(".select2-results__option--highlighted");
        return a;
      }, c.prototype.destroy = function () {
        this.$results.remove();
      }, c.prototype.ensureHighlightVisible = function () {
        var a = this.getHighlightedResults();
        if (0 !== a.length) {
          var b = this.$results.find("[aria-selected]"),
              c = b.index(a),
              d = this.$results.offset().top,
              e = a.offset().top,
              f = this.$results.scrollTop() + (e - d),
              g = e - d;
          f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f);
        }
      }, c.prototype.template = function (b, c) {
        var d = this.options.get("templateResult"),
            e = this.options.get("escapeMarkup"),
            f = d(b);
        null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f);
      }, c;
    }), b.define("select2/keys", [], function () {
      var a = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
      };
      return a;
    }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) {
      function d(a, b) {
        this.$element = a, this.options = b, d.__super__.constructor.call(this);
      }
      return b.Extend(d, b.Observable), d.prototype.render = function () {
        var b = a('<span class="select2-selection" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></span>');
        return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b;
      }, d.prototype.bind = function (a) {
        var b = this,
            d = (a.id + "-container", a.id + "-results");
        this.container = a, this.$selection.on("focus", function (a) {
          b.trigger("focus", a);
        }), this.$selection.on("blur", function (a) {
          b.trigger("blur", a);
        }), this.$selection.on("keydown", function (a) {
          b.trigger("keypress", a), a.which === c.SPACE && a.preventDefault();
        }), a.on("results:focus", function (a) {
          b.$selection.attr("aria-activedescendant", a.data._resultId);
        }), a.on("selection:update", function (a) {
          b.update(a.data);
        }), a.on("open", function () {
          b.$selection.attr("aria-expanded", "true"), b.$selection.attr("aria-owns", d), b._attachCloseHandler(a);
        }), a.on("close", function () {
          b.$selection.attr("aria-expanded", "false"), b.$selection.removeAttr("aria-activedescendant"), b.$selection.removeAttr("aria-owns"), b.$selection.focus(), b._detachCloseHandler(a);
        }), a.on("enable", function () {
          b.$selection.attr("tabindex", b._tabindex);
        }), a.on("disable", function () {
          b.$selection.attr("tabindex", "-1");
        });
      }, d.prototype._attachCloseHandler = function (b) {
        a(document.body).on("mousedown.select2." + b.id, function (b) {
          var c = a(b.target),
              d = c.closest(".select2"),
              e = a(".select2.select2-container--open");
          e.each(function () {
            var b = a(this);
            if (this != d[0]) {
              var c = b.data("element");
              c.select2("close");
            }
          });
        });
      }, d.prototype._detachCloseHandler = function (b) {
        a(document.body).off("mousedown.select2." + b.id);
      }, d.prototype.position = function (a, b) {
        var c = b.find(".selection");
        c.append(a);
      }, d.prototype.destroy = function () {
        this._detachCloseHandler(this.container);
      }, d.prototype.update = function () {
        throw new Error("The `update` method must be defined in child classes.");
      }, d;
    }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c) {
      function d() {
        d.__super__.constructor.apply(this, arguments);
      }
      return c.Extend(d, b), d.prototype.render = function () {
        var a = d.__super__.render.call(this);
        return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a;
      }, d.prototype.bind = function (a) {
        var b = this;
        d.__super__.bind.apply(this, arguments);
        var c = a.id + "-container";
        this.$selection.find(".select2-selection__rendered").attr("id", c), this.$selection.attr("aria-labelledby", c), this.$selection.on("mousedown", function (a) {
          1 === a.which && b.trigger("toggle", {
            originalEvent: a
          });
        }), this.$selection.on("focus", function () {}), this.$selection.on("blur", function () {}), a.on("selection:update", function (a) {
          b.update(a.data);
        });
      }, d.prototype.clear = function () {
        this.$selection.find(".select2-selection__rendered").empty();
      }, d.prototype.display = function (a) {
        var b = this.options.get("templateSelection"),
            c = this.options.get("escapeMarkup");
        return c(b(a));
      }, d.prototype.selectionContainer = function () {
        return a("<span></span>");
      }, d.prototype.update = function (a) {
        if (0 === a.length) return void this.clear();
        var b = a[0],
            c = this.display(b),
            d = this.$selection.find(".select2-selection__rendered");
        d.empty().append(c), d.prop("title", b.title || b.text);
      }, d;
    }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) {
      function d() {
        d.__super__.constructor.apply(this, arguments);
      }
      return c.Extend(d, b), d.prototype.render = function () {
        var a = d.__super__.render.call(this);
        return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a;
      }, d.prototype.bind = function () {
        var b = this;
        d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) {
          b.trigger("toggle", {
            originalEvent: a
          });
        }), this.$selection.on("click", ".select2-selection__choice__remove", function (c) {
          var d = a(this),
              e = d.parent(),
              f = e.data("data");
          b.trigger("unselect", {
            originalEvent: c,
            data: f
          });
        });
      }, d.prototype.clear = function () {
        this.$selection.find(".select2-selection__rendered").empty();
      }, d.prototype.display = function (a) {
        var b = this.options.get("templateSelection"),
            c = this.options.get("escapeMarkup");
        return c(b(a));
      }, d.prototype.selectionContainer = function () {
        var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
        return b;
      }, d.prototype.update = function (a) {
        if (this.clear(), 0 !== a.length) {
          for (var b = [], d = 0; d < a.length; d++) {
            var e = a[d],
                f = this.display(e),
                g = this.selectionContainer();
            g.append(f), g.prop("title", e.title || e.text), g.data("data", e), b.push(g);
          }
          var h = this.$selection.find(".select2-selection__rendered");
          c.appendMany(h, b);
        }
      }, d;
    }), b.define("select2/selection/placeholder", ["../utils"], function () {
      function a(a, b, c) {
        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c);
      }
      return a.prototype.normalizePlaceholder = function (a, b) {
        return "string" == typeof b && (b = {
          id: "",
          text: b
        }), b;
      }, a.prototype.createPlaceholder = function (a, b) {
        var c = this.selectionContainer();
        return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c;
      }, a.prototype.update = function (a, b) {
        var c = 1 == b.length && b[0].id != this.placeholder.id,
            d = b.length > 1;
        if (d || c) return a.call(this, b);
        this.clear();
        var e = this.createPlaceholder(this.placeholder);
        this.$selection.find(".select2-selection__rendered").append(e);
      }, a;
    }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) {
      function c() {}
      return c.prototype.bind = function (a, b, c) {
        var d = this;
        a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) {
          d._handleClear(a);
        }), b.on("keypress", function (a) {
          d._handleKeyboardClear(a, b);
        });
      }, c.prototype._handleClear = function (a, b) {
        if (!this.options.get("disabled")) {
          var c = this.$selection.find(".select2-selection__clear");
          if (0 !== c.length) {
            b.stopPropagation();
            for (var d = c.data("data"), e = 0; e < d.length; e++) {
              var f = {
                data: d[e]
              };
              if (this.trigger("unselect", f), f.prevented) return;
            }
            this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle");
          }
        }
      }, c.prototype._handleKeyboardClear = function (a, c, d) {
        d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c);
      }, c.prototype.update = function (b, c) {
        if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
          var d = a('<span class="select2-selection__clear">&times;</span>');
          d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d);
        }
      }, c;
    }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) {
      function d(a, b, c) {
        a.call(this, b, c);
      }
      return d.prototype.render = function (b) {
        var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></li>');
        this.$searchContainer = c, this.$search = c.find("input");
        var d = b.call(this);
        return d;
      }, d.prototype.bind = function (a, b, d) {
        var e = this;
        a.call(this, b, d), b.on("open", function () {
          e.$search.attr("tabindex", 0), e.$search.focus();
        }), b.on("close", function () {
          e.$search.attr("tabindex", -1), e.$search.val(""), e.$search.focus();
        }), b.on("enable", function () {
          e.$search.prop("disabled", !1);
        }), b.on("disable", function () {
          e.$search.prop("disabled", !0);
        }), this.$selection.on("focusin", ".select2-search--inline", function (a) {
          e.trigger("focus", a);
        }), this.$selection.on("focusout", ".select2-search--inline", function (a) {
          e.trigger("blur", a);
        }), this.$selection.on("keydown", ".select2-search--inline", function (a) {
          a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
          var b = a.which;
          if (b === c.BACKSPACE && "" === e.$search.val()) {
            var d = e.$searchContainer.prev(".select2-selection__choice");
            if (d.length > 0) {
              var f = d.data("data");
              e.searchRemoveChoice(f), a.preventDefault();
            }
          }
        }), this.$selection.on("input", ".select2-search--inline", function () {
          e.$selection.off("keyup.search");
        }), this.$selection.on("keyup.search input", ".select2-search--inline", function (a) {
          e.handleSearch(a);
        });
      }, d.prototype.createPlaceholder = function (a, b) {
        this.$search.attr("placeholder", b.text);
      }, d.prototype.update = function (a, b) {
        this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch();
      }, d.prototype.handleSearch = function () {
        if (this.resizeSearch(), !this._keyUpPrevented) {
          var a = this.$search.val();
          this.trigger("query", {
            term: a
          });
        }
        this._keyUpPrevented = !1;
      }, d.prototype.searchRemoveChoice = function (a, b) {
        this.trigger("unselect", {
          data: b
        }), this.trigger("open"), this.$search.val(b.text + " ");
      }, d.prototype.resizeSearch = function () {
        this.$search.css("width", "25px");
        var a = "";
        if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();else {
          var b = this.$search.val().length + 1;
          a = .75 * b + "em";
        }
        this.$search.css("width", a);
      }, d;
    }), b.define("select2/selection/eventRelay", ["jquery"], function (a) {
      function b() {}
      return b.prototype.bind = function (b, c, d) {
        var e = this,
            f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
            g = ["opening", "closing", "selecting", "unselecting"];
        b.call(this, c, d), c.on("*", function (b, c) {
          if (-1 !== a.inArray(b, f)) {
            c = c || {};
            var d = a.Event("select2:" + b, {
              params: c
            });
            e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented());
          }
        });
      }, b;
    }), b.define("select2/translation", ["jquery", "require"], function (a, b) {
      function c(a) {
        this.dict = a || {};
      }
      return c.prototype.all = function () {
        return this.dict;
      }, c.prototype.get = function (a) {
        return this.dict[a];
      }, c.prototype.extend = function (b) {
        this.dict = a.extend({}, b.all(), this.dict);
      }, c._cache = {}, c.loadPath = function (a) {
        if (!(a in c._cache)) {
          var d = b(a);
          c._cache[a] = d;
        }
        return new c(c._cache[a]);
      }, c;
    }), b.define("select2/diacritics", [], function () {
      var a = {
        "Ⓐ": "A",
        "Ａ": "A",
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ầ": "A",
        "Ấ": "A",
        "Ẫ": "A",
        "Ẩ": "A",
        "Ã": "A",
        "Ā": "A",
        "Ă": "A",
        "Ằ": "A",
        "Ắ": "A",
        "Ẵ": "A",
        "Ẳ": "A",
        "Ȧ": "A",
        "Ǡ": "A",
        "Ä": "A",
        "Ǟ": "A",
        "Ả": "A",
        "Å": "A",
        "Ǻ": "A",
        "Ǎ": "A",
        "Ȁ": "A",
        "Ȃ": "A",
        "Ạ": "A",
        "Ậ": "A",
        "Ặ": "A",
        "Ḁ": "A",
        "Ą": "A",
        "Ⱥ": "A",
        "Ɐ": "A",
        "Ꜳ": "AA",
        "Æ": "AE",
        "Ǽ": "AE",
        "Ǣ": "AE",
        "Ꜵ": "AO",
        "Ꜷ": "AU",
        "Ꜹ": "AV",
        "Ꜻ": "AV",
        "Ꜽ": "AY",
        "Ⓑ": "B",
        "Ｂ": "B",
        "Ḃ": "B",
        "Ḅ": "B",
        "Ḇ": "B",
        "Ƀ": "B",
        "Ƃ": "B",
        "Ɓ": "B",
        "Ⓒ": "C",
        "Ｃ": "C",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "Ç": "C",
        "Ḉ": "C",
        "Ƈ": "C",
        "Ȼ": "C",
        "Ꜿ": "C",
        "Ⓓ": "D",
        "Ｄ": "D",
        "Ḋ": "D",
        "Ď": "D",
        "Ḍ": "D",
        "Ḑ": "D",
        "Ḓ": "D",
        "Ḏ": "D",
        "Đ": "D",
        "Ƌ": "D",
        "Ɗ": "D",
        "Ɖ": "D",
        "Ꝺ": "D",
        "Ǳ": "DZ",
        "Ǆ": "DZ",
        "ǲ": "Dz",
        "ǅ": "Dz",
        "Ⓔ": "E",
        "Ｅ": "E",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ề": "E",
        "Ế": "E",
        "Ễ": "E",
        "Ể": "E",
        "Ẽ": "E",
        "Ē": "E",
        "Ḕ": "E",
        "Ḗ": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ë": "E",
        "Ẻ": "E",
        "Ě": "E",
        "Ȅ": "E",
        "Ȇ": "E",
        "Ẹ": "E",
        "Ệ": "E",
        "Ȩ": "E",
        "Ḝ": "E",
        "Ę": "E",
        "Ḙ": "E",
        "Ḛ": "E",
        "Ɛ": "E",
        "Ǝ": "E",
        "Ⓕ": "F",
        "Ｆ": "F",
        "Ḟ": "F",
        "Ƒ": "F",
        "Ꝼ": "F",
        "Ⓖ": "G",
        "Ｇ": "G",
        "Ǵ": "G",
        "Ĝ": "G",
        "Ḡ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ǧ": "G",
        "Ģ": "G",
        "Ǥ": "G",
        "Ɠ": "G",
        "Ꞡ": "G",
        "Ᵹ": "G",
        "Ꝿ": "G",
        "Ⓗ": "H",
        "Ｈ": "H",
        "Ĥ": "H",
        "Ḣ": "H",
        "Ḧ": "H",
        "Ȟ": "H",
        "Ḥ": "H",
        "Ḩ": "H",
        "Ḫ": "H",
        "Ħ": "H",
        "Ⱨ": "H",
        "Ⱶ": "H",
        "Ɥ": "H",
        "Ⓘ": "I",
        "Ｉ": "I",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "İ": "I",
        "Ï": "I",
        "Ḯ": "I",
        "Ỉ": "I",
        "Ǐ": "I",
        "Ȉ": "I",
        "Ȋ": "I",
        "Ị": "I",
        "Į": "I",
        "Ḭ": "I",
        "Ɨ": "I",
        "Ⓙ": "J",
        "Ｊ": "J",
        "Ĵ": "J",
        "Ɉ": "J",
        "Ⓚ": "K",
        "Ｋ": "K",
        "Ḱ": "K",
        "Ǩ": "K",
        "Ḳ": "K",
        "Ķ": "K",
        "Ḵ": "K",
        "Ƙ": "K",
        "Ⱪ": "K",
        "Ꝁ": "K",
        "Ꝃ": "K",
        "Ꝅ": "K",
        "Ꞣ": "K",
        "Ⓛ": "L",
        "Ｌ": "L",
        "Ŀ": "L",
        "Ĺ": "L",
        "Ľ": "L",
        "Ḷ": "L",
        "Ḹ": "L",
        "Ļ": "L",
        "Ḽ": "L",
        "Ḻ": "L",
        "Ł": "L",
        "Ƚ": "L",
        "Ɫ": "L",
        "Ⱡ": "L",
        "Ꝉ": "L",
        "Ꝇ": "L",
        "Ꞁ": "L",
        "Ǉ": "LJ",
        "ǈ": "Lj",
        "Ⓜ": "M",
        "Ｍ": "M",
        "Ḿ": "M",
        "Ṁ": "M",
        "Ṃ": "M",
        "Ɱ": "M",
        "Ɯ": "M",
        "Ⓝ": "N",
        "Ｎ": "N",
        "Ǹ": "N",
        "Ń": "N",
        "Ñ": "N",
        "Ṅ": "N",
        "Ň": "N",
        "Ṇ": "N",
        "Ņ": "N",
        "Ṋ": "N",
        "Ṉ": "N",
        "Ƞ": "N",
        "Ɲ": "N",
        "Ꞑ": "N",
        "Ꞥ": "N",
        "Ǌ": "NJ",
        "ǋ": "Nj",
        "Ⓞ": "O",
        "Ｏ": "O",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Ồ": "O",
        "Ố": "O",
        "Ỗ": "O",
        "Ổ": "O",
        "Õ": "O",
        "Ṍ": "O",
        "Ȭ": "O",
        "Ṏ": "O",
        "Ō": "O",
        "Ṑ": "O",
        "Ṓ": "O",
        "Ŏ": "O",
        "Ȯ": "O",
        "Ȱ": "O",
        "Ö": "O",
        "Ȫ": "O",
        "Ỏ": "O",
        "Ő": "O",
        "Ǒ": "O",
        "Ȍ": "O",
        "Ȏ": "O",
        "Ơ": "O",
        "Ờ": "O",
        "Ớ": "O",
        "Ỡ": "O",
        "Ở": "O",
        "Ợ": "O",
        "Ọ": "O",
        "Ộ": "O",
        "Ǫ": "O",
        "Ǭ": "O",
        "Ø": "O",
        "Ǿ": "O",
        "Ɔ": "O",
        "Ɵ": "O",
        "Ꝋ": "O",
        "Ꝍ": "O",
        "Ƣ": "OI",
        "Ꝏ": "OO",
        "Ȣ": "OU",
        "Ⓟ": "P",
        "Ｐ": "P",
        "Ṕ": "P",
        "Ṗ": "P",
        "Ƥ": "P",
        "Ᵽ": "P",
        "Ꝑ": "P",
        "Ꝓ": "P",
        "Ꝕ": "P",
        "Ⓠ": "Q",
        "Ｑ": "Q",
        "Ꝗ": "Q",
        "Ꝙ": "Q",
        "Ɋ": "Q",
        "Ⓡ": "R",
        "Ｒ": "R",
        "Ŕ": "R",
        "Ṙ": "R",
        "Ř": "R",
        "Ȑ": "R",
        "Ȓ": "R",
        "Ṛ": "R",
        "Ṝ": "R",
        "Ŗ": "R",
        "Ṟ": "R",
        "Ɍ": "R",
        "Ɽ": "R",
        "Ꝛ": "R",
        "Ꞧ": "R",
        "Ꞃ": "R",
        "Ⓢ": "S",
        "Ｓ": "S",
        "ẞ": "S",
        "Ś": "S",
        "Ṥ": "S",
        "Ŝ": "S",
        "Ṡ": "S",
        "Š": "S",
        "Ṧ": "S",
        "Ṣ": "S",
        "Ṩ": "S",
        "Ș": "S",
        "Ş": "S",
        "Ȿ": "S",
        "Ꞩ": "S",
        "Ꞅ": "S",
        "Ⓣ": "T",
        "Ｔ": "T",
        "Ṫ": "T",
        "Ť": "T",
        "Ṭ": "T",
        "Ț": "T",
        "Ţ": "T",
        "Ṱ": "T",
        "Ṯ": "T",
        "Ŧ": "T",
        "Ƭ": "T",
        "Ʈ": "T",
        "Ⱦ": "T",
        "Ꞇ": "T",
        "Ꜩ": "TZ",
        "Ⓤ": "U",
        "Ｕ": "U",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ũ": "U",
        "Ṹ": "U",
        "Ū": "U",
        "Ṻ": "U",
        "Ŭ": "U",
        "Ü": "U",
        "Ǜ": "U",
        "Ǘ": "U",
        "Ǖ": "U",
        "Ǚ": "U",
        "Ủ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ǔ": "U",
        "Ȕ": "U",
        "Ȗ": "U",
        "Ư": "U",
        "Ừ": "U",
        "Ứ": "U",
        "Ữ": "U",
        "Ử": "U",
        "Ự": "U",
        "Ụ": "U",
        "Ṳ": "U",
        "Ų": "U",
        "Ṷ": "U",
        "Ṵ": "U",
        "Ʉ": "U",
        "Ⓥ": "V",
        "Ｖ": "V",
        "Ṽ": "V",
        "Ṿ": "V",
        "Ʋ": "V",
        "Ꝟ": "V",
        "Ʌ": "V",
        "Ꝡ": "VY",
        "Ⓦ": "W",
        "Ｗ": "W",
        "Ẁ": "W",
        "Ẃ": "W",
        "Ŵ": "W",
        "Ẇ": "W",
        "Ẅ": "W",
        "Ẉ": "W",
        "Ⱳ": "W",
        "Ⓧ": "X",
        "Ｘ": "X",
        "Ẋ": "X",
        "Ẍ": "X",
        "Ⓨ": "Y",
        "Ｙ": "Y",
        "Ỳ": "Y",
        "Ý": "Y",
        "Ŷ": "Y",
        "Ỹ": "Y",
        "Ȳ": "Y",
        "Ẏ": "Y",
        "Ÿ": "Y",
        "Ỷ": "Y",
        "Ỵ": "Y",
        "Ƴ": "Y",
        "Ɏ": "Y",
        "Ỿ": "Y",
        "Ⓩ": "Z",
        "Ｚ": "Z",
        "Ź": "Z",
        "Ẑ": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "Ẓ": "Z",
        "Ẕ": "Z",
        "Ƶ": "Z",
        "Ȥ": "Z",
        "Ɀ": "Z",
        "Ⱬ": "Z",
        "Ꝣ": "Z",
        "ⓐ": "a",
        "ａ": "a",
        "ẚ": "a",
        "à": "a",
        "á": "a",
        "â": "a",
        "ầ": "a",
        "ấ": "a",
        "ẫ": "a",
        "ẩ": "a",
        "ã": "a",
        "ā": "a",
        "ă": "a",
        "ằ": "a",
        "ắ": "a",
        "ẵ": "a",
        "ẳ": "a",
        "ȧ": "a",
        "ǡ": "a",
        "ä": "a",
        "ǟ": "a",
        "ả": "a",
        "å": "a",
        "ǻ": "a",
        "ǎ": "a",
        "ȁ": "a",
        "ȃ": "a",
        "ạ": "a",
        "ậ": "a",
        "ặ": "a",
        "ḁ": "a",
        "ą": "a",
        "ⱥ": "a",
        "ɐ": "a",
        "ꜳ": "aa",
        "æ": "ae",
        "ǽ": "ae",
        "ǣ": "ae",
        "ꜵ": "ao",
        "ꜷ": "au",
        "ꜹ": "av",
        "ꜻ": "av",
        "ꜽ": "ay",
        "ⓑ": "b",
        "ｂ": "b",
        "ḃ": "b",
        "ḅ": "b",
        "ḇ": "b",
        "ƀ": "b",
        "ƃ": "b",
        "ɓ": "b",
        "ⓒ": "c",
        "ｃ": "c",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "ç": "c",
        "ḉ": "c",
        "ƈ": "c",
        "ȼ": "c",
        "ꜿ": "c",
        "ↄ": "c",
        "ⓓ": "d",
        "ｄ": "d",
        "ḋ": "d",
        "ď": "d",
        "ḍ": "d",
        "ḑ": "d",
        "ḓ": "d",
        "ḏ": "d",
        "đ": "d",
        "ƌ": "d",
        "ɖ": "d",
        "ɗ": "d",
        "ꝺ": "d",
        "ǳ": "dz",
        "ǆ": "dz",
        "ⓔ": "e",
        "ｅ": "e",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ề": "e",
        "ế": "e",
        "ễ": "e",
        "ể": "e",
        "ẽ": "e",
        "ē": "e",
        "ḕ": "e",
        "ḗ": "e",
        "ĕ": "e",
        "ė": "e",
        "ë": "e",
        "ẻ": "e",
        "ě": "e",
        "ȅ": "e",
        "ȇ": "e",
        "ẹ": "e",
        "ệ": "e",
        "ȩ": "e",
        "ḝ": "e",
        "ę": "e",
        "ḙ": "e",
        "ḛ": "e",
        "ɇ": "e",
        "ɛ": "e",
        "ǝ": "e",
        "ⓕ": "f",
        "ｆ": "f",
        "ḟ": "f",
        "ƒ": "f",
        "ꝼ": "f",
        "ⓖ": "g",
        "ｇ": "g",
        "ǵ": "g",
        "ĝ": "g",
        "ḡ": "g",
        "ğ": "g",
        "ġ": "g",
        "ǧ": "g",
        "ģ": "g",
        "ǥ": "g",
        "ɠ": "g",
        "ꞡ": "g",
        "ᵹ": "g",
        "ꝿ": "g",
        "ⓗ": "h",
        "ｈ": "h",
        "ĥ": "h",
        "ḣ": "h",
        "ḧ": "h",
        "ȟ": "h",
        "ḥ": "h",
        "ḩ": "h",
        "ḫ": "h",
        "ẖ": "h",
        "ħ": "h",
        "ⱨ": "h",
        "ⱶ": "h",
        "ɥ": "h",
        "ƕ": "hv",
        "ⓘ": "i",
        "ｉ": "i",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "ï": "i",
        "ḯ": "i",
        "ỉ": "i",
        "ǐ": "i",
        "ȉ": "i",
        "ȋ": "i",
        "ị": "i",
        "į": "i",
        "ḭ": "i",
        "ɨ": "i",
        "ı": "i",
        "ⓙ": "j",
        "ｊ": "j",
        "ĵ": "j",
        "ǰ": "j",
        "ɉ": "j",
        "ⓚ": "k",
        "ｋ": "k",
        "ḱ": "k",
        "ǩ": "k",
        "ḳ": "k",
        "ķ": "k",
        "ḵ": "k",
        "ƙ": "k",
        "ⱪ": "k",
        "ꝁ": "k",
        "ꝃ": "k",
        "ꝅ": "k",
        "ꞣ": "k",
        "ⓛ": "l",
        "ｌ": "l",
        "ŀ": "l",
        "ĺ": "l",
        "ľ": "l",
        "ḷ": "l",
        "ḹ": "l",
        "ļ": "l",
        "ḽ": "l",
        "ḻ": "l",
        "ſ": "l",
        "ł": "l",
        "ƚ": "l",
        "ɫ": "l",
        "ⱡ": "l",
        "ꝉ": "l",
        "ꞁ": "l",
        "ꝇ": "l",
        "ǉ": "lj",
        "ⓜ": "m",
        "ｍ": "m",
        "ḿ": "m",
        "ṁ": "m",
        "ṃ": "m",
        "ɱ": "m",
        "ɯ": "m",
        "ⓝ": "n",
        "ｎ": "n",
        "ǹ": "n",
        "ń": "n",
        "ñ": "n",
        "ṅ": "n",
        "ň": "n",
        "ṇ": "n",
        "ņ": "n",
        "ṋ": "n",
        "ṉ": "n",
        "ƞ": "n",
        "ɲ": "n",
        "ŉ": "n",
        "ꞑ": "n",
        "ꞥ": "n",
        "ǌ": "nj",
        "ⓞ": "o",
        "ｏ": "o",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "ồ": "o",
        "ố": "o",
        "ỗ": "o",
        "ổ": "o",
        "õ": "o",
        "ṍ": "o",
        "ȭ": "o",
        "ṏ": "o",
        "ō": "o",
        "ṑ": "o",
        "ṓ": "o",
        "ŏ": "o",
        "ȯ": "o",
        "ȱ": "o",
        "ö": "o",
        "ȫ": "o",
        "ỏ": "o",
        "ő": "o",
        "ǒ": "o",
        "ȍ": "o",
        "ȏ": "o",
        "ơ": "o",
        "ờ": "o",
        "ớ": "o",
        "ỡ": "o",
        "ở": "o",
        "ợ": "o",
        "ọ": "o",
        "ộ": "o",
        "ǫ": "o",
        "ǭ": "o",
        "ø": "o",
        "ǿ": "o",
        "ɔ": "o",
        "ꝋ": "o",
        "ꝍ": "o",
        "ɵ": "o",
        "ƣ": "oi",
        "ȣ": "ou",
        "ꝏ": "oo",
        "ⓟ": "p",
        "ｐ": "p",
        "ṕ": "p",
        "ṗ": "p",
        "ƥ": "p",
        "ᵽ": "p",
        "ꝑ": "p",
        "ꝓ": "p",
        "ꝕ": "p",
        "ⓠ": "q",
        "ｑ": "q",
        "ɋ": "q",
        "ꝗ": "q",
        "ꝙ": "q",
        "ⓡ": "r",
        "ｒ": "r",
        "ŕ": "r",
        "ṙ": "r",
        "ř": "r",
        "ȑ": "r",
        "ȓ": "r",
        "ṛ": "r",
        "ṝ": "r",
        "ŗ": "r",
        "ṟ": "r",
        "ɍ": "r",
        "ɽ": "r",
        "ꝛ": "r",
        "ꞧ": "r",
        "ꞃ": "r",
        "ⓢ": "s",
        "ｓ": "s",
        "ß": "s",
        "ś": "s",
        "ṥ": "s",
        "ŝ": "s",
        "ṡ": "s",
        "š": "s",
        "ṧ": "s",
        "ṣ": "s",
        "ṩ": "s",
        "ș": "s",
        "ş": "s",
        "ȿ": "s",
        "ꞩ": "s",
        "ꞅ": "s",
        "ẛ": "s",
        "ⓣ": "t",
        "ｔ": "t",
        "ṫ": "t",
        "ẗ": "t",
        "ť": "t",
        "ṭ": "t",
        "ț": "t",
        "ţ": "t",
        "ṱ": "t",
        "ṯ": "t",
        "ŧ": "t",
        "ƭ": "t",
        "ʈ": "t",
        "ⱦ": "t",
        "ꞇ": "t",
        "ꜩ": "tz",
        "ⓤ": "u",
        "ｕ": "u",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ũ": "u",
        "ṹ": "u",
        "ū": "u",
        "ṻ": "u",
        "ŭ": "u",
        "ü": "u",
        "ǜ": "u",
        "ǘ": "u",
        "ǖ": "u",
        "ǚ": "u",
        "ủ": "u",
        "ů": "u",
        "ű": "u",
        "ǔ": "u",
        "ȕ": "u",
        "ȗ": "u",
        "ư": "u",
        "ừ": "u",
        "ứ": "u",
        "ữ": "u",
        "ử": "u",
        "ự": "u",
        "ụ": "u",
        "ṳ": "u",
        "ų": "u",
        "ṷ": "u",
        "ṵ": "u",
        "ʉ": "u",
        "ⓥ": "v",
        "ｖ": "v",
        "ṽ": "v",
        "ṿ": "v",
        "ʋ": "v",
        "ꝟ": "v",
        "ʌ": "v",
        "ꝡ": "vy",
        "ⓦ": "w",
        "ｗ": "w",
        "ẁ": "w",
        "ẃ": "w",
        "ŵ": "w",
        "ẇ": "w",
        "ẅ": "w",
        "ẘ": "w",
        "ẉ": "w",
        "ⱳ": "w",
        "ⓧ": "x",
        "ｘ": "x",
        "ẋ": "x",
        "ẍ": "x",
        "ⓨ": "y",
        "ｙ": "y",
        "ỳ": "y",
        "ý": "y",
        "ŷ": "y",
        "ỹ": "y",
        "ȳ": "y",
        "ẏ": "y",
        "ÿ": "y",
        "ỷ": "y",
        "ẙ": "y",
        "ỵ": "y",
        "ƴ": "y",
        "ɏ": "y",
        "ỿ": "y",
        "ⓩ": "z",
        "ｚ": "z",
        "ź": "z",
        "ẑ": "z",
        "ż": "z",
        "ž": "z",
        "ẓ": "z",
        "ẕ": "z",
        "ƶ": "z",
        "ȥ": "z",
        "ɀ": "z",
        "ⱬ": "z",
        "ꝣ": "z",
        "Ά": "Α",
        "Έ": "Ε",
        "Ή": "Η",
        "Ί": "Ι",
        "Ϊ": "Ι",
        "Ό": "Ο",
        "Ύ": "Υ",
        "Ϋ": "Υ",
        "Ώ": "Ω",
        "ά": "α",
        "έ": "ε",
        "ή": "η",
        "ί": "ι",
        "ϊ": "ι",
        "ΐ": "ι",
        "ό": "ο",
        "ύ": "υ",
        "ϋ": "υ",
        "ΰ": "υ",
        "ω": "ω",
        "ς": "σ"
      };
      return a;
    }), b.define("select2/data/base", ["../utils"], function (a) {
      function b() {
        b.__super__.constructor.call(this);
      }
      return a.Extend(b, a.Observable), b.prototype.current = function () {
        throw new Error("The `current` method must be defined in child classes.");
      }, b.prototype.query = function () {
        throw new Error("The `query` method must be defined in child classes.");
      }, b.prototype.bind = function () {}, b.prototype.destroy = function () {}, b.prototype.generateResultId = function (b, c) {
        var d = b.id + "-result-";
        return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4);
      }, b;
    }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        this.$element = a, this.options = b, d.__super__.constructor.call(this);
      }
      return b.Extend(d, a), d.prototype.current = function (a) {
        var b = [],
            d = this;
        this.$element.find(":selected").each(function () {
          var a = c(this),
              e = d.item(a);
          b.push(e);
        }), a(b);
      }, d.prototype.select = function (a) {
        var b = this;
        if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
        if (this.$element.prop("multiple")) this.current(function (d) {
          var e = [];
          a = [a], a.push.apply(a, d);
          for (var f = 0; f < a.length; f++) {
            var g = a[f].id;
            -1 === c.inArray(g, e) && e.push(g);
          }
          b.$element.val(e), b.$element.trigger("change");
        });else {
          var d = a.id;
          this.$element.val(d), this.$element.trigger("change");
        }
      }, d.prototype.unselect = function (a) {
        var b = this;
        if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (d) {
          for (var e = [], f = 0; f < d.length; f++) {
            var g = d[f].id;
            g !== a.id && -1 === c.inArray(g, e) && e.push(g);
          }
          b.$element.val(e), b.$element.trigger("change");
        });
      }, d.prototype.bind = function (a) {
        var b = this;
        this.container = a, a.on("select", function (a) {
          b.select(a.data);
        }), a.on("unselect", function (a) {
          b.unselect(a.data);
        });
      }, d.prototype.destroy = function () {
        this.$element.find("*").each(function () {
          c.removeData(this, "data");
        });
      }, d.prototype.query = function (a, b) {
        var d = [],
            e = this,
            f = this.$element.children();
        f.each(function () {
          var b = c(this);
          if (b.is("option") || b.is("optgroup")) {
            var f = e.item(b),
                g = e.matches(a, f);
            null !== g && d.push(g);
          }
        }), b({
          results: d
        });
      }, d.prototype.addOptions = function (a) {
        b.appendMany(this.$element, a);
      }, d.prototype.option = function (a) {
        var b;
        a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);
        var d = c(b),
            e = this._normalizeItem(a);
        return e.element = b, c.data(b, "data", e), d;
      }, d.prototype.item = function (a) {
        var b = {};
        if (b = c.data(a[0], "data"), null != b) return b;
        if (a.is("option")) b = {
          id: a.val(),
          text: a.text(),
          disabled: a.prop("disabled"),
          selected: a.prop("selected"),
          title: a.prop("title")
        };else if (a.is("optgroup")) {
          b = {
            text: a.prop("label"),
            children: [],
            title: a.prop("title")
          };
          for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
            var g = c(d[f]),
                h = this.item(g);
            e.push(h);
          }
          b.children = e;
        }
        return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b;
      }, d.prototype._normalizeItem = function (a) {
        c.isPlainObject(a) || (a = {
          id: a,
          text: a
        }), a = c.extend({}, {
          text: ""
        }, a);
        var b = {
          selected: !1,
          disabled: !1
        };
        return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a);
      }, d.prototype.matches = function (a, b) {
        var c = this.options.get("matcher");
        return c(a, b);
      }, d;
    }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        var c = b.get("data") || [];
        d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c));
      }
      return b.Extend(d, a), d.prototype.select = function (a) {
        var b = this.$element.find("option").filter(function (b, c) {
          return c.value == a.id.toString();
        });
        0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a);
      }, d.prototype.convertToOptions = function (a) {
        function d(a) {
          return function () {
            return c(this).val() == a.id;
          };
        }
        for (var e = this, f = this.$element.find("option"), g = f.map(function () {
          return e.item(c(this)).id;
        }).get(), h = [], i = 0; i < a.length; i++) {
          var j = this._normalizeItem(a[i]);
          if (c.inArray(j.id, g) >= 0) {
            var k = f.filter(d(j)),
                l = this.item(k),
                m = (c.extend(!0, {}, l, j), this.option(l));
            k.replaceWith(m);
          } else {
            var n = this.option(j);
            if (j.children) {
              var o = this.convertToOptions(j.children);
              b.appendMany(n, o);
            }
            h.push(n);
          }
        }
        return h;
      }, d;
    }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) {
      function d(b, c) {
        this.ajaxOptions = this._applyDefaults(c.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), a.__super__.constructor.call(this, b, c);
      }
      return b.Extend(d, a), d.prototype._applyDefaults = function (a) {
        var b = {
          data: function data(a) {
            return {
              q: a.term
            };
          },
          transport: function transport(a, b, d) {
            var e = c.ajax(a);
            return e.then(b), e.fail(d), e;
          }
        };
        return c.extend({}, b, a, !0);
      }, d.prototype.processResults = function (a) {
        return a;
      }, d.prototype.query = function (a, b) {
        function d() {
          var d = f.transport(f, function (d) {
            var f = e.processResults(d, a);
            e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f);
          }, function () {});
          e._request = d;
        }
        var e = this;
        null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
        var f = c.extend({
          type: "GET"
        }, this.ajaxOptions);
        "function" == typeof f.url && (f.url = f.url(a)), "function" == typeof f.data && (f.data = f.data(a)), this.ajaxOptions.delay && "" !== a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d();
      }, d;
    }), b.define("select2/data/tags", ["jquery"], function (a) {
      function b(b, c, d) {
        var e = d.get("tags"),
            f = d.get("createTag");
        if (void 0 !== f && (this.createTag = f), b.call(this, c, d), a.isArray(e)) for (var g = 0; g < e.length; g++) {
          var h = e[g],
              i = this._normalizeItem(h),
              j = this.option(i);
          this.$element.append(j);
        }
      }
      return b.prototype.query = function (a, b, c) {
        function d(a, f) {
          for (var g = a.results, h = 0; h < g.length; h++) {
            var i = g[h],
                j = null != i.children && !d({
              results: i.children
            }, !0),
                k = i.text === b.term;
            if (k || j) return f ? !1 : (a.data = g, void c(a));
          }
          if (f) return !0;
          var l = e.createTag(b);
          if (null != l) {
            var m = e.option(l);
            m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l);
          }
          a.results = g, c(a);
        }
        var e = this;
        return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d);
      }, b.prototype.createTag = function (b, c) {
        var d = a.trim(c.term);
        return "" === d ? null : {
          id: d,
          text: d
        };
      }, b.prototype.insertTag = function (a, b, c) {
        b.unshift(c);
      }, b.prototype._removeOldTags = function () {
        var b = (this._lastTag, this.$element.find("option[data-select2-tag]"));
        b.each(function () {
          this.selected || a(this).remove();
        });
      }, b;
    }), b.define("select2/data/tokenizer", ["jquery"], function (a) {
      function b(a, b, c) {
        var d = c.get("tokenizer");
        void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
      }
      return b.prototype.bind = function (a, b, c) {
        a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field");
      }, b.prototype.query = function (a, b, c) {
        function d(a) {
          e.select(a);
        }
        var e = this;
        b.term = b.term || "";
        var f = this.tokenizer(b, this.options, d);
        f.term !== b.term && (this.$search.length && (this.$search.val(f.term), this.$search.focus()), b.term = f.term), a.call(this, b, c);
      }, b.prototype.tokenizer = function (b, c, d, e) {
        for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) {
          return {
            id: a.term,
            text: a.term
          };
        }; h < g.length;) {
          var j = g[h];
          if (-1 !== a.inArray(j, f)) {
            var k = g.substr(0, h),
                l = a.extend({}, c, {
              term: k
            }),
                m = i(l);
            e(m), g = g.substr(h + 1) || "", h = 0;
          } else h++;
        }
        return {
          term: g
        };
      }, b;
    }), b.define("select2/data/minimumInputLength", [], function () {
      function a(a, b, c) {
        this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c);
      }
      return a.prototype.query = function (a, b, c) {
        return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", {
          message: "inputTooShort",
          args: {
            minimum: this.minimumInputLength,
            input: b.term,
            params: b
          }
        }) : void a.call(this, b, c);
      }, a;
    }), b.define("select2/data/maximumInputLength", [], function () {
      function a(a, b, c) {
        this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c);
      }
      return a.prototype.query = function (a, b, c) {
        return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", {
          message: "inputTooLong",
          args: {
            maximum: this.maximumInputLength,
            input: b.term,
            params: b
          }
        }) : void a.call(this, b, c);
      }, a;
    }), b.define("select2/data/maximumSelectionLength", [], function () {
      function a(a, b, c) {
        this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c);
      }
      return a.prototype.query = function (a, b, c) {
        var d = this;
        this.current(function (e) {
          var f = null != e ? e.length : 0;
          return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", {
            message: "maximumSelected",
            args: {
              maximum: d.maximumSelectionLength
            }
          }) : void a.call(d, b, c);
        });
      }, a;
    }), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
      function c(a, b) {
        this.$element = a, this.options = b, c.__super__.constructor.call(this);
      }
      return b.Extend(c, b.Observable), c.prototype.render = function () {
        var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
        return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b;
      }, c.prototype.position = function () {}, c.prototype.destroy = function () {
        this.$dropdown.remove();
      }, c;
    }), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a) {
      function b() {}
      return b.prototype.render = function (b) {
        var c = b.call(this),
            d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
        return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c;
      }, b.prototype.bind = function (b, c, d) {
        var e = this;
        b.call(this, c, d), this.$search.on("keydown", function (a) {
          e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
        }), this.$search.on("input", function () {
          a(this).off("keyup");
        }), this.$search.on("keyup input", function (a) {
          e.handleSearch(a);
        }), c.on("open", function () {
          e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () {
            e.$search.focus();
          }, 0);
        }), c.on("close", function () {
          e.$search.attr("tabindex", -1), e.$search.val("");
        }), c.on("results:all", function (a) {
          if (null == a.query.term || "" === a.query.term) {
            var b = e.showSearch(a);
            b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide");
          }
        });
      }, b.prototype.handleSearch = function () {
        if (!this._keyUpPrevented) {
          var a = this.$search.val();
          this.trigger("query", {
            term: a
          });
        }
        this._keyUpPrevented = !1;
      }, b.prototype.showSearch = function () {
        return !0;
      }, b;
    }), b.define("select2/dropdown/hidePlaceholder", [], function () {
      function a(a, b, c, d) {
        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d);
      }
      return a.prototype.append = function (a, b) {
        b.results = this.removePlaceholder(b.results), a.call(this, b);
      }, a.prototype.normalizePlaceholder = function (a, b) {
        return "string" == typeof b && (b = {
          id: "",
          text: b
        }), b;
      }, a.prototype.removePlaceholder = function (a, b) {
        for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
          var e = b[d];
          this.placeholder.id === e.id && c.splice(d, 1);
        }
        return c;
      }, a;
    }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
      function b(a, b, c, d) {
        this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
      }
      return b.prototype.append = function (a, b) {
        this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore);
      }, b.prototype.bind = function (b, c, d) {
        var e = this;
        b.call(this, c, d), c.on("query", function (a) {
          e.lastParams = a, e.loading = !0;
        }), c.on("query:append", function (a) {
          e.lastParams = a, e.loading = !0;
        }), this.$results.on("scroll", function () {
          var b = a.contains(document.documentElement, e.$loadingMore[0]);
          if (!e.loading && b) {
            var c = e.$results.offset().top + e.$results.outerHeight(!1),
                d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);
            c + 50 >= d && e.loadMore();
          }
        });
      }, b.prototype.loadMore = function () {
        this.loading = !0;
        var b = a.extend({}, {
          page: 1
        }, this.lastParams);
        b.page++, this.trigger("query:append", b);
      }, b.prototype.showLoadingMore = function (a, b) {
        return b.pagination && b.pagination.more;
      }, b.prototype.createLoadingMore = function () {
        var b = a('<li class="option load-more" role="treeitem"></li>'),
            c = this.options.get("translations").get("loadingMore");
        return b.html(c(this.lastParams)), b;
      }, b;
    }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) {
      function c(a, b, c) {
        this.$dropdownParent = c.get("dropdownParent") || document.body, a.call(this, b, c);
      }
      return c.prototype.bind = function (a, b, c) {
        var d = this,
            e = !1;
        a.call(this, b, c), b.on("open", function () {
          d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () {
            d._positionDropdown(), d._resizeDropdown();
          }), b.on("results:append", function () {
            d._positionDropdown(), d._resizeDropdown();
          }));
        }), b.on("close", function () {
          d._hideDropdown(), d._detachPositioningHandler(b);
        }), this.$dropdownContainer.on("mousedown", function (a) {
          a.stopPropagation();
        });
      }, c.prototype.position = function (a, b, c) {
        b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({
          position: "absolute",
          top: -999999
        }), this.$container = c;
      }, c.prototype.render = function (b) {
        var c = a("<span></span>"),
            d = b.call(this);
        return c.append(d), this.$dropdownContainer = c, c;
      }, c.prototype._hideDropdown = function () {
        this.$dropdownContainer.detach();
      }, c.prototype._attachPositioningHandler = function (c) {
        var d = this,
            e = "scroll.select2." + c.id,
            f = "resize.select2." + c.id,
            g = "orientationchange.select2." + c.id,
            h = this.$container.parents().filter(b.hasScroll);
        h.each(function () {
          a(this).data("select2-scroll-position", {
            x: a(this).scrollLeft(),
            y: a(this).scrollTop()
          });
        }), h.on(e, function () {
          var b = a(this).data("select2-scroll-position");
          a(this).scrollTop(b.y);
        }), a(window).on(e + " " + f + " " + g, function () {
          d._positionDropdown(), d._resizeDropdown();
        });
      }, c.prototype._detachPositioningHandler = function (c) {
        var d = "scroll.select2." + c.id,
            e = "resize.select2." + c.id,
            f = "orientationchange.select2." + c.id,
            g = this.$container.parents().filter(b.hasScroll);
        g.off(d), a(window).off(d + " " + e + " " + f);
      }, c.prototype._positionDropdown = function () {
        var b = a(window),
            c = this.$dropdown.hasClass("select2-dropdown--above"),
            d = this.$dropdown.hasClass("select2-dropdown--below"),
            e = null,
            f = (this.$container.position(), this.$container.offset());
        f.bottom = f.top + this.$container.outerHeight(!1);
        var g = {
          height: this.$container.outerHeight(!1)
        };
        g.top = f.top, g.bottom = f.top + g.height;
        var h = {
          height: this.$dropdown.outerHeight(!1)
        },
            i = {
          top: b.scrollTop(),
          bottom: b.scrollTop() + b.height()
        },
            j = i.top < f.top - h.height,
            k = i.bottom > f.bottom + h.height,
            l = {
          left: f.left,
          top: g.bottom
        };
        c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l);
      }, c.prototype._resizeDropdown = function () {
        this.$dropdownContainer.width();
        var a = {
          width: this.$container.outerWidth(!1) + "px"
        };
        this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.width = "auto"), this.$dropdown.css(a);
      }, c.prototype._showDropdown = function () {
        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
      }, c;
    }), b.define("select2/dropdown/minimumResultsForSearch", [], function () {
      function a(b) {
        for (var c = 0, d = 0; d < b.length; d++) {
          var e = b[d];
          e.children ? c += a(e.children) : c++;
        }
        return c;
      }
      function b(a, b, c, d) {
        this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d);
      }
      return b.prototype.showSearch = function (b, c) {
        return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c);
      }, b;
    }), b.define("select2/dropdown/selectOnClose", [], function () {
      function a() {}
      return a.prototype.bind = function (a, b, c) {
        var d = this;
        a.call(this, b, c), b.on("close", function () {
          d._handleSelectOnClose();
        });
      }, a.prototype._handleSelectOnClose = function () {
        var a = this.getHighlightedResults();
        a.length < 1 || this.trigger("select", {
          data: a.data("data")
        });
      }, a;
    }), b.define("select2/dropdown/closeOnSelect", [], function () {
      function a() {}
      return a.prototype.bind = function (a, b, c) {
        var d = this;
        a.call(this, b, c), b.on("select", function (a) {
          d._selectTriggered(a);
        }), b.on("unselect", function (a) {
          d._selectTriggered(a);
        });
      }, a.prototype._selectTriggered = function (a, b) {
        var c = b.originalEvent;
        c && c.ctrlKey || this.trigger("close");
      }, a;
    }), b.define("select2/i18n/en", [], function () {
      return {
        errorLoading: function errorLoading() {
          return "The results could not be loaded.";
        },
        inputTooLong: function inputTooLong(a) {
          var b = a.input.length - a.maximum,
              c = "Please delete " + b + " character";
          return 1 != b && (c += "s"), c;
        },
        inputTooShort: function inputTooShort(a) {
          var b = a.minimum - a.input.length,
              c = "Please enter " + b + " or more characters";
          return c;
        },
        loadingMore: function loadingMore() {
          return "Loading more results…";
        },
        maximumSelected: function maximumSelected(a) {
          var b = "You can only select " + a.maximum + " item";
          return 1 != a.maximum && (b += "s"), b;
        },
        noResults: function noResults() {
          return "No results found";
        },
        searching: function searching() {
          return "Searching…";
        }
      };
    }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
      function D() {
        this.reset();
      }
      D.prototype.apply = function (l) {
        if (l = a.extend({}, this.defaults, l), null == l.dataAdapter) {
          if (l.dataAdapter = null != l.ajax ? o : null != l.data ? n : m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
            var C = b(l.amdBase + "compat/query");
            l.dataAdapter = j.Decorate(l.dataAdapter, C);
          }
          if (null != l.initSelection) {
            var D = b(l.amdBase + "compat/initSelection");
            l.dataAdapter = j.Decorate(l.dataAdapter, D);
          }
        }
        if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
          if (l.multiple) l.dropdownAdapter = u;else {
            var E = j.Decorate(u, v);
            l.dropdownAdapter = E;
          }
          if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
            var F = b(l.amdBase + "compat/dropdownCss");
            l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
          }
          l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
        }
        if (null == l.selectionAdapter) {
          if (l.selectionAdapter = l.multiple ? e : d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
            var G = b(l.amdBase + "compat/containerCss");
            l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
          }
          l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
        }
        if ("string" == typeof l.language) if (l.language.indexOf("-") > 0) {
          var H = l.language.split("-"),
              I = H[0];
          l.language = [l.language, I];
        } else l.language = [l.language];
        if (a.isArray(l.language)) {
          var J = new k();
          l.language.push("en");
          for (var K = l.language, L = 0; L < K.length; L++) {
            var M = K[L],
                N = {};
            try {
              N = k.loadPath(M);
            } catch (O) {
              try {
                M = this.defaults.amdLanguageBase + M, N = k.loadPath(M);
              } catch (P) {
                l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                continue;
              }
            }
            J.extend(N);
          }
          l.translations = J;
        } else {
          var Q = k.loadPath(this.defaults.amdLanguageBase + "en"),
              R = new k(l.language);
          R.extend(Q), l.translations = R;
        }
        return l;
      }, D.prototype.reset = function () {
        function b(a) {
          function b(a) {
            return l[a] || a;
          }
          return a.replace(/[^\u0000-\u007E]/g, b);
        }
        function c(d, e) {
          if ("" === a.trim(d.term)) return e;
          if (e.children && e.children.length > 0) {
            for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
              var h = e.children[g],
                  i = c(d, h);
              null == i && f.children.splice(g, 1);
            }
            return f.children.length > 0 ? f : c(d, f);
          }
          var j = b(e.text).toUpperCase(),
              k = b(d.term).toUpperCase();
          return j.indexOf(k) > -1 ? e : null;
        }
        this.defaults = {
          amdBase: "./",
          amdLanguageBase: "./i18n/",
          closeOnSelect: !0,
          debug: !1,
          dropdownAutoWidth: !1,
          escapeMarkup: j.escapeMarkup,
          language: C,
          matcher: c,
          minimumInputLength: 0,
          maximumInputLength: 0,
          maximumSelectionLength: 0,
          minimumResultsForSearch: 0,
          selectOnClose: !1,
          sorter: function sorter(a) {
            return a;
          },
          templateResult: function templateResult(a) {
            return a.text;
          },
          templateSelection: function templateSelection(a) {
            return a.text;
          },
          theme: "default",
          width: "resolve"
        };
      }, D.prototype.set = function (b, c) {
        var d = a.camelCase(b),
            e = {};
        e[d] = c;
        var f = j._convertData(e);
        a.extend(this.defaults, f);
      };
      var E = new D();
      return E;
    }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) {
      function e(b, e) {
        if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
          var f = a(this.get("amdBase") + "compat/inputData");
          this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f);
        }
      }
      return e.prototype.fromElement = function (a) {
        var c = ["select2"];
        null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (this.options.dir = a.prop("dir") ? a.prop("dir") : a.closest("[dir]").prop("dir") ? a.closest("[dir]").prop("dir") : "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
        var e = {};
        e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
        var f = b.extend(!0, {}, e);
        f = d._convertData(f);
        for (var g in f) {
          b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
        }
        return this;
      }, e.prototype.get = function (a) {
        return this.options[a];
      }, e.prototype.set = function (a, b) {
        this.options[a] = b;
      }, e;
    }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) {
      var e = function e(a, c) {
        null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
        var d = a.attr("tabindex") || 0;
        a.data("old-tabindex", d), a.attr("tabindex", "-1");
        var f = this.options.get("dataAdapter");
        this.dataAdapter = new f(a, this.options);
        var g = this.render();
        this._placeContainer(g);
        var h = this.options.get("selectionAdapter");
        this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);
        var i = this.options.get("dropdownAdapter");
        this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);
        var j = this.options.get("resultsAdapter");
        this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
        var k = this;
        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) {
          k.trigger("selection:update", {
            data: a
          });
        }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this);
      };
      return c.Extend(e, c.Observable), e.prototype._generateId = function (a) {
        var b = "";
        return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = "select2-" + b;
      }, e.prototype._placeContainer = function (a) {
        a.insertAfter(this.$element);
        var b = this._resolveWidth(this.$element, this.options.get("width"));
        null != b && a.css("width", b);
      }, e.prototype._resolveWidth = function (a, b) {
        var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
        if ("resolve" == b) {
          var d = this._resolveWidth(a, "style");
          return null != d ? d : this._resolveWidth(a, "element");
        }
        if ("element" == b) {
          var e = a.outerWidth(!1);
          return 0 >= e ? "auto" : e + "px";
        }
        if ("style" == b) {
          var f = a.attr("style");
          if ("string" != typeof f) return null;
          for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
            var j = g[h].replace(/\s/g, ""),
                k = j.match(c);
            if (null !== k && k.length >= 1) return k[1];
          }
          return null;
        }
        return b;
      }, e.prototype._bindAdapters = function () {
        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
      }, e.prototype._registerDomEvents = function () {
        var b = this;
        this.$element.on("change.select2", function () {
          b.dataAdapter.current(function (a) {
            b.trigger("selection:update", {
              data: a
            });
          });
        }), this._sync = c.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
        var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        null != d ? (this._observer = new d(function (c) {
          a.each(c, b._sync);
        }), this._observer.observe(this.$element[0], {
          attributes: !0,
          subtree: !1
        })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", b._sync, !1);
      }, e.prototype._registerDataEvents = function () {
        var a = this;
        this.dataAdapter.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerSelectionEvents = function () {
        var b = this,
            c = ["toggle"];
        this.selection.on("toggle", function () {
          b.toggleDropdown();
        }), this.selection.on("*", function (d, e) {
          -1 === a.inArray(d, c) && b.trigger(d, e);
        });
      }, e.prototype._registerDropdownEvents = function () {
        var a = this;
        this.dropdown.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerResultsEvents = function () {
        var a = this;
        this.results.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerEvents = function () {
        var a = this;
        this.on("open", function () {
          a.$container.addClass("select2-container--open");
        }), this.on("close", function () {
          a.$container.removeClass("select2-container--open");
        }), this.on("enable", function () {
          a.$container.removeClass("select2-container--disabled");
        }), this.on("disable", function () {
          a.$container.addClass("select2-container--disabled");
        }), this.on("focus", function () {
          a.$container.addClass("select2-container--focus");
        }), this.on("blur", function () {
          a.$container.removeClass("select2-container--focus");
        }), this.on("query", function (b) {
          a.isOpen() || a.trigger("open"), this.dataAdapter.query(b, function (c) {
            a.trigger("results:all", {
              data: c,
              query: b
            });
          });
        }), this.on("query:append", function (b) {
          this.dataAdapter.query(b, function (c) {
            a.trigger("results:append", {
              data: c,
              query: b
            });
          });
        }), this.on("keypress", function (b) {
          var c = b.which;
          a.isOpen() ? c === d.ENTER ? (a.trigger("results:select"), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle"), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous"), b.preventDefault()) : c === d.DOWN ? (a.trigger("results:next"), b.preventDefault()) : (c === d.ESC || c === d.TAB) && (a.close(), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || (c === d.DOWN || c === d.UP) && b.altKey) && (a.open(), b.preventDefault());
        });
      }, e.prototype._syncAttributes = function () {
        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable")) : this.trigger("enable");
      }, e.prototype.trigger = function (a, b) {
        var c = e.__super__.trigger,
            d = {
          open: "opening",
          close: "closing",
          select: "selecting",
          unselect: "unselecting"
        };
        if (a in d) {
          var f = d[a],
              g = {
            prevented: !1,
            name: a,
            args: b
          };
          if (c.call(this, f, g), g.prevented) return void (b.prevented = !0);
        }
        c.call(this, a, b);
      }, e.prototype.toggleDropdown = function () {
        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
      }, e.prototype.open = function () {
        this.isOpen() || (this.trigger("query", {}), this.trigger("open"));
      }, e.prototype.close = function () {
        this.isOpen() && this.trigger("close");
      }, e.prototype.isOpen = function () {
        return this.$container.hasClass("select2-container--open");
      }, e.prototype.enable = function (a) {
        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);
        var b = !a[0];
        this.$element.prop("disabled", b);
      }, e.prototype.data = function () {
        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
        var a = [];
        return this.dataAdapter.current(function (b) {
          a = b;
        }), a;
      }, e.prototype.val = function (b) {
        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();
        var c = b[0];
        a.isArray(c) && (c = a.map(c, function (a) {
          return a.toString();
        })), this.$element.val(c).trigger("change");
      }, e.prototype.destroy = function () {
        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
      }, e.prototype.render = function () {
        var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
        return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b;
      }, e;
    }), b.define("select2/compat/utils", ["jquery"], function (a) {
      function b(b, c, d) {
        var e,
            f,
            g = [];
        e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () {
          0 === this.indexOf("select2-") && g.push(this);
        })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () {
          0 !== this.indexOf("select2-") && (f = d(this), null != f && g.push(f));
        })), b.attr("class", g.join(" "));
      }
      return {
        syncCssClasses: b
      };
    }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function (a, b) {
      function c() {
        return null;
      }
      function d() {}
      return d.prototype.render = function (d) {
        var e = d.call(this),
            f = this.options.get("containerCssClass") || "";
        a.isFunction(f) && (f = f(this.$element));
        var g = this.options.get("adaptContainerCssClass");
        if (g = g || c, -1 !== f.indexOf(":all:")) {
          f = f.replace(":all", "");
          var h = g;
          g = function g(a) {
            var b = h(a);
            return null != b ? b + " " + a : a;
          };
        }
        var i = this.options.get("containerCss") || {};
        return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e;
      }, d;
    }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (a, b) {
      function c() {
        return null;
      }
      function d() {}
      return d.prototype.render = function (d) {
        var e = d.call(this),
            f = this.options.get("dropdownCssClass") || "";
        a.isFunction(f) && (f = f(this.$element));
        var g = this.options.get("adaptDropdownCssClass");
        if (g = g || c, -1 !== f.indexOf(":all:")) {
          f = f.replace(":all", "");
          var h = g;
          g = function g(a) {
            var b = h(a);
            return null != b ? b + " " + a : a;
          };
        }
        var i = this.options.get("dropdownCss") || {};
        return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e;
      }, d;
    }), b.define("select2/compat/initSelection", ["jquery"], function (a) {
      function b(a, b, c) {
        c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c);
      }
      return b.prototype.current = function (b, c) {
        var d = this;
        return this._isInitialized ? void b.call(this, c) : void this.initSelection.call(null, this.$element, function (b) {
          d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b);
        });
      }, b;
    }), b.define("select2/compat/inputData", ["jquery"], function (a) {
      function b(a, b, c) {
        this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c);
      }
      return b.prototype.current = function (b, c) {
        function d(b, c) {
          var e = [];
          return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e;
        }
        for (var e = [], f = 0; f < this._currentData.length; f++) {
          var g = this._currentData[f];
          e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)));
        }
        c(e);
      }, b.prototype.select = function (b, c) {
        if (this.options.get("multiple")) {
          var d = this.$element.val();
          d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change");
        } else this.current(function (b) {
          a.map(b, function (a) {
            a.selected = !1;
          });
        }), this.$element.val(c.id), this.$element.trigger("change");
      }, b.prototype.unselect = function (a, b) {
        var c = this;
        b.selected = !1, this.current(function (a) {
          for (var d = [], e = 0; e < a.length; e++) {
            var f = a[e];
            b.id != f.id && d.push(f.id);
          }
          c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change");
        });
      }, b.prototype.query = function (a, b, c) {
        for (var d = [], e = 0; e < this._currentData.length; e++) {
          var f = this._currentData[e],
              g = this.matches(b, f);
          null !== g && d.push(g);
        }
        c({
          results: d
        });
      }, b.prototype.addOptions = function (b, c) {
        var d = a.map(c, function (b) {
          return a.data(b[0], "data");
        });
        this._currentData.push.apply(this._currentData, d);
      }, b;
    }), b.define("select2/compat/matcher", ["jquery"], function (a) {
      function b(b) {
        function c(c, d) {
          var e = a.extend(!0, {}, d);
          if (null == c.term || "" === a.trim(c.term)) return e;
          if (d.children) {
            for (var f = d.children.length - 1; f >= 0; f--) {
              var g = d.children[f],
                  h = b(c.term, g.text, g);
              h || e.children.splice(f, 1);
            }
            if (e.children.length > 0) return e;
          }
          return b(c.term, d.text, d) ? e : null;
        }
        return c;
      }
      return b;
    }), b.define("select2/compat/query", [], function () {
      function a(a, b, c) {
        c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c);
      }
      return a.prototype.query = function (a, b, c) {
        b.callback = c;
        var d = this.options.get("query");
        d.call(null, b);
      }, a;
    }), b.define("select2/dropdown/attachContainer", [], function () {
      function a(a, b, c) {
        a.call(this, b, c);
      }
      return a.prototype.position = function (a, b, c) {
        var d = c.find(".dropdown-wrapper");
        d.append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below");
      }, a;
    }), b.define("select2/dropdown/stopPropagation", [], function () {
      function a() {}
      return a.prototype.bind = function (a, b, c) {
        a.call(this, b, c);
        var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
        this.$dropdown.on(d.join(" "), function (a) {
          a.stopPropagation();
        });
      }, a;
    }), b.define("select2/selection/stopPropagation", [], function () {
      function a() {}
      return a.prototype.bind = function (a, b, c) {
        a.call(this, b, c);
        var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
        this.$selection.on(d.join(" "), function (a) {
          a.stopPropagation();
        });
      }, a;
    }), b.define("jquery.select2", ["jquery", "require", "./select2/core", "./select2/defaults"], function (a, b, c, d) {
      if (b("jquery.mousewheel"), null == a.fn.select2) {
        var e = ["open", "close", "destroy"];
        a.fn.select2 = function (b) {
          if (b = b || {}, "object" == _typeof(b)) return this.each(function () {
            {
              var d = a.extend({}, b, !0);
              new c(a(this), d);
            }
          }), this;
          if ("string" == typeof b) {
            var d = this.data("select2");
            null == d && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2.");
            var f = Array.prototype.slice.call(arguments, 1),
                g = d[b](f);
            return a.inArray(b, e) > -1 ? this : g;
          }
          throw new Error("Invalid arguments for Select2: " + b);
        };
      }
      return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c;
    }), function (c) {
      "function" == typeof b.define && b.define.amd ? b.define("jquery.mousewheel", ["jquery"], c) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = c : c(a);
    }(function (a) {
      function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
          if (1 === g.deltaMode) {
            var q = a.data(this, "mousewheel-line-height");
            j *= q, m *= q, l *= q;
          } else if (2 === g.deltaMode) {
            var r = a.data(this, "mousewheel-page-height");
            j *= r, m *= r, l *= r;
          }
          if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
            var s = this.getBoundingClientRect();
            o = b.clientX - s.left, p = b.clientY - s.top;
          }
          return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
        }
      }
      function c() {
        f = null;
      }
      function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
      }
      var e,
          f,
          g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
          h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
          i = Array.prototype.slice;
      if (a.event.fixHooks) for (var j = g.length; j;) {
        a.event.fixHooks[g[--j]] = a.event.mouseHooks;
      }
      var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function setup() {
          if (this.addEventListener) for (var c = h.length; c;) {
            this.addEventListener(h[--c], b, !1);
          } else this.onmousewheel = b;
          a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
        },
        teardown: function teardown() {
          if (this.removeEventListener) for (var c = h.length; c;) {
            this.removeEventListener(h[--c], b, !1);
          } else this.onmousewheel = null;
          a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
        },
        getLineHeight: function getLineHeight(b) {
          var c = a(b),
              d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
          return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
        },
        getPageHeight: function getPageHeight(b) {
          return a(b).height();
        },
        settings: {
          adjustOldDeltas: !0,
          normalizeOffset: !0
        }
      };
      a.fn.extend({
        mousewheel: function mousewheel(a) {
          return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
        },
        unmousewheel: function unmousewheel(a) {
          return this.unbind("mousewheel", a);
        }
      });
    }), {
      define: b.define,
      require: b.require
    };
  }(),
      c = b.require("jquery.select2");
  return a.fn.select2.amd = b, c;
});
"use strict";var stickyHeader;var stickyHeaderOriginPos;var stickyHeaderHeight=0;var sliderHeight=0;(function($){"use strict";$(document).ready(function($){changeCF7CustomPreloader();$(function(){$('[data-toggle="tooltip"]').tooltip();});$('#searchModal').on('shown.bs.modal',function(e){$('#searchform .search-input').focus();});$('.stm_fancybox').fancybox({fitToView:false,padding:0,autoSize:true,closeClick:false,maxWidth:'100%',maxHeight:'90%',beforeShow:function beforeShow(){$('body').addClass('stm_locked');this.title=$(this.element).attr("data-caption");},beforeClose:function beforeClose(){$('body').removeClass('stm_locked');},helpers:{title:{type:'inside'},overlay:{locked:false}}});$('.video_course_preview').on('click',function(e){var url=$(this).attr('data-fancybox');e.preventDefault();e.stopPropagation();if(typeof url!='undefined'){$.fancybox({type:'iframe',href:url,fitToView:true,padding:0,autoSize:true,closeClick:false,maxWidth:'100%',maxHeight:'90%',beforeShow:function beforeShow(){$('body').addClass('stm_locked');},beforeClose:function beforeClose(){$('body').removeClass('stm_locked');},helpers:{overlay:{locked:false}}});}});footerToBottom();$.fn.is_on_screen=function(){var win=$(window);var viewport={top:win.scrollTop(),left:win.scrollLeft()};viewport.right=viewport.left+win.width();viewport.bottom=viewport.top+win.height();var bounds=this.offset();bounds.right=bounds.left+this.outerWidth();bounds.bottom=bounds.top+this.outerHeight();return!(viewport.right<bounds.left||viewport.left>bounds.right||viewport.bottom<bounds.top||viewport.top>bounds.bottom);};$('select:not(".disable-select, .no-search")').select2({width:'100%'});$('select.no-search:not(".disable-select")').select2({width:'100%',minimumResultsForSearch:-1});if($('.course_table').length>1){productTableCountLessons();}
$('.panel-title>a.tapable').on('click',function(){var collapsed=$(this).hasClass('collapsed');if(collapsed){$(this).closest('.panel').addClass('panel-collapsed');}else{$(this).closest('.panel').removeClass('panel-collapsed');}});review_rating_stars();$('.event_popup_form').on('submit',function(){var $this=$(this);$($this).removeClass('error');$($this).find('.loading').css({'visibility':'visible'});$(this).ajaxSubmit({url:ajaxurl,dataType:'json',success:function success(data){$($this).find('.loading').css({'visibility':'hidden'});if(data['redirect_url']){top.location.href=data['redirect_url'];}else if(data['success']){$($this).replaceWith('<p class="alert alert-success heading_font">'+data['success']+'</p>');}else{for(var k in data['errors']){$($this).find('input[name="event['+k+']"]').addClass('error');$($this).find('textarea[name="event['+k+']"]').addClass('error');}}}});$($this).find('.error').on('hover',function(){$(this).removeClass('error');});return false;});menu_animated_line();mobileMenu();categoryFilter();stm_stretch_column();$(window).load(function(){footerToBottom();if($('#header').hasClass('sticky_header')){stickyHeader=$('#header.sticky_header .header_default');stickyHeaderOriginPos=stickyHeader.offset().top;stickyHeaderHeight=stickyHeader.height()+20;sticky_header();};$(window).scroll(function(){sticky_header();});composerRTL();stm_stretch_column();});});$(window).resize(function(){footerToBottom();composerRTL();menu_animated_line();stm_stretch_column();});$(window).load(function(){remove_preloader();});function sticky_header(){if($('#header').hasClass('sticky_header')){var currentPos=$(window).scrollTop();if($('.wpb_revslider_element').length<1){var isAdmin=$('body').hasClass('admin-bar')?32:1;if(currentPos>stickyHeaderOriginPos-isAdmin){stickyHeader.addClass('fixed');$('#header').css({'padding-bottom':stickyHeaderHeight+'px'});if($('#header').hasClass('transparent_header')){$('#header').addClass('scrolling');$('.logo_transparent_static').addClass('hidden').removeClass('visible');$('.logo_colored_fixed').addClass('visible').removeClass('hidden');}}else{stickyHeader.removeClass('fixed');$('#header').css({'padding-bottom':0});if($('#header').hasClass('transparent_header')){$('#header').removeClass('scrolling');$('.logo_transparent_static').addClass('visible').removeClass('hidden');$('.logo_colored_fixed').addClass('hidden').removeClass('visible');}}}else{if($('#header').hasClass('transparent_header')){sliderHeight=$('.wpb_revslider_element').height();console.log(sliderHeight);if(currentPos>stickyHeaderOriginPos+sliderHeight-200){stickyHeader.addClass('fixed_invisible_top');}else{stickyHeader.removeClass('fixed_invisible_top');}
if(currentPos>stickyHeaderOriginPos+sliderHeight-45){stickyHeader.addClass('fixed');$('#header').css({'padding-bottom':stickyHeaderHeight+'px'});if($('#header').hasClass('transparent_header')){$('#header').addClass('scrolling');$('.logo_transparent_static').addClass('hidden').removeClass('visible');$('.logo_colored_fixed').addClass('visible').removeClass('hidden');}}else{stickyHeader.removeClass('fixed');$('#header').css({'padding-bottom':0});if($('#header').hasClass('transparent_header')){$('#header').removeClass('scrolling');$('.logo_transparent_static').addClass('visible').removeClass('hidden');$('.logo_colored_fixed').addClass('hidden').removeClass('visible');}}}else{if(currentPos>stickyHeaderOriginPos-1){stickyHeader.addClass('fixed');$('#header').css({'padding-bottom':stickyHeaderHeight+'px'});if($('#header').hasClass('transparent_header')){$('#header').addClass('scrolling');$('.logo_transparent_static').addClass('hidden').removeClass('visible');$('.logo_colored_fixed').addClass('visible').removeClass('hidden');}}else{stickyHeader.removeClass('fixed');$('#header').css({'padding-bottom':0});if($('#header').hasClass('transparent_header')){$('#header').removeClass('scrolling');$('.logo_transparent_static').addClass('visible').removeClass('hidden');$('.logo_colored_fixed').addClass('hidden').removeClass('visible');}}}}}}
function footerToBottom(){$("body").css("padding-bottom",$("#footer").outerHeight());var windowHeight=$(window).height();var footerHeight=$('#footer').outerHeight();if(footerHeight+50>windowHeight){$('#footer').css({'position':'absolute'});}else{$('#footer').removeAttr('style');}}
function productTableCountLessons(){var i=0;var speed=200;$('.course_lessons_section .course_table tr').each(function(){var el=this;speed+=400;setTimeout(function(){var number_td=$(el).find('.number');i++;number_td.addClass('number-visible').text(i);if(i>9&&i<99){number_td.addClass('overten');}else if(i>99){number_td.addClass('overthousand');}else{number_td.addClass('belowten');}},speed);});}
function review_rating_stars(){$(".woo_stm_rating_fields a").on('hover',function(){$(this).addClass('filled');$(this).prevAll().addClass('filled');},function(){$(this).removeClass('filled');$(this).prevAll().removeClass('filled');});$(".woo_stm_rating_fields a").on('click',function(){$(".woo_stm_rating_fields a").removeClass('filled-active');$(this).addClass('filled-active');$(this).prevAll().addClass('filled-active');});}
function menu_animated_line(){menu_animated_line_first_pos();$('.header-menu>li').on('hover',function(){$('.magic_line').removeClass('line_visible');$(this).find('.magic_line').addClass('line_visible');},function(){$('.magic_line').removeClass('line_visible');menu_animated_line_first_pos();});}
var appendOnce=0;function menu_animated_line_first_pos(){appendOnce++;var hasCurrentMenuItem=false;var li_anchestor='undefined';$('.header-menu>li').each(function(){if(appendOnce==1){var maxLineWidth=0;maxLineWidth=$(this).width();$(this).append('<div class="magic_line"></div>');$(this).find('.magic_line').css({'max-width':maxLineWidth+'px'});}
if($(this).hasClass('current-menu-item')||$(this).hasClass('current-menu-parent')||$(this).hasClass('current-menu-ancestor')){hasCurrentMenuItem=true;li_anchestor=$(this);}});if(hasCurrentMenuItem&&li_anchestor!='undefined'){var lineFirstW=li_anchestor.innerWidth()-28;var lineFirstPos=li_anchestor.position().left+14;$(li_anchestor).find('.magic_line').addClass('line_visible');}}
function changeCF7CustomPreloader(){if(typeof cf7_custom_image!='undefined'){$('.ajax-loader').attr('src',cf7_custom_image+'ajax-loader.gif');}}
function mobileMenu(){$(".header-menu-mobile .header-menu > li.menu-item-has-children > a").after('<span class="arrow"><i class="fa fa-angle-right"></i></span>');$('.header-menu-mobile .header-menu .arrow').on('click',function(){$(this).toggleClass('active');$(this).closest('li').toggleClass('opened');$(this).closest('li').find('> ul.sub-menu').slideToggle(300);});$(".header-menu-mobile .header-menu > li.menu-item-has-children > a").on('click',function(e){if($(this).attr('href')=='#'){e.preventDefault();$(this).closest('li').find(' > ul.sub-menu').slideToggle(300);$(this).closest('li').toggleClass('opened');$(this).closest('li').find('.arrow').toggleClass('active');}});}
function categoryFilter(){$('select#product_categories_filter').on("select2:select",function(e){var link=$(this).val();window.location.href=link;});}
function composerRTL(){if($('body').hasClass('rtl')){$('div[data-vc-full-width="true"]').each(function(){var left=parseFloat($(this).css('left'));left=-left;$(this).css({left:left+'px'});});}}
function remove_preloader(){$('body').removeClass('stm_preloader_1');}
function stm_stretch_column(){$('.wpb_column[data-stretch]').each(function(){var el=$(this);var stretch=el.data('stretch');var wrapper=el.find('.wpb_wrapper').first();var col=el.find('.vc_column-inner').first();var colLeftOffset=el.offset().left;stretch=$('body').hasClass('rtl')&&stretch==='left'?'right':'left';if(stretch==='left'){wrapper.css({'margin-left':'auto'});col.css({'width':el.width()+colLeftOffset+'px','margin-left':'-'+colLeftOffset+'px'});}else{var margin=window.innerWidth-colLeftOffset-el.width();col.css({'width':window.innerWidth-colLeftOffset+'px','margin-right':'-'+margin+'px'});}
if(window.innerWidth<=1024){col.css({'width':window.innerWidth+'px','margin-left':'-'+(window.innerWidth-col.outerWidth())+'px'});}});}
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){$('footer').css('position','absolute');}
if(typeof $.fn.swipe!='undefined'){$.fn.swipe.defaults.excludedElements="button, input, select, textarea, .noSwipe";}
$('.stm_product_meta_single_page table.variations select').on("change",function(){$(this).parent().find('.select2-selection__rendered').text($(this).find('option[value="'+$(this).val()+'"]').text());});})(jQuery);
"use strict";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto);}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r));}
function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0];}
var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top;}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null;},100);}
function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t);}}
var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments);},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++){i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);}
return s;}
function o(a){for(var n=new FormData(),i=0;i<a.length;i++){n.append(a[i].name,a[i].value);}
if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++){o[i]&&n.append(o[i][0],o[i][1]);}}
t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r);},!1),r;}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=n,c&&c.call(this,e,r);},e.ajax(s);}
function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document);}catch(r){a("cannot get iframe.contentWindow document: "+r);}
if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document;}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document;}
return t;}
function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50);}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0;}}
var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D);},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData){m.extraData.hasOwnProperty(d)&&(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?l.push(e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]):l.push(e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]));}
m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit();}catch(h){var x=document.createElement("form").submit;x.apply(w);}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove();}}
function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()];},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText);}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m);}catch(y){i="parsererror",x.error=r=y||i;}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i;}
x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null;},100);}}}
var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e);},r)for(l=0;l<h.length;l++){c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");}
if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+new Date().getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function getAllResponseHeaders(){},getResponseHeader:function getResponseHeader(){},setRequestHeader:function setRequestHeader(){},abort:function abort(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop");}catch(n){}
v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r);}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=new DOMParser().parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null;},C=e.parseJSON||function(e){return window.eval("("+e+")");},_=function _(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o;};return S;}
if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm();}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden);}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments);});}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++){x[i].apply(n,[e,r,a||f,f]);}},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f]);};}
if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f]);};}
var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val();}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v);}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++){h[E]=null;}
return this.trigger("form-submit-notify",[this,t]),this;},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n);}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this);}
return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r);},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin");},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++){if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++){a.push({name:f,value:m[l]});}else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++){a.push({name:f,value:v[l],type:d.type});}else a.push({name:f,value:"",type:d.type});}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));}
if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));}
return a;},e.fn.formSerialize=function(t){return e.param(this.formToArray(t));},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++){r.push({name:a,value:n[i]});}else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n});}}),e.param(r);},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o));}
return r;},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d);}}
return s;}
return e(t).val();},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t);});},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="");});},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==_typeof(this.reset)&&!this.reset.nodeType)&&this.reset();});},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e;});},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t;}});},e.fn.ajaxSubmit.debug=!1;});
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d)if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
"use strict";(function($){$(document).ready(function(){$('.stm_lms_categories_dropdown__childs').each(function(){$(this).before('<span class="stm_lms_cat_toggle"></span>');});$('.stm_lms_search_popup .stm_lms_categories_dropdown__parent > a').on('click',function(e){if($(this).closest('.stm_lms_categories_dropdown__parent').has('.stm_lms_categories_dropdown__childs').length){e.preventDefault();var $child=$(this).closest('.stm_lms_categories_dropdown__parent').find('.stm_lms_categories_dropdown__childs');$('.stm_lms_categories_dropdown__childs').slideUp();$child.slideToggle();}});$('.categories-courses-single>a').on('click',function(e){e.preventDefault();$(this).closest('.categories-courses-single').toggleClass('active');});$('.header_main_menu_wrapper .sub-menu').each(function(){$(this).before('<span class="stm_lms_menu_toggle"></span>');});$('body').on('click','.stm_lms_menu_toggle',function(e){$(this).closest('li').find('.sub-menu').toggleClass('active');});$('.stm_header_top_toggler').on('click',function(){createBg();$('.stm_lms_header_popups_overlay').addClass('active');$('.stm_lms_account_popup').toggleClass('active');});$('.stm_lms_account_popup__close').on('click',function(){$('.stm_lms_header_popups_overlay, .stm_lms_account_popup').removeClass('active');});$('.stm_header_top_search').on('click',function(){createBg();$('.stm_lms_header_popups_overlay').addClass('active');$('.stm_lms_search_popup').toggleClass('active');});$('.stm_lms_search_popup__close').on('click',function(){$('.stm_lms_header_popups_overlay, .stm_lms_search_popup').removeClass('active');});$('.stm_lms_categories-courses__toggler').on('click',function(){createBg();$('.stm_lms_header_popups_overlay').addClass('active');$('.categories-courses').toggleClass('active');});$('.stm_menu_toggler').on('click',function(){createBg();$('.stm_lms_header_popups_overlay').addClass('active');$('.stm_lms_menu_popup').toggleClass('active');});$('.stm_lms_menu_popup__close').on('click',function(){$('.stm_lms_header_popups_overlay, .stm_lms_menu_popup').removeClass('active');});$(document).on('click','.stm_lms_header_popups_overlay',function(){$('.categories-courses, .stm_lms_header_popups_overlay, .stm_lms_account_popup, .stm_lms_search_popup, .stm_lms_menu_popup').removeClass('active');});function createBg(){if(!$('.stm_lms_header_popups_overlay').length){$('.header_default').append('<div class="stm_lms_header_popups_overlay"></div>');}}});})(jQuery);
/*!
 * vue-resource v1.5.0
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueResource=e()}(this,function(){"use strict";var t=2;function e(e){this.state=t,this.value=void 0,this.deferred=[];var n=this;try{e(function(t){n.resolve(t)},function(t){n.reject(t)})}catch(t){n.reject(t)}}e.reject=function(t){return new e(function(e,n){n(t)})},e.resolve=function(t){return new e(function(e,n){e(t)})},e.all=function(t){return new e(function(n,o){var r=0,i=[];function s(e){return function(o){i[e]=o,(r+=1)===t.length&&n(i)}}0===t.length&&n(i);for(var u=0;u<t.length;u+=1)e.resolve(t[u]).then(s(u),o)})},e.race=function(t){return new e(function(n,o){for(var r=0;r<t.length;r+=1)e.resolve(t[r]).then(n,o)})};var n=e.prototype;function o(t,e){t instanceof Promise?this.promise=t:this.promise=new Promise(t.bind(e)),this.context=e}n.resolve=function(e){var n=this;if(n.state===t){if(e===n)throw new TypeError("Promise settled with itself.");var o=!1;try{var r=e&&e.then;if(null!==e&&"object"==typeof e&&"function"==typeof r)return void r.call(e,function(t){o||n.resolve(t),o=!0},function(t){o||n.reject(t),o=!0})}catch(t){return void(o||n.reject(t))}n.state=0,n.value=e,n.notify()}},n.reject=function(e){var n=this;if(n.state===t){if(e===n)throw new TypeError("Promise settled with itself.");n.state=1,n.value=e,n.notify()}},n.notify=function(){var e,n=this;i(function(){if(n.state!==t)for(;n.deferred.length;){var e=n.deferred.shift(),o=e[0],r=e[1],i=e[2],s=e[3];try{0===n.state?i("function"==typeof o?o.call(void 0,n.value):n.value):1===n.state&&("function"==typeof r?i(r.call(void 0,n.value)):s(n.value))}catch(t){s(t)}}},e)},n.then=function(t,n){var o=this;return new e(function(e,r){o.deferred.push([t,n,e,r]),o.notify()})},n.catch=function(t){return this.then(void 0,t)},"undefined"==typeof Promise&&(window.Promise=e),o.all=function(t,e){return new o(Promise.all(t),e)},o.resolve=function(t,e){return new o(Promise.resolve(t),e)},o.reject=function(t,e){return new o(Promise.reject(t),e)},o.race=function(t,e){return new o(Promise.race(t),e)};var r=o.prototype;r.bind=function(t){return this.context=t,this},r.then=function(t,e){return t&&t.bind&&this.context&&(t=t.bind(this.context)),e&&e.bind&&this.context&&(e=e.bind(this.context)),new o(this.promise.then(t,e),this.context)},r.catch=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new o(this.promise.catch(t),this.context)},r.finally=function(t){return this.then(function(e){return t.call(this),e},function(e){return t.call(this),Promise.reject(e)})};var i,s={}.hasOwnProperty,u=[].slice,a=!1,c="undefined"!=typeof window;function f(t){return t?t.replace(/^\s*|\s*$/g,""):""}function p(t){return t?t.toLowerCase():""}var h=Array.isArray;function d(t){return"string"==typeof t}function l(t){return"function"==typeof t}function m(t){return null!==t&&"object"==typeof t}function y(t){return m(t)&&Object.getPrototypeOf(t)==Object.prototype}function v(t,e,n){var r=o.resolve(t);return arguments.length<2?r:r.then(e,n)}function b(t,e,n){return l(n=n||{})&&(n=n.call(e)),T(t.bind({$vm:e,$options:n}),t,{$options:n})}function g(t,e){var n,o;if(h(t))for(n=0;n<t.length;n++)e.call(t[n],t[n],n);else if(m(t))for(o in t)s.call(t,o)&&e.call(t[o],t[o],o);return t}var w=Object.assign||function(t){return u.call(arguments,1).forEach(function(e){x(t,e)}),t};function T(t){return u.call(arguments,1).forEach(function(e){x(t,e,!0)}),t}function x(t,e,n){for(var o in e)n&&(y(e[o])||h(e[o]))?(y(e[o])&&!y(t[o])&&(t[o]={}),h(e[o])&&!h(t[o])&&(t[o]=[]),x(t[o],e[o],n)):void 0!==e[o]&&(t[o]=e[o])}function j(t,e,n){var o,r,i,s=(o=t,r=["+","#",".","/",";","?","&"],{vars:i=[],expand:function(t){return o.replace(/\{([^{}]+)\}|([^{}]+)/g,function(e,n,o){if(n){var s=null,u=[];if(-1!==r.indexOf(n.charAt(0))&&(s=n.charAt(0),n=n.substr(1)),n.split(/,/g).forEach(function(e){var n=/([^:*]*)(?::(\d+)|(\*))?/.exec(e);u.push.apply(u,function(t,e,n,o){var r=t[n],i=[];if(E(r)&&""!==r)if("string"==typeof r||"number"==typeof r||"boolean"==typeof r)r=r.toString(),o&&"*"!==o&&(r=r.substring(0,parseInt(o,10))),i.push(O(e,r,P(e)?n:null));else if("*"===o)Array.isArray(r)?r.filter(E).forEach(function(t){i.push(O(e,t,P(e)?n:null))}):Object.keys(r).forEach(function(t){E(r[t])&&i.push(O(e,r[t],t))});else{var s=[];Array.isArray(r)?r.filter(E).forEach(function(t){s.push(O(e,t))}):Object.keys(r).forEach(function(t){E(r[t])&&(s.push(encodeURIComponent(t)),s.push(O(e,r[t].toString())))}),P(e)?i.push(encodeURIComponent(n)+"="+s.join(",")):0!==s.length&&i.push(s.join(","))}else";"===e?i.push(encodeURIComponent(n)):""!==r||"&"!==e&&"?"!==e?""===r&&i.push(""):i.push(encodeURIComponent(n)+"=");return i}(t,s,n[1],n[2]||n[3])),i.push(n[1])}),s&&"+"!==s){var a=",";return"?"===s?a="&":"#"!==s&&(a=s),(0!==u.length?s:"")+u.join(a)}return u.join(",")}return C(o)})}}),u=s.expand(e);return n&&n.push.apply(n,s.vars),u}function E(t){return null!=t}function P(t){return";"===t||"&"===t||"?"===t}function O(t,e,n){return e="+"===t||"#"===t?C(e):encodeURIComponent(e),n?encodeURIComponent(n)+"="+e:e}function C(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t}).join("")}function $(t,e){var n,o=this||{},r=t;return d(t)&&(r={url:t,params:e}),r=T({},$.options,o.$options,r),$.transforms.forEach(function(t){var e,r,i;d(t)&&(t=$.transform[t]),l(t)&&(e=t,r=n,i=o.$vm,n=function(t){return e.call(i,t,r)})}),n(r)}function U(t){return new o(function(e){var n=new XDomainRequest,o=function(o){var r=o.type,i=0;"load"===r?i=200:"error"===r&&(i=500),e(t.respondWith(n.responseText,{status:i}))};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl()),t.timeout&&(n.timeout=t.timeout),n.onload=o,n.onabort=o,n.onerror=o,n.ontimeout=o,n.onprogress=function(){},n.send(t.getBody())})}$.options={url:"",root:null,params:{}},$.transform={template:function(t){var e=[],n=j(t.url,t.params,e);return e.forEach(function(e){delete t.params[e]}),n},query:function(t,e){var n=Object.keys($.options.params),o={},r=e(t);return g(t.params,function(t,e){-1===n.indexOf(e)&&(o[e]=t)}),(o=$.params(o))&&(r+=(-1==r.indexOf("?")?"?":"&")+o),r},root:function(t,e){var n,o,r=e(t);return d(t.root)&&!/^(https?:)?\//.test(r)&&(n=t.root,o="/",r=(n&&void 0===o?n.replace(/\s+$/,""):n&&o?n.replace(new RegExp("["+o+"]+$"),""):n)+"/"+r),r}},$.transforms=["template","query","root"],$.params=function(t){var e=[],n=encodeURIComponent;return e.add=function(t,e){l(e)&&(e=e()),null===e&&(e=""),this.push(n(t)+"="+n(e))},function t(e,n,o){var r,i=h(n),s=y(n);g(n,function(n,u){r=m(n)||h(n),o&&(u=o+"["+(s||r?u:"")+"]"),!o&&i?e.add(n.name,n.value):r?t(e,n,u):e.add(u,n)})}(e,t),e.join("&").replace(/%20/g,"+")},$.parse=function(t){var e=document.createElement("a");return document.documentMode&&(e.href=t,t=e.href),e.href=t,{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",port:e.port,host:e.host,hostname:e.hostname,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):""}};var R=c&&"withCredentials"in new XMLHttpRequest;function A(t){return new o(function(e){var n,o,r=t.jsonp||"callback",i=t.jsonpCallback||"_jsonp"+Math.random().toString(36).substr(2),s=null;n=function(n){var r=n.type,u=0;"load"===r&&null!==s?u=200:"error"===r&&(u=500),u&&window[i]&&(delete window[i],document.body.removeChild(o)),e(t.respondWith(s,{status:u}))},window[i]=function(t){s=JSON.stringify(t)},t.abort=function(){n({type:"abort"})},t.params[r]=i,t.timeout&&setTimeout(t.abort,t.timeout),(o=document.createElement("script")).src=t.getUrl(),o.type="text/javascript",o.async=!0,o.onload=n,o.onerror=n,document.body.appendChild(o)})}function S(t){return new o(function(e){var n=new XMLHttpRequest,o=function(o){var r=t.respondWith("response"in n?n.response:n.responseText,{status:1223===n.status?204:n.status,statusText:1223===n.status?"No Content":f(n.statusText)});g(f(n.getAllResponseHeaders()).split("\n"),function(t){r.headers.append(t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1))}),e(r)};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl(),!0),t.timeout&&(n.timeout=t.timeout),t.responseType&&"responseType"in n&&(n.responseType=t.responseType),(t.withCredentials||t.credentials)&&(n.withCredentials=!0),t.crossOrigin||t.headers.set("X-Requested-With","XMLHttpRequest"),l(t.progress)&&"GET"===t.method&&n.addEventListener("progress",t.progress),l(t.downloadProgress)&&n.addEventListener("progress",t.downloadProgress),l(t.progress)&&/^(POST|PUT)$/i.test(t.method)&&n.upload.addEventListener("progress",t.progress),l(t.uploadProgress)&&n.upload&&n.upload.addEventListener("progress",t.uploadProgress),t.headers.forEach(function(t,e){n.setRequestHeader(e,t)}),n.onload=o,n.onabort=o,n.onerror=o,n.ontimeout=o,n.send(t.getBody())})}function k(t){var e=require("got");return new o(function(n){var o,r=t.getUrl(),i=t.getBody(),s=t.method,u={};t.headers.forEach(function(t,e){u[e]=t}),e(r,{body:i,method:s,headers:u}).then(o=function(e){var o=t.respondWith(e.body,{status:e.statusCode,statusText:f(e.statusMessage)});g(e.headers,function(t,e){o.headers.set(e,t)}),n(o)},function(t){return o(t.response)})})}function I(t){return(t.client||(c?S:k))(t)}var L=function(t){var e=this;this.map={},g(t,function(t,n){return e.append(n,t)})};function q(t,e){return Object.keys(t).reduce(function(t,n){return p(e)===p(n)?n:t},null)}L.prototype.has=function(t){return null!==q(this.map,t)},L.prototype.get=function(t){var e=this.map[q(this.map,t)];return e?e.join():null},L.prototype.getAll=function(t){return this.map[q(this.map,t)]||[]},L.prototype.set=function(t,e){this.map[function(t){if(/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return f(t)}(q(this.map,t)||t)]=[f(e)]},L.prototype.append=function(t,e){var n=this.map[q(this.map,t)];n?n.push(f(e)):this.set(t,e)},L.prototype.delete=function(t){delete this.map[q(this.map,t)]},L.prototype.deleteAll=function(){this.map={}},L.prototype.forEach=function(t,e){var n=this;g(this.map,function(o,r){g(o,function(o){return t.call(e,o,r,n)})})};var H=function(t,e){var n,r,i,s=e.url,u=e.headers,a=e.status,c=e.statusText;this.url=s,this.ok=a>=200&&a<300,this.status=a||0,this.statusText=c||"",this.headers=new L(u),this.body=t,d(t)?this.bodyText=t:(i=t,"undefined"!=typeof Blob&&i instanceof Blob&&(this.bodyBlob=t,(0===(r=t).type.indexOf("text")||-1!==r.type.indexOf("json"))&&(this.bodyText=(n=t,new o(function(t){var e=new FileReader;e.readAsText(n),e.onload=function(){t(e.result)}})))))};H.prototype.blob=function(){return v(this.bodyBlob)},H.prototype.text=function(){return v(this.bodyText)},H.prototype.json=function(){return v(this.text(),function(t){return JSON.parse(t)})},Object.defineProperty(H.prototype,"data",{get:function(){return this.body},set:function(t){this.body=t}});var B=function(t){var e;this.body=null,this.params={},w(this,t,{method:(e=t.method||"GET",e?e.toUpperCase():"")}),this.headers instanceof L||(this.headers=new L(this.headers))};B.prototype.getUrl=function(){return $(this)},B.prototype.getBody=function(){return this.body},B.prototype.respondWith=function(t,e){return new H(t,w(e||{},{url:this.getUrl()}))};var M={"Content-Type":"application/json;charset=utf-8"};function N(t){var e=this||{},n=function(t){var e=[I],n=[];function r(r){for(;e.length;){var i=e.pop();if(l(i)){var s=void 0,u=void 0;if(m(s=i.call(t,r,function(t){return u=t})||u))return new o(function(e,o){n.forEach(function(e){s=v(s,function(n){return e.call(t,n)||n},o)}),v(s,e,o)},t);l(s)&&n.unshift(s)}else c="Invalid interceptor of type "+typeof i+", must be a function","undefined"!=typeof console&&a&&console.warn("[VueResource warn]: "+c)}var c}return m(t)||(t=null),r.use=function(t){e.push(t)},r}(e.$vm);return function(t){u.call(arguments,1).forEach(function(e){for(var n in e)void 0===t[n]&&(t[n]=e[n])})}(t||{},e.$options,N.options),N.interceptors.forEach(function(t){d(t)&&(t=N.interceptor[t]),l(t)&&n.use(t)}),n(new B(t)).then(function(t){return t.ok?t:o.reject(t)},function(t){var e;return t instanceof Error&&(e=t,"undefined"!=typeof console&&console.error(e)),o.reject(t)})}function D(t,e,n,o){var r=this||{},i={};return g(n=w({},D.actions,n),function(n,s){n=T({url:t,params:w({},e)},o,n),i[s]=function(){return(r.$http||N)(function(t,e){var n,o=w({},t),r={};switch(e.length){case 2:r=e[0],n=e[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(o.method)?n=e[0]:r=e[0];break;case 0:break;default:throw"Expected up to 2 arguments [params, body], got "+e.length+" arguments"}return o.body=n,o.params=w({},o.params,r),o}(n,arguments))}}),i}function J(t){var e,n,r;J.installed||(n=(e=t).config,r=e.nextTick,i=r,a=n.debug||!n.silent,t.url=$,t.http=N,t.resource=D,t.Promise=o,Object.defineProperties(t.prototype,{$url:{get:function(){return b(t.url,this,this.$options.url)}},$http:{get:function(){return b(t.http,this,this.$options.http)}},$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var e=this;return function(n){return new t.Promise(n,e)}}}}))}return N.options={},N.headers={put:M,post:M,patch:M,delete:M,common:{Accept:"application/json, text/plain, */*"},custom:{}},N.interceptor={before:function(t){l(t.before)&&t.before.call(this,t)},method:function(t){t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers.set("X-HTTP-Method-Override",t.method),t.method="POST")},jsonp:function(t){"JSONP"==t.method&&(t.client=A)},json:function(t){var e=t.headers.get("Content-Type")||"";return m(t.body)&&0===e.indexOf("application/json")&&(t.body=JSON.stringify(t.body)),function(t){return t.bodyText?v(t.text(),function(e){var n,o;if(0===(t.headers.get("Content-Type")||"").indexOf("application/json")||(o=(n=e).match(/^\s*(\[|\{)/))&&{"[":/]\s*$/,"{":/}\s*$/}[o[1]].test(n))try{t.body=JSON.parse(e)}catch(e){t.body=null}else t.body=e;return t}):t}},form:function(t){var e;e=t.body,"undefined"!=typeof FormData&&e instanceof FormData?t.headers.delete("Content-Type"):m(t.body)&&t.emulateJSON&&(t.body=$.params(t.body),t.headers.set("Content-Type","application/x-www-form-urlencoded"))},header:function(t){g(w({},N.headers.common,t.crossOrigin?{}:N.headers.custom,N.headers[p(t.method)]),function(e,n){t.headers.has(n)||t.headers.set(n,e)})},cors:function(t){if(c){var e=$.parse(location.href),n=$.parse(t.getUrl());n.protocol===e.protocol&&n.host===e.host||(t.crossOrigin=!0,t.emulateHTTP=!1,R||(t.client=U))}}},N.interceptors=["before","method","jsonp","json","form","header","cors"],["get","delete","head","jsonp"].forEach(function(t){N[t]=function(e,n){return this(w(n||{},{url:e,method:t}))}}),["post","put","patch"].forEach(function(t){N[t]=function(e,n,o){return this(w(o||{},{url:e,method:t,body:n}))}}),D.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},delete:{method:"DELETE"}},"undefined"!=typeof window&&window.Vue&&window.Vue.use(J),J});
/*!
 * Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal),
 * ,Licensed Under MIT (http://opensource.org/licenses/MIT),
 * ,
 * ,Vue 2 Autocomplete @ Version 0.2.1,
 *
 * 
 */
(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==='object'&&typeof module==='object')
module.exports=factory();else if(typeof define==='function'&&define.amd)
define([],factory);else if(typeof exports==='object')
exports["Vue2Autocomplete"]=factory();else
root["Vue2Autocomplete"]=factory();})(this,function(){return(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.i=function(value){return value;};__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter});}};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="../dist/";return __webpack_require__(__webpack_require__.s=2);})
([(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_autocomplete_vue__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e47ae2be_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vue_autocomplete_vue__=__webpack_require__(4);var disposed=false
var normalizeComponent=__webpack_require__(3)
var __vue_styles__=null
var __vue_scopeId__=null
var __vue_module_identifier__=null
var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_autocomplete_vue__["a"],__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e47ae2be_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vue_autocomplete_vue__["a"],__vue_styles__,__vue_scopeId__,__vue_module_identifier__)
Component.options.__file="src/js/components/vue-autocomplete.vue"
if(Component.esModule&&Object.keys(Component.esModule).some(function(key){return key!=="default"&&key.substr(0,2)!=="__"})){console.error("named exports are not supported in *.vue files.")}
if(Component.options.functional){console.error("[vue-loader] vue-autocomplete.vue: functional components are not supported with templates, they should use render functions.")}
if(false){(function(){var hotAPI=require("vue-hot-reload-api")
hotAPI.install(require("vue"),false)
if(!hotAPI.compatible)return
module.hot.accept()
if(!module.hot.data){hotAPI.createRecord("data-v-e47ae2be",Component.options)}else{hotAPI.reload("data-v-e47ae2be",Component.options)}
module.hot.dispose(function(data){disposed=true})})()}
__webpack_exports__["a"]=(Component.exports);}),(function(module,__webpack_exports__,__webpack_require__){"use strict";
/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
            * Licensed Under MIT (http://opensource.org/licenses/MIT)
            *
            * Vue 2 Autocomplete @ Version 0.0.1
            *
            */
__webpack_exports__["a"]=({props:{id:String,name:String,className:String,classes:{type:Object,default:function _default(){return{wrapper:false,input:false,list:false,item:false};}},placeholder:String,required:Boolean,initValue:{type:String,default:""},options:Array,filterByAnchor:{type:Boolean,default:true},anchor:{type:String,required:true},label:String,debounce:Number,url:{type:String,required:true},param:{type:String,default:'q'},encodeParams:{type:Boolean,default:true},customParams:Object,customHeaders:Object,min:{type:Number,default:0},onShouldRenderChild:Function,process:Function,onInput:Function,onShow:Function,onBlur:Function,onHide:Function,onFocus:Function,onSelect:Function,onBeforeAjax:Function,onAjaxProgress:Function,onAjaxLoaded:Function,onShouldGetData:Function},data:function data(){return{showList:false,type:"",json:[],focusList:"",debounceTask:undefined};},watch:{options:function options(newVal,oldVal){if(this.filterByAnchor){var type=this.type,anchor=this.anchor;var regex=new RegExp(""+type,'i');var filtered=newVal.filter(function(item){var found=item[anchor].search(regex)!==-1;return found;});this.json=filtered;}else{this.json=newVal;}}},methods:{getClassName:function getClassName(part){var classes=this.classes,className=this.className;if(classes[part])return""+classes[part];return className?className+"-"+part:'';},clearInput:function clearInput(){this.showList=false;this.type="";this.json=[];this.focusList="";},cleanUp:function cleanUp(data){return JSON.parse(JSON.stringify(data));},handleInput:function handleInput(e){var _this=this;var value=e.target.value;this.showList=true;if(this.onInput)this.onInput(value);if(this.debounce){if(this.debounceTask!==undefined)clearTimeout(this.debounceTask);this.debounceTask=setTimeout(function(){return _this.getData(value);},this.debounce);}else{return this.getData(value);}},handleKeyDown:function handleKeyDown(e){var key=e.keyCode;if(!this.showList)return;var DOWN=40;var UP=38;var ENTER=13;var ESC=27;switch(key){case DOWN:e.preventDefault();this.focusList++;break;case UP:e.preventDefault();this.focusList--;break;case ENTER:e.preventDefault();this.selectList(this.json[this.focusList]);this.showList=false;break;case ESC:this.showList=false;break;}
var listLength=this.json.length-1;var outOfRangeBottom=this.focusList>listLength;var outOfRangeTop=this.focusList<0;var topItemIndex=0;var bottomItemIndex=listLength;var nextFocusList=this.focusList;if(outOfRangeBottom)nextFocusList=topItemIndex;if(outOfRangeTop)nextFocusList=bottomItemIndex;this.focusList=nextFocusList;},setValue:function setValue(val){this.type=val;},handleDoubleClick:function handleDoubleClick(){this.json=[];this.getData("");this.onShow?this.onShow():null;this.showList=true;},handleBlur:function handleBlur(e){var _this2=this;this.onBlur?this.onBlur(e):null;setTimeout(function(){_this2.onHide?_this2.onHide():null;_this2.showList=false;},250);},handleFocus:function handleFocus(e){this.focusList=0;this.onFocus?this.onFocus(e):null;},mousemove:function mousemove(i){this.focusList=i;},activeClass:function activeClass(i){var focusClass=i===this.focusList?'focus-list':'';return""+focusClass;},selectList:function selectList(data){var clean=this.cleanUp(data);this.type=clean[this.anchor];this.showList=false;this.onSelect?this.onSelect(clean):null;},deepValue:function deepValue(obj,path){var arrayPath=path.split('.');for(var i=0;i<arrayPath.length;i++){obj=obj[arrayPath[i]];}
return obj;},composeParams:function composeParams(val){var _this3=this;var encode=function encode(val){return _this3.encodeParams?encodeURIComponent(val):val;};var params=this.param+"="+encode(val);if(this.customParams){Object.keys(this.customParams).forEach(function(key){params+="&"+key+"="+encode(_this3.customParams[key]);});}
return params;},composeHeader:function composeHeader(ajax){var _this4=this;if(this.customHeaders){Object.keys(this.customHeaders).forEach(function(key){ajax.setRequestHeader(key,_this4.customHeaders[key]);});}},doAjax:function doAjax(val){var _this5=this;this.onBeforeAjax?this.onBeforeAjax(val):null;var params=this.composeParams(val);var ajax=new XMLHttpRequest();ajax.open('GET',this.url+"?"+params,true);this.composeHeader(ajax);ajax.addEventListener('progress',function(data){if(data.lengthComputable&&_this5.onAjaxProgress)_this5.onAjaxProgress(data);});ajax.addEventListener('loadend',function(e){var responseText=e.target.responseText;var json=JSON.parse(responseText);_this5.onAjaxLoaded?_this5.onAjaxLoaded(json):null;_this5.json=_this5.process?_this5.process(json):json;});ajax.send();},getData:function getData(value){if(value.length<this.min||!this.url)return;if(this.onShouldGetData)this.manualGetData(value);else this.doAjax(value);},manualGetData:function manualGetData(val){var _this6=this;var task=this.onShouldGetData(val);if(task&&task.then){return task.then(function(options){_this6.json=options;});}}},created:function created(){this.type=this.initValue?this.initValue:null;},mounted:function mounted(){if(this.required)this.$refs.input.setAttribute("required",this.required);}});}),(function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0__components_vue_autocomplete_vue__=__webpack_require__(0);__webpack_exports__["default"]=(__WEBPACK_IMPORTED_MODULE_0__components_vue_autocomplete_vue__["a"]);}),(function(module,exports){module.exports=function normalizeComponent(rawScriptExports,compiledTemplate,injectStyles,scopeId,moduleIdentifier){var esModule
var scriptExports=rawScriptExports=rawScriptExports||{}
var type=typeof rawScriptExports.default
if(type==='object'||type==='function'){esModule=rawScriptExports
scriptExports=rawScriptExports.default}
var options=typeof scriptExports==='function'?scriptExports.options:scriptExports
if(compiledTemplate){options.render=compiledTemplate.render
options.staticRenderFns=compiledTemplate.staticRenderFns}
if(scopeId){options._scopeId=scopeId}
var hook
if(moduleIdentifier){hook=function(context){context=context||(this.$vnode&&this.$vnode.ssrContext)||(this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)
if(!context&&typeof __VUE_SSR_CONTEXT__!=='undefined'){context=__VUE_SSR_CONTEXT__}
if(injectStyles){injectStyles.call(this,context)}
if(context&&context._registeredComponents){context._registeredComponents.add(moduleIdentifier)}}
options._ssrRegister=hook}else if(injectStyles){hook=injectStyles}
if(hook){var functional=options.functional
var existing=functional?options.render:options.beforeCreate
if(!functional){options.beforeCreate=existing?[].concat(existing,hook):[hook]}else{options.render=function renderWithStyleInjection(h,context){hook.call(context)
return existing(h,context)}}}
return{esModule:esModule,exports:scriptExports,options:options}}}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:((_vm.getClassName('wrapper'))+" autocomplete-wrapper")},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.type),expression:"type"}],ref:"input",class:((_vm.getClassName('input'))+" autocomplete-input"),attrs:{"type":"text","id":_vm.id,"placeholder":_vm.placeholder,"name":_vm.name,"autocomplete":"off"},domProps:{"value":(_vm.type)},on:{"input":[function($event){if($event.target.composing){return;}
_vm.type=$event.target.value},_vm.handleInput],"dblclick":_vm.handleDoubleClick,"blur":_vm.handleBlur,"keydown":_vm.handleKeyDown,"focus":_vm.handleFocus}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showList&&_vm.json.length),expression:"showList && json.length"}],class:((_vm.getClassName('list'))+" autocomplete autocomplete-list")},[_c('ul',_vm._l((_vm.json),function(data,i){return _c('li',{class:_vm.activeClass(i)},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();_vm.selectList(data)},"mousemove":function($event){_vm.mousemove(i)}}},[(_vm.onShouldRenderChild)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.onShouldRenderChild(data))}}):_vm._e(),_vm._v(" "),(!_vm.onShouldRenderChild)?_c('div',[_c('b',{staticClass:"autocomplete-anchor-text"},[_vm._v(_vm._s(_vm.deepValue(data,_vm.anchor)))]),_vm._v(" "),_c('span',{staticClass:"autocomplete-anchor-label"},[_vm._v(_vm._s(_vm.deepValue(data,_vm.label)))])]):_vm._e()])])}))])])}
var staticRenderFns=[]
render._withStripped=true
var esExports={render:render,staticRenderFns:staticRenderFns}
__webpack_exports__["a"]=(esExports);if(false){module.hot.accept()
if(module.hot.data){require("vue-hot-reload-api").rerender("data-v-e47ae2be",esExports)}}})]);});
"use strict";(function($){$(document).ready(function(){$('.stm_lms_courses_search').each(function(){var $this=$(this);new Vue({el:$(this)[0],data:function data(){return{vue_loaded:true,loading:false,search:'',url:''};},mounted:function mounted(){this.url=stm_lms_search_value;},components:{autocomplete:Vue2Autocomplete.default},methods:{goto:function goto(){console.log('goto');},searchCourse:function searchCourse(obj){window.location.href=obj.url;},searching:function searching(value){$this.addClass('loading');this.url=value;},loaded:function loaded(){$this.removeClass('loading');}}});});});})(jQuery);
(function($){$(document).ready(function(){stm_lms_enterprise(true);});})(jQuery);function stm_lms_enterprise(){var $=jQuery;$('.stm-lms-enterprise:not(.loaded)').each(function(){$(this).addClass('loaded');new Vue({el:this,data:function(){return{loading:false,name:'',email:'',text:'',message:'',status:'',}},methods:{send(){var vm=this;vm.loading=true;vm.message='';var data={'name':vm.name,'email':vm.email,'text':vm.text,};this.$http.post(stm_lms_ajaxurl+'?action=stm_lms_enterprise&nonce='+stm_lms_nonces['stm_lms_enterprise'],data).then(function(response){vm.message=response.body['message'];vm.status=response.body['status'];vm.loading=false;});}}});});};
(function($){$(window).load(function(){stm_lms_login(true);});})(jQuery);function stm_lms_login(redirect){var $=jQuery;$('.stm-lms-login:not(.loaded)').each(function(){let $this=$(this);$(this).addClass('loaded');var vue_obj={el:this,data:function(){return{vue_loaded:true,loading:false,login:'',password:'',message:'',status:'',site_key:'',recaptcha:'',captcha_error:'',open_lost_password:false,lost_password:'',lost_password_process:'',}},methods:{logIn(){var vm=this;vm.loading=true;vm.message='';var data={'user_login':vm.login,'user_password':vm.password,'nonce':stm_lms_nonces['stm_lms_login'],};if(vm.site_key){grecaptcha.ready(function(){grecaptcha.execute(vm.site_key,{action:'login'}).then(function(token){data['recaptcha']=token;vm.processLogin(data);});});}else{vm.processLogin(data);}},processLogin(data){var vm=this;vm.$http.post(stm_lms_ajaxurl+'?action=stm_lms_login',data).then(function(response){vm.message=response.body['message'];vm.status=response.body['status'];vm.loading=false;if(response.body['user_page']){if(redirect){window.location=response.body['user_page'];}else{location.reload();}}});},lostPassword(){var vm=this;if(!(vm.lost_password.length))return true;vm.lost_password_process=true;vm.message='';var data={'user_login':vm.lost_password,};this.$http.post(stm_lms_ajaxurl+'?action=stm_lms_lost_password&nonce='+stm_lms_nonces['stm_lms_lost_password'],data).then(function(response){vm.message=response.body['message'];vm.status=response.body['status'];vm.lost_password_process=false;});},}};new Vue(vue_obj);});};
(function($){$(window).load(function(){stm_lms_register(true);})})(jQuery);function stm_lms_register(redirect){var vue_obj={el:'#stm-lms-register',data:function(){return{vue_loaded:true,loading:false,login:'',email:'',password:'',password_re:'',message:'',status:'',site_key:'',become_instructor:'',degree:'',expertize:'',recaptcha:'',captcha_error:'',privacy_policy:true,has_privacy_policy:false}},methods:{hasPrivacyPolicy(){if(!this.has_privacy_policy){this.has_privacy_policy=true;this.privacy_policy=false;}},register(){var vm=this;vm.loading=true;vm.message='';var data={'user_login':vm.login,'user_email':vm.email,'user_password':vm.password,'user_password_re':vm.password_re,'become_instructor':vm.become_instructor,'privacy_policy':vm.privacy_policy,'degree':vm.degree,'expertize':vm.expertize,};if(vm.site_key){grecaptcha.ready(function(){grecaptcha.execute(vm.site_key,{action:'register'}).then(function(token){data['recaptcha']=token;vm.processRegister(data);});});}else{vm.processRegister(data);}},processRegister(data){var vm=this;vm.$http.post(stm_lms_ajaxurl+'?action=stm_lms_register&nonce='+stm_lms_nonces['stm_lms_register'],data).then(function(response){vm.message=response.body['message'];vm.status=response.body['status'];vm.loading=false;if(response.body['user_page']){if(redirect){window.location=response.body['user_page'];}else{location.reload();}}});}}};new Vue(vue_obj);};