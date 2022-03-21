'use strict';

// 程序即将退出时的回调函数:
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});

// process.nextTick()将在下一轮事件循环中调用:
// 这说明传入process.nextTick()的函数不是立刻执行，而是要等到下一次事件循环。
process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');