export function clickButton() {
    return (dispatch, getState) => {
        dispatch({
            type: "TOGGLE_BUTTON",
            payload: !(getState().searchingState.buttonState)
        });
      }
    
};