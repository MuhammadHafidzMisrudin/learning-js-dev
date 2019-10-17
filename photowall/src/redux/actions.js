/// Action creators.
import {database} from '../database/config';

// Add action method to update the database first, then dispatch an action creator.
// Whenever submit a post, update the database first, once it's done updating,
// It will dispatch an action creator with dispatch method.
export function startAddingPost(post) {
    return (dispatch) => {

        // Update the database with promise.
        // After update the database, it will dispatch an action that updates the Redux store.
        return database.ref('posts').update({[post.id]: post}).then(() => {

            // Dispatch add post action.
            dispatch(addPost(post));
        }).catch((error) => {

            // Check if update doesnt work and error occurs.
            console.log(error);
        });
    };
}

// Add action method for fetching data posts.
// Method to observe database, grab the data, then invoke the dispatch method to load the data posts onto the Redux store.
// Return a function takes in a dispatch method.
export function startLoadingPost() {
    return (dispatch) => {

        // Access the reference the node posts.
        // Observe database once and return the value.
        // Promise returns the data in the form of snapshot.
        // Snapshot contains all children the node posts.
        return database.ref('posts').once('value').then((snapshot) => {

            let posts = [];

            // Iterate through each child snapshot.
            // Append to an posts array and get the value.
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val());
            });

            // Dispatch load post action.
            dispatch(loadPosts(posts));
        });
    };
}

// Add action method for removing data posts.
export function startRemovingPosts(index, id) {  
    return (dispatch) => {

        // Travel to the node posts.
        // From the node post, access to specific id belonging to the post.
        // Node with specific id will be removed.
        return database.ref(`posts/${id}`).remove().then(() => {

            // If the removal successful, dispatch remove action.
            dispatch(removePost(index));
        });
    }
}

// Add action creator of remove function.
// Return a js object that describes the event that should update the application state.
export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index // index: index
    }
}

// Add action creator of adding post function.
// Return a js object that describes the event that should update the application state.
export function addPost(post) {
    return {
        type: 'ADD_POST',
        post // post: post
    }
}

// Add action creator of adding comments function.
// Pass arguments of comment and its post id.
export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

// Add action creator of load posts function.
// Load the posts onto the Redux store.
// Pass the parameter of the posts that is loaded from the database.
// Return js object.
export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}