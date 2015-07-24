'use strict';

/** MakeReport task configuration. */
module.exports = function (grunt, options) {
    var _options = options.gwd || {};
    var appDirectory = _options.appDirectory || 'app';
    var sourceDirectory = _options.sourceDirectory || 'js'

    var htmlPath;
    if (_options.srcDirectory) {
        htmlPath = appDirectory + '/' + _options.srcDirectory;
    } else {
        htmlPath = appDirectory + '/partials'
    }

    return {
        scripts: {
            files: ['<%= config.paths.base %>/' + appDirectory + '/' + sourceDirectory + '/**/*.js', '<%= config.paths.base %>/' + htmlPath + '**/*.html'],
        }
    };
};