"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const cp = require("child_process");
const cssnano = require("cssnano");
const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");

// CSS task
function css() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./css/"));
}

// Watch files
function watchFiles() {
  gulp.watch("./scss/**/*.scss", css);
}

// define complex tasks
const build = gulp.series(gulp.parallel(css));
const watch = gulp.parallel(watchFiles);

// export tasks
exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = build;

// gulpfile taken and adapted from https://gist.github.com/jeromecoupe/0b807b0c1050647eb340360902c3203a