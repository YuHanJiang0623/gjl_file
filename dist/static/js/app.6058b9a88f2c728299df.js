webpackJsonp([1],{"8E+p":function(t,e){},GDJM:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},r,!1,function(t){a("GDJM")},null,null).exports,s=a("/ocq"),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var i=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},l,!1,function(t){a("RyTg")},"data-v-3b884edb",null).exports,u={name:"home",data:function(){return{name:"",disabled:!0,tableData:[]}},components:{},created:function(){},mounted:function(){var t=this;this.$axios.get("/name",{}).then(function(e){console.log(e.data),t.$store.state.name=e.data.name,t.name=t.$store.state.name})},computed:{},methods:{changeName:function(t){this.$axios.post("/mock/addProject",{name:t})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[a("el-input",{attrs:{placeholder:"请输入内容",disabled:t.disabled},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("el-button",{attrs:{icon:"el-icon-edit"},on:{click:function(e){t.disabled=!t.disabled}}}),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.changeName(t.name)}}},[t._v("确定")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)},staticRenderFns:[]};var v=a("VU/8")(u,c,!1,function(t){a("8E+p")},null,null).exports;n.default.use(s.a);var d=new s.a({routes:[{path:"/",name:"Home",component:v},{path:"/HelloWorld",name:"HelloWorld",component:i}]}),m=a("zL8q"),p=a.n(m),_=(a("tvR6"),a("mtWM")),h=a.n(_),f=a("NYxO");n.default.use(f.a);var b=new f.a.Store({state:{name:""}});a("txPn"),h.a.defaults.baseURL="",n.default.prototype.$axios=h.a,n.default.config.productionTip=!1,n.default.use(p.a),new n.default({el:"#app",router:d,store:b,components:{App:o},template:"<App/>"})},RyTg:function(t,e){},tvR6:function(t,e){},txPn:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("zNUS"),r=a.n(n);r.a.mock("/data",[{date:"2016-05-02",name:"aaaaa",address:"bbbbbbbb"}]);var o={name:"guanjialuo"};r.a.mock("/name","get",o);r.a.mock("/mock/addProject",function(t){console.log(t),console.log(JSON.parse(t.body)),t=JSON.parse(t.body),o.name=t.name})}},["NHnr"]);
//# sourceMappingURL=app.6058b9a88f2c728299df.js.map