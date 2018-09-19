const initialState= {
    buttonState : false
}

export const clickReducer = (state=initialState, action={}) => {
    switch(action.type){
        case "TOGGLE_BUTTON" :
        return Object.assign({},state,{buttonState:action.payload});
    default:
    return state
    }
}