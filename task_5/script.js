// function ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst('mike'));

// function checkSpam(str) {
//     str = str.toLowerCase();
//     return str.includes('xxx') || str.includes('viagra');
// }

// console.log(checkSpam('innocent rabbit'));

// function truncate(str, maxlength) {
//     console.log(str.length);
//     if (str.length <= maxlength) return str;
//     return str.slice(0, maxlength - 1) + '...';
// }

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
// console.log(extractCurrencyValue('@230'));

//!!! Array

// function sumInput() {
//     let numArr = [];
//     while (true) {
//         let value = prompt('Input value', 0);
//         if (value === '' || value === null || !isFinite(value)) break;
//         numArr.push(+value);
//     }

//     return numArr.reduce((a, b) => a + b, 0);

// }

// console.log(sumInput());

// function getMaxSubSum(arr) {
//     let maxSum = 0, partialSum = 0;

//     arr.forEach(el => {
//         partialSum += el;
//         maxSum = Math.max(maxSum, partialSum);
//         if (partialSum < 0) partialSum = 0;
//     });

//     return maxSum;
// }

// console.log(getMaxSubSum([-1, 2, 3, -9]));

// function camelize(str) {
//     return str.split('-')
//                 .map((item, i) => i == 0 ? item : item[0].toUpperCase() + item.slice(1))
//                 .join('');
// }

// console.log(camelize("list-style-image"));

// function filterRange(arr, a, b) {
//     return arr.filter(item => item >= a && item <= b);
// }
// console.log(filterRange([1, 2, 3, 4, 5], 2, 4));

// function filterRangeInPlace(arr, a, b) {
//     arr.forEach((el, i, arr) => {
//         if (el >= a && el <= b) return;
//         arr.splice(i, 1);
//     });
//     return arr;
// }

// console.log(filterRangeInPlace([5, 3, 8, 1], 1, 4));