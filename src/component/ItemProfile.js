import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { style_header } from '../styles/StylesAndroid';


export default class ItemProfile extends Component {
    render() {
        const { icon } = style_header;
        return (
            <View>
                <TouchableOpacity
                    style={[{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: 'white',
                        padding: 8,
                        alignItems: 'center',
                        borderRadius: 5,
                    }, this.props.style]}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 2, }}>
                        <Image style={icon} source={require('../images/appIcon/home0.png')} />
                        <Text style={[{ marginLeft: 20 }, this.props.styleText]}> {this.props.title} </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Image style={[icon]} source={this.props.img} />
                    </View>
                </TouchableOpacity>
                <View style={{ paddingHorizontal: 8, width: '100%' }}>

                    <View style={{ borderWidth: 1, borderColor: '#dddddd', width: '100%' }} />
                </View>
            </View>
        );
    }
}