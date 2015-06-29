'use strict';

/** Protractor task configuration. */
module.exports = function (grunt, options) {
    var path = require('path');
    var _options = options.gwd || {};
    
    if(!_options ||!_options.seleniumAddress || !_options.fqn) {
        grunt.fail.fatal('Missing required attributes: seleniumAddress and/or FQN.');
    }
        
    return {
        options: {
            keepAlive: true,
            noColor: false,
            collectorPort: 0,
            debug: false,
            coverageDir: '<%= paths.tmp %>/results/protractor-coverage',
            args: {
                seleniumAddress: _options.seleniumAddress,
                resultsDir: '<%= paths.tmp %>/results/protractor',
                baseUrl: 'http://'+_options.fqn+':<%= connect.options.port %>/',
                specs: [
                    '<%= paths.test %>/protractor/**/*Spec.js'
                ]
            }
        },
        e2e: {
            options: {
                keepAlive: true,
                configFile:  path.join(__dirname, '..','/config/protractor.conf.js')
            }
        }
    };
};
