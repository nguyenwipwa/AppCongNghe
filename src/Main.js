import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Cart from './screens/Cart';
import Search from './screens/Search';

import Header from './component/Header';
import { style_icon } from './styles/StylesAndroid';



export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            carrArr: [],
        }
    }
    openMenu() {
        this.props.navigation.navigate('DrawerOpen');
    }
    render() {
        const { carrArr } = this.state;
        return (
            <View style={{ flex: 1, }} >
                <Header openMenu={this.openMenu.bind(this)} />
                <View style={{ backgroundColor: '#dddddd', flex: 10 }}>
                    <TabNavigator>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'home'}
                            title="Trang chủ"
                            renderIcon={() => <Image style={style_icon.s_icon_tab} source={require('./images/appIcon/home0.png')} />}
                            renderSelectedIcon={() => <Image style={style_icon.s_icon_tab} source={require('./images/appIcon/home.png')} />}
                            onPress={() => this.setState({ selectedTab: 'home' })}>
                            <Home />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'search'}
                            title="Tìm kiếm"
                            renderIcon={() => <Image style={style_icon.s_icon_tab} source={require('./images/appIcon/search0.png')} />}
                            renderSelectedIcon={() => <Image style={style_icon.s_icon_tab} source={require('./images/appIcon/search.png')} />}
                            onPress={() => this.setState({ selectedTab: 'search' })}>
                            <Search />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'cart'}
                            title="Giỏ hàng"
                            badgeText={carrArr.length}
                            renderIcon={() => <Image style={style_icon.s_icon_tab} source={require('./images/appIcon/cart0.png')} />}
                            renderSelectedIcon={() => <Image style={style_icon.s_icon_tab} source={require('./images/appIcon/cart.png')} />}
                            onPress={() => this.setState({ selectedTab: 'cart' })}>
                            <Cart />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'contact'}
                            title="Liên hệ"
                            renderIcon={() => <Image style={style_icon.s_icon_tab} source={require('./images/appIcon/contact0.png')} />}
                            renderSelectedIcon={() => <Image style={style_icon.s_icon_tab} source={require('./images/appIcon/contact.png')} />}
                            onPress={() => this.setState({ selectedTab: 'contact' })}>
                            <Contact />
                        </TabNavigator.Item>
                    </TabNavigator>
                </View>
            </View>
        )
    }
}