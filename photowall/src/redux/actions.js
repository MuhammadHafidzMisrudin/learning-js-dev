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

// Add action method for fetching data posts from the database.
// Method to observe database, grab the data, then invoke the dispatch method to load the data posts onto the Redux store.
// Return a function takes in a dispatch method.
export function startLoadingPost() {
    return (dispatch) => {

        // Access the reference the node posts.
        // Observe database once and return the value.
        // Promise returns the data in the form of snapshot.
        // Snapshot contains all children the node posts.
        return database.ref('posts').once('value').then((snapshot) => {

            // Initialize an array to store each snapshot.
            let posts = [];

            // Iterate through each child snapshot.
            // Append to an array of posts and get the value.
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val());
            });

            // Dispatch load post action.
            dispatch(loadPosts(posts));

        }).catch((error) => {

            // Check if update doesnt work and error occurs.
            console.log(error);
        });
    };
}

// Add action method for removing data posts and comments.
export function startRemovingPost(index, id) { 
    
    /* 
        This specifies the paths to update data to null (basically delete the data).
        It navigates to the post with specific id for deletion when the remove button clicked.
        As well as the comments belonging to that post, with that same id for deletion. 
    */
    const updatesByDelete = {
        [`posts/${id}`]: null,
        [`comments/${id}`]: null
    };

    return (dispatch) => {
        
        /* 
            Travel to the node posts.
            From the node post, access to specific id belonging to the post and the comments.
            Node with specific id will be removed with the post and its comments.
            Modify and update the data to null.
        
            Update the database from its root node, such that it navigates to the posts path.
            As well as the comments path, and sets them to null.
            (In other words, deletes both of them).
            After deleting the post and its comments from the database,
            It updates the UI by dispatching an action to the Redux reducer
        */
        return database.ref().update(updatesByDelete).then(() => {

            // If the removal successful, dispatch remove action.
            dispatch(removePost(index));

        }).catch((error) => {

            // Check if update doesnt work and error occurs.
            console.log(error);
        });
    };

    // return (dispatch) => {

    //     // Travel to the node posts.
    //     // From the node post, access to specific id belonging to the post.
    //     // Node with specific id will be removed.
    //     return database.ref(`posts/${id}`).remove().then(() => {

    //         // If the removal successful, dispatch remove action.
    //         dispatch(removePost(index));

    //     }).catch((error) => {

    //         // Check if update doesnt work and error occurs.
    //         console.log(error);
    //     });
    // };
}

// Add action method for saving comments.
// Params of comment and post id.
// Use the post id to direct to the proper node that displays comment, the comment is saved in the database.
export function startAddingComment(comment, postId) {
    return (dispatch) => {

        // Push comment into the database with specific post id.
        return database.ref('comments/' + postId).push(comment).then(() => {

            // Dispatch the add comment action that updates Redux store with submitted comment.
            dispatch(addComment(comment, postId));

        }).catch((error) => {

            // Check if update doesnt work and error occurs.
            console.log(error);
        });
    };
}

// Add action method for fetching data comments from the database.
// Method to observe database, grab the data, then invoke the dispatch method to load the data comments onto the Redux store.
export function startLoadingComments() {
    return (dispatch) => {

        // Access the reference the node comments.
        // Observe database once and return the value.
        // Promise returns the data in the form of snapshot.
        // Snapshot contains all children the node comments.
        return database.ref('comments').once('value').then((snapshot) => {

            // Initialize an object to store each snapshot.
            let comments = {};

            // Iterate through each child snapshot.
            // Append to an object of comments and get the value.
            snapshot.forEach((childSnapshot) => {

                // Comment object has a specific key of the post id.
                // Post id with comments is set equal to value.
                // Object contains a bunch a key-value pairs.
                comments[childSnapshot.key] = Object.values(childSnapshot.val());
            });

            // Dispatch load comments action.
            dispatch(loadComments(comments));

        }).catch((error) => {

            // Check if update doesnt work and error occurs.
            console.log(error);
        });
    }; 
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

// Add action creator of load comments function.
// Load the comments onto the Redux store.
export function loadComments(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}