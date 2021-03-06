// var gulp = require("gulp");
// var ts = require("gulp-typescript");
// var tsProject = ts.createProject("tsconfig.json");
//
// gulp.task("default", function () {
//   return tsProject.src()
//     .pipe(tsProject())
//     .js.pipe(gulp.dest("dist"));
// });

// var gulp = require("gulp");
// var browserify = require("browserify");
// var source = require("vinyl-source-stream");
// var tsify = require("tsify");
// var paths = {
//   pages: ['src/*.html'],
// };
//
// gulp.task("copy-html", function () {
//   return gulp.src(paths.pages)
//     .pipe(gulp.dest("dist"));
// });
//
// gulp.task("default", ["copy-html"], function () {
//   return browserify({
//     basedir: '.',
//     debug: true,
//     entries: ['src/main.ts'],
//     cache: {},
//     packageCache: {}
//   })
//     .plugin(tsify)
//     .bundle()
//     .pipe(source('bundle.js'))
//     .pipe(gulp.dest("dist"));
// });


// var gulp = require("gulp");
// var browserify = require("browserify");
// var source = require("vinyl-source-stream");
// var watchify = require("watchify");
// var tsify = require("tsify");
// var gutil = require("gulp-util");
// var paths = {
//   pages: ['src/*.html'],
// };
//
// var watchedBrowerify = watchify(browserify({
//   basedir: '.',
//   debug: true,
//   entries: ['src/main.ts'],
//   cache: {},
//   packageCache: {},
// }).plugin(tsify));
//
// gulp.task("copy-html", function () {
//   return gulp.src(paths.pages);
// });
//
// function bundle() {
//   return watchedBrowerify
//     .bundle()
//     .pipe(source('bundle.js'))
//     .pipe(gulp.dest("dist"));
// }
//
// gulp.task("default", ["copy-html"], bundle);
// watchedBrowerify.on("update", bundle);
// watchedBrowerify.on("log", gutil.log);

// var gulp = require("gulp");
// var browserify = require("browserify");
// var source = require('vinyl-source-stream');
// var tsify = require("tsify");
// var uglify = require('gulp-uglify');
// var sourcemaps = require('gulp-sourcemaps');
// var buffer = require('vinyl-buffer');
// var paths = {
//   pages: ['src/*.html']
// };
//
// gulp.task("copy-html", function () {
//   return gulp.src(paths.pages)
//     .pipe(gulp.dest("dist"));
// });
//
// gulp.task("default", ["copy-html"], function () {
//   return browserify({
//     basedir: '.',
//     debug: true,
//     entries: ['src/main.ts'],
//     cache: {},
//     packageCache: {}
//   })
//     .plugin(tsify)
//     .bundle()
//     .pipe(source('bundle.js'))
//     .pipe(buffer())
//     .pipe(sourcemaps.init({loadMaps: true}))
//     .pipe(uglify())
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest("dist"));
// });

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var paths = {
  pages: ['src/*.html']
};

gulp.task('copyHtml', function () {
  return gulp.src(paths.pages)
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copyHtml'], function () {
  return browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .transform('babelify', {
      presets: ['es2015'],
      extensions: ['.ts']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});
