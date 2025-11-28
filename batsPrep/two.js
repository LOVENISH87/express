console.log("this is clalback representation")

function fun1(callback){
  setTimeout(() => {
    callback()
  }, 3000);
}
function fun2(){
console.log("this is from sync  ") 
console.log("this is from sync  ") 
console.log("this si working on syc")
}

fun1(fun2)


