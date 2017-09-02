import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Product from '../component/Product';
import MyValues from '../controller/MyValues';

export default class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProduct: [{ key: 1, name: 'trong', img: 'hinh1.jpg' }, { key: 2, name: 'trong', img: 'hinh2.jpg' }, { key: 3, name: 'trong', img: 'hinh3.jpg' }, { key: 4, name: 'trong', img: 'hinh1.jpg' }],
        };
    }
    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 8, borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                    <Text
                        style={{ fontWeight: 'bold', fontSize: 20 }}
                    >
                        {this.props.title}
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'green' }} onPress={() => {
                            MyValues.navigator.push({ name: 'LIST_PRODUCT' });
                        }}>Xem thêm >></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <FlatList
                        initialNumToRender={2}
                        numColumns={2}
                        data={this.state.dataProduct}
                        renderItem={({ item }) => <Product name={item.name} price={4500000} img={item.img}></Product>}
                    />
                </View>
                <View style={{ borderBottomWidth: 3, borderColor: '#dddddd' }} />
            </View>
        );
    }
}