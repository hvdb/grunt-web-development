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
        'copy:appRunFiles',
        'copy:img',
        'copy:theGuideStyles'
    ];

    var setupTaskDist = [
        'fileblocks:gruntWebDevelopmentDist',
    ]

    var setupTaskDev = [
        'fileblocks:gruntWebDevelopmentDev',
    ]

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


    var serveDirect = [
        'portPick',
        'connect:direct:keepalive:open'
    ];


    var serveDirectTest = [
        'portPick',
        'connect:direct'
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

    var testAgainstDistFiles = [].concat(setupTasks, setupTaskDist, prepareTests, usemin, distTest, postBuildTests);
    var serveDistFiles = [].concat(setupTasks, setupTaskDist, usemin, serveDist);

    var testAgainstLocalFiles = [].concat(setupTasks, setupTaskDev, prepareTests, localServeTest, postBuildLocalTests);
    var serveLocalFiles = [].concat(setupTasks, setupTaskDev, serveLocal);
    var serveDirectFiles = [].concat(setupTasks, serveDirect)
    var testDirectFiles = [].concat(setupTasks, prepareTests, serveDirectTest, postBuildLocalTests)

    //Build all and run tests.
    grunt.registerTask('gwd-test-dist', testAgainstDistFiles);
    grunt.registerTask('gwd-serve-dist', serveDistFiles);
    grunt.registerTask('gwd-serve-dev', serveLocalFiles);
    grunt.registerTask('gwd-test-dev', testAgainstLocalFiles);
    grunt.registerTask('gwd-serve-direct', serveDirectFiles)
    grunt.registerTask('gwd-test-direct', testDirectFiles)

    return {
        configure: function (options) {
            return configurer.configure(options);
        }
    }
}

module.exports = GruntWebDevelopment;