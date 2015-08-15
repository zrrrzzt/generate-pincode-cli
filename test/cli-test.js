'use strict'

var exec = require('child_process').execFile
var tap = require('tap')
var getHelpText = require('../lib/getHelpText')
var pkgVersion = require('../package.json').version

tap.test('It returns helptext with -h flag', function helpTextWithH (test) {
  exec('./cli.js', ['-h'], function helpTextWithH (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), getHelpText().toString().trim())
      test.end()
    }
  })
})

tap.test('It returns helptext with --help flag', function helpTextWithH (test) {
  exec('./cli.js', ['--help'], function helpTextWithH (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), getHelpText().toString().trim())
      test.end()
    }
  })
})

tap.test('It returns version with -v flag', function versionWithV (test) {
  exec('./cli.js', ['-v'], function versionWithV (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), pkgVersion)
      test.end()
    }
  })
})

tap.test('It returns version with --version flag', function versionWithV (test) {
  exec('./cli.js', ['--version'], function versionWithV (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), pkgVersion)
      test.end()
    }
  })
})

tap.test('It generates a pincode with length 4 as default',
function cliDefault (test) {
  exec('./cli.js', function getDefault (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim().length, 4)
      test.end()
    }
  })
})

tap.test('It generates a pincode with correct length',
  function cliDefault (test) {
    exec('./cli.js', ['6'], function getDefault (error, stdout, stderr) {
      if (error) {
        console.error(stderr.toString())
        throw error
      } else {
        test.equal(stdout.toString().trim().length, 6)
        test.end()
      }
    })
  })
