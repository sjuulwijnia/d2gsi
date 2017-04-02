const gulp = require('gulp');
const gulpPlumber = require('gulp-plumber');
const gulpSequence = require('run-sequence');
const gulpWatch = require('gulp-watch');

const SRC_CLIENT = './client/src';
const SRC_ELECTRON = './electron';
const BLD_CLIENT = './build/client';
const BLD_ELECTRON = './build';

/**
 * DISTRIBUTING
 * client
 */
gulp.task('build:client', (done) => {
	gulpSequence('build:client:images', () => {
		done();
	});
});

gulp.task('build:client:images', () => {
	gulp.src(SRC_CLIENT + "/images/**/*.*")
		.pipe(gulp.dest(BLD_CLIENT + "/images"));
});

/**
 * DISTRIBUTING
 * client
 */
gulp.task('build:electron', () => {
	gulp.src(SRC_ELECTRON + "/**/*.*")
		.pipe(gulp.dest(BLD_ELECTRON));
});

/**
 * DEVELOPING
 */
gulp.task('develop:electron', () => {
	gulpWatch(SRC_ELECTRON + "/**/*.*")
		.pipe(gulpPlumber())
		.pipe(gulp.dest(BLD_ELECTRON));
});
