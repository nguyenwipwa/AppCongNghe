import React, { Component } from 'react';
import { Dimensions, Text, StyleSheet, Easing, Animated } from 'react-native';
import { DrawerNavigator, StackNavigator, addNavigationHelpers } from 'react-navigation';
import Home from './screens/Home';
import Menu from './screens/Menu';
import Profile from './component/Profile';
import Search from './screens/Search';
import Category from './screens/Category';
import DetailProduct from './screens/DetailProduct';
import { connect } from 'react-redux';
import Main from './Main';
import ListProduct from './screens/ListProduct';


const { width, height } = Dimensions.get('window');
export const Home_Screens = StackNavigator({
    ManHinh_Home: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Thông tin',
            headerStyle: {
                backgroundColor: 'red',
            },
            headerTitleStyle: {
                color: 'white',
            },
            headerBackTitleStyle: {
                color: 'white',
            },
            headerTintColor: 'white',
        },
    },
    ManHinh_Detail_Product: {
        screen: DetailProduct,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.product,
            headerStyle: {
                backgroundColor: 'red',
            },
            headerTitleStyle: {
                color: 'white',
            },
            headerBackTitleStyle: {
                color: 'white',
            },
            headerTintColor: 'white',
        }),

    },
    ManHinh_List_Product: {
        screen: ListProduct,
    },
    ManHinh_DanhMuc: {
        screen: Category,
        navigationOptions: ({ navigation }) => ({
            title: 'Tất cả danh mục',
            headerStyle: {
                backgroundColor: 'red',
            },
            headerTitleStyle: {
                color: 'white',
            },
            headerBackTitleStyle: {
                color: 'white',
            },
            headerTintColor: 'white',
        }),
    }
}, {
    // headerMode: 'none',
    // mode: 'modal',
    navigationOptions: {
        gesturesEnabled: false,
    },
    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            // easing: Easing.out(Easing.poly(4)),
            // timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const height = layout.initHeight;
            const translateY = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [height, 0, 0],
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });

            return { opacity, transform: [{ translateY }] };
        },
    }),
});
export const SliderMenu = DrawerNavigator({
    Menu: {
        screen: Home_Screens,
    }
}, {
    drawerWidth: width * 0.8,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props}></Menu>
});
const AppWithNavigationState = ({ dispatch, nav }) => (
    <SliderMenu navigation1={addNavigationHelpers({ dispatch, state: nav })} />
);


const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);