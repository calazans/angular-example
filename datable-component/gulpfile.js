var gulp = require('gulp');
var concat = require('gulp-concat');
//var jshint = require('gulp-jshint');
var wiredep = require('wiredep').stream;
var connect = require('connect');
var server = require('server-static');
var browsersync = require('browser-sync');


gulp.task('sync',function(callback){
    return browsersync({server:{ baseDir:'./'}},callback);
});

gulp.task('server',function(){
    return connect()
    .use(server(__dirname))
    .listen(8080)
    .on('listening',function(){
        console.log('Its runnig');
    });
});


gulp.task('dependencies',function(){
   return gulp.src('app/index.html')
    .pipe(wiredep({
        optional: 'configuration',
        goes: 'here'
      }))
    .pipe(gulp.dest('dist'));
});

gulp.task('script',function(){    
    return gulp.src('app/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch',function(){
    gulp.watch('app/js/*.js',gulp.series('script',browsersync.reload));
    gulp.watch('dist',gulp.series(browsersync.reload));
});

gulp.task('default',gulp.parallel('script','sync','watch'));

