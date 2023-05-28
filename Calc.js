class Calc {
  constructor() {
    this.get = function () {
      this.a = +prompt('введите число а');
      this.b = +prompt('введите число b');
      this.oper = prompt('введите операцию');

      this.operation();
    };
    this.operation = function () {
      switch (this.oper) {
        case '+':
          this.result = this.a + this.b;
          break;
        case '-':
          this.result = this.a - this.b;
          break;
        case '*':
          this.result = this.a * this.b;
          break;
        case '/':
          this.result = this.a / this.b;
          break;
        default:
          this.result = 0;
      }
      this.show();
    };
    this.show = function () {
      console.log(this.result);
    };
  }
}
