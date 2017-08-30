import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, Modal, TouchableHighlight } from 'react-native';
import Swiper from 'react-native-swiper';
import Header from '../component/Header';
import { style_image, style_home } from '../styles/StylesAndroid';
import Product from '../component/Product';
import Collection from '../component/Collection';
import TabNavigator from 'react-native-tab-navigator';
import Controller from '../controller/Controller';
import MyValues from '../controller/MyValues';
import Profile from '../component/Profile';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: this.props.isVisibleProfile,
        };
        MyValues.navigator = this.props.navigator;
    }
    goToListProduct() {
        this.props.navigator.push({ name: 'LIST_PRODUCT' });
    }
    openMenu() {
        this.props.navigation.navigate('DrawerOpen');
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        const { s_image_slider } = style_image;
        const { s_menu_home } = style_home;
        return (
            <View style={{ paddingHorizontal: 3 }}>
                <ScrollView style={{ backgroundColor: '#dddddd' }}>
                    <View>
                        <Swiper
                            autoplay
                            autoplayTimeout={2.5}
                            width="100%"
                            height={150}
                        >
                            <Image style={s_image_slider} source={require('../images/temp/maxi.jpg')} />
                            <Image style={s_image_slider} source={require('../images/temp/midi.jpg')} />
                            <Image style={s_image_slider} source={require('../images/temp/mini.jpg')} />
                        </Swiper>
                    </View>
                    <View
                        style={s_menu_home}
                    >
                        <TouchableOpacity
                            onPress={() => Controller.goToScreen({ router: 'DANH_MUC' })}
                        >
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../images/appIcon/home.png')} />
                                <Text style={{ fontWeight: 'bold' }}>Danh mục</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../images/appIcon/home.png')} />
                                <Text style={{ fontWeight: 'bold' }}>Khuyến mãi</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../images/appIcon/home.png')} />
                                <Text style={{ fontWeight: 'bold' }}>Bán chạy</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../images/appIcon/home.png')} />
                                <Text style={{ fontWeight: 'bold' }}>Sản phẩm mới</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 3, backgroundColor: 'white' }}>
                        <Collection title='Sản phẩm bán chạy' />
                        <Collection title='Sản phẩm khuyến mãi' />
                    </View>
                </ScrollView>

                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.props.isVisibleProfile}
                    onRequestClose={() => {
                        {/* alert("Modal has been closed."); */ }
                        this.props.dispatch({ type: 'TOOGLE_PROFILE' });
                    }}
                >
                    <Profile onPress={() => {
                        this.props.dispatch({ type: 'TOOGLE_PROFILE' });
                    }} />
                </Modal>

            </View >
        );
    }
}
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        isVisibleProfile: state.isVisibleProfile,
    };
}

export default connect(mapStateToProps)(Home);