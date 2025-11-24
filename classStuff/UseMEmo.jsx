import React, { useMemo, useState } from 'react'

const [count , setCount] =useState(0);; 
const user   = useMemo(() => ({name : "batman" ,age: 43}), [])
console.log("parent rendered!!!")

function UseMEmo() {
  return (
    <div>
        <h1>parent count : ${count}</h1>
        <button onClick={() => setCount(count+1)}>press</button>
        <Child user={user}/>

    </div>
  )
}

const Child = React.memo(({user}) => {
    console.log('child rendered');
    return <h1>user : {user.name}</h1>
})
export default UseMEmo