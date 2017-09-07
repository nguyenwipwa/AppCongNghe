import { StyleSheet, Dimensions } from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';
const { height } = Dimensions.get('window');

export const style_header = StyleSheet.create({
    icon: { width: 30, height: 30 },
    s_textInput: {
        flex: 1,
        backgroundColor: 'white',
        height: 35,
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        textAlign: 'center',
    },
    s_viewHeader: {
        backgroundColor: 'red',
        //flex: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5
    }

});
export const styleTxt = StyleSheet.create({
    txtPrice: {
        color: '#f12b24',
        fontWeight: 'bold'
    },
    txtShow: {
        color: '#fe00a6',
        fontSize: 10,
        marginTop: 5,

    },
    txtWhite: {
        color: 'white'
    },
    txtBold: {
        fontWeight: 'bold'
    },
    txtContact: {
        color: '#fe0191',
    }
});
export const styleContact = StyleSheet.create({
    viewImage: {
        flex: 6,
        marginBottom: 10,
        backgroundColor: 'red'
    },
    viewInfo: {
        flex: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 5
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    containerGray: {
        backgroundColor: '#f1f1f1',
        flex: 1,
        padding: 5,
    },
    rowSpaceBetween: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
        borderColor: '#f1f1f1',
        borderBottomWidth: 3,
        margin: 5,
        alignItems: 'center'
    },
    iconStyle: {
        width: '10%',
        height: '80%',
    }
});
export const style_home = StyleSheet.create({
    s_menu_home: {
        width: '100%',
        height: 80,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 6,
        borderBottomWidth: 2,
        borderColor: '#dddddd'
    },

});
export const style_icon = StyleSheet.create({
    s_icon_tab: {
        width: 26,
        height: 26,
    },
    s_icon_menu: {
        width: 30,
        height: 30
    }
});
export const style_image = StyleSheet.create({
    s_image_slider: {
        width: '100%',
        height: 110,
    },
    s_image_logo: {
        width: '100%',
        height: '100%'
    },
    s_image_product: {
        width: '100%',
        height: 110
    },
    s_image_cart: {
        width: '50%',
        height: 110
    }

});

