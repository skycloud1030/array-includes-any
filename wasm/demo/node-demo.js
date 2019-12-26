const Module = require("../dist/array-includes-any.js").default;

Module().then(({ array_includes_any }) => {
  console.log(array_includes_any([1, 2], [1]));
  console.log(array_includes_any([1, 2], [10]));
  console.log(array_includes_any([1, 2], [3]));
});
