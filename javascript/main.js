// 1-masala
// let n = +prompt('son kiriting');
// for ( i = 1; i <= n; i++){
//     console.log(i);
// }

// 2-masala
// let n = +prompt('son kiritilsin');
// for ( i = n; i >= 1; i-- ){
//     console.log(i);
// }

// 3-masala
// let n = +prompt('son kiriting');
// let sum = 0;
// for ( i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log(sum);

// 4-masala
// let n = +prompt('son kiriting');
// let sum = 0;
// for ( i = 1; i <= n; i++){
//     if ( i % 2 == 0 ){
//         sum = sum + i;
//     }
// }
// console.log(sum);

// 5-masala
// let n = +prompt('son kiriting');
// let sum = 0;
// for ( i = 1; i <= n; i++){
//     if ( i % 2 == 1 ){
//         sum = sum + i;
//     }
// }
// console.log(sum);

// 6-masala
// let k = +prompt('k son');
// let n = +prompt('n son');
//     if ( n <= 0 ){
//         console.log('n 0 dan katta bolishi kerak');
//     }
//     let result = 0;

//     for (let i = 0; i < n; i++) {
//         result += k;
//     }
//     console.log(`${k} ni kopaytiring ${n} ga ${result}`);

// 7-masala
// let a = +prompt('a son');
// let b = +prompt('b son');
// let count = 0;
// for (let i = a; i <= b; i++) {
//     console.log(i);
//     count++;
// }  if (a >= b) {
//     console.log("a b dan kichik bo'lishi kerak");
// }
// console.log(`${a} va ${b} sonlari orasidagi butun sonlarning umumiy soni: ${count}`);

// 8-masala
// let n = +prompt(`n soni`);
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += 1 / i;
// }   if (n <= 0) {
//     console.log("n 0 dan katta bo'lishi kerak");
// }
// console.log(`n = ${n} uchun S ning yig'indisi: ${sum}`);

// 9-masala
// let a = +prompt("a sonini kiriting!!!");
// let b = +prompt("b sonini kiriting!!!");
// let summ = 0;
// for (let i = a; i <= b; i++) {
//     summ = summ + i;
// }
// console.log(summ);

// 10-masala
// const narxiKg = +prompt('narx')
// for (let i = 1; i <= 10; i++) {
//     const jamiNarxi = i * narxiKg;
//     console.log(`${i} kg konfet narxi: ${jamiNarxi}`);
// }

// 11-masala
// let a = +prompt("a sonini kiriting!!!");
// let b = +prompt("b sonini kiriting!!!");
// let summ = 0;
// for (let i = a; i <= b; i++) {
//     summ = summ + i**2;
// }
// console.log(summ);

// 12-masala
// let a = +prompt("a sonini kiriting!!!");
// let b = +prompt("b sonini kiriting!!!");
// let summ = 0;
// for (let i = a; i <= b; i++) {
//     summ = summ + i;
// }
// console.log(summ);

// 13-masala
// let a = +prompt("a sonini kiriting!!!");
// let b = +prompt("b sonini kiriting!!!");
// let p = 1;
// for (let i = a; i <= b; i++) {
//     p = p * i;
// }
// console.log(p);

// 14-masala
// let n = +prompt("n soni kiritilsin");
// let S = 0;
// for (let i = n; i <= 2*n; i++) {
//     S = S + i**2;
// }
// console.log(S);

// 15-masala
// let n = +prompt("n soni kiritilsin");
// let P = 1;
// for (let i = 1.1; i <= n; i += 0.1) {
//     P = P * i;
// }
// console.log(P);
 
// 16-masala
// const narxiKg = +prompt('narx'); 
// for (i = 1,2; i <= 2,0; i += 0,2) {
//     const jamiNarxi = i * narxiKg;
//     console.log(`${i.toFixed(1)} kg konfet narxi: ${jamiNarxi.toFixed(2)}`);
// }

// 17-masala
// const number = +prompt('son kiriting!!!');
// let boluvchilar = [];
// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         boluvchilar.push(i);
//     }
// }
// console.log(`bo'luvchilar ${number}: ${boluvchilar.join(', ')}`);

// 18-masala
// const number = +prompt('son kiriting!!!');
// let numBoluvchilar = 0;
// let sumBoluvchilar = 0;
// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         numBoluvchilar++;
//         sumBoluvchilar += i;
//     }
// }
// console.log(`bo'luvchilari soni ${number}: ${numBoluvchilar}`);
// console.log(`bo'luvchilari soni ${number}: ${sumBoluvchilar}`);

// 19-masala
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// const number = 29;
// if (isPrime(number)) {
//     console.log(`${number} tub son.`);
// } else {
//     console.log(`${number} tub son emas.`);
// }
