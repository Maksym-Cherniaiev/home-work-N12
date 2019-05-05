class Iterator {
  constructor() {
    this.currentValue = 0;
  }

  rewind() {
    this.currentValue = 0;
    const fibonacciNum = new Fibonacci(this.currentValue);
    return (`current index: ${fibonacciNum.index}, current number: ${fibonacciNum.number}`);
  }
  
  current() {
    const fibonacciNum = new Fibonacci(this.currentValue);
    return (`current index: ${fibonacciNum.index}, current number: ${fibonacciNum.number}`);
  }

  next() {
    this.currentValue = this.currentValue + 1;
    const fibonacciNum = new Fibonacci(this.currentValue);
    return (`next index: ${fibonacciNum.index}, next number: ${fibonacciNum.number}`);
  }

  prev() {
    this.currentValue = this.currentValue - 1;
    const fibonacciNum = new Fibonacci(this.currentValue);
    return (`previous index: ${fibonacciNum.index}, previous number: ${fibonacciNum.number}`);
  }

  key() {
    const fibonacciNum = new Fibonacci(this.currentValue);
    return (`current index: ${fibonacciNum.index}`);
  }
}

const calc = new Iterator();

console.log(calc.next());
console.log(calc.next());
console.log(calc.current());
console.log(calc.prev());
console.log(calc.next());
console.log(calc.next());
console.log(calc.key());
console.log(calc.current());
console.log(calc.rewind());