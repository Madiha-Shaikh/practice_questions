// // 1. Find max occurance of a character in given string
// // abcd c cdc
// // [ 'a', 'b', 'c', 'd',' ', 'c', ' ', 'c','d', 'c']
// // hack map approach

// const countMaxCharOccurrence = (str) => {
//     let maxChar = str[0];
//     let map = new Map();
//     let arr = str.split('');
//     for(let i=0;i<arr?.length;i++) {
//         if(arr[i] === ' ') continue;
//         map[arr[i]] =  map[arr[i]] + 1 || 1;
//     }
//     for(let key in map) {
//         if(map[key] > map[maxChar]) {
//             maxChar = key;
//         }
//     }
//     return maxChar;
// }

// const result = countMaxCharOccurrence("abcd c cdc");
// console.log("Result :", result);

// // 2. Find max repeating number
// // N = 4, K = 3
// // Arr[] = {1, 2, 2, 2}
// // Output: 2
// // Explanation: 2 is the most frequent
// // element.

// const findMaxRepeatingNumber = (arr, n, k) => {
//     let map = new Map();
//     let max = arr[0];
//     for(let i=0;i<n;i++) {
//         map[arr[i]] = map[arr[i]] + 1 || 1;
//     }
//     for(let elem in map) {
//         // console.log("max", max,"elem", elem, "map[elem]", map[elem]);
//         if(map[elem] > map[max]) {
//             max = elem;
//         }
//     }
//     return max;
// }

// const result = findMaxRepeatingNumber([0,2,3,3,1,4], 4, 3);
// console.log("Result :", result);

// 3. Reduce polyfill

// Array.prototype.reduce = function (callback, acc) {
//     for(let i=0;i<this?.length;i++) {
//         if(acc) {
//             acc = callback(acc,this[i],i,this);
//         }
//         else acc = this[i];
//     }
//     return acc;
// }

// Array.prototype.myreduceRight = function (callback, acc) {
//     for(let i=this?.length;i>=0;i--) {
//         if(acc) {
//             acc = callback(acc,this[i],i,this);
//         }
//         else {
//             acc = this[i];
//             i = this.length-1;
//         }
//     }
//     return acc;
// }

// let arr = [1,2,3,4];

// const result1 = arr.reduce((a,b) => {
//     return a*b;
// }, 1)

// const result2 = arr.myreduceRight((a,b) => {
//     return a*b;
// }, 1)

// console.log("Result", result1, result2);

// // 4. Reversing a string
// const reverseString = (str) => {
//     let arr = str.split("");
//     let left = 0;
//     let right = arr?.length-1;
//     while(left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//         left++;
//         right--;
//     }
//     return arr.join("");
// }

// const result = reverseString('madiha');
// console.log("result", result);

//   // 5. We have group of people in the form of array and you
//   // have to group people based on category ?

// input:
//   products = [
//     { name: "Apple", category: "fruit" },
//     { name: "wheat", category: "grain" },
//     { name: "Carrot", category: "Vegetable" },
//     { name: "Orange", category: "fruit" },
//     { name: "Banana", category: "fruit" },
//     { name: "Tomatoes", category: "Vegetable" },
//     { name: "Broccoli", category: "Vegetable" },
//     { name: "Beans", category: "Vegetable" },
//   ];
// Output:
//   products={
//    fruit:[
//   {name: "Apple", category: "fruit"},
//   {name: "Orange", category: "fruit"},
//   {name: "Banana", category: "fruit"},
//   ],
//   vegetable:[
//   {name: "Carrot", category: "Vegetable"},
//   {name: "Tomatoes", category: "Vegetable"},
//   {name: "Broccoli", category: "Vegetable"},
//   ]
//   }

// const newProducts = products.reduce((acc, currentObj) => {
//   console.log("currentObj", currentObj, acc);
//   let category = currentObj?.category?.toLowerCase(); //fruit
//   if(!acc[category]) {
//       acc[category] = []
//   }
//       acc[category]?.push(currentObj);
//   return acc;
// }, {})

// // 6. Find second most occuring character

// const find = (str) => {
//     let map = new Map();
//     let first = str[0];
//     let firstCount = 0;
//     let second = str[0];
//     for(let elem of str) {
//         map[elem] = map[elem] + 1 || 1;
//     }
//     for(let elem in map) {
//         // console.log("map", elem, map[elem]);
//         if(map[elem] > map[first]) {
//             first = elem;
//             firstCount = map[elem];
//         }
//         else if(map[elem] < map[first] && map[elem] > map[second]) {
//             second = elem;
//             secondCount = map[elem];
//         }
//     }
//     console.log("first", first, "second", second);
//     // console.log("map", Object.entries(map));
//     return first;
// }

// const result = find('caaacbd');
// console.log("result", result);

// // 7. Check Palidrom

// const checkPalidrom = (str) => {
//     let l = 0;
//     let r = str?.length-1;
//     while(l<r) {
//         if(str[l] === str[r]) {
//             l++;
//             r--;
//         } else {
//             return false;
//         }
//     }
//     return true;
// }

// const res = checkPalidrom('1221');
// console.log("result", res);

// // 8. find duplicate number in array
// // 1st approach
// // Time complexity - O(n^2)
// // space complexity - O(n)
// const findDuplicate = (arr) => {
//     let duplicateArr = [];
//     for(i=0;i<arr.length;i++) {
//         for(j=i+1;j<arr.length;j++) {
//             if(arr[i] === arr[j]) {
//                 duplicateArr.push(arr[i])
//             }
//         }
//     }
//     return duplicateArr;
// }

// // 2nd approach
// // {1:2,2:1,3:1,4:1,6:1}
// // Time complexity - O(n)
// // space complexity - O(n)
// const findDuplicate2 = (arr) => {
//     let duplicateArr = [];
//     let map = new Map();
//     for(i=0;i<arr.length;i++){
//         map[arr[i]] = map[arr[i]] + 1 || 1;
//     }
//     // console.log("map", map);
//     for(let elem in map) {
//         // console.log("elem", elem);
//         if(map[elem] > 1) {
//             duplicateArr.push(elem)
//         }
//     }
//     return duplicateArr;
// }

// const result1 = findDuplicate([1, 2, 3, 4, 1, 6, 6, 8, 9, 10, 5]);
// console.log("result 1", result1);
// const result2 = findDuplicate2([1, 2, 3, 4, 1, 6, 7, 6, 8, 9, 10, 5]);
// console.log("result 2", result2);

// // 9. Remove duplicate number from array
// // time complexity - O(n) where n is the length of array
// // space complexity - O(n)

// const RemoveDuplicate = (arr) => {
//   let uniqArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqArr.includes(arr[i])) uniqArr.push(arr[i]);
//   }
//   return uniqArr;
// };

// const result = RemoveDuplicate([1, 2, 3, 4, 1, 6, 6, 8, 9, 10, 5]);
// console.log("result", result);

// // 10. Write a program to check whether number is perfect number or not ?
// // time complexity - O(num)
// // space complexity - O(1)

// const checkPerfectNum = (num) => {
//   let sum = 0;
//   for (i = 1; i < num; i++) {
//     if (num % i == 0) {
//       sum += i;
//     }
//   }
//   console.log("sum", sum);
//   if (sum === num) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkPerfectNum(28));

// // 11.  Find the largest and smallest number in an unsorted array of integers?
// // time complexity - O(n) where n is the length of array
// // space complexity - O(1)

// const findMaxAndMin = (arr) => {
//     let min = arr[0];
//     let max = arr[0];
//     for(let i=1;i<arr.length;i++) {
//         if(min > arr[i]) {
//             min = arr[i]
//         }
//         if(max < arr[i]) {
//             max = arr[i]
//         }
//     }
//     return {min, max};
// }

// console.log(findMaxAndMin([300, 6, 7, 9, 10, 200, 89, 3, 4, 0.5, 100]));

// // 12. Return an array showing the cumulative sum at each index of an array of integers?
// // time complexity - O(n) where n is the length of array
// // space complexity - O(n)

// // 1st approach
// const findCumulativeSum = (arr) => {
//     let resArr = [];
//     let sum = 0;
//     for(let i=0;i<arr.length;i++) {
//         sum += arr[i]
//         resArr.push(sum);
//     }
//     return resArr;
// }

// console.log(findCumulativeSum([1, 3, 5, 7]));
// // output - [1,4,9,16]

// // 2nd approach
// // time complexity - O(n) where n is the length of array
// // space complexity - O(1)
// const findCumulativeSum = (arr) => {
//     for(let i=1;i<arr.length;i++) {
//         arr[i] += arr[i-1]
//     }
//     return arr;
// }

// console.log(findCumulativeSum([1, 5, 6, 7]));
// // output - [1,6,12,19]

// 13. You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order,
// starting with word1. If a string is longer than the other, append the
// additional letters onto the end of the merged string.
// Return the merged string.
// Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

//  time complexity = O(maxArr length)
// const mergeTwoString = (str1, str2) => {
//   let arr = [];
//   let min;
//   let max;
//   if (str1.length < str2.length) {
//     min = str1.length;
//     max = str2.length;
//   } else {
//     min = str2.length;
//     max = str1.length;
//   }
//   for (let i = 0; i < min; i++) {
//     arr.push(str1[i]);
//     arr.push(str2[i]);
//   }
//   for (let j = min; j < max; j++) {
//     if (!str1[j]) {
//       arr.push(str2[j]);
//     } else {
//       arr.push(str1[j]);
//     }
//   }
//   return arr;
// };

// const mergeTwoString = (str1, str2) => {
//     let arr = [];
//     if(str1.length > str2.length) return mergeTwoString(str2, str1);
//     for (let i = 0; i < str1.length; i++) {
//       arr.push(str1[i]);
//       arr.push(str2[i]);
//     }
//     for (let j = str1.length; j < str2.length; j++) {
//       if (!str1[j]) {
//         arr.push(str2[j]);
//       } else {
//         arr.push(str1[j]);
//       }
//     }
//     return arr;
//   };
// console.log(mergeTwoString("abcxyz", "pqr"));

// function throttle(callBack, d) {
//     return function (...args) {
//     //   document.getElementById("myBtn").disabled = true;
//       setTimeout(() => {
//         callBack();
//       }, d);
//     };
//   }

// function throttle(callback, delay = 1000) {
//   let shouldWait = false;
//   return (...args) => {
//     if (shouldWait) return;
//     callback(...args);
//     shouldWait = true;
//     setTimeout(() => {
//           shouldWait = false;
//     }, delay);
//   };
// }

// function debounce(callBack, d) {
//     let timer = d;
//     return function (...args) {
//         if(timer) {
//             timer = clearTimeout(timer);
//         }
//         timer = setTimeout(() => {
//             callBack()
//         }, d)
//     }
//   }

//   const throttledOutput = throttle(() => console.log("hello"), 2000);
//   throttledOutput();
//   const debounceedOutput = debounce(() => console.log("hi"), 2000);
//   debounceedOutput();

// // 14. Find the group of missing number in a given integer array of 1 to 100?
// // time complexity = O(n) where n is the length of array
// // space complexity = O(n)
// const findMultiMissing = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let curr = arr[i];
//     let next = arr[i + 1];
//     while (curr + 1 < next) {
//       newArr.push(curr + 1);
//       curr++;
//     }
//   }
//   return newArr;
// };

// console.log(findMultiMissing([1, 2, 4, 5, 6, 7, 9, 10, 18]));

// // 15. Find all duplicate numbers in an array with multiple duplicates?
// // time complexity = O(n)
// // space complexity = O(n)

// const findDuplicateUnsortedArr = (arr) => {
//   let map = new Map();
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     map[arr[i]] = map[arr[i]] + 1 || 1;
//   }
//   for(let elem in map) {
//     if(map[elem] > 1) {
//         newArr.push(elem)
//     }
//   }
//   return newArr;
// };

// console.log(
//   findDuplicateUnsortedArr([1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10])
// );

// 16.Find all pairs in an array of integers whose sum is equal to a given number?

// const findSumPairs = (arr, value) => {
//     let newArr = [];
//     let map = {};
//     let diff;
//     for(let i=0;i<arr.length;i++) {
//         diff = value-arr[i] // 6-1 = 5, check if arr includes 5 -> if so then push [1,5] in newArr
//         if(arr.includes(diff)) {
//             map[[arr[i], diff]] = map[[arr[i], diff]] || 1;
//             // newArr.push([arr[i], diff])
//         }
//     }
//     for(let elem in map) {
//         newArr.push(elem.split(','))
//     }
//     // return map;
//     return newArr;
// }

// console.log(findSumPairs([1, 5, 6, 1, 0, 1], 6));

// // 17. Left Rotate
// // time complexity = O(n)
// // space complexity = O(n)
// // 1st approach with temporary array

// const rotateArray = (arr, k) => {
//     let temp = [];
//     for(let i=k;i<arr.length;i++) {
//         temp.push(arr[i])
//     }
//     for(let i=0;i<k;i++) {
//         temp.push(arr[i])
//     }
//     arr = temp;
//     return arr;
// }

// console.log(rotateArray([1, 2, 3, 4, 5], 3));

// // 2nd approach -> In place approach

// const rotateArray = (arr, k) => {
//   let count = 0;
//   while (count < k) {
//     let last = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] = arr[i + 1];
//     }
//     arr[arr.length-1] = last
//     count++
//   }
//   return arr;
// };

// console.log(rotateArray([1, 2, 3, 4, 5], 3));

// // 18.
// // time complexity - O(n)
// // space complexity - O(n)
// const longestUniqSubstring = (str) => {
//     let uniqSet = new Set();
//     let start = 0;
//     let end = 0;
//     let count = 0;
//     if(!str) return 0;
//     while(end < str.length) {
//         if(!uniqSet.has(str[end])) {
//             uniqSet.add(str[end])
//             end++
//             count = Math.max(count, uniqSet.size)
//         }
//         else {
//             uniqSet.delete(str[start])
//             start++;
//         }
//     }
//     // console.log("uniqSet", uniqSet);
//     return count;
// }

// // const result = longestUniqSubstring("abcabcbb");   // case 1 ['b','c']
// const result = longestUniqSubstring("pwwepwepd"); // case 2
// console.log("result", result);

// // output = 3 , substring = abc;
// //   abcabcbb
// //   abcabcbb    string.length = 8   ( end < string.length )  8 < 8 false

// // ['b']                           start 7, end 8, count 3

// // 'a b c a b c b b'
// // [a, b, c] start = 0, end = 3
// // [] start = 4, end = 4

// // 19. Reduce polyfill
// Array.prototype.myReduce = function (func, acc) {
//   for (let i = 0; i < this.length; i++) {
//     if (acc) {
//       acc = func(acc, this[i], i, this);
//     } else {
//       acc = this[i];
//     }
//   }
//   return acc;
// };

// console.log(
//   "result is",
//   [1, 2, 3, 4, 5].myReduce((a, b) => a + b, 100)
// );

// // 20. Given two arrays arr1 and arr2, determine if each element in arr2 is the square of an element in arr1, and the frequency of each element's square in arr2 matches the frequency of the corresponding element in arr1.

// // time complexity = O(n+m)
// // space complexity = O(n+m)
// const findSquare = (arr1, arr2) => {
//   // [1,2,3,4] -> [1,4,9,16] true
//   // [1,2,3,4] -> [1,4,9] false
//   let map1 = new Map();
//   let map2 = new Map();
//   for (let i = 0; i < arr1.length; i++) {
//     map1[arr1[i]] = map1[arr1[i]] + 1 || 1;
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     map2[arr2[i]] = map2[arr2[i]] + 1 || 1;
//   }
//   for (let elem in map1) {
//     if (!map2[elem * elem]) {
//       return false;
//     }
//     if (map1[elem] !== map2[elem * elem]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(findSquare([1, 2, 3, 3, 4], [1, 4, 9, 16])); // o/p = false
// console.log(findSquare([1, 2, 3, 3, 4], [1, 4, 9, 9, 16])); // o/p = true

// // 21. elements in 3 arrays = 3,5
// // [1,2,3,8,5]
// // [4,3,5,0]
// // [5,10,3,20]

// const getIntersectionOfThreeArrays = (arr1, arr2, arr3) => {
//     let i = 0;
//     let j = 0;
//     let k = 0;
//     let commonArr = [];
//     while (i < arr1.length && j < arr1.length && k < arr1.length) {
//       if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
//         commonArr.push(arr1[i]);
//         i++;
//         j++;
//         k++;
//       } else if (arr1[i] < arr2[j]) {
//         i++;
//       } else if (arr2[j] < arr3[k]) {
//         j++;
//       } else {
//         k++;
//       }
//     }
//     return commonArr;
//   };

// console.log(getIntersectionOfThreeArrays([1,2,3,8,5], [4,3,5,0], [5,10,3,20]));
// [1,2,3,8,5]
// [4,3,5,0]
// [5,10,3,20]

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// const xhr = XMLHttpRequest();
// console.log("response", xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1'))

// 22. Large numbers multiplication

// Convert the input numbers to BigInt
// Example usage

// function multiplyLongNumber(n1, n2) {
//     let n1C = n1.split('').reverse();
//     let n2C = n2.split('').reverse();

//     let result = new Array(n1C.length + n2C.length).fill(0);
//     let carry = 0;

//     for(let i=0; i<n2C.length; i++) {
//         carry = 0;
//         for(let j=0; j<n1C.length; j++) {
//             let product = n1C[j] * n2C[i] + carry + result[i+j];
//             carry = Math.floor(product/10);
//             result[i+j] = product%10;
//         }
//         result[i+n1C.length] = carry;
//     }
//     // console.log(result.reverse().join(''))
//     console.log(result.join(''))
// }

// multiplyLongNumber('2345', '5432');

// const mergeProblem = (arr1, arr2) => {
//   let p1 = 0;
//   let p2 = 0;
//   let out1 = [];
//   let out2 = [];

//   const func = (num) => {
//     // console.log("called");
//     if (out1.length < arr1.length) {
//       out1.push(num);
//     } else {
//       out2.push(num);
//     }
//   };

//   while (p2 < arr2.length && p1 < arr1.length) {
//     if (arr1[p1] < arr2[p2]) {
//       func(arr1[p1]);
//       p1++;
//     } else {
//       // func(arr2, out1, out2, p2)
//       func(arr2[p2]);
//       p2++;
//     }
//   }
//   while (p1 < arr1.length) {
//     if (out1.length < arr1.length) {
//       out1.push(arr1[p1]);
//     } else {
//       out2.push(arr1[p1]);
//     }
//     p1++;
//   }
//   while (p2 < arr2.length) {
//     if (out2.length < arr2.length) {
//       out2.push(arr2[p2]);
//     } else {
//       out1.push(arr2[p2]);
//     }
//     p2++;
//   }

//   console.log("out1", out1, "out2", out2, p1, p2);
//   //   return [out1, out2]
// };

// console.log(mergeProblem([2, 3, 4, 10], [6])); // p1=0 || p2=0
// let newArr = [1, 0];
// console.log(typeof newArr[2] === "number");

// // Next Greater Element III

// const nextGreaterElem = (num) => {
//     let num2 = num.toString().split('').reverse().join('');
//     console.log("num2", num2);
//     if(num2 > num) {
//         return num2
//     } else return -1
// }

// console.log(nextGreaterElem(81));

// // 1st approach
// const reverseVowels = (str) => {
//     let arr = ['a','e','i','o','u'];
//     let p1 = 0;
//     let arr1 = str.split('');
//     for(let i=0;i<str.length;i++) {
//         if(arr.includes(str[i])) {
//             res.push(str[i])
//         }
//     }
//     res = res.reverse();
//     for(let i=0;i<str.length;i++) {
//         if(arr.includes(str[i])) {
//             arr1[i] = res[p1];
//             p1++;
//         }
//     }
//     return arr1.join('');
// }

// console.log(reverseVowels("hello"))

// 2nd approach

// const reverseVowels = (str) => {
//     let arr = ['a','e','i','o','u'];
//     let left = 0;
//     let right = str.length-1;
//     let arr1 = str.split('');
//     while(left < right) {
//         if(!arr.includes(arr1[left].toLowerCase())) {
//             left++;
//         }
//         if(!arr.includes(arr1[right].toLowerCase())) {
//             right--;
//         }
//         else {
//         [arr1[left], arr1[right]] = [arr1[right], arr1[left]]
//         left++;
//         right--;
//         }
//     }
//     return arr1.join('')
// }

// console.log(reverseVowels("leetcode"))

// 16.Find all pairs in an array of integers whose sum is equal to a given number?

// const findSumPairs = (arr, value) => {

// }

// console.log(findSumPairs([1, 5, 6, 1, 0, 1], 6));

// const gcdOfStrings = (str1, str2) => {
//   let res = [];
//   let arr2 = str2.split(',')
//   let p = 0;
//   if (str2.length > str1.length) {
//     return "";
//   }
//   while(p < str1.length-1) {
//     if(arr2.includes(str1[p]) && !res.includes(str1[p])) {
//       res.push(str1[p])
//     }
//     p++
//   }
//   return res.join('')
// };

// console.log(gcdOfStrings("abcdef", "abc"));
// console.log(gcdOfStrings("ab", "abab"));
// console.log(gcdOfStrings("ababab", "abab"));
// console.log(gcdOfStrings("abcabc", "abc"));

// Array.prototype.myMap = function(cb) {
//   let arr = [];
//   for(let i=0;i<this.length;i++) {
//     arr.push(cb(this[i],this,i))
//   }
//   return arr;
// }

// Array.prototype.myFilter = function(cb) {
//   let arr = [];
//   for(let i=0;i<this.length;i++) {
//     if(cb(this[i], this, i)) {
//       arr.push(this[i])
//     }
//   }
//   return arr;
// }

// Array.prototype.myReduce = function(cb, acc) {
//   for(let i=0;i<this.length;i++) {
//     if(acc) {
//       acc = cb(acc,this[i],this,i)
//     } else {
//       acc = this[0];
//     }
//   }
//   return acc;
// }

// console.log([1,2,3,4].myMap((i) => i*10));
// console.log([1,2,3,4].myFilter((i) => {
//   if(i>2) {
//     return i
//   }
// }));
// console.log([1,2,3,4].myReduce((i,j) => i+j, 100));

// useMemo polyfill

// const multiply = (a, b) => {
//   return a * b;
// };

// const memoizedFunc = (cb) => {
//   let cache = {};
//   return (...args) => {
//     let key = JSON.stringify(...args)
//     console.log(args,cache[key])
//     if (!cache[key]) {
//       console.log("computing...")
//       cache[key] = cb(...args);
//     }
//     return cache[key];
//   };
// };

// const memoFn = memoizedFunc((a,b) => a*b);
// console.log(memoFn(123, 321));
// console.log(memoFn(123, 321));

// const debounce = (cb, d) => {
//   return function(...args) {
//     let timer = d;
//     timer = clearTimeout(timer);
//     timer = setTimeout(() => {
//       cb(...args);
//     }, d);
//   };
// };

// const res = debounce((a,b) => console.log("called", a+b), 2000);
// const res1 = debounce((a,b) => console.log("called", a+b), 2000);
// res(2,3);
// res1(20,30);

// find if subsequence exists or not

// const findSubSequence = (org, sub) => {

// }

// console.log(findSubSequence('abcde', 'ace'))
// console.log('abcde'.split(2))

// const isSubsequence = (s, t) => {
//   // t = 'abcde'
//   // s = 'ace'
//   // ['a','b','c','d','e']
//   let index = 0;
//   let found = 0;
//   for(let i=0;i<s.length;i++) {
//     while(index < t.length) {
//       if(s[i] === t[index]) {
//         found++;
//       }
//       index++;
//     }
//     // if(found !== s.length) {
//     //   return false;
//     // }
//     // return true;
//   }
//   console.log("found", found)
//   // console.log("found", found)
// };

// console.log(isSubsequence("baab", "baab"));
// // console.log(isSubsequence("aih", "madiha"));

// function PromisePolyfill (executer) {
//   let onResolve, onReject;
//   let isFullfilled = false;
//   let isRejected = false;
//   let isCalled = false;
//   let value;

//   const resolve = (val) => {
//     isFullfilled = true;
//     value = val;
//     if(typeof onResolve === 'function') {
//         onResolve(val);
//         isCalled = true;
//     }
//   };
//   const reject = (val) => {
//     isRejected = true;
//     value = val;
//     if(typeof onReject === 'function') {
//         onReject(val);
//         isCalled = true;
//     }
//   };

