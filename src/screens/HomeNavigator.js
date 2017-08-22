import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Home from './Home';
import ListProduct from './ListProduct';


export default class HomeNavigator extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'HOME' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'HOME': return <Home navigator={navigator} />
                        case 'LIST_PRODUCT': return <ListProduct navigator={navigator} />
                        default: return <Home />
                    }
                }}
                configureScene={
                    (route) => {
                        if (route.name === 'LIST_PRODUCT') {
                            return Navigator.SceneConfigs.FloatFromRight;
                        }
                        return Navigator.SceneConfigs.FloatFromLeft;
                    }
                }
            />
        )
    }
}
