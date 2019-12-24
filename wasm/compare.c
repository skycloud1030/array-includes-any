#include <emscripten.h>
#include <stdio.h>
#include <string.h>
#include <stdint.h>
#include <stdbool.h>

EMSCRIPTEN_KEEPALIVE
bool compare(int* array_1,int* array_2,int length_1,int length_2)
{
  if(array_1 == array_2){
    return true;
  }
  for(int i=0;i<length_1;i++){
    for(int j=0;j<length_2;j++){
      if(array_1[i]==array_2[j]){
        return true;
      }
    }
  }
  return false;
}

EMSCRIPTEN_KEEPALIVE
bool shallowEqual(int* array_1, int* array_2, int length_1, int length_2) 
{ 
    if (length_1 != length_2) {
        return false; 
    }

    for (int i = 0; i < length_1; i++) {
      if (array_1[i] != array_2[i]) {
          return false; 
      }
    }
 
    return true; 
} 



