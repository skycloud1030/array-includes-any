/*array_includes_any.js*/
import _ from 'lodash';

export function array_includes_any(array1=[],array2=[],type="any"){
  let union_len =_.union(array1,array2).length;
  let xor_len = _.xor(array1,array2).length;
  if(type=="eqal"){
    if(array1.length!=array2.length)
      return false;
    return union_len-xor_len==union_len;
  }
  else{
    if(array1.length==0)
      return false;
    return union_len>xor_len;
  }

};
