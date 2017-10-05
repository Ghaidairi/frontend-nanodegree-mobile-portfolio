var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');

gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/min-js'));
});

gulp.task('styles', function(){
  return gulp.src('./src/css/*.css')
  .pipe(minifyCSS())
  .pipe(gulp.dest('dist/min-css'));
});

gulp.task('images', function(){
	gulp.src('src/img/*.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img/min-img'));
});


gulp.task('default', ['scripts', 'styles', 'images']);
