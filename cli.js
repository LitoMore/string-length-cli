#!/usr/bin/env node
import meow from 'meow';
import stringLength from 'string-length';

const cli = meow(`
Usage
	$ string-length <text> [more...]

Example
	$ string-length Jiong囧
	6
`, {
	importMeta: import.meta,
});

console.log(stringLength(cli.input.join(' ')));
