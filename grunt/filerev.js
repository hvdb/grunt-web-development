'use strict';

/** Filerev task configuration */
module.exports = function () {
    return {
        gruntWebDevelopment: {
            src: ['<%= paths.dist %>/js/**/*.js', '<%= paths.dist %>/css/**/*.css', '<%= paths.dist %>/bless/**/*.css']
        }
    }
};