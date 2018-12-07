import React, {Component} from 'react'
import CommentsBlock from './CommentsBlock'

export default class Article extends Component {
    state = {
        isOpen: false
    };

    render() {
        const {article} = this.props;
        console.log('---', 123);
        return (
            <div>
                <div>
                    <h3 onClick={this.handleClick}>{article.title}</h3>
                    <a href="#" onClick={this.handleDelete}>Delete article</a>
                </div>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;

        return (
            <div>
                <section>
                    {this.props.article.text}
                </section>
                <CommentsBlock article={this.props.article}/>
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    handleDelete = ev => {
        ev.preventDefault();
        console.log('Delete article: ', this.props.article.id);
    }
}