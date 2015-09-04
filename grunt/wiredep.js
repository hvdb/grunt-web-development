'use strict';

/** MakeReport task configuration. */
module.exports = function (grunt, options) {
    var _options = options.gwd || {};
    var appDirectory = _options.appDirectory || 'app';

    var htmlPath;
    if (_options.sourceDirectory) {
        htmlPath = appDirectory + '/' + _options.sourceDirectory;
    } else {
        htmlPath = appDirectory + '/partials'
    }

    return {
        html: {
            ignorePath: '../../',
            devDependencies: true,
            src: ['<%= paths.base %>/' + appDirectory + '/*.html', '<%= paths.test %>/protractor/**/*.html']
        },
        karmaConfig: {
            ignorePath: '../../',
            devDependencies: true,
            src: '<%= paths.tmp %>/config/karma.conf.js',
            fileTypes: {
                js: {
                    block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
                    detect: {
                        js: /'(.*\.js)'/gi
                    },
                    replace: {
                        js: '\'{{filePath}}\','
                    }
                }
            }
        }
    };
};