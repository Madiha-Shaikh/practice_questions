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


Input: [1,2,3,[4,5,[6,7],8],9]
Output: [1,2,3,4,5,6,7,8,9]

type TypeInput {
    arr: number[],
    depth: number,
}

const flattenedArray = (arr, depth) => {
    let temp = [];
    for(let i=0;i<arr.length;i++) {
        if(Array.isArray(arr[i]) && (depth > 0 || depth === undefined)) {
            if(depth === undefined) {
                temp.push(...flattenedArray(arr[i]));
            } else {
            temp.push(...flattenedArray(arr[i], depth-1))
            }
        } 
        else {
            temp.push(arr[i]);
        }
    }
    return temp;
}

flattenedArray([1,2,3,[4,5,[6,7],8],9], 0)

flattenedArray<number>();

typeof [] === ??

function Object(id, name) {
    this.id = id;
    this.name = name;
}

let obj1 = new Object(1,'abc');


====================

Input: [1,2,3,[4,5,[6,7],8],9], depth - 2
Output: [1,2,3,4,5,6,7,8,9]

Input: [1,2,3,[4,5,[6,7],8],9], depth - 1
Output: [1,2,3,4,5,[6,7],8,9]

depth - 0 => return same array
depth - undefined => retain original functionality

============

res = [1,2,3,[4,5,[6,7],8],9].flattenedArray(depth);

res = flattenedArray([1,2,3,[4,5,[6,7],8],9], depth);

Array.prototype.flattenedArray = fucntion(depth) {
    flattenedArray(this, depth);
}

Array.prototype.myFlat = function(depth) {
    let temp = [];
    for(let i=0;i<this.length;i++) {
        if(Array.isArray(this[i]) && (depth > 0 || depth === undefined)) {
            if(depth === undefined) {
                temp.push(...flattenedArray(this[i]);
            } else {
            temp.push(...flattenedArray(this[i], depth-1))
            }
        } 
        else {
            temp.push(this[i]);
        }
    }
    return temp;
}










const flattenedArray = (arr, depth) => {
    let temp = [];
    for(let i=0;i<arr.length;i++) {
        if(Array.isArray(arr[i]) && (depth > 0 || depth === undefined)) {
            if(depth === undefined) {
                temp.push(...flattenedArray(arr[i]);
            } else {
            temp.push(...flattenedArray(arr[i], depth-1))
            }
        } 
        else {
            temp.push(arr[i]);
        }
    }
    return temp;
}


===========================

obj = {
    a: [1,2,3],
    b: function() {
        console.log(this);
    }
}

//obj.b();
a = obj.b;
a();


==================

fucntion Test() {
    const {..., obj, ...} = useSelctor(...);

    const { a, b, c } = obj;

    return (
        ...
        <A a={a} />
        <B b={b} />

        <B c={c} />
        ...
    )
}

==============

function Test() {
  const [a, setA] = useState(0);

  useEffect(() => {
    console.log('test1', a);

    return () => {
      console.log('test2', a);
    }
  }, [a]);
  
  // some jsx to update a
}



Steps:


mount:
test1 0

update a to 1:
test2 0
test1 1

update a to 2:
test2 1
test1 2

unmount:
test2 2


useEffect(() => {

},[])


let obj = {
    a: [1,2,3],
    b: function() {
        console.log(this);
    }
}

obj.b();
a = obj.b;
console.log(a());


//////////////////////////////////////////////
import { useEffect, useState } from 'react';
const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if(isRunning) {
            timer = setInterval(() => {
                setCounter((prev) => prev + 1)
            }, 200)
        }
        return () => {
            clearInterval(timer)
        }
    }, [isRunning])

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
      };

    const startHandler = () => {
        setIsRunning(true);
    }

    const stopHandler = () => {
        setIsRunning(false);
    }

    const resetHandler = () => {
        setCounter(0);
        setIsRunning(false);
    }

    return (
        <div>
            <h1>{formatTime(counter)}</h1>
            <button onClick={startHandler}>start</button>
            <button onClick={stopHandler}>stop</button>
            <button onClick={resetHandler}>reset</button>
        </div>
    )
}

export default Counter;