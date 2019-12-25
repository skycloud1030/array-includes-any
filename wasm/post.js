Module["_arrayToHeap"] = function(typedArray) {
  const numBytes = typedArray.length * typedArray.BYTES_PER_ELEMENT;
  const ptr = Module["_malloc"](numBytes);
  const heapBytes = new Uint8Array(Module.HEAP32.buffer, ptr, numBytes);
  heapBytes.set(new Uint8Array(typedArray.buffer));
  return heapBytes;
};

Module["_freeArray"] = function(heapBytes) {
  Module["_free"](heapBytes.byteOffset);
};

Module["array_includes_any"] = function(array1, array2, type) {
  type = type || "any"
  if (is(array1, array2)) return true;
  if ( typeof array1 !== "object" || array1 === null || typeof array2 !== "object" || array2 === null ) { 
    return false; 
  }
  const h_array1 = Module._arrayToHeap(new Int32Array(array1));
  const h_array2 = Module._arrayToHeap(new Int32Array(array2));

  var equal = 0;
  if (type === "equal") {
    equal = Module._shallowEqual(
      h_array1.byteOffset,
      h_array2.byteOffset,
      array1.length,
      array2.length
    );
  } else {
    equal = Module._compare(
      h_array1.byteOffset,
      h_array2.byteOffset,
      array1.length,
      array2.length
    );
  }

  Module._freeArray(h_array1);
  Module._freeArray(h_array2);
  return !!equal;
};

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}
