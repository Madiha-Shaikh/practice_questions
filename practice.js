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
//     return arr;
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

//   const newProducts = products.reduce((acc, currentObj) => {
//     console.log("currentObj", currentObj, acc);
//     let category = currentObj?.category?.toLowerCase(); //fruit
//     if(!acc[category]) {
//         acc[category] = []
//     }
//         acc[category]?.push(currentObj);
//     return acc;
//   }, {})

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
// s
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
//   if (!(str2.length < str1.length)) {
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

const deepClone = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
      return obj; // Base case: return primitives or null
    }
  
    const newObj = Array.isArray(obj) ? [] : {};  // Create array or object for clone
    for (const key in obj) {
      newObj[key] = deepClone(obj[key]);  // Recursive call to clone nested objects
    }
    return newObj;
  }

const original = { name: 'Alice', age: 30, address: { city: 'New York' } };
const clone = deepClone(original);

console.log(original == clone);      // Output: false (different objects)
console.log(original.address === clone.address)
// console.log(original, clone);

const org = {name: 'x', years: { num: 2 }};
const newOrg1 = Object.create(org)
const newOrg2 = Object.assign({}, org)
let newOrg3;
newOrg3 = org;
// newOrg3.name = 'y'

console.log(org, newOrg1, newOrg2, newOrg3)
console.log(org === newOrg1, org === newOrg2, org === newOrg3)
console.log(org.name === newOrg2.name, org.years === newOrg1.years)