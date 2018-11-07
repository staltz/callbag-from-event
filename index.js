const fromEvent = (node, name) => (start, sink) => {
  if (start !== 0) return;
  let disposed = false;
  const handler = ev => sink(1, ev);

  sink(0, t => {
    if (t !== 2) {
      return;
    }
    disposed = true;
    node.removeEventListener(name, handler);
  });

  if (disposed) {
    return;
  }

  node.addEventListener(name, handler);
};

module.exports = fromEvent;
