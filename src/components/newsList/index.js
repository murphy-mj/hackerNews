import React, { Component, Fragment } from 'react';
import NewsItem from '../newsItem/'
import './newsList.css';
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default class NewsList extends Component {

    //handleVote = () =>  this.props.upvoteHandler(this.props.post.id);


    render() {
        let items = this.props.posts.map((post,index) =>
            (<NewsItem key={post.id} post={post}  upvoteHandler={this.props.upvoteHandler} /> )
        )

        return (
            <Fragment>
                {items}
            </Fragment>
        );
    }
}