//   this.then = function(cb) {
//     onResolve = cb;
//     if(isFullfilled && !isCalled) {
//         isCalled = true;
//         onResolve(value);
//     }
//     return this;
//   }

//   this.catch = function(cb) {
//     onReject = cb;
//     if(isRejected && !isCalled) {
//         isCalled = true;
//         onReject(value);
//     }
//     return this;
//   }

//   try {
//     executer(resolve, reject);
//   } catch (error) {
//     reject(error)
//   }
// };

// const p = new PromisePolyfill((resolve, reject) => {
//   setTimeout(() =>
//     // resolve(200)
//     reject("404")
//   , 2000);
// });

// // console.log('promise', p)
// p.then((value) => console.log("resolved with status", value)).catch((err) => console.log("rejected with error", err));

// const deepClone = (obj) => {
//     if (typeof obj !== 'object' || obj === null) {
//       return obj; // Base case: return primitives or null
//     }

//     const newObj = Array.isArray(obj) ? [] : {};  // Create array or object for clone
//     for (const key in obj) {
//       newObj[key] = deepClone(obj[key]);  // Recursive call to clone nested objects
//     }
//     return newObj;
//   }

// const original = { name: 'Alice', age: 30, address: { city: 'New York' } };
// const clone = deepClone(original);

// console.log(original == clone);      // Output: false (different objects)
// console.log(original.address === clone.address)
// // console.log(original, clone);

// const org = {name: 'x', years: { num: 2 }};
// const newOrg1 = Object.create(org)
// const newOrg2 = Object.assign({}, org)
// let newOrg3;
// newOrg3 = org;
// // newOrg3.name = 'y'

// // console.log(org, newOrg1, newOrg2, newOrg3)
// console.log(org === newOrg1, org === newOrg2, org === newOrg3) // false false true
// console.log(org.name === newOrg2.name, org.years === newOrg1.years) // true true

// newOrg3.name = "madiha";
// console.log(org.name, newOrg1.name, newOrg2.name, newOrg3.name); // madiha madiha x madiha
// example = [1, 2, 3, [4, 5, [7, 8]]]; // return the sum of the elements

// const flatMap = (arr) => {
//   // let temp = [];
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       count += flatMap(arr[i]);
//     } else {
//       count += arr[i];
//     }
//   }
//   return count;
// };

// const sumUp = (arr) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     count += arr[i];
//   }
//   return count;
// // };

// Array.prototype.myReduce = function (cb, acc) {
//   for (let i = 0; i < this.length; i++) {
//     if (acc) {
//       acc = cb(acc, this[i], i, this);
//     } else {
//       acc = this[i];
//     }
//   }
//   return acc;
// };

// result = flatMap(example);
// // console.log("result is", sumUp(result));
// console.log("result is", result);

// // Question :

// const input = {
//   name: {
//     firstName: 'A',
//     lastName: 'B',
//   },
//   address: {
//     city: "Delhi",
//     state: "New Delhi",
//     country: "India",
//   },
//   dept: {
//     it: "IT",
//   },
// }

// // output : {
// //   name.firstName: 'A',
// //   name.lastName: 'B',
// //   address.city: 'Delhi',
// //   address.state: 'New Delhi',
// //   address.country: 'India',
// // }

// // // 1st Approach
// // const flattenedObj = (obj, prefix) => {
// //   let tempObj = {};
// //   for (let [key, value] of Object.entries(obj)) {
// //     let newKey = prefix ? `${prefix}.${key}` : key;
// //     console.log("key", key, "value", value);
// //     if(typeof value === 'object' && value !== null) {
// //       Object.assign(tempObj, flattenedObj(value, newKey))
// //     } else {
// //       tempObj[newKey] = value
// //     }
// //   }
// //   return tempObj;
// // }

// console.log(flattenedObj(input));

// // Two Sum (LeetCode #1):
// // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target

// let arr = [12, 2, 4, 10, 7];
// let targetSum = 11;

// //edge case -
// // 1. array is empty
// // 2. a couple of pairs can make target sum - example - [2,9], [4,7] -> return the one encountered first

// // //  1st approach with O(n^2) time complexity
// // const findIndices = (arr, value) => {
// //   // iterate through the arr to find elements that sum up to get value
// //   if (arr.length) {
// //     for (let i = 0; i < arr.length; i++) {
// //       let diff = targetSum - arr[i]
// //       if (arr.includes(diff)) {
// //         return [i, arr.indexOf(diff)]
// //       }
// //     }
// //   } else {
// //     return -1 // Array is empty
// //   }
// // }

// // 2nd approach with O(n) time complexity
// const findIndices = (arr, value) => {
//   let map = new Map();
//   // {"12":0, "2":1, "4":2, "10":3 }
//   for (let i = 0; i < arr.length; i++) {
//     let diff = targetSum - arr[i];
//     if (map[diff]) {
//       return [map[diff], i]
//     } else {
//       map[arr[i]] = i;
//     }
//   }
//   return -1 // if no pair is found
// }

// console.log(findIndices(arr, targetSum));

// // time complexity - O(n)
// // space complexity - constant O(1)
// const isAnagram = (t, s) => {
//   // {r:1,a:1,c:1,e:1} -> {r:0,a:0,c:0,e:0} -> {}
//   // 'care'
//   if(t.length !== s.length) return false;
//   let map = new Map();
//   for (let elem of t) {
//     map[elem] = map[elem] + 1 || 1;
//   }
//   for(let elem of s) {
//     if(map[elem]) {
//       map[elem] -= 1;
//       if(map[elem] === 0) {
//         delete map[elem]
//       }
//     }
//     else {
//       return false;
//     }
//   }
//   return map.size === 0;
// }

// console.log(isAnagram('race', 'car'));

// // Q. Find the frequency of elements in array
// // let arr = ['hello', 'world', 'hello', 'text', 'world']

// // 1st approach
// const findFrequency = (arr) => {
//   let map = new Map();
//   for(let i=0;i<arr.length;i++) {
//     map[arr[i]] = map[arr[i]] + 1 || 1;
//   }
//   return map
// }

// // 2nd approach - using reduce
// const findFrequency = (arr) => {
//   return arr.reduce((acc, item) => {
//     if (acc[item]) {
//       acc[item] = acc[item] + 1
//     } else {
//       acc[item] = 1;
//     }
//     return acc;
//   }, {});
// }

// console.log(findFrequency(arr));

// // Q. Group items on the basis of age of given array of object
// // input ->

// let people = [
//   { name: 'Ro', age: 20},
//   { name: 'Jack', age: 21},
//   { name: 'Estelle', age: 20},
// ]

// // output ->
// // {
// //   "20": [{ name: 'Ro', age: 20}, { name: 'Estelle', age: 20}],
// //   "21": [{ name: 'Jack', age: 21}]
// // }

// // {[obj.age]: []}

// const groupByAge = (arr) => {
//   return arr.reduce((acc, obj) => {
//     let ageKey = obj.age;
//     if(!acc[ageKey]) {
//       acc[ageKey] = []
//     }
//     acc[ageKey]?.push(obj)
//     return acc;
//   }, {})
// }

// console.log(groupByAge(people));

// // Q. Collect books from array of objects and return collection of books as an array

// let friends = [
//   {
//     name: 'Alice',
//     books: ['Bible', 'Harry Potter'],
//     age: 21,
//   },
//   {
//     name: 'Bob',
//     books: ['Twilight', 'Anxious People'],
//     age: 21,
//   },
//   {
//     name: 'Anna',
//     books: ['Romeo and Juliet', 'The Shinning'],
//     age: 21,
//   },
// ]

// // output ->
// // [
// //   'Bible',
// //   'Harry Potter',
// //   'Twilight',
// //   'Anxious People',
// //   'Romeo and Juliet',
// //   'The Shinning'
// // ]

// const collectBooks = (arr) => {
//   return arr.reduce((acc, item) => {
//     acc.push(...item.books)
//     return acc;
//   },[])
// }

// console.log(collectBooks(friends));

// // Q. Print all duplicate elements of an array

// let nums = [2,1,2,5,5,6,7,6,8,7]

// const duplicateElem = (arr) => {
//   return arr.filter((item, index) => {
//     return arr.indexOf(item) !== index
//   })
// }

// console.log(duplicateElem(nums));

// // Q. Find the pairs of array element for which sum is equal to given target value (Two Sum Problem)
// // output -> [[6,3], [7,2], [8,1]]
// const findPair = (arr, target) => {
//   let temp = [];
//   let hash = new Map();
//   for(let i=0;i<arr.length;i++) {
//     let diff = target - arr[i];
//     if(hash[diff.toString()]) {
//       temp.push([arr[i], diff])
//     }
//     hash[arr[i].toString()] = arr[i]
//   }
//   return temp;
// }

// console.log(findPair([1,2,3,4,6,7,8,9], 9));

// // Q. Longest substring without repeating characters

// const longestSubString = (s) => {
//   // a b a c b
//   // {a,b,} -> {b,a,c} -> {a,c,b}
//   let set1 = new Set();
//   let left = 0;
//   let count = 0;
//   for(let right=0; right<s.length;right++) {
//     if(set1.has(s[right])) {
//       set1.delete(s[left]);
//       left++;
//     }
//     set1.add(s[right]);
//     count = Math.max(count, set1.size);
//   }
//   console.log(set1);
//   return count;
// }

// console.log(longestSubString('abcabcbb'));

// // Q. Infinite currying through Recursion
// // add(1)
// // add(1)(2)
// // add(1)(2)(3) //=> 6;
// // add(1)(2)(3)(4) //=> 10;

// const add = (num) => {
//     return function (num2) {
//         if (num2) {
//             return add(num2 + num);
//         } else {
//             return num;
//         }
//     }
// }

// console.log(add(1)(2)(3)())

// // call method

// function greet(greeting, text) {
//     console.log(`${greeting} ${this.name} ${text}!`);
// }

// function sum() {
//     const totalAge = this.reduce((acc, obj) => acc+obj.age, 0);
//     console.log("age is", totalAge);
// }

// const person = {
//     name: 'Alice',
// }

// const persons = [
//     {
//         name: 'Alice',
//         age: 20
//     },
//     {
//         name: 'Bob',
//         age: 10
//     },
//     {
//         name: 'Jack',
//         age: 30
//     }
// ]

// greet.call(person, 'Hello', 'Welcome');
// // sum.call(persons);

// // sum.apply(persons);

// const func = sum.bind(persons);
// func();

// // apply method - have to pass arguments in an array

// greet.apply(person, ['Hola', 'Welcome']);

// // Q. Rain water trapping problem

// const findTrappedWater = (arr) => {

// }

// console.log(findTrappedWater());

// const factorial = (n) => {
//     if(n <= 2) {
//         return n;
//     }
//     return n * factorial(n-1);
// }

// console.log(factorial(5)); // output = 120

// const fibonacci = (n) => {
//   // sequence = 0,1,1,2,3,5,8,13,21,34,55
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(0));

// const reverseString = (s) => {
//     let arr = s.split('');
//     let left=0;
//     let right=arr.length-1;
//     while(left<right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]]
//         left++;
//         right--;
//     }
//     return arr.join('');
// }

// console.log(reverseString('nick'));

// Array.prototype.flat = function () {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         if (Array.isArray(this[i])) {
//             temp.push(...this[i].flat())
//         } else {
//             temp.push(this[i])
//         }
//     }
//     return temp;
// }

// console.log([1, 2, [3, 4, [5, 6], 7], 8].flat());

// const checkPalidrom = (s) => {
//     let left = 0;
//     let right = s.length-1;
//     while(left<right) {
//         if(s[left] !== s[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

// console.log(checkPalidrom('1'));

// // closure

// const outer = () => {
//     for(var i=0;i<=5;i++) {
//         setTimeout(() => {
//             console.log("i", i);
//         }, i*1000)
//     }
//     console.log("Hello");
// }

// outer();

// const outer = () => {
//     var a = 10;
//     const y = () => {
//         console.log("a is", a);
//     }
//     a = 100;
//     y();
// }

// outer();

// // add(1)
// // add(1)(2)
// // add(1)(2)(3) //=> 6;
// // add(1)(2)(3)(4) //=> 10;

// function add(a) {
//     // console.log("a",a);
//     return function(b) {
//         // console.log("b",b);
//         if(b) {
//             return add(a+b)
//         }
//         else {
//             return a;
//         }
//     }
// }

// // const res = add(1)(2);
// // res();
// const result = add(1)(4)();
// console.log(result);

// const multiply = (a, b) => {
//     return a * b
// }

// const memo = (cb) => {
//     let cache = {};
//     return function (...args) {
//         let key = args;
//         if (!cache[key]) {
//             cache[key] = cb(...args)
//         }
//         return cache[key];
//     }
// }
// const memoizedFunc = memo(multiply)
// console.log(memoizedFunc(100, 3));

// // Class

// class Obj {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//         this.greet = function () {
//             return `${this.name}'s age is ${this.age}`;
//         };

//     }
// }

// // Constructor Function

// function Obj(name, age) {
//     this.name = name;
//     this.age = age;

//     this.greet = function () {
//         return `${this.name}'s age is ${this.age}`;
//     }

// }

// let obj2 = new Obj('Bob', 21);
// // let obj3 = new Obj('Madiha', 21);

// // obj2.name = "Bobby";
// console.log(Obj.prototype.name);
// // console.log(obj3.greet());

// const person = {
//     name: 'Alice',
//     age: 30,
//     greet() {
//       return `Hello, my name is ${this.name}`;
//     }
//   };

// //   person.name = 'bob'
//   let obj = person
//   let obj1 = Object.create(person);
//   let obj2 = Object.assign({},person);
//   obj1.name = 'Madiha';
//   console.log(person.name, obj.name, obj1.name, obj2.name); // Alice, Alice, Madiha, Alice

// // Encapsulation Example

// class Person {
//     #name; // created name as private variable
//     constructor(name, age) {
//         this.#name = name;
//         this.age = age;
//     }

//     getName() {
//         return this.#name;
//     }
// }

// const person1 = new Person('Alice', 22);
// console.log(person1.age, person1.getName()); // can't access name directly as person1.#name

// function call () {
//     if(true) {
//         var a = 10;
//         console.log(a);
//     }
//     console.log(a);
// }

// call()

// // useEffect(() => {
// //     console.log('component did update');

// //     return () => {
// //         console.log("comp. will unmount");
// //     }
// // }, [count])

// // const name = 'ABC';

// const obj = {
//     id: 1,
//     key: 'text',
//     nestedObj: {
//         dataId: 100,
//     }
// }

// const arr = [{
//     id: 1,
//     key: 'text',
//     nestedObj: {
//         dataId: 100,
//     }
// }]

// // const obj1 = {...obj};
// const arr1 = [...arr]; // shallow copy

// const arr2 = arr.map((item) => item); // shallow copy

// const arr3 = JSON.parse(JSON.stringify(arr2)); // deep copy

// const arr4 = arr.slice(); // shallow copy

// arr4[0].id = 3;
// arr4[0].nestedObj.dataId = 200;

// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

// obj1.id = 2;
// obj1.nestedObj.dataId = 200;

// obj = {

// }

// console.log(obj, obj1, arr, arr1);

// const add = (a) => {
//     return function(b) {
//         // add(a+b)
//         return a+b
//     }
// }

// let result = add(15);
// console.log(result(10));

// interface NestedObjInter {
//     dataId: Number,
// }

// interface Object {
//     id: Number,
//     ley: String,
//     nestedObj: Record<String,Number>
//     moreNestedObj: Record<String,any>
// }

// const obj: Object = {
//         id: 1,
//         key: 'text',
//         nestedObj: {
//             dataId: 100,
//         }
//     }

// // reversing string

// // space and time complexity both are O(n)

// const reverseString = (str) => {
//     let arr = str.split('');
//     let left = 0;
//     let right = arr.length-1;
//     while(left<right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//         left++;
//         right--;
//     }
//     return arr.join('');
// }

// console.log(reverseString('Madiha Hello Ji'));

// // Maximum Occuring string

// const maxOcc = (str) => {
//     if (str.length <= 1) {
//         return str || -1;
//     }
//     let map = new Map();
//     let max = str[0];
//     for (let elem of str) {
//         map[elem] = map[elem] + 1 || 1;
//     }
//     for (let elem in map) {
//         if (map[elem] > map[max]) {
//             max = elem;
//         }
//     }
//     return max;
// }

// console.log(maxOcc('madihahhh'));

// add number digits till we get a single digit - [2389 = 22 = 4]

// // time complexity = O(log n) -> n is the number of digits
// // space complexity = O(log n)
// const countDigit = (num) => {
//   // console.log("num is", num);

//     if (!num) return -1;
//     if(num.toString().length === 1) return num;
//     let sum;
//     let digits = num.toString().split('');
//     sum = digits.reduce((acc, i) => acc += parseInt(i), 0);
//     return countDigit(sum);
// }

// // const countDigit = (num) => {
// //     if (!num) return -1;
// //     let sum = num;
// //     while (sum.toString().length > 1) {
// //         let digits = sum.toString().split('');
// //         sum = digits.reduce((acc, i) => acc + parseInt(i), 0);
// //     }
// //     return sum;
// // }

// console.log(countDigit(4444));

// const proto = {
//     name: "Madiha",
//     key: "text",
//     greet() { console.log('Hello'); }
// };
// const obj = Object.create(proto);
// const obj1 = Object.assign({}, proto);
// obj1.greeting = function() {
//     console.log("greetings!");
// }
// console.log(obj.greet(), obj.name);

// console.log(Object.keys(obj), Object.keys(obj1)); // Output: [], ['name', 'key', 'greet']
// console.log(Object.getOwnPropertyNames(obj), Object.getOwnPropertyNames(obj1)); // Output: [],  ['name', 'key', 'greet]

// // Generic interface
// // Generic Type Usage

// interface Result<T> {
//     data: T;
//     success: boolean;
// }

// // Using the interface
// const successResult: Result<number> = {
//     data: 42,
//     success: true
// };

// const errorResult: Result<string> = {
//     data: 'An error occurred',
//     success: false
// };

// // Function that returns the first element of an array
// function firstElement<T>(arr: T[]): T | undefined {
//     return arr[0];
// }

// const numArray = [1, 2, 3];
// const strArray = ['a', 'b', 'c'];

// const firstNum = firstElement(numArray); // Type is number
// const firstStr = firstElement(strArray); // Type is string

// const firstElement<T> = (arr: T[]): T | undefined => {
//     return arr[0];
// }

// firstElement([1,2,3]);
// firstElement(['a','b','c']);

// // Default generic type
// function identity<T = string>(value: T): T {
//     return value;
// }

// console.log(identity(123)); // Output: 123
// console.log(identity('hello')); // Output: hello

// // // input
// let input = [
//   { "name": "Rahul", "count": 10 },
//   { "name": "Rohit", "count": 10 },
//   { "name": "Rahul", "count": 10 },
//   { "name": "Rohit", "count": 10 },
//   { "name": "Rohit", "count": 10 },
// ]

// // //output
// // [
// //   {"name":"Rahul","count":20},
// //   {"name":"Rohit","count":20}
// // ]

// const reviseInput = (arr) => {
//   let temp = arr.reduce((acc, { name, count }) => {
//     if (acc[name]) {
//       acc[name].count = acc[name].count + count
//     } else {
//       acc[name] = { name, count }
//     }
//     return acc;
//   }, {})
//   return Object.values(temp)
// }

// console.log(reviseInput(input));

// function greet(text) {
//   console.log(`Hi, ${this.name} ${text} !`);
// }

// let person = {
//   name: 'Madiha'
// }

// const result = greet.bind(person, 'Hola')
// result()
// greet.call(person, 'HOLAHOO')
// greet.call(person, ['Heeeee'])

// let input1 = [1,2,3,4,5];
// let input2 = [4,3,2,7,4,2];

// // map = {1:1,2:2,3:2,4:2,5:1,7:1}

// const findIntersection = (arr1, arr2) => {
//     let set1 = new Set(arr1)
//     let set2 = new Set(arr2)

//     let result = [...set1].filter((item) => set2.has(item));

//     return result
// }

// console.log(findIntersection(input1, input2));

// function createCounter() {
//     let count = 0;

//     return {
//         get count() {
//             console.log(count++);
//         }
//     }
// }

// const counter = createCounter()
// // console.log(counter.count);

// counter.count;
// counter.count;
// counter.count;

// const useArray = (arr) => {
//     let value = arr;
//     function push(value) {
//         arr.push(value)
//     }

//     function removeByIndex(index) {
//         arr.splice(index, 1)
//     }

//     return { value, push, removeByIndex }
// }

// let arr1 = [1, 2, 3];

// const { value, push, removeByIndex } = useArray(arr1)

// push(4);
// removeByIndex(1)
// console.log(value);

// console.log(arr1);

// const a = 3
// switch (a) {
//     case 1:
//         const result = a * 2;
//         console.log(result);
//         break;
//     case 2:
//         const result1 = a - 2;
//         console.log(result1);
//         break;
//     case 3:
//         const result2 = a + 2;
//         console.log(result2);
//         break;
// }

// let obj = {
//     size: "",
//     color: ""
// }

// Function Car() {
// Let size=””,
// Let color=””

// function Car() {
//     this.size = "large",
//     this.color = "red",
//     this.func = () => {
//         return `Car size is ${this.size} and color is ${this.color}`;
//     }
// }

// let newCar = new Car();

// console.log(newCar.func());

// ways to create an object:

// Let newObj = Object.create({}, {name: ‘vegnar’, color: ‘’})

// newObj.name = “vehnar”
// newObj.color = “red”

// Object.assign({},)

// Let obj = {name: ‘’, color:‘’}

// const person = {
//     name: "",
//     age: 25,
// };

// person.name?.firstName

// if(person.xyz)

// var arr = [1,5,3,6,2,1,5,7,8,9,0,2,3]

// Const returnUniqArray = (arr) => {
// Let temp = [];
// for(let i=0;i<arr.length;i++){
// if(!temp.includes(arr[i]){
// temp.push(arr[i])
// }
// Return temp;
// }

// Let set = new Set(arr)

// [...set]

// Let arr1 = [121, 133,343,0, 8, 14, 222].sort()

// [2, 5, 7, 11, 15] ,  9

// const findPair = (arr, target) => {
//     let temp = [];
//     for (let i = 0; i < arr.length; i++) {
//         let diff = target - arr[i];
//         if (arr.includes(diff)) {
//             temp.push([arr[i], diff])
//         }
//     }
//     return temp;
// }

// console.log(findPair([2,5,7,11,15,4], 9));

// function performTask() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }
// let taskPromise = performTask();
// taskPromise
// .then(function() {
//     console.log('Success 1');
// })
// .then(function() {
//     console.log('Success 2');
// })
// .then(function() {
//     console.log('Success 3');
// })
// .catch(function() {
//     console.log('Error 1');
// })
// .then(function() {
//     console.log('Success 4');
// });

// Error1

// p1,p2,p3(rejected)

// var length = 4;
// function callback() {
//   console.log(this.length); //Error
// }

// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   }
// };

// object.method(callback, 1, 2);

// 6 ways to create objects in javascript
// Object Literal: Directly defining an object with {}.
// const Person = {
//     name: 'Madiha',
//     age: 26,
//     greet: function () {
//         return `My name is ${this.name} and age is ${this.age}`
//     }
// }

// const person1 = Person;
// console.log(person1.greet());

// Constructor Function: Using a function with new.

// function Person() {
//     this.name = "Madiha",
//     this.age = 26,

//     this.greet = function (greeting) {
//         return `${greeting} my name is ${this.name} and age is ${this.age}`
//     }
// }

// const person1 = new Person()
// console.log(person1.greet("Heyy"));

// Object.create(): Creating an object with a specific prototype.

// const Person = {
//     name: 'Madiha',
//     age: 26,
//     greet: function (greeting) {
//         return `${greeting} my name is ${this.name} and age is ${this.age}`
//     }
// }

// const person1 = Object.create(Person);
// person1.name = "ABC"
// console.log(person1.greet("Heyy"));
// Class Syntax: Using ES6 class to create objects.
// class Person {
//     constructor(name, age) {
//         this.name = "Madiha";
//         this.age = 26;
//     }

//     greet = function (greeting) {
//         return `${greeting} my name is ${this.name} and age is ${this.age}`
//     }
// }

// const person1 = new Person()
// // person1.age = 27
// console.log(person1.greet("Hii"));

// Factory Function: A function that returns a new object.

// const Person = (name, age) => {
//     return {
//         name,
//         age,
//         greet: function (greeting) {
//             return `${greeting} my name is ${this.name} and age is ${this.age}`
//         }
//     }
// }

