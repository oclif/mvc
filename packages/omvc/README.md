omvc
====



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/omvc.svg)](https://npmjs.org/package/omvc)
[![Codecov](https://codecov.io/gh/oclif/mvc/branch/master/graph/badge.svg)](https://codecov.io/gh/oclif/mvc)
[![Downloads/week](https://img.shields.io/npm/dw/omvc.svg)](https://npmjs.org/package/omvc)
[![License](https://img.shields.io/npm/l/omvc.svg)](https://github.com/oclif/mvc/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g omvc
$ omvc COMMAND
running command...
$ omvc (-v|--version|version)
omvc/0.0.0 darwin-x64 node-v10.10.0
$ omvc --help [COMMAND]
USAGE
  $ omvc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`omvc hello [FILE]`](#omvc-hello-file)
* [`omvc help [COMMAND]`](#omvc-help-command)

## `omvc hello [FILE]`

describe the command here

```
USAGE
  $ omvc hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ omvc hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/oclif/mvc/blob/v0.0.0/src/commands/hello.ts)_

## `omvc help [COMMAND]`

display help for omvc

```
USAGE
  $ omvc help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.2/src/commands/help.ts)_
<!-- commandsstop -->
