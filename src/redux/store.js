import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { SliderMenu } from '../Router';
import { NavigationActions } from 'react-navigation';

const firstAction = SliderMenu.router.getActionForPathAndParams('ManHinh_Home');
const tempNavState = SliderMenu.router.getStateForAction(firstAction);
const secondAction = SliderMenu.router.getActionForPathAndParams('ManHinh_Home');
const initialNavState = SliderMenu.router.getStateForAction(
    secondAction
    // tempNavState
);
const navReducer = (state = initialNavState, action) => {
    console.log(action.type);
    let nextState;
    switch (action.type) {
    case 'HOME':
        nextState = SliderMenu.router.getStateForAction(
            NavigationActions.back(),
            state
        );
        break;
    case 'DANH_MUC':
        nextState = SliderMenu.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'ManHinh_DanhMuc' }),
            state
        );
        break;
    default:
        nextState = SliderMenu.router.getStateForAction(action, state);
        break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

const isLoading = false, error = false, data = null, isVisibleProfile = false;
const cartArr = [{ key: 1, name: 'Camera IP hồng ngoại không dây VANTECH VT-6300B', img: 'hinh1.jpg' },
    { key: 2, name: 'Camera IP hồng ngoại không dây VANTECH VT-6300B', img: 'hinh2.jpg' },
    { key: 3, name: 'Đầu ghi hình HD-TVI 4 kênh TURBO 3.0 HIKVISION DS-7204HGHI-F1C', img: 'hinh3.jpg' },
    { key: 4, name: 'Camera IP hồng ngoại không dây 2.0 Megapixel HIKVISION DS-2CD2420F-IW', img: 'hinh1.jpg' }
];

const redcerCarr = (state = cartArr, action) => {
    return state;
};
const visibleProfile = (state = isVisibleProfile, action) => {
    switch (action.type) {
    case 'TOOGLE_PROFILE': return !state;
    default: return state;
    }
};
const loading = (state = isLoading, action) => {
    switch (action.type) {
    case 'FETCH_START': return true;
    case 'FETCH_SUCCESS': return false;
    case 'FETCH_ERROR': return false;
    default: return state;
    }
};
const isError = (state = error, action) => {
    switch (action.type) {
    case 'FETCH_START': return false;
    case 'FETCH_SUCCESS': return false;
    case 'FETCH_ERROR': return true;
    default: return state;
    }
};
const isData = (state = data, action) => {
    switch (action.type) {
    case 'FETCH_SUCCESS': return action.data;
    default: return state;
    }
};

const appReducer = combineReducers({
    nav: navReducer,
    isVisibleProfile: visibleProfile,
    isLoading: loading,
    error: isError,
    data: isData,
    cartArr: redcerCarr
});
const store = createStore(appReducer, applyMiddleware(thunk));
export default store;