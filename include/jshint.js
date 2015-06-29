'use strict';

/** Jshint task configuration. */
module.exports = function () {
    var path = require('path');
    return {
        options: {
            jshintrc: path.join( __dirname, '..', '/config/.jshintrc'),
            reporter: require('jshint-junit-reporter'),
            reporterOutput: '<%= paths.tmp %>/results/jshint/jshint.xml'
        },
        files: {
            src: ['<%= paths.base %>/app/**/*.js']
        }
    };
};