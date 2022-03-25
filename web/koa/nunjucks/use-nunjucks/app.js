'use strict';

const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    var
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        // 给 noCache 赋值默认值 false
        noCache = opts.noCache || false,
        // 给 watch 赋值默认值 false
        watch = opts.watch || false,
        // 给 throwOnUndefined 赋值默认值 false
        throwOnUndefined = opts.throwOnUndefined || false,

        // Nunjucks模板引擎对象
        env = new nunjucks.Environment(

            // 创建一个文件系统加载器，从 views 目录读取模板
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});

var s = env.render('hello.html', {
    name: '<Nunjucks>',
    fruits: ['Apple', 'Pear', 'Banana'],
    count: 12000
});

console.log(s);

console.log(env.render('extend.html', {
    header: 'Hello',
    body: 'bla bla bla...'
}));