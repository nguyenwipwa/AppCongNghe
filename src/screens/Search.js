import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Home_Screens } from '../Router';
import Product from '../component/Product';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProduct: this.props.cartArr,
        };
    }
    render() {
        return (
            <View style={{ justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 35, alignItems: 'center', padding: 10, borderBottomWidth:1,borderColor: '#dddddd' }}>
                    <Text style={{justifyContent:'center', width: '30%', textAlign: 'center'}}> Đề cử ^</Text>
                    <Text style={{justifyContent:'center', textAlign: 'center', borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#dddddd',width: '30%' }}> Bán chạy ^</Text>
                    <Text style={{justifyContent:'center', textAlign: 'center', width: '30%'}}> Đánh giá tốt ^</Text>
                </View>
                <FlatList
                    //onEndReached={(number) => alert(number)}
                    onEndReachedThreshold={0.1}
                    onRefresh={() => alert('ngon')}
                    refreshing={false}
                    initialNumToRender={2}
                    numColumns={2}
                    data={this.state.dataProduct}
                    renderItem={({ item }) => <Product name={item.name} price={4500000} img={item.img}></Product>}
                />
            </View>
        );
    }
}
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return { cartArr: state.cartArr };
}

export default connect(mapStateToProps)(Search);