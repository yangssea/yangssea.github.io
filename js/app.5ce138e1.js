(function(e){function t(t){for(var n,a,l=t[0],s=t[1],i=t[2],u=0,f=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(f.length)f.shift()();return r.push.apply(r,i||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,l=1;l<o.length;l++){var s=o[l];0!==c[s]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},c={app:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var p=s;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("home",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-button",{attrs:{type:"primary"},on:{click:e.start}},[e._v("start"+e._s(e.loading))]),o("el-button",{attrs:{type:"primary"},on:{click:e.stop}},[e._v("stop"+e._s(e.loading))])],1)},l=[],s=(o("e2cc1"),o("7020")),i=o.n(s),p=(o("4107"),o("87f0"),o("812f"),o("bc3a")),u=o.n(p);i.a.AlwaysUseWeixinJS=!!+localStorage["RecordApp_AlwaysUseWeixinJS"],i.a.AlwaysAppUseJS=!!+localStorage["RecordApp_AlwaysAppUseJS"],i.a.Install((function(){console.log("RecordApp.Install成功")}),(function(){var e="RecordApp.Install出错："+err;console.log(e),alert(e)}));var f={data:function(){return{loading:!1,token:""}},methods:{getToken:function(){var e=this,t="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential";t+="&appid=wx03b13f074270820d",t+="&secret=f2b737e5b94e39146dc4ae05d8fee291",u()({methods:"get",headers:{"Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*"},url:t}).then((function(t){console.log(t,"///"),t.access_token&&(e.token=t.access_token)})).catch((function(e){console.log(e.message,"???")}))},start:function(){console.log(this.$wx);try{this.$wx.startRecord({success:function(e){console.log(e,"开始录音")},cancel:function(e){console.log(e)}})}catch(e){console.log(e)}},stop:function(){i.a.Stop()}},created:function(){console.log(i.a)}},d=f,g=o("2877"),b=Object(g["a"])(d,a,l,!1,null,null,null),y=b.exports,h={name:"App",components:{home:y}},m=h,v=(o("034f"),Object(g["a"])(m,c,r,!1,null,null,null)),w=v.exports,_=o("5c96"),A=o.n(_),j=(o("0fae"),o("499a"),o("18a0")),x=o.n(j);localStorage.setItem("access_token","44_BVRyd7wP3TaO8WYHcSF8gEtOpeKfcDI2vazyPjH919PnoDDaYPVippJm70Bo1q7yrkJVgVLASgz7OfGqVXdaaPZlnZoRa6x2UMkzb_zuhDdaYlfdrcv1haERS9LYy6bt-fs-3VqtlDU_dRHWRPKfAEANLG"),localStorage.setItem("jsapi_ticket","LIKLckvwlJT9cWIhEQTwfIDba2vATY_2sjTNDZNEXpjUdhZuKJmMeHRgcZt6GCVFD6c_Cl2sc1YTMK1-g89_HA"),x.a.config({debug:!0,appId:"wx3fc5922d4d15ff67",timestamp:1620294845,nonceStr:"test",signature:"32fad7e2e4b63b085fe4cf9772b759fa2d728bd4",jsApiList:["startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice"]}),x.a.ready((function(){console.log("微信接口调用")})),x.a.checkJsApi({jsApiList:["startRecord"],success:function(e){console.log([e,"114"]),store.commit("jsApiList",e)}}),x.a.error((function(e){console.log(e,"///;;;")})),n["default"].prototype.$wx=x.a,n["default"].use(A.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(w)}}).$mount("#app")},"85ec":function(e,t,o){},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.5ce138e1.js.map