# Examples

## Node

```js
const Module = require("../dist/array-includes-any.js").default;

Module().then(({ array_includes_any }) => {
  console.log(array_includes_any([1, 2], [1]));
  console.log(array_includes_any([1, 2], [10]));
  console.log(array_includes_any([1, 2], [3]));
});
```

## TS

```ts
import Module from "../dist/array-includes-any.js";

Module().then(({ array_includes_any }) => {
  console.log(array_includes_any([1, 2], [1]));
  console.log(array_includes_any([1, 2], [10]));
  console.log(array_includes_any([1, 2], [3]));
});
```

# Build

## C to Wasm

```sh
emcc compare.c -o ./dist/array-includes-any.js --post-js post.js -s MODULARIZE=1 -s EXPORT_ES6=1 -s ALLOW_MEMORY_GROWTH=1 -O3

```

## Babel wasm js to es2015

- Support Both node.js & webpack

```sh
babel ./dist/array-includes-any.js -o ./dist/array-includes-any.js
```
