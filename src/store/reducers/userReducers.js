
const INIT_STATE = {
    isLogedIn: false,

};


export function userReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "SET_LOGINSTATE":

            return {
                ...state,
                isLogedIn:true,

            };

        case "SET_LOGOUTSTATE":
            return {


                isLogedIn:false,
            };

        default:
            return state;

    }
}