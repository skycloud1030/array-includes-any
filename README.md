# array-includes-any

[![Travis](https://api.travis-ci.org/skycloud1030/array-includes-any.svg?branch=master)](https://travis-ci.org/skycloud1030/array-includes-any)
[![Coverage Status](https://coveralls.io/repos/github/skycloud1030/array-includes-any/badge.svg?branch=master)](https://coveralls.io/github/skycloud1030/array-includes-any?branch=master)
[![Version](https://img.shields.io/npm/v/array-includes-any.svg)](https://www.npmjs.com/package/array-includes-any)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/skycloud1030/array-includes-any/blob/master/LICENSE)
[![Donloads](https://img.shields.io/npm/dm/array-includes-any.svg)](https://www.npmjs.com/package/array-includes-any)

JavaScript Check if array contains any of another array

## Install

```sh
npm install --save array-includes-any
```

## Usage

```js
//CommonJS
var array_includes_any = require("array-includes-any").array_includes_any;

//ES6
import array_includes_any from "array-includes-any";

array_includes_any([1, 2], [1, 2]); //true
array_includes_any([1, 2], [1]); //true
array_includes_any([1, 2], [1], "equal"); //false
array_includes_any([1, 2], [1, 2], "equal"); //true
array_includes_any([1, 2], [2, 1], "equal"); //false
array_includes_any([], [2, 1]); //false
array_includes_any([1, 2, 2], [1, 2], "equal"); //false
array_includes_any([1, 2, 2], [1, 2, 2], "equal"); //true
array_includes_any([1, 2, 2], [1, 2, 2]); //true
```

## License

```sh
MIT
```
