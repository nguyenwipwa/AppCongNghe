import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ItemCart from '../component/ItemCart';
import { connect } from 'react-redux';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProduct: this.props.cartArr,
        };
    }
    render() {
        return (
            <View style={{
                padding: 3,
                flex: 1,
            }}>
                <FlatList
                    data={this.state.dataProduct}
                    renderItem={({ item }) => <ItemCart name={item.name} quatity={1} price={4500000} img={require('../images/product/hinh1.jpg')} />}
                />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#dddddd' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Tổng tiền: </Text>
                        <Text style={{ color: '#800040', fontWeight: 'bold' }}> 5,000,000 Đ</Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'red',
                            paddingHorizontal: 30,
                            paddingVertical: 15
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold'
                        }}> Thanh toán ngay >> </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
function mapStateToProps(state) {
    return { cartArr: state.cartArr };
}
export default connect(mapStateToProps)(Cart);