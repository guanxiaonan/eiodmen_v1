'use strict';

import Router from 'koa-router';

import Myapp from '../controllers/myapp';

import Myweb from '../controllers/myweb';

import User from '../controllers/user';


const router = new Router();

router
  .get('/', User.index)                 //主页面
  .get('/login', User.showLogin)        //登录页面
  .get('/register', User.showRegister)  //注册页面
  .get('/logout', User.logout)          //用户退出登录
  .post('/login', User.login)           //用户登录操作
  .post('/register', User.register)     //用户注册操作
  .get('/test',Myapp.test) //测试能否连上手机，与数据库
  //app
  .post('/ready_tijiao', Myapp.ready_tijiao)     //准备巡查数据提交
  .post('/waterio_tijiao', Myapp.waterio_tijiao)  //进出水口检查
  .post('/otherdevice_tijiao', Myapp.otherdevice_tijiao)  //其他设备提交
  .post('/device_tijiao', Myapp.device_tijiao)  //设备情况提交
  .post('/structure_tijiao', Myapp.structure_tijiao)  //构建物情况提交

  //web
  .post('/myweb/weblogin',Myweb.weblogin) //用户登录操作
  .get('/myweb/data_table',Myweb.data_table) //跳转到数据列表下面
  .get('/myweb/testpdf',Myweb.testpdf)  //测试生成pdf
  .get('/myweb/getperpar',Myweb.getperpar)  //获取准备阶段的数据
  .get('/myweb/show_alldata',Myweb.show_alldata)  //显示所有的数据
  .get('/myweb/alldata',Myweb.alldata)  //显示所有的数据


export default router;
