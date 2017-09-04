import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { style_header } from '../styles/StylesAndroid';
import ItemProfile from '../component/ItemProfile';

//Password: thuthuat.dianguc.info
//https://caidatphanmem.com/tai-autocad-2015-64bit-32bit-cai-dat/

export default class Profile extends Component {
    render() {
        const { icon } = style_header;
        return (
            <View style={{ flex: 1 }}>
                {/* <View
                    style={{
                        backgroundColor: 'red',
                        height: 50,
                        width: '100%',
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                    }}>
                    <TouchableOpacity style={{ marginLeft: 8 }} onPress={this.props.onPress}>
                        <Image style={icon} source={require('../images/appIcon/delete.png')} />
                    </TouchableOpacity>
                </View> */}
                <ScrollView style={{ backgroundColor: '#dddddd', flex: 1, padding: 8 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            padding: 8,
                            height: 100,
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            borderRadius: 10,
                            backgroundColor: 'white'
                        }}
                    >
                        <Image style={{ width: 80, height: 80, borderRadius: 50 }} source={require('../images/profile/profile.jpg')} />
                        <View style={{ justifyContent: 'flex-start' }}>
                            <Text style={{ fontSize: 20 }}> {'Nguyễn Văn Trọng'.toUpperCase()} </Text>
                            <View style={{ borderWidth: 1, borderColor: '#dddddd', width: '100%' }} />
                            <Text style={{ fontSize: 15 }}> nguyenwipwa@gmail.com </Text>
                        </View>
                    </View>
                    <ItemProfile styleText={{fontWeight: 'bold'}} style={{ marginTop: 10, marginBottom: 8 }} title='Đơn hàng' img={require('../images/appIcon/next.png')} />
                    <View style={{ backgroundColor: 'white', borderRadius: 8 }}>
                        <ItemProfile title='Đơn hàng' img={require('../images/appIcon/next.png')} />
                        <ItemProfile title='Đơn hàng' img={require('../images/appIcon/next.png')} />
                        <ItemProfile title='Đơn hàng' img={require('../images/appIcon/next.png')} />
                        <ItemProfile title='Đơn hàng' img={require('../images/appIcon/next.png')} />
                        <ItemProfile title='Đơn hàng' img={require('../images/appIcon/next.png')} />
                        <ItemProfile title='Đơn hàng' img={require('../images/appIcon/next.png')} />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                        <TouchableOpacity style={{ backgroundColor: 'red', paddingHorizontal: 100, paddingVertical: 15, borderRadius: 5 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>{'Đăng xuất'.toUpperCase()} </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}