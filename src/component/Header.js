import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { style_header } from '../styles/StylesAndroid';
import Controller from '../controller/Controller';


class Header extends Component {
    render() {
        return (
            <View style={style_header.s_viewHeader}>
                <TouchableOpacity
                    onPress={() => this.props.openMenu()}
                >
                    <Image style={style_header.icon} source={require('../images/appIcon/ic_menu.png')} />
                </TouchableOpacity>
                <TextInput
                    placeholder='Bạn tìm gì hôm nay?'
                    underlineColorAndroid='transparent'
                    style={style_header.s_textInput} />
                <TouchableOpacity
                    onPress={() => Controller.goToScreen({ router: 'PROFILE' })}
                >
                    <Image style={style_header.icon} source={require('../images/appIcon/contact0.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}
import { connect } from 'react-redux';
function mapStateToProps(state) {
    return {
        isVisibleProfile: state.isVisibleProfile,
    };
}
export default connect(mapStateToProps)(Header);
