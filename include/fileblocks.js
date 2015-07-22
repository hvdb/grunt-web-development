'use strict';

/** Build configuration. */
module.exports = function (grunt, options) {
    var _options = options.gwd || {};
    var appDirectory = _options.appDirectory || 'app';
    var sourceDirectory = _options.sourceDirectory || 'js'
    return {
        gruntWebDevelopment: {
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
        }
    }

};
