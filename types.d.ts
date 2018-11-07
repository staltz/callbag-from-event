import { Source } from 'callbag'

export default function fromEvent<T extends Event = Event>(
  node: EventTarget,
  name: string,
  options?: boolean | AddEventListenerOptions
): Source<T>;
