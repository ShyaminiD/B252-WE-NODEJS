const { constants } = require("buffer");
const fs = require("fs"); // file system


// "utf-8"-will give in correct format, otherwise output will be in binary format

// fs.readFile("./msg.txt", "utf-8", (err, data)=> {
//     if(err){
//         console.error(err)
//     }
//     console.log(data);
// });

// const userName = process.argv
// console.log(userName);
// fs.readFile("./msg.txt", "utf-8", (err, data)=> {
//     if(err){
//         console.log(err)
//     }
//     console.log(data + userName[2]);
// });

// const [, , name] = process.argv
// console.log(name);
// fs.readFile("./msg.txt", "utf-8", (err, data)=> {
//     if(err){
//         console.log(err)
//     }
//     console.log(`${data},  ${name}`);
// });

//TO WRITE A NEW FILE
const [, , name] = process.argv;
console.log(name);
// const data = name;
// fs.writeFile("names.txt", data, (err) => {
//   //(filename, input data in file,call back fuunvtion)

//   console.log("Completed writing!!");
// });

// fs.appendFile("allnames.txt", data + "\n", (err) => {
//   //(filename, input data in file,call back fuunvtion)

//   console.log("Completed appending!!");
// });

// REPLACING NAMES IN allnames.txt

// //Read-> Replace-> Write

// fs.readFile("./allnames.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
//   const replacedData = data.replaceAll("shyamini", "ammu");
//   console.log(replacedData);
//try with "ammu given from user input cmdline"

//   fs.writeFile("./allnames.txt", replacedData, (err) => {
//     console.log("Completed Replacing!!");
//   });
// });
// // TO DELETE A FILE
// fs.unlink("./temp.txt", function (err) {
//   console.error("Removed sucessfully");
// });
// //TO READ ALL THE FILES IN OUR DIRECTORY-BULK UPDATE
// fs.readdir(".", function (err, files) {
//   //.current folder
//   console.log(files);
// });

// fs.readdir("./nice", function (err, files) {
//   //.nice folder
//   console.log(files);
// });
//Task Remove all files starting with fun in nice folder

//const quote = "The road to success is always under construction";
  
///backups
//test-1.html
//test-2.html
//test-3/html
//test-4/html
//...
//test-10.html

// for (let i = 0; i < 10; i++) {
//     fs.writeFile(`./backups/test-${i}.html`, quote, (err) => {
//         console.log("Completed creating!!");
//       });
    
// }

// Taking input from user input
const [, , numofFiles,quote] = process.argv;
console.log(process.argv);
console.log(numofFiles);
// for (let i = 0; i < numofFiles; i++) {
//     fs.writeFile(`./backups/test-${i}.html`, quote, (err) => {
//         console.log("Completed creating!!" + i);
//       });
    
// }
//here in output files are created asynchrously to avoid that
// Completed creating!!1
// Completed creating!!5
// Completed creating!!3
// Completed creating!!6
// Completed creating!!8
// Completed creating!!9
// PS C:\Users\91949\Desktop\B252-WE-NODEJS>

console.log(numofFiles);
for (let i = 0; i < numofFiles; i++) {
    // fs.writeFile(`./backups/test-${i}.html`, quote, (err) => {
    //     console.log("Completed creating!!" + i);
    //   });
    fs.writeFileSync(`./backups/test-${i}.html`, quote);
    console.log(i);
}
  
