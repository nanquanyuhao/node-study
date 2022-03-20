'use strict';

var url = require('url');

// url.parse('...') 已经过期
console.log(new URL('http://user:pass@host.com:8080/path/to/file?query=string#hash'));