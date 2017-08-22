import React, { Component } from 'react';
import { Dimensions, Text } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Menu from './screens/Menu';
import Search from './screens/Search';
import Main from './Main';
import ListProduct from './screens/ListProduct';


const { width, height } = Dimensions.get("window");
export const Home_Screens = StackNavigator({
    ManHinh_Home: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_List_Product: {
        screen: ListProduct,
    }
}, {
        mode: 'modal',
    });
export const SliderMenu = DrawerNavigator({
    Menu: {
        screen: Home_Screens,
    }
}, {
        drawerWidth: width * 0.7,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props}></Menu>
    });