/**
 * Created by Stone on 2016/12/19.
 */
import React from "react";
import {Text} from "react-native";
import ArticleList from "../components/ArticleList";
import api from "../../service/api";

class PageArticleList extends React.Component {

    _getData() {
        return new Promise((resolve) => {
            fetch(api.article.getAll)
                .then(res => {
                    if (res.ok) {
                        res.json().then(
                            data => {
                                resolve(data.list);
                            }
                        )
                    }
                })
                .catch(() => resolve([]));
        })
    }

    render() {
        return (
            <ArticleList navigator={this.props.navigator} getData={this._getData}/>)
    }
}

export default PageArticleList;