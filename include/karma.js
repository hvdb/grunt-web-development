'use strict';

/** Karma task configuration. */
module.exports = function (grunt, options) {
    var _options = options.gwd || {};
    var appDirectory = _options.appDirectory || 'app';
    var sourceDirectory = _options.sourceDirectory || 'js';
    var path = require('path');
    
    
    var htmlPath;
    if (_options.srcDirectory) {
        htmlPath = appDirectory + '/' + _options.srcDirectory;
    } else {
        htmlPath = appDirectory + '/partials'
    }
    

    var sourceDirHtml = htmlPath +'/**/*.html';
    var sourceDirJs = appDirectory + '/' + sourceDirectory + '/app/**/*.js';

    var preprocessors = {};
    preprocessors[sourceDirHtml] = 'html2js'
    preprocessors[sourceDirJs] = 'coverage'

    return {
        options: {
            singleRun: true,
            reporters: ['progress', 'coverage', 'junit'],
            basePath: '<%= paths.base %>/',
            preprocessors: preprocessors
        },
        unit: {
            configFile: '<%= paths.tmp %>/config/karma.conf.js'
        }
    };
};