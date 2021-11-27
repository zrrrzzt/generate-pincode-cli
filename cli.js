#!/usr/bin/env node
'use strict'

const gpc = require('generate-pincode')
const pkg = require('./package.json')
const getHelpText = require('./lib/getHelpText')
const pincodeLength = process.argv[2] || 4
const argv = process.argv

if (argv.indexOf('-h') !== -1 || argv.indexOf('--help') !== -1) {
  console.log(getHelpText())
  process.exit(0)
}

if (
  argv.indexOf('-v') !== -1 || argv.indexOf('--version') !== -1) {
  console.log(pkg.version)
  process.exit(0)
}

console.log(gpc(parseInt(pincodeLength, 10)))
