1;
let name = prompt('ваше имя');
let age = prompt('ваш возраст');
let city = prompt('ваш город');
let phone = prompt('ваш телефон');
let email = prompt('ваша почта');
let company = prompt('ваша компания');
document.write(
  `Меня зовут ${name}. мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company} .Мои контактные данные ${email}, ${phone}`,
);

2;
let yearsOfBirth = 2023 - `${age}`;
document.write(`${name} родился в ${yearsOfBirth} году`);

3;
let str = '123456';
let first = str
  .split('')
  .slice(0, 3)
  .reduce((sum, num) => sum + +num, 0);
let last = str
  .split('')
  .slice(3)
  .reduce((sum, num) => sum + +num, 0);
console.log(first === last ? 'да' : 'нет');

4;
let a = -3;
console.log(a > 0 ? 'верно' : 'неверно');

5;
let a = 10;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a + b > 1 ? Math.pow(a + b, 2) : '');

6;
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
  console.log('верно');
} else {
  console.log('неверно');
}

7;
let n = Math.floor(Math.random() * 59);
if (n <= 15) {
  console.log('первая');
} else if (n > 15 && n <= 30) {
  console.log('вторая');
} else if (n > 30 && n <= 45) {
  console.log('третья');
} else if (n > 45 && n <= 59) {
  console.log('четвертая');
}

8;
let day = Math.floor(Math.random() * 31);
if (day <= 10) {
  console.log('первая');
} else if (day > 10 && day <= 20) {
  console.log('вторая');
} else if (day > 20 && day <= 31) {
  console.log('третья');
}

9;
let days = 30;
let years = days / 365;
let months = days / 31;
let weeks = days / 7;
let hours = days * 24;
let minutes = hours * 60;
let seconds = minutes * 60;

if (days < 365) {
  console.log('Меньше года');
  if (days < 31) {
    console.log('Меньше месяца');
    if (days < 7) {
      console.log('Меньше недели');
    }
  }
}
console.log('Часов:', hours);
console.log('Минут:', minutes);
console.log('Секунд:', seconds);

10;
let month;
let season;
if (day >= 1 && day <= 31) {
  month = 1;
  season = 'зима';
} else if (day >= 32 && day <= 59) {
  month = 2;
  season = 'зима';
} else if (day >= 60 && day <= 90) {
  month = 3;
  season = 'весна';
} else if (day >= 91 && day <= 120) {
  month = 4;
  season = 'весна';
} else if (day >= 121 && day <= 151) {
  month = 5;
  season = 'весна';
} else if (day >= 152 && day <= 181) {
  month = 6;
  season = 'лето';
} else if (day >= 182 && day <= 212) {
  month = 7;
  season = 'лето';
} else if (day >= 213 && day <= 243) {
  month = 8;
  season = 'лето';
} else if (day >= 244 && day <= 273) {
  month = 9;
  season = 'осень';
} else if (day >= 274 && day <= 304) {
  month = 10;
  season = 'осень';
} else if (day >= 305 && day <= 334) {
  month = 11;
  season = 'осень';
} else if (day >= 335 && day <= 365) {
  month = 12;
  season = 'зима';
} else {
  console.log('Ошибка: введите число от 1 до 365');
}
switch (season) {
  case 'зима':
    console.log(`Месяц: ${month}. Пора года: зима`);
    break;
  case 'весна':
    console.log(`Месяц: ${month}. Пора года: весна`);
    break;
  case 'лето':
    console.log(`Месяц: ${month}. Пора года: лето`);
    break;
  case 'осень':
    console.log(`Месяц: ${month}. Пора года: осень`);
    break;
  default:
    console.log('Ошибка: неверно определена пора года');
}
