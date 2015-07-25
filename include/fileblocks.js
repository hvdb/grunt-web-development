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
                        src: ['<%= paths.base %>/' + appDirectory + '/' + sourceDirectory + '/*.module.js', '<%= paths.base %>/' + appDirectory + '/' + sourceDirectory + '/**/*.module.js', '<%= paths.base %>/' + appDirectory + '/' + sourceDirectory + '/*.js', '<%= paths.base %>/' + appDirectory + '/' + sourceDirectory + '/**/*.js']
                    },
                    mocks: {
                        src: ['<%= paths.bowerComponentsDirectory %>/angular-mocks/angular-mocks.js', '<%= paths.base %>/test/mocks/*.js', '<%= paths.base %>/test/mocks/**/*.js']
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
                    mocks: {
                        cwd: '<%= paths.base %>',
                        src: ['<%= paths.relativeBowerComponentsDirectory %>/angular-mocks/angular-mocks.js', 'test/mocks/*.js', 'test/mocks/**/*.js']
                    }
                }
            }
            ]
        }
    }

};
