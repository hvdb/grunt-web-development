'use strict';

module.exports = function (grunt) {
    return {
        options: {
            singleQuotes: true
        },
        module: {
            files: {
                '<%= paths.tmp %>/concat/js/app.min.js': '<%= paths.tmp %>/concat/js/app.min.js'
            }
        }
    };
};
