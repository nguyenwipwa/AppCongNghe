import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SliderMenu } from './Router';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import store from './redux/store';


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SliderMenu />
            </Provider>
        );
    }
}
