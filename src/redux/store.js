import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const defaultState = {
    name: 'trong Nguyen',
    isVisibleProfile: false,
    isLoading: false,
    error: false,
    data: null,
    cartArr: [{ key: 1, name: 'Camera IP hồng ngoại không dây VANTECH VT-6300B', img: 'hinh1.jpg' },
        { key: 2, name: 'Camera IP hồng ngoại không dây VANTECH VT-6300B', img: 'hinh2.jpg' },
        { key: 3, name: 'Đầu ghi hình HD-TVI 4 kênh TURBO 3.0 HIKVISION DS-7204HGHI-F1C', img: 'hinh3.jpg' },
        { key: 4, name: 'Camera IP hồng ngoại không dây 2.0 Megapixel HIKVISION DS-2CD2420F-IW', img: 'hinh1.jpg' }
    ]
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