// 1.
const str = 'Привет';
const sum = 123;
const num = 15.8;
const flag = true;
const txt = 'true';
console.log(typeof str, typeof sum, typeof num, typeof flag, typeof txt);

// 2.
let a1 = 5 % 3;
let a2 = 3 % 5;
let a3 = 5 + '3';
let a4 = '5' - 3;
let a5 = 75 + 'кг';
let a6 = 785 * 653;
let a7 = 100 / 25;
let a8 = 0 * 0;
let a9 = 0 / 2;
let a10 = 89 / 0;
let a11 = 98 + 2;
let a12 = 5 - 98;
let a13 = (8 + 56 * 4) / 5;
let a14 = ((9 - 12) * 7) / (5 + 2);
let a15 = +'123';
let a16 = 1 || 0;
let a17 = false || true;
let a18 = true > 0;
console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
console.log(
  typeof a1,
  typeof a2,
  typeof a3,
  typeof a4,
  typeof a5,
  typeof a6,
  typeof a7,
  typeof a8,
  typeof a9,
  typeof a10,
  typeof a11,
  typeof a12,
  typeof a13,
  typeof a14,
  typeof a15,
  typeof a16,
  typeof a17,
  typeof a18,
);

//3.
let height = 23;
let width = 10;
let SPryam = width * height;
console.log(SPryam);

// 4.
let hСylinder = 10;
let dCylinder = 4;
const pi = 3.14;
let VCilindra = (hСylinder * pi * dCylinder ** 2) / 4;
console.log(VCilindra);

// 5.
let rKruga = 5;
let SKruga = pi * rKruga ** 2;
console.log(SKruga);

//6.
let a = 5;
let b = 7;
let h = 10;
let Strap = ((a + b) / 2) * h;
console.log(Strap);

// 7.
let S = 2;
let p = 10;
let years = 5;
let Pereplata = (S / 100) * p * years;
console.log(Pereplata);

// 8.
let a = 8;
let b = 3;
let x = (16 - a) / 2 + b;
console.log(x);
x = (15 * b - a) / (6 - b);
console.log(x);
x = 23780 / (1 + 2 + a + b);
console.log(x);

// 9.
console.log(
  `Бывало, спит у ног собака,
костер занявшийся гудит,
и женщина из полумрака
глазами зыбкими глядит.
\n
Потом под пихтою приляжет
на куртку рыжую мою
и мне, задумчивая, скажет:
\n
\"А ну-ка, спой!...\"- и я пою.`,
);

// 10.
const str1 = 'индо земля зашаталась под ногами-и вырос,';
const str2 = 'и заревел он голосом диким...';
const str3 = 'блеснула молния и ударил гром,';
const str4 = 'а так какое-то чудище, страшное и мохнатое,';
const str5 = 'как будто из-под земли, перед купцом:';
const str6 = 'Он подошёл и сорвал аленький цветочек.';
const str7 = 'зверь не зверь, человек не человек,';
const str8 = 'В ту же минуту, безо всяких туч,';
let text = str6 + str8 + str3 + str1 + str5 + str7 + str4 + str2;
console.log(text);
