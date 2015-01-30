//
// Test Spec
//
// ==========================================================================
'use strict';

jasmine.getFixtures().fixturesPath = 'tmpl/inc';

describe('Sample Test', function () {

  beforeEach( function () {
    loadFixtures('home.html');
  });

  it('works like a charm', function () {

    expect(true).toBeTruthy();
  });
});
