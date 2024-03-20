//1.np-----------------------------------------
// let base = Number(prompt("Enter a number"));
// let power = Number(prompt("Enter a number"));
// console.log(base ** power);
// ////(OR)////
// let num1 = Number(prompt("Enter base number"));
// let num2 = Number(prompt("Enter exponent number"));
// let result = 1;

// for (let i = 1; i <= num2; i++) {
//   result *= num1;
// }
// console.log(result);
//2.REVERSE A NUMBER---------------------------------------
// let a = Number(prompt("Enter a number"));
// let rem = 0;
// while (a > 0) {
//   rem = rem * 10 + (a % 10);
//   a = Math.floor(a / 10);
// }
// console.log(rem);
/////or/////////
// let a = Number(prompt("Enter a number"));
// let rem = 0;
// while (a > 0) {
//   rem = rem * 10 + (a % 10);
//   a = (a - (a % 10)) / 10;
// }
// console.log(rem);
/////or/////////
// let num1 = Number(prompt("enter number"));
// let result = num1.toString().split("").reverse().join("");
// console.log(result);
//3.check number prime or not------------------------------------------
// let num = Number(prompt("enter number"));
// let count = 0;
// for (let i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     count++;
//   }
// }
// if (count == 2) {
//   console.log("'it is a prime number'");
// } else {
//   console.log("'it is not a prime number'");
// }
//4.prime between 1 to 10--------------------------------------------
// for (let i = 1; i <= 10; i++) {
//   count = 0;
//   for (let j = 2; j <= i / 2; j++) {
//     if (i % j == 0) {
//       count++;
//       break;
//     }
//   }
//   if (count == 0 && i != 1) {
//     console.log(i);
//   }
// }
//5.count of prime number b/w 1 to 5------------------------------------------
// let start = Number(prompt("enter number"));
// let end = Number(prompt("enter number"));
// let ouput = 0;
// for (let i = start; i <= end; i++) {
//   for (let j = 1; j <= start; j++) {
//     if (i % j === 0) {
//       count++;
//     }
//   }
//   if (count === 2) {
//     output++;
//   }
// }
// console.log(output);
//6. factorial of user enter number---------------------------------------
// let num = Number(prompt("enter number"));
// let fact = 1;
// for (let i = num; i > 0; i--) {
//   fact = fact * i;
// }
// console.log(fact);
//7.strong number or not//145------------------------------------------------------------
// let num = Number(prompt("enter number"));
// let temp = num;
// let sum = 0;
// while (num > 0) {
//   let d = num % 10; //5
//   let fact = 1;
//   for (let i = d; i > 1; i--) {
//     //5 iterate
//     fact *= i;
//   }
//   sum += fact;
//   num = Math.floor(num / 10); //5 remove
// }
// if (sum === temp) {
//   console.log("strong number");
// } else {
//   console.log(" not strong number");
// }
//8.neon number or not-------------------------------------------------------------
// let num = Number(prompt("enter number"));
// let pow = Number(prompt("enter number"));
// let temp = num;
// let mul = 1;
// let sum = 0;
// for (let i = pow; i >= 1; i--) {
//   mul *= num;
// }
// while (mul > 0) {
//   sum += mul % 10;
//   mul = Math.floor(mul / 10);
// }
// if (sum === temp) {
//   console.log("neon number");
// } else {
//   console.log(" not neon number");
// }
//9.prouduct of user enter number-------------------------------------------------------
// let n = Number(prompt("enter number"));
// m = 1;
// while (n > 0) {
//   a = n % 10;
//   m = m * a;
//   n = Math.floor(n / 10);
// }
// console.log(m);
//10.factors of user enter number--------------------------------------------
let n = Number(prompt("enter number"));
for (let i = 0; i < n; i++) {
  if (n % i == 0) {
    console.log(i);
  }
}
