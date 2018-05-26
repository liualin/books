var gulp = require('gulp');
var server = require('gulp-webserver');
var homeData = require('./src/data/home.json');
var uglify = require('gulp-uglify') //压缩js
var minicss = require('gulp-minify-css') //压缩css
var htmlmin = require('gulp-htmlmin') //压缩html
var mock = require('./src/data/mock.js')
var user = {
    name: 'zs',
    pwd: '123'
}
var url = require('url');
//压缩js
gulp.task('zjs', function() {
    gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})

//压缩css
gulp.task('zcss', function() {
    gulp.src('src/css/*.css')
        .pipe(minicss())
        .pipe(gulp.dest('./dist/css'))
})

//压缩htmls
gulp.task('zhtml3', function() {
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true, //压缩HTML
            minifyJS: true, //压缩页面JS
            minifyCSS: true //压缩页面CSS
        }))
        .pipe(gulp.dest('./dist'))
})

//服务
gulp.task('server', function() {
    gulp.src('dist')
        .pipe(server({
            port: 8008,
            host: "localhost",
            // livereload: true,
            // open: true,
            middleware: function(req, res, next) {
                //console.log(req.url)
                var uname = url.parse(req.url, true);
                if (/\/book/g.test(uname.pathname)) {
                    console.log(req.url)
                    console.log(uname.pathname)
                        // console.log(mock(req.url))
                    res.end(JSON.stringify(mock(req.url)));
                };
                //等录页
                if (req.url === '/loginname') {
                    // console.log(req.url)
                    var arr = [];
                    req.on('data', function(chunk) {
                        arr.push(chunk)
                    });
                    req.on('end', function() {
                        var data = Buffer.concat(arr).toString();
                        var obj = require('querystring').parse(data);
                        if (obj.name === user.name && obj.pwd == user.pwd) {
                            res.end('{"result":"登录成功"}');
                        } else {
                            res.end('{"result":"登录失败"}');
                        }
                        next();
                    })
                    return false;
                }
                next();
            }
        }))
});
gulp.task('default', ['server'])