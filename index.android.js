/**
 * Created by Stone on 2016/12/19.
 */
import React, {Component, PropTypes} from "react";
import ReactNative from "react-native";
import store from "./service/store";
let {
    AppRegistry,
    View,
    Alert
} = ReactNative;
import {Menu, Toolbar, MyNavigator} from "./components/index";


class YuxAPP extends Component {

    render() {

        return (
            <View style={{flex:1}}>
                {/*<Toolbar/>*/}
                <MyNavigator/>
            </View>
        )
    }
}

AppRegistry.registerComponent('Yux_Native', () => YuxAPP);

