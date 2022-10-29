// Initial State. uygulama ilk açıldığındaki başlangıç değeri
const INITIAL_STATE = {
    isLoggedIn: false
};

// Selectors. diğer ekranlarda reduxtaki değeri almak için kullanılır
export const loginSelector = (state) => state.loginState.isLoggedIn


// Action. Ekranlada reduxı güncellemek için
// Action Types
const SET_LOGIN_STATUS = "user/set_login_status";

// Action Creators
export const setLoginStatus = (status) => {
    return {
        type: SET_LOGIN_STATUS,
        payload: { status },
    };
}

// Reducer 
export const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOGIN_STATUS:
            const newState = action.payload.status;
            return {
                isLoggedIn: newState,
            }
        default:
            return state;
    }
};