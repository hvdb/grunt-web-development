'use strict';

/** copy configuration. */
module.exports = function (grunt, options) {
    var path = require('path');
    var _options = options.gwd || {};
    var appDirectory = _options.appDirectory || 'app';

    return {
        appRunFiles: {
            expand: true,
            flatten: true,
            cwd: '<%= paths.base %>/' + appDirectory,
            src: '*.js',
            dest: '<%= paths.dist %>'
        },
        img : {
            expand:true,
            flatten:true,
            cwd: '<%= paths.base %>/' + appDirectory + '/img',
            src: '*',
            dest: '<%= paths.dist %>/img'
        },
        configFiles: {
            expand: true,
            cwd: path.join(__dirname, '..'),
            src: ['config/protractor.conf.js', 'config/karma.conf.js', 'config/.jshintrc'],
            dest: '<%= paths.tmp %>'
        }
    };
};