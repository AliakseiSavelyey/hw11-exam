// 1;
// let sum = 0;
// const fna = function (a, b, c) {
//   return (sum = (a - b) / c);
// };
// console.log(fna(12, 6, 2));

// 2;
// let cube = 0;
// let square = 0;
// const fnb = a => {
//   cube = Math.pow(a, 3);
//   console.log(cube);
//   square = Math.pow(cube, 2);
//   return square;
// };
// console.log(fnb(3));

// 3;
// let a = 3.44;
// let b = 5.98;
// console.log(Math.min(a, b));
// console.log(Math.max(a, b));

// 4;
// function generateArray() {
//   var start = parseInt(prompt('Введите число'));
//   var end = parseInt(prompt('Введите число'));
//   var arr = [];
//   for (var i = start; i <= end; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// function printArray(arr) {
//   console.log(arr);
// }
// let myArray = generateArray();
// console.log(myArray);

// 5;
// const isEven = a => {
//   if (a % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isEven(126));

// 6;
// const fnb = arr => {
//   return arr.filter(num => num % 2 === 0);
// };
// console.log(fnb([1, 2, 3, 4, 5, 6]));

// 7;
// let symbol = prompt('введите символ');
// let row = Number(prompt('введите число'));
// function fna(row, symbol) {
//   for (let i = 1; i <= row; i++) {
//     let b = '';
//     for (let j = 1; j <= i; j++) {
//       b += symbol;
//     }
//     console.log(b);
//   }
// }
// fna(row, symbol);

// 8;
// let b = '&nbsp';
// for (let i = 0; i < 7; i++) {
//   for (let j = 7; j > i - 1; j--) {
//     document.write(b, b, b);
//   }
//   for (let k = 0; k < i * 2 + 1; k++) {
//     document.write('*', b, b);
//   }
//   document.write('</br>');
// }

// function fna(a, b) {
//   for (let i = a - 1; i >= 0; i--) {
//     for (let j = a; j > i; j--) {
//       document.write(b, b, b, b);
//     }
//     for (let k = 0; k < i * 2 + 1; k++) {
//       document.write('*', b, b);
//     }
//     document.write('<br/>');
//   }
// }
// fna(7, '&nbsp');

// 9;
// let a = [0, 1];
// let b = 0;
// const fna = () => {
//   while (b <= 1000) {
//     b = a[a.length - 1] + a[a.length - 2];
//     if (b <= 1000) {
//       a.push(b);
//     }
//   }
//   return a;
// };
// console.log(fna());

// 10;
// let a = 881;
// const fna = a => {
//   let b = String(a)
//     .split('')
//     .reduce((a, b) => Number(a) + Number(b));
//   return b;
// };
// let z = b => (b <= 9 ? b : fna(b));
// console.log(z(fna(a)));

// 11;
// let i = 0;
// const fna = arr => {
//   console.log(arr[i]);
//   i += 1;
//   if (i < arr.length) {
//     fna(arr);
//   }
// };
// fna([1, 4, 6, 8, 33]);

// 12;
// function printStudentInfo() {
//   let firstName = prompt('Введите имя: ');
//   let lastName = prompt('Введите фамилию: ');
//   let middleName = prompt('Введите отчество: ');
//   let groupNumber = prompt('Введите номер группы: ');

//   let maxLength = Math.max(
//     firstName.length,
//     lastName.length,
//     middleName.length,
//     15 + groupNumber.length,
//   );

//   let borderLine = '*'.repeat(maxLength + 4);
//   let secondLine = `* Домашняя работа: "Функции" *`;
//   let thirdLine = `* Выполнил: студент гр. ${groupNumber} *`;
//   let fourthLine = '* ' + lastName + ' ' + firstName + ' ' + middleName + ' *';

//   console.log(borderLine);
//   console.log(secondLine);
//   console.log(thirdLine);
//   console.log(fourthLine);
//   console.log(borderLine);
// }

// printStudentInfo();
