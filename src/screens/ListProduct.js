import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Product from '../component/Product';
import { style_header } from '../styles/StylesAndroid';
import changeMoney from '../api/changeMoney';

export default class ListProduct extends Component {
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
            <View style={{
                flex: 1,
                padding: 5,
                backgroundColor: '#dddddd'
            }}>
                <View style={{ backgroundColor: 'white', borderRadius: 5, flex: 1 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 40,
                            borderBottomWidth: 1,
                            borderColor: '#dddddd',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigator.pop();
                            }}
                        >
                            <Image style={[style_header.icon, { marginLeft: 5 }]} source={require('../images/appIcon/backList.png')} />
                        </TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: '#800040'
                            }}
                        >{this.props.title}</Text>
                    </View>
                    <FlatList
                        onRefresh={() => alert('Loading ok')}
                        refreshing={false}
                        initialNumToRender={2}
                        numColumns={2}
                        data={this.state.dataProduct}
                        renderItem={({ item }) => <Product name={item.name} price={changeMoney(4500000)} img={item.img}></Product>}
                    />
                </View>
            </View>
        );
    }
}