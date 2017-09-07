import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, Modal, TouchableHighlight } from 'react-native';
import Swiper from 'react-native-swiper';
import Header from '../component/Header';
import { style_image, style_home, style_icon } from '../styles/StylesAndroid';
import Product from '../component/Product';
import Collection from '../component/Collection';
import TabNavigator from 'react-native-tab-navigator';
import Controller from '../controller/Controller';
import MyValues from '../controller/MyValues';
import Profile from '../component/Profile';
import ButtonHome from '../component/ButtonHome';


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
            <View style={{}}>
                <ScrollView style={{ backgroundColor: '#dddddd' }}>
                    <View>
                        <Swiper
                            autoplay
                            autoplayTimeout={2.5}
                            width="100%"
                            height={110}
                        >
                            <Image style={s_image_slider} source={require('../images/slide/s1.jpg')} />
                            <Image style={s_image_slider} source={require('../images/slide/s2.jpg')} />
                            <Image style={s_image_slider} source={require('../images/slide/s3.jpg')} />
                            <Image style={s_image_slider} source={require('../images/slide/s4.jpg')} />
                            <Image style={s_image_slider} source={require('../images/slide/s5.jpg')} />
                        </Swiper>
                    </View>
                    <View
                        style={s_menu_home}
                    >
                        <ButtonHome  onPress={() => Controller.goToScreen({ router: 'DANH_MUC' })} style={{backgroundColor: 'red', borderRadius: 40, padding: 6}} img={require('../images/appIcon/ic_menu.png')} title='Khuyễn Mãi' />
                        <ButtonHome style={{backgroundColor: '#a62bd5', borderRadius: 40, padding: 6}} img={require('../images/appIcon/sales.png')} title='Khuyễn Mãi' />
                        <ButtonHome style={{backgroundColor: 'gray', borderRadius: 40, padding: 6}} img={require('../images/appIcon/ban_chay.png')} title='Sản phẩm mới' />
                        <ButtonHome style={{backgroundColor: 'green', borderRadius: 40, padding: 6}} img={require('../images/appIcon/new.png')} title='Sản phẩm mới' />
                    </View>
                    <View style={{ marginTop: 3, backgroundColor: 'white', justifyContent: 'center' }}>
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