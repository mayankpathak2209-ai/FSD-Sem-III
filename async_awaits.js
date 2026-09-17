function getUser() {
 return new Promise((resolve, reject)=> {
    let user = true
    if(!user) {
        reject(new Error("User not exists."))

    } else {
        resolve({
            username: "Mayank",
            role: "Engineer"
        })
    }
})
}

// const response = getUser()
// console.log(response);
 
async function fetchUser() {
    const response = await getUser();
    console.log(response);
}
fetchUser();
console.log("HEllo");
