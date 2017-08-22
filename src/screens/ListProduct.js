import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
export default class ListProduct extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'gray',
                padding: 10,
            }}>
                <Text>List Product</Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigator.pop();
                }}>
                    <Text>Go Back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}