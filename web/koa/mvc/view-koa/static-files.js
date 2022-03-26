const path = require('path');
const mime = require('mime');
// mz 提供的 API 和 Node.js 的 fs 模块完全相同
// mz 封装了 fs 对应的函数，并改为 Promise
const fs = require('mz/fs');

// 处理静态文件的 middleware
// url: 类似 '/static/'
// dir: 类似 __dirname + '/static'
function staticFiles(url, dir) {
    return async (ctx, next) => {
        let rpath = ctx.request.path;

        // 判断是否以指定的 url 开头，此处即 /static/ :
        if (rpath.startsWith(url)) {

            // 获取文件完整路径:
            let fp = path.join(dir, rpath.substring(url.length));
            // 判断文件是否存在:
            if (await fs.exists(fp)) {
                // 查找文件的 mime:
                ctx.response.type = mime.lookup(rpath);
                // 读取文件内容并赋值给response.body:
                ctx.response.body = await fs.readFile(fp);
            } else {
                // 文件不存在:
                ctx.response.status = 404;
            }
        } else {
            // 不是指定前缀的URL，继续处理下一个middleware:
            await next();
        }
    };
}

module.exports = staticFiles;