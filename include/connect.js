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
                        connect().use('/mocks', connect.static(paths.base+'/test/mocks')),
                        connect().use('/', connect.static(paths.base+'/test/protractor'))
                    ];
                }
            }
        }
        // ,
        // dev: {
        //     options: {
        //         open: true,
        //         middleware: function (connect) {
        //             var paths = grunt.config.get('paths');
        //             return [
        //                 connect().use('/', connect.static(paths.dist)),
        //                 connect().use('/mocks', connect.static(paths.base+'/test/mocks')),
        //                 connect().use('/', connect.static(paths.base+'/test/protractor')),
        //                 connect().use('/js', connect.static(paths.instrumented + '/' + paths.src + '/js')),
        //                 connect().use('/lib', connect.static('paths.base/bower_components'),
        //             ];
        //         }
        //     }
     //   }
    };
};