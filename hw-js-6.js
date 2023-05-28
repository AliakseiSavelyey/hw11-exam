1;
let str = 'aaa@bbb@ccc';
let newstr = str.replace(/@/gi, '!');
console.log(newstr);

2;
let date = '2025-12-31';
let slashDate = date.replace(/-/g, '/');
console.log(slashDate);

3;
let str = 'Я учу javascript!';
let substrMethod = str.substr(2, 3);
let substrMethod1 = str.substr(6, 10);
console.log(substrMethod);
console.log(substrMethod1);

let substringMethod = str.substring(2, 5);
let substringMethod1 = str.substring(6, 16);
console.log(substringMethod);
console.log(substringMethod1);

let sliceMethod = str.slice(2, 5);
let sliceMethod1 = str.slice(6, 16);
console.log(sliceMethod);
console.log(sliceMethod1);

4;
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i in arr) {
  arr[i] = arr[i] ** 3;
}
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(Math.sqrt(sum));

5;
let a = 3;
let b = 5;
let c = a - b;
if (c < 1) {
  c = 1;
}
console.log(c);

6;
let dateNow = new Date();
let fna = zero => (zero <= 9 ? '0' + zero : zero);
console.log(
  fna(dateNow.getHours()) +
    ':' +
    fna(dateNow.getMinutes()) +
    ':' +
    fna(dateNow.getSeconds()) +
    ' ' +
    fna(dateNow.getDate()) +
    '.' +
    fna(dateNow.getMonth()) +
    '.' +
    fna(dateNow.getFullYear()),
);

7;
const string = 'aa aba abba abbba abca abea';
const str = /ab+a/g;
const result = string.match(str);
console.log(result.toString());

8;
let num = '375 29 123456789';
function validatePhoneNumber(phoneNumber) {
  let validPhoneNumber = /^\d{1,4}\s\d{1,4}\s\d{4,10}$/;
  return validPhoneNumber.test(phoneNumber);
}
console.log(validatePhoneNumber(num));

9;
let youremail = 'info@myitschool.by';
const fna = email => {
  let regexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z]{2,11}$/gi;
  return regexp.test(email);
};
console.log(fna(youremail));
