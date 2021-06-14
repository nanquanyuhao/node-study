'use strict';

// read from 'sample.png'

const fs = require('fs');

console.log('>>> BEGIN >>>')

fs.readFile('sample.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        // 当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象
        // Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）
        console.log(data);
        console.log(data.length + ' bytes');
    }
});

console.log('>>> END >>>')