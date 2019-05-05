class Iterator {
  constructor() {
    this.currentValue = 0;
  }

  rewind() {
    this.currentValue = 0;
    return (`current index: ${counter(this.currentValue).index}, current number: ${counter(this.currentValue).number}`);
  }
  
  current() {
    return (`current index: ${counter(this.currentValue).index}, current number: ${counter(this.currentValue).number}`);
  }

  next() {
    this.currentValue = this.currentValue + 1;
    return (`next index: ${counter(this.currentValue).index}, next number: ${counter(this.currentValue).number}`);
  }

  prev() {
    this.currentValue = this.currentValue - 1;
    return (`previous index: ${counter(this.currentValue).index}, previous number: ${counter(this.currentValue).number}`);
  }

  key() {
    return (`current index: ${counter(this.currentValue).index}`);
  }
}

const calc = new Iterator();

console.log(calc.next());
console.log(calc.next());
console.log(calc.current());
console.log(calc.prev());
console.log(calc.next());
console.log(calc.next());
console.log(calc.next());
console.log(calc.next());
console.log(calc.next());
console.log(calc.key());
console.log(calc.current());
console.log(calc.rewind());