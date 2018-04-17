'use strict';

import Model_web from '../models/model_web';
import Knex from 'knex';
import validate from 'validate';
import md5 from 'md5';


import configs from '../configs/index';

const knex = Knex(configs.knexConfig);

//main
exports.main = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/web_show/main', {   //默认后缀名为html
     title: '公司信息',
     user: ctx.session.user
   })
  }
}

//weblogin
exports.weblogin = async function(ctx, next){
  console.log("运行================");
  let data_user = ctx.request.body;
  console.log(data_user);
    // await ctx.redirect('/myweb/data_table')
    await ctx.render('pages/myweb/data_table', {   //默认后缀名为html
     title: '数据列表',
     user: ctx.session.user,
     data_perpar:[]
   })
  }

  //data_table
  exports.data_table = async function(ctx,next){
    await ctx.render('pages/myweb/data_table', {   //默认后缀名为html
     title: '数据列表',
     user: ctx.session.user,
     data_perpar:[]
   })
  }
// testpdf
exports.testpdf = async function(ctx,next){
  await ctx.render('pages/myweb/testpdf', {   //默认后缀名为html
   title: '数据列表',
   user: ctx.session.user
 })
}

//getperpar,获取准备阶段的数据，并显示在网页表格中
exports.getperpar = async function(ctx,next){
    //查询数据库，获得相应的值
    //'id_preparation','stree','admin_village','date','shijian','weather','village'
    let data_perpar = await knex.column().select().from('preparation'); //获取数据库表中所有的数据
    console.log(data_perpar);
    await ctx.render('pages/myweb/data_table', {   //默认后缀名为html
     title: '数据列表',
     user: ctx.session.user,
     data_perpar:data_perpar
   })
}

//alldata ,显示所有的数据
exports.alldata = async function(ctx,next){
  await ctx.render('pages/myweb/alldata', {   //默认后缀名为html
   title: '数据列表',
   user: ctx.session.user
 })
}

// show_alldata
exports.show_alldata = async function(ctx,next){
  console.log("====yunxing======");
  
}
