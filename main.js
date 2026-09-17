//synchronous code
console.log("start");
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("end");
//asynchronous code
console.log("Async start");

setTimeout(() => {
    console.log("setTimeout");
}, 2000);

console.log("Async end");