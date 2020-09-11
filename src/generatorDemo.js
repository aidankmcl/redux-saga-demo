function* generator() {
  yield "Jayway";
  yield "K";
  yield "Day";
}

const gen = generator();
console.log(gen.next());
// { value: 'Jayway', done: false }
console.log(gen.next());
// { value: 'K', done: false }
console.log(gen.next());
// { value: 'Day', done: false }
console.log(gen.next());
// { value: undefined, done: true }
