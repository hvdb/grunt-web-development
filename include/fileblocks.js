'use strict';

/** Build configuration. */
module.exports = function () {
    return {
        gruntWebDevelopment: {
            files: [{
                src: '<%= paths.base %>/app/index.html',
                dest: '<%= paths.dist %>/index.html',
                blocks: {
                    app: {
                        src: '<%= paths.base %>/app/js/**/*.js'
                    },
                    angular: {
                        src: ['<%= paths.bowerComponentsDirectory %>/angular/*.min.js',  '<%= paths.bowerComponentsDirectory %>/angular-*/*.min.js'] 
                    },
                    jquery: {
                        src: '<%= paths.bowerComponentsDirectory %>/jquery/jquery.min.js'
                    },
                    deps: {
                        src: ['<%= paths.bowerComponentsDirectory %>/**/*.min.js', '!<%= paths.bowerComponentsDirectory %>/jquery/jquery.min.js', '!<%= paths.bowerComponentsDirectory %>/angular*/*.min.js']
                    }
                }
            }
            ]
        }
    }

};
