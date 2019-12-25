### Build

```sh
emcc compare.c -o "../dist/wasm/array-includes-any.js" --post-js post.js -O3 -s MODULARIZE=1

```
