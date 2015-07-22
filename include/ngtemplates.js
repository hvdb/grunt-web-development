'use strict';

module.exports = function(grunt,options) {
    var _options = options.gwd || {};
    var appDirectory = _options.appDirectory || 'app';
    
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
            cwd: '<%= paths.base %>/'+appDirectory,
            src: ['**/*.html', '!*.html'], 
            dest: '<%= paths.tmp %>/templates.js'
        }
    }
};
