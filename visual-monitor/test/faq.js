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

  it('should show the main region of the faq page',function(done) {
    client
      .url(config.baseUrl + '/faq?nw=mc&b=bancorp')
      .webdrivercss(config.testName + '.faq', {
        name: 'faq',
        elem: '#main',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.selectedCaps == 'chrome' ? [640, 960, 1200] : undefined,
      }, config.resultsCallback)
      .call(done);
  });
});
