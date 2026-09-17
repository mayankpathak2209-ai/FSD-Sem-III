function greet(username, callback) {
   console.log("Welcome");
    if(typeof callback === "function") {
        callback(username);
    }
}
greet("Mayank",(username)=>{
console.log("Hello,",username);
});
/*let a=10;
console.log(typeof a);
*/