// const person1 = Person('Jack', 28)
// console.log(person1.greet("Heyy"));

// ES6 Object.assign(): Merging properties from multiple objects.

// const personDefaults = {
//     firstName: "John",
//     lastName: "Doe"
// };

// const person = Object.assign({}, personDefaults, { age: 30 });

// console.log(typeof undefined === "undefined", typeof null === "object"); // true true

// By default, sort() converts elements to strings and sorts them lexicographically (alphabatically).
// For numerical sorting, provide a compare function to sort() that performs numerical comparison.

// console.log([9,1,2,10].sort((a,b) => a-b))

// console.log(["cat","apple", "jug", "banana"].sort())

// // Call, Bind. Apply

// function greeting(text) {
//     console.log(`Heyy ${this.name}, ${text}`);
// }

// const person = {
//     name: 'Madiha',
//     age: 26
// }

// Bind returns a new function with specified 'this' value and arguments provided individually.
// // const foo = greeting.bind(person, 'Welcome!!!')
// // foo()

// Call invokes a function with a specified 'this' value and arguments provided individually.
// // greeting.call(person, 'Welcome!!!')

// Apply invokes a function with a specified 'this' value and arguments provided in an array.
// // greeting.apply(person, ['Welcome!!!'])

// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 completed");
//         callback();
//     }, 1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log(`Step 2 completed`);
//         callback();
//     }, 1000);
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log(`Step 3 completed`);
//         callback();
//     }, 1000);
// }

// function step4(callback) {
//     setTimeout(() => {
//         console.log("Step 4 completed");
//         callback();
//     }, 1000);
// }

// step1(() => step2("something", () => step3(() => step4(() => console.log("All steps are completed")
// ))))

// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 1 completed");
//             resolve();
//         }, 1000);
//     });
// }

// function step2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 2 completed");
//             resolve();
//         }, 1000);
//     });
// }

// function step3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 3 completed");
//             resolve();
//         }, 1000);
//     });
// }

// function step4() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 4 completed");
//             resolve();
//         }, 1000);
//     });
// }

// step1()
//     .then(step2)
//     .then(step3)
//     .then(step4)
//     .then(() => {
//         console.log("All steps completed");
//     });

// async function runSteps() {
//     await step1();
//     await step2();
//     await step3();
//     await step4();
//     console.log("All steps completed");
// }

// // runSteps();

// const promise1 = (value) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Promise 1 is resolved with ${value}`)
//         }, 2000)
//     })
// }

// const promise2 = (value) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`Promise 2 is rejected with ${value}`)
//         }, 500)
//     })
// }

// const pr1 = promise1("201");
// const pr2 = promise2("404");

// // pr1.then((res) => console.log(res)).then((res) => console.log(res))

// Promise.all(([pr1, pr2])).then((res) => console.log(res)).catch((error) => console.log(error))

// // 1. Implement a Curried compose Function
// // Problem Statement:
// // Implement a curried compose function that takes any number of unary functions as arguments and returns a function that is the composition of those functions. The composed function should apply the functions from right to left.

// const add = (x) => x + 2;
// const multiply = (x) => x * 3;
// const subtract = (x) => x - 1;

// const compose = (...fns) => {
//     return function (args) {
//         return fns.reduceRight((acc, fn) => fn(acc), args)
//     }
// }

// const composed = compose(add, multiply, subtract);

// console.log(composed(4)); // Output should be 11 ((4 - 1) * 3 + 2 = 11)

// const getProperty = (path) => {
//     return function(obj) {
//         return path.reduce((acc, key) => acc && acc[key], obj);
//     }
// };

// const user = {
//     name: 'John Doe',
//     address: {
//         city: 'New York',
//         zip: {
//             code: 10001,
//             plus4: 1234
//         }
//     }
// };

// const getZipCode = getProperty(['address', 'zip', 'code']);
// console.log(getZipCode(user)); // Output: 10001

// const currying = (arg) => {
//     return function (arg1) {
//         if (arg1) {
//             return currying(arg * arg1)
//         }
//         console.log(arg);
//     }
// }

// currying(1)(2)(3)(2)();

// // deep copy

// function deepCopy(obj) {
//     if(obj !== null && typeof obj !== 'object') {
//         return obj;
//     }

//     if(Array.isArray(obj)) {
//         return obj.map((item) => deepCopy(item))
//     }

//     if(obj instanceof Date) {
//         return new Date(obj.getTime())
//     }

//     if(typeof obj === 'object') {
//         let copy = {}
//         for(let key in obj) {
//             copy[key] = deepCopy(obj[key])
//         }
//         return copy
//     }

// }

// let obj = [{
//     name: 'Madiha',
//     age: 26,
//     car: {
//         color: "red"
//     },
//     time: new Date()
// }]

// let obj1 = Object.create(obj) // shalow copy
// let obj2 = JSON.parse(JSON.stringify(obj)) // deep copy
// let obj3 = deepCopy(obj)

// console.log(obj, obj3);
// // obj1.name = "shaikh"
// // // obj1.car = {color: "blue"}
// // obj1.car.color = "blue"

// // obj.car = {color: "blue"}
// // obj.name = "shaikh"

// // console.log(obj1.name, obj.name, obj2.name, obj3.name);

// // console.log(obj1.car.color, obj.car.color, obj2.car.color, obj3.car.color);

// // groupBy implementation

// const groupBy = (arr, key) => {
//     return arr.reduce((acc, obj) => {
//         let newKey = obj[key]
//         if (!acc[newKey]) {
//             acc[newKey] = []
//         }
//         acc[newKey].push(obj)
//         return acc;
//     }, {})
// }

// const people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Bob', age: 22 },
//     { name: 'Charlie', age: 21 },
//     { name: 'Alice', age: 23 }
// ];

// // const output = {
// //     "21": [
// //         { name: 'Alice', age: 21 },
// //         { name: 'Charlie', age: 21 }],
// //     "22": [{ name: 'Bob', age: 22 }],
// //     "23": [{ name: 'David', age: 23 }]
// // };

// let person = groupBy(people, "name")

// console.log(person);

// Implement a function to handle curried sums, such as:
//  - curriedSum(1,2)(3,4)
//  - curriedSum(1)(3,4)(2)
//  - curriedSum(1,2,3)(4)

// const curriedSum = (...args) => {
//     return function (...args2) {
//         let sum1 = args.reduce((acc, arg) => acc += arg)
//         if (!args2.length) {
//             return sum1
//         } else {
//             return curriedSum(args2.reduce((acc, arg) => acc += arg) + sum1)
//         }
//     }
// }

// console.log(curriedSum(1, 2, 3)(4, 10)());

// const findFact = (n) => {
//     if (n < 1) {
//         throw new Error('Only for posi. numbers')
//     }
//     if (n === 1) {
//         return BigInt(1);
//     }
//     else {
//         return BigInt(n) * findFact(n - 1);
//     }
// }

// console.log(findFact(5));

// const list = [1, 0, 0, 2, 3]

// const moveZeros = (arr) => {
//     let index = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             arr[index] = arr[i]
//             index++
//         }
//     }

//     for (let i = index; i < arr.length; i++) {
//         arr[i] = 0
//     }
//     return arr;
// }

// console.log(moveZeros(list)) // output - [1,2,3,0,0]

// const join = (a, b, c) => {
//     return `${a}_${b}_${c}`
// }

// const curry = (fn) => {
//     return function curried(...args1) {
//         if (args1.length >= fn.length) {
//             return fn(...args1)
//         } else {
//             return function (...args2) {
//                 return curried(...args1, ...args2)
//             }
//         }
//     }
// }

// const curriedJoin = curry(join)
// console.log(curriedJoin(1, 2, 3)) // '1_2_3'
// console.log(curriedJoin(1)(2, 3)) // '1_2_3'
// console.log(curriedJoin(1, 2)(3)) // '1_2_3'
// console.log(curriedJoin(1)(2)(3)) // '1_2_3'

// const arr = [1, 2, 2, 3, 2, 3, 6];

// const mostCommonOccElem = (arr) => {
//     let map = new Map();
//     let mostCommon = arr[0];
//     for(let i=0;i<arr.length;i++) {
//         map[arr[i]] = map[arr[i]] + 1 || 1;
//     }

//     for(let elem in map) {
//         if(map[mostCommon] < map[elem]) {
//             mostCommon = elem
//         }
//     }
//     return mostCommon
// }

// console.log(mostCommonOccElem(arr));

// // Output: 2 (because 2 appears most frequently)

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// const rotateArray = (arr, k) => {

//     // let count = 0;
//     // while(count<k) {
//     //     let first = arr[0];

//     //     for(let i=0;i<arr.length;i++) {
//     //         arr[i] = arr[i+1]
//     //     }
//     //     arr[arr.length-1] = first
//     //     count++
//     // }
//     // return arr;
// }

// console.log(rotateArray([-1,-100,3,99], 2));
// console.log(rotateArray([1,2,3,4,5,6,7], 3));

// 𝐓𝐨𝐨𝐥𝐢𝐧𝐠 𝐚𝐧𝐝 𝐁𝐮𝐢𝐥𝐝 𝐒𝐲𝐬𝐭𝐞𝐦𝐬
// - npm and Yarn
// - Webpack and Babel
// - ESLint and Prettier for Code Quality

// 𝐓𝐞𝐬𝐭𝐢𝐧𝐠 𝐢𝐧 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭
// - Unit Testing with Jest
// - Integration Testing
// - End-to-End Testing with Cypress

// 𝐏𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚𝐭𝐢𝐨𝐧
// - Understanding the Call Stack
// - Debouncing and Throttling
// - Memory Management and Garbage Collection

// 𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭
// - CI/CD Basics
// - Hosting JavaScript Apps (Netlify, Vercel)
// - Minification and Bundling for Production

// 𝐒𝐞𝐜𝐮𝐫𝐢𝐭𝐲 𝐢𝐧 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭
// - XSS and CSRF Prevention
// - Content Security Policy (CSP)
// - Sanitizing Inputs

// // Given an array of integers that is already sorted in ascending order,
// // find two numbers such that they add up to a specific target number.

// const findTargetSumIndices = (arr, target) => {
//     let left = 0
//     let right = arr.length - 1
//     while (left < right) {
//         if(arr[left] + arr[right] === target) {
//             return ([arr[left], arr[right]])
//         }
//         if(arr[left] + arr[right] < target) left++
//         else right--
//     }
//     return [0,0]
// }

// console.log(findTargetSumIndices([1, 2, 3, 6, 7], 12));

// let arr = [10, 3, 5, 6, 2]
// //output = [180,600,360,300,900]

// // naive approach -
// // time comp - O(n)
// // space comp - O(n)

// const findProd = (arr) => {
//     let temp = [];
//     prod = arr.reduce((acc, item) => acc *= item)

//     for (let i = 0; i < arr.length; i++) {
//         temp.push(prod/arr[i])
//     }

//     return temp;
// }

// console.log(findProd(arr));

// // 2nd approach - Without the division operator in O(n) time.

// const findProd = (arr) => {
//     let n = arr.length
//     let left = new Array(arr.length).fill(0)
//     let right = new Array(arr.length).fill(0)
//     let prod = new Array(arr.length).fill(0)

//     left[0] = arr[0]
//     right[n - 1] = arr[n - 1]

//     for (let i = 1; i < n; i++) {
//         left[i] = left[i - 1] * arr[i]
//     }

//     for (let i = n - 2; i >= 0; i--) {
//         right[i] = right[i + 1] * arr[i]
//     }

//     for (let i = 1; i <= n - 2; i++) {
//         prod[i] = left[i - 1] * right[i + 1]
//     }
//     prod[0] = right[1]
//     prod[n-1] = left[n-2]

//     return prod

// }

// console.log(findProd(arr));

// // find max subarray sum

// let arr = [-2, -5, 6, -2, -3, 1, 5, -6]
// output = [6,-2,-3,1,5] -> 7answer

// // Naive approach with O(n^2) comp.
// const maxSubArraysum = (arr) => {
//     let n = arr.length;
//     let max = Number.MIN_VALUE;

//     for (let i = 0; i < n; i++) { // finds subarray start point
//         let currSum = 0;
//         for (let j = i; j < n; j++) {  // finds subarray end point
//             currSum+=arr[j];
//             max = Math.max(max, currSum)
//         }
//     }
//     return max
// }

// console.log(maxSubArraysum(arr));

// // Kadane's Algorithm approach with O(n) time comp and O(1) space comp.

// const maxSubArraysum = (arr) => {
//     let n = arr.length;
//     let currSum = 0;
//     let max = Number.MIN_VALUE;

//     for (let i = 0; i < n; i++) {
//         currSum = currSum + arr[i]
//         max = Math.max(currSum, max)
//         if (currSum < 0) {
//             currSum = 0;
//         }
//     }
//     return max;
// }

// console.log(maxSubArraysum(arr));

// 1: Compare two linked lists.
// 2: Longest Substring Without Repeating Characters.
// 3: Sliding Window Maximum.

// // Container with Most Water

// // Brute force approach with O(n^2) time complexity
// let container = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const mostWater = (arr) => {
//     let n = arr.length;
//     let max = 0;

//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             let curr = (j-i)*Math.min(arr[i], arr[j])
//             max = Math.max(max, curr)
//         }
//     }
//     return max
// }

// // Optimal approach

// // time complexity = O(n)
// const mostWater = (arr) => {
//     let max = 0;
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         let height = Math.min(arr[left], arr[right]);
//         let width = right - left;
//         let curr = width * height
//         max = Math.max(curr, max);
//         if (arr[left] < arr[right]) left++;
//         else right--;
//     }
//     return max;
// }

// console.log(mostWater(container)); // output = 7

// // Time Comp = O(n) linear
// const maxProfit = (prices) => {
//     let profit = 0;
//     let bestBuy = prices[0];

//     for(let i=1;i<prices.length;i++) {
//         let sell = prices[i];
//         profit = Math.max(profit, sell-bestBuy);
//         bestBuy = Math.min(bestBuy, sell)
//     }
//     return profit
// };

// console.log(maxProfit([7,1,5,3,6,4]));

// console.log(maxProfit([7,6,4,3,1]));

// const memoize = (fn) => {
//     let cache = {}
//     return function (...args) {
//         let key = JSON.stringify(args)
//         if (!cache[key]) {
//             console.log("Not cached");
//             cache[key] = fn(...args)
//         } return cache[key]

//     }
// }

// let memoizedFunc = memoize((a, b) => a * b);

// console.log(memoizedFunc(200, 300))
// console.log(memoizedFunc(200, 300))
// console.log(memoizedFunc(200, 300))

// //  Find Maximum Sum Average sub-array with k length
// // Time comp - O(n)
// // Space comp - O(1)

// const findMaxAverage = (nums, k) => {
//     let currSum = nums.slice(0, k).reduce((acc, ele) => acc += ele);
//     let maxSum = currSum;
//     let start = 0;
//     let end = k;

//     while (end < nums.length) {
//         currSum -= nums[start]
//         start++
//         currSum += nums[end]
//         end++
//         maxSum = Math.max(maxSum, currSum);
//     }

//     return maxSum/k
// };

// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

// const mergeStringsAlternatively = (word1, word2) => {
//     let largeStr;
//     let smallStr;
//     let temp = [];

//     if (word1.length > word2.length) {
//         largeStr = word1
//         smallStr = word2
//     } else {
//         largeStr = word2
//         smallStr = word1
//     }

//     for (let i = 0; i < smallStr.length; i++) {
//         temp.push(word1[i])
//         temp.push(word2[i])
//     }

//     for (let i = smallStr.length; i < largeStr.length; i++) {
//         temp.push(largeStr[i])
//     }

//     return temp.join("");

// }

// console.log(mergeStringsAlternatively('abcd', 'pq'));

// const kidsWithCandies = (candies, extraCandies) => {
//     let max = Number.MIN_VALUE;
//     let temp = [];

//     for(let i=0;i<candies.length;i++) {
//         max = Math.max(max, candies[i])
//     }

//     for(let i=0;i<candies.length;i++) {
//         if(candies[i] + extraCandies >= max) {
//             temp.push(true)
//         } else temp.push(false)
//     }

//     return temp

// };

// console.log(kidsWithCandies([2,3,5,1,3], 3));

// const canPlaceFlowers = (flowerbed, n) => {
//     let m = flowerbed.length;
//     if (m == 1 && flowerbed[0] == 0) {
//         flowerbed[0] = 1
//         n -= 1
//     }
//     if (flowerbed[0] == 0 && flowerbed[1] == 0) {
//         flowerbed[0] = 1;
//         n -= 1
//     }
//     if (flowerbed[m - 1] == 0 && flowerbed[m - 2] == 0) {
//         flowerbed[m - 1] = 1;
//         n -= 1
//     }
//     for (let i = 1; i < m - 1; i++) {
//         if (flowerbed[i - 1] == 0 && flowerbed[i] == 0 && flowerbed[i + 1] == 0) {
//             flowerbed[i] = 1;
//             n -= 1
//         }
//     }
//     return n <= 0
// };

// console.log(canPlaceFlowers([1, 0, 0, 1], 1));

// Find Majority element in an array -  Given - Majority element always exists.
// [maj. element count > n/2] where n is length of array.

// // optimal soln. with sorting
// // time comp = O(nlogn + n) => ~ O(nlogn)
// const majorityElement = (arr) => {
//     // sort the array - O(nlogn)
//     arr.sort((a, b) => a - b)
//     let majElem = arr[0]
//     let freq = 1;

//     for (let i = 1; i < arr.length; i++) { // takes O(n)
//         if (arr[i] === arr[i - 1]) {
//             freq++;
//         } else {
//             freq = 1
//             majElem = arr[i]
//         }
//         if (freq >= arr.length / 2) {
//             return majElem
//         }
//     }
// }

// console.log(majorityElement([1, 2, 2, 1, 1]));

// Moore's Voting Algorithm
// time comp. - O(n)
// const majorityElement = (arr) => {
//     let freq = 0;
//     let ans;
//     for (let i = 0; i < arr.length; i++) {
//         if (freq == 0) ans = arr[i]
//         if (arr[i] == ans) freq++;
//         else freq--
//     }

//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == ans) count++
//     }
//     if (count > arr.length / 2) return ans;
//     else return -1
// }

// console.log(majorityElement([1, 2, 2, 1]));

// // Naive soln
// // time comp. - O(n^2)
// // space comp. - O(1)
// const findMissingAndRepeatedValues = (grid) => {
//     let repeatedNo;
//     let missingNo;

//     let flatArr = grid.flat(1);
//     let n = flatArr.length;

//     for (let i = 1; i <= n; i++) {
//         let count = 0;
//         for (let j = 0; j < n; j++) {
//             if (flatArr[j] == i) {
//                 count++;
//             }
//         }
//         if (count == 2) {
//             repeatedNo = i
//         }
//         if (count == 0) {
//             missingNo = i
//         }
//     }

//     return [repeatedNo, missingNo]
// }

// // Using Hash map
// // time comp. - O(n)
// // space comp. - O(n)
// const findMissingAndRepeatedValues = (grid) => {
//     let repeatedNo;
//     let missingNo;

//     let flatArr = grid.flat(1);
//     let n = flatArr.length;
//     let map = {};

//     for (let i = 0; i < n; i++) {
//         map[flatArr[i]] = map[flatArr[i]] + 1 || 1
//     }

//     for (let i = 1; i <= n; i++) {
//         if (!map[i]) {
//             missingNo = i
//         }
//         if (map[i] == 2) {
//             repeatedNo = i
//         }
//     }

//     return [repeatedNo, missingNo]
// }

// console.log(findMissingAndRepeatedValues([[9, 1, 7], [8, 9, 2], [3, 4, 6]]));
// console.log(findMissingAndRepeatedValues([[1, 3], [2, 2]]))
// console.log(findMissingAndRepeatedValues([[1, 2], [4, 2]]))

// // find single number among all duplicates
// // Brute Force appraoch with O(n^2) time comp.
// const findSingle = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 count++
//             }
//         }
//         if(count == 1) {
//             return arr[i]
//         }
//     }
// }

// TC should be O(n)
// SC should be O(1)
// XOR approach ( 0^0 = 0, 1^1 = 1, 0^1 = 1, 1^0 = 1 )

// const findSingle = (arr) => {
//     let ans = 0;
//     for (let i = 0; i < arr.length; i++) {
//         ans = ans ^ arr[i]
//     }
//     return ans;
// }

// console.log(findSingle([4, 1, 2, 1, 2]));
// console.log(findSingle([1, 2, 3, 2, 1]));

// const sortColors = (arr) => {
//     let p1 = 0;
//     let p2 = arr.length - 1;

//     while (p1 !== p2) {
//         if (arr[p1] < arr[p2]) {
//             p2--;
//         }
//         else {
//             [arr[p1], arr[p2]] = [arr[p2], arr[p1]]
//             p2--;
//         }
//     }

//     return arr;
// }

// // Better approach
// // Time comp. - O(2n)
// // Space comp. - O(1)
// const sortColors = (arr) => {
//     let count0 = 0;
//     let count1 = 0;
//     let count2 = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) count0++
//         if (arr[i] === 1) count1++
//         if (arr[i] === 2) count2++
//     }

//     for (let i = 0; i < count0; i++) {
//         arr[i] = 0
//     }
//     for (let i = count0; i < count0 + count1; i++) {
//         arr[i] = 1
//     }
//     for (let i = count0 + count1; i < arr.length; i++) {
//         arr[i] = 2
//     }

//     return arr;
// }

// // Dutch national flag Algorithm
// // Time comp - O(n)
// // Space comp. - O(1)
// const sortColors = (arr) => {
//     let low = 0;
//     let mid = 0;
//     let high = arr.length - 1;

//     while (mid <= high) {
//         if (arr[mid] == 0) {
//             [arr[low], arr[mid]] = [arr[mid], arr[low]]
//             low++;
//             mid++
//         }
//         else if (arr[mid] == 1) {
//             mid++;
//         }
//         else {
//             [arr[mid], arr[high]] = [arr[high], arr[mid]]
//             high--;
//         }
//     }

//     return arr;
// }

// console.log(sortColors([2, 1, 0, 2]));
// console.log(sortColors([2, 0, 2, 1, 1, 0]));
// console.log(sortColors([1, 0, 2]));

// // Brute force approach
// const threeSum = (arr) => {
//     let temp = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             for (let k = j + 1; k < arr.length; k++) {
//                 if (arr[i] + arr[j] + arr[k] == 0) {
//                     let ans = [arr[i], arr[j], arr[k]].sort((a, b) => a - b)
//                     if (!temp.includes(JSON.stringify(ans))) temp.push(JSON.stringify(ans))
//                 }
//             }
//         }
//     }
//     return temp.map(ele => JSON.parse(ele))
// }

// // Better approach
// const threeSum = (arr) => {
//     let temp = [];
//     for (let i = 0; i < arr.length; i++) {
//         let hash = [];
//         for (let j = i + 1; j < arr.length; j++) {
//             let ele = -(arr[i] + arr[j]);
//             if (hash.includes(ele)) {
//                 let ans = [arr[i], arr[j], ele]
//                 ans.sort((a, b) => a - b)
//                 if (!temp.includes(JSON.stringify(ans))) {
//                     temp.push(JSON.stringify(ans))
//                 }
//             }
//             // else {
//                 hash.push(arr[j])
//             // }
//         }
//     }

//     return temp.map(ele => JSON.parse(ele));
// }

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// // Search in Sorted array
// // Time comp. - O(logn)
// const binarySearch = (arr, target) => {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start <= end) {
//         let mid = Math.floor(start + (end - start) / 2)
//         if (target == arr[mid]) {
//             return mid
//         }
//         if(target < arr[mid]) { // search in left half
//             end = mid-1
//         } else {  // search in right half
//             start = mid+1
//         }
//     }
//     return -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 1));
// console.log(binarySearch([1], 8));

// // Search in Rotated Sorted array
// //  Time comp - O(logn)
// const search = (nums, target) => {
//     let start = 0;
//     let end = nums.length - 1;

//     while (start <= end) {
//         let mid = Math.floor(start + (end - start) / 2)
//         // console.log("start", start, "mid", mid, "end", end);
//         if (target == nums[mid]) {
//             return mid;
//         }
//         if (nums[start] <= nums[mid]) {  // left sorted
//             if (nums[start] <= target && target <= nums[mid]) { // true -> target lies in left half
//                 end = mid - 1;
//             } else {  // false -> target lies in right half
//                 start = mid + 1
//             }
//         } else {  // right sorted
//             if (nums[mid] <= target && target <= nums[end]) { // true -> target lies in right half
//                 start = mid + 1
//             } else {  // false -> target lies in left half
//                 end = mid - 1
//             }
//         }
//     }
//     return -1
// }

