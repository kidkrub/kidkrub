(this.webpackJsonpkidkrub=this.webpackJsonpkidkrub||[]).push([[0],{14:function(e,n,t){e.exports=t(22)},19:function(e,n,t){},20:function(e,n,t){},21:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(7),r=t.n(c),i=(t(19),t(8)),s=t(9),l=t(12),u=t(10),d=t(13),m=(t(20),t(11)),b=t(1),f=t(5);t(21);function v(e){var n=o.a.createRef();return Object(a.useEffect)((function(){n.current.scrollIntoView({behavior:"smooth"})})),o.a.createElement("div",null,e.item.map((function(e){return o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})})),o.a.createElement("div",{ref:n}))}function k(e){var n=Object(a.useState)([]),t=Object(f.a)(n,2),c=t[0],r=t[1];function i(e){"Enter"!==e.key&&r([].concat(Object(b.a)(c),[e.key]))}function s(n){switch(n.key){case"Enter":!function(n){var t=n.split(" "),a=Object(m.a)(t),o=a[0],c=a.slice(1);switch(o){case"help":l.apply(void 0,Object(b.a)(c)),r([]);break;case"clear":v.apply(void 0,Object(b.a)(c)),r([]);break;case"ls":d.apply(void 0,Object(b.a)(c)),r([]);break;case"cat":u.apply(void 0,Object(b.a)(c)),r([]);break;default:e.onEnter(n,"Unknow command ".concat(o)),r([])}}(c.join(""));break;case"Backspace":n.preventDefault(),r(c.slice(0,-1));break;default:return}}function l(){e.onEnter(c,'\n    <div class="help">\n      <div>ls</div><div>list directory contents</div>\n      <div>cat</div><div>concatenate and print files example: cat profile</div>\n    </div>\n    ')}function u(){switch(arguments.length<=0?void 0:arguments[0]){case"profile":e.onEnter(c,'Name: Kritsada Moungkhao\n          <br/ >\n          Birth date: 03/05/1996\n          <br/ >\n          Hobbies: Read books, play games\n          <br/ >\n          Education: Bachelor\u2019s degree in Logistics Engineering from King Mongkut\'s University of Technology North Bangkok\n          <br/ >\n          LinkedIn: <a href="https://www.linkedin.com/in/kidkrub" target="_blank">Profile</a>\n          <br/>\n          Current job: Junior Developer at Atvantage');break;case"contact":e.onEnter(c,"kritsadamoungkhao@gmail.com");break;default:e.onEnter(c,"\n          file not found\n          ")}}function d(){e.onEnter(c,"profile contact")}function v(){e.onCls()}return Object(a.useEffect)((function(){return document.addEventListener("keypress",i),document.addEventListener("keydown",s),function(){document.removeEventListener("keypress",i),document.removeEventListener("keydown",s)}})),o.a.createElement("pre",null,c,o.a.createElement("span",{className:"blink"}))}var p=function(){var e=Object(a.useState)(['\n  Welcome to my portfolio\n  <br />\n  If you\'re interested by my porfolio you can type "help" to see available commands and get started. Thanks.']),n=Object(f.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)([]),i=Object(f.a)(r,2),s=i[0],l=i[1];return o.a.createElement("div",{className:"terminal","data-content":"kidkrub"},o.a.createElement("div",{className:"body"},o.a.createElement(v,{item:t}),o.a.createElement(k,{onEnter:function(e,n){l([].concat(Object(b.a)(s),[[e]])),c([].concat(Object(b.a)(t),[[n]]))},onCls:function(){c([])}})))},h=function(e){function n(){return Object(i.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"terminal-container"},o.a.createElement(p,null))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.b8a0fef5.chunk.js.map