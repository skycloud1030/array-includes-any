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
  type = type || "any";
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
