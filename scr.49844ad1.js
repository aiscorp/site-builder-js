parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HvBv":[function(require,module,exports) {
module.exports="/site-builder-js/head.ddbe4e3c.jpeg";
},{}],"FOZT":[function(require,module,exports) {
"use strict";function n(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<div class="row" style="'.concat(t,'">').concat(n,"</div>")}function t(n){return'<div class="col-sm">'.concat(n,"</div>")}function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof n)return n;return Object.keys(n).map(function(t){return"".concat(t,": ").concat(n[t])}).join(";")}function r(n){return'\n    <form name="'.concat(n,'">\n        <h5>').concat(n,'</h5>\n        <div class="form-group">\n            <input class="form-control form-control-sm" name="content" placeholder="content"/>\n        </div>\n         <div class="form-group">\n            <input class="form-control form-control-sm" name="styles" placeholder="styles"/>\n        </div>\n        <button type="submit" class="btn btn-primary btn-sm">Добавить</button>                \n    </form>\n    <hr />\n  ')}Object.defineProperty(exports,"__esModule",{value:!0}),exports.row=n,exports.col=t,exports.css=o,exports.block=r;
},{}],"dDFO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PostBlock=exports.ImageBlock=exports.ColumnsBlock=exports.TextBlock=exports.TitleBlock=void 0;var t=require("../utils");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=u();return function(){var o,n=s(t);if(e){var r=s(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return c(this,o)}}function c(t,o){return!o||"object"!==e(o)&&"function"!=typeof o?i(t):o}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,o){return e&&a(t.prototype,e),o&&a(t,o),t}var p=function(){function t(e,o){l(this,t),this.value=e,this.options=o}return f(t,[{key:"toHTML",value:function(){throw new Error('You need to  implement "toHTML()" method')}}]),t}(),y=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.tag,n=void 0===o?"h1":o,r=e.styles;return(0,t.row)((0,t.col)("<".concat(n,">").concat(this.value,"</").concat(n,">")),(0,t.css)(r))}}]),c}();exports.TitleBlock=y;var v=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options.styles;return(0,t.row)((0,t.col)("<p>".concat(this.value,"</p>")),(0,t.css)(e))}}]),c}();exports.TextBlock=v;var h=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options.styles;return(0,t.row)(this.value.map(t.col).join(""),(0,t.css)(e))}}]),c}();exports.ColumnsBlock=h;var b=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.styles,n=e.imageStyles,r=e.alt,c=void 0===r?"":r;return(0,t.row)('<img src="'.concat(this.value,'"\n                          alt="').concat(c,'"\n                          style="').concat((0,t.css)(n),'"/>'),(0,t.css)(o))}}]),c}();exports.ImageBlock=b;var m=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.styles,n=e.imageStyles,r=e.alt,c=void 0===r?"":r;return(0,t.row)('<img src="'.concat(this.value,'"\n                          alt="').concat(c,'"\n                          style="').concat((0,t.css)(n),'"/>'),(0,t.css)(o))}}]),c}();exports.PostBlock=m;
},{"../utils":"FOZT"}],"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports._model=exports.model=void 0;var e=i(require("./assets/head.jpeg")),t=require("./classes/blocks");function i(e){return e&&e.__esModule?e:{default:e}}var o=[new t.TitleBlock("Мой маленький блог о моих хвостатых друзьях",{tag:"h2",styles:{background:"linear-gradient(to right, #10100D, #221D1B)",color:"#eee","text-align":"center",padding:"1rem"}}),new t.ImageBlock(e.default,{imageStyles:{width:"100%"}}),new t.TextBlock("Дорогие друзья! Читая этот блог вы сможете развечься и узнать много интересного:",{}),new t.ColumnsBlock(["Интересные фото из жизни котиков","Статьи о том как воспитывать и ухаживать за вашими хвостатыми друзьями","И конечно не без постов с мемами о котиках"],{})];exports.model=o;var l=[{type:"title",value:"Default title value",options:{tag:"h2",styles:{background:"linear-gradient(to right, #f09, #534)",color:"#fff","text-align":"center",padding:"1rem"}}},{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",options:{}},{type:"columns",value:["Lorem ipsum dolor sit amet, consectetur adipisicing elit.","Lorem ipsum dolor sit amet, consectetur adipisicing elit.","Lorem ipsum dolor sit amet, consectetur adipisicing elit."],options:{}},{type:"image",value:e.default,options:{}}];exports._model=l;
},{"./assets/head.jpeg":"HvBv","./classes/blocks":"dDFO"}],"V48B":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Site=void 0;var r=function(){function n(t){e(this,n),this.$el=document.querySelector(t)}return t(n,[{key:"render",value:function(e){var n=this;this.$el.innerHTML="",e.forEach(function(e){n.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}]),n}();exports.Site=r;
},{}],"idI0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sidebar=void 0;var e=require("../utils"),t=require("./blocks");function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var a=function(){function i(e,t){n(this,i),this.$el=document.querySelector(e),this.update=t,this.init()}return r(i,[{key:"init",value:function(){this.$el.insertAdjacentHTML("afterbegin",this.template),this.$el.addEventListener("submit",this.add.bind(this))}},{key:"add",value:function(e){e.preventDefault();var n,i=e.target.name,r=e.target.content.value,a=e.target.styles.value;"text"===i?n=new t.TextBlock(r,{styles:a}):"title"===i&&(n=new t.TitleBlock(r,{styles:a})),this.update(n)}},{key:"template",get:function(){return[(0,e.block)("text"),(0,e.block)("title")].join("")}}]),i}();exports.Sidebar=a;
},{"../utils":"FOZT","./blocks":"dDFO"}],"Z1kE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var e=require("./site"),n=require("./sidebar");function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function i(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}var o=function(){function t(e){r(this,t),this.model=e,this.init()}return i(t,[{key:"init",value:function(){var r=this,t=new e.Site("#site");t.render(this.model);new n.Sidebar("#panel",function(e){r.model.push(e),t.render(r.model)})}}]),t}();exports.App=o;
},{"./site":"V48B","./sidebar":"idI0"}],"jExt":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./model"),s=require("./classes/app");require("./styles/main.css"),new s.App(e.model);
},{"./model":"JDu1","./classes/app":"Z1kE","./styles/main.css":"jExt"}]},{},["Focm"], null)