



export const loginUser =()=>{
    return{

        type:"SET_LOGINSTATE",
   

    };

}


export const logoutUser =(payload)=>{
    return{

        type:"SET_LOGOUTSTATE",
        payload

    };

}