// console.log(search([3, 4, 5, 6, 7, 0, 1, 2], 0));

// // Binary search Algorithm
// // Time comp. - O(logn)
// const peakIndexInMountainArray = (arr) => {
//     let st = 1;
//     let end = arr.length - 2;

//     while (st <= end) {
//         let mid = Math.floor(st + (end - st) / 2)

//         if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
//             return mid;
//         }
//         else if (arr[mid - 1] < arr[mid]) { // search in right
//             st = mid + 1
//         }
//         else { // search in left
//             end = mid - 1
//         }
//     }

//     return -1;
// }

// console.log(peakIndexInMountainArray([0, 3, 8, 9, 5, 2]));

// // Ways to reach n stairs if u can take 1 step at a time and 2 step at a time;
// // DP problem
// // Time comp. - O(n)
// const climbStairs = (n) => {
//     if (n <= 1) return 1;  // Base cases for F(0) and F(1)

//     let prev1 = 1;  // F(1)
//     let prev2 = 1;  // F(0)

//     for (let i = 2; i <= n; i++) {
//         let current = prev1 + prev2;  // F(n) = F(n-1) + F(n-2)
//         prev2 = prev1;  // Update F(n-2)
//         prev1 = current;  // Update F(n-1)
//     }

//     return prev1;  // This will be F(n)
// }

// console.log(climbStairs(5));

// // Binary Search approach
// // time comp. - O(n)
// // space comp. - O(1)
// const searchRange = (nums, target) => {
//     left = binaryS(nums, target, true);
//     right = binaryS(nums, target, false);

//     function binaryS(nums, target, leftBias) {
//         let st = 0;
//         let end = nums.length - 1;
//         let i = -1;

//         while (st <= end) {
//             let mid = Math.floor(st + (end - st) / 2)
//             if (target > nums[mid]) { // right half
//                 st = mid + 1
//             }
//             else if (target < nums[mid]) { // left half
//                 end = mid - 1
//             } else { // target found
//                 i = mid;
//                 if (leftBias) end = mid - 1
//                 else st = mid + 1
//             }
//         }
//         return i;
//     }
//     return [left, right]
// }

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([], 0));

// // Binary Search - time comp. - O(logn)
// const isPerfectSquare = (num) => {
//     let low = 1;
//     let high = num;

//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2);

//         if (mid * mid < num) {
//             low = mid + 1
//         } else if (mid * mid > num) {
//             high = mid - 1
//         } else {
//             return [mid, true]
//         }
//     }
//     return false
// }

// console.log(isPerfectSquare(144));
// console.log(isPerfectSquare(168));

// // Tine limit will exceed - O(c^2) time comp.
// const judgeSquareSum = (c) => {
//     for (let i = 0; i <= c; i++) {
//         for (let j = i; j <= c; j++) {
//             console.log(i,j);

//             if (i * i + j * j == c) {
//                 return [i, j, true]
//             }
//         }
//     }
//     return false
// }

// console.log(judgeSquareSum(4));

// // Better approach with Binary Search
// // Time comp. - O(sqrt(c))
// // space comp. - O(1)
// const judgeSquareSum = (c) => {
//     let root = Math.floor(Math.sqrt(c))
//     let low = 0;
//     let high = root;

//     while (low <= high) {
//         if (low * low + high * high < c) {
//             low++;
//         } else if(low * low + high * high > c) {
//             high--;
//         }
//         else {
//             return [low, high, true];
//         }
//     }
//     return false;
// }

// console.log(judgeSquareSum(81));

// // Time comp. - O(n)
// const sumOfSquares = (nums) => {
//     let n = nums.length;
//     let sq = 0;

//     for (let i = 1; i <= n; i++) {
//         if (n % i == 0) {
//             sq += nums[i-1] * nums[i-1]
//         }
//     }

//     return sq;
// }

// console.log(sumOfSquares([1, 2, 3, 4]));
// console.log(sumOfSquares([2, 7, 1, 19, 18, 3]));

// // Brute force with O(n) time comp.
// const singleNonDuplicate = (nums) => {
//     for (let i = 1; i < nums.length; i++) {
//         if(nums[i] !== nums[i-1] && nums[i] !== nums[i+1]) {
//             return nums[i]
//         }
//     }
// }

// // Binary Search - Optimized approach - O(logn) time comp.
// const singleNonDuplicate = (A) => {
//     let st = 0;
//     let end = A.length - 1;
//     let n = A.length;

//     if (n == 1) return A[0];

//     while (st <= end) {
//         let mid = Math.floor(st + (end - st) / 2);

//         if(mid == 0 && A[0] !== A[1]) return A[mid];
//         if(mid == n-1 && A[n-1] !== A[n-2]) return A[mid];

//         if (A[mid - 1] !== A[mid] && A[mid] !== A[mid + 1]) {
//             return A[mid]
//         } else {
//             if (mid % 2 == 0) { // even
//                 if (A[mid - 1] == A[mid]) { // search in left half
//                     end = mid - 1
//                 } else { // search in right half
//                     st = mid + 1
//                 }
//             } else { // odd
//                 if (A[mid - 1] == A[mid]) { // search in right half
//                     st = mid + 1
//                 } else { // search in left half
//                     end = mid - 1
//                 }
//             }
//         }
//     }
// }

// console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
// console.log(singleNonDuplicate([1, 1, 2]));

// // O(n^m) time comp.
// const longestCommonPrefix = (strs) => {
//     let res = "";

//     for (let i = 0; i < strs[0].length; i++) {
//         for (let elem of strs) {
//             if (elem[i] !== strs[0][i]) {
//                 return res;
//             }
//         }
//         res += strs[0][i]
//     }

//     return res
// }

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// const missingInteger = (nums) => {
//     let res = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1] + 1) {
//             res += nums[i]
//         } else {
//             break;
//         }
//     }

//     const numsSet = new Set(nums);

//     while (numsSet.has(res)) {
//         res++;
//     }

//     return res;
// }

// console.log(missingInteger([1, 2, 3, 2, 5]));
// console.log(missingInteger([3, 4, 5, 1, 12, 15,14, 13]));

// const firstOcc = (s, t) => {
//     let st = 0;
//     let end = t.length;

//     while (end <= s.length) {
//         if (s.slice(st, end) == t) {
//             return st;
//         } else {
//             st++;
//             end++;
//         }
//     }

//     return -1;
// }

// console.log(firstOcc("sadbutsad", "sad"));
// console.log(firstOcc("leetcode", "leeto"));

// // Binary search approach for min of max allocated books problem
// // time comp. = O(logN * n) where N is the range of numbers and n is the books array length
// const allocateBooks = (arr, n, m) => {
//     if (m > n) return -1;
//     let min = 0;
//     let max = arr.reduce((acc, item) => acc += item); // time comp. - O(n)
//     let ans;

//     function isValid(books, n, m, maxPossiblePages) { // time comp. - O(n)
//         let students = 1;
//         let pages = 0;

//         for (let i = 0; i < n; i++) {
//             if (arr[i] > maxPossiblePages) return false
//             if (pages + books[i] <= maxPossiblePages) { // we have students
//                 pages += books[i];
//             } else {
//                 students++;
//                 pages = books[i];
//             }
//         }

//         if (students > m) return false;
//         else return true;
//     }

//     while (min <= max) { // time comp. - O(logN)
//         let mid = Math.floor(min + (max - min) / 2);

//         if (isValid(arr, n, m, mid)) { // left
//             ans = mid;
//             max = mid - 1;
//             console.log("valid case", ans);
//         } else { // right
//             console.log("not valid case", ans);
//             min = mid + 1;
//         }
//     }

//     return ans;
// }

// console.log(findPages([12, 34, 67, 90], 4, 2));

// Binary Search approach for finding max of min. -  (time comp. - O(n* logN))
// const aggressiveCows = (stalls, n, k) => {
//     if (k > n) return -1;

//     stalls.sort((a, b) => a - b);

//     let min = 1;
//     let max = stalls[n - 1] - stalls[0];
//     let ans;

//     function isValid(stalls, n, k, minPossibleDistance) {
//         let lastCowPlaced = stalls[0];
//         let cows = 1;
//         for (let i = 1; i < n; i++) {
//             if (stalls[i] - lastCowPlaced >= minPossibleDistance) {
//                 cows++;
//                 lastCowPlaced = stalls[i];
//             }
//         }

//         return cows >= k ? true : false;
//     }

//     while (min <= max) {
//         let mid = Math.floor(min + (max - min) / 2);
//         if (isValid(stalls, n, k, mid)) {
//             ans = mid;
//             min = mid + 1;
//         } else {
//             max = mid - 1;
//         }
//     }

//     return ans;
// }

// console.log(aggressiveCows([10, 1, 2, 7, 5], 5, 3));

// //  Binary Search with O(nLogN) time comp.
// const kokoEat = (piles, k) => {
//     piles.sort((a, b) => a - b);

//     let min = 1;
//     let max = piles[piles.length - 1];

// // let max = arr.reduce((ele, acc) => acc += ele);
//     let ans;

//     function isValid(piles, totalHours, minBananasInAnHour) {
//         let total = 0;

//         for (let i = 0; i < piles.length; i++) {
//             if (minBananasInAnHour >= piles[i]) {
//                 total++;
//             } else {
//                 // total++;
//                 total += Math.ceil(piles[i] / minBananasInAnHour);
//             }
//         }

//         if (total <= totalHours) {
//             return true
//         }
//         else false;
//     }

//     while (min <= max) {

//         let mid = Math.floor(min + (max - min) / 2);
//         // console.log("min", min, "max", max, "mid", mid);

//         if (isValid(piles, k, mid)) {  // left half
//             ans = mid;
//             max = mid - 1;
//         } else { // right half
//             min = mid + 1;
//         }
//     }

//     return ans;
// }

// console.log(kokoEat([30, 11, 23, 4, 20], 5));
// console.log(kokoEat([3, 6, 7, 11], 8));
// console.log(kokoEat([4, 10, 8, 9], 6));

// // find least weight capacity to be shipped in a day so that all the weights are shipped in d days.
// const leastWeightCapacity = (weights, n, d) => {
//     function findDays(weights, maxWeightsAllowed) {
//         let days = 1;
//         let load = 0;
//         for (let i = 0; i < weights.length; i++) {
//             if (load + weights[i] > maxWeightsAllowed) {
//                 days += 1;
//                 load = weights[i]
//             } else {
//                 load += weights[i]
//             }
//         }
//         return days;
//     }

//     weights.sort((a, b) => a - b);
//     let min = weights[n - 1];
//     let max = weights.reduce((acc, elem) => acc += elem);
//     let ans;

//     console.log("max", min);

//     while (min <= max) {
//         let mid = Math.floor(min + (max - min) / 2);
//         let daysRequired = findDays(weights, mid);
//         if (daysRequired <= d) {  // left half
//             ans = mid;
//             max = mid - 1;
//         } else { // right half
//             min = mid + 1;
//         }
//     }

//     return min;
// }

// console.log(leastWeightCapacity([9, 8, 10], 3, 3));
// console.log(leastWeightCapacity([1, 2, 1], 3, 2));
// console.log(leastWeightCapacity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 5));

// // Remove Duplicates From Sorted Array
// const removeDuplicates = (arr) => {
//     let p1 = 0;
//     let p2 = 1;

//     while (p2 < arr.length) {
//         if(arr[p1] == arr[p2]) {
//             p2++;
//         } else {
//             arr[p1+1] = arr[p2];
//             p1++;
//         }
//     }

//     return p1+1;
// }

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// // Remove Duplicates 2 From Sorted Array
// const removeDuplicates2 = (arr) => {
//     let p1 = 0;
//     let p2 = 1;

//     while (p2 < arr.length) {

//     }
//     return p1;
// }

// console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// // Time comp. = O(n) using two-pointer approach
// const twoSum = (arr, target) => {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         if(arr[low] + arr[high] == target) {
//             return [low+1, high+1]
//         }
//         else if(arr[low] + arr[high] < target) {
//             low++;
//         } else {
//             high--;
//         }
//     }

//     return -1;
// }

// console.log(twoSum([2, 7, 11, 15]));

// const leastTimeToPaint = (boards, n, k) => {
//     function getMax(arr, n) {
//         let max = Number.MIN_VALUE;
//         for (let i = 0; i < n; i++)
//             if (arr[i] > max)
//                 max = arr[i];

//         return max;
//     }

//     function findPainters(n, maxTimeAllowed) {
//         let P = 1;
//         let totalTime = 0;
//         for (let i = 0; i < n; i++) {
//             if (totalTime + boards[i] <= maxTimeAllowed) {
//                 totalTime += boards[i]
//             } else {
//                 P++;
//                 totalTime = boards[i]
//             }
//         }

//         return P;
//     }

//     let min = getMax(boards, n);
//     let max = boards.reduce((acc, elem) => acc += elem);
//     let ans;

//     while (min <= max) {
//         let mid = Math.floor(min + (max - min) / 2);
//         let requiredPainters = findPainters(n, mid);
//         if (requiredPainters <= k) {  // left half
//             ans = mid;
//             max = mid - 1;
//         } else { // right half
//             min = mid + 1;
//         }
//     }

//     return min;
// }

// console.log(leastTimeToPaint([10, 20, 30, 40], 4, 2));

// // using DP for memoization of recursion
// const fibonacci = (n) => {
//     let dp = new Array(n+1).fill(-1)
//     // Base cases
//     dp[0] = 0;
//     dp[1] = 1;

//     function fibHelper(n) {
//         if(dp[n] !== -1) return dp[n];
//         else {
//             dp[n] = fibHelper(n - 1) + fibHelper(n - 2)
//             return dp[n];
//         }
//     }

//     return fibHelper(n);
// }

// console.log(fibonacci(5));
// console.log(fibonacci(6));

// const fibonacci = (n, dp = []) => {
//     // if (n <= 1) return n;

//     // else if (dp[n]) return dp[n];
//     // else {
//     //     dp[n] = fibonacci(n - 1, dp) + fibonacci(n - 2, dp)
//     //     return dp[n];
//     // }

//     // tabular format O(n) time comp.
//     // space comp. - O(1)
//     let prev2 = 0;
//     let prev1 = 1;

//     for (let i = 2; i < n+1; i++) {
//         let curr = prev1 + prev2;
//         prev2 = prev1;
//         prev1 = curr;
//     }

//     return prev1;
// }

// console.log(fibonacci(5));
// console.log(fibonacci(6));

// // Frog jumping on stairs with height n and can only take 1 or 2 steps at a time.
// // Find the minimum cost.
// // DP problem with memoization.
// const minCostRec = (h, n, memo) => {
//     if (n == 1) return 0;

//     else if (memo[n] !== -1) return memo[n];

//     else if (n == 2) {
//         memo[n] = Math.abs(h[n - 1] - h[n - 2]);
//     }
//     else {
//         memo[n] = Math.min((minCostRec(h, n - 1, memo) + Math.abs(h[n - 1] - h[n - 2])), (minCostRec(h, n - 2, memo) + Math.abs(h[n - 1] - h[n - 3])))
//     }

//     return memo[n]
// }

// const minCost = (h) => {
//     let n = h.length;
//     let memo = new Array(n + 1).fill(-1);

//     return minCostRec(h, n, memo);
// }

// console.log(minCost([20, 30, 40, 20]));

// // Tabulation - Bottom-up approach
// const minCost2 = (h) => {
//     // with O(n) space comp.
//     // let n = h.length;
//     // let dp = new Array(n).fill(0);

//     // dp[0] = 0;

//     // for (let i = 1; i < n; i++) {
//     //     let fs = dp[i - 1] + Math.abs(h[i] - h[i - 1])
//     //     let ss = Number.MAX_VALUE;

//     //     if (i > 1) {
//     //         ss = dp[i - 2] + Math.abs(h[i] - h[i - 2])
//     //     }

//     //     dp[i] = Math.min(fs, ss);
//     // }

//     // return dp[n - 1]

//     // with O(1) constant space comp.
//     let n = h.length;
//     let prev2 = 0;
//     let prev1 = 0;

//     for (let i = 1; i < n; i++) {
//         let curr = prev1 + Math.abs(h[i] - h[i - 1]);
//         if (i > 1) {
//             curr = Math.min((prev1 + Math.abs(h[i] - h[i - 1])), (prev2 + Math.abs(h[i] - h[i - 2])));
//         }

//         prev2 = prev1;
//         prev1 = curr;

//     }

//     return prev1;
// }

// console.log(minCost2([20, 30, 40, 20]));

// // Bubble sort - At the end of every iteration, the larget element is on a right position.
// // O(n^2) time comp.
// const bubbleSort = (arr) => {
//     let n = arr.length;
//     let isSwap = false;
//     for (let j = 0; j < n - 1; j++) {
//         for (let i = 0; i < n - j - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//                 isSwap = true;
//             }
//         }

//         if(!isSwap) break;
//     }
//     return arr;
// }

// console.log(bubbleSort([4, 1, 5, 2, 3]));
// console.log(bubbleSort([7,8,9,10,11]));

// const selectionSort = (arr) => {
//     let n = arr.length;
//     let isSwap = false;
//     for (let i = 0; i < n - 1; i++) {
//         let smallestElem = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[smallestElem]) {
//                 smallestElem = j;
//                 isSwap = true;
//             }
//         }
//         [arr[i], arr[smallestElem]] = [arr[smallestElem], arr[i]]

//         if (!isSwap) break;
//     }

//     return arr;
// }

// console.log(selectionSort([4, 1, 5, 2, 3]));
// console.log(selectionSort([7, 8, 9, 10, 11]));

// const insertionSort = (arr) => {
//     let n = arr.length;

//     for (i = 1; i < n; i++) {
//         let curr = arr[i];
//         let prev = i - 1;

//         while (prev >= 0 && arr[prev] > curr) { //  backward loop for checking prev numbers.
//             arr[prev + 1] = arr[prev]
//             prev--;
//         }

//         arr[prev + 1] = curr
//     }

//     return arr;
// }

// console.log(insertionSort([4, 1, 5, 2, 3]));
// console.log(insertionSort([7, 8, 9, 10, 11]));

// // DNF Algorithm with O(n) time comp. and in-place sort
// const sort012Arr = (arr) => {
//     let low = 0;
//     let mid = 0;
//     let high = arr.length - 1;

//     while (mid <= high) {
//         if (arr[mid] == 0) {
//             [arr[mid], arr[low]] = [arr[low], arr[mid]]
//             low++;
//             mid++;
//         }
//         else if (arr[mid] == 1) {
//             mid++;
//         }
//         else {
//             [arr[mid], arr[high]] = [arr[high], arr[mid]]
//             high--;
//         }
//     }

//     return arr;
// }

// console.log(sort012Arr([2, 1, 0, 0, 2, 1, 2, 1, 0, 1]));
// console.log(sort012Arr([2, 1, 0]));

// // Recursion without memoization
// const maxNonAdjacentSubArray = (arr) => {
//     let n = arr.length;
//     return f(arr, n - 1);
// }

// const f = (arr, idx) => {
//     if (idx == 0) return arr[idx];
//     if (idx < 0) return 0;

//     let pick = arr[idx] + f(arr, idx - 2);
//     let notPick = 0 + f(arr, idx - 1);
//     return Math.max(pick, notPick);
// }

// // Recursion with memoization
// const maxNonAdjacentSubArray = (arr) => {
//     let n = arr.length;
//     let dp = new Array(n).fill(-1);
//     return f(arr, n - 1, dp);
// }

// const f = (arr, idx, dp) => {
//     if (idx == 0) return arr[idx];
//     else if (idx < 0) return 0;

//     else if (dp[idx] !== -1) {
//         return dp[idx];
//     }
//     let pick = arr[idx] + f(arr, idx - 2, dp);
//     let notPick = 0 + f(arr, idx - 1, dp);
//     dp[idx] = Math.max(pick, notPick);
//     return dp[idx];
// }

// console.log(maxNonAdjacentSubArray([2, 1, 4, 9]));

// //  DP with tabulation approach
// const maxNonAdjacentSubArray = (arr, n) => {
//     // Space optimization O(1)
//     let prev = arr[0];
//     let prev2 = 0;

//     for (let idx = 1; idx < n; idx++) {
//         let pick = arr[idx];
//         if (idx > 1) {
//             pick += prev2
//         }
//         let notPick = prev;

//         let curr = Math.max(pick, notPick);

//         prev2 = prev;
//         prev = curr;
//     }

//     return prev;
// }

// console.log(maxNonAdjacentSubArray([2, 1, 4, 9], 4));

// // DP with O(n) time comp.
// const houseRobbery2 = (arr) => {
//     let n = arr.length;

//     if (n == 1) return arr[0];

//     let temp1 = [];
//     let temp2 = [];

//     for (let i = 1; i < n; i++) {
//         temp1.push(arr[i])
//     }
//     for (let i = 0; i < n - 1; i++) {
//         temp2.push(arr[i])
//     }

//     return Math.max(f(temp1), f(temp2));
// }

// const f = (arr) => {
//     let n = arr.length;
//     let prev = arr[0];
//     let prev2 = 0;
//     for (let ind = 1; ind < n; ind++) {
//         let pick = arr[ind];

//         if (ind > 1) {
//             pick += prev2;
//         }

//         let notPick = prev;

//         let curr = Math.max(pick, notPick);

//         prev2 = prev;
//         prev = curr;
//     }

//     return prev;
// }

// console.log(houseRobbery2([2, 3, 2, 4]));

// // Geek's Training Problem using DP
// const maximumPoints = (arr, n) => {
//     let dp = new Array(n).fill(null).map(() => new Array(4).fill(-1))
//     return f(arr, n - 1, 3, dp);
// }

// const f = (arr, day, last, dp) => {
//     if (day == 0) { // base case for 0th day
//         let maxPoints = 0;
//         for (let i = 0; i < 3; i++) {
//             if (last !== i) {
//                 maxPoints = Math.max(maxPoints, arr[0][i]);
//             }
//         }
//         return maxPoints;
//     }

//     if (dp[day][last] != -1) {
//         return dp[day][last]
//     }

//     let maxPoints = 0;

//     for (let task = 0; task < 3; task++) {
//         if (task !== last) {
//             let point = arr[day][task] + f(arr, day - 1, task, dp)

//             maxPoints = Math.max(maxPoints, point);
//         }
//     }

//     return dp[day][last] = maxPoints;
// }

// console.log(maximumPoints([[1, 2, 5], [3, 1, 1], [3, 3, 3]], 3));

// // Merge 2 sorted arrays
// // Using O(n) space for temp. array
// const mergeSorted = (arr1, m, arr2, n) => {
//     let temp = [];
//     let p1 = 0;
//     let p2 = 0;

//     while (p1 < m && p2 < n) {
//         if (arr1[p1] <= arr2[p2]) {
//             temp.push(arr1[p1]);
//             p1++;
//         } else {
//             temp.push(arr2[p2]);
//             p2++;
//         }
//     }

//     while (p1 < m) {
//         temp.push(arr1[p1]);
//         p1++;
//     }

//     while (p2 < n) {
//         temp.push(arr2[p2]);
//         p2++;
//     }

//     return temp;
// }

// // Using no-extra space i.e, in-place algo. with 2 pointers
// const mergeSorted = (arr1, m, arr2, n) => {
//     let p1 = m - 1;
//     let p2 = n - 1;
//     let i = m + n - 1;

//     while (p1 >= 0 && p2 >= 0) {
//         if (arr1[p1] >= arr2[p2]) {
//             arr1[i] = arr1[p1]
//             p1--;
//         }
//         else {
//             arr1[i] = arr2[p2]
//             p2--;
//         }
//         i--;
//     }

//     while (p2 >= 0) {
//         arr1[i] = arr2[p2]
//         p2--;
//         i--;
//     }

//     return arr1;
// }

// console.log(mergeSorted([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(mergeSorted([1, 2, 3, 0], 3, [6], 1));
// console.log(mergeSorted([1, 0, 0, 0], 1, [3, 4, 9], 3));
// console.log(mergeSorted([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
// console.log(mergeSorted([0], 0, [3], 1));

//// Return Next Lexicographycally permutation - O(n) time comp.
// const revNums = (nums, left, right) => {
//     while (left <= right) {
//         [nums[left], nums[right]] = [nums[right], nums[left]]
//         left++;
//         right--;
//     }

//     return nums;
// }

