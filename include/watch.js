'use strict';

/** MakeReport task configuration. */
module.exports = function (grunt, options) {
    var _options = options.gwd || {};
    var appDirectory = _options.appDirectory || 'app';
    var sourceDirectory = _options.sourceDirectory || 'js'

    var htmlPath;
    if (_options.sourceDirectory) {
        htmlPath = appDirectory + '/' + _options.sourceDirectory;
    } else {
        htmlPath = appDirectory + '/partials'
    }

    return {
        scripts: {
            files: ['<%= paths.base %>/' + appDirectory + '/' + sourceDirectory + '/**/*.js', '<%= paths.base %>/' + htmlPath + '/**/*.html'],
            options: { livereload: true }

        }
    };
};