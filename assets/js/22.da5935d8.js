(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{271:function(s,i,t){},285:function(s,i,t){"use strict";t(271)},295:function(s,i,t){"use strict";t.r(i);const e=Symbol(),a=Symbol(),o=Symbol();var r={props:["src"],data:()=>({status:e}),computed:{isDefault(){return this.status===e},isLoaded(){return this.status===a},isFailed(){return this.status===o}},methods:{imgLoaded(){this.status=a},imgFailed(){this.status=o}}},d=(t(285),t(10)),c=Object(d.a)(r,(function(){var s=this,i=s._self._c;return i("div",{staticClass:"lazy-img"},[i("div",{directives:[{name:"show",rawName:"v-show",value:s.isDefault,expression:"isDefault"}],staticClass:"card pending"},[i("div",[s._v("Clash for Windows")])]),s._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:s.isLoaded,expression:"isLoaded"}],staticClass:"img",attrs:{src:s.src},on:{load:s.imgLoaded,error:s.imgFailed,click:function(i){return s.$emit("click")}}}),s._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:s.isFailed,expression:"isFailed"}],staticClass:"card failed",on:{click:function(i){return s.$emit("click")}}},[i("div",[s._v("The image failed to load, click to redirect to the website.")])])])}),[],!1,null,"9ad41e84",null);i.default=c.exports}}]);