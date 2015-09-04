'use strict';

/** Connect task configuration. */
module.exports = function (grunt, options) {

    var _options = options.gwd || {};
    var appDirectory = _options.appDirectory || 'app';
    var sourceDirectory = _options.sourceDirectory || 'js'

    return {
        options: {
            port: 0,
            hostname: _options.fqn || 'localhost',
        },
        dist: {
            options: {
                open: false,
                middleware: function (connect) {
                    var paths = grunt.config.get('paths');
                    return [
                        connect().use('/', connect.static(paths.dist)),
                        connect().use('/mocks', connect.static(paths.base + '/test/mocks')),
                        connect().use('/', connect.static(paths.base + '/test/protractor'))
                    ];
                }
            }
        },
        dev: {
            options: {
                open: false,
                keepalive: false,
                livereload: true,
                middleware: function (connect) {
                    var paths = grunt.config.get('paths');
                    return [
                        connect().use('/', connect.static(paths.dist + '/' )),
                        connect().use('/', connect.static(paths.base + '/' + appDirectory)),
                        connect().use('/test/mocks', connect.static(paths.base + '/test/mocks')),
                        connect().use('/', connect.static(paths.base + '/test/protractor')),
                        connect().use('/' + sourceDirectory, connect.static(paths.tmp + '/instrumented/' + appDirectory + '/' + sourceDirectory)),
                        connect().use('/bower_components', connect.static(paths.bowerComponentsDirectory))
                    ];
                }
            }
        },
        direct: {
            options: {
                open: false,
                keepalive: false,
                livereload: true,
                middleware: function (connect) {
                    var paths = grunt.config.get('paths');
                    return [
                        connect().use('/lib', connect.static(paths.bowerComponentsDirectory)),
                        connect().use('/' + sourceDirectory, connect.static(paths.tmp + '/instrumented/' + appDirectory + '/' + sourceDirectory)),
                        connect().use('/', connect.static(paths.base + '/' + appDirectory)),
                        connect().use('/', connect.static(paths.base + '/test/protractor')),
                        connect().use('/mocks', connect.static(paths.base + '/test/mocks'))
                    ];
                }
            }
        }
    };
};
