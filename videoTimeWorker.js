let timer,
  index = 0,//计数
  studyTime = 0,//学习时长
  submitSecond = 60
;
//接收外部数据
onmessage = function (e){
  console.log("我是接收的内容",e);
  //获取之前的播放时长
  studyTime = e.data.playTimeAll;
  if(timer != null){
    return
  }
  timer = setInterval(()=>{
    index+=10;
    studyTime += 60;
    // if(e.data.playbackRate === 1){
    //   studyTime += 1;
    // }
    // if(e.data.playbackRate === 1.5){
    //   studyTime += 1.5;
    // }
    // if(e.data.playbackRate === 2){
    //   studyTime += 2;
    // }
    console.log("学习时长：",studyTime);
    console.log("当前播放倍速",e.data.playbackRate);
    // console.log("提交时长：",submitSecond);
    console.log("计数：",index);
    let i2 = index*10;
    postMessage({ index,studyTime,submitSecond });
  },1000)
}
