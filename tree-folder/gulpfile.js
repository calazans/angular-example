var gulp = require('gulp');
var concat = require('gulp-concat');
//var jshint = require('gulp-jshint');
var wiredep = require('wiredep').stream;
var connect = require('connect');

var browsersync = require('browser-sync');


function sync(callback){
    return browsersync({server:{ baseDir:'./'}},callback);
}



function dependencies(){
   return gulp.src('app/index.html')
    .pipe(wiredep({
        optional: 'configuration',
        goes: 'here'
      }))
    .pipe(gulp.dest('dist'));
}

function script(){    
    return gulp.src('app/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'));
}

/* gulp.task('watch',function(){
    gulp.watch('app/js/*.js',gulp.series(script,browsersync.reload));
    gulp.watch('dist',gulp.series(browsersync.reload));
});
 */
gulp.task('default',gulp.parallel(script,dependencies,sync));

