class Iterator {
  constructor() {
    this.currentValue = 0;
    this.fibonacciNum = new Fibonacci(this.currentValue);
  }

  rewind() {
    this.currentValue = 0;
    return (`current index: ${this.fibonacciNum.index}, current number: ${this.fibonacciNum.number}`);
  }
  
  current() {
    return (`current index: ${this.fibonacciNum.index}, current number: ${this.fibonacciNum.number}`);
  }

  next() {
    this.currentValue = this.currentValue + 1
    return (`next index: ${this.fibonacciNum.index}, next number: ${this.fibonacciNum.number}`);
  }

  prev() {
    this.currentValue = this.currentValue - 1
    return (`previous index: ${this.fibonacciNum.index}, previous number: ${this.fibonacciNum.number}`);
  }

  key() {
    return (`current index: ${this.fibonacciNum.index}`);
  }
}

const calc = new Iterator();

console.log(calc.current());
console.log(calc.prev());
console.log(calc.next());
console.log(calc.key());
console.log(calc.rewind());