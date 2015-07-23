'use strict';

function GruntWebDevelopment(grunt) {
    var parentcwd = process.cwd();
    process.chdir(__dirname);
    require('load-grunt-tasks')(grunt);
    process.chdir(parentcwd);
    var configurer = require('spectingular-configurer')(grunt, __dirname);

    var setupTasks = [
        'clean',
        'bower-install-simple',
        'fileblocks:gruntWebDevelopment',
        'copy:appRunFiles',
        'copy:img',
        'copy:theGuideStyles'
    ];

    var prepareTests = [
        'jshint',
        'karma'
    ];

    var usemin = [
        'useminPrepare',
        'ngtemplates',
        'concat:generated',
        'ngAnnotate',
        
        'cssmin:generated',
        'uglify:generated',

        'filerev:gruntWebDevelopment',
        'usemin'
    ];

    var postBuildTests = [
        'protractor:e2e'
    ]

    var distTest = [
        'portPick',
        'connect:dist'
    ];

    var serveDist = [
        'portPick',
        'connect:dist:keepalive:open'
    ];

    var localServeTest = [
        'portPick',
        'connect:dev'
    ];

    var postBuildLocalTests = [
        'instrument',
        'protractor_coverage',
        'makeReport'
    ]
    
    var serveLocal = [
        'portPick',
        'connect:dev:keepalive:open'
    ]

    var testAgainstDistFiles = [].concat(setupTasks, prepareTests, usemin, distTest, postBuildTests);
    var serveDistFiles = [].concat(setupTasks, usemin, serveDist);

    var testAgainstLocalFiles = [].concat(setupTasks, prepareTests, localServeTest, postBuildLocalTests);
    var serveLocalFiles = [].concat(setupTasks, serveLocal);

    //Build all and run tests.
    grunt.registerTask('gwd-test-dist', testAgainstDistFiles);
    grunt.registerTask('gwd-serve-dist', serveDistFiles);
    grunt.registerTask('gwd-serve-dev', serveLocalFiles);
    grunt.registerTask('gwd-test-dev', testAgainstLocalFiles);

    return {
        configure: function (options) {
            return configurer.configure(options);
        }
    }
}

module.exports = GruntWebDevelopment;