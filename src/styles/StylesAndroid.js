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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5
    }

})
export const style_home = StyleSheet.create({
    s_menu_home: {
        width: "100%",
        height: 80,
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        borderBottomWidth: 1,
    },

})
export const style_icon = StyleSheet.create({
    s_icon_tab: {
        width: 26,
        height: 26,
    }
})
export const style_image = StyleSheet.create({
    s_image_slider: {
        width: "100%",
        height: 150,
    }
});

