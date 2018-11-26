var gulp = require('gulp');
var concat = require('gulp-concat');
//var jshint = require('gulp-jshint');
var wiredep = require('wiredep').stream;
var connect = require('connect');
var wiredepConfig = require('./gulp-config');

var browsersync = require('browser-sync').create();

var vendor =  {    
    bower: {
      js: [
        'bower_components/*/*.js',
        'bower_components/*/dist/**/*.js',
        'bower_components/*/release/**/*.js',
        '!bower_components/angular-bootstrap/ui-bootstrap.js',
        '!bower_components/lodash/dist/lodash.*.js',
        'bower_components/**/*/*min.*',
        '!bower_components/*/Gruntfile.js'
      ],
      css: [
        'bower_components/**/font-awesome/css/font-awesome.css',
        '!bower_components/**/src/**/*'
      ],
      fonts: [
        'bower_components/bootstrap/dist/fonts/*',
        'bower_components/font-awesome/fonts/*'
      ]
    }
  };




function recarregar (callback){
    browsersync.reload();
    callback();
}

function sincronizar(callback){
    browsersync.init({server:{ baseDir:'./dist'}});
    callback();
     
}

function empacotarHtml(){
   
   return gulp.src('app/index.html')
    //.pipe(wiredep(options))
    .pipe(gulp.dest('dist'));
}

function empacotarJs(){    
    return gulp.src('app/js/*.js')
    //.pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'));
}

function empacotarDependencias(){

    gulp.src(vendor.bower.js)
      .pipe(gulp.dest('dist/bower_components'));
}


function observar (){
    gulp.watch("app/*.html",gulp.series(empacotarHtml,recarregar));
    gulp.watch('app/js/*.js',gulp.series(empacotarJs,recarregar));    
}

gulp.task('default',gulp.parallel(empacotarJs,empacotarHtml,sincronizar,observar));

