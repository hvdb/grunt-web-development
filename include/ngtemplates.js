'use strict';

module.exports = function(grunt) {
	var bower = grunt.file.readJSON('bower.json');
    return {
        module: {
            options: {
                module: bower.name,
                usemin: 'js/app.min.js',
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true
                }
            },
            cwd: '<%= paths.base %>/app',
            src: ['**/*.html', '!*.html'], 
            dest: '<%= paths.tmp %>/templates.js'
        }
    }
};
