### Build

```sh
emcc compare.c -o "../dist/wasm/array-includes-any.js" -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' -s EXPORTED_FUNCTIONS='["_malloc","_free"]' --post-js post.js

```
