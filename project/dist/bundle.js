!function i(u,l,c){function f(r,e){if(!l[r]){if(!u[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(s)return s(r,!0);var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}var n=l[r]={exports:{}};u[r][0].call(n.exports,function(e){return f(u[r][1][e]||e)},n,n.exports,i,u,l,c)}return l[r].exports}for(var s="function"==typeof require&&require,e=0;e<c.length;e++)f(c[e]);return f}({1:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sayHello=function(e){return"hello from "+e}},{}],2:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n,i,u=e("./greet");o="Typescript",console.log("hello from "+o),console.log(u.sayHello("typeScript")),n="greeting",i="Typescript",document.getElementById(n).innerText=u.sayHello(i)},{"./greet":1}]},{},[2]);
//# sourceMappingURL=bundle.js.map
