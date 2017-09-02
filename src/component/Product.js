import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Controller from '../controller/Controller';
import {style_image} from '../styles/StylesAndroid';


export default class Product extends Component {
    render() {
        const img = require('../images/product/hinh1.jpg');
        return (
            <TouchableOpacity
                onPress={() => Controller.goToScreen({ router: 'DETAIL_PRODUCT', product: this.props.name })}
                style={{
                    width: '48%', backgroundColor: 'white', margin: 3, borderWidth: 1, padding: 5, borderColor: '#dddddd', borderRadius: 2
                }}
            >
                <Image
                    style={style_image.s_image_product}
                    source={img} />
                <View style={{ alignSelf: 'center' }}>
                    <Text>
                        {this.props.name}
                    </Text>
                    <Text style={{ color: 'red', fontWeight: 'bold' }}>{this.props.price} VNĐ</Text>
                </View>
            </TouchableOpacity >
        );
    }
}