// const nextPermutation = (nums) => {
//     let pivot = -1;

//     for (let i = nums.length - 2; i >= 0; i--) {
//         if (nums[i] < nums[i + 1]) {
//             pivot = i;
//             break;
//         }
//     }

//     if (pivot == -1) {
//         return revNums(nums, 0, nums.length - 1);
//     }

//     for (let i = nums.length - 1; i > pivot; i--) {
//         if (nums[i] > nums[pivot]) {
//             [nums[i], nums[pivot]] = [nums[pivot], nums[i]];
//             break;
//         }
//     }

//     let left = pivot + 1;
//     let right = nums.length - 1;

//     return revNums(nums, left, right);
// }

// console.log(nextPermutation([1, 2, 5, 4, 3]));
// console.log(nextPermutation([1, 2, 3, 5, 4]));
// console.log(nextPermutation([3, 2, 1]));
// console.log(nextPermutation([1, 3, 2]));
// console.log(nextPermutation([2, 3, 1]));

// // Grid Unique Paths -
// // Time comp - O(m*n) with dp ----- without dp time comp. - O(2^m*n)
// // Space comp - O((m-1) + (n-1)) + O(m*n) with dp ----  without dp space comp - O((m-1) + (n-1))
// const countPaths = (m, n) => {
//     let dp = new Array(m).fill(null).map(() => new Array(n).fill(-1));
//     return f(m - 1, n - 1, dp);
// }

// const f = (i, j, dp) => {
//     if (i == 0 && j == 0) return 1;

//     else if (i < 0 || j < 0) return 0;

//     if (dp[i][j] !== -1) return dp[i][j];

//     let up = f(i - 1, j, dp);
//     let left = f(i, j - 1, dp);

//     return dp[i][j] = up + left;
// }

// // DP with Tabulation to remove recursion stack space
// // Time comp - O(m*n)
// // space comp - O(m*n)
// const countPaths = (m, n) => {
//     let dp = new Array(m).fill(null).map(() => new Array(n).fill(0));

//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i == 0 && j == 0) {
//                 dp[0][0] = 1;

//             } else {
//                 let up = 0;
//                 let left = 0;
//                 if (i > 0) {
//                     up = dp[i - 1][j];
//                 }
//                 if (j > 0) {
//                     left = dp[i][j - 1];
//                 }
//                 dp[i][j] = parseInt(up) + parseInt(left)
//             }
//         }
//     }
//     return dp[m-1][n-1];
// }

// console.log(countPaths(3, 2)); // output = 3

// // Time comp - O(m*n)
// // Space comp = O(1);
// const uniquePathsWithObstacles = (grid) => {
//     let m = grid.length;
//     let n = grid[0].length;

//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i == 0 && j == 0 && grid[i][j] !== 1) {
//                 grid[0][0] = 1;
//             }
//             else {
//                 let up = 0;
//                 let left = 0;
//                 if (i > 0 && grid[i][j] !== 1) {
//                     up = grid[i - 1][j];
//                 }
//                 if (j > 0 && grid[i][j] !== 1) {
//                     left = grid[i][j - 1];
//                 }
//                 grid[i][j] = parseInt(up) + parseInt(left)
//             }
//         }
//     }

//     return grid[m - 1][n - 1];
// }

// console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
// console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]));

// // Time comp  - O(m*n)
// // Space comp - O((m-1)+(n-1)) + O(m*n)
// const minPathSum = (grid) => {
//     let m = grid.length;
//     let n = grid[0].length;
//     let dp = new Array(m).fill(null).map(() => new Array(n).fill(-1));
//     return f(grid, m - 1, n - 1, dp);
// }

// const f = (grid, i, j, dp) => {
//     if (i == 0 && j == 0) return grid[0][0];

//     else if (i < 0 || j < 0) return Number.MAX_VALUE;

//     else if (dp[i][j] !== -1) return dp[i][j];

//     let up = grid[i][j] + f(grid, i - 1, j, dp);
//     let left = grid[i][j] + f(grid, i, j - 1, dp);

//     return dp[i][j] = Math.min(up, left);
// }

// // Tabulation
// // Time comp  - O(m*n)
// // Space comp - O((m-1)+(n-1))
// const minPathSum = (grid) => {
//     let m = grid.length;
//     let n = grid[0].length;

//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i == 0 && j == 0) {
//                 grid[0][0];
//             }
//             else {
//                 let up = Number.MAX_VALUE;
//                 let left = Number.MAX_VALUE;

//                 // Accumulate the path from the top
//                 if (i > 0) {
//                     up = grid[i - 1][j];
//                 }
//                 // Accumulate the path from the left
//                 if (j > 0) {
//                     left = grid[i][j - 1];
//                 }
//                 // Take the minimum of both and add the current cell's value
//                 grid[i][j] = grid[i][j] + Math.min(up, left);
//             }
//         }
//     }
//     return grid[m - 1][n - 1];
// }

// console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])); // output = 7

// //  DP with recursion stack of Triangle Problem
// // Time comp - O(2^n)
// // Space comp - O(n)
// const minimumTotal = (triangle) => {
//     let n = triangle.length;
//     return f(0, 0, triangle, n);
// }

// const f = (i, j, triangle, n) => {
//     if (i == n - 1) return triangle[n - 1][j];

//     let down = triangle[i][j] + f(i + 1, j, triangle, n);
//     let diagonal = triangle[i][j] + f(i + 1, j + 1, triangle, n);

//     return Math.min(down, diagonal);
// }

// // //  DP without recursion stack of Triangle Problem
// // // Time comp - O(n*n)
// // // Space comp - O(n*n) + O(n)
// const minimumTotal = (triangle) => {
//     let n = triangle.length;
//     let dp = new Array(n).fill(null).map(() => new Array(n).fill(-1));
//     return f(0, 0, triangle, n, dp);
// }

// const f = (i, j, triangle, n, dp) => {
//     if (i == n - 1) return triangle[n - 1][j];

//     if (dp[i][j] !== -1) return dp[i][j];

//     let down = triangle[i][j] + f(i + 1, j, triangle, n, dp);
//     let diagonal = triangle[i][j] + f(i + 1, j + 1, triangle, n, dp);

//     return dp[i][j] = Math.min(down, diagonal);
// }

// // DP with Tabulation with space optimization
// // Time comp - O(n*n)
// // space comp - O(1) in-plce
// const minimumTotal = (triangle) => {
//     let n = triangle.length;

//     for (let j = 0; j < n; j++) {
//         triangle[n - 1][j] = triangle[n - 1][j];
//     }

//     for (let i = n - 2; i >= 0; i--) {
//         for (let j = i; j >= 0; j--) {
//             let d = triangle[i][j] + triangle[i + 1][j];
//             let dg = triangle[i][j] + triangle[i + 1][j + 1];

//             triangle[i][j] = Math.min(d, dg);
//         }
//     }

//     return triangle[0][0];
// }

// console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));

// // Without DP memoization - and only recursion
// // Time comp - O(3^m)
// // Space comp - O(m)
// const minFallingPathSum = (grid) => {
//     let m = grid.length;
//     let n = grid[0].length;
//     let min = Number.MAX_VALUE;

//     for (let j = 0; j < n; j++) {
//         min = Math.min(min, f(m - 1, j, grid))
//     }

//     return min;
// }

// const f = (i, j, grid) => {
//     if (i == 0) return grid[0][j];

//     if (j < 0 || j >= grid[0].length) return Number.MAX_VALUE;

//     let up = grid[i][j] + f(i - 1, j, grid);
//     let left = Number.MAX_VALUE;
//     let right = Number.MAX_VALUE;
//     if (j > 0) {
//         left = grid[i][j] + f(i - 1, j - 1, grid);
//     }
//     if (j < grid[0].length - 1) {
//         right = grid[i][j] + f(i - 1, j + 1, grid);
//     }

//     return Math.min(up, Math.min(left, right));
// }

// // With DP memoization
// // Time comp - O(m*n)
// // Space comp - O(m*n) + O(m)
// const minFallingPathSum = (grid) => {
//     let m = grid.length;
//     let n = grid[0].length;
//     let min = Number.MIN_VALUE;
//     let dp = new Array(m).fill(null).map(() => new Array(n).fill(-1));

//     for (let j = 0; j < n; j++) {
//         min = Math.max(min, f(m - 1, j, grid, dp))
//     }

//     return min;
// }

// const f = (i, j, grid, dp) => {
//     if (i == 0) return grid[0][j];

//     if (j < 0 || j >= grid[0].length) return Number.MIN_VALUE;

//     if (dp[i][j] !== -1) return dp[i][j];

//     let up = grid[i][j] + f(i - 1, j, grid, dp);
//     let left = Number.MIN_VALUE;
//     let right = Number.MIN_VALUE;
//     if (j > 0) {
//         left = grid[i][j] + f(i - 1, j - 1, grid, dp);
//     }
//     if (j < grid[0].length - 1) {
//         right = grid[i][j] + f(i - 1, j + 1, grid, dp);
//     }

//     dp[i][j] = Math.max(up, Math.max(left, right));

//     return dp[i][j];
// }

// // DP Tabulation approach with dp array
// //  time comp - O(m*n)
// // space comp - O(m*n)
// const minFallingPathSum = (grid) => {
//     let m = grid.length; // rows
//     let n = grid[0].length; // columns
//     let dp = new Array(m).fill(null).map(() => new Array(n).fill(0));

//     for (let j = 0; j < n; j++) {
//         dp[0][j] = grid[0][j]
//     }

//     for (let i = 1; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i == 0) {
//                 dp[0][j] = grid[0][j];
//             }
//             else {
//                 let up = grid[i][j] + dp[i - 1][j];
//                 let left = Number.MAX_VALUE;
//                 let right = Number.MAX_VALUE;
//                 if (j > 0) {
//                     left = grid[i][j] + dp[i - 1][j - 1];
//                 }
//                 if (j < grid[0].length - 1) {
//                     right = grid[i][j] + dp[i - 1][j + 1];
//                 }

//                 dp[i][j] = Math.min(up, Math.min(left, right));
//             }
//         }
//     }

//     let min = Number.MAX_VALUE;

//     for (let j = 0; j < n; j++) {
//         min = Math.min(min, dp[n - 1][j])
//     }
//     return min;
// }

// // DP Tabulation approach without dp array
// //  time comp - O(m*n)
// // space comp - O(1) inplace no extra array needed
// const minFallingPathSum = (grid) => {
//     let m = grid.length; // rows
//     let n = grid[0].length; // columns

//     for (let j = 0; j < n; j++) {
//         grid[0][j] = grid[0][j]
//     }

//     for (let i = 1; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i == 0) {
//                 grid[0][j] = grid[0][j];
//             }
//             else {
//                 let up = grid[i][j] + grid[i - 1][j];
//                 let left = Number.MAX_VALUE;
//                 let right = Number.MAX_VALUE;
//                 if (j > 0) {
//                     left = grid[i][j] + grid[i - 1][j - 1];
//                 }
//                 if (j < grid[0].length - 1) {
//                     right = grid[i][j] + grid[i - 1][j + 1];
//                 }

//                 grid[i][j] = Math.min(up, Math.min(left, right));
//             }
//         }
//     }

//     let min = Number.MAX_VALUE;

//     for (let j = 0; j < n; j++) {
//         min = Math.min(min, grid[n - 1][j])
//     }
//     return min;
// }

// console.log(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]));

// // TC - O(r*c*c)
// // SC - O(r*c*c)
// const cherryPick2 = (grid) => {
//     let r = grid.length;
//     let c = grid[0].length;
//     let dp = new Array(r).fill(null).map(() => new Array(c).fill(null).map(() => new Array(c).fill(-1)))
//     return f(0, 0, c - 1, r, c, grid, dp);
// }

// const f = (i, j1, j2, r, c, grid, dp) => {
//     if (j1 < 0 || j1 > c - 1 || j2 < 0 || j2 > c - 1) {
//         return Number.MIN_SAFE_INTEGER;
//     }

//     if (i == r - 1) {
//         if (j1 == j2) {
//             return grid[i][j1]
//         } else {
//             return grid[i][j1] + grid[i][j2]
//         }
//     }

//     if (dp[i][j1][j2] !== -1) {
//         return dp[i][j1][j2]
//     }

//     let maxi = Number.MIN_SAFE_INTEGER;
//     for (let di = -1; di < 2; di++) {
//         for (let dj = -1; dj < 2; dj++) {
//             let value;
//             if (j1 == j2) {
//                 value = grid[i][j1] + f(i + 1, j1 + di, j2 + dj, r, c, grid, dp);
//             } else {
//                 value = grid[i][j1] + grid[i][j2] + f(i + 1, j1 + di, j2 + dj, r, c, grid, dp);
//             }
//             maxi = Math.max(maxi, value);
//         }
//     }

//     return dp[i][j1][j2] = maxi;
// }

// //  Subsequence / Subsets DP problems
// // TC - O(2^n) two choices wuthout Memoization
// // SC - O(n) without Memoization
// // TC - O(n*target) with Memoization
// // SC - O(n*target) + O(n) with Memoization
// const isSubSetSum = (nums, target) => {
//     let n = nums.length;
//     let dp = new Array(n).fill(null).map(() => new Array(target + 1).fill(-1));
//     return f(n - 1, target, nums, dp);
// }

// const f = (ind, target, nums, dp) => {
//     // base cases
//     if (target == 0) return true;
//     if (ind == 0) return nums[ind] == target; // true or false

//     if (dp[ind][target] !== -1) return dp[ind][target]

//     let take = false;
//     let notTake = f(ind - 1, target, nums, dp);
//     if (target >= nums[ind]) {
//         take = f(ind - 1, target - nums[ind], nums, dp);
//     }
//     dp[ind][target] = take | notTake;

//     return dp[ind][target]
// }

// // Tabulation
// // TC - O(n*target)
// // SC - O(n*target+1)
// const isSubSetSum = (nums, target) => {
//     let n = nums.length;
//     let dp = new Array(n).fill(null).map(() => new Array(target + 1).fill(0));

//     for (let ind = 0; ind < n; ind++) {
//         dp[ind][0] = true;
//     }

//     dp[0][nums[0]] = true;

//     for (let ind = 1; ind < n; ind++) {
//         for (let t = 1; t <= target; t++) {
//             let take = false;
//             let notTake = dp[ind - 1][t];
//             if (t >= nums[ind]) {
//                 take = dp[ind - 1][t - nums[ind]];
//             }
//             dp[ind][t] = take | notTake;
//         }
//     }

//     return dp[n - 1][target];
// }

// console.log(isSubSetSum([2, 3, 1, 1], 4)); // true 1
// console.log(isSubSetSum([3, 34, 4, 12, 5, 2], 9)); // true 1
// console.log(isSubSetSum([3, 34, 4, 12, 5, 2], 30)); // false 0

// const minimumDifference = (nums) => {
//     let n = nums.length;
//     let sum = nums.reduce((acc, ele) => acc += ele);
//     let dp = new Array(n).fill(null).map(() => new Array(sum + 1).fill(0));

//     for (let ind = 0; ind < n; ind++) {
//         dp[ind][0] = true;
//     }

//     if (nums[0] <= sum) {
//         dp[0][nums[0]] = true;
//     }

//     for (let ind = 1; ind < n; ind++) {
//         for (let t = 1; t <= sum; t++) {
//             let take = false;
//             let notTake = dp[ind - 1][t];
//             if (t >= nums[ind]) {
//                 take = dp[ind - 1][t - nums[ind]];
//             }
//             dp[ind][t] = take | notTake;
//         }
//     }

//     let mini = Number.MAX_SAFE_INTEGER;
//     for (let i = 0; i <= sum; i++) {
//         if (dp[n - 1][i] == true) {
//             let s1 = i;
//             let s2 = sum - i;

//             let diff = Math.abs(s1 - s2);
//             mini = Math.min(mini, diff);
//         }
//     }

//     return mini;

// }

// // console.log(minimumDifference([2, -1, 0, 4, -2, -9]));
// console.log(minimumDifference([3, 9, 7, 3]))

// // TC - O(n*t)
// // SC - O(n*t)
// const isSubSetSum = (nums, target) => {
//     let n = nums.length;
//     let dp = new Array(n).fill(null).map(() => new Array(target + 1).fill(0));

//     // base cases
//     for (let ind = 0; ind < n; ind++) {
//         dp[ind][0] = 1;
//     }

//     dp[0][nums[0]] = 1;

//     for (let i = 1; i < n; i++) {
//         for (let t = 1; t <= target; t++) {
//             let take = 0;
//             let notTake = dp[i - 1][t];
//             if (t >= nums[i]) {
//                 take = dp[i - 1][t - nums[i]];
//             }

//             dp[i][t] = take + notTake;
//         }
//     }

//     return dp[n - 1][target]
// }

// console.log(isSubSetSum([1, 2, 3, 3], 3)); // output = 3
// console.log(isSubSetSum([1, 1, 1, 1], 1)); // output = 4
// console.log(isSubSetSum([3, 3, 3, 3], 6)); // output = 6
// console.log(isSubSetSum([1, 1, 1, 0], 3)); // output = 2

// // DP without memoization for knapsack problem
// // TC - O(2^n)
// // SC - O(n)

// // DP memoization
// // TC - O(n*w)
// // SC - O(n) + O(n*w) // where O(n) is the Auxilary stack space ( recursive call space )
// const knapsackProblem = (n, w, profits, weights) => {
//     let dp = new Array(n).fill(null).map(() => new Array(w + 1).fill(-1))
//     return f(n - 1, w, profits, weights, dp)
// }

// const f = (ind, w, arr, weights, dp) => {
//     if (ind == 0) {
//         if (weights[ind] <= w) {
//             return arr[ind]
//         }
//         else
//             return 0;
//     }

//     if (w == 0) return 0;

//     if (dp[ind][w] !== -1) return dp[ind][w];

//     let notPick = f(ind - 1, w, arr, weights, dp);
//     let pick = Number.MIN_VALUE;

//     if (weights[ind] <= w) {
//         pick = arr[ind] + f(ind - 1, w - weights[ind], arr, weights, dp)
//     }

//     return dp[ind][w] = Math.max(pick, notPick);
// }

// // DP with Tabulation approach
// // TC - O(n*w)
// // SC - O(n*w)
// const knapsackProblem = (n, w, profits, weights) => {
//     let dp = new Array(n).fill(null).map(() => new Array(w + 1).fill(0))

//     for (let i = weights[0]; i <= w; i++) {
//         dp[0][i] = profits[0]
//     }

//     for (let ind = 1; ind < n; ind++) {
//         for (let wt = 0; wt <= w; wt++) {
//             let notPick = dp[ind - 1][wt];
//             let pick = Number.MIN_VALUE;

//             if (weights[ind] <= wt) {
//                 pick = profits[ind] + dp[ind - 1][wt - weights[ind]];
//             }

//             dp[ind][wt] = Math.max(pick, notPick);
//         }
//     }

//     return dp[n - 1][w];
// }

// console.log(knapsackProblem(3, 4, [1, 2, 3], [4, 5, 1]));
// console.log(knapsackProblem(3, 50, [60, 100, 120], [10, 20, 30]));

// // DP with Tabulation approach Space optimization with 2 rows prev and curr;
// // TC - O(n*w)
// // SC - O(w)
// const knapsackProblem = (n, w, profits, weights) => {
//     // let dp = new Array(n).fill(null).map(() => new Array(w + 1).fill(0))

//     let prev = new Array(w + 1).fill(0);
//     let curr = new Array(w + 1).fill(0);

//     for (let i = weights[0]; i <= w; i++) {
//         prev[i] = profits[0]
//     }

//     for (let ind = 1; ind < n; ind++) {
//         for (let wt = 0; wt <= w; wt++) {
//             let notPick = prev[wt];
//             let pick = Number.MIN_VALUE;

//             if (weights[ind] <= wt) {
//                 pick = profits[ind] + prev[wt - weights[ind]];
//             }

//             curr[w] = Math.max(pick, notPick);
//         }

//         prev = curr;
//     }

//     return prev[w];
// }

// function knapSack(W , wt , val , n)
// {
//     // Making and initializing dp array
//     var dp = Array(W + 1).fill(0);

//     for (let i = 1; i < n + 1; i++) {
//         for (let w = W; w >= 0; w--) {

//             if (wt[i - 1] <= w)

//                 // Finding the maximum value
//                 dp[w] = Math.max(dp[w], dp[w - wt[i - 1]] + val[i - 1]);
//         }
//     }

//     // Returning the maximum value of knapsack
//     return dp[W];
// }

// console.log(knapsackProblem(3, 4, [1, 2, 3], [4, 5, 1]));
// console.log(knapSack(50, [10, 20, 30], [60, 100, 120], 3));

// DP for coin change leetcode problem with Recursion
// TC - >> O(2^n) exponential
// SC - >> O(N) Aux. stack space. ASS
// const coinChange = (coins, amount) => {
//     let n = coins.length;
//     return f(n - 1, amount, coins)
// };

// const f = (ind, T, arr) => {
//     if (ind == 0) {
//         if (T % arr[0] == 0) return T / arr[ind];
//         else return Number.MAX_VALUE;
//     }

//     let notTake = 0 + f(ind - 1, T);
//     let take = Number.MAX_VALUE;

//     if (arr[ind] <= T) {
//         take = 1 + f(ind, T - arr[ind]);
//     }

//     return Math.min(take, notTake);
// }

// // DP for coin change leetcode problem with Memoization
// // TC - O(N*T)
// // SC - O(N*T) + O(N)
// const coinChange = (coins, amount) => {
//     let n = coins.length;
//     let dp = new Array(n).fill(null).map(() => new Array(amount + 1).fill(-1))
//     if (f(n - 1, amount, coins, dp) >= 1e9) return -1;
//     else return f(n - 1, amount, coins, dp);
// };

// const f = (ind, T, arr, dp) => {
//     if (ind == 0) {
//         if (T % arr[0] == 0) return T / arr[ind];
//         else return 1e9;
//     }

//     if (dp[ind][T] !== -1) return dp[ind][T];

//     let notTake = 0 + f(ind - 1, T, arr, dp);
//     let take = 1e9;

//     if (arr[ind] <= T) {
//         take = 1 + f(ind, T - arr[ind], arr, dp);
//     }

//     return dp[ind][T] = Math.min(take, notTake);
// }

// // DP for coin change leetcode problem with Tabulation
// // TC - O(N*T)
// // SC - O(N*T)
// const coinChange = (arr, T) => {
//     let n = arr.length;
//     let dp = new Array(n).fill(null).map(() => new Array(T + 1).fill(0));

//     for (let t = 0; t <= T; t++) {
//         if (t % arr[0] == 0) {
//             dp[0][t] = t / arr[0]
//         } else {
//             dp[0][t] = 1e9;
//         }
//     }

//     for (let i = 1; i < n; i++) {
//         for (let t = 0; t <= T; t++) {

//             let notTake = 0 + dp[i - 1][t];
//             let take = 1e9;

//             if (arr[i] <= t) {
//                 take = 1 + dp[i][t - arr[i]];
//             }

//             dp[i][t] = Math.min(take, notTake);
//         }
//     }

//     return dp[n - 1][T] >= 1e9 ? -1 : dp[n - 1][T];
// };

// // DP for coin change leetcode problem with Tabulation
// // TC - O(N*T)
// // SC - O(T) with just 2 1d arrays
// const coinChange = (arr, T) => {
//     let n = arr.length;
//     let prev = new Array(T + 1).fill(0);
//     let curr = new Array(T + 1).fill(0);

//     for (let t = 0; t <= T; t++) {
//         if (t % arr[0] == 0) {
//             prev[t] = t / arr[0]
//         } else {
//             prev[t] = 1e9;
//         }
//     }

//     for (let i = 1; i < n; i++) {
//         for (let t = 0; t <= T; t++) {

//             let notTake = 0 + prev[t];
//             let take = 1e9;

//             if (arr[i] <= t) {
//                 take = 1 + curr[t - arr[i]];
//             }

//             curr[t] = Math.min(take, notTake);
//         }

//         prev = curr;
//     }

//     return prev[T] >= 1e9 ? -1 : prev[T];
// };

// console.log(coinChange([1, 5, 2], 11));
// console.log(coinChange([2], 3));
// console.log(coinChange([1], 0));

// // DP for Target Sum leetcode problem with Recursion
// // TC - O(2^n) exponential
// // SC - O(N) Aux. stack space. ASS
// const targetSum = (arr, T) => {
//     let n = arr.length;
//     let dp = new Array(n).fill(null).map(() => new Array(T + 1).fill(0));

