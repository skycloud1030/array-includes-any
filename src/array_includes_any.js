/*array_includes_any.js*/
export function array_includes_any(array1 = [], array2 = [], type = "any") {
  if (type === 'equal') {
    return shallowEqual(array1, array2);
  }
  const objA = new Set(array1);
  const objB = new Set(array2);
  //compare state
  const intersection = new Set([...objB].filter(x => objA.has(x)));
  return (intersection.size > 0) ? true : false;
};


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowEqual
 * @typechecks
 * @flow
 */
const hasOwn = Object.prototype.hasOwnProperty

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y
  } else {
    return x !== x && y !== y
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true

  if (typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null) {
    return false
  }

  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  if (keysA.length !== keysB.length) return false

  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])) {
      return false
    }
  }

  return true;
}