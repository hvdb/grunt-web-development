odule.exports = function (grunt, options) {
    var path = require('path');
    var _options = options.gwd || {};

    if (!_options || !_options.seleniumAddress || !_options.fqn) {
        grunt.fail.fatal('Missing required attributes: seleniumAddress and/or FQN.');
    }
    return {
        options: {
            configFile: path.join(__dirname, '..', '/config/protractor.conf.js'),
            keepAlive: false,
            noColor: false,
            args: {
                seleniumAddress: _options.seleniumAddress,
                resultsDir: '<%= paths.tmp %>/results/protractor',
                baseUrl: 'http://' + _options.fqn + ':<%= connect.options.port %>/',
                specs: [
                    '<%= paths.base %>/test/protractor/**/*spec.js'
                ]
            }
        },
        e2e: {
            keeaplive: true,
            configFile: path.join(__dirname, '..', '/config/protractor.conf.js'),
        }
    };
};