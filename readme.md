# callbag-from-event

Create a callbag listenable source from events on a DOM node.

`npm install callbag-from-event`

## example

Create a listenable source of click events on the `<body>` node.

```js
const fromEvent = require('callbag-from-event');
const observe = require('callbag-observe');

const source = fromEvent(document.body, 'click');

observe(x => console.log(x)(source); // MouseEvent ...
                                     // MouseEvent ...
```

