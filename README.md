[![Build Status](https://travis-ci.org/zrrrzzt/generate-pincode-cli.svg?branch=master)](https://travis-ci.org/zrrrzzt/generate-pincode-cli)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/generate-pincode-cli/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/generate-pincode-cli?branch=master)
# generate-pincode-cli

CLI for generating random pincodes.

## Installation

From npm

```sh
$ npm install generate-pincode-cli -g
```

## Usage - cli

If not supplied with a length it returns a four digit pincode.

```sh
$ pincode
```

Optionally pass in length

```sh
$ pincode <length>
```

To see version number

```sh
$ generate-pincode -v
```

To see help

```sh
$ generate-pincode -h
```