//     // if (ind === arr.length) {
//     //     if (t == Target) return 1;
//     //     else return 0;
//     // }

//     for (let t = 0; t <= T; t++) {
//         dp[0][t] = 0;
//     }

//     for (let i = 1; i < n; i++) {
//         for (let t = 0; t <= T; t++) {
//             let plus = dp[i + 1][t + arr[i]];
//             let minus = dp[i + 1][t - arr[i]];

//             dp[i][t] = plus + minus;
//         }
//     }

//     console.log(dp);

//     return dp[n-1][T];
// }

// console.log(targetSum([1, 2, 3, 1], 3));

// const coinChange2 = (arr, T) => {
//     let n = arr.length;
//     return f(n - 1, T, arr);
// }

// const f = (ind, T, arr) => {
//     if (ind == 0) {
//         if (T % arr[ind] == 0) {
//             return 1
//         } else return 0;
//     }

//     let notPick = 0 + f(ind - 1, T, arr)

//     let pick = 0;

//     if (arr[ind] <= T) {
//         pick = f(ind, T - arr[ind], arr)
//     }

//     return pick + notPick;
// }

// const coinChange2 = (arr, T) => {
//     let n = arr.length;
//     let dp = new Array(n).fill(null).map(() => new Array(T + 1).fill(-1));
//     return f(n - 1, T, arr, dp);
// }

// const f = (ind, T, arr, dp) => {
//     if (ind == 0) {
//         if (T % arr[ind] == 0) {
//             return 1
//         } else return 0;
//     }

//     if (dp[ind][T] !== -1) return dp[ind][T];

//     let notPick = 0 + f(ind - 1, T, arr, dp)

//     let pick = 0;

//     if (arr[ind] <= T) {
//         pick = f(ind, T - arr[ind], arr, dp)
//     }

//     return dp[ind][T] = pick + notPick;
// }

// const coinChange2 = (arr, T) => {
//     let n = arr.length;
//     let dp = new Array(n).fill(null).map(() => new Array(T + 1).fill(0));

//     for (let t = 0; t <= T; t++) {
//         if (t % arr[0] == 0) {
//             dp[0][t] = 1;
//         } else {
//             dp[0][t] = 0;
//         }
//     }

//     for (let ind = 1; ind < n; ind++) {
//         for (let t = 0; t <= T; t++) {
//             let notPick = dp[ind - 1][t];

//             let pick = 0;

//             if (arr[ind] <= t) {
//                 pick = dp[ind][t - arr[ind]];
//             }

//             dp[ind][t] = pick + notPick;
//         }
//     }

//     return dp[n - 1][T];
// }

// // TC = O(n*T)
// // SC = O(T)
// const coinChange2 = (arr, T) => {
//     let n = arr.length;
//     let prev = new Array(T + 1).fill(0);
//     let curr = new Array(T + 1).fill(0);

//     for (let t = 0; t <= T; t++) {
//         if (t % arr[0] == 0) {
//             prev[t] = 1;
//         } else {
//             prev[t] = 0;
//         }
//     }

//     for (let ind = 1; ind < n; ind++) {
//         for (let t = 0; t <= T; t++) {
//             let notPick = prev[t];

//             let pick = 0;

//             if (arr[ind] <= t) {
//                 pick = curr[t - arr[ind]];
//             }

//             curr[t] = pick + notPick;
//         }

//         prev = curr;
//     }

//     return prev[T];
// }

// console.log(coinChange2([1, 2, 5], 5)); // 4
// console.log(coinChange2([2], 3)); // 0
// console.log(coinChange2([10], 10)); // 1
// console.log(coinChange2([1, 2, 3], 4)); // 4

// const unboundKnapsack = (wt, val, W) => {
//     let n = val.length;

//     return f(n - 1, W, wt, val);
// }

// const f = (ind, W, wt, val) => {

//     if (ind == 0) {
//         if (W % wt[0] == 0) {
//             return W / wt[0] * val[ind]
//         }
//         else return -1e9;
//     }

//     let notPick = 0 + f(ind - 1, W, wt, val);
//     let pick = -1e9;

//     if (wt[ind] <= W) {
//         pick = val[ind] + f(ind, W - wt[ind], wt, val);
//     }

//     return Math.max(pick, notPick);
// }

// const unboundKnapsack = (wt, val, W) => {
//     let n = val.length;
//     let dp = new Array(n).fill(null).map(() => new Array(W + 1).fill(-1));
//     return f(n - 1, W, wt, val, dp);
// }

// const f = (ind, W, wt, val, dp) => {

//     if (ind == 0) {
//         if (W % wt[0] == 0) {
//             dp[ind][W] = W / wt[0] * val[ind]
//         }
//         else return -1e9;
//     }

//     if (dp[ind][W] !== -1) return dp[ind][W];

//     let notPick = 0 + f(ind - 1, W, wt, val, dp);
//     let pick = -1e9;

//     if (wt[ind] <= W) {
//         pick = val[ind] + f(ind, W - wt[ind], wt, val, dp);
//     }

//     return dp[ind][W] = Math.max(pick, notPick);
// }

// const unboundKnapsack = (n, wt, val, W) => {
//     let dp = new Array(n).fill(null).map(() => new Array(W + 1).fill(-1));

//     for (let t = 0; t <= W; t++) {
//         if (t % wt[0] == 0) {
//             dp[0][t] = (t / wt[0]) * val[0];
//         } else {
//             dp[0][t] = -1e9;
//         }
//     }

//     for (let ind = 1; ind < n; ind++) {
//         for (let t = 0; t <= W; t++) {

//             let notPick = 0 + dp[ind - 1][t];
//             let pick = -1e9;

//             if (wt[ind] <= t) {
//                 pick = val[ind] + dp[ind][t - wt[ind]];
//             }

//             dp[ind][t] = Math.max(pick, notPick);
//         }
//     }

//     return dp[n - 1][W];
// }

// const unboundKnapsack = (n, wt, val, W) => {
//     let prev = new Array(n).fill(W + 1);
//     let curr = new Array(n).fill(W + 1);

//     for (let t = 0; t <= W; t++) {
//         if (t % wt[0] == 0) {
//             prev[t] = (t / wt[0]) * val[0];
//         }
//     }

//     for (let ind = 1; ind < n; ind++) {
//         for (let t = 0; t <= W; t++) {

//             let notPick = 0 + prev[t];
//             let pick = -1e9;

//             if (wt[ind] <= t) {
//                 pick = val[ind] + curr[t - wt[ind]];
//             }

//             curr[t] = Math.max(pick, notPick);
//         }

//         prev = curr;
//     }

//     return prev[W];
// }

// const unboundKnapsack = (n, wt, val, W) => {
//     let prev = new Array(n).fill(W + 1);

//     for (let t = 0; t <= W; t++) {
//         if (t % wt[0] == 0) {
//             prev[t] = (t / wt[0]) * val[0];
//         }
//     }

//     for (let ind = 1; ind < n; ind++) {
//         for (let t = 0; t <= W; t++) {

//             let notPick = 0 + prev[t];
//             let pick = -1e9;

//             if (wt[ind] <= t) {
//                 pick = val[ind] + prev[t - wt[ind]];
//             }

//             prev[t] = Math.max(pick, notPick);
//         }
//     }

//     return prev[W];
// }

// console.log(unboundKnapsack(3, [2, 4, 6], [5, 11, 13], 10));
// console.log(unboundKnapsack(2, [1, 50], [1, 30], 100));

// //
// const cutRod = (arr, n) => {
//     return f(n - 1, arr, n);
// }

// const f = (ind, arr, N) => {
//     if (N == 0) {
//         return 0;
//     }
//     if (ind == 0) {
//         return N * arr[ind]
//     }

//     let notPick = 0 + f(ind - 1, arr, N);
//     let pick = -1e9;

//     if (ind + 1 <= N) {
//         pick = arr[ind] + f(ind, arr, N - (ind + 1))
//     }

//     return Math.max(pick, notPick);
// }

// const cutRod = (arr, n) => {
//     let dp = new Array(n).fill(null).map(() => new Array(n + 1).fill(-1));
//     return f(n - 1, arr, n, dp);
// }

// const f = (ind, arr, N, dp) => {
//     if (N == 0) {
//         dp[ind][N] = 0;
//     }
//     if (ind == 0) {
//         dp[ind][N] = N * arr[ind]
//     }

//     if (dp[ind][N] !== -1) {
//         return dp[ind][N];
//     }

//     let notPick = 0 + f(ind - 1, arr, N, dp);
//     let pick = -1e9;

//     if (ind + 1 <= N) {
//         pick = arr[ind] + f(ind, arr, N - (ind + 1), dp)
//     }

//     return dp[ind][N] = Math.max(pick, notPick);
// }

// const cutRod = (arr, n) => {
//     let N = n;
//     let dp = new Array(n).fill(null).map(() => new Array(N + 1).fill(0));

//     for (let i = 0; i <= N; i++) {
//         dp[0][i] = i * arr[0];
//     }

//     for (let i = 0; i < n; i++) {
//         dp[i][0] = 0;
//     }

//     for (let ind = 1; ind < n; ind++) {
//         for (let t = 1; t <= N; t++) {
//             let notPick = 0 + dp[ind - 1][t];
//             let pick = -1e9;

//             if (ind + 1 <= t) {
//                 pick = arr[ind] + dp[ind][t - (ind + 1)];
//             }

//             dp[ind][t] = Math.max(pick, notPick);
//         }
//     }

//     return dp[n - 1][N]
// }

// const cutRod = (arr, n) => {
//     let N = n;
//     let prev = new Array(N + 1).fill(0);

//     for (let i = 0; i <= N; i++) {
//         prev[i] = i * arr[0];
//     }

//     // for (let i = 0; i < n; i++) {
//     //     prev[0] = 0;
//     // }

//     for (let ind = 1; ind < n; ind++) {
//         for (let t = 1; t <= N; t++) {
//             let notPick = 0 + prev[t];
//             let pick = -1e9;

//             if (ind + 1 <= t) {
//                 pick = arr[ind] + prev[t - (ind + 1)];
//             }

//             prev[t] = Math.max(pick, notPick);
//         }
//     }

//     return prev[N]
// }
// console.log(cutRod([3, 5, 8, 9, 10, 17, 17, 20], 8));

// // TC = O(2^n * 2^m)
// const longestCommonSubsequence = (str1, str2) => {
//     return f(str1.length - 1, str2.length - 1, str1, str2)
// }

// const f = (ind1, ind2, str1, str2) => {

//     if (ind1 < 0 || ind2 < 0) {
//         return 0;
//     }

//     if (str1[ind1] == str2[ind2]) {   // if char matches
//         return 1 + f(ind1 - 1, ind2 - 1, str1, str2)
//     } else {    // if char doesn't match
//         return 0 + Math.max(f(ind1 - 1, ind2, str1, str2), f(ind1, ind2 - 1, str1, str2));
//     }
// }

// // TC - O(nm)
// // SC - O(nm)
// const longestCommonSubsequence = (str1, str2) => {
//     let n = str1.length;
//     let m = str2.length;
//     let dp = new Array(n).fill(null).map(() => new Array(m).fill(-1));
//     return f(n - 1, m - 1, str1, str2, dp)
// }

// const f = (ind1, ind2, str1, str2, dp) => {

//     if (ind1 < 0 || ind2 < 0) {
//         return 0;
//     }

//     if (dp[ind1][ind2] !== -1) {
//         return dp[ind1][ind2];
//     }

//     if (str1[ind1] == str2[ind2]) {   // if char matches
//         return dp[ind1][ind2] = 1 + f(ind1 - 1, ind2 - 1, str1, str2, dp)
//     } else {    // if char doesn't match
//         return dp[ind1][ind2] = 0 + Math.max(f(ind1 - 1, ind2, str1, str2, dp), f(ind1, ind2 - 1, str1, str2, dp));
//     }
// }

// // Tabulation approach
// // TC - O(nm)
// // SC - O(nm)
// const longestCommonSubsequence = (str1, str2) => {
//     let n = str1.length;
//     let m = str2.length;
//     let dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));

//     for (let j = 0; j <= m; j++) {
//         dp[0][j] = 0
//     }

//     for (let i = 0; i <= n; i++) {
//         dp[i][0] = 0
//     }

//     for (let ind1 = 1; ind1 <= n; ind1++) {
//         for (let ind2 = 1; ind2 <= m; ind2++) {
//             if (str1[ind1 - 1] == str2[ind2 - 1]) {   // if char matches
//                 dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
//             } else {    // if char doesn't match
//                 dp[ind1][ind2] = 0 + Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
//             }
//         }
//     }

//     return dp[n][m]
// }

// // Tabulation approach
// // TC - O(nm)
// // SC - O(m)
// const longestCommonSubsequence = (str1, str2) => {
//     let n = str1.length;
//     let m = str2.length;
//     let prev = new Array(m + 1).fill(0);
//     let curr = new Array(m + 1).fill(0);

//     for (let j = 0; j <= m; j++) {
//         prev[j] = 0
//     }

//     for (let ind1 = 1; ind1 <= n; ind1++) {
//         for (let ind2 = 1; ind2 <= m; ind2++) {
//             if (str1[ind1 - 1] == str2[ind2 - 1]) {   // if char matches
//                 curr[ind2] = 1 + prev[ind2 - 1];
//             } else {    // if char doesn't match
//                 curr[ind2] = 0 + Math.max(prev[ind2], curr[ind2 - 1]);
//             }
//         }

//         prev = [...curr];
//     }

//     return prev[m]
// }

// console.log(longestCommonSubsequence("abcde", "ace")); // 3
// console.log(longestCommonSubsequence("abcba", "abcbcba")); // 5

// // Tabulation approach for Printing LCS
// // TC - O(nm) + O(n+m)
// // SC - O(m)
// const printLongestCommonSubsequence = (str1, str2) => {
//     let n = str1.length;
//     let m = str2.length;
//     let dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));

//     for (let j = 0; j <= m; j++) {
//         dp[0][j] = 0
//     }

//     for (let ind1 = 1; ind1 <= n; ind1++) {
//         for (let ind2 = 1; ind2 <= m; ind2++) {
//             if (str1[ind1 - 1] == str2[ind2 - 1]) {   // if char matches
//                 dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
//             } else {    // if char doesn't match
//                 dp[ind1][ind2] = 0 + Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
//             }
//         }
//     }

//     let temp = new Array(dp[n][m]).fill(0);
//     let index = dp[n][m];
//     let i = n + 1;
//     let j = m + 1;

//     while (i > 0 && j > 0) {
//         if (str1[i - 1] == str2[j - 1]) {   // if char matches
//             temp[index] = str1[i - 1];
//             index--;
//             i--;
//             j--;
//         }
//         else if (dp[i - 1][j] > dp[i][j - 1]) {
//             i--;
//         }
//         else {    // if char doesn't match
//             j--;
//         }
//     }

//     return temp.join("");

// }

// console.log(printLongestCommonSubsequence("abcde", "ace")); // ace
// console.log(printLongestCommonSubsequence("abcba", "abcbcba")); // abcba

// const longestCommonSubstring = (s, t) => {
//     let n = s.length;
//     let m = t.length;
//     let dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));

//     let ans = 0;

//     for (let i = 0; i < n + 1; i++) {
//         dp[i][0] = 0
//     }
//     for (let j = 0; j < m + 1; j++) {
//         dp[0][j] = 0
//     }

//     for (let ind1 = 1; ind1 < n + 1; ind1++) {
//         for (let ind2 = 1; ind2 < m + 1; ind2++) {
//             // matches
//             if (s[ind1 - 1] == t[ind2 - 1]) {
//                 dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
//                 ans = Math.max(ans, dp[ind1][ind2])
//             } else { // not matches
//                 dp[ind1][ind2] = 0;
//             }
//         }
//     }

//     return ans

// }

// console.log(longestCommonSubstring("abc", "abe")); // 2

// ----- SIMILAR QUESTION ON LONGEST COMMON SUBSEQUENCE  (LCS)  --------------------------------------------------------------------
// // Longest Palidrome Subsequence
// // similar to LCsubsequence
// // take s = string and t = reverse of s
// // then calculate the number of longest common subsequence

// // Minumum Insertion to make Longest common Palidrome
// // Answer = [length of string - LCP]

// // Minumum Insertion/Deletion to make two strings equal say, s and t of length n and m respectively
// // Answer = [(n - LCSubsequence) + (m - LCSubsequence)]
// const minOperations = (s, t) => {
//     let n = s.length;
//     let m = t.length;
//     let dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));

//     for (let i = 0; i < n + 1; i++) {
//         dp[i][0] = 0
//     }
//     for (let j = 0; j < m + 1; j++) {
//         dp[0][j] = 0
//     }

//     for (let ind1 = 1; ind1 < n + 1; ind1++) {
//         for (let ind2 = 1; ind2 < m + 1; ind2++) {
//             // matches
//             if (s[ind1 - 1] == t[ind2 - 1]) {
//                 dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
//             } else { // not matches
//                 dp[ind1][ind2] = 0 + Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
//             }
//         }
//     }

//     return n + m - 2 * dp[n][m]
// }

// console.log(minOperations("geeksforgeeks", "geeks"));
// console.log(minOperations("heap", "pea"));

// // Shortest Common supersequence will be of length ( n + m - dp[n][m] )
// // TC - O(n*m)
// // SC - O(n*m)
// const shortestCommonSupersequence = (s, t) => {
//     let n = s.length;
//     let m = t.length;
//     let dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));

//     for (let i = 0; i < n + 1; i++) {
//         dp[i][0] = 0
//     }
//     for (let j = 0; j < m + 1; j++) {
//         dp[0][j] = 0
//     }

//     for (let ind1 = 1; ind1 < n + 1; ind1++) {
//         for (let ind2 = 1; ind2 < m + 1; ind2++) {
//             // matches
//             if (s[ind1 - 1] == t[ind2 - 1]) {
//                 dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
//             } else { // not matches
//                 dp[ind1][ind2] = 0 + Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
//             }
//         }
//     }

//     let ans = "";
//     let i = n;
//     let j = m;

//     while (i > 0 && j > 0) {
//         if (s[i - 1] == t[j - 1]) {  // matches
//             ans += s[i - 1];
//             i--;
//             j--;
//         }
//         else if (dp[i - 1][j] > dp[i][j - 1]) { // moving upward
//             ans += s[i - 1];
//             i--;
//         }
//         else { // moving left
//             ans += t[j - 1];
//             j--;
//         }
//     }

//     while (i > 0) {
//         ans += s[i - 1];
//         i--;
//     }
//     while (j > 0) {
//         ans += t[j - 1];
//         j--;
//     }

//     return ans.split("").reverse().join("");
// };

// console.log(shortestCommonSupersequence("bleed", "blue"));

// const numDistinct = (s, t) => {
//     let n = s.length;
//     let m = t.length;

//     let dp = new Array(n).fill(null).map(() => new Array(m).fill(-1))
//     return f(n - 1, m - 1, s, t);
// };

// const f = (i, j, s, t) => {
//     if (j < 0) { // t string's chars are all found in s
//         return 1;
//     }

//     if (i < 0) { // s string is exhausted no more chars to find in it.
//         return 0;
//     }

//     if (s[i] === t[j]) { // if chars matches of s and t
//         return (f(i - 1, j - 1, s, t) + f(i - 1, j, s, t));
//     }

//     else {
//         return f(i - 1, j, s, t);
//     }
// }

// const numDistinct = (s, t) => {
//     let n = s.length;
//     let m = t.length;
//     let dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));

//     for (let i = 0; i < n + 1; i++) {
//         dp[i][0] = 1;
//     }

//     for (let j = 1; j < m + 1; j++) {
//         dp[0][j] = 0;
//     }

//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= m; j++) {
//             if (s[i - 1] === t[j - 1]) {
//                 // If the characters match, we can either include the current character or exclude it
//                 dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
//             } else {
//                 // If the characters do not match, we can only exclude the current character
//                 dp[i][j] = dp[i - 1][j];
//             }
//         }
//     }

//     return dp[n][m];
// };

// const numDistinct = (s, t) => {
//     let n = s.length;
//     let m = t.length;
//     let prev = new Array(m + 1).fill(0);
//     let curr = new Array(m + 1).fill(0);

//     prev[0] = 1;
//     curr[0] = 1;

//     for (let i = 1; i < n + 1; i++) {
//         for (let j = 1; j < m + 1; j++) {
//             if (s[i - 1] === t[j - 1]) {
//                 // If the characters match, we can either include the current character or exclude it
//                 curr[j] = prev[j - 1] + prev[j];
//             } else {
//                 // If the characters do not match, we can only exclude the current character
//                 curr[j] = prev[j];
//             }
//         }

//         prev = curr;
//     }

//     return prev[m];
// };

// const numDistinct = (s, t) => {
//     let n = s.length;
//     let m = t.length;
//     let prev = new Array(m + 1).fill(0);
//     let curr = new Array(m + 1).fill(0);

//     prev[0] = 1;

//     for (let i = 1; i < n + 1; i++) {
//         for (let j = m + 1; j >= 1; j--) {
//             if (s[i - 1] === t[j - 1]) {
//                 prev[j] = prev[j - 1] + prev[j];
//             } else {
//                 // If the characters do not match, we can only exclude the current character
//                 prev[j] = prev[j];
//             }
//         }
//     }

//     return prev[m];
// }

// console.log(numDistinct("babgbag", "bag")); // 5

// // Minimum Insertion or deletion or replacement needed to make string t same as string s;
// // Leetcode Problem - Edit Distance
// const minDistance = (s, t) => {
//     let n = s.length;
//     let m = t.length;

//     return f(n - 1, m - 1, s, t);
// };

// const f = (i, j, s, t) => {
//     if (i < 0) {
//         return j + 1
//     }

//     if (j < 0) {
//         return i + 1
//     }

//     if (s[i] == t[j]) {
//         return 0 + f(i - 1, j - 1, s, t);
//     }
//     else {
//         return 1 + Math.min(f(i - 1, j, s, t), Math.min(f(i, j - 1, s, t), f(i - 1, j - 1, s, t)));
//     }
// }

// const minDistance = (s, t) => {
//     let n = s.length;
//     let m = t.length;
//     let dp = new Array(n).fill(null).map(() => new Array(m).fill(-1));

//     return f(n - 1, m - 1, s, t, dp);
// };

// const f = (i, j, s, t, dp) => {
//     if (i < 0) {
//         return j + 1;
//     }

//     if (j < 0) {
//         return i + 1;
//     }

//     if (s[i] == t[j]) {
//         return dp[i][j] = 0 + f(i - 1, j - 1, s, t, dp);
//     }
//     else {
//         return dp[i][j] = 1 + Math.min(f(i - 1, j, s, t, dp), Math.min(f(i, j - 1, s, t, dp), f(i - 1, j - 1, s, t, dp)));
//     }
// }

// const minDistance = (s, t) => {
//     let n = s.length;
//     let m = t.length;
//     let dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));

//     for (let j = 0; j < m + 1; j++) {
//         dp[0][j] = j;
//     }

//     for (let i = 0; i < n + 1; i++) {
//         dp[i][0] = i;
//     }

//     for (let i = 1; i < n + 1; i++) {
//         for (let j = 1; j < m + 1; j++) {
//             if (s[i - 1] == t[j - 1]) {
//                 dp[i][j] = 0 + dp[i - 1][j - 1];
//             }
//             else {
//                 dp[i][j] = 1 + Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1]));
//             }
//         }
//     }

//     return dp[n][m];
// };

// const minDistance = (s, t) => {s

// // Wildcard Matching leetcode problem
// // TC - exponential
// // SC - O(n+m) // ASS
// const isMatch = (s, p) => {
//     let n = s.length;
//     let m = p.length;

//     return f(n - 1, m - 1, s, p);
// };

// const f = (i, j, s, p) => {
//     // base case
//     if (i < 0 && j < 0) return true;
//     if (i < 0 && j >= 0) {
//         for (let k = 0; k <= j; k++) {
//             if (p[k] !== "*") return false;
//         }
//         return true;
//     }
//     if (i >= 0 && j < 0) {
//         return false;
//     }

//     // recursive calls
//     if (p[j] === s[i] || p[j] === "?") {
//         return f(i - 1, j - 1, s, p)
//     }
//     if (p[j] === "*") {
//         return f(i, j - 1, s, p) || f(i - 1, j, s, p);
//     }
//     else {
//         return false;
//     }
// }

// // TC - O(n*m)
// // SC - O(n*m) + O(n+m) ASS
// const isMatch = (s, p) => {
//     let n = s.length;
//     let m = p.length;

