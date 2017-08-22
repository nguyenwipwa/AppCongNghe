import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Swiper from 'react-native-swiper'
import Header from '../component/Header';
import { style_image, style_home } from '../styles/StylesAndroid';
import Product from '../component/Product';
import Collection from '../component/Collection';
import TabNavigator from 'react-native-tab-navigator';


export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    openMenu() {
        this.props.navigation.navigate('DrawerOpen');
    }
    render() {
        const { s_image_slider } = style_image;
        const { s_menu_home } = style_home;
        return (
            <View style={{ paddingHorizontal: 3 }}>
                <ScrollView style={{ backgroundColor: '#dddddd' }}>
                    <View>
                        <Swiper
                            autoplay
                            autoplayTimeout={2.5}
                            width="100%"
                            height={150}
                        >
                            <Image style={s_image_slider} source={require('../images/temp/maxi.jpg')} />
                            <Image style={s_image_slider} source={require('../images/temp/midi.jpg')} />
                            <Image style={s_image_slider} source={require('../images/temp/mini.jpg')} />
                        </Swiper>
                    </View>
                    <View
                        style={s_menu_home}
                    >
                        <TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../images/appIcon/home.png')} />
                                <Text style={{ fontWeight: 'bold' }}>Danh mục</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../images/appIcon/home.png')} />
                                <Text style={{ fontWeight: 'bold' }}>Danh mục</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../images/appIcon/home.png')} />
                                <Text style={{ fontWeight: 'bold' }}>Danh mục</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../images/appIcon/home.png')} />
                                <Text style={{ fontWeight: 'bold' }}>Danh mục</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 3, backgroundColor: 'white' }}>
                        <Collection title='Sản phẩm bán chạy' />
                        <Collection title='Sản phẩm khuyến mãi' />
                    </View>
                </ScrollView>
            </View>
        )
    }
}