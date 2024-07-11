const countMaxCharOccurrence = (str) => {
    const arr = str.toLowerCase().split("");
    console.log("arr", arr);
    let map = {};
    let max = 1;
    let char = arr[0];
    for (let ele of arr) {
      map[ele] = map[ele] ? map[ele] + 1 : 1;
    }
    for (let key in map) {
        console.log("key is", key);
      if (map[key] > map[char]) {
        console.log("map[key]", key, map[key]);
        max = map[key];
        char = key;
      }
      // console.log("key is", key, map[key]);
    }
    return char;
    // console.log("map", map);
  };
  
  const result = countMaxCharOccurrence("ehhhHHeeee Is thisss");
  console.log("Result :", result);
  
  // ['H', 'e', 'r', 'e', 'e', 'e', 'e', 'e', ' ', 'I','s', ' ', 't', 'h', 'i','s', 's', 's']