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

const P1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved")
  }, 3000)
})

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

async function AsyncFuncExample () {
  const data = await P1;
  console.log(data);
}

AsyncFuncExample();