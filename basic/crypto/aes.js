'use strict';

const crypto = require('crypto');

// 改造方法新增初始向量，AES除了密钥外还可以指定IV（Initial Vector），不同的系统只要IV不同，用相同的密钥加密相同的数据得到的加密结果也是不同的
const iv = crypto.randomBytes(16);
// 密码与盐，位数必须 24 才能与 iv 的 16 匹配
const key = crypto.scryptSync('Password!', 'GfG', 24); 

function aesEncrypt(data, key) {
    // 过期方法 crypto.createCipher('aes192', key)
    const cipher = crypto.createCipheriv('aes192', key, iv);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted, key) {
    // 过期方法 crypto.createDecipher('aes192', key)
    const decipher = crypto.createDecipheriv('aes192', key, iv);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

var data = 'Hello, this is a secret message!';
var encrypted = aesEncrypt(data, key);
var decrypted = aesDecrypt(encrypted, key);

console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);