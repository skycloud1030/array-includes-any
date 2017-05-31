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
var array_includes_any = require('array-includes-any').array_includes_any;

//ES6
import _ from 'lodash';
import  {array_includes_any} from 'array-includes-any';

array_includes_any([1,2],[1,2])         //true
array_includes_any([1,2],[1])           //true
array_includes_any([1,2],[1],"eqal")    //false
array_includes_any([1,2],[1,2],"eqal")  //true
array_includes_any([1,2],[2,1],"eqal")  //true
array_includes_any([],[2,1])            //false
```

## License

```
MIT
```
