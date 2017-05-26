# array-includes-any

array includes base on lodash

## Install

```
npm install --save array-includes-any
```

## Usage

```
//CommonJS
var _ = require('lodash');
var array_contains_any = require('array-includes-any').array_contains_any;

//ES6
import _ from 'lodash';
import  {array_contains_any} from 'array-includes-any';

array_contains_any([1,2],[1,2])         //true
array_contains_any([1,2],[1])           //true
array_contains_any([1,2],[1],"eqal")    //false
array_contains_any([1,2],[1,2],"eqal")  //true
array_contains_any([1,2],[2,1],"eqal")  //true
array_contains_any([],[2,1])            //false
```

## License

```
MIT
```
