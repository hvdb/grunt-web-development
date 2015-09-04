'use strict';

/** Default Usemin task configuration */
module.exports = function () {
    return {
        html: '<%= paths.dist %>/*.html',
        options: {
            assetsDirs: '<%= paths.dist %>'
        }
    }
};
