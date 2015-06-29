'use strict';

/** MakeReport task configuration. */
module.exports = function () {
    return {
        src: '<%=paths.tmp%>/results/protractor-coverage/*.json',
        options: {
            type: 'lcov',
            dir: '<%= paths%>/results/protractor-coverage',
            print: 'detail'
        }
    };
};