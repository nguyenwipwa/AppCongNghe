import React, { Component } from 'react';
import { View, Text, WebView, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import URL from '../URL';
import { getDetailProduct } from '../api/getProduct';
import * as actionCreator from '../redux/actionCreator';


class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            html: '',
        }
    }
    componentDidMount = () => {
        this.props.fetchDataThunk(232);
        // getDetailProduct(232).then(res => {
        //     const { id, description, img, id_product } = res;
        //     this.setState({ html: description });

        // }).catch(err => alert(err));
        // console.log('====================================')
        // console.log(alert(this.props.navigation.state.params.product));
        // console.log('====================================')
    }
    // fetchDataThunk(id) {
    //     return dispatch => {
    //         dispatch(startFetchData());
    //         getDetailProduct(id)
    //             .then(data => { dispatch(fetchSuccess(data)) })
    //             .catch(() => dispatch(fetchError()));
    //     }
    // }
    getMessage = () => {
        if (this.props.isLoading) return 'Đang tải...';
        if (this.props.error) return 'Loi';
        if (this.props.data !== null) return `<img src='${this.props.data.img}'/>` + this.props.data.description;
        return 'Xin cho';
    }
    render() {

        return (
            <View style={{ flex: 1 }}>
                {/* <View style={{ width: "100%", height: 300 }}>
                        <Image style={{ backgroundColor: 'green', width: "100%", flex: 1 }} source={{ uri: this.props.data ? this.props.data.img : 'none' }} />
                    </View> */}
                <WebView
                    style={{
                        flex: 1,
                        minHeight: 200
                    }}
                    automaticallyAdjustContentInsets={false}
                    contentInset={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    source={{ html: this.getMessage() }}
                    opaque={false}
                    underlayColor={'transparent'}
                    // style={this.props.style}
                    javaScriptEnabled={true}
                />
            </View>
        )
    }
}
function mapStateToProps(state) {
    return { error: state.error, isLoading: state.isLoading, data: state.data };
}
export default connect(mapStateToProps, actionCreator)(DetailProduct);