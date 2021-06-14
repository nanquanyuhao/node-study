'use strict';

// read text from 'sample.txt'

const fs = require('fs');

console.log('>>> BEGIN >>>')

fs.readFile('sample.txt', 'utf-8', function (err, data) {
    // err参数为null，data参数为读取到的String
    if (err) {
        console.log(err);
    } else {
        // 当读取发生错误时，err参数代表一个错误对象，data为undefined
        console.log(data);
    }
});

console.log('>>> END >>>')