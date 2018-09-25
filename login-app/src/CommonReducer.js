const CommonReducer = (state={users:[{
    "username":"Saranya",
    "password":"123"
    },
    {
        "username":"Bhavana",
        "password":"234"
    },
    {
        "username":"Sreya",
        "password":"567"
    }], username:"",password:"",status:""},action) => {

    switch(action.type){
        case "Register":
            return object.assign(...state,{users:state.users.concat(action.data)})
        case "RegisterFailed":
            return object.assign({},...state)
        case "Login":
            return object.assign({},...state,{status:action.status})
        case "Logout":
            return object.assign({},...state,{status:action.status})
        default :
        return state;
    }
}