'use strict';

const crypto = require('crypto');

const hash = crypto.createHash('sha256');

// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

// 940371b8619c00ed7a39d46ba45e71b5081ea19e35fa7d8315e5972a501465af
console.log(hash.digest('hex'));