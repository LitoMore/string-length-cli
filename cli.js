#!/usr/bin/env node
'use strict';

const meow = require('meow');
const stringLength = require('string-length');

const cli = meow(`
Usage
	$ string-length <text> [more...]

Example
	$ string-length Jiong囧
	6
`);

console.log(stringLength(cli.input.join(' ')));
