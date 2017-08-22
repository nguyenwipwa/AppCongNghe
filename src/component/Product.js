import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class Product extends Component {
    render() {
        const img = require(`../images/product/hinh1.jpg`);
        return (
            <TouchableOpacity
                style={{ width: "47%", backgroundColor: 'white', margin: 5, borderWidth: 1, padding: 5, borderColor: '#dddddd', borderRadius: 5 }}
            >
                <Image
                    style={{ width: "100%", height: 110 }}
                    source={img} />
                <View style={{ alignSelf: 'center' }}>
                    <Text>
                        {this.props.name}
                    </Text>
                    <Text style={{ color: 'red', fontWeight: 'bold' }}>{this.props.price} VNĐ</Text>
                </View>
            </TouchableOpacity>
        )
    }
}