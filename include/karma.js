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
    // construct all files needed for running the tests.
    // 1. add dependencies
    // 2. add the sources and test
    var files = [];
    files = files.concat([
        '<%= paths.bowerComponentsDirectory %>/jquery/jquery.js',
        '<%= paths.bowerComponentsDirectory %>/angular/*.min.js',
        '<%= paths.bowerComponentsDirectory %>/angular-mocks/*.js',
        '<%= paths.bowerComponentsDirectory %>/angular-*/*.min.js',
        'test/mocks/**/*.js', // all mock data.
        appDirectory + '/*.module.js', // contains the angular.module('name', [deps]) which is required before using it.
        appDirectory + '/**/*.module.js', // contains the angular.module('name', [deps]) which is required before using it.
        appDirectory + '/*.js', // contains the angular.module('name', [deps]) which is required before using it.
        appDirectory + '/**/*.js', // all other js files.
        appDirectory + '/**/*.html',
        'test/unit/lib/**/*.js', // all utility stuff.
        'test/unit/*.js', // all the tests.
        'test/unit/**/*.js' // all the tests.
    ]);

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
            files: files,
            preprocessors: preprocessors
        },
        unit: {
            configFile: path.join(__dirname, '..', '/config/karma.conf.js')
        }
    };
};