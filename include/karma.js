'use strict';

/** Karma task configuration. */
module.exports = function () {
    var path = require('path');
    return {
        options: {
            singleRun: true,
            reporters: ['progress', 'coverage', 'junit']
        },
        unit: {
            configFile: path.join(__dirname, '..','/config/karma.conf.js')
        }
    };
};