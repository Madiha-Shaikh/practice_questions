// Q1 Find the second most occurring chracter in the given string.
// example1:
// input: "3553853335"
// output: '5'
// Example: 2:
// input: "assassin"
// output: "a"

function secondMostRepeatedCharacter(str) {
    // Create an object to store character counts
    const charCount = {};
  
    // Count occurrences of each character in the string
    for (let char of str) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
      // charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Convert object to array of [char, count] pairs
    const counts = Object.entries(charCount);
    console.log(counts);
  
    // Sort counts in descending order based on count
    counts.sort((a, b) => b[1] - a[1]);
  
    // Return the character corresponding to the count at index 1
    return counts[1][0];
  }
  
  // Example usage:
  console.log(secondMostRepeatedCharacter("3553853335")); // Output: "5"
  console.log(secondMostRepeatedCharacter("assassin")); // Output: "a"
  
  // Q2 Given a string srt_a write a program to return the sum and average of the digits that appear in the string, ignoring all other characters.
  // Example:
  // input: str_a = "PYnative29@#8496"
  // output: sum : 38, Average: 6.33333333333
  
  function findAvgAndSum(str) {
    let count = 0;
    let sum = 0;
  
    for (let char of str) {
      if (/[0-9]/.test(char)) {
        sum += parseInt(char, 10);
        count++;
      }
    }
  
    avg = count > 0 ? sum / count : 0;
  
    console.log("sum: ", sum.toString(10));
    console.log("average: ", avg);
  }
  
  findAvgAndSum("PYnative29@#8496");
  
  
  // Q4 find every forth iteration
  
  const str = "hello,Happybirthday.shraddha";
  
  function find4thIteration(str) {
    for(i=1;i<str.length+1;i++){
      if(i%4 == 0){
       console.log(str[i-1])
      }
    }
  }
  
  find4thIteration(str);
  
  // Q5 print how unique many no are there in string
  
  function findUniqueNumlength(str) {
    let charMap = {};
    for (char of str) {
      if (charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    console.log(Object.keys(charMap).length);
  }
  
  findUniqueNumlength(str);
  
  // Q 6. We have group of people in the form of array and you
  // have to group people basis upon category ?
  
  // input:
  products = [
    { name: "Apple", category: "fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Orange", category: "fruit" },
    { name: "Banana", category: "fruit" },
    { name: "Tomatoes", category: "Vegetable" },
    { name: "Broccoli", category: "Vegetable" },
    { name: "Beans", category: "Vegetable" },
  ];
  // Output:
  // products={
  //  fruit:[
  // {name: "Apple", category: "fruit"},
  // {name: "Orange", category: "fruit"},
  // {name: "Banana", category: "fruit"},
  // ],
  // vegetable:[
  // {name: "Carrot", category: "Vegetable"},
  // {name: "Tomatoes", category: "Vegetable"},
  // {name: "Broccoli", category: "Vegetable"},
  // ]
  // }
  const groupProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});
  
  console.log("groupProducts", groupProducts);
  
  // Q7 Custom sorting program in JS via Bubble Sort ?
  //learn swapping with 2 digits.
  
  function findSortedArr(unSortArr) {
    for (i = 0; i < unSortArr.length; i++) {
      for (j = i + 1; j < unSortArr.length; j++) {
        let temp = unSortArr[i];
        if (unSortArr[i] > unSortArr[j]) {
          unSortArr[i] = unSortArr[j];
          unSortArr[j] = temp;
        }
      }
    }
  
    return unSortArr;
  }
  let resultedArr = findSortedArr([4, -1, 34, 9, -9, 103]);
  console.log("resultedArr", resultedArr);
  
  // Q8 Write a program to check if a string or word or number is palindrome ?
  
  function isPalindrome(input) {
    if (input === input.split("").reverse().join("")) {
      return true;
    } else return false;
  }
  const resultPalindrome = isPalindrome("121");
  console.log(resultPalindrome);
  // with out using js inbuilt method
  function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
      rev += str[i];
    }
    if (rev == str) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isPalindrome("121"));
  
  // Q9 Write a program to check if value/target exists or not in ascending
  // array in O(log n) time complexity ?
  
  function findTargetedValue(sortedArr, key) {
    let start = 0;
    let end = sortedArr.length - 1;
    while (start <= end) {
      const middle = Math.floor((start + end) / 2);
      console.log(middle);
      if (sortedArr[middle] === key) {
        return true; // Target found
      } else if (sortedArr[middle] < key) {
        start = middle + 1; // Search in the right half
      } else {
        end = middle - 1; // Search in the left half
      }
    }
    return false; // Target not found
  }
  
  const resultTargetedValue = findTargetedValue(
    [1, 3, 5, 6, 9, 14, 29, 57, 89],
    7
  );
  console.log(resultTargetedValue);
  
  // Q10 Write a program to get total vowel count from String ?
  
  function findTotalVowel(str) {
    let totalVowelCount = 0;
    for (i = 0; i < str.length; i++) {
      char = str[i];
      if (
        char == "a" ||
        char == "e" ||
        char == "i" ||
        char == "o" ||
        char == "u"
      ) {
        totalVowelCount++;
      }
    }
    return totalVowelCount;
  }
  
  const resultTotalVowel = findTotalVowel("we are preparing for interview");
  console.log(resultTotalVowel);
  
  // Q11 Write a program to prints factorial of any number ?
  
  function printFactorial(inputNumber) {
    let result = 1;
    if (inputNumber === 0 || inputNumber === 1) {
      return 1; // Base case: factorial of 0 or 1 is 1
    } else {
      for (i = 1; i <= inputNumber; i++) {
        result *= i;
      }
    }
    return result;
  }
  
  const resultFactorial = printFactorial(5);
  const n = 5;
  console.log(`Factorial of ${n} is:`, resultFactorial);
  
  //using recursion function
  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; // Base case: factorial of 0 or 1 is 1
    } else {
      return n * factorial(n - 1); // Recursive case: factorial of n is n * factorial(n - 1)
    }
  }
  
  // Example usage:
  const number = 5;
  console.log(`Factorial of ${number} is:`, factorial(number)); // Output: Factorial of 5 is: 120
  
  // Q12 Write a program for check number is prime or not ?
  
  function checkPrimeNumber(inputNumber) {
    if (inputNumber <= 1) {
      return false; // Numbers less than or equal to 1 are not prime
    }
    for (i = 2; i < inputNumber; i++) {
      if (inputNumber % i === 0) {
        return false; // If num is divisible by any number other than 1 and itself, it's not prime
      }
    }
    return true; // If num is not divisible by any number other than 1 and itself, it's prime
  }
  
  const resultPrimeNumber = checkPrimeNumber(4);
  console.log("@@@", resultPrimeNumber);
  
  // Q13 Write a program for return the Array with prime numbers only ?
  
  function findPrimeNumbers(arr) {
    const primeNumbers = [];
    for (let num of arr) {
      if (num > 1 && checkPrimeNumber(num)) {
        primeNumbers.push(num);
      }
    }
    return primeNumbers;
  }
  
  const resultArrForPrimeNum = findPrimeNumbers([3, 4, 5, 8, 6, 1, 2, 9, 0]);
  console.log("###", resultArrForPrimeNum);
  
  // Q14. Write a program to find duplicate numbers in an integer array ?
  
  const findDuplicate = (arr) => {
    let duplicateArr = [];
    for (i = 0; i < arr.length; i++) {
      for (j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          duplicateArr.push(arr[i]);
        }
      }
    }
    return duplicateArr;
  };
  console.log(findDuplicate([1, 2, 3, 4, 5, 1, 6, 7, 2, 8, 9, 10, 5]));
  
  // without using 2 for loops
  
  const findDuplicate2 = (arr) => {
    let duplicateArr = [];
    let uniqueArr = [];
    for (i = 0; i < arr.length; i++) {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      } else {
        duplicateArr.push(arr[i]);
      }
    }
    return duplicateArr;
  };
  console.log(findDuplicate2([1, 2, 3, 4, 5, 1, 6, 7, 2, 8, 9, 10, 5]));
  
  // Q15. How do you remove duplicates from an integer array ?
  
  const RemoveDuplicate = (arr) => {
    let uniqueArr = [];
    for (i = 0; i < arr.length; i++) {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  };
  console.log(RemoveDuplicate([1, 2, 3, 4, 5, 1, 6, 7, 2, 8, 9, 10, 5]));
  
  // Q16. Write a program to check whether number is perfect number or not ?
  
  const checkPerfectNum = (num) => {
    let sum = 0;
    for (i = 1; i < num; i++) {
      if (num % i == 0) {
        sum += i;
      }
    }
    if (sum % num == 0) {
      return true;
    } else {
      return false;
    }
  };
  console.log(checkPerfectNum(6));
  
  // Q17. Find the group of missing number in a given integer array of 1 to 100?
  
  function findMultiMissing(arr) {
    let result = [];
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] !== arr[i] + 1) {
        result.push(arr[i] + 1);
      }
    }
    return result;
  }
  console.log(findMultiMissing([1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13]));
  
  // Q18. Find the missing number in a given integer array of 1 to 100?
  
  function findMissing(arr) {
    let n = arr.length + 1; // Number of elements expected in the array (including the missing number)
    let expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n using arithmetic series formula
    // Calculate the sum of all numbers in the array
    let actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(actualSum);
    // The missing number is the difference between the expected sum and the actual sum
    let missingNumber = expectedSum - actualSum;
    return missingNumber;
  }
  console.log(findMissing([1, 2, 3, 4, 5, 6, 7, 9]));
  
  // Q19.  Find the largest and smallest number in an unsorted array of integers?
  function findMaxAndMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return { max, min };
  }
  
  console.log(findMaxAndMin([1, 6, 7, 9, 10, 200, 89, 3, 4, 0.5, 100]));
  
  // Q20. Return an array showing the cumulative sum at each index of an array of integers?
  function findCumulativeSum(arr) {
    let resultArr = [];
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
      sum += arr[i];
      resultArr.push(sum);
    }
    return resultArr;
  }
  
  console.log(findCumulativeSum([1, 3, 5, 7]));
  
  // Q21. Find all duplicate numbers in an array with multiple duplicates?
  function findDuplicateUnsortedArr(arr) {
    let numMap = {};
    let duplicateArr = [];
    for (let num of arr) {
      if (numMap[num]) {
        numMap[num]++;
      } else {
        numMap[num] = 1;
      }
    }
    for (let num in numMap) {
      if (numMap[num] > 1) {
        duplicateArr.push(Number(num));
      }
    }
    return duplicateArr;
  }
  
  console.log(
    findDuplicateUnsortedArr([1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10])
  );
  
  // Q22. Remove all duplicates from an array of integers?
  const FindUniqueArr = (arr) => {
    let uniqueArr = [];
    let duplicateArr = [];
    for (i = 0; i < arr.length; i++) {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      } else {
        duplicateArr.push(arr[i]);
      }
    }
    return uniqueArr;
  };
  console.log(FindUniqueArr([1, 1, 1, 1, 1, 1, 1]));
  
  // Q23.Find all pairs in an array of integers whose sum is equal to a given number?
  
  const findSumPairs = (arr, value) => {
    let sumsLookup = {};
    let output = [];
    for (let i = 0; i < arr.length; i++) {
      let targetValue = value - arr[i];
      if (sumsLookup[targetValue]) {
        output.push([arr[i], targetValue]);
      }
      sumsLookup[arr[i]] = true;
    }
    return output;
  };
  console.log(findSumPairs([1, 5, 6, 1, 0, 1], 6));
  
  // Q24.perform array rotation
  
  function rotateArray(arr, k) {
    let n = arr.length;
    // Calculate the effective rotation amount (handle negative rotations)
    const rotations = ((k % n) + n) % n;
    // Slice the array into two parts and rearrange them
    let rotatedArr = arr.slice(rotations).concat(arr.slice(0, rotations));
    return rotatedArr;
  }
  
  console.log(rotateArray([1, 2, 3, 4, 5], 2));
  
  // Q25.Flattened an array without using array.flat
  
  let FlattenedArray = (arr) => {
    let result = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        result = result.concat(FlattenedArray(item));
      } else {
        result.push(item);
      }
    });
    return result;
  };
  console.log(FlattenedArray([1, [2, [3, 4], 5], 6, [7, 8]]));
  
  // Q26 You are given two strings word1 and word2.
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
  
  let printMergedString = (word1, word2) => {
    let merged = "";
    let i = 0,
      j = 0;
    while (i < word1.length && j < word2.length) {
      merged += word1[i] + word2[j];
      i++;
      j++;
    }
    return merged;
  };
  
  console.log(printMergedString("abc", "pqr"));
  
  // Q27 write pollyfill of Map?
  Array.prototype.myMap = function( callbackFn){
    let arr = [];
    for(i=0;i<arr.length;i++){
      arr.push(callbackFn(this[i],i,this))
    }
    return result
  }
  
  // Q28 write pollyfill of Filter?
  Array.prototype.myFilter = function(callbackFn){
    let arr = [];
    for(i=0;i<arr.length;i++){
      if(callbackFn.call(this[i],i,this)){
        arr.push(this[i])
      }
    }
    return arr
  }
  
  // Q29 write pollyfill of Reduce?
  
  Array.prototype.myReduce = function(callbackFn,initialValue){
    let acc = initialValue;
    for(i=0;i<this.length;i++){
      if(acc !== undefined ){
        acc = callbackFn.call(undefined, this[i], i, this)
      }else{
        acc = this[i]
      }
    }
    return acc;
  }
  

  
const temp = (arr) => {
  return arr.reduce((acc, { name, count }) => {
    if (acc[name]) {
      acc[name][count] = acc[name][count] + count;
    } else {
      acc[name] = { name, count }
    }
    // acc.push(item);
    return acc;
  }, []);
}

console.log(temp(input));

const aggregateCounts = (arr) => {
  return Object.values(
    arr.reduce((acc, { name, count }) => {
      if (acc[name]) {
        acc[name].count += count;
      } else {
        acc[name] = { name, count };
      }
      return acc;
    }, [])
  )
};

console.log(aggregateCounts(input));