class Iterator {
  constructor() {
    this.currentValue = 1;
  }

  rewind() {
    this.currentValue = 1;
    const fiboncciNum = new Fibonacci(this.currentValue);
    return (`current index: ${fiboncciNum.index}, current number: ${fiboncciNum.number}`);
  }
  
  current() {
    const fiboncciNum = new Fibonacci(this.currentValue);
    return (`current index: ${fiboncciNum.index}, current number: ${fiboncciNum.number}`);
  }

  next() {
    this.currentValue = this.currentValue + 1
    const fiboncciNum = new Fibonacci(this.currentValue);
    return (`next index: ${fiboncciNum.index}, next number: ${fiboncciNum.number}`);
  }

  prev() {
    this.currentValue = this.currentValue - 1
    const fiboncciNum = new Fibonacci(this.currentValue);
    return (`previous index: ${fiboncciNum.index}, previous number: ${fiboncciNum.number}`);
  }

  key() {
    const fiboncciNum = new Fibonacci(this.currentValue);
    return (`current index: ${fiboncciNum.index}`);
  }
}

const calc = new Iterator();

console.log(calc.current());
console.log(calc.prev());
console.log(calc.next());
console.log(calc.key());
console.log(calc.rewind());