//     let dp = new Array(n).fill(null).map(() => new Array(m).fill(-1));

//     return f(n - 1, m - 1, s, p, dp);
// };

// const f = (i, j, s, p, dp) => {
//     // base case
//     if (i < 0 && j < 0) return true;
//     if (i < 0 && j >= 0) {
//         for (let k = 0; k <= j; k++) {
//             if (p[k] !== "*") return false;
//         }
//         return true;
//     }
//     if (i >= 0 && j < 0) {
//         return false;
//     }

//     // recursive calls
//     if (p[j] === s[i] || p[j] === "?") {
//         return dp[i][j] = f(i - 1, j - 1, s, p, dp)
//     }
//     if (p[j] === "*") {
//         return dp[i][j] = f(i, j - 1, s, p, dp) || f(i - 1, j, s, p, dp);
//     }
//     else {
//         return false;
//     }
// }

// // TC - O(n*m)
// // SC - O(n*m)
// const isMatch = (s, p) => {
//     let n = s.length;
//     let m = p.length;
//     let dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(false));

//     // base case
//     dp[0][0] = true;

//     for (let i = 1; i < n + 1; i++) {
//         dp[i][0] = false;
//     }

//     for (let j = 1; j < m + 1; j++) {
//         let flag = true;
//         for (let k = 1; k <= j; k++) {
//             if (p[k - 1] !== "*") {
//                 flag = false;
//                 break;
//             }
//         }
//         dp[0][j] = flag;
//     }

//     for (let i = 1; i < n + 1; i++) {
//         for (let j = 1; j < m + 1; j++) {
//             // recursive calls
//             if (p[j - 1] === s[i - 1] || p[j - 1] === "?") {
//                 dp[i][j] = dp[i - 1][j - 1];
//             }
//             else if (p[j - 1] === "*") {
//                 dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
//             }
//             else {
//                 dp[i][j] = false;
//             }
//         }
//     }

//     return dp[n][m];
// };

// // TC - O(n*m)
// // SC - O(m)+O(m)
// const isMatch = (s, p) => {
//     let n = s.length;
//     let m = p.length;
//     let prev = new Array(m + 1).fill(false);
//     let curr = new Array(m + 1).fill(false);

//     // base case
//     prev[0] = true;

//     for (let i = 1; i < n + 1; i++) {
//         curr[0] = false;
//     }

//     for (let j = 1; j < m + 1; j++) {
//         let flag = true;
//         for (let k = 1; k <= j; k++) {
//             if (p[k - 1] !== "*") {
//                 flag = false;
//                 break;
//             }
//         }
//         prev[j] = flag;
//     }

//     for (let i = 1; i < n + 1; i++) {
//         for (let j = 1; j < m + 1; j++) {
//             // recursive calls
//             if (p[j - 1] === s[i - 1] || p[j - 1] === "?") {
//                 curr[j] = prev[j - 1];
//             }
//             else if (p[j - 1] === "*") {
//                 curr[j] = prev[j] || curr[j - 1];
//             }
//             else {
//                 curr[j] = false;
//             }
//         }

//         prev = [...curr];
//     }

//     return prev[m];
// };

// console.log(isMatch("abdefcd", "ab*cd")); // true
// console.log(isMatch("abcd", "ab?d")); // true
// console.log(isMatch("abde", "amc?d")); // false
// console.log(isMatch("aa", "*")); // true

// -------------------- DP on STOCKS----------------------------------------------------------------------------------

// // Best time to buy and sell stock 2 - leetcode problem
// // TC - O(2^n) exponential
// // SC - O(n) ASS
// const maxProfit = (prices) => {
//     let n = prices.length;
//     return f(0, 1, prices, n);
// };

// const f = (ind, buy, prices, n) => {
//     if (ind === n) return 0;

//     let profit = 0;

//     if (buy) { // can buy
//         let buyProfit = -prices[ind] + f(ind + 1, 0, prices, n);
//         let notBuyProfit = 0 + f(ind + 1, 1, prices, n);
//         profit = Math.max(buyProfit, notBuyProfit);
//     }
//     else { // can't buy, can sell
//         let sellProfit = +prices[ind] + f(ind + 1, 1, prices, n);
//         let notSellProfit = 0 + f(ind + 1, 0, prices, n);
//         profit = Math.max(sellProfit, notSellProfit);
//     }

//     return profit;
// }

// // Best time to buy and sell stock 2 - leetcode problem
// // TC - O(n*2)
// // SC - O(n*2) + O(n) ASS
// const maxProfit = (prices) => {
//     let n = prices.length;
//     let dp = new Array(n).fill(null).map(() => new Array(2).fill(-1));
//     return f(0, 1, prices, n, dp);
// };

// const f = (ind, buy, prices, n, dp) => {
//     if (ind === n) return 0;

//     if (dp[ind][buy] !== -1) return dp[ind][buy];

//     let profit = 0;

//     if (buy) { // can buy
//         let buyProfit = -prices[ind] + f(ind + 1, 0, prices, n, dp);
//         let notBuyProfit = 0 + f(ind + 1, 1, prices, n, dp);
//         profit = Math.max(buyProfit, notBuyProfit);
//     }
//     else { // can't buy, can sell
//         let sellProfit = +prices[ind] + f(ind + 1, 1, prices, n, dp);
//         let notSellProfit = 0 + f(ind + 1, 0, prices, n, dp);
//         profit = Math.max(sellProfit, notSellProfit);
//     }

//     return dp[ind][buy] = profit;
// }

// // Best time to buy and sell stock 2 - leetcode problem
// // TC - O(n)
// // SC - O(n*2)
// const maxProfit = (prices) => {
//     let n = prices.length;
//     let dp = new Array(n+1).fill(null).map(() => new Array(2).fill(0));

//     dp[n][0] = 0;
//     dp[n][1] = 0;

//     for (let ind = n - 1; ind >= 0; ind--) {
//         for (let buy = 0; buy <= 1; buy++) {
//             let profit = 0;
//             if (buy == 1) { // can buy
//                 let buyProfit = -prices[ind] + dp[ind + 1][0];
//                 let notBuyProfit = 0 + dp[ind + 1][1];
//                 profit = Math.max(buyProfit, notBuyProfit);
//             }
//             else { // can't buy, can sell
//                 let sellProfit = +prices[ind] + dp[ind + 1][1];
//                 let notSellProfit = 0 + dp[ind + 1][0];
//                 profit = Math.max(sellProfit, notSellProfit);
//             }

//             dp[ind][buy] = profit;
//         }
//     }

//     return dp[0][1];
// };

// // Best time to buy and sell stock 2 - leetcode problem
// // TC - O(n)
// // SC - O(1)
// // Space optimization
// const maxProfit = (prices) => {
//     let n = prices.length;
//     let prev = new Array(2).fill(0);
//     let curr = new Array(2).fill(0);

//     prev[0] = 0;
//     prev[1] = 0;

//     for (let ind = n - 1; ind >= 0; ind--) {
//         for (let buy = 0; buy <= 1; buy++) {
//             let profit = 0;
//             if (buy == 1) { // can buy
//                 let buyProfit = -prices[ind] + prev[0];
//                 let notBuyProfit = 0 + prev[1];
//                 profit = Math.max(buyProfit, notBuyProfit);
//             }
//             else { // can't buy, can sell
//                 let sellProfit = +prices[ind] + prev[1];
//                 let notSellProfit = 0 + prev[0];
//                 profit = Math.max(sellProfit, notSellProfit);
//             }

//             curr[buy] = profit;
//         }

//         prev = [...curr];
//     }

//     return prev[1];
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// // Buy and sell stock 3 - leetcode problem
// // Atmost 2 transactions can be done
// // TC - exponential
// // SC - O(n) ASS
// const maxProfit = (prices) => {
//     let n = prices.length;
//     return f(0, 1, prices, n, 2);
// };

// const f = (ind, buy, prices, n, stock) => {
//     if (ind === n) return 0;

//     if (stock == 0) return 0;

//     let profit = 0;

//     if (buy) { // can buy
//         let buyProfit = -prices[ind] + f(ind + 1, 0, prices, n, stock);
//         let notBuyProfit = 0 + f(ind + 1, 1, prices, n, stock);
//         profit = Math.max(buyProfit, notBuyProfit);
//     }
//     else { // can't buy, can sell
//         let sellProfit = +prices[ind] + f(ind + 1, 1, prices, n, stock - 1);
//         let notSellProfit = 0 + f(ind + 1, 0, prices, n, stock);
//         profit = Math.max(sellProfit, notSellProfit);
//     }

//     return profit;
// }

// // Buy and sell stock 3 - leetcode problem
// // Atmost 2 transactions can be done
// // TC - O(n*2*3)
// // SC - O(n*2*3) + O(n) ASS
// const maxProfit = (prices) => {
//     let n = prices.length;
//     let dp = new Array(n).fill(null).map(() => new Array(2).fill(null).map(() => new Array(3).fill(-1))) // dp[n][2][3] - 3D dp
//     return f(0, 1, prices, n, 2, dp);
// };

// const f = (ind, buy, prices, n, stock, dp) => {
//     if (ind === n) return 0;

//     if (stock == 0) return 0;

//     if (dp[ind][buy][stock] !== -1) return dp[ind][buy][stock];

//     let profit = 0;

//     if (buy) { // can buy
//         let buyProfit = -prices[ind] + f(ind + 1, 0, prices, n, stock, dp);
//         let notBuyProfit = 0 + f(ind + 1, 1, prices, n, stock, dp);
//         profit = Math.max(buyProfit, notBuyProfit);
//     }
//     else { // can't buy, can sell
//         let sellProfit = +prices[ind] + f(ind + 1, 1, prices, n, stock - 1, dp);
//         let notSellProfit = 0 + f(ind + 1, 0, prices, n, stock, dp);
//         profit = Math.max(sellProfit, notSellProfit);
//     }

//     return dp[ind][buy][stock] = profit;
// }

// // Buy and sell stock 3 - leetcode problem
// // Atmost 2 transactions can be done
// // TC - O(n*2*3)
// // SC - O(n*2*3)
// // Tabulation approach
// const maxProfit = (prices) => {
//     let n = prices.length;
//     let dp = new Array(n + 1).fill(null).map(() => new Array(2).fill(null).map(() => new Array(3).fill(0))) // dp[n][2][3] - 3D dp

//     // ind == n
//     for (let buy = 0; buy <= 1; buy++) {
//         for (let stock = 0; stock <= 2; stock++) {
//             dp[n][buy][stock] = 0;
//         }
//     }

//     // stock == 0
//     for (let ind = 0; ind <= n; ind++) {
//         for (let buy = 0; buy <= 1; buy++) {
//             dp[ind][buy][0] = 0;
//         }
//     }

//     for (let ind = n - 1; ind >= 0; ind--) {
//         for (let buy = 0; buy <= 1; buy++) {
//             for (let stock = 1; stock <= 2; stock++) {
//                 let profit = 0;

//                 if (buy === 1) { // can buy
//                     let buyProfit = -prices[ind] + dp[ind + 1][0][stock];
//                     let notBuyProfit = 0 + dp[ind + 1][1][stock];
//                     profit = Math.max(buyProfit, notBuyProfit);
//                 }
//                 else { // can't buy, can sell
//                     let sellProfit = +prices[ind] + dp[ind + 1][1][stock - 1];
//                     let notSellProfit = 0 + dp[ind + 1][0][stock];
//                     profit = Math.max(sellProfit, notSellProfit);
//                 }

//                 dp[ind][buy][stock] = profit;
//             }
//         }
//     }

//     return dp[0][1][2];
// };

// // Buy and sell stock 3 - leetcode problem
// // Atmost 2 transactions can be done
// // TC - O(n*2*3)
// // SC - O(2*3) = ~ O(1) - constant
// // Tabulation space optimixzation approach into 2D array
// const maxProfit = (prices) => {
//     let n = prices.length;
//     let prev = new Array(2).fill(null).map(() => new Array(3).fill(0));
//     let curr = new Array(2).fill(null).map(() => new Array(3).fill(0));

//     // ind == n
//     for (let buy = 0; buy <= 1; buy++) {
//         for (let stock = 0; stock <= 2; stock++) {
//             prev[buy][stock] = 0;
//         }
//     }

//     // stock == 0
//     for (let ind = 0; ind <= n; ind++) {
//         for (let buy = 0; buy <= 1; buy++) {
//             prev[buy][0] = 0;
//         }
//     }

//     for (let ind = n - 1; ind >= 0; ind--) {
//         for (let buy = 0; buy <= 1; buy++) {
//             for (let stock = 1; stock <= 2; stock++) {
//                 let profit = 0;

//                 if (buy === 1) { // can buy
//                     let buyProfit = -prices[ind] + prev[0][stock];
//                     let notBuyProfit = 0 + prev[1][stock];
//                     profit = Math.max(buyProfit, notBuyProfit);
//                 }
//                 else { // can't buy, can sell
//                     let sellProfit = +prices[ind] + prev[1][stock - 1];
//                     let notSellProfit = 0 + prev[0][stock];
//                     profit = Math.max(sellProfit, notSellProfit);
//                 }

//                 curr[buy][stock] = profit;
//             }
//         }

//         prev = curr;
//     }

//     return prev[1][2];
// };

// console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));

// // Best time to buy and sell multiple times with cooldown period of a day atleast
// var maxProfit = function (prices) {
//     let n = prices.length;
//     return f(0, 1, prices, n);
// };

// const f = (ind, buy, prices, n) => {
//     if (ind >= n) return 0;

//     if (buy == 1) {
//         let buyProfit = -prices[ind] + f(ind + 1, 0, prices, n);
//         let notBuyProfit = 0 + f(ind + 1, 1, prices, n);
//         return Math.max(buyProfit, notBuyProfit);
//     } else {
//         let sellProfit = prices[ind] + f(ind + 2, 1, prices, n);
//         let notSellProfit = 0 + f(ind + 1, 0, prices, n);
//         return Math.max(sellProfit, notSellProfit);
//     }
// }

// // Best time to buy and sell multiple times with cooldown period of a day atleast
// var maxProfit = function (prices) {
//     let n = prices.length;
//     let dp = new Array(n).fill(null).map(() => new Array(2).fill(-1));
//     return f(0, 1, prices, n, dp);
// };

// const f = (ind, buy, prices, n, dp) => {
//     if (ind >= n) return 0;

//     if(dp[ind][buy] !== -1) return dp[ind][buy];

//     if (buy == 1) {
//         let buyProfit = -prices[ind] + f(ind + 1, 0, prices, n, dp);
//         let notBuyProfit = 0 + f(ind + 1, 1, prices, n, dp);
//         return dp[ind][buy] = Math.max(buyProfit, notBuyProfit);
//     } else {
//         let sellProfit = prices[ind] + f(ind + 2, 1, prices, n, dp);
//         let notSellProfit = 0 + f(ind + 1, 0, prices, n, dp);
//         return dp[ind][buy] = Math.max(sellProfit, notSellProfit);
//     }
// }

// // Best time to buy and sell multiple times with cooldown period of a day atleast
// // Tabulation
// var maxProfit = function (prices) {
//     let n = prices.length;
//     let dp = new Array(n + 2).fill(null).map(() => new Array(2).fill(0));

//     for (let ind = n - 1; ind >= 0; ind--) {
//         for (let buy = 0; buy <= 1; buy++) {
//             if (buy == 1) {
//                 let buyProfit = -prices[ind] + dp[ind + 1][0];
//                 let notBuyProfit = 0 + dp[ind + 1][1];
//                 dp[ind][buy] = Math.max(buyProfit, notBuyProfit);
//             } else {
//                 let sellProfit = prices[ind] + dp[ind + 2][1];
//                 let notSellProfit = 0 + dp[ind + 1][0];
//                 dp[ind][buy] = Math.max(sellProfit, notSellProfit);
//             }
//         }
//     }

//     return dp[0][1];
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// // Best time to buy and sell stock with Transaction fee;
// var maxProfit = function (prices, fee) {
//     let n = prices.length;
//     let dp = new Array(n + 1).fill(null).map(() => new Array(2).fill(0));

//     dp[n][0] = 0;
//     dp[n][1] = 0;

//     for (let ind = n - 1; ind >= 0; ind--) {
//         for (let buy = 0; buy <= 1; buy++) {
//             if (buy == 1) {
//                 let buyProfit = -prices[ind] + dp[ind + 1][0];
//                 let notBuyProfit = 0 + dp[ind + 1][1];
//                 dp[ind][buy] = Math.max(buyProfit, notBuyProfit);
//             } else {
//                 let sellProfit = prices[ind] - fee + dp[ind + 1][1];
//                 let notSellProfit = 0 + dp[ind + 1][0];
//                 dp[ind][buy] = Math.max(sellProfit, notSellProfit);
//             }
//         }
//     }

//     return dp[0][1];
// };

// var lengthOfLIS = function (nums) {
//     let n = nums.length;

//     return f(0, -1, nums, n);
// };

// const f = (ind, prev, nums, n) => {
//     if (ind === n) return 0;

//     let notTake = 0 + f(ind + 1, prev, nums, n);
//     let take = Number.MIN_SAFE_INTEGER;
//     if (prev == -1 || nums[ind] > nums[prev]) {
//         take = 1 + f(ind + 1, ind, nums, n);
//     }

//     return Math.max(take, notTake);

// }

// // TC - O(n^2)
// // TC - O(n^2) + O(n) ASS
// var lengthOfLIS = function (nums) {
//     let n = nums.length;

//     let dp = new Array(n).fill(null).map(() => new Array(n+1).fill(-1))

//     return f(0, -1, nums, n, dp);
// };

// const f = (ind, prev, nums, n, dp) => {
//     if (ind === n) return 0;

//     if(dp[ind][prev + 1] !== -1) return dp[ind][prev + 1];

//     let notTake = 0 + f(ind + 1, prev, nums, n, dp);
//     let take = Number.MIN_SAFE_INTEGER;
//     if (prev == -1 || nums[ind] > nums[prev]) {
//         take = 1 + f(ind + 1, ind, nums, n, dp);
//     }

//     return dp[ind][prev + 1] = Math.max(take, notTake);
// }

// // TC - O(n^2)
// // TC - O(n^2)
// var lengthOfLIS = function (nums) {
//     let n = nums.length;

//     let dp = new Array(n + 1).fill(null).map(() => new Array(n + 1).fill(0));

//     for (let ind = n - 1; ind >= 0; ind--) { // n-1 to 0
//         for (let prev = ind - 1; prev >= -1; prev--) { // ind-1 to -1
//             let notTake = 0 + dp[ind + 1][prev + 1];
//             let take = Number.MIN_SAFE_INTEGER;
//             if (prev == -1 || nums[ind] > nums[prev]) {
//                 take = 1 + dp[ind + 1][ind + 1];
//             }

//             dp[ind][prev + 1] = Math.max(take, notTake);
//         }
//     }

//     return dp[0][-1+1];
// };

// // TC - O(n^2)
// // TC - O(n^2)
// var lengthOfLIS = function (nums) {
//     let n = nums.length;

//     let dp = new Array(n + 1).fill(null).map(() => new Array(n + 1).fill(0));

//     for (let ind = n - 1; ind >= 0; ind--) { // n-1 to 0
//         for (let prev = ind - 1; prev >= -1; prev--) { // ind-1 to -1
//             let notTake = 0 + dp[ind + 1][prev + 1];
//             let take = Number.MIN_SAFE_INTEGER;
//             if (prev == -1 || nums[ind] > nums[prev]) {
//                 take = 1 + dp[ind + 1][ind + 1];
//             }

//             dp[ind][prev + 1] = Math.max(take, notTake);
//         }
//     }

//     return dp[0][-1+1];
// };

// // TC - O(n^2)
// // SC - O(1)
// var lengthOfLIS = function (nums) {
//     let n = nums.length;

//     let curr = new Array(n + 1).fill(0);
//     let next = new Array(n + 1).fill(0);

//     for (let ind = n - 1; ind >= 0; ind--) { // n-1 to 0
//         for (let prev = ind - 1; prev >= -1; prev--) { // ind-1 to -1
//             let notTake = 0 + curr[prev + 1];
//             let take = Number.MIN_SAFE_INTEGER;
//             if (prev == -1 || nums[ind] > nums[prev]) {
//                 take = 1 + curr[ind + 1];
//             }

//             next[prev + 1] = Math.max(take, notTake);
//         }

//         curr = next;
//     }

//     return curr[-1+1];
// };

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4

// var largestDivisibleSubset = function (nums) {
//     let n = nums.length;

//     nums.sort((a,b) => a-b)

//     return f(0, -1, nums, n);
// };

// const f = (ind, prev, nums, n) => {
//     if (ind === n) return 0;

//     let notTake = 0 + f(ind + 1, prev, nums, n);
//     let take = Number.MIN_SAFE_INTEGER;

//     if (prev == -1 || nums[ind] % nums[prev] == 0) {
//         take = 1 + f(ind + 1, ind, nums, n)
//     }

//     return Math.max(take, notTake);
// }

// var largestDivisibleSubset = function (nums) {
//     let n = nums.length;
//     let dp = new Array(n).fill(null).map(() => new Array(n + 1).fill(-1));

//     nums.sort((a, b) => a - b)

//     return f(0, -1, nums, n, dp);
// };

// const f = (ind, prev, nums, n, dp) => {
//     if (ind === n) return 0;

//     if (dp[ind][prev + 1] !== -1) return dp[ind][prev + 1];

//     let notTake = 0 + f(ind + 1, prev, nums, n, dp);
//     let take = Number.MIN_SAFE_INTEGER;

//     if (prev == -1 || nums[ind] % nums[prev] == 0) {
//         take = 1 + f(ind + 1, ind, nums, n, dp)
//     }

//     return dp[ind][prev + 1] = Math.max(take, notTake);
// }

// var largestDivisibleSubset = function (nums) {
//     let n = nums.length;
//     let dp = new Array(n + 1).fill(null).map(() => new Array(n + 1).fill(0));

//     nums.sort((a, b) => a - b);

//     for (let ind = n - 1; ind >= 0; ind--) {
//         for (let prev = n - 1; prev >= -1; prev--) {
//             let notTake = 0 + dp[ind + 1][prev + 1];
//             let take = Number.MIN_SAFE_INTEGER;

//             if (prev == -1 || nums[ind] % nums[prev + 1] == 0) {
//                 take = 1 + dp[ind + 1][ind]
//             }

//             dp[ind][prev + 1] = Math.max(take, notTake);
//         }
//     }

//     let temp = new Array(dp[0][0]);

//     let index = 0;

//     while (index != temp.length) {

//     }

//     return dp[0][-1 + 1];

// };

// console.log(largestDivisibleSubset([1, 2, 3]));
// console.log(largestDivisibleSubset([1, 2, 4, 8]));
// console.log(largestDivisibleSubset([1, 16, 7, 8, 4]));

// var reverseWords = function (s) {
//     let temp = s.split(" ").filter((word) => word !== "");

//     let st = 0;
//     let end = temp.length - 1;

//     while (st < end) {
//         [temp[st], temp[end]] = [temp[end], temp[st]];
//         st++;
//         end--
//     }

//     return temp.join(" ");
// };

// console.log(reverseWords(" the sky is blue"));
// console.log(reverseWords(" hello world "));

// console.log("Start");

// setTimeout(() => {
//   console.log("Inside setTimeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Inside promise");
// });

// console.log("End");

// // output - start, end, inside promise, inside setTimeout

// const mostOcc = (arr) => {
//     let map = new Map();
//     let maxCount = 0;
//     let mostFrequent = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         let count = (map.get(arr[i]) || 0) + 1;
//         map.set(arr[i], count)

//         if (count > maxCount) {
//             maxCount = count;
//             mostFrequent = arr[i];
//         }
//     }

//     return mostFrequent;
// }

// console.log(mostOcc([10, 2, 2, 8, 2, 3, 2, 5]));

// // With SC - O(1) inplace
// var compress = function (arr) {
//     let n = arr.length;
//     let ind = 0;
//     for (let i = 0; i < n; i++) {
//         let ch = arr[i];
//         let count = 0;

//         while (i < n && arr[i] == ch) {
//             count++;
//             i++;
//         }

//         if (count == 1) {
//             arr[ind++] = ch;
//         } else {
//             arr[ind++] = ch
//             for (let c of String(count)) {
//                 arr[ind++] = c;
//             }
//         }

//         i--;
//     }

//     return arr.slice(0, ind);
// };

