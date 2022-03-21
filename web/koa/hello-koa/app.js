'use strict';

// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 可以用以下3个middleware组成处理链，依次打印日志，记录处理时间，输出HTML，整体来看每一层像 java web 的过滤器，前后均有逻辑
app.use(async (ctx, next) => {
    console.log('method1 start');

    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware

    console.log('method1 end');
});

app.use(async (ctx, next) => {
    console.log('method2 start');

    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间

    console.log('method2 end');
});

// 对于任何请求，app将调用该异步函数处理请求：next 是 koa 传入的将要处理的下一个异步函数
app.use(async (ctx, next) => {
    console.log('method3 start');

    await next();
    // 设置response的Content-Type: ；ctx.response.type 是完整写法
    ctx.type = 'text/html';
    // 设置response的内容: ； ctx.response.body 是完整写法
    ctx.body = '<h1>Hello, koa2!</h1>';

    console.log('method3 end');
});

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');