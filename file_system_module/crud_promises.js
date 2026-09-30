import fs from 'fs/promises';
async function greet() {
    return "Hello";
}

// greet().then((res) => {
//     console.log(res);
// })
// .catch((error) => {
//     console.log(error);
// })

// fs.writeFile("log.txt","User Sign Up")
// .then((res)=> {
//     console.log(res);
// })
// .catch((err)=> {
//     console.log(err);
// })

// fs.readFile("log.txt",{encoding: "utf8"})
// .then((res)=> {
//     console.log(res);
// })
// .catch((err)=> {
//     console.log(err);   
// })

// fs.appendFile("log.txt","User Sign Up")
// .then((res)=> {
//     console.log(res);
// })
// .catch((err)=> {
//     console.log(err);
// })

// fs.rm("log.txt")
// .then((res)=> {
//     console.log(res);
// })
// .catch((err)=> {
//     console.log(err);
// })

async function fileHandling(filename, content) {
    await fs.writeFile(filename, content);
    console.log("File created");
    const data = await fs.readFile(filename, { encoding: "utf8" });
    console.log("Data:", data);
}
fileHandling("log.txt", "Username: Mayank")