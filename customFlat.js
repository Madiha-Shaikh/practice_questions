function customFlat(arr, depth) {
  // Recursion
  let res = [];
  for (let i = 0; i < arr?.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      res.push(...customFlat(arr[i], depth - 1));
    } else {
      res.push(arr[i]);
    }
  }
  // arr.forEach(ar => {
  //     if(Array.isArray(ar) && depth > 0) {
  //         res.push(...customFlat(ar, depth-1))
  //     } else {
  //         res.push(ar)
  //     }
  // })
  return res;
}

const result = customFlat([1, 2, 3, [4, [5, [6]], 7], 8], 4);
console.log("result: ", result);
