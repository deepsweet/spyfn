# spyfn

**:warning: Project has been transferred to [NexTools metarepo](https://github.com/nextools/metarepo/tree/master/packages/spyfn)**

[![npm](https://img.shields.io/npm/v/spyfn.svg?style=flat-square)](https://www.npmjs.com/package/spyfn) [![tests](https://img.shields.io/travis/deepsweet/spyfn/master.svg?label=tests&style=flat-square)](https://travis-ci.org/deepsweet/spyfn) [![coverage](https://img.shields.io/codecov/c/github/deepsweet/spyfn.svg?style=flat-square)](https://codecov.io/github/deepsweet/spyfn)

Spy function.

## Requirements

* Node.js >= 8.6.0

## Install

```sh
$ yarn add --dev spyfn
```

## Usage

```js
import { createSpy, getSpyCalls } from 'spyfn'

const spy = createSpy(({ index, args }) => {
  switch (index) {
    case 0: {
      return `first call result, args: ${args}`
    }
    case 1: {
      return `second call result, args: ${args}`
    }
    default: {
      return `3+ call result, args: ${args}`
    }
  }
})

console.log(spy('foo')) // first call result, args: ['foo']
console.log(spy('bar')) // second call result, args: ['bar']
console.log(getSpyCalls(spy)) // [['foo'], ['bar']]

console.log(spy('baz')) // 3+ call result, args: ['baz']
console.log(spy('qux')) // 3+ call result, args: ['qux']
console.log(getSpyCalls(spy)) // [['foo'], ['bar'], ['baz'], ['qux']]
```
