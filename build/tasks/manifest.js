var flatmap = require('gulp-flatmap');

module.exports = function (gulp, plugin, config) {
    var sBase = config.sDest;
    gulp.task('manifest', function () {
        return gulp.src(sBase + '/*.html')
            .pipe(flatmap(function(stream, file){
                let fileName = file.relative.split('.')[0];
            
                return stream.pipe(plugin.inject(gulp.src(sBase + '/**/' + fileName + '.manifest.js'), {
                    starttag: '<!-- inject:manifest -->',
                    transform: function (filePath, file) {
                        return '<script>' + file.contents.toString('utf8') + '</script>';
                    }
                }))
            }))
            .pipe(gulp.dest(sBase));
    });
}
