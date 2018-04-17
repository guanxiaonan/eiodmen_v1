'use strict';

import Knex from 'knex';
import validate from 'validate';
import md5 from 'md5';


import configs from '../configs/index';

const knex = Knex(configs.knexConfig);

export default class Model_app{
//收集App处理数据的方法

	//测试能否连上数据库
	static async save_test(data){
    //console.log(data);
    let result = await knex('test_data')
                       .insert(data);

    if(result[0]){
      return true;
    }else{
      return false;
    }
  }

	//巡查准备数据插入数据库
	static async save_ready(data_ready){
		console.log(data_ready);
		let insert_ready = {}
		let id =await knex.column('id').select().from('preparation');   //缺少await会报错
		insert_ready.id_preparation = id.length+1;
		insert_ready.stree = data_ready['街道（乡镇）'];
		insert_ready.admin_village = data_ready['行政村'];
		insert_ready.date = data_ready['巡查检查日期'];
		insert_ready.shijian = data_ready['时间'];
		insert_ready.weather = data_ready['天气'];
		insert_ready.village = data_ready['自然村'];
		insert_ready.terminal = data_ready['终端名称'];
		insert_ready.people = data_ready['巡查、检查人员'];

		let result_ready = await knex('preparation').insert(insert_ready); //数据插入数据库
		if(result_ready[0]!=0){
			return true;
		}else {
			return false;
		}
	}

	}
