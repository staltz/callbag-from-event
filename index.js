const fromEvent = (node, name) => (start, sink) => {
  if (start !== 0) return;
  const handler = ev => sink(1, ev);
  node.addEventListener(name, handler);
  sink(0, t => {
    if (t === 2) node.removeEventListener(name, handler);
  });
};

module.exports = fromEvent;
