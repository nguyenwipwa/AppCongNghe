import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#dddddd' }}>
                <View 
                style={{ flexDirection: 'row',
                 padding: 8, 
                 height: 100,
                  justifyContent: 'space-around', 
                  alignItems: 'center' ,
                  borderRadius: 10,
                }}
                >
                    <Image style={{ width: 80, height: 80, borderRadius: 50 }} source={require('../images/profile/profile.jpg')} />
                    <View style={{ justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 25 }}> Nguyễn Văn Trọng </Text>
                        <Text style={{ fontSize: 15 }}> nguyenwipwa@gmail.com </Text>
                    </View>
                </View>
            </View>
        );
    }
}