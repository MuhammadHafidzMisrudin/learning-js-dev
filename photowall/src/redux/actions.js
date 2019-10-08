/// Action creators.

import {database} from '../database/config';

// Update the database first, then dispatch an action creator.
// Whenever submit a post, update the database first, once it's done updating,
// It will dispatch an action creator with dispatch method.
export function startAddingPost(post) {
    return (dispatch) => {

        // Update the database with promise.
        // After update the database, it will dispatch an action that updates the Redux store.
        return database.ref('posts').update({[post.id]: post}).then(() => {
            dispatch(addPost(post));
        });
    }
}

// Add action remove function.
// Return a js object that describes the event that should update the application state.
export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index // index: index
    }
}

// Add action adding post function.
// Return a js object that describes the event that should update the application state.
export function addPost(post) {
    return {
        type: 'ADD_POST',
        post // post: post
    }
}

// Add action adding comments function.
// Takes in arguments of comment and its post id.
export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}