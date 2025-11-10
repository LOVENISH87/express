import fetch from 'node-fetch';

function loginUser(username , password){
    console.log("looking for cerds")
    return new Promise((res, rej)=>{
        if(username == "admin" && password == "123" ){
            res('login suxessfull')
        }else{
            rej("invalid")
        }
    }, 2000)
}


loginUser("admin" , "123").then((msg) =>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})


// i belive its complete!!!!! 
// TODO : make sure to add

// async/ fxn!!!


function doTask(){
    return new Promise((res, rej) =>{
        let success  = true;
        setTimeout(() => {
            if(success){
                res("login successful")
            }
            else{
                rej("not going through!!!")
            }
        }, 2000);
    })
}





async function test() {
    try {
        
    } catch (eww) {
        console.log(eww)
    }
    finally{
        console.log("all tasks done")
    }    
}


test()




// cd




// api example



async function commentData() {

    try {
        
  
    console.log('fetch data')
    const rest = await fetch('https://jsonplaceholder.typicode.com/comments/')
    const data =  await rest.json();

   const sol =  data.map((i) => {i.name})
    // console.log("data is as: ", data )   
    console.log(sol)     
    }    

       catch (err){
        console.log(err)
       }

}

commentData()