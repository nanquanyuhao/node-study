'use strict';

const crypto = require('crypto');

const hmac = crypto.createHmac('sha1', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

// cb959de9fae45d6c9977435fdccdd8660eceb927
console.log(hmac.digest('hex'));