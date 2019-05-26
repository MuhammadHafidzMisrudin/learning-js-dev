import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

// Create a class component of Single.
// For Single Photo with comment section screen.
class Single extends Component {
    render() {
        const {match, posts} =  this.props;
        console.log("current id: ", this.props.match.params.id);
        const id = Number(match.params.id);
        const post = posts.find((post) => post.id === id);
        console.log("current post id: ", post);
        const comments = this.props.comments; // the comments in redux store passed down as props.
        
        return (
            <div className="single-photo">
                <Photo post={post}/>
                <Comments addComment={this.props.addComment} comments={comments}/>
            </div>
        );
    }
}

export default Single;