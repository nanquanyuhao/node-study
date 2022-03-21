'use strict';

const fs = require('fs');
var express = require('express');
var app = express();

// 处理根请求
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// 处理 /test 请求的内容
app.get('/test', function (req, res) {

    // 注意此处的地址从 /code* 开始而不是 /d/code，使用 console.log(err); 可以获得地址
    fs.readFile('file1', function (err, data) {
        if (err) {
             res.status(500).send('read file1 error');
        } else {
            fs.readFile('file2', function (err, data) {
                if (err) {
                    res.status(500).send('read file2 error');
                } else {
                    res.type('text/plain');
                    res.send(data);
                }                
            });
        }        
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

// 经测试，开启后，程序退出会调用此方法
// process.on('exit', function (code) {
//     console.log('about to exit with code: ' + code);
// });