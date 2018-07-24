# js-range
range generator on ES6

Better iteration on JavaScript!

## useage

```js

//require js-range
const range = require("js-range");

//print 0 to 9 on console
for (let i of range(10)) console.log(i);

```

## API

`range(begin: Number, ?end: Number, ?step: Number)`

- begin: range's begin number. If second argument was undefined, this value was set to end and 0 was set to begin.
- end (optional): range's end number.
- step (optional): range's step number. The default value is 1.
