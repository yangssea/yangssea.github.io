var rec,rec_blob;
/**调用open打开录音请求好录音权限**/
var recOpen=function(){//一般在显示出录音按钮或相关的录音界面时进行此方法调用，后面用户点击开始录音时就能畅通无阻了
  rec=null;
  rec_blob=null;
  var new_rec=Recorder({
    //mp3格式，指定采样率hz、比特率kbps，其他参数使用默认配置；注意：是数字的参数必须提供数字，不要用字符串；需要使用的type类型，需提前把格式支持文件加载进来，比如使用wav格式需要提前加载wav.js编码引擎
    type:"mp3",sampleRate:16000,bitRate:16
  });



  new_rec.open(function(){//打开麦克风授权获得相关资源

    rec=new_rec;

    reclog("已打开录音，可以点击录制开始录音了",2);
  },function(msg,isUserNotAllow){//用户拒绝未授权或不支持
    reclog((isUserNotAllow?"UserNotAllow，":"")+"打开录音失败："+msg,1);
  });

  window.waitDialogClick=function(){
    reclog("打开失败：权限请求被忽略，<span style='color:#f00'>用户主动点击的弹窗</span>",1);
  };
};



/**关闭录音，释放资源**/
function recClose(){
  if(rec){
    rec.close();
    reclog("已关闭");
  }else{
    reclog("未打开录音",1);
  };
};



/**开始录音**/
function recStart(){//打开了录音后才能进行start、stop调用
  if(rec&&Recorder.IsOpen()){
    rec_blob=null;
    rec.start();
    //reclog("已开始录音...");
    //alert(111);
  }else{
    //reclog("未打开录音",1);
  };
};

function recStopVedio(){

  setTimeout(function(){  recStop(); }, 1000);
}

/**结束录音，得到音频文件**/
function recStop(){

  //rec.getBlob(function(blob){
  //获取成功回调函数，blob即为音频文件//  ...
  //  console.log("+++++++++++++++++++++++++"+"blob:"+blob);
  //},function(msg){
  //  //获取失败回调函数，msg为错误信息//  ...
  //});


  if(!(rec&&Recorder.IsOpen())){
    reclog("未打开录音",1);
    return;
  };
  rec.stop(function(blob,duration){
    console.log(blob,(window.URL||webkitURL).createObjectURL(blob),"时长:"+duration+"ms");

    rec_blob=blob;
    console.log(rec_blob);
    reclog("已录制mp3："+duration+"ms "+blob.size+"字节，可以点击播放、上传了",2);
    //setTimeout(function(){  recUpload(); }, 600);
    recUpload();

  },function(msg){
    reclog("录音失败:"+msg,1);
  });


};









/**播放**/
function recPlay(){
  if(!rec_blob){
    reclog("请先录音，然后停止后再播放",1);
    return;
  };
  var cls=("a"+Math.random()).replace(".","");
  reclog('播放中: <span class="'+cls+'"></span>');
  var audio=document.createElement("audio");
  audio.controls=true;
  //document.querySelector("."+cls).appendChild(audio);
  //简单利用URL生成播放地址，注意不用了时需要revokeObjectURL，否则霸占内存
  audio.src=(window.URL||webkitURL).createObjectURL(rec_blob);
  audio.play();

  setTimeout(function(){
    (window.URL||webkitURL).revokeObjectURL(audio.src);
  },5000);
};

/**上传**/
function recUpload(){
  var blob=rec_blob;
  if(!blob){
    reclog("请先录音，然后停止后再上传",1);
    return;
  };

  //本例子假设使用原始XMLHttpRequest请求方式，实际使用中自行调整为自己的请求方式
  //录音结束时拿到了blob文件对象，可以用FileReader读取出内容，或者用FormData上传
  //var api="http://172.16.61.188:8080/soochow.good/record/upload.do";
  var api="https://his2.ugsg.com.cn:9108/soochow.good/record/upload.do";
 var onreadystatechange=function(title){
    return function(){
      if(xhr.readyState==4){
        if(xhr.status==200){
          reclog(title+"上传成功",2);
          json = JSON.parse(xhr.response)
          ChatSendClientYY(json.message);


        }else{
          reclog(title+"没有完成上传，演示上传地址无需关注上传结果，只要浏览器控制台内Network面板内看到的请求数据结构是预期的就ok了。", "#d8c1a0");

          console.error(title+"上传失败",xhr.status,xhr.responseText);
        };
      };
    };
  };
  reclog("开始上传到"+api+"，请求稍后...");

  /***方式二：使用FormData用multipart/form-data表单上传文件***/
  var form=new FormData();
  form.append("upfile",blob,"recorder.mp3"); //和普通form表单并无二致，后端接收到upfile参数的文件，文件名为recorder.mp3
  //...其他表单参数

  var xhr=new XMLHttpRequest();
  xhr.open("POST", api, true);
  xhr.onreadystatechange=onreadystatechange("上传方式二【FormData】");
  xhr.send(form);
};

function reclog(s,color){
  console.log(s);
};
