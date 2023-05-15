// 1;
// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 2;
// const arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > -10 && arr[i] < -3) {
//     console.log(arr[i]);
//   }
// }

// 3;
// let arr = [];
// for (let i = 23; i <= 57; i++) {
//   arr.push(i);
// }
// console.log(arr);

// let arr1 = [];
// let j = 23;
// while (j <= 57) {
//   arr1.push(j);
//   j++;
// }
// console.log(arr1);

// 4;
// let arr = ['10', '20', '30', '50', '235', '3000'];
// for (let i = 0; i < arr.length; i++) {
//   if (+arr[i][0] === 1 || +arr[i][0] === 2 || +arr[i][0] === 5) {
//     console.log(i);
//   }
// }

// 5;
// let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 'сб' || arr[i] === 'вс') {
//     console.log(arr[i].bold());
//   } else console.log(arr[i]);
// }

// 6;
// let arr = [1, 2, 3, 4, 'qwe'];
// arr.push('task6');
// console.log(arr[arr.length - 1]);

// 7;
// let arr = [];
// let a = prompt('Введите число');

// while (a !== '' && !isNaN(a)) {
//   arr.push(Number(a));
//   a = prompt('Введите число');
//   arr.sort(function (a, b) {
//     return a - b;
//   });
// }
// console.log(arr);

// 8;
// let arr = [12, false, 'Текст', 4, 2, -5, 0];
// let i = arr.length - 1;
// while (i >= 0) {
//   i--;
//   arr.reverse();
// }
// console.log(arr);

// 9;
// const arr = [5, 9, 21, , , 9, 78, , , , 6];
// let sum = 0;
// for (const i of arr) {
//   if (i === undefined) {
//     sum += 1;
//   }
// }
// console.log(sum);

// 10;
// let arr = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
// let a = arr.indexOf(0);
// let b = arr.lastIndexOf(0);
// let sum = 0;
// for (let i = a; i <= b; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// 11;
// let a = prompt('введите число');
// let i = 0;
// while (i < a) {
//   let b = '';
//   let c = '';
//   for (j = 0; j < a - i; j++) {
//     b += ' ';
//   }
//   for (j = 0; j < 2 * i + 1; j++) {
//     c += '^';
//   }
//   console.log(b + c);
//   i++;
// }
