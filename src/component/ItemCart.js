import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { style_image } from '../styles/StylesAndroid';
import changeMoney from '../api/changeMoney';

export default class ItemCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quatity: this.props.quatity,
        };
    }
    render() {
        return (
            <View
                style={{
                    padding: 3,
                    borderWidth: 1,
                    borderColor: '#dddddd',
                    marginTop: 3
                }}>

                <View style={{
                    flexDirection: 'row',

                }}>
                    <Image
                        style={style_image.s_image_cart}
                        source={this.props.img} />
                    <View style={{ width: '50%' }}>
                        <Text>{this.props.name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Đơn giá: </Text>
                            <Text style={{
                                color: 'red',
                                fontWeight: 'bold'
                            }}>{changeMoney(this.props.price)} Đ</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={{
                                    paddingHorizontal: 15,
                                    justifyContent: 'center',
                                    borderColor: '#dddddd',
                                    borderWidth: 1
                                }}
                                onPress={() => { if (this.state.quatity !== 1) this.setState({ quatity: this.state.quatity - 1 }); }}
                            >
                                <Text> - </Text>
                            </TouchableOpacity>
                            <Text style={{
                                fontWeight: 'bold',
                                paddingHorizontal: 5
                            }}> {this.state.quatity} </Text>
                            <TouchableOpacity
                                style={{
                                    paddingHorizontal: 15,
                                    justifyContent: 'center',
                                    borderColor: '#dddddd',
                                    borderWidth: 1
                                }}
                                onPress={() => this.setState({ quatity: this.state.quatity + 1 })}
                            >
                                <Text> + </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text> X </Text>
                </TouchableOpacity>
            </View>
        );
    }
}