// console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
// console.log(compress(["a", "b", "b", "b", "b"]));
// console.log(compress(["a", "a", "b", "b", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c"]));

// const happyNumber = (number) => {
//     let str = number.toString().split("").map((num) => parseInt(num));
//     return rec(...str);
// }

// const rec = (a, b) => {
//     if (!b) {
//         if (a == 1) return true;
//         else return false;
//     }
//     else {
//         return rec(...(a * a + b * b).toString().split("").map((num) => parseInt(num)));
//     }
// }

// console.log(happyNumber(19));
// console.log(happyNumber(18));
// console.log(happyNumber(2));

// // TC - O(n)
// // SC - O(1)
// const searchIndexes = (arr, target) => {
//     let ind = -1;
//     let last = -1;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             if (arr[i] === target) {
//                 if (ind == -1) {
//                     ind = i;
//                 }
//                 last = i;
//             }
//         }
//     }

//     return [ind, last];
// }

// // With Binary Search using concept of lower bound and upper bound
// // TC - O(logn)
// // SC - O(1)
// const firstOcc = (arr, k, n) => {
//     let ans = -1;
//     let low = 0;
//     let high = n - 1;

//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2);

//         if (arr[mid] == k) {
//             ans = mid;
//             high = mid - 1;
//         }
//         else if (arr[mid] < k) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }

//     return ans;
// }

// const lastOcc = (arr, k, n) => {
//     let ans = -1;
//     let low = 0;
//     let high = n - 1;

//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2);

//         if (arr[mid] == k) {
//             ans = mid;
//             low = mid + 1;
//         }
//         else if (arr[mid] < k) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }

//     return ans;
// }

// const searchIndexes = (arr, target) => {
//     let n = arr.length;
//     let first = firstOcc(arr, target, n);
//     if (first === -1) return [-1, -1];
//     else {
//         let last = lastOcc(arr, target, n);

//         return [first, last];
//     }
// }

// console.log(searchIndexes([2, 4, 6, 8, 8, 8, 11, 13], 8)); // {3,5}

// // Binary Search with O(logn) TC
// const searchSingleElem = (A) => {
//     let n = A.length;
//     let low = 0;
//     let high = n - 1;

//     if (n == 1) return A[0];

//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2);

//         if (mid == 0 && A[0] !== A[1]) return A[mid];
//         if (mid == n - 1 && A[n - 1] !== A[n - 2]) return A[mid];

//         if (A[mid - 1] !== A[mid] && A[mid] !== A[mid + 1]) {
//             return A[mid];
//         }
//         else {
//             if (mid % 2 == 0) { // mid is even
//                 if (A[mid - 1] == A[mid]) { // left half
//                     high = mid - 1;
//                 }
//                 else { // right half
//                     low = mid + 1;
//                 }
//             } else { // mid is odd
//                 if (A[mid - 1] == A[mid]) { // right half
//                     low = mid + 1;
//                 }
//                 else { // left half
//                     high = mid - 1;
//                 }
//             }
//         }
//     }
// }

// console.log(searchSingleElem([1, 1, 2, 3, 3, 4, 4, 8, 8])); // o/p - 2
// console.log(searchSingleElem([1, 1, 2, 2, 3, 3, 4, 8, 8])); // o/p - 4

// var findPeakElement = function (A) {
//     let n = A.length;
//     let st = 0;
//     let end = n - 1;

//     if (n == 1) return 0;

//     while (st <= end) {
//         let mid = Math.floor(st + (end - st) / 2);

//         if (mid === 0 && A[0] > A[1]) return 0;
//         if (mid === 0 && A[0] < A[1]) return 1;
//         if (mid === n - 1 && A[n - 1] > A[n - 2]) return mid;
//         if (A[mid - 1] < A[mid] && A[mid] > A[mid + 1]) {
//             return mid;
//         }
//         else {
//             if (A[mid - 1] < A[mid] && A[mid] < A[mid + 1]) { // right search
//                 st = mid + 1;
//             } else {
//                 end = mid - 1;
//             }
//         }
//     }

//     return -1;
// };

// console.log(findPeakElement([1, 2, 3, 1]));

// const findMedian = (arr1, arr2) => {
//     let n = arr1.length;
//     let m = arr2.length;
//     let temp = [];

//     let i = 0;
//     let j = 0;
//     let k = n + m;

//     while (i < n && j < m) {
//         if (arr1[i] <= arr2[j]) {
//             temp.push(arr1[i]);
//             i++;
//         } else {
//             temp.push(arr2[j]);
//             j++;
//         }
//     }

//     while (i < n) {
//         temp.push(arr1[i])
//         i++;
//     }

//     while (j < m) {
//         temp.push(arr2[j])
//         j++;
//     }

//     if (temp.length % 2 !== 0) { // odd array

//         let midInd = Math.floor(k / 2);
//         return temp[midInd];
//     } else {
//         return (temp[k / 2 - 1] + temp[k / 2]) / 2
//     }
// }

// console.log(findMedian([1, 3, 4, 7, 10, 13], [2, 3, 6]));
// console.log(findMedian([1, 3, 4, 7, 10, 13], [2, 3, 6, 15]));

// var minimumCardPickup = function (cards) {
//     let map = new Map();
//     let ans = 1e9;

//     for (let i = 0; i < cards.length; i++) {
//         if (map.has(cards[i])) {
//             ans = Math.min(ans, (i - map.get(cards[i]) + 1));
//             map.set(cards[i], i);
//         } else {
//             map.set(cards[i], i);
//         }
//     }

//     return ans === 1e9 ? -1 : ans;
// };

// console.log(minimumCardPickup([3, 4, 2, 3, 4, 7]));

// var kthCharacter = function (k) {
//     let s = "a";

//     while (s.length < k) {
//         let t = "";
//         for (let char of s) {
//             if (char === "z") {
//                 t += a;
//             } else {
//                 t += String.fromCharCode(char.charCodeAt(0) + 1);
//             }
//         }
//         s += t
//     }

//     return s[k - 1];
// };

// console.log(kthCharacter(5));

// var climbStairs = function (n) {
//     let dp = new Array(n + 1).fill(-1);

//     return f(n, dp)
// };

// const f = (ind, dp) => {
//     if (ind == 0) return 1;
//     if (ind < 0) return 0;

//     if (dp[ind] !== -1) return dp[ind];

//     return dp[ind] = f(ind - 1, dp) + f(ind - 2, dp);
// }

// console.log(climbStairs(2));

// var canJump = function (nums) {
//     let n = nums.length;
//     let ind = 0;
//     let maxInd = 0;

//     while (ind < n - 1) {
//         if (ind > maxInd) return false;
//         maxInd = Math.max(maxInd, (nums[ind] + ind));
//         ind++;
//     }

//     if (maxInd >= n - 1) return true;
//     else return false;
// };

// console.log(canJump([1, 2, 4, 1, 1, 0, 2, 5]));
// console.log(canJump([3, 2, 1, 0, 4]));

// // Greedy Assign Cookie Leetcode Problem with O(n+nlogn+mlogm) TC and O(1) space comp.
// var findContentChildren = function (g, c) {
//     let res = 0;
//     let i = 0;
//     let j = 0;
//     g.sort((a, b) => a - b);
//     c.sort((a, b) => a - b);

//     while (i < g.length && j < c.length) {
//         if (c[j] >= g[i]) {
//             res += 1;
//             i++;
//             j++;
//         } else {
//             j++;
//         }
//     }

//     return res;
// };

// var lemonadeChange = function (arr) {
//     let five = 0;
//     let ten = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 5) {
//             five += 1;
//         }
//         else if (arr[i] === 10) {
//             ten += 1;
//             if (five > 0) {
//                 five -= 1
//             } else {
//                 return false;
//             }
//         } else {
//             if (ten > 0 && five > 0) {
//                 ten -= 1;
//                 five -= 1;
//             }
//             else if (five >= 3) {
//                 five -= 3;
//             } else {
//                 return false;
//             }
//         }
//     }

//     return true;
// };

// const solve = (bt) => {
//     //your code here
//     let res = new Array(bt.length).fill(0);
//     bt.sort((a, b) => a - b);

//     for (let i = 1; i < bt.length; i++) {
//         res[i] = res[i - 1] + bt[i - 1];
//     }

//     res = Math.floor(res.reduce((acc, item) => acc += item) / bt.length)

//     return res;
// }

// console.log(solve([1, 2, 3, 4]));
// console.log(solve([4, 7, 3, 2, 1]));

// var jump = function (arr) {
//     let min = Number.MAX_SAFE_INTEGER;
//     let n = arr.length;
//     let dp = new Array(n + 1).fill(null).map(() => new Array(n + 1).fill(-1));
//     return f(0, 0, arr, min, dp);
// };

// const f = (ind, jumps, arr, min, dp) => {

//     if (ind >= arr.length - 1) return jumps;

//     if (dp[ind][jumps] !== -1) return dp[ind][jumps];

//     for (let i = 1; i <= arr[ind]; i++) {
//         min = Math.min(min, f(ind + i, jumps + 1, arr, min, dp));
//     }

//     return dp[ind][jumps] = min;
// }

// var jump = function (arr) {
//     let n = arr.length;
//     let jumps = 0;

//     let l = 0;
//     let r = 0;

//     while (r < n - 1) {
//         let max = 0;

//         for (let i = l; i <= r; i++) {
//             max = Math.max(i + arr[i], max);
//         }
//         l = r + 1;
//         r = max;
//         jumps += 1;
//     }

//     return jumps;
// };

// console.log(jump([2, 3, 0, 1, 4]));
// console.log(jump([2, 3, 1, 4, 1, 1, 1, 2]));

// const maxMeetings = (st, end) => {
//     let n = st.length;
//     let arr = [];

//     for (let i = 0; i < n; i++) {
//         arr.push({ start: st[i], end: end[i], pos: i + 1 });
//     }

//     arr.sort((a, b) => a.end - b.end);

//     let meetings = 1;
//     let freeTime = arr[0].end;

//     for (let i = 1; i < n; i++) {
//         if (arr[i].start > freeTime) {
//             freeTime = arr[i].end;
//             meetings += 1;
//         }
//     }

//     return meetings;
// }

// console.log(maxMeetings([0, 3, 1, 5, 5, 8], [5, 4, 2, 9, 7, 9]));

// var eraseOverlapIntervals = function (arr) {
//     let count = 0;

//     arr.sort((a, b) => a[1] - b[1]);

//     let end = arr[0][1];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i][0] >= end) {
//             end = arr[i][1];
//         } else {
//             count++;
//         }
//     }

//     return count;
// };

// console.log(eraseOverlapIntervals([[1, 100], [11, 22], [1, 11], [2, 12]]));

// var insert = function (arr, newI) {
//     let temp = [];

//     if (arr.length === 0) return [newI];

//     else {
//         for (let i = 0; i < arr.length; i++) {
//             if (newI[0] <= arr[i][1] && newI[1] >= arr[i][0]) { // does not overlap;
//                 newI[0] = Math.min(newI[0], Math.min(newI[0], arr[i][0]));
//                 newI[1] = Math.max(newI[1], Math.max(newI[1], arr[i][1]));
//             } else {
//                 temp.push(arr[i])
//             }
//         }

//         temp.push(newI);

//         temp.sort((a, b) => a[0] - b[0]);
//         return temp;
//     }
// };

// console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));

// const findPlatform = (arr, dep) => {
//     let temp = [];
//     let pt = 0;
//     let max = 0;

//     for (let i = 0; i < arr.length; i++) {
//         temp.push([arr[i], "A"]);
//     }

//     for (let i = 0; i < arr.length; i++) {
//         temp.push([dep[i], "D"]);
//     }

//     temp.sort((a, b) => a[0] - b[0]);

//     for (let i = 0; i < temp.length; i++) {
//         if (temp[i][1] === "A") {
//             pt += 1;
//             max = Math.max(pt, max);
//         } else {
//             pt -= 1;
//         }
//     }

//     return max;
// }

// const findPlatform = (arr, dep) => {
//     arr.sort((a, b) => a - b);
//     dep.sort((a, b) => a - b);
//     let max = 0;
//     let pt = 0;
//     let i = 0;
//     let j = 0;

//     while (i < arr.length) {
//         if (arr[i] <= dep[j]) {
//             i += 1;
//             pt += 1;
//         } else {
//             j += 1;
//             pt -= 1;
//         }
//         max = Math.max(pt, max);
//     }

//     return max;
// }

// console.log(findPlatform([0900, 0940, 0950, 1100, 1500, 1800], [0910, 1200, 1120, 1130, 1900, 2000]));

// 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭(45-60 min)
// → Understanding code execution flow and core concepts like hoisting, closures, etc.
// → Asynchronous JavaScript, the Event Loop and inheritance in JavaScript
// → Writing polyfills for Array, string, promises and method.

// 𝐑𝐞𝐚𝐜𝐭(45-60 min)
// → Understanding the Virtual DOM, React's UI mechanisms and Context API.
// → React Hooks: useState, useEffect, and creating custom hooks.
// → Optimizing performance with techniques like memoization and React.memo.

// 𝐌𝐚𝐜𝐡𝐢𝐧𝐞 𝐂𝐨𝐝𝐢𝐧𝐠 (60-90 min)
// → Developing logic for a Tic Tac Toe or Snake and Ladder game.
// → Building a Typeahead/Autocomplete component using Trie for efficient search.
// → Implementing infinite scrolling with optimized data fetching and similar modules.

// 𝐒𝐲𝐬𝐭𝐞𝐦 𝐃𝐞𝐬𝐢𝐠𝐧 (𝟒𝟓-𝟔𝟎 𝐦𝐢𝐧𝐮𝐭𝐞𝐬)
// → Designing component-based architectures.
// → Optimizing performance and scalability in web applications.
// → Securing frontend implementations (e.g., XSS and CSRF protection).

// const longestSub = (str) => {
//     let st = 0;
//     let end = 0;
//     let set = new Set();
//     let max = 0;

//     while (end < str.length) {
//         if (set.has(str[end])) {
//             set.delete(str[st]);
//             st++;
//         } else {
//             set.add(str[end]);
//             end++;
//             max = Math.max(max, set.size);
//         }
//     }

//     return max;
// }

// console.log(longestSub("madia"));

// const isValid = (s) => {
//     let arr = [];

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "(" || s[i] === "[" || s[i] === "{ ") {
//             arr.push(s[i]);
//         }
//         else {
//             if (arr.length === 0) {
//                 return false;
//             }

//             let c = arr.pop();

//             if (s[i] === ")" && c === "(" || s[i] === "]" && c === "[" || s[i] === "}" && c === "{") {
//                 continue;
//             } else {
//                 return false;
//             }
//         }
//     }

//     return true;
// }

// console.log(isValid("([])"));
// console.log(isValid("([][]))"));

// const isValid = (s) => {
//     let n = s.length;
//     return f(0, 0, s, n);
// }

// const f = (ind, c, s, n) => {
//     if (c < 0) return false;
//     if (ind === n) return c === 0;

//     if (s[ind] === "(") {
//         return f(ind + 1, c + 1, s, n);
//     }
//     if (s[ind] === ")") {
//         return f(ind + 1, c - 1, s, n);
//     }
//     if (s[ind] === "*") {
//         let ways = (f(ind + 1, c, s, n) || f(ind + 1, c + 1, s, n) || f(ind + 1, c - 1, s, n));
//         return ways;
//     }
// }

// // TC - exponential
// const isValid = (s) => {
//     let n = s.length;
//     return f(0, 0, s, n);
// }

// const f = (ind, c, s, n) => {
//     if (c < 0) return false;
//     if (ind === n) return c === 0;

//     if (s[ind] === "(") {
//         return f(ind + 1, c + 1, s, n);
//     }
//     if (s[ind] === ")") {
//         return f(ind + 1, c - 1, s, n);
//     }
//     if (s[ind] === "*") {
//         let ways = (f(ind + 1, c, s, n) || f(ind + 1, c + 1, s, n) || f(ind + 1, c - 1, s, n));
//         return ways;
//     }
// }

// // TC - O(n^2)
// // SC - O(n^2) + ASS
// const isValid = (s) => {
//     let n = s.length;

//     let dp = new Array(n + 1).fill(null).map(() => new Array(n + 1).fill(-1));
//     return f(0, 0, s, n, dp);
// }

// const f = (ind, c, s, n, dp) => {
//     if (c < 0) return false;
//     if (ind === n) return c === 0;

//     if (dp[ind][c] !== -1) return dp[ind][c];

//     if (s[ind] === "(") {
//         return dp[ind][c] = f(ind + 1, c + 1, s, n, dp);
//     }
//     if (s[ind] === ")") {
//         return dp[ind][c] = f(ind + 1, c - 1, s, n, dp);
//     }
//     if (s[ind] === "*") {
//         dp[ind][c] = (f(ind + 1, c, s, n, dp) || f(ind + 1, c + 1, s, n, dp) || f(ind + 1, c - 1, s, n, dp));
//         return dp[ind][c];
//     }
// }

// // TC - O(n)
// // SC - O(1)
// const isValid = (s) => {
//     let n = s.length;
//     let min = 0;
//     let max = 0;

//     for (let i = 0; i < n; i++) {
//         if (s[i] === "(") {
//             min += 1;
//             max += 1;
//         } else if (s[i] === ")") {
//             min -= 1;
//             max -= 1;
//         } else {
//             min -= 1;
//             max += 1;
//         }

//         console.log("min", min, "max", max);

//         if (min < 0) min = 0;

//         if (max < 0) return false;
//     }

// if (min === 0) return true;
// else return false;
// }

// console.log(isValid("()*)()"));
// console.log(isValid("**()"));

// // TC - O(3n)
// // SC - O(2n)
// const candy = (arr) => {
//     let n = arr.length;
//     let left = new Array(n).fill(1);
//     let right = new Array(n).fill(1);

//     for (let i = 1; i < n; i++) {
//         if (arr[i] > arr[i - 1]) {
//             left[i] = left[i - 1] + 1;
//         }
//     }

//     for (let i = n - 2; i >= 0; i--) {
//         if (arr[i] > arr[i + 1]) {
//             right[i] = right[i + 1] + 1;
//         }
//     }

//     for (let i = 0; i < n; i++) {
//         left[i] = Math.max(left[i], right[i]);
//     }

//     return left.reduce((ele, acc) => acc += ele);
// }

// // TC - O(3n) ~ O(n)
// // SC - O(n)
// const candy = (arr) => {
//     let n = arr.length;
//     let left = new Array(n).fill(1);

//     for (let i = 1; i < n; i++) {
//         if (arr[i] > arr[i - 1]) {
//             left[i] = left[i - 1] + 1;
//         }
//     }

//     for (let i = n - 2; i >= 0; i--) {
//         if (arr[i] > arr[i + 1]) {
//             left[i] = Math.max(left[i], left[i + 1] + 1);
//         }
//     }

//     return left.reduce((ele, acc) => acc += ele);
// }

// console.log(candy([1, 2, 3, 1]));

// // TC - O(n logn)
// // SC - O(1)
// const fractionalKnapsack = (arr, W) => {
//     arr.sort((a, b) => b[0] / b[1] - a[0] / a[1]);
//     let profit = 0;
//     let weight = W;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i][1] <= weight) {
//             profit += arr[i][0];
//             weight -= arr[i][1];
//         } else {
//             let pr = (arr[i][0] / arr[i][1]) * weight;
//             profit += pr;
//         }
//     }

//     return profit;
// }

// console.log(fractionalKnapsack([[60, 10], [120, 30], [100, 20]], 50));
// console.log(fractionalKnapsack([[100, 20], [60, 10], [100, 50], [200, 50]], 90));

// const removeDup2 = (arr) => {
//     let n = arr.length;
//     let p1 = 0;
//     let p2 = 0;

//     while (p2 < n) {
//         let count = 1;
//         while (arr[p2 + 1] === arr[p2]) {
//             p2++;
//             count++;
//         }
//         for (let i = 0; i < Math.min(count, 2); i++) {
//             arr[p1] = arr[p2];
//             p1++;
//         }
//         p2++;
//     }

//     return p1;
// }

// console.log(removeDup2([1, 1, 1, 2, 2, 2, 2, 3, 3]));

// // Knapsack 0/1
// const knapsackCapacity = (vals, wt, C) => {
//     let n = vals.length;
//     let prev = new Array(C + 1).fill(0);

//     for (let i = 1; i <= C; i++) {
//         if (wt[0] <= i) {
//             prev[i] = vals[0];
//         }
//     }

//     for (let ind = 1; ind < n; ind++) {
//         for (let w = C; w > 0; w--) {
//             // pick
//             let pick = Number.MIN_SAFE_INTEGER;
//             if (wt[ind] <= w) {
//                 pick = vals[ind] + prev[w - wt[ind]];
//             }
//             // notpick
//             let notPick = 0 + prev[w];

//             prev[w] = Math.max(pick, notPick);
//         }
//     }

//     return prev[C];
// }

// console.log(knapsackCapacity([10, 40, 30, 50], [5, 4, 6, 3], 5)); // ans = 50
// console.log(knapsackCapacity([10, 8, 6], [1, 7, 9], 7)); // ans = 50

// const sort = (arr1, m, arr2, n) => {
//     let p1 = m - 1;
//     let p2 = n - 1;

//     let ind = n + m - 1;

//     while (p2 >= 0) {
//         if (arr1[p1] >= arr2[p2]) {
//             arr1[ind] = arr1[p1]
//             p1--;
//         } else {
//             arr1[ind] = arr2[p2]
//             p2--;
//         }
//         ind--;
//     }

//     return arr1;
// }

// console.log(sort([1, 3, 7, 0, 0, 0], 3, [2, 4, 6], 3));
// console.log(sort([1, 7, 10, 0, 0, 0], 3, [2, 4, 6], 3));
// console.log(sort([0], 0, [1], 1));

// for (var i = 0; i < 3; i++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(i)
//         }, [i * 1000])
//     })(i)
// }

// let person = {
//     name: "Madiha",
//     hello: function(things) {
//         console.log(this.name + " " + "says hello" + " " + things)
//     }
// }

// let newP = {
//     name: "ABC"
// }

// person.hello.apply(newP, ["and welcome"])

// const add = (num1) => {
//     return function (num2) {
//         if (num2) {
//             return add(num2 + num1)
//         } else return num1;
//     }
// }

// console.log(add(2)(3)(5)())

// const add = (a) => {
//     return a + 4;
// }

// const subtract = (a) => {
//     return a - 2;
// }

// const multiply = (a) => {
//     return a * 5;
// }

// // 4 -> 20 - 2 -> 18+4 -> 22

// const compose = (...functions) => {
//     return function(args) {
//         return functions.reduceRight((arg, fn) => fn(arg), args)
//     }
// }

// const res = compose(add, subtract, multiply);

// console.log(res(4));

// function showText(text, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text);
//         }, delay)
//     })
// }

// const p1 = showText("something", 1000)
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1)
//     }, 3000)
// })

// p2.then(() => console.log("p2 resolved")).catch(() => console.log("p2 rejected"))
// // p1.then((data) => console.log(`p1 resolved with text ${data}`)).catch(() => console.log("rejected"));

// Promise.all([p1, p2, p1]).then((value) => console.log("value is", value)).catch(() => console.log("promises rejected"))

// //  Custom Implementation of Promise.all
// const myPromiseAll = (promises) => {
//     let result = [];
//     return new Promise((resolve, reject) => {
//         promises.forEach((promise, index) => {
//             promise.then((res) => {
//                 result.push(res)
//                 if(result.length === promises.length) {
//                     resolve(result)
//                 }
//             }).catch((err) => reject(err))
//         })
//     })
// }

// const p = myPromiseAll([p1, p2, Promise.resolve("hello")])

// console.log(p.then((value) => console.log(value)).catch(() => console.log("rejected")));

// const convert12To24 = (time12h) => {
//     let [time, modifier] = time12h.split(" ")
//     let [hour, mins] = time.split(":")
//     let str = "";

//     if(hour === "12") hour = '00';

//     if(modifier === "PM") hour = parseInt(hour) + 12;

//     return `${hour}:${mins}`
// }

// console.log(convert12To24("01:00 PM"));
// console.log(convert12To24("12:00 PM"));
// console.log(convert12To24("12:00 AM"));
// console.log(convert12To24("02:00 PM"));

// let obj = {
//     a: 1,
//     b: {
//         c:2
//     }
// }

// let obj1 = JSON.parse(JSON.stringify(obj))

// obj1.b.c = 3

// console.log(obj, obj1.b.c);

// console.log(add(2,3));

// function add(a,b) {
//     return a+b
// }

