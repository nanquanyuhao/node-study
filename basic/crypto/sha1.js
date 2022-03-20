'use strict';

const crypto = require('crypto');

const hash = crypto.createHash('sha1');

// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

// 1f32b9c9932c02227819a4151feed43e131aca40
console.log(hash.digest('hex'));