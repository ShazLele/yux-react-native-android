/**
 * Created by Stone on 2016/12/23.
 */
import React from "react";
import ReactNative from "react-native";

import PageArticleDetail from "../article/detail";

let {View, ListView, Text, Image, StyleSheet, Alert, TouchableWithoutFeedback} = ReactNative;

const styles = StyleSheet.create({
    listContent: {
        flex: 3,
        padding: 10,
    },
    listItem: {
        flex: 1,
    },
    itemContainer: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
        borderColor: "#ddd",
        borderBottomWidth: 1,
        borderStyle: 'solid',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemLeft: {
        flex: 9,
        paddingRight: 10

    },
    itemRight: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    wallPic: {
        flex: 1
    },
    itemTitle: {
        fontSize: 16,
        fontFamily: 'Cochin',
        paddingBottom: 10,
        fontWeight: 'bold'
    }
})

const demon = 'http://www.moguiweb.com.cn';

class ArticleItem extends React.Component {

    constructor(props) {
        super(props);
        this._pressButton = this._pressButton.bind(this);
    }

    _pressButton() {
        const {navigator, _id} = this.props;

        if (navigator) {

            navigator.push({
                name: 'PageArticleDetail',
                component: PageArticleDetail,
                params: {
                    _id: _id
                }
            })
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback style={styles.listItem} onPress={this._pressButton}>
                <View style={styles.itemContainer}>
                    <View style={styles.itemLeft}>
                        <Text style={styles.itemTitle}
                              numberOfLines={1}
                        >{this.props.title}</Text>
                        <Text numberOfLines={3}>{this.props.desc}</Text>
                    </View>
                    <View style={styles.itemRight}>
                        <Image resizeMode='contain' style={styles.wallPic}
                               source={{uri:`${demon}${this.props.wallpic}`}}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            list: this.ds.cloneWithRows([{}])
        }

    }

    componentDidMount() {
        this.props.getData().then((list) => {
            this.setState({list: this.ds.cloneWithRows(list)});
        })

    }

    _renderRow(item, sectionID, rowID) {
        return <ArticleItem {...item} navigator={this.props.navigator}/>
    }

    render() {
        return (
            <ListView
                style={styles.listContent}
                dataSource={this.state.list}
                renderRow={this._renderRow.bind(this)}
                enableEmptySections={true}
            />
        )
    }
}