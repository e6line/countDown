
var console = console || {
    log : function(){
        return false;
    }
};

function countDown(seconds, ProcessCallBack, EndCallBack){
  this.seconds = seconds;
  this.ProcessCallBack = ProcessCallBack;
  this.EndCallBack = EndCallBack;
}

countDown.prototype.countDownHandle = function(){
  var that = this;
  if( typeof that.seconds != "number" || typeof that.ProcessCallBack != "function" || typeof that.EndCallBack != "function"){
    console.log("Param Exception!");
  }
  that.timer ? clearTimeout(that.timer) : that.timer = null;
  if( --that.seconds ){
    that.timer = setTimeout(function () {
      that.countDownHandle(that.seconds, that.ProcessCallBack, that.EndCallBack);
    }, 1000);
    that.ProcessCallBack();
  }else{
    that.EndCallBack();
  }
}


  // var a = new countDown(10, function () {
  //   console.log(1);
  // }, function () {
  //   console.log(2);
  // });
  // a.countDownHandle();

  // var b = new countDown(10, function () {
  //   console.log(3);
  // }, function () {
  //   console.log(4);
  // });
  // b.countDownHandle();
