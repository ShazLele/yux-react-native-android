/**
 * Created by Stone on 2016/12/19.
 */

import React, {Component} from "react";
import ReactNative from "react-native";

let {View, Text, Alert, WebView}=ReactNative;

class PageArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);

    }

    goBack() {
        let {navigator} =this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    componentDidMount() {

    }

    render() {
        const {_id}=this.props;
        return (
            <View style={{flex:1}}>
                <WebView
                    style={{flex:1}}
                    dataDetectorTypes='none'
                    source={{uri: `http://www.moguiweb.com.cn/mobile/article/detail/${_id}`}}
                />
                <Text style={{padding:10}} onPress={this.goBack}>返回</Text>
            </View>
        )
    }
}

export default PageArticleDetail;