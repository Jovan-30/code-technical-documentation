// Events
// --------------------------------------------------------------------------------------
// import EventEmitter from "events";

// const customEmitter = new EventEmitter();

// 1. on: listen/register for an event
// 2. once: listen/register for an event
// 3. emit: emit/call an event

// Example 1:
// customEmitter.on('response', (name, id) => {
//   console.log(`user: ${name} id: ${id}`);
// });
// customEmitter.emit('response', "John", 100);
// customEmitter.emit('response', "Bill", 500);


// Example 2:
// customEmitter.once('response', (name, id) => {
//   console.log(`user: ${name} id: ${id}`);
// });
// customEmitter.emit('response', "John", 100);
// customEmitter.emit('response', "Bill", 500);