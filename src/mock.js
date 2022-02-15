import Mock from 'mockjs';
//const Mock = require("mockjs");
// Mock.mock( rurl, rtype, template|function( options ) )
// rurl
// 可选。
// 表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。例如 '/domian/list.json'。

// rtype
// 可选。
// 表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等。

// template
// 可选。
// 表示数据模板，可以是对象或字符串。
// 数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：
// // 属性名   name
// // 生成规则 rule
// // 属性值   value
// 'name|rule': value
// 例如：'name|1-10':1 会产生一个1-10之间的整数，详细规则参见官方文档

// function(options)
// 可选。
// 表示用于生成响应数据的函数。
// options
// 指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性

/*测试接口*/
const data = [
  {
    date: "2016-05-02",
    name: "aaaaa",
    address: "bbbbbbbb"
  }
];
Mock.mock("/data", data);


let nameData ={name: 'guanjialuo'}
Mock.mock("/name",'get', nameData);

// 添加信息
let projectList = []
Mock.mock('/mock/addProject', ops => { // 拦截ajax请求，调用函数
   console.log(ops)  
   console.log(JSON.parse(ops.body))  
   ops = JSON.parse(ops.body)
   nameData.name=ops.name
  
})

