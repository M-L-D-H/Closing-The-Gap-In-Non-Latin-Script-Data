import{S as J,i as K,s as V,k as m,l as g,m as k,h,n as E,b as p,E as j,o as U,q as w,a as x,r as L,c as N,D as v,M as S,e as D,u as z,y as W,Q as X,z as Z,A as ee,g as te,d as le,B as re}from"../chunks/index.53712d3a.js";import{e as H,g as ne,i as ce,j as oe,m as se,k as ae,l as ie}from"../chunks/utils.d4afc21c.js";function M(s,e,t){const n=s.slice();return n[6]=e[t][0],n[7]=e[t][1],n[9]=t,n}function R(s,e,t){const n=s.slice();return n[10]=e[t],n[12]=t,n}function Y(s,e,t){const n=s.slice();return n[10]=e[t],n[12]=t,n}function q(s,e,t){const n=s.slice();return n[10]=e[t],n[9]=t,n}function fe(s){let e,t,n,c,l,r,a,f,i=s[1],o=[];for(let u=0;u<i.length;u+=1)o[u]=B(q(s,i,u));let b=s[0],_=[];for(let u=0;u<b.length;u+=1)_[u]=G(M(s,b,u));return{c(){e=m("table"),t=m("thead"),n=m("tr"),c=m("th"),l=w("Project title"),r=x();for(let u=0;u<o.length;u+=1)o[u].c();a=x(),f=m("tbody");for(let u=0;u<_.length;u+=1)_[u].c();this.h()},l(u){e=g(u,"TABLE",{class:!0});var y=k(e);t=g(y,"THEAD",{class:!0});var d=k(t);n=g(d,"TR",{class:!0});var T=k(n);c=g(T,"TH",{class:!0});var A=k(c);l=L(A,"Project title"),A.forEach(h),r=N(T);for(let $=0;$<o.length;$+=1)o[$].l(T);T.forEach(h),d.forEach(h),a=N(y),f=g(y,"TBODY",{});var C=k(f);for(let $=0;$<_.length;$+=1)_[$].l(C);C.forEach(h),y.forEach(h),this.h()},h(){E(c,"class","border-b border-r border-slate-800"),E(n,"class","border-b border-slate-800"),E(t,"class","sticky top-0"),E(e,"class","mx-auto w-full table-auto border-separate border-spacing-0 bg-ctgtan")},m(u,y){p(u,e,y),v(e,t),v(t,n),v(n,c),v(c,l),v(n,r);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(n,null);v(e,a),v(e,f);for(let d=0;d<_.length;d+=1)_[d]&&_[d].m(f,null)},p(u,y){if(y&2){i=u[1];let d;for(d=0;d<i.length;d+=1){const T=q(u,i,d);o[d]?o[d].p(T,y):(o[d]=B(T),o[d].c(),o[d].m(n,null))}for(;d<o.length;d+=1)o[d].d(1);o.length=i.length}if(y&3){b=u[0];let d;for(d=0;d<b.length;d+=1){const T=M(u,b,d);_[d]?_[d].p(T,y):(_[d]=G(T),_[d].c(),_[d].m(f,null))}for(;d<_.length;d+=1)_[d].d(1);_.length=b.length}},d(u){u&&h(e),S(o,u),S(_,u)}}}function he(s){let e,t;return{c(){e=m("p"),t=w("Loading…"),this.h()},l(n){e=g(n,"P",{class:!0});var c=k(e);t=L(c,"Loading…"),c.forEach(h),this.h()},h(){E(e,"class","text-center text-lg font-normal text-gray-50")},m(n,c){p(n,e,c),v(e,t)},p:j,d(n){n&&h(e)}}}function _e(s){let e,t,n=s[10].slice(-2)+"",c;return{c(){e=m("th"),t=w("’"),c=w(n),this.h()},l(l){e=g(l,"TH",{class:!0});var r=k(e);t=L(r,"’"),c=L(r,n),r.forEach(h),this.h()},h(){E(e,"class","border-b border-r border-slate-800 px-1 py-1.5 text-sm")},m(l,r){p(l,e,r),v(e,t),v(e,c)},p:j,d(l){l&&h(e)}}}function ue(s){let e,t,n=s[10].slice(-2)+"",c;return{c(){e=m("th"),t=w("’"),c=w(n),this.h()},l(l){e=g(l,"TH",{class:!0});var r=k(e);t=L(r,"’"),c=L(r,n),r.forEach(h),this.h()},h(){E(e,"class","border-b border-slate-800 px-1 py-1.5 text-sm")},m(l,r){p(l,e,r),v(e,t),v(e,c)},p:j,d(l){l&&h(e)}}}function B(s){let e;function t(l,r){return l[9]===l[1].length-1?ue:_e}let c=t(s)(s);return{c(){c.c(),e=D()},l(l){c.l(l),e=D()},m(l,r){c.m(l,r),p(l,e,r)},p(l,r){c.p(l,r)},d(l){c.d(l),l&&h(e)}}}function de(s){let e,t,n=P(s[7].project.title)+"",c,l,r,a,f=s[1],i=[];for(let o=0;o<f.length;o+=1)i[o]=O(R(s,f,o));return{c(){e=m("td"),t=m("a"),c=w(n),r=x();for(let o=0;o<i.length;o+=1)i[o].c();a=D(),this.h()},l(o){e=g(o,"TD",{class:!0});var b=k(e);t=g(b,"A",{href:!0,target:!0,rel:!0});var _=k(t);c=L(_,n),_.forEach(h),b.forEach(h),r=N(o);for(let u=0;u<i.length;u+=1)i[u].l(o);a=D(),this.h()},h(){E(t,"href",l=I(s[6])),E(t,"target","_blank"),E(t,"rel","noreferrer"),E(e,"class","border-b border-r border-slate-800 px-2 py-0.5")},m(o,b){p(o,e,b),v(e,t),v(t,c),p(o,r,b);for(let _=0;_<i.length;_+=1)i[_]&&i[_].m(o,b);p(o,a,b)},p(o,b){if(b&1&&n!==(n=P(o[7].project.title)+"")&&z(c,n),b&1&&l!==(l=I(o[6]))&&E(t,"href",l),b&3){f=o[1];let _;for(_=0;_<f.length;_+=1){const u=R(o,f,_);i[_]?i[_].p(u,b):(i[_]=O(u),i[_].c(),i[_].m(a.parentNode,a))}for(;_<i.length;_+=1)i[_].d(1);i.length=f.length}},d(o){o&&h(e),o&&h(r),S(i,o),o&&h(a)}}}function be(s){let e,t=P(s[7].project.title)+"",n,c,l,r=s[1],a=[];for(let f=0;f<r.length;f+=1)a[f]=F(Y(s,r,f));return{c(){e=m("td"),n=w(t),c=x();for(let f=0;f<a.length;f+=1)a[f].c();l=D(),this.h()},l(f){e=g(f,"TD",{class:!0});var i=k(e);n=L(i,t),i.forEach(h),c=N(f);for(let o=0;o<a.length;o+=1)a[o].l(f);l=D(),this.h()},h(){E(e,"class","border-r border-slate-800 px-2 py-0.5")},m(f,i){p(f,e,i),v(e,n),p(f,c,i);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(f,i);p(f,l,i)},p(f,i){if(i&1&&t!==(t=P(f[7].project.title)+"")&&z(n,t),i&3){r=f[1];let o;for(o=0;o<r.length;o+=1){const b=Y(f,r,o);a[o]?a[o].p(b,i):(a[o]=F(b),a[o].c(),a[o].m(l.parentNode,l))}for(;o<a.length;o+=1)a[o].d(1);a.length=r.length}},d(f){f&&h(e),f&&h(c),S(a,f),f&&h(l)}}}function pe(s){let e;return{c(){e=m("td"),this.h()},l(t){e=g(t,"TD",{class:!0}),k(e).forEach(h),this.h()},h(){E(e,"class","border-b border-r border-slate-800/25")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function me(s){let e;return{c(){e=m("td"),this.h()},l(t){e=g(t,"TD",{class:!0}),k(e).forEach(h),this.h()},h(){E(e,"class","border-b border-slate-800/25")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function ge(s){let e;return{c(){e=m("td"),this.h()},l(t){e=g(t,"TD",{class:!0}),k(e).forEach(h),this.h()},h(){E(e,"class","bg-slate-800")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function O(s){let e,t;function n(r,a){return a&1&&(e=null),e==null&&(e=!!Q(Number(r[10]),r[7])),e?ge:r[12]===r[1].length-1?me:pe}let c=n(s,-1),l=c(s);return{c(){l.c(),t=D()},l(r){l.l(r),t=D()},m(r,a){l.m(r,a),p(r,t,a)},p(r,a){c!==(c=n(r,a))&&(l.d(1),l=c(r),l&&(l.c(),l.m(t.parentNode,t)))},d(r){l.d(r),r&&h(t)}}}function ke(s){let e;return{c(){e=m("td"),this.h()},l(t){e=g(t,"TD",{class:!0}),k(e).forEach(h),this.h()},h(){E(e,"class","border-r border-slate-800/25")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function Ee(s){let e;return{c(){e=m("td")},l(t){e=g(t,"TD",{}),k(e).forEach(h)},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function ve(s){let e;return{c(){e=m("td"),this.h()},l(t){e=g(t,"TD",{class:!0}),k(e).forEach(h),this.h()},h(){E(e,"class","bg-slate-800")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function F(s){let e,t;function n(r,a){return a&1&&(e=null),e==null&&(e=!!Q(Number(r[10]),r[7])),e?ve:r[12]===r[1].length-1?Ee:ke}let c=n(s,-1),l=c(s);return{c(){l.c(),t=D()},l(r){l.l(r),t=D()},m(r,a){l.m(r,a),p(r,t,a)},p(r,a){c!==(c=n(r,a))&&(l.d(1),l=c(r),l&&(l.c(),l.m(t.parentNode,t)))},d(r){l.d(r),r&&h(t)}}}function G(s){let e,t;function n(r,a){return r[9]===r[0].length-1?be:de}let c=n(s),l=c(s);return{c(){e=m("tr"),l.c(),t=x()},l(r){e=g(r,"TR",{});var a=k(e);l.l(a),t=N(a),a.forEach(h)},m(r,a){p(r,e,a),l.m(e,null),v(e,t)},p(r,a){c===(c=n(r))&&l?l.p(r,a):(l.d(1),l=c(r),l&&(l.c(),l.m(e,t)))},d(r){r&&h(e),l.d()}}}function ye(s){let e;function t(l,r){return l[0].length===0?he:fe}let n=t(s),c=n(s);return{c(){e=m("div"),c.c(),this.h()},l(l){e=g(l,"DIV",{class:!0});var r=k(e);c.l(r),r.forEach(h),this.h()},h(){E(e,"class","mx-auto max-w-[76rem] px-4")},m(l,r){p(l,e,r),c.m(e,null)},p(l,[r]){n===(n=t(l))&&c?c.p(l,r):(c.d(1),c=n(l),c&&(c.c(),c.m(e,null)))},i:j,o:j,d(l){l&&h(e),c.d()}}}function P(s){if(s.length<=36)return s;let t=36;for(;s[t]!==" ";)t--;return`${s.slice(0,t)} …`}function Q(s,e){for(const t of e.project.date)if(t.from&&t.to&&s>=t.from.slice(0,4)&&s<=t.to.slice(0,4))return!0;return!1}function I(s){const e="https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/PROJECTS/",t=s.split("/PROJECTS/")[1];return e+t}function Te(s,e,t){let n,c;H.subscribe(i=>{t(2,c=i)});const l=new Date().getFullYear(),r=l-18,a=l+12,f=Array.from({length:a-r+1},(i,o)=>String(r+o));return U(async()=>{const[i,o]=await ne();if(c.length!==i){const b=await ce(o),_=oe(b),u=se(b);H.set(b),ae.set(_),ie.set(u)}}),s.$$.update=()=>{s.$$.dirty&4&&t(0,n=c.filter(([,i])=>i.project.date[0].from&&i.project.date[0].to))},[n,f,c]}class De extends J{constructor(e){super(),K(this,e,Te,ye,V,{})}}function we(s){let e,t,n;return t=new De({}),{c(){e=x(),W(t.$$.fragment),this.h()},l(c){X("svelte-16q4wy7",document.head).forEach(h),e=N(c),Z(t.$$.fragment,c),this.h()},h(){document.title="Closing the Gap in Non-Latin-Script Data – Timeline"},m(c,l){p(c,e,l),ee(t,c,l),n=!0},p:j,i(c){n||(te(t.$$.fragment,c),n=!0)},o(c){le(t.$$.fragment,c),n=!1},d(c){c&&h(e),re(t,c)}}}class je extends J{constructor(e){super(),K(this,e,null,we,V,{})}}export{je as component};