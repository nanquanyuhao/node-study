const model = require('./model.js');
model.sync();

console.log('init db ok.');

// 下面一句需要注掉，否则执行不完
// process.exit(0);