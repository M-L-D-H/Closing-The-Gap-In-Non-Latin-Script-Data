import{s as V,n as S}from"../chunks/scheduler.xdrc5JgQ.js";import{S as z,i as K,s as j,e as m,k as Q,d as h,f as w,c as g,a as v,m as k,g as p,l as J,h as E,n as H,o as D,t as L,b as N,j as M}from"../chunks/index.xBBBUXo2.js";import{e as x}from"../chunks/each.6w4Ej4nR.js";import{e as W}from"../chunks/ENTRIES.8jKo7Gpw.js";function $(s,e,t){const n=s.slice();return n[6]=e[t][0],n[7]=e[t][1],n[9]=t,n}function A(s,e,t){const n=s.slice();return n[10]=e[t],n[12]=t,n}function Y(s,e,t){const n=s.slice();return n[10]=e[t],n[12]=t,n}function O(s,e,t){const n=s.slice();return n[10]=e[t],n[9]=t,n}function X(s){let e,t,n,a,r="Project title",l,o,i,f=x(s[1]),c=[];for(let d=0;d<f.length;d+=1)c[d]=q(O(s,f,d));let b=x(s[0]),_=[];for(let d=0;d<b.length;d+=1)_[d]=G($(s,b,d));return{c(){e=m("table"),t=m("thead"),n=m("tr"),a=m("th"),a.textContent=r,l=j();for(let d=0;d<c.length;d+=1)c[d].c();o=j(),i=m("tbody");for(let d=0;d<_.length;d+=1)_[d].c();this.h()},l(d){e=g(d,"TABLE",{class:!0});var y=v(e);t=g(y,"THEAD",{class:!0});var u=v(t);n=g(u,"TR",{class:!0});var T=v(n);a=g(T,"TH",{class:!0,"data-svelte-h":!0}),J(a)!=="svelte-1l1jm3t"&&(a.textContent=r),l=w(T);for(let C=0;C<c.length;C+=1)c[C].l(T);T.forEach(h),u.forEach(h),o=w(y),i=g(y,"TBODY",{});var R=v(i);for(let C=0;C<_.length;C+=1)_[C].l(R);R.forEach(h),y.forEach(h),this.h()},h(){k(a,"class","border-b border-r border-slate-800"),k(n,"class","border-b border-slate-800"),k(t,"class","sticky top-0"),k(e,"class","mx-auto w-full table-auto border-separate border-spacing-0 bg-ctgtan")},m(d,y){p(d,e,y),E(e,t),E(t,n),E(n,a),E(n,l);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(n,null);E(e,o),E(e,i);for(let u=0;u<_.length;u+=1)_[u]&&_[u].m(i,null)},p(d,y){if(y&2){f=x(d[1]);let u;for(u=0;u<f.length;u+=1){const T=O(d,f,u);c[u]?c[u].p(T,y):(c[u]=q(T),c[u].c(),c[u].m(n,null))}for(;u<c.length;u+=1)c[u].d(1);c.length=f.length}if(y&3){b=x(d[0]);let u;for(u=0;u<b.length;u+=1){const T=$(d,b,u);_[u]?_[u].p(T,y):(_[u]=G(T),_[u].c(),_[u].m(i,null))}for(;u<_.length;u+=1)_[u].d(1);_.length=b.length}},d(d){d&&h(e),H(c,d),H(_,d)}}}function Z(s){let e,t="Loading…";return{c(){e=m("p"),e.textContent=t,this.h()},l(n){e=g(n,"P",{class:!0,"data-svelte-h":!0}),J(e)!=="svelte-15y93v3"&&(e.textContent=t),this.h()},h(){k(e,"class","text-center text-lg font-normal text-gray-50")},m(n,a){p(n,e,a)},p:S,d(n){n&&h(e)}}}function ee(s){let e,t,n=s[10].slice(-2)+"",a;return{c(){e=m("th"),t=L("’"),a=L(n),this.h()},l(r){e=g(r,"TH",{class:!0});var l=v(e);t=N(l,"’"),a=N(l,n),l.forEach(h),this.h()},h(){k(e,"class","border-b border-r border-slate-800 px-1 py-1.5 text-sm")},m(r,l){p(r,e,l),E(e,t),E(e,a)},p:S,d(r){r&&h(e)}}}function te(s){let e,t,n=s[10].slice(-2)+"",a;return{c(){e=m("th"),t=L("’"),a=L(n),this.h()},l(r){e=g(r,"TH",{class:!0});var l=v(e);t=N(l,"’"),a=N(l,n),l.forEach(h),this.h()},h(){k(e,"class","border-b border-slate-800 px-1 py-1.5 text-sm")},m(r,l){p(r,e,l),E(e,t),E(e,a)},p:S,d(r){r&&h(e)}}}function q(s){let e;function t(r,l){return r[9]===r[1].length-1?te:ee}let a=t(s)(s);return{c(){a.c(),e=D()},l(r){a.l(r),e=D()},m(r,l){a.m(r,l),p(r,e,l)},p(r,l){a.p(r,l)},d(r){r&&h(e),a.d(r)}}}function le(s){let e,t,n=P(s[7].project.title)+"",a,r,l,o,i=x(s[1]),f=[];for(let c=0;c<i.length;c+=1)f[c]=B(A(s,i,c));return{c(){e=m("td"),t=m("a"),a=L(n),l=j();for(let c=0;c<f.length;c+=1)f[c].c();o=D(),this.h()},l(c){e=g(c,"TD",{class:!0});var b=v(e);t=g(b,"A",{href:!0,target:!0,rel:!0});var _=v(t);a=N(_,n),_.forEach(h),b.forEach(h),l=w(c);for(let d=0;d<f.length;d+=1)f[d].l(c);o=D(),this.h()},h(){k(t,"href",r=I(s[6])),k(t,"target","_blank"),k(t,"rel","noreferrer"),k(e,"class","border-b border-r border-slate-800 px-2 py-0.5")},m(c,b){p(c,e,b),E(e,t),E(t,a),p(c,l,b);for(let _=0;_<f.length;_+=1)f[_]&&f[_].m(c,b);p(c,o,b)},p(c,b){if(b&1&&n!==(n=P(c[7].project.title)+"")&&M(a,n),b&1&&r!==(r=I(c[6]))&&k(t,"href",r),b&3){i=x(c[1]);let _;for(_=0;_<i.length;_+=1){const d=A(c,i,_);f[_]?f[_].p(d,b):(f[_]=B(d),f[_].c(),f[_].m(o.parentNode,o))}for(;_<f.length;_+=1)f[_].d(1);f.length=i.length}},d(c){c&&(h(e),h(l),h(o)),H(f,c)}}}function re(s){let e,t=P(s[7].project.title)+"",n,a,r,l=x(s[1]),o=[];for(let i=0;i<l.length;i+=1)o[i]=F(Y(s,l,i));return{c(){e=m("td"),n=L(t),a=j();for(let i=0;i<o.length;i+=1)o[i].c();r=D(),this.h()},l(i){e=g(i,"TD",{class:!0});var f=v(e);n=N(f,t),f.forEach(h),a=w(i);for(let c=0;c<o.length;c+=1)o[c].l(i);r=D(),this.h()},h(){k(e,"class","border-r border-slate-800 px-2 py-0.5")},m(i,f){p(i,e,f),E(e,n),p(i,a,f);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(i,f);p(i,r,f)},p(i,f){if(f&1&&t!==(t=P(i[7].project.title)+"")&&M(n,t),f&3){l=x(i[1]);let c;for(c=0;c<l.length;c+=1){const b=Y(i,l,c);o[c]?o[c].p(b,f):(o[c]=F(b),o[c].c(),o[c].m(r.parentNode,r))}for(;c<o.length;c+=1)o[c].d(1);o.length=l.length}},d(i){i&&(h(e),h(a),h(r)),H(o,i)}}}function ne(s){let e;return{c(){e=m("td"),this.h()},l(t){e=g(t,"TD",{class:!0}),v(e).forEach(h),this.h()},h(){k(e,"class","border-b border-r border-slate-800/25")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function ce(s){let e;return{c(){e=m("td"),this.h()},l(t){e=g(t,"TD",{class:!0}),v(e).forEach(h),this.h()},h(){k(e,"class","border-b border-slate-800/25")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function oe(s){let e;return{c(){e=m("td"),this.h()},l(t){e=g(t,"TD",{class:!0}),v(e).forEach(h),this.h()},h(){k(e,"class","bg-slate-800")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function B(s){let e,t;function n(l,o){return o&1&&(e=null),e==null&&(e=!!U(Number(l[10]),l[7])),e?oe:l[12]===l[1].length-1?ce:ne}let a=n(s,-1),r=a(s);return{c(){r.c(),t=D()},l(l){r.l(l),t=D()},m(l,o){r.m(l,o),p(l,t,o)},p(l,o){a!==(a=n(l,o))&&(r.d(1),r=a(l),r&&(r.c(),r.m(t.parentNode,t)))},d(l){l&&h(t),r.d(l)}}}function se(s){let e;return{c(){e=m("td"),this.h()},l(t){e=g(t,"TD",{class:!0}),v(e).forEach(h),this.h()},h(){k(e,"class","border-r border-slate-800/25")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function ae(s){let e;return{c(){e=m("td")},l(t){e=g(t,"TD",{}),v(e).forEach(h)},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function ie(s){let e;return{c(){e=m("td"),this.h()},l(t){e=g(t,"TD",{class:!0}),v(e).forEach(h),this.h()},h(){k(e,"class","bg-slate-800")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function F(s){let e,t;function n(l,o){return o&1&&(e=null),e==null&&(e=!!U(Number(l[10]),l[7])),e?ie:l[12]===l[1].length-1?ae:se}let a=n(s,-1),r=a(s);return{c(){r.c(),t=D()},l(l){r.l(l),t=D()},m(l,o){r.m(l,o),p(l,t,o)},p(l,o){a!==(a=n(l,o))&&(r.d(1),r=a(l),r&&(r.c(),r.m(t.parentNode,t)))},d(l){l&&h(t),r.d(l)}}}function G(s){let e,t;function n(l,o){return l[9]===l[0].length-1?re:le}let a=n(s),r=a(s);return{c(){e=m("tr"),r.c(),t=j()},l(l){e=g(l,"TR",{});var o=v(e);r.l(o),t=w(o),o.forEach(h)},m(l,o){p(l,e,o),r.m(e,null),E(e,t)},p(l,o){a===(a=n(l))&&r?r.p(l,o):(r.d(1),r=a(l),r&&(r.c(),r.m(e,t)))},d(l){l&&h(e),r.d()}}}function fe(s){let e,t;function n(l,o){return l[0].length===0?Z:X}let a=n(s),r=a(s);return{c(){e=j(),t=m("div"),r.c(),this.h()},l(l){Q("svelte-16q4wy7",document.head).forEach(h),e=w(l),t=g(l,"DIV",{class:!0});var i=v(t);r.l(i),i.forEach(h),this.h()},h(){document.title="Closing the Gap in Non-Latin-Script Data – Timeline",k(t,"class","mx-auto max-w-[76rem] px-4")},m(l,o){p(l,e,o),p(l,t,o),r.m(t,null)},p(l,[o]){a===(a=n(l))&&r?r.p(l,o):(r.d(1),r=a(l),r&&(r.c(),r.m(t,null)))},i:S,o:S,d(l){l&&(h(e),h(t)),r.d()}}}function P(s){if(s.length<=36)return s;let t=36;for(;s[t]!==" ";)t--;return`${s.slice(0,t)} …`}function U(s,e){for(const t of e.project.date)if(t.from&&t.to&&s>=t.from.slice(0,4)&&s<=t.to.slice(0,4))return!0;return!1}function I(s){const e="https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/PROJECTS/",t=s.split("/PROJECTS/")[1];return e+t}function he(s,e,t){let n;const a=W,r=new Date().getFullYear(),l=r-18,o=r+12,i=Array.from({length:o-l+1},(f,c)=>String(l+c));return t(0,n=a.filter(([,f])=>f.project.date[0].from&&f.project.date[0].to)),[n,i]}class pe extends z{constructor(e){super(),K(this,e,he,fe,V,{})}}export{pe as component};