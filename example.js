// str1 = "hello"; ["h","e","l","l","o"]    // {h:1,e:1,l:2,o:1}
// str2 = "hel"; o,h                        // {o:1,l:1,h:1}

// // 1st approach
// const findSubString = (str1, str2) => {
//     let map1 = {};
//     let map2 = {};
//     for(let elem of str1) {
//         map1[elem] = map1[elem] + 1 || 1;
//     }
//     for(let elem of str2) {
//         map2[elem] = map2[elem] + 1 || 1;
//     }
//     for(let elem in map2) {
//         console.log("elem of substring", elem, map1[elem]);
//         if(!map1[elem] || map2[elem] > map1[elem]) {
//             return false;
//         }
//     }
//     return true;
// }

// const res = findSubString("madiha", "aim");
// console.log("res", res);


// // 2nd approach
// const findSubString = (str1, str2) => {
//     let map1 = {};
//     for(let elem of str1) {
//         map1[elem] = map1[elem] + 1 || 1;
//     }
//     for( let elem in str2) {
//         console.log("elem", str2[elem]);
//     }
//     return true;
// }

// const res = findSubString("madiha", "aim");
// console.log("res", res);

// arr= [1,2,[3,4], [5,6]] => [1,2,3,4,5,6]

// const flattenedArray = (arr) => {
//   let res = [];
//   for (let i = 0; i < arr?.length; i++) {
//     if (Array.isArray(arr[i])) {
//       res.push(...flattenedArray(arr[i]));
//       // d = d-1;
//       // console.log("if...");
//     } else {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// };

// const res = flattenedArray([1, 2, [3, [4, 10]], [5, [6, 7]]]);
// console.log("res", res);

// const isSubsequence = (s, t) => {
//     // t = 'abcde'
//     // s = 'ace'
//     // ['a','b','c','d','e']
//     let index = 0;
//     let found = 0;
//     let arr = s.split("");
//     // let arr1 = arr;
//     for (let i = 0; i < s.length; i++) {
//     //   console.log("i", i, s[i]);
//       for (let j = index; j < t.length; j++) {
//         // console.log("j", j, t[j], found);
//         if (s[i] === t[j]) {
//           index = j + 1;
//           found++;
//         }
//       }
//     }
//     if(found === s.length) {
//       return true
//     }
//     else {
//       // console.log("found", found);
//       return false
//     }
//   };
  
//   const res = isSubsequence("dim", "madiha");
//   console.log("res", res);
