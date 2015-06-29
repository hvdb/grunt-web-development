'use strict';

/** Connect task configuration. */
module.exports = function (grunt, options) {

    var _options = options.gwd || {};

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
                        connect().use('/mocks', connect.static(paths.base+'/test/mocks'))
                    ];
                }
            }
        },
        dev: {
            options: {
                open: true,
                middleware: function (connect) {
                    var config = grunt.config.get('config');
                    return [
                        // connect().use('/lib', connect.static('<%= paths.base %>/lib'),
                        // //connect().use('/js', connect.static(config.paths.instrumented + '/' + config.paths.src + '/js')),
                        // connect().use('/', connect.static(config.paths.src)),
                        // connect().use('/', connect.static(config.paths.test + '/protractor'))
                    ];
                }
            }
        }
    };
};