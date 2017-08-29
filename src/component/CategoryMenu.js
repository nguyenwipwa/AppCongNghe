import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class CategoryMenu extends Component {
    render() {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: 40, margin: 8, borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                <Image style={{ width: 35, height: 35, marginRight: 20 }} source={this.props.img} />
                <Text style={{ fontWeight: '300', fontSize: 18 }}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}