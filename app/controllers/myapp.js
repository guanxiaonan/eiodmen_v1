'use strict';

import Model_app from '../models/model_app';

//测试系统能否连接
exports.test = async function(ctx, next){
  try{
     ctx.session.user = {data: "session"};
     let data = {
       data: "123456",
       time: Date.now()
     }
     let result = await Model_app.save_test(data);
     console.log(result)
     if(result == true){
       console.log(ctx.session);
       ctx.body = {data: "hello world"};
     }else{
       ctx.body = {data: "hello world"};
     }
   }catch(err){
     console.log(err)
     throw err;
   }
}
  //ready_tijiao
  exports.ready_tijiao = async function(ctx, next){
    try{
    let data_ready = ctx.request.body;
    // console.log(data_ready);
    let result_ready = await Model_app.save_ready(data_ready);
    console.log(result_ready);
    if(result_ready==true){
      console.log("插入数据成功！");
      ctx.body = ["gyn:"+"巡查准备页面插入数据成功！"];  //返回数据给app
    }else {
      console.log("插入数据失败！");
      ctx.body = ["gyn:"+"数据插入失败！"]
    }
  }catch(err){
    console.log(err)
    throw err;
  }
  }

  //waterio_tijiao
  exports.waterio_tijiao = async function(ctx,next){
    try{
      let data_waterio = ctx.request.body;
      console.log(data_waterio);
    }catch(err){
      console.log(err)
      throw err;
    }

  }

//其他设备数据显示
  exports.otherdevice_tijiao = async function(ctx,next){
    let data_otherdevice = ctx.request.body;
    console.log(data_otherdevice);
  }

//设备情况数据显示
exports.device_tijiao = async function(ctx,next){
  let data_device = ctx.request.body;
  console.log(data_device);
}

//structure_tijiao
exports.structure_tijiao = async function(ctx,next){
  let data_structure = ctx.request.body;
  console.log(data_structure);
}
