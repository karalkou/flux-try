import React, { Component } from 'react';
import { articleStore } from "../stores/index";
import ArticleList from '../components/ArticleList';

class FluxContainer extends Component {
    state = {
        articles: articleStore.getAll()
    };

    render() {
        return (
            <ArticleList articles={this.state.articles}/>
        )
    }
}

export default FluxContainer;