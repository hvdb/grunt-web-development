var grunt = require('grunt');
var path = require('path');

module.exports = function (config) {
    
    config.set({

            frameworks: ['jasmine'],
            
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
