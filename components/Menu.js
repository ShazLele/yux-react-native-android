/**
 * Created by Stone on 2016/12/21.
 */
import React, {Component} from "react";
import ReactNative from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import store from "../service/store";
// import {PageHome, PageArticleList} from "../pages/index";
import PageHome from "../pages/home";
import PageArticleList from "../pages/article/list";
import PageUser from "../pages/user/index";
let {View, Text, StyleSheet, TouchableNativeFeedback} = ReactNative;

const Styles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderStyle: 'solid',
        borderColor: '#b0bec5'

    },
    item: {
        flex: 1
    },
    icon: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#263238'
    },
    activeIcon: {

        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#c62828'
    },
    text: {
        textAlign: 'center',
        color: '#263238',
        fontSize: 12
    },
    activeText: {
        textAlign: 'center',
        color: '#c62828',
        fontSize: 12
    }
});

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItem: [
                {name: 'home', tabName: 'PageHome', text: '主页'},
                {name: 'list', tabName: 'PageArticleList', text: '技术'},
                {name: 'user', tabName: 'PageUser', text: '我的'}
            ],
            tabName: 'PageHome',
            route: {},
            navigator: {}
        };

    }

    componentWillMount() {
        this._setRoute();
        this.unSubcribe = store.subscribe(() => {
            this._setRoute();
        })

    }

    componentWillUnmount() {
        this.unSubcribe();
    }

    _setRoute() {
        let {route, navigator} = store.getState()['routeInfo'];
        if (route && navigator) {
            this.setState({tabName: route.name, route, navigator});
        }
    }

    _changeTab(tabName) {
        this.setState({tabName});
        let navigator = this.state.navigator;

        if (navigator) {
            let route = {name: 'PageHome', component: PageHome};

            switch (tabName) {
                case "PageHome":
                    route = {name: 'PageHome', component: PageHome};
                    break;
                case "PageArticleList":
                    route = {name: 'PageArticleList', component: PageArticleList};
                    break;
                case "PageUser":
                    route = {name: 'PageUser', component: PageUser};
                    break;
                default:
                    break;
            }
            navigator.push(route);
        }
    }

    render() {

        const tabName = this.state.tabName;
        return (<View style={Styles.container}>
            {this.state.menuItem.map((item, key) =>
                <TouchableNativeFeedback
                    key={key}
                    style={Styles.item}
                    onPress={this._changeTab.bind(this,item.tabName)}>
                    <View style={{flex:1}}>
                        <FontAwesomeIcon
                            name={item.name}
                            size={14}
                            style={item.tabName===tabName?Styles.activeIcon:Styles.icon}
                        />
                        <Text style={item.tabName===tabName?Styles.activeText:Styles.text}>{item.text}</Text>
                    </View>
                </TouchableNativeFeedback>)}
        </View>)
    }
}

export default Menu;