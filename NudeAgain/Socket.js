import express from 'express'


const app = express();

const findBatman = async () =>{
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await resp.json();
    console.log(data);
    } catch (error) {
        console.log(error);
        
    }
}

findBatman();
app.listen(4800, () =>{
    console.log('running on port~ 4800');
})