
var gulp = require('gulp');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');


var typescriptProject = typescript.createProject({
  target: "ES5", 
  removeComments: true, 
  sortOutput: true
});

var paths = {
    ts: ['src/*.ts']
};

gulp.task('build', function(done) {
    gulp.src(paths.ts)
    .pipe(plumber({errorHandler: notify.onError('Error: typescript')}))
    .pipe(typescript(typescriptProject))
    .pipe(concat("app.js"))
    .pipe(gulp.dest('./build'))
    .on('end', done);
});
