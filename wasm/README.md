# Examples

## Node

```js
const Module = require("../dist/array-includes-any.esm.js");
const config = {
  wasmMemory: new WebAssembly.Memory({ initial: 256, maximum: 512 })
};

Module(config).then(({ array_includes_any }) => {
  console.log(array_includes_any([1, 2], [1]));
  console.log(array_includes_any([1, 2], [10]));
  console.log(array_includes_any([1, 2], [3]));
});
```

## TS

```ts
import * as Module from "../dist/array-includes-any.esm.js";
const config = {
  wasmMemory: new WebAssembly.Memory({ initial: 256, maximum: 512 })
};

Module(config).then(({ array_includes_any }) => {
  console.log(array_includes_any([1, 2], [1]));
  console.log(array_includes_any([1, 2], [10]));
  console.log(array_includes_any([1, 2], [3]));
});
```

## C to Wasm

```sh
emcc compare.c -o ./dist/array-includes-any.js --post-js post.js -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORT_ES6=1  -s ALLOW_MEMORY_GROWTH=1
```

## Babel wasm js to es2015

- Support Both node.js & webpack

```sh
rollup array-includes-any.js --file array-includes-any.esm.js --format umd --name "arrayIA"
```
