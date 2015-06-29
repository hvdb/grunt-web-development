'use strict';

/** Useminprepare task configuration */
module.exports = function () {
    return {
        html: ['<%= paths.dist %>/*.html'],
        options: {
            dest: '<%= paths.dist %>',
            root: '/'
        }
    }
};
