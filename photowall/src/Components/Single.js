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

        /* 
            The comments in redux store passed down as props.
            Comments with specific id.
            Check if the comments and id are undefined, if it is, set the comments equal to empty array.        
        */
        const comments = this.props.comments[id] || [];

        // Find index of the specific photo (single photo) with the specific post id.
        // Passed in as props.
        const index = this.props.posts.findIndex((post) => post.id === id);

        // If it is currently loading posts, return a string value of loading. 
        if (this.props.loading === true) {
            return (<div className="loader">...LOADING</div>);
        } else {
            // If its done loading the posts, simple return the Child components (Photo & Comments).
            return (
                <div className="single-photo">
                    <Photo post={post} {...this.props} index={index} />
                    <Comments startAddingComment={this.props.startAddingComment} comments={comments} id={id} />
                    {/* <Comments addComment={this.props.addComment} comments={comments} id={id}/> */}
                </div>
            );
        }
    }
}

export default Single;