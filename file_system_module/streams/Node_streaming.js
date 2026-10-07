//fs.createreadstream 
//fs.createwritestream
//Duplex Stream
//transformstream

import fs from 'fs'

const readStream = fs.createReadStream("./intro.txt", {encoding: "utf-8"})
const writeStream = fs.createWriteStream("./output.txt")

//Write data on output.txt
writeStream.write("Hello Node")

writeStream.on("finish",()=> {
    console.log("File has been written");
})
writeStream

readStream.on("data",(chunk)=> {
    console.log("Data Recieved: ");
    console.log(chunk);
})

readStream.on("end",()=>{
    console.log("reading completed");
})

readStream.on("error",(err)=>{
    console.log("Error: ",err);
})