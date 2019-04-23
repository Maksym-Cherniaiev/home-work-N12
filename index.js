class Iterator {
  constructor(userValue) {
    this.userValue = userValue;
  }
  
  current() {
    const fiboncciNum = new Fibonacci(this.userValue);
    return (`current index: ${fiboncciNum.index}, current number: ${fiboncciNum.number}`);
  }

  next() {
    const fiboncciNum = new Fibonacci(this.userValue + 1);
    return (`next index: ${fiboncciNum.index}, next number: ${fiboncciNum.number}`);
  }

  prev() {
    const fiboncciNum = new Fibonacci(this.userValue - 1);
    return (`previous index: ${fiboncciNum.index}, previous number: ${fiboncciNum.number}`);
  }

  key() {
    const fiboncciNum = new Fibonacci(this.userValue);
    return (`current index: ${fiboncciNum.index}`);
  }
}

const calc = new Iterator(8);

console.log(calc.current());
console.log(calc.prev());
console.log(calc.next());
console.log(calc.key());