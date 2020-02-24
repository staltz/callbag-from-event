const fromEvent = (node, name, options) => (start, sink) => {
  if (start !== 0) return;
  let disposed = false;
  const handler = ev => {
    sink(1, ev)
  };

  sink(0, t => {
    if (t !== 2) {
      return;
    }
    disposed = true;
    if (node.removeEventListener) node.removeEventListener(name, handler, options);
    else if (node.removeListener) node.removeListener(name, handler);
    else throw new Error('cannot remove listener from node. No method found.');
  });

  if (disposed) {
    return;
  }

  if (node.addEventListener) node.addEventListener(name, handler, options);
  else if (node.addListener) node.addListener(name, handler);
  else throw new Error('cannot add listener to node. No method found.');
};

export default fromEvent;
