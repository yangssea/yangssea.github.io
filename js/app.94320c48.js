(function(t){function a(a){for(var e,n,l=a[0],c=a[1],r=a[2],d=0,g=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&g.push(i[n][0]),i[n]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);u&&u(a);while(g.length)g.shift()();return o.push.apply(o,r||[]),s()}function s(){for(var t,a=0;a<o.length;a++){for(var s=o[a],e=!0,l=1;l<s.length;l++){var c=s[l];0!==i[c]&&(e=!1)}e&&(o.splice(a--,1),t=n(n.s=s[0]))}return t}var e={},i={app:0},o=[];function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,a,s){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)n.d(s,e,function(a){return t[a]}.bind(null,e));return s},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var r=0;r<l.length;r++)a(l[r]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";s("85ec")},"1bc0":function(t,a){t.exports="data:image/png;base64,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"},"26f4":function(t,a,s){t.exports=s.p+"img/doctor.0b3baced.svg"},"276e":function(t,a,s){t.exports=s.p+"img/confim.cdeab699.svg"},"3f2a":function(t,a,s){t.exports=s.p+"img/hospital.49151fa0.png"},"46d3":function(t,a,s){t.exports=s.p+"img/downLight.62a5a731.png"},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],l={name:"App"},c=l,r=(s("034f"),s("2877")),u=Object(r["a"])(c,o,n,!1,null,null,null),d=u.exports,g=s("8c4f"),h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home-layout",attrs:{id:"home"}},[e("div",{staticClass:"home-header-content"},[e("div",{staticClass:"home-header"},[e("img",{staticClass:"doctor",attrs:{src:s("26f4")}}),e("div",{staticClass:"title"},[t._v("嗨，我是AI导诊助手小童")]),e("div",{staticClass:"refresh",on:{click:t.refresh}},[t._v(" 重新导诊 ")]),e("div",{staticClass:"select",on:{click:t.showModel}},[e("span",{style:"请选择就诊对象"==t.data.selectName?"color:#CFD2D4":""},[t._v(t._s(t.data.selectName))]),e("van-icon",{staticClass:"icon-select",attrs:{name:"play"}})],1)])]),e("div",{staticClass:"home-center",style:"height: calc(100vh - "+((t.data.show||t.data.show2)&&t.data.bottomHeight||t.data.viewHeight?t.data.bottomHeight||t.data.viewHeight:"150")+"px)",attrs:{"scroll-y":!0,id:"contain"}},[e("div",{staticStyle:{height:"30px"}}),t._l(t.data.msgList,(function(a,i){return[0===a.type?e("div",{staticClass:"msg-left",style:"margin-left: "+(i===t.data.msgList.length-1&&t.data.sendStatus?t.data.viewLeft:"")+"px"},[e("span",[t._v(t._s(a.msg))])]):t._e(),1===a.type?e("div",{staticClass:"msg-right",style:"margin-right: "+(i===t.data.msgList.length-1&&t.data.sendStatus?t.data.viewRight:"")+"px"},[e("div",{staticClass:"content"},[t._v(t._s(a.msg))]),e("div",{staticClass:"user-img"},[e("img",{attrs:{src:s("72af")}})])]):t._e(),2===a.type?e("div",{staticClass:"msg-left-other",style:"margin-right: "+(i===t.data.msgList.length-1&&t.data.sendStatus?t.data.viewRight:"")+"px"},[e("div",{staticClass:"txt-other"},[t._v(t._s(a.msg))]),e("div",{staticClass:"other-list"},[t._l(a.list,(function(a,s){return[e("div",{staticClass:"goto"},[e("div",[t._v(t._s(a.name))]),t._m(0,!0)])]}))],2),e("div",{staticClass:"evaluation"},[!0===a.isup||null==a.isup?e("div",{class:a.isup?"up":"down",on:{click:function(a){return t.setUporDown(i,1)}}},[e("img",{attrs:{src:s(a.isup?"d7e6":"1bc0")}}),e("span",[t._v(" 准确")])]):t._e(),!1===a.isup||null==a.isup?e("div",{class:a.isup||null===a.isup?"down":"up",on:{click:function(a){return t.setUporDown(i,0)}}},[e("img",{attrs:{src:s(a.isup||null===a.isup?"e427":"46d3")}}),e("span",[t._v(" 不准确")])]):t._e()])]):t._e()]}))],2),t.data.show||t.data.show2?t._e():e("div",{staticClass:"home-footer",style:"bottom: "+t.data.viewHeight+"px"},[e("el-input",{staticClass:"input",attrs:{"placeholder-style":"color:rgba(50, 50, 51, 0.5);font-size:28rpx;",name:"userName",placeholder:"请描述您的症状，例如：最近经常头晕"},on:{blur:t.inputblur,focus:t.inputFocus},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.msgSelect.apply(null,arguments)}},model:{value:t.data.msgValue,callback:function(a){t.$set(t.data,"msgValue",a)},expression:"data.msgValue"}}),e("img",{staticClass:"block-key",attrs:{src:s("ebb2")},on:{click:t.msgSelect}})],1),t.data.loading?e("div",{staticClass:"msg-loading"},[e("div",{staticClass:"one"}),e("div",{staticClass:"two"}),e("div",{staticClass:"three"})]):t._e(),e("van-popup",{attrs:{overlay:!1,position:"bottom"},model:{value:t.data.show,callback:function(a){t.$set(t.data,"show",a)},expression:"data.show"}},[1===t.data.status&&t.data.columnsSign?e("div",{attrs:{id:"picker"}},[e("div",{staticClass:"special-title"},[t._v("请选择就诊对象")]),e("div",{staticClass:"special-model"},[e("van-picker",{ref:"picker",attrs:{id:"picker",loading:t.data.noClike||t.data.loadingAll,columns:t.data.localMsg}})],1),t.data.initUser?e("div",{staticStyle:{position:"relative",height:"120px"}},[e("div",{staticClass:"submit2 special-ms",on:{click:t.onConfirm}},[t._v("确定")])]):t._e(),t.data.initUser?t._e():e("div",{staticStyle:{position:"relative",height:"120px"}},[e("div",{staticClass:"user-two"},[e("div",{on:{click:t.onClose}},[t._v("取消")]),e("div",{on:{click:t.onConfirm}},[t._v("确定")])])])]):t._e(),2===t.data.status?e("div",{staticClass:"model-parts",attrs:{id:"picker2"}},[t.data.partsList&&t.data.partsList.length>0?e("div",{staticClass:"model-contain",attrs:{"scroll-y":"true"}},[t._l(t.data.partsList,(function(a,s){return[e("div",{class:a.select?"block-list-select block-list":"block-list",on:{click:function(a){return t.moreSelect(s)}}},[t._v(" "+t._s(a.name)+" ")])]}))],2):t._e(),"都没有"===t.data.partsList[t.data.partsList.length-1].name?e("div",{staticClass:"submit "},[e("div",{on:{click:function(a){return t.submitMore(!0)}}},[t._v("不清楚")]),e("div",{on:{click:function(a){return t.submitMore(!1)}}},[t._v("确定")])]):t._e(),"都没有"!==t.data.partsList[t.data.partsList.length-1].name?e("div",{staticClass:"submit2 ",on:{click:function(a){return t.submitMore(!1)}}},[t._v(" 确定 ")]):t._e()]):t._e(),3===t.data.status?e("div",{class:"iOS"==t.isiOS?"model-continue-low model-continue":"model-continue"},[e("div",{on:{click:function(a){return t.continueTap(2)}}},[t._v("继续问诊")]),e("div",{on:{click:function(a){return t.continueTap(1)}}},[t._v("直接推荐科室")])]):t._e()]),e("van-popup",{attrs:{closeable:1===t.data.modelStatus,round:"",position:"center"},on:{close:t.cancel2},model:{value:t.data.show2,callback:function(a){t.$set(t.data,"show2",a)},expression:"data.show2"}},[0===t.data.modelStatus?e("div",{staticClass:"retrun"},[e("div",{staticClass:"retrun-img"},[e("img",{attrs:{src:s("276e")}})]),e("div",{staticClass:"retrun-txt"},[t._v(" 点击确认后，当前进度将丢失， 并将为您重新进行导诊 ")]),e("div",{staticClass:"retrun-footer"},[e("div",{staticClass:"rf-calcel",on:{click:t.model2Calcel}},[t._v("取消")]),e("div",{staticClass:"rf-ok",on:{click:t.model2Ok}},[t._v("确定")])])]):t._e(),1===t.data.modelStatus?e("div",{staticClass:"hospital"},[e("div",{staticClass:"title-h"},[t._v("请选择院区")]),e("div",{staticClass:"h-block",on:{click:t.goback}},[e("img",{attrs:{src:s("3f2a")}}),e("div",{staticClass:"txt-h"},[e("div",[t._v("上海市儿童医院（泸定路）")]),e("div",[t._v("三级甲等")]),e("div",[t._v("普陀区泸定路355号")])])]),e("div",{staticClass:"h-block",on:{click:t.goback}},[e("img",{attrs:{src:s("3f2a")}}),e("div",{staticClass:"txt-h"},[e("div",[t._v("上海市儿童医院（北京西路）")]),e("div",[t._v("三级甲等")]),e("div",[t._v("静安路北京西路1400-24")])])])]):t._e()])],1)},m=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"goto-part2"},[e("img",{attrs:{src:s("e864")}})])}],p=(s("ac1f"),s("5319"),s("d3b7"),s("25f0"),s("159b"),s("b0c0"),s("ddb0"),s("bc3a")),f=s.n(p),v=s("d399"),A={request:function(t){f()({method:t.method,url:t.url,data:t.data}).then((function(a){a.message&&Object(v["a"])("页面开小差，请重新导诊"),t.success(a)})).catch((function(a){Object(v["a"])("页面开小差，请重新导诊"),t.fail(a)}))}},x=A,C="https://debugcheckdirect-beta.talkinggenie.com/medical-graph/state/execute",y={name:"App",data:function(){return{data:{viewHeight:0,viewLeft:0,viewRight:0,testSign:0,scrollTop:0,systemHeight:150,isiOS:!1,initUser:!0,bottomHeight:0,startY:0,show:!0,show2:!1,loading:!1,loadingAll:!1,modelStatus:1,showSex:!1,selectName:"请选择就诊对象",continueSign:!1,sumChina:["一","二","三","四","五","六"],userInfo:null,age:0,sex:"",isKey:!0,vioceStatus:!1,dynamicImg:"",timer:null,msgList:[],msgValue:"",sexAndAge:[{values:["男","女"],className:"sex"},{values:["0-28天","29天-6岁","7岁-15岁","16岁-35岁","36岁-60岁","大于60岁"],className:"index",defaultIndex:2}],process:0,noClike:!1,fanyi:!1,isRecord:!0,localMsg:[],columnsSign:!0,oneColumns:[],sendStatus:!1,nameColumns:[],status:1,selectList:[],overlayShow:!1,sessionTime:0,params:{query:"",sessionId:"wx162883916349",machineId:"210000000000003"},partsList:[],toolmsg:!0}}},mounted:function(){var t=this;this.pushMsg("请问您最近哪里不舒服呢，可以告诉我，我将为您推荐可挂号的科室",0),this.data.params.sessionId=this.guid()+(new Date).getTime(),setTimeout((function(){t.setData({toolmsg:!1})}),3e3),this.setData({localMsg:JSON.parse(JSON.stringify(this.data.sexAndAge))}),this.data.nameColumns=JSON.parse(JSON.stringify(this.data.localMsg));var a=document.getElementById("home"),s={screenHeight:a.clientHeight};console.log(s),this.setData({isiOS:s.screenHeight>=600&&"iOS"}),setTimeout((function(){console.log(t.data.isiOS,"dsd")})),setInterval((function(){t.data.sessionTime++,t.data.sessionTime>1800&&(t.setData({show:!1,show2:!1,columnsSign:!0,process:0}),t.data.sessionTime=0,t.pushMsg("会话已过期",0),t.model2Ok())}),1e3)},methods:{toFooter:function(){var t=document.getElementById("contain");t.scrollTop=t.scrollHeight},setData:function(t){var a=this;for(var s in t)"scrollTop"==s&&setTimeout((function(){a.toFooter()}),200),void 0!==this.data[s]&&(this.data[s]=t[s])},setFirst:function(){var t=this,a=1;this.setData({loadingAll:!0}),a?(this.data.params.query="开启",x.request({url:C,method:"post",data:this.data.params,success:function(a){console.log("开启对话"),t.secondStep(t.data.localMsg[0].sex,t.data.localMsg[0].age,!0),t.data.sex=t.data.localMsg[0].sex,t.data.age=t.data.localMsg[0].age;var s=t.data.localMsg[0].text+" | "+t.data.localMsg[0].sex+" | "+t.data.localMsg[0].age;t.setData({selectName:s})},fail:function(t){console.log(t,"失败")}})):this.setData({show:!0,localMsg:JSON.parse(JSON.stringify(this.data.sexAndAge))})},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var a=16*Math.random()|0,s="x"==t?a:3&a|8;return s.toString(16)}))},getUserProfile:function(){return new Promise((function(t){return t()}))},cancel2:function(){this.setData({show2:!1})},registered:function(){Object(v["a"])("正在为你跳转页面")},setUporDown:function(t,a){var s=a,e=t;this.data.msgList[e].isup=1==s,this.setData({msgList:this.data.msgList})},init:function(){this.data.params.query="开启",x.request({url:C,method:"post",data:this.data.params,success:function(t){console.log("开启对话")},fail:function(t){console.log(t,"失败")}})},goback:function(){this.setData({show2:!1})},inputFocus:function(t){var a=this,s=t.detail.height;console.log(s,"高度"),this.setData({viewHeight:s}),setTimeout((function(){a.setData({bottomHeight:s+180}),a.setData({scrollTop:1e5})}),100)},inputblur:function(){this.setData({viewHeight:0})},pushMsg:function(t,a){var s=this;this.setData({msgValue:""}),this.data.msgList.push({msg:t,type:a}),this.setData({msgList:this.data.msgList,viewLeft:-400,viewRight:-400,sendStatus:!0}),setTimeout((function(){s.setData({scrollTop:1e5}),s.setData({viewLeft:0,viewRight:0,sendStatus:!0})}),100)},onClose:function(){"请选择就诊对象"==this.data.selectName||"请重新选择就诊对象"==this.data.selectName||this.data.columnsSign?this.setData({show:!1,loading:!1,localMsg:JSON.parse(JSON.stringify(this.data.nameColumns))}):Object(v["a"])("流程中不允许取消")},showModel:function(){var t=this;this.data.process<=1&&this.data.show&&"请选择就诊对象"===this.data.selectName||(this.data.process<=1&&(this.data.show||this.data.show2)?Object(v["a"])("请点击重新导诊"):(this.inputblur(),console.log(this.data.process),this.data.process>1&&4!=this.data.process?Object(v["a"])("请点击重新导诊"):(this.setData({show:!0,columnsSign:!0,status:1}),setTimeout((function(){var a=document.getElementById("picker");console.log(a.clientHeight,a.offsetHeight),t.setData({bottomHeight:a.clientHeight+("iOS"==t.data.isiOS?150:100)}),setTimeout((function(){t.toFooter()}))}),200))))},submitOne:function(){var t=this.$refs.picker,a=t.getValues();console.log(a),this.onConfirm(a[0].text)},moreSelect:function(t){if(this.data.partsList[t].one)return this.data.partsList.forEach((function(t){t.select=!1})),void(this.data.partsList[t].select=!0);this.data.partsList[t].sign&&!this.data.partsList[t].select?(this.data.partsList.forEach((function(t){t.select=!1})),this.data.partsList[t].select=!0):(this.data.partsList.forEach((function(t){t.sign&&(t.select=!1)})),this.data.partsList[t]["select"]=!this.data.partsList[t]["select"]),this.setData({partsList:this.data.partsList})},submitMore:function(t){var a=this;try{if(this.data.loadingAll)return!1;var s="";if(this.data.partsList.forEach((function(t){t.select&&(s+=t.name+",")})),t&&(s="不清楚、"),0===s.length)return void Object(v["a"])("未选择任何内容");s.length>0&&(s=s.substring(0,s.length-1)),this.pushMsg(s,1),this.setData({show:!1}),this.data.params.query=s,this.setData({loading:!0}),this.data.loadingAll=!0,x.request({url:C,method:"post",data:this.data.params,success:function(t){t.data.message&&(a.data.loading=!1,v["a"].fail("页面开小差，请重新导诊")),a.setData({loading:!1}),a.data.loadingAll=!1,a.fourthPart(t)},fail:function(t){a.setErrors(),a.data.loadingAll=!1,a.setData({loading:!1}),console.log(t,"more失败")}})}catch(e){this.data.loadingAll=!1,console.log(e),this.data.loading=!1,v["a"].fail("页面开小差，请重新导诊"),this.setData({show2:!1,show:!1})}},refresh:function(){"请选择就诊对象"!==this.data.selectName&&(this.inputblur(),this.setData({modelStatus:0,show2:!0}))},model2Calcel:function(){this.setData({show2:!1})},model2Ok:function(){var t=this;this.data.sessionTime=0,this.data.params.sessionId=this.guid()+(new Date).getTime(),this.setData({show2:!1,show:!1,process:0,columnsSign:!0,status:1}),this.data.params.query="开启",x.request({url:C,method:"post",data:this.data.params,success:function(a){t.secondStep(t.data.sex,t.data.age)},fail:function(t){console.log(t,"失败")}})},msgSelectTwo:function(){this.msgSelect()},onConfirm:function(t,a){var s=this;try{var e=this.$refs.picker;if(t=e.getValues(),this.data.initUser=!1,this.setData({loadingAll:!0}),this.data.columnsSign){if(this.data.noClike)return;this.getUserProfile().then((function(){var a="";a=s.data.localMsg[0].values&&"男"===s.data.localMsg[0].values[0]?t[0]+"  |  "+t[1]:t.text+" | "+t.sex+" | "+t.age,a!=s.data.selectName?(s.setData({loading:!0}),"其他"===t.text?s.setData({loadingAll:!1,loading:!1,localMsg:JSON.parse(JSON.stringify(s.data.sexAndAge))}):(s.data.localMsg[0].values&&"男"===s.data.localMsg[0].values[0]?(s.setData({localMsg:JSON.parse(JSON.stringify(s.data.nameColumns)),selectName:t[0]+"  |  "+t[1]}),s.data.age=t[1],s.data.sex=t[0]):(s.setData({selectName:t.text+" | "+t.sex+" | "+t.age}),s.data.age=t.age,s.data.sex=t.sex),s.setData({show:!1,localMsg:JSON.parse(JSON.stringify(s.data.nameColumns))}),"请选择就诊对象"!==s.data.selectName?(s.data.params.sessionId=s.guid()+(new Date).getTime(),s.data.params.query="开启",s.data.sessionTime=0,x.request({url:C,method:"post",data:s.data.params,success:function(t){console.log("开启对话"),s.setData({loadingAll:!1}),s.secondStep(s.data.sex,s.data.age)},fail:function(t){s.setData({loadingAll:!1,loading:!1}),console.log(t,"失败")}})):s.secondStep(s.data.sex,s.data.age))):s.setData({show:!1,loadingAll:!1,localMsg:JSON.parse(JSON.stringify(s.data.nameColumns))})}))}else this.pushMsg(t,1),this.data.params.query=t,x.request({url:C,method:"post",data:this.data.params,success:function(t){t.data.message&&(s.data.loading=!1,v["a"].fail("页面开小差，请重新导诊")),s.setData({loading:!1,loadingAll:!1}),s.fourthPart(t)},fail:function(t){s.setErrors(),console.log(t,"msg失败"),s.setData({loading:!1,loadingAll:!1})}})}catch(i){console.log(i,"!!"),this.setErrors()}this.setData({process:1})},setErrors:function(){this.data.loading=!1,v["a"].fail("页面开小差，请重新导诊"),this.setData({show:!1,show2:!1,columnsSign:!0})},secondStep:function(t,a,s){var e=this;this.data.params.query=t,this.data.loadingAll=!0,this.setData({loading:!0}),x.request({url:C,method:"post",data:this.data.params,success:function(t){t.message&&e.setData({loading:!1,loadingAll:!1}),console.log(t,"性别"),a.length>1?e.data.params.query=e.selectAge(e.data.age):e.data.params.query=a,x.request({url:C,method:"post",data:e.data.params,success:function(t){e.setData({loading:!1,loadingAll:!1}),s&&t.data?e.pushMsg("请问您最近哪里不舒服呢，可以告诉我，我将为您推荐可挂号的科室",0):e.fourthPart(t)},fail:function(t){console.log(t,"失败2"),e.setData({loading:!1,loadingAll:!1})}})},fail:function(t){e.setData({loading:!1,loadingAll:!1}),console.log(t,"失败1")}})},msgSelect:function(){var t=this;if(console.log(this.data.sex,this.data.age,"???"),0!==this.data.msgValue.length){if(this.data.params.query=this.data.msgValue,"请选择就诊对象"===this.data.selectName)return this.setData({msgValue:""}),void Object(v["a"])("请先选择就诊对象");if(this.pushMsg(this.data.msgValue,1),4===this.data.process)return this.data.params.sessionId=this.guid()+(new Date).getTime(),this.setData({process:0}),void this.restart(this.data.params.query);this.setData({loading:!0}),x.request({url:C,method:"post",data:this.data.params,success:function(a){a.data.message&&(t.data.loading=!1,v["a"].fail("页面开小差，请重新导诊")),t.setData({loading:!1}),setTimeout((function(){t.fourthPart(a)}),500)},fail:function(a){t.setData({loading:!1}),console.log(a,"失败")}})}else Object(v["a"])("消息为空，不能发送")},fourthPart:function(t){try{t.message&&(this.data.loading=!1);var a=t.data.data.answer.CSSType,s=t.data.data.answer;if(this.data.sessionTime=0,this.setData({continueSign:!1}),void 0==a)return void this.pushMsg(s.reply,0);switch(0!==a&&this.setData({process:2}),a){case 0:1!==this.data.msgList.length&&this.pushMsg(s.reply,0);break;case 1:this.more(s,"one");break;case 2:this.more(s,"one");break;case 3:this.more(s);break;case 5:this.more(s,!0);break;case 6:this.continue(s);break;case 7:this.end(s);break}}catch(e){this.pushMsg("出错了，没有找到相关内容哦",0),this.setData({process:1,show:!1,show2:!1}),console.log(e)}},end:function(t){var a=this;setTimeout((function(){a.data.process=4,a.command(t)}))},one:function(t,a){var s=this;if(this.data.oneColumns=[],this.pushMsg(t.reply,0),2===a){var e=t.units?t.units:t.data?t.data.value:t.value;e.forEach((function(t){var e={};e=2===a?{text:t.name?t.name:t,value:"1"}:{text:t},s.data.oneColumns.push(e)}))}else{var i=t.data?t.data.value:t.value;t.data?i.forEach((function(t){var a={text:t.name?t.name:t};s.data.oneColumns.push(a)})):t.value&&i.forEach((function(t){var a={text:t.name?t.name:t};s.data.oneColumns.push(a)}))}this.setData({oneColumns:this.data.oneColumns,columnsSign:!1,show:!0,status:1}),setTimeout((function(){var t=document.getElementById("picker");console.log(t.clientHeight,t.offsetHeight),s.setData({bottomHeight:t.clientHeight+("iOS"==s.data.isiOS?150:100)}),s.setData({scrollTop:1e5})}),100)},more:function(t,a){var s=this,e=t.data?t.data.value:t.value?t.value:[];this.pushMsg(t.reply,0),this.data.partsList=[],this.setData({partsList:[]}),e.forEach((function(t){s.data.partsList.push({name:t,select:!1,one:a&&"one"===a})})),a&&"one"!==a&&this.data.partsList.push({name:"都没有",sign:!0,select:!1}),this.setData({partsList:this.data.partsList,status:2,modelScrollTop:0,show:!0}),setTimeout((function(){var t=document.getElementById("picker2");console.log(t.clientHeight,t.offsetHeight),s.setData({bottomHeight:t.clientHeight+("iOS"==s.data.isiOS?150:100)}),s.setData({scrollTop:1e5})}),200)},continue:function(t){this.pushMsg(t.reply,0),this.setData({status:3,show:!0,bottomHeight:null,continueSign:!0})},continueTap:function(t){var a=this;console.log(this.data.loadingAll,"jixuwenzhen"),this.data.loadingAll||(this.data.params.query=t,2===this.data.params.query&&this.pushMsg("继续问诊",1),1===this.data.params.query&&this.pushMsg("直接推荐科室",1),this.setData({loading:!0}),this.data.loadingAll=!0,x.request({url:C,method:"post",data:this.data.params,success:function(t){setTimeout((function(){a.data.loadingAll=!1}),300),a.setData({loading:!1,show:2==e.currentTarget.dataset.sign}),setTimeout((function(){var t=x.createSelectorQuery();t.select("#picker").boundingClientRect((function(t){a.setData({bottomHeight:t.height+("iOS"==a.data.isiOS?a.data.systemHeight:100)}),a.setData({scrollTop:1e5}),console.log(t.height)})).exec()}),100),a.fourthPart(t)},fail:function(t){a.data.loadingAll=!1,a.setData({loading:!1}),console.log(t,"失败")}}))},command:function(t){var a=this,s=t.data.value;console.log(Array.isArray(s)),Array.isArray(s)||(s=[s]);var e={msg:"以下是为您推荐的科室信息:",type:2,isup:null,list:s};setTimeout((function(){a.data.msgList.push(e),a.setData({msgList:a.data.msgList,show:!1,process:4,bottomHeight:null}),a.setData({scrollTop:1e5})}),200)},selectAge:function(t){console.log(t);var a=0;return this.data.nameColumns[1].values.forEach((function(s,e){s==t&&(a=e)})),a},restart:function(t){var a=this;this.setData({loading:!0});var s=function(){return new Promise((function(t){a.data.params.query="开启",x.request({url:C,method:"post",data:a.data.params,success:function(a){t(1)},fail:function(t){a.setData({loading:!1,show:!1,show2:!1}),console.log(t,"失败")}})}))},e=function(){return new Promise((function(t){a.data.params.query=a.data.sex,x.request({url:C,method:"post",data:a.data.params,success:function(a){t(2)}})}))},i=function(){return new Promise((function(t){a.data.age.length>1?a.data.params.query=a.selectAge(a.data.age):a.data.params.query=a.data.age,x.request({url:C,method:"post",data:a.data.params,success:function(a){t(3)}})}))},o=function(){return new Promise((function(s){a.data.params.query=t,x.request({url:C,method:"post",data:a.data.params,success:function(t){a.fourthPart(t),a.setData({loading:!1,process:0}),s(4)},fail:function(t){a.setData({loading:!1}),console.log(t,"失败")}})}))};try{s().then((function(t){return console.log(t),e()})).then((function(t){return console.log(t),i()})).then((function(t){return console.log(t),o()})).then((function(t){console.log(t)}))}catch(n){this.setData({loading:!1})}}}},w=y,S=(s("7ea5"),Object(r["a"])(w,h,m,!1,null,null,null)),E=S.exports;i["default"].use(g["a"]);var D=[{name:"home",path:"/",component:E}],k=new g["a"]({routes:D}),b=k,M=(s("157a"),s("0fae"),s("5c96")),H=s("e41f"),I=s("f253"),J=s("ad06");i["default"].config.productionTip=!1,i["default"].use(M["Input"]).use(M["Button"]).use(M["Select"]).use(M["Option"]),i["default"].use(H["a"]).use(I["a"]).use(J["a"]),new i["default"]({router:b,render:function(t){return t(d)}}).$mount("#app")},"72af":function(t,a,s){t.exports=s.p+"img/user.7648835f.svg"},7651:function(t,a,s){},"7ea5":function(t,a,s){"use strict";s("7651")},"85ec":function(t,a,s){},d7e6:function(t,a,s){t.exports=s.p+"img/up.b6a67ef4.png"},e427:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABENJREFUWEfNWE2IHEUUfq9mZD14klwMC56EOah7cBVistGFiAc3LhIZ1q5XYjAmihoIGi8mJGK8+IPgD6xBiVjVnWVQ0WQ9iIHVJGIwe1njYcGTsKwHBS8eHJypJ2/oHmon09s9O4JTt+5+r95X7+d7rxphxBaOGB7YEqBGo3FTq9V6kJlv995vR8TtcjBmXldKrSPiz9Vq9et6vf7XoAceCJC19mFEPMjMewBgrMBYExEvMPNpY8y5ssBKAUqSZEe73X4dAHYFG4vBHwFgDQDW0/fiqXFmvqcH8GVEPEpEV4qAFQJyzr0MAK8yc0cWEReVUh9vFpIspN77/cz8UKrHAHCciF7bDFQuoKWlpRvX1tbOAMBcuuFVZn7BGHOp6JThd2vtFCK+xcx3p+8XxsfH909PT//db59cQNbaswGY+VqtdnhycvKfQcBkssvLyzesrq6+w8xPZ6CMMY+VBiRhYuZTqcJLxpg3tgKkV8daexQAJBcl9Mf6he86D0kCe++/l5xBxHkieua/AJPt4ZybZ+ZDiMhKqZ1RFP0Q7n8dIGut5MguRLxaq9V2bjVMeYdIwycHlpy6bIyZygUkPAMAX6YCuwdN4LKelEQHgIup/GzIUxs85JxblDKV0iaivaEBZlZJkkgZTyDiOa31hc0AxHG8h5mFSFeiKDqDiD6UD2x9RUQz2bcuIOGOZrP5hxBapVJ5NIqiz3o2EC46lr1TSj2QB0rAeO+/6RpBPEVEx8P9kiTZ1263PwWA5tjY2LaszXQB5QkEyfgTM98RGHmXiA7385JzTkr8+UD2GhHdGcrmOaALKI7jE977k4h4iYh29xpyzllmpsBDB7TWH/UDFMfxk977DwNAjohMnz0vMvOUUuqk1vqVDh1kQtbaDwDgICKeJaKoVzlJkm3e+7cBYEISX2t9ojcvMh3JtziOxcAsAKwopY5EUSTpsGE55xJmFoKUBnxoAyDn3HlmnhGaJ6IXy1bMMHLOuTelHYVFFHpIRoS9/wcgADhvjBHKKR+yYTyRp7tpyIqSOid5b/Pe34eIt8p3Zv5VKfWd1vqXMgdwzuUndVHZhwYWFhYmWq2WJPj92ZwUVJTMPd9Wq9Ujc3NzK3nAwrJXSu3TWn++IWRFxBhU4wEAeK/MCAsAzxljuuUfgiskRhHOo/NsI+fcDDNLr1Ppuy8Q8TQAXEufhTifYuZH0mePiLNEtNin5LM21b91iEJRc3XOrTPzLYjYBoDHiSjpFxLnnPDYJ8xcQcTfiKhzKwm8XK65pqByxw9r7RVEvAsRn9Vai2dyVxzHcjt5HwCWiWhHJjjQ+CFKmw1ojUajAgA31+v138tUkbB7tVr9s16vi0c7KxzQAODe3ptI35l6pEbYIM6jM+QLqJG7BgUxH+ai+IQ07A7hIQ53UewhsdG5Svfwx2j8bOgt8ZH5HVOGe4aVKfz7MayBQfX/BdUvvkMHE+hJAAAAAElFTkSuQmCC"},e864:function(t,a){t.exports="data:image/png;base64,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"},ebb2:function(t,a,s){t.exports=s.p+"img/send.15545560.svg"}});