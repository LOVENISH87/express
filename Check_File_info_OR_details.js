import fs, { stat } from 'fs'
console.log("this is form check_File_info_OR_details file")


const stats = fs.statSync("result.txt")

console.log("file info: ", stats.isFile()) //gives rest in true and fales!!!
