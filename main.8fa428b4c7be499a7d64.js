!function(A){function t(t){for(var n,a,i=t[0],u=t[1],c=t[2],l=0,f=[];l<i.length;l++)a=i[l],r[a]&&f.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(A[n]=u[n]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var A,t=0;t<o.length;t++){for(var e=o[t],n=!0,i=1;i<e.length;i++){var u=e[i];0!==r[u]&&(n=!1)}n&&(o.splice(t--,1),A=a(a.s=e[0]))}return A}var n={},r={2:0},o=[];function a(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return A[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=A,a.c=n,a.d=function(A,t,e){a.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:e})},a.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},a.t=function(A,t){if(1&t&&(A=a(A)),8&t)return A;if(4&t&&"object"==typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var n in A)a.d(e,n,function(t){return A[t]}.bind(null,n));return e},a.n=function(A){var t=A&&A.__esModule?function(){return A.default}:function(){return A};return a.d(t,"a",t),t},a.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=u;o.push([374,0]),e()}({374:function(A,t,e){"use strict";var n=this&&this.__importStar||function(A){if(A&&A.__esModule)return A;var t={};if(null!=A)for(var e in A)Object.hasOwnProperty.call(A,e)&&(t[e]=A[e]);return t.default=A,t},r=this&&this.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(e(1)),a=n(e(79)),i=r(e(383));e(407),e(409),e(411),e(413),a.render(o.createElement(i.default,null),document.getElementById("app"))},383:function(A,t,e){"use strict";var n=this&&this.__extends||function(){var A=function(t,e){return(A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,t){A.__proto__=t}||function(A,t){for(var e in t)t.hasOwnProperty(e)&&(A[e]=t[e])})(t,e)};return function(t,e){function n(){this.constructor=t}A(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),r=this&&this.__importStar||function(A){if(A&&A.__esModule)return A;var t={};if(null!=A)for(var e in A)Object.hasOwnProperty.call(A,e)&&(t[e]=A[e]);return t.default=A,t},o=this&&this.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(e(1)),i=o(e(384)),u=o(e(385)),c=o(e(389)),s=o(e(391)),l=o(e(102)),f=e(201),p=function(A){function t(){var t=null!==A&&A.apply(this,arguments)||this;return t.returnNotFound=function(){return a.createElement("p",null,"Not Found")},t}return n(t,A),t.prototype.componentDidMount=function(){l.default.setDefaultLevel(3),l.default.setLevel(1,!0),l.default.debug("App Mounted")},t.prototype.render=function(){return a.createElement(f.BrowserRouter,null,a.createElement("div",{className:"container"},a.createElement(u.default,null),a.createElement(f.Switch,null,a.createElement(f.Route,{exact:!0,path:"/",component:i.default}),a.createElement(f.Route,{exact:!0,path:"/todo",component:s.default}),a.createElement(f.Route,{exact:!0,path:"/search",component:c.default}),a.createElement(f.Route,{render:this.returnNotFound}))))},t}(a.Component);t.default=p},384:function(A,t,e){"use strict";var n=this&&this.__extends||function(){var A=function(t,e){return(A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,t){A.__proto__=t}||function(A,t){for(var e in t)t.hasOwnProperty(e)&&(A[e]=t[e])})(t,e)};return function(t,e){function n(){this.constructor=t}A(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),r=this&&this.__importStar||function(A){if(A&&A.__esModule)return A;var t={};if(null!=A)for(var e in A)Object.hasOwnProperty.call(A,e)&&(t[e]=A[e]);return t.default=A,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(e(1)),a=function(A){function t(){return null!==A&&A.apply(this,arguments)||this}return n(t,A),t.prototype.render=function(){return o.createElement("div",null,o.createElement("h1",null,"Welcome to the React Starter"),o.createElement("div",{className:"mainimgcontainer"},o.createElement("img",{className:"mainimg",src:"https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png"})))},t}(o.Component);t.default=a},385:function(A,t,e){"use strict";var n=this&&this.__extends||function(){var A=function(t,e){return(A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,t){A.__proto__=t}||function(A,t){for(var e in t)t.hasOwnProperty(e)&&(A[e]=t[e])})(t,e)};return function(t,e){function n(){this.constructor=t}A(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),r=this&&this.__importStar||function(A){if(A&&A.__esModule)return A;var t={};if(null!=A)for(var e in A)Object.hasOwnProperty.call(A,e)&&(t[e]=A[e]);return t.default=A,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(e(1)),a=e(201),i=e(417),u={isOpen:!1},c=function(A){function t(t){var e=A.call(this,t)||this;return e.state=u,e.toggle=e.toggle.bind(e),e}return n(t,A),t.prototype.render=function(){return o.createElement("div",null,o.createElement(i.Navbar,{color:"light",light:!0,expand:"md"},o.createElement(i.NavbarBrand,{href:"/"},"React Examples"),o.createElement(i.NavbarToggler,{onClick:this.toggle}),o.createElement(i.Collapse,{isOpen:this.state.isOpen,navbar:!0},o.createElement(i.Nav,{className:"ml-auto",navbar:!0},o.createElement(i.NavItem,null,o.createElement(i.NavLink,{tag:a.NavLink,exact:!0,to:"/"},"Home")),o.createElement(i.NavItem,null,o.createElement(i.NavLink,{tag:a.NavLink,exact:!0,to:"/todo"},"ToDo")),o.createElement(i.NavItem,null,o.createElement(i.NavLink,{tag:a.NavLink,exact:!0,to:"/search"},"Reddit Search"))))))},t.prototype.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t}(o.Component);t.default=c},389:function(A,t,e){"use strict";var n=this&&this.__makeTemplateObject||function(A,t){return Object.defineProperty?Object.defineProperty(A,"raw",{value:t}):A.raw=t,A},r=this&&this.__extends||function(){var A=function(t,e){return(A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,t){A.__proto__=t}||function(A,t){for(var e in t)t.hasOwnProperty(e)&&(A[e]=t[e])})(t,e)};return function(t,e){function n(){this.constructor=t}A(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),o=this&&this.__importStar||function(A){if(A&&A.__esModule)return A;var t={};if(null!=A)for(var e in A)Object.hasOwnProperty.call(A,e)&&(t[e]=A[e]);return t.default=A,t},a=this&&this.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(t,"__esModule",{value:!0});var i,u=o(e(1)),c=a(e(390)),s=e(200),l=a(e(102)),f=s.cx("container","form-group","col-md-8",[s.css(i||(i=n(["\n                margin-top: 40px\n            "],["\n                margin-top: 40px\n            "])))]),p={results:[]},h=function(A){function t(t){var e=A.call(this,t)||this;return e.state=p,e.search=function(A){var t=A.target.value.trim();l.default.debug("searching with "+t),e.searchService.search(t)},e.searchService=new c.default,e}return r(t,A),t.prototype.componentDidMount=function(){var A=this;l.default.debug("SearchExample mounted"),this.searchSubscription=this.searchService.getResultSubscription().subscribe(function(t){A.setState({results:t})})},t.prototype.componentWillUnmount=function(){this.searchSubscription&&this.searchSubscription.unsubscribe()},t.prototype.render=function(){var A=this.state.results.map(function(A){return u.createElement("li",{className:"list-group-item",key:A.data.id},u.createElement("a",{href:A.data.url},A.data.title))});return u.createElement("div",{className:f},u.createElement("h4",null,"Search On Reddit"),u.createElement("input",{className:"form-control",placeholder:"Search Term",type:"text",onChange:this.search}),u.createElement("ul",{className:"list-group"},A))},t}(u.Component);t.default=h},390:function(A,t,e){"use strict";var n=this&&this.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(e(102)),o=e(416),a=e(415),i=function(){function A(){this.searchTerm=new o.Subject}return A.prototype.search=function(A){r.default.debug("svc.search:"+A),this.searchTerm.next(A)},A.prototype.doSearch=function(A){r.default.debug("doSearch:"+A);var t=fetch("https://www.reddit.com/search.json?q="+A).then(function(A){return A.json()}).then(function(A){return A.data.children});return o.from(t)},A.prototype.getResultSubscription=function(){var A=this;return this.searchTerm.pipe(a.debounceTime(500),a.distinctUntilChanged(),a.switchMap(function(t){return t?A.doSearch(t):o.of([])}),a.catchError(function(A){return r.default.error(A),o.of([])}))},A}();t.default=i},391:function(A,t,e){"use strict";var n=this&&this.__extends||function(){var A=function(t,e){return(A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,t){A.__proto__=t}||function(A,t){for(var e in t)t.hasOwnProperty(e)&&(A[e]=t[e])})(t,e)};return function(t,e){function n(){this.constructor=t}A(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),r=this&&this.__assign||function(){return(r=Object.assign||function(A){for(var t,e=1,n=arguments.length;e<n;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(A[r]=t[r]);return A}).apply(this,arguments)},o=this&&this.__importStar||function(A){if(A&&A.__esModule)return A;var t={};if(null!=A)for(var e in A)Object.hasOwnProperty.call(A,e)&&(t[e]=A[e]);return t.default=A,t},a=this&&this.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(e(1)),u=a(e(392)),c=a(e(393)),s=a(e(395)),l=a(e(396)),f=a(e(102)),p=a(e(398)),h={isLoading:!0,todoItems:[]},d=function(A){function t(){var t=null!==A&&A.apply(this,arguments)||this;return t.state=h,t.handleSubmit=function(A){f.default.debug("task is "+A);var e={completed:!1,description:A,id:p.default.generate()};t.setState(function(A){return{todoItems:A.todoItems.concat([e])}})},t.handleClearCompleted=function(){var A=t.state.todoItems.filter(function(A){return!A.completed});t.setState(function(){return{todoItems:A}})},t.handleClearItem=function(A){f.default.debug("task cleared is "+A.description);var e=t.state.todoItems.map(function(t){return t.id===A.id?r({},t,{completed:!t.completed}):t});t.setState(function(){return{todoItems:e}})},t}return n(t,A),t.prototype.componentDidMount=function(){var A=this;f.default.debug("TodoList Mounted"),u.default.loadTasks().then(function(t){f.default.debug("Setting todolist state"),A.setState(function(){return{isLoading:!1,todoItems:t}})})},t.prototype.componentDidUpdate=function(){f.default.debug("TodoList - component did update"),localStorage.setItem("todoitems",JSON.stringify(this.state.todoItems))},t.prototype.render=function(){var A=this.state,t=A.todoItems,e=A.isLoading;return i.createElement("div",{className:"container todolist"},i.createElement(s.default,{onSubmit:this.handleSubmit,onClear:this.handleClearCompleted}),e?i.createElement(c.default,null):i.createElement(l.default,{items:t,onClearItem:this.handleClearItem}))},t}(i.Component);t.default=d},392:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function A(){}return A.loadTasks=function(){var A=localStorage.getItem("todoitems"),t=A?JSON.parse(A):[];return new Promise(function(A){setTimeout(function(){A(t)},3e3)})},A}();t.default=n},393:function(A,t,e){"use strict";var n=this&&this.__importStar||function(A){if(A&&A.__esModule)return A;var t={};if(null!=A)for(var e in A)Object.hasOwnProperty.call(A,e)&&(t[e]=A[e]);return t.default=A,t};Object.defineProperty(t,"__esModule",{value:!0});var r=n(e(1)),o=e(394);t.default=function(){return r.createElement("div",{style:{left:"50%",position:"absolute",top:"50%",transform:"translateX(-50%) translateY(-50%)"}},r.createElement("img",{src:o}))}},394:function(A,t){A.exports="data:image/gif;base64,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"},395:function(A,t,e){"use strict";var n=this&&this.__extends||function(){var A=function(t,e){return(A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,t){A.__proto__=t}||function(A,t){for(var e in t)t.hasOwnProperty(e)&&(A[e]=t[e])})(t,e)};return function(t,e){function n(){this.constructor=t}A(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),r=this&&this.__importStar||function(A){if(A&&A.__esModule)return A;var t={};if(null!=A)for(var e in A)Object.hasOwnProperty.call(A,e)&&(t[e]=A[e]);return t.default=A,t},o=this&&this.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(e(1)),i=o(e(102)),u={todoTask:""},c=function(A){function t(){var t=null!==A&&A.apply(this,arguments)||this;return t.state=u,t.handleChange=function(A){var e=A.target.value;t.setState(function(){return{todoTask:e}})},t.handleClear=function(){var A=t.props.onClear;i.default.debug("handleClear"),A()},t.handleSubmit=function(A){var e=t.props.onSubmit;i.default.debug("handleSubmit"),A.preventDefault();var n=t.state.todoTask;n.trim().length>0&&(e(n),t.setState(function(){return{todoTask:""}}))},t}return n(t,A),t.prototype.render=function(){var A=this.state.todoTask;return a.createElement("form",{className:"form-inline form-row",onSubmit:this.handleSubmit},a.createElement("div",{className:"col-md-7 offset-md-1"},a.createElement("input",{type:"text",id:"todoTask",className:"form-control-lg w-100",placeholder:"Enter a task",value:A,onChange:this.handleChange})),a.createElement("div",{className:"col-md-3"},a.createElement("button",{type:"submit",className:"btn btn-primary m-2",disabled:!A}," Add"),a.createElement("button",{type:"button",onClick:this.handleClear,className:"btn btn-success m-1"}," Clear Completed")))},t}(a.Component);t.default=c},396:function(A,t,e){"use strict";var n=this&&this.__importStar||function(A){if(A&&A.__esModule)return A;var t={};if(null!=A)for(var e in A)Object.hasOwnProperty.call(A,e)&&(t[e]=A[e]);return t.default=A,t},r=this&&this.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(e(1)),a=r(e(397));t.default=function(A){var t=A.items,e=A.onClearItem;return o.createElement("div",{className:"container todoitems"},t.map(function(A){return o.createElement(a.default,{item:A,key:A.id,onClick:e})}))}},397:function(A,t,e){"use strict";var n=this&&this.__makeTemplateObject||function(A,t){return Object.defineProperty?Object.defineProperty(A,"raw",{value:t}):A.raw=t,A},r=this&&this.__importStar||function(A){if(A&&A.__esModule)return A;var t={};if(null!=A)for(var e in A)Object.hasOwnProperty.call(A,e)&&(t[e]=A[e]);return t.default=A,t};Object.defineProperty(t,"__esModule",{value:!0});var o,a,i,u,c,s,l=r(e(1)),f=e(200),p=f.cx("row",[f.css(o||(o=n(["\n            line-height: 50px;\n            margin: 15px;\n        "],["\n            line-height: 50px;\n            margin: 15px;\n        "])))]),h=f.cx("col-md-8","offset-md-2",[f.css(a||(a=n(["\n            display: flex;\n            align-items: center;\n            box-shadow: 0px 5px 20px 0px #6a8491;\n        "],["\n            display: flex;\n            align-items: center;\n            box-shadow: 0px 5px 20px 0px #6a8491;\n        "])))]),d=f.cx("mr-auto",[f.css(i||(i=n(["\n            font-weight: 400;\n            font-size: 24px;\n        "],["\n            font-weight: 400;\n            font-size: 24px;\n        "])))]),E=f.css(u||(u=n(["\n    opacity: .3;\n    text-decoration-line: line-through;\n    transition: all 300ms;\n"],["\n    opacity: .3;\n    text-decoration-line: line-through;\n    transition: all 300ms;\n"])));t.default=function(A){var t,e=A.item,r=A.onClick,o=f.cx(d,((t={})[E]=e.completed,t)),a=e.completed?f.cx("fa fa-undo",[f.css(c||(c=n(["color: #1c08d3"],["color: #1c08d3"])))]):f.cx("fa fa-check-circle-o",[f.css(s||(s=n(["color: #13eb37"],["color: #13eb37"])))]);return l.createElement("div",{className:p,key:e.id},l.createElement("div",{className:h},l.createElement("div",{className:o},e.description),l.createElement("i",{className:a,onClick:function(A){return r(e,A)}})))}},413:function(A,t,e){}});