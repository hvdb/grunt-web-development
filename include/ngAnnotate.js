'use strict';

module.exports = function (grunt) {
    return {
        options: {
            singleQuotes: true
        },
        module: {
            files: {
                '<%= paths.dist %>/js/app.min.js': '<%= paths.dist %>/js/app.min.js'
            }
        }
    };
};
