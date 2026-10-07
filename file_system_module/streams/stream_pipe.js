import fs from 'fs'

const readStream = fs.createReadStream("./intro.txt", {encoding: "utf-8"})
const writeStream = fs.createWriteStream("./output.txt")

readStream.on("data",(chunk)=> {
    console.log("Data Recieved: ");
    console.log(chunk);
})
readStream.pipe(writeStream)


