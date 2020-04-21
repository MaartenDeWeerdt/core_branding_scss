// -------------------------------------------------------------------
// :: COPY
// -------------------------------------------------------------------
// - https://www.npmjs.org/package/gulp-rename
// - https://www.npmjs.com/package/merge-stream

var gulp = require('gulp');

var rename = require('gulp-rename'),
    merge = require('merge-stream');

gulp.task('copy', function() {

    var fontsStream = gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/assets/fonts'));

    var iconsStream = gulp.src('src/icons/**/*')
        .pipe(gulp.dest('dist/assets/icons'));

    var stylesStream = gulp.src(['src/styles/**/*', '!src/styles/**/styleguide.scss'])
        .pipe(gulp.dest('dist/assets/styles'));

    var imagesStream = gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/assets/images'));

    return merge(fontsStream, iconsStream, stylesStream, imagesStream);

});

gulp.task('copy:docs', function() {

    var tmpStream = gulp.src('.tmp/**/*.html')
        .pipe(gulp.dest('docs'));

    var imagesStream = gulp.src('src/images/**/*')
        .pipe(gulp.dest('docs/images'));

    var iconsStream = gulp.src('src/icons/**/*')
        .pipe(gulp.dest('docs/icons'));

    var fontsStream = gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('docs/fonts'));

    return merge(tmpStream, imagesStream, fontsStream);

});

gulp.task('copy:travis', function() {
    return gulp.src('dist/**/*')
        .pipe(gulp.dest('dist/travis'));
});
