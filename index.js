require('@babel/register');
require('./index2.js');

[1, 2, 3].map((n) => n + 1);
"foobar".includes("foo");

class Point {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }
  toString() {
      return `(${this.x}, ${this.y})`;
  }
}


