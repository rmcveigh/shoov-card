var shoovWebdrivercss = require('shoov-webdrivercss');

// This can be executed by passing the environment argument like this:
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=chrome mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=ie11 mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=iphone6 mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=firefox mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=edge mocha

var capsConfig = {
  'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '55.0',
    'os' : 'OS X',
    'os_version' : 'Sierra',
    'resolution' : '1024x768'
  },
  'firefox': {
    'browser' : 'Firefox',
    'browser_version' : '50.0',
    'os' : 'OS X',
    'os_version' : 'Sierra',
    'resolution' : '1024x768'
  },
  'ie11': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1024x768'
  },
  'edge': {
    'browser' : 'Edge',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1024x768'
  },
  'iphone6': {
    'browserName': 'iPhone',
    'platform': 'MAC',
    'device': 'iPhone 6'
  }
};

var selectedCaps = process.env.SELECTED_CAPS || undefined;
var caps = selectedCaps ? capsConfig[selectedCaps] : undefined;

var providerPrefix = process.env.PROVIDER_PREFIX ? process.env.PROVIDER_PREFIX + '-' : '';
var testName = selectedCaps ? providerPrefix + selectedCaps : providerPrefix + 'default';

var baseUrl = process.env.BASE_URL ? process.env.BASE_URL : 'https://www.card.com';

var resultsCallback = process.env.DEBUG ? console.log : shoovWebdrivercss.processResults;

module.exports = {
  caps: caps,
  selectedCaps: selectedCaps,
  testName: testName,
  baseUrl: baseUrl,
  resultsCallback: resultsCallback
};
