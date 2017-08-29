import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { style_image } from '../styles/StylesAndroid';
import CategoryMenu from '../component/CategoryMenu';


export default class Menu extends Component {
    render() {
        const { s_image_logo } = style_image;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 150, backgroundColor: 'red' }}>
                    <Image style={[s_image_logo, { justifyContent: 'flex-end', alignItems: 'center' }]} source={require('../images/profile/profile.jpg')}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', marginBottom: 5 }}> Nguyễn Văn Trọng </Text>
                    </ Image>
                </View>
                <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 8 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 70, width: '100%',
                            justifyContent: 'space-around',
                            alignSelf: 'auto',
                            borderBottomColor: '#dddddd',
                            borderBottomWidth: 2,
                        }}
                    >
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Image source={require('../images/appIcon/home.png')} />
                            <Text>Thông báo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Image source={require('../images/appIcon/home.png')} />
                            <Text>Chat shop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Image source={require('../images/appIcon/home.png')} />
                            <Text>Đơn hàng</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <CategoryMenu title='Trang chu' img={require('../images/appIcon/home.png')} />
                        <CategoryMenu title='Trang chu' img={require('../images/appIcon/home.png')} />
                        <CategoryMenu title='Trang chu' img={require('../images/appIcon/home.png')} />
                        <CategoryMenu title='Trang chu' img={require('../images/appIcon/home.png')} />
                        <CategoryMenu title='Trang chu' img={require('../images/appIcon/home.png')} />
                        <CategoryMenu title='Trang chu' img={require('../images/appIcon/home.png')} />
                        <CategoryMenu title='Trang chu' img={require('../images/appIcon/home.png')} />
                        <CategoryMenu title='Trang chu' img={require('../images/appIcon/home.png')} />
                        <CategoryMenu title='Trang chu' img={require('../images/appIcon/home.png')} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}