import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SliderMenu } from './Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


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

}
const reducer = (state = defaultState, action) => {
    return state;
}
const store = createStore(reducer);