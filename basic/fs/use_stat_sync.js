'use strict';

const fs = require('fs');

var stat;
try {
    stat = fs.statSync('sample.txt');
    
    // 是否是文件:
    console.log('isFile: ' + stat.isFile());
    // 是否是目录:
    console.log('isDirectory: ' + stat.isDirectory());
    if (stat.isFile()) {
        // 文件大小:
        console.log('size: ' + stat.size);
        // 创建时间, Date对象:
        console.log('birth time: ' + stat.birthtime);
        // 修改时间, Date对象:
        console.log('modified time: ' + stat.mtime);
    }
} catch (err) {
    // 出错了
    console.log(err);
    return;
}