import fs from 'fs/promises';

fs.mkdir("./myfolder", { recursive: true })
  .then(() => {
    return fs.readdir("./myfolder");
  })
  .then((files) => {
    console.log("Files:", files);
  })
  .catch((err) => {
    console.error("Error:", err);
  });