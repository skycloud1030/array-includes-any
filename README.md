# array-includes-any

array includes base on lodash

## Install

```
npm install --save array-includes-any
```

## Usage

```
//CommonJS
var array_includes_any = require('array-includes-any').array_includes_any;

//ES6
import  {array_includes_any} from 'array-includes-any';

array_includes_any([1,2],[1,2])         //true
array_includes_any([1,2],[1])           //true
array_includes_any([1,2],[1],"equal")    //false
array_includes_any([1,2],[1,2],"equal")  //true
array_includes_any([1,2],[2,1],"equal")  //true
array_includes_any([],[2,1])            //false
```

## License

```
MIT
```
