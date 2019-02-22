var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var gulpSass = require('gulp-sass');

var paths = {
    resources: [
        'bower_components/font-awesome/webfonts/**/*.*'
    ],
    html: [
        'app/**/*.html'
    ],
    sass: [
        'app/styles/styles.scss'
    ],
    sassWatch: [
        'app/styles/**/*.scss'
    ],
    js: [
        'bower_components/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'app/app.mdl.js',
        'app/app.run.js',
        'app/app.conf.js',
        'app/core/index.ctrl.js',
        'app/core/home/home.ctrl.js',
        'app/core/intention/intention.ctrl.js',
        'app/core/preachs/preachs.ctrl.js',
        'app/history/history.ctrl.js',
        'app/contact/contact.ctrl.js'
    ],
    jsWatch: [
        'app/**/*.js'
    ]
}

gulp.task('resources', function() {
    gulp.src(paths.resources)
            .pipe(gulp.dest('dist/webfonts'));
});

gulp.task('html', function() {
    gulp.src(paths.html)
            .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
    gulp.src(paths.sass)
            .pipe(gulpSass())
            .pipe(gulpConcat('styles.css'))
            .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
    gulp.src(paths.js)
            .pipe(gulpConcat('scripts.js'))
            .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch(paths.html, ['html'])
            .on('change', browserSync.reload);
    gulp.watch(paths.sassWatch, ['sass'])
            .on('change', browserSync.stream);
    gulp.watch(paths.jsWatch, ['js'])
            .on('change', browserSync.reload);
});

gulp.task('serve', function() {
    browserSync.init({
        server: 'dist'
    });
});

gulp.task('default', ['resources', 'html', 'sass', 'js', 'watch', 'serve']);
