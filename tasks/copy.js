'use strict';

module.exports = function (gulp, config, plugins) {
    return function () {
        config.copy.items.forEach(function(item) {
            gulp.src(item.src)
                .pipe(gulp.dest(item.dest) );
        });
    }
};
