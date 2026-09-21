import fs from 'fs'
console.log("synchronous task")


//setTimeout() method is used to execute a single callback after a specified delay in milliseconds. It is an asynchronous function that allows you to schedule a task to be executed after a certain amount of time has passed.
setTimeout(()=>{
    console.log("set time out");
},2000)



//setInterval() method is used to execute a callback function repeatedly at a specified interval in milliseconds. It is an asynchronous function that allows you to schedule a task to be executed repeatedly after a certain amount of time has passed.
// setInterval(()=>{
//     console.log("set Intervel");
// },2000)
fs.writeFile("notes.txt","hello elce-A",(err)=>{
    if(err){
        console.log(err)
        return
    }
    setTimeout(()=>{
        console.log("Inside fs module set time out");
    },0)
    setImmediate(()=>{
        console.log("Inside fs module set immediate");
    })
    console.log("file has been written successfully");
});

//setImmediate() method is used to execute a single callback after the current event loop turn. It is similar to setTimeout() but it executes the callback immediately after the current event loop turn, rather than after a specified delay.
// setImmediate(()=>{
//     console.log("set immediate");
// })
// console.log("another synchronous task")