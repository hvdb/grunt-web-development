'use strict';

module.exports = function (grunt, options) {
    var _options = options.gwd || {};
    var appDirectory = _options.appDirectory || 'app';
    
    var htmlPath;
    if (_options.srcDirectory) {
        htmlPath = appDirectory + '/' + _options.srcDirectory;
    } else {
        htmlPath = appDirectory + '/partials'
    }

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
            cwd: '<%= paths.base %>/' + htmlPath,
            src: ['**/*.html', '!*.html'],
            dest: '<%= paths.tmp %>/templates.js'
        }
    }
};
