# callbag-from-event

Create a callbag listenable source from events on a DOM node or a NodeJS Event Emitter.

`npm install callbag-from-event`

## example

Create a listenable source of click events on the `<body>` node.

```js
const fromEvent = require('callbag-from-event');
const forEach = require('callbag-for-each');

const source = fromEvent(document.body, 'click');

forEach(x => console.log(x))(source); // MouseEvent ...
                                      // MouseEvent ...
```

