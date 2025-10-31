function checkMarks(marks){
    return new Promise((res, rej) => {
        console.log("checking result: ")

        setTimeout(() => {
            if(marks >= 20){
                res("passed")
            }
            else{
                res("fail")
            }
        }, 2000);
    })
}

checkMarks(40)
.then((msg)=>
{console.log(msg)}
).catch((err) =>{
    console.log(err)
})

// missed somrthing thats my problem!!!!