'use strict';

/** Filerev task configuration */
module.exports = function () {
    return {
        gruntWebDevelopment: {
            src: '<%= paths.dist %>/js/**/*.js'
        }
    }
};