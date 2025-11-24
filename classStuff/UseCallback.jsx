import React, { useCallback, useState } from 'react'
const counter = () =>{
    const [cnt, setCnt] = useState(0);
    const inc  = useCallback(() =>{
        setCnt((perv) => prev+ 1)
    }, [])


function UseCallback() { //todo change the file name!!!! itss same as the call back funcution can cause trouble!!!
  return (
    <div> {cnt}</div>
  )
}
}

export default UseCallback