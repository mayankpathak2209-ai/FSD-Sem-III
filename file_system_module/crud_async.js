import fs from 'fs'

fs.writeFile("config.txt", "", (err) => {

    if(err){
        console.log(err);
        return
    }

    console.log("File created");
})

fs.readFile("config.txt", { encoding: 'utf8' }, (err, data) => {

    if(err){
        console.log(err);
        return
    }

    console.log("File content:", data);
})

fs.appendFile("config.txt", "Hello World", (err) => {

    if(err){
        console.log(err);
        return
    }

    console.log("file updated");
})

fs.rm("config.txt", (err) => {

    if(err){
        console.log(err);
        return
    }

    console.log("File deleted");
})