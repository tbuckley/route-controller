// Copyright (c) 2012 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// @version: 0.2.0-09d2e1f
function PointerGestureEvent(a,b){var c=b||{},d=document.createEvent("Event"),e={bubbles:Boolean(c.bubbles)===c.bubbles||!0,cancelable:Boolean(c.cancelable)===c.cancelable||!0};d.initEvent(a,e.bubbles,e.cancelable);for(var f,g=Object.keys(c),h=0;h<g.length;h++)f=g[h],d[f]=c[f];return d.preventTap=this.preventTap,d}"undefined"==typeof WeakMap&&!function(){var a=Object.defineProperty,b=Date.now()%1e9,c=function(){this.name="__st"+(1e9*Math.random()>>>0)+(b++ +"__")};c.prototype={set:function(b,c){var d=b[this.name];d&&d[0]===b?d[1]=c:a(b,this.name,{value:[b,c],writable:!0})},get:function(a){var b;return(b=a[this.name])&&b[0]===a?b[1]:void 0},"delete":function(a){this.set(a,void 0)}},window.WeakMap=c}(),function(a){"use strict";function b(){function a(a){b=a}if("function"!=typeof Object.observe||"function"!=typeof Array.observe)return!1;var b=[],c={};if(Object.observe(c,a),c.id=1,c.id=2,delete c.id,Object.deliverChangeRecords(a),3!==b.length)return!1;if("new"==b[0].type&&"updated"==b[1].type&&"deleted"==b[2].type)L="new",M="updated",N="reconfigured",O="deleted";else if("add"!=b[0].type||"update"!=b[1].type||"delete"!=b[2].type)return console.error("Unexpected change record names for Object.observe. Using dirty-checking instead"),!1;return Object.unobserve(c,a),c=[0],Array.observe(c,a),c[1]=1,c.length=0,Object.deliverChangeRecords(a),2!=b.length?!1:b[0].type!=P||b[1].type!=P?!1:(Array.unobserve(c,a),!0)}function c(){if(a.document&&"securityPolicy"in a.document&&!a.document.securityPolicy.allowsEval)return!1;try{var b=new Function("","return true;");return b()}catch(c){return!1}}function d(a){return+a===a>>>0}function e(a){return+a}function f(a){return a===Object(a)}function g(a,b){return a===b?0!==a||1/a===1/b:S(a)&&S(b)?!0:a!==a&&b!==b}function h(a){return"string"!=typeof a?!1:(a=a.trim(),""==a?!0:"."==a[0]?!1:$.test(a))}function i(a,b){if(b!==_)throw Error("Use Path.get to retrieve path objects");return""==a.trim()?this:d(a)?(this.push(a),this):(a.split(/\s*\.\s*/).filter(function(a){return a}).forEach(function(a){this.push(a)},this),void(R&&this.length&&(this.getValueFrom=this.compiledGetValueFromFn())))}function j(a){if(a instanceof i)return a;null==a&&(a=""),"string"!=typeof a&&(a=String(a));var b=ab[a];if(b)return b;if(!h(a))return bb;var b=new i(a,_);return ab[a]=b,b}function k(b){for(var c=0;db>c&&b.check_();)c++;return a.testingExposeCycleCount&&(a.dirtyCheckCycleCount=c),c>0}function l(a){for(var b in a)return!1;return!0}function m(a){return l(a.added)&&l(a.removed)&&l(a.changed)}function n(a,b){var c={},d={},e={};for(var f in b){var g=a[f];(void 0===g||g!==b[f])&&(f in a?g!==b[f]&&(e[f]=g):d[f]=void 0)}for(var f in a)f in b||(c[f]=a[f]);return Array.isArray(a)&&a.length!==b.length&&(e.length=a.length),{added:c,removed:d,changed:e}}function o(){if(!eb.length)return!1;for(var a=0;a<eb.length;a++)eb[a]();return eb.length=0,!0}function p(){function a(a){b&&b.state_===kb&&!d&&b.check_(a)}var b,c,d=!1,e=!0;return{open:function(c){if(b)throw Error("ObservedObject in use");e||Object.deliverChangeRecords(a),b=c,e=!1},observe:function(b,d){c=b,d?Array.observe(c,a):Object.observe(c,a)},deliver:function(b){d=b,Object.deliverChangeRecords(a),d=!1},close:function(){b=void 0,Object.unobserve(c,a),gb.push(this)}}}function q(a,b,c){var d=gb.pop()||p();return d.open(a),d.observe(b,c),d}function r(){function a(b){if(f(b)){var c=i.indexOf(b);c>=0?(i[c]=void 0,h.push(b)):h.indexOf(b)<0&&(h.push(b),Object.observe(b,d)),a(Object.getPrototypeOf(b))}}function b(){if(k=!1,j){var b=i===hb?[]:i;i=h,h=b;var c;for(var f in e)c=e[f],c&&c.state_==kb&&c.iterateObjects_(a);for(var g=0;g<i.length;g++){var l=i[g];l&&Object.unobserve(l,d)}i.length=0}}function c(){k||(j=!0,k=!0,fb(b))}function d(){var a;for(var b in e)a=e[b],a&&a.state_==kb&&a.check_();c()}var e=[],g=0,h=[],i=hb,j=!1,k=!1,l={object:void 0,objects:h,open:function(b){e[b.id_]=b,g++,b.iterateObjects_(a)},close:function(a){if(e[a.id_]=void 0,g--,g)return void c();j=!1;for(var b=0;b<h.length;b++)Object.unobserve(h[b],d),t.unobservedCount++;e.length=0,h.length=0,ib.push(this)},reset:c};return l}function s(a,b){return cb&&cb.object===b||(cb=ib.pop()||r(),cb.object=b),cb.open(a),cb}function t(){this.state_=jb,this.callback_=void 0,this.target_=void 0,this.directObserver_=void 0,this.value_=void 0,this.id_=nb++}function u(a){t._allObserversCount++,pb&&ob.push(a)}function v(){t._allObserversCount--}function w(a){t.call(this),this.value_=a,this.oldObject_=void 0}function x(a){if(!Array.isArray(a))throw Error("Provided object is not an Array");w.call(this,a)}function y(a,b){t.call(this),this.object_=a,this.path_=b instanceof i?b:j(b),this.directObserver_=void 0}function z(){t.call(this),this.value_=[],this.directObserver_=void 0,this.observed_=[]}function A(a){return a}function B(a,b,c,d){this.callback_=void 0,this.target_=void 0,this.value_=void 0,this.observable_=a,this.getValueFn_=b||A,this.setValueFn_=c||A,this.dontPassThroughSet_=d}function C(a,b){if("function"==typeof Object.observe){var c=Object.getNotifier(a);return function(d,e){var f={object:a,type:d,name:b};2===arguments.length&&(f.oldValue=e),c.notify(f)}}}function D(a,b,c){for(var d={},e={},f=0;f<b.length;f++){var g=b[f];tb[g.type]?(g.name in c||(c[g.name]=g.oldValue),g.type!=M&&(g.type!=L?g.name in d?(delete d[g.name],delete c[g.name]):e[g.name]=!0:g.name in e?delete e[g.name]:d[g.name]=!0)):(console.error("Unknown changeRecord type: "+g.type),console.error(g))}for(var h in d)d[h]=a[h];for(var h in e)e[h]=void 0;var i={};for(var h in c)if(!(h in d||h in e)){var j=a[h];c[h]!==j&&(i[h]=j)}return{added:d,removed:e,changed:i}}function E(a,b,c){return{index:a,removed:b,addedCount:c}}function F(){}function G(a,b,c,d,e,f){return yb.calcSplices(a,b,c,d,e,f)}function H(a,b,c,d){return c>b||a>d?-1:b==c||d==a?0:c>a?d>b?b-c:d-c:b>d?d-a:b-a}function I(a,b,c,d){for(var e=E(b,c,d),f=!1,g=0,h=0;h<a.length;h++){var i=a[h];if(i.index+=g,!f){var j=H(e.index,e.index+e.removed.length,i.index,i.index+i.addedCount);if(j>=0){a.splice(h,1),h--,g-=i.addedCount-i.removed.length,e.addedCount+=i.addedCount-j;var k=e.removed.length+i.removed.length-j;if(e.addedCount||k){var c=i.removed;if(e.index<i.index){var l=e.removed.slice(0,i.index-e.index);Array.prototype.push.apply(l,c),c=l}if(e.index+e.removed.length>i.index+i.addedCount){var m=e.removed.slice(i.index+i.addedCount-e.index);Array.prototype.push.apply(c,m)}e.removed=c,i.index<e.index&&(e.index=i.index)}else f=!0}else if(e.index<i.index){f=!0,a.splice(h,0,e),h++;var n=e.addedCount-e.removed.length;i.index+=n,g+=n}}}f||a.push(e)}function J(a,b){for(var c=[],f=0;f<b.length;f++){var g=b[f];switch(g.type){case P:I(c,g.index,g.removed.slice(),g.addedCount);break;case L:case M:case O:if(!d(g.name))continue;var h=e(g.name);if(0>h)continue;I(c,h,[g.oldValue],1);break;default:console.error("Unexpected record type: "+JSON.stringify(g))}}return c}function K(a,b){var c=[];return J(a,b).forEach(function(b){return 1==b.addedCount&&1==b.removed.length?void(b.removed[0]!==a[b.index]&&c.push(b)):void(c=c.concat(G(a,b.index,b.index+b.addedCount,b.removed,0,b.removed.length)))}),c}var L="add",M="update",N="reconfigure",O="delete",P="splice",Q=b(),R=c(),S=a.Number.isNaN||function(b){return"number"==typeof b&&a.isNaN(b)},T="__proto__"in{}?function(a){return a}:function(a){var b=a.__proto__;if(!b)return a;var c=Object.create(b);return Object.getOwnPropertyNames(a).forEach(function(b){Object.defineProperty(c,b,Object.getOwnPropertyDescriptor(a,b))}),c},U="[$_a-zA-Z]",V="[$_a-zA-Z0-9]",W=U+"+"+V+"*",X="(?:[0-9]|[1-9]+[0-9]+)",Y="(?:"+W+"|"+X+")",Z="(?:"+Y+")(?:\\s*\\.\\s*"+Y+")*",$=new RegExp("^"+Z+"$"),_={},ab={};i.get=j,i.prototype=T({__proto__:[],valid:!0,toString:function(){return this.join(".")},getValueFrom:function(a){for(var b=0;b<this.length;b++){if(null==a)return;a=a[this[b]]}return a},iterateObjects:function(a,b){for(var c=0;c<this.length;c++){if(c&&(a=a[this[c-1]]),!a)return;b(a)}},compiledGetValueFromFn:function(){var a=this.map(function(a){return d(a)?'["'+a+'"]':"."+a}),b="",c="obj";b+="if (obj != null";for(var e=0;e<this.length-1;e++){{this[e]}c+=a[e],b+=" &&\n     "+c+" != null"}return b+=")\n",c+=a[e],b+="  return "+c+";\nelse\n  return undefined;",new Function("obj",b)},setValueFrom:function(a,b){if(!this.length)return!1;for(var c=0;c<this.length-1;c++){if(!f(a))return!1;a=a[this[c]]}return f(a)?(a[this[c]]=b,!0):!1}});var bb=new i("",_);bb.valid=!1,bb.getValueFrom=bb.setValueFrom=function(){};var cb,db=1e3,eb=[],fb=Q?function(){var a={pingPong:!0},b=!1;return Object.observe(a,function(){o(),b=!1}),function(c){eb.push(c),b||(b=!0,a.pingPong=!a.pingPong)}}():function(){return function(a){eb.push(a)}}(),gb=[],hb=[],ib=[],jb=0,kb=1,lb=2,mb=3,nb=1;t.prototype={open:function(a,b){if(this.state_!=jb)throw Error("Observer has already been opened.");return u(this),this.callback_=a,this.target_=b,this.state_=kb,this.connect_(),this.value_},close:function(){this.state_==kb&&(v(this),this.state_=lb,this.disconnect_(),this.value_=void 0,this.callback_=void 0,this.target_=void 0)},deliver:function(){this.state_==kb&&k(this)},report_:function(a){try{this.callback_.apply(this.target_,a)}catch(b){t._errorThrownDuringCallback=!0,console.error("Exception caught during observer callback: "+(b.stack||b))}},discardChanges:function(){return this.check_(void 0,!0),this.value_}};var ob,pb=!Q;t._allObserversCount=0,pb&&(ob=[]);var qb=!1,rb="function"==typeof Object.deliverAllChangeRecords;a.Platform=a.Platform||{},a.Platform.performMicrotaskCheckpoint=function(){if(!qb){if(rb)return void Object.deliverAllChangeRecords();if(pb){qb=!0;var b,c,d=0;do{d++,c=ob,ob=[],b=!1;for(var e=0;e<c.length;e++){var f=c[e];f.state_==kb&&(f.check_()&&(b=!0),ob.push(f))}o()&&(b=!0)}while(db>d&&b);a.testingExposeCycleCount&&(a.dirtyCheckCycleCount=d),qb=!1}}},pb&&(a.Platform.clearObservers=function(){ob=[]}),w.prototype=T({__proto__:t.prototype,arrayObserve:!1,connect_:function(){Q?this.directObserver_=q(this,this.value_,this.arrayObserve):this.oldObject_=this.copyObject(this.value_)},copyObject:function(a){var b=Array.isArray(a)?[]:{};for(var c in a)b[c]=a[c];return Array.isArray(a)&&(b.length=a.length),b},check_:function(a){var b,c;if(Q){if(!a)return!1;c={},b=D(this.value_,a,c)}else c=this.oldObject_,b=n(this.value_,this.oldObject_);return m(b)?!1:(Q||(this.oldObject_=this.copyObject(this.value_)),this.report_([b.added||{},b.removed||{},b.changed||{},function(a){return c[a]}]),!0)},disconnect_:function(){Q?(this.directObserver_.close(),this.directObserver_=void 0):this.oldObject_=void 0},deliver:function(){this.state_==kb&&(Q?this.directObserver_.deliver(!1):k(this))},discardChanges:function(){return this.directObserver_?this.directObserver_.deliver(!0):this.oldObject_=this.copyObject(this.value_),this.value_}}),x.prototype=T({__proto__:w.prototype,arrayObserve:!0,copyObject:function(a){return a.slice()},check_:function(a){var b;if(Q){if(!a)return!1;b=K(this.value_,a)}else b=G(this.value_,0,this.value_.length,this.oldObject_,0,this.oldObject_.length);return b&&b.length?(Q||(this.oldObject_=this.copyObject(this.value_)),this.report_([b]),!0):!1}}),x.applySplices=function(a,b,c){c.forEach(function(c){for(var d=[c.index,c.removed.length],e=c.index;e<c.index+c.addedCount;)d.push(b[e]),e++;Array.prototype.splice.apply(a,d)})},y.prototype=T({__proto__:t.prototype,connect_:function(){Q&&(this.directObserver_=s(this,this.object_)),this.check_(void 0,!0)},disconnect_:function(){this.value_=void 0,this.directObserver_&&(this.directObserver_.close(this),this.directObserver_=void 0)},iterateObjects_:function(a){this.path_.iterateObjects(this.object_,a)},check_:function(a,b){var c=this.value_;return this.value_=this.path_.getValueFrom(this.object_),b||g(this.value_,c)?!1:(this.report_([this.value_,c]),!0)},setValue:function(a){this.path_&&this.path_.setValueFrom(this.object_,a)}});var sb={};z.prototype=T({__proto__:t.prototype,connect_:function(){if(this.check_(void 0,!0),Q){for(var a,b=!1,c=0;c<this.observed_.length;c+=2)if(a=this.observed_[c],a!==sb){b=!0;break}return this.directObserver_?b?void this.directObserver_.reset():(this.directObserver_.close(),void(this.directObserver_=void 0)):void(b&&(this.directObserver_=s(this,a)))}},closeObservers_:function(){for(var a=0;a<this.observed_.length;a+=2)this.observed_[a]===sb&&this.observed_[a+1].close();this.observed_.length=0},disconnect_:function(){this.value_=void 0,this.directObserver_&&(this.directObserver_.close(this),this.directObserver_=void 0),this.closeObservers_()},addPath:function(a,b){if(this.state_!=jb&&this.state_!=mb)throw Error("Cannot add paths once started.");this.observed_.push(a,b instanceof i?b:j(b))},addObserver:function(a){if(this.state_!=jb&&this.state_!=mb)throw Error("Cannot add observers once started.");a.open(this.deliver,this),this.observed_.push(sb,a)},startReset:function(){if(this.state_!=kb)throw Error("Can only reset while open");this.state_=mb,this.closeObservers_()},finishReset:function(){if(this.state_!=mb)throw Error("Can only finishReset after startReset");return this.state_=kb,this.connect_(),this.value_},iterateObjects_:function(a){for(var b,c=0;c<this.observed_.length;c+=2)b=this.observed_[c],b!==sb&&this.observed_[c+1].iterateObjects(b,a)},check_:function(a,b){for(var c,d=0;d<this.observed_.length;d+=2){var e=this.observed_[d+1],f=this.observed_[d],h=f===sb?e.discardChanges():e.getValueFrom(f);b?this.value_[d/2]=h:g(h,this.value_[d/2])||(c=c||[],c[d/2]=this.value_[d/2],this.value_[d/2]=h)}return c?(this.report_([this.value_,c,this.observed_]),!0):!1}}),B.prototype={open:function(a,b){return this.callback_=a,this.target_=b,this.value_=this.getValueFn_(this.observable_.open(this.observedCallback_,this)),this.value_},observedCallback_:function(a){if(a=this.getValueFn_(a),!g(a,this.value_)){var b=this.value_;this.value_=a,this.callback_.call(this.target_,this.value_,b)}},discardChanges:function(){return this.value_=this.getValueFn_(this.observable_.discardChanges()),this.value_},deliver:function(){return this.observable_.deliver()},setValue:function(a){return a=this.setValueFn_(a),!this.dontPassThroughSet_&&this.observable_.setValue?this.observable_.setValue(a):void 0},close:function(){this.observable_&&this.observable_.close(),this.callback_=void 0,this.target_=void 0,this.observable_=void 0,this.value_=void 0,this.getValueFn_=void 0,this.setValueFn_=void 0}};var tb={};tb[L]=!0,tb[M]=!0,tb[O]=!0,t.defineComputedProperty=function(a,b,c){var d=C(a,b),e=c.open(function(a,b){e=a,d&&d(M,b)});return Object.defineProperty(a,b,{get:function(){return c.deliver(),e},set:function(a){return c.setValue(a),a},configurable:!0}),{close:function(){c.close(),Object.defineProperty(a,b,{value:e,writable:!0,configurable:!0})}}};var ub=0,vb=1,wb=2,xb=3;F.prototype={calcEditDistances:function(a,b,c,d,e,f){for(var g=f-e+1,h=c-b+1,i=new Array(g),j=0;g>j;j++)i[j]=new Array(h),i[j][0]=j;for(var k=0;h>k;k++)i[0][k]=k;for(var j=1;g>j;j++)for(var k=1;h>k;k++)if(this.equals(a[b+k-1],d[e+j-1]))i[j][k]=i[j-1][k-1];else{var l=i[j-1][k]+1,m=i[j][k-1]+1;i[j][k]=m>l?l:m}return i},spliceOperationsFromEditDistances:function(a){for(var b=a.length-1,c=a[0].length-1,d=a[b][c],e=[];b>0||c>0;)if(0!=b)if(0!=c){var f,g=a[b-1][c-1],h=a[b-1][c],i=a[b][c-1];f=i>h?g>h?h:g:g>i?i:g,f==g?(g==d?e.push(ub):(e.push(vb),d=g),b--,c--):f==h?(e.push(xb),b--,d=h):(e.push(wb),c--,d=i)}else e.push(xb),b--;else e.push(wb),c--;return e.reverse(),e},calcSplices:function(a,b,c,d,e,f){var g=0,h=0,i=Math.min(c-b,f-e);if(0==b&&0==e&&(g=this.sharedPrefix(a,d,i)),c==a.length&&f==d.length&&(h=this.sharedSuffix(a,d,i-g)),b+=g,e+=g,c-=h,f-=h,c-b==0&&f-e==0)return[];if(b==c){for(var j=E(b,[],0);f>e;)j.removed.push(d[e++]);return[j]}if(e==f)return[E(b,[],c-b)];for(var k=this.spliceOperationsFromEditDistances(this.calcEditDistances(a,b,c,d,e,f)),j=void 0,l=[],m=b,n=e,o=0;o<k.length;o++)switch(k[o]){case ub:j&&(l.push(j),j=void 0),m++,n++;break;case vb:j||(j=E(m,[],0)),j.addedCount++,m++,j.removed.push(d[n]),n++;break;case wb:j||(j=E(m,[],0)),j.addedCount++,m++;break;case xb:j||(j=E(m,[],0)),j.removed.push(d[n]),n++}return j&&l.push(j),l},sharedPrefix:function(a,b,c){for(var d=0;c>d;d++)if(!this.equals(a[d],b[d]))return d;return c},sharedSuffix:function(a,b,c){for(var d=a.length,e=b.length,f=0;c>f&&this.equals(a[--d],b[--e]);)f++;return f},calculateSplices:function(a,b){return this.calcSplices(a,0,a.length,b,0,b.length)},equals:function(a,b){return a===b}};var yb=new F;a.Observer=t,a.Observer.runEOM_=fb,a.Observer.hasObjectObserve=Q,a.ArrayObserver=x,a.ArrayObserver.calculateSplices=function(a,b){return yb.calculateSplices(a,b)},a.ArraySplice=F,a.ObjectObserver=w,a.PathObserver=y,a.CompoundObserver=z,a.Path=i,a.ObserverTransform=B,a.Observer.changeRecordTypes={add:L,update:M,reconfigure:N,"delete":O,splice:P}}("undefined"!=typeof global&&global&&"undefined"!=typeof module&&module?global:this||window),window.Platform=window.Platform||{},window.logFlags=window.logFlags||{},function(a){var b=a.flags||{};location.search.slice(1).split("&").forEach(function(a){a=a.split("="),a[0]&&(b[a[0]]=a[1]||!0)});var c=document.currentScript||document.querySelector('script[src*="platform.js"]');if(c)for(var d,e=c.attributes,f=0;f<e.length;f++)d=e[f],"src"!==d.name&&(b[d.name]=d.value||!0);b.log&&b.log.split(",").forEach(function(a){window.logFlags[a]=!0}),b.shadow=b.shadow||b.shadowdom||b.polyfill,b.shadow="native"===b.shadow?!1:b.shadow||!HTMLElement.prototype.createShadowRoot,b.register&&(window.CustomElements=window.CustomElements||{flags:{}},window.CustomElements.flags.register=b.register),b.imports&&(window.HTMLImports=window.HTMLImports||{flags:{}},window.HTMLImports.flags.imports=b.imports),a.flags=b}(Platform),Platform.flags.shadow?(window.ShadowDOMPolyfill={},function(a){"use strict";function b(a){if(!a)throw new Error("Assertion failed")}function c(a,b){return L(b).forEach(function(c){K(a,c,M(b,c))}),a}function d(a,b){return L(b).forEach(function(c){switch(c){case"arguments":case"caller":case"length":case"name":case"prototype":case"toString":return}K(a,c,M(b,c))}),a}function e(a,b){for(var c=0;c<b.length;c++)if(b[c]in a)return b[c]}function f(a){var b=a.__proto__||Object.getPrototypeOf(a),c=E.get(b);if(c)return c;var d=f(b),e=t(d);return q(b,e,a),e}function g(a,b){o(a,b,!0)}function h(a,b){o(b,a,!1)}function i(a){return/^on[a-z]+$/.test(a)}function j(a){return/^\w[a-zA-Z_0-9]*$/.test(a)}function k(a){return H&&j(a)?new Function("return this.impl."+a):function(){return this.impl[a]}}function l(a){return H&&j(a)?new Function("v","this.impl."+a+" = v"):function(b){this.impl[a]=b}}function m(a){return H&&j(a)?new Function("return this.impl."+a+".apply(this.impl, arguments)"):function(){return this.impl[a].apply(this.impl,arguments)}}function n(a,b){try{return Object.getOwnPropertyDescriptor(a,b)}catch(c){return O}}function o(b,c,d){for(var e=L(b),f=0;f<e.length;f++){var g=e[f];if("polymerBlackList_"!==g&&!(g in c||b.polymerBlackList_&&b.polymerBlackList_[g])){N&&b.__lookupGetter__(g);var h,j,o=n(b,g);if(d&&"function"==typeof o.value)c[g]=m(g);else{var p=i(g);h=p?a.getEventHandlerGetter(g):k(g),(o.writable||o.set)&&(j=p?a.getEventHandlerSetter(g):l(g)),K(c,g,{get:h,set:j,configurable:o.configurable,enumerable:o.enumerable})}}}}function p(a,b,c){var e=a.prototype;q(e,b,c),d(b,a)}function q(a,c,d){var e=c.prototype;b(void 0===E.get(a)),E.set(a,c),F.set(e,a),g(a,e),d&&h(e,d),K(e,"constructor",{value:c,configurable:!0,enumerable:!1,writable:!0})}function r(a,b){return E.get(b.prototype)===a}function s(a){var b=Object.getPrototypeOf(a),c=f(b),d=t(c);return q(b,d,a),d}function t(a){function b(b){a.call(this,b)}return b.prototype=Object.create(a.prototype),b.prototype.constructor=b,b}function u(a){return a instanceof G.EventTarget||a instanceof G.Event||a instanceof G.Range||a instanceof G.DOMImplementation||a instanceof G.CanvasRenderingContext2D||G.WebGLRenderingContext&&a instanceof G.WebGLRenderingContext}function v(a){return Q&&a instanceof Q||a instanceof S||a instanceof R||a instanceof T||a instanceof U||a instanceof P||a instanceof V||W&&a instanceof W||X&&a instanceof X}function w(a){return null===a?null:(b(v(a)),a.polymerWrapper_||(a.polymerWrapper_=new(f(a))(a)))}function x(a){return null===a?null:(b(u(a)),a.impl)}function y(a){return a&&u(a)?x(a):a}function z(a){return a&&!u(a)?w(a):a}function A(a,c){null!==c&&(b(v(a)),b(void 0===c||u(c)),a.polymerWrapper_=c)}function B(a,b,c){K(a.prototype,b,{get:c,configurable:!0,enumerable:!0})}function C(a,b){B(a,b,function(){return w(this.impl[b])})}function D(a,b){a.forEach(function(a){b.forEach(function(b){a.prototype[b]=function(){var a=z(this);return a[b].apply(a,arguments)}})})}var E=new WeakMap,F=new WeakMap,G=Object.create(null),H=!("securityPolicy"in document)||document.securityPolicy.allowsEval;if(H)try{var I=new Function("","return true;");H=I()}catch(J){H=!1}var K=Object.defineProperty,L=Object.getOwnPropertyNames,M=Object.getOwnPropertyDescriptor;L(window);var N=/Firefox/.test(navigator.userAgent),O={get:function(){},set:function(){},configurable:!0,enumerable:!0},P=window.DOMImplementation,Q=window.EventTarget,R=window.Event,S=window.Node,T=window.Window,U=window.Range,V=window.CanvasRenderingContext2D,W=window.WebGLRenderingContext,X=window.SVGElementInstance;a.assert=b,a.constructorTable=E,a.defineGetter=B,a.defineWrapGetter=C,a.forwardMethodsToWrapper=D,a.isWrapper=u,a.isWrapperFor=r,a.mixin=c,a.nativePrototypeTable=F,a.oneOf=e,a.registerObject=s,a.registerWrapper=p,a.rewrap=A,a.unwrap=x,a.unwrapIfNeeded=y,a.wrap=w,a.wrapIfNeeded=z,a.wrappers=G}(window.ShadowDOMPolyfill),function(a){"use strict";function b(){g=!1;var a=f.slice(0);f=[];for(var b=0;b<a.length;b++)a[b]()}function c(a){f.push(a),g||(g=!0,d(b,0))}var d,e=window.MutationObserver,f=[],g=!1;if(e){var h=1,i=new e(b),j=document.createTextNode(h);i.observe(j,{characterData:!0}),d=function(){h=(h+1)%2,j.data=h}}else d=window.setImmediate||window.setTimeout;a.setEndOfMicrotask=c}(window.ShadowDOMPolyfill),function(a){"use strict";function b(){p||(k(c),p=!0)}function c(){p=!1;do for(var a=o.slice(),b=!1,c=0;c<a.length;c++){var d=a[c],e=d.takeRecords();f(d),e.length&&(d.callback_(e,d),b=!0)}while(b)}function d(a,b){this.type=a,this.target=b,this.addedNodes=new m.NodeList,this.removedNodes=new m.NodeList,this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function e(a,b){for(;a;a=a.parentNode){var c=n.get(a);if(c)for(var d=0;d<c.length;d++){var e=c[d];e.options.subtree&&e.addTransientObserver(b)}}}function f(a){for(var b=0;b<a.nodes_.length;b++){var c=a.nodes_[b],d=n.get(c);if(!d)return;for(var e=0;e<d.length;e++){var f=d[e];f.observer===a&&f.removeTransientObservers()}}}function g(a,c,e){for(var f=Object.create(null),g=Object.create(null),h=a;h;h=h.parentNode){var i=n.get(h);if(i)for(var j=0;j<i.length;j++){var k=i[j],l=k.options;if((h===a||l.subtree)&&!("attributes"===c&&!l.attributes||"attributes"===c&&l.attributeFilter&&(null!==e.namespace||-1===l.attributeFilter.indexOf(e.name))||"characterData"===c&&!l.characterData||"childList"===c&&!l.childList)){var m=k.observer;f[m.uid_]=m,("attributes"===c&&l.attributeOldValue||"characterData"===c&&l.characterDataOldValue)&&(g[m.uid_]=e.oldValue)}}}var o=!1;for(var p in f){var m=f[p],q=new d(c,a);"name"in e&&"namespace"in e&&(q.attributeName=e.name,q.attributeNamespace=e.namespace),e.addedNodes&&(q.addedNodes=e.addedNodes),e.removedNodes&&(q.removedNodes=e.removedNodes),e.previousSibling&&(q.previousSibling=e.previousSibling),e.nextSibling&&(q.nextSibling=e.nextSibling),void 0!==g[p]&&(q.oldValue=g[p]),m.records_.push(q),o=!0}o&&b()}function h(a){if(this.childList=!!a.childList,this.subtree=!!a.subtree,this.attributes="attributes"in a||!("attributeOldValue"in a||"attributeFilter"in a)?!!a.attributes:!0,this.characterData="characterDataOldValue"in a&&!("characterData"in a)?!0:!!a.characterData,!this.attributes&&(a.attributeOldValue||"attributeFilter"in a)||!this.characterData&&a.characterDataOldValue)throw new TypeError;if(this.characterData=!!a.characterData,this.attributeOldValue=!!a.attributeOldValue,this.characterDataOldValue=!!a.characterDataOldValue,"attributeFilter"in a){if(null==a.attributeFilter||"object"!=typeof a.attributeFilter)throw new TypeError;this.attributeFilter=q.call(a.attributeFilter)}else this.attributeFilter=null}function i(a){this.callback_=a,this.nodes_=[],this.records_=[],this.uid_=++r,o.push(this)}function j(a,b,c){this.observer=a,this.target=b,this.options=c,this.transientObservedNodes=[]}var k=a.setEndOfMicrotask,l=a.wrapIfNeeded,m=a.wrappers,n=new WeakMap,o=[],p=!1,q=Array.prototype.slice,r=0;i.prototype={observe:function(a,b){a=l(a);var c,d=new h(b),e=n.get(a);e||n.set(a,e=[]);for(var f=0;f<e.length;f++)e[f].observer===this&&(c=e[f],c.removeTransientObservers(),c.options=d);c||(c=new j(this,a,d),e.push(c),this.nodes_.push(a))},disconnect:function(){this.nodes_.forEach(function(a){for(var b=n.get(a),c=0;c<b.length;c++){var d=b[c];if(d.observer===this){b.splice(c,1);break}}},this),this.records_=[]},takeRecords:function(){var a=this.records_;return this.records_=[],a}},j.prototype={addTransientObserver:function(a){if(a!==this.target){this.transientObservedNodes.push(a);var b=n.get(a);b||n.set(a,b=[]),b.push(this)}},removeTransientObservers:function(){var a=this.transientObservedNodes;this.transientObservedNodes=[];for(var b=0;b<a.length;b++)for(var c=a[b],d=n.get(c),e=0;e<d.length;e++)if(d[e]===this){d.splice(e,1);break}}},a.enqueueMutation=g,a.registerTransientObservers=e,a.wrappers.MutationObserver=i,a.wrappers.MutationRecord=d}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){return a instanceof Q.ShadowRoot}function c(a){var b=a.localName;return"content"===b||"shadow"===b}function d(a){return!!a.shadowRoot}function e(a){var b;return a.parentNode||(b=a.defaultView)&&P(b)||null}function f(f,g,h){if(h.length)return h.shift();if(b(f))return j(f)||f.host;var i=a.eventParentsTable.get(f);if(i){for(var k=1;k<i.length;k++)h[k-1]=i[k];return i[0]}if(g&&c(f)){var l=f.parentNode;if(l&&d(l))for(var m=a.getShadowTrees(l),n=j(g),k=0;k<m.length;k++)if(m[k].contains(n))return n}return e(f)}function g(a){for(var d=[],e=a,g=[],i=[];e;){var j=null;if(c(e)){j=h(d);var k=d[d.length-1]||e;d.push(k)}else d.length||d.push(e);var l=d[d.length-1];g.push({target:l,currentTarget:e}),b(e)&&d.pop(),e=f(e,j,i)}return g}function h(a){for(var b=a.length-1;b>=0;b--)if(!c(a[b]))return a[b];return null}function i(a,d){for(var e=[];a;){for(var g=[],i=d,j=void 0;i;){var l=null;if(g.length){if(c(i)&&(l=h(g),k(j))){var n=g[g.length-1];g.push(n)}}else g.push(i);if(m(i,a))return g[g.length-1];b(i)&&g.pop(),j=i,i=f(i,l,e)}a=b(a)?a.host:a.parentNode}}function j(b){return a.insertionParentTable.get(b)}function k(a){return j(a)}function l(a){for(var b;b=a.parentNode;)a=b;return a}function m(a,b){return l(a)===l(b)}function n(a,b){return a===b?!0:a instanceof Q.ShadowRoot?n(l(a.host),b):!1}function o(a){return S.get(a)?void 0:(S.set(a,!0),p(P(a),P(a.target)))}function p(b,c){if(T.get(b))throw new Error("InvalidStateError");T.set(b,!0),a.renderAllPending();var d=g(c);return"load"===b.type&&2===d.length&&d[0].target instanceof Q.Document&&d.shift(),_.set(b,d),q(b,d)&&r(b,d)&&s(b,d),X.set(b,v.NONE),V.delete(b,null),T.delete(b),b.defaultPrevented}function q(a,b){for(var c,d=b.length-1;d>0;d--){var e=b[d].target,f=b[d].currentTarget;if(e!==f&&(c=v.CAPTURING_PHASE,!t(b[d],a,c)))return!1}return!0}function r(a,b){var c=v.AT_TARGET;return t(b[0],a,c)}function s(a,b){for(var c,d=a.bubbles,e=1;e<b.length;e++){var f=b[e].target,g=b[e].currentTarget;if(f===g)c=v.AT_TARGET;else{if(!d||Z.get(a))continue;c=v.BUBBLING_PHASE}if(!t(b[e],a,c))return}}function t(a,b,c){var d=a.target,e=a.currentTarget,f=R.get(e);if(!f)return!0;if("relatedTarget"in b){var g=O(b);if(g.relatedTarget){var h=P(g.relatedTarget),j=i(e,h);if(j===d)return!0;W.set(b,j)}}X.set(b,c);var k=b.type,l=!1;U.set(b,d),V.set(b,e);for(var m=0;m<f.length;m++){var n=f[m];if(n.removed)l=!0;else if(!(n.type!==k||!n.capture&&c===v.CAPTURING_PHASE||n.capture&&c===v.BUBBLING_PHASE))try{if("function"==typeof n.handler?n.handler.call(e,b):n.handler.handleEvent(b),Z.get(b))return!1}catch(o){window.onerror?window.onerror(o.message):console.error(o,o.stack)}}if(l){var p=f.slice();f.length=0;for(var m=0;m<p.length;m++)p[m].removed||f.push(p[m])}return!Y.get(b)}function u(a,b,c){this.type=a,this.handler=b,this.capture=Boolean(c)}function v(a,b){return a instanceof ab?void(this.impl=a):P(z(ab,"Event",a,b))}function w(a){return a&&a.relatedTarget?Object.create(a,{relatedTarget:{value:O(a.relatedTarget)}}):a}function x(a,b,c){var d=window[a],e=function(b,c){return b instanceof d?void(this.impl=b):P(z(d,a,b,c))};if(e.prototype=Object.create(b.prototype),c&&M(e.prototype,c),d)try{N(d,e,new d("temp"))}catch(f){N(d,e,document.createEvent(a))}return e}function y(a,b){return function(){arguments[b]=O(arguments[b]);var c=O(this);c[a].apply(c,arguments)}}function z(a,b,c,d){if(jb)return new a(c,w(d));var e=O(document.createEvent(b)),f=ib[b],g=[c];return Object.keys(f).forEach(function(a){var b=null!=d&&a in d?d[a]:f[a];"relatedTarget"===a&&(b=O(b)),g.push(b)}),e["init"+b].apply(e,g),e}function A(){v.call(this)}function B(a){return"function"==typeof a?!0:a&&a.handleEvent}function C(a){switch(a){case"DOMAttrModified":case"DOMAttributeNameChanged":case"DOMCharacterDataModified":case"DOMElementNameChanged":case"DOMNodeInserted":case"DOMNodeInsertedIntoDocument":case"DOMNodeRemoved":case"DOMNodeRemovedFromDocument":case"DOMSubtreeModified":return!0}return!1}function D(a){this.impl=a}function E(a){return a instanceof Q.ShadowRoot&&(a=a.host),O(a)}function F(a,b){var c=R.get(a);if(c)for(var d=0;d<c.length;d++)if(!c[d].removed&&c[d].type===b)return!0;return!1}function G(a,b){for(var c=O(a);c;c=c.parentNode)if(F(P(c),b))return!0;return!1}function H(a){L(a,mb)}function I(b,c,d,e){a.renderAllPending();for(var f=P(nb.call(c.impl,d,e)),h=g(f,this),i=0;i<h.length;i++){var j=h[i];if(j.currentTarget===b)return j.target}return null}function J(a){return function(){var b=$.get(this);return b&&b[a]&&b[a].value||null}}function K(a){var b=a.slice(2);return function(c){var d=$.get(this);d||(d=Object.create(null),$.set(this,d));var e=d[a];if(e&&this.removeEventListener(b,e.wrapped,!1),"function"==typeof c){var f=function(b){var d=c.call(this,b);d===!1?b.preventDefault():"onbeforeunload"===a&&"string"==typeof d&&(b.returnValue=d)};this.addEventListener(b,f,!1),d[a]={value:c,wrapped:f}}}}var L=a.forwardMethodsToWrapper,M=a.mixin,N=a.registerWrapper,O=a.unwrap,P=a.wrap,Q=a.wrappers,R=(new WeakMap,new WeakMap),S=new WeakMap,T=new WeakMap,U=new WeakMap,V=new WeakMap,W=new WeakMap,X=new WeakMap,Y=new WeakMap,Z=new WeakMap,$=new WeakMap,_=new WeakMap;u.prototype={equals:function(a){return this.handler===a.handler&&this.type===a.type&&this.capture===a.capture},get removed(){return null===this.handler},remove:function(){this.handler=null}};var ab=window.Event;ab.prototype.polymerBlackList_={returnValue:!0,keyLocation:!0},v.prototype={get target(){return U.get(this)},get currentTarget(){return V.get(this)},get eventPhase(){return X.get(this)},get path(){var a=new Q.NodeList,b=_.get(this);if(b){for(var c=0,d=b.length-1,e=l(V.get(this)),f=0;d>=f;f++){var g=b[f].currentTarget,h=l(g);n(e,h)&&(f!==d||g instanceof Q.Node)&&(a[c++]=g)}a.length=c}return a},stopPropagation:function(){Y.set(this,!0)},stopImmediatePropagation:function(){Y.set(this,!0),Z.set(this,!0)}},N(ab,v,document.createEvent("Event"));var bb=x("UIEvent",v),cb=x("CustomEvent",v),db={get relatedTarget(){return W.get(this)||P(O(this).relatedTarget)}},eb=M({initMouseEvent:y("initMouseEvent",14)},db),fb=M({initFocusEvent:y("initFocusEvent",5)},db),gb=x("MouseEvent",bb,eb),hb=x("FocusEvent",bb,fb),ib=Object.create(null),jb=function(){try{new window.FocusEvent("focus")}catch(a){return!1}return!0}();if(!jb){var kb=function(a,b,c){if(c){var d=ib[c];b=M(M({},d),b)}ib[a]=b};
kb("Event",{bubbles:!1,cancelable:!1}),kb("CustomEvent",{detail:null},"Event"),kb("UIEvent",{view:null,detail:0},"Event"),kb("MouseEvent",{screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null},"UIEvent"),kb("FocusEvent",{relatedTarget:null},"UIEvent")}A.prototype=Object.create(v.prototype),M(A.prototype,{get returnValue(){return this.impl.returnValue},set returnValue(a){this.impl.returnValue=a}});var lb=window.EventTarget,mb=["addEventListener","removeEventListener","dispatchEvent"];[Node,Window].forEach(function(a){var b=a.prototype;mb.forEach(function(a){Object.defineProperty(b,a+"_",{value:b[a]})})}),D.prototype={addEventListener:function(a,b,c){if(B(b)&&!C(a)){var d=new u(a,b,c),e=R.get(this);if(e){for(var f=0;f<e.length;f++)if(d.equals(e[f]))return}else e=[],R.set(this,e);e.push(d);var g=E(this);g.addEventListener_(a,o,!0)}},removeEventListener:function(a,b,c){c=Boolean(c);var d=R.get(this);if(d){for(var e=0,f=!1,g=0;g<d.length;g++)d[g].type===a&&d[g].capture===c&&(e++,d[g].handler===b&&(f=!0,d[g].remove()));if(f&&1===e){var h=E(this);h.removeEventListener_(a,o,!0)}}},dispatchEvent:function(b){var c=O(b),d=c.type;S.set(c,!1),a.renderAllPending();var e;G(this,d)||(e=function(){},this.addEventListener(d,e,!0));try{return O(this).dispatchEvent_(c)}finally{e&&this.removeEventListener(d,e,!0)}}},lb&&N(lb,D);var nb=document.elementFromPoint;a.adjustRelatedTarget=i,a.elementFromPoint=I,a.getEventHandlerGetter=J,a.getEventHandlerSetter=K,a.wrapEventTargetMethods=H,a.wrappers.BeforeUnloadEvent=A,a.wrappers.CustomEvent=cb,a.wrappers.Event=v,a.wrappers.EventTarget=D,a.wrappers.FocusEvent=hb,a.wrappers.MouseEvent=gb,a.wrappers.UIEvent=bb}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a,b){Object.defineProperty(a,b,{enumerable:!1})}function c(){this.length=0,b(this,"length")}function d(a){if(null==a)return a;for(var b=new c,d=0,e=a.length;e>d;d++)b[d]=f(a[d]);return b.length=e,b}function e(a,b){a.prototype[b]=function(){return d(this.impl[b].apply(this.impl,arguments))}}var f=a.wrap;c.prototype={item:function(a){return this[a]}},b(c.prototype,"item"),a.wrappers.NodeList=c,a.addWrapNodeListMethod=e,a.wrapNodeList=d}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){y(a instanceof v)}function c(a){var b=new x;return b[0]=a,b.length=1,b}function d(a,b,c){A(b,"childList",{removedNodes:c,previousSibling:a.previousSibling,nextSibling:a.nextSibling})}function e(a,b){A(a,"childList",{removedNodes:b})}function f(a,b,d,e){if(a instanceof DocumentFragment){var f=h(a);J=!0;for(var g=f.length-1;g>=0;g--)a.removeChild(f[g]),f[g].parentNode_=b;J=!1;for(var g=0;g<f.length;g++)f[g].previousSibling_=f[g-1]||d,f[g].nextSibling_=f[g+1]||e;return d&&(d.nextSibling_=f[0]),e&&(e.previousSibling_=f[f.length-1]),f}var f=c(a),i=a.parentNode;return i&&i.removeChild(a),a.parentNode_=b,a.previousSibling_=d,a.nextSibling_=e,d&&(d.nextSibling_=a),e&&(e.previousSibling_=a),f}function g(a){if(a instanceof DocumentFragment)return h(a);var b=c(a),e=a.parentNode;return e&&d(a,e,b),b}function h(a){for(var b=new x,c=0,d=a.firstChild;d;d=d.nextSibling)b[c++]=d;return b.length=c,e(a,b),b}function i(a){return a}function j(a){a.nodeIsInserted_()}function k(a){for(var b=0;b<a.length;b++)j(a[b])}function l(){}function m(){}function n(a,b){var c=a.nodeType===v.DOCUMENT_NODE?a:a.ownerDocument;c!==b.ownerDocument&&c.adoptNode(b)}function o(b,c){if(c.length){var d=b.ownerDocument;if(d!==c[0].ownerDocument)for(var e=0;e<c.length;e++)a.adoptNodeNoRemove(c[e],d)}}function p(a,b){o(a,b);var c=b.length;if(1===c)return F(b[0]);for(var d=F(a.ownerDocument.createDocumentFragment()),e=0;c>e;e++)d.appendChild(F(b[e]));return d}function q(a){if(void 0!==a.firstChild_)for(var b=a.firstChild_;b;){var c=b;b=b.nextSibling_,c.parentNode_=c.previousSibling_=c.nextSibling_=void 0}a.firstChild_=a.lastChild_=void 0}function r(a){if(a.invalidateShadowRenderer()){for(var b=a.firstChild;b;){y(b.parentNode===a);var c=b.nextSibling,d=F(b),e=d.parentNode;e&&Q.call(e,d),b.previousSibling_=b.nextSibling_=b.parentNode_=null,b=c}a.firstChild_=a.lastChild_=null}else for(var c,f=F(a),g=f.firstChild;g;)c=g.nextSibling,Q.call(f,g),g=c}function s(a){var b=a.parentNode;return b&&b.invalidateShadowRenderer()}function t(a){for(var b,c=0;c<a.length;c++)b=a[c],b.parentNode.removeChild(b)}function u(a,b,c){var d;if(d=G(c?K.call(c,a.impl,!1):L.call(a.impl,!1)),b){for(var e=a.firstChild;e;e=e.nextSibling)d.appendChild(u(e,!0,c));if(a instanceof I.HTMLTemplateElement)for(var f=d.content,e=a.content.firstChild;e;e=e.nextSibling)f.appendChild(u(e,!0,c))}return d}function v(a){y(a instanceof M),w.call(this,a),this.parentNode_=void 0,this.firstChild_=void 0,this.lastChild_=void 0,this.nextSibling_=void 0,this.previousSibling_=void 0}var w=a.wrappers.EventTarget,x=a.wrappers.NodeList,y=a.assert,z=a.defineWrapGetter,A=a.enqueueMutation,B=a.isWrapper,C=a.mixin,D=a.registerTransientObservers,E=a.registerWrapper,F=a.unwrap,G=a.wrap,H=a.wrapIfNeeded,I=a.wrappers,J=!1,K=document.importNode,L=window.Node.prototype.cloneNode,M=window.Node,N=window.DocumentFragment,O=(M.prototype.appendChild,M.prototype.compareDocumentPosition),P=M.prototype.insertBefore,Q=M.prototype.removeChild,R=M.prototype.replaceChild,S=/Trident/.test(navigator.userAgent),T=S?function(a,b){try{Q.call(a,b)}catch(c){if(!(a instanceof N))throw c}}:function(a,b){Q.call(a,b)};v.prototype=Object.create(w.prototype),C(v.prototype,{appendChild:function(a){return this.insertBefore(a,null)},insertBefore:function(a,c){b(a);var d;c?B(c)?d=F(c):(d=c,c=G(d)):(c=null,d=null),c&&y(c.parentNode===this);var e,h=c?c.previousSibling:this.lastChild,i=!this.invalidateShadowRenderer()&&!s(a);if(e=i?g(a):f(a,this,h,c),i)n(this,a),q(this),P.call(this.impl,F(a),d);else{h||(this.firstChild_=e[0]),c||(this.lastChild_=e[e.length-1]);var j=d?d.parentNode:this.impl;j?P.call(j,p(this,e),d):o(this,e)}return A(this,"childList",{addedNodes:e,nextSibling:c,previousSibling:h}),k(e),a},removeChild:function(a){if(b(a),a.parentNode!==this){for(var d=!1,e=(this.childNodes,this.firstChild);e;e=e.nextSibling)if(e===a){d=!0;break}if(!d)throw new Error("NotFoundError")}var f=F(a),g=a.nextSibling,h=a.previousSibling;if(this.invalidateShadowRenderer()){var i=this.firstChild,j=this.lastChild,k=f.parentNode;k&&T(k,f),i===a&&(this.firstChild_=g),j===a&&(this.lastChild_=h),h&&(h.nextSibling_=g),g&&(g.previousSibling_=h),a.previousSibling_=a.nextSibling_=a.parentNode_=void 0}else q(this),T(this.impl,f);return J||A(this,"childList",{removedNodes:c(a),nextSibling:g,previousSibling:h}),D(this,a),a},replaceChild:function(a,d){b(a);var e;if(B(d)?e=F(d):(e=d,d=G(e)),d.parentNode!==this)throw new Error("NotFoundError");var h,i=d.nextSibling,j=d.previousSibling,m=!this.invalidateShadowRenderer()&&!s(a);return m?h=g(a):(i===a&&(i=a.nextSibling),h=f(a,this,j,i)),m?(n(this,a),q(this),R.call(this.impl,F(a),e)):(this.firstChild===d&&(this.firstChild_=h[0]),this.lastChild===d&&(this.lastChild_=h[h.length-1]),d.previousSibling_=d.nextSibling_=d.parentNode_=void 0,e.parentNode&&R.call(e.parentNode,p(this,h),e)),A(this,"childList",{addedNodes:h,removedNodes:c(d),nextSibling:i,previousSibling:j}),l(d),k(h),d},nodeIsInserted_:function(){for(var a=this.firstChild;a;a=a.nextSibling)a.nodeIsInserted_()},hasChildNodes:function(){return null!==this.firstChild},get parentNode(){return void 0!==this.parentNode_?this.parentNode_:G(this.impl.parentNode)},get firstChild(){return void 0!==this.firstChild_?this.firstChild_:G(this.impl.firstChild)},get lastChild(){return void 0!==this.lastChild_?this.lastChild_:G(this.impl.lastChild)},get nextSibling(){return void 0!==this.nextSibling_?this.nextSibling_:G(this.impl.nextSibling)},get previousSibling(){return void 0!==this.previousSibling_?this.previousSibling_:G(this.impl.previousSibling)},get parentElement(){for(var a=this.parentNode;a&&a.nodeType!==v.ELEMENT_NODE;)a=a.parentNode;return a},get textContent(){for(var a="",b=this.firstChild;b;b=b.nextSibling)b.nodeType!=v.COMMENT_NODE&&(a+=b.textContent);return a},set textContent(a){var b=i(this.childNodes);if(this.invalidateShadowRenderer()){if(r(this),""!==a){var c=this.impl.ownerDocument.createTextNode(a);this.appendChild(c)}}else q(this),this.impl.textContent=a;var d=i(this.childNodes);A(this,"childList",{addedNodes:d,removedNodes:b}),m(b),k(d)},get childNodes(){for(var a=new x,b=0,c=this.firstChild;c;c=c.nextSibling)a[b++]=c;return a.length=b,a},cloneNode:function(a){return u(this,a)},contains:function(a){if(!a)return!1;if(a=H(a),a===this)return!0;var b=a.parentNode;return b?this.contains(b):!1},compareDocumentPosition:function(a){return O.call(this.impl,F(a))},normalize:function(){for(var a,b,c=i(this.childNodes),d=[],e="",f=0;f<c.length;f++)b=c[f],b.nodeType===v.TEXT_NODE?a||b.data.length?a?(e+=b.data,d.push(b)):a=b:this.removeNode(b):(a&&d.length&&(a.data+=e,cleanUpNodes(d)),d=[],e="",a=null,b.childNodes.length&&b.normalize());a&&d.length&&(a.data+=e,t(d))}}),z(v,"ownerDocument"),E(M,v,document.createDocumentFragment()),delete v.prototype.querySelector,delete v.prototype.querySelectorAll,v.prototype=C(Object.create(w.prototype),v.prototype),a.nodeWasAdded=j,a.nodeWasRemoved=l,a.nodesWereAdded=k,a.nodesWereRemoved=m,a.snapshotNodeList=i,a.wrappers.Node=v,a.cloneNode=u}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a,c){for(var d,e=a.firstElementChild;e;){if(e.matches(c))return e;if(d=b(e,c))return d;e=e.nextElementSibling}return null}function c(a,b,d){for(var e=a.firstElementChild;e;)e.matches(b)&&(d[d.length++]=e),c(e,b,d),e=e.nextElementSibling;return d}var d={querySelector:function(a){return b(this,a)},querySelectorAll:function(a){return c(this,a,new NodeList)}},e={getElementsByTagName:function(a){return this.querySelectorAll(a)},getElementsByClassName:function(a){return this.querySelectorAll("."+a)},getElementsByTagNameNS:function(a,b){if("*"===a)return this.getElementsByTagName(b);for(var c=new NodeList,d=this.getElementsByTagName(b),e=0,f=0;e<d.length;e++)d[e].namespaceURI===a&&(c[f++]=d[e]);return c.length=f,c}};a.GetElementsByInterface=e,a.SelectorsInterface=d}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){for(;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}function c(a){for(;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}var d=a.wrappers.NodeList,e={get firstElementChild(){return b(this.firstChild)},get lastElementChild(){return c(this.lastChild)},get childElementCount(){for(var a=0,b=this.firstElementChild;b;b=b.nextElementSibling)a++;return a},get children(){for(var a=new d,b=0,c=this.firstElementChild;c;c=c.nextElementSibling)a[b++]=c;return a.length=b,a}},f={get nextElementSibling(){return b(this.nextSibling)},get previousElementSibling(){return c(this.previousSibling)}};a.ChildNodeInterface=f,a.ParentNodeInterface=e}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){d.call(this,a)}var c=a.ChildNodeInterface,d=a.wrappers.Node,e=a.enqueueMutation,f=a.mixin,g=a.registerWrapper,h=window.CharacterData;b.prototype=Object.create(d.prototype),f(b.prototype,{get textContent(){return this.data},set textContent(a){this.data=a},get data(){return this.impl.data},set data(a){var b=this.impl.data;e(this,"characterData",{oldValue:b}),this.impl.data=a}}),f(b.prototype,c),g(h,b,document.createTextNode("")),a.wrappers.CharacterData=b}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){return a>>>0}function c(a){d.call(this,a)}var d=a.wrappers.CharacterData,e=(a.enqueueMutation,a.mixin),f=a.registerWrapper,g=window.Text;c.prototype=Object.create(d.prototype),e(c.prototype,{splitText:function(a){a=b(a);var c=this.data;if(a>c.length)throw new Error("IndexSizeError");var d=c.slice(0,a),e=c.slice(a);this.data=d;var f=this.ownerDocument.createTextNode(e);return this.parentNode&&this.parentNode.insertBefore(f,this.nextSibling),f}}),f(g,c,document.createTextNode("")),a.wrappers.Text=c}(window.ShadowDOMPolyfill),function(a){"use strict";function b(b,c){var d=b.parentNode;if(d&&d.shadowRoot){var e=a.getRendererForHost(d);e.dependsOnAttribute(c)&&e.invalidate()}}function c(a,b,c){k(a,"attributes",{name:b,namespace:null,oldValue:c})}function d(a){h.call(this,a)}function e(a,c,d){var e=d||c;Object.defineProperty(a,c,{get:function(){return this.impl[c]},set:function(a){this.impl[c]=a,b(this,e)},configurable:!0,enumerable:!0})}var f=a.ChildNodeInterface,g=a.GetElementsByInterface,h=a.wrappers.Node,i=a.ParentNodeInterface,j=a.SelectorsInterface,k=(a.addWrapNodeListMethod,a.enqueueMutation),l=a.mixin,m=(a.oneOf,a.registerWrapper),n=a.wrappers,o=window.Element,p=["matches","mozMatchesSelector","msMatchesSelector","webkitMatchesSelector"].filter(function(a){return o.prototype[a]}),q=p[0],r=o.prototype[q];d.prototype=Object.create(h.prototype),l(d.prototype,{createShadowRoot:function(){var b=new n.ShadowRoot(this);this.impl.polymerShadowRoot_=b;var c=a.getRendererForHost(this);return c.invalidate(),b},get shadowRoot(){return this.impl.polymerShadowRoot_||null},setAttribute:function(a,d){var e=this.impl.getAttribute(a);this.impl.setAttribute(a,d),c(this,a,e),b(this,a)},removeAttribute:function(a){var d=this.impl.getAttribute(a);this.impl.removeAttribute(a),c(this,a,d),b(this,a)},matches:function(a){return r.call(this.impl,a)}}),p.forEach(function(a){"matches"!==a&&(d.prototype[a]=function(a){return this.matches(a)})}),o.prototype.webkitCreateShadowRoot&&(d.prototype.webkitCreateShadowRoot=d.prototype.createShadowRoot),e(d.prototype,"id"),e(d.prototype,"className","class"),l(d.prototype,f),l(d.prototype,g),l(d.prototype,i),l(d.prototype,j),m(o,d,document.createElementNS(null,"x")),a.matchesNames=p,a.wrappers.Element=d}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){switch(a){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case" ":return"&nbsp;"}}function c(a){return a.replace(z,b)}function d(a){return a.replace(A,b)}function e(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}function f(a,b){switch(a.nodeType){case Node.ELEMENT_NODE:for(var e,f=a.tagName.toLowerCase(),h="<"+f,i=a.attributes,j=0;e=i[j];j++)h+=" "+e.name+'="'+c(e.value)+'"';return h+=">",B[f]?h:h+g(a)+"</"+f+">";case Node.TEXT_NODE:var k=a.data;return b&&C[b.localName]?k:d(k);case Node.COMMENT_NODE:return"<!--"+a.data+"-->";default:throw console.error(a),new Error("not implemented")}}function g(a){a instanceof y.HTMLTemplateElement&&(a=a.content);for(var b="",c=a.firstChild;c;c=c.nextSibling)b+=f(c,a);return b}function h(a,b,c){var d=c||"div";a.textContent="";var e=w(a.ownerDocument.createElement(d));e.innerHTML=b;for(var f;f=e.firstChild;)a.appendChild(x(f))}function i(a){o.call(this,a)}function j(a,b){var c=w(a.cloneNode(!1));c.innerHTML=b;for(var d,e=w(document.createDocumentFragment());d=c.firstChild;)e.appendChild(d);return x(e)}function k(b){return function(){return a.renderAllPending(),this.impl[b]}}function l(a){p(i,a,k(a))}function m(b){Object.defineProperty(i.prototype,b,{get:k(b),set:function(c){a.renderAllPending(),this.impl[b]=c},configurable:!0,enumerable:!0})}function n(b){Object.defineProperty(i.prototype,b,{value:function(){return a.renderAllPending(),this.impl[b].apply(this.impl,arguments)},configurable:!0,enumerable:!0})}var o=a.wrappers.Element,p=a.defineGetter,q=a.enqueueMutation,r=a.mixin,s=a.nodesWereAdded,t=a.nodesWereRemoved,u=a.registerWrapper,v=a.snapshotNodeList,w=a.unwrap,x=a.wrap,y=a.wrappers,z=/[&\u00A0"]/g,A=/[&\u00A0<>]/g,B=e(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),C=e(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"]),D=/MSIE/.test(navigator.userAgent),E=window.HTMLElement,F=window.HTMLTemplateElement;i.prototype=Object.create(o.prototype),r(i.prototype,{get innerHTML(){return g(this)},set innerHTML(a){if(D&&C[this.localName])return void(this.textContent=a);var b=v(this.childNodes);this.invalidateShadowRenderer()?this instanceof y.HTMLTemplateElement?h(this.content,a):h(this,a,this.tagName):!F&&this instanceof y.HTMLTemplateElement?h(this.content,a):this.impl.innerHTML=a;var c=v(this.childNodes);q(this,"childList",{addedNodes:c,removedNodes:b}),t(b),s(c)},get outerHTML(){return f(this,this.parentNode)},set outerHTML(a){var b=this.parentNode;if(b){b.invalidateShadowRenderer();var c=j(b,a);b.replaceChild(c,this)}},insertAdjacentHTML:function(a,b){var c,d;switch(String(a).toLowerCase()){case"beforebegin":c=this.parentNode,d=this;break;case"afterend":c=this.parentNode,d=this.nextSibling;break;case"afterbegin":c=this,d=this.firstChild;break;case"beforeend":c=this,d=null;break;default:return}var e=j(c,b);c.insertBefore(e,d)}}),["clientHeight","clientLeft","clientTop","clientWidth","offsetHeight","offsetLeft","offsetTop","offsetWidth","scrollHeight","scrollWidth"].forEach(l),["scrollLeft","scrollTop"].forEach(m),["getBoundingClientRect","getClientRects","scrollIntoView"].forEach(n),u(E,i,document.createElement("b")),a.wrappers.HTMLElement=i,a.getInnerHTML=g,a.setInnerHTML=h}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){c.call(this,a)}var c=a.wrappers.HTMLElement,d=a.mixin,e=a.registerWrapper,f=a.wrap,g=window.HTMLCanvasElement;b.prototype=Object.create(c.prototype),d(b.prototype,{getContext:function(){var a=this.impl.getContext.apply(this.impl,arguments);return a&&f(a)}}),e(g,b,document.createElement("canvas")),a.wrappers.HTMLCanvasElement=b}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){c.call(this,a)}var c=a.wrappers.HTMLElement,d=a.mixin,e=a.registerWrapper,f=window.HTMLContentElement;b.prototype=Object.create(c.prototype),d(b.prototype,{get select(){return this.getAttribute("select")},set select(a){this.setAttribute("select",a)},setAttribute:function(a,b){c.prototype.setAttribute.call(this,a,b),"select"===String(a).toLowerCase()&&this.invalidateShadowRenderer(!0)}}),f&&e(f,b),a.wrappers.HTMLContentElement=b}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){d.call(this,a)}function c(a,b){if(!(this instanceof c))throw new TypeError("DOM object constructor cannot be called as a function.");var e=f(document.createElement("img"));d.call(this,e),g(e,this),void 0!==a&&(e.width=a),void 0!==b&&(e.height=b)}var d=a.wrappers.HTMLElement,e=a.registerWrapper,f=a.unwrap,g=a.rewrap,h=window.HTMLImageElement;b.prototype=Object.create(d.prototype),e(h,b,document.createElement("img")),c.prototype=b.prototype,a.wrappers.HTMLImageElement=b,a.wrappers.Image=c}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){c.call(this,a)}var c=a.wrappers.HTMLElement,d=a.mixin,e=a.registerWrapper,f=window.HTMLShadowElement;b.prototype=Object.create(c.prototype),d(b.prototype,{}),f&&e(f,b),a.wrappers.HTMLShadowElement=b}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){if(!a.defaultView)return a;var b=k.get(a);if(!b){for(b=a.implementation.createHTMLDocument("");b.lastChild;)b.removeChild(b.lastChild);k.set(a,b)}return b}function c(a){for(var c,d=b(a.ownerDocument),e=h(d.createDocumentFragment());c=a.firstChild;)e.appendChild(c);return e}function d(a){if(e.call(this,a),!l){var b=c(a);j.set(this,i(b))}}var e=a.wrappers.HTMLElement,f=a.mixin,g=a.registerWrapper,h=a.unwrap,i=a.wrap,j=new WeakMap,k=new WeakMap,l=window.HTMLTemplateElement;d.prototype=Object.create(e.prototype),f(d.prototype,{get content(){return l?i(this.impl.content):j.get(this)}}),l&&g(l,d),a.wrappers.HTMLTemplateElement=d}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){c.call(this,a)}var c=a.wrappers.HTMLElement,d=a.registerWrapper,e=window.HTMLMediaElement;b.prototype=Object.create(c.prototype),d(e,b,document.createElement("audio")),a.wrappers.HTMLMediaElement=b}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){d.call(this,a)}function c(a){if(!(this instanceof c))throw new TypeError("DOM object constructor cannot be called as a function.");var b=f(document.createElement("audio"));d.call(this,b),g(b,this),b.setAttribute("preload","auto"),void 0!==a&&b.setAttribute("src",a)}var d=a.wrappers.HTMLMediaElement,e=a.registerWrapper,f=a.unwrap,g=a.rewrap,h=window.HTMLAudioElement;b.prototype=Object.create(d.prototype),e(h,b,document.createElement("audio")),c.prototype=b.prototype,a.wrappers.HTMLAudioElement=b,a.wrappers.Audio=c}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){return a.replace(/\s+/g," ").trim()}function c(a){e.call(this,a)}function d(a,b,c,f){if(!(this instanceof d))throw new TypeError("DOM object constructor cannot be called as a function.");var g=i(document.createElement("option"));e.call(this,g),h(g,this),void 0!==a&&(g.text=a),void 0!==b&&g.setAttribute("value",b),c===!0&&g.setAttribute("selected",""),g.selected=f===!0}var e=a.wrappers.HTMLElement,f=a.mixin,g=a.registerWrapper,h=a.rewrap,i=a.unwrap,j=a.wrap,k=window.HTMLOptionElement;c.prototype=Object.create(e.prototype),f(c.prototype,{get text(){return b(this.textContent)},set text(a){this.textContent=b(String(a))},get form(){return j(i(this).form)}}),g(k,c,document.createElement("option")),d.prototype=c.prototype,a.wrappers.HTMLOptionElement=c,a.wrappers.Option=d}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){switch(a.localName){case"content":return new c(a);case"shadow":return new e(a);case"template":return new f(a)}d.call(this,a)}var c=a.wrappers.HTMLContentElement,d=a.wrappers.HTMLElement,e=a.wrappers.HTMLShadowElement,f=a.wrappers.HTMLTemplateElement,g=(a.mixin,a.registerWrapper),h=window.HTMLUnknownElement;b.prototype=Object.create(d.prototype),g(h,b),a.wrappers.HTMLUnknownElement=b}(window.ShadowDOMPolyfill),function(a){"use strict";var b=a.registerObject,c="http://www.w3.org/2000/svg",d=document.createElementNS(c,"title"),e=b(d),f=Object.getPrototypeOf(e.prototype).constructor;a.wrappers.SVGElement=f}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){m.call(this,a)}var c=a.mixin,d=a.registerWrapper,e=a.unwrap,f=a.wrap,g=window.SVGUseElement,h="http://www.w3.org/2000/svg",i=f(document.createElementNS(h,"g")),j=document.createElementNS(h,"use"),k=i.constructor,l=Object.getPrototypeOf(k.prototype),m=l.constructor;b.prototype=Object.create(l),"instanceRoot"in j&&c(b.prototype,{get instanceRoot(){return f(e(this).instanceRoot)},get animatedInstanceRoot(){return f(e(this).animatedInstanceRoot)}}),d(g,b,j),a.wrappers.SVGUseElement=b}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){c.call(this,a)}var c=a.wrappers.EventTarget,d=a.mixin,e=a.registerWrapper,f=a.wrap,g=window.SVGElementInstance;g&&(b.prototype=Object.create(c.prototype),d(b.prototype,{get correspondingElement(){return f(this.impl.correspondingElement)},get correspondingUseElement(){return f(this.impl.correspondingUseElement)},get parentNode(){return f(this.impl.parentNode)},get childNodes(){throw new Error("Not implemented")},get firstChild(){return f(this.impl.firstChild)},get lastChild(){return f(this.impl.lastChild)},get previousSibling(){return f(this.impl.previousSibling)},get nextSibling(){return f(this.impl.nextSibling)}}),e(g,b),a.wrappers.SVGElementInstance=b)}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){this.impl=a}var c=a.mixin,d=a.registerWrapper,e=a.unwrap,f=a.unwrapIfNeeded,g=a.wrap,h=window.CanvasRenderingContext2D;c(b.prototype,{get canvas(){return g(this.impl.canvas)},drawImage:function(){arguments[0]=f(arguments[0]),this.impl.drawImage.apply(this.impl,arguments)},createPattern:function(){return arguments[0]=e(arguments[0]),this.impl.createPattern.apply(this.impl,arguments)}}),d(h,b,document.createElement("canvas").getContext("2d")),a.wrappers.CanvasRenderingContext2D=b}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){this.impl=a}var c=a.mixin,d=a.registerWrapper,e=a.unwrapIfNeeded,f=a.wrap,g=window.WebGLRenderingContext;if(g){c(b.prototype,{get canvas(){return f(this.impl.canvas)},texImage2D:function(){arguments[5]=e(arguments[5]),this.impl.texImage2D.apply(this.impl,arguments)},texSubImage2D:function(){arguments[6]=e(arguments[6]),this.impl.texSubImage2D.apply(this.impl,arguments)}});var h=/WebKit/.test(navigator.userAgent)?{drawingBufferHeight:null,drawingBufferWidth:null}:{};d(g,b,h),a.wrappers.WebGLRenderingContext=b}}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){this.impl=a}var c=a.registerWrapper,d=a.unwrap,e=a.unwrapIfNeeded,f=a.wrap,g=window.Range;b.prototype={get startContainer(){return f(this.impl.startContainer)},get endContainer(){return f(this.impl.endContainer)},get commonAncestorContainer(){return f(this.impl.commonAncestorContainer)},setStart:function(a,b){this.impl.setStart(e(a),b)},setEnd:function(a,b){this.impl.setEnd(e(a),b)},setStartBefore:function(a){this.impl.setStartBefore(e(a))},setStartAfter:function(a){this.impl.setStartAfter(e(a))},setEndBefore:function(a){this.impl.setEndBefore(e(a))},setEndAfter:function(a){this.impl.setEndAfter(e(a))},selectNode:function(a){this.impl.selectNode(e(a))},selectNodeContents:function(a){this.impl.selectNodeContents(e(a))},compareBoundaryPoints:function(a,b){return this.impl.compareBoundaryPoints(a,d(b))},extractContents:function(){return f(this.impl.extractContents())},cloneContents:function(){return f(this.impl.cloneContents())},insertNode:function(a){this.impl.insertNode(e(a))},surroundContents:function(a){this.impl.surroundContents(e(a))},cloneRange:function(){return f(this.impl.cloneRange())},isPointInRange:function(a,b){return this.impl.isPointInRange(e(a),b)},comparePoint:function(a,b){return this.impl.comparePoint(e(a),b)},intersectsNode:function(a){return this.impl.intersectsNode(e(a))},toString:function(){return this.impl.toString()}},g.prototype.createContextualFragment&&(b.prototype.createContextualFragment=function(a){return f(this.impl.createContextualFragment(a))}),c(window.Range,b,document.createRange()),a.wrappers.Range=b}(window.ShadowDOMPolyfill),function(a){"use strict";var b=a.GetElementsByInterface,c=a.ParentNodeInterface,d=a.SelectorsInterface,e=a.mixin,f=a.registerObject,g=f(document.createDocumentFragment());e(g.prototype,c),e(g.prototype,d),e(g.prototype,b);var h=f(document.createComment(""));a.wrappers.Comment=h,a.wrappers.DocumentFragment=g}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){var b=i(a.impl.ownerDocument.createDocumentFragment());c.call(this,b),g(b,this);var d=a.shadowRoot;k.set(this,d),j.set(this,a)}var c=a.wrappers.DocumentFragment,d=a.elementFromPoint,e=a.getInnerHTML,f=a.mixin,g=a.rewrap,h=a.setInnerHTML,i=a.unwrap,j=new WeakMap,k=new WeakMap,l=/[ \t\n\r\f]/;b.prototype=Object.create(c.prototype),f(b.prototype,{get innerHTML(){return e(this)},set innerHTML(a){h(this,a),this.invalidateShadowRenderer()},get olderShadowRoot(){return k.get(this)||null},get host(){return j.get(this)||null},invalidateShadowRenderer:function(){return j.get(this).invalidateShadowRenderer()},elementFromPoint:function(a,b){return d(this,this.ownerDocument,a,b)},getElementById:function(a){return l.test(a)?null:this.querySelector('[id="'+a+'"]')}}),a.wrappers.ShadowRoot=b}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){a.previousSibling_=a.previousSibling,a.nextSibling_=a.nextSibling,a.parentNode_=a.parentNode}function c(a,c,e){var f=F(a),g=F(c),h=e?F(e):null;if(d(c),b(c),e)a.firstChild===e&&(a.firstChild_=e),e.previousSibling_=e.previousSibling;else{a.lastChild_=a.lastChild,a.lastChild===a.firstChild&&(a.firstChild_=a.firstChild);var i=G(f.lastChild);i&&(i.nextSibling_=i.nextSibling)}f.insertBefore(g,h)}function d(a){var c=F(a),d=c.parentNode;if(d){var e=G(d);b(a),a.previousSibling&&(a.previousSibling.nextSibling_=a),a.nextSibling&&(a.nextSibling.previousSibling_=a),e.lastChild===a&&(e.lastChild_=a),e.firstChild===a&&(e.firstChild_=a),d.removeChild(c)}}function e(a,b){g(b).push(a),x(a,b);var c=I.get(a);c||I.set(a,c=[]),c.push(b)}function f(a){H.set(a,[])}function g(a){return H.get(a)}function h(a){for(var b=[],c=0,d=a.firstChild;d;d=d.nextSibling)b[c++]=d;return b}function i(a,b,c){for(var d=a.firstChild;d;d=d.nextSibling)if(b(d)){if(c(d)===!1)return}else i(d,b,c)}function j(a,b){var c=b.getAttribute("select");if(!c)return!0;if(c=c.trim(),!c)return!0;if(!(a instanceof z))return!1;if("*"===c||c===a.localName)return!0;if(!L.test(c))return!1;if(":"===c[0]&&!M.test(c))return!1;try{return a.matches(c)}catch(d){return!1}}function k(){for(var a=0;a<O.length;a++)O[a].render();O=[]}function l(){y=null,k()}function m(a){var b=K.get(a);return b||(b=new q(a),K.set(a,b)),b}function n(a){for(;a;a=a.parentNode)if(a instanceof D)return a;return null}function o(a){return m(a.host)}function p(a){this.skip=!1,this.node=a,this.childNodes=[]}function q(a){this.host=a,this.dirty=!1,this.invalidateAttributes(),this.associateNode(a)}function r(a){return a instanceof A}function s(a){return a instanceof A}function t(a){return a instanceof B}function u(a){return a instanceof B}function v(a){return a.shadowRoot}function w(a){for(var b=[],c=a.shadowRoot;c;c=c.olderShadowRoot)b.push(c);return b}function x(a,b){J.set(a,b)}var y,z=a.wrappers.Element,A=a.wrappers.HTMLContentElement,B=a.wrappers.HTMLShadowElement,C=a.wrappers.Node,D=a.wrappers.ShadowRoot,E=(a.assert,a.mixin,a.oneOf),F=a.unwrap,G=a.wrap,H=new WeakMap,I=new WeakMap,J=new WeakMap,K=new WeakMap,L=/^[*.:#[a-zA-Z_|]/,M=new RegExp("^:("+["link","visited","target","enabled","disabled","checked","indeterminate","nth-child","nth-last-child","nth-of-type","nth-last-of-type","first-child","last-child","first-of-type","last-of-type","only-of-type"].join("|")+")"),N=E(window,["requestAnimationFrame","mozRequestAnimationFrame","webkitRequestAnimationFrame","setTimeout"]),O=[],P=new ArraySplice;P.equals=function(a,b){return F(a.node)===b},p.prototype={append:function(a){var b=new p(a);return this.childNodes.push(b),b},sync:function(a){if(!this.skip){for(var b=this.node,e=this.childNodes,f=h(F(b)),g=a||new WeakMap,i=P.calculateSplices(e,f),j=0,k=0,l=0,m=0;m<i.length;m++){for(var n=i[m];l<n.index;l++)k++,e[j++].sync(g);for(var o=n.removed.length,p=0;o>p;p++){var q=G(f[k++]);g.get(q)||d(q)}for(var r=n.addedCount,s=f[k]&&G(f[k]),p=0;r>p;p++){var t=e[j++],u=t.node;c(b,u,s),g.set(u,!0),t.sync(g)}l+=r}for(var m=l;m<e.length;m++)e[m].sync(g)}}},q.prototype={render:function(a){if(this.dirty){this.invalidateAttributes(),this.treeComposition();var b=this.host,c=b.shadowRoot;this.associateNode(b);for(var d=!e,e=a||new p(b),f=c.firstChild;f;f=f.nextSibling)this.renderNode(c,e,f,!1);d&&e.sync(),this.dirty=!1}},invalidate:function(){if(!this.dirty){if(this.dirty=!0,O.push(this),y)return;y=window[N](l,0)}},renderNode:function(a,b,c,d){if(v(c)){b=b.append(c);var e=m(c);e.dirty=!0,e.render(b)}else r(c)?this.renderInsertionPoint(a,b,c,d):t(c)?this.renderShadowInsertionPoint(a,b,c):this.renderAsAnyDomTree(a,b,c,d)},renderAsAnyDomTree:function(a,b,c,d){if(b=b.append(c),v(c)){var e=m(c);b.skip=!e.dirty,e.render(b)}else for(var f=c.firstChild;f;f=f.nextSibling)this.renderNode(a,b,f,d)},renderInsertionPoint:function(a,b,c,d){var e=g(c);if(e.length){this.associateNode(c);for(var f=0;f<e.length;f++){var h=e[f];r(h)&&d?this.renderInsertionPoint(a,b,h,d):this.renderAsAnyDomTree(a,b,h,d)}}else this.renderFallbackContent(a,b,c);this.associateNode(c.parentNode)},renderShadowInsertionPoint:function(a,b,c){var d=a.olderShadowRoot;if(d){x(d,c),this.associateNode(c.parentNode);for(var e=d.firstChild;e;e=e.nextSibling)this.renderNode(d,b,e,!0)}else this.renderFallbackContent(a,b,c)},renderFallbackContent:function(a,b,c){this.associateNode(c),this.associateNode(c.parentNode);for(var d=c.firstChild;d;d=d.nextSibling)this.renderAsAnyDomTree(a,b,d,!1)},invalidateAttributes:function(){this.attributes=Object.create(null)},updateDependentAttributes:function(a){if(a){var b=this.attributes;/\.\w+/.test(a)&&(b["class"]=!0),/#\w+/.test(a)&&(b.id=!0),a.replace(/\[\s*([^\s=\|~\]]+)/g,function(a,c){b[c]=!0})}},dependsOnAttribute:function(a){return this.attributes[a]},distribute:function(a,b){var c=this;
i(a,s,function(a){f(a),c.updateDependentAttributes(a.getAttribute("select"));for(var d=0;d<b.length;d++){var g=b[d];void 0!==g&&j(g,a)&&(e(g,a),b[d]=void 0)}})},treeComposition:function(){for(var a=this.host,b=a.shadowRoot,c=[],d=a.firstChild;d;d=d.nextSibling)if(r(d)){var e=g(d);e&&e.length||(e=h(d)),c.push.apply(c,e)}else c.push(d);for(var f,j;b;){if(f=void 0,i(b,u,function(a){return f=a,!1}),j=f,this.distribute(b,c),j){var k=b.olderShadowRoot;if(k){b=k,x(b,j);continue}break}break}},associateNode:function(a){a.impl.polymerShadowRenderer_=this}},C.prototype.invalidateShadowRenderer=function(){var a=this.impl.polymerShadowRenderer_;return a?(a.invalidate(),!0):!1},A.prototype.getDistributedNodes=function(){return k(),g(this)},B.prototype.nodeIsInserted_=A.prototype.nodeIsInserted_=function(){this.invalidateShadowRenderer();var a,b=n(this);b&&(a=o(b)),this.impl.polymerShadowRenderer_=a,a&&a.invalidate()},a.eventParentsTable=I,a.getRendererForHost=m,a.getShadowTrees=w,a.insertionParentTable=J,a.renderAllPending=k,a.visual={insertBefore:c,remove:d}}(window.ShadowDOMPolyfill),function(a){"use strict";function b(b){if(window[b]){d(!a.wrappers[b]);var i=function(a){c.call(this,a)};i.prototype=Object.create(c.prototype),e(i.prototype,{get form(){return h(g(this).form)}}),f(window[b],i,document.createElement(b.slice(4,-7))),a.wrappers[b]=i}}var c=a.wrappers.HTMLElement,d=a.assert,e=a.mixin,f=a.registerWrapper,g=a.unwrap,h=a.wrap,i=["HTMLButtonElement","HTMLFieldSetElement","HTMLInputElement","HTMLKeygenElement","HTMLLabelElement","HTMLLegendElement","HTMLObjectElement","HTMLOutputElement","HTMLSelectElement","HTMLTextAreaElement"];i.forEach(b)}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){this.impl=a}{var c=a.registerWrapper,d=a.unwrap,e=a.unwrapIfNeeded,f=a.wrap;window.Selection}b.prototype={get anchorNode(){return f(this.impl.anchorNode)},get focusNode(){return f(this.impl.focusNode)},addRange:function(a){this.impl.addRange(d(a))},collapse:function(a,b){this.impl.collapse(e(a),b)},containsNode:function(a,b){return this.impl.containsNode(e(a),b)},extend:function(a,b){this.impl.extend(e(a),b)},getRangeAt:function(a){return f(this.impl.getRangeAt(a))},removeRange:function(a){this.impl.removeRange(d(a))},selectAllChildren:function(a){this.impl.selectAllChildren(e(a))},toString:function(){return this.impl.toString()}},c(window.Selection,b,window.getSelection()),a.wrappers.Selection=b}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){k.call(this,a)}function c(a){var c=document[a];b.prototype[a]=function(){return z(c.apply(this.impl,arguments))}}function d(a,b){C.call(b.impl,y(a)),e(a,b)}function e(a,b){a.shadowRoot&&b.adoptNode(a.shadowRoot),a instanceof o&&f(a,b);for(var c=a.firstChild;c;c=c.nextSibling)e(c,b)}function f(a,b){var c=a.olderShadowRoot;c&&b.adoptNode(c)}function g(a){this.impl=a}function h(a,b){var c=document.implementation[b];a.prototype[b]=function(){return z(c.apply(this.impl,arguments))}}function i(a,b){var c=document.implementation[b];a.prototype[b]=function(){return c.apply(this.impl,arguments)}}var j=a.GetElementsByInterface,k=a.wrappers.Node,l=a.ParentNodeInterface,m=a.wrappers.Selection,n=a.SelectorsInterface,o=a.wrappers.ShadowRoot,p=a.cloneNode,q=a.defineWrapGetter,r=a.elementFromPoint,s=a.forwardMethodsToWrapper,t=a.matchesNames,u=a.mixin,v=a.registerWrapper,w=a.renderAllPending,x=a.rewrap,y=a.unwrap,z=a.wrap,A=a.wrapEventTargetMethods,B=(a.wrapNodeList,new WeakMap);b.prototype=Object.create(k.prototype),q(b,"documentElement"),q(b,"body"),q(b,"head"),["createComment","createDocumentFragment","createElement","createElementNS","createEvent","createEventNS","createRange","createTextNode","getElementById"].forEach(c);var C=document.adoptNode,D=document.getSelection;if(u(b.prototype,{adoptNode:function(a){return a.parentNode&&a.parentNode.removeChild(a),d(a,this),a},elementFromPoint:function(a,b){return r(this,this,a,b)},importNode:function(a,b){return p(a,b,this.impl)},getSelection:function(){return w(),new m(D.call(y(this)))}}),document.registerElement){var E=document.registerElement;b.prototype.registerElement=function(b,c){function d(a){return a?void(this.impl=a):c.extends?document.createElement(c.extends,b):document.createElement(b)}var e=c.prototype;if(a.nativePrototypeTable.get(e))throw new Error("NotSupportedError");for(var f,g=Object.getPrototypeOf(e),h=[];g&&!(f=a.nativePrototypeTable.get(g));)h.push(g),g=Object.getPrototypeOf(g);if(!f)throw new Error("NotSupportedError");for(var i=Object.create(f),j=h.length-1;j>=0;j--)i=Object.create(i);["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"].forEach(function(a){var b=e[a];b&&(i[a]=function(){z(this)instanceof d||x(this),b.apply(z(this),arguments)})});var k={prototype:i};c.extends&&(k.extends=c.extends),d.prototype=e,d.prototype.constructor=d,a.constructorTable.set(i,d),a.nativePrototypeTable.set(e,i);E.call(y(this),b,k);return d},s([window.HTMLDocument||window.Document],["registerElement"])}s([window.HTMLBodyElement,window.HTMLDocument||window.Document,window.HTMLHeadElement,window.HTMLHtmlElement],["appendChild","compareDocumentPosition","contains","getElementsByClassName","getElementsByTagName","getElementsByTagNameNS","insertBefore","querySelector","querySelectorAll","removeChild","replaceChild"].concat(t)),s([window.HTMLDocument||window.Document],["adoptNode","importNode","contains","createComment","createDocumentFragment","createElement","createElementNS","createEvent","createEventNS","createRange","createTextNode","elementFromPoint","getElementById","getSelection"]),u(b.prototype,j),u(b.prototype,l),u(b.prototype,n),u(b.prototype,{get implementation(){var a=B.get(this);return a?a:(a=new g(y(this).implementation),B.set(this,a),a)}}),v(window.Document,b,document.implementation.createHTMLDocument("")),window.HTMLDocument&&v(window.HTMLDocument,b),A([window.HTMLBodyElement,window.HTMLDocument||window.Document,window.HTMLHeadElement]),h(g,"createDocumentType"),h(g,"createDocument"),h(g,"createHTMLDocument"),i(g,"hasFeature"),v(window.DOMImplementation,g),s([window.DOMImplementation],["createDocumentType","createDocument","createHTMLDocument","hasFeature"]),a.adoptNodeNoRemove=d,a.wrappers.DOMImplementation=g,a.wrappers.Document=b}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){c.call(this,a)}var c=a.wrappers.EventTarget,d=a.wrappers.Selection,e=a.mixin,f=a.registerWrapper,g=a.renderAllPending,h=a.unwrap,i=a.unwrapIfNeeded,j=a.wrap,k=window.Window,l=window.getComputedStyle,m=window.getSelection;b.prototype=Object.create(c.prototype),k.prototype.getComputedStyle=function(a,b){return j(this||window).getComputedStyle(i(a),b)},k.prototype.getSelection=function(){return j(this||window).getSelection()},delete window.getComputedStyle,delete window.getSelection,["addEventListener","removeEventListener","dispatchEvent"].forEach(function(a){k.prototype[a]=function(){var b=j(this||window);return b[a].apply(b,arguments)},delete window[a]}),e(b.prototype,{getComputedStyle:function(a,b){return g(),l.call(h(this),i(a),b)},getSelection:function(){return g(),new d(m.call(h(this)))}}),f(k,b),a.wrappers.Window=b}(window.ShadowDOMPolyfill),function(a){"use strict";function b(a){var b=c[a],d=window[b];if(d){var e=document.createElement(a),f=e.constructor;window[b]=f}}var c=(a.isWrapperFor,{a:"HTMLAnchorElement",area:"HTMLAreaElement",br:"HTMLBRElement",base:"HTMLBaseElement",body:"HTMLBodyElement",button:"HTMLButtonElement",dl:"HTMLDListElement",datalist:"HTMLDataListElement",data:"HTMLDataElement",dir:"HTMLDirectoryElement",div:"HTMLDivElement",embed:"HTMLEmbedElement",fieldset:"HTMLFieldSetElement",font:"HTMLFontElement",form:"HTMLFormElement",frame:"HTMLFrameElement",frameset:"HTMLFrameSetElement",hr:"HTMLHRElement",head:"HTMLHeadElement",h1:"HTMLHeadingElement",html:"HTMLHtmlElement",iframe:"HTMLIFrameElement",input:"HTMLInputElement",li:"HTMLLIElement",label:"HTMLLabelElement",legend:"HTMLLegendElement",link:"HTMLLinkElement",map:"HTMLMapElement",marquee:"HTMLMarqueeElement",menu:"HTMLMenuElement",menuitem:"HTMLMenuItemElement",meta:"HTMLMetaElement",meter:"HTMLMeterElement",del:"HTMLModElement",ol:"HTMLOListElement",object:"HTMLObjectElement",optgroup:"HTMLOptGroupElement",option:"HTMLOptionElement",output:"HTMLOutputElement",p:"HTMLParagraphElement",param:"HTMLParamElement",pre:"HTMLPreElement",progress:"HTMLProgressElement",q:"HTMLQuoteElement",script:"HTMLScriptElement",select:"HTMLSelectElement",source:"HTMLSourceElement",span:"HTMLSpanElement",style:"HTMLStyleElement",time:"HTMLTimeElement",caption:"HTMLTableCaptionElement",col:"HTMLTableColElement",table:"HTMLTableElement",tr:"HTMLTableRowElement",thead:"HTMLTableSectionElement",tbody:"HTMLTableSectionElement",textarea:"HTMLTextAreaElement",track:"HTMLTrackElement",title:"HTMLTitleElement",ul:"HTMLUListElement",video:"HTMLVideoElement"});Object.keys(c).forEach(b),Object.getOwnPropertyNames(a.wrappers).forEach(function(b){window[b]=a.wrappers[b]}),a.knownElements=c}(window.ShadowDOMPolyfill),function(){window.wrap=ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=ShadowDOMPolyfill.unwrapIfNeeded,Object.defineProperty(Element.prototype,"webkitShadowRoot",Object.getOwnPropertyDescriptor(Element.prototype,"shadowRoot"));var a=Element.prototype.createShadowRoot;Element.prototype.createShadowRoot=function(){var b=a.call(this);return CustomElements.watchShadow(this),b},Element.prototype.webkitCreateShadowRoot=Element.prototype.createShadowRoot}(),function(a){function b(a,b){var c="";return Array.prototype.forEach.call(a,function(a){c+=a.textContent+"\n\n"}),b||(c=c.replace(h,"")),c}function c(a){var b=document.createElement("style");return b.textContent=a,b}function d(a){var b=c(a);document.head.appendChild(b);var d=b.sheet.cssRules;return b.parentNode.removeChild(b),d}function e(a){a&&f().appendChild(document.createTextNode(a))}function f(){return o||(o=document.createElement("style"),o.setAttribute(q,""),o[q]=!0),o}var g={strictStyling:!1,registry:{},shimStyling:function(a,b,d){var f=this.isTypeExtension(d),g=this.registerDefinition(a,b,d);this.strictStyling&&this.applyScopeToContent(a,b);var h=this.stylesToShimmedCssText(g.rootStyles,g.scopeStyles,b,f);g.shimmedStyle=c(h),a&&(a.shimmedStyle=g.shimmedStyle);for(var i,j=0,k=g.rootStyles.length;k>j&&(i=g.rootStyles[j]);j++)i.parentNode.removeChild(i);e(h)},stylesToShimmedCssText:function(a,b,c,d){c=c||"",this.insertPolyfillDirectives(a),this.insertPolyfillRules(a);var e=this.shimScoping(b,c,d);return e+=this.extractPolyfillUnscopedRules(a),e.trim()},registerDefinition:function(a,b,c){var d=this.registry[b]={root:a,name:b,extendsName:c},e=a?a.querySelectorAll("style"):[];e=e?Array.prototype.slice.call(e,0):[],d.rootStyles=e,d.scopeStyles=d.rootStyles;var f=this.registry[d.extendsName];return!f||a&&!a.querySelector("shadow")||(d.scopeStyles=f.scopeStyles.concat(d.scopeStyles)),d},isTypeExtension:function(a){return a&&a.indexOf("-")<0},applyScopeToContent:function(a,b){a&&(Array.prototype.forEach.call(a.querySelectorAll("*"),function(a){a.setAttribute(b,"")}),Array.prototype.forEach.call(a.querySelectorAll("template"),function(a){this.applyScopeToContent(a.content,b)},this))},insertPolyfillDirectives:function(a){a&&Array.prototype.forEach.call(a,function(a){a.textContent=this.insertPolyfillDirectivesInCssText(a.textContent)},this)},insertPolyfillDirectivesInCssText:function(a){return a.replace(i,function(a,b){return b.slice(0,-2)+"{"})},insertPolyfillRules:function(a){a&&Array.prototype.forEach.call(a,function(a){a.textContent=this.insertPolyfillRulesInCssText(a.textContent)},this)},insertPolyfillRulesInCssText:function(a){return a.replace(j,function(a,b){return b.slice(0,-1)})},extractPolyfillUnscopedRules:function(a){var b="";return a&&Array.prototype.forEach.call(a,function(a){b+=this.extractPolyfillUnscopedRulesFromCssText(a.textContent)+"\n\n"},this),b},extractPolyfillUnscopedRulesFromCssText:function(a){for(var b,c="";b=k.exec(a);)c+=b[1].slice(0,-1)+"\n\n";return c},shimScoping:function(a,b,c){return a?this.convertScopedStyles(a,b,c):void 0},convertScopedStyles:function(a,c,e){var f=b(a);if(f=this.insertPolyfillHostInCssText(f),f=this.convertColonHost(f),f=this.convertColonAncestor(f),f=this.convertCombinators(f),c){var g=d(f);f=this.scopeRules(g,c,e)}return f},convertColonHost:function(a){return this.convertColonRule(a,cssColonHostRe,this.colonHostPartReplacer)},convertColonAncestor:function(a){return this.convertColonRule(a,cssColonAncestorRe,this.colonAncestorPartReplacer)},convertColonRule:function(a,b,c){return a.replace(b,function(a,b,d,e){if(b=polyfillHostNoCombinator,d){for(var f,g=d.split(","),h=[],i=0,j=g.length;j>i&&(f=g[i]);i++)f=f.trim(),h.push(c(b,f,e));return h.join(",")}return b+e})},colonAncestorPartReplacer:function(a,b,c){return b.match(l)?this.colonHostPartReplacer(a,b,c):a+b+c+", "+b+" "+a+c},colonHostPartReplacer:function(a,b,c){return a+b.replace(l,"")+c},convertCombinators:function(a){return a.replace(/\^\^/g," ").replace(/\^/g," ")},scopeRules:function(a,b,c){var d="";return Array.prototype.forEach.call(a,function(a){a.selectorText&&a.style&&a.style.cssText?(d+=this.scopeSelector(a.selectorText,b,c,this.strictStyling)+" {\n	",d+=this.propertiesFromRule(a)+"\n}\n\n"):a.media?(d+="@media "+a.media.mediaText+" {\n",d+=this.scopeRules(a.cssRules,b,c),d+="\n}\n\n"):a.cssText&&(d+=a.cssText+"\n\n")},this),d},scopeSelector:function(a,b,c,d){var e=[],f=a.split(",");return f.forEach(function(a){a=a.trim(),this.selectorNeedsScoping(a,b,c)&&(a=d&&!a.match(polyfillHostNoCombinator)?this.applyStrictSelectorScope(a,b):this.applySimpleSelectorScope(a,b,c)),e.push(a)},this),e.join(", ")},selectorNeedsScoping:function(a,b,c){var d=this.makeScopeMatcher(b,c);return!a.match(d)},makeScopeMatcher:function(a,b){var c=b?"\\[is=['\"]?"+a+"['\"]?\\]":a;return new RegExp("^("+c+")"+selectorReSuffix,"m")},applySimpleSelectorScope:function(a,b,c){var d=c?"[is="+b+"]":b;return a.match(polyfillHostRe)?(a=a.replace(polyfillHostNoCombinator,d),a.replace(polyfillHostRe,d+" ")):d+" "+a},applyStrictSelectorScope:function(a,b){var c=[" ",">","+","~"],d=a,e="["+b+"]";return c.forEach(function(a){var b=d.split(a);d=b.map(function(a){var b=a.trim().replace(polyfillHostRe,"");return b&&c.indexOf(b)<0&&b.indexOf(e)<0&&(a=b.replace(/([^:]*)(:*)(.*)/,"$1"+e+"$2$3")),a}).join(a)}),d},insertPolyfillHostInCssText:function(a){return a.replace(hostRe,l).replace(colonHostRe,l).replace(colonAncestorRe,m)},propertiesFromRule:function(a){return a.style.content&&!a.style.content.match(/['"]+/)?a.style.cssText.replace(/content:[^;]*;/g,"content: '"+a.style.content+"';"):a.style.cssText}},h=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,i=/\/\*\s*@polyfill ([^*]*\*+([^/*][^*]*\*+)*\/)([^{]*?){/gim,j=/\/\*\s@polyfill-rule([^*]*\*+([^/*][^*]*\*+)*)\//gim,k=/\/\*\s@polyfill-unscoped-rule([^*]*\*+([^/*][^*]*\*+)*)\//gim,l="-shadowcsshost",m="-shadowcssancestor",n=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";cssColonHostRe=new RegExp("("+l+n,"gim"),cssColonAncestorRe=new RegExp("("+m+n,"gim"),selectorReSuffix="([>\\s~+[.,{:][\\s\\S]*)?$",hostRe=/@host/gim,colonHostRe=/\:host/gim,colonAncestorRe=/\:ancestor/gim,polyfillHostNoCombinator=l+"-no-combinator",polyfillHostRe=new RegExp(l,"gim"),polyfillAncestorRe=new RegExp(m,"gim");var o,p="shim-shadowdom",q="shim-shadowdom-css";if(window.ShadowDOMPolyfill){e("style { display: none !important; }\n");var r=wrap(document),s=r.querySelector("head");s.insertBefore(f(),s.childNodes[0]),document.addEventListener("DOMContentLoaded",function(){var b=a.urlResolver;if(window.HTMLImports&&!HTMLImports.useNative){var c="link[rel=stylesheet]["+p+"]",d="style["+p+"]";HTMLImports.importer.documentPreloadSelectors+=","+c,HTMLImports.importer.importsPreloadSelectors+=","+c,HTMLImports.parser.documentSelectors=[HTMLImports.parser.documentSelectors,c,d].join(",");var e=HTMLImports.parser.parseGeneric;HTMLImports.parser.parseGeneric=function(a){if(!a[q]){var c=a.__importElement||a;if(!c.hasAttribute(p))return void e.call(this,a);a.__resource?(c=a.ownerDocument.createElement("style"),c.textContent=b.resolveCssText(a.__resource,a.href)):b.resolveStyle(c);var d=[c];c.textContent=g.stylesToShimmedCssText(d,d),c.removeAttribute(p,""),c.setAttribute(q,""),c[q]=!0,c.parentNode!==s&&(a.parentNode===s?s.replaceChild(c,a):s.appendChild(c)),c.__importParsed=!0,this.markParsingComplete(a)}};var f=HTMLImports.parser.hasResource;HTMLImports.parser.hasResource=function(a){return"link"===a.localName&&"stylesheet"===a.rel&&a.hasAttribute(p)?a.__resource:f.call(this,a)}}})}a.ShadowCSS=g}(window.Platform)):!function(){window.templateContent=window.templateContent||function(a){return a.content},window.wrap=window.unwrap=function(a){return a};var a=Element.prototype.webkitCreateShadowRoot;Element.prototype.webkitCreateShadowRoot=function(){var b=this.webkitShadowRoot,c=a.call(this);return c.olderShadowRoot=b,c.host=this,CustomElements.watchShadow(this),c},Object.defineProperties(Element.prototype,{shadowRoot:{get:function(){return this.webkitShadowRoot}},createShadowRoot:{value:function(){return this.webkitCreateShadowRoot()}}}),window.templateContent=function(a){if(window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(a),!a.content&&!a._content){for(var b=document.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);a._content=b}return a.content||a._content}}(),function(a){"use strict";function b(a){return void 0!==m[a]}function c(){h.call(this),this._isInvalid=!0}function d(a){return""==a&&c.call(this),a.toLowerCase()}function e(a){var b=a.charCodeAt(0);return b>32&&127>b&&-1==[34,35,60,62,63,96].indexOf(b)?a:encodeURIComponent(a)}function f(a){var b=a.charCodeAt(0);return b>32&&127>b&&-1==[34,35,60,62,96].indexOf(b)?a:encodeURIComponent(a)}function g(a,g,h){function i(a){t.push(a)}var j=g||"scheme start",k=0,l="",r=!1,s=!1,t=[];a:for(;(a[k-1]!=o||0==k)&&!this._isInvalid;){var u=a[k];switch(j){case"scheme start":if(!u||!p.test(u)){if(g){i("Invalid scheme.");break a}l="",j="no scheme";continue}l+=u.toLowerCase(),j="scheme";break;case"scheme":if(u&&q.test(u))l+=u.toLowerCase();else{if(":"!=u){if(g){if(o==u)break a;i("Code point not allowed in scheme: "+u);break a}l="",k=0,j="no scheme";continue}if(this._scheme=l,l="",g)break a;b(this._scheme)&&(this._isRelative=!0),j="file"==this._scheme?"relative":this._isRelative&&h&&h._scheme==this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break;case"scheme data":"?"==u?(query="?",j="query"):"#"==u?(this._fragment="#",j="fragment"):o!=u&&"	"!=u&&"\n"!=u&&"\r"!=u&&(this._schemeData+=e(u));break;case"no scheme":if(h&&b(h._scheme)){j="relative";continue}i("Missing scheme."),c.call(this);break;case"relative or authority":if("/"!=u||"/"!=a[k+1]){i("Expected /, got: "+u),j="relative";continue}j="authority ignore slashes";break;case"relative":if(this._isRelative=!0,"file"!=this._scheme&&(this._scheme=h._scheme),o==u){this._host=h._host,this._port=h._port,this._path=h._path.slice(),this._query=h._query;break a}if("/"==u||"\\"==u)"\\"==u&&i("\\ is an invalid code point."),j="relative slash";else if("?"==u)this._host=h._host,this._port=h._port,this._path=h._path.slice(),this._query="?",j="query";else{if("#"!=u){var v=a[k+1],w=a[k+2];("file"!=this._scheme||!p.test(u)||":"!=v&&"|"!=v||o!=w&&"/"!=w&&"\\"!=w&&"?"!=w&&"#"!=w)&&(this._host=h._host,this._port=h._port,this._path=h._path.slice(),this._path.pop()),j="relative path";continue}this._host=h._host,this._port=h._port,this._path=h._path.slice(),this._query=h._query,this._fragment="#",j="fragment"}break;case"relative slash":if("/"!=u&&"\\"!=u){"file"!=this._scheme&&(this._host=h._host,this._port=h._port),j="relative path";continue}"\\"==u&&i("\\ is an invalid code point."),j="file"==this._scheme?"file host":"authority ignore slashes";break;case"authority first slash":if("/"!=u){i("Expected '/', got: "+u),j="authority ignore slashes";continue}j="authority second slash";break;case"authority second slash":if(j="authority ignore slashes","/"!=u){i("Expected '/', got: "+u);continue}break;case"authority ignore slashes":if("/"!=u&&"\\"!=u){j="authority";continue}i("Expected authority, got: "+u);break;case"authority":if("@"==u){r&&(i("@ already seen."),l+="%40"),r=!0;for(var x=0;x<l.length;x++){var y=l[x];if("	"!=y&&"\n"!=y&&"\r"!=y)if(":"!=y||null!==this._password){var z=e(y);null!==this._password?this._password+=z:this._username+=z}else this._password="";else i("Invalid whitespace in authority.")}l=""}else{if(o==u||"/"==u||"\\"==u||"?"==u||"#"==u){k-=l.length,l="",j="host";continue}l+=u}break;case"file host":if(o==u||"/"==u||"\\"==u||"?"==u||"#"==u){2!=l.length||!p.test(l[0])||":"!=l[1]&&"|"!=l[1]?0==l.length?j="relative path start":(this._host=d.call(this,l),l="",j="relative path start"):j="relative path";continue}"	"==u||"\n"==u||"\r"==u?i("Invalid whitespace in file host."):l+=u;break;case"host":case"hostname":if(":"!=u||s){if(o==u||"/"==u||"\\"==u||"?"==u||"#"==u){if(this._host=d.call(this,l),l="",j="relative path start",g)break a;continue}"	"!=u&&"\n"!=u&&"\r"!=u?("["==u?s=!0:"]"==u&&(s=!1),l+=u):i("Invalid code point in host/hostname: "+u)}else if(this._host=d.call(this,l),l="",j="port","hostname"==g)break a;break;case"port":if(/[0-9]/.test(u))l+=u;else{if(o==u||"/"==u||"\\"==u||"?"==u||"#"==u||g){if(""!=l){var A=parseInt(l,10);A!=m[this._scheme]&&(this._port=A+""),l=""}if(g)break a;j="relative path start";continue}"	"==u||"\n"==u||"\r"==u?i("Invalid code point in port: "+u):c.call(this)}break;case"relative path start":if("\\"==u&&i("'\\' not allowed in path."),j="relative path","/"!=u&&"\\"!=u)continue;break;case"relative path":if(o!=u&&"/"!=u&&"\\"!=u&&(g||"?"!=u&&"#"!=u))"	"!=u&&"\n"!=u&&"\r"!=u&&(l+=e(u));else{"\\"==u&&i("\\ not allowed in relative path.");var B;(B=n[l.toLowerCase()])&&(l=B),".."==l?(this._path.pop(),"/"!=u&&"\\"!=u&&this._path.push("")):"."==l&&"/"!=u&&"\\"!=u?this._path.push(""):"."!=l&&("file"==this._scheme&&0==this._path.length&&2==l.length&&p.test(l[0])&&"|"==l[1]&&(l=l[0]+":"),this._path.push(l)),l="","?"==u?(this._query="?",j="query"):"#"==u&&(this._fragment="#",j="fragment")}break;case"query":g||"#"!=u?o!=u&&"	"!=u&&"\n"!=u&&"\r"!=u&&(this._query+=f(u)):(this._fragment="#",j="fragment");break;case"fragment":o!=u&&"	"!=u&&"\n"!=u&&"\r"!=u&&(this._fragment+=u)}k++}}function h(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function i(a,b){void 0===b||b instanceof i||(b=new i(String(b))),this._url=a,h.call(this);var c=a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");g.call(this,c,null,b)}var j=!1;if(!a.forceJURL)try{var k=new URL("b","http://a");j="http://a/b"===k.href}catch(l){}if(!j){var m=Object.create(null);m.ftp=21,m.file=0,m.gopher=70,m.http=80,m.https=443,m.ws=80,m.wss=443;var n=Object.create(null);n["%2e"]=".",n[".%2e"]="..",n["%2e."]="..",n["%2e%2e"]="..";var o=void 0,p=/[a-zA-Z]/,q=/[a-zA-Z0-9\+\-\.]/;i.prototype={get href(){if(this._isInvalid)return this._url;var a="";return(""!=this._username||null!=this._password)&&(a=this._username+(null!=this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+a+this.host:"")+this.pathname+this._query+this._fragment},set href(a){h.call(this),g.call(this,a)},get protocol(){return this._scheme+":"},set protocol(a){this._isInvalid||g.call(this,a+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(a){!this._isInvalid&&this._isRelative&&g.call(this,a,"host")},get hostname(){return this._host},set hostname(a){!this._isInvalid&&this._isRelative&&g.call(this,a,"hostname")},get port(){return this._port},set port(a){!this._isInvalid&&this._isRelative&&g.call(this,a,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(a){!this._isInvalid&&this._isRelative&&(this._path=[],g.call(this,a,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"==this._query?"":this._query},set search(a){!this._isInvalid&&this._isRelative&&(this._query="?","?"==a[0]&&(a=a.slice(1)),g.call(this,a,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"==this._fragment?"":this._fragment},set hash(a){this._isInvalid||(this._fragment="#","#"==a[0]&&(a=a.slice(1)),g.call(this,a,"fragment"))}},a.URL=i}}(window),function(a){function b(a){for(var b=a||{},d=1;d<arguments.length;d++){var e=arguments[d];try{for(var f in e)c(f,e,b)}catch(g){}}return b}function c(a,b,c){var e=d(b,a);Object.defineProperty(c,a,e)}function d(a,b){if(a){var c=Object.getOwnPropertyDescriptor(a,b);return c||d(Object.getPrototypeOf(a),b)}}Function.prototype.bind||(Function.prototype.bind=function(a){var b=this,c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),b.apply(a,d)}}),a.mixin=b}(window.Platform),function(a){"use strict";function b(a,b,c){var d="string"==typeof a?document.createElement(a):a.cloneNode(!0);if(d.innerHTML=b,c)for(var e in c)d.setAttribute(e,c[e]);return d}var c=DOMTokenList.prototype.add,d=DOMTokenList.prototype.remove;DOMTokenList.prototype.add=function(){for(var a=0;a<arguments.length;a++)c.call(this,arguments[a])},DOMTokenList.prototype.remove=function(){for(var a=0;a<arguments.length;a++)d.call(this,arguments[a])},DOMTokenList.prototype.toggle=function(a,b){1==arguments.length&&(b=!this.contains(a)),b?this.add(a):this.remove(a)},DOMTokenList.prototype.switch=function(a,b){a&&this.remove(a),b&&this.add(b)};var e=function(){return Array.prototype.slice.call(this)},f=window.NamedNodeMap||window.MozNamedAttrMap||{};if(NodeList.prototype.array=e,f.prototype.array=e,HTMLCollection.prototype.array=e,!window.performance){var g=Date.now();window.performance={now:function(){return Date.now()-g}}}window.requestAnimationFrame||(window.requestAnimationFrame=function(){var a=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return a?function(b){return a(function(){b(performance.now())})}:function(a){return window.setTimeout(a,1e3/60)}}()),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(){return window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(a){clearTimeout(a)}}());var h=document.createElement("template"),i=document.createElement("base");i.href=document.baseURI,h.content.ownerDocument.appendChild(i);var j=[],k=function(){j.push(arguments)};window.Polymer=k,a.deliverDeclarations=function(){return a.deliverDeclarations=function(){throw"Possible attempt to load Polymer twice"},j},window.addEventListener("DOMContentLoaded",function(){window.Polymer===k&&(window.Polymer=function(){console.error('You tried to use polymer without loading it first. To load polymer, <link rel="import" href="components/polymer/polymer.html">')})}),a.createDOM=b}(window.Platform),window.templateContent=window.templateContent||function(a){return a.content},function(a){a=a||(window.Inspector={});var b;window.sinspect=function(a,d){b||(b=window.open("","ShadowDOM Inspector",null,!0),b.document.write(c),b.api={shadowize:shadowize}),f(a||wrap(document.body),d)};var c=["<!DOCTYPE html>","<html>","  <head>","    <title>ShadowDOM Inspector</title>","    <style>","      body {","      }","      pre {",'        font: 9pt "Courier New", monospace;',"        line-height: 1.5em;","      }","      tag {","        color: purple;","      }","      ul {","         margin: 0;","         padding: 0;","         list-style: none;","      }","      li {","         display: inline-block;","         background-color: #f1f1f1;","         padding: 4px 6px;","         border-radius: 4px;","         margin-right: 4px;","      }","    </style>","  </head>","  <body>",'    <ul id="crumbs">',"    </ul>",'    <div id="tree"></div>',"  </body>","</html>"].join("\n"),d=[],e=function(){var a=b.document,c=a.querySelector("#crumbs");c.textContent="";for(var e,g=0;e=d[g];g++){var h=a.createElement("a");h.href="#",h.textContent=e.localName,h.idx=g,h.onclick=function(a){for(var b;d.length>this.idx;)b=d.pop();f(b.shadow||b,b),a.preventDefault()},c.appendChild(a.createElement("li")).appendChild(h)}},f=function(a,c){var f=b.document;k=[];var g=c||a;d.push(g),e(),f.body.querySelector("#tree").innerHTML="<pre>"+j(a,a.childNodes)+"</pre>"},g=Array.prototype.forEach.call.bind(Array.prototype.forEach),h={STYLE:1,SCRIPT:1,"#comment":1,TEMPLATE:1},i=function(a){return h[a.nodeName]},j=function(a,b,c){if(i(a))return"";var d=c||"";if(a.localName||11==a.nodeType){var e=a.localName||"shadow-root",f=d+l(a);"content"==e&&(b=a.getDistributedNodes()),f+="<br/>";var h=d+"&nbsp;&nbsp;";g(b,function(a){f+=j(a,a.childNodes,h)}),f+=d,{br:1}[e]||(f+="<tag>&lt;/"+e+"&gt;</tag>",f+="<br/>")}else{var k=a.textContent.trim();f=k?d+'"'+k+'"<br/>':""}return f},k=[],l=function(a){var b="<tag>&lt;",c=a.localName||"shadow-root";return a.webkitShadowRoot||a.shadowRoot?(b+=' <button idx="'+k.length+'" onclick="api.shadowize.call(this)">'+c+"</button>",k.push(a)):b+=c||"shadow-root",a.attributes&&g(a.attributes,function(a){b+=" "+a.name+(a.value?'="'+a.value+'"':"")}),b+="&gt;</tag>"};shadowize=function(){var a=Number(this.attributes.idx.value),b=k[a];b?f(b.webkitShadowRoot||b.shadowRoot,b):(console.log("bad shadowize node"),console.dir(this))},a.output=j}(window.Inspector),function(){var a=document.createElement("style");a.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; } \n";var b=document.querySelector("head");b.insertBefore(a,b.firstChild)}(Platform),function(a){function b(a,b){return b=b||[],b.map||(b=[b]),a.apply(this,b.map(d))}function c(a,c,d){var e;switch(arguments.length){case 0:return;case 1:e=null;break;case 2:e=c.apply(this);break;default:e=b(d,c)}f[a]=e}function d(a){return f[a]}function e(a,c){HTMLImports.whenImportsReady(function(){b(c,a)})}var f={};a.marshal=d,a.module=c,a.using=e}(window),function(a){function b(a){f.textContent=d++,e.push(a)}function c(){for(;e.length;)e.shift()()}var d=0,e=[],f=document.createTextNode("");new(window.MutationObserver||JsMutationObserver)(c).observe(f,{characterData:!0}),a.endOfMicrotask=b}(Platform),function(a){function b(a,b,d){return a.replace(d,function(a,d,e,f){var g=e.replace(/["']/g,"");return g=c(b,g),d+"'"+g+"'"+f})}function c(a,b){var c=new URL(b,a);return d(c.href)}function d(a){var b=document.baseURI,c=new URL(a,b);return c.host===b.host&&c.port===b.port&&c.protocol===b.protocol?e(b.pathname,c.pathname):a}function e(a,b){for(var c=a.split("/"),d=b.split("/");c.length&&c[0]===d[0];)c.shift(),d.shift();for(var e=0,f=c.length-1;f>e;e++)d.unshift("..");return d.join("/")}var f={resolveDom:function(a,b){b=b||a.ownerDocument.baseURI,this.resolveAttributes(a,b),this.resolveStyles(a,b);var c=a.querySelectorAll("template");if(c)for(var d,e=0,f=c.length;f>e&&(d=c[e]);e++)d.content&&this.resolveDom(d.content,b)},resolveTemplate:function(a){this.resolveDom(a.content,a.ownerDocument.baseURI)},resolveStyles:function(a,b){var c=a.querySelectorAll("style");if(c)for(var d,e=0,f=c.length;f>e&&(d=c[e]);e++)this.resolveStyle(d,b)},resolveStyle:function(a,b){b=b||a.ownerDocument.baseURI,a.textContent=this.resolveCssText(a.textContent,b)},resolveCssText:function(a,c){return a=b(a,c,g),b(a,c,h)},resolveAttributes:function(a,b){a.hasAttributes&&a.hasAttributes()&&this.resolveElementAttributes(a,b);var c=a&&a.querySelectorAll(j);if(c)for(var d,e=0,f=c.length;f>e&&(d=c[e]);e++)this.resolveElementAttributes(d,b)},resolveElementAttributes:function(a,b){b=b||a.ownerDocument.baseURI,i.forEach(function(d){var e=a.attributes[d];if(e&&e.value&&e.value.search(k)<0){var f=c(b,e.value);e.value=f}})}},g=/(url\()([^)]*)(\))/g,h=/(@import[\s]+(?!url\())([^;]*)(;)/g,i=["href","src","action"],j="["+i.join("],[")+"]",k="{{.*}}";a.urlResolver=f}(Platform),function(a){function b(a){u.push(a),t||(t=!0,q(d))
}function c(a){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(a)||a}function d(){t=!1;var a=u;u=[],a.sort(function(a,b){return a.uid_-b.uid_});var b=!1;a.forEach(function(a){var c=a.takeRecords();e(a),c.length&&(a.callback_(c,a),b=!0)}),b&&d()}function e(a){a.nodes_.forEach(function(b){var c=p.get(b);c&&c.forEach(function(b){b.observer===a&&b.removeTransientObservers()})})}function f(a,b){for(var c=a;c;c=c.parentNode){var d=p.get(c);if(d)for(var e=0;e<d.length;e++){var f=d[e],g=f.options;if(c===a||g.subtree){var h=b(g);h&&f.enqueue(h)}}}}function g(a){this.callback_=a,this.nodes_=[],this.records_=[],this.uid_=++v}function h(a,b){this.type=a,this.target=b,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function i(a){var b=new h(a.type,a.target);return b.addedNodes=a.addedNodes.slice(),b.removedNodes=a.removedNodes.slice(),b.previousSibling=a.previousSibling,b.nextSibling=a.nextSibling,b.attributeName=a.attributeName,b.attributeNamespace=a.attributeNamespace,b.oldValue=a.oldValue,b}function j(a,b){return w=new h(a,b)}function k(a){return x?x:(x=i(w),x.oldValue=a,x)}function l(){w=x=void 0}function m(a){return a===x||a===w}function n(a,b){return a===b?a:x&&m(a)?x:null}function o(a,b,c){this.observer=a,this.target=b,this.options=c,this.transientObservedNodes=[]}var p=new WeakMap,q=window.msSetImmediate;if(!q){var r=[],s=String(Math.random());window.addEventListener("message",function(a){if(a.data===s){var b=r;r=[],b.forEach(function(a){a()})}}),q=function(a){r.push(a),window.postMessage(s,"*")}}var t=!1,u=[],v=0;g.prototype={observe:function(a,b){if(a=c(a),!b.childList&&!b.attributes&&!b.characterData||b.attributeOldValue&&!b.attributes||b.attributeFilter&&b.attributeFilter.length&&!b.attributes||b.characterDataOldValue&&!b.characterData)throw new SyntaxError;var d=p.get(a);d||p.set(a,d=[]);for(var e,f=0;f<d.length;f++)if(d[f].observer===this){e=d[f],e.removeListeners(),e.options=b;break}e||(e=new o(this,a,b),d.push(e),this.nodes_.push(a)),e.addListeners()},disconnect:function(){this.nodes_.forEach(function(a){for(var b=p.get(a),c=0;c<b.length;c++){var d=b[c];if(d.observer===this){d.removeListeners(),b.splice(c,1);break}}},this),this.records_=[]},takeRecords:function(){var a=this.records_;return this.records_=[],a}};var w,x;o.prototype={enqueue:function(a){var c=this.observer.records_,d=c.length;if(c.length>0){var e=c[d-1],f=n(e,a);if(f)return void(c[d-1]=f)}else b(this.observer);c[d]=a},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(a){var b=this.options;b.attributes&&a.addEventListener("DOMAttrModified",this,!0),b.characterData&&a.addEventListener("DOMCharacterDataModified",this,!0),b.childList&&a.addEventListener("DOMNodeInserted",this,!0),(b.childList||b.subtree)&&a.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(a){var b=this.options;b.attributes&&a.removeEventListener("DOMAttrModified",this,!0),b.characterData&&a.removeEventListener("DOMCharacterDataModified",this,!0),b.childList&&a.removeEventListener("DOMNodeInserted",this,!0),(b.childList||b.subtree)&&a.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(a){if(a!==this.target){this.addListeners_(a),this.transientObservedNodes.push(a);var b=p.get(a);b||p.set(a,b=[]),b.push(this)}},removeTransientObservers:function(){var a=this.transientObservedNodes;this.transientObservedNodes=[],a.forEach(function(a){this.removeListeners_(a);for(var b=p.get(a),c=0;c<b.length;c++)if(b[c]===this){b.splice(c,1);break}},this)},handleEvent:function(a){switch(a.stopImmediatePropagation(),a.type){case"DOMAttrModified":var b=a.attrName,c=a.relatedNode.namespaceURI,d=a.target,e=new j("attributes",d);e.attributeName=b,e.attributeNamespace=c;var g=a.attrChange===MutationEvent.ADDITION?null:a.prevValue;f(d,function(a){return!a.attributes||a.attributeFilter&&a.attributeFilter.length&&-1===a.attributeFilter.indexOf(b)&&-1===a.attributeFilter.indexOf(c)?void 0:a.attributeOldValue?k(g):e});break;case"DOMCharacterDataModified":var d=a.target,e=j("characterData",d),g=a.prevValue;f(d,function(a){return a.characterData?a.characterDataOldValue?k(g):e:void 0});break;case"DOMNodeRemoved":this.addTransientObserver(a.target);case"DOMNodeInserted":var h,i,d=a.relatedNode,m=a.target;"DOMNodeInserted"===a.type?(h=[m],i=[]):(h=[],i=[m]);var n=m.previousSibling,o=m.nextSibling,e=j("childList",d);e.addedNodes=h,e.removedNodes=i,e.previousSibling=n,e.nextSibling=o,f(d,function(a){return a.childList?e:void 0})}l()}},a.JsMutationObserver=g,a.MutationObserver||(a.MutationObserver=g)}(this),window.HTMLImports=window.HTMLImports||{flags:{}},function(a){var b=(a.path,a.xhr),c=a.flags,d=function(a,b){this.cache={},this.onload=a,this.oncomplete=b,this.inflight=0,this.pending={}};d.prototype={addNodes:function(a){this.inflight+=a.length;for(var b,c=0,d=a.length;d>c&&(b=a[c]);c++)this.require(b);this.checkDone()},addNode:function(a){this.inflight++,this.require(a),this.checkDone()},require:function(a){var b=a.src||a.href;a.__nodeUrl=b,this.dedupe(b,a)||this.fetch(b,a)},dedupe:function(a,b){if(this.pending[a])return this.pending[a].push(b),!0;return this.cache[a]?(this.onload(a,b,this.cache[a]),this.tail(),!0):(this.pending[a]=[b],!1)},fetch:function(a,d){c.load&&console.log("fetch",a,d);var e=function(b,c){this.receive(a,d,b,c)}.bind(this);b.load(a,e)},receive:function(a,b,c,d){this.cache[a]=d;for(var e,f=this.pending[a],g=0,h=f.length;h>g&&(e=f[g]);g++)this.onload(a,e,d),this.tail();this.pending[a]=null},tail:function(){--this.inflight,this.checkDone()},checkDone:function(){this.inflight||this.oncomplete()}},b=b||{async:!0,ok:function(a){return a.status>=200&&a.status<300||304===a.status||0===a.status},load:function(c,d,e){var f=new XMLHttpRequest;return(a.flags.debug||a.flags.bust)&&(c+="?"+Math.random()),f.open("GET",c,b.async),f.addEventListener("readystatechange",function(){4===f.readyState&&d.call(e,!b.ok(f)&&f,f.response||f.responseText,c)}),f.send(),f},loadDocument:function(a,b,c){this.load(a,b,c).responseType="document"}},a.xhr=b,a.Loader=d}(window.HTMLImports),function(a){function b(a){return"link"===a.localName&&a.rel===g}function c(a){var b=d(a);return"data:text/javascript;base64,"+btoa(b)}function d(a){return a.textContent+e(a)}function e(a){var b=a.__nodeUrl;if(!b){b=a.ownerDocument.baseURI;var c="["+Math.floor(1e3*(Math.random()+1))+"]",d=a.textContent.match(/Polymer\(['"]([^'"]*)/);c=d&&d[1]||c,b+="/"+c+".js"}return"\n//# sourceURL="+b+"\n"}function f(a){var b=a.ownerDocument.createElement("style");return b.textContent=a.textContent,n.resolveUrlsInStyle(b),b}var g="import",h=a.flags,i=/Trident/.test(navigator.userAgent),j=window.ShadowDOMPolyfill?window.ShadowDOMPolyfill.wrapIfNeeded(document):document,k={documentSelectors:"link[rel="+g+"]",importsSelectors:["link[rel="+g+"]","link[rel=stylesheet]","style","script:not([type])",'script[type="text/javascript"]'].join(","),map:{link:"parseLink",script:"parseScript",style:"parseStyle"},parseNext:function(){var a=this.nextToParse();a&&this.parse(a)},parse:function(a){if(this.isParsed(a))return void(h.parse&&console.log("[%s] is already parsed",a.localName));var b=this[this.map[a.localName]];b&&(this.markParsing(a),b.call(this,a))},markParsing:function(a){h.parse&&console.log("parsing",a),this.parsingElement=a},markParsingComplete:function(a){a.__importParsed=!0,a.__importElement&&(a.__importElement.__importParsed=!0),this.parsingElement=null,h.parse&&console.log("completed",a),this.parseNext()},parseImport:function(a){if(a.import.__importParsed=!0,HTMLImports.__importsParsingHook&&HTMLImports.__importsParsingHook(a),a.dispatchEvent(a.__resource?new CustomEvent("load",{bubbles:!1}):new CustomEvent("error",{bubbles:!1})),a.__pending)for(var b;a.__pending.length;)b=a.__pending.shift(),b&&b({target:a});this.markParsingComplete(a)},parseLink:function(a){b(a)?this.parseImport(a):(a.href=a.href,this.parseGeneric(a))},parseStyle:function(a){var b=a;a=f(a),a.__importElement=b,this.parseGeneric(a)},parseGeneric:function(a){this.trackElement(a),document.head.appendChild(a)},trackElement:function(a,b){var c=this,d=function(d){b&&b(d),c.markParsingComplete(a)};if(a.addEventListener("load",d),a.addEventListener("error",d),i&&"style"===a.localName){var e=!1;if(-1==a.textContent.indexOf("@import"))e=!0;else if(a.sheet){e=!0;for(var f,g=a.sheet.cssRules,h=g?g.length:0,j=0;h>j&&(f=g[j]);j++)f.type===CSSRule.IMPORT_RULE&&(e=e&&Boolean(f.styleSheet))}e&&a.dispatchEvent(new CustomEvent("load",{bubbles:!1}))}},parseScript:function(b){var d=document.createElement("script");d.__importElement=b,d.src=b.src?b.src:c(b),a.currentScript=b,this.trackElement(d,function(){d.parentNode.removeChild(d),a.currentScript=null}),document.head.appendChild(d)},nextToParse:function(){return!this.parsingElement&&this.nextToParseInDoc(j)},nextToParseInDoc:function(a,c){for(var d,e=a.querySelectorAll(this.parseSelectorsForNode(a)),f=0,g=e.length;g>f&&(d=e[f]);f++)if(!this.isParsed(d))return this.hasResource(d)?b(d)?this.nextToParseInDoc(d.import,d):d:void 0;return c},parseSelectorsForNode:function(a){var b=a.ownerDocument||a;return b===j?this.documentSelectors:this.importsSelectors},isParsed:function(a){return a.__importParsed},hasResource:function(a){return b(a)&&!a.import?!1:!0}},l=/(url\()([^)]*)(\))/g,m=/(@import[\s]+(?!url\())([^;]*)(;)/g,n={resolveUrlsInStyle:function(a){var b=a.ownerDocument,c=b.createElement("a");return a.textContent=this.resolveUrlsInCssText(a.textContent,c),a},resolveUrlsInCssText:function(a,b){var c=this.replaceUrls(a,b,l);return c=this.replaceUrls(c,b,m)},replaceUrls:function(a,b,c){return a.replace(c,function(a,c,d,e){var f=d.replace(/["']/g,"");return b.href=f,f=b.href,c+"'"+f+"'"+e})}};a.parser=k,a.path=n,a.isIE=i}(HTMLImports),function(a){function b(a){return c(a,m)}function c(a,b){return"link"===a.localName&&a.getAttribute("rel")===b}function d(a,b){var c=a;c instanceof Document||(c=document.implementation.createHTMLDocument(m)),c._URL=b;var d=c.createElement("base");d.setAttribute("href",b),c.baseURI||(c.baseURI=b);var e=c.createElement("meta");return e.setAttribute("charset","utf-8"),c.head.appendChild(e),c.head.appendChild(d),a instanceof Document||(c.body.innerHTML=a),window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(c),c}function e(a,b){b=b||n,g(function(){h(a,b)},b)}function f(a){return"complete"===a.readyState||a.readyState===u}function g(a,b){if(f(b))a&&a();else{var c=function(){("complete"===b.readyState||b.readyState===u)&&(b.removeEventListener(v,c),g(a,b))};b.addEventListener(v,c)}}function h(a,b){function c(){f==g&&requestAnimationFrame(a)}function d(){f++,c()}var e=b.querySelectorAll("link[rel=import]"),f=0,g=e.length;if(g)for(var h,j=0;g>j&&(h=e[j]);j++)i(h)?d.call(h):(h.addEventListener("load",d),h.addEventListener("error",d));else c()}function i(a){return k?a.import&&"loading"!==a.import.readyState:a.__importParsed}var j="import"in document.createElement("link"),k=j,l=a.flags,m="import",n=window.ShadowDOMPolyfill?ShadowDOMPolyfill.wrapIfNeeded(document):document;if(k)var o={};else var p=(a.xhr,a.Loader),q=a.parser,o={documents:{},documentPreloadSelectors:"link[rel="+m+"]",importsPreloadSelectors:["link[rel="+m+"]"].join(","),loadNode:function(a){r.addNode(a)},loadSubtree:function(a){var b=this.marshalNodes(a);r.addNodes(b)},marshalNodes:function(a){return a.querySelectorAll(this.loadSelectorsForNode(a))},loadSelectorsForNode:function(a){var b=a.ownerDocument||a;return b===n?this.documentPreloadSelectors:this.importsPreloadSelectors},loaded:function(a,c,e){if(l.load&&console.log("loaded",a,c),c.__resource=e,b(c)){var f=this.documents[a];f||(f=d(e,a),f.__importLink=c,this.bootDocument(f),this.documents[a]=f),c.import=f}q.parseNext()},bootDocument:function(a){this.loadSubtree(a),this.observe(a),q.parseNext()},loadedAll:function(){q.parseNext()}},r=new p(o.loaded.bind(o),o.loadedAll.bind(o));var s={get:function(){return HTMLImports.currentScript||document.currentScript},configurable:!0};if(Object.defineProperty(document,"_currentScript",s),Object.defineProperty(n,"_currentScript",s),!document.baseURI){var t={get:function(){return window.location.href},configurable:!0};Object.defineProperty(document,"baseURI",t),Object.defineProperty(n,"baseURI",t)}var u=HTMLImports.isIE?"complete":"interactive",v="readystatechange";a.hasNative=j,a.useNative=k,a.importer=o,a.whenImportsReady=e,a.IMPORT_LINK_TYPE=m,a.isImportLoaded=i,a.importLoader=r}(window.HTMLImports),function(a){function b(a){for(var b,d=0,e=a.length;e>d&&(b=a[d]);d++)"childList"===b.type&&b.addedNodes.length&&c(b.addedNodes)}function c(a){for(var b,e=0,g=a.length;g>e&&(b=a[e]);e++)d(b)&&f.loadNode(b),b.children&&b.children.length&&c(b.children)}function d(a){return 1===a.nodeType&&g.call(a,f.loadSelectorsForNode(a))}function e(a){h.observe(a,{childList:!0,subtree:!0})}var f=(a.IMPORT_LINK_TYPE,a.importer),g=HTMLElement.prototype.matches||HTMLElement.prototype.matchesSelector||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector,h=new MutationObserver(b);a.observe=e,f.observe=e}(HTMLImports),function(){function a(){HTMLImports.importer.bootDocument(b)}"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(a,b){var c=document.createEvent("HTMLEvents");return c.initEvent(a,b.bubbles===!1?!1:!0,b.cancelable===!1?!1:!0,b.detail),c});var b=window.ShadowDOMPolyfill?window.ShadowDOMPolyfill.wrapIfNeeded(document):document;HTMLImports.whenImportsReady(function(){HTMLImports.ready=!0,HTMLImports.readyTime=(new Date).getTime(),b.dispatchEvent(new CustomEvent("HTMLImportsLoaded",{bubbles:!0}))}),HTMLImports.useNative||("complete"===document.readyState||"interactive"===document.readyState&&!window.attachEvent?a():document.addEventListener("DOMContentLoaded",a))}(),window.CustomElements=window.CustomElements||{flags:{}},function(a){function b(a,c,d){var e=a.firstElementChild;if(!e)for(e=a.firstChild;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.nextSibling;for(;e;)c(e,d)!==!0&&b(e,c,d),e=e.nextElementSibling;return null}function c(a,b){for(var c=a.shadowRoot;c;)d(c,b),c=c.olderShadowRoot}function d(a,d){b(a,function(a){return d(a)?!0:void c(a,d)}),c(a,d)}function e(a){return h(a)?(i(a),!0):void l(a)}function f(a){d(a,function(a){return e(a)?!0:void 0})}function g(a){return e(a)||f(a)}function h(b){if(!b.__upgraded__&&b.nodeType===Node.ELEMENT_NODE){var c=b.getAttribute("is")||b.localName,d=a.registry[c];if(d)return A.dom&&console.group("upgrade:",b.localName),a.upgrade(b),A.dom&&console.groupEnd(),!0}}function i(a){l(a),r(a)&&d(a,function(a){l(a)})}function j(a){if(E.push(a),!D){D=!0;var b=window.Platform&&window.Platform.endOfMicrotask||setTimeout;b(k)}}function k(){D=!1;for(var a,b=E,c=0,d=b.length;d>c&&(a=b[c]);c++)a();E=[]}function l(a){C?j(function(){m(a)}):m(a)}function m(a){(a.attachedCallback||a.detachedCallback||a.__upgraded__&&A.dom)&&(A.dom&&console.group("inserted:",a.localName),r(a)&&(a.__inserted=(a.__inserted||0)+1,a.__inserted<1&&(a.__inserted=1),a.__inserted>1?A.dom&&console.warn("inserted:",a.localName,"insert/remove count:",a.__inserted):a.attachedCallback&&(A.dom&&console.log("inserted:",a.localName),a.attachedCallback())),A.dom&&console.groupEnd())}function n(a){o(a),d(a,function(a){o(a)})}function o(a){C?j(function(){p(a)}):p(a)}function p(a){(a.attachedCallback||a.detachedCallback||a.__upgraded__&&A.dom)&&(A.dom&&console.group("removed:",a.localName),r(a)||(a.__inserted=(a.__inserted||0)-1,a.__inserted>0&&(a.__inserted=0),a.__inserted<0?A.dom&&console.warn("removed:",a.localName,"insert/remove count:",a.__inserted):a.detachedCallback&&a.detachedCallback()),A.dom&&console.groupEnd())}function q(a){return window.ShadowDOMPolyfill?ShadowDOMPolyfill.wrapIfNeeded(a):a}function r(a){for(var b=a,c=q(document);b;){if(b==c)return!0;b=b.parentNode||b.host}}function s(a){if(a.shadowRoot&&!a.shadowRoot.__watched){A.dom&&console.log("watching shadow-root for: ",a.localName);for(var b=a.shadowRoot;b;)t(b),b=b.olderShadowRoot}}function t(a){a.__watched||(w(a),a.__watched=!0)}function u(a){if(A.dom){var b=a[0];if(b&&"childList"===b.type&&b.addedNodes&&b.addedNodes){for(var c=b.addedNodes[0];c&&c!==document&&!c.host;)c=c.parentNode;var d=c&&(c.URL||c._URL||c.host&&c.host.localName)||"";d=d.split("/?").shift().split("/").pop()}console.group("mutations (%d) [%s]",a.length,d||"")}a.forEach(function(a){"childList"===a.type&&(G(a.addedNodes,function(a){a.localName&&g(a)}),G(a.removedNodes,function(a){a.localName&&n(a)}))}),A.dom&&console.groupEnd()}function v(){u(F.takeRecords()),k()}function w(a){F.observe(a,{childList:!0,subtree:!0})}function x(a){w(a)}function y(a){A.dom&&console.group("upgradeDocument: ",a.baseURI.split("/").pop()),g(a),A.dom&&console.groupEnd()}function z(a){a=q(a),y(a);for(var b,c=a.querySelectorAll("link[rel="+B+"]"),d=0,e=c.length;e>d&&(b=c[d]);d++)b.import&&b.import.__parsed&&z(b.import)}var A=window.logFlags||{},B=window.HTMLImports?HTMLImports.IMPORT_LINK_TYPE:"none",C=!window.MutationObserver||window.MutationObserver===window.JsMutationObserver;a.hasPolyfillMutations=C;var D=!1,E=[],F=new MutationObserver(u),G=Array.prototype.forEach.call.bind(Array.prototype.forEach);a.IMPORT_LINK_TYPE=B,a.watchShadow=s,a.upgradeDocumentTree=z,a.upgradeAll=g,a.upgradeSubtree=f,a.insertedNode=i,a.observeDocument=x,a.upgradeDocument=y,a.takeRecords=v}(window.CustomElements),function(a){function b(b,f){var g=f||{};if(!b)throw new Error("document.registerElement: first argument `name` must not be empty");if(b.indexOf("-")<0)throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+String(b)+"'.");if(m(b))throw new Error("DuplicateDefinitionError: a type with name '"+String(b)+"' is already registered");if(!g.prototype)throw new Error("Options missing required prototype property");return g.__name=b.toLowerCase(),g.lifecycle=g.lifecycle||{},g.ancestry=c(g.extends),d(g),e(g),k(g.prototype),n(g.__name,g),g.ctor=o(g),g.ctor.prototype=g.prototype,g.prototype.constructor=g.ctor,a.ready&&a.upgradeDocumentTree(document),g.ctor}function c(a){var b=m(a);return b?c(b.extends).concat([b]):[]}function d(a){for(var b,c=a.extends,d=0;b=a.ancestry[d];d++)c=b.is&&b.tag;a.tag=c||a.__name,c&&(a.is=a.__name)}function e(a){if(!Object.__proto__){var b=HTMLElement.prototype;if(a.is){var c=document.createElement(a.tag);b=Object.getPrototypeOf(c)}for(var d,e=a.prototype;e&&e!==b;){var d=Object.getPrototypeOf(e);e.__proto__=d,e=d}}a.native=b}function f(a){return g(x(a.tag),a)}function g(b,c){return c.is&&b.setAttribute("is",c.is),b.removeAttribute("unresolved"),h(b,c),b.__upgraded__=!0,j(b),a.insertedNode(b),a.upgradeSubtree(b),b}function h(a,b){Object.__proto__?a.__proto__=b.prototype:(i(a,b.prototype,b.native),a.__proto__=b.prototype)}function i(a,b,c){for(var d={},e=b;e!==c&&e!==HTMLElement.prototype;){for(var f,g=Object.getOwnPropertyNames(e),h=0;f=g[h];h++)d[f]||(Object.defineProperty(a,f,Object.getOwnPropertyDescriptor(e,f)),d[f]=1);e=Object.getPrototypeOf(e)}}function j(a){a.createdCallback&&a.createdCallback()}function k(a){if(!a.setAttribute._polyfilled){var b=a.setAttribute;a.setAttribute=function(a,c){l.call(this,a,c,b)};var c=a.removeAttribute;a.removeAttribute=function(a){l.call(this,a,null,c)},a.setAttribute._polyfilled=!0}}function l(a,b,c){var d=this.getAttribute(a);c.apply(this,arguments);var e=this.getAttribute(a);this.attributeChangedCallback&&e!==d&&this.attributeChangedCallback(a,d,e)}function m(a){return a?w[a.toLowerCase()]:void 0}function n(a,b){w[a]=b}function o(a){return function(){return f(a)}}function p(a,b){var c=m(b||a);if(c){if(a==c.tag&&b==c.is)return new c.ctor;if(!b&&!c.is)return new c.ctor}if(b){var d=p(a);return d.setAttribute("is",b),d}var d=x(a);return a.indexOf("-")>=0&&h(d,HTMLElement),d}function q(a){if(!a.__upgraded__&&a.nodeType===Node.ELEMENT_NODE){var b=a.getAttribute("is"),c=m(b||a.localName);if(c){if(b&&c.tag==a.localName)return g(a,c);if(!b&&!c.extends)return g(a,c)}}}function r(b){var c=y.call(this,b);return a.upgradeAll(c),c}a||(a=window.CustomElements={flags:{}});var s=a.flags,t=Boolean(document.registerElement),u=!s.register&&t&&!window.ShadowDOMPolyfill;if(u){var v=function(){};a.registry={},a.upgradeElement=v,a.watchShadow=v,a.upgrade=v,a.upgradeAll=v,a.upgradeSubtree=v,a.observeDocument=v,a.upgradeDocument=v,a.upgradeDocumentTree=v,a.takeRecords=v}else{var w={},x=document.createElement.bind(document),y=Node.prototype.cloneNode;document.registerElement=b,document.createElement=p,Node.prototype.cloneNode=r,a.registry=w,a.upgrade=q}document.register=document.registerElement,a.hasNative=t,a.useNative=u}(window.CustomElements),function(a){function b(a){return"link"===a.localName&&a.getAttribute("rel")===c}var c=a.IMPORT_LINK_TYPE,d={selectors:["link[rel="+c+"]"],map:{link:"parseLink"},parse:function(a){if(!a.__parsed){a.__parsed=!0;var b=a.querySelectorAll(d.selectors);e(b,function(a){d[d.map[a.localName]](a)}),CustomElements.upgradeDocument(a),CustomElements.observeDocument(a)}},parseLink:function(a){b(a)&&this.parseImport(a)},parseImport:function(a){a.import&&d.parse(a.import)}},e=Array.prototype.forEach.call.bind(Array.prototype.forEach);a.parser=d,a.IMPORT_LINK_TYPE=c}(window.CustomElements),function(a){function b(){CustomElements.parser.parse(document),CustomElements.upgradeDocument(document);var a=window.Platform&&Platform.endOfMicrotask?Platform.endOfMicrotask:setTimeout;a(function(){CustomElements.ready=!0,CustomElements.readyTime=Date.now(),window.HTMLImports&&(CustomElements.elapsed=CustomElements.readyTime-HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0})),window.HTMLImports&&(HTMLImports.__importsParsingHook=function(a){CustomElements.parser.parse(a.import)})})}if("function"!=typeof window.CustomEvent&&(window.CustomEvent=function(a){var b=document.createEvent("HTMLEvents");return b.initEvent(a,!0,!0),b}),"complete"===document.readyState||a.flags.eager)b();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var c=window.HTMLImports&&!HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(c,b)}else b()}(window.CustomElements),function(){var a=document.createElement("style");a.textContent="element {display: none !important;} /* injected by platform.js */";var b=document.querySelector("head");if(b.insertBefore(a,b.firstChild),window.ShadowDOMPolyfill){var c=["upgradeAll","upgradeSubtree","observeDocument","upgradeDocument"],d={};c.forEach(function(a){d[a]=CustomElements[a]}),c.forEach(function(a){CustomElements[a]=function(b){return d[a](wrap(b))}})}}(),function(a){function b(a){this.regex=a}var c=a.endOfMicrotask;b.prototype={extractUrls:function(a,b){for(var c,d,e=[];c=this.regex.exec(a);)d=new URL(c[1],b),e.push({matched:c[0],url:d.href});return e},process:function(a,b,c){var d=this.extractUrls(a,b);this.fetch(d,{},c)},fetch:function(a,b,d){var e=a.length;if(!e)return d(b);for(var f,g,h,i=function(){0===--e&&d(b)},j=function(a,c){var d=c.match,e=d.url;if(a)return b[e]="",i();var f=c.response||c.responseText;b[e]=f,this.fetch(this.extractUrls(f,e),b,i)},k=0;e>k;k++)f=a[k],h=f.url,b[h]?c(i):(g=this.xhr(h,j,this),g.match=f,b[h]=g)},xhr:function(a,b,c){var d=new XMLHttpRequest;return d.open("GET",a,!0),d.send(),d.onload=function(){b.call(c,null,d)},d.onerror=function(){b.call(c,null,d)},d}},a.Loader=b}(window.Platform),function(a){function b(){this.loader=new d(this.regex)}var c=a.urlResolver,d=a.Loader;b.prototype={regex:/@import\s+(?:url)?["'\(]*([^'"\)]*)['"\)]*;/g,resolve:function(a,b,c){var d=function(d){c(this.flatten(a,b,d))}.bind(this);this.loader.process(a,b,d)},resolveNode:function(a,b){var c=a.textContent,d=a.ownerDocument.baseURI,e=function(c){a.textContent=c,b(a)};this.resolve(c,d,e)},flatten:function(a,b,d){for(var e,f,g,h=this.loader.extractUrls(a,b),i=0;i<h.length;i++)e=h[i],f=e.url,g=c.resolveCssText(d[f],f),g=this.flatten(g,f,d),a=a.replace(e.matched,g);return a},loadStyles:function(a,b){function c(){e++,e===f&&b&&b()}for(var d,e=0,f=a.length,g=0;f>g&&(d=a[g]);g++)this.resolveNode(d,c)}};var e=new b;a.styleResolver=e}(window.Platform),function(a){a=a||{},a.external=a.external||{};var b={shadow:function(a){return a?a.shadowRoot||a.webkitShadowRoot:void 0},canTarget:function(a){return a&&Boolean(a.elementFromPoint)},targetingShadow:function(a){var b=this.shadow(a);return this.canTarget(b)?b:void 0},olderShadow:function(a){var b=a.olderShadowRoot;if(!b){var c=a.querySelector("shadow");c&&(b=c.olderShadowRoot)}return b},allShadows:function(a){for(var b=[],c=this.shadow(a);c;)b.push(c),c=this.olderShadow(c);return b},searchRoot:function(a,b,c){if(a){var d,e,f=a.elementFromPoint(b,c);for(e=this.targetingShadow(f);e;){if(d=e.elementFromPoint(b,c)){var g=this.targetingShadow(d);return this.searchRoot(g,b,c)||d}e=this.olderShadow(e)}return f}},owner:function(a){for(var b=a;b.parentNode;)b=b.parentNode;return b.nodeType!=Node.DOCUMENT_NODE&&b.nodeType!=Node.DOCUMENT_FRAGMENT_NODE&&(b=document),b},findTarget:function(a){var b=a.clientX,c=a.clientY,d=this.owner(a.target);return d.elementFromPoint(b,c)||(d=document),this.searchRoot(d,b,c)}};a.targetFinding=b,a.findTarget=b.findTarget.bind(b),window.PointerEventsPolyfill=a}(window.PointerEventsPolyfill),function(){function a(a){return"body ^^ "+b(a)}function b(a){return'[touch-action="'+a+'"]'}function c(a){return"{ -ms-touch-action: "+a+"; touch-action: "+a+"; touch-action-delay: none; }"}var d=["none","auto","pan-x","pan-y",{rule:"pan-x pan-y",selectors:["pan-x pan-y","pan-y pan-x"]}],e="";d.forEach(function(d){String(d)===d?(e+=b(d)+c(d)+"\n",e+=a(d)+c(d)+"\n"):(e+=d.selectors.map(b)+c(d.rule)+"\n",e+=d.selectors.map(a)+c(d.rule)+"\n")});var f=document.createElement("style");f.textContent=e,document.head.appendChild(f)}(),function(a){function b(a,e){e=e||{};var f;if(e.buttons||d)f=e.buttons;else switch(e.which){case 1:f=1;break;case 2:f=4;break;case 3:f=2;break;default:f=0}var i;if(c)i=new MouseEvent(a,e);else{i=document.createEvent("MouseEvent");for(var j,k={},l=0;l<g.length;l++)j=g[l],k[j]=e[j]||h[l];i.initMouseEvent(a,k.bubbles,k.cancelable,k.view,k.detail,k.screenX,k.screenY,k.clientX,k.clientY,k.ctrlKey,k.altKey,k.shiftKey,k.metaKey,k.button,k.relatedTarget)}i.__proto__=b.prototype,d||Object.defineProperty(i,"buttons",{get:function(){return f},enumerable:!0});var m=0;return m=e.pressure?e.pressure:f?.5:0,Object.defineProperties(i,{pointerId:{value:e.pointerId||0,enumerable:!0},width:{value:e.width||0,enumerable:!0},height:{value:e.height||0,enumerable:!0},pressure:{value:m,enumerable:!0},tiltX:{value:e.tiltX||0,enumerable:!0},tiltY:{value:e.tiltY||0,enumerable:!0},pointerType:{value:e.pointerType||"",enumerable:!0},hwTimestamp:{value:e.hwTimestamp||0,enumerable:!0},isPrimary:{value:e.isPrimary||!1,enumerable:!0}}),i}var c=!1,d=!1;try{var e=new MouseEvent("click",{buttons:1});c=!0,d=1===e.buttons}catch(f){}var g=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget"],h=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null];b.prototype=Object.create(MouseEvent.prototype),a.PointerEvent||(a.PointerEvent=b)}(window),function(a){function b(){if(c){var a=new Map;return a.pointers=d,a}this.keys=[],this.values=[]}var c=window.Map&&window.Map.prototype.forEach,d=function(){return this.size};b.prototype={set:function(a,b){var c=this.keys.indexOf(a);c>-1?this.values[c]=b:(this.keys.push(a),this.values.push(b))},has:function(a){return this.keys.indexOf(a)>-1},"delete":function(a){var b=this.keys.indexOf(a);b>-1&&(this.keys.splice(b,1),this.values.splice(b,1))},get:function(a){var b=this.keys.indexOf(a);return this.values[b]},clear:function(){this.keys.length=0,this.values.length=0},forEach:function(a,b){this.values.forEach(function(c,d){a.call(b,c,this.keys[d],this)},this)},pointers:function(){return this.keys.length}},a.PointerMap=b}(window.PointerEventsPolyfill),function(a){var b=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","buttons","pointerId","width","height","pressure","tiltX","tiltY","pointerType","hwTimestamp","isPrimary","type","target","currentTarget","which"],c=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0,0,0,0,0,0,"",0,!1,"",null,null,0],d="undefined"!=typeof SVGElementInstance,e={targets:new WeakMap,handledEvents:new WeakMap,pointermap:new a.PointerMap,eventMap:{},eventSources:{},eventSourceList:[],registerSource:function(a,b){var c=b,d=c.events;d&&(d.forEach(function(a){c[a]&&(this.eventMap[a]=c[a].bind(c))},this),this.eventSources[a]=c,this.eventSourceList.push(c))},register:function(a){for(var b,c=this.eventSourceList.length,d=0;c>d&&(b=this.eventSourceList[d]);d++)b.register.call(b,a)},unregister:function(a){for(var b,c=this.eventSourceList.length,d=0;c>d&&(b=this.eventSourceList[d]);d++)b.unregister.call(b,a)},contains:a.external.contains||function(a,b){return a.contains(b)},down:function(a){a.bubbles=!0,this.fireEvent("pointerdown",a)},move:function(a){a.bubbles=!0,this.fireEvent("pointermove",a)},up:function(a){a.bubbles=!0,this.fireEvent("pointerup",a)},enter:function(a){a.bubbles=!1,this.fireEvent("pointerenter",a)},leave:function(a){a.bubbles=!1,this.fireEvent("pointerleave",a)},over:function(a){a.bubbles=!0,this.fireEvent("pointerover",a)},out:function(a){a.bubbles=!0,this.fireEvent("pointerout",a)},cancel:function(a){a.bubbles=!0,this.fireEvent("pointercancel",a)},leaveOut:function(a){this.out(a),this.contains(a.target,a.relatedTarget)||this.leave(a)},enterOver:function(a){this.over(a),this.contains(a.target,a.relatedTarget)||this.enter(a)},eventHandler:function(a){if(!this.handledEvents.get(a)){var b=a.type,c=this.eventMap&&this.eventMap[b];c&&c(a),this.handledEvents.set(a,!0)}},listen:function(a,b){b.forEach(function(b){this.addEvent(a,b)},this)},unlisten:function(a,b){b.forEach(function(b){this.removeEvent(a,b)},this)},addEvent:a.external.addEvent||function(a,b){a.addEventListener(b,this.boundHandler)},removeEvent:a.external.removeEvent||function(a,b){a.removeEventListener(b,this.boundHandler)},makeEvent:function(a,b){this.captureInfo&&(b.relatedTarget=null);var c=new PointerEvent(a,b);return b.preventDefault&&(c.preventDefault=b.preventDefault),this.targets.set(c,this.targets.get(b)||b.target),c},fireEvent:function(a,b){var c=this.makeEvent(a,b);return this.dispatchEvent(c)},cloneEvent:function(a){for(var e,f={},g=0;g<b.length;g++)e=b[g],f[e]=a[e]||c[g],!d||"target"!==e&&"relatedTarget"!==e||f[e]instanceof SVGElementInstance&&(f[e]=f[e].correspondingUseElement);return a.preventDefault&&(f.preventDefault=function(){a.preventDefault()}),f},getTarget:function(a){return this.captureInfo&&this.captureInfo.id===a.pointerId?this.captureInfo.target:this.targets.get(a)},setCapture:function(a,b){this.captureInfo&&this.releaseCapture(this.captureInfo.id),this.captureInfo={id:a,target:b};var c=new PointerEvent("gotpointercapture",{bubbles:!0});this.implicitRelease=this.releaseCapture.bind(this,a),document.addEventListener("pointerup",this.implicitRelease),document.addEventListener("pointercancel",this.implicitRelease),this.targets.set(c,b),this.asyncDispatchEvent(c)},releaseCapture:function(a){if(this.captureInfo&&this.captureInfo.id===a){var b=new PointerEvent("lostpointercapture",{bubbles:!0}),c=this.captureInfo.target;this.captureInfo=null,document.removeEventListener("pointerup",this.implicitRelease),document.removeEventListener("pointercancel",this.implicitRelease),this.targets.set(b,c),this.asyncDispatchEvent(b)}},dispatchEvent:a.external.dispatchEvent||function(a){var b=this.getTarget(a);return b?b.dispatchEvent(a):void 0
},asyncDispatchEvent:function(a){setTimeout(this.dispatchEvent.bind(this,a),0)}};e.boundHandler=e.eventHandler.bind(e),a.dispatcher=e,a.register=e.register.bind(e),a.unregister=e.unregister.bind(e)}(window.PointerEventsPolyfill),function(a){function b(a,b,c,d){this.addCallback=a.bind(d),this.removeCallback=b.bind(d),this.changedCallback=c.bind(d),g&&(this.observer=new g(this.mutationWatcher.bind(this)))}var c=Array.prototype.forEach.call.bind(Array.prototype.forEach),d=Array.prototype.map.call.bind(Array.prototype.map),e=Array.prototype.slice.call.bind(Array.prototype.slice),f=Array.prototype.filter.call.bind(Array.prototype.filter),g=window.MutationObserver||window.WebKitMutationObserver,h="[touch-action]",i={subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["touch-action"]};b.prototype={watchSubtree:function(b){a.targetFinding.canTarget(b)&&this.observer.observe(b,i)},enableOnSubtree:function(a){this.watchSubtree(a),a===document&&"complete"!==document.readyState?this.installOnLoad():this.installNewSubtree(a)},installNewSubtree:function(a){c(this.findElements(a),this.addElement,this)},findElements:function(a){return a.querySelectorAll?a.querySelectorAll(h):[]},removeElement:function(a){this.removeCallback(a)},addElement:function(a){this.addCallback(a)},elementChanged:function(a,b){this.changedCallback(a,b)},concatLists:function(a,b){return a.concat(e(b))},installOnLoad:function(){document.addEventListener("DOMContentLoaded",this.installNewSubtree.bind(this,document))},isElement:function(a){return a.nodeType===Node.ELEMENT_NODE},flattenMutationTree:function(a){var b=d(a,this.findElements,this);return b.push(f(a,this.isElement)),b.reduce(this.concatLists,[])},mutationWatcher:function(a){a.forEach(this.mutationHandler,this)},mutationHandler:function(a){if("childList"===a.type){var b=this.flattenMutationTree(a.addedNodes);b.forEach(this.addElement,this);var c=this.flattenMutationTree(a.removedNodes);c.forEach(this.removeElement,this)}else"attributes"===a.type&&this.elementChanged(a.target,a.oldValue)}},g||(b.prototype.watchSubtree=function(){console.warn("PointerEventsPolyfill: MutationObservers not found, touch-action will not be dynamically detected")}),a.Installer=b}(window.PointerEventsPolyfill),function(a){var b=a.dispatcher,c=b.pointermap,d=25,e={POINTER_ID:1,POINTER_TYPE:"mouse",events:["mousedown","mousemove","mouseup","mouseover","mouseout"],register:function(a){b.listen(a,this.events)},unregister:function(a){b.unlisten(a,this.events)},lastTouches:[],isEventSimulatedFromTouch:function(a){for(var b,c=this.lastTouches,e=a.clientX,f=a.clientY,g=0,h=c.length;h>g&&(b=c[g]);g++){var i=Math.abs(e-b.x),j=Math.abs(f-b.y);if(d>=i&&d>=j)return!0}},prepareEvent:function(a){var c=b.cloneEvent(a),d=c.preventDefault;return c.preventDefault=function(){a.preventDefault(),d()},c.pointerId=this.POINTER_ID,c.isPrimary=!0,c.pointerType=this.POINTER_TYPE,c},mousedown:function(a){if(!this.isEventSimulatedFromTouch(a)){var d=c.has(this.POINTER_ID);d&&this.cancel(a);var e=this.prepareEvent(a);c.set(this.POINTER_ID,a),b.down(e)}},mousemove:function(a){if(!this.isEventSimulatedFromTouch(a)){var c=this.prepareEvent(a);b.move(c)}},mouseup:function(a){if(!this.isEventSimulatedFromTouch(a)){var d=c.get(this.POINTER_ID);if(d&&d.button===a.button){var e=this.prepareEvent(a);b.up(e),this.cleanupMouse()}}},mouseover:function(a){if(!this.isEventSimulatedFromTouch(a)){var c=this.prepareEvent(a);b.enterOver(c)}},mouseout:function(a){if(!this.isEventSimulatedFromTouch(a)){var c=this.prepareEvent(a);b.leaveOut(c)}},cancel:function(a){var c=this.prepareEvent(a);b.cancel(c),this.cleanupMouse()},cleanupMouse:function(){c["delete"](this.POINTER_ID)}};a.mouseEvents=e}(window.PointerEventsPolyfill),function(a){var b,c=a.dispatcher,d=a.findTarget,e=a.targetFinding.allShadows.bind(a.targetFinding),f=c.pointermap,g=Array.prototype.map.call.bind(Array.prototype.map),h=2500,i=200,j="touch-action",k=!1,l={scrollType:new WeakMap,events:["touchstart","touchmove","touchend","touchcancel"],register:function(a){k?c.listen(a,this.events):b.enableOnSubtree(a)},unregister:function(a){k&&c.unlisten(a,this.events)},elementAdded:function(a){var b=a.getAttribute(j),d=this.touchActionToScrollType(b);d&&(this.scrollType.set(a,d),c.listen(a,this.events),e(a).forEach(function(a){this.scrollType.set(a,d),c.listen(a,this.events)},this))},elementRemoved:function(a){this.scrollType["delete"](a),c.unlisten(a,this.events),e(a).forEach(function(a){this.scrollType["delete"](a),c.unlisten(a,this.events)},this)},elementChanged:function(a,b){var c=a.getAttribute(j),d=this.touchActionToScrollType(c),f=this.touchActionToScrollType(b);d&&f?(this.scrollType.set(a,d),e(a).forEach(function(a){this.scrollType.set(a,d)},this)):f?this.elementRemoved(a):d&&this.elementAdded(a)},scrollTypes:{EMITTER:"none",XSCROLLER:"pan-x",YSCROLLER:"pan-y",SCROLLER:/^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/},touchActionToScrollType:function(a){var b=a,c=this.scrollTypes;return"none"===b?"none":b===c.XSCROLLER?"X":b===c.YSCROLLER?"Y":c.SCROLLER.exec(b)?"XY":void 0},POINTER_TYPE:"touch",firstTouch:null,isPrimaryTouch:function(a){return this.firstTouch===a.identifier},setPrimaryTouch:function(a){(0===f.pointers()||1===f.pointers()&&f.has(1))&&(this.firstTouch=a.identifier,this.firstXY={X:a.clientX,Y:a.clientY},this.scrolling=!1,this.cancelResetClickCount())},removePrimaryPointer:function(a){a.isPrimary&&(this.firstTouch=null,this.firstXY=null,this.resetClickCount())},clickCount:0,resetId:null,resetClickCount:function(){var a=function(){this.clickCount=0,this.resetId=null}.bind(this);this.resetId=setTimeout(a,i)},cancelResetClickCount:function(){this.resetId&&clearTimeout(this.resetId)},touchToPointer:function(a){var b=c.cloneEvent(a);return b.pointerId=a.identifier+2,b.target=d(b),b.bubbles=!0,b.cancelable=!0,b.detail=this.clickCount,b.button=0,b.buttons=1,b.width=a.webkitRadiusX||a.radiusX||0,b.height=a.webkitRadiusY||a.radiusY||0,b.pressure=a.webkitForce||a.force||.5,b.isPrimary=this.isPrimaryTouch(a),b.pointerType=this.POINTER_TYPE,b},processTouches:function(a,b){var c=a.changedTouches,d=g(c,this.touchToPointer,this);d.forEach(function(b){b.preventDefault=function(){this.scrolling=!1,this.firstXY=null,a.preventDefault()}},this),d.forEach(b,this)},shouldScroll:function(a){if(this.firstXY){var b,c=this.scrollType.get(a.currentTarget);if("none"===c)b=!1;else if("XY"===c)b=!0;else{var d=a.changedTouches[0],e=c,f="Y"===c?"X":"Y",g=Math.abs(d["client"+e]-this.firstXY[e]),h=Math.abs(d["client"+f]-this.firstXY[f]);b=g>=h}return this.firstXY=null,b}},findTouch:function(a,b){for(var c,d=0,e=a.length;e>d&&(c=a[d]);d++)if(c.identifier===b)return!0},vacuumTouches:function(a){var b=a.touches;if(f.pointers()>=b.length){var c=[];f.forEach(function(a,d){if(1!==d&&!this.findTouch(b,d-2)){var e=a.out;c.push(this.touchToPointer(e))}},this),c.forEach(this.cancelOut,this)}},touchstart:function(a){this.vacuumTouches(a),this.setPrimaryTouch(a.changedTouches[0]),this.dedupSynthMouse(a),this.scrolling||(this.clickCount++,this.processTouches(a,this.overDown))},overDown:function(a){f.set(a.pointerId,{target:a.target,out:a,outTarget:a.target});c.over(a),c.enter(a),c.down(a)},touchmove:function(a){this.scrolling||(this.shouldScroll(a)?(this.scrolling=!0,this.touchcancel(a)):(a.preventDefault(),this.processTouches(a,this.moveOverOut)))},moveOverOut:function(a){var b=a,d=f.get(b.pointerId);if(d){var e=d.out,g=d.outTarget;c.move(b),e&&g!==b.target&&(e.relatedTarget=b.target,b.relatedTarget=g,e.target=g,b.target?(c.leaveOut(e),c.enterOver(b)):(b.target=g,b.relatedTarget=null,this.cancelOut(b))),d.out=b,d.outTarget=b.target}},touchend:function(a){this.dedupSynthMouse(a),this.processTouches(a,this.upOut)},upOut:function(a){this.scrolling||(c.up(a),c.out(a),c.leave(a)),this.cleanUpPointer(a)},touchcancel:function(a){this.processTouches(a,this.cancelOut)},cancelOut:function(a){c.cancel(a),c.out(a),c.leave(a),this.cleanUpPointer(a)},cleanUpPointer:function(a){f["delete"](a.pointerId),this.removePrimaryPointer(a)},dedupSynthMouse:function(b){var c=a.mouseEvents.lastTouches,d=b.changedTouches[0];if(this.isPrimaryTouch(d)){var e={x:d.clientX,y:d.clientY};c.push(e);var f=function(a,b){var c=a.indexOf(b);c>-1&&a.splice(c,1)}.bind(null,c,e);setTimeout(f,h)}}};k||(b=new a.Installer(l.elementAdded,l.elementRemoved,l.elementChanged,l)),a.touchEvents=l}(window.PointerEventsPolyfill),function(a){var b=a.dispatcher,c=b.pointermap,d=window.MSPointerEvent&&"number"==typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,e={events:["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerOut","MSPointerOver","MSPointerCancel","MSGotPointerCapture","MSLostPointerCapture"],register:function(a){b.listen(a,this.events)},unregister:function(a){b.unlisten(a,this.events)},POINTER_TYPES:["","unavailable","touch","pen","mouse"],prepareEvent:function(a){var c=a;return d&&(c=b.cloneEvent(a),c.pointerType=this.POINTER_TYPES[a.pointerType]),c},cleanup:function(a){c["delete"](a)},MSPointerDown:function(a){c.set(a.pointerId,a);var d=this.prepareEvent(a);b.down(d)},MSPointerMove:function(a){var c=this.prepareEvent(a);b.move(c)},MSPointerUp:function(a){var c=this.prepareEvent(a);b.up(c),this.cleanup(a.pointerId)},MSPointerOut:function(a){var c=this.prepareEvent(a);b.leaveOut(c)},MSPointerOver:function(a){var c=this.prepareEvent(a);b.enterOver(c)},MSPointerCancel:function(a){var c=this.prepareEvent(a);b.cancel(c),this.cleanup(a.pointerId)},MSLostPointerCapture:function(a){var c=b.makeEvent("lostpointercapture",a);b.dispatchEvent(c)},MSGotPointerCapture:function(a){var c=b.makeEvent("gotpointercapture",a);b.dispatchEvent(c)}};a.msEvents=e}(window.PointerEventsPolyfill),function(a){var b=a.dispatcher;if(void 0===window.navigator.pointerEnabled){if(Object.defineProperty(window.navigator,"pointerEnabled",{value:!0,enumerable:!0}),window.navigator.msPointerEnabled){var c=window.navigator.msMaxTouchPoints;Object.defineProperty(window.navigator,"maxTouchPoints",{value:c,enumerable:!0}),b.registerSource("ms",a.msEvents)}else b.registerSource("mouse",a.mouseEvents),void 0!==window.ontouchstart&&b.registerSource("touch",a.touchEvents);b.register(document)}}(window.PointerEventsPolyfill),function(a){function b(a){if(!e.pointermap.has(a))throw new Error("InvalidPointerId")}var c,d,e=a.dispatcher,f=window.navigator;f.msPointerEnabled?(c=function(a){b(a),this.msSetPointerCapture(a)},d=function(a){b(a),this.msReleasePointerCapture(a)}):(c=function(a){b(a),e.setCapture(a,this)},d=function(a){b(a),e.releaseCapture(a,this)}),window.Element&&!Element.prototype.setPointerCapture&&Object.defineProperties(Element.prototype,{setPointerCapture:{value:c},releasePointerCapture:{value:d}})}(window.PointerEventsPolyfill),PointerGestureEvent.prototype.preventTap=function(){this.tapPrevented=!0},function(a){a=a||{},a.utils={LCA:{find:function(a,b){if(a===b)return a;if(a.contains){if(a.contains(b))return a;if(b.contains(a))return b}var c=this.depth(a),d=this.depth(b),e=c-d;for(e>0?a=this.walk(a,e):b=this.walk(b,-e);a&&b&&a!==b;)a=this.walk(a,1),b=this.walk(b,1);return a},walk:function(a,b){for(var c=0;b>c;c++)a=a.parentNode;return a},depth:function(a){for(var b=0;a;)b++,a=a.parentNode;return b}}},a.findLCA=function(b,c){return a.utils.LCA.find(b,c)},window.PointerGestures=a}(window.PointerGestures),function(a){function b(){if(c){var a=new Map;return a.pointers=d,a}this.keys=[],this.values=[]}var c=window.Map&&window.Map.prototype.forEach,d=function(){return this.size};b.prototype={set:function(a,b){var c=this.keys.indexOf(a);c>-1?this.values[c]=b:(this.keys.push(a),this.values.push(b))},has:function(a){return this.keys.indexOf(a)>-1},"delete":function(a){var b=this.keys.indexOf(a);b>-1&&(this.keys.splice(b,1),this.values.splice(b,1))},get:function(a){var b=this.keys.indexOf(a);return this.values[b]},clear:function(){this.keys.length=0,this.values.length=0},forEach:function(a,b){this.values.forEach(function(c,d){a.call(b,c,this.keys[d],this)},this)},pointers:function(){return this.keys.length}},a.PointerMap=b}(window.PointerGestures),function(a){var b=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","buttons","pointerId","width","height","pressure","tiltX","tiltY","pointerType","hwTimestamp","isPrimary","type","target","currentTarget","screenX","screenY","pageX","pageY","tapPrevented"],c=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0,0,0,0,0,0,"",0,!1,"",null,null,0,0,0,0],d={handledEvents:new WeakMap,targets:new WeakMap,handlers:{},recognizers:{},events:{},registerRecognizer:function(a,b){var c=b;this.recognizers[a]=c,c.events.forEach(function(a){if(c[a]){this.events[a]=!0;var b=c[a].bind(c);this.addHandler(a,b)}},this)},addHandler:function(a,b){var c=a;this.handlers[c]||(this.handlers[c]=[]),this.handlers[c].push(b)},registerTarget:function(a){this.listen(Object.keys(this.events),a)},unregisterTarget:function(a){this.unlisten(Object.keys(this.events),a)},eventHandler:function(a){if(!this.handledEvents.get(a)){var b=a.type,c=this.handlers[b];c&&this.makeQueue(c,a),this.handledEvents.set(a,!0)}},makeQueue:function(a,b){var c=this.cloneEvent(b);setTimeout(this.runQueue.bind(this,a,c),0)},runQueue:function(a,b){this.currentPointerId=b.pointerId;for(var c,d=0,e=a.length;e>d&&(c=a[d]);d++)c(b);this.currentPointerId=0},listen:function(a,b){a.forEach(function(a){this.addEvent(a,this.boundHandler,!1,b)},this)},unlisten:function(a){a.forEach(function(a){this.removeEvent(a,this.boundHandler,!1,inTarget)},this)},addEvent:function(a,b,c,d){d.addEventListener(a,b,c)},removeEvent:function(a,b,c,d){d.removeEventListener(a,b,c)},makeEvent:function(a,b){return new PointerGestureEvent(a,b)},cloneEvent:function(a){for(var d,e={},f=0;f<b.length;f++)d=b[f],e[d]=a[d]||c[f];return e},dispatchEvent:function(a,b){var c=b||this.targets.get(a);c&&(c.dispatchEvent(a),a.tapPrevented&&this.preventTap(this.currentPointerId))},asyncDispatchEvent:function(a,b){var c=function(){this.dispatchEvent(a,b)}.bind(this);setTimeout(c,0)},preventTap:function(a){var b=this.recognizers.tap;b&&b.preventTap(a)}};d.boundHandler=d.eventHandler.bind(d),a.dispatcher=d;var e=[],f=!1;a.register=function(b){if(f){var c=window.PointerEventsPolyfill;c&&c.register(b),a.dispatcher.registerTarget(b)}else e.push(b)},document.addEventListener("DOMContentLoaded",function(){f=!0,e.push(document),e.forEach(a.register)})}(window.PointerGestures),function(a){var b=a.dispatcher,c={HOLD_DELAY:200,WIGGLE_THRESHOLD:16,events:["pointerdown","pointermove","pointerup","pointercancel"],heldPointer:null,holdJob:null,pulse:function(){var a=Date.now()-this.heldPointer.timeStamp,b=this.held?"holdpulse":"hold";this.fireHold(b,a),this.held=!0},cancel:function(){clearInterval(this.holdJob),this.held&&this.fireHold("release"),this.held=!1,this.heldPointer=null,this.target=null,this.holdJob=null},pointerdown:function(a){a.isPrimary&&!this.heldPointer&&(this.heldPointer=a,this.target=a.target,this.holdJob=setInterval(this.pulse.bind(this),this.HOLD_DELAY))},pointerup:function(a){this.heldPointer&&this.heldPointer.pointerId===a.pointerId&&this.cancel()},pointercancel:function(){this.cancel()},pointermove:function(a){if(this.heldPointer&&this.heldPointer.pointerId===a.pointerId){var b=a.clientX-this.heldPointer.clientX,c=a.clientY-this.heldPointer.clientY;b*b+c*c>this.WIGGLE_THRESHOLD&&this.cancel()}},fireHold:function(a,c){var d={pointerType:this.heldPointer.pointerType};c&&(d.holdTime=c);var e=b.makeEvent(a,d);b.dispatchEvent(e,this.target),e.tapPrevented&&b.preventTap(this.heldPointer.pointerId)}};b.registerRecognizer("hold",c)}(window.PointerGestures),function(a){var b=a.dispatcher,c=new a.PointerMap,d={events:["pointerdown","pointermove","pointerup","pointercancel"],WIGGLE_THRESHOLD:4,clampDir:function(a){return a>0?1:-1},calcPositionDelta:function(a,b){var c=0,d=0;return a&&b&&(c=b.pageX-a.pageX,d=b.pageY-a.pageY),{x:c,y:d}},fireTrack:function(a,c,d){var e=d,f=this.calcPositionDelta(e.downEvent,c),g=this.calcPositionDelta(e.lastMoveEvent,c);g.x&&(e.xDirection=this.clampDir(g.x)),g.y&&(e.yDirection=this.clampDir(g.y));var h={dx:f.x,dy:f.y,ddx:g.x,ddy:g.y,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,screenX:c.screenX,screenY:c.screenY,xDirection:e.xDirection,yDirection:e.yDirection,trackInfo:e.trackInfo,relatedTarget:c.target,pointerType:c.pointerType},i=b.makeEvent(a,h);e.lastMoveEvent=c,b.dispatchEvent(i,e.downTarget)},pointerdown:function(a){if(a.isPrimary&&("mouse"===a.pointerType?1===a.buttons:!0)){var b={downEvent:a,downTarget:a.target,trackInfo:{},lastMoveEvent:null,xDirection:0,yDirection:0,tracking:!1};c.set(a.pointerId,b)}},pointermove:function(a){var b=c.get(a.pointerId);if(b)if(b.tracking)this.fireTrack("track",a,b);else{var d=this.calcPositionDelta(b.downEvent,a),e=d.x*d.x+d.y*d.y;e>this.WIGGLE_THRESHOLD&&(b.tracking=!0,this.fireTrack("trackstart",b.downEvent,b),this.fireTrack("track",a,b))}},pointerup:function(a){var b=c.get(a.pointerId);b&&(b.tracking&&this.fireTrack("trackend",a,b),c.delete(a.pointerId))},pointercancel:function(a){this.pointerup(a)}};b.registerRecognizer("track",d)}(window.PointerGestures),function(a){var b=a.dispatcher,c={MIN_VELOCITY:.5,MAX_QUEUE:4,moveQueue:[],target:null,pointerId:null,events:["pointerdown","pointermove","pointerup","pointercancel"],pointerdown:function(a){a.isPrimary&&!this.pointerId&&(this.pointerId=a.pointerId,this.target=a.target,this.addMove(a))},pointermove:function(a){a.pointerId===this.pointerId&&this.addMove(a)},pointerup:function(a){a.pointerId===this.pointerId&&this.fireFlick(a),this.cleanup()},pointercancel:function(){this.cleanup()},cleanup:function(){this.moveQueue=[],this.target=null,this.pointerId=null},addMove:function(a){this.moveQueue.length>=this.MAX_QUEUE&&this.moveQueue.shift(),this.moveQueue.push(a)},fireFlick:function(a){for(var c,d,e,f,g,h,i,j=a,k=this.moveQueue.length,l=0,m=0,n=0,o=0;k>o&&(i=this.moveQueue[o]);o++)c=j.timeStamp-i.timeStamp,d=j.clientX-i.clientX,e=j.clientY-i.clientY,f=d/c,g=e/c,h=Math.sqrt(f*f+g*g),h>n&&(l=f,m=g,n=h);var p=Math.abs(l)>Math.abs(m)?"x":"y",q=this.calcAngle(l,m);if(Math.abs(n)>=this.MIN_VELOCITY){var r=b.makeEvent("flick",{xVelocity:l,yVelocity:m,velocity:n,angle:q,majorAxis:p,pointerType:a.pointerType});b.dispatchEvent(r,this.target)}},calcAngle:function(a,b){return 180*Math.atan2(b,a)/Math.PI}};b.registerRecognizer("flick",c)}(window.PointerGestures),function(a){var b=a.dispatcher,c=new a.PointerMap,d=180/Math.PI,e={events:["pointerdown","pointermove","pointerup","pointercancel"],reference:{},pointerdown:function(b){if(c.set(b.pointerId,b),2==c.pointers()){var d=this.calcChord(),e=this.calcAngle(d);this.reference={angle:e,diameter:d.diameter,target:a.findLCA(d.a.target,d.b.target)}}},pointerup:function(a){c.delete(a.pointerId)},pointermove:function(a){c.has(a.pointerId)&&(c.set(a.pointerId,a),c.pointers()>1&&this.calcPinchRotate())},pointercancel:function(a){this.pointerup(a)},dispatchPinch:function(a,c){var d=a/this.reference.diameter,e=b.makeEvent("pinch",{scale:d,centerX:c.center.x,centerY:c.center.y});b.dispatchEvent(e,this.reference.target)},dispatchRotate:function(a,c){var d=Math.round((a-this.reference.angle)%360),e=b.makeEvent("rotate",{angle:d,centerX:c.center.x,centerY:c.center.y});b.dispatchEvent(e,this.reference.target)},calcPinchRotate:function(){var a=this.calcChord(),b=a.diameter,c=this.calcAngle(a);b!=this.reference.diameter&&this.dispatchPinch(b,a),c!=this.reference.angle&&this.dispatchRotate(c,a)},calcChord:function(){var a=[];c.forEach(function(b){a.push(b)});for(var b,d,e,f=0,g={},h=0;h<a.length;h++)for(var i=a[h],j=h+1;j<a.length;j++){var k=a[j];b=Math.abs(i.clientX-k.clientX),d=Math.abs(i.clientY-k.clientY),e=b+d,e>f&&(f=e,g={a:i,b:k})}return b=Math.abs(g.a.clientX+g.b.clientX)/2,d=Math.abs(g.a.clientY+g.b.clientY)/2,g.center={x:b,y:d},g.diameter=f,g},calcAngle:function(a){var b=a.a.clientX-a.b.clientX,c=a.a.clientY-a.b.clientY;return(360+Math.atan2(c,b)*d)%360}};b.registerRecognizer("pinch",e)}(window.PointerGestures),function(a){var b=a.dispatcher,c=new a.PointerMap,d={events:["pointerdown","pointermove","pointerup","pointercancel","keyup"],pointerdown:function(a){a.isPrimary&&!a.tapPrevented&&c.set(a.pointerId,{target:a.target,x:a.clientX,y:a.clientY})},pointermove:function(a){if(a.isPrimary){var b=c.get(a.pointerId);b&&a.tapPrevented&&c.delete(a.pointerId)}},pointerup:function(d){var e=c.get(d.pointerId);if(e&&!d.tapPrevented){var f=a.findLCA(e.target,d.target);if(f){var g=b.makeEvent("tap",{x:d.clientX,y:d.clientY,detail:d.detail,pointerType:d.pointerType});b.dispatchEvent(g,f)}}c.delete(d.pointerId)},pointercancel:function(a){c.delete(a.pointerId)},keyup:function(a){var c=a.keyCode;if(32===c){var d=a.target;d instanceof HTMLInputElement||d instanceof HTMLTextAreaElement||b.dispatchEvent(b.makeEvent("tap",{x:0,y:0,detail:0,pointerType:"unavailable"}),d)}},preventTap:function(a){c.delete(a)}};b.registerRecognizer("tap",d)}(window.PointerGestures),function(){"use strict";function a(a){for(;a.parentNode;)a=a.parentNode;return"function"==typeof a.getElementById?a:null}function b(a,b){var c=a.bindings;if(!c)return void(a.bindings={});var d=c[b];d&&(d.close(),c[b]=void 0)}function c(a){return null==a?"":a}function d(a,b){a.data=c(b)}function e(a){return function(b){return d(a,b)}}function f(a,b,d,e){return d?void(e?a.setAttribute(b,""):a.removeAttribute(b)):void a.setAttribute(b,c(e))}function g(a,b,c){return function(d){f(a,b,c,d)}}function h(a){switch(a.type){case"checkbox":return s;case"radio":case"select-multiple":case"select-one":return"change";case"range":if(/Trident|MSIE/.test(navigator.userAgent))return"change";default:return"input"}}function i(a,b,d,e){a[b]=(e||c)(d)}function j(a,b,c){return function(d){return i(a,b,d,c)}}function k(){}function l(a,b,c,d){function e(){c.setValue(a[b]),c.discardChanges(),(d||k)(a),Platform.performMicrotaskCheckpoint()}var f=h(a);a.addEventListener(f,e);var g=c.close;c.close=function(){g&&(a.removeEventListener(f,e),c.close=g,c.close(),g=void 0)}}function m(a){return Boolean(a)}function n(b){if(b.form)return r(b.form.elements,function(a){return a!=b&&"INPUT"==a.tagName&&"radio"==a.type&&a.name==b.name});var c=a(b);if(!c)return[];var d=c.querySelectorAll('input[type="radio"][name="'+b.name+'"]');return r(d,function(a){return a!=b&&!a.form})}function o(a){"INPUT"===a.tagName&&"radio"===a.type&&n(a).forEach(function(a){var b=a.bindings.checked;b&&b.setValue(!1)})}function p(a,b){var d,e,f,g=a.parentNode;g instanceof HTMLSelectElement&&g.bindings&&g.bindings.value&&(d=g,e=d.bindings.value,f=d.value),a.value=c(b),d&&d.value!=f&&(e.setValue(d.value),e.discardChanges(),Platform.performMicrotaskCheckpoint())}function q(a){return function(b){p(a,b)}}var r=Array.prototype.filter.call.bind(Array.prototype.filter);"function"!=typeof document.contains&&(Document.prototype.contains=function(a){return a===this||a.parentNode===this?!0:this.documentElement.contains(a)}),Node.prototype.bind=function(a,b){console.error("Unhandled binding to Node: ",this,a,b)},Node.prototype.unbind=function(a){b(this,a)},Node.prototype.unbindAll=function(){if(this.bindings){for(var a=Object.keys(this.bindings),b=0;b<a.length;b++){var c=this.bindings[a[b]];c&&c.close()}this.bindings={}}},Text.prototype.bind=function(a,c,f){return"textContent"!==a?Node.prototype.bind.call(this,a,c,f):f?d(this,c):(b(this,"textContent"),d(this,c.open(e(this))),this.bindings.textContent=c)},Element.prototype.bind=function(a,c,d){var e="?"==a[a.length-1];return e&&(this.removeAttribute(a),a=a.slice(0,-1)),d?f(this,a,e,c):(b(this,a),f(this,a,e,c.open(g(this,a,e))),this.bindings[a]=c)};var s;!function(){var a=document.createElement("div"),b=a.appendChild(document.createElement("input"));b.setAttribute("type","checkbox");var c,d=0;b.addEventListener("click",function(){d++,c=c||"click"}),b.addEventListener("change",function(){d++,c=c||"change"});var e=document.createEvent("MouseEvent");e.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),b.dispatchEvent(e),s=1==d?"change":c}(),HTMLInputElement.prototype.bind=function(a,d,e){if("value"!==a&&"checked"!==a)return HTMLElement.prototype.bind.call(this,a,d,e);this.removeAttribute(a);var f="checked"==a?m:c,g="checked"==a?o:k;return e?i(this,a,d,f):(b(this,a),l(this,a,d,g),i(this,a,d.open(j(this,a,f)),f),this.bindings[a]=d)},HTMLTextAreaElement.prototype.bind=function(a,d,e){return"value"!==a?HTMLElement.prototype.bind.call(this,a,d,e):(this.removeAttribute("value"),e?i(this,"value",d):(b(this,"value"),l(this,"value",d),i(this,"value",d.open(j(this,"value",c))),this.bindings.value=d))},HTMLOptionElement.prototype.bind=function(a,c,d){return"value"!==a?HTMLElement.prototype.bind.call(this,a,c,d):(this.removeAttribute("value"),d?p(this,c):(b(this,"value"),l(this,"value",c),p(this,c.open(q(this))),this.bindings.value=c))},HTMLSelectElement.prototype.bind=function(a,c,d){return"selectedindex"===a&&(a="selectedIndex"),"selectedIndex"!==a&&"value"!==a?HTMLElement.prototype.bind.call(this,a,c,d):(this.removeAttribute(a),d?i(this,a,c):(b(this,a),l(this,a,c),i(this,a,c.open(j(this,a))),this.bindings[a]=c))}}(this),function(a){"use strict";function b(a){if(!a)throw new Error("Assertion failed")}function c(a){for(var b;b=a.parentNode;)a=b;return a}function d(a,b){if(b){for(var d,e="#"+b;!d&&(a=c(a),a.protoContent_?d=a.protoContent_.querySelector(e):a.getElementById&&(d=a.getElementById(b)),!d&&a.templateCreator_);)a=a.templateCreator_;return d}}function e(a){return"template"==a.tagName&&"http://www.w3.org/2000/svg"==a.namespaceURI}function f(a){return"TEMPLATE"==a.tagName&&"http://www.w3.org/1999/xhtml"==a.namespaceURI}function g(a){return Boolean(J[a.tagName]&&a.hasAttribute("template"))}function h(a){return void 0===a.isTemplate_&&(a.isTemplate_="TEMPLATE"==a.tagName||g(a)),a.isTemplate_}function i(a,b){var c=a.querySelectorAll(L);h(a)&&b(a),E(c,b)}function j(a){function b(a){HTMLTemplateElement.decorate(a)||j(a.content)}i(a,b)}function k(a,b){Object.getOwnPropertyNames(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))})}function l(a){var b=a.ownerDocument;if(!b.defaultView)return b;var c=b.templateContentsOwner_;if(!c){for(c=b.implementation.createHTMLDocument("");c.lastChild;)c.removeChild(c.lastChild);b.templateContentsOwner_=c}return c}function m(a){if(!a.stagingDocument_){var b=a.ownerDocument;b.stagingDocument_||(b.stagingDocument_=b.implementation.createHTMLDocument(""),b.stagingDocument_.stagingDocument_=b.stagingDocument_),a.stagingDocument_=b.stagingDocument_}return a.stagingDocument_}function n(a){var b=a.ownerDocument.createElement("template");a.parentNode.insertBefore(b,a);for(var c=a.attributes,d=c.length;d-->0;){var e=c[d];I[e.name]&&("template"!==e.name&&b.setAttribute(e.name,e.value),a.removeAttribute(e.name))}return b}function o(a){var b=a.ownerDocument.createElement("template");a.parentNode.insertBefore(b,a);for(var c=a.attributes,d=c.length;d-->0;){var e=c[d];b.setAttribute(e.name,e.value),a.removeAttribute(e.name)}return a.parentNode.removeChild(a),b}function p(a,b,c){var d=a.content;if(c)return void d.appendChild(b);for(var e;e=b.firstChild;)d.appendChild(e)}function q(a){N?a.__proto__=HTMLTemplateElement.prototype:k(a,HTMLTemplateElement.prototype)}function r(a){a.setModelFn_||(a.setModelFn_=function(){a.setModelFnScheduled_=!1;var b=z(a,a.delegate_&&a.delegate_.prepareBinding);w(a,b,a.model_)}),a.setModelFnScheduled_||(a.setModelFnScheduled_=!0,Observer.runEOM_(a.setModelFn_))}function s(a,b,c,d){if(a&&a.length){for(var e,f=a.length,g=0,h=0,i=0,j=!0;f>h;){var g=a.indexOf("{{",h),k=a.indexOf("[[",h),l=!1,m="}}";if(k>=0&&(0>g||g>k)&&(g=k,l=!0,m="]]"),i=0>g?-1:a.indexOf(m,g+2),0>i){if(!e)return;e.push(a.slice(h));break}e=e||[],e.push(a.slice(h,g));var n=a.slice(g+2,i).trim();e.push(l),j=j&&l,e.push(Path.get(n));var o=d&&d(n,b,c);e.push(o),h=i+2}return h===f&&e.push(""),e.hasOnePath=5===e.length,e.isSimplePath=e.hasOnePath&&""==e[0]&&""==e[4],e.onlyOneTime=j,e.combinator=function(a){for(var b=e[0],c=1;c<e.length;c+=4){var d=e.hasOnePath?a:a[(c-1)/4];void 0!==d&&(b+=d),b+=e[c+3]}return b},e}}function t(a,b,c,d){if(b.hasOnePath){var e=b[3],f=e?e(d,c,!0):b[2].getValueFrom(d);return b.isSimplePath?f:b.combinator(f)}for(var g=[],h=1;h<b.length;h+=4){var e=b[h+2];g[(h-1)/4]=e?e(d,c):b[h+1].getValueFrom(d)}return b.combinator(g)}function u(a,b,c,d){var e=b[3],f=e?e(d,c,!1):new PathObserver(d,b[2]);return b.isSimplePath?f:new ObserverTransform(f,b.combinator)}function v(a,b,c,d){if(b.onlyOneTime)return t(a,b,c,d);if(b.hasOnePath)return u(a,b,c,d);for(var e=new CompoundObserver,f=1;f<b.length;f+=4){var g=b[f],h=b[f+2];if(h){var i=h(d,c,g);g?e.addPath(i):e.addObserver(i)}else{var j=b[f+1];g?e.addPath(j.getValueFrom(d)):e.addPath(d,j)}}return new ObserverTransform(e,b.combinator)}function w(a,b,c,d){for(var e=0;e<b.length;e+=2){var f=b[e],g=b[e+1],h=v(f,g,a,c),i=a.bind(f,h,g.onlyOneTime);i&&d&&d.push(i)}if(b.isTemplate){a.model_=c;var j=a.processBindingDirectives_(b);d&&j&&d.push(j)}}function x(a,b,c){var d=a.getAttribute(b);return s(""==d?"{{}}":d,b,a,c)}function y(a,c){b(a);for(var d=[],e=0;e<a.attributes.length;e++){for(var f=a.attributes[e],g=f.name,i=f.value;"_"===g[0];)g=g.substring(1);if(!h(a)||g!==H&&g!==F&&g!==G){var j=s(i,g,a,c);j&&d.push(g,j)}}return h(a)&&(d.isTemplate=!0,d.if=x(a,H,c),d.bind=x(a,F,c),d.repeat=x(a,G,c),!d.if||d.bind||d.repeat||(d.bind=s("{{}}",F,a,c))),d}function z(a,b){if(a.nodeType===Node.ELEMENT_NODE)return y(a,b);if(a.nodeType===Node.TEXT_NODE){var c=s(a.data,"textContent",a,b);if(c)return["textContent",c]}return[]}function A(a,b,c,d,e,f,g){for(var h=b.appendChild(c.importNode(a,!1)),i=0,j=a.firstChild;j;j=j.nextSibling)A(j,h,c,d.children[i++],e,f,g);return d.isTemplate&&(HTMLTemplateElement.decorate(h,a),f&&h.setDelegate_(f)),w(h,d,e,g),h}function B(a,b){var c=z(a,b);c.children={};for(var d=0,e=a.firstChild;e;e=e.nextSibling)c.children[d++]=B(e,b);return c}function C(a){this.closed=!1,this.templateElement_=a,this.terminators=[],this.deps=void 0,this.iteratedValue=[],this.presentValue=void 0,this.arrayObserver=void 0}var D,E=Array.prototype.forEach.call.bind(Array.prototype.forEach);a.Map&&"function"==typeof a.Map.prototype.forEach?D=a.Map:(D=function(){this.keys=[],this.values=[]},D.prototype={set:function(a,b){var c=this.keys.indexOf(a);0>c?(this.keys.push(a),this.values.push(b)):this.values[c]=b},get:function(a){var b=this.keys.indexOf(a);if(!(0>b))return this.values[b]},"delete":function(a){var b=this.keys.indexOf(a);return 0>b?!1:(this.keys.splice(b,1),this.values.splice(b,1),!0)},forEach:function(a,b){for(var c=0;c<this.keys.length;c++)a.call(b||this,this.values[c],this.keys[c],this)}});"function"!=typeof document.contains&&(Document.prototype.contains=function(a){return a===this||a.parentNode===this?!0:this.documentElement.contains(a)});var F="bind",G="repeat",H="if",I={template:!0,repeat:!0,bind:!0,ref:!0},J={THEAD:!0,TBODY:!0,TFOOT:!0,TH:!0,TR:!0,TD:!0,COLGROUP:!0,COL:!0,CAPTION:!0,OPTION:!0,OPTGROUP:!0},K="undefined"!=typeof HTMLTemplateElement,L="template, "+Object.keys(J).map(function(a){return a.toLowerCase()+"[template]"}).join(", ");document.addEventListener("DOMContentLoaded",function(){j(document),Platform.performMicrotaskCheckpoint()},!1),K||(a.HTMLTemplateElement=function(){throw TypeError("Illegal constructor")});var M,N="__proto__"in{};"function"==typeof MutationObserver&&(M=new MutationObserver(function(a){for(var b=0;b<a.length;b++)a[b].target.refChanged_()})),HTMLTemplateElement.decorate=function(a,c){if(a.templateIsDecorated_)return!1;var d=a;d.templateIsDecorated_=!0;var h=f(d)&&K,i=h,k=!h,m=!1;if(h||(g(d)?(b(!c),d=n(a),d.templateIsDecorated_=!0,h=K,m=!0):e(d)&&(d=o(a),d.templateIsDecorated_=!0,h=K)),!h){q(d);var r=l(d);d.content_=r.createDocumentFragment()}return c?d.instanceRef_=c:k?p(d,a,m):i&&j(d.content),!0},HTMLTemplateElement.bootstrap=j;var O=a.HTMLUnknownElement||HTMLElement,P={get:function(){return this.content_
},enumerable:!0,configurable:!0};K||(HTMLTemplateElement.prototype=Object.create(O.prototype),Object.defineProperty(HTMLTemplateElement.prototype,"content",P)),k(HTMLTemplateElement.prototype,{bind:function(a,b,c){if("ref"!=a)return Element.prototype.bind.call(this,a,b,c);var d=this,e=c?b:b.open(function(a){d.setAttribute("ref",a),d.refChanged_()});return this.setAttribute("ref",e),this.refChanged_(),c?void 0:(this.unbind("ref"),this.bindings.ref=b)},processBindingDirectives_:function(a){return this.iterator_&&this.iterator_.closeDeps(),a.if||a.bind||a.repeat?(this.iterator_||(this.iterator_=new C(this),this.bindings=this.bindings||{},this.bindings.iterator=this.iterator_),this.iterator_.updateDependencies(a,this.model_),M&&M.observe(this,{attributes:!0,attributeFilter:["ref"]}),this.iterator_):void(this.iterator_&&(this.iterator_.close(),this.iterator_=void 0,this.bindings.iterator=void 0))},createInstance:function(a,b,c,d){b&&(c=this.newDelegate_(b)),this.refContent_||(this.refContent_=this.ref_.content);var e=this.refContent_,f=this.bindingMap_;f&&f.content===e||(f=B(e,c&&c.prepareBinding)||[],f.content=e,this.bindingMap_=f);var g=m(this),h=g.createDocumentFragment();h.templateCreator_=this,h.protoContent_=e;for(var i={firstNode:null,lastNode:null,model:a},j=0,k=e.firstChild;k;k=k.nextSibling){var l=A(k,h,g,f.children[j++],a,c,d);l.templateInstance_=i}return i.firstNode=h.firstChild,i.lastNode=h.lastChild,h.templateCreator_=void 0,h.protoContent_=void 0,h},get model(){return this.model_},set model(a){this.model_=a,r(this)},get bindingDelegate(){return this.delegate_&&this.delegate_.raw},refChanged_:function(){this.iterator_&&this.refContent_!==this.ref_.content&&(this.refContent_=void 0,this.iterator_.valueChanged(),this.iterator_.updateIteratedValue())},clear:function(){this.model_=void 0,this.delegate_=void 0,this.bindings_=void 0,this.refContent_=void 0,this.iterator_&&(this.iterator_.valueChanged(),this.iterator_.close(),this.iterator_=void 0)},setDelegate_:function(a){this.delegate_=a,this.bindingMap_=void 0,this.iterator_&&(this.iterator_.instancePositionChangedFn_=void 0,this.iterator_.instanceModelFn_=void 0)},newDelegate_:function(a){function b(b){var c=a&&a[b];if("function"==typeof c)return function(){return c.apply(a,arguments)}}return a?{raw:a,prepareBinding:b("prepareBinding"),prepareInstanceModel:b("prepareInstanceModel"),prepareInstancePositionChanged:b("prepareInstancePositionChanged")}:{}},set bindingDelegate(a){if(this.delegate_)throw Error("Template must be cleared before a new bindingDelegate can be assigned");this.setDelegate_(this.newDelegate_(a))},get ref_(){var a=d(this,this.getAttribute("ref"));if(a||(a=this.instanceRef_),!a)return this;var b=a.ref_;return b?b:a}}),Object.defineProperty(Node.prototype,"templateInstance",{get:function(){var a=this.templateInstance_;return a?a:this.parentNode?this.parentNode.templateInstance:void 0}}),C.prototype={closeDeps:function(){var a=this.deps;a&&(a.ifOneTime===!1&&a.ifValue.close(),a.oneTime===!1&&a.value.close())},updateDependencies:function(a,b){this.closeDeps();var c=this.deps={},d=this.templateElement_;if(a.if){if(c.hasIf=!0,c.ifOneTime=a.if.onlyOneTime,c.ifValue=v(H,a.if,d,b),c.ifOneTime&&!c.ifValue)return void this.updateIteratedValue();c.ifOneTime||c.ifValue.open(this.updateIteratedValue,this)}a.repeat?(c.repeat=!0,c.oneTime=a.repeat.onlyOneTime,c.value=v(G,a.repeat,d,b)):(c.repeat=!1,c.oneTime=a.bind.onlyOneTime,c.value=v(F,a.bind,d,b)),c.oneTime||c.value.open(this.updateIteratedValue,this),this.updateIteratedValue()},updateIteratedValue:function(){if(this.deps.hasIf){var a=this.deps.ifValue;if(this.deps.ifOneTime||(a=a.discardChanges()),!a)return void this.valueChanged()}var b=this.deps.value;this.deps.oneTime||(b=b.discardChanges()),this.deps.repeat||(b=[b]);var c=this.deps.repeat&&!this.deps.oneTime&&Array.isArray(b);this.valueChanged(b,c)},valueChanged:function(a,b){Array.isArray(a)||(a=[]),a!==this.iteratedValue&&(this.unobserve(),this.presentValue=a,b&&(this.arrayObserver=new ArrayObserver(this.presentValue),this.arrayObserver.open(this.handleSplices,this)),this.handleSplices(ArrayObserver.calculateSplices(this.presentValue,this.iteratedValue)))},getTerminatorAt:function(a){if(-1==a)return this.templateElement_;var b=this.terminators[2*a];if(b.nodeType!==Node.ELEMENT_NODE||this.templateElement_===b)return b;var c=b.iterator_;return c?c.getTerminatorAt(c.terminators.length/2-1):b},insertInstanceAt:function(a,b,c,d){var e=this.getTerminatorAt(a-1),f=e;b?f=b.lastChild||f:c&&(f=c[c.length-1]||f),this.terminators.splice(2*a,0,f,d);var g=this.templateElement_.parentNode,h=e.nextSibling;if(b)g.insertBefore(b,h);else if(c)for(var i=0;i<c.length;i++)g.insertBefore(c[i],h)},extractInstanceAt:function(a){var b=[],c=this.getTerminatorAt(a-1),d=this.getTerminatorAt(a);b.instanceBindings=this.terminators[2*a+1],this.terminators.splice(2*a,2);for(var e=this.templateElement_.parentNode;d!==c;){var f=c.nextSibling;f==d&&(d=c),e.removeChild(f),b.push(f)}return b},getDelegateFn:function(a){return a=a&&a(this.templateElement_),"function"==typeof a?a:null},handleSplices:function(a){if(!this.closed&&a.length){var b=this.templateElement_;if(!b.parentNode)return void this.close();ArrayObserver.applySplices(this.iteratedValue,this.presentValue,a);var c=b.delegate_;void 0===this.instanceModelFn_&&(this.instanceModelFn_=this.getDelegateFn(c&&c.prepareInstanceModel)),void 0===this.instancePositionChangedFn_&&(this.instancePositionChangedFn_=this.getDelegateFn(c&&c.prepareInstancePositionChanged));var d=new D,e=0;a.forEach(function(a){a.removed.forEach(function(b){var c=this.extractInstanceAt(a.index+e);d.set(b,c)},this),e-=a.addedCount},this),a.forEach(function(a){for(var e=a.index;e<a.index+a.addedCount;e++){var f,g=this.iteratedValue[e],h=void 0,i=d.get(g);i?(d.delete(g),f=i.instanceBindings):(f=[],this.instanceModelFn_&&(g=this.instanceModelFn_(g)),void 0!==g&&(h=b.createInstance(g,void 0,c,f))),this.insertInstanceAt(e,h,i,f)}},this),d.forEach(function(a){this.closeInstanceBindings(a.instanceBindings)},this),this.instancePositionChangedFn_&&this.reportInstancesMoved(a)}},reportInstanceMoved:function(a){var b=this.getTerminatorAt(a-1),c=this.getTerminatorAt(a);if(b!==c){var d=b.nextSibling.templateInstance;this.instancePositionChangedFn_(d,a)}},reportInstancesMoved:function(a){for(var b=0,c=0,d=0;d<a.length;d++){var e=a[d];if(0!=c)for(;b<e.index;)this.reportInstanceMoved(b),b++;else b=e.index;for(;b<e.index+e.addedCount;)this.reportInstanceMoved(b),b++;c+=e.addedCount-e.removed.length}if(0!=c)for(var f=this.terminators.length/2;f>b;)this.reportInstanceMoved(b),b++},closeInstanceBindings:function(a){for(var b=0;b<a.length;b++)a[b].close()},unobserve:function(){this.arrayObserver&&(this.arrayObserver.close(),this.arrayObserver=void 0)},close:function(){if(!this.closed){this.unobserve();for(var a=1;a<this.terminators.length;a+=2)this.closeInstanceBindings(this.terminators[a]);this.terminators.length=0,this.closeDeps(),this.templateElement_.iterator_=void 0,this.closed=!0}}},HTMLTemplateElement.forAllTemplatesFrom_=i}(this),function(a){"use strict";function b(a,b){if(!a)throw new Error("ASSERT: "+b)}function c(a){return a>=48&&57>=a}function d(a){return 32===a||9===a||11===a||12===a||160===a||a>=5760&&" ᠎             　﻿".indexOf(String.fromCharCode(a))>0}function e(a){return 10===a||13===a||8232===a||8233===a}function f(a){return 36===a||95===a||a>=65&&90>=a||a>=97&&122>=a}function g(a){return 36===a||95===a||a>=65&&90>=a||a>=97&&122>=a||a>=48&&57>=a}function h(a){return"this"===a}function i(){for(;Y>X&&d(W.charCodeAt(X));)++X}function j(){var a,b;for(a=X++;Y>X&&(b=W.charCodeAt(X),g(b));)++X;return W.slice(a,X)}function k(){var a,b,c;return a=X,b=j(),c=1===b.length?S.Identifier:h(b)?S.Keyword:"null"===b?S.NullLiteral:"true"===b||"false"===b?S.BooleanLiteral:S.Identifier,{type:c,value:b,range:[a,X]}}function l(){var a,b,c=X,d=W.charCodeAt(X),e=W[X];switch(d){case 46:case 40:case 41:case 59:case 44:case 123:case 125:case 91:case 93:case 58:case 63:return++X,{type:S.Punctuator,value:String.fromCharCode(d),range:[c,X]};default:if(a=W.charCodeAt(X+1),61===a)switch(d){case 37:case 38:case 42:case 43:case 45:case 47:case 60:case 62:case 124:return X+=2,{type:S.Punctuator,value:String.fromCharCode(d)+String.fromCharCode(a),range:[c,X]};case 33:case 61:return X+=2,61===W.charCodeAt(X)&&++X,{type:S.Punctuator,value:W.slice(c,X),range:[c,X]}}}return b=W[X+1],e===b&&"&|".indexOf(e)>=0?(X+=2,{type:S.Punctuator,value:e+b,range:[c,X]}):"<>=!+-*%&|^/".indexOf(e)>=0?(++X,{type:S.Punctuator,value:e,range:[c,X]}):void s({},V.UnexpectedToken,"ILLEGAL")}function m(){var a,d,e;if(e=W[X],b(c(e.charCodeAt(0))||"."===e,"Numeric literal must start with a decimal digit or a decimal point"),d=X,a="","."!==e){for(a=W[X++],e=W[X],"0"===a&&e&&c(e.charCodeAt(0))&&s({},V.UnexpectedToken,"ILLEGAL");c(W.charCodeAt(X));)a+=W[X++];e=W[X]}if("."===e){for(a+=W[X++];c(W.charCodeAt(X));)a+=W[X++];e=W[X]}if("e"===e||"E"===e)if(a+=W[X++],e=W[X],("+"===e||"-"===e)&&(a+=W[X++]),c(W.charCodeAt(X)))for(;c(W.charCodeAt(X));)a+=W[X++];else s({},V.UnexpectedToken,"ILLEGAL");return f(W.charCodeAt(X))&&s({},V.UnexpectedToken,"ILLEGAL"),{type:S.NumericLiteral,value:parseFloat(a),range:[d,X]}}function n(){var a,c,d,f="",g=!1;for(a=W[X],b("'"===a||'"'===a,"String literal must starts with a quote"),c=X,++X;Y>X;){if(d=W[X++],d===a){a="";break}if("\\"===d)if(d=W[X++],d&&e(d.charCodeAt(0)))"\r"===d&&"\n"===W[X]&&++X;else switch(d){case"n":f+="\n";break;case"r":f+="\r";break;case"t":f+="	";break;case"b":f+="\b";break;case"f":f+="\f";break;case"v":f+="";break;default:f+=d}else{if(e(d.charCodeAt(0)))break;f+=d}}return""!==a&&s({},V.UnexpectedToken,"ILLEGAL"),{type:S.StringLiteral,value:f,octal:g,range:[c,X]}}function o(a){return a.type===S.Identifier||a.type===S.Keyword||a.type===S.BooleanLiteral||a.type===S.NullLiteral}function p(){var a;return i(),X>=Y?{type:S.EOF,range:[X,X]}:(a=W.charCodeAt(X),40===a||41===a||58===a?l():39===a||34===a?n():f(a)?k():46===a?c(W.charCodeAt(X+1))?m():l():c(a)?m():l())}function q(){var a;return a=$,X=a.range[1],$=p(),X=a.range[1],a}function r(){var a;a=X,$=p(),X=a}function s(a,c){var d,e=Array.prototype.slice.call(arguments,2),f=c.replace(/%(\d)/g,function(a,c){return b(c<e.length,"Message reference must be in range"),e[c]});throw d=new Error(f),d.index=X,d.description=f,d}function t(a){s(a,V.UnexpectedToken,a.value)}function u(a){var b=q();(b.type!==S.Punctuator||b.value!==a)&&t(b)}function v(a){return $.type===S.Punctuator&&$.value===a}function w(a){return $.type===S.Keyword&&$.value===a}function x(){var a=[];for(u("[");!v("]");)v(",")?(q(),a.push(null)):(a.push(bb()),v("]")||u(","));return u("]"),Z.createArrayExpression(a)}function y(){var a;return i(),a=q(),a.type===S.StringLiteral||a.type===S.NumericLiteral?Z.createLiteral(a):Z.createIdentifier(a.value)}function z(){var a,b;return a=$,i(),(a.type===S.EOF||a.type===S.Punctuator)&&t(a),b=y(),u(":"),Z.createProperty("init",b,bb())}function A(){var a=[];for(u("{");!v("}");)a.push(z()),v("}")||u(",");return u("}"),Z.createObjectExpression(a)}function B(){var a;return u("("),a=bb(),u(")"),a}function C(){var a,b,c;return v("(")?B():(a=$.type,a===S.Identifier?c=Z.createIdentifier(q().value):a===S.StringLiteral||a===S.NumericLiteral?c=Z.createLiteral(q()):a===S.Keyword?w("this")&&(q(),c=Z.createThisExpression()):a===S.BooleanLiteral?(b=q(),b.value="true"===b.value,c=Z.createLiteral(b)):a===S.NullLiteral?(b=q(),b.value=null,c=Z.createLiteral(b)):v("[")?c=x():v("{")&&(c=A()),c?c:void t(q()))}function D(){var a=[];if(u("("),!v(")"))for(;Y>X&&(a.push(bb()),!v(")"));)u(",");return u(")"),a}function E(){var a;return a=q(),o(a)||t(a),Z.createIdentifier(a.value)}function F(){return u("."),E()}function G(){var a;return u("["),a=bb(),u("]"),a}function H(){var a,b;for(a=C();v(".")||v("[");)v("[")?(b=G(),a=Z.createMemberExpression("[",a,b)):(b=F(),a=Z.createMemberExpression(".",a,b));return a}function I(){var a,b;return $.type!==S.Punctuator&&$.type!==S.Keyword?b=ab():v("+")||v("-")||v("!")?(a=q(),b=I(),b=Z.createUnaryExpression(a.value,b)):w("delete")||w("void")||w("typeof")?s({},V.UnexpectedToken):b=ab(),b}function J(a){var b=0;if(a.type!==S.Punctuator&&a.type!==S.Keyword)return 0;switch(a.value){case"||":b=1;break;case"&&":b=2;break;case"==":case"!=":case"===":case"!==":b=6;break;case"<":case">":case"<=":case">=":case"instanceof":b=7;break;case"in":b=7;break;case"+":case"-":b=9;break;case"*":case"/":case"%":b=11}return b}function K(){var a,b,c,d,e,f,g,h;if(g=I(),b=$,c=J(b),0===c)return g;for(b.prec=c,q(),e=I(),d=[g,b,e];(c=J($))>0;){for(;d.length>2&&c<=d[d.length-2].prec;)e=d.pop(),f=d.pop().value,g=d.pop(),a=Z.createBinaryExpression(f,g,e),d.push(a);b=q(),b.prec=c,d.push(b),a=I(),d.push(a)}for(h=d.length-1,a=d[h];h>1;)a=Z.createBinaryExpression(d[h-1].value,d[h-2],a),h-=2;return a}function L(){var a,b,c;return a=K(),v("?")&&(q(),b=L(),u(":"),c=L(),a=Z.createConditionalExpression(a,b,c)),a}function M(){var a,b;return a=q(),a.type!==S.Identifier&&t(a),b=v("(")?D():[],Z.createFilter(a.value,b)}function N(){for(;v("|");)q(),M()}function O(){i(),r();var a=bb();a&&(","===$.value||"in"==$.value&&a.type===U.Identifier?Q(a):(N(),"as"===$.value?P(a):Z.createTopLevel(a))),$.type!==S.EOF&&t($)}function P(a){q();var b=q().value;Z.createAsExpression(a,b)}function Q(a){var b;","===$.value&&(q(),$.type!==S.Identifier&&t($),b=q().value),q();var c=bb();N(),Z.createInExpression(a.name,b,c)}function R(a,b){return Z=b,W=a,X=0,Y=W.length,$=null,_={labelSet:{}},O()}var S,T,U,V,W,X,Y,Z,$,_;S={BooleanLiteral:1,EOF:2,Identifier:3,Keyword:4,NullLiteral:5,NumericLiteral:6,Punctuator:7,StringLiteral:8},T={},T[S.BooleanLiteral]="Boolean",T[S.EOF]="<end>",T[S.Identifier]="Identifier",T[S.Keyword]="Keyword",T[S.NullLiteral]="Null",T[S.NumericLiteral]="Numeric",T[S.Punctuator]="Punctuator",T[S.StringLiteral]="String",U={ArrayExpression:"ArrayExpression",BinaryExpression:"BinaryExpression",CallExpression:"CallExpression",ConditionalExpression:"ConditionalExpression",EmptyStatement:"EmptyStatement",ExpressionStatement:"ExpressionStatement",Identifier:"Identifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",ObjectExpression:"ObjectExpression",Program:"Program",Property:"Property",ThisExpression:"ThisExpression",UnaryExpression:"UnaryExpression"},V={UnexpectedToken:"Unexpected token %0",UnknownLabel:"Undefined label '%0'",Redeclaration:"%0 '%1' has already been declared"};var ab=H,bb=L;a.esprima={parse:R}}(this),function(a){"use strict";function b(a,b,d,e){var f;try{if(f=c(a),f.scopeIdent&&(d.nodeType!==Node.ELEMENT_NODE||"TEMPLATE"!==d.tagName||"bind"!==b&&"repeat"!==b))throw Error("as and in can only be used within <template bind/repeat>")}catch(g){return void console.error("Invalid expression syntax: "+a,g)}return function(a,b,c){var d=f.getBinding(a,e,c);return f.scopeIdent&&d&&(b.polymerExpressionScopeIdent_=f.scopeIdent,f.indexIdent&&(b.polymerExpressionIndexIdent_=f.indexIdent)),d}}function c(a){var b=s[a];if(!b){var c=new j;esprima.parse(a,c),b=new l(c),s[a]=b}return b}function d(a){this.value=a,this.valueFn_=void 0}function e(a){this.name=a,this.path=Path.get(a)}function f(a,b,c){"["==c&&b instanceof d&&Path.get(b.value).valid&&(c=".",b=new e(b.value)),this.dynamicDeps="function"==typeof a||a.dynamic,this.dynamic="function"==typeof b||b.dynamic||"["==c,this.simplePath=!this.dynamic&&!this.dynamicDeps&&b instanceof e&&(a instanceof f||a instanceof e),this.object=this.simplePath?a:i(a),this.property="."==c?b:i(b)}function g(a,b){this.name=a,this.args=[];for(var c=0;c<b.length;c++)this.args[c]=i(b[c])}function h(){throw Error("Not Implemented")}function i(a){return"function"==typeof a?a:a.valueFn()}function j(){this.expression=null,this.filters=[],this.deps={},this.currentPath=void 0,this.scopeIdent=void 0,this.indexIdent=void 0,this.dynamicDeps=!1}function k(a){this.value_=a}function l(a){if(this.scopeIdent=a.scopeIdent,this.indexIdent=a.indexIdent,!a.expression)throw Error("No expression found.");this.expression=a.expression,i(this.expression),this.filters=a.filters,this.dynamicDeps=a.dynamicDeps}function m(a){return String(a).replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})}function n(a){return"o"===a[0]&&"n"===a[1]&&"-"===a[2]}function o(a,b){for(;a[w]&&!Object.prototype.hasOwnProperty.call(a,b);)a=a[w];return a}function p(a,b){if(0==b.length)return void 0;if(1==b.length)return o(a,b[0]);for(var c=0;null!=a&&c<b.length-1;c++)a=a[b[c]];return a}function q(a,b,c){var d=b.substring(3);return d=v[d]||d,function(b,e,f){function g(){return"{{ "+a+" }}"}var h,i,j;return j="function"==typeof c.resolveEventHandler?function(d){h=h||c.resolveEventHandler(b,a,e),h(d,d.detail,d.currentTarget),Platform&&"function"==typeof Platform.flush&&Platform.flush()}:function(c){h=h||a.getValueFrom(b),i=i||p(b,a,e),h.apply(i,[c,c.detail,c.currentTarget]),Platform&&"function"==typeof Platform.flush&&Platform.flush()},e.addEventListener(d,j),f?void 0:{open:g,discardChanges:g,close:function(){e.removeEventListener(d,j)}}}}function r(){}var s=Object.create(null);d.prototype={valueFn:function(){if(!this.valueFn_){var a=this.value;this.valueFn_=function(){return a}}return this.valueFn_}},e.prototype={valueFn:function(){if(!this.valueFn_){var a=(this.name,this.path);this.valueFn_=function(b,c){return c&&c.addPath(b,a),a.getValueFrom(b)}}return this.valueFn_},setValue:function(a,b){return 1==this.path.length,a=o(a,this.path[0]),this.path.setValueFrom(a,b)}},f.prototype={get fullPath(){if(!this.fullPath_){var a=this.object instanceof e?this.object.name:this.object.fullPath;this.fullPath_=Path.get(a+"."+this.property.name)}return this.fullPath_},valueFn:function(){if(!this.valueFn_){var a=this.object;if(this.simplePath){var b=this.fullPath;this.valueFn_=function(a,c){return c&&c.addPath(a,b),b.getValueFrom(a)}}else if(this.property instanceof e){var b=Path.get(this.property.name);this.valueFn_=function(c,d){var e=a(c,d);return d&&d.addPath(e,b),b.getValueFrom(e)}}else{var c=this.property;this.valueFn_=function(b,d){var e=a(b,d),f=c(b,d);return d&&d.addPath(e,f),e?e[f]:void 0}}}return this.valueFn_},setValue:function(a,b){if(this.simplePath)return this.fullPath.setValueFrom(a,b),b;var c=this.object(a),d=this.property instanceof e?this.property.name:this.property(a);return c[d]=b}},g.prototype={transform:function(a,b,c,d,e){var f=c[this.name],g=d;if(f)g=void 0;else if(f=g[this.name],!f)return void console.error("Cannot find filter: "+this.name);if(b?f=f.toModel:"function"==typeof f.toDOM&&(f=f.toDOM),"function"!=typeof f)return void console.error("No "+(b?"toModel":"toDOM")+" found on"+this.name);for(var h=[a],j=0;j<this.args.length;j++)h[j+1]=i(this.args[j])(d,e);return f.apply(g,h)}};var t={"+":function(a){return+a},"-":function(a){return-a},"!":function(a){return!a}},u={"+":function(a,b){return a+b},"-":function(a,b){return a-b},"*":function(a,b){return a*b},"/":function(a,b){return a/b},"%":function(a,b){return a%b},"<":function(a,b){return b>a},">":function(a,b){return a>b},"<=":function(a,b){return b>=a},">=":function(a,b){return a>=b},"==":function(a,b){return a==b},"!=":function(a,b){return a!=b},"===":function(a,b){return a===b},"!==":function(a,b){return a!==b},"&&":function(a,b){return a&&b},"||":function(a,b){return a||b}};j.prototype={createUnaryExpression:function(a,b){if(!t[a])throw Error("Disallowed operator: "+a);return b=i(b),function(c,d){return t[a](b(c,d))}},createBinaryExpression:function(a,b,c){if(!u[a])throw Error("Disallowed operator: "+a);return b=i(b),c=i(c),function(d,e){return u[a](b(d,e),c(d,e))}},createConditionalExpression:function(a,b,c){return a=i(a),b=i(b),c=i(c),function(d,e){return a(d,e)?b(d,e):c(d,e)}},createIdentifier:function(a){var b=new e(a);return b.type="Identifier",b},createMemberExpression:function(a,b,c){var d=new f(b,c,a);return d.dynamicDeps&&(this.dynamicDeps=!0),d},createLiteral:function(a){return new d(a.value)},createArrayExpression:function(a){for(var b=0;b<a.length;b++)a[b]=i(a[b]);return function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(a[e](b,c));return d}},createProperty:function(a,b,c){return{key:b instanceof e?b.name:b.value,value:c}},createObjectExpression:function(a){for(var b=0;b<a.length;b++)a[b].value=i(a[b].value);return function(b,c){for(var d={},e=0;e<a.length;e++)d[a[e].key]=a[e].value(b,c);return d}},createFilter:function(a,b){this.filters.push(new g(a,b))},createAsExpression:function(a,b){this.expression=a,this.scopeIdent=b},createInExpression:function(a,b,c){this.expression=c,this.scopeIdent=a,this.indexIdent=b},createTopLevel:function(a){this.expression=a},createThisExpression:h},k.prototype={open:function(){return this.value_},discardChanges:function(){return this.value_},deliver:function(){},close:function(){}},l.prototype={getBinding:function(a,b,c){function d(){g.dynamicDeps&&f.startReset();var c=g.getValue(a,g.dynamicDeps?f:void 0,b);return g.dynamicDeps&&f.finishReset(),c}function e(c){return g.setValue(a,c,b),c}if(c)return this.getValue(a,void 0,b);var f=new CompoundObserver;this.getValue(a,f,b);var g=this;return new ObserverTransform(f,d,e,!0)},getValue:function(a,b,c){for(var d=i(this.expression)(a,b),e=0;e<this.filters.length;e++)d=this.filters[e].transform(d,!1,c,a,b);return d},setValue:function(a,b,c){for(var d=this.filters?this.filters.length:0;d-->0;)b=this.filters[d].transform(b,!0,c,a);return this.expression.setValue?this.expression.setValue(a,b):void 0}};var v={};["webkitAnimationStart","webkitAnimationEnd","webkitTransitionEnd","DOMFocusOut","DOMFocusIn","DOMMouseScroll"].forEach(function(a){v[a.toLowerCase()]=a});var w="@"+Math.random().toString(36).slice(2);r.prototype={styleObject:function(a){var b=[];for(var c in a)b.push(m(c)+": "+a[c]);return b.join("; ")},tokenList:function(a){var b=[];for(var c in a)a[c]&&b.push(c);return b.join(" ")},prepareInstancePositionChanged:function(a){var b=a.polymerExpressionIndexIdent_;if(b)return function(a,c){a.model[b]=c}},prepareBinding:function(a,c,d){var e=Path.get(a);if(n(c))return e.valid?q(e,c,this):void console.error("on-* bindings must be simple path expressions");{if(!e.valid)return b(a,c,d,this);if(1==e.length)return function(a,b,c){if(c)return e.getValueFrom(a);var d=o(a,e[0]);return new PathObserver(d,e)}}},prepareInstanceModel:function(a){var b=a.polymerExpressionScopeIdent_;if(b){var c=a.templateInstance?a.templateInstance.model:a.model,d=a.polymerExpressionIndexIdent_;return function(a){var e=Object.create(c);return e[b]=a,e[d]=void 0,e[w]=c,e}}}},a.PolymerExpressions=r,a.exposeGetExpression&&(a.getExpression_=c),a.PolymerExpressions.prepareEventBinding=q}(this),function(a){function b(){e||(e=!0,a.endOfMicrotask(function(){e=!1,logFlags.data&&console.group("Platform.flush()"),a.performMicrotaskCheckpoint(),logFlags.data&&console.groupEnd()}))}var c=document.createElement("style");c.textContent="template {display: none !important;} /* injected by platform.js */";var d=document.querySelector("head");d.insertBefore(c,d.firstChild);var e,f=125;if(window.addEventListener("WebComponentsReady",function(){b(),Observer.hasObjectObserve||(a.flushPoll=setInterval(b,f))}),window.CustomElements&&!CustomElements.useNative){var g=Document.prototype.importNode;Document.prototype.importNode=function(a,b){var c=g.call(this,a,b);return CustomElements.upgradeAll(c),c}}a.flush=b}(window.Platform);
//# sourceMappingURL=platform.js.map;


  // upgrade polymer-body last so that it can contain other imported elements
  document.addEventListener('polymer-ready', function() {
    
    Polymer('polymer-body', Platform.mixin({

      created: function() {
        this.template = document.createElement('template');
        var body = wrap(document).body;
        var c$ = body.childNodes.array();
        for (var i=0, c; (c=c$[i]); i++) {
          if (c.localName !== 'script') {
            this.template.content.appendChild(c);
          }
        }
        // snarf up user defined model
        window.model = this;
      },

      parseDeclaration: function(elementElement) {
        this.lightFromTemplate(this.template);
      }

    }, window.model));

  });

  ;
// Copyright (c) 2012 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// @version: 0.2.0-4171728
Polymer={},"function"==typeof window.Polymer&&(Polymer={}),function(a){function b(a,b){return a&&b&&Object.getOwnPropertyNames(b).forEach(function(c){var d=Object.getOwnPropertyDescriptor(b,c);d&&(Object.defineProperty(a,c,d),"function"==typeof d.value&&(d.value.nom=c))}),a}a.extend=b}(Polymer),function(a){function b(a,b,d){return a?a.stop():a=new c(this),a.go(b,d),a}var c=function(a){this.context=a,this.boundComplete=this.complete.bind(this)};c.prototype={go:function(a,b){this.callback=a;var c;b?(c=setTimeout(this.boundComplete,b),this.handle=function(){clearTimeout(c)}):(c=requestAnimationFrame(this.boundComplete),this.handle=function(){cancelAnimationFrame(c)})},stop:function(){this.handle&&(this.handle(),this.handle=null)},complete:function(){this.handle&&(this.stop(),this.callback.call(this.context))}},a.job=b}(Polymer),function(){var a={};HTMLElement.register=function(b,c){a[b]=c},HTMLElement.getPrototypeForTag=function(b){var c=b?a[b]:HTMLElement.prototype;return c||Object.getPrototypeOf(document.createElement(b))};var b=Event.prototype.stopPropagation;Event.prototype.stopPropagation=function(){this.cancelBubble=!0,b.apply(this,arguments)}}(Polymer),function(a){function b(a){var c=b.caller,g=c.nom,h=c._super;if(h||(g||(g=c.nom=e.call(this,c)),g||console.warn("called super() on a method not installed declaratively (has no .nom property)"),h=d(c,g,f(this))),h){var i=h[g];return i._super||d(i,g,h),i.apply(this,a||[])}}function c(a,b,c){for(;a;){if(a[b]!==c&&a[b])return a;a=f(a)}}function d(a,b,d){return a._super=c(d,b,a),a._super&&(a._super[b].nom=b),a._super}function e(a){for(var b=this.__proto__;b&&b!==HTMLElement.prototype;){for(var c,d=Object.getOwnPropertyNames(b),e=0,f=d.length;f>e&&(c=d[e]);e++){var g=Object.getOwnPropertyDescriptor(b,c);if("function"==typeof g.value&&g.value===a)return c}b=b.__proto__}}function f(a){return a.__proto__}a.super=b}(Polymer),function(a){function b(a,b){var d=typeof b;return b instanceof Date&&(d="date"),c[d](a,b)}var c={string:function(a){return a},date:function(a){return new Date(Date.parse(a)||Date.now())},"boolean":function(a){return""===a?!0:"false"===a?!1:!!a},number:function(a){var b=parseFloat(a);return 0===b&&(b=parseInt(a)),isNaN(b)?a:b},object:function(a,b){if(null===b)return a;try{return JSON.parse(a.replace(/'/g,'"'))}catch(c){return a}},"function":function(a,b){return b}};a.deserializeValue=b}(Polymer),function(a){var b=a.extend,c={};c.declaration={},c.instance={},c.publish=function(a,c){for(var d in a)b(c,a[d])},a.api=c}(Polymer),function(a){var b={async:function(a,b,c){Platform.flush(),b=b&&b.length?b:[b];var d=function(){(this[a]||a).apply(this,b)}.bind(this),e=c?setTimeout(d,c):requestAnimationFrame(d);return c?e:1/e},cancelAsync:function(a){1>a?cancelAnimationFrame(Math.round(1/a)):clearTimeout(a)},fire:function(a,b,c,d,e){var f=c||this,b=b||{},g=new CustomEvent(a,{bubbles:void 0!==d?d:!0,cancelable:void 0!==e?e:!0,detail:b});return f.dispatchEvent(g),g},asyncFire:function(){this.async("fire",arguments)},classFollows:function(a,b,c){b&&b.classList.remove(c),a&&a.classList.add(c)}},c=function(){},d={};b.asyncMethod=b.async,a.api.instance.utils=b,a.nop=c,a.nob=d}(Polymer),function(a){var b=window.logFlags||{},c="on-",d={EVENT_PREFIX:c,addHostListeners:function(){var a=this.eventDelegates;b.events&&Object.keys(a).length>0&&console.log("[%s] addHostListeners:",this.localName,a);var d,e,f=this;for(var g in a)e=c+g,(d=PolymerExpressions.prepareEventBinding(Path.get(a[g]),e,{resolveEventHandler:function(a,b){var c=b.getValueFrom(f);return c?c.bind(f):void 0}}))(this,this,!1)},dispatchMethod:function(a,c,d){if(a){b.events&&console.group("[%s] dispatch [%s]",a.localName,c);var e="function"==typeof c?c:a[c];e&&e[d?"apply":"call"](a,d),b.events&&console.groupEnd(),Platform.flush()}}};a.api.instance.events=d}(Polymer),function(a){var b={copyInstanceAttributes:function(){var a=this._instanceAttributes;for(var b in a)this.hasAttribute(b)||this.setAttribute(b,a[b])},takeAttributes:function(){if(this._publishLC)for(var a,b=0,c=this.attributes,d=c.length;(a=c[b])&&d>b;b++)this.attributeToProperty(a.name,a.value)},attributeToProperty:function(b,c){var b=this.propertyForAttribute(b);if(b){if(c&&c.search(a.bindPattern)>=0)return;var d=this[b],c=this.deserializeValue(c,d);c!==d&&(this[b]=c)}},propertyForAttribute:function(a){var b=this._publishLC&&this._publishLC[a];return b},deserializeValue:function(b,c){return a.deserializeValue(b,c)},serializeValue:function(a,b){return"boolean"===b?a?"":void 0:"object"!==b&&"function"!==b&&void 0!==a?a:void 0},reflectPropertyToAttribute:function(a){var b=typeof this[a],c=this.serializeValue(this[a],b);void 0!==c?this.setAttribute(a,c):"boolean"===b&&this.removeAttribute(a)}};a.api.instance.attributes=b}(Polymer),function(a){function b(a,b,d){c.bind&&console.log(e,inB.localName||"object",inPath,a.localName,b);var f=d.discardChanges();return(null===f||void 0===f)&&d.setValue(a[b]),Observer.defineComputedProperty(a,b,d)}var c=window.logFlags||{},d={observeProperties:function(){var a=this._observeNames,b=this._publishNames;if(a&&a.length||b&&b.length){for(var c,d=this._propertyObserver=new CompoundObserver,e=0,f=a.length;f>e&&(c=a[e]);e++){d.addPath(this,c);var g=Object.getOwnPropertyDescriptor(this.__proto__,c);g&&g.value&&this.observeArrayValue(c,g.value,null)}for(var c,e=0,f=b.length;f>e&&(c=b[e]);e++)this.observe&&void 0!==this.observe[c]||d.addPath(this,c);d.open(this.notifyPropertyChanges,this)}},notifyPropertyChanges:function(a,b,c){var d,e,f={};for(var g in b)d=c[2*g+1],void 0!==this.publish[d]&&this.reflectPropertyToAttribute(d),e=this.observe[d],e&&(this.observeArrayValue(d,a[g],b[g]),f[e]||(f[e]=!0,this.invokeMethod(e,[b[g],a[g],arguments])))},observeArrayValue:function(a,b,d){var e=this.observe[a];if(e&&(Array.isArray(d)&&(c.observe&&console.log("[%s] observeArrayValue: unregister observer [%s]",this.localName,a),this.unregisterObserver(a+"__array")),Array.isArray(b))){c.observe&&console.log("[%s] observeArrayValue: register observer [%s]",this.localName,a,b);var f=new ArrayObserver(b);f.open(function(a,b){this.invokeMethod(e,[b])},this),this.registerObserver(a+"__array",f)}},bindProperty:function(a,c){return b(this,a,c)},unbindAllProperties:function(){this._propertyObserver&&this._propertyObserver.close(),this.unregisterObservers()},unbindProperty:function(a){return this.unregisterObserver(a)},invokeMethod:function(a,b){var c=this[a]||a;"function"==typeof c&&c.apply(this,b)},registerObserver:function(a,b){var c=this._observers||(this._observers={});c[a]=b},unregisterObserver:function(a){var b=this._observers;return b&&b[a]?(b[a].close(),b[a]=null,!0):void 0},unregisterObservers:function(){if(this._observers){for(var a,b,c=Object.keys(this._observers),d=0,e=c.length;e>d&&(a=c[d]);d++)b=this._observers[a],b.close();this._observers={}}}},e="[%s]: bindProperties: [%s] to [%s].[%s]";a.api.instance.properties=d}(Polymer),function(a){function b(a){for(;a.parentNode;){if(a.lightDomController)return a;a=a.parentNode}return a.host}function c(a){e(a,d)}function d(a){a.unbindAll()}function e(a,b){if(a){b(a);for(var c=a.firstChild;c;c=c.nextSibling)e(c,b)}}var f=window.logFlags||0,g=(a.api.instance.events,new PolymerExpressions);g.resolveEventHandler=function(a,c,d){var e=b(d);if(e){var f=c.getValueFrom(e);if(f)return f.bind(e)}};var h={syntax:g,instanceTemplate:function(a){return a.createInstance(this,this.syntax)},bind:function(a,b){this._elementPrepared||this.prepareElement();var c=this.propertyForAttribute(a);if(c){this.unbind(a);var d=this.bindProperty(c,b);return d.path=b.path_,this.reflectPropertyToAttribute(c),this.bindings[a]=d}return this.mixinSuper(arguments)},asyncUnbindAll:function(){this._unbound||(f.unbind&&console.log("[%s] asyncUnbindAll",this.localName),this._unbindAllJob=this.job(this._unbindAllJob,this.unbindAll,0))},unbindAll:function(){if(!this._unbound){this.unbindAllProperties(),this.super();for(var a=this.shadowRoot;a;)c(a),a=a.olderShadowRoot;this._unbound=!0}},cancelUnbindAll:function(a){return this._unbound?void(f.unbind&&console.warn("[%s] already unbound, cannot cancel unbindAll",this.localName)):(f.unbind&&console.log("[%s] cancelUnbindAll",this.localName),this._unbindAllJob&&(this._unbindAllJob=this._unbindAllJob.stop()),void(a||e(this.shadowRoot,function(a){a.cancelUnbindAll&&a.cancelUnbindAll()})))}},i=/\{\{([^{}]*)}}/;a.bindPattern=i,a.api.instance.mdv=h}(Polymer),function(a){function b(a){return a.hasOwnProperty("PolymerBase")}function c(){}var d=0,e={PolymerBase:!0,job:Polymer.job,"super":Polymer.super,created:function(){},ready:function(){},createdCallback:function(){this.created(),(this.ownerDocument.defaultView||this.alwaysPrepare||d>0)&&this.prepareElement()},prepareElement:function(){this._elementPrepared=!0,this.shadowRoots={},this.observeProperties(),this.copyInstanceAttributes(),this.takeAttributes(),this.addHostListeners(),d++,this.parseDeclarations(this.__proto__),d--,this.removeAttribute("unresolved"),this.ready()},attachedCallback:function(){this._elementPrepared||this.prepareElement(),this.cancelUnbindAll(!0),this.attached&&this.attached(),this.enteredView&&this.enteredView()},detachedCallback:function(){this.preventDispose||this.asyncUnbindAll(),this.detached&&this.detached(),this.leftView&&this.leftView()},enteredViewCallback:function(){this.attachedCallback()},leftViewCallback:function(){this.detachedCallback()},enteredDocumentCallback:function(){this.attachedCallback()},leftDocumentCallback:function(){this.detachedCallback()},parseDeclarations:function(a){a&&a.element&&(this.parseDeclarations(a.__proto__),a.parseDeclaration.call(this,a.element))},parseDeclaration:function(a){var b=this.fetchTemplate(a);if(b){var c=this.shadowFromTemplate(b);this.shadowRoots[a.name]=c}},fetchTemplate:function(a){return a.querySelector("template")},shadowFromTemplate:function(a){if(a){var b=this.createShadowRoot();b.resetStyleInheritance=this.resetStyleInheritance;var c=this.instanceTemplate(a);return b.appendChild(c),this.shadowRootReady(b,a),b}},lightFromTemplate:function(a){if(a){this.lightDomController=!0;var b=this.instanceTemplate(a);return this.appendChild(b),this.shadowRootReady(this,a),b}},shadowRootReady:function(a){this.marshalNodeReferences(a),PointerGestures.register(a)},marshalNodeReferences:function(a){var b=this.$=this.$||{};if(a)for(var c,d=a.querySelectorAll("[id]"),e=0,f=d.length;f>e&&(c=d[e]);e++)b[c.id]=c},attributeChangedCallback:function(a){"class"!==a&&"style"!==a&&this.attributeToProperty(a,this.getAttribute(a)),this.attributeChanged&&this.attributeChanged.apply(this,arguments)},onMutation:function(a,b){var c=new MutationObserver(function(a){b.call(this,c,a),c.disconnect()}.bind(this));c.observe(a,{childList:!0,subtree:!0})}};c.prototype=e,e.constructor=c,a.Base=c,a.isBase=b,a.api.instance.base=e}(Polymer),function(a){function b(a){return a.__proto__}var c=(window.logFlags||{},"element"),d="controller",e={STYLE_SCOPE_ATTRIBUTE:c,installControllerStyles:function(){var a=this.findStyleController();if(a&&!this.scopeHasElementStyle(a,d)){for(var c=b(this),e="";c&&c.element;)e+=c.element.cssTextForScope(d),c=b(c);if(e){var f=this.element.cssTextToScopeStyle(e,d);Polymer.applyStyleToScope(f,a)}}},findStyleController:function(){if(window.ShadowDOMPolyfill)return wrap(document.head);for(var a=this;a.parentNode;)a=a.parentNode;return a===document?document.head:a},scopeHasElementStyle:function(a,b){var d=c+"="+this.localName+"-"+b;return a.querySelector("style["+d+"]")}};a.api.instance.styles=e}(Polymer),function(a){function b(a,b){if(f[a])throw"Already registered (Polymer) prototype for element "+a;e(a,b),d(a)}function c(a,b){h[a]=b}function d(a){h[a]&&(h[a].registerWhenReady(),delete h[a])}function e(a,b){return i[a]=b||{}}function f(a){return i[a]}var g=a.extend,h=(a.api,{}),i={};a.getRegisteredPrototype=f,a.waitingForPrototype=c,window.Polymer=b,g(Polymer,a);var j=Platform.deliverDeclarations();if(j)for(var k,l=0,m=j.length;m>l&&(k=j[l]);l++)b.apply(null,k)}(Polymer),function(a){var b={resolveElementPaths:function(a){Platform.urlResolver.resolveDom(a)},addResolvePathApi:function(){var a=this.getAttribute("assetpath")||"",b=new URL(a,this.ownerDocument.baseURI);this.prototype.resolvePath=function(a,c){var d=new URL(a,c||b);return d.href}}};a.api.declaration.path=b}(Polymer),function(a){function b(a,b){var c=new URL(a.getAttribute("href"),b).href;return"@import '"+c+"';"}function c(a,b){if(a){var c=d(a.textContent),e=a.getAttribute(h);e&&c.setAttribute(h,e),b.appendChild(c)}}function d(a,b){b=b||document,b=b.createElement?b:b.ownerDocument;var c=b.createElement("style");return c.textContent=a,c}function e(a){return a&&a.__resource||""}function f(a,b){return p?p.call(a,b):void 0}var g=(window.logFlags||{},a.api.instance.styles),h=g.STYLE_SCOPE_ATTRIBUTE,i="style",j="@import",k="link[rel=stylesheet]",l="global",m="polymer-scope",n={loadStyles:function(a){var b=this.templateContent();b&&this.convertSheetsToStyles(b);var c=this.findLoadableStyles(b);c.length?Platform.styleResolver.loadStyles(c,a):a&&a()},convertSheetsToStyles:function(a){for(var c,e,f=a.querySelectorAll(k),g=0,h=f.length;h>g&&(c=f[g]);g++){e=d(b(c,this.ownerDocument.baseURI),this.ownerDocument);var i=c.getAttribute(m);i&&e.setAttribute(m,i),c.parentNode.replaceChild(e,c)}},findLoadableStyles:function(a){var b=[];if(a)for(var c,d=a.querySelectorAll(i),e=0,f=d.length;f>e&&(c=d[e]);e++)c.textContent.match(j)&&b.push(c);return b},installSheets:function(){this.cacheSheets(),this.cacheStyles(),this.installLocalSheets(),this.installGlobalStyles()},cacheSheets:function(){this.sheets=this.findNodes(k),this.sheets.forEach(function(a){a.parentNode&&a.parentNode.removeChild(a)})},cacheStyles:function(){this.styles=this.findNodes(i+"["+m+"]"),this.styles.forEach(function(a){a.parentNode&&a.parentNode.removeChild(a)})},installLocalSheets:function(){var a=this.sheets.filter(function(a){return!a.hasAttribute(m)}),b=this.templateContent();if(b){var c="";if(a.forEach(function(a){c+=e(a)+"\n"}),c){var f=d(c,this.ownerDocument);b.insertBefore(f,b.firstChild)}}},findNodes:function(a,b){var c=this.querySelectorAll(a).array(),d=this.templateContent();if(d){var e=d.querySelectorAll(a).array();c=c.concat(e)}return b?c.filter(b):c},templateContent:function(){var a=this.querySelector("template");return a&&templateContent(a)},installGlobalStyles:function(){var a=this.styleForScope(l);c(a,document.head)},cssTextForScope:function(a){var b="",c="["+m+"="+a+"]",d=function(a){return f(a,c)},g=this.sheets.filter(d);g.forEach(function(a){b+=e(a)+"\n\n"});var h=this.styles.filter(d);return h.forEach(function(a){b+=a.textContent+"\n\n"}),b},styleForScope:function(a){var b=this.cssTextForScope(a);return this.cssTextToScopeStyle(b,a)},cssTextToScopeStyle:function(a,b){if(a){var c=d(a);return c.setAttribute(h,this.getAttribute("name")+"-"+b),c}}},o=HTMLElement.prototype,p=o.matches||o.matchesSelector||o.webkitMatchesSelector||o.mozMatchesSelector;a.api.declaration.styles=n,a.applyStyleToScope=c}(Polymer),function(a){var b=(window.logFlags||{},a.api.instance.events),c=b.EVENT_PREFIX,d={parseHostEvents:function(){var a=this.prototype.eventDelegates;this.addAttributeDelegates(a)},addAttributeDelegates:function(a){for(var b,c=0;b=this.attributes[c];c++)this.hasEventPrefix(b.name)&&(a[this.removeEventPrefix(b.name)]=b.value.replace("{{","").replace("}}","").trim())},hasEventPrefix:function(a){return a&&"o"===a[0]&&"n"===a[1]&&"-"===a[2]},removeEventPrefix:function(a){return a.slice(e)}},e=c.length;a.api.declaration.events=d}(Polymer),function(a){var b={inferObservers:function(a){var b,c=a.observe;for(var d in a)"Changed"===d.slice(-7)&&(c||(c=a.observe={}),b=d.slice(0,-7),c[b]=c[b]||d)},explodeObservers:function(a){var b=a.observe;if(b){var c={};for(var d in b)for(var e,f=d.split(" "),g=0;e=f[g];g++)c[e]=b[d];a.observe=c}},optimizePropertyMaps:function(a){if(a.observe){var b=a._observeNames=[];for(var c in a.observe)for(var d,e=c.split(" "),f=0;d=e[f];f++)b.push(d)}if(a.publish){var b=a._publishNames=[];for(var c in a.publish)b.push(c)}},publishProperties:function(a,b){var c=a.publish;c&&(this.requireProperties(c,a,b),a._publishLC=this.lowerCaseMap(c))},requireProperties:function(a,b,c){for(var d in a)void 0===b[d]&&void 0===c[d]&&(b[d]=a[d])},lowerCaseMap:function(a){var b={};for(var c in a)b[c.toLowerCase()]=c;return b}};a.api.declaration.properties=b}(Polymer),function(a){var b="attributes",c=/\s|,/,d={inheritAttributesObjects:function(a){this.inheritObject(a,"publishLC"),this.inheritObject(a,"_instanceAttributes")},publishAttributes:function(a,d){var e=this.getAttribute(b);if(e)for(var f,g=a.publish||(a.publish={}),h=e.split(c),i=0,j=h.length;j>i;i++)f=h[i].trim(),f&&void 0===g[f]&&void 0===d[f]&&(g[f]=null)},accumulateInstanceAttributes:function(){for(var a,b=this.prototype._instanceAttributes,c=this.attributes,d=0,e=c.length;e>d&&(a=c[d]);d++)this.isInstanceAttribute(a.name)&&(b[a.name]=a.value)},isInstanceAttribute:function(a){return!this.blackList[a]&&"on-"!==a.slice(0,3)},blackList:{name:1,"extends":1,constructor:1,noscript:1,assetpath:1,"cache-csstext":1}};d.blackList[b]=1,a.api.declaration.attributes=d}(Polymer),function(a){function b(a){if(!Object.__proto__){var b=Object.getPrototypeOf(a);a.__proto__=b,d(b)&&(b.__proto__=Object.getPrototypeOf(b))}}var c=a.api,d=a.isBase,e=a.extend,f={register:function(a,b){this.buildPrototype(a,b),this.registerPrototype(a,b),this.publishConstructor()},buildPrototype:function(b,c){var d=a.getRegisteredPrototype(b),e=this.generateBasePrototype(c);this.desugarBeforeChaining(d,e),this.prototype=this.chainPrototypes(d,e),this.desugarAfterChaining(b,c)},desugarBeforeChaining:function(a,b){a.element=this,this.publishAttributes(a,b),this.publishProperties(a,b),this.inferObservers(a),this.explodeObservers(a)},chainPrototypes:function(a,c){this.inheritMetaData(a,c);var d=this.chainObject(a,c);return b(d),d},inheritMetaData:function(a,b){this.inheritObject("observe",a,b),this.inheritObject("publish",a,b),this.inheritObject("_publishLC",a,b),this.inheritObject("_instanceAttributes",a,b),this.inheritObject("eventDelegates",a,b)},desugarAfterChaining:function(a,b){this.optimizePropertyMaps(this.prototype),this.installSheets(),this.resolveElementPaths(this),this.accumulateInstanceAttributes(),this.parseHostEvents(),this.addResolvePathApi(),window.ShadowDOMPolyfill&&Platform.ShadowCSS.shimStyling(this.templateContent(),a,b),this.prototype.registerCallback&&this.prototype.registerCallback(this)},publishConstructor:function(){var a=this.getAttribute("constructor");a&&(window[a]=this.ctor)},generateBasePrototype:function(a){var b=this.findBasePrototype(a);if(!b){var b=HTMLElement.getPrototypeForTag(a);b=this.ensureBaseApi(b),g[a]=b}return b},findBasePrototype:function(a){return g[a]},ensureBaseApi:function(a){if(a.PolymerBase)return a;var b=Object.create(a);return c.publish(c.instance,b),this.mixinMethod(b,a,c.instance.mdv,"bind"),b},mixinMethod:function(a,b,c,d){var e=function(a){return b[d].apply(this,a)};a[d]=function(){return this.mixinSuper=e,c[d].apply(this,arguments)}},inheritObject:function(a,b,c){var d=b[a]||{};b[a]=this.chainObject(d,c[a])},registerPrototype:function(a,b){var c={prototype:this.prototype},d=this.findTypeExtension(b);d&&(c.extends=d),HTMLElement.register(a,this.prototype),this.ctor=document.registerElement(a,c),this.prototype.constructor=this.ctor},findTypeExtension:function(a){if(a&&a.indexOf("-")<0)return a;var b=this.findBasePrototype(a);return b.element?this.findTypeExtension(b.element.extends):void 0}},g={};f.chainObject=Object.__proto__?function(a,b){return a&&b&&a!==b&&(a.__proto__=b),a}:function(a,b){if(a&&b&&a!==b){var c=Object.create(b);a=e(c,a)}return a},c.declaration.prototype=f}(Polymer),function(a){function b(a){return document.contains(a)?g:f}function c(){return f.length?f[0]:g[0]}function d(a){e.waitToFlush=!0,HTMLImports.whenImportsReady(function(){e.addReadyCallback(a),e.waitToFlush=!1,e.check()})}var e={wait:function(a){return-1===this.indexOf(a)&&-1===h.indexOf(a)&&this.add(a),0!==this.indexOf(a)},add:function(a){b(a).push(a)},indexOf:function(a){var c=b(a).indexOf(a);return c>=0&&document.contains(a)&&(c+=HTMLImports.useNative||HTMLImports.ready?f.length:1e9),c},register:function(a){var b=this.remove(a);b&&(h.push(b),this.check())},remove:function(a){var c=this.indexOf(a);if(0===c)return b(a).shift()},check:function(){var a=this.nextElement();return a&&a.registerWhenReady(),this.canFlush()?(this.flush(),!0):void 0},nextElement:function(){return c()},canFlush:function(){return!this.waitToFlush&&this.isEmpty()},isEmpty:function(){return!f.length&&!g.length},flush:function(){CustomElements.ready=!1;for(var a;h.length;)a=h.shift(),a._register();CustomElements.upgradeDocumentTree(document),CustomElements.ready=!0,this.flushReadyCallbacks()},flushReadyCallbacks:function(){if(i)for(var a;i.length;)(a=i.shift())()},addReadyCallback:function(a){a&&i.push(a)},waitToFlush:!0},f=[],g=[],h=[],i=[];a.queue=e,a.whenPolymerReady=d}(Polymer),function(a){function b(a,b){a?(document.head.appendChild(a),d(b)):b&&b()}function c(a,c){if(a&&a.length){for(var d,e,f=document.createDocumentFragment(),g=0,h=a.length;h>g&&(d=a[g]);g++)e=document.createElement("link"),e.rel="import",e.href=d,f.appendChild(e);b(f,c)}else c&&c()}var d=a.whenPolymerReady;a.import=c,a.importElements=b}(Polymer),function(a){function b(a){return Boolean(HTMLElement.getPrototypeForTag(a))}function c(a){return a&&a.indexOf("-")>=0}var d=a.extend,e=a.api,f=a.queue,g=a.whenPolymerReady,h=a.getRegisteredPrototype,i=a.waitingForPrototype,j=d(Object.create(HTMLElement.prototype),{createdCallback:function(){this.getAttribute("name")&&this.init()},init:function(){this.name=this.getAttribute("name"),this.extends=this.getAttribute("extends"),this.loadResources(),this.registerWhenReady()},registerWhenReady:function(){this.registered||this.waitingForPrototype(this.name)||this.waitingForQueue()||this.waitingForResources()||f.register(this)},_register:function(){c(this.extends)&&!b(this.extends)&&console.warn("%s is attempting to extend %s, an unregistered element or one that was not registered with Polymer.",this.name,this.extends),this.register(this.name,this.extends),this.registered=!0},waitingForPrototype:function(a){return h(a)?void 0:(i(a,this),this.handleNoScript(a),!0)},handleNoScript:function(a){if(this.hasAttribute("noscript")&&!this.noscript)if(this.noscript=!0,window.CustomElements&&!CustomElements.useNative)Polymer(a);else{var b=document.createElement("script");b.textContent="Polymer('"+a+"');",this.appendChild(b)}},waitingForResources:function(){return this._needsResources},waitingForQueue:function(){return f.wait(this)},loadResources:function(){this._needsResources=!0,this.loadStyles(function(){this._needsResources=!1,this.registerWhenReady()}.bind(this))}});e.publish(e.declaration,j),a.getRegisteredPrototype=h,g(function(){document.body.removeAttribute("unresolved"),document.dispatchEvent(new CustomEvent("polymer-ready",{bubbles:!0}))}),document.registerElement("polymer-element",{prototype:j})}(Polymer);
//# sourceMappingURL=polymer.js.map;

    Polymer('polymer-flex-layout', {
      vertical: false,
      isContainer: false,
      layoutContainer: null,
      enteredView: function() {
        this.installControllerStyles();
        this.layoutContainer = this.isContainer ? 
            this : (this.parentNode.host || this.parentNode);
        this.verticalChanged();
        this.alignChanged();
        this.justifyChanged();
      },
      leftView: function() {
        this.layoutContainer = null;
      },
      layoutContainerChanged: function(old) {
        if (old) {
          old.classList.remove('flexbox');
        }
        this.style.display = this.layoutContainer === this ? '' : 'none';
        if (this.layoutContainer) {
          this.layoutContainer.classList.add('flexbox');
        }
      },
      switchContainerClass: function(prefix, old, name) {
        if (this.layoutContainer && name) {
          this.layoutContainer.classList.switch(
              prefix + old, prefix + name);
        }
      },
      verticalChanged: function() {
        if (this.layoutContainer) {
          this.layoutContainer.classList.toggle('column', this.vertical);
        }
      },
      alignChanged: function(old) {
        this.switchContainerClass('align-', old, this.align);
      },
      justifyChanged: function(old) {
        this.switchContainerClass('justify-', old, this.justify);
      }
    });
  ;

    Polymer('polymer-page', {
      fullbleed: true,
      enteredView: function() {
        document.head.style.cssText += 'height: 100%; overflow: hidden; margin: 0;';
        document.body.style.cssText += 'position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; margin: 0;';
        document.body.style.transition = 'all 0.3s';
      }
    });
  ;

    Polymer('polymer-selection', {
      /**
       * If true, multiple selections are allowed.
       *
       * @attribute multi
       * @type boolean
       * @default false
       */
      multi: false,
      ready: function() {
        this.clear();
      },
      clear: function() {
        this.selection = [];
      },
      /**
       * Retrieves the selected item(s).
       * @method getSelection
       * @returns Returns the selected item(s). If the multi property is true,
       * getSelection will return an array, otherwise it will return 
       * the selected item or undefined if there is no selection.
      */
      getSelection: function() {
        return this.multi ? this.selection : this.selection[0];
      },
      /**
       * Indicates if a given item is selected.
       * @method isSelected
       * @param {any} item The item whose selection state should be checked.
       * @returns Returns true if `item` is selected.
      */
      isSelected: function(item) {
        return this.selection.indexOf(item) >= 0;
      },
      setItemSelected: function(item, isSelected) {
        if (item !== undefined && item !== null) {
          if (isSelected) {
            this.selection.push(item);
          } else {
            var i = this.selection.indexOf(item);
            if (i >= 0) {
              this.selection.splice(i, 1);
            }
          }
          this.fire("polymer-select", {isSelected: isSelected, item: item});
        }
      },
      /**
       * Set the selection state for a given `item`. If the multi property
       * is true, then the selected state of `item` will be toggled; otherwise
       * the `item` will be selected.
       * @method select
       * @param {any} item: The item to select.
      */
      select: function(item) {
        if (this.multi) {
          this.toggle(item);
        } else if (this.getSelection() !== item) {
          this.setItemSelected(this.getSelection(), false);
          this.setItemSelected(item, true);
        }
      },
      /**
       * Toggles the selection state for `item`.
       * @method toggle
       * @param {any} item: The item to toggle.
      */
      toggle: function(item) {
        this.setItemSelected(item, !this.isSelected(item));
      }
    });
  ;

    Polymer('polymer-selector', {
      /**
       * Gets or sets the selected element.  Default to use the index
       * of the item element.
       *
       * If you want a specific attribute value of the element to be
       * used instead of index, set "valueattr" to that attribute name.
       *
       * Example:
       *
       *     <polymer-selector valueattr="label" selected="foo">
       *       <div label="foo"></div>
       *       <div label="bar"></div>
       *       <div label="zot"></div>
       *     </polymer-selector>
       *
       * In multi-selection this should be an array of values.
       *
       * Example:
       *
       *     <polymer-selector id="selector" valueattr="label" multi>
       *       <div label="foo"></div>
       *       <div label="bar"></div>
       *       <div label="zot"></div>
       *     </polymer-selector>
       *
       *     this.$.selector.selected = ['foo', 'zot'];
       *
       * @attribute selected
       * @type Object
       * @default null
       */
      selected: null,
      /**
       * If true, multiple selections are allowed.
       *
       * @attribute multi
       * @type boolean
       * @default false
       */
      multi: false,
      /**
       * Specifies the attribute to be used for "selected" attribute.
       *
       * @attribute valueattr
       * @type string
       * @default 'name'
       */
      valueattr: 'name',
      /**
       * Specifies the CSS class to be used to add to the selected element.
       * 
       * @attribute selectedClass
       * @type string
       * @default 'polymer-selected'
       */
      selectedClass: 'polymer-selected',
      /**
       * Specifies the property to be used to set on the selected element
       * to indicate its active state.
       *
       * @attribute selectedProperty
       * @type string
       * @default 'active'
       */
      selectedProperty: 'active',
      /**
       * Returns the currently selected element. In multi-selection this returns
       * an array of selected elements.
       * 
       * @attribute selectedItem
       * @type Object
       * @default null
       */
      selectedItem: null,
      /**
       * In single selection, this returns the model associated with the
       * selected element.
       * 
       * @attribute selectedModel
       * @type Object
       * @default null
       */
      selectedModel: null,
      /**
       * In single selection, this returns the selected index.
       *
       * @attribute selectedIndex
       * @type number
       * @default -1
       */
      selectedIndex: -1,
      /**
       * The target element that contains items.  If this is not set 
       * polymer-selector is the container.
       * 
       * @attribute target
       * @type Object
       * @default null
       */
      target: null,
      /**
       * This can be used to query nodes from the target node to be used for 
       * selection items.  Note this only works if the 'target' property is set.
       *
       * Example:
       *
       *     <polymer-selector target="{{$.myForm}}" itemsSelector="input[type=radio]"></polymer-selector>
       *     <form id="myForm">
       *       <label><input type="radio" name="color" value="red"> Red</label> <br>
       *       <label><input type="radio" name="color" value="green"> Green</label> <br>
       *       <label><input type="radio" name="color" value="blue"> Blue</label> <br>
       *       <p>color = {{color}}</p>
       *     </form>
       * 
       * @attribute itemSelector
       * @type string
       * @default ''
       */
      itemsSelector: '',
      /**
       * The event that would be fired from the item element to indicate
       * it is being selected.
       *
       * @attribute activateEvent
       * @type string
       * @default 'tap'
       */
      activateEvent: 'tap',
      notap: false,
      ready: function() {
        this.activateListener = this.activateHandler.bind(this);
        this.observer = new MutationObserver(this.updateSelected.bind(this));
        if (!this.target) {
          this.target = this;
        }
      },
      get items() {
        var nodes = this.target !== this ? (this.itemsSelector ? 
            this.target.querySelectorAll(this.itemsSelector) : 
                this.target.children) : this.$.items.getDistributedNodes();
        return Array.prototype.filter.call(nodes || [], function(n) {
          return n && n.localName !== 'template';
        });
      },
      targetChanged: function(old) {
        if (old) {
          this.removeListener(old);
          this.observer.disconnect();
        }
        if (this.target) {
          this.addListener(this.target);
          this.observer.observe(this.target, {childList: true});
        }
      },
      addListener: function(node) {
        node.addEventListener(this.activateEvent, this.activateListener);
      },
      removeListener: function(node) {
        node.removeEventListener(this.activateEvent, this.activateListener);
      },
      get selection() {
        return this.$.selection.getSelection();
      },
      selectedChanged: function() {
        this.updateSelected();
      },
      updateSelected: function() {
        this.validateSelected();
        if (this.multi) {
          this.clearSelection();
          this.selected && this.selected.forEach(function(s) {
            this.valueToSelection(s);
          }, this);
        } else {
          this.valueToSelection(this.selected);
        }
      },
      validateSelected: function() {
        // convert to an array for multi-selection
        if (this.multi && !Array.isArray(this.selected) && 
            this.selected !== null && this.selected !== undefined) {
          this.selected = [this.selected];
        }
      },
      clearSelection: function() {
        if (this.multi) {
          this.selection.slice().forEach(function(s) {
            this.$.selection.setItemSelected(s, false);
          }, this);
        } else {
          this.$.selection.setItemSelected(this.selection, false);
        }
        this.selectedItem = null;
        this.$.selection.clear();
      },
      valueToSelection: function(value) {
        var item = (value === null || value === undefined) ? 
            null : this.items[this.valueToIndex(value)];
        this.$.selection.select(item);
      },
      updateSelectedItem: function() {
        this.selectedItem = this.selection;
      },
      selectedItemChanged: function() {
        if (this.selectedItem) {
          var t = this.selectedItem.templateInstance;
          this.selectedModel = t ? t.model : undefined;
        } else {
          this.selectedModel = null;
        }
        this.selectedIndex = this.selectedItem ? 
            parseInt(this.valueToIndex(this.selected)) : -1;
      },
      valueToIndex: function(value) {
        // find an item with value == value and return it's index
        for (var i=0, items=this.items, c; (c=items[i]); i++) {
          if (this.valueForNode(c) == value) {
            return i;
          }
        }
        // if no item found, the value itself is probably the index
        return value;
      },
      valueForNode: function(node) {
        return node[this.valueattr] || node.getAttribute(this.valueattr);
      },
      // events fired from <polymer-selection> object
      selectionSelect: function(e, detail) {
        this.updateSelectedItem();
        if (detail.item) {
          this.applySelection(detail.item, detail.isSelected);
        }
      },
      applySelection: function(item, isSelected) {
        if (this.selectedClass) {
          item.classList.toggle(this.selectedClass, isSelected);
        }
        if (this.selectedProperty) {
          item[this.selectedProperty] = isSelected;
        }
      },
      // event fired from host
      activateHandler: function(e) {
        if (!this.notap) {
          var i = this.findDistributedTarget(e.target, this.items);
          if (i >= 0) {
            var item = this.items[i];
            var s = this.valueForNode(item) || i;
            if (this.multi) {
              if (this.selected) {
                this.addRemoveSelected(s);
              } else {
                this.selected = [s];
              }
            } else {
              this.selected = s;
            }
            this.asyncFire('polymer-activate', {item: item});
          }
        }
      },
      addRemoveSelected: function(value) {
        var i = this.selected.indexOf(value);
        if (i >= 0) {
          this.selected.splice(i, 1);
        } else {
          this.selected.push(value);
        }
        this.valueToSelection(value);
      },
      findDistributedTarget: function(target, nodes) {
        // find first ancestor of target (including itself) that
        // is in nodes, if any
        while (target && target != this) {
          var i = Array.prototype.indexOf.call(nodes, target);
          if (i >= 0) {
            return i;
          }
          target = target.parentNode;
        }
      }
    });
  ;

		Polymer('polymer-key-helper', {
			ENTER_KEY: 13,
			ESCAPE_KEY: 27
		});
	;

    (function() {
      // track overlays for z-index and focus managemant
      var overlays = [];
      var trackOverlays = function(inOverlay) {
        if (inOverlay.opened) {
          //var overlayZ = window.getComputedStyle(inOverlay.target).zIndex;
          //var z0 = Math.max(currentOverlayZ(), overlayZ);
          var z0 = currentOverlayZ();
          overlays.push(inOverlay);
          var z1 = currentOverlayZ();
          if (z1 <= z0) {
            applyOverlayZ(inOverlay, z0);
          } 
        } else {
          var i = overlays.indexOf(inOverlay);
          if (i >= 0) {
            overlays.splice(i, 1);
            setZ(inOverlay, null);
          }
        }
      }
      
      var applyOverlayZ = function(inOverlay, inAboveZ) {
        setZ(inOverlay.target, inAboveZ + 2);
      }
      
      var setZ = function(inNode, inZ) {
        inNode.style.zIndex = inZ;
      }
    
      var currentOverlay = function() {
        return overlays[overlays.length-1];
      }
      
      var DEFAULT_Z = 10;
      
      var currentOverlayZ = function() {
        var z;
        var current = currentOverlay();
        if (current) {
          var z1 = window.getComputedStyle(current.target).zIndex;
          if (!isNaN(z1)) {
            z = Number(z1);
          }
        }
        return z || DEFAULT_Z;
      }
      
      var focusOverlay = function() {
        var current = currentOverlay();
        if (current) {
          current.applyFocus();
        }
      }
    
      Polymer('polymer-overlay', {
        /**
         * The target element.
         *
         * @attribute target
         * @type Object
         */
        target: null,
        /**
         * Set opened to true to show an overlay and to false to hide it.
         * A polymer-overlay may be made intially opened by setting its
         * opened attribute.
         * @attribute opened
         * @type boolean
         * @default false
         */
        opened: false,
        /**
         * By default an overlay will close automatically if the user
         * taps outside it or presses the escape key. Disable this
         * behavior by setting the autoCloseDisabled property to true.
         * @attribute autoCloseDisabled
         * @type boolean
         * @default false
         */
        autoCloseDisabled: false,
        /**
         * This property specifies the animation to play when the overlay is
         * opened/closed. It can be an array of two animations
         * [opening, closing], a single animation, an array of two strings, or
         * a string. The strings should the tag names of custom elements
         * descending from a polymer-animation. In the case of a single
         * animation the closing animation is the opening animation played
         * backwards.
         * @attribute transitions
         * @type polymer-animation
         * @type Array<polymer-animation>
         * @type string
         * @type Array<string>
         */
        transitions: null,
        timeout: 1000,
        captureEventType: 'tap',
        ready: function() {
          if (this.tabIndex === undefined) {
            this.tabIndex = -1;
          }
          this.setAttribute('touch-action', 'none');
        },
        enteredView: function() {
          this.installControllerStyles();
        },
        /** 
         * Toggle the opened state of the overlay.
         * @method toggle
         */
        toggle: function() {
          this.opened = !this.opened;
        },
        targetChanged: function(old) {
          if (this.target) {
            if (this.target.tabIndex === undefined) {
              this.target.tabIndex = -1;
            }
            this.target.classList.add('polymer-overlay');
            this.addListeners(this.target);
          }
          if (old) {
            old.classList.remove('polymer-overlay');
            this.removeListeners(old);
          }
        },
        listeners: {
          'tap': 'tapHandler',
          'keydown': 'keydownHandler'
        },
        addListeners: function(node) {
          for (e in this.listeners) {
            node.addEventListener(e, this[this.listeners[e]].bind(this));
          }
        },
        removeListeners: function(node) {
          for (e in this.listeners) {
            node.removeEventListener(e, this[this.listeners[e]].bind(this));
          }
        },
        openedChanged: function() {
          this.renderOpened();
          trackOverlays(this);
          this.async(function() {
            if (!this.autoCloseDisabled) {
              this.enableCaptureHandler(this.opened);
            }
          });
          this.enableResizeHandler(this.opened);
          this.fire('polymer-overlay-open', this.opened);
        },
        enableHandler: function(inEnable, inMethodName, inNode, inEventName, inCapture) {
          var m = 'bound' + inMethodName;
          this[m] = this[m] || this[inMethodName].bind(this);
          
          inNode[inEnable ? 'addEventListener' : 'removeEventListener'](
            inEventName, this[m], inCapture);
        },
        enableResizeHandler: function(inEnable) {
          this.enableHandler(inEnable, 'resizeHandler', window, 
            'resize');
        },
        enableCaptureHandler: function(inEnable) {
          this.enableHandler(inEnable, 'captureHandler', document, 
            this.captureEventType, true);
        },
        getFocusNode: function() {
          return this.target.querySelector('[autofocus]') || this.target;
        },
        // TODO(sorvell): nodes stay focused when they become un-focusable
        // due to an ancestory becoming display: none; file bug.
        applyFocus: function() {
          var focusNode = this.getFocusNode();
          if (this.opened) {
            focusNode.focus();
          } else {
            focusNode.blur();
            focusOverlay();
          }
        },
        positionTarget: function() {
          if (this.opened) {
            // vertically and horizontally center if not positioned
            var computedStyle = getComputedStyle(this.target);
            if (computedStyle.top === 'auto' && computedStyle.bottom === 'auto') {
              this.target.style.top = ((window.innerHeight - this.target.getBoundingClientRect().height) / 2) + 'px';
            }
            if (computedStyle.left === 'auto' && computedStyle.right === 'auto') {
              this.target.style.left = ((window.innerWidth - this.target.getBoundingClientRect().width) / 2) + 'px';
            }
          }
        },
        resetTargetPosition: function() {
          this.target.style.top = this.target.style.left = null;
        },
        get transition() {
          return (!Array.isArray(this.transitions) && this.transitions
              || this.opened && this.transitions && this.transitions[0]
              || !this.opened && this.transitions && this.transitions[1]);
        },
        applyTransition: function() {
          var animation = typeof this.transition === 'string' ?
              document.createElement(this.transition) : this.transition;
          // FIXME: Apply a default duration.
          if ((!animation.duration || animation.duration === 'auto') && !animation.type) {
            animation.duration = 0.3;
          }
          if (!animation.hasTarget()) {
            animation.target = this.target;
          }
          // Make the overlay visible while the animation is running.
          var transition = new ParGroup([
            animation.apply(),
            new Animation(this.target, [{'visibility': 'visible', 'display':'block'}])
          ], {fill: 'none'});
          transition.onend = this.completeOpening.bind(this);
          this.target.classList.add('animating');
          document.timeline.play(transition);
        },
        renderOpened: function() {
          this.target.classList.add('revealed');
          // continue styling after delay so display state can change
          // without aborting transitions
          this.async('continueRenderOpened');
        },
        continueRenderOpened: function() {
          this.positionTarget();
          if (this.transition) {
            this.applyTransition();
            // FIXME: Apply the class after the animation starts playing to
            // prevent a flicker at the end of the animation. Should be handled
            // in polymer-animation-start event but not working in polyfill
            this.async(function() {
              this.target.classList.toggle('opened', this.opened);
            }, null, 100);
          } else {
            this.target.classList.toggle('opened', this.opened);
            this.async('completeOpening');
          }
        },
        completeOpening: function() {
          this.target.classList.remove('animating');
          this.target.classList.toggle('revealed', this.opened);
          if (!this.opened) {
            this.resetTargetPosition();
          }
          this.applyFocus();
        },
        tapHandler: function(e) {
          if (e.target && e.target.hasAttribute('overlay-toggle')) {
            this.toggle();
          } else {
            if (this.autoCloseJob) {
              this.autoCloseJob.stop();
              this.autoCloseJob = null;
            }
          }
        },
        // TODO(sorvell): This approach will not work with modal. For
        // this we need a scrim.
        captureHandler: function(e) {
          if (!this.autoCloseDisabled && (currentOverlay() == this) && (this 
              != e.target) && !(this.contains(e.target))) {
            this.autoCloseJob = this.job(this.autoCloseJob, function() {
              this.opened = false;
            });
          }
        },
        keydownHandler: function(e) {
          if (!this.autoCloseDisabled && (e.keyCode == this.$.keyHelper.ESCAPE_KEY)) {
            this.opened = false;
            e.stopPropagation();
            e.cancelBubble = true;
          }
        },
        /**
         * Extensions of polymer-overlay should implement the resizeHandler
         * method to adjust the size and position of the overlay when the 
         * browser window resizes.
         * @method resizeHandler
         */
        resizeHandler: function() {
        }
      });
    })();
  ;

    Polymer('polymer-ui-overlay', {
      active: false,
      modal: false,
      backdrop: false,
      ready: function() {
        this.$.overlay.target = this;
      },
      toggle: function() {
        this.active = !this.active;
      }
    });
  ;

    (function(){
      Polymer('polymer-signals', {
        enteredView: function() {
          signals.push(this);
        },
        removed: function() {
          var i = signals.indexOf(this);
          if (i >= 0) {
            signals.splice(i, 1);
          }
        }
      });
      // private shared database
      var signals = [];
      // signal dispatcher
      function notify(name, data) {
        // convert generic-signal event to named-signal event
        var signal = new CustomEvent('polymer-signal-' + name, {
          bubbles: true,
          detail: data
        });
        // dispatch named-signal to all 'signals' instances,
        // only interested listeners will react
        signals.forEach(function(s) {
          s.dispatchEvent(signal);
        });
      }
      // signal listener at document
      document.addEventListener('polymer-signal', function(e) {
        notify(e.detail.name, e.detail.data);
      });
    })();
  ;

    (function() {
      var events, state;

      events = [
        "pointerdown",
        "pointerup",
        "pointermove",
      ];
      state = "awake";

      Polymer("route-power-manager", {
        /**
         * The amount of time to wait before dimming the screen, in milliseconds
         *
         * @attribute sleepDelay
         * @type int
         * @default 60000
         */
        sleepDelay: 60 * 1000,

        /**
         * Whether this power manager should automaticallly dim the screen
         *
         * @attribute auto
         * @type bool
         * @default false
         */
        auto: false,

        enteredView: function() {
          if(this.auto) {
            var parent = this.parentNode;
            for(var i = 0; i < events.length; i++) {
              parent.addEventListener(events[i], this.activity.bind(this));
            }
          }
          this.activity();
        },
        activity: function() {
          if(state != "awake") {
            this.wake();
          }
          if(this.auto) {
            if(this.timer) {
              clearTimeout(this.timer);
            }
            this.timer = setTimeout(this.sleep.bind(this), this.sleepDelay);
          }
        },
        wake: function() {
          state = "awake";
          this.setBrightness(1);
          this.fire("polymer-signal", {name: "wake"});
        },
        sleep: function() {
          if(this.timer) {
            clearTimeout(this.timer);
          }
          state = "asleep";
          this.setBrightness(0);
          this.fire("polymer-signal", {name: "sleep"});
        },
        setBrightness: function(brightness) {
          if(window.brightness) {
            window.brightness.setBrightness(brightness, function(status) {
              console.log("setBrightness success: ", status);
            }, function(status) {
              console.log("setBrightness failure: ", status);
            });
          }
        },
        fireWake: function() {
          this.fire("route-wake");
        },
        fireSleep: function() {
          this.fire("route-sleep");
        },
      });
    })();
  ;

    (function() {
      var socket;

      function init() {
        if(!socket) {
          socket = io.connect('http://'+location.host);
        }
      }

      Polymer("route-socket", {
        ready: function() {
          init();
        },
        on: function() {
          socket.on.apply(socket, arguments);
        },
        send: function() {
          socket.send.apply(socket, arguments);
        },
        emit: function() {
          socket.emit.apply(socket, arguments);
        },
        removeListener: function() {
          socket.removeListener.apply(socket, arguments);
        },
        get socket() {
          return socket;
        },
      })
    })();
  ;

    (function() {
      Polymer('route-state', {
        attached: function() {
          this.handler = this.stateHandler.bind(this);
          this.$.socket.on('state', this.handler);
        },
        stateHandler: function(values) {
          this.fire("route-state-change", {
            data: values,
          });
        },
      });
    })();
  ;

    (function() {
      // Heavily based on polymer-grid-layout
      Polymer("route-tile-layout", {
        nodes: null,
        layout: null,
        auto: false,
        created: function() {
          this.layout = [];
        },
        nodesChanged: function() {
          this._nodes = this.nodes;
          this.invalidate();
        },
        layoutChanged: function() {
          this.invalidate();
        },
        autoNodes: function() {
          this._nodes = this.parentNode.children.array().filter(function(node) {
            switch(node.localName) {
              case "route-tile-layout":
              case "template":
              case "style":
                return false
            }
            return true;
          });
        },
        // invalidate will relayout the nodes. It debounces calls so that
        // relayout isn't called too frequently
        invalidate: function() {
          if(this.layout && this.layout.length) {
            // this.job debounces layout, only letting it occur every N ms
            // debouncing: http://davidwalsh.name/function-debounce
            this.layoutJob = this.job(this.layoutJob, this.relayout);
          }
        },
        // Note: don't call directly, use invalidate() instead
        relayout: function() {
          if(!this._nodes || this.auto) {
            this.autoNodes();
          }
          layout(this.layout, this._nodes, this.parentNode);
          this.asyncFire("route-tile-layout");
        }
      });

      var colCount, rowCount;
      var offsetLeft, offsetTop;
      var unit;
      var m = 0;

      // TODO: this code tries to preserve actual position,
      // so 'unposition' is really 'naturalize' or something
      function unposition(box) {
        var style = box.style;
        //style.right = style.bottom = style.width = style.height = '';
        style.position = 'absolute';
        style.display = 'inline-block';
        style.boxSizing = style.mozBoxSizing = 'border-box';
      }

      function _position(style, maj, min, ext, a, b) {
        style[maj] = a + "px";
        // style[min] = b + "px";
        style[ext] = (b - a) + "px";
      }

      function position(elt, left, right, top, bottom) {
        elt.style["display"] = "block";
        _position(elt.style, 'top', 'bottom', 'height', top * unit + offsetTop, bottom * unit + offsetTop);
        _position(elt.style, 'left', 'right', 'width', left * unit + offsetLeft, right * unit + offsetLeft);
      }

      // Custom
      function calculateUnit(node, cols, rows) {
        var w = Math.floor(node.offsetWidth / cols),
            h = Math.floor(node.offsetHeight / rows);
        return Math.min(h, w);
      }

      function layout(matrix, anodes, parent) {
        nodes = anodes;

        rowCount = matrix.length;
        colCount = rowCount && matrix[0].length || 0;

        nodes.forEach(unposition);

        unit = calculateUnit(parent, colCount, rowCount);
        offsetLeft = Math.floor((parent.offsetWidth - colCount * unit) / 2);
        offsetTop = Math.floor((parent.offsetHeight - rowCount * unit) / 2);

        nodes.forEach(function(node, i) {
          // node indices are 1-based
          var n = i + 1;
          // boundary rails
          var l, r, t = 1e10, b = -1e10;
          matrix.forEach(function(vector, i) {
            var f = vector.indexOf(n);
            if (f > -1) {
              l = f;
              r = vector.lastIndexOf(n) + 1;
              t = Math.min(t, i);
              b = Math.max(b, i) + 1;
            }
          });
          if (l == undefined) {
            node.style.position = 'absolute';
            node.style.pointerEvents = 'none';
          } else {
            node.style.pointerEvents = '';
            position(node, l, r, t, b);
          }
        });
      }

    })();
  ;
/*! Hammer.JS - v1.0.9 - 2014-03-18
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(window, undefined) {
  'use strict';

/**
 * Hammer
 * use this to create instances
 * @param   {HTMLElement}   element
 * @param   {Object}        options
 * @returns {Hammer.Instance}
 * @constructor
 */
var Hammer = function(element, options) {
  return new Hammer.Instance(element, options || {});
};

Hammer.VERSION = '1.0.9';

// default settings
Hammer.defaults = {
  // add styles and attributes to the element to prevent the browser from doing
  // its native behavior. this doesnt prevent the scrolling, but cancels
  // the contextmenu, tap highlighting etc
  // set to false to disable this
  stop_browser_behavior: {
    // this also triggers onselectstart=false for IE
    userSelect       : 'none',
    // this makes the element blocking in IE10 >, you could experiment with the value
    // see for more options this issue; https://github.com/EightMedia/hammer.js/issues/241
    touchAction      : 'none',
    touchCallout     : 'none',
    contentZooming   : 'none',
    userDrag         : 'none',
    tapHighlightColor: 'rgba(0,0,0,0)'
  }

  //
  // more settings are defined per gesture at gestures.js
  //
};


// detect touchevents
Hammer.HAS_POINTEREVENTS = window.navigator.pointerEnabled || window.navigator.msPointerEnabled;
Hammer.HAS_TOUCHEVENTS = ('ontouchstart' in window);

// dont use mouseevents on mobile devices
Hammer.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android|silk/i;
Hammer.NO_MOUSEEVENTS = Hammer.HAS_TOUCHEVENTS && window.navigator.userAgent.match(Hammer.MOBILE_REGEX);

// eventtypes per touchevent (start, move, end)
// are filled by Event.determineEventTypes on setup
Hammer.EVENT_TYPES = {};

// interval in which Hammer recalculates current velocity in ms
Hammer.UPDATE_VELOCITY_INTERVAL = 16;

// hammer document where the base events are added at
Hammer.DOCUMENT = window.document;

// define these also as vars, for internal usage.
// direction defines
var DIRECTION_DOWN = Hammer.DIRECTION_DOWN = 'down';
var DIRECTION_LEFT = Hammer.DIRECTION_LEFT = 'left';
var DIRECTION_UP = Hammer.DIRECTION_UP = 'up';
var DIRECTION_RIGHT = Hammer.DIRECTION_RIGHT = 'right';

// pointer type
var POINTER_MOUSE = Hammer.POINTER_MOUSE = 'mouse';
var POINTER_TOUCH = Hammer.POINTER_TOUCH = 'touch';
var POINTER_PEN = Hammer.POINTER_PEN = 'pen';

// touch event defines
var EVENT_START = Hammer.EVENT_START = 'start';
var EVENT_MOVE = Hammer.EVENT_MOVE = 'move';
var EVENT_END = Hammer.EVENT_END = 'end';


// plugins and gestures namespaces
Hammer.plugins = Hammer.plugins || {};
Hammer.gestures = Hammer.gestures || {};


// if the window events are set...
Hammer.READY = false;

/**
 * setup events to detect gestures on the document
 */
function setup() {
  if(Hammer.READY) {
    return;
  }

  // find what eventtypes we add listeners to
  Event.determineEventTypes();

  // Register all gestures inside Hammer.gestures
  Utils.each(Hammer.gestures, function(gesture){
    Detection.register(gesture);
  });

  // Add touch events on the document
  Event.onTouch(Hammer.DOCUMENT, EVENT_MOVE, Detection.detect);
  Event.onTouch(Hammer.DOCUMENT, EVENT_END, Detection.detect);

  // Hammer is ready...!
  Hammer.READY = true;
}

var Utils = Hammer.utils = {
  /**
   * extend method,
   * also used for cloning when dest is an empty object
   * @param   {Object}    dest
   * @param   {Object}    src
   * @parm  {Boolean}  merge    do a merge
   * @returns {Object}    dest
   */
  extend: function extend(dest, src, merge) {
    for(var key in src) {
      if(dest[key] !== undefined && merge) {
        continue;
      }
      dest[key] = src[key];
    }
    return dest;
  },


  /**
   * for each
   * @param obj
   * @param iterator
   */
  each: function(obj, iterator, context) {
    var i, o;
    // native forEach on arrays
    if ('forEach' in obj) {
      obj.forEach(iterator, context);
    }
    // arrays
    else if(obj.length !== undefined) {
      for(i=-1; (o=obj[++i]);) {
        if (iterator.call(context, o, i, obj) === false) {
          return;
        }
      }
    }
    // objects
    else {
      for(i in obj) {
        if(obj.hasOwnProperty(i) &&
            iterator.call(context, obj[i], i, obj) === false) {
          return;
        }
      }
    }
  },

  /**
   * find if a node is in the given parent
   * used for event delegation tricks
   * @param   {HTMLElement}   node
   * @param   {HTMLElement}   parent
   * @returns {boolean}       has_parent
   */
  hasParent: function(node, parent) {
    while(node) {
      if(node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  },


  /**
   * get the center of all the touches
   * @param   {Array}     touches
   * @returns {Object}    center
   */
  getCenter: function getCenter(touches) {
    var valuesX = [], valuesY = [];

    Utils.each(touches, function(touch) {
      // I prefer clientX because it ignore the scrolling position
      valuesX.push(typeof touch.clientX !== 'undefined' ? touch.clientX : touch.pageX);
      valuesY.push(typeof touch.clientY !== 'undefined' ? touch.clientY : touch.pageY);
    });

    return {
      pageX: (Math.min.apply(Math, valuesX) + Math.max.apply(Math, valuesX)) / 2,
      pageY: (Math.min.apply(Math, valuesY) + Math.max.apply(Math, valuesY)) / 2
    };
  },


  /**
   * calculate the velocity between two points
   * @param   {Number}    delta_time
   * @param   {Number}    delta_x
   * @param   {Number}    delta_y
   * @returns {Object}    velocity
   */
  getVelocity: function getVelocity(delta_time, delta_x, delta_y) {
    return {
      x: Math.abs(delta_x / delta_time) || 0,
      y: Math.abs(delta_y / delta_time) || 0
    };
  },


  /**
   * calculate the angle between two coordinates
   * @param   {Touch}     touch1
   * @param   {Touch}     touch2
   * @returns {Number}    angle
   */
  getAngle: function getAngle(touch1, touch2) {
    var y = touch2.pageY - touch1.pageY
      , x = touch2.pageX - touch1.pageX;
    return Math.atan2(y, x) * 180 / Math.PI;
  },


  /**
   * angle to direction define
   * @param   {Touch}     touch1
   * @param   {Touch}     touch2
   * @returns {String}    direction constant, like DIRECTION_LEFT
   */
  getDirection: function getDirection(touch1, touch2) {
    var x = Math.abs(touch1.pageX - touch2.pageX)
      , y = Math.abs(touch1.pageY - touch2.pageY);
    if(x >= y) {
      return touch1.pageX - touch2.pageX > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return touch1.pageY - touch2.pageY > 0 ? DIRECTION_UP : DIRECTION_DOWN;
  },


  /**
   * calculate the distance between two touches
   * @param   {Touch}     touch1
   * @param   {Touch}     touch2
   * @returns {Number}    distance
   */
  getDistance: function getDistance(touch1, touch2) {
    var x = touch2.pageX - touch1.pageX
      , y = touch2.pageY - touch1.pageY;
    return Math.sqrt((x * x) + (y * y));
  },


  /**
   * calculate the scale factor between two touchLists (fingers)
   * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
   * @param   {Array}     start
   * @param   {Array}     end
   * @returns {Number}    scale
   */
  getScale: function getScale(start, end) {
    // need two fingers...
    if(start.length >= 2 && end.length >= 2) {
      return this.getDistance(end[0], end[1]) / this.getDistance(start[0], start[1]);
    }
    return 1;
  },


  /**
   * calculate the rotation degrees between two touchLists (fingers)
   * @param   {Array}     start
   * @param   {Array}     end
   * @returns {Number}    rotation
   */
  getRotation: function getRotation(start, end) {
    // need two fingers
    if(start.length >= 2 && end.length >= 2) {
      return this.getAngle(end[1], end[0]) - this.getAngle(start[1], start[0]);
    }
    return 0;
  },


  /**
   * boolean if the direction is vertical
   * @param    {String}    direction
   * @returns  {Boolean}   is_vertical
   */
  isVertical: function isVertical(direction) {
    return direction == DIRECTION_UP || direction == DIRECTION_DOWN;
  },


  /**
   * toggle browser default behavior with css props
   * @param   {HtmlElement}   element
   * @param   {Object}        css_props
   * @param   {Boolean}       toggle
   */
  toggleDefaultBehavior: function toggleDefaultBehavior(element, css_props, toggle) {
    if(!css_props || !element || !element.style) {
      return;
    }

    // with css properties for modern browsers
    Utils.each(['webkit', 'moz', 'Moz', 'ms', 'o', ''], function(vendor) {
      Utils.each(css_props, function(value, prop) {
          // vender prefix at the property
          if(vendor) {
            prop = vendor + prop.substring(0, 1).toUpperCase() + prop.substring(1);
          }
          // set the style
          if(prop in element.style) {
            element.style[prop] = !toggle && value;
          }
      });
    });

    var false_fn = function(){ return false; };

    // also the disable onselectstart
    if(css_props.userSelect == 'none') {
      element.onselectstart = !toggle && false_fn;
    }
    // and disable ondragstart
    if(css_props.userDrag == 'none') {
      element.ondragstart = !toggle && false_fn;
    }
  }
};


/**
 * create new hammer instance
 * all methods should return the instance itself, so it is chainable.
 * @param   {HTMLElement}       element
 * @param   {Object}            [options={}]
 * @returns {Hammer.Instance}
 * @constructor
 */
Hammer.Instance = function(element, options) {
  var self = this;

  // setup HammerJS window events and register all gestures
  // this also sets up the default options
  setup();

  this.element = element;

  // start/stop detection option
  this.enabled = true;

  // merge options
  this.options = Utils.extend(
    Utils.extend({}, Hammer.defaults),
    options || {});

  // add some css to the element to prevent the browser from doing its native behavoir
  if(this.options.stop_browser_behavior) {
    Utils.toggleDefaultBehavior(this.element, this.options.stop_browser_behavior, false);
  }

  // start detection on touchstart
  this.eventStartHandler = Event.onTouch(element, EVENT_START, function(ev) {
    if(self.enabled) {
      Detection.startDetect(self, ev);
    }
  });

  // keep a list of user event handlers which needs to be removed when calling 'dispose'
  this.eventHandlers = [];

  // return instance
  return this;
};


Hammer.Instance.prototype = {
  /**
   * bind events to the instance
   * @param   {String}      gesture
   * @param   {Function}    handler
   * @returns {Hammer.Instance}
   */
  on: function onEvent(gesture, handler) {
    var gestures = gesture.split(' ');
    Utils.each(gestures, function(gesture) {
      this.element.addEventListener(gesture, handler, false);
      this.eventHandlers.push({ gesture: gesture, handler: handler });
    }, this);
    return this;
  },


  /**
   * unbind events to the instance
   * @param   {String}      gesture
   * @param   {Function}    handler
   * @returns {Hammer.Instance}
   */
  off: function offEvent(gesture, handler) {
    var gestures = gesture.split(' ')
      , i, eh;
    Utils.each(gestures, function(gesture) {
      this.element.removeEventListener(gesture, handler, false);

      // remove the event handler from the internal list
      for(i=-1; (eh=this.eventHandlers[++i]);) {
        if(eh.gesture === gesture && eh.handler === handler) {
          this.eventHandlers.splice(i, 1);
        }
      }
    }, this);
    return this;
  },


  /**
   * trigger gesture event
   * @param   {String}      gesture
   * @param   {Object}      [eventData]
   * @returns {Hammer.Instance}
   */
  trigger: function triggerEvent(gesture, eventData) {
    // optional
    if(!eventData) {
      eventData = {};
    }

    // create DOM event
    var event = Hammer.DOCUMENT.createEvent('Event');
    event.initEvent(gesture, true, true);
    event.gesture = eventData;

    // trigger on the target if it is in the instance element,
    // this is for event delegation tricks
    var element = this.element;
    if(Utils.hasParent(eventData.target, element)) {
      element = eventData.target;
    }

    element.dispatchEvent(event);
    return this;
  },


  /**
   * enable of disable hammer.js detection
   * @param   {Boolean}   state
   * @returns {Hammer.Instance}
   */
  enable: function enable(state) {
    this.enabled = state;
    return this;
  },


  /**
   * dispose this hammer instance
   * @returns {Hammer.Instance}
   */
  dispose: function dispose() {
    var i, eh;

    // undo all changes made by stop_browser_behavior
    if(this.options.stop_browser_behavior) {
      Utils.toggleDefaultBehavior(this.element, this.options.stop_browser_behavior, true);
    }

    // unbind all custom event handlers
    for(i=-1; (eh=this.eventHandlers[++i]);) {
      this.element.removeEventListener(eh.gesture, eh.handler, false);
    }
    this.eventHandlers = [];

    // unbind the start event listener
    Event.unbindDom(this.element, Hammer.EVENT_TYPES[EVENT_START], this.eventStartHandler);

    return null;
  }
};


/**
 * this holds the last move event,
 * used to fix empty touchend issue
 * see the onTouch event for an explanation
 * @type {Object}
 */
var last_move_event = null;

/**
 * when the mouse is hold down, this is true
 * @type {Boolean}
 */
var enable_detect = false;

/**
 * when touch events have been fired, this is true
 * @type {Boolean}
 */
var touch_triggered = false;

var Event = Hammer.event = {
  /**
   * simple addEventListener
   * @param   {HTMLElement}   element
   * @param   {String}        type
   * @param   {Function}      handler
   */
  bindDom: function(element, type, handler) {
    var types = type.split(' ');
    Utils.each(types, function(type){
      element.addEventListener(type, handler, false);
    });
  },


  /**
   * simple removeEventListener
   * @param   {HTMLElement}   element
   * @param   {String}        type
   * @param   {Function}      handler
   */
  unbindDom: function(element, type, handler) {
    var types = type.split(' ');
    Utils.each(types, function(type){
      element.removeEventListener(type, handler, false);
    });
  },


  /**
   * touch events with mouse fallback
   * @param   {HTMLElement}   element
   * @param   {String}        eventType        like EVENT_MOVE
   * @param   {Function}      handler
   */
  onTouch: function onTouch(element, eventType, handler) {
    var self = this;

    var bindDomOnTouch = function(ev) {
      var srcEventType = ev.type.toLowerCase();

      // onmouseup, but when touchend has been fired we do nothing.
      // this is for touchdevices which also fire a mouseup on touchend
      if(srcEventType.match(/mouse/) && touch_triggered) {
        return;
      }

      // mousebutton must be down or a touch event
      else if(srcEventType.match(/touch/) ||   // touch events are always on screen
        srcEventType.match(/pointerdown/) || // pointerevents touch
        (srcEventType.match(/mouse/) && ev.which === 1)   // mouse is pressed
        ) {
        enable_detect = true;
      }

      // mouse isn't pressed
      else if(srcEventType.match(/mouse/) && !ev.which) {
        enable_detect = false;
      }


      // we are in a touch event, set the touch triggered bool to true,
      // this for the conflicts that may occur on ios and android
      if(srcEventType.match(/touch|pointer/)) {
        touch_triggered = true;
      }

      // count the total touches on the screen
      var count_touches = 0;

      // when touch has been triggered in this detection session
      // and we are now handling a mouse event, we stop that to prevent conflicts
      if(enable_detect) {
        // update pointerevent
        if(Hammer.HAS_POINTEREVENTS && eventType != EVENT_END) {
          count_touches = PointerEvent.updatePointer(eventType, ev);
        }
        // touch
        else if(srcEventType.match(/touch/)) {
          count_touches = ev.touches.length;
        }
        // mouse
        else if(!touch_triggered) {
          count_touches = srcEventType.match(/up/) ? 0 : 1;
        }

        // if we are in a end event, but when we remove one touch and
        // we still have enough, set eventType to move
        if(count_touches > 0 && eventType == EVENT_END) {
          eventType = EVENT_MOVE;
        }
        // no touches, force the end event
        else if(!count_touches) {
          eventType = EVENT_END;
        }

        // store the last move event
        if(count_touches || last_move_event === null) {
          last_move_event = ev;
        }

        // trigger the handler
        handler.call(Detection, self.collectEventData(element, eventType,
                                         self.getTouchList(last_move_event, eventType),
                                         ev));

        // remove pointerevent from list
        if(Hammer.HAS_POINTEREVENTS && eventType == EVENT_END) {
          count_touches = PointerEvent.updatePointer(eventType, ev);
        }
      }

      // on the end we reset everything
      if(!count_touches) {
        last_move_event = null;
        enable_detect = false;
        touch_triggered = false;
        PointerEvent.reset();
      }
    };

    this.bindDom(element, Hammer.EVENT_TYPES[eventType], bindDomOnTouch);

    // return the bound function to be able to unbind it later
    return bindDomOnTouch;
  },


  /**
   * we have different events for each device/browser
   * determine what we need and set them in the Hammer.EVENT_TYPES constant
   */
  determineEventTypes: function determineEventTypes() {
    // determine the eventtype we want to set
    var types;

    // pointerEvents magic
    if(Hammer.HAS_POINTEREVENTS) {
      types = PointerEvent.getEvents();
    }
    // on Android, iOS, blackberry, windows mobile we dont want any mouseevents
    else if(Hammer.NO_MOUSEEVENTS) {
      types = [
        'touchstart',
        'touchmove',
        'touchend touchcancel'];
    }
    // for non pointer events browsers and mixed browsers,
    // like chrome on windows8 touch laptop
    else {
      types = [
        'touchstart mousedown',
        'touchmove mousemove',
        'touchend touchcancel mouseup'];
    }

    Hammer.EVENT_TYPES[EVENT_START] = types[0];
    Hammer.EVENT_TYPES[EVENT_MOVE] = types[1];
    Hammer.EVENT_TYPES[EVENT_END] = types[2];
  },


  /**
   * create touchlist depending on the event
   * @param   {Object}    ev
   * @param   {String}    eventType   used by the fakemultitouch plugin
   */
  getTouchList: function getTouchList(ev/*, eventType*/) {
    // get the fake pointerEvent touchlist
    if(Hammer.HAS_POINTEREVENTS) {
      return PointerEvent.getTouchList();
    }

    // get the touchlist
    if(ev.touches) {
      return ev.touches;
    }

    // make fake touchlist from mouse position
    ev.identifier = 1;
    return [ev];
  },


  /**
   * collect event data for Hammer js
   * @param   {HTMLElement}   element
   * @param   {String}        eventType        like EVENT_MOVE
   * @param   {Object}        eventData
   */
  collectEventData: function collectEventData(element, eventType, touches, ev) {
    // find out pointerType
    var pointerType = POINTER_TOUCH;
    if(ev.type.match(/mouse/) || PointerEvent.matchType(POINTER_MOUSE, ev)) {
      pointerType = POINTER_MOUSE;
    }

    return {
      center     : Utils.getCenter(touches),
      timeStamp  : new Date().getTime(),
      target     : ev.target,
      touches    : touches,
      eventType  : eventType,
      pointerType: pointerType,
      srcEvent   : ev,

      /**
       * prevent the browser default actions
       * mostly used to disable scrolling of the browser
       */
      preventDefault: function() {
        if(this.srcEvent.preventManipulation) {
          this.srcEvent.preventManipulation();
        }

        if(this.srcEvent.preventDefault) {
          this.srcEvent.preventDefault();
        }
      },

      /**
       * stop bubbling the event up to its parents
       */
      stopPropagation: function() {
        this.srcEvent.stopPropagation();
      },

      /**
       * immediately stop gesture detection
       * might be useful after a swipe was detected
       * @return {*}
       */
      stopDetect: function() {
        return Detection.stopDetect();
      }
    };
  }
};

var PointerEvent = Hammer.PointerEvent = {
  /**
   * holds all pointers
   * @type {Object}
   */
  pointers: {},

  /**
   * get a list of pointers
   * @returns {Array}     touchlist
   */
  getTouchList: function() {
    var touchlist = [];
    // we can use forEach since pointerEvents only is in IE10
    Utils.each(this.pointers, function(pointer){
      touchlist.push(pointer);
    });

    return touchlist;
  },

  /**
   * update the position of a pointer
   * @param   {String}   type             EVENT_END
   * @param   {Object}   pointerEvent
   */
  updatePointer: function(type, pointerEvent) {
    if(type == EVENT_END) {
      delete this.pointers[pointerEvent.pointerId];
    }
    else {
      pointerEvent.identifier = pointerEvent.pointerId;
      this.pointers[pointerEvent.pointerId] = pointerEvent;
    }

    // it's save to use Object.keys, since pointerEvents are only in newer browsers
    return Object.keys(this.pointers).length;
  },

  /**
   * check if ev matches pointertype
   * @param   {String}        pointerType     POINTER_MOUSE
   * @param   {PointerEvent}  ev
   */
  matchType: function(pointerType, ev) {
    if(!ev.pointerType) {
      return false;
    }

    var pt = ev.pointerType
      , types = {};

    types[POINTER_MOUSE] = (pt === POINTER_MOUSE);
    types[POINTER_TOUCH] = (pt === POINTER_TOUCH);
    types[POINTER_PEN] = (pt === POINTER_PEN);
    return types[pointerType];
  },


  /**
   * get events
   */
  getEvents: function() {
    return [
      'pointerdown MSPointerDown',
      'pointermove MSPointerMove',
      'pointerup pointercancel MSPointerUp MSPointerCancel'
    ];
  },

  /**
   * reset the list
   */
  reset: function() {
    this.pointers = {};
  }
};


var Detection = Hammer.detection = {
  // contains all registred Hammer.gestures in the correct order
  gestures: [],

  // data of the current Hammer.gesture detection session
  current : null,

  // the previous Hammer.gesture session data
  // is a full clone of the previous gesture.current object
  previous: null,

  // when this becomes true, no gestures are fired
  stopped : false,


  /**
   * start Hammer.gesture detection
   * @param   {Hammer.Instance}   inst
   * @param   {Object}            eventData
   */
  startDetect: function startDetect(inst, eventData) {
    // already busy with a Hammer.gesture detection on an element
    if(this.current) {
      return;
    }

    this.stopped = false;

    this.current = {
      inst              : inst, // reference to HammerInstance we're working for
      startEvent        : Utils.extend({}, eventData), // start eventData for distances, timing etc
      lastEvent         : false, // last eventData
      lastVelocityEvent : false, // last eventData for velocity.
      velocity          : false, // current velocity
      name              : '' // current gesture we're in/detected, can be 'tap', 'hold' etc
    };

    this.detect(eventData);
  },


  /**
   * Hammer.gesture detection
   * @param   {Object}    eventData
   */
  detect: function detect(eventData) {
    if(!this.current || this.stopped) {
      return;
    }

    // extend event data with calculations about scale, distance etc
    eventData = this.extendEventData(eventData);

    // instance options
    var inst_options = this.current.inst.options;

    // call Hammer.gesture handlers
    Utils.each(this.gestures, function(gesture) {
      // only when the instance options have enabled this gesture
      if(!this.stopped && inst_options[gesture.name] !== false) {
        // if a handler returns false, we stop with the detection
        if(gesture.handler.call(gesture, eventData, this.current.inst) === false) {
          this.stopDetect();
          return false;
        }
      }
    }, this);

    // store as previous event event
    if(this.current) {
      this.current.lastEvent = eventData;
    }

    // endevent, but not the last touch, so dont stop
    if(eventData.eventType == EVENT_END && !eventData.touches.length - 1) {
      this.stopDetect();
    }

    return eventData;
  },


  /**
   * clear the Hammer.gesture vars
   * this is called on endDetect, but can also be used when a final Hammer.gesture has been detected
   * to stop other Hammer.gestures from being fired
   */
  stopDetect: function stopDetect() {
    // clone current data to the store as the previous gesture
    // used for the double tap gesture, since this is an other gesture detect session
    this.previous = Utils.extend({}, this.current);

    // reset the current
    this.current = null;

    // stopped!
    this.stopped = true;
  },


  /**
   * extend eventData for Hammer.gestures
   * @param   {Object}   ev
   * @returns {Object}   ev
   */
  extendEventData: function extendEventData(ev) {
    var cur = this.current
      , startEv = cur.startEvent;

    // if the touches change, set the new touches over the startEvent touches
    // this because touchevents don't have all the touches on touchstart, or the
    // user must place his fingers at the EXACT same time on the screen, which is not realistic
    // but, sometimes it happens that both fingers are touching at the EXACT same time
    if(ev.touches.length != startEv.touches.length || ev.touches === startEv.touches) {
      // extend 1 level deep to get the touchlist with the touch objects
      startEv.touches = [];
      Utils.each(ev.touches, function(touch) {
        startEv.touches.push(Utils.extend({}, touch));
      });
    }

    var delta_time = ev.timeStamp - startEv.timeStamp
      , delta_x = ev.center.pageX - startEv.center.pageX
      , delta_y = ev.center.pageY - startEv.center.pageY
      , interimAngle
      , interimDirection
      , velocityEv = cur.lastVelocityEvent
      , velocity = cur.velocity;

    // calculate velocity every x ms
    if (velocityEv && ev.timeStamp - velocityEv.timeStamp > Hammer.UPDATE_VELOCITY_INTERVAL) {
        velocity = Utils.getVelocity(ev.timeStamp - velocityEv.timeStamp,
                                            ev.center.pageX - velocityEv.center.pageX,
                                            ev.center.pageY - velocityEv.center.pageY);

        cur.lastVelocityEvent = ev;
        cur.velocity = velocity;
    }
    else if(!cur.velocity) {
        velocity = Utils.getVelocity(delta_time, delta_x, delta_y);

        cur.lastVelocityEvent = ev;
        cur.velocity = velocity;
    }

    // end events (e.g. dragend) don't have useful values for interimDirection & interimAngle
    // because the previous event has exactly the same coordinates
    // so for end events, take the previous values of interimDirection & interimAngle
    // instead of recalculating them and getting a spurious '0'
    if(ev.eventType == EVENT_END) {
      interimAngle = cur.lastEvent && cur.lastEvent.interimAngle;
      interimDirection = cur.lastEvent && cur.lastEvent.interimDirection;
    }
    else {
      interimAngle = cur.lastEvent &&
        Utils.getAngle(cur.lastEvent.center, ev.center);
      interimDirection = cur.lastEvent &&
        Utils.getDirection(cur.lastEvent.center, ev.center);
    }

    Utils.extend(ev, {
      deltaTime: delta_time,

      deltaX: delta_x,
      deltaY: delta_y,

      velocityX: velocity.x,
      velocityY: velocity.y,

      distance: Utils.getDistance(startEv.center, ev.center),

      angle: Utils.getAngle(startEv.center, ev.center),
      interimAngle: interimAngle,

      direction: Utils.getDirection(startEv.center, ev.center),
      interimDirection: interimDirection,

      scale: Utils.getScale(startEv.touches, ev.touches),
      rotation: Utils.getRotation(startEv.touches, ev.touches),

      startEvent: startEv
    });

    return ev;
  },


  /**
   * register new gesture
   * @param   {Object}    gesture object, see gestures.js for documentation
   * @returns {Array}     gestures
   */
  register: function register(gesture) {
    // add an enable gesture options if there is no given
    var options = gesture.defaults || {};
    if(options[gesture.name] === undefined) {
      options[gesture.name] = true;
    }

    // extend Hammer default options with the Hammer.gesture options
    Utils.extend(Hammer.defaults, options, true);

    // set its index
    gesture.index = gesture.index || 1000;

    // add Hammer.gesture to the list
    this.gestures.push(gesture);

    // sort the list by index
    this.gestures.sort(function(a, b) {
      if(a.index < b.index) { return -1; }
      if(a.index > b.index) { return 1; }
      return 0;
    });

    return this.gestures;
  }
};


/**
 * Drag
 * Move with x fingers (default 1) around on the page. Blocking the scrolling when
 * moving left and right is a good practice. When all the drag events are blocking
 * you disable scrolling on that area.
 * @events  drag, drapleft, dragright, dragup, dragdown
 */
Hammer.gestures.Drag = {
  name     : 'drag',
  index    : 50,
  defaults : {
    drag_min_distance            : 10,

    // Set correct_for_drag_min_distance to true to make the starting point of the drag
    // be calculated from where the drag was triggered, not from where the touch started.
    // Useful to avoid a jerk-starting drag, which can make fine-adjustments
    // through dragging difficult, and be visually unappealing.
    correct_for_drag_min_distance: true,

    // set 0 for unlimited, but this can conflict with transform
    drag_max_touches             : 1,

    // prevent default browser behavior when dragging occurs
    // be careful with it, it makes the element a blocking element
    // when you are using the drag gesture, it is a good practice to set this true
    drag_block_horizontal        : false,
    drag_block_vertical          : false,

    // drag_lock_to_axis keeps the drag gesture on the axis that it started on,
    // It disallows vertical directions if the initial direction was horizontal, and vice versa.
    drag_lock_to_axis            : false,

    // drag lock only kicks in when distance > drag_lock_min_distance
    // This way, locking occurs only when the distance has become large enough to reliably determine the direction
    drag_lock_min_distance       : 25
  },

  triggered: false,
  handler  : function dragGesture(ev, inst) {
    // current gesture isnt drag, but dragged is true
    // this means an other gesture is busy. now call dragend
    if(Detection.current.name != this.name && this.triggered) {
      inst.trigger(this.name + 'end', ev);
      this.triggered = false;
      return;
    }

    // max touches
    if(inst.options.drag_max_touches > 0 &&
      ev.touches.length > inst.options.drag_max_touches) {
      return;
    }

    switch(ev.eventType) {
      case EVENT_START:
        this.triggered = false;
        break;

      case EVENT_MOVE:
        // when the distance we moved is too small we skip this gesture
        // or we can be already in dragging
        if(ev.distance < inst.options.drag_min_distance &&
          Detection.current.name != this.name) {
          return;
        }

        // we are dragging!
        if(Detection.current.name != this.name) {
          Detection.current.name = this.name;
          if(inst.options.correct_for_drag_min_distance && ev.distance > 0) {
            // When a drag is triggered, set the event center to drag_min_distance pixels from the original event center.
            // Without this correction, the dragged distance would jumpstart at drag_min_distance pixels instead of at 0.
            // It might be useful to save the original start point somewhere
            var factor = Math.abs(inst.options.drag_min_distance / ev.distance);
            Detection.current.startEvent.center.pageX += ev.deltaX * factor;
            Detection.current.startEvent.center.pageY += ev.deltaY * factor;

            // recalculate event data using new start point
            ev = Detection.extendEventData(ev);
          }
        }

        // lock drag to axis?
        if(Detection.current.lastEvent.drag_locked_to_axis ||
            ( inst.options.drag_lock_to_axis &&
              inst.options.drag_lock_min_distance <= ev.distance
            )) {
          ev.drag_locked_to_axis = true;
        }
        var last_direction = Detection.current.lastEvent.direction;
        if(ev.drag_locked_to_axis && last_direction !== ev.direction) {
          // keep direction on the axis that the drag gesture started on
          if(Utils.isVertical(last_direction)) {
            ev.direction = (ev.deltaY < 0) ? DIRECTION_UP : DIRECTION_DOWN;
          }
          else {
            ev.direction = (ev.deltaX < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
          }
        }

        // first time, trigger dragstart event
        if(!this.triggered) {
          inst.trigger(this.name + 'start', ev);
          this.triggered = true;
        }

        // trigger events
        inst.trigger(this.name, ev);
        inst.trigger(this.name + ev.direction, ev);

        var is_vertical = Utils.isVertical(ev.direction);

        // block the browser events
        if((inst.options.drag_block_vertical && is_vertical) ||
          (inst.options.drag_block_horizontal && !is_vertical)) {
          ev.preventDefault();
        }
        break;

      case EVENT_END:
        // trigger dragend
        if(this.triggered) {
          inst.trigger(this.name + 'end', ev);
        }

        this.triggered = false;
        break;
    }
  }
};

/**
 * Hold
 * Touch stays at the same place for x time
 * @events  hold
 */
Hammer.gestures.Hold = {
  name    : 'hold',
  index   : 10,
  defaults: {
    hold_timeout  : 500,
    hold_threshold: 1
  },
  timer   : null,

  handler : function holdGesture(ev, inst) {
    switch(ev.eventType) {
      case EVENT_START:
        // clear any running timers
        clearTimeout(this.timer);

        // set the gesture so we can check in the timeout if it still is
        Detection.current.name = this.name;

        // set timer and if after the timeout it still is hold,
        // we trigger the hold event
        this.timer = setTimeout(function() {
          if(Detection.current.name == 'hold') {
            inst.trigger('hold', ev);
          }
        }, inst.options.hold_timeout);
        break;

      // when you move or end we clear the timer
      case EVENT_MOVE:
        if(ev.distance > inst.options.hold_threshold) {
          clearTimeout(this.timer);
        }
        break;

      case EVENT_END:
        clearTimeout(this.timer);
        break;
    }
  }
};

/**
 * Release
 * Called as last, tells the user has released the screen
 * @events  release
 */
Hammer.gestures.Release = {
  name   : 'release',
  index  : Infinity,
  handler: function releaseGesture(ev, inst) {
    if(ev.eventType == EVENT_END) {
      inst.trigger(this.name, ev);
    }
  }
};

/**
 * Swipe
 * triggers swipe events when the end velocity is above the threshold
 * for best usage, set prevent_default (on the drag gesture) to true
 * @events  swipe, swipeleft, swiperight, swipeup, swipedown
 */
Hammer.gestures.Swipe = {
  name    : 'swipe',
  index   : 40,
  defaults: {
    swipe_min_touches: 1,
    swipe_max_touches: 1,
    swipe_velocity   : 0.7
  },
  handler : function swipeGesture(ev, inst) {
    if(ev.eventType == EVENT_END) {
      // max touches
      if(ev.touches.length < inst.options.swipe_min_touches ||
        ev.touches.length > inst.options.swipe_max_touches) {
        return;
      }

      // when the distance we moved is too small we skip this gesture
      // or we can be already in dragging
      if(ev.velocityX > inst.options.swipe_velocity ||
        ev.velocityY > inst.options.swipe_velocity) {
        // trigger swipe events
        inst.trigger(this.name, ev);
        inst.trigger(this.name + ev.direction, ev);
      }
    }
  }
};

/**
 * Tap/DoubleTap
 * Quick touch at a place or double at the same place
 * @events  tap, doubletap
 */
Hammer.gestures.Tap = {
  name    : 'tap',
  index   : 100,
  defaults: {
    tap_max_touchtime : 250,
    tap_max_distance  : 10,
    tap_always        : true,
    doubletap_distance: 20,
    doubletap_interval: 300
  },

  has_moved: false,

  handler : function tapGesture(ev, inst) {
    var prev, since_prev, did_doubletap;

    // reset moved state
    if(ev.eventType == EVENT_START) {
      this.has_moved = false;
    }

    // Track the distance we've moved. If it's above the max ONCE, remember that (fixes #406).
    else if(ev.eventType == EVENT_MOVE && !this.moved) {
      this.has_moved = (ev.distance > inst.options.tap_max_distance);
    }

    else if(ev.eventType == EVENT_END &&
        ev.srcEvent.type != 'touchcancel' &&
        ev.deltaTime < inst.options.tap_max_touchtime && !this.has_moved) {

      // previous gesture, for the double tap since these are two different gesture detections
      prev = Detection.previous;
      since_prev = prev && prev.lastEvent && ev.timeStamp - prev.lastEvent.timeStamp;
      did_doubletap = false;

      // check if double tap
      if(prev && prev.name == 'tap' &&
          (since_prev && since_prev < inst.options.doubletap_interval) &&
          ev.distance < inst.options.doubletap_distance) {
        inst.trigger('doubletap', ev);
        did_doubletap = true;
      }

      // do a single tap
      if(!did_doubletap || inst.options.tap_always) {
        Detection.current.name = 'tap';
        inst.trigger(Detection.current.name, ev);
      }
    }
  }
};

/**
 * Touch
 * Called as first, tells the user has touched the screen
 * @events  touch
 */
Hammer.gestures.Touch = {
  name    : 'touch',
  index   : -Infinity,
  defaults: {
    // call preventDefault at touchstart, and makes the element blocking by
    // disabling the scrolling of the page, but it improves gestures like
    // transforming and dragging.
    // be careful with using this, it can be very annoying for users to be stuck
    // on the page
    prevent_default    : false,

    // disable mouse events, so only touch (or pen!) input triggers events
    prevent_mouseevents: false
  },
  handler : function touchGesture(ev, inst) {
    if(inst.options.prevent_mouseevents &&
        ev.pointerType == POINTER_MOUSE) {
      ev.stopDetect();
      return;
    }

    if(inst.options.prevent_default) {
      ev.preventDefault();
    }

    if(ev.eventType == EVENT_START) {
      inst.trigger(this.name, ev);
    }
  }
};


/**
 * Transform
 * User want to scale or rotate with 2 fingers
 * @events  transform, pinch, pinchin, pinchout, rotate
 */
Hammer.gestures.Transform = {
  name     : 'transform',
  index    : 45,
  defaults : {
    // factor, no scale is 1, zoomin is to 0 and zoomout until higher then 1
    transform_min_scale      : 0.01,
    // rotation in degrees
    transform_min_rotation   : 1,
    // prevent default browser behavior when two touches are on the screen
    // but it makes the element a blocking element
    // when you are using the transform gesture, it is a good practice to set this true
    transform_always_block   : false,
    // ensures that all touches occurred within the instance element
    transform_within_instance: false
  },

  triggered: false,

  handler  : function transformGesture(ev, inst) {
    // current gesture isnt drag, but dragged is true
    // this means an other gesture is busy. now call dragend
    if(Detection.current.name != this.name && this.triggered) {
      inst.trigger(this.name + 'end', ev);
      this.triggered = false;
      return;
    }

    // at least multitouch
    if(ev.touches.length < 2) {
      return;
    }

    // prevent default when two fingers are on the screen
    if(inst.options.transform_always_block) {
      ev.preventDefault();
    }

    // check if all touches occurred within the instance element
    if(inst.options.transform_within_instance) {
      for(var i=-1; ev.touches[++i];) {
        if(!Utils.hasParent(ev.touches[i].target, inst.element)) {
          return;
        }
      }
    }

    switch(ev.eventType) {
      case EVENT_START:
        this.triggered = false;
        break;

      case EVENT_MOVE:
        var scale_threshold = Math.abs(1 - ev.scale);
        var rotation_threshold = Math.abs(ev.rotation);

        // when the distance we moved is too small we skip this gesture
        // or we can be already in dragging
        if(scale_threshold < inst.options.transform_min_scale &&
          rotation_threshold < inst.options.transform_min_rotation) {
          return;
        }

        // we are transforming!
        Detection.current.name = this.name;

        // first time, trigger dragstart event
        if(!this.triggered) {
          inst.trigger(this.name + 'start', ev);
          this.triggered = true;
        }

        inst.trigger(this.name, ev); // basic transform event

        // trigger rotate event
        if(rotation_threshold > inst.options.transform_min_rotation) {
          inst.trigger('rotate', ev);
        }

        // trigger pinch event
        if(scale_threshold > inst.options.transform_min_scale) {
          inst.trigger('pinch', ev);
          inst.trigger('pinch' + (ev.scale<1 ? 'in' : 'out'), ev);
        }
        break;

      case EVENT_END:
        // trigger dragend
        if(this.triggered) {
          inst.trigger(this.name + 'end', ev);
        }

        this.triggered = false;
        break;
    }
  }
};

// AMD export
if(typeof define == 'function' && define.amd) {
  define(function(){
    return Hammer;
  });
}
// commonjs export
else if(typeof module == 'object' && module.exports) {
  module.exports = Hammer;
}
// browser export
else {
  window.Hammer = Hammer;
}

})(window);;

    Polymer('route-ui-tile', {
      /**
       * Sets how much the tile should be able to rotate around the X/Y axes, in degrees.
       *
       * @attribute maxRotation
       * @type int
       * @default 15
       */
      maxRotation: 15,

      ready: function() {
        this.hammer = Hammer(this, {
          hold: false,
          transform: false,
          tap: false,
          tap_always: false,
        });
        // this.hammer.on("touch", this.touch.bind(this));
        // this.hammer.on("drag", this.drag.bind(this));
        // this.hammer.on("release", this.release.bind(this));
        // this.hammer.on("tap", this.tap.bind(this));
        // this.hammer.on("swipe", this.swipe.bind(this));
      },
      tap: function(e) {
        this.fire("route-ui-tile-tap");
      },
      swipe: function(e) {
        this.fire("route-ui-tile-swipe"+e.gesture.direction);
      },
      animate: function(percentX, percentY, raised) {
        var bound = function(value, min, max) {
          if(value < min) return min;
          if(value > max) return max;
          return value;
        };

        var rotationX = bound(percentX, -1, 1) * 15,
            rotationY = bound(percentY, -1, 1) * 15;

        var s = this.$.tile.style;
        var transform = raised ? "translate3d(0,0,20px)" : "";
        var rotate = "rotateX("+rotationY+"deg) rotateY("+rotationX+"deg)";

        s.webkitTransform = s.mozTransform = s.msTransform = s.transform =
            transform + " " + rotate;
      },
      updateDimensions: function() {
        this.dimensions = {};
        var x = 0, y = 0;
        for(var el = this; el != null; x += el.offsetLeft, y += el.offsetTop, el = el.offsetParent);
        this.dimensions.left = x;
        this.dimensions.top = y;
        this.dimensions.width = this.offsetWidth;
        this.dimensions.height = this.offsetHeight;
        this.dimensions.centerX = this.dimensions.left + (this.dimensions.width / 2);
        this.dimensions.centerY = this.dimensions.top + (this.dimensions.height / 2);
      },
      updateStartingPosition: function(clientX, clientY) {
        this.start = {
          x: clientX,
          y: clientY,
        };
      },
      updateLatestPosition: function(clientX, clientY) {
        var distX = clientX - this.start.x,
            distY = clientY - this.start.y;

        this.latest = {
          x: clientX,
          y: clientY,
          percent: {
            x: (clientX - this.dimensions.centerX) * 2 / this.dimensions.width,
            y: -(clientY - this.dimensions.centerY) * 2 / this.dimensions.height,
          },
          distance: Math.sqrt(distX*distX + distY*distY),
        };
      },
      touch: function(event, details, sender) {
        event.preventDefault();

        this.fire("route-activity");
        var clientX = event.gesture.center.pageX;
        var clientY = event.gesture.center.pageY;

        this.updateDimensions();
        this.updateStartingPosition(clientX, clientY);
        this.updateLatestPosition(clientX, clientY);
        this.animate(0, 0, true);
        this.$.tile.classList.add('dragging');
      },
      drag: function(event, details, sender) {
        event.preventDefault();

        this.fire("route-activity");
        var clientX = event.gesture.center.pageX;
        var clientY = event.gesture.center.pageY;
        this.updateLatestPosition(clientX, clientY);
        this.animate(this.latest.percent.x, this.latest.percent.y, true);
      },
      release: function(event, details, sender) {
        event.preventDefault();
        if("gesture" in event) {
          this.fire("route-activity");
          this.$.tile.classList.remove('dragging');
          this.animate(0, 0, false);
        }
      },
    });
  ;

    Polymer('route-ui-alarm', {
      /**
       * Name to display on the tile
       *
       * @attribute name
       * @type string
       * @default "Lights"
       */
      hoursString: "6",
      minutesString: "10",
      timeOfDay: "am",

      _hours: 6,
      _minutes: 10,
      editing: null,
      on: false,

      attached: function() {
        this.startEditing();
      },
      update: function() {
        if(this._hours == 24) {
          this._hours = 0;
        } else if(this._hours == -1) {
          this._hours = 23;
        }

        if(this._minutes == 60) {
          this._minutes = 0;
        } else if(this._minutes == -1) {
          this._minutes = 59;
        }

        this.timeOfDay = (this._hours < 12) ? "am" : "pm";
        if(this._hours > 12) {
          this.hoursString = this._hours - 12;
        } else if(this._hours == 0) {
          this.hoursString = 12;
        } else {
          this.hoursString = this._hours;
        }
        this.minutesString = (this._minutes < 10) ? "0"+this._minutes : this._minutes;
      },
      send: function() {
        if(this.on) {
          var hours = (this._hours < 10) ? "0"+this._hours : this._hours;
          var minutes = (this._minutes < 10) ? "0"+this._minutes : this._minutes;
          var time = hours + "" + minutes;
          this.messenger.emit("DeviceEvent", "SetAlarm", {
            alarm: time,
          });
        } else {
          this.messenger.emit("DeviceEvent", "ClearAlarm");
        }
      },
      centerHandler: function(event, detail, sender) {
        this.on = !this.on;
        this.send();
      },
      topHandler: function(event, detail, sender) {
        this.pauseEditing();

        switch(this.editing) {
          case "hours":
            this._hours += 1;
            break;
          case "minutes":
            this._minutes += 1;
            break;
        }
        this.update();
      },
      bottomHandler: function(event, detail, sender) {
        this.pauseEditing();

        switch(this.editing) {
          case "hours":
            this._hours -= 1;
            break;
          case "minutes":
            this._minutes -= 1;
            break;
        }
        this.update();
      },
      leftHandler: function(event, detail, sender) {
        this.stopEditing();
        if(this.editing === null) {
          this.editing = "hours";
          this.startEditing();
        } else if(this.editing == "hours") {
          this.editing = "minutes";
          this.startEditing();
        } else {
          this.editing = null;
          this.send();
        }
      },
      rightHandler: function(event, detail, sender) {
        this.stopEditing();
        if(this.editing === null) {
          this.editing = "minutes";
          this.startEditing();
        } else if(this.editing == "minutes") {
          this.editing = "hours";
          this.startEditing();
        } else {
          this.editing = null;
          this.send();
        }
      },
      stopEditing: function() {
        clearTimeout(this.timer);
        this.timer = null;
        if(this.editing == "hours") {
          style = this.$.hours.style;
        } else if(this.editing == "minutes") {
          style = this.$.minutes.style;
        } else {
          return
        }
        style.visibility = "visible";
      },
      pauseEditing: function() {
        this.stopEditing();
        this.timer = setTimeout(this.startEditing.bind(this), 1000);
      },
      startEditing: function() {
        if(this.timer) {
          clearTimeout(this.timer);
        }
        var style;
        if(this.editing == "hours") {
          style = this.$.hours.style;
        } else if(this.editing == "minutes") {
          style = this.$.minutes.style;
        } else {
          return
        }
        if(style.visibility) {
          style.visibility = (style.visibility == "visible") ? "hidden" : "visible";
        } else {
          style.visibility = "hidden";
        }
        this.timer = setTimeout(this.startEditing.bind(this), 500);
      },
    });
  ;
(function(global) {
  "use strict";

  /* Set up a RequestAnimationFrame shim so we can animate efficiently FOR
   * GREAT JUSTICE. */
  var requestInterval, cancelInterval;

  (function() {
    var raf = global.requestAnimationFrame       ||
              global.webkitRequestAnimationFrame ||
              global.mozRequestAnimationFrame    ||
              global.oRequestAnimationFrame      ||
              global.msRequestAnimationFrame     ,
        caf = global.cancelAnimationFrame        ||
              global.webkitCancelAnimationFrame  ||
              global.mozCancelAnimationFrame     ||
              global.oCancelAnimationFrame       ||
              global.msCancelAnimationFrame      ;

    if(raf && caf) {
      requestInterval = function(fn, delay) {
        var handle = {value: null};

        function loop() {
          handle.value = raf(loop);
          fn();
        }

        loop();
        return handle;
      };

      cancelInterval = function(handle) {
        caf(handle.value);
      };
    }

    else {
      requestInterval = setInterval;
      cancelInterval = clearInterval;
    }
  }());

  /* Catmull-rom spline stuffs. */
  /*
  function upsample(n, spline) {
    var polyline = [],
        len = spline.length,
        bx  = spline[0],
        by  = spline[1],
        cx  = spline[2],
        cy  = spline[3],
        dx  = spline[4],
        dy  = spline[5],
        i, j, ax, ay, px, qx, rx, sx, py, qy, ry, sy, t;

    for(i = 6; i !== spline.length; i += 2) {
      ax = bx;
      bx = cx;
      cx = dx;
      dx = spline[i    ];
      px = -0.5 * ax + 1.5 * bx - 1.5 * cx + 0.5 * dx;
      qx =        ax - 2.5 * bx + 2.0 * cx - 0.5 * dx;
      rx = -0.5 * ax            + 0.5 * cx           ;
      sx =                   bx                      ;

      ay = by;
      by = cy;
      cy = dy;
      dy = spline[i + 1];
      py = -0.5 * ay + 1.5 * by - 1.5 * cy + 0.5 * dy;
      qy =        ay - 2.5 * by + 2.0 * cy - 0.5 * dy;
      ry = -0.5 * ay            + 0.5 * cy           ;
      sy =                   by                      ;

      for(j = 0; j !== n; ++j) {
        t = j / n;

        polyline.push(
          ((px * t + qx) * t + rx) * t + sx,
          ((py * t + qy) * t + ry) * t + sy
        );
      }
    }

    polyline.push(
      px + qx + rx + sx,
      py + qy + ry + sy
    );

    return polyline;
  }

  function downsample(n, polyline) {
    var len = 0,
        i, dx, dy;

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      len += Math.sqrt(dx * dx + dy * dy);
    }

    len /= n;

    var small = [],
        target = len,
        min = 0,
        max, t;

    small.push(polyline[0], polyline[1]);

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      max = min + Math.sqrt(dx * dx + dy * dy);

      if(max > target) {
        t = (target - min) / (max - min);

        small.push(
          polyline[i - 2] + dx * t,
          polyline[i - 1] + dy * t
        );

        target += len;
      }

      min = max;
    }

    small.push(polyline[polyline.length - 2], polyline[polyline.length - 1]);

    return small;
  }
  */

  /* Define skycon things. */
  /* FIXME: I'm *really really* sorry that this code is so gross. Really, I am.
   * I'll try to clean it up eventually! Promise! */
  var KEYFRAME = 500,
      STROKE = 0.08,
      TAU = 2.0 * Math.PI,
      TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);

  function circle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU, false);
    ctx.fill();
  }

  function line(ctx, ax, ay, bx, by) {
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.stroke();
  }

  function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var c = Math.cos(t * TAU),
        s = Math.sin(t * TAU);

    rmax -= rmin;

    circle(
      ctx,
      cx - s * rx,
      cy + c * ry + rmax * 0.5,
      rmin + (1 - c * 0.5) * rmax
    );
  }

  function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var i;

    for(i = 5; i--; )
      puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
  }

  function cloud(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.12,
        c = cw * 0.24,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  function sun(ctx, t, cx, cy, cw, s, color) {
    t /= 120000;

    var a = cw * 0.25 - s * 0.5,
        b = cw * 0.32 + s * 0.5,
        c = cw * 0.50 - s * 0.5,
        i, p, cos, sin;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(cx, cy, a, 0, TAU, false);
    ctx.stroke();

    for(i = 8; i--; ) {
      p = (t + i / 8) * TAU;
      cos = Math.cos(p);
      sin = Math.sin(p);
      line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c);
    }
  }

  function moon(ctx, t, cx, cy, cw, s, color) {
    t /= 15000;

    var a = cw * 0.29 - s * 0.5,
        b = cw * 0.05,
        c = Math.cos(t * TAU),
        p = c * TAU / -16;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    cx += c * b;

    ctx.beginPath();
    ctx.arc(cx, cy, a, p + TAU / 8, p + TAU * 7 / 8, false);
    ctx.arc(cx + Math.cos(p) * a * TWO_OVER_SQRT_2, cy + Math.sin(p) * a * TWO_OVER_SQRT_2, a, p + TAU * 5 / 8, p + TAU * 3 / 8, true);
    ctx.closePath();
    ctx.stroke();
  }

  function rain(ctx, t, cx, cy, cw, s, color) {
    t /= 1350;

    var a = cw * 0.16,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.fillStyle = color;

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
      y = cy + p * p * cw;
      ctx.beginPath();
      ctx.moveTo(x, y - s * 1.5);
      ctx.arc(x, y, s * 0.75, b, c, false);
      ctx.fill();
    }
  }

  function sleet(ctx, t, cx, cy, cw, s, color) {
    t /= 750;

    var a = cw * 0.1875,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = Math.floor(cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a) + 0.5;
      y = cy + p * cw;
      line(ctx, x, y - s * 1.5, x, y + s * 1.5);
    }
  }

  function snow(ctx, t, cx, cy, cw, s, color) {
    t /= 3000;

    var a  = cw * 0.16,
        b  = s * 0.75,
        u  = t * TAU * 0.7,
        ux = Math.cos(u) * b,
        uy = Math.sin(u) * b,
        v  = u + TAU / 3,
        vx = Math.cos(v) * b,
        vy = Math.sin(v) * b,
        w  = u + TAU * 2 / 3,
        wx = Math.cos(w) * b,
        wy = Math.sin(w) * b,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + Math.sin((p + i / 4) * TAU) * a;
      y = cy + p * cw;

      line(ctx, x - ux, y - uy, x + ux, y + uy);
      line(ctx, x - vx, y - vy, x + vx, y + vy);
      line(ctx, x - wx, y - wy, x + wx, y + wy);
    }
  }

  function fogbank(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.06,
        c = cw * 0.21,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  /*
  var WIND_PATHS = [
        downsample(63, upsample(8, [
          -1.00, -0.28,
          -0.75, -0.18,
          -0.50,  0.12,
          -0.20,  0.12,
          -0.04, -0.04,
          -0.07, -0.18,
          -0.19, -0.18,
          -0.23, -0.05,
          -0.12,  0.11,
           0.02,  0.16,
           0.20,  0.15,
           0.50,  0.07,
           0.75,  0.18,
           1.00,  0.28
        ])),
        downsample(31, upsample(16, [
          -1.00, -0.10,
          -0.75,  0.00,
          -0.50,  0.10,
          -0.25,  0.14,
           0.00,  0.10,
           0.25,  0.00,
           0.50, -0.10,
           0.75, -0.14,
           1.00, -0.10
        ]))
      ];
  */

  var WIND_PATHS = [
        [
          -0.7500, -0.1800, -0.7219, -0.1527, -0.6971, -0.1225,
          -0.6739, -0.0910, -0.6516, -0.0588, -0.6298, -0.0262,
          -0.6083,  0.0065, -0.5868,  0.0396, -0.5643,  0.0731,
          -0.5372,  0.1041, -0.5033,  0.1259, -0.4662,  0.1406,
          -0.4275,  0.1493, -0.3881,  0.1530, -0.3487,  0.1526,
          -0.3095,  0.1488, -0.2708,  0.1421, -0.2319,  0.1342,
          -0.1943,  0.1217, -0.1600,  0.1025, -0.1290,  0.0785,
          -0.1012,  0.0509, -0.0764,  0.0206, -0.0547, -0.0120,
          -0.0378, -0.0472, -0.0324, -0.0857, -0.0389, -0.1241,
          -0.0546, -0.1599, -0.0814, -0.1876, -0.1193, -0.1964,
          -0.1582, -0.1935, -0.1931, -0.1769, -0.2157, -0.1453,
          -0.2290, -0.1085, -0.2327, -0.0697, -0.2240, -0.0317,
          -0.2064,  0.0033, -0.1853,  0.0362, -0.1613,  0.0672,
          -0.1350,  0.0961, -0.1051,  0.1213, -0.0706,  0.1397,
          -0.0332,  0.1512,  0.0053,  0.1580,  0.0442,  0.1624,
           0.0833,  0.1636,  0.1224,  0.1615,  0.1613,  0.1565,
           0.1999,  0.1500,  0.2378,  0.1402,  0.2749,  0.1279,
           0.3118,  0.1147,  0.3487,  0.1015,  0.3858,  0.0892,
           0.4236,  0.0787,  0.4621,  0.0715,  0.5012,  0.0702,
           0.5398,  0.0766,  0.5768,  0.0890,  0.6123,  0.1055,
           0.6466,  0.1244,  0.6805,  0.1440,  0.7147,  0.1630,
           0.7500,  0.1800
        ],
        [
          -0.7500,  0.0000, -0.7033,  0.0195, -0.6569,  0.0399,
          -0.6104,  0.0600, -0.5634,  0.0789, -0.5155,  0.0954,
          -0.4667,  0.1089, -0.4174,  0.1206, -0.3676,  0.1299,
          -0.3174,  0.1365, -0.2669,  0.1398, -0.2162,  0.1391,
          -0.1658,  0.1347, -0.1157,  0.1271, -0.0661,  0.1169,
          -0.0170,  0.1046,  0.0316,  0.0903,  0.0791,  0.0728,
           0.1259,  0.0534,  0.1723,  0.0331,  0.2188,  0.0129,
           0.2656, -0.0064,  0.3122, -0.0263,  0.3586, -0.0466,
           0.4052, -0.0665,  0.4525, -0.0847,  0.5007, -0.1002,
           0.5497, -0.1130,  0.5991, -0.1240,  0.6491, -0.1325,
           0.6994, -0.1380,  0.7500, -0.1400
        ]
      ],
      WIND_OFFSETS = [
        {start: 0.36, end: 0.11},
        {start: 0.56, end: 0.16}
      ];

  function leaf(ctx, t, x, y, cw, s, color) {
    var a = cw / 8,
        b = a / 3,
        c = 2 * b,
        d = (t % 1) * TAU,
        e = Math.cos(d),
        f = Math.sin(d);

    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(x        , y        , a, d          , d + Math.PI, false);
    ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d          , false);
    ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d          , true );
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.stroke();
  }

  function swoosh(ctx, t, cx, cy, cw, s, index, total, color) {
    t /= 2500;

    var path = WIND_PATHS[index],
        a = (t + index - WIND_OFFSETS[index].start) % total,
        c = (t + index - WIND_OFFSETS[index].end  ) % total,
        e = (t + index                            ) % total,
        b, d, f, i;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if(a < 1) {
      ctx.beginPath();

      a *= path.length / 2 - 1;
      b  = Math.floor(a);
      a -= b;
      b *= 2;
      b += 2;

      ctx.moveTo(
        cx + (path[b - 2] * (1 - a) + path[b    ] * a) * cw,
        cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw
      );

      if(c < 1) {
        c *= path.length / 2 - 1;
        d  = Math.floor(c);
        c -= d;
        d *= 2;
        d += 2;

        for(i = b; i !== d; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

        ctx.lineTo(
          cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
          cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
        );
      }

      else
        for(i = b; i !== path.length; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.stroke();
    }

    else if(c < 1) {
      ctx.beginPath();

      c *= path.length / 2 - 1;
      d  = Math.floor(c);
      c -= d;
      d *= 2;
      d += 2;

      ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw);

      for(i = 2; i !== d; i += 2)
        ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.lineTo(
        cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
        cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
      );

      ctx.stroke();
    }

    if(e < 1) {
      e *= path.length / 2 - 1;
      f  = Math.floor(e);
      e -= f;
      f *= 2;
      f += 2;

      leaf(
        ctx,
        t,
        cx + (path[f - 2] * (1 - e) + path[f    ] * e) * cw,
        cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw,
        cw,
        s,
        color
      );
    }
  }

  var Skycons = function(opts) {
        this.list        = [];
        this.interval    = null;
        this.color       = opts && opts.color ? opts.color : "black";
        this.resizeClear = !!(opts && opts.resizeClear);
      };

  Skycons.CLEAR_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.CLEAR_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.625, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.667, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.CLOUDY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    cloud(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.RAIN = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SLEET = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sleet(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SNOW = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.WIND = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
  };

  Skycons.FOG = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h),
        k = s * STROKE;

    fogbank(ctx, t, w * 0.5, h * 0.32, s * 0.75, k, color);

    t /= 5000;

    var a = Math.cos((t       ) * TAU) * s * 0.02,
        b = Math.cos((t + 0.25) * TAU) * s * 0.02,
        c = Math.cos((t + 0.50) * TAU) * s * 0.02,
        d = Math.cos((t + 0.75) * TAU) * s * 0.02,
        n = h * 0.936,
        e = Math.floor(n - k * 0.5) + 0.5,
        f = Math.floor(n - k * 2.5) + 0.5;

    ctx.strokeStyle = color;
    ctx.lineWidth = k;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
    line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
  };

  Skycons.prototype = {
    add: function(el, draw) {
      var obj;

      if(typeof el === "string")
        el = document.getElementById(el);

      // Does nothing if canvas name doesn't exists
      if(el === null)
        return;

      if(typeof draw === "string") {
        draw = draw.toUpperCase().replace(/-/g, "_");
        draw = Skycons.hasOwnProperty(draw) ? Skycons[draw] : null;
      }

      // Does nothing if the draw function isn't actually a function
      if(typeof draw !== "function")
        return;

      obj = {
        element: el,
        context: el.getContext("2d"),
        drawing: draw
      };

      this.list.push(obj);
      this.draw(obj, KEYFRAME);
    },
    set: function(el, draw) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list[i].drawing = draw;
          this.draw(this.list[i], KEYFRAME);
          return;
        }

      this.add(el, draw);
    },
    remove: function(el) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list.splice(i, 1);
          return;
        }
    },
    draw: function(obj, time) {
      var canvas = obj.context.canvas;

      if(this.resizeClear)
        canvas.width = canvas.width;

      else
        obj.context.clearRect(0, 0, canvas.width, canvas.height);

      obj.drawing(obj.context, time, this.color);
    },
    play: function() {
      var self = this;

      this.pause();
      this.interval = requestInterval(function() {
        var now = Date.now(),
            i;

        for(i = self.list.length; i--; )
          self.draw(self.list[i], now);
      }, 1000 / 60);
    },
    pause: function() {
      var i;

      if(this.interval) {
        cancelInterval(this.interval);
        this.interval = null;
      }
    }
  };

  global.Skycons = Skycons;
}(this));
;

    (function() {
      function icon2drawing(name) {
        name = name.toUpperCase();
        name = name.replace(/-/g, "_");
        return Skycons[name];
      }

      Polymer("route-skycon", {
        icon: "fog",
        attached: function() {
          this.skycons = new Skycons({"color": "#FFF"});
          this.skycons.add(this.$.canvas, icon2drawing(this.icon));
          this.skycons.play();
        },
        detached: function() {

        },
        iconChanged: function() {
          this.skycons.set(this.$.canvas, icon2drawing(this.icon));
        },
      })
    })();
  ;

    Polymer("route-ui-bar", {
      hours: "12",
      minutes: "00",
      temperatureString: "00",
      colors: null,
      enteredView: function() {
        this.setTime();
        this.invalidate();
      },
      colorsChanged: function(oldColors, newColors) {
        if(newColors.vibrant) {
          this.style.backgroundColor = newColors.vibrant.hex;
        } else {
          this.style.backgroundColor = newColors.dark.hex;
        }

      },
      temperatureChanged: function(oldValue, newValue) {
        this.temperatureString = Math.round(newValue);
      },
      invalidate: function() {
        this.layoutJob = this.job(this.layoutJob, this.relayout);
      },
      relayout: function() {
        this.$.content.style.width = this.offsetHeight + "px";
        this.$.content.style.height = this.offsetWidth + "px";
        this.$.content.style.left = this.offsetWidth + "px";
      },
      setTime: function() {
        var now = new Date(),
            hrs = now.getHours(),
            mins = now.getMinutes();
        if(hrs == 0) {
          hrs = 12;
        } else if(hrs > 12) {
          hrs -= 12;
        }
        if(mins < 10) {
          mins = "0" + mins;
        }
        this.hours = hrs;
        this.minutes = mins;

        setTimeout(this.setTime.bind(this), 1000);
      },
    });
  ;

    (function() {
      var state = {};

      function setValue(name, value) {
        var snaker = state;
        var parts = name.split(".");
        var last = parts.pop();
        parts.forEach(function(p) {
          snaker = snaker[p];
        });
        snaker[last] = value;
      }
      function getValue(name) {
        var snaker = state;
        var parts = name.split(".");
        for(var i = 0; i < parts.length; i++) {
          var p = parts[i];
          if(p in snaker) {
            snaker = snaker[p];
          } else {
            return null;
          }
        }
        return snaker;
      }

      document.addEventListener("route-state-change", function(e) {
        var values = e.detail.data;
        for(key in values) {
          setValue(key, values[key]);
        }
        notify();
      });

      var listeners = [];

      function notify() {
        listeners.forEach(function(l) {
          l.notify();
        });
      }

      Polymer('route-state-value', {
        name: null,
        value: null,
        attached: function() {
          listeners.push(this);
        },
        detached: function() {
          var i = listeners.indexOf(this);
          if (i >= 0) {
            listeners.splice(i, 1);
          }
        },
        nameChanged: function() {
          this.value = getValue(this.name);
          this.fire("state-change", this.value);
          console.log("nameChanged", this.name, this.value, state);
        },
        notify: function() {
          this.value = getValue(this.name);
          this.fire("state-change", this.value);
          console.log("notify", this.name, this.value, state);
        },
      });
    })();
  ;

    Polymer('route-ui-lights', {
      /**
       * Name to display on the tile
       *
       * @attribute name
       * @type string
       * @default "Lights"
       */
      name: "Lights",
      /**
       * Regex used to match the lights to control
       *
       * @attribute lights
       * @type regex
       * @default null
       */
      lights: null,

      tmpBrightness: 100,
      tmpState: false,
      brightness: 100,
      state: false,
      mode: "Off",

      lightsChanged: function(e, lights, sender) {
        var brightness = 0;
        var state = false;
        for(var key in lights) {
          var light = lights[key];
          if(light.name.match(this.key) && light.state) {
            state = state || light.state.on;
            brightness = Math.ceil(Math.max(light.state.bri * 100 / 255, brightness));
          }
        }
        this.tmpState = state;
        this.tmpBrightness = brightness;
        if(this.timer) {clearTimeout(this.timer);}
        this.timer = setTimeout(function() {
          this.state = this.tmpState;
          this.brightness = this.tmpBrightness;
        }.bind(this), 500);
      },
      stateChanged: function() {
        if(this.state) {
          this.mode = this.brightness >= 80 ? "On" : "Dim";
        } else {
          this.mode = "Off";
        }
      },
      brightnessChanged: function() {
        if(this.state) {
          this.mode = this.brightness >= 80 ? "On" : "Dim";
        } else {
          this.mode = "Off";
        }
      },
      tap: function(event, detail, sender) {
        this.state = !this.state;
        if(this.state) {
          this.messenger.send(this.room+"."+this.name+"On");
        } else {
          this.messenger.send(this.room+"."+this.name+"Off");
        }
      },
      swipeup: function(event, detail, sender) {
        this.brightness = 100;
        this.messenger.send(this.room+"."+this.name+"Bright");
      },
      swipedown: function(event, detail, sender) {
        this.brightness = 30;
        this.messenger.send(this.room+"."+this.name+"Dim");
      },
    });
  ;

    Polymer('route-ui-lockscreen', {
      hours: "12",
      minutes: "00",
      temperatureString: "00",
      attached: function() {
        this.setTime();
        this.resize();
      },
      temperatureChanged: function(oldTemp, newTemp) {
        this.temperatureString = Math.round(newTemp);
      },
      sunChanged: function(event, details, sender) {
        switch(details) {
          case "SunsetStart":
          case "Sunset":
          case "Dusk":
          case "NauticalDusk":
          case "Night":
          case "Nadir":
          case "NightEnd":
          case "NauticalDawn":
          case "Dawn":
            this.classList.add("night");
            break;
          case "Sunrise":
          case "SunriseEnd":
          case "GoldenHourEnd":
          case "SolarNoon":
          case "GoldenHour":
            this.classList.remove("night");
            break;
        }
      },
      resize: function() {
        var screenAmount = 0.75;

        var w = this.offsetWidth,
            h = this.offsetHeight;
        var fontSize = 64;
        while(this.$.time.offsetHeight < h * screenAmount) {
          fontSize *= 2;
          this.$.time.style.fontSize = fontSize + "px";
        }
        var min = 64, max = fontSize;
        do {
          var guess = Math.floor((max - min) / 2) + min;
          this.$.time.style.fontSize = guess + "px";
          if(this.$.time.offsetHeight < h * screenAmount) {
            min = guess + 1;
          } else {
            max = guess - 1;
          }
        } while(min < max);
      },
      setTime: function() {
        var now = new Date(),
            hrs = now.getHours(),
            mins = now.getMinutes();
        if(hrs == 0) {
          hrs = 12;
        } else if(hrs > 12) {
          hrs -= 12;
        }
        if(mins < 10) {
          mins = "0" + mins;
        }
        this.hours = hrs;
        this.minutes = mins;

        setTimeout(this.setTime.bind(this), 1000);
      },
    });
  ;

    (function() {
      var state = '', instances = [], f;
      function load() {
        f = document.createElement('iframe');
        f.style.display = 'none';
        document.body.appendChild(f);
        var d = f.contentWindow ? f.contentWindow.document : (f.contentDocument.document ? f.contentDocument.document : f.contentDocument);
        d.open();
        d.write(loader);
        d.close();
      }
      var api;
      var loaded = function(google) {
        state = "ready";
        window.__polymer_google_jsapi = undefined;
        window.google = api = google;
        instances.forEach(function(i) {
          i.notify();
        });
      }
      var loader =
        '<script type="text/javascript" src="https://www.google.com/jsapi"></scr' + 'ipt>' +
        '<script>parent.__polymer_google_jsapi(google);</scr' + 'ipt>'
      ;
      window.__polymer_google_jsapi = loaded;

      Polymer('polymer-google-jsapi', {
        enteredView: function() {
          switch (state) {
            case '':
              instances.push(this);
              load();
              state = 'pending';
              break;
            case 'pending':
              instances.push(this);
              break;
            case 'ready':
              this.provide();
              break;
          }
        },
        provide: function() {
          this.asyncMethod('notify');
        },
        notify: function() {
          this.fire('polymer-google-jsapi-loaded');
        },
        get google() {
          return api;
        }
      });
    })();
  ;

    (function() {

      var BadURLs = {};

      function Loader(results, callback) {
        this.results = results;
        this.callback = callback;

        this.img = document.createElement("img");
        this.handlers = {
          error: this.handleError.bind(this),
          load: this.handleLoad.bind(this),
        }
        this.img.addEventListener("error", this.handlers.error);
        this.img.addEventListener("load", this.handlers.load);

        this.resultIndex = null;
        this.pickBestResult();
      }
      Loader.prototype.pickBestResult = function() {
        this.resultIndex = this.resultIndex === null ? 0 : this.resultIndex + 1;
        if(this.resultIndex < this.results.length) {
          this.result = this.results[this.resultIndex];
          this.img.src = this.result.url;
        } else {
          console.log("ERROR: No more results to load");
        }
      };
      Loader.prototype.handleError = function() {
        this.pickBestResult();
      };
      Loader.prototype.handleLoad = function() {
        this.img.removeEventListener("error", this.handlers.error);
        this.img.removeEventListener("load", this.handlers.load);
        this.callback(this.img);
      };

      function Searcher(google) {
        this.search = new google.search.ImageSearch();
      }
      Searcher.prototype.execute = function(query, cb) {
        this.search.setSearchCompleteCallback(this, this.handleSearch, [cb]);
        this.search.execute(query);
      };
      Searcher.prototype.handleSearch = function(cb) {
        var results = this.search.results;
        new Loader(results, cb);
      }

      Polymer("polymer-image-search", {
        loaded: false,
        googleLoaded: function() {
          console.log("GOOGLE LOADED");
          this.$.jsapi.google.setOnLoadCallback(this.searchLoaded.bind(this));
          this.$.jsapi.google.load("search", "1");
        },
        searchLoaded: function() {
          console.log("SEARCH LOADED");
          this.loaded = true;
          if(this.query != null && this.query != "") {
            this.queryChanged(this.query, this.query);
          }
        },
        queryChanged: function(oldQuery, newQuery) {
          if(this.loaded) {
            var searcher = new Searcher(this.$.jsapi.google);
            searcher.execute(newQuery, function(img) {
              this.fire("load", img);
            }.bind(this));
          } else {
            console.log("SEARCH NOT LOADED");
          }
        },
      });
    })();
  ;

    Polymer('route-ui-media', {
      trackChanged: function(event, details, sender) {
        this.name = details.name;
        this.$.albumart.src = details.artwork;
      },
      playPause: function() {
        this.messenger.send(this.room+".PlayPause");
      },
      nextTrack: function() {
        this.messenger.send(this.room+".NextTrack");
      },
      prevTrack: function() {
        this.messenger.send(this.room+".PrevTrack");
      },
      imgLoaded: function() {
        var img = this.$.albumart;
        img.style.height = "auto";
        img.style.width = "auto";
        var dim = this.offsetWidth - 8;
        if(img.width > img.height) {
          var width = (dim * img.width / img.height),
              offset = -Math.floor((width - dim) / 2);

          img.style.position = "relative";
          img.style.height = dim + "px";
          img.style.width = "auto";
          img.style.left = offset + "px";
        } else {
          var height = (dim * img.height / img.width),
              offset = -Math.floor((height - dim) / 2);

          img.style.position = "relative";
          img.style.width = dim + "px";
          img.style.height = "auto";
          img.style.top = offset + "px";
        }
      },
    });
  ;

    Polymer('route-ui-power', {
      attached: function() {},
      centerHandler: function(event, detail, sender) {
        this.$.powerManager.sleep();
      },
    });
  ;

    Polymer("route-ui-room-picker", {
      rooms: null,
      names: null,
      roomsChanged: function() {
        this.names = [];
        for(var key in this.rooms) {
          this.names.push({
            key: key,
            name: this.rooms[key].longName,
          });
        }
      },
      select: function(e, details, sender) {
        this.fire("route-room-selected", {
          room: sender.templateInstance.model.key
        });
      },
    });
  ;

    Polymer('route-ui-speech', {
      ready: function() {
        if(!window.plugins || !window.plugins.speechrecognizer) {
          this.$.tile.classList.add("disabled");
        }
      },
      centerHandler: function() {
        if(window.plugins && window.plugins.speechrecognizer) {
          this.$.tile.classList.add("active");

          var maxMatches = 1;
          var promptString = "What can I do for you?"; // optional
          var language = "en-US";         // optional
          window.plugins.speechrecognizer.startRecognize(this.resultHandler.bind(this),
            this.errorHandler.bind(this), maxMatches, promptString, language);
        }
      },
      resultHandler: function(result) {
        this.$.tile.classList.remove("active");
        this.messenger.send("Voice", {
          result: result,
        });
      },
      errorHandler: function(e) {
        console.log(error);
        this.$.tile.classList.remove("active");
      },
    });
  ;

    (function() {
      function transpose(arr) {
        var trans = [];

        var rows = arr.length,
            cols = arr[0].length;
        for(var y = 0; y < cols; y++) {
          var row = [];
          trans.push(row);
          for(var x = 0; x < arr.length; x++) {
            row.push(arr[x][y]);
          }
        }
      }

      Polymer("route-app", {
        rooms: {
          "Kitchen": {
            longName: "Kitchen",
            shortName: "Kitchen",
            controls: [
              {type: "tile-media"},
              {type: "tile-voice"},
              {type: "tile-power"},
            ]
          },
          "TomBedroom": {
            longName: "Tom's Bedroom",
            shortName: "Bedroom",
            controls: [
              {type: "tile-lights", name: "Lights", key: "TomBedroom"},
              {type: "tile-lights", name: "Lamp", key: "TomLamp"},
              {type: "tile-media"},
              {type: "tile-power"},
              {type: "tile-blank"},
              {type: "tile-voice"},
            ]
          },
        },

        layouts: {
          1: [[1]],
          2: [[1,2]],
          3: [[1,1,2],
              [1,1,3]],
          4: [[1,2],
              [3,4]],
          5: [[1,1,2,3],
              [1,1,4,5]],
          6: [[1,2,3],
              [4,5,6]]
        },

        page: "panel",
        room: "TomBedroom",

        curRoom: {longName: "N/A", shortName: "N/A", controls: []},
        curLayout: [[]],
        roomPickerActive: false,

        ready: function() {
          window.addEventListener("resize", this.resize.bind(this));
          if("cordova" in window) {
            window.brightness = cordova.require("cordova.plugin.Brightness.Brightness");
            window.brightness.setKeepScreenOn(true);
          }

          this.room = "TomBedroom";
          this.curRoom = this.rooms[this.room];
          this.curLayout = this.layouts[this.curRoom.controls.length];
          this.$.tileLayout.invalidate();
        },
        roomChanged: function(oldValue, newValue) {
          this.curRoom = this.rooms[this.room];
          this.curLayout = this.layouts[this.curRoom.controls.length];
        },
        roomSelected: function(e, details, sender) {
          this.room = details.room;
          this.toggleRoomPicker();
        },
        toggleRoomPicker: function() {
          this.roomPickerActive = !this.roomPickerActive;
        },
        wake: function() {
          this.page = "panel";
        },
        sleep: function() {
          this.page = "clock";
        },
        resize: function() {
          this.$.tileLayout.invalidate();
          this.$.bar.invalidate();
        },
      });
    })();
  