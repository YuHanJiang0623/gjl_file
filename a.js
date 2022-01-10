let http = require('http')
let server = http.createServer()
// request请求处理函数，需要接收两个参数
//Request 请求对象
// 请求对象可以用来获取客户端的一些请求信息，例如请求路径
// Response 响应对象
// 响应对象可以用来给客户端发送响应消息
server.on('request', function (request, response) {
	console.log('客户端已收到请求,路径为' + request.url)
	// response对象有一个方法：write可以用来给客户端发送响应数据
	// write可多次使用，但是最后一定要使用end来结束响应，否则客户端会一直等待
	// response.write("nodeJs")
	// response.end() //告诉客户端结束写入
	// 简单方法，可直接在end中写入数据，写入数据的同时结束写入

	let url = request.url
	if (url == '/') {
		response.end(url)
	} else if (url == '/a') {
		let data = [ {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
          }]
	
			response.writeHead(200, { 'Content-Type': 'application/json' })
			response.end(JSON.stringify(data))
		
	}
})
server.listen('9527', function () {
	console.log('服务端已启动成功')
})
