import fs from 'fs';

// fs.symlink("notes.txt", "link.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Symbolic link created");
// });

fs.lstat("link.txt",(err,stats) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(stats.isSymbolicLink());
})

fs.rename("link.txt","new.txt",(err)=> {
        if(err){
            console.log(err)
        } else {
            console.log("renamed")
        }
})