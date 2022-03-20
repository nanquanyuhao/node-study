'use strict';

const crypto = require('crypto');

const hash = crypto.createHash('sha512');

// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

// 7628241ce84a5b88ea745309ce984e9fd09a4ebbd041be877bd1670b77f70ee04be877818ceee2924b23cabfd8d4ed8808ed25d2a90cccb1a0cbd7ccc1067ac1
console.log(hash.digest('hex'));