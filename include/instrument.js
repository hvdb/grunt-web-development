'use strict';

/** Instrument task configuration. */
module.exports = function (grunt, options) {
    var _options = options.gwd || {};
    var appDirectory = _options.appDirectory || 'app';
    var sourceDirectory = _options.sourceDirectory || 'js'
    return {
        files: '<%= paths.base %>/' + appDirectory + '/' + sourceDirectory + '/**/*.js',
        options: {
            basePath: '<%= paths.tmp %>/instrumented',
            lazy: false
        }
    };
};