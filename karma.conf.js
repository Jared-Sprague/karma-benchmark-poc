module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'benchmark',
      'detectBrowsers'
    ],

    plugins: [
      'karma-chrome-launcher',
      'karma-edge-launcher',
      'karma-firefox-launcher',
      'karma-ie-launcher',
      'karma-safari-launcher',
      'karma-detect-browsers',
      'karma-benchmark',
      'karma-benchmark-reporter',
    ],

    detectBrowsers: {
      usePhantomJS: false,  // don't use because it's no longer maintained

      // post processing of browsers list
      postDetection: function(availableBrowser) {
        let browsers = [];

        // Filter out nightly and dev builds
        if (availableBrowser.indexOf('Chrome') >-1 )  browsers.push('Chrome');
        if (availableBrowser.indexOf('Firefox') >-1 ) browsers.push('Firefox');
        if (availableBrowser.indexOf('Safari') >-1 )  browsers.push('Safari');
        if (availableBrowser.indexOf('Edge') >-1 )    browsers.push('Edge');
        if (availableBrowser.indexOf('IE') >-1 )      browsers.push('IE');

        return browsers;
      }
    },

    // list of files / patterns to load in the browser
    files: [
      // 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js',
      'libraries/p5.js',
      'src/util.js', // Code to be benchmarked
      // 'src/test.js',
      'bench/**/*.bench.js'
    ],

    // test results reporter to use
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'benchmark',
    ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
