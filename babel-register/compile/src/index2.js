export default class Point {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }
  getPosition() {
      return `(${this.x}, ${this.y})`;
  }
}