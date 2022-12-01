const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`data recieve user ${name} ${id}`);
});

customEmitter.on('response', () => {
  console.log(`some other logic`);
});

customEmitter.emit(`response`, 'kratos', 89);
