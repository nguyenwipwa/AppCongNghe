import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const defaultState = {
    name: 'trong Nguyen',
    isVisibleProfile: false,
    isLoading: false,
    error: false,
    data: null,

};
const reducer = (state = defaultState, action) => {
    switch (action.type) {
    case 'TOOGLE_PROFILE': return { ...state, isVisibleProfile: !state.isVisibleProfile };
    case 'FETCH_START': return { ...state, isLoading: true, error: false };
    case 'FETCH_SUCCESS': return { ...state, isLoading: false, error: false, data: action.data };
    case 'FETCH_ERROR': return { ...state, isLoading: false, error: true };
    default: return state;
    }
};

const store = createStore(reducer, applyMiddleware(thunk));
export default store;