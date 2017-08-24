import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{ key: 1, name: 'Danh muc 1' }, { key: 2, name: 'Danh muc 2' }, { key: 3, name: 'Danh muc 3' }
            , { key: 4, name: 'Danh muc 3' }
            , { key: 5, name: 'Danh muc 3' }
            , { key: 6, name: 'Danh muc 3' }
            , { key: 7, name: 'Danh muc 3' }
            , { key: 8, name: 'Danh muc 3' }]
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <FlatList
                    data={this.state.data}
                    initialNumToRender={2}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: 150, margin: 8, borderRadius: 8, backgroundColor: 'white' }}>
                            <Image style={{ borderRadius: 20}} source={require('../images/product/hinh2.jpg')} />
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}

export default connect()(Category);