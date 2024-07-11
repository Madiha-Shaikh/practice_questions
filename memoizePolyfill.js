const multiply = (a, b) => {
  //   for (let i = 0; i <= 10000000; i++) {}
  return a * b;
};

const MemoizeFn = (fn) => {
  // console.log("fn", fn);
  const res = {};
  return function (...args) {
    // console.log("args", JSON.stringify(args));
    const argsCache = JSON.stringify(args);

    if (!res[argsCache]) {
    //   console.log("computing");
      res[argsCache] = fn(...args);
    }
    return res[argsCache];
  };
};

const result = multiply(292838, 2938474);
const memoFn = MemoizeFn(multiply);
console.time("first call");
console.log("result 1", memoFn(292838, 2938474));
console.timeEnd("first call");

console.time("second call");
console.log("result 2", memoFn(292838, 2938474));
// const result1 = multiply(292838, 2938474);
// console.log("result 1", result1);
console.timeEnd("second call");
