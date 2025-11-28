// let a = 23;

// let b  = 0 ;
// try{
//    if(b===0) throw new Error("this is not possible.,, ca't divide my zero")
//     let c = a-b;
// }
// catch(err){
//     console.error("err", err)
// }
// finally{
//     console.log('execution ended!!!')
// }

const question1 = () =>{
let age = 12;


try{
    if(age < 18) throw new Error('this is invalidAge')
        
}
catch(e){
    console.error(e)
}
finally{
    console.log('function has finished!!')
}

}

question1();