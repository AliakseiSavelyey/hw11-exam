1;
for (let i = 1; i <= 50; i++) {
  console.log(i);
}
for (let j = 35; j >= 8; j--) {
  console.log(j);
}

2;
let i = 89;
while (i >= 11) {
  document.write(i + '<br />');
  i--;
}

3;
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

4;
for (let i = 1; i <= 5; i++) {
  let sum = 0;
  for (let j = 1; j <= i; j++) {
    sum += j;
  }
  console.log('Сумма чисел в числе ' + i + ' равна ' + sum);
}

5;
let a = 8;
while (a <= 56) {
  if (a % 2 === 0) {
    console.log(a);
  }
  a++;
}
for (let i = 8; i <= 56; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

6;
for (let i = 2; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i}*${j}=${i * j}`);
  }
}

7;
num = 0;
for (let n = 1000; n > 50; n /= 2, num++) {
  console.log(n);
}
console.log(`кол-во итер ${num}`);

8;
let i = 0;
let j = 0;
while (true) {
  let input = prompt('Введите число');
  if (input === '' || Number(input) === 0) {
    break;
  } else if (isNaN(Number(input))) {
    alert('Ошибка. не то ввели.');
  } else {
    i += Number(input);
    j++;
  }
}
let sum = i / j;
alert(`сумма ${i}.Среднее арифметическое ${sum}`);

9;
const str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let arr = str.split(' ').map(Number);
let min = arr[0];
let max = arr[0];
for (i = 0; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
  if (arr[i] < min) min = arr[i];
}
console.log(`${min}-${max}`);

10;
let n = 67;
let arr = [];
while (n !== 0) {
  arr.push(n % 10);
  n = Math.floor(n / 10);
}
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(`цифра числа - ${arr[i]}`);
}
console.log('Количество цифр в числе: ' + arr.length);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log('Сумма цифр числа: ' + sum);
let rev = '';
for (let i = arr.length - 1; i >= 0; i--) {
  rev += arr[i];
}
console.log('Число в обратном порядке: ' + rev);
