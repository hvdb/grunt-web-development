var grunt = require('grunt');
var path = require('path');

module.exports = function (config) {
    
    var paths = grunt.config.get('paths');
    
    // construct all files needed for running the tests.
    // 1. add dependencies
    // 2. add the sources and test
    var files = [];
    files = files.concat([
        'bower_components/jquery/jquery.js',
        'bower_components/angular/*.min.js',
        'bower_components/**/*.min.js',
        'test/mocks/**/*.js', // all mock data.
        'app/js/*.js', // contains the angular.module('name', [deps]) which is required before using it.
        'app/js/**/*.js', // all other js files.
        'test/unit/lib/**/*.js', // all utility stuff.
        'test/unit/*.js', // all the tests.
        'test/unit/**/*.js' // all the tests.
    ]);

    config.set({
            basePath: paths.base,
            frameworks: ['jasmine'],
            files: files,
            exclude: [
                'app/js/**/generated/**/*.js', // assume that generated javascript will be placed in a directory named generated.
                'app/partials**/generated/**/*.html' // assume that generated partials will be placed in a directory named generated.
            ],
            plugins: [
                'karma-jasmine',
                'karma-junit-reporter',
                'karma-coverage',
                'karma-phantomjs-launcher',
                'karma-ng-html2js-preprocessor'
            ],
            preprocessors: {
                'app/**/*.html': 'html2js',
                'app/**/*.js': 'coverage'
            },
            ngHtml2JsPreprocessor: {
                stripPrefix: 'src/'
            },
            reporters: ['progress', 'coverage', 'junit'],
            junitReporter: {
                outputFile: '.tmp/results/karma/results.xml'
            },
            coverageReporter: {
                reporters: [
                    {type: 'html', dir: '.tmp/results/karma/coverage'},
                    {type: 'json', dir: '.tmp/results/karma/coverage'}
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
