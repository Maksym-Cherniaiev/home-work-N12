class Fibonacci {
  constructor(num) {
    this.index = num || 0;
    this.number = 0
    this.counter();
  }
  
  counter() {
    let counter = 1;
    let i = 0;
    while (i < this.index) {
      counter += this.number;
      this.number = counter - this.number;
      i++;
    }
    return this.number;
  }
}