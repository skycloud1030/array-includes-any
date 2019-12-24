const Module = require("../dist/wasm/array-includes-any.js");

Module.onRuntimeInitialized = function() {
  console.log(Module.array_includes_any([1, 2], [2, 1]));
  console.log(Module.array_includes_any([1, 2], [1]));
  console.log(Module.array_includes_any([1, 2], [1],"equal"));
  // console.log(Module.array_includes_any([1, 2], [1, 2])); //true
  // console.log(Module.array_includes_any([1, 2], [1])); //true
  // console.log(Module.array_includes_any([1, 2], [1], "equal")); //false
  // console.log(Module.array_includes_any([1, 2], [1, 2], "equal")); //true
  // console.log(Module.array_includes_any([1, 2], [2, 1], "equal")); //false
  // console.log(Module.array_includes_any([], [2, 1])); //false
  // console.log(Module.array_includes_any([1, 2, 2], [1, 2], "equal")); //false
  // console.log(Module.array_includes_any([1, 2, 2], [1, 2, 2], "equal")); //true
  // console.log(Module.array_includes_any([1, 2, 2], [1, 2, 2]));
  // console.log(Module.array_includes_any(array1, array2));
};
