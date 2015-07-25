'use strict';

/** Protractor task configuration. */
module.exports = function (grunt, options) {
    var path = require('path');
    var _options = options.gwd || {};

    if (!_options.directConnect && (!_options || !_options.seleniumAddress || !_options.fqn)) {
        grunt.fail.fatal('Missing required attributes: seleniumAddress and/or FQN.');
    }

    return {
        options: {
            keepAlive: true,
            noColor: false,
            collectorPort: 0,
            debug: false,
          //  coverageDir: '<%= paths.tmp %>/results/protractor-coverage',
            args: {
                directConnect: _options.directConnect,
                seleniumAddress: _options.seleniumAddress,
               // resultsDir: '<%= paths.tmp %>/results/protractor',
                baseUrl: 'http://' + _options.fqn + ':<%= connect.options.port %>/',
                specs: [
                    '<%= paths.base %>/test/protractor/**/*spec.js'
                ],

                onPrepare: function () {
                    require('jasmine-reporters');
                    mkdirp = require('mkdirp')
                    // Store the name of the browser that's currently being used.
                    browser.getCapabilities().then(function (caps) {
                        browser.params.browser = caps.get('browserName');

                        var directory = path.resolve('<%= paths.tmp %>/results/protractor/' + browser.params.browser);
                        mkdirp(directory, function (err) {
                            if (err) {
                                throw new Error('Could not create directory ' + directory);
                            }
                        });

                        var ScreenShotReporter = require('protractor-screenshot-reporter');
                        jasmine.getEnv().addReporter(new ScreenShotReporter({
                            baseDirectory: "<%= paths.tmp %>/results/protractor/screenshots", takeScreenShotsOnlyForFailedSpecs: true
                        }));


                        jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(directory, true, true));
                        browser.driver.manage().window().maximize();
                        browser.manage().timeouts().setScriptTimeout(allScriptsTimeout);
                    });


                }

            }
        },
        e2e: {
            options: {
                keepAlive: true,
                configFile: '<%= paths.tmp %>/config/protractor.conf.js'
            }
        }
    };
};