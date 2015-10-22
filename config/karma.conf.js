var grunt = require('grunt');
var path = require('path');

module.exports = function (config) {
    

    var files = [];
    files = files.concat([
    // bower:
    // endbower
        'test/mocks/**/*.js', // all mock data.
        'src/app/**/*.module.js', // contains the angular.module('name', [deps]) which is required before using it.
        'src/app/**/*.js', // contains the angular.module('name', [deps]) which is required before using it.
        'app/js/*.js', // contains the angular.module('name', [deps]) which is required before using it.
        'spp/js/**/*.js', // all other js files.
        'test/unit/lib/**/*.js', // all utility stuff.
        'test/unit/*.js', // all the tests.
        'test/unit/**/*.js' // all the tests.
    ]);

    config.set({

        frameworks: ['jasmine'],
        files: files,
        plugins: [
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-ng-html2js-preprocessor'
        ],
        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/',
            moduleName: 'templates'
        },
        reporters: ['progress', 'coverage', 'junit'],
        junitReporter: {
            outputFile: '.tmp/results/karma/results.xml'
        },
        coverageReporter: {
            reporters: [
                { type: 'html', dir: '.tmp/results/karma/coverage' },
                { type: 'json', dir: '.tmp/results/karma/coverage' }
            ]
        },
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        captureTimeout: 10000,
        singleRun: false
    }
        );
};
