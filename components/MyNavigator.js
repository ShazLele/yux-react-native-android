/**
 * Created by Stone on 2016/12/22.
 */
import React, {Component} from "react";
import ReactNative from "react-native";
import PageHome from "../pages/home";
import store from "../service/store";
import Menu from "./Menu";
let {View, Navigator, Text, Alert} = ReactNative;

class PageContainer extends Component {
    componentWillMount() {
        let {route, navigator} = this.props;
        store.dispatch({type: 'SET_ROUTE', route});
        store.dispatch({type: 'SET_NAVIGATOR', navigator});
    }

    componentWillUpdate() {
        let {route, navigator} = this.props;
        store.dispatch({type: 'SET_ROUTE', route});
        store.dispatch({type: 'SET_NAVIGATOR', navigator});
    }

    render() {
        let {Component, route, navigator} = this.props;
        return (
            <View style={{flex:1}}>
                <Component {...route.params} navigator={navigator}/>
            </View>
        )
    }
}

export default class MyNavigator extends Component {
    constructor(props) {
        super(props);
        this.myRenderScene = this.myRenderScene.bind(this);
    }

    configureScene() {
        return Navigator.SceneConfigs.FadeAndroid;
    }

    myRenderScene(route, navigator) {
        let Component = route.component;
        return (
            <PageContainer Component={Component} route={route} navigator={navigator}/>
        )
    }

    render() {
        let defaultRoute = {name: 'PageHome', component: PageHome};
        return (
            <Navigator
                initialRoute={defaultRoute}
                configureScene={this.configureScene}
                renderScene={this.myRenderScene}
                navigationBar={<Menu/>}
            />
        )
    }
}