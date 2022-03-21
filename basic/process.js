'use strict';

// 赋值全局的 process 对象给 process
process === global.process;

// 输出 node 版本
console.log(process.version);
// 输出软件运行平台
console.log(process.platform);
// 输出平台架构
console.log(process.arch);
// 返回当前所在目录 D:\code\github\node-study\basic
console.log(process.cwd());

// 切换目录至其他并再次输出
process.chdir('D:\\code\\github\\node-study');
console.log(process.cwd());