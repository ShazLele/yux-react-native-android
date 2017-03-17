/**
 * Created by Stone on 2016/12/19.
 */
import React, {Component} from "react";
import ReactNative from "react-native";
import store from "../service/store";
import {PageHome, PageArticleList, PageArticleDetail} from "../pages/index";
let {ToolbarAndroid, Text, Alert} = ReactNative;

class TopToolBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actions: [
                {
                    title: '主页',
                    icon: require('../source/image/logo1.png'),
                    showWithText: true,
                    show: 'never'
                },
                {
                    title: '文章列表',
                    icon: require('../source/image/logo.png'),
                    showWithText: true,
                    show: 'never'
                },
                {
                    title: '公告',
                    icon: require('../source/image/logo.png'),
                    showWithText: true,
                    show: 'never'
                }]
        }

        this._actionSelected = this._actionSelected.bind(this);
    }

    _actionSelected(position) {
        let {navigator} = store.getState()['routeInfo'];
        if (!navigator) {
            return;
        }

        switch (position) {
            case 0:
                return navigator.push(
                    {
                        name: 'PageHome',
                        component: PageHome
                    });
            case 1:
                return navigator.push(
                    {
                        name: 'PageArticleList',
                        component: PageArticleList
                    });
            case 2:
                return navigator.push(
                    {
                        name: 'PageArticleDetail',
                        component: PageArticleDetail,
                        params: {
                            _id: '582d7fc4184b4d07a0b999ff'
                        }
                    })
            default:
                return null;
        }
    }

    render() {
        return (
            <ToolbarAndroid
                logo={require('../source/image/logo.png')}
                style={{height:56,backgroundColor:'#ee6e73'}}
                titleColor="#fff"
                actions={this.state.actions}
                onActionSelected={this._actionSelected}
            />
        )
    }

}

export default TopToolBar;