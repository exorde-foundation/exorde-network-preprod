(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Lnxd:function(e,t,l){"use strict";l.d(t,"a",(function(){return u}));var a=l("q1tI"),n=l.n(a),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=n.a.createContext&&n.a.createContext(i),r=function(){return(r=Object.assign||function(e){for(var t,l=1,a=arguments.length;l<a;l++)for(var n in t=arguments[l])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},M=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(l[a[n]]=e[a[n]])}return l};function u(e){return function(t){return n.a.createElement(o,r({attr:r({},e.attr)},t),function e(t){return t&&t.map((function(t,l){return n.a.createElement(t.tag,r({key:l},t.attr),e(t.child))}))}(e.child))}}function o(e){var t=function(t){var l,a=e.attr,i=e.size,c=e.title,u=M(e,["attr","size","title"]),o=i||t.size||"1em";return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),n.a.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:l,style:r(r({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),c&&n.a.createElement("title",null,c),e.children)};return void 0!==c?n.a.createElement(c.Consumer,null,(function(e){return t(e)})):t(i)}},QeBL:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),i=l("ma3e"),c=l("TYdL"),r=l.n(c),M=[{id:"home",label:"Home",url:""},{id:"economics",label:"Economics",url:""}],u=function(e){var t=e.open;return n.a.createElement("div",{id:"sidebar",className:(t?"opacity-100":"opacity-0")+" transition-opacity ease-in duration-700 bg-white absolute h-screen w-full top-0 pt-20 z-40"},n.a.createElement("ul",{className:"text-center text-blue-dark font-semibold text-4xl pt-20"},M.map((function(e){return n.a.createElement("li",{className:"p-4"},e.label)}))))},o=[{id:"home",label:"Home",url:""},{id:"economics",label:"Economics",url:""}],s=function(){var e=Object(a.useState)(!1),t=e[0],l=e[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"sticky pr-6 pl-6 pt-2 pb-2 h-20 w-full flex items-center z-50 border-b-2 border-blue"},n.a.createElement("img",{src:r.a,alt:"exorde logo",className:"float-left h-full"}),n.a.createElement("ul",{className:"flex invisible md:visible ml-auto mr-auto"},o.map((function(e){return n.a.createElement("li",{className:"p-2 hover:text-blue-dark hover:font-medium hover:border-b-2 hover:border-blue-dark"},e.label)}))),n.a.createElement("button",{type:"button",onClick:function(){return l(!t)},className:"float-right text-3xl text-blue md:invisible"},t?n.a.createElement(i.b,null):n.a.createElement(i.a,null))),n.a.createElement(u,{open:t}))},m=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(s,null),n.a.createElement("div",null,t))};t.default=function(){return n.a.createElement(m,null,n.a.createElement("div",null,"Hello Gastby"))}},TYdL:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MzYuMjQgMTEyOC4yOSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNjNmM4ZDk7fS5jbHMtMntmaWxsOiM3Mzg2YjM7fS5jbHMtM3tmaWxsOiMzNTM2NzM7fS5jbHMtNHtmaWxsOiMyZDI2NTk7fS5jbHMtNXtmb250LXNpemU6MTc4LjMycHg7ZmlsbDojMWQxZDFiO2ZvbnQtZmFtaWx5OklrYXJvcy1SZWd1bGFyLCBJa2Fyb3MgU2Fuczt9LmNscy02e2xldHRlci1zcGFjaW5nOi0wLjA0ZW07fS5jbHMtN3tsZXR0ZXItc3BhY2luZzotMC4wNWVtO30uY2xzLTh7bGV0dGVyLXNwYWNpbmc6LTAuMDRlbTt9LmNscy05e2xldHRlci1zcGFjaW5nOjBlbTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkZpY2hpZXIgMTE8L3RpdGxlPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkNhbHF1ZV8xLTIiIGRhdGEtbmFtZT0iQ2FscXVlIDEiPjxnIGlkPSJsb2dvcyI+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjE3LjkyIDU5Mi45NSAzMTguMTIgNTE5Ljg3IDMxOC4xMiAwIDE3LjkyIDU5Mi45NSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIzMTguMTIgMCAzMTguMTIgNTE5Ljg3IDYxOC4zMiA1OTIuOTUgMzE4LjEyIDAiLz48cG9seWdvbiBjbGFzcz0iY2xzLTMiIHBvaW50cz0iMTcuOTIgNjEyLjYyIDMxOC4xMiA3NDcuODMgMzE4LjEyIDUzOS41NCAxNy45MiA2MTIuNjIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTQiIHBvaW50cz0iNjE4LjMyIDYxMi42MiAzMTguMTIgNzQ3LjgzIDMxOC4xMiA1MzkuNTQgNjE4LjMyIDYxMi42MiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTc3LDM0OC44NHMtNjEuNjEsMzUuMjQtMzguNDcsNTYuNGMyMS4zOSwxOS41NiwxMTAuMywzNy4xMSwyNTEuMjkuMjcsMjAzLjkzLTUzLjI4LDI3My45LTEyMS4xMywyOTEuMzctMTQ4LjE0cy0xMDItMTYtMTAyLTE2bC0xLjA2LDIuMjFzMTAxLTUuNjUsOTIsNy44OGMtMzIsNDguMTktMTk1LjQ0LDEwOC41Ni0yNzMuMzksMTMzLjA3LTc4Ljc1LDI0Ljc3LTE3Ny41MywzMy4xMS0yMjAuMywyNC44LTQxLjYzLTguMDgtMjUuMS0yOS43Ni0xNi4yLTM5LjQ0LDguNzQtOS41MSwxNy41My0xOSwxNy41My0xOVoiLz48dGV4dCBjbGFzcz0iY2xzLTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgOTU2LjIxKSI+PHRzcGFuIGNsYXNzPSJjbHMtNiI+RTwvdHNwYW4+PHRzcGFuIHg9Ijg1Ljk1IiB5PSIwIj5YTzwvdHNwYW4+PHRzcGFuIGNsYXNzPSJjbHMtNyIgeD0iMzMxLjQ5IiB5PSIwIj5SPC90c3Bhbj48dHNwYW4gY2xhc3M9ImNscy04IiB4PSI0MzUuNjMiIHk9IjAiPkQ8L3RzcGFuPjx0c3BhbiBjbGFzcz0iY2xzLTkiIHg9IjU0My41MiIgeT0iMCI+RTwvdHNwYW4+PC90ZXh0PjwvZz48L2c+PC9nPjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-pages-index-tsx-960d4b68106e820cdb81.js.map