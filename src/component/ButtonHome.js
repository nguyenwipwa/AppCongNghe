import React, { Component } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { style_icon } from '../styles/StylesAndroid'


export default class ButtonHome extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ borderWidth: 1, borderColor: '#dddddd', borderRadius: 40, padding: 3 }}>
                        <View style={this.props.style}>
                            <Image style={[style_icon.s_icon_menu]} source={this.props.img} />
                        </View>
                    </View>
                    <Text style={{ fontWeight: 'bold' }}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}