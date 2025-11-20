import fs from 'fs'

fs.copyFile('result.txt', 'james.txt', (err, data)=> { // 2.
    if(err) console.log("error aya bc" );
    else console.log("file copied!!! " ,data)
})

console.log("done copying files") // 1.
console.log("added this line")
