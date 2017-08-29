exports.config = {
    
    specs: [
        './test/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: "firefox",
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
    // services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 30000,
    },
}
