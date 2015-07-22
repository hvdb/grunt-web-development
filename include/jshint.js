'use strict';

/** Jshint task configuration. */
module.exports = function (grunt, options) {
    var _options = options.gwd || {};
    var appDirectory = _options.appDirectory || 'app';
    var sourceDirectory = _options.sourceDirectory || 'js'
    var path = require('path');
    return {
        options: {
            jshintrc: path.join(__dirname, '..', '/config/.jshintrc'),
            reporter: require('jshint-junit-reporter'),
            reporterOutput: '<%= paths.tmp %>/results/jshint/jshint.xml'
        },
        files: {
            src: ['<%= paths.base %>/' + appDirectory + '/' + sourceDirectory + '/**/*.js']
        }
    };
};