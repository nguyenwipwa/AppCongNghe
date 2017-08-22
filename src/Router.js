import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Home from './screens/Home';
import Menu from './screens/Menu';
import Main from './Main';


const { width, height } = Dimensions.get("window");

export const SliderMenu = DrawerNavigator({
    Menu: {
        screen: Main,
    }
}, {
        drawerWidth: width*0.7,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props}></Menu>
    }); 