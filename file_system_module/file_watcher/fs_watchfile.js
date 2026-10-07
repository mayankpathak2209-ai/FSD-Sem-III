import fs from 'fs'

fs.watchFile("info.txt", { interval: 1000 },(curr,prev)=> {
    console.log("curr: ",curr);
    console.log("prev: ",prev)
})

//fs.createreadstream 
//fs.createwritestream
//Duplex Stream
//transformstream