import { Source } from 'callbag'

export default function fromEvent(node: EventTarget, name: string): Source<Event>;
