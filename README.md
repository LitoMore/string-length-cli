# string-length-cli [![](https://travis-ci.org/LitoMore/string-length-cli.svg?branch=master)](https://travis-ci.org/LitoMore/string-length-cli)

> Get the real length of a string - by correctly counting astral symbols and ignoring ansi escape codes

`String#length` errornously counts [astral symbols](https://web.archive.org/web/20150721114550/http://www.tlg.uci.edu/~opoudjis/unicode/unicode_astral.html) as two characters.

## Install

```bash
$ npm i -g string-length-cli
```

## Usage

```bash
$ string-length --help

  Usage
    $ string-length <text> [more...]

  Example
    $ string-length Jiong囧
    6
```

## Related

- [string-length](https://github.com/sindresorhus/string-length) - API for this module

## License

MIT © [LitoMore](https://github.com/LitoMore)
