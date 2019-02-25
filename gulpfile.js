var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

gulp.task('browserSync', function() {
  	browserSync.init({
    	server: {
      		baseDir: 'dist'
    	},
  	})
})

gulp.task('useref', function(){
  	return gulp.src('app/*.html')
    	.pipe( useref() )
    	.pipe( gulpIf('*.js', uglify()) )
    	.pipe( gulpIf('*.css', cssnano()) )
    	.pipe( gulp.dest('dist') )
    	.pipe(browserSync.reload({
	      stream: true
	    }))
});

gulp.task('js-uglify', function(){
  	return gulp.src('app/js/jquery.paginate.js')
    	.pipe(gulpIf('*.js', uglify()))
    	.pipe(gulp.dest('dist/js'))
    	.pipe(browserSync.reload({
	      stream: true
	    }))
});

gulp.task('css-uglify', function(){
  	return gulp.src('app/css/jquery.paginate.css')
    	// Minifies only if it's a CSS file
	    .pipe(gulpIf('*.css', cssnano()))
	    .pipe(gulp.dest('dist/css'))
	    .pipe(browserSync.reload({
	      stream: true
	    }))
});


// gulp.task('watch', ['browserSync'], function (){
//   	gulp.watch('app/css/*.css', ['min-concat']); 
//   	gulp.watch('app/js/*.js', ['min-concat']); 
//   	gulp.watch('app/*.html', browserSync.reload); 
// })

// set up watcher
/* gulp.watch('app/*.html', ['browserSync']); 
gulp.watch('app/css/*.css', ['browserSync']); 
gulp.watch('app/js/*.js', ['browserSync']); 
*/

