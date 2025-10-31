import fs from 'fs'
import zlib, { gunzip, gzip } from 'zlib'


fs.writeFile('text.txt' , 
    "this is test file", 
    (err) =>{
        if(err) {console.log("error in creating file")
            return
        }

        console.log("file written suxessfully")
    }
)


// this callback is just to avoid the error in terminal a

//TODO -> >change the file created@@


// for createing usign Gzip!!!

const Gzip = zlib.createGzip()
//  for reading files

const input = fs.createReadStream('./test.txt')

const output = fs.createWriteStream('test.txt.gz')

// pipe input -> compress the file - output!!

input.pipe(Gzip).pipe(output)



// time to extract file using the decompressor

const Gunzip = zlib.createGunzip()
const compressFile = fs.createReadStream('./test.txt.gz')
const decompressFile = fs.createWriteStream('decompress')



compressInput.pipe(gunzip).pipe(decompressFile)

decompressFil.on("funish" , ()=>{

    console.log("done decompressing!!!")
})
// console.log()