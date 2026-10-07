import fs from 'fs'

fs.watch("info.txt",(eventType, filename)=>{
    console.log("event type: " ,eventType);
    console.log("filename:" , filename);
})