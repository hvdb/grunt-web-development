'use strict';

/** copy configuration. */
module.exports = function () {
    return {
         appRunFiles: {
            expand: true,
            flatten: true, 
            cwd: '<%= paths.base %>/app',
            src: '*.js',
            dest: '<%= paths.dist %>'
        }
    };
};