const promise1 =new Promise(function(resolve, reject) {
    let success = true;
    if (success) {
        resolve({
            username: "Mayank",
            location: "Morag"
        });
    } else {
        reject(new Error("User not found"));
    }
});
const promise2 = new Promise(function(resolve, reject) {
    let success = true;
    if(success) {
        resolve({
            orderNo: 1234,
            product: "Laptop"
        });
    } else {
        reject(new Error("Order not found"));
    }
})

//all method returns a single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises. It rejects with the reason of the first promise that rejects.

// Promise.all([promise1,promise2]).then((response) => {
//     console.log(response);
// })
//.catch((error) => {
//     console.log(error.message);
// });


//race method returns a promise that resolves or rejects as soon as one of the promises in an iterable resolves or rejects, with the value or reason from that promise.

//  Promise.race([promise1,promise2]).then((response) => {
//      console.log(response);
//  })
//.catch((error) => {
//      console.log(error.name);
//  });


//allSettled method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

//  Promise.allSettled([promise1,promise2]).then((response) => {
//      console.log(response);
//  })
//.catch((error) => {
//      console.log(error.name);
//  });


//ANY method returns the first fulfilled promise, if all promises are rejected, it will return an AggregateError containing all the rejection reasons.

// Promise.any([promise1,promise2]).then((response) => {
//      console.log(response);
//  })
//  .catch((error) => {
//      console.log(error.message);
//  });


Promise.any([promise1,promise2])
.then((response) => {
     return response;
 })
 .then(result => {
     console.log(result);
 })
 .catch((error) => {
        console.log(error.message);
 })



