'use strict';

/** Instrument task configuration. */
module.exports = function () {
    return {
        files: '<%= paths.base %>/app/**/*.js',
        options: {
            basePath: '<%= paths.tmp %>/instrumented',
            lazy: false
        }
    };
};