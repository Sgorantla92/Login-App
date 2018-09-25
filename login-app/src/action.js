export function Register(){
    return function(dispatch){
        axios.post("..\Data\Data.json")
        .then((Response)=>{
            dispatch({type:"Register",payload: Response.data})
        })
        .catch((err)=>{
            dispatch({type:"RegisterFailed", payload:err})
        })
    }
    
}

/*export function Login()
{
    return function(dispatch){
        axios.Post("..\Data\Data.json")
        .then((response)=>{
            var re= response.users.some(())
            dispatch({})
        })
    }
}*/