import React, { useReducer } from 'react'
const initState = {
    name : " ",
    pass : " ",

    hasConsented : false,
}



function reducer(state, action) {
    switch (action.type) {
        case 'Update':
            return {...state, [action.field]: action.value,}
            // break;
    case  'Reset': return initState;
    case "toggle" : return {
        ...state, hasConsented : !state.hasConsented,
    }
        default: 
        throw new Erorr('unchanged action type : ${action.type}')
            // break;
    }

    


    function App(){
        const [formData , dispatch] = useReducer(formReducer, initFormState)
        const handle {name , value, checked}   = e.target;
        dispatch({
            type : 'update_field',
            field : name,
            value : type === 'checkbox' ? checked : value;
        })
    }


    const handleSub = (e) => {
        e.preventDefault();
        console.log('form submitted', formData);
    }
    

  return (
    <div>
        
    </div>
  )
}

export default reducer