import React, { Component } from 'react';
import Photo from './Photo';

// Create a class component of Single.
// For Single Photo with comment section screen.
class Single extends Component {
    render() {
        const {match, posts} =  this.props;
        console.log("current id: ", this.props.match.params.id);
        const id = Number(match.params.id);
        const post = posts.find((post) => post.id === id);
        console.log("current post id: ", post);
        
        return (
            <div className="single-photo">
                <Photo post={post}/>
            </div>
        );
    }
}

export default Single;