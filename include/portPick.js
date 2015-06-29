'use strict';

/** PortPick task configuration. */
module.exports = function (grunt) {
    return {
        options: {
            port: 4000
        },
        connect: {
            targets: [
                'connect.options.port'
            ]
        },
        protractor: {
            targets: [
                'protractor_coverage.options.collectorPort'
            ]
        }
    };
};