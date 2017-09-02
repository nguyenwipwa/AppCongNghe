import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Product from '../component/Product';
import MyValues from '../controller/MyValues';
import changeMoney from '../api/changeMoney';

export default class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProduct: [
                { key: 1, name: 'Camera IP hồng ngoại không dây VANTECH VT-6300B', img: 'hinh1.jpg' },
                { key: 2, name: 'Camera IP hồng ngoại không dây VANTECH VT-6300B', img: 'hinh2.jpg' },
                { key: 3, name: 'Đầu ghi hình HD-TVI 4 kênh TURBO 3.0 HIKVISION DS-7204HGHI-F1C', img: 'hinh3.jpg' },
                { key: 4, name: 'Camera IP hồng ngoại không dây 2.0 Megapixel HIKVISION DS-2CD2420F-IW', img: 'hinh1.jpg' }
            ],
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
                    <TouchableOpacity onPress={() => {
                        MyValues.navigator.push({ name: 'LIST_PRODUCT', title: this.props.title });
                    }}>
                        <Text style={{ color: 'green' }}>Xem thêm >></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <FlatList
                        initialNumToRender={2}
                        numColumns={2}
                        data={this.state.dataProduct}
                        renderItem={({ item }) => <Product name={item.name} price={changeMoney(4500000)} img={item.img}></Product>}
                    />
                </View>
                <View style={{ borderBottomWidth: 3, borderColor: '#dddddd' }} />
            </View>
        );
    }
}
