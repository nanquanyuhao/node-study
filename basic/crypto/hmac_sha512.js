'use strict';

const crypto = require('crypto');

const hmac = crypto.createHmac('sha512', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

// 4277f33ca3781c7291a09ac5e96dcd3fca69f06c580feede9b25a541e7a7bdbd0d4d68efd96708c9554561e8a2bf365916573a621f8ff086858b52c591b12985
console.log(hmac.digest('hex'));