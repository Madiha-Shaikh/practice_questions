// const cart = ["A"];

// const createOrder = (cart) => {
//   const promise = new Promise((resolve, reject) => {
//     if (!cart?.length) {
//       const err = new Error("404 not found");
//       reject(err);
//     }
//     let orderId = { data: "12345" };
//     setTimeout(() => {
//       resolve(orderId);
//     }, 2000);
//   });
//   return promise;
// };

// const paymentPromise = (orderId) => {
//   return new Promise((resolve, reject) =>
//     resolve(`2nd promise successfuly resolved with orderId : ${orderId}`)
//   );
// };

// console.log(
//   "data is",
//   createOrder(cart)
//     ?.then((res) => {
//       console.log("res for promise 1 is", res);
//       return res.data;
//     })
//     ?.then((orderId) => {
//       return paymentPromise(orderId);
//     })
//     ?.then((res) => console.log("res for promise 2 is", res))
//     .catch(function (err) {
//       console.log(err.message);
//     })
// );

// const P1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 resolved")
//   }, 3000)
// })

// const P2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise 2 rejected")
//   }, 1000)
// })

// const P3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 3 resolved")
//   }, 2000)
// })

// Promise.all([P1, P2, P3]).then((res) => console.log(res)).catch((err) => console.error(err));
// Promise.allSettled([P1, P2, P3]).then((res) => console.log(res)).catch((err) => console.error(err));
// Promise.race([P1, P2, P3]).then((res) => console.log(res)).catch((err) => console.error(err));
// Promise.any([P1, P2, P3]).then((res) => console.log(res)).catch((err) => console.error(err));

// async function AsyncFuncExample () {
//   const data = await P1;
//   console.log(data);
// }

// AsyncFuncExample();


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



// const Promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({name: "Madiha"});
//         // reject(404);
//     }, 500)
// });

// Promise1.then((res) => console.log(`res is ${JSON.stringify(res)}`)).catch((err) => console.log(`Rejected with error ${err}`))


// 'https://dummyjson.com/posts/add'

// const promise = new Promise((resolve, reject) => {
//     let flag = false;
//     if(flag) {
//         resolve(fetch('https://dummyjson.com/posts/add', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 title: 'The Title',
//                 userId: 1
//             })
//         }))
//     } else {
//         reject('FLAG is false')
//     }
// })

// promise.then((data) => data.json()).then((res) => console.log("response is", res)).then(() => fetch("https://dummyjson.com/posts")).then(res => res.json()).then(res => console.log("res is", res)).catch(err => console.log(err)).finally(() => console.log("Promise is either resolved or rejected"))


// const postData = async () => {
//     try {
//         const res = await fetch("https://dummyjson.com/posts/add", {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 title: 'The Unpredictable Life',
//                 userId: '16',
//             })
//         })

//         if (!res.ok) throw new Error('Network response was not ok'); // custom error handling

//         const data = await res.json();
//         return data;
//         // console.log(data);
//     } catch (error) {
//         throw error;
//     }
// }

// postData().then(data => console.log("data is", data)).catch(error => console.error("Caught Err:", error))
  

function PromisePolyfill (executer) {
  let onResolve, onReject;
  let isFullfilled = false;
  let isRejected = false;
  let isCalled = false;
  let value;

  const resolve = (val) => {
    isFullfilled = true;
    value = val;
    if(typeof onResolve === 'function') {
        onResolve(val);
        isCalled = true;
    }
  };
  const reject = (val) => {
    isRejected = true;
    value = val;
    if(typeof onReject === 'function') {
        onReject(val);
        isCalled = true;
    }
  };

  this.then = function(cb) {
    onResolve = cb;
    if(isFullfilled && !isCalled) {
        isCalled = true;
        onResolve(value);
    }
    return this;
  }

  this.catch = function(cb) {
    onReject = cb;
    if(isRejected && !isCalled) {
        isCalled = true;
        onReject(value);
    }
    return this;
  }

  try {
    executer(resolve, reject);
  } catch (error) {
    reject(error)
  }
};

const p = new PromisePolyfill((resolve, reject) => {
  setTimeout(() =>
    resolve(200)
    // reject("404")
  , 1000);
});

// console.log('promise', p)
p.then((value) => console.log("resolved with status", value)).catch((err) => console.log("rejected with error", err));