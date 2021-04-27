var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var manifest = require('./assets/manifest.json');
var config = manifest.config;

// Scripts Task
// Combine & Minify JS
gulp.task('scripts_combine_min', function () {

	gulp.src(['assets/js/site.js', 'assets/js/mobile.js'])
		.pipe(plumber())
		.pipe(concat('site-min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js/min'))
		.pipe(reload({ stream: true }))

});

// Minify JS
gulp.task('scripts_min', function () {

	gulp.src(['assets/js/*.js', '!assets/js/site.js', '!assets/js/mobile.js'])
		.pipe(plumber())
		.pipe(uglify())
		.pipe(rename({ suffix: '-min' }))
		.pipe(gulp.dest('js/min'))
		.pipe(reload({ stream: true }))

});

// Styles Task

// Compile main styles.
gulp.task('styles', function(){
	return gulp.src('assets/scss/style.scss')
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest(''))
	.pipe(reload({ stream: true }))
});

// Compile partial styles.
gulp.task('partial_styles', function(){
	return gulp.src([
		'assets/scss/*.scss',
		'!assets/scss/style.scss',
		'assets/edd/scss/*.scss',
		'assets/lifterlms/scss/*.scss',
		'assets/woocommerce/scss/*.scss'
	])
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(rename({ suffix: '-min' }))
	.pipe(gulp.dest('css/min'))
	.pipe(reload({ stream: true }))
});

// Browser Sync
gulp.task('serve', function() {
	browserSync.init( {
		proxy: "http://" + config.url,
		host: config.host,
		notify: false,
	});
});

// Watch Tasks
gulp.task('watch', function() {

	// Styles & Scripts to be watched
	gulp.watch(['assets/js/site.js', 'assets/js/mobile.js'], ['scripts_combine_min']);
	gulp.watch(['assets/js/*.js', '!assets/js/site.js', '!assets/js/mobile.js'], ['scripts_min']);

	gulp.watch(['assets/scss/style.scss', 'assets/scss/**/*.scss'], ['styles']);
	
	gulp.watch(
		[
			'assets/scss/*.scss',
			'!assets/scss/style.scss',
			'assets/scss/**/*.scss',
			
			'assets/edd/scss/*.scss',
			'assets/edd/scss/**/*.scss',
			
			'assets/lifterlms/scss/*.scss',
			'assets/lifterlms/scss/**/*.scss',
			
			'assets/woocommerce/scss/*.scss',
			'assets/woocommerce/scss/**/*.scss'
		],
		['partial_styles']
	);

	// browserSync
	gulp.watch('**/*.php').on('change', reload);
})

// Gulp
gulp.task('default', ['scripts_combine_min', 'scripts_min', 'styles', 'partial_styles', 'watch', 'serve']);
