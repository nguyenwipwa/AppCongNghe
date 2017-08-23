import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SliderMenu } from './Router';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SliderMenu />
            </Provider>
        )
    }
}
const defaultState = {
    name: 'trong Nguyen',
    isVisibleProfile: false,

}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TOOGLE_PROFILE': return { ...state, isVisibleProfile: !state.isVisibleProfile }
        default: return state;
    }
}
// const reducerIsVisibleProfile = (state = defaultState, action) => {
//     return state;
// }
const store = createStore(reducer);