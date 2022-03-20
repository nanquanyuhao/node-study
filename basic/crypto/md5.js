'use strict';

const crypto = require('crypto');

const hash = crypto.createHash('md5');

// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

// 7e1977739c748beac0c0fd14fd26a544
console.log(hash.digest('hex'));