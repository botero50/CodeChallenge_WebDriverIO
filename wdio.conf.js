var CustomReporter = require('./reporter/my.custom.reporter');
exports.config = {
    reporters: [CustomReporter],
    reporterOptions: {
        outputDir: './'
    },
    specs: [
        './test/**/*.js'
    ],
    splitTestsBetweenCapabilities: true,
    maxSessions: 30,
    maxInstances: 10,
    capabilities: [{
        maxInstances: 3,
        browserName: "firefox"
    }, {
        maxInstances: 3,
        browserName: 'chrome'
    }],
    sync: true,
    logLevel: 'command',
    coloredLogs: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'http://webdriver.io',
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 30000,
    },
    /**
     * hooks
     */
    onPrepare: function() {
        console.log('Starting Scripts');
    },
    onComplete: function() {
        console.log('Done');
    }
}
