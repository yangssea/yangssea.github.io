(function(e){function t(t){for(var n,a,l=t[0],i=t[1],s=t[2],p=0,f=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,l=1;l<o.length;l++){var i=o[l];0!==c[i]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},c={app:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("h1",[e._v("音频测试")]),o("home")],1)},r=[],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.start}},[e._v("开始录音")]),o("el-button",{attrs:{type:"primary"},on:{click:e.stop}},[e._v("结束录音")]),o("el-button",{attrs:{type:"primary"},on:{click:e.playVioce}},[e._v("播放录音")])],1)},l=[],i=(o("e2cc1"),o("7020")),s=o.n(i),u=(o("4107"),o("87f0"),o("812f"),o("bc3a")),p=o.n(u);s.a.AlwaysUseWeixinJS=!!+localStorage["RecordApp_AlwaysUseWeixinJS"],s.a.AlwaysAppUseJS=!!+localStorage["RecordApp_AlwaysAppUseJS"],s.a.Install((function(){console.log("RecordApp.Install成功")}),(function(){var e="RecordApp.Install出错："+err;console.log(e),alert(e)}));var f={data:function(){return{loading:!1,token:""}},methods:{getToken:function(){var e=this,t="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential";t+="&appid=wx03b13f074270820d",t+="&secret=f2b737e5b94e39146dc4ae05d8fee291",p()({methods:"get",headers:{"Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*"},url:t}).then((function(t){console.log(t,"///"),t.access_token&&(e.token=t.access_token)})).catch((function(e){console.log(e.message,"???")}))},start:function(){var e=this;this.$wx.startRecord({success:function(t){e.loading=!0,console.log(t,"开始录音")},cancel:function(e){console.log(e)}})},playVioce:function(){this.$wx.playVoice()},stop:function(){var e=this;this.$wx.startRecord({success:function(t){e.loading=!1,console.log(t,"开始录音")},cancel:function(e){console.log(e)}})}},created:function(){console.log(s.a)}},d=f,g=o("2877"),h=Object(g["a"])(d,a,l,!1,null,null,null),y=h.exports,b={name:"App",components:{home:y}},v=b,w=(o("034f"),Object(g["a"])(v,c,r,!1,null,null,null)),m=w.exports,_=o("5c96"),j=o.n(_),A=(o("0fae"),o("499a"),o("18a0")),x=o.n(A);localStorage.setItem("access_token","44_66dg3wyPWFBZRar_ia39zUXPa6jvIzNQBhIkhjLO2Os04AXu6Iy92WKKvPt7HU46hd-6Y_dqiJAPs6kZe0poeX3uY8tmju99HOHsSrsKbzLjjilk7g0tlqK7ewu5GYUDgNMhfea8Hx-xyjJ0XZKhABAEGR"),localStorage.setItem("jsapi_ticket","LIKLckvwlJT9cWIhEQTwfIb5PltSU7Tf6GzoiWysgCLXLjiOirI8_kd4CvUnBXxYt0zWEYmCggPAglLW2KOf_g"),x.a.config({debug:!0,appId:"wx3fc5922d4d15ff67",timestamp:1620294845,nonceStr:"test",signature:"5a1b36aea18b2c04f8a7a8eb4ae060bd364e02d1",jsApiList:["startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice"]}),x.a.ready((function(){console.log("微信接口调用")})),x.a.checkJsApi({jsApiList:["startRecord"],success:function(e){console.log([e,"114"]),store.commit("jsApiList",e)}}),x.a.error((function(e){console.log(e,"///;;;")})),n["default"].prototype.$wx=x.a,n["default"].use(j.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,o){}});
//# sourceMappingURL=app.aa5d2b80.js.map