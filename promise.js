const promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve({
            username: "Mayank",
            location: "Ghaziabad"
        })
    }
    else {
        reject(new Error("User not found"));
    }
});
//console.log(promise1);

promise1.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error.message);
});