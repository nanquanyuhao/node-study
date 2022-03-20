'use strict';

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行参数获取root目录，默认是当前目录，添加启动参数则向后拼接:
// process.argv[2] 指启动命令的第三个词组，即第二个参数
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

// 声明请求处理方法


// 创建服务器:
var server = http.createServer(function (request, response) {

    console.log('请求地址:' + request.url);

    // 获得URL的path，类似 '/css/bootstrap.css':
    var pathname = new URL('http://localhost' + request.url).pathname;
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    var filepath = path.join(root, pathname);
    console.log('文件路径:' + filepath);

    // 获取文件状态:
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(response);
        } else if (!err && stats.isDirectory()) {

            var indexExist = true;
            try {
                var stat = fs.statSync(filepath + 'index.html').isFile();
            } catch (err) {
                // 出错了
                console.log(err);
                indexExist = false;
            }
            var defaultExist = true;
            try {
                var stat = fs.statSync(filepath + 'default.html').isFile();
            } catch (err) {
                // 出错了
                console.log(err);
                defaultExist = false;
            }

            if (indexExist){
                // 没有出错并且文件存在:
                console.log('200 ' + request.url);
                // 发送200响应:
                response.writeHead(200);
                // 将文件流导向response:
                fs.createReadStream(filepath + 'index.html').pipe(response);
            } else if(defaultExist) {
                // 没有出错并且文件存在:
                console.log('200 ' + request.url);
                // 发送200响应:
                response.writeHead(200);
                // 将文件流导向response:
                fs.createReadStream(filepath + 'default.html').pipe(response);
            } else {
                // 出错了或者文件不存在:
                console.log('404 ' + request.url);
                // 发送404响应:
                response.writeHead(404);
                response.end('404 Not Found');
            }            
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');