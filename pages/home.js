/**
 * Created by Stone on 2016/12/19.
 */
import React, {Component} from "react";
import ReactNative from "react-native";
import ArticleList from "./components/ArticleList";
import api from "../service/api";
let {View, Image, StyleSheet, Alert} = ReactNative;

const styles = StyleSheet.create({
    containerHome: {
        flex: 1
    },
    logoContainer: {
        height: 120,
        flexDirection: 'row'
    },
    logoImage: {
        flex: 1,
        height: 120,
        resizeMode: 'contain'
    }
});

class LogoImage extends Component {
    render() {
        return (
            <View style={styles.logoContainer}>
                <Image source={require('../source/image/ad.jpg')} style={styles.logoImage}/>
            </View>
        )
    }
}


class PageHome extends Component {
    _getData() {
        return new Promise((resolve) => {
            fetch(api.article.getPage + '/0/1/10')
                .then(res => {
                    if (res.ok) {
                        res.json().then(
                            data => resolve(data.list)
                        )
                    }
                })
                .catch(() => {
                    resolve([]);
                })
        })
    }

    render() {
        return (
            <View style={styles.containerHome}>
                <LogoImage/>
                <ArticleList navigator={this.props.navigator} getData={this._getData}/>
            </View>
        )
    }
}

export default PageHome;