let Calc = function () {
  this.start = function () {
    this.letsgo = prompt('введите "start" для зажигания двигателя');
    this.check();
  };
  this.check = function () {
    if (this.letsgo === 'start') {
      this.get();
    } else {
      this.start();
    }
  };
  this.get = function () {
    this.a = +prompt(
      'введите обьем двигателя вашего авто, "только целые числа"',
    );
    if (isNaN(this.a)) {
      this.get();
    } else {
      this.b = +prompt(
        'введите максимальное значение тахометра, "только целые числа"',
      );
      if (isNaN(this.b)) {
        this.get();
      }
      this.transfer = +prompt('включите нужную передачу');
    }

    this.operation();
  };
  this.operation = function () {
    switch (this.transfer) {
      case 1:
        this.result = alert('приготовьтесь переключить следующую передачу');
        this.newTransfer();
        break;
      default:
        this.result = alert('двигатель сгорел, идите пешком');
        this.show();
    }
  };
  this.newTransfer = function () {
    this.transfer2 = +prompt('включите следующую передачу');
    if (this.transfer2 === 2) {
      this.result = alert('приготовьтесь к остановке');
      this.end();
    } else {
      this.result = alert('двигатель сгорел, идите пешком');
      this.show();
    }
  };
  this.end = function () {
    alert('вы приехали');
  };
  this.show = function () {
    console.log('учите правила(');
    return this.result;
  };
};
let count = new Calc();
count.start();
