'use strict';

/** Build configuration. */
module.exports = function (grunt, options) {
    var _options = options.gwd || {};
    var appDirectory = _options.appDirectory || 'app';
    var sourceDirectory = _options.sourceDirectory || 'js'
    return {
        gruntWebDevelopmentDist: {
            files: [{
                src: '<%= paths.base %>/' + appDirectory + '/index.html',
                dest: '<%= paths.dist %>/index.html',
                blocks: {
                    app: {
                        src: ['<%= paths.base %>/' + appDirectory + '/' + sourceDirectory + '/*.module.js', '<%= paths.base %>/' + appDirectory + '/' + sourceDirectory + '/**/*.module.js', '<%= paths.base %>/' + appDirectory + '/' + sourceDirectory + '/*.js',  '<%= paths.base %>/' + appDirectory + '/' + sourceDirectory + '/**/*.js']
                    },
                    angular: {
                        src: ['<%= paths.bowerComponentsDirectory %>/angular/*.min.js', '<%= paths.bowerComponentsDirectory %>/angular-*/*.min.js']
                    },
                    jquery: {
                        src: '<%= paths.bowerComponentsDirectory %>/jquery/jquery.min.js'
                    },
                    deps: {
                        src: ['<%= paths.bowerComponentsDirectory %>/**/*.min.js', '!<%= paths.bowerComponentsDirectory %>/jquery/**/*.min.js', '!<%= paths.bowerComponentsDirectory %>/angular*/*.min.js']
                    },
                    mocks: {
                        src: ['<%= paths.bowerComponentsDirectory %>/angular-mocks/angular-mocks.js', '<%= paths.base %>/test/mocks/*.js', '<%= paths.base %>/test/mocks/**/*.js']
                    },
                    theGuideStyles: {
                        src: '<%= paths.bowerComponentsDirectory %>/the-guide-styles/css/the-guide-styles-responsive.css'
                    }
                }
            }
            ]
        },
        gruntWebDevelopmentDev: {
            files: [{
                src: '<%= paths.base %>/' + appDirectory + '/index.html',
                dest: '<%= paths.dist %>/index.html',
                blocks: {
                    app: {
                        cwd: '<%= paths.base %>/' + appDirectory + '/',
                        src: [sourceDirectory + '/*.module.js', sourceDirectory + '/**/*.module.js', sourceDirectory + '/*.js', sourceDirectory + '/**/*.js']
                    },
                    angular: {
                        cwd: '<%= paths.base %>',
                        src: ['<%= paths.relativeBowerComponentsDirectory %>/angular/*.min.js', '<%= paths.relativeBowerComponentsDirectory %>/angular-*/*.min.js']
                    },
                    jquery: {
                        cwd: '<%= paths.base %>',
                        src: '<%= paths.relativeBowerComponentsDirectory %>/jquery/jquery.min.js'
                    },
                    deps: {
                        cwd: '<%= paths.base %>',
                        src: ['<%= paths.relativeBowerComponentsDirectory %>/**/*.min.js', '!<%= paths.relativeBowerComponentsDirectory %>/jquery/**/*.min.js', '!<%= paths.relativeBowerComponentsDirectory %>/angular*/*.min.js']
                    },
                    mocks: {
                        cwd: '<%= paths.base %>',
                        src: ['<%= paths.relativeBowerComponentsDirectory %>/angular-mocks/angular-mocks.js', 'test/mocks/*.js', 'test/mocks/**/*.js']
                    },
                    theGuideStyles: {
                        cwd: '<%= paths.base %>',
                        src: '<%= paths.relativeBowerComponentsDirectory %>/the-guide-styles/css/the-guide-styles-responsive.css'
                    }
                }
            }
            ]
        }
    }

};
