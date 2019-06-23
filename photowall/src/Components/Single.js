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

        // The comments in redux store passed down as props.
        const comments = this.props.comments; 
        
        return (
            <div className="single-photo">
                <Photo post={post}/>
                <Comments addComment={this.props.addComment} comments={comments} id={id}/>
            </div>
        );
    }
}

export default Single;