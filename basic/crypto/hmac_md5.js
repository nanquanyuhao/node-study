'use strict';

const crypto = require('crypto');

const hmac = crypto.createHmac('md5', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

// cf3d9f3464385eac7e82e7088a8fc04d
console.log(hmac.digest('hex'));