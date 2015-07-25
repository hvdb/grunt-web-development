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
        'copy:theGuideStyles',
        'copy:configFiles',
        'wiredep'
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
        'connect:direct',
        'watch'
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
        'connect:dev:keepalive:open',
        'watch'
    ]

    var testAgainstNwDistFiles = [].concat(setupTasks, setupTaskDist, prepareTests, usemin, distTest, postBuildTests);
    var serveDistNwFiles = [].concat(setupTasks, setupTaskDist, usemin, serveDist);

    var testAgainstLocalFiles = [].concat(setupTasks, setupTaskDev, prepareTests, localServeTest, postBuildLocalTests);
    var serveLocalFiles = [].concat(setupTasks, setupTaskDev, serveLocal);
    
    
    var serveDirectFiles = [].concat(setupTasks, serveDirect)
    var testDirectFiles = [].concat(setupTasks, prepareTests, serveDirectTest, postBuildLocalTests)
    var testAgainstDistFiles = [].concat(setupTasks, prepareTests, usemin, distTest, postBuildTests);
    var serveDistFiles = [].concat(setupTasks, usemin, serveDist);

    //Build all and run tests.
    grunt.registerTask('gwd-test-nw-dist', testAgainstNwDistFiles);
    grunt.registerTask('gwd-serve-nw-dist', serveDistNwFiles);
    
    grunt.registerTask('gwd-serve-nw', serveLocalFiles);
    grunt.registerTask('gwd-test-nw', testAgainstLocalFiles);
    
    grunt.registerTask('gwd-serve', serveDirectFiles)
    grunt.registerTask('gwd-test', testDirectFiles)
    
    grunt.registerTask('gwd-test-dist', testAgainstDistFiles);
    grunt.registerTask('gwd-serve-dist', serveDistFiles);
    
    
    return {
        configure: function (options) {
            return configurer.configure(options);
        }
    }
}

module.exports = GruntWebDevelopment;