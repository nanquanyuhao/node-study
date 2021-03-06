'use strict';

var path = require('path');

// 解析当前目录:
var workDir = path.resolve('.'); // 'D:\code\github\node-study\basic\http'
console.log('当前目录：' + workDir);

// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
// 'D:\code\github\node-study\basic\http\pub\index.html'
console.log('文件路径：' + filePath);