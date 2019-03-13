/// Action creators.

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
export function addComment(comment) {
    return {
        type: 'ADD_COMMENT',
        comment
    }
}