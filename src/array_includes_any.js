/*array_includes_any.js*/
export function array_includes_any(array1 = [], array2 = [], type = "any") {
  const objA = new Set(array1);
  const objB = new Set(array2);
  if (type === "equal" && objA.size !== objB.size) {
    return false;
  }
  //compare state
  const intersection = new Set([...objB].filter(x => objA.has(x)));
  if (type === 'equal' && intersection.size === objB.size) {
    return true;
  } else if (intersection.size > 0) {
    return true;
  } else {
    return false;
  }
};