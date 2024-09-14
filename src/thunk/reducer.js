import { combineReducers } from "redux";

const initialState = {
    loading: false,
    data: null,
    error: null
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'requst':
            return {
                ...state,
                loading: true,
                error: null
            }

        case 'success':
            return {
                ...state,
                loading: false,
                data: action.payload,
            }

        case 'error':
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;
    }

}



const rootReducer = combineReducers({
    user: Reducer
})

export default rootReducer