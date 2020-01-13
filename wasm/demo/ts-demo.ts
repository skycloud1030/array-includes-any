import * as Module from "../dist/array-includes-any.esm.js";

const config = { wasmMemory: new WebAssembly.Memory({ initial: 256, maximum: 512 }) }

Module(config).then(({ array_includes_any }) => {
  console.log(array_includes_any([1, 2], [1]));
  console.log(array_includes_any([1, 2], [10]));
  console.log(array_includes_any([1, 2], [3]));
});
