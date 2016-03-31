
var gulp = require('gulp');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var mocha = require('gulp-mocha');
var espowerTypescript = require('espower-typescript/guess');

var typescriptProject = typescript.createProject({
  target: "ES5", 
  removeComments: true, 
  sortOutput: true
});

var paths = {
    ts: ['src/*.ts'],
    test: ['test/*.ts']
};

gulp.task('build', function(done) {
    gulp.src(paths.ts)
    .pipe(plumber({errorHandler: notify.onError('Error: typescript')}))
    .pipe(typescript(typescriptProject))
    .pipe(concat("app.js"))
    .pipe(gulp.dest('./build'))
    .on('end', done);
});

gulp.task('mocha', function(done) {
    gulp.src(paths.test)
    .pipe(mocha({
        reporter: 'nyan',
        compilers: { ts: espowerTypescript }
      }))
    .on('end', done);
});

gulp.task('watch', function(done) {
    gulp.watch(paths.ts, ['build', 'mocha']);
    gulp.watch(paths.test, ['mocha']);
})
