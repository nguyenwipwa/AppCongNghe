import React, { Component } from 'react';
// import MapView from 'react-native-maps';
import { View, Text, Image, ScrollView } from 'react-native';
import { styleContact, styleTxt } from '../styles/StylesAndroid';

import profile from '../images/profile/profile.jpg';
import icLocation from '../images/appIcon/location.png';
import icPhone from '../images/appIcon/phone.png';
import icMail from '../images/appIcon/mail.png';
import icMessage from '../images/appIcon/message.png';


class Contact extends Component {
    render() {
        const { viewImage, viewInfo, imageStyle, rowSpaceBetween, iconStyle } = styleContact;
        return (
            <View style={styleContact.containerGray}>
                <View style={viewImage}>
                    {/* <MapView
                        style={imageStyle}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <MapView.Marker
                            title='Van trong'
                            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                        />
                    </MapView> */}
                    <Image style={imageStyle} source={profile} />
                </View>
                <View style={viewInfo} >
                    <View style={rowSpaceBetween}>
                        <Image style={iconStyle} source={icLocation} />
                        <Text style={styleTxt.txtContact}> 84 Gò dưa, Tam Bình, Thủ Đức </Text>
                    </View>
                    <View style={rowSpaceBetween}>
                        <Image style={iconStyle} source={icPhone} />
                        <Text style={styleTxt.txtContact} > 0163 263 5825 </Text>
                    </View>
                    <View style={rowSpaceBetween}>
                        <Image style={iconStyle} source={icMail} />
                        <Text style={styleTxt.txtContact}> nguyenwipwa@gmail.com </Text>
                    </View>
                    <View style={[rowSpaceBetween, { borderBottomWidth: 0 }]}>
                        <Image style={iconStyle} source={icMessage} />
                        <Text style={styleTxt.txtContact} s> 0167 251 6493 </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Contact;
