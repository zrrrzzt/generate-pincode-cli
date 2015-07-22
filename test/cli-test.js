'use strict';

var exec = require('child_process').execFileSync;
var tap = require('tap');
var getHelpText = require('../lib/getHelpText');
var pkgVersion = require('../package.json').version;

tap.test('It returns helptext with -h flag', function helpTextWithH(test) {
  var helpText = exec('./cli.js', ['-h']).toString().trim();
  test.equal(helpText, getHelpText().toString().trim());
  test.end();
});

tap.test('It returns helptext with --help flag', function helpTextWithH(test) {
  var helpText = exec('./cli.js', ['--help']).toString().trim();
  test.equal(helpText, getHelpText().toString().trim());
  test.end();
});

tap.test('It returns version with -v flag', function versionWithV(test) {
  var version = exec('./cli.js', ['-v']).toString().trim();
  test.equal(pkgVersion, version);
  test.end();
});

tap.test('It returns version with --version flag', function versionWithV(test) {
  var version = exec('./cli.js', ['--version']).toString().trim();
  test.equal(pkgVersion, version);
  test.end();
});

tap.test('It generates a pincode with length 4 as default',
  function cliDefault(test) {
  var pin = exec('./cli.js').toString().trim();
  test.equal(pin.length, 4);
  test.end();
});

tap.test('It generates a pincode with correct length',
  function cliDefault(test) {
  var pin = exec('./cli.js', ['6']).toString().trim();
  test.equal(pin.length, 6);
  test.end();
});