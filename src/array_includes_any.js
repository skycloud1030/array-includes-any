/*array_includes_any.js*/

export function array_includes_any(array1=[],array2=[],type="any"){
  if(type=="equal"){
    if(array1.length!=array2.length)
      return false;
  }
  //gen hash table
  var hash_table={};
  for(var i=0;i<array1.length;i++){
    hash_table[array1[i]]=array1[i];
  }

  //compare state
  var contains=false;
  var contains_count=0;
  for(var i=0;i<array2.length;i++){
    if(hash_table[array2[i]]!=undefined){
      if(type=="equal"){
        contains_count++;
      }
      else{
        contains = true;
        break;
      }
    }
  }
  if(type=="equal"){
    return (contains_count==array2.length);
  }
  else {
    return contains;
  }
};
