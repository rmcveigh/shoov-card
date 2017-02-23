'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');
var config = require("../config.js");

describe('Visual monitor testing', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, config.caps);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

  it('should show the home page header',function(done) {
    client
      .url(config.baseUrl + '?nw=mc&b=bancorp')
      .webdrivercss(config.testName + '.homepage-header', {
        name: 'header',
        elem: 'header',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.selectedCaps == 'chrome' ? [640, 960, 1200] : undefined,
      }, config.resultsCallback)
      .call(done);
  });

  it('should show the home page footer',function(done) {
    client
      .url(config.baseUrl + '?nw=mc&b=bancorp')
      .webdrivercss(config.testName + '.homepage-footer', {
        name: 'footer',
        elem: 'footer',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.selectedCaps == 'chrome' ? [640, 960, 1200] : undefined,
      }, config.resultsCallback)
      .call(done);
  });
});
