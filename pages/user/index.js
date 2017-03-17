/**
 * Created by Stone on 2016/12/23.
 */
import React from "react";
import ReactNative from "react-native";


let {Component} = React;
let {View, TouchableWithoutFeedback, Text} = ReactNative;
class PageUser extends Component {
    constructor(props) {
        super(props);
        this._goBack = this._goBack.bind(this);
    }

    _goBack() {
        let {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._goBack}>
                <View>
                    <Text style={{fontSize:20}}>暂未开放,点击返回</Text>
                </View>
            </TouchableWithoutFeedback>)
    }
}

export default PageUser;