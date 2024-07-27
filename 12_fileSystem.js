const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'CURD');
const filePath = `${dirPath}/app.txt`; // Corrected string interpolation

//fs.writeFileSync(filePath, 'this is a simple text file');  write file
//readfile
// fs.readFile(filePath,'utf-8',(err,item) =>{
//           console.log(item);
// })  update file

fs.appendFile(filePath,'and file name is apple.txt',(err) =>{
    if(!err) console.log("file is updated")
})


// file is updated
// agin start then create and add

fs.rename(filepath , `${dirPath}/fruit.txt`,(err) => {
           if(ierr) console.log("file nameis uppdate")
} )

    
 